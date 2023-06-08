<#macro registrationLayout bodyClass="" displayInfo=false displayMessage=true displayRequiredFields=false>
<!DOCTYPE html>
<html dir="ltr" class="" <#if realm.internationalizationEnabled> lang="${locale.currentLanguageTag}"</#if>>

<head>
    <meta charset="utf-8">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="robots" content="noindex, nofollow">
    <!-- Patternfly Elements no-js fallback styles -->
    <style>
    .pfe-navigation {
        --pfe-navigation__nav-bar--highlight-color: #e00;
        --pfe-navigation__dropdown--highlight-color: #e00;
    }
    </style>
    <!-- unified nav and footer scripts -->
    <script type="module">
    import "${url.resourcesPath}/js/bundle.js";
    await customElements.whenDefined("rh-footer");
    </script>
    <#if properties.meta?has_content>
        <#list properties.meta?split(' ') as meta>
        <meta name="${meta?split('==')[0]}" content="${meta?split('==')[1]}"/>
    </#list>
</#if>
<title>${msg("loginTitle",(realm.displayName!''))}</title>
<link rel="icon" href="${url.resourcesPath}/img/favicon.ico" />
<#if properties.stylesCommon?has_content>
    <#list properties.stylesCommon?split(' ') as style>
        <link href="${url.resourcesCommonPath}/${style}" rel="stylesheet" />
    </#list>
</#if>
<#if properties.styles?has_content>
    <#list properties.styles?split(' ') as style>
        <link href="${url.resourcesPath}/${style}" rel="stylesheet" />
    </#list>
</#if>
<#if properties.scripts?has_content>
    <#list properties.scripts?split(' ') as script>
        <script src="${url.resourcesPath}/${script}" type="text/javascript"></script>
    </#list>
</#if>
<#if scripts??>
    <#list scripts as script>
        <script src="${script}" type="text/javascript"></script>
    </#list>
</#if>
<style>
    rh-footer:not(:defined) {
        opacity: 0;
    }
</style>
</head>
<body id="rh-login" class="home  page">
    <a href="#rh-login-card" class="visually-hidden focusable skip-link">
        Skip to main content
    </a>
    <div class="layout-container">
<pfe-navigation id="pfe-navigation" role="banner">
<nav class="pfe-navigation" aria-label="Main Navigation">
<div class="pfe-navigation__logo-wrapper" id="pfe-navigation__logo-wrapper">
    <a href="#" class="pfe-navigation__logo-link">
        <img class="pfe-navigation__logo-image pfe-navigation__logo-image--screen pfe-navigation__logo-image--print pfe-navigation__logo-image--small" src="${url.resourcesPath}/img/RHLogo_white.svg" width="400" alt="Redhat" />
    </a>
</div>
</nav>
<div slot="secondary-links" class="pfe-navigation__site-switcher">
<button class="pfe-navigation__secondary-link">
    <pfe-icon icon="web-icon-grid-3x3" size="sm" aria-hidden="true"></pfe-icon>
        ${msg("allRedHatTitle")}
</button>
<pfe-navigation-dropdown dropdown-width="full">
<site-switcher lang=' en' class="pf-u-px-xl">
            </site-switcher>
            </pfe-navigation-dropdown>
            </div>
            <#if realm.password && realm.registrationAllowed && !registrationDisabled??>
                <div slot="account">
                    <a href="${url.registrationUrl}">
                        <pfe-icon icon="web-icon-user" pfe-size="md" aria-hidden="true"></pfe-icon>
                        ${msg("registerTitle")}
                    </a>
                </div>
            </#if>
            </pfe-navigation>
            <div class="rhd-mobile-overlay"></div>
            <main id="rh-login-card" role="main">
                <div id="rh-login-container" class="pf-c-login pf-u-pt-3xl">
                    <div <#nested "loginContainerClass">>
                        <div id="rh-login-form" class="pf-c-login__main">
                            <div class="pf-c-login__main-header pf-u-pb-xl" style="column-gap:0">
                                <header class="${properties.kcFormHeaderClass!}">
                                    <#if realm.internationalizationEnabled && locale.supported?size gt 1>
                                        <div class="${properties.kcLocaleMainClass!}" id="kc-locale">
                                            <div id="kc-locale-wrapper" class="${properties.kcLocaleWrapperClass!}">
                                                <div id="kc-locale-dropdown" class="${properties.kcLocaleDropDownClass!}">
                                                    <a href="#" id="kc-current-locale-link">
                                                        ${locale.current}
                                                    </a>
                                                    <ul class="${properties.kcLocaleListClass!}">
                                                        <#list locale.supported as l>
                                                            <li class="${properties.kcLocaleListItemClass!}">
                                                                <a class="${properties.kcLocaleItemClass!}" href="${l.url}">
                                                                    ${l.label}
                                                                </a>
                                                            </li>
                                                        </#list>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </#if>
                                    <#if !(auth?has_content && auth.showUsername() && !auth.showResetCredentials())>
                                        <#if displayRequiredFields>
                                            <div class="${properties.kcContentWrapperClass!}">
                                                <div class="${properties.kcLabelWrapperClass!} subtitle">
                                                    <span class="subtitle"><span class="required">*</span>
                                                        ${msg("requiredFields")}
                                                    </span>
                                                </div>
                                                <div class="col-md-10">
                                                    <h1 id="rh-login-form-title" class="pf-c-title pf-m-3xl pf-c-spacer-2xl">
                                                        <#nested "header">
                                                    </h1>
                                                </div>
                                            </div>
                                            <#else>
                                                <h1 id="rh-login-form-title" class="pf-c-title pf-m-3xl pf-c-spacer-2xl">
                                                    <#nested "header">
                                                </h1>
                                        </#if>
                                        <#else>
                                            <#if displayRequiredFields>
                                                <div class="${properties.kcContentWrapperClass!}">
                                                    <div class="${properties.kcLabelWrapperClass!} subtitle">
                                                        <span class="subtitle"><span class="required">*</span>
                                                            ${msg("requiredFields")}
                                                        </span>
                                                    </div>
                                                    <div class="col-md-10">
                                                        <#nested "show-username">
                                                            <div id="kc-username" class="${properties.kcFormGroupClass!}">
                                                                <label id="kc-attempted-username">
                                                                    ${auth.attemptedUsername}
                                                                </label>
                                                                <a id="reset-login" href="${url.loginRestartFlowUrl}" aria-label="${msg("restartLoginTooltip")}">
                                                                    <div class="kc-login-tooltip">
                                                                        <i class="${properties.kcResetFlowIcon!}"></i>
                                                                        <span class="kc-tooltip-text">
                                                                            ${msg("restartLoginTooltip")}
                                                                        </span>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                    </div>
                                                </div>
                                                <#else>
                                                    <#nested "show-username">
                                                        <div id="kc-username" class="${properties.kcFormGroupClass!}">
                                                            <label id="kc-attempted-username">
                                                                ${auth.attemptedUsername}
                                                            </label>
                                                            <a id="reset-login" href="${url.loginRestartFlowUrl}" aria-label="${msg("restartLoginTooltip")}">
                                                                <div class="kc-login-tooltip">
                                                                    <i class="${properties.kcResetFlowIcon!}"></i>
                                                                    <span class="kc-tooltip-text">
                                                                        ${msg("restartLoginTooltip")}
                                                                    </span>
                                                                </div>
                                                            </a>
                                                        </div>
                                            </#if>
                                    </#if>
                                </header>
                            </div>
                            <div id="login-container" class="pf-c-login__main-body pf-u-pb-0">
                                <div id="rh-login-form-alert" class="pf-c-alert pf-m-inline pf-m-danger pf-u-mb-lg pf-u-display-none" aria-label="Danger Alert" data-ouia-component-type="PF4/Alert" data-ouia-safe="true" data-ouia-component-id="OUIA-Generated-Alert-danger-1" aria-live="polite" data-multiple-logins-title="Email address associated with multiple logins" data-multiple-logins-body="To access your account, use your login instead." data-access-denied-title="Access Denied" data-access-denied-body="The login information was not recognized. Please refresh your browser and try again, or try with a different device.">
                                    <div class="pf-c-alert__icon">
                                        <i class="fas fa-fw fa-exclamation-circle" aria-hidden="true"></i>
                                    </div>
                                    <div id="rh-login-form-error-body" class="pf-c-alert__description">
                                    </div>
                                </div>
                                <div id="rh-login-body-wrapper">
                                    <div id="rh-login-slide-in-container" class="slide-in-container pf-u-mb-xl">
                                        <section id="rh-username-verification" class="rh-slide-in show">
                                            <#-- App-initiated actions should not see warning messages about the need to complete the action -->
                                                <#-- during login. -->
                                                    <#if displayMessage && message?has_content && (message.type !='warning' || !isAppInitiatedAction??)>
                                                        <div class="alert-${message.type} ${properties.kcAlertClass!} pf-m-<#if message.type = 'error'>danger<#else>
${message.type}
</#if>">
                                                            <div class="pf-c-alert__icon">
                                                                <#if message.type='success'><span class="${properties.kcFeedbackSuccessIcon!}"></span></#if>
                                                                <#if message.type='warning'><span class="${properties.kcFeedbackWarningIcon!}"></span></#if>
                                                                <#if message.type='error'><span class="${properties.kcFeedbackErrorIcon!}"></span></#if>
                                                                <#if message.type='info'><span class="${properties.kcFeedbackInfoIcon!}"></span></#if>
                                                            </div>
                                                            <span class="${properties.kcAlertTitleClass!}">
                                                                ${kcSanitize(message.summary)?no_esc}
                                                            </span>
                                                        </div>
                                                    </#if>
                                                    <#nested "form">
                                                        <#if auth?has_content && auth.showTryAnotherWayLink()>
                                                            <form id="kc-select-try-another-way-form" action="${url.loginAction}" method="post">
                                                                <div class="${properties.kcFormGroupClass!}">
                                                                    <input type="hidden" name="tryAnotherWay" value="on" />
                                                                    <a href="#" id="try-another-way"
                                                                        onclick="document.forms['kc-select-try-another-way-form'].submit();return false;">
                                                                        ${msg("doTryAnotherWay")}
                                                                    </a>
                                                                </div>
                                                            </form>
                                                        </#if>
                                                        <#nested "socialProviders">
                                                            <#if displayInfo>
                                                                <div id="kc-info" class="${properties.kcSignUpClass!}">
                                                                    <div id="kc-info-wrapper" class="${properties.kcInfoAreaWrapperClass!}">
                                                                        <#nested "info">
                                                                    </div>
                                                                </div>
                                                            </#if>
                                        </section>
                                    </div>
                                </div>
                            </div>
                            <#nested "loginContainerFooter">
                        </div>
                        <#nested "loginFooter">
                    </div>
                </div>
            </main>
            <rh-footer data-analytics-region="page-footer">
                <a slot="logo" href="https://redhat.com/en" data-analytics-category="Footer" data-analytics-text="Logo">
                    <img alt="Red Hat logo" src="https://static.redhat.com/libs/redhat/brand-assets/2/corp/logo--on-dark.svg" loading="lazy" />
                </a>
                <rh-footer-social-link slot="social-links" icon="web-icon-linkedin"><a href="https://www.linkedin.com/company/red-hat" data-analytics-region="social-links-exit" data-analytics-category="Footer|social-links" data-analytics-text="LinkedIn">LinkedIn</a></rh-footer-social-link>
                <rh-footer-social-link slot="social-links" icon="web-icon-youtube"><a href="https://www.youtube.com/user/RedHatVideos" data-analytics-region="social-links-exit" data-analytics-category="Footer|social-links" data-analytics-text="YouTube">YouTube</a></rh-footer-social-link>
                <rh-footer-social-link slot="social-links" icon="web-icon-facebook"><a href="https://www.facebook.com/redhatinc" data-analytics-region="social-links-exit" data-analytics-category="Footer|social-links" data-analytics-text="Facebook">Facebook</a></rh-footer-social-link>
                <rh-footer-social-link slot="social-links" icon="web-icon-twitter"><a href="https://twitter.com/RedHat" data-analytics-region="social-links-exit" data-analytics-category="Footer|social-links" data-analytics-text="Twitter">Twitter</a></rh-footer-social-link>
                <h3 slot="links" data-analytics-text="Products">Products</h3>
                <ul slot="links">
                    <li><a href="https://redhat.com/en/technologies/linux-platforms/enterprise-linux" data-analytics-category="Footer|Products" data-analytics-text="Red Hat Enterprise Linux">Red Hat Enterprise Linux</a></li>
                    <li><a href="https://redhat.com/en/technologies/cloud-computing/openshift" data-analytics-category="Footer|Products" data-analytics-text="Red Hat OpenShift">Red Hat OpenShift</a></li>
                    <li><a href="https://redhat.com/en/technologies/management/ansible" data-analytics-category="Footer|Products" data-analytics-text="Red Hat Ansible Automation Platform">Red Hat Ansible Automation Platform</a></li>
                    <li><a href="https://redhat.com/en/technologies/cloud-computing/openshift/cloud-services" data-analytics-category="Footer|Products" data-analytics-text="Cloud services">Cloud services</a></li>
                    <li><a href="https://redhat.com/en/technologies/all-products" data-analytics-category="Footer|Products" data-analytics-text="See all products">See all products</a></li>
                </ul>
                <h3 slot="links" data-analytics-text="Tools">Tools</h3>
                <ul slot="links">
                    <li><a href="https://sso.redhat.com" data-analytics-category="Footer|Tools" data-analytics-text="My account">My account</a></li>
                    <li><a href="https://cloud.redhat.com/" data-analytics-category="Footer|Tools" data-analytics-text="Console">Console</a></li>
                    <li><a href="https://access.redhat.com" data-analytics-category="Footer|Tools" data-analytics-text="Customer support">Customer support</a></li>
                    <li><a href="https://connect.redhat.com/" data-analytics-category="Footer|Tools" data-analytics-text="Partner resources">Partner resources</a></li>
                    <li><a href="https://developers.redhat.com/" data-analytics-category="Footer|Tools" data-analytics-text="Developer resources">Developer resources</a></li>
                    <li><a href="https://redhat.com/en/services/training-and-certification" data-analytics-category="Footer|Tools" data-analytics-text="Training and certification">Training and certification</a></li>
                    <li><a href="https://learn.redhat.com/" data-analytics-category="Footer|Tools" data-analytics-text="Learning community">Learning community</a></li>
                    <li><a href="https://catalog.redhat.com/" data-analytics-category="Footer|Tools" data-analytics-text="Red Hat Ecosystem Catalog">Red Hat Ecosystem Catalog</a></li>
                    <li><a href="https://redhat.com/en/resources" data-analytics-category="Footer|Tools" data-analytics-text="Resource library">Resource library</a></li>
                </ul>
                <h3 slot="links" data-analytics-text="Try buy sell">Try, buy, sell</h3>
                <ul slot="links">
                    <li><a href="https://redhat.com/en/products/trials" data-analytics-category="Footer|Try buy sell" data-analytics-text="Product trial center">Product trial center</a></li>
                    <li><a href="https://www.redhat.com/en/store" data-analytics-category="Footer|Try buy sell" data-analytics-text="Red Hat Store">Red Hat Store</a></li>
                    <li><a href="https://marketplace.redhat.com" data-analytics-category="Footer|Try buy sell" data-analytics-text="Red Hat Marketplace">Red Hat Marketplace</a></li>
                    <li><a href="http://redhat.force.com/finder/" data-analytics-category="Footer|Try buy sell" data-analytics-text="Find a partner">Find a partner</a></li>
                </ul>
                <h3 slot="links" data-analytics-text="Communicate">Communicate</h3>
                <ul slot="links">
                    <li><a href="https://redhat.com/en/services/consulting-overview#contact-us" data-analytics-category="Footer|Communicate" data-analytics-text="Contact consulting">Contact consulting</a></li>
                    <li><a href="https://redhat.com/en/contact" data-analytics-category="Footer|Communicate" data-analytics-text="Contact sales">Contact sales</a></li>
                    <li><a href="https://redhat.com/en/services/training-and-certification/contact-us" data-analytics-category="Footer|Communicate" data-analytics-text="Contact training">Contact training</a></li>
                    <li><a href="https://redhat.com/en/about/social" data-analytics-category="Footer|Communicate" data-analytics-text="Social">Social</a></li>
                </ul>
                <rh-footer-block slot="main-secondary">
                    <h3 slot="header" data-analytics-text="About Red Hat">About Red Hat</h3>
                    <p> We’re the world’s leading provider of enterprise open source solutions—including Linux, cloud, container, and Kubernetes. We deliver hardened solutions that make it easier for enterprises to work across platforms and environments, from the core datacenter to the network edge.</p>
                </rh-footer-block>
                <rh-footer-block slot="main-secondary">
                    <h3 slot="header" data-analytics-text="Subscribe to our newsletter Red Hat Shares">Subscribe to our newsletter, Red Hat Shares</h3>
                    <rh-cta><a href="https://www.redhat.com/en/email-preferences?newsletter=RH-Shares&intcmp=7016000000154xCAAQ" data-analytics-category="Footer|About Red Hat" data-analytics-text="Sign up now">Sign up now</a></rh-cta>
                </rh-footer-block>
                <!-- Global Footer -->
                <rh-global-footer slot="global">
                    <h3 slot="links-primary" data-analytics-text="Red Hat legal and privacy links" hidden>Red Hat legal and privacy links</h3>
                    <ul slot="links-primary" data-analytics-region="page-footer-bottom-primary">
                        <li><a href="https://redhat.com/en/about/company" data-analytics-category="Footer|Corporate" data-analytics-text="About Red Hat">About Red Hat</a></li>
                        <li><a href="https://redhat.com/en/jobs" data-analytics-category="Footer|Corporate" data-analytics-text="Jobs">Jobs</a></li>
                        <li><a href="https://redhat.com/en/events" data-analytics-category="Footer|Corporate" data-analytics-text="Events">Events</a></li>
                        <li><a href="https://redhat.com/en/about/office-locations" data-analytics-category="Footer|Corporate" data-analytics-text="Locations">Locations</a></li>
                        <li><a href="https://redhat.com/en/contact" data-analytics-category="Footer|Corporate" data-analytics-text="Contact Red Hat">Contact Red Hat</a></li>
                        <li><a href="https://redhat.com/en/blog" data-analytics-category="Footer|Corporate" data-analytics-text="Red Hat Blog">Red Hat Blog</a></li>
                        <li><a href="https://redhat.com/en/about/our-culture/diversity-equity-inclusion/statement" data-analytics-category="Footer|Corporate" data-analytics-text="Diversity equity and inclusion">Diversity, equity, and inclusion</a></li>
                        <li><a href="https://coolstuff.redhat.com/" data-analytics-category="Footer|Corporate" data-analytics-text="Cool Stuff Store">Cool Stuff Store</a></li>
                        <li><a href="https://www.redhat.com/en/summit" data-analytics-category="Footer|Corporate" data-analytics-text="Red Hat Summit">Red Hat Summit</a></li>
                    </ul>
                    <rh-footer-copyright slot="links-secondary">© 2022 Red Hat, Inc.</rh-footer-copyright>
                    <h3 slot="links-secondary" data-analytics-text="Red Hat legal and privacy links" hidden>Red Hat legal and privacy links</h3>
                    <ul slot="links-secondary" data-analytics-region="page-footer-bottom-secondary">
                        <li><a href="https://redhat.com/en/about/privacy-policy" data-analytics-category="Footer|Red Hat legal and privacy links" data-analytics-text="Privacy statement">Privacy statement</a></li>
                        <li><a href="https://redhat.com/en/about/terms-use" data-analytics-category="Footer|Red Hat legal and privacy links" data-analytics-text="Terms of use">Terms of use</a></li>
                        <li><a href="https://redhat.com/en/about/all-policies-guidelines" data-analytics-category="Footer|Red Hat legal and privacy links" data-analytics-text="All policies and guidelines">All policies and guidelines</a></li>
                        <li><a href="https://redhat.com/en/about/digital-accessibility" data-analytics-category="Footer|Red Hat legal and privacy links" data-analytics-text="Digital accessibility" class="active">Digital accessibility</a></li>
                        <li><span id="teconsent"> </span></li>
                    </ul>
                </rh-global-footer>
            </rh-footer>
            <div id="consent_blackbar"></div>
            </div>
            <div class="pf-c-backdrop" id="addressModal" style="display:none" data-you-entered="You entered" data-suggested-addresses="Suggested addresses" data-suggested-address="Suggested address">
                <div class="pf-l-bullseye">
                    <div class="pf-c-modal-box pf-m-sm" role="dialog" aria-modal="true" aria-labelledby="modal-title" aria-describedby="modal-description">
                        <button class="pf-c-button pf-m-plain" type="button" aria-label="Close dialog">
                            <i class="fas fa-times" aria-hidden="true"></i>
                        </button>
                        <header class="pf-c-modal-box__header">
                            <h1 class="pf-c-modal-box__title" id="modal-title">Address Validation</h1>
                        </header>
                        <div class="pf-c-modal-box__body" id="modal-description"></div>
                        <footer class="pf-c-modal-box__footer">
                            <button class="pf-c-button pf-m-primary" id="addressAcceptChange" type="button">Accept change</button>
                            <button class="pf-c-button pf-m-secondary" id="addressKeepEnteredAddress" type="button">Keep entered address</button>
                        </footer>
                    </div>
                </div>
            </div>
            <script>
            initHeaderDropdown();
            initMobileMenu();

            function loadHighlightStyle() {
                var root = document.documentElement;
                root.style.setProperty('--pfe-navigation__nav-bar--highlight-color', '#e00');
                root.style.setProperty('--pfe-navigation__dropdown--highlight-color', '#e00');
            }
            window.addEventListener("load", loadHighlightStyle);
            </script>
            <script type="text/javascript">
            if (("undefined" !== typeof _satellite) && ("function" === typeof _satellite.pageBottom)) {
                _satellite.pageBottom();
            }
            $().ready(new function() {
                sendAsyncUDEvent();
            });
            </script>
</body>

</html>
</#macro>