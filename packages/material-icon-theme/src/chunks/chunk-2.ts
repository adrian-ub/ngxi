import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeUmlIcon],svg[material-icon-theme-uml-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#b39ddb" d="M87 76.652L53.84 93.907l-.038-41.04l13.9-7.15v29.622l19.224-9.85z"></svg:path><svg:path fill="#fbc02d" d="m38.693 89.604l8.576 4.303V52.743l-13.027-6.29l-4.126 19.643l-4.16-23.69L13 36.077V77.28l8.54 4.378V56.826l4.669 26.817l7.599 3.863l4.885-22.293z"></svg:path><svg:path fill="#f06292" d="m45.237 6.093l-9.775 8.755s19.072 9.931 21.39 11.105c2.317 1.173 5.615 3.43 2.05 6.771s-7.487 2.89-10.16 1.535a21830 21830 0 0 1-22.458-11.466l-10.07 8.667S35.642 41.48 38.85 43.196c3.208 1.715 15.15 5.958 26.47-2.98c11.318-8.937 9.714-12.188 9.714-12.82s-.267-3.972-2.228-6.048c-1.96-2.077-7.664-5.056-10.07-6.32S45.239 6.092 45.239 6.092z"></svg:path>`,
})
export class MaterialIconThemeUmlIcon {
  readonly viewBox = input("0 0 100 100")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeUmlLightIcon],svg[material-icon-theme-uml-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#9575cd" d="M67.702 45.716V75.34l19.224-9.85L87 76.653L53.84 93.907l-.038-41.04z"></svg:path><svg:path fill="#f9a825" d="m30.116 66.096l-4.16-23.69L13 36.077V77.28l8.54 4.378V56.826l4.669 26.817l7.599 3.863l4.885-22.293v24.391l8.576 4.303V52.743l-13.027-6.29z"></svg:path><svg:path fill="#ec407a" d="m45.237 6.093l-9.775 8.755s19.072 9.931 21.39 11.105c2.317 1.174 5.615 3.43 2.05 6.772c-3.565 3.34-7.487 2.889-10.16 1.535a21830 21830 0 0 1-22.458-11.468l-10.07 8.667S35.641 41.482 38.85 43.196c3.208 1.716 15.15 5.959 26.47-2.979c11.318-8.938 9.714-12.188 9.714-12.82s-.267-3.972-2.228-6.049c-1.96-2.076-7.664-5.056-10.07-6.32S45.239 6.093 45.239 6.093z"></svg:path>`,
})
export class MaterialIconThemeUmlLightIcon {
  readonly viewBox = input("0 0 100 100")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeUnityIcon],svg[material-icon-theme-unity-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#42a5f5" d="M8 6.5L5 5l2-1V2L2 5v5l2-1V6.5L7 8v4.5L4 11l-2 1l6 3l6-3l-2-1l-3 1.5V8l3-1.5V9l2 1V5L9 2v2l2 1Z"></svg:path>`,
})
export class MaterialIconThemeUnityIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeUnocssIcon],svg[material-icon-theme-unocss-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="6" fill="#78909c"></svg:circle><svg:path fill="#546e7a" d="M2 18v6a6 6 0 0 0 12 0v-6Z"></svg:path><svg:path fill="#b0bec5" d="M30 14V8a6 6 0 0 0-12 0v6Z"></svg:path>`,
})
export class MaterialIconThemeUnocssIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeUrlIcon],svg[material-icon-theme-url-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#42a5f5" d="M10 14h12v4H10z"></svg:path><svg:path fill="#42a5f5" d="M12 22H9.562A5.57 5.57 0 0 1 4 16.438v-.876A5.57 5.57 0 0 1 9.562 10H12V6H9.562A9.56 9.56 0 0 0 0 15.562v.876A9.56 9.56 0 0 0 9.562 26H12ZM22.438 6H20v4h2.438A5.57 5.57 0 0 1 28 15.562v.876A5.57 5.57 0 0 1 22.438 22H20v4h2.438A9.56 9.56 0 0 0 32 16.438v-.876A9.56 9.56 0 0 0 22.438 6"></svg:path>`,
})
export class MaterialIconThemeUrlIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeUvIcon],svg[material-icon-theme-uv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#E040FB" d="M2 2v11c0 .5.5 1 1 1h8c.5 0 1-.5 1-1h1v1h1V2H8v8H7V2z"></svg:path>`,
})
export class MaterialIconThemeUvIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeVagrantIcon],svg[material-icon-theme-vagrant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#1565c0" d="m70.315 132.051l23.269-13.42l36.445-89.24V18.084l-27.142 15.791v9.539L81.16 90.26l-10.846 7.494zM59.449 92.32l10.866-5.365V73.322L54.028 35.326v-10.75l-.112-.064l-16.174 9.362v9.539z"></svg:path><svg:path fill="#2979ff" d="M86.597 24.463v10.862L70.312 73.32v12.697l-10.862 6.3l-21.708-48.904V33.86l16.285-9.38L26.88 8.577l-16.286 9.506v11.644l36.654 89.018l23.064 13.302V98.615l10.847-6.3l-.128-.08l21.852-48.824v-9.554l27.148-15.775l-16.286-9.507l-27.131 15.886z"></svg:path>`,
})
export class MaterialIconThemeVagrantIcon {
  readonly viewBox = input("0 0 140.625 140.625")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeValaIcon],svg[material-icon-theme-vala-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="materialIconThemeVala0" x1="25.058" x2="25.058" y1="47.028" y2="39.999" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#212121" stop-opacity="0"></svg:stop><svg:stop offset=".5" stop-color="#212121"></svg:stop><svg:stop offset="1" stop-color="#212121" stop-opacity="0"></svg:stop></svg:lineargradient><svg:lineargradient id="materialIconThemeVala1" x1="24" x2="24" y1="5" y2="43" gradientTransform="matrix(1.4324 0 0 1.4363 134.03 -5.86)" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#FAFAFA"></svg:stop><svg:stop offset=".063" stop-color="#FAFAFA" stop-opacity=".235"></svg:stop><svg:stop offset=".951" stop-color="#FAFAFA" stop-opacity=".157"></svg:stop><svg:stop offset="1" stop-color="#FAFAFA" stop-opacity=".392"></svg:stop></svg:lineargradient><svg:lineargradient id="materialIconThemeVala2" x1="31.293" x2="31.293" y1="5.008" y2="59.329" gradientTransform="translate(136.41 -3.39)" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#BA68C8"></svg:stop><svg:stop offset="1" stop-color="#673AB7"></svg:stop></svg:lineargradient><svg:radialgradient id="materialIconThemeVala3" cx="4.993" cy="43.5" r="2.5" gradientTransform="matrix(2.0038 0 0 1.4 27.988 -17.4)" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#212121"></svg:stop><svg:stop offset="1" stop-color="#212121" stop-opacity="0"></svg:stop></svg:radialgradient><svg:radialgradient id="materialIconThemeVala4" cx="4.993" cy="43.5" r="2.5" gradientTransform="matrix(2.0038 0 0 1.4 -20.012 -104.4)" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#212121"></svg:stop><svg:stop offset="1" stop-color="#212121" stop-opacity="0"></svg:stop></svg:radialgradient></svg:defs><svg:g opacity=".6"><svg:path fill="url(#materialIconThemeVala3)" d="M38 40h5v7h-5z" transform="matrix(1.579 0 0 .71429 130.515 24.54)"></svg:path><svg:path fill="url(#materialIconThemeVala4)" d="M-10-47h5v7h-5z" transform="matrix(-1.579 0 0 -.71429 130.515 24.54)"></svg:path><svg:path fill="url(#materialIconThemeVala0)" d="M10 40h28v7H10z" transform="matrix(1.579 0 0 .71429 130.515 24.54)"></svg:path></svg:g><svg:rect width="55" height="55" x="140.91" y="1.11" fill="url(#materialIconThemeVala2)" rx="3" ry="3"></svg:rect><svg:rect width="53" height="53.142" x="141.91" y="2.039" stroke="url(#materialIconThemeVala1)" stroke-linecap="round" stroke-linejoin="round" opacity=".3" rx="2" ry="2"></svg:rect><svg:rect width="55" height="55" x="140.91" y="1.11" stroke="#4A148C" stroke-linecap="round" stroke-linejoin="round" opacity=".5" rx="3" ry="3"></svg:rect><svg:path fill="#9575cd" d="m26.357 57.882l-1.111-47.15q-4.854 1.82-7.583 5.694q-2.698 3.877-2.698 9.64q0 1.314.136 2.157q.167.809.336 1.314q.169.472.305.742q.167.27.167.472q-1.786 0-3.167-.336q-1.383-.372-2.327-1.147q-.91-.773-1.415-2.055q-.473-1.28-.473-3.167q0-2.292.976-4.516q1.011-2.223 2.73-4.213q1.753-1.987 4.08-3.673q2.36-1.685 5.021-2.899q2.695-1.247 5.594-1.92q2.932-.71 5.831-.71q.775 0 1.416.034q.673.033 1.346.1l.608 42.465L50.654 6.45h4.819L36.298 57.883h-9.943z"></svg:path>`,
})
export class MaterialIconThemeValaIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeVedicIcon],svg[material-icon-theme-vedic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ff3d00" d="M90.457 353.95c-38.66-13.815-66.73-48.192-77.845-95.332c-5.044-21.395-6.47-56.748-2.288-56.748c1.389 0 5.1 9.7 8.245 21.557c6.884 25.945 18.625 50.342 29.967 62.267c18.839 19.808 65.5 27.566 92.385 15.36c20.943-9.509 29.436-32.108 20.329-54.095c-7.038-16.99-23.003-22.67-52.742-18.767c0 0-18.225-19.618-24.032-54.457l18.681 1.694c22.5 2.04 39.488-2.933 48.305-14.142c8.286-10.533 8.107-14.607-1.114-25.325c-13.304-15.468-37.193-11.55-85.561 14.033l-24.405-40.91l10.231-7.804c25.64-19.557 70.16-29.334 95.497-20.972c23.078 7.617 40.017 37.839 35.492 63.324c-3.059 17.23-16.874 41.362-27.548 48.12l-9.205 5.829l12.715 5.733c21.606 9.743 34.797 2.295 50.556-28.547c21.81-42.681 35.954-53.73 68.847-53.777c15.315-.023 20.766 1.584 31.936 9.412c27.88 19.537 43.06 59.994 39.725 105.87c-4.223 58.101-31.744 93.343-72.894 93.343c-22.583 0-37.14-7.92-48.727-26.514c-10.177-16.333-14.764-48.68-8.919-62.908c2.804-6.827 3.31-7.058 3.494-1.597c.337 10.04 11.76 26.358 22.246 31.781c25.73 13.306 62.667-3.411 77.28-34.975c11.095-23.964 5.143-70.186-10.087-78.337c-3.186-1.706-11.06-3.101-17.497-3.101c-13.682 0-24.427 9.837-39.491 36.153c-5.209 9.098-13.974 20.854-19.478 26.123c-8.944 8.562-12.137 9.581-30.024 9.581h-20.017l6.47 14.372c9.261 20.57 8.823 53.993-.974 74.34c-8.657 17.979-28.674 36.18-44.676 40.626c-15.578 4.328-40.946 3.768-54.877-1.21m75.377-278.026c-8.855-15.11-14.304-43.318-8.369-43.318c6.973 15.126 21.265 28.621 36.57 38.037c27.486 13.306 55.358 7.936 85.807-16.535c6.704-5.387 12.64-9.195 13.192-8.462c7.436 11.538 20.297 20.967 24.548 34.375c0 5.658-24.353 21.94-43.57 29.13c-47.63 13.72-80.046 8.292-108.178-33.227m24.002-34.927l31.01-34.383l34.46 31.9c-11.787 9.709-20.296 24.775-33.762 32.416c-10.64-7.844-26.52-17.092-31.708-29.933" class="colorff4500 svgShape"></svg:path>`,
})
export class MaterialIconThemeVedicIcon {
  readonly viewBox = input("0 -15 356 400")
  readonly width = input("0.89em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeVeliteIcon],svg[material-icon-theme-velite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#43a047" d="m5.767 7.155l.918 2.46L5 13L1 3.014c.444 0 .866.107 1.267.221c1.433.408 2.594 1.594 3.5 3.92"></svg:path><svg:path fill="#26a69a" d="M15 3.014c-1.357-.423-2.581.024-3.602.943L6.75 8.285C4.833 10.077 3.69 9.871 3 8l2 5z"></svg:path></svg:g>`,
})
export class MaterialIconThemeVeliteIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeVelocityIcon],svg[material-icon-theme-velocity-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#0288d1" d="M150 61.553A88.446 88.446 0 0 0 61.553 150A88.446 88.446 0 0 0 150 238.446A88.446 88.446 0 0 0 238.446 150A88.446 88.446 0 0 0 150 61.553m.011 25.082a63.353 63.353 0 0 1 63.353 63.353a63.353 63.353 0 0 1-63.353 63.353a63.353 63.353 0 0 1-63.353-63.353a63.353 63.353 0 0 1 63.353-63.353" paint-order="fill markers stroke"></svg:path><svg:path fill="#0288d1" d="M45.008 193.096L12.213 225.89l32.795 32.795V238.44h104.99v-25.098H45.008zM74.088 12.21L41.293 45.006h20.246v104.99h25.098V45.007h20.246zm180.901 29.093V61.55h-104.99v25.097h104.99v20.246L287.784 74.1zM213.32 149.998V254.99h-20.245l32.794 32.795l32.795-32.795h-20.246V150z"></svg:path>`,
})
export class MaterialIconThemeVelocityIcon {
  readonly viewBox = input("0 0 300 300")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeVercelIcon],svg[material-icon-theme-vercel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#cfd8dc" d="m16 6l12 20H4Z"></svg:path>`,
})
export class MaterialIconThemeVercelIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeVercelLightIcon],svg[material-icon-theme-vercel-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#455a64" d="m16 6l12 20H4Z"></svg:path>`,
})
export class MaterialIconThemeVercelLightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeVerdaccioIcon],svg[material-icon-theme-verdaccio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#00897b" d="M18.2 10.237h-4.448l-1.827 3.654l-4.812-9.624H2.665l7.96 15.92h2.6z" clip-rule="evenodd"></svg:path><svg:path fill="#e57373" d="M14.845 3.813v.7h1.767l-.416.825h-2.773v.7h2.42l-.546 1.085h-3.264v.7h3.526l3.766.017l2.01-4.018l-1.1-.003v-.006z"></svg:path>`,
})
export class MaterialIconThemeVerdaccioIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeVerifiedIcon],svg[material-icon-theme-verified-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#8bc34a" d="M9 3L8 6H4l1 4l-3 2l3 2l-1 4h4l1 3l3-2l3 2l1-3h4l-1-4l3-2l-3-2l1-4h-4l-1-3l-3 2zm7 5l1 1l-7 7l-3-3l1-1l2 2z"></svg:path>`,
})
export class MaterialIconThemeVerifiedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeVerilogIcon],svg[material-icon-theme-verilog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ff7043" d="M21.833 8A2.17 2.17 0 0 1 24 10.167v11.666A2.17 2.17 0 0 1 21.833 24H10.167A2.17 2.17 0 0 1 8 21.833V10.167A2.17 2.17 0 0 1 10.167 8zm0-2H10.167A4.167 4.167 0 0 0 6 10.167v11.666A4.167 4.167 0 0 0 10.167 26h11.666A4.167 4.167 0 0 0 26 21.833V10.167A4.167 4.167 0 0 0 21.833 6"></svg:path><svg:path fill="#ff7043" d="M18 14v4h-4v-4zm2-2h-8v8h8zM2 12h4v2H2zm0 6h4v2H2zm24-6h4v2h-4zm0 6h4v2h-4zm-8 8h2v4h-2zm-6 0h2v4h-2zm6-24h2v4h-2zm-6 0h2v4h-2z"></svg:path>`,
})
export class MaterialIconThemeVerilogIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeVflIcon],svg[material-icon-theme-vfl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:radialgradient id="materialIconThemeVfl0" cx="205.45" cy="208.29" r="225.35" gradientTransform="matrix(.04556 0 0 .0456 2.888 2.88)" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#FFD600"></svg:stop><svg:stop offset=".35" stop-color="#F9A825"></svg:stop><svg:stop offset="1" stop-color="#F4511E"></svg:stop></svg:radialgradient></svg:defs><svg:g stroke-width=".046"><svg:path fill="#F4511E" d="M19.97 3H4.03A1.03 1.03 0 0 0 3 4.03v4.136c1.548-1.19 3.563-1.958 5.948-1.958c5.107.004 8.35 3.575 8.348 8.082c0 3.13-1.46 5.485-3.745 6.71h6.419A1.03 1.03 0 0 0 21 19.967V4.031a1.03 1.03 0 0 0-1.03-1.03z"></svg:path><svg:path fill="url(#materialIconThemeVfl0)" d="M3 17.722v2.247A1.03 1.03 0 0 0 4.03 21h1.837C4.474 20.21 3.49 19 3 17.722"></svg:path><svg:path fill="#F4511E" d="M8.948 8.23C6.362 8.142 4.35 9.09 3 10.496v3.162c.918-2.653 3.447-3.87 5.565-3.849c2.647.027 4.689 2.025 4.7 4.284c.012 2.158-.892 3.748-3.33 4.14c-1.33.213-3.41-.568-3.318-2.578c.046-1.037.854-1.622 1.777-1.58c-.904 1.213.293 2.102 1.139 1.92c1.048-.223 1.475-1.155 1.475-1.877c0-.762-.717-1.994-2.498-1.952c-2.204.053-3.59 1.64-3.638 3.603c-.056 2.468 2.254 4.091 4.623 4.12c3.478.046 5.542-2.24 5.538-5.585c-.005-3.03-2.434-5.946-6.085-6.072z"></svg:path></svg:g>`,
})
export class MaterialIconThemeVflIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeVideoIcon],svg[material-icon-theme-video-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ff9800" d="m24 6l2 6h-4l-2-6h-3l2 6h-4l-2-6h-3l2 6H8L6 6H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h22a3 3 0 0 0 3-3V6Z"></svg:path>`,
})
export class MaterialIconThemeVideoIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeVimIcon],svg[material-icon-theme-vim-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#43a047" d="M22.19 4H16v4h2.19L12 14.19V8h2V4H2v4h2v20h4v-.01l.01.01L28 8V4z"></svg:path>`,
})
export class MaterialIconThemeVimIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeVirtualIcon],svg[material-icon-theme-virtual-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#039be5" d="M28 24V6H4v18H2v2h28v-2Zm-8 0h-8v-2h8Zm6-4H6V8h20Z"></svg:path>`,
})
export class MaterialIconThemeVirtualIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeVisualstudioIcon],svg[material-icon-theme-visualstudio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ab47bc" d="m22 11.8l-5.7 4.584L22 20.8zM7.24 23.68L4 21.64v-10.8l3.6-1.2l5.16 3.996L23.2 4L28 7v18.6L22 28l-9.192-8.808zm.36-5.28l2.232-2.064L7.6 14.2Z"></svg:path>`,
})
export class MaterialIconThemeVisualstudioIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeViteIcon],svg[material-icon-theme-vite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ffab00" d="M10 2v16h4v12l9-16h-6l5-12Z"></svg:path>`,
})
export class MaterialIconThemeViteIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeVitestIcon],svg[material-icon-theme-vitest-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#689f38" d="M16.094 30.074a1.4 1.4 0 0 1-1.003-.416l-6.622-6.622a1.42 1.42 0 0 1 2.006-2.006l5.62 5.618l12.24-12.24a1.419 1.419 0 0 1 2.007 2.006L17.098 29.658a1.4 1.4 0 0 1-1.004.416"></svg:path><svg:path fill="#689f38" fill-opacity=".502" d="M16.089 30.074a1.4 1.4 0 0 0 1.003-.416l6.622-6.622a1.42 1.42 0 0 0-2.006-2.006l-5.62 5.618l-12.24-12.24a1.42 1.42 0 0 0-2.007 2.006l13.244 13.244a1.4 1.4 0 0 0 1.004.416"></svg:path><svg:path fill="#ffca28" d="M24 10h-6V2l-8 12h6v8z"></svg:path>`,
})
export class MaterialIconThemeVitestIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeVlangIcon],svg[material-icon-theme-vlang-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#546e7a" d="m311.64 433.372l130.885-363.97c2.22-6.173-1.28-10.674-7.809-10.044l-102.93 9.915c-6.529.63-13.582 6.17-15.739 12.363L194.901 429.48c-2.158 6.194 1.416 11.223 7.975 11.223h100.191c3.28 0 6.843-2.505 7.953-5.592z"></svg:path><svg:path fill="#039be5" d="m65.278 59.359l102.93 9.915c6.529.63 13.59 6.167 15.757 12.358l123.714 353.456c1.083 3.097-.7 5.608-3.98 5.608H202.877c-6.56 0-13.688-5.01-15.907-11.183L57.472 69.398c-2.22-6.173 1.28-10.674 7.809-10.044z"></svg:path>`,
})
export class MaterialIconThemeVlangIcon {
  readonly viewBox = input("0 0 500 500")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeVscodeIcon],svg[material-icon-theme-vscode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2196f3" d="M24.003 2L12 13.303L4.84 8L2 10l6.772 6L2 22l2.84 2L12 18.702L24.003 30L30 27.087V4.913ZM24 9.434v13.132L15.289 16Z"></svg:path>`,
})
export class MaterialIconThemeVscodeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeVueIcon],svg[material-icon-theme-vue-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#41b883" d="M1.791 3.851L12 21.471L22.209 3.936V3.85H18.24l-6.18 10.616L5.906 3.851z"></svg:path><svg:path fill="#35495e" d="m5.907 3.851l6.152 10.617L18.24 3.851h-3.723L12.084 8.03L9.66 3.85z"></svg:path>`,
})
export class MaterialIconThemeVueIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeVueConfigIcon],svg[material-icon-theme-vue-config-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#757575" d="M15 2H6a2.006 2.006 0 0 0-2 2v22a2.006 2.006 0 0 0 2 2h16a2 2 0 0 0 2-2V11Zm3 22H6v-2h12Zm0-4H6v-2h12Zm0-4H6v-2h12Zm-4-4V4l8 8Z"></svg:path><svg:path fill="#41b883" d="m14 16l8 14.093l8-14.024V16h-3.11l-4.843 8.49L17.225 16Z"></svg:path><svg:path fill="#35495e" d="m17.225 16l4.821 8.492l4.844-8.491h-2.918l-1.906 3.342l-1.9-3.343Z"></svg:path>`,
})
export class MaterialIconThemeVueConfigIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeVuexStoreIcon],svg[material-icon-theme-vuex-store-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#41b883" d="M1.646 14.41L6.729 4.157l1.27 2.501v2.63l-2.525 5.124zm12.708.009L9.27 4.164L8 6.665v2.63l2.517 5.124z"></svg:path><svg:path fill="#35495e" d="M1.646 1.582L4.823 8l1.906-3.844l-1.27-2.574zm12.708 0L11.177 8L9.27 4.156l1.27-2.574z"></svg:path>`,
})
export class MaterialIconThemeVuexStoreIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeWakatimeIcon],svg[material-icon-theme-wakatime-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#f5f5f5" stroke-width="33.39" d="M170 44.788c-69.154 0-125.212 56.058-125.212 125.212s56.058 125.213 125.213 125.213S295.212 239.155 295.212 170S239.155 44.788 170 44.788z"></svg:path><svg:path fill="#f5f5f5" d="M186.846 206.343c-1.205 1.588-3.011 2.61-5.035 2.61a6 6 0 0 1-.591-.034a7 7 0 0 1-.7-.109a6.7 6.7 0 0 1-1.15-.385a8 8 0 0 1-.547-.28a6.6 6.6 0 0 1-.856-.591a7 7 0 0 1-.42-.367a8 8 0 0 1-.586-.64a7.5 7.5 0 0 1-.754-1.144l-7.378-11.854l-7.374 11.854c-1.157 2.107-3.249 3.55-5.652 3.55c-2.412 0-4.514-1.454-5.636-3.607l-32.252-46.985c-1.06-1.278-1.712-2.973-1.712-4.844c0-3.96 2.911-7.173 6.501-7.173c2.324 0 4.358 1.35 5.508 3.375l27.224 40.228l7.663-12.477c1.104-2.224 3.248-3.734 5.71-3.734c2.252 0 4.238 1.266 5.404 3.188l7.903 12.972l42.712-61.15c1.16-1.967 3.164-3.269 5.45-3.269c3.59 0 6.5 3.212 6.5 7.172c0 1.73-.553 3.317-1.478 4.555z"></svg:path></svg:g>`,
})
export class MaterialIconThemeWakatimeIcon {
  readonly viewBox = input("0 0 340 340")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeWakatimeLightIcon],svg[material-icon-theme-wakatime-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#455a64" stroke-width="33.39" d="M170 44.788c-69.154 0-125.212 56.058-125.212 125.212s56.058 125.213 125.213 125.213S295.212 239.155 295.212 170S239.155 44.788 170 44.788z"></svg:path><svg:path fill="#455a64" d="M186.846 206.343c-1.205 1.588-3.011 2.61-5.035 2.61a6 6 0 0 1-.591-.034a7 7 0 0 1-.7-.109a6.7 6.7 0 0 1-1.15-.385a8 8 0 0 1-.547-.28a6.6 6.6 0 0 1-.856-.591a7 7 0 0 1-.42-.367a8 8 0 0 1-.586-.64a7.5 7.5 0 0 1-.754-1.144l-7.378-11.854l-7.374 11.854c-1.157 2.107-3.249 3.55-5.652 3.55c-2.412 0-4.514-1.454-5.636-3.607l-32.252-46.985c-1.06-1.278-1.712-2.973-1.712-4.844c0-3.96 2.911-7.173 6.501-7.173c2.324 0 4.358 1.35 5.508 3.375l27.224 40.228l7.663-12.477c1.104-2.224 3.248-3.734 5.71-3.734c2.252 0 4.238 1.266 5.404 3.188l7.903 12.972l42.712-61.15c1.16-1.967 3.164-3.269 5.45-3.269c3.59 0 6.5 3.212 6.5 7.172c0 1.73-.553 3.317-1.478 4.555z"></svg:path></svg:g>`,
})
export class MaterialIconThemeWakatimeLightIcon {
  readonly viewBox = input("0 0 340 340")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeWallabyIcon],svg[material-icon-theme-wallaby-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#4caf50" d="M16 2v14H2v14h28V2z"></svg:path>`,
})
export class MaterialIconThemeWallabyIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeWallyIcon],svg[material-icon-theme-wally-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#e65100" d="M8.454 3.084c-.897-.112-1.438.473-2.502 2.43c-1.457 2.682-3.888 1.135-1.765 5.275a4.7 4.7 0 0 0 .759 1.122l5.749-9.219c-.84-.614-1.513.448-2.241.392"></svg:path><svg:path fill="#ffcc80" d="m28.565 29.985l-5.982-8.28a1.67 1.67 0 0 0-.57-1.362c-1.794-1.789-2.69-3.51-1.905-6.975a3.94 3.94 0 0 0-1.326-3.766a29 29 0 0 0 .206-3.22s-.673-2.907-2.354-3.13c0 0-4.426-2.236-7.956.279S7.95 5.71 5.82 8.897a4.5 4.5 0 0 0-.444.867a7 7 0 0 0-1.237.307c-1.4.56-1.344 2.07.56 3.635a1 1 0 0 0 .29.148a8.2 8.2 0 0 1-.29 2.198c-.595 1.674.853 3.91 3.024 1.789a7 7 0 0 0 1.648.942a8.1 8.1 0 0 1 .707 2.522l-.558 8.68Z"></svg:path><svg:path fill="#3e2723" d="M8.651 9.017a.803.803 0 0 1-.807-.805v-1.88a.807.807 0 0 1 1.615 0v1.88a.803.803 0 0 1-.808.805m5.314 0a.814.814 0 0 1-.813-.811V6.339a.814.814 0 0 1 1.627 0v1.948a.8.8 0 0 1-.814.73"></svg:path><svg:path fill="#e65100" d="M17.082 14.15a6.06 6.06 0 0 1-4.818 4.528a4.75 4.75 0 0 1-5.828-3.13a3.8 3.8 0 0 0 2.999 3.679c.84 1.302.355 3.547.307 4.874a5.4 5.4 0 0 1-.061.84l-1.08 5.044l5.421.015c-.724-.397-1.02-2.476-1.14-3.901l-.079-1.405a1.415 1.415 0 0 1 .974-1.432c2.796-1.81-.672-1.789-.672-2.292a3.6 3.6 0 0 1 1.068-2.195c2.535-1.273 3.114-4.013 2.91-4.624"></svg:path><svg:path fill="#e65100" d="M20.518 17.614c.588-.523 1.012-2.457 1.492-3.362c.785-1.48 4.797-2.989 3.136-5.446c-1.55-2.292-2.24-1.658-3.136-3.28c-.84-1.452-1.073-1.763-3.154-1.763a7.7 7.7 0 0 1-2.296-1.124A3.07 3.07 0 0 0 14.531 2c-3.98 0-4.9-.091-5.853 1.195c0 0 4.429-1.841 8.025.533c1.213 1.634 2.441 4.61 1.612 9.64a8.8 8.8 0 0 0 .093 3.228a1.5 1.5 0 0 0 .096.466s4.621 9.882 9.222 12.922H29s-5.867-7.368-8.482-12.371M5.035 16.05a2.496 2.496 0 0 0-1.176-3.24a3 3 0 0 1 .56 3.185c-.56 1.118 0 3.242 2.073 2.627c0 0-2.41.112-1.457-2.571"></svg:path><svg:path fill="#b71c1c" d="M9.736 23.933a9.63 9.63 0 0 0 8.41-.28c3.195-1.733 3.788-3.732 3.451-4.123a2.42 2.42 0 0 1 2.053 1.036c.56.839-.46 3.645-5.167 5.602c-4.427 1.788-7.848.974-8.632.191c-.729-.782-.115-2.426-.115-2.426m-6.55-13.192c-.616.615.393 2.46 1.625 3.018c1.401.615 3.418-1.788 3.026-2.459c-.448-.894-3.362-1.844-4.65-.559"></svg:path>`,
})
export class MaterialIconThemeWallyIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeWatchmanIcon],svg[material-icon-theme-watchman-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="210" cy="209.5" r="188.15" fill="#FAFAFA" paint-order="stroke fill markers"></svg:circle><svg:path fill="#304FFE" d="M191.07 397.1c-35.512-4.049-66.779-16.485-95.318-37.913c-22.723-17.061-44.027-43.274-56.077-68.997l-3.932-8.393l25.692-26.37c14.13-14.505 27.522-28.059 29.758-30.12l4.067-3.748l12.5 11.364c16.495 14.996 26.818 23.219 41.05 32.697c14.94 9.95 23.867 14.578 35.877 18.597c22.823 7.637 42.099 5.991 66.082-5.642c17.83-8.65 44.399-28.24 66.179-48.797l8.878-8.38l29.147 29.137c16.03 16.025 29.147 29.84 29.147 30.7s-1.6 4.912-3.554 9.005c-18.398 38.533-49.46 69.834-87.797 88.466c-17.732 8.619-33.936 13.787-53.563 17.084c-10.16 1.708-38.005 2.465-48.137 1.31zm6.3-123.69c-17.457-3.809-39.276-16.397-63.835-36.829c-13.001-10.816-26.615-23.771-26.615-25.327c0-1.265 16.792-17.101 29.7-28.009c20.328-17.179 36.936-27.484 53.753-33.355c6.275-2.19 8.25-2.443 19.147-2.443c10.892 0 12.873.253 19.136 2.44c22.614 7.894 50.68 27.157 79.189 54.35c3.836 3.659 6.975 7.021 6.975 7.472c0 1.1-21.726 20.758-32.4 29.316c-19.403 15.557-41.794 28.276-56.169 31.907c-8.267 2.088-20.566 2.29-28.881.477zm37.472-20.429c14.201-7.184 18.451-9.747 19.779-11.925c1.556-2.552 1.692-4.934 1.692-29.774c0-24.91-.132-27.216-1.705-29.795c-1.34-2.2-5.607-4.783-20.022-12.124c-18.175-9.256-18.368-9.329-24.812-9.355c-6.44-.026-6.632.044-22.95 8.376c-10.12 5.168-17.582 9.58-19.38 11.462l-2.925 3.06l.003 27.237c.003 25.164.134 27.452 1.712 30.04c1.301 2.134 5.186 4.602 16.288 10.35c20.15 10.433 22.925 11.538 29.04 11.571c4.82.026 6.487-.627 23.28-9.123m-40.872-12.388c-7.315-3.808-13.914-7.538-14.665-8.29c-1.181-1.181-1.28-4.249-.736-22.667l.63-21.3l13.888-7.202c8.096-4.199 14.986-7.202 16.52-7.202c2.953 0 28.618 12.505 31.424 15.311c1.68 1.682 1.788 3.033 1.788 22.477v20.69l-3.46 2.183c-1.902 1.202-8.376 4.65-14.386 7.662c-8.03 4.025-11.825 5.448-14.315 5.37c-2.329-.075-7.546-2.273-16.688-7.032M29.5 263.432c-1.475-3.866-4.192-15.727-5.967-26.05c-2.405-13.986-2.19-43.337.424-58.05c2.41-13.562 4.216-20.627 5.613-21.959c.772-.736 7.977 6.088 27.938 26.459c14.794 15.098 26.902 27.655 26.906 27.906s-12.122 12.581-26.948 27.4L30.51 266.082zm333.59-24.851c-14.17-14.479-25.763-26.679-25.763-27.11c0-1.574 51.776-53.76 53.1-53.521c1.493.27 3.338 6.773 5.975 21.06c2.353 12.751 2.343 48.232-.017 61.072c-2.37 12.886-5.358 24.1-6.527 24.49c-.553.184-12.599-11.512-26.768-25.991M64.75 170.903c-26.893-26.902-29.95-30.252-29.354-32.175c1.335-4.308 8.33-18.529 12.565-25.546c28.808-47.732 75.832-79.809 131.42-89.647c15.231-2.696 45.201-2.944 59.361-.492c41.827 7.244 76.236 24.833 104.91 53.625c15.582 15.647 27.713 32.758 36.971 52.151c6.183 12.95 8.732 8.549-24.429 42.185c-15.984 16.213-29.386 29.61-29.782 29.768c-.396.16-5.695-4.244-11.775-9.786c-32.548-29.67-61.86-48.734-85.116-55.361c-7.771-2.215-9.327-2.357-22.05-2.009c-12.468.34-14.427.627-21.965 3.212c-23.775 8.152-49.675 26.108-80.457 55.78c-4.75 4.579-9.006 8.325-9.457 8.325s-14.329-13.513-30.839-30.029z"></svg:path>`,
})
export class MaterialIconThemeWatchmanIcon {
  readonly viewBox = input("0 0 420 419")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeWebassemblyIcon],svg[material-icon-theme-webassembly-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#7c4dff" d="M22 18h4v4h-4z"></svg:path><svg:path fill="#7c4dff" d="M20 2a4 4 0 0 1-8 0H2v28h28V2Zm-2 24h-2v2h-4v-2h-2v2H6v-2H4V16h2v10h4V16h2v10h4V16h2Zm10 2h-2v-4h-4v4h-2V18h2v-2h4v2h2Z"></svg:path>`,
})
export class MaterialIconThemeWebassemblyIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeWebhintIcon],svg[material-icon-theme-webhint-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#1e88e5" d="M115.45 23.033S97.961 33.27 97.534 33.412c-.427.284-.852.57-1.137.854c-1.422 1.421-1.848 3.41-1.422 5.26c.285.852.711 1.849 1.422 2.56c.711.71 1.564 1.137 2.559 1.422c1.848.426 3.84 0 5.262-1.422q.638-.64.851-1.28l.143-.427l2.56-4.692zm-39.102 9.242c-27.441 0-31.99 13.08-31.99 29.29c0 3.838.569 7.962-1.99 11.942c-3.84 5.972-8.957 5.828-10.236 5.828c-1.706 0-7.962-.993-8.246-2.841h.994c6.682 0 11.658-5.404 11.658-12.655v-2.56h-5.686c-4.123 0-7.82 1.849-10.238 5.12c-2.417-3.271-6.113-5.12-10.236-5.12h-5.83v2.56c0 7.11 5.688 12.795 12.797 12.795h1.848c0 4.124 5.687 20.332 47.63 20.332c16.352 0 40.665-2.843 40.665-33.697c0-5.829-1.848-11.23-4.691-15.78c-.996.284-1.992.568-3.13.568a8.92 8.92 0 0 1-8.956-8.957q0-1.493.425-2.986c-4.265-2.702-8.53-3.838-14.787-3.838z"></svg:path>`,
})
export class MaterialIconThemeWebhintIcon {
  readonly viewBox = input("0 0 120 120")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeWebpackIcon],svg[material-icon-theme-webpack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FAFAFA" fill-opacity=".785" d="m19.376 15.988l-7.708 4.45l-7.709-4.45v-8.9l7.709-4.451l7.708 4.45z"></svg:path><svg:path fill="#90CAF9" d="M12.286 1.98c-.21 0-.41.059-.57.179l-7.9 4.44c-.32.17-.53.5-.53.88v9c0 .38.21.711.53.881l7.9 4.44c.16.12.36.18.57.18s.41-.06.57-.18l7.9-4.44c.32-.17.53-.5.53-.88v-9c0-.38-.21-.712-.53-.882l-7.9-4.44a.95.95 0 0 0-.57-.179zm0 2.15l7 3.94v2.103h-.016v5.177h.016v.54l-7 3.939l-7-3.94V8.07zm0 2.08l-4.9 2.83l4.9 2.83l4.9-2.83zm-5 5.08v3.58l4 2.309v-3.58l-4-2.31zm10 0l-4 2.308v3.58l4-2.308z"></svg:path><svg:path fill="#0277BD" d="m12.286 6.21l-4.9 2.83l4.9 2.83l4.9-2.83zm-5 5.08v3.58l4 2.309v-3.58l-4-2.31zm10 0l-4 2.308v3.58l4-2.308z"></svg:path>`,
})
export class MaterialIconThemeWebpackIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeWepyIcon],svg[material-icon-theme-wepy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#4caf50" d="M16 2A14 14 0 0 0 2 16v12a2 2 0 0 0 2 2h12a14 14 0 0 0 0-28m0 24a10 10 0 1 1 10-10a10.01 10.01 0 0 1-10 10"></svg:path>`,
})
export class MaterialIconThemeWepyIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeWerfIcon],svg[material-icon-theme-werf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#1e88e5" d="m74.849 59.509l3.307 9.697l5.768-9.697zm-.601-20.967v17.932h9.788zm-3.095 10.125V34.182h-4.938zm-10.77-31.582l4.795 14.06h5.032l-8.166-14.959l-1.236.668l-.425.228zm-6.74 78.095h7.34l-2.77-5.008l-.917.976a71.108 69.794 0 0 1-3.653 4.031zm-3.594-4.567l.125-29.212a48.51 47.615 0 0 0-3.263 2.064c.125 3.608.715 15.891 3.137 27.147zm-8.374-23.137c.112 2.31.811 10.604 5.165 19.634c-1.57-8.843-2.14-17.601-2.34-21.906a62.074 60.926 0 0 0-2.825 2.272m-2.68 27.704h7.64l-.584-.672a69.587 68.302 0 0 1-4.088-4.69l-2.967 5.36zm-2.442-22.688c.275 1.63 2.424 7.773 7.763 15.086c-3.516-7.485-4.631-14.336-4.98-17.987a46.725 45.861 0 0 0-2.784 2.901zm3.86-15.062v6.948a46.951 46.083 0 0 1 3.884-2.96c3.425-2.488 4.818-3 5.698-3.055h-.006v-.933zm-24.358 2.08l6.167 10.364l4.244-10.364zm11.154-16.456L16.532 56.473h10.677zm3.097-3.889v10.974l7.509-18.34l-1.004-.812l-6.507 8.178zM80.198 71.8h6.218l1.548 1.52v23.377l-1.548 1.522H13.563L12.016 96.7V73.32l1.547-1.52h6.22l-7.76-13.04l.115-1.701l23.21-29.167l2.11-.229l.038-.052l10.428 7.677l-1.857 2.431l-5.638-4.153L24.199 73.2l12.145 20.407l3.595-6.496c-6.09-8.683-6.534-14.664-6.556-15l.363-1.07a62.861 61.699 0 0 1 3.57-3.827v-11.3l1.55-1.519h22.247l1.548 1.52V66.86a62.175 61.026 0 0 1 3.932 4.182l.361 1.067c-.019.343-.473 6.45-6.756 15.288l3.438 6.21l12.444-20.91l-18.45-54.12l-5.06 2.74l-1.493-2.66l10.841-5.872l2.113.614l23.954 43.878"></svg:path>`,
})
export class MaterialIconThemeWerfIcon {
  readonly viewBox = input("0 0 100 111")
  readonly width = input("0.91em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeWindicssIcon],svg[material-icon-theme-windicss-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#42a5f5" stroke-miterlimit="3.339" stroke-width="4" d="M22 12a4 4 0 1 1 4 4H2m14 10a4 4 0 1 0 4-4H10M8 6a4 4 0 1 1 4 4H2"></svg:path><svg:path fill="#42a5f5" d="M2 20h4v4H2z"></svg:path></svg:g>`,
})
export class MaterialIconThemeWindicssIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeWolframlanguageIcon],svg[material-icon-theme-wolframlanguage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g transform="translate(-.009 -.001)scale(.12121)"><svg:circle cx="99.197" cy="98.946" r="83.28" fill="#212121"></svg:circle><svg:path fill="#e53935" d="M182.53 98.828a83.4 83.4 0 0 1-39.14 70.722a.06.06 0 0 1-.037.019l-28.62-35.664l23.71 2.611s11.385 1.178 13.979 0c2.373-.938 15.174-18.963 15.174-18.963s-36.75-23.23-49.312-36.032c1.435-21.575-1.655-50.269-1.655-50.03c-9.252 9.234-10.43 10.668-19.681 19.202c-4.028-13.04-5.923-17.546-9.95-30.587c-12.104 9.95-21.337 26.799-27.977 46.48a79 79 0 0 0-4.23 5.095a110 110 0 0 0-2.668 3.66a115 115 0 0 0-5.131 8a173 173 0 0 0-3.403 6.052c-7.707 14.476-14.034 31.067-19.515 46.002a1 1 0 0 1-.092-.184C8.993 104.299 14.48 67.36 37.804 42.138c23.325-25.223 59.722-33.574 91.71-21.045c31.988 12.53 53.029 43.382 53.017 77.736z"></svg:path><svg:path fill="#FAFAFA" d="M101.45 69.178s-1.416-8.295-2.373-11.367c6.401-6.18 7.357-7.118 13.52-13.041c.477 11.845.238 18.007-.479 32.482c-3.55-3.568-10.668-8.075-10.668-8.075zm-27.737 40.778s-6.64-4.028-11.624-4.727c1.435-3.33 5.224-7.597 6.18-8.774c-1.913.7-15.652 6.861-17.087 12.084a75 75 0 0 1 11.385 3.79a36 36 0 0 0-8.773 20.158s21.814-3.329 38.184-1.195c.283.168.608.25.938.239l8.534.239l27.11 45.137l.222.35c-.037.018-.056.036-.074.036c-51.133 18.485-88.085-15.542-95.975-27.442q.05-.153.074-.312c7.1-30.018 15.855-65.94 29.999-76.552c7.357-12.82 9.49-31.783 22.752-41.734c3.329 9.95 8.553 30.588 12.103 40.538c15.653 15.653 39.36 35.094 55.234 43.15c1.655.956 3.789 7.596 3.789 7.596l-6.401 8.056l-68.275-6.879a55 55 0 0 0-4.58-.184a87 87 0 0 0-14.144 1.361c3.31-8.295 10.429-14.935 10.429-14.935m22.053-8.774c3.789-.46 7.817.957 12.323 3.569c4.267-1.196 4.745-1.435 9.013-2.612c-5.463-4.028-11.385-8.295-19.442-7.118a47 47 0 0 0-1.895 6.161z"></svg:path></svg:g>`,
})
export class MaterialIconThemeWolframlanguageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeWordIcon],svg[material-icon-theme-word-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#01579b" d="M6 2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m7 1.5V9h5.5zM7 13l1.5 7h2l1.5-3l1.5 3h2l1.5-7h1v-2h-4v2h1l-.9 4.2L13 15h-2l-1.1 2.2L9 13h1v-2H6v2z"></svg:path>`,
})
export class MaterialIconThemeWordIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeWranglerIcon],svg[material-icon-theme-wrangler-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#f57f17" d="M22 20H10.5a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5H22v-6.449A5.95 5.95 0 0 0 18 10h-2a5.98 5.98 0 0 0-4.463 2H10a4 4 0 0 0-4 4a4 4 0 0 0-4 4v1.5a.5.5 0 0 0 .5.5H22Z"></svg:path><svg:path fill="#ffab40" d="M24 14v4h1.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H24v2h5.5a.5.5 0 0 0 .5-.5V20a6 6 0 0 0-6-6"></svg:path>`,
})
export class MaterialIconThemeWranglerIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeWxtIcon],svg[material-icon-theme-wxt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#00c853" d="M14 8.9c.117 1.136-.854 2.043-2 2.1v2c0 .663-.337 1-1 1H8v-1c0-1.52-2-1.34-2 0v1H3c-.663 0-1-.337-1-1v-3h1s1-.1 1-1s-1-1-1-1H2V5c0-.663.337-1 1-1h2c.025-1.06.885-1.995 2-2c1.123-.005 1.996.93 2 2h2c.663 0 1 .337 1 1v2c1.082.067 2.117.798 2 2m-3 1h1c.497 0 1-.503 1-1s-.503-1-1-1h-1V5H8V4c0-.497-.503-1-1-1s-1 .503-1 1v1H3v2c1.148.341 1.98.744 2 2c.02 1.226-.707 1.666-2 2v2h2c.156-1.452 1.055-1.948 2-2c1-.056 2.098.695 2 2h2z"></svg:path>`,
})
export class MaterialIconThemeWxtIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeXamlIcon],svg[material-icon-theme-xaml-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#42a5f5" d="m32 16l-5.387 9.333L24.307 24l4.613-8l-4.613-8l2.306-1.333z"></svg:path><svg:path fill="#42a5f5" d="m25.24 16l-4.627 8h-9.226L6.76 16l4.627-8h9.226z"></svg:path><svg:path fill="#42a5f5" d="m0 16l5.387-9.333L7.693 8L3.08 16l4.613 8l-2.306 1.333z"></svg:path>`,
})
export class MaterialIconThemeXamlIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeXmakeIcon],svg[material-icon-theme-xmake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="8" cy="8" r="7" fill="#e0f2f1"></svg:circle><svg:path fill="#e0f2f1" d="M11.759 2.944a6.3 6.3 0 0 0-8.932 1.462l3.281 2.023z"></svg:path><svg:path fill="#8bc34a" d="M1.796 9.088L6.107 6.43l-3.28-2.025A6.27 6.27 0 0 0 1.7 8a6.4 6.4 0 0 0 .096 1.088"></svg:path><svg:path fill="#4db6ac" d="M13.536 11.01a6.3 6.3 0 0 0-1.777-8.066l-5.65 3.485z"></svg:path><svg:path fill="#009688" d="M1.796 9.088a6.3 6.3 0 0 0 11.74 1.922L6.108 6.428z"></svg:path>`,
})
export class MaterialIconThemeXmakeIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeXmlIcon],svg[material-icon-theme-xml-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#8bc34a" d="M13 9h5.5L13 3.5zM6 2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.11.89-2 2-2m.12 13.5l3.74 3.74l1.42-1.41l-2.33-2.33l2.33-2.33l-1.42-1.41zm11.16 0l-3.74-3.74l-1.42 1.41l2.33 2.33l-2.33 2.33l1.42 1.41z"></svg:path>`,
})
export class MaterialIconThemeXmlIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeYamlIcon],svg[material-icon-theme-yaml-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FF5252" d="M13 9h5.5L13 3.5zM6 2h8l6 6v12c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2m12 16v-2H9v2zm-4-4v-2H6v2z"></svg:path>`,
})
export class MaterialIconThemeYamlIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeYangIcon],svg[material-icon-theme-yang-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#42a5f5" d="M12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8a8 8 0 0 0 8 8a4 4 0 0 1-4-4a4 4 0 0 1 4-4a4 4 0 0 0 4-4a4 4 0 0 0-4-4m0 2.5A1.5 1.5 0 0 1 13.5 8A1.5 1.5 0 0 1 12 9.5A1.5 1.5 0 0 1 10.5 8A1.5 1.5 0 0 1 12 6.5m0 8a1.5 1.5 0 0 0-1.5 1.5a1.5 1.5 0 0 0 1.5 1.5a1.5 1.5 0 0 0 1.5-1.5a1.5 1.5 0 0 0-1.5-1.5"></svg:path>`,
})
export class MaterialIconThemeYangIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeYarnIcon],svg[material-icon-theme-yarn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#0288d1" d="M27.575 23.967a9.9 9.9 0 0 0-3.751 1.726a22.6 22.6 0 0 1-5.537 2.504a1.55 1.55 0 0 1-.931.52a59 59 0 0 1-6.11.548c-1.102.008-1.777-.282-1.965-.735a1.49 1.49 0 0 1 .82-1.965a3.6 3.6 0 0 1-.486-.359c-.163-.162-.334-.487-.385-.367c-.213.52-.324 1.794-.897 2.366c-.786.795-2.273.53-3.153.069c-.965-.513.069-1.718.069-1.718a.69.69 0 0 1-.94-.324a4.6 4.6 0 0 1-.632-2.794a5.2 5.2 0 0 1 1.674-2.76a8.84 8.84 0 0 1 .624-4.17a9.9 9.9 0 0 1 3-3.469S7.136 11.015 7.82 9.177c.444-1.196.623-1.187.769-1.239a3.44 3.44 0 0 0 1.375-.811a4.99 4.99 0 0 1 4.178-1.607s1.094-3.357 2.12-2.7a17.4 17.4 0 0 1 1.452 2.735s1.213-.71 1.35-.445a10.74 10.74 0 0 1 .495 5.81a13.3 13.3 0 0 1-2.46 5.127c-.129.214 1.47.889 2.477 3.683c.932 2.554.103 4.699.248 4.938c.026.043.034.06.034.06s1.068.085 3.213-1.24a8.05 8.05 0 0 1 4.05-1.52a1.026 1.026 0 0 1 .453 2Z"></svg:path>`,
})
export class MaterialIconThemeYarnIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeZeaburIcon],svg[material-icon-theme-zeabur-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#cfd8dc" d="m14 20l4 4l-4 4H2v-8h8l10-8l-6-4l6-4h10v8Z"></svg:path><svg:path fill="#651fff" d="M20 4H2v8h18Z"></svg:path><svg:path fill="#ff3d00" d="M30 20H14v8h16Z"></svg:path>`,
})
export class MaterialIconThemeZeaburIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeZeaburLightIcon],svg[material-icon-theme-zeabur-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#263238" d="m14 20l4 4l-4 4H2v-8h8l10-8l-6-4l6-4h10v8Z"></svg:path><svg:path fill="#651fff" d="M20 4H2v8h18Z"></svg:path><svg:path fill="#ff3d00" d="M30 20H14v8h16Z"></svg:path>`,
})
export class MaterialIconThemeZeaburLightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeZigIcon],svg[material-icon-theme-zig-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#f9a825" d="M2 8h6v4H2zm8 0h12v4H10zm0 12h12v4H10zm14 0h2v4h-2zM8 20l-3 4H2V12h4v8zm14-8h-6l-6 8h6z"></svg:path><svg:path fill="#f9a825" d="M16 20h-6l-6 8m12-16h6l6-8m2 4v16h-4V12h-2l3-4z"></svg:path>`,
})
export class MaterialIconThemeZigIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeZipIcon],svg[material-icon-theme-zip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#afb42b" d="M14 17h-2v-2h-2v-2h2v2h2m0-6h-2v2h2v2h-2v-2h-2V9h2V7h-2V5h2v2h2m5-4H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2"></svg:path>`,
})
export class MaterialIconThemeZipIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
