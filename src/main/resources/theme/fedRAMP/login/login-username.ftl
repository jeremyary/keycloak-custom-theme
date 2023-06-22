<#import "template.ftl" as layout>
<@layout.registrationLayout displayMessage=!messagesPerField.existsError('username') displayInfo=(realm.password && realm.registrationAllowed && !registrationDisabled??); section>
    <#if section = "header">
        ${msg("loginAccountTitle")}
    <#elseif section = "form">
        <div id="kc-form">
            <div id="kc-form-wrapper">
                <#if realm.password>
                    <form id="kc-form-login" onsubmit="login.disabled = true; return true;" action="${url.loginAction}"
                          method="post">
                        <#if !usernameHidden??>
                            <div class="${properties.kcFormGroupClass!}">
                                <label for="username"
                                       class="${properties.kcLabelClass!}"><#if !realm.loginWithEmailAllowed>${msg("username")}<#elseif !realm.registrationEmailAsUsername>${msg("usernameOrEmail")}<#else>${msg("email")}</#if></label>

                                <input tabindex="1" id="username"
                                       aria-invalid="<#if messagesPerField.existsError('username')>true</#if>"
                                       class="${properties.kcInputClass!}" name="username"
                                       value="${(login.username!'')}"
                                       type="text" autofocus autocomplete="off"/>

                                <#if messagesPerField.existsError('username')>
                                    <span id="input-error-username" class="${properties.kcInputErrorMessageClass!}" aria-live="polite">
                                        ${kcSanitize(messagesPerField.get('username'))?no_esc}
                                    </span>
                                </#if>
                            </div>
                        </#if>

                        <div class="${properties.kcFormGroupClass!} ${properties.kcFormSettingClass!}">
                            <div id="kc-form-options">
                                <#if realm.rememberMe && !usernameHidden??>
                                    <div class="checkbox">
                                        <label>
                                            <#if login.rememberMe??>
                                                <input tabindex="3" id="rememberMe" name="rememberMe" type="checkbox"
                                                       checked> ${msg("rememberMe")}
                                            <#else>
                                                <input tabindex="3" id="rememberMe" name="rememberMe"
                                                       type="checkbox"> ${msg("rememberMe")}
                                            </#if>
                                        </label>
                                    </div>
                                </#if>
                            </div>
                        </div>

                        <div id="kc-form-buttons" class="${properties.kcFormGroupClass!}">
                            <input tabindex="4"
                                   class="${properties.kcButtonClass!} ${properties.kcButtonPrimaryClass!} ${properties.kcButtonBlockClass!} ${properties.kcButtonLargeClass!}"
                                   name="login" id="kc-login" type="submit" value="${msg("doLogIn")}"/>
                        </div>
                    </form>
                </#if>
            </div>
        </div>

    <#elseif section = "info" >
    <#elseif section = "socialProviders" >
        <#if realm.password && social.providers??>
            <div id="kc-social-providers" class="${properties.kcFormSocialAccountSectionClass!}">
                <hr/>
                <h4>${msg("identity-provider-login-label")}</h4>

                <ul class="${properties.kcFormSocialAccountListClass!} <#if social.providers?size gt 3>${properties.kcFormSocialAccountListGridClass!}</#if>">
                    <#list social.providers as p>
                        <a id="social-${p.alias}" class="${properties.kcFormSocialAccountListButtonClass!} <#if social.providers?size gt 3>${properties.kcFormSocialAccountGridItem!}</#if>"
                                type="button" href="${p.loginUrl}">
                            <#if p.iconClasses?has_content>
                                <i class="${properties.kcCommonLogoIdP!} ${p.iconClasses!}" aria-hidden="true"></i>
                                <span class="${properties.kcFormSocialAccountNameClass!} kc-social-icon-text">${p.displayName!}</span>
                            <#else>
                                <span class="${properties.kcFormSocialAccountNameClass!}">${p.displayName!}</span>
                            </#if>
                        </a>
                    </#list>
                </ul>
            </div>
        </#if>
    <#elseif section = "loginContainerFooter" >
         <#if (realm.password && realm.registrationAllowed && !registrationDisabled??) || realm.resetPasswordAllowed>
            <div class="pf-c-login__main-footer">
                <div class="pf-c-login__main-footer-band">
                <#if realm.password && realm.registrationAllowed && !registrationDisabled??>
                    <a id="rh-login-registration-link" href="${url.registrationUrl}">
                        <button class="pf-c-button pf-m-link pf-m-inline pf-m-display-lg" id="rh-registration-link" type="button">${msg("doRegister")}
                            <span class="pf-c-button__icon pf-m-end">
                                <i class="fas fa-arrow-right" aria-hidden="true"></i>
                            </span>
                        </button>
                    </a>
                 </#if>
                 <#if realm.resetPasswordAllowed>
                    <p class="pf-c-login__main-footer-band-item">
                        <a tabindex="5" href="${url.loginResetCredentialsUrl}">${msg("doForgotPassword")}</a>
                    </p>
                </#if>
                </div>
            </div>
        </#if>
    <#elseif section = "loginContainerClass">
        class="pf-c-login__container"
    <#elseif section = "loginFooter" >
        <div class="pf-c-login__footer">
            <div id="rh-logo-container">
                <img id="rh-logo" class="pf-c-brand" alt="Red Hat Logo" src="${url.resourcesPath}/img/RHLogo_white.svg">
            </div>
            <p class="pf-u-font-size-md">
                <font size="-1">You are accessing a U.S. Government (USG) Information System (IS)
                    that is provided for USG-authorized use only., By using this IS (which includes any device attached to this IS),
                    you consent to the following conditions:,<br> -The USG routinely intercepts and monitors communications on this
                    IS for purposes including, but not limited to, penetration testing, COMSEC monitoring, network operations and
                    defense, personnel misconduct (PM), law enforcement (LE), and counterintelligence (CI) investigations.,
                    <br>-At any time, the USG may inspect and seize data stored on this IS., <br>-Communications using, or data
                    stored on, this IS are not private, are subject to routine monitoring, interception, and search,
                    and may be disclosed or used for any USG-authorized purpose., <br>-This IS includes security measures
                    (e.g., authentication and access controls) to protect USG interests--not for your personal benefit or privacy.,
                    <br>-Notwithstanding the above, using this IS does not constitute consent to PM, LE or CI investigative
                    searching or monitoring of the content of privileged communications, or work product, related to personal
                    representation or services by attorneys, psychotherapists, or clergy, and their assistants.
                    Such communications and work product are private and confidential.
                </font>
            </p>
        </div>
    </#if>

</@layout.registrationLayout>
