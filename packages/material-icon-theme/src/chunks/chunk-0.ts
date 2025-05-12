import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconTheme3dIcon],svg[material-icon-theme-3d-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#29b6f6" d="M21 16.5c0 .38-.21.71-.53.88l-7.9 4.44c-.16.12-.36.18-.57.18s-.41-.06-.57-.18l-7.9-4.44A.99.99 0 0 1 3 16.5v-9c0-.38.21-.71.53-.88l7.9-4.44c.16-.12.36-.18.57-.18s.41.06.57.18l7.9 4.44c.32.17.53.5.53.88zM12 4.15L6.04 7.5L12 10.85l5.96-3.35zM5 15.91l6 3.38v-6.71L5 9.21zm14 0v-6.7l-6 3.37v6.71z"></svg:path>`,
})
export class MaterialIconTheme3dIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeAbapIcon],svg[material-icon-theme-abap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#0288d1" d="M2 10v12h14l14-12"></svg:path>`,
})
export class MaterialIconThemeAbapIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeAbcIcon],svg[material-icon-theme-abc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ff5722" d="M13.295 11.033V7.65l2.126-2.136c.774-.763.919-1.981.377-2.929a2.38 2.38 0 0 0-2.068-1.217c-.203 0-.435.029-.619.087c-1.044.28-1.749 1.246-1.749 2.33v3.13L8.327 9.98a5.75 5.75 0 0 0-1.208 6.214a5.62 5.62 0 0 0 4.243 3.432v.59a.5.5 0 0 1-.483.482h-1.45v1.934h1.45a2.43 2.43 0 0 0 2.416-2.417v-.483c1.962 0 4.02-1.856 4.02-4.591c0-2.223-1.855-4.108-4.02-4.108m0-7.249c0-.222.106-.396.31-.454a.47.47 0 0 1 .54.222a.48.48 0 0 1-.077.59l-.773.83V3.785m-1.933 7.732c-.938.619-1.643 1.682-1.894 2.668l1.894.503v2.948a3.73 3.73 0 0 1-2.484-2.185a3.8 3.8 0 0 1 .802-4.098l1.682-1.769zm1.933 6.283v-4.89c1.13 0 2.107 1.062 2.107 2.232c0 1.691-1.227 2.658-2.107 2.658"></svg:path>`,
})
export class MaterialIconThemeAbcIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeAdaIcon],svg[material-icon-theme-ada-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#0277bd" d="m2 12l2.9-1.07c.25-1.1.87-1.73.87-1.73a3.996 3.996 0 0 1 5.65 0l1.41 1.41l6.31-6.7c.95 3.81 0 7.62-2.33 10.69L22 19.62s-8.47 1.9-13.4-1.95c-2.63-2.06-3.22-3.26-3.59-4.52zm5.04.21c.37.37.98.37 1.35 0s.37-.97 0-1.34a.96.96 0 0 0-1.35 0c-.37.37-.37.97 0 1.34"></svg:path>`,
})
export class MaterialIconThemeAdaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeActionscriptIcon],svg[material-icon-theme-actionscript-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#f44336" d="M560-160v-80h120q17 0 28.5-11.5T720-280v-80q0-38 22-69t58-44v-14q-36-13-58-44t-22-69v-80q0-17-11.5-28.5T680-720H560v-80h120q50 0 85 35t35 85v80q0 17 11.5 28.5T840-560h40v160h-40q-17 0-28.5 11.5T800-360v80q0 50-35 85t-85 35zm-280 0q-50 0-85-35t-35-85v-80q0-17-11.5-28.5T120-400H80v-160h40q17 0 28.5-11.5T160-600v-80q0-50 35-85t85-35h120v80H280q-17 0-28.5 11.5T240-680v80q0 38-22 69t-58 44v14q36 13 58 44t22 69v80q0 17 11.5 28.5T280-240h120v80z"></svg:path><svg:path fill="#f44336" d="M360-600h80v40h-80zm80 240h40v-200h-40v80h-80v-80h-40v200h40v-80h80zm200-200v-40H530a10 10 0 0 0-10 10v100a10 10 0 0 0 10 10h70v80h-80v40h110a10 10 0 0 0 10-10v-140a10 10 0 0 0-10-10h-70v-40z"></svg:path>`,
})
export class MaterialIconThemeActionscriptIcon {
  readonly viewBox = input("0 -960 960 960")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeAdobeIllustratorIcon],svg[material-icon-theme-adobe-illustrator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="28" height="28" x="2" y="2" fill="#5d4037" rx="4"></svg:rect><svg:path fill="#ffb74d" d="M20.988 9.999a.96.96 0 0 1-.687-.269a1 1 0 0 1-.263-.704a.9.9 0 0 1 .278-.681a1 1 0 0 1 .687-.268a.93.93 0 0 1 .703.268a1.046 1.046 0 0 1-.015 1.385a.9.9 0 0 1-.703.268M20 12h2v10h-2zm-5.63-1.98l-.01-.02h-2.08a.12.12 0 0 0-.1.13a4.5 4.5 0 0 1-.06.74c-.05.13-.08.26-.12.37l-.27.78L8 22h2.14l.75-2h5.24l.79 2h2.16zM11.64 18l1.8-4.84l.01.04l.02.04L14.95 17l.39 1z"></svg:path>`,
})
export class MaterialIconThemeAdobeIllustratorIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeAdobeIllustratorLightIcon],svg[material-icon-theme-adobe-illustrator-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="28" height="28" x="2" y="2" fill="#795548" rx="4"></svg:rect><svg:path fill="#ffb74d" d="M20.988 9.999a.96.96 0 0 1-.687-.269a1 1 0 0 1-.263-.704a.9.9 0 0 1 .278-.681a1 1 0 0 1 .687-.268a.93.93 0 0 1 .703.268a1.046 1.046 0 0 1-.015 1.385a.9.9 0 0 1-.703.268M20 12h2v10h-2zm-5.63-1.98l-.01-.02h-2.08a.12.12 0 0 0-.1.13a4.5 4.5 0 0 1-.06.74c-.05.13-.08.26-.12.37l-.27.78L8 22h2.14l.75-2h5.24l.79 2h2.16zM11.64 18l1.8-4.84l.01.04l.02.04L14.95 17l.39 1z"></svg:path>`,
})
export class MaterialIconThemeAdobeIllustratorLightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeAdobePhotoshopLightIcon],svg[material-icon-theme-adobe-photoshop-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="28" height="28" x="2" y="2" fill="#455a64" rx="4"></svg:rect><svg:path fill="#64b5f6" d="M23.744 14.716a3.7 3.7 0 0 0-1.066-.408a5.4 5.4 0 0 0-1.245-.157a2.1 2.1 0 0 0-.666.085a.57.57 0 0 0-.345.24a.7.7 0 0 0-.089.324a.56.56 0 0 0 .111.313a1.3 1.3 0 0 0 .378.324q.386.217.79.397a7.8 7.8 0 0 1 1.71.877a2.7 2.7 0 0 1 .878.998a2.8 2.8 0 0 1 .256 1.238a2.96 2.96 0 0 1-.434 1.599a2.83 2.83 0 0 1-1.244 1.07a4.75 4.75 0 0 1-2.011.384a7 7 0 0 1-1.511-.156a4.2 4.2 0 0 1-1.134-.385a.24.24 0 0 1-.122-.228v-2.092a.14.14 0 0 1 .044-.108c.034-.024.067-.012.1.012a4.6 4.6 0 0 0 1.378.59a4.8 4.8 0 0 0 1.311.18a2 2 0 0 0 .923-.169a.56.56 0 0 0 .3-.505a.65.65 0 0 0-.267-.48a4.6 4.6 0 0 0-1.089-.565a6.6 6.6 0 0 1-1.578-.866a3 3 0 0 1-.844-1.021a2.76 2.76 0 0 1-.256-1.226a3 3 0 0 1 .378-1.455a2.8 2.8 0 0 1 1.167-1.105A4 4 0 0 1 21.533 12a9 9 0 0 1 1.378.108a3.7 3.7 0 0 1 .956.277a.2.2 0 0 1 .11.108a.7.7 0 0 1 .023.144v1.96a.15.15 0 0 1-.056.12a.28.28 0 0 1-.2 0M12.38 10H9.99v-.03h-2v12h2V18h2.39A3.62 3.62 0 0 0 16 14.38v-.76A3.62 3.62 0 0 0 12.38 10M14 14.38A1.626 1.626 0 0 1 12.38 16H9.99v-4h2.39A1.626 1.626 0 0 1 14 13.62Z"></svg:path>`,
})
export class MaterialIconThemeAdobePhotoshopLightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeAdobeSwcIcon],svg[material-icon-theme-adobe-swc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#e53935" d="M4 5v22a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1m20 7c-2.926 0-4.21.722-5.012 2H22v4h-4.582C16.34 20.857 14.393 24 8 24v-4c4.559 0 5.14-1.744 6.103-4.632C15.139 12.258 16.559 8 24 8Z"></svg:path>`,
})
export class MaterialIconThemeAdobeSwcIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeAdobePhotoshopIcon],svg[material-icon-theme-adobe-photoshop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="28" height="28" x="2" y="2" fill="#37474f" rx="4"></svg:rect><svg:path fill="#64b5f6" d="M23.744 14.716a3.7 3.7 0 0 0-1.066-.408a5.4 5.4 0 0 0-1.245-.157a2.1 2.1 0 0 0-.666.085a.57.57 0 0 0-.345.24a.7.7 0 0 0-.089.324a.56.56 0 0 0 .111.313a1.3 1.3 0 0 0 .378.324q.386.217.79.397a7.8 7.8 0 0 1 1.71.877a2.7 2.7 0 0 1 .878.998a2.8 2.8 0 0 1 .256 1.238a2.96 2.96 0 0 1-.434 1.599a2.83 2.83 0 0 1-1.244 1.07a4.75 4.75 0 0 1-2.011.384a7 7 0 0 1-1.511-.156a4.2 4.2 0 0 1-1.134-.385a.24.24 0 0 1-.122-.228v-2.092a.14.14 0 0 1 .044-.108c.034-.024.067-.012.1.012a4.6 4.6 0 0 0 1.378.59a4.8 4.8 0 0 0 1.311.18a2 2 0 0 0 .923-.169a.56.56 0 0 0 .3-.505a.65.65 0 0 0-.267-.48a4.6 4.6 0 0 0-1.089-.565a6.6 6.6 0 0 1-1.578-.866a3 3 0 0 1-.844-1.021a2.76 2.76 0 0 1-.256-1.226a3 3 0 0 1 .378-1.455a2.8 2.8 0 0 1 1.167-1.105A4 4 0 0 1 21.533 12a9 9 0 0 1 1.378.108a3.7 3.7 0 0 1 .956.277a.2.2 0 0 1 .11.108a.7.7 0 0 1 .023.144v1.96a.15.15 0 0 1-.056.12a.28.28 0 0 1-.2 0M12.38 10H9.99v-.03h-2v12h2V18h2.39A3.62 3.62 0 0 0 16 14.38v-.76A3.62 3.62 0 0 0 12.38 10M14 14.38A1.626 1.626 0 0 1 12.38 16H9.99v-4h2.39A1.626 1.626 0 0 1 14 13.62Z"></svg:path>`,
})
export class MaterialIconThemeAdobePhotoshopIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeAdvplIcon],svg[material-icon-theme-advpl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#7986cb" fill-rule="evenodd" d="M6.752 1.158C2.234 1.96-.271 6.943 1.758 11.09c2.537 5.185 10.047 5.142 12.511-.07C16.69 5.9 12.321.17 6.752 1.159m.587 2.335c2.576.517 5.233 1.323 5.326 1.615c.26.808.256 4.849-.004 5.34c-.066.125-1.209-.012-2.08-.247l-.351-.094l-.001-.437c-.005-1.308-.138-2.547-.29-2.7c-.176-.176-1.312-.545-3.052-.99L5.78 5.697l-.014-.267c-.033-.6.117-1.95.232-2.093c.063-.079.315-.05 1.34.157M4.029 5.39c.5.066 1.083.178 1.492.289l.178.048l.03.984c.058 1.844.117 2.13.475 2.29c.448.2 2.083.679 3.62 1.061l.34.084l-.01.653c-.012.735-.083 1.393-.175 1.617l-.062.15l-.261-.03c-.976-.113-4.175-.896-5.567-1.362c-.611-.205-.759-.284-.811-.435c-.23-.66-.23-4.905 0-5.337c.054-.1.08-.1.75-.012"></svg:path>`,
})
export class MaterialIconThemeAdvplIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeAdonisIcon],svg[material-icon-theme-adonis-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#7c4dff" d="m79.579 25.741l-66.481 115.15h63.305l11.218-19.433H47.613L79.804 65.7l20.005 34.649l11.423-19.783zm42.118 50.221l-45.203 78.297h90.408z" paint-order="fill markers stroke"></svg:path>`,
})
export class MaterialIconThemeAdonisIcon {
  readonly viewBox = input("0 0 180 180")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeAmplifyIcon],svg[material-icon-theme-amplify-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ff9800" d="M14 10L5 28h12l-2-4h-4l3-6l5 10h4zm1-2l2-4l12 24h-4l-8-16z"></svg:path>`,
})
export class MaterialIconThemeAmplifyIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeAndroidIcon],svg[material-icon-theme-android-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="4" height="10" x="2" y="12" fill="#8bc34a" rx="2"></svg:rect><svg:rect width="4" height="10" x="26" y="12" fill="#8bc34a" rx="2"></svg:rect><svg:path fill="#8bc34a" d="M8 12h16v12H8zm2 12h4v4a2 2 0 0 1-2 2a2 2 0 0 1-2-2zm8 0h4v4a2 2 0 0 1-2 2a2 2 0 0 1-2-2zm3.545-19.759l2.12-2.12A1 1 0 0 0 22.251.707l-2.326 2.326a7.97 7.97 0 0 0-7.85 0L9.75.707a1 1 0 1 0-1.414 1.414l2.12 2.12A7.97 7.97 0 0 0 8 10h16a7.97 7.97 0 0 0-2.455-5.759M14 8h-2V6h2Zm6 0h-2V6h2Z"></svg:path>`,
})
export class MaterialIconThemeAndroidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeAngularIcon],svg[material-icon-theme-angular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#e53935" d="M9.87 2.5L3.022 5.666l.645 10.178zm4.26 0l6.202 13.344l.645-10.178zM12 7.563l-2.451 5.964h4.906zm-3.73 8.959l-.954 2.308L12 21.5l4.683-2.67l-.953-2.308z"></svg:path>`,
})
export class MaterialIconThemeAngularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeAntlrIcon],svg[material-icon-theme-antlr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#f44336" d="M10.355 1.614a10.469 10.483 0 0 1 11.813 7.792a10.327 10.34 0 0 1-1.565 8.673a10.583 10.597 0 0 1-14.819 2.428a10.416 10.43 0 0 1-4.222-7.14a10.641 10.656 0 0 1 .999-5.994a10.498 10.512 0 0 1 7.795-5.76m.27 3.825c-.949 2.08-1.9 4.16-2.83 6.25c-.479 1.345-1.127 2.615-1.716 3.915c-.174.408-.468.853-.287 1.312a1.088 1.09 0 0 0 1.575.556c.458-.261.566-.828.778-1.272c.952-2.405 2.13-4.708 3.11-7.104a7.356 7.366 0 0 1 .776-1.6c.568 1.406 1.186 2.791 1.773 4.19a14.819 14.839 0 0 1 .969 2.197c-1.51-.015-3.02-.004-4.531-.01c2.073 1.233 4.202 2.379 6.305 3.562a1.094 1.094 0 0 0 1.698-1.036c-.425-1.15-1.014-2.237-1.5-3.364c-.917-2.393-2.076-4.685-3.097-7.036a2.685 2.689 0 0 0-.738-1.163a1.564 1.566 0 0 0-2.285.602z"></svg:path>`,
})
export class MaterialIconThemeAntlrIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeApiblueprintIcon],svg[material-icon-theme-apiblueprint-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="12" height="12" x="10" y="2" fill="#42a5f5" rx="6"></svg:rect><svg:rect width="12" height="12" x="18" y="18" fill="#42a5f5" rx="6"></svg:rect><svg:rect width="12" height="12" x="2" y="18" fill="#42a5f5" rx="6"></svg:rect><svg:path fill="none" stroke="#42a5f5" stroke-miterlimit="10" stroke-width="3" d="m16 8l8 16M16 8L8 24"></svg:path>`,
})
export class MaterialIconThemeApiblueprintIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeApolloIcon],svg[material-icon-theme-apollo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#7e57c2" d="M31.93 14.457a.51.51 0 0 0-.506-.457h-2.01a.497.497 0 0 0-.491.559l.014.134c.616 6.284-4.097 12.817-10.29 14.044A13.009 13.009 0 1 1 24.3 6h4.19a16.013 16.013 0 1 0 3.44 8.457"></svg:path><svg:circle cx="24.533" cy="4.267" r="4.267" fill="#7e57c2"></svg:circle><svg:path fill="#7e57c2" d="M17 8h-3L8 24h3z"></svg:path><svg:path fill="#7e57c2" d="M15 8h3l6 16h-3zm2.88 13H12v-3h4.75z"></svg:path>`,
})
export class MaterialIconThemeApolloIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeApplescriptIcon],svg[material-icon-theme-applescript-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#78909c" d="M25.425 26.498c-1.162 1.736-2.394 3.43-4.27 3.458c-1.875.042-2.477-1.106-4.605-1.106c-2.142 0-2.8 1.078-4.578 1.148c-1.834.07-3.22-1.848-4.396-3.542C5.183 23 3.35 16.63 5.813 12.346a6.84 6.84 0 0 1 5.767-3.514c1.792-.028 3.5 1.217 4.606 1.217c1.092 0 3.164-1.497 5.334-1.273a6.5 6.5 0 0 1 5.095 2.771a6.38 6.38 0 0 0-3.01 5.334a6.18 6.18 0 0 0 3.752 5.656a15.5 15.5 0 0 1-1.932 3.961M17.432 4.1A6.36 6.36 0 0 1 21.548 2a6.13 6.13 0 0 1-1.456 4.466a5.11 5.11 0 0 1-4.13 1.988a5.98 5.98 0 0 1 1.47-4.354"></svg:path>`,
})
export class MaterialIconThemeApplescriptIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeAppsScriptIcon],svg[material-icon-theme-apps-script-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#f44336" d="M6.053 20.055H21.21a3.01 3.01 0 0 1 3.049 2.966a3.01 3.01 0 0 1-3.049 2.966H6.053a3.01 3.01 0 0 1-3.049-2.966a3.01 3.01 0 0 1 3.049-2.966"></svg:path><svg:path fill="#ffc107" d="M19.44 25.433L7.179 16.765a2.914 2.914 0 0 1-.674-4.143a3.104 3.104 0 0 1 4.258-.656l12.263 8.668a2.914 2.914 0 0 1 .674 4.143a3.104 3.104 0 0 1-4.258.656Z"></svg:path><svg:path fill="#43a047" d="m19.489 8.05l4.683 14.026a2.95 2.95 0 0 1-1.957 3.737a3.067 3.067 0 0 1-3.841-1.904L13.69 9.884a2.95 2.95 0 0 1 1.957-3.738a3.067 3.067 0 0 1 3.842 1.905Z"></svg:path><svg:path fill="#448aff" d="M18.363 22.076L23.047 8.05a3.067 3.067 0 0 1 3.841-1.904a2.95 2.95 0 0 1 1.958 3.737L24.162 23.91a3.067 3.067 0 0 1-3.842 1.904a2.95 2.95 0 0 1-1.957-3.737Z"></svg:path>`,
})
export class MaterialIconThemeAppsScriptIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeAppveyorIcon],svg[material-icon-theme-appveyor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#00B8D4" fill-rule="evenodd" d="M127.646 17.356c61.588 0 110.999 49.414 110.999 110.29a110.64 110.64 0 0 1-110.999 110.999c-60.873 0-110.29-49.414-110.29-110.999c0-60.873 49.414-110.29 110.29-110.29m27.213 131.77c-12.174 15.756-34.375 18.62-49.414 6.446c-15.039-11.459-17.187-33.66-5.013-49.414c12.891-15.039 35.091-17.904 50.131-6.445c15.039 12.174 17.187 34.375 4.297 49.414zm-58.723 72.331l42.252-40.82c-15.756 3.58-32.227.716-45.117-10.026c-15.039-11.459-21.484-30.795-19.336-48.699L35.98 163.45s-5.013-9.31-6.446-26.498l66.602-52.278c20.052-14.323 47.266-15.04 66.602 0c21.484 17.187 25.781 48.698 10.027 72.33l-48.699 69.466c-7.161 0-21.484-2.149-27.93-5.013"></svg:path>`,
})
export class MaterialIconThemeAppveyorIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeArchitectureIcon],svg[material-icon-theme-architecture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#66BB6A" d="M6.278 22L6 19.556l3.167-8.723a4.37 4.37 0 0 0 1.944 1.056l-3.055 8.389zm11.666 0l-1.777-1.722l-3.056-8.39q.556-.138 1.042-.402a4.4 4.4 0 0 0 .903-.653l3.166 8.723zm-5.833-11.111q-1.389 0-2.361-.972q-.972-.973-.972-2.361q0-1.084.624-1.932q.626-.846 1.598-1.18V2h2.222v2.444a3.27 3.27 0 0 1 1.598 1.18q.624.849.624 1.932q0 1.389-.972 2.36q-.972.973-2.36.973Zm0-2.222q.473 0 .792-.32t.32-.791q0-.473-.32-.793a1.08 1.08 0 0 0-.792-.319q-.472 0-.791.32t-.32.792t.32.79q.319.32.791.32Z"></svg:path>`,
})
export class MaterialIconThemeArchitectureIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeArduinoIcon],svg[material-icon-theme-arduino-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#0097A7" d="M2 14h10v2H2zm22-4h2v10h-2z"></svg:path><svg:path fill="#0097A7" d="M20 14h10v2H20z"></svg:path><svg:path fill="none" stroke="#0097A7" stroke-width="2" d="M2 5h4a10 10 0 0 1 10 10a10 10 0 0 0 10 10h4"></svg:path><svg:path fill="#0097A7" d="M11.644 22A8.95 8.95 0 0 1 6 24H2v2h4a10.98 10.98 0 0 0 8.479-4ZM26 4a10.98 10.98 0 0 0-8.479 4h2.835A8.95 8.95 0 0 1 26 6h4V4Z"></svg:path>`,
})
export class MaterialIconThemeArduinoIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeAsciidocIcon],svg[material-icon-theme-asciidoc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#0097a7" d="M4 18V8l5.39 10Zm0 4v3.67A2.33 2.33 0 0 0 6.33 28h8.9l-3.496-6Zm12.444 0l3.177 5.444A11.88 11.88 0 0 0 26.448 22Zm11.419-4A15 15 0 0 0 28 16A12 12 0 0 0 16 4L6 3.995q-.08 0-.158.005L14 18Z"></svg:path>`,
})
export class MaterialIconThemeAsciidocIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeAssemblyIcon],svg[material-icon-theme-assembly-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ff6e40" d="M8 6V2H4a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h4v-4H4V6Zm16-4v4h4v20h-4v4h4a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Zm-4 4h-2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2m-2 6V8h2v4Zm-4 6h-2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2m-2 6v-4h2v4Zm0-18c0 2 0 2-2 2v2h2v4h2V6Zm8 12c0 2 0 2-2 2v2h2v4h2v-8Z"></svg:path>`,
})
export class MaterialIconThemeAssemblyIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeAstroIcon],svg[material-icon-theme-astro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#7c4dff" d="M12.106 25.849c-1.262-1.156-1.63-3.586-1.105-5.346a5.18 5.18 0 0 0 3.484 1.66a9.68 9.68 0 0 0 5.882-.734c.215-.106.413-.247.648-.39a3.5 3.5 0 0 1 .16 1.555a4.26 4.26 0 0 1-1.798 3.021c-.404.3-.832.569-1.25.852a2.613 2.613 0 0 0-1.15 3.372l.048.161a3.4 3.4 0 0 1-1.5-1.285a3.6 3.6 0 0 1-.578-1.962a9 9 0 0 0-.05-1.037c-.114-.831-.504-1.204-1.238-1.225a1.45 1.45 0 0 0-1.507 1.18c-.012.056-.028.112-.046.178M4.901 20a17.75 17.75 0 0 1 7.4-2l2.913-8.38a.765.765 0 0 1 1.527 0L19.7 18a14.24 14.24 0 0 1 7.399 2S20.704 2.877 20.692 2.842C20.51 2.33 20.202 2 19.787 2h-7.619c-.415 0-.71.33-.904.842z"></svg:path>`,
})
export class MaterialIconThemeAstroIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeAstroConfigIcon],svg[material-icon-theme-astro-config-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#757575" d="M15 2H6a2.006 2.006 0 0 0-2 2v22a2.006 2.006 0 0 0 2 2h6v-4H6v-2h6v-2H6v-2h6v-2H6v-2h6v-2h2V4l8 8h2v-1Z"></svg:path><svg:path fill="#7c4dff" d="M12 12v18h18V12Zm10 16c-.9 0-2.025-1.267-2.025-3.005c-.914 0-.975.464-.975 1.005c-.881-.213-1-1.15-1-2h6c0 1.919-2 1.787-2 4m2.542-6a2.5 2.5 0 0 1-2.308-1.641l-.946-2.42a.305.305 0 0 0-.576 0l-.946 2.42A2.5 2.5 0 0 1 17.458 22H16l2.965-7.59a.63.63 0 0 1 .577-.41h2.916a.63.63 0 0 1 .577.41L26 22Z"></svg:path>`,
})
export class MaterialIconThemeAstroConfigIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeAstyleIcon],svg[material-icon-theme-astyle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ef5350" d="M8.203 5.447L5.83 6.777l1.329-2.374l-1.33-2.374l2.374 1.33l2.374-1.33l-1.33 2.374l1.33 2.374zm11.394 9.305l2.374-1.329l-1.33 2.374l1.33 2.373l-2.374-1.329l-2.374 1.33l1.33-2.374l-1.33-2.374zm2.374-12.724l-1.33 2.374l1.33 2.374l-2.374-1.33l-2.374 1.33l1.33-2.374l-1.33-2.374l2.374 1.33zm-8.223 10.236l2.317-2.316l-2.013-2.013l-2.317 2.317zm.978-5.212l2.222 2.222c.37.35.37.968 0 1.338L5.867 21.694c-.37.37-.987.37-1.339 0l-2.222-2.221c-.37-.352-.37-.969 0-1.34l11.081-11.08c.37-.37.988-.37 1.34 0z"></svg:path>`,
})
export class MaterialIconThemeAstyleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeAudioIcon],svg[material-icon-theme-audio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ef5350" d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2m6 10h-4v8a4 4 0 1 1-4-4a3.96 3.96 0 0 1 2 .555V8h6Z"></svg:path>`,
})
export class MaterialIconThemeAudioIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeAureliaIcon],svg[material-icon-theme-aurelia-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="materialIconThemeAurelia0" x1="-31.824" x2="19.682" y1="-11.741" y2="35.548" gradientTransform="scale(.95818 1.0436)" gradientUnits="userSpaceOnUse" href="#materialIconThemeAurelia1"></svg:lineargradient><svg:lineargradient id="materialIconThemeAurelia1" x1="-3.881" x2="2.377" y1="-1.442" y2="4.304"><svg:stop offset="0" stop-color="#BA68C8"></svg:stop><svg:stop offset="1" stop-color="#7E57C2"></svg:stop></svg:lineargradient><svg:lineargradient id="materialIconThemeAurelia2" x1="12.022" x2="-15.716" y1="13.922" y2="-23.952" gradientTransform="scale(.96226 1.0392)" gradientUnits="userSpaceOnUse" href="#materialIconThemeAurelia3"></svg:lineargradient><svg:lineargradient id="materialIconThemeAurelia3" x1=".729" x2="-.971" y1=".844" y2="-1.477"><svg:stop offset="0" stop-color="#5E35B1"></svg:stop><svg:stop offset=".14" stop-color="#8E24AA"></svg:stop><svg:stop offset=".29" stop-color="#AD1457"></svg:stop><svg:stop offset=".84" stop-color="#C2185B"></svg:stop><svg:stop offset="1" stop-color="#EC407A"></svg:stop></svg:lineargradient><svg:lineargradient id="materialIconThemeAurelia4" x1="-23.39" x2="23.931" y1="-57.289" y2="8.573" gradientTransform="scale(1.0429 .95884)" gradientUnits="userSpaceOnUse" href="#materialIconThemeAurelia5"></svg:lineargradient><svg:lineargradient id="materialIconThemeAurelia5" x1="-2.839" x2="2.875" y1="-6.936" y2="1.017"><svg:stop offset="0" stop-color="#BA68C8"></svg:stop><svg:stop offset="1" stop-color="#7E57C2"></svg:stop></svg:lineargradient><svg:lineargradient id="materialIconThemeAurelia6" x1="-53.331" x2="6.771" y1="-30.517" y2="18.785" gradientTransform="scale(.99898 1.001)" gradientUnits="userSpaceOnUse" href="#materialIconThemeAurelia7"></svg:lineargradient><svg:lineargradient id="materialIconThemeAurelia7" x1="-8.212" x2="1.02" y1="-4.691" y2="2.882"><svg:stop offset="0" stop-color="#BA68C8"></svg:stop><svg:stop offset="1" stop-color="#7E57C2"></svg:stop></svg:lineargradient><svg:lineargradient id="materialIconThemeAurelia8" x1="-14.029" x2="41.998" y1="-23.111" y2="26.259" gradientTransform="scale(1.0003 .99965)" gradientUnits="userSpaceOnUse" href="#materialIconThemeAurelia9"></svg:lineargradient><svg:lineargradient id="materialIconThemeAurelia9" x1="-1.404" x2="4.19" y1="-2.309" y2="2.62"><svg:stop offset="0" stop-color="#BA68C8"></svg:stop><svg:stop offset="1" stop-color="#7E57C2"></svg:stop></svg:lineargradient><svg:lineargradient id="materialIconThemeAureliaa" x1="31.177" x2="3.37" y1="41.442" y2="3.402" gradientTransform="scale(.96254 1.0389)" gradientUnits="userSpaceOnUse" href="#materialIconThemeAureliab"></svg:lineargradient><svg:lineargradient id="materialIconThemeAureliab" x1="1.911" x2=".204" y1="2.539" y2=".204"><svg:stop offset="0" stop-color="#7E57C2"></svg:stop><svg:stop offset=".14" stop-color="#7B1FA2"></svg:stop><svg:stop offset=".29" stop-color="#AD1457"></svg:stop><svg:stop offset=".84" stop-color="#C2185B"></svg:stop><svg:stop offset="1" stop-color="#EC407A"></svg:stop></svg:lineargradient><svg:lineargradient id="materialIconThemeAureliac" x1="-31.905" x2="19.599" y1="-14.258" y2="42.767" gradientTransform="scale(.95823 1.0436)" gradientUnits="userSpaceOnUse" href="#materialIconThemeAureliad"></svg:lineargradient><svg:lineargradient id="materialIconThemeAureliad" x1="-3.881" x2="2.377" y1="-1.738" y2="5.19"><svg:stop offset="0" stop-color="#BA68C8"></svg:stop><svg:stop offset="1" stop-color="#7E57C2"></svg:stop></svg:lineargradient><svg:lineargradient id="materialIconThemeAureliae" x1="4.301" x2="34.534" y1="34.41" y2="4.514" gradientTransform="scale(1.002 .99796)" gradientUnits="userSpaceOnUse" href="#materialIconThemeAureliaf"></svg:lineargradient><svg:lineargradient id="materialIconThemeAureliaf" x1=".112" x2=".901" y1=".897" y2=".116"><svg:stop offset="0" stop-color="#7E57C2"></svg:stop><svg:stop offset=".14" stop-color="#8E24AA"></svg:stop><svg:stop offset=".53" stop-color="#C2185B"></svg:stop><svg:stop offset=".79" stop-color="#C2185B"></svg:stop><svg:stop offset="1" stop-color="#EC407A"></svg:stop></svg:lineargradient></svg:defs><svg:g stroke-linejoin="round" stroke-miterlimit="1.414" clip-rule="evenodd"><svg:path fill="url(#materialIconThemeAurelia0)" d="M8.002 6.127L4.117 8.719L.116 2.723L4 .13z" transform="translate(11.282 3.07)scale(.47102)"></svg:path><svg:path fill="url(#materialIconThemeAurelia2)" d="m9.179 1.887l6.637 9.946l-7.906 5.276l-6.637-9.946L.115 5.43L8.02.153z" transform="translate(12.215 13.552)scale(.47102)"></svg:path><svg:path fill="url(#materialIconThemeAurelia4)" d="m7.3 1.88l1.462 2.189l-6.018 4.015L.124 4.16l1.315-.877L6.143.144z" transform="translate(8.41 16.686)scale(.47102)"></svg:path><svg:path fill="url(#materialIconThemeAurelia6)" d="M2.328 1.146L4.016.02l2.619 3.925L2.75 6.537l-1.46-2.19l2.197-1.466zm-1.04 3.201L.132 2.612l2.197-1.466l1.158 1.735z" transform="translate(16.99 11.686)scale(.47102)"></svg:path><svg:path fill="url(#materialIconThemeAurelia8)" d="m5.346 9.155l-1.315.877L.03 4.035L6.047.019l2.805 4.204L4.15 7.36l4.703-3.138l1.197 1.793z" transform="translate(2.738 8.18)scale(.47102)"></svg:path><svg:path fill="url(#materialIconThemeAureliaa)" d="m14.533 9.934l1.197 1.793l-7.907 5.276l-1.196-1.793L.052 5.358L7.958.082z" transform="translate(4.753 2.36)scale(.47102)"></svg:path><svg:path fill="url(#materialIconThemeAureliac)" d="M6.235 7.177L4.038 8.643L2.84 6.849L.036 2.646L3.92.053L7.923 6.05z" transform="translate(11.32 3.106)scale(.47102)"></svg:path><svg:path fill="#673AB7" d="m9.632 19.05l-.545-.818l2.215-1.478l.546.817zm7.965-5.315l-.545-.817l1.035-.691l.545.817z"></svg:path><svg:path fill="#7E57C2" d="m5.256 12.492l-.564-.845l2.216-1.478l.563.845zm7.965-5.315l-.564-.845l1.035-.69l.564.844z"></svg:path><svg:path fill="#880E4F" d="m16.538 14.441l-3.724 2.485l-.545-.817l3.724-2.485z"></svg:path><svg:path fill="#AD1457" d="m11.598 7.039l.564.844l-3.724 2.485l-.564-.844z"></svg:path><svg:path fill="#AB47BC" d="m4.2 6.363l.703 1.054l-1.053.702l-.703-1.053z"></svg:path><svg:path fill="#7E57C2" d="m7.996 18.99l.703 1.054l-1.054.703l-.702-1.054z"></svg:path><svg:path fill="url(#materialIconThemeAureliae)" d="M8.372 38.294L.017 29.876L29.749.08l8.636 8.201z" transform="rotate(11.282 -5.61 25.53)scale(.47102)"></svg:path></svg:g>`,
})
export class MaterialIconThemeAureliaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeAuthorsIcon],svg[material-icon-theme-authors-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#f44336" d="M15.787 13.71c-.275 0-.587 0-.918.047c1.098.796 1.865 1.847 1.865 3.267v2.367h5.68v-2.367c0-2.206-4.42-3.314-6.627-3.314m-7.575 0c-2.206 0-6.628 1.108-6.628 3.314v2.367H14.84v-2.367c0-2.206-4.421-3.314-6.628-3.314m0-1.894a2.84 2.84 0 0 0 2.841-2.84a2.84 2.84 0 0 0-2.84-2.84a2.84 2.84 0 0 0-2.841 2.84a2.84 2.84 0 0 0 2.84 2.84m7.575 0a2.84 2.84 0 0 0 2.84-2.84a2.84 2.84 0 0 0-2.84-2.84a2.84 2.84 0 0 0-2.84 2.84a2.84 2.84 0 0 0 2.84 2.84"></svg:path>`,
})
export class MaterialIconThemeAuthorsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeAutoIcon],svg[material-icon-theme-auto-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ffc400" d="M8.48 4.17c.334.574 1.047.798 1.696.636A7.5 7.5 0 0 1 12 4.583c.62 0 1.223.075 1.799.217c.647.159 1.357-.065 1.691-.64c.39-.668.116-1.532-.63-1.751A10.1 10.1 0 0 0 12 2c-1.006 0-1.977.146-2.894.419c-.743.22-1.015 1.083-.627 1.75Z"></svg:path><svg:path fill="#ad1457" d="M5.039 4.772c.564-.535 1.458-.34 1.848.331c.333.572.176 1.292-.284 1.769a7.4 7.4 0 0 0-1.456 2.17c-.242.552-.762.958-1.367.958c-.854 0-1.496-.781-1.191-1.572a10 10 0 0 1 2.45-3.656"></svg:path><svg:path fill="#cfd8dc" d="M3.197 12c.718 0 1.32.583 1.444 1.286c.613 3.483 3.675 6.13 7.359 6.13s6.746-2.647 7.359-6.13c.124-.703.726-1.286 1.444-1.286c.719 0 1.279.581 1.187 1.289C21.353 18.203 17.123 22 12 22s-9.353-3.797-9.99-8.711C1.918 12.58 2.478 12 3.197 12"></svg:path><svg:path fill="#ff5252" d="M20.203 9.958c.857 0 1.5-.786 1.19-1.578a10 10 0 0 0-2.458-3.632c-.564-.533-1.455-.336-1.845.333c-.333.573-.174 1.295.289 1.772a7.4 7.4 0 0 1 1.459 2.155c.243.548.762.95 1.365.95"></svg:path><svg:path fill="#cfd8dc" d="M7.133 9.32c-.442-.488.053-1.262.657-1.027l4.912 1.91c1.114.434 1.538 1.84.862 2.855a1.785 1.785 0 0 1-2.83.222l-3.6-3.96Z"></svg:path>`,
})
export class MaterialIconThemeAutoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeAutoLightIcon],svg[material-icon-theme-auto-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ffc400" d="M8.48 4.17c.334.574 1.047.798 1.696.636A7.5 7.5 0 0 1 12 4.583c.62 0 1.223.075 1.799.217c.647.159 1.357-.065 1.691-.64c.39-.668.116-1.532-.63-1.751A10.1 10.1 0 0 0 12 2c-1.006 0-1.977.146-2.894.419c-.743.22-1.015 1.083-.627 1.75Z"></svg:path><svg:path fill="#ad1457" d="M5.039 4.772c.564-.535 1.458-.34 1.848.331c.333.572.176 1.292-.284 1.769a7.4 7.4 0 0 0-1.456 2.17c-.242.552-.762.958-1.367.958c-.854 0-1.496-.781-1.191-1.572a10 10 0 0 1 2.45-3.656"></svg:path><svg:path fill="#546e7a" d="M3.197 12c.718 0 1.32.583 1.444 1.286c.613 3.483 3.675 6.13 7.359 6.13s6.746-2.647 7.359-6.13c.124-.703.726-1.286 1.444-1.286c.719 0 1.279.581 1.187 1.289C21.353 18.203 17.123 22 12 22s-9.353-3.797-9.99-8.711C1.918 12.58 2.478 12 3.197 12"></svg:path><svg:path fill="#ff5252" d="M20.203 9.958c.857 0 1.5-.786 1.19-1.578a10 10 0 0 0-2.458-3.632c-.564-.533-1.455-.336-1.845.333c-.333.573-.174 1.295.289 1.772a7.4 7.4 0 0 1 1.459 2.155c.243.548.762.95 1.365.95"></svg:path><svg:path fill="#546e7a" d="M7.133 9.32c-.442-.488.053-1.262.657-1.027l4.912 1.91c1.114.434 1.538 1.84.862 2.855a1.785 1.785 0 0 1-2.83.222l-3.6-3.96Z"></svg:path>`,
})
export class MaterialIconThemeAutoLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeAutohotkeyIcon],svg[material-icon-theme-autohotkey-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#4caf50" d="M25.333 4H6.667A2.657 2.657 0 0 0 4 6.667v18.666A2.667 2.667 0 0 0 6.667 28h18.666A2.667 2.667 0 0 0 28 25.333V6.667A2.667 2.667 0 0 0 25.333 4m-2.495 6.22a4 4 0 0 0-.163 1.01q0 .266-.058.83a9 9 0 0 0-.04.719c0 .584-.031 1.443-.092 2.55q-.074 1.253-.088 2.502c0 .412.032 1.057.097 1.91c.067.865.1 1.534.1 1.988a1.62 1.62 0 0 1-.505 1.197a1.65 1.65 0 0 1-1.225.475a1.92 1.92 0 0 1-1.233-.466a1.51 1.51 0 0 1-.554-1.19q0-.644-.06-1.934q-.047-.99-.056-1.979q0-.198.003-.376c-.805.065-1.766.198-2.867.398q-1.522.277-3.045.562q-.032.61-.11 1.65a30 30 0 0 0-.087 2.017a1.62 1.62 0 0 1-.506 1.192a1.73 1.73 0 0 1-1.224.474l-.048.001a1.7 1.7 0 0 1-1.157-.479a1.62 1.62 0 0 1-.502-1.2c0-.615.05-1.513.155-2.738c.104-1.182.157-2.077.157-2.661q0-1.15.057-3.46q.054-2.302.053-3.442a1.62 1.62 0 0 1 .508-1.196a1.68 1.68 0 0 1 1.222-.478a1.7 1.7 0 0 1 1.206.484a1.63 1.63 0 0 1 .5 1.19q0 .687-.055 2.07q-.036 1.01-.044 2.023q.001.23-.065.905a7 7 0 0 0-.022.251l2.825-.532a28 28 0 0 1 3.086-.395q.037-.83.095-2.76a4.8 4.8 0 0 1 .466-1.778c.421-.926.957-1.395 1.591-1.395a1.75 1.75 0 0 1 1.166.434l.003.002a1.58 1.58 0 0 1 .566 1.228a1.5 1.5 0 0 1-.05.397"></svg:path>`,
})
export class MaterialIconThemeAutohotkeyIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeAutoitIcon],svg[material-icon-theme-autoit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#1976d2" d="M12.002 2a10 10 0 0 0-10 10a10 10 0 0 0 10 10a10 10 0 0 0 10-10a10 10 0 0 0-10-10m.139 4.419q.642 0 1.07.294q.431.294.731.731l5.71 8.262H9.026l1.707-2.35h3.15q.443 0 .77.028a11 11 0 0 1-.443-.62q-.253-.376-.485-.704l-1.64-2.417l-4.29 6.063H4.45l5.86-8.262q.285-.396.723-.71q.437-.315 1.108-.315"></svg:path>`,
})
export class MaterialIconThemeAutoitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeAzureIcon],svg[material-icon-theme-azure-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#01579b" d="M12.001 4h7.102l-7.372 23.181a1.14 1.14 0 0 1-1.073.819H5.13A1.166 1.166 0 0 1 4 26.801a1.3 1.3 0 0 1 .06-.385l6.87-21.599A1.14 1.14 0 0 1 12.001 4"></svg:path><svg:path fill="#1976d2" d="M22.32 20H11.06a.537.537 0 0 0-.522.55a.57.57 0 0 0 .166.408l7.236 6.716a1.1 1.1 0 0 0 .775.325h6.376Z"></svg:path><svg:path fill="#29b6f6" d="M21.071 4.816A1.14 1.14 0 0 0 20.001 4h-7.915a1.14 1.14 0 0 1 1.072.815l6.868 21.599a1.22 1.22 0 0 1-.71 1.52a1.1 1.1 0 0 1-.362.064h7.915A1.166 1.166 0 0 0 28 26.8a1.3 1.3 0 0 0-.06-.385L21.072 4.817Z"></svg:path>`,
})
export class MaterialIconThemeAzureIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeAzurePipelinesIcon],svg[material-icon-theme-azure-pipelines-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#64b5f6" d="M3.98 22.01h1.803v4.208H9.99v1.803H3.98Z"></svg:path><svg:path fill="#1565c0" d="M3.98 10.991v5.51l3.505 3.61l1.503-1.606l4.508 4.508l-1.502 1.502l3.506 3.506h5.51a1 1 0 0 0 1.001-1.002v-8.014L12.995 9.99H4.982a1 1 0 0 0-1.003 1.001Z"></svg:path><svg:path fill="#1e88e5" d="M8.317 18.44a1 1 0 0 1-.125-1.265L16.407 4.87a2 2 0 0 1 1.666-.891h8.946A1 1 0 0 1 28.02 4.98v8.946a2 2 0 0 1-.891 1.667l-12.305 8.215a1 1 0 0 1-1.265-.126Z"></svg:path><svg:path fill="#64b5f6" d="m8.976 21.542l7.648-7.648l1.48 1.481l-7.647 7.648Z"></svg:path><svg:path fill="#42a5f5" d="m11.68 21.801l-1.481-1.48l6.426-6.427l1.48 1.481Z"></svg:path><svg:path fill="#90caf9" d="M22.011 12.995a3.006 3.006 0 0 0 .096-6.011h-.096a3.006 3.006 0 0 0 0 6.01Z"></svg:path>`,
})
export class MaterialIconThemeAzurePipelinesIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeBabelIcon],svg[material-icon-theme-babel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fdd835" d="M18.23 11.21q-.045-.24-1.32-1.65c-.02-.19.29-.45.9-.8l1.74-1.55c.39-.5.62-1.28.69-2.38l-.02-.26c-.07-.78-.63-1.4-1.69-1.89c-.63-.42-1.76-.65-3.38-.68c-1.35.11-3.11.59-5.28 1.43c-.6.43-1.28.86-2.04 1.28l.01.14l.21-.08c.08-.01.13.03.14.11l.13-.07l.07-.01l.01.06c0 .07-.47.44-1.76 1.35l-.06.12c-.31.02-.61.25-.91.67l.08.12l.25-.09l.18.24c.32-.33.66-.62 1.03-.87c.19.05.29.11.44.16c1.02-.75 2.03-1.3 3.04-1.64l.01.14c-.2.27-.32.42-.38.42l.1.23c.01.19-2.55 7-6.66 14.44l.08.19c.35-.08.58-.17.75-.26l.01.13l.4-.03l-.67 1.76l.14.06c.57-.64 1-1.29 1.3-1.88c1.67-.49 2.94-.97 3.82-1.44c.88-.08 1.56-.31 2.02-.7l.92-.47c1.27-.98 2.22-1.67 2.87-2.08c1.33-.98 2.2-1.93 2.6-2.85zm-3.46 2.31L13 14.91c-1.29.85-2 1.3-2.09 1.3c-2.07 1.13-3.36 1.72-3.86 1.76l-.05.01c.04-.23.96-2.12 2.75-5.67c.78-.06 2.02-.43 3.71-1.1l.41-.03c.85-.08 1.49.09 1.91.49l.03.26c-.31.9-.67 1.44-1.04 1.59m1.09-5.78q-.27.33-1.5 1.11c-.27.03-1.27.42-3.01 1.18l-.28-.05l-.01-.12c-.02-.25.09-.57.34-.95c.13-.7.28-1.12.44-1.2l1.45-3.28c-.02-.22.29-.35.93-.46l.21-.02l.01.18l1.16-.16c1.15-.1 1.75.14 1.8.7l.13-.02l-.03-.32l.15-.02c.35.19.52.4.54.68c.02.18-.08.41-.29.68c-.09.01-.14-.06-.15-.18l-.14.01l-.03.4c-.58.87-1.01 1.31-1.27 1.34z"></svg:path>`,
})
export class MaterialIconThemeBabelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeBallerinaIcon],svg[material-icon-theme-ballerina-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#00bfa5" d="m14 12l-6-2V2h6Zm-6 0l4 2.058L8 16Zm0 18V18l6-2v4l-2 10Zm10-18l6-2V2h-6Zm6 0l-4 2.058L24 16Zm0 18V18l-6-2v4l2 10Z"></svg:path>`,
})
export class MaterialIconThemeBallerinaIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeBazelIcon],svg[material-icon-theme-bazel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#81c784" d="m153.491 50.983l102.508 102.508l-102.508 102.508L50.983 153.491z"></svg:path><svg:path fill="#43a047" d="M50.983 153.491v102.508l102.508 102.508V255.999z"></svg:path><svg:path fill="#81c784" d="m358.507 50.983l102.508 102.508l-102.508 102.508l-102.508-102.508z"></svg:path><svg:path fill="#43a047" d="M461.015 153.491v102.508L358.507 358.507V255.999zm-205.016 0l102.508 102.508l-102.508 102.508l-102.508-102.508z"></svg:path><svg:path fill="#2e7d32" d="M255.999 358.507v102.508L153.491 358.507V255.999z"></svg:path><svg:path fill="#1b5e20" d="m255.999 358.507l102.508-102.508v102.508L255.999 461.015z"></svg:path>`,
})
export class MaterialIconThemeBazelIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeBbxIcon],svg[material-icon-theme-bbx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#c62828" d="M128 704v128c0 70.692 57.308 128 128 128h608c17.728 0 32-14.272 32-32V704z"></svg:path><svg:path fill="#ffe082" d="M704 704v192h128V704z"></svg:path><svg:path fill="#fff8e1" d="M192 704v96c0 53.184 42.816 96 96 96h544a96 96 0 0 1-96-96a96 96 0 0 1 96-96z"></svg:path><svg:path fill="#ff1744" d="M320 832h192v192l-96-96l-96 96z"></svg:path><svg:path fill="#f44336" d="M256 64c-70.692 0-128 57.308-128 128v640c0 11.088 1.557 21.787 4.207 32.047C146.767 807.565 197.672 768.07 256 768h608c17.728 0 32-14.272 32-32V96c0-17.728-14.272-32-32-32z"></svg:path><svg:path fill="#ffeb3b" d="M256 192c-70.912 0-128 57.088-128 128v64c0-70.912 57.088-128 128-128h448v320H256c-70.912 0-128 57.088-128 128v64c0-70.912 57.088-128 128-128h512V192z"></svg:path>`,
})
export class MaterialIconThemeBbxIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeBeancountIcon],svg[material-icon-theme-beancount-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#e64a19" d="M26.471 5.736c7.383 3.577 2.04 13.636-5.547 17.984c-5.998 3.44-18.128 5.76-18.877-2.22c-.738-7.863 7.61-6.698 11.575-8.67c4.032-2.003 6.854-9.998 12.85-7.093zm-11.684 8.89c-1.167.438-3.695.194-3.479 2.094c.215 1.932 3.483.908 5.243.097c1.788-.82 3.415-2.475 2.27-3.496c-1.424-1.268-2.421.698-4.034 1.305"></svg:path>`,
})
export class MaterialIconThemeBeancountIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeBenchJsIcon],svg[material-icon-theme-bench-js-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ffca28" d="M6.915 9.906q.42.413 1.084.404t.98-.472l3.92-5.775l-5.88 3.85q-.472.309-.498.945t.394 1.048M7.999 2q1.033 0 1.987.284q.953.283 1.793.85l-1.33.825q-.577-.292-1.198-.438q-.622-.146-1.252-.146q-2.327 0-3.963 1.607T2.4 8.875q0 .722.201 1.427q.201.704.569 1.323h9.659q.402-.653.586-1.358t.184-1.46q0-.62-.149-1.204t-.446-1.134l.84-1.307q.525.808.831 1.72q.306.91.324 1.89q.017.98-.228 1.873q-.245.894-.717 1.702q-.193.31-.525.481q-.333.172-.7.172h-9.66q-.367 0-.7-.172t-.524-.481q-.455-.774-.7-1.642T1 8.875q0-1.427.551-2.673T3.056 4.02q.954-.937 2.231-1.479Q6.565 2 8 2zm.123 5.38"></svg:path>`,
})
export class MaterialIconThemeBenchJsIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeBenchJsxIcon],svg[material-icon-theme-bench-jsx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#00bcd4" d="M6.915 9.906q.42.413 1.084.404t.98-.472l3.92-5.775l-5.88 3.85q-.472.309-.498.945t.394 1.048M7.999 2q1.033 0 1.987.284q.953.283 1.793.85l-1.33.825q-.577-.292-1.198-.438q-.622-.146-1.252-.146q-2.327 0-3.963 1.607T2.4 8.875q0 .722.201 1.427q.201.704.569 1.323h9.659q.402-.653.586-1.358t.184-1.46q0-.62-.149-1.204t-.446-1.134l.84-1.307q.525.808.831 1.72q.306.91.324 1.89q.017.98-.228 1.873q-.245.894-.717 1.702q-.193.31-.525.481q-.333.172-.7.172h-9.66q-.367 0-.7-.172t-.524-.481q-.455-.774-.7-1.642T1 8.875q0-1.427.551-2.673T3.056 4.02q.954-.937 2.231-1.479Q6.565 2 8 2zm.123 5.38"></svg:path>`,
})
export class MaterialIconThemeBenchJsxIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeBenchTsIcon],svg[material-icon-theme-bench-ts-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#0288d1" d="M6.915 9.906q.42.413 1.084.404t.98-.472l3.92-5.775l-5.88 3.85q-.472.309-.498.945t.394 1.048M7.999 2q1.033 0 1.987.284q.953.283 1.793.85l-1.33.825q-.577-.292-1.198-.438q-.622-.146-1.252-.146q-2.327 0-3.963 1.607T2.4 8.875q0 .722.201 1.427q.201.704.569 1.323h9.659q.402-.653.586-1.358t.184-1.46q0-.62-.149-1.204t-.446-1.134l.84-1.307q.525.808.831 1.72q.306.91.324 1.89q.017.98-.228 1.873q-.245.894-.717 1.702q-.193.31-.525.481q-.333.172-.7.172h-9.66q-.367 0-.7-.172t-.524-.481q-.455-.774-.7-1.642T1 8.875q0-1.427.551-2.673T3.056 4.02q.954-.937 2.231-1.479Q6.565 2 8 2zm.123 5.38"></svg:path>`,
})
export class MaterialIconThemeBenchTsIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeBibliographyIcon],svg[material-icon-theme-bibliography-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#795548" d="M96 832h832c17.728 0 32 14.272 32 32v64c0 17.728-14.272 32-32 32H96c-17.728 0-32-14.272-32-32v-64c0-17.728 14.272-32 32-32"></svg:path><svg:path fill="#4caf50" d="M160 192h64c17.728 0 32 14.272 32 32v512c0 17.728-14.272 32-32 32h-64c-17.728 0-32-14.272-32-32V224c0-17.728 14.272-32 32-32"></svg:path><svg:path fill="#f44336" d="M512 96c0-17.728-14.272-32-32-32H352c-17.728 0-32 14.272-32 32v640c0 17.728 14.272 32 32 32h128c17.728 0 32-14.272 32-32z"></svg:path><svg:path fill="#2196f3" d="m530.161 158.902l57.333-27.693a31.804 31.804 0 0 1 42.634 14.936l262.693 548.17c7.66 15.984.977 35.057-14.982 42.766l-57.333 27.693a31.804 31.804 0 0 1-42.634-14.936L515.18 201.668c-7.66-15.983-.977-35.057 14.982-42.766z"></svg:path><svg:path fill="#ffeb3b" d="M320 192v64h192v-64zm0 384v64h192v-64z"></svg:path>`,
})
export class MaterialIconThemeBibliographyIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeBibtexStyleIcon],svg[material-icon-theme-bibtex-style-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#795548" d="M96 832h832c17.728 0 32 14.272 32 32v64c0 17.728-14.272 32-32 32H96c-17.728 0-32-14.272-32-32v-64c0-17.728 14.272-32 32-32"></svg:path><svg:path fill="#4caf50" d="M160 192h64c17.728 0 32 14.272 32 32v512c0 17.728-14.272 32-32 32h-64c-17.728 0-32-14.272-32-32V224c0-17.728 14.272-32 32-32"></svg:path><svg:path fill="#f44336" d="M512 96c0-17.728-14.272-32-32-32H352c-17.728 0-32 14.272-32 32v640c0 17.728 14.272 32 32 32h128c17.728 0 32-14.272 32-32z"></svg:path><svg:path fill="#ffeb3b" d="M320 192v64h192v-64zm0 384v64h192v-64z"></svg:path><svg:path fill="#bbdefb" d="M608 320h256c17.728 0 32 14.272 32 32v384c0 17.728-14.272 32-32 32H608c-17.728 0-32-14.272-32-32V352c0-17.728 14.272-32 32-32"></svg:path><svg:path fill="#2196f3" d="M608 320c-17.673 0-32 14.327-32 32v352c35.346 0 64-28.654 64-64v-32a32 32 0 0 1 32-32c17.673 0 32-14.327 32-32v-64a32 32 0 0 1 32-32c17.673 0 32-14.327 32-32v-96z"></svg:path><svg:path d="M745.606 339.205L924.74 473.693a15.965 15.965 0 0 1 3.19 22.401a15.965 15.965 0 0 1-22.403 3.19l-179.133-134.49a15.965 15.965 0 0 1-3.19-22.401a15.965 15.965 0 0 1 22.402-3.19z"></svg:path>`,
})
export class MaterialIconThemeBibtexStyleIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeBicepIcon],svg[material-icon-theme-bicep-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fbc02d" d="M3 18S4.15 6.885 7 3l5 1l-1 3H9v7h1c1.9-2.915 5.783-3.98 8.157-2.915c4.475 1.915 2.998 5.967.148 7.905C16.025 20.548 10.113 23.05 3 18"></svg:path>`,
})
export class MaterialIconThemeBicepIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeBiomeIcon],svg[material-icon-theme-biome-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#42A5F5" d="M37 9L22.745 33.69a32.2 32.2 0 0 1 16.869-.584l4.818 1.137l-4.533 19.22l-4.825-1.137c-5.93-1.399-11.628 1.716-14.036 6.685l-4.46-2.158c3.404-7.029 11.425-11.285 19.637-9.347l2.259-9.58A27.23 27.23 0 0 0 5 64.424l64 .001z"></svg:path>`,
})
export class MaterialIconThemeBiomeIcon {
  readonly viewBox = input("0 0 74 74")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeBitbucketIcon],svg[material-icon-theme-bitbucket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="materialIconThemeBitbucket0" x1="64.01" x2="32.99" y1="65.26" y2="89.48" gradientUnits="userSpaceOnUse"><svg:stop offset=".18" stop-color="#1565c0"></svg:stop><svg:stop offset="1" stop-color="#1e88e5"></svg:stop></svg:lineargradient></svg:defs><svg:path fill="#1e88e5" d="M2.985 3.333a.618.618 0 0 0-.617.716l2.621 15.914a.84.84 0 0 0 .822.701h12.576a.62.62 0 0 0 .618-.519l2.627-16.09a.618.618 0 0 0-.617-.716zm11.039 11.501H10.01L8.923 9.16h6.074z"></svg:path><svg:path fill="url(#materialIconThemeBitbucket0)" d="M59.67 60.12H40.9L37.75 78.5h-13L9.4 96.73a2.7 2.7 0 0 0 1.75.66h40.74a2 2 0 0 0 2-1.68z" transform="translate(2.368 -9.404)scale(.30877)"></svg:path>`,
})
export class MaterialIconThemeBitbucketIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeBithoundIcon],svg[material-icon-theme-bithound-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#e53935"><svg:path d="M350.738 186.163c-1.32-13.024-4.224-26.312-8.36-38.72c-11.88-35.464-33.968-71.808-61.864-96.888c-1.232-1.056-5.896-3.872-7.656-2.904c-4.576 2.552 4.048 20.064 5.104 23.232c6.512 19.36 10.648 39.864 5.984 60.104c-6.248 26.752-26.752 45.496-54.12 47.784c-15.048 1.232-30.184-.44-45.232 1.32c-22.528 2.64-45.496 10.384-59.84 28.864c-1.672 2.112-3.168 4.488-4.576 6.952h-.352c-5.544.616-11.088-1.76-13.816-3.256c-.704-.44-1.408-.792-1.936-1.056c-16.72-9.24-29.04-29.92-36.608-46.992c-3.432-7.92-6.336-16.192-8.184-24.552c-.88-3.784-.968-7.744-1.144-11.616c-.088-2.376.264-5.72-1.056-7.832c-2.904-4.576-6.6-.176-7.216 3.52c-.968 6.072-1.848 12.056-1.584 18.216c.44 10.384 3.344 20.68 7.04 30.36c5.456 14.256 13.112 27.368 23.056 39.072c4.136 4.84 8.536 9.328 13.288 13.464c4.224 3.784 9.592 6.776 12.76 11.616c3.696 5.544 4.312 12.408 3.96 18.832c-.88 16.984-1.408 32.912 3.432 49.456c4.224 14.696 9.504 29.744 18.304 42.328c4.4 6.248 9.856 12.848 15.84 17.512c4.048 3.168 11.704 3.52 7.304-8.096c-9.768-25.784-10.648-52.536 4.576-76.648c12.76-20.064 35.288-37.928 60.72-34.76c37.4 4.664 63.448 38.984 61.6 75.68c-.528 10.296-.88 19.096-4.136 28.776c-1.32 3.872-2.288 8.8-1.32 12.848c1.584 6.864 9.24 4.312 12.584-.176c9.064-12.32 18.568-24.288 27.104-36.96c27.808-41.536 41.36-89.584 36.344-139.48"></svg:path><svg:path d="M141.21 85.051c.616 2.024 1.232 4.224 1.672 6.6c.088.968.352 2.024.88 2.992c2.288 5.984 7.832 9.24 13.024 12.32c3.168 1.936 8.888 3.784 12.408 5.192c4.576 1.848 14.432-.528 19.096-.88c10.736-.88 20.68-4.664 30.536 1.056c-50.512 59.224-2.816 72.424 34.144 43.912c42.24-32.56 2.464-109.384 2.464-109.384s-.88-5.984-16.896-9.504a52 52 0 0 0-4.488-2.112c-15.84-7.304-30.096 4.664-41.536 14.432c-3.344 2.816-6.6 5.632-10.12 8.272c-4.752 3.52-9.856 6.424-15.224 8.976c-5.632 2.64-12.32 5.632-18.568 5.896c-.88 0-2.552.176-4.312.528c-2.728.264-4.136.968-4.752 2.2c-1.056.88-1.76 2.112-1.584 3.696c.176 2.2 1.232 4.048 2.376 5.456c.352.088.616.264.88.352"></svg:path></svg:g>`,
})
export class MaterialIconThemeBithoundIcon {
  readonly viewBox = input("0 0 400 400")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeBlinkIcon],svg[material-icon-theme-blink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#f9a825" d="M130.974 23.383c57.809 1.624 103.262 49.782 101.638 107.591s-49.782 103.262-107.59 101.639C67.303 230.989 21.85 183.01 23.383 125.293c1.533-57.81 49.602-103.443 107.41-101.91zm-.541 10.823c-51.766-1.353-94.875 39.59-96.137 91.447c-1.353 51.766 39.59 94.875 91.357 96.137c51.766 1.353 94.875-39.59 96.137-91.357c1.443-51.856-39.5-94.875-91.357-96.227c.09 0 0 0 0 0"></svg:path><svg:path fill="#f9a825" d="M137.9 93.403c-4.149 3.968-2.525 12.806 3.878 19.57s15.241 8.838 19.209 4.78s2.706-12.987-3.788-19.751s-15.422-8.748-19.57-4.78zm52.217-25.162c8.207 8.568 14.43 18.758 18.398 29.851c0 0 2.706 7.395-5.862 7.395H181.73s-6.674-.54-6.944 5.14c-.451 7.035-.27 12.988-.27 12.988c.27 4.058 1.803 8.026 4.328 11.183l21.554 22.727a9.184 9.184 0 0 1 1.082 12.355c-10.912 18.578-28.408 32.286-49.06 38.509c-6.314 1.894-6.945-3.247-6.765-6.764c0-2.255 2.616-52.397 2.616-52.397c.721-5.411-.992-10.912-4.78-14.881c-6.764-7.215-11.003-11.814-11.003-11.814s-4.78-4.78-11.634-11.904c-3.788-3.878-9.018-5.862-14.43-5.501H54.027c-3.427 0-8.658-.812-6.403-7.035c7.305-20.292 21.915-37.066 41.124-46.896c3.878-2.705 9.199-1.984 12.265 1.714l21.554 22.727c3.066 2.705 6.944 4.329 11.003 4.78c0 0 5.862.45 12.987.36c5.591 0 5.501-6.764 5.501-6.764s.902-13.888 1.173-20.923c-.27-2.976 1.894-5.591 4.78-5.862c.991-.09 1.893.09 2.795.451c11.003 4.69 21.013 11.634 29.22 20.292z"></svg:path>`,
})
export class MaterialIconThemeBlinkIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeBlinkLightIcon],svg[material-icon-theme-blink-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="128" cy="128" r="97.4" fill="#37474f"></svg:circle><svg:path fill="#f9a825" d="M130.974 23.383c57.809 1.624 103.262 49.782 101.638 107.591s-49.782 103.262-107.59 101.639C67.303 230.989 21.85 183.01 23.383 125.293c1.533-57.81 49.602-103.443 107.41-101.91zm-.541 10.823c-51.766-1.353-94.875 39.59-96.137 91.447c-1.353 51.766 39.59 94.875 91.357 96.137c51.766 1.353 94.875-39.59 96.137-91.357c1.443-51.856-39.5-94.875-91.357-96.227c.09 0 0 0 0 0"></svg:path><svg:path fill="#f9a825" d="M137.9 93.403c-4.149 3.968-2.525 12.806 3.878 19.57s15.241 8.838 19.209 4.78s2.706-12.987-3.788-19.751s-15.422-8.748-19.57-4.78zm52.217-25.162c8.207 8.568 14.43 18.758 18.398 29.851c0 0 2.706 7.395-5.862 7.395H181.73s-6.674-.54-6.944 5.14c-.451 7.035-.27 12.988-.27 12.988c.27 4.058 1.803 8.026 4.328 11.183l21.554 22.727a9.184 9.184 0 0 1 1.082 12.355c-10.912 18.578-28.408 32.286-49.06 38.509c-6.314 1.894-6.945-3.247-6.765-6.764c0-2.255 2.616-52.397 2.616-52.397c.721-5.411-.992-10.912-4.78-14.881c-6.764-7.215-11.003-11.814-11.003-11.814s-4.78-4.78-11.634-11.904c-3.788-3.878-9.018-5.862-14.43-5.501H54.027c-3.427 0-8.658-.812-6.403-7.035c7.305-20.292 21.915-37.066 41.124-46.896c3.878-2.705 9.199-1.984 12.265 1.714l21.554 22.727c3.066 2.705 6.944 4.329 11.003 4.78c0 0 5.862.45 12.987.36c5.591 0 5.501-6.764 5.501-6.764s.902-13.888 1.173-20.923c-.27-2.976 1.894-5.591 4.78-5.862c.991-.09 1.893.09 2.795.451c11.003 4.69 21.013 11.634 29.22 20.292z"></svg:path>`,
})
export class MaterialIconThemeBlinkLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeBlitzIcon],svg[material-icon-theme-blitz-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#7c4dff" d="M8.613 11.997c1.333 0 2.588.621 3.389 1.677l3.454 4.552a.28.28 0 0 1 .025.297l-1.991 3.825a.284.284 0 0 1-.477.04l-7.901-10.39zm2.375-10.385l7.9 10.39h-3.5a4.25 4.25 0 0 1-3.39-1.676L8.546 5.774a.28.28 0 0 1-.025-.297l1.99-3.825a.284.284 0 0 1 .478-.04z"></svg:path>`,
})
export class MaterialIconThemeBlitzIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeBowerIcon],svg[material-icon-theme-bower-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#5D4037" d="M376.834 196.261c-18.912-18.172-113.486-29.517-143.327-32.819a88 88 0 0 0 3.692-10.58c4.068-1.78 8.46-3.438 13-4.822c.553 1.632 3.159 7.885 4.644 10.853c60.004 1.655 63.085-44.591 65.525-57.26c2.387-12.389 2.265-24.359 22.847-46.241c-30.663-8.936-74.759 13.85-89.53 47.762c-5.55-2.08-11.114-3.615-16.615-4.565c-3.943-15.905-24.474-60.215-78.352-60.215c-68.215 0-142.567 56.276-142.567 151.542c0 80.078 54.672 150.258 85.559 150.258c13.49 0 25.094-10.103 27.818-19.158c2.284 6.209 9.292 25.51 11.593 30.424c3.402 7.267 19.134 13.554 26.018 6.014c8.852 4.917 25.095 7.88 33.947-5.235c17.049 3.606 32.12-6.56 32.45-18.691c8.365-.447 12.469-12.193 10.642-21.547c-1.346-6.887-15.732-31.599-21.343-40.13c11.108 9.035 39.243 11.593 42.66.006c17.909 14.057 45.817 6.679 48.03-4.753c21.761 5.654 46.72-6.764 42.621-21.803c34.958-2.418 30.483-39.611 20.675-49.037z"></svg:path><svg:path fill="#03A9F4" d="M279.494 116.935c7.529-14.938 16.99-31.25 28.94-41.34c-13.153 5.3-26.139 21.146-33.817 38.083a118 118 0 0 0-11.893-6.646c10.71-22.862 35.598-41.955 63.025-43.447c-18.37 16.662-11.85 51.29-26.954 69.623c-4.322-4.342-14.247-12.72-19.301-16.273m-11.876 24.326c.008-.572.222-4.981.624-6.994c-1.054-.248-7.601-1.529-11.015-1.449c-.249 4.288 1.802 11.581 3.828 15.972c13.956-.292 24.036-4.472 29.969-8.314c-5.051-2.354-13.67-4.448-20.224-5.7c-.732 1.513-2.531 5.368-3.182 6.485"></svg:path><svg:g stroke-width=".973" transform="translate(10.989 32.73)scale(.81733)"><svg:path fill="#4CAF50" d="M250.54 277.39c.004.024.015.057.018.082c-2.165-4.657-4.463-10.314-7.208-17.708c10.688 15.557 44.184 7.533 42.427-6.407c16.395 12.336 50.143-2.055 42.471-19.353c16.423 7.653 35.168-7.745 30.964-14.455c28 5.4 54.832 10.783 63.256 12.938c-5.595 9.123-18.339 15.566-37.549 11.089c10.38 14.14-9.773 31.105-37.844 21.76c6.18 13.883-18.814 26.38-47.22 11.91c.361 13.889-35.24 15.488-49.315.143zm55.543-70.194c32.497 2.495 86.238 7.34 119.51 11.997c-2.102-10.828-7.844-13.921-25.905-18.772c-19.425 2.072-68.706 6.913-93.604 6.776z"></svg:path><svg:path fill="#FFCA28" d="M285.78 253.36c16.395 12.336 50.143-2.055 42.471-19.353c16.423 7.653 35.168-7.745 30.964-14.455c-33.103-6.383-67.84-12.788-75.719-13.908c4.78.254 12.702.797 22.59 1.556c24.899.137 74.18-4.704 93.604-6.775c-31.452-7.975-95.666-19.613-140.01-22.48c-2.055 3.003-5.833 8.097-12.413 13.51c-19.403 41.053-54.557 68.34-93.454 68.34c-11.335 0-24.018-1.912-38.233-6.456c-8.865 9.497-46.661 16.694-77.329 1.641c24.326 56.961 80.74 94.984 143.19 94.984c52.591 0 75.912-53.704 70.808-67.914c-1.238-3.45-6.145-14.889-8.891-22.283c10.689 15.556 44.185 7.532 42.429-6.408z"></svg:path><svg:path fill="#E0E0E0" d="M253.91 145.27c4.644-2.526 20.69-12.253 35.981-15.908a68 68 0 0 1-.536-5.12c-10.032 2.403-28.945 10.51-39.784-.661c22.866 6.9 34.283-6.149 51.09-6.149c10.014 0 24.305 2.798 35.57 7.22c-9.061-8.37-38.772-33.63-75.558-33.717c-8.213 9.957-17.09 31.526-6.764 54.334z"></svg:path><svg:path fill="#F4511E" d="M115.58 253.33c14.215 4.544 26.898 6.457 38.233 6.457c38.896 0 74.05-27.29 93.454-68.341c-14.351 11.978-39.291 22.228-78.241 22.228c34.694-7.866 64.56-25.156 79.753-50.427c-10.68-16.998-22.263-54.603 7.07-84.33c-4.512-14.497-26.475-52.766-75.095-52.766c-84.85 0-155.17 71.001-155.17 166.15c0 22.525 4.547 43.65 12.67 62.664c30.666 15.054 68.462 7.858 77.327-1.64z"></svg:path><svg:path fill="#FFCA28" d="M141.03 108.45c0 21.644 17.546 39.191 39.19 39.191s39.192-17.548 39.192-39.191s-17.548-39.191-39.192-39.191s-39.19 17.547-39.19 39.191"></svg:path><svg:path fill="#5D4037" d="M156.76 108.45c0 12.958 10.507 23.463 23.463 23.463c12.96 0 23.464-10.506 23.464-23.463c0-12.959-10.504-23.464-23.464-23.464c-12.957 0-23.463 10.506-23.463 23.464"></svg:path><svg:ellipse cx="180.22" cy="98.044" fill="#FAFAFA" rx="13.673" ry="8.501"></svg:ellipse></svg:g>`,
})
export class MaterialIconThemeBowerIcon {
  readonly viewBox = input("0 0 400 400")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeBrainfuckIcon],svg[material-icon-theme-brainfuck-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ff4081" d="M21.085 13.343a4.35 4.35 0 0 1-1.812 3.788l.738 1.429c.22.431.25.94.058 1.39a1.68 1.68 0 0 1-1.017.959l-.758.24a1.62 1.62 0 0 1-1.784-.527l-2.032-2.398a5.1 5.1 0 0 1-2.34-1.055a5 5 0 0 1-1.438.22a4.2 4.2 0 0 1-2.398-.757a5 5 0 0 1-1.553.211a5.6 5.6 0 0 1-2.206-.431a3.94 3.94 0 0 1-2.33-3.462c-.077-.69.038-1.39.336-2.024a3.3 3.3 0 0 1-.068-2.234a4.3 4.3 0 0 1 1.86-2.148c.557-1.62 2.12-2.704 3.837-2.589a4.404 4.404 0 0 1 5.59-.355a5 5 0 0 1 1.247-.163A4.16 4.16 0 0 1 18.37 5.01a4.61 4.61 0 0 1 3.433 4.286a5.05 5.05 0 0 1-.825 3.002c.067.345.106.69.106 1.045m-4.795-1.352c.547.067.978.48.978 1.026a.96.96 0 0 1-.959.959h-.604a4.97 4.97 0 0 1-1.553 2.196c.24.086.489.134.738.201c4.92-.067 4.344-3.068 4.344-3.116a2.486 2.486 0 0 0-2.58-2.388a.96.96 0 0 1-.958-.959a.96.96 0 0 1 .958-.959c1.18.029 2.312.47 3.194 1.247a5 5 0 0 0 .076-.854c-.057-1.189-.594-2.224-2.752-2.426c-1.198-2.838-4.22-1.266-4.22-.383c-.028.22.202.69.24.719a.96.96 0 0 1 .96.959a.96.96 0 0 1-.96.959a2.25 2.25 0 0 1-1.37-.537c-.461.297-.988.48-1.535.537c-.547.048-.997-.336-1.026-.863a.93.93 0 0 1 .844-1.055c.153-.02.901-.134.901-.739c0-.632.24-1.237.652-1.716c-.882-.24-1.831.077-2.79 1.237c-1.765-.278-2.484-.038-3.011 1.832c-.911.45-1.39.767-1.602 1.726a5.65 5.65 0 0 1 3.088.24a.97.97 0 0 1 .566 1.236a.96.96 0 0 1-1.237.566a2.93 2.93 0 0 0-2.206-.057c-.307.259-.307.796-.307 1.218c0 .71.355 1.37.96 1.754a3.5 3.5 0 0 0 1.64.384a6 6 0 0 1-.375-.777a.995.995 0 0 1 1.88-.652c.383 1.093 1.361 1.841 2.512 1.966a3.59 3.59 0 0 0 3.06-2.043c.22-1.323 1.284-1.438 2.454-1.438m1.918 7.163l-.595-1.246l-.68.153l.958 1.199zm-4.46-8.256a.96.96 0 0 0-.872-.988a2.56 2.56 0 0 0-1.85.643a2.85 2.85 0 0 0-.806 2.1a.96.96 0 0 0 .959.959a.95.95 0 0 0 .959-.96c0-.258.067-.517.22-.728a.64.64 0 0 1 .413-.144c.527.029.978-.364.978-.882z"></svg:path>`,
})
export class MaterialIconThemeBrainfuckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeBrowserlistIcon],svg[material-icon-theme-browserlist-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ffca28" d="M70 10.172A59.83 59.83 0 0 0 10.172 70A59.83 59.83 0 0 0 70 129.828A59.83 59.83 0 0 0 129.828 70A59.83 59.83 0 0 0 70 10.172m-4.836 8.785C65.66 23 66.516 26.28 67.736 29.18c4.779-4.287 10.265-7.546 16.041-9.02c-.981 3.938-1.357 7.295-1.261 10.43c6.026-2.314 12.349-3.404 18.3-2.706c-3.182 2.413-5.482 4.717-7.128 7.015c-2.201 12.074 6.858 20.43 14.779 24.551a5.13 5.13 0 0 1 5.183-3.888a5.128 5.128 0 0 1 3.7 8.435V64c-.487 1.055-2.002 2.343-3.496 3.219c-4.076 2.39-11.173 5.736-20.915 7.39c.045 1.214.077 2.453.077 3.747c0 4.817-.485 8.291-1.385 10.699c-3.3 13.313-12.648 26.76-24.695 31.95c.357-4.082.197-7.484-.402-10.591c-5.582 3.219-11.646 5.278-17.623 5.52h-.002c1.785-3.662 2.855-6.878 3.412-9.976c-6.347.996-12.727.742-18.377-1.17c2.93-2.732 5.054-5.314 6.673-7.96c-6.292-1.344-12.169-3.87-16.766-7.686c3.822-1.544 6.795-3.239 9.3-5.197c-5.426-3.517-10.034-7.998-12.972-13.23c4.012-.07 7.321-.568 10.3-1.453c-3.786-5.215-6.468-11.032-7.333-16.951c3.861 1.405 7.196 2.133 10.36 2.355c-1.662-6.22-2.081-12.605-.768-18.436c3.03 2.634 5.824 4.48 8.63 5.815c.677-6.406 2.576-12.52 5.893-17.496c1.926 3.622 3.914 6.392 6.111 8.672c2.93-5.754 6.9-10.798 11.791-14.262zM91.63 38.514c-2.395 5.514-1.665 11.297-.555 18.732a2.138 2.138 0 0 0 .28-4.178a3.419 3.419 0 1 1 .092 6.704c.574 3.882 1.157 8.18 1.421 13.125a67 67 0 0 0 3.25-.649c6.616-1.487 12.258-3.801 16.871-6.506c.45-.264.884-.563 1.276-.867c.366-.557.333-.957.035-1.285c-4.831-1.245-10.891-4.53-15.258-8.795c-4.764-4.653-7.427-10.164-7.412-16.281"></svg:path>`,
})
export class MaterialIconThemeBrowserlistIcon {
  readonly viewBox = input("0 0 140 140")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeBrowserlistLightIcon],svg[material-icon-theme-browserlist-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g stroke-width=".855" transform="translate(10.508 10.205)"><svg:circle cx="59.492" cy="59.795" r="59.828" fill="#ffca28"></svg:circle><svg:path fill="#37474f" d="M54.656 8.752c-4.89 3.464-8.862 8.508-11.791 14.262c-2.198-2.28-4.185-5.05-6.111-8.672c-3.318 4.976-5.216 11.09-5.893 17.496c-2.807-1.335-5.6-3.18-8.63-5.814c-1.314 5.83-.895 12.216.767 18.436c-3.164-.223-6.498-.95-10.36-2.356c.865 5.92 3.548 11.737 7.333 16.951c-2.978.885-6.287 1.383-10.3 1.453c2.939 5.233 7.547 9.714 12.972 13.23c-2.505 1.959-5.478 3.654-9.299 5.198c4.596 3.815 10.474 6.341 16.766 7.685c-1.62 2.647-3.743 5.228-6.674 7.96c5.65 1.912 12.03 2.166 18.377 1.17c-.556 3.098-1.626 6.314-3.412 9.975h.002c5.977-.24 12.042-2.3 17.623-5.52c.6 3.108.76 6.51.402 10.593c12.047-5.19 21.395-18.638 24.695-31.951c.9-2.408 1.385-5.881 1.385-10.7c0-1.293-.031-2.531-.076-3.745c9.742-1.655 16.839-5.001 20.914-7.39c1.494-.877 3.01-2.165 3.496-3.22v-.002a5.128 5.128 0 0 0-3.7-8.435a5.13 5.13 0 0 0-5.183 3.889c-7.92-4.122-16.98-12.477-14.779-24.551c1.646-2.299 3.947-4.603 7.13-7.016c-5.952-.698-12.276.392-18.302 2.707c-.095-3.135.28-6.492 1.262-10.43c-5.776 1.473-11.262 4.733-16.041 9.02c-1.22-2.902-2.076-6.18-2.572-10.223zm26.465 19.557c-.015 6.117 2.648 11.628 7.412 16.281c4.366 4.265 10.426 7.55 15.258 8.795c.298.328.331.728-.035 1.285c-.392.304-.825.603-1.276.867c-4.612 2.704-10.256 5.019-16.87 6.506q-1.607.361-3.25.649c-.265-4.945-.848-9.243-1.422-13.125a3.419 3.419 0 1 0-.092-6.703a2.138 2.138 0 0 1-.28 4.177c-1.11-7.435-1.84-13.218.555-18.732"></svg:path></svg:g>`,
})
export class MaterialIconThemeBrowserlistLightIcon {
  readonly viewBox = input("0 0 140 140")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeBrunoIcon],svg[material-icon-theme-bruno-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#212121" d="M26 10H6v14h6v2h8v-2h6z"></svg:path><svg:path fill="#ffab40" d="M27.897 9.794a6.86 6.86 0 0 0-4.35-3.55A7.97 7.97 0 0 0 18 4h-4a7.97 7.97 0 0 0-5.548 2.244a6.86 6.86 0 0 0-4.35 3.55A19.9 19.9 0 0 0 2 18.702V20a4 4 0 0 0 4 4v-8h2v6a4 4 0 0 0 4 4v-2a2 2 0 0 1-2-2v-2h2v2h2v-2h4v2h2v-2h2v2a2 2 0 0 1-2 2v2a4 4 0 0 0 4-4v-6h2v8a4 4 0 0 0 4-4v-1.298a19.9 19.9 0 0 0-2.103-8.908M10 14v-2h2v2Zm4 4v-2h4v2Zm8-4h-2v-2h2Z"></svg:path><svg:path fill="#f44336" d="M16 24a6.8 6.8 0 0 1-2 .996V28a2 2 0 0 0 4 0v-3.004A6.8 6.8 0 0 1 16 24"></svg:path>`,
})
export class MaterialIconThemeBrunoIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeBuckIcon],svg[material-icon-theme-buck-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#0277bd"><svg:path d="M7.488 2.94h-1.51v4.273L7.82 9.054H5.61L3.197 6.642V2.94H1.595v4.383l3.278 3.278h4.42l1.584 1.584H6.64l3.573 3.683l-5.23 5.194h2.062l5.23-5.267l-1.989-1.99H20.86v.664l-4.567 2.725l-3.831 3.868h2.173l2.615-2.652l5.157-3.094v-3.13h-4.862l-1.658-1.658l1.879-1.879V4.45H16.2v3.5l-1.528 1.51l-1.363-1.428V4.45h-1.473v4.273l3.445 3.462h-2.102L7.488 6.55z"></svg:path><svg:path d="M15.48 14.763h-2.062l.995 1.068z"></svg:path></svg:g>`,
})
export class MaterialIconThemeBuckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeBucklescriptIcon],svg[material-icon-theme-bucklescript-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#26a69a" d="M12 18h4v2h-4z"></svg:path><svg:path fill="#26a69a" d="M4 4v24h24V4Zm14 15.5a.5.5 0 0 1-.5.5H16v2h1.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H16v1.5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5V18h1.5a.5.5 0 0 1 .5.5Zm8-2a.5.5 0 0 1-.5.5H22v2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-3.5a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5H24v-2h-2a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h3.5a.5.5 0 0 1 .5.5Z"></svg:path><svg:path fill="#26a69a" d="M12 22h4v2h-4z"></svg:path>`,
})
export class MaterialIconThemeBucklescriptIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeBuildkiteIcon],svg[material-icon-theme-buildkite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#00e676" d="m12 22l-8-4V8l8 4zm8-14v10h4l4-4"></svg:path><svg:path fill="#00c853" d="m12 22l8-4V8l-8 4zm8 6l8-4V14l-8 4z"></svg:path>`,
})
export class MaterialIconThemeBuildkiteIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeBunIcon],svg[material-icon-theme-bun-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FFF8E1" d="M30 17.045a9.8 9.8 0 0 0-.32-2.306l-.004.034a11.2 11.2 0 0 0-5.762-6.786c-3.495-1.89-5.243-3.326-6.8-3.811h.003c-1.95-.695-3.949.82-5.825 1.927c-4.52 2.481-9.573 5.45-9.28 11.417c.008-.029.017-.052.026-.08a9.97 9.97 0 0 0 3.934 7.257l-.01-.006C13.747 31.473 30.05 27.292 30 17.045"></svg:path><svg:path fill="#37474f" d="M19.855 20.236A.8.8 0 0 0 19.26 20h-6.514a.8.8 0 0 0-.596.236a.51.51 0 0 0-.137.463a4.37 4.37 0 0 0 1.641 2.339a4.2 4.2 0 0 0 2.349.926a4.2 4.2 0 0 0 2.343-.926a4.37 4.37 0 0 0 1.642-2.339a.5.5 0 0 0-.132-.463Z"></svg:path><svg:ellipse cx="22.5" cy="18.5" fill="#f8bbd0" rx="2.5" ry="1.5"></svg:ellipse><svg:ellipse cx="9.5" cy="18.5" fill="#f8bbd0" rx="2.5" ry="1.5"></svg:ellipse><svg:circle cx="10" cy="16" r="2" fill="#37474f"></svg:circle><svg:circle cx="22" cy="16" r="2" fill="#37474f"></svg:circle><svg:path fill="#455a64" d="M9.996 18A2 2 0 1 0 8 15.996V16a2 2 0 0 0 1.996 2"></svg:path><svg:circle cx="9" cy="15" r="1" fill="#FAFAFA"></svg:circle><svg:circle cx="21" cy="15" r="1" fill="#FAFAFA"></svg:circle>`,
})
export class MaterialIconThemeBunIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeBunLightIcon],svg[material-icon-theme-bun-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FFF8E1" d="M15.696 27.002a13.73 13.73 0 0 1-9.071-3.062a8.86 8.86 0 0 1-3.6-6.505c-.252-5.091 3.813-7.747 8.748-10.455c.28-.165.537-.322.793-.48a7.8 7.8 0 0 1 3.52-1.5a2 2 0 0 1 .695.118a14.8 14.8 0 0 1 2.95 1.576c.972.6 2.182 1.348 3.707 2.173a10.14 10.14 0 0 1 5.274 6.147A8.8 8.8 0 0 1 29 17.035a8.15 8.15 0 0 1-2.525 5.959a15.6 15.6 0 0 1-10.778 4.008Z"></svg:path><svg:path fill="#37474f" d="M16.087 6a1 1 0 0 1 .358.06l.038.013l.037.012a14.5 14.5 0 0 1 2.684 1.46a72 72 0 0 0 3.767 2.205a9.17 9.17 0 0 1 4.767 5.493A8 8 0 0 1 28 17.055a7.18 7.18 0 0 1-2.234 5.233a14.6 14.6 0 0 1-10.07 3.714a12.74 12.74 0 0 1-8.415-2.816l-.027-.024l-.029-.023a7.98 7.98 0 0 1-3.202-5.758c-.223-4.516 3.431-6.89 8.231-9.525l.027-.015l.027-.015q.389-.231.783-.474A7.4 7.4 0 0 1 16.087 6m0-2c-1.618 0-3.248 1.19-4.795 2.103c-4.52 2.481-9.56 5.41-9.267 11.376a9.9 9.9 0 0 0 3.942 7.215a14.77 14.77 0 0 0 9.73 3.308c7.122 0 14.335-4.134 14.303-10.957a9.6 9.6 0 0 0-.322-2.29a11.16 11.16 0 0 0-5.764-6.768c-3.495-1.89-5.242-3.326-6.798-3.811A3 3 0 0 0 16.086 4Z"></svg:path><svg:path fill="#37474f" d="M19.855 20.236A.8.8 0 0 0 19.26 20h-6.514a.8.8 0 0 0-.596.236a.51.51 0 0 0-.137.463a4.37 4.37 0 0 0 1.641 2.339a4.2 4.2 0 0 0 2.349.926a4.2 4.2 0 0 0 2.343-.926a4.37 4.37 0 0 0 1.642-2.339a.5.5 0 0 0-.132-.463Z"></svg:path><svg:ellipse cx="22.5" cy="18.5" fill="#f8bbd0" rx="2.5" ry="1.5"></svg:ellipse><svg:ellipse cx="9.5" cy="18.5" fill="#f8bbd0" rx="2.5" ry="1.5"></svg:ellipse><svg:circle cx="10" cy="16" r="2" fill="#37474f"></svg:circle><svg:circle cx="22" cy="16" r="2" fill="#37474f"></svg:circle><svg:path fill="#455a64" d="M9.996 18A2 2 0 1 0 8 15.996V16a2 2 0 0 0 1.996 2"></svg:path><svg:circle cx="9" cy="15" r="1" fill="#FAFAFA"></svg:circle><svg:circle cx="21" cy="15" r="1" fill="#FAFAFA"></svg:circle>`,
})
export class MaterialIconThemeBunLightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeCIcon],svg[material-icon-theme-c-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#0288d1" d="M19.563 22A5.57 5.57 0 0 1 14 16.437v-2.873A5.57 5.57 0 0 1 19.563 8H24V2h-4.437A11.563 11.563 0 0 0 8 13.563v2.873A11.564 11.564 0 0 0 19.563 28H24v-6Z"></svg:path>`,
})
export class MaterialIconThemeCIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeC3Icon],svg[material-icon-theme-c3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#0288d1" d="M11.563 22A5.57 5.57 0 0 1 6 16.437v-2.873A5.57 5.57 0 0 1 11.563 8H14V2h-2.437A11.563 11.563 0 0 0 0 13.563v2.873A11.564 11.564 0 0 0 11.563 28H14v-6Zm20.129-4.131A5.17 5.17 0 0 0 28 14c3.39-.894 4.268-5.241 2.792-8.108c-3.305-6.304-14.028-4.545-15.407 2.381l4.89 1.255a3.17 3.17 0 0 1 3.04-2.754a3 3 0 0 1 1.814.702c1.19.911 1.249 3.785-.353 4.232A9 9 0 0 1 22 12h-2v4h2c1.7.107 3.362.577 4.23 2.313a3.4 3.4 0 0 1 .377 1.636a3.25 3.25 0 0 1-.297 1.464c-.919 1.985-3.984 2.166-5.407.749a4.43 4.43 0 0 1-1.285-2.143l-4.89 1.429c2.447 10.449 19.993 7.76 16.964-3.58"></svg:path>`,
})
export class MaterialIconThemeC3Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeCabalIcon],svg[material-icon-theme-cabal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g transform="translate(0 -822.52)"><svg:rect width="107.25" height="156.59" x="405.55" y="967.22" fill="#0097A7" rx="12.306" ry="12.31" transform="matrix(-.98339 .18149 .60192 .79856 0 0)"></svg:rect><svg:rect width="108.34" height="123.15" x="-1156.5" y="1461.9" fill="#3F51B5" rx="10.69" ry="12.31" transform="matrix(-.98528 .17093 -.59175 .80612 0 0)"></svg:rect><svg:path fill="#3F51B5" d="M52.112 965.158c-1.343 3.515-26.292 23.248-25.744 27.277c.548 4.03 29.812 16.023 32.04 19.027s10.545 41.668 13.603 42.5s18.828-31.274 21.548-32.932s32.808 2.503 34.15-1.01c1.343-3.515-18.174-35.352-18.721-39.381s9.732-40.12 7.502-43.125s-30.06 9.427-33.118 8.594s-26.793-27.3-29.514-25.643s-.405 41.177-1.747 44.693z"></svg:path></svg:g>`,
})
export class MaterialIconThemeCabalIcon {
  readonly viewBox = input("0 0 300 300")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeCaddyIcon],svg[material-icon-theme-caddy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#4fc3f7" d="M20 22v-3.53q-.008-.155-.011-.31q-.003-.436-.041-.87a5.3 5.3 0 0 0-.18-.994a2.9 2.9 0 0 0-1.026-1.563A4.42 4.42 0 0 0 16.017 14a4.5 4.5 0 0 0-2.762.74a2.9 2.9 0 0 0-1.05 1.57a5 5 0 0 0-.186 1.073q-.029.448-.014.897l.004.191v3.53Z"></svg:path><svg:path fill="#4fc3f7" d="M29 19c0-7.409-5.268-13-13-13S3 11.591 3 19c-.003 2.317 0 5 1 7.026v-.84c.001-1.673 2.264-3.002 4-3.186v-4.438C8 12.38 10.388 9.931 16 10c5.612-.07 8 2.38 8 7.562V22c1.736.184 3.999 1.513 4 3.187v.839C29 24 29.003 21.317 29 19"></svg:path>`,
})
export class MaterialIconThemeCaddyIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeCadenceIcon],svg[material-icon-theme-cadence-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#00e676" d="M14 12h6v-1a1 1 0 0 1 1-1h7V4h-6a8 8 0 0 0-8 8m6 0h6v6h-6zm-6 6v2.65A1.35 1.35 0 0 1 12.65 22h-1.3A1.35 1.35 0 0 1 10 20.65v-1.3A1.35 1.35 0 0 1 11.35 18zv-6h-2.65A7.35 7.35 0 0 0 4 19.35v1.3A7.35 7.35 0 0 0 11.35 28h1.3A7.35 7.35 0 0 0 20 20.65V18Z"></svg:path>`,
})
export class MaterialIconThemeCadenceIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeCairoIcon],svg[material-icon-theme-cairo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#F44336" d="M13.15 7.455a1.94 1.94 0 0 1-1.938-1.94c0-1.07.87-1.94 1.939-1.94c1.07 0 1.94.87 1.94 1.94s-.87 1.94-1.94 1.94M12 2C6.477 2 2 6.477 2 12c0 2.348.811 4.506 2.166 6.212c1.092-1.532 2.258-2.977 3.721-4.18c.042-.035.143-.11.272-.203a2.92 2.92 0 0 0 1.15-1.876v-.012c.37-2.438 1.371-3.279 4.152-3.279q.37.001.786.02c1.423.067 2.243.473 2.34.685a.57.57 0 0 1 .027.363l-.111-.015c-.878-.109-2.231.16-2.419 1.117c-.105.544.02 1.143.072 1.693c.054.567.104 1.139.099 1.711c-.003.044-.035.266-.005.29c-1.514-1.449-5.014.37-6.116 1.17q.17-.058.34-.122c1.05-.357 4.24-1.314 5.47-.256c1.043 1.277.104 3.634-.673 4.802a9.7 9.7 0 0 1-1.64 1.87q.184.009.369.01c5.523 0 10-4.477 10-10S17.523 2 12 2"></svg:path>`,
})
export class MaterialIconThemeCairoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeCakeIcon],svg[material-icon-theme-cake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ff7043" d="M16 10a2.847 2.847 0 0 0 3-2.663v-.003a2.32 2.32 0 0 0-.435-1.372L16 2l-2.565 3.96A2.33 2.33 0 0 0 13 7.331A2.847 2.847 0 0 0 15.998 10zm6.134 13.376L20.708 22l-1.44 1.375a4.917 4.917 0 0 1-6.52 0L11.334 22l-1.466 1.375A4.79 4.79 0 0 1 4 23.871V29a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1v-5.129a4.79 4.79 0 0 1-5.866-.497M24 14h-6.667v-2h-2.666v2H8a4.145 4.145 0 0 0-4 4.09v1.415A2.56 2.56 0 0 0 6.614 22a2.53 2.53 0 0 0 1.84-.726l2.88-2.71l2.813 2.71a2.764 2.764 0 0 0 3.693 0l2.826-2.71l2.868 2.71A2.649 2.649 0 0 0 28 19.505V18.09A4.145 4.145 0 0 0 24 14"></svg:path>`,
})
export class MaterialIconThemeCakeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeCapacitorIcon],svg[material-icon-theme-capacitor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#4fc3f7" d="m19.081 2.35l-4.795 4.795L9.62 2.482L7.05 5.05l4.664 4.665l2.57 2.57l4.705 4.705l2.57-2.57l-4.705-4.705l4.795-4.797zM5.052 7.05l-2.57 2.57l4.665 4.664L2.35 19.08l2.57 2.57l4.796-4.796l4.704 4.705l2.57-2.57l-7.274-7.274z" paint-order="fill markers stroke"></svg:path>`,
})
export class MaterialIconThemeCapacitorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeCapnpIcon],svg[material-icon-theme-capnp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#c62828" d="M17 3V2h4v8h-4c-.085-2.088-.445-4.042-3-4c-2.917 0-5 2.51-5 5c0 3 .495 6.981 4.67 6.981c2.906-.26 2.99-2.705 3.33-4.981h4c0 5.806-3.314 9.052-9 9c-6.154-.073-8.915-4.685-9-10c-.128-6.14 4.568-9.2 10.414-9.65c1.301-.028 2.466 0 3.586.65"></svg:path>`,
})
export class MaterialIconThemeCapnpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeCbxIcon],svg[material-icon-theme-cbx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#1565c0" d="M128 704v128c0 70.692 57.308 128 128 128h608c17.728 0 32-14.272 32-32V704z"></svg:path><svg:path fill="#ffe082" d="M704 704v192h128V704z"></svg:path><svg:path fill="#fff8e1" d="M192 704v96c0 53.184 42.816 96 96 96h544a96 96 0 0 1-96-96a96 96 0 0 1 96-96z"></svg:path><svg:path fill="#ff1744" d="M320 832h192v192l-96-96l-96 96z"></svg:path><svg:path fill="#2196f3" d="M256 64c-70.692 0-128 57.308-128 128v640c0 11.088 1.557 21.787 4.207 32.047C146.767 807.565 197.672 768.07 256 768h608c17.728 0 32-14.272 32-32V96c0-17.728-14.272-32-32-32z"></svg:path><svg:path fill="#e3f2fd" d="M384 192c-70.692 0-128 57.308-128 128c.171 67.295 52.422 122.965 119.57 127.396L256 640h80l156.748-252.488h-.146A128 128 0 0 0 512 320c0-70.692-57.308-128-128-128m320 0c-70.692 0-128 57.308-128 128c.171 67.295 52.422 122.965 119.57 127.396L576 640h80l156.748-252.488h-.146A128 128 0 0 0 832 320c0-70.692-57.308-128-128-128"></svg:path>`,
})
export class MaterialIconThemeCbxIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeCdsIcon],svg[material-icon-theme-cds-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#0288d1"><svg:rect width="4" height="1" x="7" y="9" ry=".5"></svg:rect><svg:rect width="3" height="1" x="8" y="11" ry=".5"></svg:rect><svg:rect width="4" height="1" x="7" y="13" ry=".5"></svg:rect><svg:path d="m5 9l-1 1l1.5 1.5L4 13l1 1l2.5-2.5z"></svg:path><svg:path d="M6 2a3 3 0 0 0-2.598 1.5a3 3 0 0 0-.187 2.607a3 3 0 0 0-1.514.965a3 3 0 0 0-.42 3.196A3 3 0 0 0 4 12v-1a2 2 0 0 1-2-2a2 2 0 0 1 2-2a2 2 0 0 1 .515.076l.159-.591A2 2 0 0 1 4 5a2 2 0 0 1 2-2a2 2 0 0 1 2 2l.594.594A2 2 0 0 1 10 5a2 2 0 0 1 2 2a2 2 0 0 1 2 2a2 2 0 0 1-2 2v1a3 3 0 0 0 2.898-2.223A3 3 0 0 0 13.5 6.402a3 3 0 0 0-.63-.267a3 3 0 0 0-1.722-1.906a3 3 0 0 0-2.252-.014a3 3 0 0 0-2.119-2.113A3 3 0 0 0 6 2"></svg:path></svg:g>`,
})
export class MaterialIconThemeCdsIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeCertificateIcon],svg[material-icon-theme-certificate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ff5722" d="M4 6v14a2 2 0 0 0 2 2h12v6l3-2l3 2v-6h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2m2 0h8v2H6Zm0 4h6v2H6Zm0 4h8v2H6Zm10 6H6v-2h10Zm8-6v4l-3-2l-3 2v-4l-4-2l4-2V6l3 2l3-2v4.2l4 1.8Z"></svg:path>`,
})
export class MaterialIconThemeCertificateIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeChangelogIcon],svg[material-icon-theme-changelog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="M0 0h24v24H0z"></svg:path><svg:path fill="#8bc34a" d="M13 3a9 9 0 0 0-9 9H1l4 4l4-4H6c0-3.87 3.13-7 7-7s7 3.13 7 7s-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.95 8.95 0 0 0 13 21a9 9 0 0 0 0-18m-1 5v5l4.25 2.52l.77-1.28l-3.52-2.09V8z"></svg:path></svg:g>`,
})
export class MaterialIconThemeChangelogIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeChessIcon],svg[material-icon-theme-chess-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#cfd8dc" d="M6 26h20v4H6zm16.5-13a5.49 5.49 0 0 0-4.5 2.344V10h4V6h-4V2h-4v4h-4v4h4v5.344a5.498 5.498 0 1 0-5 8.63V24h14v-.025A5.499 5.499 0 0 0 22.5 13"></svg:path>`,
})
export class MaterialIconThemeChessIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeChessLightIcon],svg[material-icon-theme-chess-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#455a64" d="M6 26h20v4H6zm16.5-13a5.49 5.49 0 0 0-4.5 2.344V10h4V6h-4V2h-4v4h-4v4h4v5.344a5.498 5.498 0 1 0-5 8.63V24h14v-.025A5.499 5.499 0 0 0 22.5 13"></svg:path>`,
})
export class MaterialIconThemeChessLightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeChromeIcon],svg[material-icon-theme-chrome-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#42a5f5" d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2m0 3a11 11 0 0 1 9.208 5H16a6 6 0 0 0-5.74 4.253L7.27 9.334A10.98 10.98 0 0 1 16 5m4 11a4 4 0 1 1-4-4a4.005 4.005 0 0 1 4 4M5 16a10.9 10.9 0 0 1 1.094-4.75l4.838 7.959l.003-.002a5.96 5.96 0 0 0 6.16 2.689l-2.996 4.928A11.01 11.01 0 0 1 5 16m11.343 10.983l4.878-8.026l-.003-.002A5.97 5.97 0 0 0 20.463 12h5.773a10.966 10.966 0 0 1-9.893 14.983"></svg:path>`,
})
export class MaterialIconThemeChromeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeCircleciIcon],svg[material-icon-theme-circleci-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="16" cy="16" r="4" fill="#fafafa"></svg:circle><svg:path fill="#fafafa" d="M17.73 2.104a14 14 0 0 0-14.927 9.234a.504.504 0 0 0 .48.662h5.525a.49.49 0 0 0 .416-.235a8 8 0 1 1 0 8.47A.49.49 0 0 0 8.81 20H3.28a.503.503 0 0 0-.479.66a14 14 0 1 0 14.93-18.556Z"></svg:path>`,
})
export class MaterialIconThemeCircleciIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeCircleciLightIcon],svg[material-icon-theme-circleci-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="16" cy="16" r="4" fill="#424242"></svg:circle><svg:path fill="#424242" d="M17.73 2.104a14 14 0 0 0-14.927 9.234a.504.504 0 0 0 .48.662h5.525a.49.49 0 0 0 .416-.235a8 8 0 1 1 0 8.47A.49.49 0 0 0 8.81 20H3.28a.503.503 0 0 0-.479.66a14 14 0 1 0 14.93-18.556Z"></svg:path>`,
})
export class MaterialIconThemeCircleciLightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeCitationIcon],svg[material-icon-theme-citation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#1e88e5" d="M256 192c-106.039 0-192 85.961-192 192c.189 103.43 82.273 188.122 185.646 191.545L128 832h128l173.473-365.715C441.746 440.412 447.323 412.44 448 384c0-106.039-85.961-192-192-192m512 0c-106.039 0-192 85.961-192 192c.189 103.43 82.273 188.122 185.646 191.545L640 832h128l173.473-365.715C953.746 440.412 959.323 412.44 960 384c0-106.039-85.961-192-192-192"></svg:path>`,
})
export class MaterialIconThemeCitationIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeClangdIcon],svg[material-icon-theme-clangd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#4caf50" d="M10 4H7.5C4.75 4 2 5.379 2 9.5c0 4.12 2.75 5.51 5.53 5.5H10v-3H7.667C7.665 11.973 5 12.289 5 9.478C5 6.672 7.395 7.028 7.52 7H10z"></svg:path><svg:path fill="#2979ff" d="M10 1v6H7.52C7.452 7.03 5 6.659 5 9.478C5 12.295 7.618 11.97 7.668 12H13V1h-2.725z"></svg:path>`,
})
export class MaterialIconThemeClangdIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeClineIcon],svg[material-icon-theme-cline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#42a5f5" d="M8 1a2 2 0 0 0-2 2H5C3.338 3 2 4.338 2 6v1L1 9l1 2v1c0 1.662 1.338 3 3 3h6c1.662 0 3-1.338 3-3v-1l1-2l-1-2V6c0-1.662-1.338-3-3-3h-1a2 2 0 0 0-2-2M6 7c.554 0 1 .446 1 1v2c0 .554-.446 1-1 1s-1-.446-1-1V8c0-.554.446-1 1-1m4 0c.554 0 1 .446 1 1v2c0 .554-.446 1-1 1s-1-.446-1-1V8c0-.554.446-1 1-1"></svg:path>`,
})
export class MaterialIconThemeClineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeClojureIcon],svg[material-icon-theme-clojure-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#64dd17" d="M123.456 129.975a507 507 0 0 0-3.54 7.846c-4.406 9.981-9.284 22.127-11.066 29.908c-.64 2.77-1.037 6.205-1.03 10.013c0 1.506.081 3.09.21 4.702a58.1 58.1 0 0 0 19.98 3.559a58.2 58.2 0 0 0 18.29-2.98c-1.352-1.237-2.642-2.554-3.816-4.038c-7.796-9.942-12.146-24.512-19.028-49.01m-28.784-49.39C79.782 91.08 70.039 108.387 70.002 128c.037 19.32 9.487 36.403 24.002 46.94c3.56-14.83 12.485-28.41 25.868-55.63a219 219 0 0 0-2.714-7.083c-3.708-9.3-9.059-20.102-13.834-24.993c-2.435-2.555-5.389-4.763-8.652-6.648"></svg:path><svg:path fill="#7cb342" d="M178.532 194.535c-7.683-.963-14.023-2.124-19.57-4.081a69.4 69.4 0 0 1-30.958 7.249c-38.491 0-69.693-31.198-69.698-69.7c0-20.891 9.203-39.62 23.764-52.392c-3.895-.94-7.956-1.49-12.104-1.482c-20.45.193-42.037 11.51-51.025 42.075c-.84 4.45-.64 7.813-.64 11.8c0 60.591 49.12 109.715 109.705 109.715c37.104 0 69.882-18.437 89.732-46.633c-10.736 2.675-21.06 3.955-29.902 3.982c-3.314 0-6.425-.177-9.305-.53"></svg:path><svg:path fill="#29b6f6" d="M157.922 173.271c.678.336 2.213.884 4.35 1.49c14.375-10.553 23.717-27.552 23.754-46.764h-.005c-.055-32.03-25.974-57.945-58.011-58.009a58.2 58.2 0 0 0-18.213 2.961c11.779 13.426 17.443 32.613 22.922 53.6l.01.025c.01.017 1.752 5.828 4.743 13.538c2.97 7.7 7.203 17.231 11.818 24.178c3.03 4.655 6.363 8 8.632 8.981"></svg:path><svg:path fill="#1e88e5" d="M128.009 18.29c-36.746 0-69.25 18.089-89.16 45.826c10.361-6.49 20.941-8.83 30.174-8.747c12.753.037 22.779 3.991 27.589 6.696a51 51 0 0 1 3.345 2.131a69.4 69.4 0 0 1 28.049-5.894c38.496.004 69.703 31.202 69.709 69.698h-.006c0 19.409-7.938 36.957-20.736 49.594c3.142.352 6.492.571 9.912.554c12.15.006 25.284-2.675 35.13-10.956c6.42-5.408 11.798-13.327 14.78-25.199c.584-4.586.92-9.247.92-13.991c0-60.588-49.116-109.715-109.705-109.715"></svg:path>`,
})
export class MaterialIconThemeClojureIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeCloudfoundryIcon],svg[material-icon-theme-cloudfoundry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#0288d1" d="M14.13 10.1c.6-.5.98-1.19.97-1.96c-.01-1.47-1.4-2.66-3.1-2.66S8.91 6.66 8.9 8.13c-.01.77.37 1.47.97 1.96c.75.61 1.36 1.84 1.4 3.18c.04 1.49-.06 3.22-.12 4.1c-.8.11-1.36.38-1.36.69c0 .41.99.89 2.22.89s2.22-.48 2.22-.89c0-.31-.56-.58-1.36-.69c-.06-.88-.16-2.6-.12-4.1c.04-1.34.65-2.57 1.4-3.18z"></svg:path><svg:path fill="#78909c" d="M17.89 18.77a2 2 0 0 1 .37-.11a2.3 2.3 0 0 1 .43-.05l-.02-.12c0-.07-.04-.16-.07-.26l-.05-.13c-.02-.04-.04-.08-.06-.11l-.06-.11a4 4 0 0 1-.44-.1a3 3 0 0 1-.4-.14c-.22-.09-.43-.2-.54-.32a.41.41 0 0 1-.16-.34a.3.3 0 0 1 .07-.15a.5.5 0 0 1 .16-.12l-.13-.07c-.04-.02-.08-.05-.14-.07c-.05-.03-.11-.05-.17-.08c-.11-.05-.22-.11-.32-.14l-.15-.06a3 3 0 0 1-.34.02c-.12 0-.25 0-.37-.01c-.24-.02-.49-.05-.7-.12a2 2 0 0 1-.28-.1a1.3 1.3 0 0 1-.21-.11c-.11-.08-.19-.16-.19-.25l-.17-.03c-.1-.02-.33-.05-.47-.07c0 .02-.02.05-.02.09l-.04.17c-.07.35.13.7.47.8c.83.24 1.46.64 1.64 1.13c.37.99-1.18 1.96-3.52 1.96c-2.35 0-3.89-.97-3.53-1.96c.18-.48.78-.87 1.59-1.11a.72.72 0 0 0 .49-.84l-.05-.24l-.31.04c-.14.02-.27.04-.37.06l-.17.03c.01.08-.05.17-.16.25a1.4 1.4 0 0 1-.2.12a2 2 0 0 1-.27.1a3 3 0 0 1-.33.08a3 3 0 0 1-.36.05c-.25.02-.5.02-.73 0l-.04.02c-.02.01-.07.03-.11.05l-.31.15c-.11.05-.21.12-.29.16l-.1.05l-.03.02c.16.07.24.17.26.28c.04.11-.01.23-.12.35a1.5 1.5 0 0 1-.22.18a2 2 0 0 1-.32.17a3.4 3.4 0 0 1-.83.26a.5.5 0 0 0-.05.11l-.09.25l-.04.26a.4.4 0 0 0-.01.12c.32 0 .61.06.83.14c.25.08.4.21.52.36c.09.16.13.33.05.53c-.06.19-.22.41-.47.6l.04.03l.12.08c.1.07.23.17.38.26l.44.24c.06.03.12.06.16.07l.06.03c.36-.15.75-.23 1.14-.28a3.3 3.3 0 0 1 .57-.01c.19.01.38.02.55.07c.18.05.35.09.5.16a3 3 0 0 1 .42.24c.26.17.45.42.54.68l.33.01c.2.01.46.02.73.01l.72-.03l.32-.03a1 1 0 0 1 .17-.38a1 1 0 0 1 .14-.16a1.6 1.6 0 0 1 .55-.39a2.3 2.3 0 0 1 .48-.17c.18-.04.35-.07.54-.08q.285-.015.57 0a4 4 0 0 1 1.15.24l.2-.11c.11-.07.28-.15.41-.25s.27-.19.35-.26l.13-.13c-.27-.19-.43-.39-.52-.58a.64.64 0 0 1-.06-.27a.4.4 0 0 1 .06-.25c.07-.16.25-.27.45-.37M9.95 13.9s.35-1.32-1.17-3.03l-.05-.05a4.2 4.2 0 0 1-.98-2.7c0-2.32 1.89-4.2 4.2-4.2h.1a4.2 4.2 0 0 1 4.2 4.2a4.2 4.2 0 0 1-.99 2.7c-.01.01-.02.03-.05.05c-1.34 1.35-1.17 3.03-1.17 3.03a6.14 6.14 0 0 0 4.13-5.75c.02-3.24-2.6-6-5.83-6.15h-.7c-3.23.16-5.85 2.92-5.83 6.15c.01 2.59 1.67 4.9 4.13 5.75z"></svg:path>`,
})
export class MaterialIconThemeCloudfoundryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeCmakeIcon],svg[material-icon-theme-cmake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#1e88e5" d="M11.94 2.984L2.928 21.017l9.875-8.47z"></svg:path><svg:path fill="#e53935" d="m11.958 2.982l.002.29l1.312 14.499l-.002.006l.023.26l7.363 2.978h.415l-.158-.31l-.114-.228h-.001l-8.84-17.494z"></svg:path><svg:path fill="#7cb342" d="m8.558 16.13l-5.627 4.884h17.743v-.016z"></svg:path>`,
})
export class MaterialIconThemeCmakeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeCoalaIcon],svg[material-icon-theme-coala-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path xmlns="http://www.w3.org/2000/svg" fill="#90a4ae" d="M22 8.95c0-2.59-1.74-3.63-3.89-3.63c-.9 0-1.83.2-2.6.57c-1-.69-2.17-1.09-3.51-1.09s-2.51.41-3.51 1.09c-.78-.38-1.7-.57-2.6-.57C3.74 5.32 2 6.35 2 8.95c0 2.14 1.18 3.56 2.8 4c-.02.3-.04.6-.04.89c0 3.18 2.51 4.26 4.77 4.63c.61.45 1.49.73 2.47.73s1.86-.28 2.47-.73c2.26-.36 4.77-1.44 4.77-4.63c0-.3-.01-.6-.04-.89c1.62-.44 2.8-1.87 2.8-4"></svg:path><svg:path xmlns="http://www.w3.org/2000/svg" fill="#f8bbd0" d="M7.31 6.9c-.18-.02-.35-.03-.53-.03c-1.72 0-3.11.83-3.11 2.9c0 1.2.47 2.12 1.19 2.68c.26-2.11 1.11-4.12 2.45-5.55m9.91-.03c-.18 0-.35.01-.53.03c1.34 1.43 2.19 3.44 2.45 5.55c.72-.56 1.19-1.48 1.19-2.68c0-2.07-1.39-2.9-3.11-2.9"></svg:path><svg:path xmlns="http://www.w3.org/2000/svg" fill="#263238" d="M14.07 15.21c0 1.86-.96 2.33-2.07 2.33s-2.07-.47-2.07-2.33s.96-3.36 2.07-3.36s2.07 1.51 2.07 3.36M9.5 11.75a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0m7.5 0a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0"></svg:path>`,
})
export class MaterialIconThemeCoalaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeCobolIcon],svg[material-icon-theme-cobol-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#0288d1" d="M12 0h8v4h-8z"></svg:path><svg:path fill="#0288d1" d="M16 5A11 11 0 1 1 5 16A11.01 11.01 0 0 1 16 5m0-3a14 14 0 1 0 14 14A14 14 0 0 0 16 2"></svg:path><svg:path fill="#0288d1" d="M32 12v8h-4v-8zm-1.858 12.485l-5.657 5.657l-2.313-2.313l5.657-5.657zM7.514 30.143l-5.657-5.657l2.814-2.814l5.657 5.657zM12 28h8v4h-8zm15.329-17.672L21.672 4.67l2.814-2.814l5.657 5.657zM3 12v8H0v-8zm7.328-7.329L4.67 10.328L1.857 7.514l5.657-5.657zM20 10h-4a6 6 0 0 0 0 12h4v-4h-4a2 2 0 0 1 0-4h4z"></svg:path>`,
})
export class MaterialIconThemeCobolIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeCoconutIcon],svg[material-icon-theme-coconut-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#8d6e63" d="M8.042 3.036a7 7 0 0 0-.737.237c-.527.22-.983.492-1.385.824a3 3 0 0 1-.275.21c-.126.056-.7.655-1.007 1.052c-1.732 2.247-2.442 5.513-1.86 8.565c.076.396.339 1.362.465 1.706c.764 2.085 2.136 3.719 3.928 4.673c1.412.753 3.084 1.06 4.822.887c.348-.034.524-.063 1.085-.165c.233-.043 1.381-.385 1.659-.495c2.392-.946 4.365-2.582 5.572-4.618c.506-.855.796-1.669 1.029-2.882c.37-1.923-.502-4.262-2.324-6.229c-2.643-2.854-6.788-4.459-10.18-3.942a8 8 0 0 0-.793.177zm.42 1.507c.28-.076.575-.139.813-.167a8 8 0 0 1 1.994.024c3.131.42 6.308 2.488 7.806 5.077c.498.861.788 1.79.803 2.578c.012.635-.129 1.18-.431 1.679a2.6 2.6 0 0 1-.549.647c-.613.538-1.455.876-2.501 1.005c-.548.067-.92.206-1.23.46c-.068.056-.642.588-1.279 1.182c-1.248 1.166-1.237 1.157-1.42 1.104a.4.4 0 0 1-.15-.087c-.13-.122-.126-.16.079-1.224c.105-.543.188-1.053.187-1.132a1.16 1.16 0 0 0-.297-.75c-.113-.125-.3-.244-.547-.35c-2.359-1.007-4.343-2.776-5.295-4.722a5.2 5.2 0 0 1-.412-1.088c-.29-1.061-.22-1.913.219-2.683c.322-.565.777-.964 1.487-1.302c.178-.084.443-.175.723-.251"></svg:path>`,
})
export class MaterialIconThemeCoconutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeCodeClimateIcon],svg[material-icon-theme-code-climate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#eee" d="m196.19 75.562l-51.846 51.561l30.766 30.766l21.08-21.08l59.252 59.537l30.481-30.766zm-61.246 60.961l-30.481-30.481l-78.053 78.053l-11.964 11.964l30.766 30.766l11.964-12.249l39.596-39.312l7.691-7.691l30.481 30.48l28.772 28.773l30.766-30.766l-28.772-28.772z"></svg:path>`,
})
export class MaterialIconThemeCodeClimateIcon {
  readonly viewBox = input("0 0 300 300")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeCodeClimateLightIcon],svg[material-icon-theme-code-climate-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#455a64" d="m196.19 75.562l-51.846 51.561l30.766 30.766l21.08-21.08l59.252 59.537l30.481-30.766zm-61.246 60.961l-30.481-30.481l-78.053 78.053l-11.964 11.964l30.766 30.766l11.964-12.249l39.596-39.312l7.691-7.691l30.481 30.48l28.772 28.773l30.766-30.766l-28.772-28.772z"></svg:path>`,
})
export class MaterialIconThemeCodeClimateLightIcon {
  readonly viewBox = input("0 0 300 300")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeCodecovIcon],svg[material-icon-theme-codecov-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ec407a" d="M12.006 2.375c-5.528.004-10.028 4.471-10.032 9.959v.025l1.706.995l.023-.016a4.9 4.9 0 0 1 3.641-.773a4.75 4.75 0 0 1 2.398 1.193l.293.273l.166-.363c.16-.35.346-.68.55-.98a8 8 0 0 1 .278-.372l.172-.215l-.211-.176a7 7 0 0 0-3.249-1.516a7.16 7.16 0 0 0-3.359.196c.812-3.556 3.939-6.036 7.631-6.039a7.78 7.78 0 0 1 5.516 2.267a7.7 7.7 0 0 1 2.095 3.759a7.2 7.2 0 0 0-2.09-.317h-.127a7 7 0 0 0-.829.061l-.034.005a6 6 0 0 0-.327.05a7 7 0 0 0-.47.101l-.115.03q-.202.055-.403.12l-.025.008a7 7 0 0 0-.878.367l-.023.012a7 7 0 0 0-.392.214l-.03.018a6.8 6.8 0 0 0-1.77 1.516l-.063.076a7 7 0 0 0-.557.799l-.05.087a7 7 0 0 0-.195.36l-.014.025a7 7 0 0 0-.367.888l-.015.044a6.9 6.9 0 0 0-.343 2.264l.001.094a10 10 0 0 0 .018.33l.014.155l.021.19l.005.034l.011.086q.022.158.052.316c.202 1.057.706 2.115 1.458 3.058l.034.042l.035-.041c.3-.355 1.044-1.479 1.107-2.154l.001-.012l-.006-.011a4.7 4.7 0 0 1-.535-2.169c0-2.52 1.982-4.613 4.51-4.764l.165-.006a4.96 4.96 0 0 1 2.9.856l.023.016l1.684-.979l.022-.013v-.025a9.84 9.84 0 0 0-2.934-7.039a10 10 0 0 0-7.087-2.91"></svg:path>`,
})
export class MaterialIconThemeCodecovIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeCodeownersIcon],svg[material-icon-theme-codeowners-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#afb42b" d="m20.35 12.25l1.4 1.41l-6.53 6.59l-3.47-3.5l1.4-1.41l2.07 2.08zm-11.1 4.5l3 3h-10v-2c0-2.21 3.58-4 8-4l1.89.11zm1-13a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4"></svg:path>`,
})
export class MaterialIconThemeCodeownersIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeCoderabbitAiIcon],svg[material-icon-theme-coderabbit-ai-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#F4511E" d="M15 8.913A6.85 6.85 0 0 1 12.74 14h-1.68c.035-.162-.052-.274-.165-.35c-.236-.162-.385-.431-.35-.71c.093-.735.545-1.674 2.194-2.536c1.115-.588 1.32-1.8 1.398-1.978c.113-.294.082-.543-.154-.781c-.427-.431-.889-.822-1.449-1.075c-.786-.365-1.588-.345-2.384-.051c-.139.05-.108-.056-.118-.101a5.3 5.3 0 0 0-.545-1.481c-.519-.923-1.243-1.603-2.322-1.831c-.16-.036-.324-.046-.488-.066c-.077-.01-.118.01-.098.101c.144.68.345 1.334.781 1.892c.2.259.473.431.74.609c.283.192.58.37.848.588c.252.213.457.461.555.817C9.467 7.01 9.45 7 9.44 6.986c-.822-1.289-2.43-1.857-4.048-1.39c-.15.04-.129.091-.057.198c.468.71 1.11 1.217 1.87 1.608c.565.289 1.151.527 1.788.608c.288.036.15.228.195.457c.062.355.211.466.16.436c-.977-.386-1.788-.538-2.461-.538c-2.78 0-3.232 2.617-3.211 2.648c-.041-.016-.71-.259-.858.4c-.154.67.755 1.106.755 1.106c.118-.791.837-.964.925-.984c-.072.04-.54.31-.684 1.045c-.123.65.396 1.222.591 1.42h-1.15A6.87 6.87 0 0 1 1 8.913C1 5.093 4.129 2 7.997 2C11.867 2 15 5.094 15 8.913M9.914 14h-.74a.27.27 0 0 0 .072-.142c.062-.355-.247-.426-.247-.426H7.294s.678-.03 1.3-.284c.616-.259 1.114-.71 1.202-.832a1.93 1.93 0 0 0-.031 1.517a.32.32 0 0 0 .149.167"></svg:path>`,
})
export class MaterialIconThemeCoderabbitAiIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeCoffeeIcon],svg[material-icon-theme-coffee-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#42a5f5" d="M4 26h24v2H4zM28 4H7a1 1 0 0 0-1 1v13a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4v-4h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m0 8h-4V6h4Z"></svg:path>`,
})
export class MaterialIconThemeCoffeeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeColdfusionIcon],svg[material-icon-theme-coldfusion-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#0d3858" stroke="#4dd0e1" stroke-width="2" d="M3.009 3.009h25.983v25.983H3.009z"></svg:path><svg:path fill="#4dd0e1" d="M24 9.5v-1a.5.5 0 0 0-.5-.5H22a2 2 0 0 0-2 2v2h-1.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5H20v7.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V14h1.5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H22v-2h1.5a.5.5 0 0 0 .5-.5M12 20a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h3.5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H12a4 4 0 0 0-4 4v4a4 4 0 0 0 4 4h3.5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5Z"></svg:path>`,
})
export class MaterialIconThemeColdfusionIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeColoredpetrinetsIcon],svg[material-icon-theme-coloredpetrinets-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="3" height="1" x="9" y="7.5" fill="#b0bec5" rx="0" ry=".032"></svg:rect><svg:rect width="3" height="1" x="4" y="7.5" fill="#b0bec5" rx="0" ry=".032"></svg:rect><svg:circle cx="3" cy="8" r="2" fill="#4caf50"></svg:circle><svg:circle cx="13" cy="8" r="2" fill="#ff9800"></svg:circle><svg:rect width="4" height="4" x="6" y="6" fill="#00bcd4" rx=".59"></svg:rect>`,
})
export class MaterialIconThemeColoredpetrinetsIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeCommandIcon],svg[material-icon-theme-command-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#90a4ae" d="M24 18h-3v-4h3a6 6 0 1 0-6-6v3h-4V8a6 6 0 1 0-6 6h3v4H8a6 6 0 1 0 6 6v-3h4v3a6 6 0 1 0 6-6M21 8a3 3 0 1 1 3 3h-3ZM11 24a3 3 0 1 1-3-3h3Zm0-13H8a3 3 0 1 1 3-3Zm7 7h-4v-4h4Zm6 9a3.003 3.003 0 0 1-3-3v-3h3a3 3 0 0 1 0 6"></svg:path>`,
})
export class MaterialIconThemeCommandIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeCommitizenIcon],svg[material-icon-theme-commitizen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#64b5f6" d="M29.422 17.4L17.4 29.422a1.986 1.986 0 0 1-2.8 0L2.578 17.4a1.986 1.986 0 0 1 0-2.8L14.6 2.578a1.986 1.986 0 0 1 2.8 0l8.01 8.012L23 13a2 2 0 0 0-.74-.14A2.13 2.13 0 0 0 20.37 14H12a2.08 2.08 0 0 0-1.86-1.14a2.14 2.14 0 0 0 0 4.28A2.08 2.08 0 0 0 12 16h8l-3.82 3.83h-.01a1.9 1.9 0 0 0-.63-.1a2.135 2.135 0 1 0 2.14 2.13a1.8 1.8 0 0 0-.1-.61l4.17-4.17a2 2 0 0 0 .51.06A2.14 2.14 0 0 0 24.4 15a2 2 0 0 0-.06-.51l2.49-2.48l2.592 2.59a1.986 1.986 0 0 1 0 2.8"></svg:path>`,
})
export class MaterialIconThemeCommitizenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeCommitlintIcon],svg[material-icon-theme-commitlint-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#009688" d="M2.47 2.922V8.37h1.813V2.922zm12.708 1.816a7.27 7.27 0 0 0-6.946 5.127L6.1 12l2.133 2.133c.916 2.969 3.677 5.13 6.945 5.13c4.013 0 7.262-3.25 7.262-7.263s-3.25-7.262-7.262-7.262m2.942 3.703l1.342 1.63l-5.49 5.488l-3.179-3.467l1.34-1.34l1.838 1.838zM3.377 10.184c-.998 0-1.816.817-1.816 1.816a1.817 1.817 0 1 0 1.816-1.816M2.47 15.63v5.448h1.814V15.63z"></svg:path>`,
})
export class MaterialIconThemeCommitlintIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeConcourseIcon],svg[material-icon-theme-concourse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:clippath id="materialIconThemeConcourse0"><svg:path d="M.913 1h22.173v22H.913z"></svg:path></svg:clippath><svg:g fill="#2196f3" stroke-linejoin="round" stroke-miterlimit="2" clip-path="url(#materialIconThemeConcourse0)" transform="translate(1.036 1.05)scale(.9137)"><svg:path d="M13.555 14.025a1.541 1.541 0 1 0-.255-3.071a1.541 1.541 0 0 0 .255 3.071m1.796-.022a3.3 3.3 0 0 1-1.203.839l-.004.01c.348 1.34.894 2.62 1.618 3.799a5.9 5.9 0 0 1-2.035.644l-.101.013l-.119.009l-.24.018c-.147 0-.292.014-.446.005a6.1 6.1 0 0 1-1.782-.304a6.3 6.3 0 0 1-1.986-1.067c-.156-.118-.278-.237-.384-.329a12 12 0 0 1-.315-.312s.094.13.271.353c.093.107.2.243.341.383a6.4 6.4 0 0 0 1.125.939q.375.249.781.444a6.8 6.8 0 0 0 1.883.59c.166.032.345.043.518.064l.241.015l.12.007l.137.002a6.9 6.9 0 0 0 2.646-.499q.303.412.636.801l-.03.019l-.265.164l-.037.023l-.009.006l-.003.001l.047-.023l-.005.003l-.019.01l-.081.04l-.169.086l-.089.046l-.046.023l-.023.012l-.009.004l.03-.012l-.012.005l-.197.087l-.207.09l-.026.012l-.004.002l.021-.008l-.007.004l-.014.005l-.054.021l-.112.044a8.1 8.1 0 0 1-3.175.535l-.141-.005l-.159-.012l-.319-.026c-.198-.031-.396-.045-.6-.089a8.3 8.3 0 0 1-2.306-.781a6 6 0 0 1-.507-.281c-.165-.094-.318-.2-.468-.302a8.3 8.3 0 0 1-1.427-1.243c-.181-.187-.317-.369-.438-.513c-.117-.147-.198-.27-.258-.351l-.091-.125l.078.134c.052.086.121.218.223.377c.105.156.224.353.387.561a8.8 8.8 0 0 0 1.328 1.418c.144.121.291.247.453.362a9 9 0 0 0 1.619.963q.606.277 1.246.462c.211.069.44.112.661.168l.316.058l.157.029l.175.025a9 9 0 0 0 1.304.081a9.2 9.2 0 0 0 2.316-.323l.116-.033l.056-.015l.079-.025l.216-.07l.204-.066l.222-.085l.177-.069l.084-.033l.021-.007l.005-.002l.102-.051l.281-.136l.35-.17q.356.343.738.66s1.212 1.249 1.88.735c.628-.482-.095-1.996-.095-1.996a14.03 14.03 0 0 0-5.192-6.847m-4.23-2.052l-.007-.009a14 14 0 0 0-4.053-.57a5.9 5.9 0 0 1 .537-2.155l.043-.093l.055-.106l.112-.213c.078-.125.143-.254.232-.38a6.1 6.1 0 0 1 1.203-1.351a6.3 6.3 0 0 1 1.956-1.118c.183-.07.348-.111.483-.152c.272-.069.432-.102.432-.102s-.161.01-.444.042c-.139.023-.312.041-.506.086a6.4 6.4 0 0 0-1.392.458a6.75 6.75 0 0 0-2.288 1.711c-.116.124-.22.27-.329.406l-.14.196l-.069.098l-.075.116a7 7 0 0 0-.995 2.591l-.004.024a15 15 0 0 0-1 .128l.001-.174l.001-.312v-.056l-.005.052l.001-.006l.002-.022l.008-.089l.016-.19l.009-.099l.005-.051l.002-.026v-.006l.001-.003c.001-.009-.011.063-.006.031l.002-.013l.031-.213l.033-.223l.004-.029v-.004l-.004.021l.001-.007l.003-.014l.011-.058l.022-.117a8.1 8.1 0 0 1 1.228-2.977l.079-.117l.095-.128l.19-.258c.132-.151.248-.312.394-.46A8.3 8.3 0 0 1 8.88 4.468q.251-.155.507-.282c.167-.091.337-.164.503-.237a8.3 8.3 0 0 1 1.81-.552c.255-.054.482-.073.668-.099c.186-.022.334-.025.434-.034l.155-.01l-.155-.006c-.1-.001-.249-.013-.437-.011c-.189.007-.419.003-.682.032a8 8 0 0 0-.881.117a9 9 0 0 0-1.025.257c-.179.059-.364.117-.547.193q-.279.104-.558.24A8.8 8.8 0 0 0 6.504 5.51c-.171.143-.329.315-.493.472l-.216.237l-.108.119l-.114.135a9 9 0 0 0-.76 1.063a9.2 9.2 0 0 0-.952 2.136l-.034.115l-.017.056l-.021.081l-.055.219l-.052.208l-.045.234l-.036.187l-.017.088l-.004.022l-.001.005l-.006.06l-.001.011l-.005.043l-.033.309l-.059.552q-.483.13-.959.296s-1.695.396-1.599 1.233c.091.787 1.761.947 1.761.947a14.03 14.03 0 0 0 8.543-.923a3.3 3.3 0 0 1-.1-1.464m11.935-.909a9 9 0 0 0-.209-1.313c-.044-.218-.12-.438-.179-.658l-.105-.304l-.052-.151l-.064-.165a9.1 9.1 0 0 0-1.99-3.033l-.127-.127l-.061-.056l-.166-.153l-.158-.146l-.183-.151l-.147-.121l-.069-.057l-.017-.014l-.005-.004l-.049-.034l-.045-.03l-.256-.177l-.344-.238q.134-.53.225-1.071c.091-.541.473-1.675-.306-1.996c-.732-.302-1.68 1.083-1.68 1.083a14.02 14.02 0 0 0-3.325 7.923c.485.104.939.316 1.329.621l.011-.002a14 14 0 0 0 2.411-3.181c.621.39 1.163.892 1.6 1.48l.06.082l.067.099l.134.2c.072.128.155.247.223.386c.287.534.493 1.108.611 1.702a6.3 6.3 0 0 1 .046 2.253c-.026.194-.069.359-.097.497c-.07.272-.118.427-.118.427s.068-.146.175-.409c.047-.134.114-.294.166-.486q.099-.32.162-.65a6.8 6.8 0 0 0-.025-2.649a7 7 0 0 0-.281-.97c-.053-.161-.132-.322-.198-.483l-.106-.217l-.053-.107l-.066-.121a6.8 6.8 0 0 0-1.773-2.091q.215-.478.393-.971l.053.029l.274.15l.037.021l.012.006l-.043-.029l.005.003l.093.062l.158.106l.083.055l.043.028l.03.02l-.025-.02l.01.008l.172.129l.181.135l.023.018l.003.002l-.016-.014l.017.014l.046.037l.093.075a8.1 8.1 0 0 1 2.027 2.503l.065.125l.201.435c.07.188.156.367.217.566c.268.771.421 1.577.453 2.392q.016.295.005.58c0 .19-.018.375-.032.556a8.5 8.5 0 0 1-.382 1.853c-.074.25-.166.458-.232.634c-.07.174-.138.305-.178.398l-.065.14l.079-.133c.049-.087.13-.212.218-.379c.085-.168.198-.369.299-.613q.181-.407.318-.83q.163-.504.264-1.023c.034-.186.072-.376.092-.573a9 9 0 0 0 .043-1.883"></svg:path></svg:g>`,
})
export class MaterialIconThemeConcourseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeConductIcon],svg[material-icon-theme-conduct-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#cddc39" d="m10 17l-4-4l1.41-1.41L10 14.17l6.59-6.59L18 9m-6-6a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1m7 0h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2"></svg:path>`,
})
export class MaterialIconThemeConductIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeConsoleIcon],svg[material-icon-theme-console-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ff7043" d="M20 19V7H4v12zm0-16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-7 14v-2h5v2zm-3.42-4L5.57 9H8.4l3.3 3.3c.39.39.39 1.03 0 1.42L8.42 17H5.59z"></svg:path>`,
})
export class MaterialIconThemeConsoleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeContentlayerIcon],svg[material-icon-theme-contentlayer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#651FFF" fill-rule="evenodd" stroke="#651FFF" stroke-width="1.073" d="M-2.482.404A1.93 1.93 0 0 1-.16.427l6.967 5.356a1.93 1.93 0 0 1 0 3.058L4.15 10.883l2.7 2.171c.983.79.956 2.294-.053 3.048l-7.152 5.344a1.93 1.93 0 0 1-2.439-.106l-5.596-4.996l-.782-.672c-3.492-3-3.062-8.526.845-10.951zm5.6 9.65L-.13 7.444a1.93 1.93 0 0 0-2.384-.026l-2.403 1.848a1.93 1.93 0 0 0 0 3.058l2.42 1.86a1.93 1.93 0 0 0 2.352 0l3.246-2.494l2.944 2.366a.643.643 0 0 1-.018 1.016l-7.152 5.344a.64.64 0 0 1-.813-.035l-5.6-5l-.796-.684c-2.839-2.439-2.482-6.935.705-8.896l.023-.014l5.888-4.349a.64.64 0 0 1 .774.008l6.967 5.356a.643.643 0 0 1 0 1.02zm-1.049.807l-2.998 2.304a.64.64 0 0 1-.783 0l-2.421-1.86a.643.643 0 0 1 0-1.02l2.403-1.848a.64.64 0 0 1 .795.009z" clip-rule="evenodd" transform="matrix(.5949 0 0 .61208 9.182 1.311)"></svg:path>`,
})
export class MaterialIconThemeContentlayerIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeContributingIcon],svg[material-icon-theme-contributing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ffca28" d="M17 9H7V7h10m0 6H7v-2h10m-3 6H7v-2h7M12 3a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1m7 0h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2"></svg:path>`,
})
export class MaterialIconThemeContributingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeControllerIcon],svg[material-icon-theme-controller-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ffc107" d="M8.002 10.45A2.45 2.45 0 0 1 5.552 8a2.45 2.45 0 0 1 2.45-2.45A2.45 2.45 0 0 1 10.452 8a2.45 2.45 0 0 1-2.45 2.45m5.2-1.771c.029-.224.05-.448.05-.679a6 6 0 0 0-.05-.7l1.478-1.141a.35.35 0 0 0 .084-.448l-1.4-2.422a.344.344 0 0 0-.427-.154l-1.743.7a5 5 0 0 0-1.183-.686l-.26-1.855A.354.354 0 0 0 9.402 1h-2.8a.354.354 0 0 0-.35.294l-.258 1.855a5 5 0 0 0-1.183.686l-1.743-.7a.344.344 0 0 0-.427.154l-1.4 2.422a.345.345 0 0 0 .084.448L2.8 7.3a6 6 0 0 0-.05.7c0 .231.022.455.05.679L1.324 9.841a.345.345 0 0 0-.084.448l1.4 2.422c.084.154.273.21.427.154l1.743-.707c.364.28.742.518 1.183.693l.259 1.855a.354.354 0 0 0 .35.294h2.8a.354.354 0 0 0 .35-.294l.259-1.855a5 5 0 0 0 1.183-.693l1.743.707c.154.056.343 0 .427-.154l1.4-2.422a.35.35 0 0 0-.084-.448z"></svg:path>`,
})
export class MaterialIconThemeControllerIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeCopilotIcon],svg[material-icon-theme-copilot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fafafa" d="M7.998 14C4.006 14 1.11 11.457 1 10.728v-1.7c.074-.549.592-1.472 1.39-1.803l.031-.19a4 4 0 0 1 .11-.534c-.176-.444-.222-.946-.222-1.446c0-.759.112-1.544.606-2.168c.507-.64 1.308-.98 2.384-1.1c1.055-.117 1.98.03 2.576.667q.066.07.121.144a2 2 0 0 1 .126-.144c.596-.638 1.52-.784 2.576-.667c1.076.12 1.877.46 2.383 1.1c.495.624.607 1.41.607 2.168c0 .5-.047 1.002-.223 1.446c.058.199.086.374.11.534l.033.19c.808.336 1.332 1.284 1.392 1.829v1.634C15 11.356 12.068 14 7.998 14m0-1.296c1.995 0 4.011-.969 4.377-1.25V7.738l-.02-.1c-.429.182-.94.253-1.511.253c-1.003 0-1.802-.285-2.371-.865A2.82 2.812 0 0 1 8 6.38a2.835 2.828 0 0 1-.476.648c-.569.58-1.368.865-2.371.865c-.57 0-1.082-.07-1.511-.254l-.02.101v3.714c.366.282 2.381 1.25 4.376 1.25M6.917 3.347c-.17-.18-.558-.36-1.472-.259c-.892.099-1.294.353-1.499.611c-.216.272-.323.689-.323 1.356c0 .693.113 1.022.27 1.197c.142.158.454.33 1.262.33c.746 0 1.171-.204 1.433-.47c.275-.282.46-.722.54-1.356c.102-.816-.033-1.218-.211-1.409m3.635-.259c-.913-.101-1.302.08-1.47.26c-.179.19-.315.592-.212 1.408c.08.634.265 1.074.54 1.356c.262.266.687.47 1.434.47c.807 0 1.12-.172 1.262-.33c.156-.175.269-.504.269-1.197c0-.667-.108-1.084-.324-1.356c-.204-.258-.606-.512-1.499-.61Z"></svg:path><svg:path fill="#fafafa" d="M6.469 8.765a.656.655 0 0 1 .656.654v1.31a.656.655 0 0 1-1.313 0V9.42a.656.655 0 0 1 .657-.654Zm3.718.654v1.31a.656.655 0 0 1-1.312 0V9.42a.656.655 0 0 1 1.313 0z"></svg:path>`,
})
export class MaterialIconThemeCopilotIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeCopilotLightIcon],svg[material-icon-theme-copilot-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#212121" d="M7.998 14C4.006 14 1.11 11.457 1 10.728v-1.7c.074-.549.592-1.472 1.39-1.803l.031-.19a4 4 0 0 1 .11-.534c-.176-.444-.222-.946-.222-1.446c0-.759.112-1.544.606-2.168c.507-.64 1.308-.98 2.384-1.1c1.055-.117 1.98.03 2.576.667q.066.07.121.144a2 2 0 0 1 .126-.144c.596-.638 1.52-.784 2.576-.667c1.076.12 1.877.46 2.383 1.1c.495.624.607 1.41.607 2.168c0 .5-.047 1.002-.223 1.446c.058.199.086.374.11.534l.033.19c.808.336 1.332 1.284 1.392 1.829v1.634C15 11.356 12.068 14 7.998 14m0-1.296c1.995 0 4.011-.969 4.377-1.25V7.738l-.02-.1c-.429.182-.94.253-1.511.253c-1.003 0-1.802-.285-2.371-.865A2.82 2.812 0 0 1 8 6.38a2.835 2.828 0 0 1-.476.648c-.569.58-1.368.865-2.371.865c-.57 0-1.082-.07-1.511-.254l-.02.101v3.714c.366.282 2.381 1.25 4.376 1.25M6.917 3.347c-.17-.18-.558-.36-1.472-.259c-.892.099-1.294.353-1.499.611c-.216.272-.323.689-.323 1.356c0 .693.113 1.022.27 1.197c.142.158.454.33 1.262.33c.746 0 1.171-.204 1.433-.47c.275-.282.46-.722.54-1.356c.102-.816-.033-1.218-.211-1.409m3.635-.259c-.913-.101-1.302.08-1.47.26c-.179.19-.315.592-.212 1.408c.08.634.265 1.074.54 1.356c.262.266.687.47 1.434.47c.807 0 1.12-.172 1.262-.33c.156-.175.269-.504.269-1.197c0-.667-.108-1.084-.324-1.356c-.204-.258-.606-.512-1.499-.61Z"></svg:path><svg:path fill="#212121" d="M6.469 8.765a.656.655 0 0 1 .656.654v1.31a.656.655 0 0 1-1.313 0V9.42a.656.655 0 0 1 .657-.654Zm3.718.654v1.31a.656.655 0 0 1-1.312 0V9.42a.656.655 0 0 1 1.313 0z"></svg:path>`,
})
export class MaterialIconThemeCopilotLightIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeCppIcon],svg[material-icon-theme-cpp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#0288d1" d="M28 14v-4h-2v4h-6v-4h-2v4h-4v2h4v4h2v-4h6v4h2v-4h4v-2z"></svg:path><svg:path fill="#0288d1" d="M13.563 22A5.57 5.57 0 0 1 8 16.437v-2.873A5.57 5.57 0 0 1 13.563 8H18V2h-4.437A11.563 11.563 0 0 0 2 13.563v2.873A11.564 11.564 0 0 0 13.563 28H18v-6Z"></svg:path>`,
})
export class MaterialIconThemeCppIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeCracoIcon],svg[material-icon-theme-craco-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#00bfa5" d="M16 8a8 8 0 1 1-8 8a8.01 8.01 0 0 1 8-8m0-4a12 12 0 1 0 12 12A12 12 0 0 0 16 4"></svg:path><svg:path fill="#00bfa5" d="m11.315 19.758l-.755-.754l1.5-1.502L13.557 16l-1.499-1.502l-1.499-1.502l.754-.755l.755-.754l2.304 2.226c1.267 1.225 2.303 2.254 2.303 2.287s-1.036 1.062-2.303 2.286l-2.304 2.227Zm5.323 0l-.754-.754l1.499-1.502L18.882 16l-1.5-1.502l-1.498-1.502l.754-.755l.755-.754l2.303 2.226C20.963 14.938 22 15.967 22 16s-1.037 1.062-2.304 2.286l-2.303 2.227ZM14 26h4v4h-4zm16-12v4h-4v-4zm-2.686 10.486l-2.828 2.828l-2.9-2.9l2.829-2.828zm-16.9-16.901l-2.829 2.829l-2.9-2.9l2.829-2.828zM7.586 21.586l2.828 2.828l-2.9 2.9l-2.828-2.829zm16.899-16.9l2.829 2.829l-2.9 2.9l-2.828-2.829zM6 14v4H2v-4zm8-12h4v4h-4z"></svg:path>`,
})
export class MaterialIconThemeCracoIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeCreditsIcon],svg[material-icon-theme-credits-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#9ccc65" d="M4 2h24v4H4zm6 6h12v4H10zm-6 6h24v4H4zm6 6h12v4H10zm-6 6h24v4H4z"></svg:path>`,
})
export class MaterialIconThemeCreditsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeCrystalIcon],svg[material-icon-theme-crystal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#cfd8dc" d="m179.363 121.67l-57.623 57.507c-.23.23-.576.346-.806.23l-78.713-21.09c-.346-.115-.577-.345-.577-.576L20.44 79.144c-.115-.345 0-.576.23-.806L78.294 20.83c.23-.23.576-.346.807-.23l78.713 21.09c.345.114.576.345.576.575l21.09 78.597c.23.346.115.577-.115.807zm-77.215-62.58l-77.33 20.63c-.115 0-.23.23-.115.345l56.586 56.47c.115.115.346.115.346-.115l20.744-77.215c.115 0-.115-.23-.23-.116z"></svg:path>`,
})
export class MaterialIconThemeCrystalIcon {
  readonly viewBox = input("0 0 200 200")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeCrystalLightIcon],svg[material-icon-theme-crystal-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#37474f" d="m179.363 121.67l-57.623 57.507c-.23.23-.576.346-.806.23l-78.713-21.09c-.346-.115-.577-.345-.577-.576L20.44 79.144c-.115-.345 0-.576.23-.806L78.294 20.83c.23-.23.576-.346.807-.23l78.713 21.09c.345.114.576.345.576.575l21.09 78.597c.23.346.115.577-.115.807zm-77.215-62.58l-77.33 20.63c-.115 0-.23.23-.115.345l56.586 56.47c.115.115.346.115.346-.115l20.744-77.215c.115 0-.115-.23-.23-.116z"></svg:path>`,
})
export class MaterialIconThemeCrystalLightIcon {
  readonly viewBox = input("0 0 200 200")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeCsharpIcon],svg[material-icon-theme-csharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#0288d1" d="M30 14v-2h-2V8h-2v4h-2V8h-2v4h-2v2h2v2h-2v2h2v4h2v-4h2v4h2v-4h2v-2h-2v-2Zm-4 2h-2v-2h2Zm-12.437 6A5.57 5.57 0 0 1 8 16.437v-2.873A5.57 5.57 0 0 1 13.563 8H18V2h-4.437A11.563 11.563 0 0 0 2 13.563v2.873A11.564 11.564 0 0 0 13.563 28H18v-6Z"></svg:path>`,
})
export class MaterialIconThemeCsharpIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeCssIcon],svg[material-icon-theme-css-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#7e57c2" d="M20 18h-2v-2h-2v2c0 .193 0 .703 1.254 1.033A3.345 3.345 0 0 1 20 22h2v2h2v-2c0-.388-.562-.851-1.254-1.034C20.356 20.34 20 18.84 20 18m-3.254 2.966C14.356 20.34 14 18.84 14 18h-2v-2h-2v8h2v-2h4v2h2v-2c0-.388-.562-.851-1.254-1.034"></svg:path><svg:path fill="#7e57c2" d="M24 4H4v20a4 4 0 0 0 4 4h16.16A3.84 3.84 0 0 0 28 24.16V8a4 4 0 0 0-4-4m2 14h-2v-2h-2v2c0 .193 0 .703 1.254 1.033A3.345 3.345 0 0 1 26 22v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2Z"></svg:path>`,
})
export class MaterialIconThemeCssIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeCssMapIcon],svg[material-icon-theme-css-map-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#7e57c2" d="M26 11.998v2h2v14H14v-2h-2v4L30 30V11.998Z"></svg:path><svg:path fill="#7e57c2" d="M16 14h-2v-2h-2v2c0 .193 0 .703 1.254 1.033A3.345 3.345 0 0 1 16 18h2v2h2v-2c0-.388-.562-.851-1.254-1.034C16.356 16.34 16 14.84 16 14m-3.254 2.966C10.356 16.34 10 14.84 10 14H8v-2H6v8h2v-2h4v2h2v-2c0-.388-.562-.851-1.254-1.034"></svg:path><svg:path fill="#7e57c2" d="M2 2v21.998h22V2Zm20 12h-2v-2h-2v2c0 .193 0 .703 1.254 1.033A3.345 3.345 0 0 1 22 18v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2Z"></svg:path>`,
})
export class MaterialIconThemeCssMapIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeCucumberIcon],svg[material-icon-theme-cucumber-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#4caf50" fill-rule="evenodd" d="M16.633 2.088c-7.028 0-12.714 5.686-12.714 12.714c0 6.187 4.435 11.327 10.288 12.471v3.64c7.609-1.148 14.346-7.187 14.848-15.117c.303-4.772-2.076-9.644-6.09-12.01a10.6 10.6 0 0 0-1.455-.728l-.243-.097c-.223-.083-.448-.175-.68-.243a12.6 12.6 0 0 0-3.954-.63m2.62 4.707a1.39 1.39 0 0 0-1.213.485c-.233.31-.379.611-.534.922c-.466 1.087-.31 2.252.388 3.106c1.087-.233 2.01-.927 2.475-2.014a2.45 2.45 0 0 0 .243-1.02c.048-.824-.634-1.405-1.359-1.48zm-5.654.073c-.708.067-1.382.63-1.382 1.407c0 .31.087.708.243 1.019c.466 1.087 1.46 1.78 2.546 2.014c.621-.854.782-2.019.316-3.106c-.155-.31-.3-.616-.534-.85a1.36 1.36 0 0 0-1.188-.484zM9.79 10.603c-1.224.063-1.77 1.602-.752 2.402c.31.233.612.403.922.558c1.087.466 2.344.306 3.275-.315c-.233-1.01-1.023-1.936-2.11-2.402c-.388-.155-.703-.243-1.092-.243c-.087-.01-.161-.004-.243 0m11.961 4.707a3.55 3.55 0 0 0-2.013.583c.233 1.009 1.023 1.935 2.11 2.401c.389.155.705.243 1.093.243c1.397.078 2.08-1.65.994-2.426c-.31-.233-.611-.379-.922-.534a3.4 3.4 0 0 0-1.262-.267m-10.603.073a3.4 3.4 0 0 0-1.261.267c-.389.155-.69.325-.923.558c-1.009.854-.33 2.48 1.068 2.402a2.5 2.5 0 0 0 1.092-.243c1.087-.466 1.859-1.392 2.014-2.401a3.47 3.47 0 0 0-1.99-.583m3.931 2.378c-1.087.233-2.009.927-2.475 2.014c-.155.31-.243.684-.243.994c-.077 1.32 1.724 2.03 2.5 1.02c.233-.31.378-.612.534-.923c.466-1.009.306-2.174-.316-3.105m2.887.073c-.621.854-.781 2.018-.315 3.105c.155.311.3.616.534.85c.854.93 2.65.242 2.572-.923c0-.31-.088-.708-.243-1.019c-.466-1.087-1.46-1.78-2.547-2.013z"></svg:path>`,
})
export class MaterialIconThemeCucumberIcon {
  readonly viewBox = input("0 0 33 33")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeCudaIcon],svg[material-icon-theme-cuda-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#7CB342" d="M12.496 10.16c-.184 0-.314.01-.496.022V12a7 7 0 0 1 .991-.062a7.34 7.34 0 0 1 5.335 2.457l-2.72 2.156c-1.213-1.922-1.568-2.767-3.606-3v5.468a4.8 4.8 0 0 0 1.486.234c3.969 0 7.667-4.847 7.667-4.847s-3.427-4.402-8.657-4.246m-9.222 4.468A12.46 12.46 0 0 1 12 10.184V8.715c-6.407.489-12 5.602-12 5.602s3.202 8.56 12 9.337v-1.641c-6.454-.756-8.726-7.385-8.726-7.385"></svg:path><svg:path fill="#7CB342" d="M12 13.54V12a11.17 11.17 0 0 0-6.3 2.828s1.424 4.791 6.3 5.614v-1.423a6.48 6.48 0 0 1-3.72-3.913A5.04 5.04 0 0 1 12 13.54m0-7.566v2.74l.496-.032c7.267-.234 12.014 5.624 12.014 5.624s-5.442 6.247-11.107 6.247A8.4 8.4 0 0 1 12 20.431V22a11 11 0 0 0 1.19.108c5.276 0 9.058-2.478 12.757-5.479c.612.467 3.12 1.59 3.64 2.079c-3.51 2.779-11.696 5.013-16.337 5.013a12 12 0 0 1-1.25-.066V26h20V6Z"></svg:path>`,
})
export class MaterialIconThemeCudaIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeCypressIcon],svg[material-icon-theme-cypress-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#00bfa5" d="M11.998 2A9.993 9.993 0 0 0 2 12a9.993 9.993 0 0 0 10 10c5.528 0 10-4.473 10-10c-.001-5.527-4.51-10-10.002-10m-4.69 12.146c.327.436.763.618 1.381.618c.292 0 .583-.037.837-.146c.255-.108.546-.255.908-.473l1.019 1.454c-.836.692-1.782 1.018-2.873 1.018c-.873 0-1.6-.182-2.254-.545a3.66 3.66 0 0 1-1.454-1.599c-.327-.691-.509-1.491-.509-2.437c0-.908.182-1.745.508-2.436a3.85 3.85 0 0 1 1.457-1.672c.617-.4 1.38-.582 2.217-.582c.583 0 1.128.072 1.564.254c.49.19.944.46 1.345.8l-1.018 1.382a4 4 0 0 0-.836-.474c-.254-.108-.582-.145-.873-.145c-1.236 0-1.854.945-1.854 2.872c-.036.983.146 1.673.437 2.11zm10 2.254c-.363 1.128-.909 1.964-1.673 2.582c-.763.619-1.782.946-3.054 1.055l-.254-1.708c.836-.11 1.454-.292 1.854-.583c.145-.108.437-.436.437-.436l-3.019-9.673h2.508l1.746 7.236l1.855-7.236h2.436z"></svg:path>`,
})
export class MaterialIconThemeCypressIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeDIcon],svg[material-icon-theme-d-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#f44336" d="M21.805 8.063a5 5 0 0 0-3.502.727A10.95 10.95 0 0 0 11 6H2.5a.5.5 0 0 0-.5.5v21a.5.5 0 0 0 .5.5H11a10.995 10.995 0 0 0 10.954-10.096a4.998 4.998 0 0 0-.149-9.841M11 24H6V10h5a7 7 0 0 1 0 14"></svg:path><svg:circle cx="28" cy="7" r="1.5" fill="#f44336"></svg:circle>`,
})
export class MaterialIconThemeDIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeDartIcon],svg[material-icon-theme-dart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#4FC3F7" d="M16.83 2a1.3 1.3 0 0 0-.916.377l-.013.01L7.323 7.34l8.556 8.55v.005l10.283 10.277l1.96-3.529l-7.068-16.96l-3.299-3.297A1.3 1.3 0 0 0 16.828 2Z"></svg:path><svg:path fill="#01579B" d="m7.343 7.32l-4.955 8.565l-.01.013a1.297 1.297 0 0 0 .004 1.835l.005.005l4.106 4.107l16.064 6.314l3.632-2.015l-.098-.098l-.025.002L15.995 15.97h-.012z"></svg:path><svg:path fill="#01579B" d="m7.321 7.324l8.753 8.755h.013L26.16 26.156l3.835-.73L30 14.089l-4.049-3.965a6.5 6.5 0 0 0-3.618-1.612l.002-.043L7.323 7.325Z"></svg:path><svg:path fill="#64B5F6" d="m7.332 7.335l8.758 8.75v.013l10.079 10.071L25.436 30H14.09l-3.967-4.048a6.5 6.5 0 0 1-1.611-3.618l-.045.004Z"></svg:path>`,
})
export class MaterialIconThemeDartIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeDartGeneratedIcon],svg[material-icon-theme-dart-generated-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#90a4ae" d="M16.83 2a1.3 1.3 0 0 0-.916.377l-.013.01L7.323 7.34l8.556 8.55v.005l10.283 10.277l1.96-3.529l-7.068-16.96l-3.299-3.297A1.3 1.3 0 0 0 16.828 2Z"></svg:path><svg:path fill="#455a64" d="m7.343 7.32l-4.955 8.565l-.01.013a1.297 1.297 0 0 0 .004 1.835l.005.005l4.106 4.107l16.064 6.314l3.632-2.015l-.098-.098l-.025.002L15.995 15.97h-.012z"></svg:path><svg:path fill="#455a64" d="m7.321 7.324l8.753 8.755h.013L26.16 26.156l3.835-.73L30 14.089l-4.049-3.965a6.5 6.5 0 0 0-3.618-1.612l.002-.043L7.323 7.325Z"></svg:path><svg:path fill="#90a4ae" d="m7.332 7.335l8.758 8.75v.013l10.079 10.071L25.436 30H14.09l-3.967-4.048a6.5 6.5 0 0 1-1.611-3.618l-.045.004Z"></svg:path>`,
})
export class MaterialIconThemeDartGeneratedIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeDatabaseIcon],svg[material-icon-theme-database-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ffca28" d="M16 24c-5.525 0-10-.9-10-2v4c0 1.1 4.475 2 10 2s10-.9 10-2v-4c0 1.1-4.475 2-10 2m0-8c-5.525 0-10-.9-10-2v4c0 1.1 4.475 2 10 2s10-.9 10-2v-4c0 1.1-4.475 2-10 2m0-12C10.477 4 6 4.895 6 6v4c0 1.1 4.475 2 10 2s10-.9 10-2V6c0-1.105-4.477-2-10-2"></svg:path>`,
})
export class MaterialIconThemeDatabaseIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeDeepsourceIcon],svg[material-icon-theme-deepsource-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#1de9b6" d="M2 2h9a1 1 0 0 1 1 .992A1 1 0 0 1 11 4H2z"></svg:path><svg:path fill="#f44336" d="M2 12h11a1 1 0 0 1 1 1a1 1 0 0 1-1 1H2z"></svg:path><svg:path fill="#ffb300" d="M2 9h7a1 1 0 0 0 1-1a1 1 0 0 0-1-1H2z"></svg:path>`,
})
export class MaterialIconThemeDeepsourceIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeDenizenscriptIcon],svg[material-icon-theme-denizenscript-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ffd54f" d="M6 4h8.804a17 17 0 0 1 4.54.459a8 8 0 0 1 3.597 2.21a10.5 10.5 0 0 1 2.278 3.887A17.8 17.8 0 0 1 26 16.23a15.8 15.8 0 0 1-.733 5.108a10.6 10.6 0 0 1-2.554 4.24a8.45 8.45 0 0 1-3.385 1.915a14.5 14.5 0 0 1-4.264.508H6Zm4 4.06v15.896h4.413a13 13 0 0 0 2.913-.228a4.45 4.45 0 0 0 1.945-1a5.1 5.1 0 0 0 1.261-2.316a15.8 15.8 0 0 0 .488-4.395a14.5 14.5 0 0 0-.488-4.274a5.5 5.5 0 0 0-1.367-2.324a4.57 4.57 0 0 0-2.23-1.13a21.7 21.7 0 0 0-3.954-.229Z"></svg:path>`,
})
export class MaterialIconThemeDenizenscriptIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeDenoIcon],svg[material-icon-theme-deno-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#cfd8dc" d="M3.069 10.688C3.069 5.873 7.859 2 14 2a11.9 11.9 0 0 1 7.49 2.378a10.64 10.64 0 0 1 3.593 5.236l.015.049l.017.057l.034.108l.048.198l.134.463l.14.529l.238.875l.38 1.386l.613 2.28l.692 2.593l1.116 4.168l.42 1.571l-.09.1A18.98 18.98 0 0 1 17.337 30l-.04-.273l-.074-.545l-.066-.395l-.076-.52l-.097-.634l-.042-.25l-.091-.602l-.057-.356l-.074-.462l-.076-.444l-.074-.432l-.074-.422l-.066-.413l-.074-.395l-.068-.38l-.048-.281l-.057-.271l-.034-.173l-.066-.35l-.05-.246l-.057-.305l-.049-.215l-.042-.205l-.043-.2l-.023-.132l-.059-.248l-.042-.181l-.04-.182l-.032-.114l-.042-.167l-.032-.157l-.042-.156l-.043-.148l-.023-.091l-.042-.142l-.032-.13l-.025-.092l-.034-.084l-.023-.072l-.034-.116l-.025-.085l-.017-.049q-.067-.196-.148-.386l-.026-.051l.19-.495l-.75.026l-.207.008c-6.82.14-11.222-2.759-11.222-7.301Zm14.345-4.101a2 2 0 1 0 0 2.827a2 2 0 0 0 0-2.827"></svg:path><svg:path fill="#cfd8dc" d="M3.069 10.688c.95-12.027 21.388-11.423 22.64 1.205c1.027 3.74 2.21 8.244 3.222 11.998A18.98 18.98 0 0 1 17.337 30c-.407-2.79-.84-5.602-1.41-8.364a27 27 0 0 0-.505-2.123c-.104-.536-.523-1.043-.173-1.56c-6.665.529-12.374-2.428-12.18-7.267Zm14.345-4.101c-1.807-1.861-4.689 1.02-2.827 2.828c1.807 1.86 4.689-1.021 2.827-2.828"></svg:path>`,
})
export class MaterialIconThemeDenoIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeDenoLightIcon],svg[material-icon-theme-deno-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#455a64" d="M3.07 10.688C4.02-1.34 24.46-.735 25.713 11.893c1.027 3.74 2.21 8.244 3.222 11.998A18.98 18.98 0 0 1 17.339 30c-.407-2.79-.839-5.602-1.41-8.364a27 27 0 0 0-.505-2.123c-.103-.536-.522-1.043-.173-1.56c-6.665.529-12.374-2.428-12.18-7.267Zm14.347-4.101c-1.808-1.861-4.69 1.02-2.828 2.828c1.808 1.86 4.69-1.021 2.828-2.828"></svg:path>`,
})
export class MaterialIconThemeDenoLightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeDependabotIcon],svg[material-icon-theme-dependabot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#448aff" d="M29.5 16H28v-4a2 2 0 0 0-2-2h-6V2.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5H18v4H6a2 2 0 0 0-2 2v4H2.5a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5H4v2a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-2h1.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5m-15.533 2.647l-3.106 3.106a.6.6 0 0 1-.84 0l-1.867-1.866a.6.6 0 0 1 0-.84l.627-.64a.6.6 0 0 1 .848-.005l.005.005l.8.8l2.053-2.04a.6.6 0 0 1 .84 0l.64.64a.58.58 0 0 1 0 .84m9.88 0l-3.106 3.106a.6.6 0 0 1-.84 0l-1.867-1.866a.6.6 0 0 1 0-.84l.627-.64a.6.6 0 0 1 .84 0l.813.8l2.053-2.04a.6.6 0 0 1 .84 0l.64.64a.604.604 0 0 1 0 .84"></svg:path>`,
})
export class MaterialIconThemeDependabotIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeDependenciesUpdateIcon],svg[material-icon-theme-dependencies-update-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#8bc34a" d="m10.484 3.635l-2.5 2.546l-.875-.891l1-1.018H8q-1.563 0-2.656 1.121Q4.249 6.515 4.25 8.122a3.5 3.5 0 0 0 .375 1.59l-.937.955a5.156 5.25 0 0 1-.516-1.24A4.81 4.897 0 0 1 3 8.121Q3 5.99 4.453 4.494T8 2.999h.11l-1-1.018l.874-.891zm-4.968 8.747l2.5-2.546l.875.891l-1 1.018H8q1.563 0 2.656-1.12q1.095-1.123 1.094-2.73a3.5 3.5 0 0 0-.375-1.59l.938-.955q.343.604.515 1.24q.172.638.172 1.305q0 2.131-1.453 3.628Q10.094 13.018 8 13.018h-.11l1 1.018l-.874.891z"></svg:path>`,
})
export class MaterialIconThemeDependenciesUpdateIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeDhallIcon],svg[material-icon-theme-dhall-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#78909c" d="M15.81 2.853L21.148 8.2l-1.54 1.518l-5.326-5.327l1.528-1.54M2.853 20.373l6.995-6.962a1.04 1.04 0 0 1 .247-1.033c.42-.42 1.109-.42 1.528 0c.42.43.42 1.108 0 1.528c-.28.28-.7.355-1.033.248l-6.962 6.995l11.418-3.82l3.799-6.845l-5.317-5.327l-6.855 3.799z"></svg:path>`,
})
export class MaterialIconThemeDhallIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeDiffIcon],svg[material-icon-theme-diff-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="M0 0h24v24H0z"></svg:path><svg:path fill="#42a5f5" d="M18 23H4c-1.1 0-2-.9-2-2V7h2v14h14zM14.5 7V5h-2v2h-2v2h2v2h2V9h2V7zm2 6h-6v2h6zM15 1H8c-1.1 0-1.99.9-1.99 2L6 17c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V7zm4 16H8V3h6.17L19 7.83z"></svg:path></svg:g>`,
})
export class MaterialIconThemeDiffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeDinophpIcon],svg[material-icon-theme-dinophp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#ff5252" stroke-width="1.05"><svg:path d="M1101.8 130.51c-12.441.289-30.445 1.731-55.957 5.878c-32.232 5.25-56.168 11.548-61.523 12.914c-39.16 10.394-67.506 22.153-93.018 32.757c-14.383 5.984-33.282 13.859-56.589 25.932l-.734.42c-11.129 5.774-19.738 10.394-24.357 12.914l-2.414 1.258c-16.693 9.03-32.862 15.958-49.765 24.777c0 0-16.167 8.505-39.999 24.043c-6.929 4.515-12.914 9.028-12.914 9.028a141 141 0 0 0-4.621 3.57c-5.67 4.514-10.917 9.554-15.641 15.118c-4.515 5.25-11.025 12.81-15.33 23.518c-7.034 17.113-4.723 32.86-3.673 40c1.47 9.133 4.513 28.66 19.841 41.68c11.758 10.182 25.618 11.864 33.807 12.704c50.079 4.62 98.163-5.354 129.03-9.344c41.47-5.249 73.071-2.31 98.269 0c45.984 4.305 96.587 9.028 148.87 42.1c12.388 7.873 45.67 30.446 74.436 72.021c12.598 18.163 31.811 45.985 39.16 85.985c7.244 39.895-.84 72.755 7.77 74.96c4.094 1.05 8.714-5.354 17.848-17.848a208.5 208.5 0 0 0 28.346-54.173c2.625-7.664 5.25-19.109 10.5-42.1c5.774-24.988 8.607-37.48 10.496-49.344c1.575-10.183 3.465-24.987 4.095-63.937c.63-43.674.944-65.513-1.575-89.029c-3.465-32.02-10.498-63.516-20.997-93.858c-11.34-32.02-22.992-64.252-51.76-94.699c-20.681-21.942-38.95-31.076-45.353-34.015c-18.163-8.503-33.595-10.708-43.673-12.178c-3.255-.472-10.133-1.338-22.574-1.05zm-100.67 82.398c12.105.117 20.275 2.825 22.244 9.046c5.25 16.588-23.937 48.503-74.436 64.46c-50.499 15.854-117.38 7.034-122.62-9.554s41.47-31.39 91.969-47.243c31.562-9.908 62.671-16.905 82.847-16.709z"></svg:path><svg:path d="M925.47 442.64c1.785-5.354 27.401-1.47 37.27 0c27.926 4.2 55.433 8.399 88.189 25.932c23.517 12.493 59.107 36.85 85.774 80.105c5.25 8.399 30.026 49.869 33.176 110.03c2.94 54.908-13.858 95.748-22.677 116.53c-37.06 87.349-106.04 132.7-139.42 154.02c-22.887 14.593-81.575 48.714-161.05 57.953c-40.735 4.724-94.698 3.884-96.798-6.72c-.63-3.359 3.99-7.348 11.024-13.437c3.255-2.835 11.968-9.869 26.982-13.753c8.399-2.205 12.178-1.68 32.651-2.1c19.632-.42 29.396-.63 35.905-1.47c14.593-2.1 28.976-5.984 42.52-11.758c9.764-4.094 17.323-7.139 26.457-13.753a107.1 107.1 0 0 0 26.982-28.87c4.094-6.195 7.874-11.969 11.024-20.473c2.625-6.929 3.045-10.814 6.93-16.588c3.674-5.459 6.718-7.139 11.128-11.339c3.465-3.254 6.09-6.404 17.848-26.142c8.504-14.278 12.703-21.417 15.328-26.457c12.178-23.622 16.693-45.459 19.212-57.848c8.924-43.989 4.62-80.945 2.415-99.527c-3.99-32.86-7.874-65.512-28.346-101.94c-13.543-24.147-31.076-55.328-64.777-76.85c-6.614-4.514-19.003-11.549-17.743-15.538z"></svg:path><svg:path d="M843.89 890.41s6.614-13.963 21.522-55.958c5.67-15.853 8.924-24.987 10.394-38.74c1.89-17.428-.21-31.286-4.41-58.687c-1.05-7.244-2.624-14.383-4.829-21.417c-1.575-5.04-3.044-8.294-7.664-18.898c-12.073-27.192-14.803-32.336-20.052-38.635c-8.084-9.659-13.018-11.024-14.803-11.339c-7.979-1.575-17.848 2.205-20.787 8.924c-2.624 5.984 1.05 12.388 5.04 20.052c0 0 5.774 11.234 19.108 46.089c7.139 18.793 7.769 34.646 8.189 47.559c1.574 46.719-17.953 82.099-24.462 93.438c-17.848 31.286-40 49.134-56.273 61.942c-34.121 26.772-70.761 41.47-89.448 48.924c-29.921 11.968-44.724 14.173-57.428 30.76c-9.87 12.914-11.758 26.038-15.013 48.19c0 0-5.46 38.005 9.343 82.099c2.73 8.294 5.88 15.433 12.913 20.262c10.08 6.824 22.572 4.62 32.756 2.834c13.858-2.414 26.982-8.084 39.265-13.333c9.764-4.199 16.588-7.769 24.672-5.354c3.465 1.05 6.72 3.045 11.34 7.77c10.603 11.023 16.272 24.356 19.841 37.584c5.985 21.837 9.24 34.121 2.415 40.84c-7.349 7.244-23.937 5.67-34.016-.42c-6.929-4.2-7.244-8.504-15.013-11.339c-5.984-2.205-10.499-1.365-20.997-.42c-8.714.735-17.533.84-26.247 1.26c-22.887 1.155-34.33 1.68-44.094 1.26c-13.438-.63-19.842-1.995-23.832 2.415c-4.514 4.934-1.575 12.074-7.244 16.588c-3.36 2.624-7.454 2.73-12.178 2.834c-5.46.105-11.758-1.155-15.328-3.254c-8.714-5.04-6.824-17.953-9.344-47.35c-1.575-19.002-2.624-15.222-6.929-51.337c-.84-7.98-2.1-15.853-3.884-23.622c-1.68-7.454-2.835-10.08-4.62-18.058c-1.575-7.034-2.834-14.278-3.674-21.417c-1.26-10.29-4.305-29.081-11.34-65.932c0 0-13.752-59.002-4.409-78.53c3.045-6.3 7.664-8.084 7.664-8.084c1.26-.525 2.31-.525 6.93-.42c7.453.315 11.128.42 16.587 1.26c7.245 1.05 6.825 1.784 9.66 1.574c4.724-.315 9.133-2.204 12.492-5.354c5.46-5.354 4.935-13.438 5.145-20.262c.104-3.15.21-.735 11.024-41.575c8.818-32.966 7.979-31.706 10.499-39.37c4.934-14.698 9.973-25.512 15.328-36.64c19.318-39.79 28.87-59.632 39.685-77.27c21.627-35.38 42.1-57.953 67.61-86.194c25.723-28.45 48.085-52.913 83.78-78.11c38.005-26.772 60.682-32.966 78.53-34.75c11.234-1.156 27.61-2.836 45.669 4.408c29.71 11.968 42.834 39.895 55.013 65.512c19.527 41.155 21.417 77.795 22.257 97.952c1.574 37.375-4.62 64.987-8.084 80.105c-10.92 47.454-30.131 81.05-41.47 85.354c-1.26.525-7.14 2.415-9.344 7.454c-1.575 3.675-.525 7.245-.21 8.714c2.94 13.018-10.92 30.446-13.753 34.016c-12.808 16.063-29.606 20.577-38.845 23.097c-2.205.63-33.491 8.714-39.265-1.574c-2.205-3.99.525-8.714 4.62-17.428z"></svg:path><svg:path d="M596.23 710.77c.105 4.095-.105 8.084-.42 12.178c-1.785 21.207-8.819 33.806-17.953 54.803c-9.974 22.992-15.853 36.43-20.787 55.853c-3.15 12.388-7.244 24.462-9.554 37.06c-2.73 14.908-2.624 21.627-8.189 25.092c-6.089 3.78-10.814-1.68-29.396-2.1c-9.658-.21-16.903 1.05-24.252 5.88c-6.824 4.514-10.709 9.868-11.863 12.703a34 34 0 0 0-2.73 14.067c1.366 53.753.84 61.417-1.364 64.777c-3.57 5.46-15.328 8.294-33.176 14.803c-6.93 2.52-24.987 8.924-59.107 15.118c-20.262 3.675-35.59 6.51-57.218 7.14c-14.908.63-29.711 0-44.514-1.995c-17.113-2.31-41.155-5.564-66.351-19.108c-10.604-5.67-47.454-25.512-64.777-69.081c-11.968-30.131-8.714-56.798-7.034-69.816a148 148 0 0 1 22.677-61.732c8.084-12.283 23.307-34.541 52.808-47.244c15.748-6.72 32.86-9.659 49.974-8.504c36.535 2.73 77.69 25.512 86.614 58.582c1.05 3.78 5.984 24.042-4.62 38.845c-1.574 2.205-6.194 8.714-11.339 8.084c-5.354-.63-7.139-8.294-14.593-22.152c-6.194-11.549-9.343-17.323-14.803-22.677c-14.488-14.068-34.54-14.068-36.64-14.068c-21.207.315-34.75 13.858-40.42 19.422c-4.304 4.304-21.522 21.837-20.997 49.134c.105 3.465.735 25.827 17.848 43.674c18.268 19.213 43.15 20.472 57.218 20.997c32.231 1.26 58.162-10.919 85.774-26.982a334 334 0 0 0 8.084-4.83c48.4-30.235 88.19-64.566 112.34-87.558c16.588-15.853 21.522-21.942 41.89-40.42c15.853-14.383 18.268-15.643 27.296-25.092c7.98-8.4 13.543-15.223 24.252-23.832c4.83-3.99 9.974-7.664 15.328-11.024zm286.82 313.43c1.995-1.47 6.194-1.47 15.013-1.575c6.194-.105-1.155 0 12.808-.105c9.659-.105 11.129.105 16.693 0c2.625-.105 3.36-.105 8.399-.315c3.36-.105 8.084-.21 11.339-.21c1.575 0 2.835 1.26 2.835 2.73v.105c-.105 6.09.21 12.283-.105 19.212a129 129 0 0 0 0 9.029a86 86 0 0 1 0 7.349c-.315 6.614-.42 23.202 4.094 47.874c1.155 6.3 2.205 11.444 6.51 15.958c6.298 6.614 15.537 7.139 21.521 7.559c12.493.84 22.572-3.045 34.121-7.56c15.433-6.088 18.478-10.078 26.247-8.923c2.835.42 9.239 1.785 17.218 10.814c5.88 6.614 8.61 12.913 13.858 25.302c2.835 6.404 5.145 12.913 7.034 19.738c3.36 12.388 4.935 18.583 2.94 22.677c-5.67 11.338-37.06 4.724-43.254.84c-2.835-1.785-6.09-4.2-6.09-4.2c-1.89-1.364-3.464-2.624-4.514-3.464c-3.884-3.045-6.719-5.144-7.664-5.984c-.525-.42-1.155-.84-1.68-1.26c-.314-.21-.63-.42-1.05-.63c-1.364-.735-2.73-1.365-4.199-1.785c-1.89-.735-3.884-1.365-5.984-1.68c-1.575-.314-1.89-.105-9.449-.21h-4.724c-1.05 0-2.31.105-6.614.63c-4.2.525-6.51.735-8.504 1.05l-6.615 1.155s-9.868 2.1-18.163 3.255c-3.57.525-4.094.42-7.139.945c-4.41.84-6.614 1.154-7.559 1.89c-4.41 3.359 1.68 12.177-1.574 18.582c-4.725 8.924-26.877 11.13-35.695 1.575c-3.465-3.674-3.885-8.189-4.41-12.703c-2.415-20.577-5.984-40.945-7.874-61.522c-.84-9.449-1.68-18.268-3.674-30.236c-1.05-6.51-3.045-25.197-7.14-62.467c-.524-3.674-1.05-10.394 3.045-13.438z"></svg:path></svg:g>`,
})
export class MaterialIconThemeDinophpIcon {
  readonly viewBox = input("0 0 1424.1 1368")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeDiscIcon],svg[material-icon-theme-disc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#b0bec5" d="M16 12a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-10a14 14 0 1 0 14 14A14 14 0 0 0 16 2"></svg:path>`,
})
export class MaterialIconThemeDiscIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeDjangoIcon],svg[material-icon-theme-django-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#43a047" d="M22 2h4v4h-4zm0 8v12.13A3.88 3.88 0 0 1 18.13 26H18v4h.13A7.866 7.866 0 0 0 26 22.13V10Zm-8-8h4v20h-4z"></svg:path><svg:path fill="#43a047" d="M11.838 12A2.165 2.165 0 0 1 14 14.162v4.955l-.77.257a5.03 5.03 0 0 1-2.812.108A3.19 3.19 0 0 1 8 16.384v-.547A3.84 3.84 0 0 1 11.838 12m0-4A7.84 7.84 0 0 0 4 15.837v.547a7.19 7.19 0 0 0 5.448 6.978a9.03 9.03 0 0 0 5.047-.194L18 22v-7.838A6.16 6.16 0 0 0 11.838 8"></svg:path>`,
})
export class MaterialIconThemeDjangoIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeDllIcon],svg[material-icon-theme-dll-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#42a5f5" d="M6 2a2 2 0 0 0-2 2v16c0 1.11.89 2 2 2h6v-2H6V4h7v5h5v3h2V8l-6-6m4 12a.26.26 0 0 0-.26.21l-.19 1.32c-.3.13-.59.29-.85.47l-1.24-.5c-.11 0-.24 0-.31.13l-1 1.73c-.06.11-.04.24.06.32l1.06.82a4.2 4.2 0 0 0 0 1l-1.06.82a.26.26 0 0 0-.06.32l1 1.73c.06.13.19.13.31.13l1.24-.5c.26.18.54.35.85.47l.19 1.32c.02.12.12.21.26.21h2c.11 0 .22-.09.24-.21l.19-1.32c.3-.13.57-.29.84-.47l1.23.5c.13 0 .26 0 .33-.13l1-1.73a.26.26 0 0 0-.06-.32l-1.07-.82c.02-.17.04-.33.04-.5s-.01-.33-.04-.5l1.06-.82a.26.26 0 0 0 .06-.32l-1-1.73c-.06-.13-.19-.13-.32-.13l-1.23.5c-.27-.18-.54-.35-.85-.47l-.19-1.32A.236.236 0 0 0 20 14m-1 3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5c-.84 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5"></svg:path>`,
})
export class MaterialIconThemeDllIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeDockerIcon],svg[material-icon-theme-docker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#0288D1" d="M21.81 10.25c-.06-.04-.56-.43-1.64-.43c-.28 0-.56.03-.84.08c-.21-1.4-1.38-2.11-1.43-2.14l-.29-.17l-.18.27c-.24.36-.43.77-.51 1.19c-.2.8-.08 1.56.33 2.21c-.49.28-1.29.35-1.46.35H2.62c-.34 0-.62.28-.62.63c0 1.15.18 2.3.58 3.38c.45 1.19 1.13 2.07 2 2.61c.98.6 2.59.94 4.42.94c.79 0 1.61-.07 2.42-.22c1.12-.2 2.2-.59 3.19-1.16A8.3 8.3 0 0 0 16.78 16c1.05-1.17 1.67-2.5 2.12-3.65h.19c1.14 0 1.85-.46 2.24-.85c.26-.24.45-.53.59-.87l.08-.24zm-17.96.99h1.76c.08 0 .16-.07.16-.16V9.5c0-.08-.07-.16-.16-.16H3.85c-.09 0-.16.07-.16.16v1.58c.01.09.07.16.16.16m2.43 0h1.76c.08 0 .16-.07.16-.16V9.5c0-.08-.07-.16-.16-.16H6.28c-.09 0-.16.07-.16.16v1.58c.01.09.07.16.16.16m2.47 0h1.75c.1 0 .17-.07.17-.16V9.5c0-.08-.06-.16-.17-.16H8.75c-.08 0-.15.07-.15.16v1.58c0 .09.06.16.15.16m2.44 0h1.77c.08 0 .15-.07.15-.16V9.5c0-.08-.06-.16-.15-.16h-1.77c-.08 0-.15.07-.15.16v1.58c0 .09.07.16.15.16M6.28 9h1.76c.08 0 .16-.09.16-.18V7.25c0-.09-.07-.16-.16-.16H6.28c-.09 0-.16.06-.16.16v1.57c.01.09.07.18.16.18m2.47 0h1.75c.1 0 .17-.09.17-.18V7.25c0-.09-.06-.16-.17-.16H8.75c-.08 0-.15.06-.15.16v1.57c0 .09.06.18.15.18m2.44 0h1.77c.08 0 .15-.09.15-.18V7.25c0-.09-.07-.16-.15-.16h-1.77c-.08 0-.15.06-.15.16v1.57c0 .09.07.18.15.18m0-2.28h1.77c.08 0 .15-.07.15-.16V5c0-.1-.07-.17-.15-.17h-1.77c-.08 0-.15.06-.15.17v1.56c0 .08.07.16.15.16m2.46 4.52h1.76c.09 0 .16-.07.16-.16V9.5c0-.08-.07-.16-.16-.16h-1.76c-.08 0-.15.07-.15.16v1.58c0 .09.07.16.15.16"></svg:path>`,
})
export class MaterialIconThemeDockerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeDocumentIcon],svg[material-icon-theme-document-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="M0 0h24v24H0z"></svg:path><svg:path fill="#42a5f5" d="M8 16h8v2H8zm0-4h8v2H8zm6-10H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8zm4 18H6V4h7v5h5z"></svg:path></svg:g>`,
})
export class MaterialIconThemeDocumentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeDotjsIcon],svg[material-icon-theme-dotjs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2196f3" fill-opacity=".604" transform="translate(-6.66 100.49)"><svg:ellipse cx="37.18" cy="-256.97" rx="110.14" ry="139.47" transform="matrix(-.3005 .95378 -.96071 -.27755 0 0)"></svg:ellipse><svg:ellipse cx="38.835" cy="-197.03" rx="110.14" ry="139.47" transform="matrix(-.3005 .95378 -.96071 -.27755 0 0)"></svg:ellipse><svg:ellipse cx="-224.78" cy="-5.066" rx="110.14" ry="139.47" transform="matrix(-.95378 -.3005 .27755 -.96071 0 0)"></svg:ellipse><svg:ellipse cx="-228.55" cy="-60.291" rx="110.14" ry="139.47" transform="matrix(-.95378 -.3005 .27755 -.96071 0 0)"></svg:ellipse></svg:g>`,
})
export class MaterialIconThemeDotjsIcon {
  readonly viewBox = input("0 0 400 400")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeDrawioIcon],svg[material-icon-theme-drawio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fb8c00" d="m25.329 20l-7.001-8H20V4h-8v8h1.672l-7.001 8H4v8h8v-8H9.328L16 12.376L22.672 20H20v8h8v-8z"></svg:path>`,
})
export class MaterialIconThemeDrawioIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeDrizzleIcon],svg[material-icon-theme-drizzle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#4caf50" d="m5.22 23.118l3.647-6.593a1.712 1.712 0 1 0-2.996-1.657L2.224 21.46a1.712 1.712 0 0 0 2.996 1.658m12.02 0l3.648-6.593a1.712 1.712 0 1 0-2.996-1.657l-3.648 6.592a1.712 1.712 0 0 0 2.996 1.658m-3.378-5.96l3.88-6.588a1.706 1.706 0 0 0-2.94-1.73l-3.88 6.588a1.706 1.706 0 0 0 2.94 1.73m12.028 0l3.88-6.588a1.706 1.706 0 0 0-2.94-1.73l-3.88 6.588a1.706 1.706 0 0 0 2.94 1.73"></svg:path>`,
})
export class MaterialIconThemeDrizzleIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeDroneIcon],svg[material-icon-theme-drone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#cfd8dc" d="m57.01 36.707l-.835.834l34.036 34.035c-4.813 7.514-7.584 16.742-7.584 27.239c0 29.18 21.422 48.557 48.557 48.557c10.14 0 19.48-2.706 27.205-7.618l34.21 34.21c-17.726 23.411-45.89 38.151-77.601 38.151c-53.627 0-97.114-42.154-97.114-97.114c0-32.685 15.38-60.84 39.125-78.293zm16.188-9.611c12.66-5.927 26.836-9.21 41.799-9.21c53.626 0 97.114 42.155 97.114 97.114c0 15.117-3.29 29.265-9.176 41.833l-30.78-30.78c4.812-7.514 7.584-16.742 7.584-27.239c0-29.18-21.422-48.557-48.557-48.557c-10.14 0-19.48 2.706-27.205 7.617zm57.985 100.853c-16.281 0-29.134-11.626-29.134-29.135c0-17.508 12.853-29.134 29.134-29.134s29.134 11.626 29.134 29.134s-12.853 29.135-29.134 29.135"></svg:path>`,
})
export class MaterialIconThemeDroneIcon {
  readonly viewBox = input("0 0 230 230")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeDroneLightIcon],svg[material-icon-theme-drone-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#546e7a" d="m57.011 36.707l-.834.834l34.036 34.035c-4.813 7.514-7.584 16.742-7.584 27.239c0 29.18 21.422 48.557 48.557 48.557c10.14 0 19.48-2.706 27.205-7.618l34.21 34.21c-17.726 23.411-45.89 38.151-77.601 38.151c-53.627 0-97.114-42.154-97.114-97.114c0-32.685 15.38-60.84 39.125-78.293zm16.19-9.611c12.66-5.927 26.835-9.21 41.798-9.21c53.626 0 97.114 42.155 97.114 97.114c0 15.117-3.29 29.265-9.176 41.833l-30.78-30.78c4.813-7.514 7.584-16.742 7.584-27.239c0-29.18-21.422-48.557-48.557-48.557c-10.14 0-19.48 2.706-27.205 7.617zm57.984 100.853c-16.281 0-29.134-11.626-29.134-29.135s12.853-29.134 29.134-29.134s29.134 11.626 29.134 29.134s-12.853 29.135-29.134 29.135"></svg:path>`,
})
export class MaterialIconThemeDroneLightIcon {
  readonly viewBox = input("0 0 230 230")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeDucIcon],svg[material-icon-theme-duc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FF5252" d="M12.564 8.49c.06-.232.124-.46.156-.696c.096-.719-.02-1.408-.268-2.08a1 1 0 0 0-.077-.162c-.124-.193-.343-.2-.47-.01a1.3 1.3 0 0 0-.128.277c-.238.653-.553 1.26-1.049 1.758a4.6 4.6 0 0 1-.863.678c.057-.23.161-.42.248-.605c.34-.721.513-1.483.619-2.264c.088-.658.102-1.32-.072-1.964c-.317-1.174-1.01-2.022-2.23-2.32c-1.232-.301-2.266.07-3.093 1.026c-.227.262-.436.541-.663.804c-.377.44-.842.758-1.382.97c-.163.065-.328.058-.494.06c-.144 0-.29.001-.425.057c-.411.168-.503.68-.172 1.03c.316.334.732.465 1.176.536c.54.088 1.041-.087 1.55-.216c.48-.123.96-.253 1.439-.38c.086-.022.197-.062.25.008c.047.062-.023.158-.062.231c-.117.218-.301.369-.502.504c-.511.344-1.056.639-1.535 1.031c-.914.751-1.528 1.684-1.673 2.877c-.169 1.384.26 2.593 1.173 3.627c.6.68 1.332 1.196 2.202 1.467c1.677.523 3.243.282 4.656-.784c1.448-1.092 2.2-2.583 2.438-4.356a3.5 3.5 0 0 0 .016-.934c-.051-.381-.274-.478-.585-.255q-.065.046-.134.088c-.008.005-.021-.001-.046-.004Z"></svg:path>`,
})
export class MaterialIconThemeDucIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeDuneIcon],svg[material-icon-theme-dune-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#f57c00" d="m14 6l-3.75 5l2.85 3.8l-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22z"></svg:path>`,
})
export class MaterialIconThemeDuneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeEdgeIcon],svg[material-icon-theme-edge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ef6c00" d="M12 15c.81 0 1.5-.3 2.11-.89c.59-.61.89-1.3.89-2.11s-.3-1.5-.89-2.11C13.5 9.3 12.81 9 12 9s-1.5.3-2.11.89C9.3 10.5 9 11.19 9 12s.3 1.5.89 2.11c.61.59 1.3.89 2.11.89m0-13c2.75 0 5.1 1 7.05 2.95S22 9.25 22 12v1.45c0 1-.35 1.85-1 2.55c-.7.67-1.5 1-2.5 1c-1.2 0-2.19-.5-2.94-1.5c-1 1-2.18 1.5-3.56 1.5c-1.37 0-2.55-.5-3.54-1.46C7.5 14.55 7 13.38 7 12c0-1.37.5-2.55 1.46-3.54C9.45 7.5 10.63 7 12 7c1.38 0 2.55.5 3.54 1.46C16.5 9.45 17 10.63 17 12v1.45c0 .41.16.77.46 1.08s.65.47 1.04.47c.42 0 .77-.16 1.07-.47s.43-.67.43-1.08V12c0-2.19-.77-4.07-2.35-5.65S14.19 4 12 4s-4.07.77-5.65 2.35S4 9.81 4 12s.77 4.07 2.35 5.65S9.81 20 12 20h5v2h-5c-2.75 0-5.1-1-7.05-2.95S2 14.75 2 12s1-5.1 2.95-7.05S9.25 2 12 2"></svg:path>`,
})
export class MaterialIconThemeEdgeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeEditorconfigIcon],svg[material-icon-theme-editorconfig-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#EDE7F6" d="M989.342 1977.409c41.146-26.835 75.137-93.922 54.564-141.33c-56.353 24.151-53.67 79.61-54.564 141.33m636.877 153.851c44.724-14.311 87.66-64.402 63.509-116.283c-34.886 24.151-57.248 57.247-63.51 116.284z"></svg:path><svg:g fill="#FAFAFA"><svg:path d="M374.827 2871.899c0 56.352 14.312 117.178 53.67 138.645c144.907 81.4 652.977 17.89 825.614-20.573c90.343-20.573 163.692-87.66 248.668-124.334c191.421-83.187 330.067-150.274 483.025-262.085c110.916-81.399 287.131-310.388 305.915-447.245l-151.169-33.991c-3.578 153.852-38.463 188.737-175.32 224.517c-92.132 25.046-271.925 30.413-365.846 14.312c-124.334-20.574-180.687-85.871-237.04-160.114c-109.128-144.907 24.151-245.985-148.485-255.824c-181.582 222.728-501.81 62.614-642.244 40.252c-59.93 86.765-200.366 650.294-198.577 779.1c86.766-29.517 141.33 2.684 219.15 33.097c275.503 106.444 34.885 200.366-75.137 172.636c-75.137-17.89-98.394-67.086-142.224-98.393m360.48-1285.383c111.81 21.468 211.1 67.982 305.915 115.39c154.747 76.926 182.476 66.192 196.788 173.53c1.789 19.68-1.789 30.413 54.564 48.303c94.816 29.518-54.564-23.257 199.471-22.362c151.169.894 497.337 61.72 609.148 132.384c46.513 29.519 37.568 67.087 194.999 62.615c-1.79-185.16-50.986-461.557-123.44-631.51c-88.554-205.733-205.733-237.04-444.561-313.966c-139.54-44.725-549.217-93.922-676.235-15.207c-118.967 74.243-141.33 162.798-252.246 318.439c-32.202 45.619-43.83 80.504-64.403 132.384"></svg:path><svg:path d="M1720.14 1966.675c89.45 36.674-4.472 273.714-128.806 216.466c-40.252-113.6 55.458-178.003 81.398-228.99c-53.67-8.05-206.627-32.2-252.246-15.206c-59.036 22.363-72.454 148.486-42.041 207.522c143.118 280.87 775.523 220.94 708.436 2.684c-26.835-88.555-51.88-102.867-142.224-133.28c-72.454-24.15-144.907-49.196-224.517-49.196m-1124.374-31.307c71.56 68.875 233.462 79.61 338.117 84.976c13.418-138.646 25.046-242.407 135.963-234.356c54.564 74.242 25.94 161.902-31.307 218.255c97.5-.894 153.852-74.242 139.54-180.687c-82.293-59.036-331.856-177.109-457.084-194.104c-34.885 37.569-120.756 243.301-125.229 305.916"></svg:path></svg:g><svg:path d="M427.602 2820.913c59.036-5.367 212.889 39.357 225.412 89.449c-95.71 11.628-217.361 2.683-225.412-89.45zm-52.775 50.986c43.83 31.307 67.087 80.504 142.224 98.393c110.022 27.73 350.64-66.192 75.137-172.636c-77.82-30.413-132.384-62.614-219.15-33.096c-1.789-128.807 138.646-692.336 198.577-779.101c140.435 22.362 460.662 182.476 642.244-40.252c172.636 9.84 39.357 110.917 148.485 255.824c56.353 74.243 112.706 139.54 237.04 160.114c93.921 16.1 273.714 10.734 365.846-14.312c136.857-35.78 171.742-70.665 175.32-224.517l151.17 33.99c-18.785 136.858-195 365.847-305.916 447.246c-152.958 111.81-291.604 178.898-483.025 262.085c-84.976 36.674-158.325 103.761-248.668 124.334c-172.637 38.463-680.707 101.972-825.614 20.574c-39.358-21.468-53.67-82.294-53.67-138.646M1626.22 2131.26c6.261-59.037 28.623-92.133 63.508-116.284c24.152 51.88-18.784 101.972-63.508 116.284m93.921-164.586c79.61 0 152.063 25.045 224.517 49.197c90.344 30.412 115.39 44.724 142.224 133.279c67.087 218.255-565.318 278.186-708.436-2.684c-30.413-59.036-16.995-185.16 42.041-207.522c45.619-16.995 198.577 7.156 252.246 15.207c-25.94 50.986-121.65 115.389-81.398 228.99c124.334 57.247 218.255-179.793 128.806-216.467m-730.798 10.734c.894-61.72-1.79-117.179 54.564-141.33c20.573 47.408-13.418 114.495-54.564 141.33m-393.576-42.041c4.473-62.615 90.344-268.347 125.229-305.916c125.228 16.995 374.791 135.068 457.084 194.104c14.312 106.445-42.04 179.793-139.54 180.687c57.247-56.353 85.87-144.013 31.307-218.255c-110.917-8.05-122.545 95.71-135.963 234.356c-104.655-5.367-266.558-16.1-338.117-84.976m-89.449-71.56c-33.096-91.238-33.096-233.462 107.339-245.09l-71.56 199.471c-18.783 42.936-18.783 33.096-35.779 45.62zm228.99-277.292c20.573-51.88 32.201-86.765 64.403-132.384c110.917-155.641 133.279-244.196 252.246-318.439c127.018-78.715 536.694-29.518 676.235 15.207c238.828 76.926 356.007 108.233 444.561 313.966c72.454 169.953 121.65 446.35 123.44 631.51c-157.43 4.472-148.486-33.096-195-62.615c-111.81-70.664-457.978-131.49-609.147-132.384c-254.035-.895-104.655 51.88-199.471 22.362c-56.353-17.89-52.775-28.624-54.564-48.302c-14.312-107.34-42.041-96.605-196.788-173.531c-94.816-47.408-194.104-93.922-305.915-115.39m1583.247-43.83c-16.995-56.352 14.312-52.775 68.876-91.238c31.307-22.362 56.353-45.619 94.816-67.086c144.013-80.504 412.36-93.922 526.854 1.789c46.514 38.463 122.545 113.6 110.917 211.994c-24.151 195.893-158.325 303.232-268.347 392.68c-111.811 91.239-297.865 185.16-490.18 122.546c-16.101-39.358-3.578-288.92-22.363-381.053c-16.995-82.293-8.05-91.238 39.358-140.435c139.54-144.907 441.878-250.457 613.62-126.123c72.454 53.67 51.88 74.243 89.449 115.39c46.513-50.092-40.252-218.256-360.48-207.522c-217.36 7.156-311.282 177.109-402.52 169.058m-1302.377-508.964c4.472-124.335 118.967-381.948 233.461-471.397c138.646-107.338 283.554-208.416 496.442-87.66c52.775 29.519 50.092 44.725 55.459 118.073c4.472 70.665-1.79 96.605-19.679 153.852c-141.33 456.19-259.402 194.105-712.014 302.338c16.995-148.485 145.802-280.87 217.361-349.746c122.545-118.967 211.1-195.893 395.365-170.847c50.986 84.976 56.352 138.646-5.367 237.934c-82.293 132.385-102.867 124.334-90.344 214.678c64.403-16.101 84.082-78.715 113.6-141.33c179.793-375.686-81.398-421.305-241.512-352.429c-107.339 45.62-298.76 256.719-361.374 383.736c-12.523 25.046-25.94 57.248-37.568 84.977zm708.436 18.784c18.784-111.811 129.7-139.54 129.7-483.92c0-148.485-182.475-281.764-421.304-182.475c-204.838 84.082-236.145 148.485-345.273 313.071c-102.867 155.642-99.289 326.49-187.843 470.502c-25.94 41.147-49.197 55.458-77.82 96.605c-20.574 30.413-35.78 68.876-56.354 104.655c-42.04 68.876-84.976 118.968-118.967 201.26c-107.339 2.684-197.682 4.473-208.416 115.39c-14.312 152.063 57.247 189.632 57.247 246.879c-.894 61.72-251.351 684.285-181.581 1055.498c19.679 101.972 86.765 102.867 194.104 115.39c258.508 31.307 593.942 20.573 825.614-72.454l420.41-201.26c106.445-59.931 285.343-173.532 364.953-256.72c56.353-58.141 85.87-107.338 134.173-176.214c66.192-96.605 67.981-94.816 82.293-226.306c87.66 16.101 251.352 54.564 305.916 101.972c-6.262 61.72-36.674 32.202-36.674 87.66c34.885.895 93.027-42.935 107.339-91.238c-36.675-53.67-75.138-44.724-127.913-87.66c42.042-33.096 118.073-48.302 176.215-72.453c125.229-51.88 339.012-209.311 391.787-352.43c42.04-115.389 10.734-307.704-57.248-382.841c-71.559-78.715-237.934-118.967-373.897-118.967c-161.902 0-329.172 116.283-459.767 166.375c-50.092-43.83-53.67-93.922-90.344-142.224c-42.04-57.248-315.755-200.366-446.35-228.095"></svg:path><svg:path fill="#EFEBE9" d="M2318.554 1542.686c91.238 8.05 185.16-161.902 402.52-169.058c320.228-10.734 406.993 157.43 360.48 207.521c-37.569-41.146-16.995-61.72-89.45-115.389c-171.741-124.334-474.079-18.784-613.62 126.123c-47.407 49.197-56.352 58.142-39.357 140.435c18.785 92.133 6.262 341.695 22.362 381.053c192.316 62.614 378.37-31.307 490.181-122.545c110.022-89.45 244.196-196.788 268.347-392.681c11.628-98.394-64.403-173.531-110.917-211.994c-114.494-95.71-382.841-82.293-526.854-1.79c-38.463 21.468-63.51 44.725-94.816 67.087c-54.564 38.464-85.871 34.886-68.876 91.238m-1302.377-508.964l43.83-77.821c11.628-27.73 25.045-59.93 37.568-84.977c62.614-127.017 254.035-338.117 361.374-383.736c160.114-68.876 421.305-23.257 241.512 352.43c-29.518 62.614-49.197 125.228-113.6 141.329c-12.523-90.344 8.05-82.293 90.344-214.678c61.72-99.288 56.353-152.958 5.367-237.934c-184.265-25.046-272.82 51.88-395.365 170.847c-71.56 68.876-200.366 201.26-217.361 349.746c452.612-108.233 570.685 153.852 712.014-302.338c17.89-57.247 24.151-83.187 19.679-153.852c-5.367-73.348-2.684-88.554-55.459-118.073c-212.888-120.756-357.796-19.678-496.442 87.66c-114.494 89.45-228.989 347.062-233.461 471.397"></svg:path><svg:path fill="#EEE" d="M506.317 1863.808c16.996-12.523 16.996-2.683 35.78-45.619l71.559-199.47c-140.435 11.627-140.435 153.851-107.339 245.09z"></svg:path><svg:path fill="#EFEBE9" d="M653.014 2910.362c-12.523-50.092-166.376-94.816-225.412-89.45c8.05 92.133 129.701 101.078 225.412 89.45"></svg:path>`,
})
export class MaterialIconThemeEditorconfigIcon {
  readonly viewBox = input("0 0 3473 3473")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeEjsIcon],svg[material-icon-theme-ejs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#ffca28" d="M8.046 4.862L.908 12l7.138 7.138l2.71-2.691L6.308 12l4.446-4.447z"></svg:path><svg:ellipse cx="14.543" cy="7.812" stroke="#ffca28" stroke-width="1.455" rx="2.101" ry="2.798"></svg:ellipse><svg:path fill="#ffca28" d="m20.616 4.152l1.47.69l-7.783 15.005l-1.47-.69z"></svg:path><svg:ellipse cx="20.35" cy="16.198" stroke="#ffca28" stroke-width="1.455" rx="2.101" ry="2.798"></svg:ellipse></svg:g>`,
})
export class MaterialIconThemeEjsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeElixirIcon],svg[material-icon-theme-elixir-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#9575cd" d="M12.173 22.681c-3.86 0-6.99-3.64-6.99-8.13c0-3.678 2.773-8.172 4.916-10.91c1.014-1.296 2.93-2.322 2.93-2.322s-.982 5.239 1.683 7.319c2.366 1.847 4.106 4.25 4.106 6.363c0 4.232-2.784 7.68-6.645 7.68"></svg:path>`,
})
export class MaterialIconThemeElixirIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeElmIcon],svg[material-icon-theme-elm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FFB300" d="m106.716 99.763l54.785 54.782l54.779-54.782z"></svg:path><svg:path fill="#64DD17" d="M96.881 89.93H216.83l-55.18-55.184H41.7zm131.546 11.593l59.705 59.704L228.16 221.2l-59.705-59.704z"></svg:path><svg:path fill="#00B8D4" d="m175.552 34.746l112.703 112.695V34.746z"></svg:path><svg:path fill="#455A64" d="m34.746 281.3l119.8-119.8l-119.8-119.8z"></svg:path><svg:path fill="#FFB300" d="m288.255 175.01l-53.148 53.149l53.148 53.14z"></svg:path><svg:path fill="#00B8D4" d="M281.3 288.254L161.5 168.455l-119.8 119.8z"></svg:path>`,
})
export class MaterialIconThemeElmIcon {
  readonly viewBox = input("0 0 323 323")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeEmailIcon],svg[material-icon-theme-email-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#42a5f5" d="M28 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2m0 6l-12 6l-12-6V8l12 6l12-6Z"></svg:path>`,
})
export class MaterialIconThemeEmailIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeEmberIcon],svg[material-icon-theme-ember-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FF5722" d="M12.78 4c1.79-.03 3.18.35 4.12 1.99c2.36 5.88-6.08 8.92-6.42 9.04h-.01s-.25 1.6 2.17 1.54c2.98 0 6.1-2.31 7.3-3.3c.29-.23.71-.21.97.06l.89.93c.25.27.26.69.02.97c-.77.87-2.59 2.65-5.33 3.79c0 0-4.57 2.13-7.65.12c-1.83-1.2-2.34-2.64-2.55-4.13c0 0-2.23-.12-3.66-.67c-1.44-.57.01-2.26.01-2.26s.44-.71 1.28 0c.83.71 2.4.39 2.4.39c.14-1.11.37-2.57 1.06-4.11C8.81 5.14 11 4.04 12.78 4m1.05 3.24c-.94-.91-3.67.91-3.78 5.09c0 0 .81.24 2.58-.98c1.79-1.23 2.13-3.19 1.19-4.11z"></svg:path>`,
})
export class MaterialIconThemeEmberIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeEpubIcon],svg[material-icon-theme-epub-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#8bc34a" d="M8 12.401L3.601 8L8 3.601l1.468 1.466L6.534 8L8 9.467l4.4-4.4l-3.833-3.832a.8.8 0 0 0-1.133 0L1.235 7.434a.8.8 0 0 0 0 1.133l6.199 6.199a.8.8 0 0 0 1.133 0l6.199-6.199a.803.803 0 0 0 0-1.133l-.9-.899z"></svg:path>`,
})
export class MaterialIconThemeEpubIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeErlangIcon],svg[material-icon-theme-erlang-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#f44336" d="M5.207 4.33q-.072.075-.143.153Q1.5 8.476 1.5 15.33c0 4.418 1.155 7.862 3.459 10.34h19.415c2.553-1.152 4.127-3.43 4.127-3.43l-3.147-2.52L23.9 21.1c-.867.773-.845.931-2.315 1.78c-1.495.674-3.04.966-4.634.966c-2.515 0-4.423-.909-5.723-2.059c-1.286-1.15-1.985-4.511-2.096-6.68l17.458.067l-.183-1.472s-.847-7.129-2.541-9.372zm8.76.846c1.565 0 3.22.535 3.961 1.471c.74.937.931 1.667.973 3.524H9.11c.112-1.955.436-2.81 1.373-3.698c.936-.887 2.03-1.297 3.484-1.297"></svg:path>`,
})
export class MaterialIconThemeErlangIcon {
  readonly viewBox = input("0 0 30 30")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeEsbuildIcon],svg[material-icon-theme-esbuild-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ffca28" d="M12 2.042A9.957 9.957 0 0 0 2.043 12A9.957 9.957 0 0 0 12 21.957A9.957 9.957 0 0 0 21.957 12A9.957 9.957 0 0 0 12 2.043zM7.617 6.425L13.192 12l-5.575 5.575l-1.69-1.69L9.814 12L5.926 8.115zm5.975 0L19.166 12l-5.574 5.575l-1.69-1.69L15.787 12l-3.885-3.885z"></svg:path>`,
})
export class MaterialIconThemeEsbuildIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeEslintIcon],svg[material-icon-theme-eslint-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#3f51b5" d="M22.713 4H9.287a.5.5 0 0 0-.432.248l-6.708 11.5a.5.5 0 0 0 0 .504l6.708 11.5a.5.5 0 0 0 .432.248h13.426a.5.5 0 0 0 .432-.248l6.708-11.5a.5.5 0 0 0 0-.504l-6.708-11.5A.5.5 0 0 0 22.713 4m-6.937 20.888l-7.5-3.75A.5.5 0 0 1 8 20.691v-9.382a.5.5 0 0 1 .276-.447l7.5-3.75a.5.5 0 0 1 .448 0l7.5 3.75a.5.5 0 0 1 .276.447v9.382a.5.5 0 0 1-.276.447l-7.5 3.75a.5.5 0 0 1-.448 0"></svg:path><svg:path fill="#7986cb" d="M22 19.441v-6.882a.5.5 0 0 0-.276-.447l-5.5-2.75a.5.5 0 0 0-.448 0l-5.5 2.75a.5.5 0 0 0-.276.447v6.882a.5.5 0 0 0 .276.447l5.5 2.75a.5.5 0 0 0 .448 0l5.5-2.75a.5.5 0 0 0 .276-.447"></svg:path>`,
})
export class MaterialIconThemeEslintIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeExcalidrawIcon],svg[material-icon-theme-excalidraw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#5c6bc0" d="m15 1l-5 1l-9 10l3 3l10-9zm-4 3h1v1h-1zm1 5l-3 3l4 3l2-2zM7 4L4 7L2 5L1 1l4 1z"></svg:path>`,
})
export class MaterialIconThemeExcalidrawIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeExeIcon],svg[material-icon-theme-exe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#e64a19" d="M28 4H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m0 22H4V10h24Z"></svg:path>`,
})
export class MaterialIconThemeExeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFastlaneIcon],svg[material-icon-theme-fastlane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2979FF" d="M242.745 89.48c-11.223 0-21.398 4.463-28.867 11.7l-47.366-33.917c.295-1.238.469-2.524.469-3.854c0-9.167-7.432-16.6-16.6-16.6s-16.601 7.433-16.601 16.6c0 9.169 7.433 16.6 16.6 16.6c3.21 0 6.197-.927 8.738-2.504L217.1 119.7c4.52-9.428 14.49-16.77 25.645-16.77c15.492 0 28.051 12.558 28.051 28.05c0 12.38-8.02 22.887-19.148 26.608l3.806 12.91c16.703-5.368 28.79-21.03 28.79-39.518c0-22.92-18.579-41.5-41.5-41.5"></svg:path><svg:path fill="#E64A19" d="M109.689 49.166c-3.389 10.669-2.22 21.69 2.405 30.977l-46.546 34.784a16.6 16.6 0 0 0-3.523-1.609c-8.716-2.768-18.026 2.053-20.794 10.768s2.053 18.026 10.767 20.794c8.716 2.769 18.026-2.052 20.795-10.767a16.46 16.46 0 0 0 .257-9.062l57.623-42.379c-7.598-7.144-11.567-18.84-8.2-29.444c4.68-14.727 20.411-22.874 35.139-18.195c11.768 3.738 19.334 14.535 19.513 26.238l13.421.28c-.059-17.5-11.299-33.721-28.873-39.304c-21.788-6.921-45.063 5.13-51.984 26.92"></svg:path><svg:path fill="#00bcd4" d="M32.81 161.347a41.37 41.37 0 0 0 30.043 7.612l18.362 54.878a16.3 16.3 0 0 0-2.621 2.8c-5.338 7.316-3.686 17.611 3.692 22.994c7.377 5.383 17.685 3.815 23.023-3.501c5.34-7.316 3.687-17.61-3.69-22.994a16.53 16.53 0 0 0-8.489-3.13l-22.086-67.718c-9.128 4.87-21.425 4.875-30.402-1.674c-12.465-9.097-15.258-26.492-6.237-38.855c7.21-9.88 19.78-13.556 30.9-9.993l4.456-12.536c-16.566-5.525-35.414-.121-46.179 14.631c-13.346 18.291-9.214 44.029 9.229 57.486"></svg:path><svg:path fill="#8BC34A" d="M245.283 225.838c-3.42-10.583-10.75-18.811-19.884-23.64l17.72-55.05a16.6 16.6 0 0 0 3.796-.739c8.69-2.808 13.47-12.093 10.679-20.737c-2.793-8.646-12.102-13.378-20.793-10.57c-8.69 2.806-13.472 12.09-10.679 20.736a16.3 16.3 0 0 0 5.036 7.472l-22.334 67.6c10.315 1.374 20.312 8.527 23.71 19.046c4.72 14.61-3.36 30.298-18.044 35.042c-11.735 3.791-24.138-.554-31.055-9.908l-11.078 7.543c10.176 14.106 28.706 20.71 46.23 15.048c21.726-7.019 33.678-30.23 26.696-51.843"></svg:path><svg:path fill="#A0F" d="M116.724 270.244c9.003-6.587 14.547-16.139 16.291-26.33l57.906-.59a16.5 16.5 0 0 0 1.887 3.366c5.382 7.355 15.706 8.955 23.061 3.574s8.955-15.705 3.575-23.06c-5.382-7.356-15.706-8.956-23.061-3.575a16.4 16.4 0 0 0-5.54 7.137l-71.283.182c1.908 10.217-1.78 21.958-10.73 28.506c-12.428 9.093-29.875 6.39-38.968-6.039c-7.266-9.932-6.999-23.068-.257-32.585l-10.631-8.123c-10.249 14.11-10.752 33.77.098 48.601c13.453 18.389 39.265 22.389 57.652 8.936"></svg:path>`,
})
export class MaterialIconThemeFastlaneIcon {
  readonly viewBox = input("0 0 300 300")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFaviconIcon],svg[material-icon-theme-favicon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ffd54f" d="m16 24l10 6l-4-10l8-8l-10-.032L16 2l-4 10H2l8 8l-4 10Z"></svg:path>`,
})
export class MaterialIconThemeFaviconIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFigmaIcon],svg[material-icon-theme-figma-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#f4511e" d="M12 4h4v8h-4a4 4 0 0 1-4-4a4 4 0 0 1 4-4"></svg:path><svg:path fill="#ff8a65" d="M20 12h-4V4h4a4 4 0 0 1 4 4a4 4 0 0 1-4 4"></svg:path><svg:rect width="8" height="8" x="16" y="12" fill="#29b6f6" rx="4" transform="rotate(180 20 16)"></svg:rect><svg:path fill="#7c4dff" d="M12 12h4v8h-4a4 4 0 0 1-4-4a4 4 0 0 1 4-4"></svg:path><svg:path fill="#00e676" d="M12 20h4v4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4"></svg:path>`,
})
export class MaterialIconThemeFigmaIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFirebaseIcon],svg[material-icon-theme-firebase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ff9100" d="M18.217 8.974c-.45-.623-1.482-1.904-3.07-3.808c-.689-.825-1.28-1.526-1.57-1.87l-.408-.48l-.173-.205l-.094-.11l-.018-.027l-.008-.004l-.4-.47l-.509.407a11.1 11.1 0 0 0-3.069 3.866a9.5 9.5 0 0 0-.87 2.647q-.06.303-.1.615a9 9 0 0 0-.577-.03a6.2 6.2 0 0 0-1.901.229l-.265.074l-.136.238a8 8 0 0 0-1.044 3.68a8 8 0 0 0 5.006 7.697l.197.079l.06.02h.002a8 8 0 0 0 2.452.473q.143.005.286.005a7.9 7.9 0 0 0 3.076-.618l.007.003l.261-.12a7.99 7.99 0 0 0 4.643-6.981a8.5 8.5 0 0 0-1.778-5.31M9.837 19.82l-.192-.074l-.051-.02a6.31 6.31 0 0 1-3.897-6.048a6.2 6.2 0 0 1 .697-2.667a4.6 4.6 0 0 1 .759-.103l.065-.002a8 8 0 0 1 .378 0c.108.005.215.021.322.034a13 13 0 0 0 .918 4.007a10.1 10.1 0 0 0 2.474 3.61a6.4 6.4 0 0 1-1.473 1.263m.351-5.486a11.4 11.4 0 0 1-.767-3.125a4.6 4.6 0 0 1 .95.461a4.73 4.73 0 0 1 1.94 2.884a5 5 0 0 1 .12.649a4.2 4.2 0 0 1-.288 2.023a8.3 8.3 0 0 1-1.955-2.892m1.741 5.858a8 8 0 0 0 .553-.62c.233.177.485.332.73.495a6.3 6.3 0 0 1-1.283.125m5.432-2.97a6.34 6.34 0 0 1-2.212 2.138a12.4 12.4 0 0 1-1.851-1.15a5.84 5.84 0 0 0 .309-3.998a6.02 6.02 0 0 0-2.504-3.664a6.1 6.1 0 0 0-1.679-.74a8 8 0 0 1 .064-.496a9 9 0 0 1 .465-1.598q.117-.298.253-.584l.004-.007c.14-.282.296-.567.481-.872l.073-.12h-.002a9.2 9.2 0 0 1 1.534-1.824l.227.269c.53.628 1.03 1.222 1.483 1.765c1.02 1.223 2.342 2.828 2.852 3.536a6.8 6.8 0 0 1 1.446 4.242a6.3 6.3 0 0 1-.943 3.104"></svg:path>`,
})
export class MaterialIconThemeFirebaseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFlashIcon],svg[material-icon-theme-flash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#e53935" d="M20.314 2c-2.957 0-5.341 1.104-7.122 3.252c-1.427 1.752-2.354 3.93-3.164 6.034c-1.663 4.283-2.781 6.741-6.342 6.741V22c2.958 0 5.342-1.03 7.122-3.194c1.133-1.383 1.957-3.135 2.634-4.827h4.665v-3.973h-3.061c1.207-2.575 2.546-3.973 5.268-3.973z"></svg:path>`,
})
export class MaterialIconThemeFlashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFlowIcon],svg[material-icon-theme-flow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fbc02d" fill-opacity=".976" d="m38.75 33.427l77.461 77.47H54.436l61.145 61.16H38.437l93.462 93.478v-77.158l.01-.01v-77.47h-.01V66.982h46.691l20.394 20.393H153.57v76.531h22.05l24.474 24.473h-15.806l-.01-.01v.01h-31.665l-.01-.01v.01h-.313l.313.313v77.148h109.149l-39.2-39.2v-15.806l8.465 8.466v-77.37h-15.682l.017-38.191l30.09 30.086V56.362h-64.874l-22.94-22.934H113.71z"></svg:path>`,
})
export class MaterialIconThemeFlowIcon {
  readonly viewBox = input("0 0 300 300")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderAdminIcon],svg[material-icon-theme-folder-admin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#546e7a" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#cfd8dc" d="m25 10l-7 3.273v4.908c0 4.542 2.986 8.788 7 9.819c4.014-1.031 7-5.277 7-9.82v-4.907zm0 3.273a2.457 2.457 0 1 1-2.333 2.454A2.396 2.396 0 0 1 25 13.273m3.99 9.817A7.6 7.6 0 0 1 25 26.298a7.6 7.6 0 0 1-3.99-3.208a8.4 8.4 0 0 1-.677-1.25c0-1.352 2.108-2.456 4.667-2.456s4.666 1.08 4.666 2.455a8.3 8.3 0 0 1-.676 1.251"></svg:path>`,
})
export class MaterialIconThemeFolderAdminIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderAdminOpenIcon],svg[material-icon-theme-folder-admin-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#546e7a" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#cfd8dc" d="m25 10l-7 3.273v4.908c0 4.542 2.986 8.788 7 9.819c4.014-1.031 7-5.277 7-9.82v-4.907zm0 3.273a2.457 2.457 0 1 1-2.333 2.454A2.396 2.396 0 0 1 25 13.273m3.99 9.817A7.6 7.6 0 0 1 25 26.298a7.6 7.6 0 0 1-3.99-3.208a8.4 8.4 0 0 1-.677-1.25c0-1.352 2.108-2.456 4.667-2.456s4.666 1.08 4.666 2.455a8.3 8.3 0 0 1-.676 1.251"></svg:path>`,
})
export class MaterialIconThemeFolderAdminOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderAndroidIcon],svg[material-icon-theme-folder-android-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#8bc34a" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#dcedc8" d="M27.943 19.471L32 15.414L30.586 14l-4.333 4.333a11.01 11.01 0 0 0-10.505 0L11.414 14L10 15.414l4.057 4.057A10.98 10.98 0 0 0 10 28h22a10.98 10.98 0 0 0-4.057-8.529M18 26h-4v-4h4Zm10 0h-4v-4h4Z"></svg:path>`,
})
export class MaterialIconThemeFolderAndroidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderAndroidOpenIcon],svg[material-icon-theme-folder-android-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#8bc34a" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#dcedc8" d="M27.943 19.471L32 15.414L30.586 14l-4.333 4.333a11.01 11.01 0 0 0-10.505 0L11.414 14L10 15.414l4.057 4.057A10.98 10.98 0 0 0 10 28h22a10.98 10.98 0 0 0-4.057-8.529M18 26h-4v-4h4Zm10 0h-4v-4h4Z"></svg:path>`,
})
export class MaterialIconThemeFolderAndroidOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderAngularIcon],svg[material-icon-theme-folder-angular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ff5252" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#ffcdd2" d="m22 12l-6 2v10Zm4 0l6 12V14Zm-.408 8L24 16.034L22.408 20zm-4.789 4L20 26l4 2l4-2l-.803-2z"></svg:path>`,
})
export class MaterialIconThemeFolderAngularIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderAngularOpenIcon],svg[material-icon-theme-folder-angular-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ff5252" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#ffcdd2" d="m22 12l-6 2v10Zm4 0l6 12V14Zm-.408 8L24 16.034L22.408 20zm-4.789 4L20 26l4 2l4-2l-.803-2z"></svg:path>`,
})
export class MaterialIconThemeFolderAngularOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderAnimationIcon],svg[material-icon-theme-folder-animation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ec407a" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#f8bbd0" d="M25 14a7 7 0 0 0-2 .29a7.04 7.04 0 0 0-4 0a7 7 0 0 0-2-.29a7 7 0 0 0 0 14a7 7 0 0 0 2-.29a7.04 7.04 0 0 0 4 0a7 7 0 0 0 2 .29a7 7 0 0 0 0-14m-13 7a5 5 0 0 1 4.01-4.9a6.98 6.98 0 0 0 0 9.8A5 5 0 0 1 12 21m8.01 4.9a4.999 4.999 0 0 1 0-9.8a6.98 6.98 0 0 0 0 9.8M23 16.41a5.011 5.011 0 0 1 0 9.18a5.011 5.011 0 0 1 0-9.18m2.99 9.49a6.98 6.98 0 0 0 0-9.8a4.999 4.999 0 0 1 0 9.8"></svg:path>`,
})
export class MaterialIconThemeFolderAnimationIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderAnimationOpenIcon],svg[material-icon-theme-folder-animation-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ec407a" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#f8bbd0" d="M25 14a7 7 0 0 0-2 .29a7.04 7.04 0 0 0-4 0a7 7 0 0 0-2-.29a7 7 0 0 0 0 14a7 7 0 0 0 2-.29a7.04 7.04 0 0 0 4 0a7 7 0 0 0 2 .29a7 7 0 0 0 0-14m-13 7a5 5 0 0 1 4.01-4.9a6.98 6.98 0 0 0 0 9.8A5 5 0 0 1 12 21m8.01 4.9a4.999 4.999 0 0 1 0-9.8a6.98 6.98 0 0 0 0 9.8M23 16.41a5.011 5.011 0 0 1 0 9.18a5.011 5.011 0 0 1 0-9.18m2.99 9.49a6.98 6.98 0 0 0 0-9.8a4.999 4.999 0 0 1 0 9.8"></svg:path>`,
})
export class MaterialIconThemeFolderAnimationOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderAnsibleIcon],svg[material-icon-theme-folder-ansible-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#616161" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#9e9e9e" d="M32 21a9 9 0 1 1-9-9a9.043 9.043 0 0 1 9 9"></svg:path><svg:path fill="#FAFAFA" d="m27.929 24.628l-4-10a1 1 0 0 0-.93-.628h-.006a1 1 0 0 0-.927.641L18 26h2l1.24-3.638l5.205 3.47a1 1 0 0 0 1.484-1.204m-5.954-4.18l1.043-2.71l1.858 4.644Z"></svg:path>`,
})
export class MaterialIconThemeFolderAnsibleIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderAnsibleOpenIcon],svg[material-icon-theme-folder-ansible-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#616161" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#9e9e9e" d="M32 21a9 9 0 1 1-9-9a9.043 9.043 0 0 1 9 9"></svg:path><svg:path fill="#FAFAFA" d="m27.929 24.628l-4-10a1 1 0 0 0-.93-.628h-.006a1 1 0 0 0-.927.641L18 26h2l1.24-3.638l5.205 3.47a1 1 0 0 0 1.484-1.204m-5.954-4.18l1.043-2.71l1.858 4.644Z"></svg:path>`,
})
export class MaterialIconThemeFolderAnsibleOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderApiIcon],svg[material-icon-theme-folder-api-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fbc02d" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#fffde7" d="M20 18h-4v2h6v-6h-2zm8 0v-4h-2v6h6v-2zm-12 8h4v4h2v-6h-6zm10 0v4h2v-4h4v-2h-6z"></svg:path>`,
})
export class MaterialIconThemeFolderApiIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderApiOpenIcon],svg[material-icon-theme-folder-api-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fbc02d" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#fffde7" d="M20 18h-4v2h6v-6h-2zm8 0v-4h-2v6h6v-2zm-12 8h4v4h2v-6h-6zm10 0v4h2v-4h4v-2h-6z"></svg:path>`,
})
export class MaterialIconThemeFolderApiOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderApolloIcon],svg[material-icon-theme-folder-apollo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#7e57c2" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#d1c4e9" d="M25 28h3l-4-12h-4l-4 12h3l.667-2h3.01L22 24h-1.667L22 19z"></svg:path><svg:path fill="#d1c4e9" d="M28 12a2 2 0 0 0-.416.045a10.996 10.996 0 0 0-17.102 13.473a1.003 1.003 0 0 0 1.72-1.034A8.986 8.986 0 0 1 26.1 13.406A2 2 0 0 0 26 14a2 2 0 1 0 2-2"></svg:path>`,
})
export class MaterialIconThemeFolderApolloIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderApolloOpenIcon],svg[material-icon-theme-folder-apollo-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#7e57c2" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#d1c4e9" d="M25 28h3l-4-12h-4l-4 12h3l.667-2h3.01L22 24h-1.667L22 19z"></svg:path><svg:path fill="#d1c4e9" d="M28 12a2 2 0 0 0-.416.045a10.996 10.996 0 0 0-17.102 13.473a1.003 1.003 0 0 0 1.72-1.034A8.986 8.986 0 0 1 26.1 13.406A2 2 0 0 0 26 14a2 2 0 1 0 2-2"></svg:path>`,
})
export class MaterialIconThemeFolderApolloOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderAppIcon],svg[material-icon-theme-folder-app-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ef5350" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#ffcdd2" d="M16 12h4v4h-4zm6 0h4v4h-4zm6 0h4v4h-4zm-12 6h4v4h-4zm6 0h4v4h-4zm6 0h4v4h-4zm-12 6h4v4h-4zm6 0h4v4h-4zm6 0h4v4h-4z"></svg:path>`,
})
export class MaterialIconThemeFolderAppIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderAppOpenIcon],svg[material-icon-theme-folder-app-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ef5350" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#ffcdd2" d="M16 12h4v4h-4zm6 0h4v4h-4zm6 0h4v4h-4zm-12 6h4v4h-4zm6 0h4v4h-4zm6 0h4v4h-4zm-12 6h4v4h-4zm6 0h4v4h-4zm6 0h4v4h-4z"></svg:path>`,
})
export class MaterialIconThemeFolderAppOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderArchiveIcon],svg[material-icon-theme-folder-archive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ffa726" d="m443.008 241.152l-41.216-34.304A64 64 0 0 0 360.832 192H128a64 64 0 0 0-64 64v512a64 64 0 0 0 64 64h768a64 64 0 0 0 64-64V320a64 64 0 0 0-64-64H483.968a64 64 0 0 1-40.96-14.848"></svg:path><svg:path fill="#ffe0b2" d="M512 320c-35.456 0-64 28.544-64 64v64c0 35.456 28.544 64 64 64v320c0 35.456 28.544 64 64 64h320c35.456 0 64-28.544 64-64V512c35.456 0 64-28.544 64-64v-64c0-35.456-28.544-64-64-64zm0 64h448v64H512zm128 128h192v64H640z"></svg:path>`,
})
export class MaterialIconThemeFolderArchiveIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderArchiveOpenIcon],svg[material-icon-theme-folder-archive-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ffa726" d="M926.912 384H302.144a64 64 0 0 0-60.736 43.776L128 768V320h768a64 64 0 0 0-64-64H483.968a64 64 0 0 1-40.96-14.848l-41.216-34.304A64 64 0 0 0 360.832 192H128a64 64 0 0 0-64 64v512a64 64 0 0 0 64 64h704l153.792-358.784A64 64 0 0 0 926.912 384"></svg:path><svg:path fill="#ffe0b2" d="M512 320c-35.456 0-64 28.544-64 64v64c0 35.456 28.544 64 64 64v320c0 35.456 28.544 64 64 64h320c35.456 0 64-28.544 64-64V512c35.456 0 64-28.544 64-64v-64c0-35.456-28.544-64-64-64zm0 64h448v64H512zm128 128h192v64H640z"></svg:path>`,
})
export class MaterialIconThemeFolderArchiveOpenIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderAstroIcon],svg[material-icon-theme-folder-astro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#7c4dff" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#d1c4e9" d="M19.333 27c0-.81.082-1.508 1.3-1.508c0 2.608 1.5 4.508 2.7 4.508c0-3.319 2.667-3.122 2.667-6h-8c0 1.275.158 2.681 1.333 3m5.923-16.385L30 22h-2.333a4 4 0 0 1-3.693-2.462l-1.512-3.63a.5.5 0 0 0-.924 0l-1.512 3.63A4 4 0 0 1 16.333 22H14l4.744-11.385a1 1 0 0 1 .923-.615h4.666a1 1 0 0 1 .923.615"></svg:path>`,
})
export class MaterialIconThemeFolderAstroIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderAstroOpenIcon],svg[material-icon-theme-folder-astro-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#7c4dff" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.367L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#d1c4e9" d="M19.333 27c0-.81.082-1.508 1.3-1.508c0 2.608 1.5 4.508 2.7 4.508c0-3.319 2.667-3.122 2.667-6h-8c0 1.275.158 2.681 1.333 3m5.923-16.385L30 22h-2.333a4 4 0 0 1-3.693-2.462l-1.512-3.63a.5.5 0 0 0-.924 0l-1.512 3.63A4 4 0 0 1 16.333 22H14l4.744-11.385a1 1 0 0 1 .923-.615h4.666a1 1 0 0 1 .923.615"></svg:path>`,
})
export class MaterialIconThemeFolderAstroOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderAttachmentIcon],svg[material-icon-theme-folder-attachment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#9c27b0" d="m443.008 241.152l-41.216-34.304A64 64 0 0 0 360.832 192H128a64 64 0 0 0-64 64v512a64 64 0 0 0 64 64h768a64 64 0 0 0 64-64V320a64 64 0 0 0-64-64H483.968a64 64 0 0 1-40.96-14.848"></svg:path><svg:path fill="#e1bee7" d="M960 416.219V544c0 53.02-42.98 96-96 96H544c-17.673 0-32-14.327-32-32s14.327-32 32-32h320v-64H544c-53.02 0-96 42.98-96 96s42.98 96 96 96h320c88.366 0 160-71.634 160-160c0-52.295-25.203-98.585-64-127.781"></svg:path>`,
})
export class MaterialIconThemeFolderAttachmentIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderAttachmentOpenIcon],svg[material-icon-theme-folder-attachment-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#9c27b0" d="M128 192a64 64 0 0 0-64 64v512a64 64 0 0 0 64 64h704l153.791-358.783A64 64 0 0 0 926.912 384H302.145a64 64 0 0 0-60.737 43.775L128 768V320h768a64 64 0 0 0-64-64H483.969a64 64 0 0 1-40.961-14.848l-41.215-34.304A64 64 0 0 0 360.832 192z"></svg:path><svg:path fill="#e1bee7" d="M990.922 446.852c.156 8.69-1.383 17.621-5.131 26.365l-26.271 61.287c.306 3.125.48 6.29.48 9.496c0 53.02-42.98 96-96 96H544c-17.673 0-32-14.327-32-32s14.327-32 32-32h320v-64H544c-53.02 0-96 42.98-96 96s42.98 96 96 96h320c88.366 0 160-71.634 160-160c0-36.586-12.416-70.195-33.078-97.148"></svg:path>`,
})
export class MaterialIconThemeFolderAttachmentOpenIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderAudioIcon],svg[material-icon-theme-folder-audio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ef5350" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#ffcdd2" d="M31.5 12h-5a.5.5 0 0 0-.5.5v8.055a3.9 3.9 0 0 0-3.232-.357a3.999 3.999 0 0 0 1.856 7.755A4.1 4.1 0 0 0 28 23.847V16h3.5a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5"></svg:path>`,
})
export class MaterialIconThemeFolderAudioIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderAudioOpenIcon],svg[material-icon-theme-folder-audio-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ef5350" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#ffcdd2" d="M31.5 12h-5a.5.5 0 0 0-.5.5v8.055a3.9 3.9 0 0 0-3.232-.357a3.999 3.999 0 0 0 1.856 7.755A4.1 4.1 0 0 0 28 23.847V16h3.5a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5"></svg:path>`,
})
export class MaterialIconThemeFolderAudioOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderAureliaIcon],svg[material-icon-theme-folder-aurelia-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="materialIconThemeFolderAurelia0" x1="1900.681" x2="1971.195" y1="2029.643" y2="2094.383" gradientTransform="matrix(.3031 0 0 .33012 -563.43 -666.868)" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#BA68C8"></svg:stop><svg:stop offset="1" stop-color="#7E57C2"></svg:stop></svg:lineargradient><svg:lineargradient id="materialIconThemeFolderAurelia1" x1="1941.881" x2="1903.835" y1="2094.543" y2="2042.593" gradientTransform="matrix(.30439 0 0 .32873 -562.803 -659.828)" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#7E57C2"></svg:stop><svg:stop offset=".14" stop-color="#7B1FA2"></svg:stop><svg:stop offset=".29" stop-color="#AD1457"></svg:stop><svg:stop offset=".84" stop-color="#C2185B"></svg:stop><svg:stop offset="1" stop-color="#EC407A"></svg:stop></svg:lineargradient><svg:lineargradient id="materialIconThemeFolderAurelia2" x1="1724.927" x2="1791.601" y1="2182.482" y2="2275.279" gradientTransform="matrix(.3299 0 0 .30331 -565.358 -657.724)" href="#materialIconThemeFolderAurelia0"></svg:lineargradient><svg:lineargradient id="materialIconThemeFolderAurelia3" x1="1793.759" x2="1875.779" y1="2101.188" y2="2168.469" gradientTransform="matrix(.31601 0 0 .31665 -559.595 -661.081)" href="#materialIconThemeFolderAurelia0"></svg:lineargradient><svg:lineargradient id="materialIconThemeFolderAurelia4" x1="1817.883" x2="1894.351" y1="2130.411" y2="2197.794" gradientTransform="matrix(.31642 0 0 .31622 -569.167 -663.436)" href="#materialIconThemeFolderAurelia0"></svg:lineargradient><svg:lineargradient id="materialIconThemeFolderAurelia5" x1="1962.514" x2="1924.373" y1="2123.223" y2="2071.047" gradientTransform="matrix(.30448 0 0 .32864 -567.814 -667.345)" href="#materialIconThemeFolderAurelia1"></svg:lineargradient><svg:lineargradient id="materialIconThemeFolderAurelia6" x1="1903.406" x2="1973.987" y1="2025.692" y2="2103.839" gradientTransform="matrix(.30312 0 0 .33012 -563.404 -666.844)" href="#materialIconThemeFolderAurelia0"></svg:lineargradient><svg:lineargradient id="materialIconThemeFolderAurelia7" x1="2232.134" x2="2273.567" y1="1794.832" y2="1753.862" gradientTransform="matrix(.31084 .06202 -.06177 .30959 -567.724 -667.861)" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#7E57C2"></svg:stop><svg:stop offset=".14" stop-color="#7B1FA2"></svg:stop><svg:stop offset=".53" stop-color="#AD1457"></svg:stop><svg:stop offset=".79" stop-color="#C2185B"></svg:stop><svg:stop offset="1" stop-color="#EC407A"></svg:stop></svg:lineargradient></svg:defs><svg:path fill="#f06292" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="url(#materialIconThemeFolderAurelia0)" d="m25.787 15.333l-1.671 1.144l-1.72-2.646l1.67-1.144Z"></svg:path><svg:path fill="url(#materialIconThemeFolderAurelia1)" d="M27.145 23.283L30 27.672L26.6 30l-2.855-4.389l-.498-.765l3.4-2.328Z"></svg:path><svg:path fill="url(#materialIconThemeFolderAurelia2)" d="m22.864 26.215l.628.966l-2.588 1.772l-1.127-1.732l.566-.387l2.023-1.385Z"></svg:path><svg:path fill="url(#materialIconThemeFolderAurelia3)" d="m28.56 21.208l.727-.497l1.126 1.732l-1.671 1.144l-.628-.967l.945-.647Zm-.447 1.412l-.497-.765l.945-.647l.498.765Z"></svg:path><svg:path fill="url(#materialIconThemeFolderAurelia4)" d="m16.844 21.457l-.565.387l-1.72-2.647l2.587-1.772l1.206 1.855l-2.022 1.385l2.023-1.385l.515.791Z"></svg:path><svg:path fill="url(#materialIconThemeFolderAurelia5)" d="m22.635 16.348l.515.79l-3.4 2.329l-.515-.791l-2.828-4.348l3.4-2.328Z"></svg:path><svg:path fill="url(#materialIconThemeFolderAurelia6)" d="m25.062 15.83l-.945.647l-.515-.792l-1.206-1.855l1.67-1.144l1.722 2.646Z"></svg:path><svg:path fill="#673AB7" d="m20.84 27.6l-.497-.765l2.023-1.386l.497.766Zm7.273-4.98l-.498-.764l.945-.647l.498.765Z"></svg:path><svg:path fill="#AB47BC" d="m16.844 21.457l-.515-.791l2.023-1.385l.515.79Z"></svg:path><svg:path fill="#7E57C2" d="m24.117 16.477l-.514-.791l.945-.648l.514.791Z"></svg:path><svg:path fill="#880E4F" d="m27.145 23.283l-3.4 2.328l-.497-.766l3.399-2.328Z"></svg:path><svg:path fill="#AD1457" d="m22.635 16.347l.515.792l-3.4 2.329l-.515-.793Z"></svg:path><svg:path fill="#AB47BC" d="m15.88 15.715l.642.986l-.962.659l-.642-.987Z"></svg:path><svg:path fill="#7E57C2" d="m19.346 27.545l.642.987l-.962.659l-.641-.988Z"></svg:path><svg:path fill="url(#materialIconThemeFolderAurelia7)" d="M16.815 28.539L14 24.175l15.048-10.328L32 18.142Z"></svg:path>`,
})
export class MaterialIconThemeFolderAureliaIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderAureliaOpenIcon],svg[material-icon-theme-folder-aurelia-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="materialIconThemeFolderAureliaOpen0" x1="1997.25" x2="2067.763" y1="2029.643" y2="2094.383" gradientTransform="matrix(.3031 0 0 .33012 -592.7 -666.868)" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#BA68C8"></svg:stop><svg:stop offset="1" stop-color="#7E57C2"></svg:stop></svg:lineargradient><svg:lineargradient id="materialIconThemeFolderAureliaOpen1" x1="2037.862" x2="1999.816" y1="2094.543" y2="2042.593" gradientTransform="matrix(.30439 0 0 .32873 -592.019 -659.828)" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#7E57C2"></svg:stop><svg:stop offset=".14" stop-color="#7B1FA2"></svg:stop><svg:stop offset=".29" stop-color="#AD1457"></svg:stop><svg:stop offset=".84" stop-color="#C2185B"></svg:stop><svg:stop offset="1" stop-color="#EC407A"></svg:stop></svg:lineargradient><svg:lineargradient id="materialIconThemeFolderAureliaOpen2" x1="1810.238" x2="1876.912" y1="2182.482" y2="2275.279" gradientTransform="matrix(.3299 0 0 .30331 -593.502 -657.724)" href="#materialIconThemeFolderAureliaOpen0"></svg:lineargradient><svg:lineargradient id="materialIconThemeFolderAureliaOpen3" x1="1884.666" x2="1966.686" y1="2101.188" y2="2168.469" gradientTransform="matrix(.31601 0 0 .31665 -588.323 -661.081)" href="#materialIconThemeFolderAureliaOpen0"></svg:lineargradient><svg:lineargradient id="materialIconThemeFolderAureliaOpen4" x1="1908.618" x2="1985.086" y1="2130.411" y2="2197.794" gradientTransform="matrix(.31642 0 0 .31622 -597.877 -663.436)" href="#materialIconThemeFolderAureliaOpen0"></svg:lineargradient><svg:lineargradient id="materialIconThemeFolderAureliaOpen5" x1="2058.454" x2="2020.313" y1="2123.223" y2="2071.047" gradientTransform="matrix(.30448 0 0 .32864 -597.026 -667.345)" href="#materialIconThemeFolderAureliaOpen1"></svg:lineargradient><svg:lineargradient id="materialIconThemeFolderAureliaOpen6" x1="1999.965" x2="2070.546" y1="2025.692" y2="2103.839" gradientTransform="matrix(.30312 0 0 .33012 -592.673 -666.844)" href="#materialIconThemeFolderAureliaOpen0"></svg:lineargradient><svg:lineargradient id="materialIconThemeFolderAureliaOpen7" x1="2320.079" x2="2361.512" y1="1768.801" y2="1727.83" gradientTransform="matrix(.31084 .06202 -.06177 .30959 -596.669 -665.256)" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#7E57C2"></svg:stop><svg:stop offset=".14" stop-color="#7B1FA2"></svg:stop><svg:stop offset=".53" stop-color="#AD1457"></svg:stop><svg:stop offset=".79" stop-color="#C2185B"></svg:stop><svg:stop offset="1" stop-color="#EC407A"></svg:stop></svg:lineargradient></svg:defs><svg:path fill="#f06292" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="url(#materialIconThemeFolderAureliaOpen0)" d="m25.787 15.333l-1.671 1.144l-1.72-2.646l1.67-1.144Z"></svg:path><svg:path fill="url(#materialIconThemeFolderAureliaOpen1)" d="M27.145 23.283L30 27.672L26.6 30l-2.855-4.389l-.498-.765l3.4-2.328Z"></svg:path><svg:path fill="url(#materialIconThemeFolderAureliaOpen2)" d="m22.864 26.215l.628.966l-2.588 1.772l-1.127-1.732l.566-.387l2.023-1.385Z"></svg:path><svg:path fill="url(#materialIconThemeFolderAureliaOpen3)" d="m28.56 21.208l.727-.497l1.126 1.732l-1.671 1.144l-.628-.967l.945-.647Zm-.447 1.412l-.497-.765l.945-.647l.498.765Z"></svg:path><svg:path fill="url(#materialIconThemeFolderAureliaOpen4)" d="m16.844 21.457l-.565.387l-1.72-2.647l2.587-1.772l1.206 1.855l-2.022 1.385l2.023-1.385l.515.791Z"></svg:path><svg:path fill="url(#materialIconThemeFolderAureliaOpen5)" d="m22.635 16.348l.515.79l-3.4 2.329l-.515-.791l-2.828-4.348l3.4-2.328Z"></svg:path><svg:path fill="url(#materialIconThemeFolderAureliaOpen6)" d="m25.062 15.83l-.945.647l-.515-.792l-1.206-1.855l1.67-1.144l1.722 2.646Z"></svg:path><svg:path fill="#673AB7" d="m20.84 27.6l-.497-.765l2.023-1.386l.497.766Zm7.273-4.98l-.498-.764l.945-.647l.498.765Z"></svg:path><svg:path fill="#AB47BC" d="m16.844 21.457l-.515-.791l2.023-1.385l.515.79Z"></svg:path><svg:path fill="#7E57C2" d="m24.117 16.477l-.514-.791l.945-.648l.514.791Z"></svg:path><svg:path fill="#880E4F" d="m27.145 23.283l-3.4 2.328l-.497-.766l3.399-2.328Z"></svg:path><svg:path fill="#AD1457" d="m22.635 16.347l.515.792l-3.4 2.329l-.515-.793Z"></svg:path><svg:path fill="#AB47BC" d="m15.88 15.715l.642.986l-.962.659l-.642-.987Z"></svg:path><svg:path fill="#7E57C2" d="m19.346 27.545l.642.987l-.962.659l-.641-.988Z"></svg:path><svg:path fill="url(#materialIconThemeFolderAureliaOpen7)" d="M16.815 28.539L14 24.175l15.048-10.328L32 18.142Z"></svg:path>`,
})
export class MaterialIconThemeFolderAureliaOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderAwsIcon],svg[material-icon-theme-folder-aws-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ffb300" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#ffecb3" d="M27.881 19.23a6.591 6.591 0 0 0-12.308-1.76a5.278 5.278 0 0 0 .572 10.525h11.428a4.388 4.388 0 0 0 .308-8.766Z"></svg:path>`,
})
export class MaterialIconThemeFolderAwsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderAwsOpenIcon],svg[material-icon-theme-folder-aws-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ffb300" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#ffecb3" d="M27.881 19.23a6.591 6.591 0 0 0-12.308-1.76a5.278 5.278 0 0 0 .572 10.525h11.428a4.388 4.388 0 0 0 .308-8.766Z"></svg:path>`,
})
export class MaterialIconThemeFolderAwsOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderAzurePipelinesIcon],svg[material-icon-theme-folder-azure-pipelines-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#1e88e5" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#bbdefb" d="m28 22l3.724-1.862a.5.5 0 0 0 .276-.447V12.5a.5.5 0 0 0-.5-.5h-7.191a.5.5 0 0 0-.447.276L22 16h-5.5a.5.5 0 0 0-.5.5V20l1.172 1.172l1.414-1.415L20 21.172l-1.414 1.414l2.828 2.828L22.828 24l1.415 1.414l-1.415 1.414L24 28h3.5a.5.5 0 0 0 .5-.5Zm0-4a2 2 0 1 1 2-2a2 2 0 0 1-2 2M16 28v-4h-2v6h6v-2z"></svg:path>`,
})
export class MaterialIconThemeFolderAzurePipelinesIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderAzurePipelinesOpenIcon],svg[material-icon-theme-folder-azure-pipelines-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#1e88e5" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#bbdefb" d="m28 22l3.724-1.862a.5.5 0 0 0 .276-.447V12.5a.5.5 0 0 0-.5-.5h-7.191a.5.5 0 0 0-.447.276L22 16h-5.5a.5.5 0 0 0-.5.5V20l1.172 1.172l1.414-1.415L20 21.172l-1.414 1.414l2.828 2.828L22.828 24l1.415 1.414l-1.415 1.414L24 28h3.5a.5.5 0 0 0 .5-.5Zm0-4a2 2 0 1 1 2-2a2 2 0 0 1-2 2M16 28v-4h-2v6h6v-2z"></svg:path>`,
})
export class MaterialIconThemeFolderAzurePipelinesOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderBackupIcon],svg[material-icon-theme-folder-backup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#8d6e63" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#d7ccc8" d="M25.375 24.781L20 20.48V14h2v5.52l4.625 3.699z"></svg:path><svg:path fill="#d7ccc8" d="M22 30a10 10 0 1 1 10-10a10.01 10.01 0 0 1-10 10m0-18a8 8 0 1 0 8 8a8.01 8.01 0 0 0-8-8"></svg:path>`,
})
export class MaterialIconThemeFolderBackupIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderBackupOpenIcon],svg[material-icon-theme-folder-backup-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#8d6e63" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#d7ccc8" d="M25.375 24.781L20 20.48V14h2v5.52l4.625 3.699z"></svg:path><svg:path fill="#d7ccc8" d="M22 30a10 10 0 1 1 10-10a10.01 10.01 0 0 1-10 10m0-18a8 8 0 1 0 8 8a8.01 8.01 0 0 0-8-8"></svg:path>`,
})
export class MaterialIconThemeFolderBackupOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderBaseIcon],svg[material-icon-theme-folder-base-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#8d6e63" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:rect width="18" height="6" x="14" y="22" fill="#d7ccc8" rx="1"></svg:rect>`,
})
export class MaterialIconThemeFolderBaseIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderBaseOpenIcon],svg[material-icon-theme-folder-base-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#8d6e63" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:rect width="18" height="6" x="14" y="22" fill="#d7ccc8" rx="1"></svg:rect>`,
})
export class MaterialIconThemeFolderBaseOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderBatchIcon],svg[material-icon-theme-folder-batch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#616161" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#bdbdbd" d="M16 14h12v2H16zm0 4h12v2H16zm0 4h8v2h-8zm10 0v6l6-3z"></svg:path>`,
})
export class MaterialIconThemeFolderBatchIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderBatchOpenIcon],svg[material-icon-theme-folder-batch-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#616161" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#bdbdbd" d="M16 14h12v2H16zm0 4h12v2H16zm0 4h8v2h-8zm10 0v6l6-3z"></svg:path>`,
})
export class MaterialIconThemeFolderBatchOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderBenchmarkIcon],svg[material-icon-theme-folder-benchmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#1e88e5" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#bbdefb" d="M20 12a9.99 9.99 0 0 0-7.99 16h2.71A7.993 7.993 0 0 1 20 14a8 8 0 0 1 1.69.18c.73-.44 1.51-.9 2.28-1.35A9.8 9.8 0 0 0 20 12m9.12 5.92c-.41.73-.86 1.52-1.32 2.33A7.8 7.8 0 0 1 28 22a7.97 7.97 0 0 1-2.72 6h2.71A9.93 9.93 0 0 0 30 22a9.8 9.8 0 0 0-.88-4.08"></svg:path><svg:path fill="#bbdefb" d="M17.172 19.172c1.562-1.563 11.313-5.657 11.313-5.657s-4.094 9.751-5.657 11.313a4 4 0 0 1-5.656-5.656"></svg:path>`,
})
export class MaterialIconThemeFolderBenchmarkIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderBenchmarkOpenIcon],svg[material-icon-theme-folder-benchmark-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#1e88e5" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#bbdefb" d="M20 12a9.99 9.99 0 0 0-7.99 16h2.71A7.993 7.993 0 0 1 20 14a8 8 0 0 1 1.69.18c.73-.44 1.51-.9 2.28-1.35A9.8 9.8 0 0 0 20 12m9.12 5.92c-.41.73-.86 1.52-1.32 2.33A7.8 7.8 0 0 1 28 22a7.97 7.97 0 0 1-2.72 6h2.71A9.93 9.93 0 0 0 30 22a9.8 9.8 0 0 0-.88-4.08"></svg:path><svg:path fill="#bbdefb" d="M17.172 19.172c1.562-1.563 11.313-5.657 11.313-5.657s-4.094 9.751-5.657 11.313a4 4 0 0 1-5.656-5.656"></svg:path>`,
})
export class MaterialIconThemeFolderBenchmarkOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderBibliographyIcon],svg[material-icon-theme-folder-bibliography-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#a1887f" d="m443.008 241.152l-41.216-34.304A64 64 0 0 0 360.832 192H128a64 64 0 0 0-64 64v512a64 64 0 0 0 64 64h768a64 64 0 0 0 64-64V320a64 64 0 0 0-64-64H483.968a64 64 0 0 1-40.96-14.848"></svg:path><svg:path fill="#8d6e63" d="M576 704v128c0 35.456 28.544 64 64 64h352c17.728 0 32-14.272 32-32V704z"></svg:path><svg:path fill="#ffe082" d="M896 768v64h64v-64z"></svg:path><svg:path fill="#fff8e1" d="M640 768c0 35.456 28.544 64 64 64h256c-35.346 0-64-28.654-64-64z"></svg:path><svg:path fill="#ff1744" d="M704 800h64v160h-64z"></svg:path><svg:path fill="#d7ccc8" d="M640 320c-35.456 0-64 28.544-64 64v448c0-35.346 28.654-64 64-64h352c17.728 0 32-14.272 32-32V352c0-17.728-14.272-32-32-32z"></svg:path><svg:path fill="#5d4037" d="M640 384v32h32c32 0 32 7.163 32 16v224c0 8.837 0 16-32 16h-32v32h192c70.692 0 128-39.399 128-88c-.014-40.302-39.848-75.446-96.688-85.305C884.346 514.563 895.986 493.665 896 472c0-48.601-57.308-88-128-88zm143.873 33.736C811.541 423.914 832 445.866 832 472c0 30.928-28.654 56-64 56v-96c0-8.837 7.266-16.186 15.873-14.264M768 560h64c35.346 0 64 25.072 64 56s-28.654 56-64 56h-48a16 16 0 0 1-16-16z"></svg:path>`,
})
export class MaterialIconThemeFolderBibliographyIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderBibliographyOpenIcon],svg[material-icon-theme-folder-bibliography-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#a1887f" d="M926.912 384H302.144a64 64 0 0 0-60.736 43.776L128 768V320h768a64 64 0 0 0-64-64H483.968a64 64 0 0 1-40.96-14.848l-41.216-34.304A64 64 0 0 0 360.832 192H128a64 64 0 0 0-64 64v512a64 64 0 0 0 64 64h704l153.792-358.784A64 64 0 0 0 926.912 384"></svg:path><svg:path fill="#8d6e63" d="M576 704v128c0 35.456 28.544 64 64 64h352c17.728 0 32-14.272 32-32V704z"></svg:path><svg:path fill="#ffe082" d="M896 768v64h64v-64z"></svg:path><svg:path fill="#fff8e1" d="M640 768c0 35.456 28.544 64 64 64h256c-35.346 0-64-28.654-64-64z"></svg:path><svg:path fill="#ff1744" d="M704 800h64v160h-64z"></svg:path><svg:path fill="#d7ccc8" d="M640 320c-35.456 0-64 28.544-64 64v448c0-35.346 28.654-64 64-64h352c17.728 0 32-14.272 32-32V352c0-17.728-14.272-32-32-32z"></svg:path><svg:path fill="#5d4037" d="M640 384v32h32c32 0 32 7.163 32 16v224c0 8.837 0 16-32 16h-32v32h192c70.692 0 128-39.399 128-88c-.014-40.302-39.848-75.446-96.688-85.305C884.346 514.563 895.986 493.665 896 472c0-48.601-57.308-88-128-88zm143.873 33.736C811.541 423.914 832 445.866 832 472c0 30.928-28.654 56-64 56v-96c0-8.837 7.266-16.186 15.873-14.264M768 560h64c35.346 0 64 25.072 64 56s-28.654 56-64 56h-48a16 16 0 0 1-16-16z"></svg:path>`,
})
export class MaterialIconThemeFolderBibliographyOpenIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderBicepIcon],svg[material-icon-theme-folder-bicep-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fbc02d" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#fff9c4" d="M15 25s1.15-11.115 4-15l4 1l-1 3h-2v7h2c1.9-2.915 5.381-4.255 7.755-3.19c3.134 1.453 2.85 5.831 0 7.769C27.475 27.137 20.699 28.885 15 25"></svg:path>`,
})
export class MaterialIconThemeFolderBicepIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderBicepOpenIcon],svg[material-icon-theme-folder-bicep-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fbc02d" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#fff9c4" d="M15 25s1.15-11.115 4-15l4 1l-1 3h-2v7h2c1.9-2.915 5.381-4.255 7.755-3.19c3.134 1.453 2.85 5.831 0 7.769C27.475 27.137 20.699 28.885 15 25"></svg:path>`,
})
export class MaterialIconThemeFolderBicepOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderBlocIcon],svg[material-icon-theme-folder-bloc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#26A69A" d="m13.8 7.5l-1.3-1.1c-.3-.2-.8-.4-1.2-.4H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h24c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2H15.1c-.5 0-.9-.1-1.3-.5"></svg:path><svg:path fill="#B2DFDB" d="m25 12l7 4.198v8.103L25 28.5l-7-4.212V16.21z"></svg:path></svg:g>`,
})
export class MaterialIconThemeFolderBlocIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderBlocOpenIcon],svg[material-icon-theme-folder-bloc-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#26A69A" d="M29 12H9.4c-.9 0-1.6.6-1.9 1.4L4 24V10h24c0-1.1-.9-2-2-2H15.1c-.5 0-.9-.2-1.3-.5l-1.3-1.1c-.3-.2-.8-.4-1.2-.4H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h22l4.8-11.2c.4-1 0-2.2-1-2.6c-.3-.1-.6-.2-.8-.2"></svg:path><svg:path fill="#B2DFDB" d="m25 12l7 4.198v8.103L25 28.5l-7-4.212V16.21z"></svg:path></svg:g>`,
})
export class MaterialIconThemeFolderBlocOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderBowerIcon],svg[material-icon-theme-folder-bower-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#8d6e63" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#5d4037" d="M31.598 20.789c-1.028-1.012-6.166-1.644-7.786-1.827a5 5 0 0 0 .2-.589a6 6 0 0 1 .707-.269c.03.092.171.439.251.605a3.165 3.165 0 0 0 3.533-2.78a3 3 0 0 0 .027-.407a4 4 0 0 1 1.241-2.574c-1.666-.498-4.062.77-4.864 2.657a5 5 0 0 0-.902-.253A4.396 4.396 0 0 0 19.75 12a8.07 8.07 0 0 0-7.746 8.364l.002.07c0 4.46 2.97 8.365 4.647 8.365a1.65 1.65 0 0 0 1.511-1.067c.124.346.505 1.42.63 1.694c.184.404 1.04.755 1.414.335a1.355 1.355 0 0 0 1.843-.292a1.36 1.36 0 0 0 1.724-.89a1 1 0 0 0 .039-.149c.454-.026.678-.68.578-1.2a13 13 0 0 0-1.159-2.234c.604.503 2.132.645 2.317 0c.973.782 2.488.372 2.61-.264c1.18.314 2.536-.376 2.314-1.213a1.63 1.63 0 0 0 1.525-1.719a1.66 1.66 0 0 0-.401-1.011"></svg:path><svg:path fill="#03a9f4" d="M26.252 16.374a7.4 7.4 0 0 1 1.57-2.302a4.14 4.14 0 0 0-1.836 2.12a6 6 0 0 0-.646-.37a4.2 4.2 0 0 1 3.424-2.419c-.999.928-.644 2.855-1.464 3.876a11 11 0 0 0-1.048-.906Zm-.646 1.354a4 4 0 0 1 .035-.39a3.4 3.4 0 0 0-.6-.082a2.4 2.4 0 0 0 .208.889a3.05 3.05 0 0 0 1.629-.462a5.5 5.5 0 0 0-1.099-.318c-.04.085-.137.3-.173.362Z"></svg:path><svg:path fill="#4caf50" d="M22.847 24.304v.003a11 11 0 0 1-.32-.805c.475.708 1.962.343 1.884-.292c.728.562 2.226-.093 1.885-.88c.73.348 1.561-.352 1.375-.657c1.243.245 2.434.49 2.808.588a1.43 1.43 0 0 1-1.667.505c.46.643-.434 1.414-1.68.99c.274.63-.835 1.2-2.096.541c.016.632-1.565.705-2.19.007Zm2.465-3.193c1.443.113 3.828.334 5.305.545c-.093-.492-.348-.633-1.15-.854c-.862.095-3.05.315-4.155.309"></svg:path><svg:path fill="#ffca28" d="M24.41 23.21c.729.562 2.227-.093 1.886-.88c.73.348 1.561-.352 1.375-.657c-1.47-.29-3.012-.582-3.361-.633a53 53 0 0 1 1.002.07c1.106.007 3.293-.213 4.156-.307a41 41 0 0 0-6.216-1.023a3 3 0 0 1-.55.615a4.82 4.82 0 0 1-4.15 3.108a5.5 5.5 0 0 1-1.697-.293a3.54 3.54 0 0 1-3.432.074a6.94 6.94 0 0 0 6.356 4.321c2.335 0 3.37-2.443 3.143-3.09c-.055-.156-.272-.677-.394-1.013c.474.708 1.961.343 1.883-.291Z"></svg:path><svg:path fill="#e0e0e0" d="M22.996 18.294a6.7 6.7 0 0 1 1.597-.724q-.016-.116-.023-.233c-.446.11-1.285.478-1.766-.03c1.015.314 1.521-.28 2.268-.28a4.7 4.7 0 0 1 1.579.329a5.27 5.27 0 0 0-3.355-1.534a2.45 2.45 0 0 0-.3 2.472"></svg:path><svg:path fill="#f4511e" d="M16.855 23.21a5.5 5.5 0 0 0 1.698.293a4.82 4.82 0 0 0 4.148-3.109a5.25 5.25 0 0 1-3.473 1.011a5.42 5.42 0 0 0 3.54-2.294a3.14 3.14 0 0 1 .314-3.836a3.52 3.52 0 0 0-3.333-2.4a7.174 7.174 0 0 0-6.893 7.431l.004.127a7.4 7.4 0 0 0 .563 2.85a3.54 3.54 0 0 0 3.432-.074Z"></svg:path><svg:path fill="#ffca28" d="M17.985 16.619a1.74 1.74 0 1 0 1.74-1.783a1.76 1.76 0 0 0-1.74 1.783"></svg:path><svg:path fill="#5d4037" d="M18.683 16.619a1.042 1.042 0 1 0 1.042-1.068a1.055 1.055 0 0 0-1.042 1.068"></svg:path><svg:ellipse cx="19.725" cy="16.145" fill="#FAFAFA" rx=".607" ry=".387"></svg:ellipse>`,
})
export class MaterialIconThemeFolderBowerIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderBowerOpenIcon],svg[material-icon-theme-folder-bower-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#8d6e63" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#5d4037" d="M31.598 20.789c-1.028-1.012-6.166-1.644-7.786-1.827a5 5 0 0 0 .2-.589a6 6 0 0 1 .707-.269c.03.092.171.439.251.605a3.165 3.165 0 0 0 3.533-2.78a3 3 0 0 0 .027-.407a4 4 0 0 1 1.241-2.574c-1.666-.498-4.062.77-4.864 2.657a5 5 0 0 0-.902-.253A4.396 4.396 0 0 0 19.75 12a8.07 8.07 0 0 0-7.746 8.364l.002.07c0 4.46 2.97 8.365 4.647 8.365a1.65 1.65 0 0 0 1.511-1.067c.124.346.505 1.42.63 1.694c.184.404 1.04.755 1.414.335a1.355 1.355 0 0 0 1.843-.292a1.36 1.36 0 0 0 1.724-.89a1 1 0 0 0 .039-.149c.454-.026.678-.68.578-1.2a13 13 0 0 0-1.159-2.234c.604.503 2.132.645 2.317 0c.973.782 2.488.372 2.61-.264c1.18.314 2.536-.376 2.314-1.213a1.63 1.63 0 0 0 1.525-1.719a1.66 1.66 0 0 0-.401-1.011"></svg:path><svg:path fill="#03a9f4" d="M26.252 16.374a7.4 7.4 0 0 1 1.57-2.302a4.14 4.14 0 0 0-1.836 2.12a6 6 0 0 0-.646-.37a4.2 4.2 0 0 1 3.424-2.419c-.999.928-.644 2.855-1.464 3.876a11 11 0 0 0-1.048-.906Zm-.646 1.354a4 4 0 0 1 .035-.39a3.4 3.4 0 0 0-.6-.082a2.4 2.4 0 0 0 .208.889a3.05 3.05 0 0 0 1.629-.462a5.5 5.5 0 0 0-1.099-.318c-.04.085-.137.3-.173.362Z"></svg:path><svg:path fill="#4caf50" d="M22.847 24.304v.003a11 11 0 0 1-.32-.805c.475.708 1.962.343 1.884-.292c.728.562 2.226-.093 1.885-.88c.73.348 1.561-.352 1.375-.657c1.243.245 2.434.49 2.808.588a1.43 1.43 0 0 1-1.667.505c.46.643-.434 1.414-1.68.99c.274.63-.835 1.2-2.096.541c.016.632-1.565.705-2.19.007Zm2.465-3.193c1.443.113 3.828.334 5.305.545c-.093-.492-.348-.633-1.15-.854c-.862.095-3.05.315-4.155.309"></svg:path><svg:path fill="#ffca28" d="M24.41 23.21c.729.562 2.227-.093 1.886-.88c.73.348 1.561-.352 1.375-.657c-1.47-.29-3.012-.582-3.361-.633a53 53 0 0 1 1.002.07c1.106.007 3.293-.213 4.156-.307a41 41 0 0 0-6.216-1.023a3 3 0 0 1-.55.615a4.82 4.82 0 0 1-4.15 3.108a5.5 5.5 0 0 1-1.697-.293a3.54 3.54 0 0 1-3.432.074a6.94 6.94 0 0 0 6.356 4.321c2.335 0 3.37-2.443 3.143-3.09c-.055-.156-.272-.677-.394-1.013c.474.708 1.961.343 1.883-.291Z"></svg:path><svg:path fill="#e0e0e0" d="M22.996 18.294a6.7 6.7 0 0 1 1.597-.724q-.016-.116-.023-.233c-.446.11-1.285.478-1.766-.03c1.015.314 1.521-.28 2.268-.28a4.7 4.7 0 0 1 1.579.329a5.27 5.27 0 0 0-3.355-1.534a2.45 2.45 0 0 0-.3 2.472"></svg:path><svg:path fill="#f4511e" d="M16.855 23.21a5.5 5.5 0 0 0 1.698.293a4.82 4.82 0 0 0 4.148-3.109a5.25 5.25 0 0 1-3.473 1.011a5.42 5.42 0 0 0 3.54-2.294a3.14 3.14 0 0 1 .314-3.836a3.52 3.52 0 0 0-3.333-2.4a7.174 7.174 0 0 0-6.893 7.431l.004.127a7.4 7.4 0 0 0 .563 2.85a3.54 3.54 0 0 0 3.432-.074Z"></svg:path><svg:path fill="#ffca28" d="M17.985 16.619a1.74 1.74 0 1 0 1.74-1.783a1.76 1.76 0 0 0-1.74 1.783"></svg:path><svg:path fill="#5d4037" d="M18.683 16.619a1.042 1.042 0 1 0 1.042-1.068a1.055 1.055 0 0 0-1.042 1.068"></svg:path><svg:ellipse cx="19.725" cy="16.145" fill="#FAFAFA" rx=".607" ry=".387"></svg:ellipse>`,
})
export class MaterialIconThemeFolderBowerOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderBuildkiteIcon],svg[material-icon-theme-folder-buildkite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#4caf50" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#c8e6c9" d="m20 24l-6-2v-6l6 2zm10-2h-4v-6l6 4z"></svg:path><svg:path fill="#a5d6a7" d="m20 24l6-2v-6l-6 2zm6 4l6-2v-6l-6 2z"></svg:path>`,
})
export class MaterialIconThemeFolderBuildkiteIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderBuildkiteOpenIcon],svg[material-icon-theme-folder-buildkite-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#4caf50" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#c8e6c9" d="m20 24l-6-2v-6l6 2zm10-2h-4v-6l6 4z"></svg:path><svg:path fill="#a5d6a7" d="m20 24l6-2v-6l-6 2zm6 4l6-2v-6l-6 2z"></svg:path>`,
})
export class MaterialIconThemeFolderBuildkiteOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderCartIcon],svg[material-icon-theme-folder-cart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#009688" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:circle cx="20" cy="26" r="2" fill="#b2dfdb"></svg:circle><svg:circle cx="28" cy="26" r="2" fill="#b2dfdb"></svg:circle><svg:path fill="#b2dfdb" d="M30.613 12H18.22l-.4-2H14v2h2.18l1.84 9.196A1 1 0 0 0 19 22h11v-2H19.82l-.4-2H30l1.561-4.684A1 1 0 0 0 30.613 12"></svg:path>`,
})
export class MaterialIconThemeFolderCartIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderCartOpenIcon],svg[material-icon-theme-folder-cart-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#009688" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:circle cx="20" cy="26" r="2" fill="#b2dfdb"></svg:circle><svg:circle cx="28" cy="26" r="2" fill="#b2dfdb"></svg:circle><svg:path fill="#b2dfdb" d="M30.613 12H18.22l-.4-2H14v2h2.18l1.84 9.196A1 1 0 0 0 19 22h11v-2H19.82l-.4-2H30l1.561-4.684A1 1 0 0 0 30.613 12"></svg:path>`,
})
export class MaterialIconThemeFolderCartOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderChangesetsIcon],svg[material-icon-theme-folder-changesets-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2196f3" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#bbdefb" d="M14.003 14a6.68 6.68 0 0 0 6.335 6.98h1.9a6.62 6.62 0 0 0-6.238 7h1.172A6.36 6.36 0 0 0 23 23.73a6.36 6.36 0 0 0 5.828 4.25H30a6.62 6.62 0 0 0-6.239-7h1.901A6.68 6.68 0 0 0 31.997 14h-3.169A6.34 6.34 0 0 0 23 18.23A6.34 6.34 0 0 0 17.172 14ZM23 18.234a7.7 7.7 0 0 1 0 5.493a7.7 7.7 0 0 1 0-5.493"></svg:path>`,
})
export class MaterialIconThemeFolderChangesetsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderChangesetsOpenIcon],svg[material-icon-theme-folder-changesets-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2196f3" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#bbdefb" d="M14.003 14a6.68 6.68 0 0 0 6.335 6.98h1.9a6.62 6.62 0 0 0-6.238 7h1.172A6.36 6.36 0 0 0 23 23.73a6.36 6.36 0 0 0 5.828 4.25H30a6.62 6.62 0 0 0-6.239-7h1.901A6.68 6.68 0 0 0 31.997 14h-3.169A6.34 6.34 0 0 0 23 18.23A6.34 6.34 0 0 0 17.172 14ZM23 18.234a7.7 7.7 0 0 1 0 5.493a7.7 7.7 0 0 1 0-5.493"></svg:path>`,
})
export class MaterialIconThemeFolderChangesetsOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderCiIcon],svg[material-icon-theme-folder-ci-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#0288d1" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#b3e5fc" d="M23.998 12.978v2.986l4-3.981l-4-3.983v2.986A7.98 7.98 0 0 0 16 18.95v.002a7.9 7.9 0 0 0 1.239 4.24l1.46-1.455a5.86 5.86 0 0 1-.7-2.785a5.987 5.987 0 0 1 6-5.974m6.759 1.732l-1.46 1.454a5.968 5.968 0 0 1-5.3 8.76v-2.985l-4 3.983l4 3.981v-2.986a7.98 7.98 0 0 0 7.999-7.964v-.001a7.87 7.87 0 0 0-1.24-4.24Z"></svg:path>`,
})
export class MaterialIconThemeFolderCiIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderCiOpenIcon],svg[material-icon-theme-folder-ci-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#0288d1" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#b3e5fc" d="M23.998 12.978v2.986l4-3.981l-4-3.983v2.986A7.98 7.98 0 0 0 16 18.95v.002a7.9 7.9 0 0 0 1.239 4.24l1.46-1.455a5.86 5.86 0 0 1-.7-2.785a5.987 5.987 0 0 1 6-5.974m6.759 1.732l-1.46 1.454a5.968 5.968 0 0 1-5.3 8.76v-2.985l-4 3.983l4 3.981v-2.986a7.98 7.98 0 0 0 7.999-7.964v-.001a7.87 7.87 0 0 0-1.24-4.24Z"></svg:path>`,
})
export class MaterialIconThemeFolderCiOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderCircleciIcon],svg[material-icon-theme-folder-circleci-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#546e7a" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#eceff1" d="M22.954 10a9 9 0 0 0-8.555 6.367a.5.5 0 0 0 .486.633h3.23a.5.5 0 0 0 .442-.28a5 5 0 1 1-.001 4.557a.5.5 0 0 0-.439-.277h-3.232a.5.5 0 0 0-.486.633a8.997 8.997 0 0 0 17.597-2.892A9.103 9.103 0 0 0 22.954 10"></svg:path><svg:circle cx="23" cy="19" r="2" fill="#eceff1"></svg:circle>`,
})
export class MaterialIconThemeFolderCircleciIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderCircleciOpenIcon],svg[material-icon-theme-folder-circleci-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#546e7a" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#eceff1" d="M22.954 10a9 9 0 0 0-8.555 6.367a.5.5 0 0 0 .486.633h3.23a.5.5 0 0 0 .442-.28a5 5 0 1 1-.001 4.557a.5.5 0 0 0-.439-.277h-3.232a.5.5 0 0 0-.486.633a8.997 8.997 0 0 0 17.597-2.892A9.103 9.103 0 0 0 22.954 10"></svg:path><svg:circle cx="23" cy="19" r="2" fill="#eceff1"></svg:circle>`,
})
export class MaterialIconThemeFolderCircleciOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderClassIcon],svg[material-icon-theme-folder-class-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ef5350" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#ffcdd2" d="M16 12v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V12a2 2 0 0 0-2-2H18a2 2 0 0 0-2 2m14 14H18v-4h12Zm0-6H18v-4h12Z"></svg:path>`,
})
export class MaterialIconThemeFolderClassIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderClassOpenIcon],svg[material-icon-theme-folder-class-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ef5350" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#ffcdd2" d="M16 12v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V12a2 2 0 0 0-2-2H18a2 2 0 0 0-2 2m14 14H18v-4h12Zm0-6H18v-4h12Z"></svg:path>`,
})
export class MaterialIconThemeFolderClassOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderClientIcon],svg[material-icon-theme-folder-client-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#039be5" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#b3e5fc" d="M15 12a1 1 0 0 0-1 1v10.994h-4v4h12v-4h-6V14h14v-2.006Z"></svg:path><svg:path fill="#b3e5fc" d="M31 16h-6a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V17a1 1 0 0 0-1-1m-1 8h-4v-6h4Z"></svg:path>`,
})
export class MaterialIconThemeFolderClientIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderClientOpenIcon],svg[material-icon-theme-folder-client-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#039be5" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#b3e5fc" d="M15 12a1 1 0 0 0-1 1v10.994h-4v4h12v-4h-6V14h14v-2.006Z"></svg:path><svg:path fill="#b3e5fc" d="M31 16h-6a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V17a1 1 0 0 0-1-1m-1 8h-4v-6h4Z"></svg:path>`,
})
export class MaterialIconThemeFolderClientOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderClineIcon],svg[material-icon-theme-folder-cline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#42a5f5" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#bbdefb" d="M23 12a2 2 0 0 0-2 2h-1c-2.216 0-4 1.784-4 4l-2 3l2 3c0 2.216 1.784 4 4 4h6c2.216 0 4-1.784 4-4l2-3l-2-3c0-2.216-1.784-4-4-4h-1a2 2 0 0 0-2-2m-2 6c.554 0 1 .446 1 1v4c0 .554-.446 1-1 1s-1-.446-1-1v-4c0-.554.446-1 1-1m4 0c.554 0 1 .446 1 1v4c0 .554-.446 1-1 1s-1-.446-1-1v-4c0-.554.446-1 1-1"></svg:path>`,
})
export class MaterialIconThemeFolderClineIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderClineOpenIcon],svg[material-icon-theme-folder-cline-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#42a5f5" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#bbdefb" d="M23 12a2 2 0 0 0-2 2h-1c-2.216 0-4 1.784-4 4l-2 3l2 3c0 2.216 1.784 4 4 4h6c2.216 0 4-1.784 4-4l2-3l-2-3c0-2.216-1.784-4-4-4h-1a2 2 0 0 0-2-2m-2 6c.554 0 1 .446 1 1v4c0 .554-.446 1-1 1s-1-.446-1-1v-4c0-.554.446-1 1-1m4 0c.554 0 1 .446 1 1v4c0 .554-.446 1-1 1s-1-.446-1-1v-4c0-.554.446-1 1-1"></svg:path>`,
})
export class MaterialIconThemeFolderClineOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderCloudFunctionsIcon],svg[material-icon-theme-folder-cloud-functions-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"><svg:defs><svg:path id="materialIconThemeFolderCloudFunctions0" fill="#bbdefb" d="m26 14l2-2l4 4l-2 2z"></svg:path></svg:defs><svg:path fill="#2196f3" fill-rule="nonzero" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4c-1.097 0-2 .903-2 2v16c0 1.097.903 2 2 2h24c1.097 0 2-.903 2-2V10c0-1.097-.903-2-2-2H15.124c-.468 0-.921-.164-1.28-.464"></svg:path><svg:path fill="#bbdefb" d="M21.982 17.988h2.037v1.996h-2.037zm-2.983.021h2.037v1.996h-2.037zm5.998 0h1.996v1.996h-1.996zM29 14h3v10h-3z"></svg:path><svg:use href="#materialIconThemeFolderCloudFunctions0" transform="translate(0 -2)"></svg:use><svg:use href="#materialIconThemeFolderCloudFunctions0" transform="matrix(1 0 0 -1 0 40)"></svg:use><svg:path fill="#bbdefb" d="M14 14h3v10h-3z"></svg:path><svg:use href="#materialIconThemeFolderCloudFunctions0" transform="matrix(-1 0 0 1 46 -2)"></svg:use><svg:use href="#materialIconThemeFolderCloudFunctions0" transform="rotate(180 23 20)"></svg:use></svg:g>`,
})
export class MaterialIconThemeFolderCloudFunctionsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderCloudFunctionsOpenIcon],svg[material-icon-theme-folder-cloud-functions-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"><svg:defs><svg:path id="materialIconThemeFolderCloudFunctionsOpen0" fill="#bbdefb" d="m26 14l2-2l4 4l-2 2z"></svg:path></svg:defs><svg:path fill="#2196f3" fill-rule="nonzero" d="M28.967 12H9.442c-.859 0-1.627.553-1.898 1.368L4 24V10h24c0-1.097-.903-2-2-2H15.124c-.468 0-.921-.164-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4c-1.097 0-2 .903-2 2v16c0 1.097.903 2 2 2h22l4.805-11.212c.107-.249.162-.517.162-.788c0-1.097-.903-2-2-2"></svg:path><svg:path fill="#bbdefb" d="M21.982 17.988h2.037v1.996h-2.037zm-2.983.021h2.037v1.996h-2.037zm5.998 0h1.996v1.996h-1.996zM29 14h3v10h-3z"></svg:path><svg:use href="#materialIconThemeFolderCloudFunctionsOpen0" transform="translate(0 -2)"></svg:use><svg:use href="#materialIconThemeFolderCloudFunctionsOpen0" transform="matrix(1 0 0 -1 0 40)"></svg:use><svg:path fill="#bbdefb" d="M14 14h3v10h-3z"></svg:path><svg:use href="#materialIconThemeFolderCloudFunctionsOpen0" transform="matrix(-1 0 0 1 46 -2)"></svg:use><svg:use href="#materialIconThemeFolderCloudFunctionsOpen0" transform="rotate(180 23 20)"></svg:use></svg:g>`,
})
export class MaterialIconThemeFolderCloudFunctionsOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderCloudflareIcon],svg[material-icon-theme-folder-cloudflare-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ff8a65" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#EFEBE9" d="M27.881 19.229a6.591 6.591 0 0 0-12.308-1.759a5.278 5.278 0 0 0 .572 10.524h11.428a4.388 4.388 0 0 0 .308-8.765"></svg:path>`,
})
export class MaterialIconThemeFolderCloudflareIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderCloudflareOpenIcon],svg[material-icon-theme-folder-cloudflare-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ff8a65" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#EFEBE9" d="M27.881 19.229a6.591 6.591 0 0 0-12.308-1.759a5.278 5.278 0 0 0 .572 10.524h11.428a4.388 4.388 0 0 0 .308-8.765"></svg:path>`,
})
export class MaterialIconThemeFolderCloudflareOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderClusterIcon],svg[material-icon-theme-folder-cluster-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#26a69a" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:circle cx="21" cy="15" r="3" fill="#b2dfdb"></svg:circle><svg:circle cx="17" cy="23" r="3" fill="#b2dfdb"></svg:circle><svg:circle cx="27" cy="27" r="3" fill="#b2dfdb"></svg:circle>`,
})
export class MaterialIconThemeFolderClusterIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderClusterOpenIcon],svg[material-icon-theme-folder-cluster-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#26a69a" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:circle cx="21" cy="15" r="3" fill="#b2dfdb"></svg:circle><svg:circle cx="17" cy="23" r="3" fill="#b2dfdb"></svg:circle><svg:circle cx="27" cy="27" r="3" fill="#b2dfdb"></svg:circle>`,
})
export class MaterialIconThemeFolderClusterOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderCobolIcon],svg[material-icon-theme-folder-cobol-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#0288d1" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#b3e5fc" d="M23.448 10.106a10 10 0 0 0-2.896 0l-.634 1.653a8.5 8.5 0 0 0-2.273.942l-1.618-.72a10 10 0 0 0-2.047 2.046l.721 1.618a8.5 8.5 0 0 0-.942 2.273l-1.653.634a10 10 0 0 0 0 2.896l1.653.634a8.5 8.5 0 0 0 .942 2.273l-.72 1.618a10 10 0 0 0 2.046 2.047l1.618-.721a8.5 8.5 0 0 0 2.273.942l.634 1.653a10 10 0 0 0 2.896 0l.634-1.653a8.5 8.5 0 0 0 2.273-.942l1.618.72a10 10 0 0 0 2.047-2.046l-.721-1.618a8.5 8.5 0 0 0 .942-2.273l1.653-.634a10 10 0 0 0 0-2.896l-1.653-.634a8.5 8.5 0 0 0-.942-2.273l.72-1.618a10 10 0 0 0-2.046-2.047l-1.618.721a8.5 8.5 0 0 0-2.273-.942ZM22 13.592A6.408 6.408 0 1 1 15.592 20A6.41 6.41 0 0 1 22 13.592"></svg:path><svg:path fill="#b3e5fc" d="M24.607 22.602a3.62 3.62 0 1 1-.006-5.118l.006.006l-1.28 1.278a1.81 1.81 0 1 0-.004 2.56l.004-.004Z"></svg:path>`,
})
export class MaterialIconThemeFolderCobolIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderCobolOpenIcon],svg[material-icon-theme-folder-cobol-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#0288d1" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#b3e5fc" d="M23.448 10.106a10 10 0 0 0-2.896 0l-.634 1.653a8.5 8.5 0 0 0-2.273.942l-1.618-.72a10 10 0 0 0-2.047 2.046l.721 1.618a8.5 8.5 0 0 0-.942 2.273l-1.653.634a10 10 0 0 0 0 2.896l1.653.634a8.5 8.5 0 0 0 .942 2.273l-.72 1.618a10 10 0 0 0 2.046 2.047l1.618-.721a8.5 8.5 0 0 0 2.273.942l.634 1.653a10 10 0 0 0 2.896 0l.634-1.653a8.5 8.5 0 0 0 2.273-.942l1.618.72a10 10 0 0 0 2.047-2.046l-.721-1.618a8.5 8.5 0 0 0 .942-2.273l1.653-.634a10 10 0 0 0 0-2.896l-1.653-.634a8.5 8.5 0 0 0-.942-2.273l.72-1.618a10 10 0 0 0-2.046-2.047l-1.618.721a8.5 8.5 0 0 0-2.273-.942ZM22 13.592A6.408 6.408 0 1 1 15.592 20A6.41 6.41 0 0 1 22 13.592"></svg:path><svg:path fill="#b3e5fc" d="M24.607 22.602a3.62 3.62 0 1 1-.006-5.118l.006.006l-1.28 1.278a1.81 1.81 0 1 0-.004 2.56l.004-.004Z"></svg:path>`,
})
export class MaterialIconThemeFolderCobolOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderCommandIcon],svg[material-icon-theme-folder-command-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#03a9f4" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#b3e5fc" d="M28 28a2 2 0 0 0 2-2V16a2 2 0 0 0-2-2H12a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2H8v2h24v-2Zm0-2h-8v-2h8Zm-16-8.264l1.014-1.724L20.037 20v2l-7.023 4L12 24.275l5.558-3.27Z"></svg:path>`,
})
export class MaterialIconThemeFolderCommandIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderCommandOpenIcon],svg[material-icon-theme-folder-command-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#03a9f4" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#b3e5fc" d="M28 28a2 2 0 0 0 2-2V16a2 2 0 0 0-2-2H12a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2H8v2h24v-2Zm0-2h-8v-2h8Zm-16-8.264l1.014-1.724L20.037 20v2l-7.023 4L12 24.275l5.558-3.27Z"></svg:path>`,
})
export class MaterialIconThemeFolderCommandOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderComponentsIcon],svg[material-icon-theme-folder-components-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#c0ca33" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#f0f4c3" d="M12 20h8v8h-8zm10 0h8v8h-8zM12 10h8v8h-8zm8.343 4L26 8.343L31.657 14L26 19.657z"></svg:path>`,
})
export class MaterialIconThemeFolderComponentsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderComponentsOpenIcon],svg[material-icon-theme-folder-components-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#c0ca33" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#f0f4c3" d="M12 20h8v8h-8zm10 0h8v8h-8zM12 10h8v8h-8zm8.343 4L26 8.343L31.657 14L26 19.657z"></svg:path>`,
})
export class MaterialIconThemeFolderComponentsOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderConfigIcon],svg[material-icon-theme-folder-config-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#00acc1" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#80deea" d="M23.001 24.15A3.195 3.195 0 0 1 19.762 21a3.24 3.24 0 1 1 3.239 3.15m6.875-2.277a7 7 0 0 0 .064-.874a8 8 0 0 0-.064-.9l1.951-1.467a.446.446 0 0 0 .113-.576l-1.853-3.112a.46.46 0 0 0-.564-.199l-2.302.9a6.8 6.8 0 0 0-1.565-.882l-.342-2.385A.464.464 0 0 0 24.85 12h-3.7a.464.464 0 0 0-.463.378l-.341 2.385a6.8 6.8 0 0 0-1.563.881l-2.304-.899a.46.46 0 0 0-.564.198l-1.851 3.113a.436.436 0 0 0 .112.576l1.95 1.468a8 8 0 0 0-.064.9a7 7 0 0 0 .064.873l-1.95 1.493a.436.436 0 0 0-.112.576l1.85 3.115a.47.47 0 0 0 .565.198l2.304-.91a6.4 6.4 0 0 0 1.563.892l.342 2.385a.464.464 0 0 0 .463.378h3.7a.464.464 0 0 0 .464-.378l.34-2.385a6.8 6.8 0 0 0 1.566-.891l2.302.909a.475.475 0 0 0 .566-.198l1.85-3.115a.446.446 0 0 0-.112-.576Z"></svg:path>`,
})
export class MaterialIconThemeFolderConfigIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderConfigOpenIcon],svg[material-icon-theme-folder-config-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#00acc1" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#80deea" d="M23.001 24.15A3.195 3.195 0 0 1 19.762 21a3.24 3.24 0 1 1 3.239 3.15m6.875-2.277a7 7 0 0 0 .064-.874a8 8 0 0 0-.064-.9l1.951-1.467a.446.446 0 0 0 .113-.576l-1.853-3.112a.46.46 0 0 0-.564-.199l-2.302.9a6.8 6.8 0 0 0-1.565-.882l-.342-2.385A.464.464 0 0 0 24.85 12h-3.7a.464.464 0 0 0-.463.378l-.341 2.385a6.8 6.8 0 0 0-1.563.881l-2.304-.899a.46.46 0 0 0-.564.198l-1.851 3.113a.436.436 0 0 0 .112.576l1.95 1.468a8 8 0 0 0-.064.9a7 7 0 0 0 .064.873l-1.95 1.493a.436.436 0 0 0-.112.576l1.85 3.115a.47.47 0 0 0 .565.198l2.304-.91a6.4 6.4 0 0 0 1.563.892l.342 2.385a.464.464 0 0 0 .463.378h3.7a.464.464 0 0 0 .464-.378l.34-2.385a6.8 6.8 0 0 0 1.566-.891l2.302.909a.475.475 0 0 0 .566-.198l1.85-3.115a.446.446 0 0 0-.112-.576Z"></svg:path>`,
})
export class MaterialIconThemeFolderConfigOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderConnectionIcon],svg[material-icon-theme-folder-connection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#00acc1" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#b2ebf2" d="M30.868 15.821a1.81 1.81 0 0 1 .064 2.566q-.031.033-.064.064l-2.642 2.63l-7.358-7.325l2.642-2.63a1.83 1.83 0 0 1 2.577-.063q.033.031.064.064l1.698 1.69L30.679 10L32 11.314l-2.83 2.818zm-5.471 5.445l-1.322-1.314l-2.64 2.63l-1.981-1.974l2.64-2.627l-1.32-1.316l-2.642 2.63l-1.415-1.314l-2.64 2.627a1.81 1.81 0 0 0-.064 2.566q.03.033.064.064l1.697 1.69L12 28.683L13.322 30l3.774-3.756l1.697 1.69a1.83 1.83 0 0 0 2.578.063q.033-.031.064-.064l2.64-2.628l-1.32-1.315Z"></svg:path>`,
})
export class MaterialIconThemeFolderConnectionIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderConnectionOpenIcon],svg[material-icon-theme-folder-connection-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#00acc1" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#b2ebf2" d="M30.868 15.821a1.81 1.81 0 0 1 .064 2.566q-.031.033-.064.064l-2.642 2.63l-7.358-7.325l2.642-2.63a1.83 1.83 0 0 1 2.577-.063q.033.031.064.064l1.698 1.69L30.679 10L32 11.314l-2.83 2.818zm-5.471 5.445l-1.322-1.314l-2.64 2.63l-1.981-1.974l2.64-2.627l-1.32-1.316l-2.642 2.63l-1.415-1.314l-2.64 2.627a1.81 1.81 0 0 0-.064 2.566q.03.033.064.064l1.697 1.69L12 28.683L13.322 30l3.774-3.756l1.697 1.69a1.83 1.83 0 0 0 2.578.063q.033-.031.064-.064l2.64-2.628l-1.32-1.315Z"></svg:path>`,
})
export class MaterialIconThemeFolderConnectionOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderConsoleIcon],svg[material-icon-theme-folder-console-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#8bc34a" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#dcedc8" d="M26 14H16a4.533 4.533 0 0 0-4.498 3.971l-1.483 9.276A2.45 2.45 0 0 0 12.45 30a2.45 2.45 0 0 0 1.96-.98L17 26h8l2.59 3.02a2.45 2.45 0 0 0 1.96.98a2.45 2.45 0 0 0 2.43-2.753l-1.482-9.276A4.533 4.533 0 0 0 26 14m-1 2a1 1 0 1 1-1 1a1 1 0 0 1 1-1m-5 4h-2v2h-2v-2h-2v-2h2v-2h2v2h2Zm3 0a1 1 0 1 1 1-1a1 1 0 0 1-1 1m2 2a1 1 0 1 1 1-1a1 1 0 0 1-1 1m2-2a1 1 0 1 1 1-1a1 1 0 0 1-1 1"></svg:path>`,
})
export class MaterialIconThemeFolderConsoleIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderConsoleOpenIcon],svg[material-icon-theme-folder-console-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#8bc34a" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#dcedc8" d="M26 14H16a4.533 4.533 0 0 0-4.498 3.971l-1.483 9.276A2.45 2.45 0 0 0 12.45 30a2.45 2.45 0 0 0 1.96-.98L17 26h8l2.59 3.02a2.45 2.45 0 0 0 1.96.98a2.45 2.45 0 0 0 2.43-2.753l-1.482-9.276A4.533 4.533 0 0 0 26 14m-1 2a1 1 0 1 1-1 1a1 1 0 0 1 1-1m-5 4h-2v2h-2v-2h-2v-2h2v-2h2v2h2Zm3 0a1 1 0 1 1 1-1a1 1 0 0 1-1 1m2 2a1 1 0 1 1 1-1a1 1 0 0 1-1 1m2-2a1 1 0 1 1 1-1a1 1 0 0 1-1 1"></svg:path>`,
})
export class MaterialIconThemeFolderConsoleOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderConstantIcon],svg[material-icon-theme-folder-constant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#607d8b" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#cfd8dc" d="M16 16h4v12h-4zm6 0h4v12h-4zm6 0h4v12h-4z"></svg:path>`,
})
export class MaterialIconThemeFolderConstantIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderConstantOpenIcon],svg[material-icon-theme-folder-constant-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#607d8b" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#cfd8dc" d="M16 16h4v12h-4zm6 0h4v12h-4zm6 0h4v12h-4z"></svg:path>`,
})
export class MaterialIconThemeFolderConstantOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderContainerIcon],svg[material-icon-theme-folder-container-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#0288d1" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#b3e5fc" d="m31.532 14.153l-8.085-4.048a1 1 0 0 0-.894 0l-8.085 4.048A1 1 0 0 0 14 15v10a1 1 0 0 0 .553.895l8.046 4.01a.9.9 0 0 0 .802 0l8.046-4.01A1 1 0 0 0 32 25V15a1 1 0 0 0-.468-.847M22 27.382l-6-3v-7.79l6 2.887Zm1-9.64l-5.73-2.759L23 12.118l5.73 2.865Zm7 6.64l-6 3v-7.903l6-2.888Z"></svg:path>`,
})
export class MaterialIconThemeFolderContainerIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderContainerOpenIcon],svg[material-icon-theme-folder-container-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#0288d1" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#b3e5fc" d="m31.532 14.153l-8.085-4.048a1 1 0 0 0-.894 0l-8.085 4.048A1 1 0 0 0 14 15v10a1 1 0 0 0 .553.895l8.046 4.01a.9.9 0 0 0 .802 0l8.046-4.01A1 1 0 0 0 32 25V15a1 1 0 0 0-.468-.847M22 27.382l-6-3v-7.79l6 2.887Zm1-9.64l-5.73-2.759L23 12.118l5.73 2.865Zm7 6.64l-6 3v-7.903l6-2.888Z"></svg:path>`,
})
export class MaterialIconThemeFolderContainerOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderContentIcon],svg[material-icon-theme-folder-content-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#00bcd4" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#b2ebf2" d="M22 18h6v2h-6zm0 4h6v2h-6z"></svg:path><svg:path fill="#b2ebf2" d="M10 15v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V15a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1m20 11H20V16h10Z"></svg:path>`,
})
export class MaterialIconThemeFolderContentIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderContentOpenIcon],svg[material-icon-theme-folder-content-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#00bcd4" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#b2ebf2" d="M22 18h6v2h-6zm0 4h6v2h-6z"></svg:path><svg:path fill="#b2ebf2" d="M10 15v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V15a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1m20 11H20V16h10Z"></svg:path>`,
})
export class MaterialIconThemeFolderContentOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderContextIcon],svg[material-icon-theme-folder-context-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#00897b" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#b2dfdb" d="M30 22v-2a2 2 0 0 0-2-2h-6v-2h2v-6h-6v6h2v2h-6a2 2 0 0 0-2 2v2h-2v6h6v-6h-2v-2h6v2h-2v6h6v-6h-2v-2h6v2h-2v6h6v-6Z"></svg:path>`,
})
export class MaterialIconThemeFolderContextIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderContextOpenIcon],svg[material-icon-theme-folder-context-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#00897b" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#b2dfdb" d="M30 22v-2a2 2 0 0 0-2-2h-6v-2h2v-6h-6v6h2v2h-6a2 2 0 0 0-2 2v2h-2v6h6v-6h-2v-2h6v2h-2v6h6v-6h-2v-2h6v2h-2v6h6v-6Z"></svg:path>`,
})
export class MaterialIconThemeFolderContextOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderContractIcon],svg[material-icon-theme-folder-contract-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#448aff" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#bbdefb" d="M24.368 20.368a.947.947 0 0 0-.044 1.339l.044.044a.98.98 0 0 0 1.382 0a4.87 4.87 0 0 0 0-6.883l-3.446-3.447a4.867 4.867 0 0 0-6.883 6.882l1.449 1.452a6.7 6.7 0 0 1 .39-2.356l-.457-.468a2.903 2.903 0 0 1-.022-4.105l.022-.023a2.903 2.903 0 0 1 4.106-.02l.021.02l3.438 3.437a2.903 2.903 0 0 1 .022 4.106zm-2.746-4.128a.98.98 0 0 0-1.383 0a4.87 4.87 0 0 0 0 6.883l3.448 3.447a4.867 4.867 0 0 0 6.892-6.873l-.01-.01l-1.45-1.451a6.8 6.8 0 0 1-.39 2.366l.458.456a2.903 2.903 0 0 1 .024 4.105l-.024.025a2.903 2.903 0 0 1-4.106.022l-.022-.022l-3.437-3.437a2.903 2.903 0 0 1-.023-4.106l.023-.022a.947.947 0 0 0 .043-1.34q-.02-.022-.043-.043"></svg:path>`,
})
export class MaterialIconThemeFolderContractIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderContractOpenIcon],svg[material-icon-theme-folder-contract-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#448aff" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#bbdefb" d="M24.368 20.368a.947.947 0 0 0-.044 1.339l.044.044a.98.98 0 0 0 1.382 0a4.87 4.87 0 0 0 0-6.883l-3.446-3.447a4.867 4.867 0 0 0-6.883 6.882l1.449 1.452a6.7 6.7 0 0 1 .39-2.356l-.457-.468a2.903 2.903 0 0 1-.022-4.105l.022-.023a2.903 2.903 0 0 1 4.106-.02l.021.02l3.438 3.437a2.903 2.903 0 0 1 .022 4.106zm-2.746-4.128a.98.98 0 0 0-1.383 0a4.87 4.87 0 0 0 0 6.883l3.448 3.447a4.867 4.867 0 0 0 6.892-6.873l-.01-.01l-1.45-1.451a6.8 6.8 0 0 1-.39 2.366l.458.456a2.903 2.903 0 0 1 .024 4.105l-.024.025a2.903 2.903 0 0 1-4.106.022l-.022-.022l-3.437-3.437a2.903 2.903 0 0 1-.023-4.106l.023-.022a.947.947 0 0 0 .043-1.34q-.02-.022-.043-.043"></svg:path>`,
})
export class MaterialIconThemeFolderContractOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderControllerIcon],svg[material-icon-theme-folder-controller-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ffc107" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#fff9c4" d="M23.001 24.15A3.195 3.195 0 0 1 19.762 21a3.24 3.24 0 1 1 3.239 3.15m6.875-2.277a7 7 0 0 0 .064-.874a8 8 0 0 0-.064-.9l1.951-1.467a.446.446 0 0 0 .113-.576l-1.853-3.112a.46.46 0 0 0-.564-.199l-2.302.9a6.8 6.8 0 0 0-1.565-.882l-.342-2.385A.464.464 0 0 0 24.85 12h-3.7a.464.464 0 0 0-.463.378l-.341 2.385a6.8 6.8 0 0 0-1.563.881l-2.304-.899a.46.46 0 0 0-.564.198l-1.851 3.113a.436.436 0 0 0 .112.576l1.95 1.468a8 8 0 0 0-.064.9a7 7 0 0 0 .064.873l-1.95 1.493a.436.436 0 0 0-.112.576l1.85 3.115a.47.47 0 0 0 .565.198l2.304-.91a6.4 6.4 0 0 0 1.563.892l.342 2.385a.464.464 0 0 0 .463.378h3.7a.464.464 0 0 0 .464-.378l.34-2.385a6.8 6.8 0 0 0 1.566-.891l2.302.909a.475.475 0 0 0 .566-.198l1.85-3.115a.446.446 0 0 0-.112-.576Z"></svg:path>`,
})
export class MaterialIconThemeFolderControllerIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderControllerOpenIcon],svg[material-icon-theme-folder-controller-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ffc107" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#fff9c4" d="M23.057 23.715a3.077 3.077 0 0 1-3.077-3.078a3.077 3.077 0 1 1 3.077 3.078m6.532-2.224a7 7 0 0 0 .062-.854a8 8 0 0 0-.062-.878l1.855-1.434a.444.444 0 0 0 .107-.562l-1.76-3.04a.43.43 0 0 0-.536-.195l-2.188.88a6.4 6.4 0 0 0-1.487-.863l-.325-2.329a.444.444 0 0 0-.44-.37h-3.516a.444.444 0 0 0-.44.37l-.324 2.33a6.4 6.4 0 0 0-1.486.86l-2.189-.878a.43.43 0 0 0-.536.193l-1.759 3.042a.433.433 0 0 0 .107.562l1.853 1.434a8 8 0 0 0-.061.88a7 7 0 0 0 .061.852l-1.853 1.458a.433.433 0 0 0-.107.563l1.759 3.043a.44.44 0 0 0 .536.193l2.19-.888a6 6 0 0 0 1.485.87l.325 2.33a.444.444 0 0 0 .44.37h3.516a.444.444 0 0 0 .44-.37l.324-2.33a6.4 6.4 0 0 0 1.487-.87l2.188.888a.445.445 0 0 0 .537-.193l1.757-3.043a.444.444 0 0 0-.105-.563Z"></svg:path>`,
})
export class MaterialIconThemeFolderControllerOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderCoreIcon],svg[material-icon-theme-folder-core-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#1976d2" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#bbdefb" d="M18 14v10h10V14Zm8 8h-6v-6h6ZM14 12h2v-2a2 2 0 0 0-2 2m4-2h2v2h-2zm4 0h2v2h-2zm4 0h2v2h-2zm4 0v2h2a2 2 0 0 0-2-2m0 4h2v2h-2zm0 4h2v2h-2zm0 4h2v2h-2zm0 6a2 2 0 0 0 2-2h-2Zm-4-2h2v2h-2zm-4 0h2v2h-2zm-4 0h2v2h-2zm-2 2v-2h-2a2 2 0 0 0 2 2m-2-6h2v2h-2zm0-4h2v2h-2zm0-4h2v2h-2z"></svg:path>`,
})
export class MaterialIconThemeFolderCoreIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderCoreOpenIcon],svg[material-icon-theme-folder-core-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#1976d2" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#bbdefb" d="M18 14v10h10V14Zm8 8h-6v-6h6ZM14 12h2v-2a2 2 0 0 0-2 2m4-2h2v2h-2zm4 0h2v2h-2zm4 0h2v2h-2zm4 0v2h2a2 2 0 0 0-2-2m0 4h2v2h-2zm0 4h2v2h-2zm0 4h2v2h-2zm0 6a2 2 0 0 0 2-2h-2Zm-4-2h2v2h-2zm-4 0h2v2h-2zm-4 0h2v2h-2zm-2 2v-2h-2a2 2 0 0 0 2 2m-2-6h2v2h-2zm0-4h2v2h-2zm0-4h2v2h-2z"></svg:path>`,
})
export class MaterialIconThemeFolderCoreOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderCoverageIcon],svg[material-icon-theme-folder-coverage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#26a69a" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#b2dfdb" d="m23.444 23.265l-3.11-3.156l1.095-1.112l2.015 2.035l5.127-5.2l1.096 1.12M25 10l-7 4v4.53A9.8 9.8 0 0 0 25 28a9.8 9.8 0 0 0 7-9.47V14Z"></svg:path>`,
})
export class MaterialIconThemeFolderCoverageIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderCoverageOpenIcon],svg[material-icon-theme-folder-coverage-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#26a69a" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#b2dfdb" d="m23.444 23.265l-3.11-3.156l1.095-1.112l2.015 2.035l5.127-5.2l1.096 1.12M25 10l-7 4v4.53A9.8 9.8 0 0 0 25 28a9.8 9.8 0 0 0 7-9.47V14Z"></svg:path>`,
})
export class MaterialIconThemeFolderCoverageOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderCssIcon],svg[material-icon-theme-folder-css-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="materialIconThemeFolderCss0" fill="#d1c4e9" d="M14 20v-2h-2v8h2v-2h2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm10 0v-2a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v2c0 .839.357 2.34 2.746 2.966C21.438 23.15 22 23.612 22 24v2h-2v-2h-2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a3.345 3.345 0 0 0-2.746-2.967C20 20.703 20 20.193 20 20v-2h2v2Zm8 0v-2a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v2c0 .839.357 2.34 2.746 2.966C29.438 23.15 30 23.612 30 24v2h-2v-2h-2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a3.345 3.345 0 0 0-2.746-2.967C28 20.703 28 20.193 28 20v-2h2v2Z"></svg:path></svg:defs><svg:path fill="#7e57c2" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:use href="#materialIconThemeFolderCss0"></svg:use><svg:use href="#materialIconThemeFolderCss0"></svg:use>`,
})
export class MaterialIconThemeFolderCssIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderCssOpenIcon],svg[material-icon-theme-folder-css-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="materialIconThemeFolderCssOpen0" fill="#d1c4e9" d="M14 20v-2h-2v8h2v-2h2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm10 0v-2a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v2c0 .839.357 2.34 2.746 2.966C21.437 23.15 22 23.612 22 24v2h-2v-2h-2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a3.345 3.345 0 0 0-2.746-2.967C20 20.703 20 20.193 20 20v-2h2v2Zm8 0v-2a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v2c0 .839.357 2.34 2.746 2.966C29.437 23.15 30 23.612 30 24v2h-2v-2h-2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a3.345 3.345 0 0 0-2.746-2.967C28 20.703 28 20.193 28 20v-2h2v2Z"></svg:path></svg:defs><svg:path fill="#7e57c2" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:use href="#materialIconThemeFolderCssOpen0"></svg:use><svg:use href="#materialIconThemeFolderCssOpen0"></svg:use>`,
})
export class MaterialIconThemeFolderCssOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderCustomIcon],svg[material-icon-theme-folder-custom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ff7043" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#ffccbc" d="M26.017 24L22 28h10v-4zm-2.724-9.293L14 24v4h4l9.293-9.293a1 1 0 0 0 0-1.414l-2.586-2.586a1 1 0 0 0-1.414 0"></svg:path>`,
})
export class MaterialIconThemeFolderCustomIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderCustomOpenIcon],svg[material-icon-theme-folder-custom-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ff7043" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#ffccbc" d="M26.017 24L22 28h10v-4zm-2.724-9.293L14 24v4h4l9.293-9.293a1 1 0 0 0 0-1.414l-2.586-2.586a1 1 0 0 0-1.414 0"></svg:path>`,
})
export class MaterialIconThemeFolderCustomOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderCypressIcon],svg[material-icon-theme-folder-cypress-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#009688" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#b2dfdb" d="M22.999 10A8.994 8.994 0 0 0 14 18.99V19a8.994 8.994 0 0 0 8.988 9H23a8.994 8.994 0 0 0 9-8.988V19a9.017 9.017 0 0 0-9.001-9m-4.222 10.931a1.41 1.41 0 0 0 1.242.557a1.9 1.9 0 0 0 .755-.133a6.4 6.4 0 0 0 .817-.425l.916 1.31a3.9 3.9 0 0 1-2.585.916a4.05 4.05 0 0 1-2.028-.49a3.3 3.3 0 0 1-1.31-1.44a5.04 5.04 0 0 1-.457-2.194a5.2 5.2 0 0 1 .456-2.193a3.46 3.46 0 0 1 1.312-1.503a3.6 3.6 0 0 1 1.996-.525a3.7 3.7 0 0 1 1.407.23a4.2 4.2 0 0 1 1.21.72l-.915 1.243a3.6 3.6 0 0 0-.754-.427a2.1 2.1 0 0 0-.785-.131c-1.112 0-1.669.852-1.669 2.585a3.24 3.24 0 0 0 .393 1.899Zm9 2.03a4.7 4.7 0 0 1-1.505 2.323a4.9 4.9 0 0 1-2.75.95l-.228-1.537a3.74 3.74 0 0 0 1.67-.526a4 4 0 0 0 .391-.391l-2.716-8.707h2.257l1.572 6.513l1.67-6.513h2.193Z"></svg:path>`,
})
export class MaterialIconThemeFolderCypressIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderCypressOpenIcon],svg[material-icon-theme-folder-cypress-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#009688" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#b2dfdb" d="M22.999 10A8.994 8.994 0 0 0 14 18.99V19a8.994 8.994 0 0 0 8.988 9H23a8.994 8.994 0 0 0 9-8.988V19a9.017 9.017 0 0 0-9.001-9m-4.222 10.931a1.41 1.41 0 0 0 1.242.557a1.9 1.9 0 0 0 .755-.133a6.4 6.4 0 0 0 .817-.425l.916 1.31a3.9 3.9 0 0 1-2.585.916a4.05 4.05 0 0 1-2.028-.49a3.3 3.3 0 0 1-1.31-1.44a5.04 5.04 0 0 1-.457-2.194a5.2 5.2 0 0 1 .456-2.193a3.46 3.46 0 0 1 1.312-1.503a3.6 3.6 0 0 1 1.996-.525a3.7 3.7 0 0 1 1.407.23a4.2 4.2 0 0 1 1.21.72l-.915 1.243a3.6 3.6 0 0 0-.754-.427a2.1 2.1 0 0 0-.785-.131c-1.112 0-1.669.852-1.669 2.585a3.24 3.24 0 0 0 .393 1.899Zm9 2.03a4.7 4.7 0 0 1-1.505 2.323a4.9 4.9 0 0 1-2.75.95l-.228-1.537a3.74 3.74 0 0 0 1.67-.526a4 4 0 0 0 .391-.391l-2.716-8.707h2.257l1.572 6.513l1.67-6.513h2.193Z"></svg:path>`,
})
export class MaterialIconThemeFolderCypressOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderDartIcon],svg[material-icon-theme-folder-dart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2196f3" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#bbdefb" d="M23.037 14.036L15.999 16l-1.948 7.036c-.147.533.058 1.273.458 1.654a486 486 0 0 1 5.49 5.31H26v-4h4v-6l-5.306-5.513c-.383-.397-1.125-.599-1.657-.45z"></svg:path>`,
})
export class MaterialIconThemeFolderDartIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderDartOpenIcon],svg[material-icon-theme-folder-dart-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2196f3" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#bbdefb" d="M23.037 14.036L15.999 16l-1.948 7.036c-.147.533.058 1.273.458 1.654a486 486 0 0 1 5.49 5.31H26v-4h4v-6l-5.306-5.513c-.383-.397-1.125-.599-1.657-.45z"></svg:path>`,
})
export class MaterialIconThemeFolderDartOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderDatabaseIcon],svg[material-icon-theme-folder-database-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ffca28" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:ellipse cx="24" cy="14" fill="#ffecb3" rx="8" ry="4"></svg:ellipse><svg:path fill="#ffecb3" d="M24 26c-4.418 0-8-1.79-8-4v4c0 2.21 3.582 4 8 4s8-1.79 8-4v-4c0 2.21-3.582 4-8 4"></svg:path><svg:path fill="#ffecb3" d="M24 20c-4.418 0-8-1.79-8-4v4c0 2.21 3.582 4 8 4s8-1.79 8-4v-4c0 2.21-3.582 4-8 4"></svg:path>`,
})
export class MaterialIconThemeFolderDatabaseIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderDatabaseOpenIcon],svg[material-icon-theme-folder-database-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ffca28" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:ellipse cx="24" cy="14" fill="#ffecb3" rx="8" ry="4"></svg:ellipse><svg:path fill="#ffecb3" d="M24 26c-4.418 0-8-1.79-8-4v4c0 2.21 3.582 4 8 4s8-1.79 8-4v-4c0 2.21-3.582 4-8 4"></svg:path><svg:path fill="#ffecb3" d="M24 20c-4.418 0-8-1.79-8-4v4c0 2.21 3.582 4 8 4s8-1.79 8-4v-4c0 2.21-3.582 4-8 4"></svg:path>`,
})
export class MaterialIconThemeFolderDatabaseOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderDebugIcon],svg[material-icon-theme-folder-debug-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#f9a825" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#fff9c4" d="M32 18v-2h-2.347a6 6 0 0 0-1.717-2.522L30 11.414L28.586 10l-2.412 2.412a5.94 5.94 0 0 0-4.347 0L19.414 10L18 11.414l2.064 2.064A6 6 0 0 0 18.347 16H16v2h2v2h-2v2h2v2h-2v2h2.349a5.992 5.992 0 0 0 11.302 0H32v-2h-2v-2h2v-2h-2v-2Zm-6 8h-4v-2h4Zm0-6h-4v-2h4Z"></svg:path>`,
})
export class MaterialIconThemeFolderDebugIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderDebugOpenIcon],svg[material-icon-theme-folder-debug-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#f9a825" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#fff9c4" d="M32 18v-2h-2.347a6 6 0 0 0-1.717-2.522L30 11.414L28.586 10l-2.412 2.412a5.94 5.94 0 0 0-4.347 0L19.414 10L18 11.414l2.064 2.064A6 6 0 0 0 18.347 16H16v2h2v2h-2v2h2v2h-2v2h2.349a5.992 5.992 0 0 0 11.302 0H32v-2h-2v-2h2v-2h-2v-2Zm-6 8h-4v-2h4Zm0-6h-4v-2h4Z"></svg:path>`,
})
export class MaterialIconThemeFolderDebugOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderDecoratorsIcon],svg[material-icon-theme-folder-decorators-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ab47bc" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#e1bee7" d="M23.66 30a7.8 7.8 0 0 1-3.737-.929a7.06 7.06 0 0 1-2.81-2.784a9.2 9.2 0 0 1-1.07-4.655a18.3 18.3 0 0 1 .863-5.874a12.6 12.6 0 0 1 2.349-4.267a10.1 10.1 0 0 1 3.392-2.604A9.3 9.3 0 0 1 26.607 8a5.22 5.22 0 0 1 4.101 1.455A5.64 5.64 0 0 1 32 13.347a5.4 5.4 0 0 1-.069.832q-.07.443-.153.914l-1.611 7.97h-2.308l-.029-1.006h-.11c-.464.258-.96.665-1.488.96a3.96 3.96 0 0 1-1.96.444a3.03 3.03 0 0 1-2.098-.818a2.79 2.79 0 0 1-.904-2.175a4.34 4.34 0 0 1 1.877-3.781a13 13 0 0 1 5.907-1.76a6 6 0 0 0 .167-1.22a3.94 3.94 0 0 0-.611-2.258a2.71 2.71 0 0 0-2.39-.9a4.9 4.9 0 0 0-2.42.692a7.7 7.7 0 0 0-2.266 2.051a10.9 10.9 0 0 0-1.682 3.367a15.3 15.3 0 0 0-.638 4.641a7.05 7.05 0 0 0 .721 3.366a5 5 0 0 0 1.864 2.009a4.67 4.67 0 0 0 2.39.665a4.4 4.4 0 0 0 1.668-.29a6.2 6.2 0 0 0 1.418-.818l1.279 2.272a7.3 7.3 0 0 1-2.21 1.122A9 9 0 0 1 23.66 30m2.018-9.056a2.8 2.8 0 0 0 1.04-.21a4.8 4.8 0 0 0 1.04-.574l.56-2.742a6.8 6.8 0 0 0-2.99.951a1.87 1.87 0 0 0-.772 1.512a1 1 0 0 0 .31.783a1.16 1.16 0 0 0 .812.28"></svg:path>`,
})
export class MaterialIconThemeFolderDecoratorsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderDecoratorsOpenIcon],svg[material-icon-theme-folder-decorators-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ab47bc" d="M24.667 27.333h-20A2.667 2.667 0 0 1 2 24.667v-16A2.657 2.657 0 0 1 4.648 6h8.019l2.666 2.667h9.334a2.68 2.68 0 0 1 2.666 2.666H4.667v13.334L7.52 14h22.76l-3.04 11.333a2.67 2.67 0 0 1-2.573 2"></svg:path><svg:path fill="#e1bee7" d="M23.66 30a7.8 7.8 0 0 1-3.737-.929a7.06 7.06 0 0 1-2.81-2.784a9.2 9.2 0 0 1-1.07-4.655a18.3 18.3 0 0 1 .863-5.874a12.6 12.6 0 0 1 2.349-4.267a10.1 10.1 0 0 1 3.392-2.604A9.3 9.3 0 0 1 26.607 8a5.22 5.22 0 0 1 4.101 1.455A5.64 5.64 0 0 1 32 13.347a5.4 5.4 0 0 1-.069.832q-.07.443-.153.914l-1.611 7.97h-2.308l-.029-1.006h-.11c-.464.258-.96.665-1.488.96a3.96 3.96 0 0 1-1.96.444a3.03 3.03 0 0 1-2.098-.818a2.79 2.79 0 0 1-.904-2.175a4.34 4.34 0 0 1 1.877-3.781a13 13 0 0 1 5.907-1.76a6 6 0 0 0 .167-1.22a3.94 3.94 0 0 0-.611-2.258a2.71 2.71 0 0 0-2.39-.9a4.9 4.9 0 0 0-2.42.692a7.7 7.7 0 0 0-2.266 2.051a10.9 10.9 0 0 0-1.682 3.367a15.3 15.3 0 0 0-.638 4.641a7.05 7.05 0 0 0 .721 3.366a5 5 0 0 0 1.864 2.009a4.67 4.67 0 0 0 2.39.665a4.4 4.4 0 0 0 1.668-.29a6.2 6.2 0 0 0 1.418-.818l1.279 2.272a7.3 7.3 0 0 1-2.21 1.122A9 9 0 0 1 23.66 30m2.018-9.056a2.8 2.8 0 0 0 1.04-.21a4.8 4.8 0 0 0 1.04-.574l.56-2.742a6.8 6.8 0 0 0-2.99.951a1.87 1.87 0 0 0-.772 1.512a1 1 0 0 0 .31.783a1.16 1.16 0 0 0 .812.28"></svg:path>`,
})
export class MaterialIconThemeFolderDecoratorsOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderDeltaIcon],svg[material-icon-theme-folder-delta-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ec407a" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#f8bbd0" d="M23 17.699L28.337 26H17.663zM23 14l-9 14h18z"></svg:path>`,
})
export class MaterialIconThemeFolderDeltaIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderDeltaOpenIcon],svg[material-icon-theme-folder-delta-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ec407a" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#f8bbd0" d="M23 17.699L28.337 26H17.663zM23 14l-9 14h18z"></svg:path>`,
})
export class MaterialIconThemeFolderDeltaOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderDesktopIcon],svg[material-icon-theme-folder-desktop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#039be5" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#b3e5fc" d="M30 12H14a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h6v2h-2v2h8v-2h-2v-2h6a2 2 0 0 0 2-2V14a2 2 0 0 0-2-2m0 12H14V14h16Z"></svg:path>`,
})
export class MaterialIconThemeFolderDesktopIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderDesktopOpenIcon],svg[material-icon-theme-folder-desktop-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#039be5" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#b3e5fc" d="M30 12H14a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h6v2h-2v2h8v-2h-2v-2h6a2 2 0 0 0 2-2V14a2 2 0 0 0-2-2m0 12H14V14h16Z"></svg:path>`,
})
export class MaterialIconThemeFolderDesktopOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderDirectiveIcon],svg[material-icon-theme-folder-directive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#f44336" d="m6.922 3.768l-.644-.536A1 1 0 0 0 5.638 3H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H7.562a1 1 0 0 1-.64-.232"></svg:path><svg:g fill="#ffcdd2"><svg:path d="m11.5 6.001l-1.5 2h3z"></svg:path><svg:path d="M11 7v2h1V7zm-1 3H8v1.001h2z"></svg:path><svg:path d="m9 9l-2 1.5L9 12zm2 3h1v2h-1Z"></svg:path><svg:path d="m10 13l1.5 2l1.5-2Zm3-3v1.001h2v-1Z"></svg:path><svg:path d="m14 9l2 1.5l-2 1.5Z"></svg:path></svg:g>`,
})
export class MaterialIconThemeFolderDirectiveIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderDirectiveOpenIcon],svg[material-icon-theme-folder-directive-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#f44336" d="M14.484 6H4.72a1 1 0 0 0-.949.684L2 12V5h12a1 1 0 0 0-1-1H7.562a1 1 0 0 1-.64-.232l-.644-.536A1 1 0 0 0 5.638 3H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h11l2.403-5.606A1 1 0 0 0 14.483 6"></svg:path><svg:g fill="#ffcdd2"><svg:path d="m11.5 6.001l-1.5 2h3z"></svg:path><svg:path d="M11 7v2h1V7zm-1 3H8v1.001h2z"></svg:path><svg:path d="m9 9l-2 1.5L9 12zm2 3h1v2h-1Z"></svg:path><svg:path d="m10 13l1.5 2l1.5-2Zm2.715-3v1.001H15v-1Z"></svg:path><svg:path d="m14 9l2 1.5l-2 1.5Z"></svg:path></svg:g>`,
})
export class MaterialIconThemeFolderDirectiveOpenIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderDistIcon],svg[material-icon-theme-folder-dist-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#e57373" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#ffcdd2" d="M30 14h-4v-2l-2-2h-4l-2 2v2h-4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V16a2 2 0 0 0-2-2m-10 0v-2h4v2Z"></svg:path>`,
})
export class MaterialIconThemeFolderDistIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderDistOpenIcon],svg[material-icon-theme-folder-dist-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#e57373" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#ffcdd2" d="M30 14h-4v-2l-2-2h-4l-2 2v2h-4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V16a2 2 0 0 0-2-2m-10 0v-2h4v2Z"></svg:path>`,
})
export class MaterialIconThemeFolderDistOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderDockerIcon],svg[material-icon-theme-folder-docker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#039be5" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#b3e5fc" d="M14 16h4v4h-4zm-6 0h4v4H8zm12 0h4v4h-4zm0-6h4v4h-4z"></svg:path><svg:path fill="#b3e5fc" d="M31.667 19.81a3.65 3.65 0 0 0-3.067-.377a4.6 4.6 0 0 0-1.667-2.945l-.333-.302l-.267.378a4.44 4.44 0 0 0-.667 2.793a5 5 0 0 0 .233 1.101l-.62 1.283A5.1 5.1 0 0 1 23.6 22H6a15.3 15.3 0 0 0 .865 4.757l.267.528v.076a8.22 8.22 0 0 0 7.6 4.38c6 0 10.934-2.945 13.268-9.288a3.605 3.605 0 0 0 3.8-2.039l.2-.377ZM12 28a2 2 0 1 1 2-2a2 2 0 0 1-2 2"></svg:path>`,
})
export class MaterialIconThemeFolderDockerIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderDockerOpenIcon],svg[material-icon-theme-folder-docker-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#039be5" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#b3e5fc" d="M14 16h4v4h-4zm-6 0h4v4H8zm12 0h4v4h-4zm0-6h4v4h-4z"></svg:path><svg:path fill="#b3e5fc" d="M31.667 19.81a3.65 3.65 0 0 0-3.067-.377a4.6 4.6 0 0 0-1.667-2.945l-.333-.302l-.267.378a4.44 4.44 0 0 0-.667 2.793a5 5 0 0 0 .233 1.101l-.62 1.283A5.1 5.1 0 0 1 23.6 22H6a15.3 15.3 0 0 0 .865 4.757l.267.528v.076a8.22 8.22 0 0 0 7.6 4.38c6 0 10.934-2.945 13.268-9.288a3.605 3.605 0 0 0 3.8-2.039l.2-.377ZM12 28a2 2 0 1 1 2-2a2 2 0 0 1-2 2"></svg:path>`,
})
export class MaterialIconThemeFolderDockerOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderDocsIcon],svg[material-icon-theme-folder-docs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#0277bd" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#b3e5fc" d="M24 10h-7a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V16Zm0 16h-6v-2h6Zm4-4H18v-2h10Zm-4.828-5.172V12L28 16.828Z"></svg:path>`,
})
export class MaterialIconThemeFolderDocsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderDocsOpenIcon],svg[material-icon-theme-folder-docs-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#0277bd" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#b3e5fc" d="M24 10h-7a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V16Zm0 16h-6v-2h6Zm4-4H18v-2h10Zm-4.828-5.172V12L28 16.828Z"></svg:path>`,
})
export class MaterialIconThemeFolderDocsOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderDownloadIcon],svg[material-icon-theme-folder-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#4caf50" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#c8e6c9" d="M26 10v6h4l-7 8l-7-8h4v-6zm4 16v2H16v-2Z"></svg:path>`,
})
export class MaterialIconThemeFolderDownloadIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderDownloadOpenIcon],svg[material-icon-theme-folder-download-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#4caf50" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#c8e6c9" d="M26 10v6h4l-7 8l-7-8h4v-6zm4 16v2H16v-2Z"></svg:path>`,
})
export class MaterialIconThemeFolderDownloadOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderDrizzleIcon],svg[material-icon-theme-folder-drizzle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#4caf50" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#c8e6c9" d="m10.752 27.217l3.127-5.764a1.51 1.51 0 0 0-.573-2.034a1.45 1.45 0 0 0-1.995.586l-3.127 5.763a1.51 1.51 0 0 0 .573 2.034a1.44 1.44 0 0 0 .71.187a1.46 1.46 0 0 0 1.285-.772m10.305 0l3.127-5.764a1.51 1.51 0 0 0-.574-2.034a1.45 1.45 0 0 0-1.995.586l-3.127 5.763a1.51 1.51 0 0 0 .574 2.034a1.44 1.44 0 0 0 .709.187a1.46 1.46 0 0 0 1.286-.772m-2.896-5.21l3.326-5.76a1.507 1.507 0 0 0-.518-2.04a1.447 1.447 0 0 0-2.002.527l-3.326 5.76a1.51 1.51 0 0 0 .519 2.041a1.43 1.43 0 0 0 .74.206a1.46 1.46 0 0 0 1.261-.734m10.31 0l3.327-5.76a1.507 1.507 0 0 0-.518-2.04a1.447 1.447 0 0 0-2.002.527l-3.326 5.76a1.51 1.51 0 0 0 .518 2.041a1.43 1.43 0 0 0 .74.206a1.46 1.46 0 0 0 1.262-.734Z"></svg:path>`,
})
export class MaterialIconThemeFolderDrizzleIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderDrizzleOpenIcon],svg[material-icon-theme-folder-drizzle-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#4caf50" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#c8e6c9" d="m10.752 27.217l3.127-5.764a1.51 1.51 0 0 0-.573-2.034a1.45 1.45 0 0 0-1.995.586l-3.127 5.763a1.51 1.51 0 0 0 .573 2.034a1.44 1.44 0 0 0 .71.187a1.46 1.46 0 0 0 1.285-.772m10.305 0l3.127-5.764a1.51 1.51 0 0 0-.574-2.034a1.45 1.45 0 0 0-1.995.586l-3.127 5.763a1.51 1.51 0 0 0 .574 2.034a1.44 1.44 0 0 0 .709.187a1.46 1.46 0 0 0 1.286-.772m-2.896-5.21l3.326-5.76a1.507 1.507 0 0 0-.518-2.04a1.447 1.447 0 0 0-2.002.527l-3.326 5.76a1.51 1.51 0 0 0 .519 2.041a1.43 1.43 0 0 0 .74.206a1.46 1.46 0 0 0 1.261-.734m10.31 0l3.327-5.76a1.507 1.507 0 0 0-.518-2.04a1.447 1.447 0 0 0-2.002.527l-3.326 5.76a1.51 1.51 0 0 0 .518 2.041a1.43 1.43 0 0 0 .74.206a1.46 1.46 0 0 0 1.262-.734Z"></svg:path>`,
})
export class MaterialIconThemeFolderDrizzleOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderDumpIcon],svg[material-icon-theme-folder-dump-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#757575" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#bdbdbd" d="M26 12H15a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V16Zm-10 2h8v4h-8Zm6 12a3 3 0 1 1 3-3a2.996 2.996 0 0 1-3 3"></svg:path>`,
})
export class MaterialIconThemeFolderDumpIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderDumpOpenIcon],svg[material-icon-theme-folder-dump-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#757575" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#bdbdbd" d="M26 12H15a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V16Zm-10 2h8v4h-8Zm6 12a3 3 0 1 1 3-3a2.996 2.996 0 0 1-3 3"></svg:path>`,
})
export class MaterialIconThemeFolderDumpOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderElementIcon],svg[material-icon-theme-folder-element-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ab47bc" d="m13.84 7.54l-1.28-1.08A2 2 0 0 0 11.28 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.12a2 2 0 0 1-1.28-.46"></svg:path><svg:path fill="#e1bee7" d="m21.15 25.74l-8.3-5.2A1.8 1.8 0 0 1 12 19v-.98l9.15 5.72a1.6 1.6 0 0 0 1.7 0L32 18v1a1.8 1.8 0 0 1-.85 1.53l-8.3 5.21a1.6 1.6 0 0 1-1.7 0m0 4l-8.3-5.2A1.8 1.8 0 0 1 12 23v-.98l9.15 5.72a1.6 1.6 0 0 0 1.7 0L32 22v1a1.8 1.8 0 0 1-.85 1.53l-8.3 5.21a1.6 1.6 0 0 1-1.7 0m-.08-19.46L12 16l9.07 5.72c.56.37 1.29.37 1.85 0L31.99 16l-9.07-5.72a1.68 1.68 0 0 0-1.85 0"></svg:path>`,
})
export class MaterialIconThemeFolderElementIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderElementOpenIcon],svg[material-icon-theme-folder-element-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ab47bc" d="M29 12H9.4a2 2 0 0 0-1.9 1.4L4 24V10h24a2 2 0 0 0-2-2H15.1a2 2 0 0 1-1.3-.5l-1.2-1a2 2 0 0 0-1.3-.5H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.8-11.2A2 2 0 0 0 29 12"></svg:path><svg:path fill="#e1bee7" d="m21.15 25.74l-8.3-5.2A1.8 1.8 0 0 1 12 19v-.98l9.15 5.72a1.6 1.6 0 0 0 1.7 0L32 18v1a1.8 1.8 0 0 1-.85 1.53l-8.3 5.21a1.6 1.6 0 0 1-1.7 0m0 4l-8.3-5.2A1.8 1.8 0 0 1 12 23v-.98l9.15 5.72a1.6 1.6 0 0 0 1.7 0L32 22v1a1.8 1.8 0 0 1-.85 1.53l-8.3 5.21a1.6 1.6 0 0 1-1.7 0m-.08-19.46L12 16l9.07 5.73c.56.36 1.29.36 1.85 0L31.99 16l-9.07-5.72a1.68 1.68 0 0 0-1.85 0"></svg:path>`,
})
export class MaterialIconThemeFolderElementOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderEnumIcon],svg[material-icon-theme-folder-enum-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#26a69a" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#b2dfdb" d="M16 12v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V12a2 2 0 0 0-2-2H18a2 2 0 0 0-2 2m14 14H18v-4h12Zm0-6H18v-4h12Z"></svg:path>`,
})
export class MaterialIconThemeFolderEnumIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderEnumOpenIcon],svg[material-icon-theme-folder-enum-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#26a69a" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#b2dfdb" d="M16 12v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V12a2 2 0 0 0-2-2H18a2 2 0 0 0-2 2m14 14H18v-4h12Zm0-6H18v-4h12Z"></svg:path>`,
})
export class MaterialIconThemeFolderEnumOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderEnvironmentIcon],svg[material-icon-theme-folder-environment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#66bb6a" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#c8e6c9" d="m23 16l-3.749 5l2.85 3.798L20.5 26l-4.499-6L10 28h22Z"></svg:path>`,
})
export class MaterialIconThemeFolderEnvironmentIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderEnvironmentOpenIcon],svg[material-icon-theme-folder-environment-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#66bb6a" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#c8e6c9" d="m23 16l-3.749 5l2.85 3.798L20.5 26l-4.499-6L10 28h22Z"></svg:path>`,
})
export class MaterialIconThemeFolderEnvironmentOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderErrorIcon],svg[material-icon-theme-folder-error-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ef5350" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#ffcdd2" d="M25 14a7 7 0 1 0 7 7a7 7 0 0 0-7-7m1 2v6h-2v-6Zm-2 10v-2h2v2Z"></svg:path>`,
})
export class MaterialIconThemeFolderErrorIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderErrorOpenIcon],svg[material-icon-theme-folder-error-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ef5350" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#ffcdd2" d="M25 14a7 7 0 1 0 7 7a7 7 0 0 0-7-7m1 2v6h-2v-6Zm-2 10v-2h2v2Z"></svg:path>`,
})
export class MaterialIconThemeFolderErrorOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderEventIcon],svg[material-icon-theme-folder-event-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fbc02d" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#fff9c4" d="M24 30a2 2 0 0 0 2-2h-4a2 2 0 0 0 2 2m6-8v-5a5 5 0 0 0-4-4.9V12a2 2 0 0 0-4 0v.1a5 5 0 0 0-4 4.9v5l-2 2v2h16v-2Z"></svg:path>`,
})
export class MaterialIconThemeFolderEventIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderEventOpenIcon],svg[material-icon-theme-folder-event-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fbc02d" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#fff9c4" d="M24 30a2 2 0 0 0 2-2h-4a2 2 0 0 0 2 2m6-8v-5a5 5 0 0 0-4-4.9V12a2 2 0 0 0-4 0v.1a5 5 0 0 0-4 4.9v5l-2 2v2h16v-2Z"></svg:path>`,
})
export class MaterialIconThemeFolderEventOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderExamplesIcon],svg[material-icon-theme-folder-examples-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#009688" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#b2dfdb" d="M16 14v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V14a2 2 0 0 0-2-2H18a2 2 0 0 0-2 2m2 0h2a2 2 0 0 1-2 2Zm0 4a4 4 0 0 0 4-4h2a6.005 6.005 0 0 1-6 6Zm0 8l4-4l1.6 1.6L26 20l4 6Z"></svg:path>`,
})
export class MaterialIconThemeFolderExamplesIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderExamplesOpenIcon],svg[material-icon-theme-folder-examples-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#009688" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#b2dfdb" d="M16 14v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V14a2 2 0 0 0-2-2H18a2 2 0 0 0-2 2m2 0h2a2 2 0 0 1-2 2Zm0 4a4 4 0 0 0 4-4h2a6.005 6.005 0 0 1-6 6Zm0 8l4-4l1.6 1.6L26 20l4 6Z"></svg:path>`,
})
export class MaterialIconThemeFolderExamplesOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderExpoIcon],svg[material-icon-theme-folder-expo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#1976d2" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#bbdefb" d="M25.182 13.148c-.663-1.013-.82-1.148-2.17-1.148h-.032c-1.35 0-1.499.135-2.17 1.148C20.187 14.1 14 25.473 14 25.79a2.5 2.5 0 0 0 .545 1.513c.434.626 1.183.974 1.728.42c.37-.373 4.34-7.24 6.257-9.837a.575.575 0 0 1 .94 0c1.916 2.597 5.887 9.464 6.257 9.837c.545.554 1.294.204 1.728-.42A2.5 2.5 0 0 0 32 25.79c-.008-.317-6.195-11.699-6.818-12.642"></svg:path>`,
})
export class MaterialIconThemeFolderExpoIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderExpoOpenIcon],svg[material-icon-theme-folder-expo-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#1976d2" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#bbdefb" d="M25.182 13.148c-.663-1.013-.82-1.148-2.17-1.148h-.032c-1.35 0-1.499.135-2.17 1.148C20.187 14.1 14 25.473 14 25.79a2.5 2.5 0 0 0 .545 1.513c.434.626 1.183.974 1.728.42c.37-.373 4.34-7.24 6.257-9.837a.575.575 0 0 1 .94 0c1.916 2.597 5.887 9.464 6.257 9.837c.545.554 1.294.204 1.728-.42A2.5 2.5 0 0 0 32 25.79c-.008-.317-6.195-11.699-6.818-12.642"></svg:path>`,
})
export class MaterialIconThemeFolderExpoOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderExportIcon],svg[material-icon-theme-folder-export-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ff8a65" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#EFEBE9" fill-opacity=".949" d="M25 14a7 7 0 1 0 7 7a7 7 0 0 0-7-7m-5 8v-2h10v2Z"></svg:path>`,
})
export class MaterialIconThemeFolderExportIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderExportOpenIcon],svg[material-icon-theme-folder-export-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ff8a65" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#EFEBE9" fill-opacity=".949" d="M25 14a7 7 0 1 0 7 7a7 7 0 0 0-7-7m-5 8v-2h10v2Z"></svg:path>`,
})
export class MaterialIconThemeFolderExportOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderFastlaneIcon],svg[material-icon-theme-folder-fastlane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#1e88e5" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#e3f2fd" d="m15.508 21.618l1.272 3.936a1.456 1.456 0 0 0-.06 1.922a1.35 1.35 0 0 0 .937.486l.1.003a1.33 1.33 0 0 0 .894-.346a1.4 1.4 0 0 0 .207-.231a1.446 1.446 0 0 0-.307-1.972a1.36 1.36 0 0 0-.597-.256l-1.586-5.037a.16.16 0 0 0-.092-.101a.15.15 0 0 0-.134.007a1.92 1.92 0 0 1-2.059-.113a1.995 1.995 0 0 1-.423-2.72a1.84 1.84 0 0 1 2.088-.697a.16.16 0 0 0 .199-.102l.325-.95a.17.17 0 0 0-.007-.128a.16.16 0 0 0-.093-.084a3 3 0 0 0-.978-.167h-.039A3.215 3.215 0 0 0 12 18.296a3.3 3.3 0 0 0 1.321 2.698a3.08 3.08 0 0 0 2.187.624"></svg:path><svg:path fill="#e3f2fd" d="M15.802 17.146a1.35 1.35 0 0 0-1.787.535a1.45 1.45 0 0 0-.157 1.074a1.4 1.4 0 0 0 .622.875a1.33 1.33 0 0 0 .706.203a1.36 1.36 0 0 0 1.176-.685a1.47 1.47 0 0 0 .177-.971l4.14-3.149a.17.17 0 0 0 .065-.122a.17.17 0 0 0-.05-.13a2.09 2.09 0 0 1-.556-2.063a1.883 1.883 0 0 1 2.383-1.262a1.95 1.95 0 0 1 1.31 1.823a.16.16 0 0 0 .155.161l.983.02a.2.2 0 0 0 .114-.047a.17.17 0 0 0 .048-.117a3.34 3.34 0 0 0-.945-2.333A3.12 3.12 0 0 0 21.939 10a4 4 0 0 0-.293.014a3.14 3.14 0 0 0-2.162 1.182a3.4 3.4 0 0 0-.457 3.457Zm10.842 10.755a1.4 1.4 0 0 0 .736-.77a1.45 1.45 0 0 0-.005-1.083a1.38 1.38 0 0 0-.744-.763a1.3 1.3 0 0 0-1.047.005a1.4 1.4 0 0 0-.693.672l-5.12.014a.16.16 0 0 0-.123.06a.17.17 0 0 0-.033.135a2.08 2.08 0 0 1-.724 2a1.82 1.82 0 0 1-1.4.355a1.86 1.86 0 0 1-1.233-.773a2 2 0 0 1-.016-2.286a.17.17 0 0 0-.033-.226l-.778-.613a.15.15 0 0 0-.12-.032a.16.16 0 0 0-.105.065a3.36 3.36 0 0 0-.575 2.45a3.3 3.3 0 0 0 1.266 2.153a3.1 3.1 0 0 0 1.874.634a3.15 3.15 0 0 0 2.572-1.349a3.4 3.4 0 0 0 .545-1.264l4.01-.04a1.35 1.35 0 0 0 1.746.656"></svg:path><svg:path fill="#e3f2fd" d="m27.718 23.882l1.228-3.945a1.34 1.34 0 0 0 .824-.473a1.44 1.44 0 0 0 .328-1.026a1.366 1.366 0 0 0-2.729-.013a1.5 1.5 0 0 0 .06.553a1.4 1.4 0 0 0 .336.564l-1.603 5.027a.17.17 0 0 0 .016.14a.16.16 0 0 0 .115.075a1.952 1.952 0 0 1 .385 3.782a1.84 1.84 0 0 1-2.097-.692a.156.156 0 0 0-.217-.037l-.811.572a.16.16 0 0 0-.067.108a.17.17 0 0 0 .028.124A3.15 3.15 0 0 0 26.097 30a3.1 3.1 0 0 0 1.871-.63a3.36 3.36 0 0 0 1.165-3.667a3.23 3.23 0 0 0-1.415-1.82Z"></svg:path><svg:path fill="#e3f2fd" d="M31.845 17.545a3.15 3.15 0 0 0-5.177-1.459l-3.28-2.432a1.46 1.46 0 0 0-.193-.969a1.37 1.37 0 0 0-.857-.637a1.3 1.3 0 0 0-.308-.038h-.004a1.425 1.425 0 0 0-.003 2.847h.005a1.3 1.3 0 0 0 .631-.16l4.165 3.137a.16.16 0 0 0 .133.027a.16.16 0 0 0 .104-.089a1.98 1.98 0 0 1 1.735-1.178h.001a1.933 1.933 0 0 1 1.897 1.963a1.96 1.96 0 0 1-1.296 1.863a.166.166 0 0 0-.102.203l.28.98a.16.16 0 0 0 .079.098a.15.15 0 0 0 .123.011a3.2 3.2 0 0 0 1.867-1.64a3.4 3.4 0 0 0 .2-2.527"></svg:path>`,
})
export class MaterialIconThemeFolderFastlaneIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderFastlaneOpenIcon],svg[material-icon-theme-folder-fastlane-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#1e88e5" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#e3f2fd" d="m15.508 21.618l1.272 3.936a1.456 1.456 0 0 0-.06 1.922a1.35 1.35 0 0 0 .937.486l.1.003a1.33 1.33 0 0 0 .894-.346a1.4 1.4 0 0 0 .207-.231a1.446 1.446 0 0 0-.307-1.972a1.36 1.36 0 0 0-.597-.256l-1.586-5.037a.16.16 0 0 0-.092-.101a.15.15 0 0 0-.134.007a1.92 1.92 0 0 1-2.059-.113a1.995 1.995 0 0 1-.423-2.72a1.84 1.84 0 0 1 2.088-.697a.16.16 0 0 0 .199-.102l.325-.95a.17.17 0 0 0-.007-.128a.16.16 0 0 0-.093-.084a3 3 0 0 0-.978-.167h-.039A3.215 3.215 0 0 0 12 18.296a3.3 3.3 0 0 0 1.321 2.698a3.08 3.08 0 0 0 2.187.624"></svg:path><svg:path fill="#e3f2fd" d="M15.802 17.146a1.35 1.35 0 0 0-1.787.535a1.45 1.45 0 0 0-.157 1.074a1.4 1.4 0 0 0 .622.875a1.33 1.33 0 0 0 .706.203a1.36 1.36 0 0 0 1.176-.685a1.47 1.47 0 0 0 .177-.971l4.14-3.149a.17.17 0 0 0 .065-.122a.17.17 0 0 0-.05-.13a2.09 2.09 0 0 1-.556-2.063a1.883 1.883 0 0 1 2.383-1.262a1.95 1.95 0 0 1 1.31 1.823a.16.16 0 0 0 .155.161l.983.02a.2.2 0 0 0 .114-.047a.17.17 0 0 0 .048-.117a3.34 3.34 0 0 0-.945-2.333A3.12 3.12 0 0 0 21.939 10a4 4 0 0 0-.293.014a3.14 3.14 0 0 0-2.162 1.182a3.4 3.4 0 0 0-.457 3.457Zm10.842 10.755a1.4 1.4 0 0 0 .736-.77a1.45 1.45 0 0 0-.005-1.083a1.38 1.38 0 0 0-.744-.763a1.3 1.3 0 0 0-1.047.005a1.4 1.4 0 0 0-.693.672l-5.12.014a.16.16 0 0 0-.123.06a.17.17 0 0 0-.033.135a2.08 2.08 0 0 1-.724 2a1.82 1.82 0 0 1-1.4.355a1.86 1.86 0 0 1-1.233-.773a2 2 0 0 1-.016-2.286a.17.17 0 0 0-.033-.226l-.778-.613a.15.15 0 0 0-.12-.032a.16.16 0 0 0-.105.065a3.36 3.36 0 0 0-.575 2.45a3.3 3.3 0 0 0 1.266 2.153a3.1 3.1 0 0 0 1.874.634a3.15 3.15 0 0 0 2.572-1.349a3.4 3.4 0 0 0 .545-1.264l4.01-.04a1.35 1.35 0 0 0 1.746.656"></svg:path><svg:path fill="#e3f2fd" d="m27.718 23.882l1.228-3.945a1.34 1.34 0 0 0 .824-.473a1.44 1.44 0 0 0 .328-1.026a1.366 1.366 0 0 0-2.729-.013a1.5 1.5 0 0 0 .06.553a1.4 1.4 0 0 0 .336.564l-1.603 5.027a.17.17 0 0 0 .016.14a.16.16 0 0 0 .115.075a1.952 1.952 0 0 1 .385 3.782a1.84 1.84 0 0 1-2.097-.692a.156.156 0 0 0-.217-.037l-.811.572a.16.16 0 0 0-.067.108a.17.17 0 0 0 .028.124A3.15 3.15 0 0 0 26.097 30a3.1 3.1 0 0 0 1.871-.63a3.36 3.36 0 0 0 1.165-3.667a3.23 3.23 0 0 0-1.415-1.82Z"></svg:path><svg:path fill="#e3f2fd" d="M31.845 17.545a3.15 3.15 0 0 0-5.177-1.459l-3.28-2.432a1.46 1.46 0 0 0-.193-.969a1.37 1.37 0 0 0-.857-.637a1.3 1.3 0 0 0-.308-.038h-.004a1.425 1.425 0 0 0-.003 2.847h.005a1.3 1.3 0 0 0 .631-.16l4.165 3.137a.16.16 0 0 0 .133.027a.16.16 0 0 0 .104-.089a1.98 1.98 0 0 1 1.735-1.178h.001a1.933 1.933 0 0 1 1.897 1.963a1.96 1.96 0 0 1-1.296 1.863a.166.166 0 0 0-.102.203l.28.98a.16.16 0 0 0 .079.098a.15.15 0 0 0 .123.011a3.2 3.2 0 0 0 1.867-1.64a3.4 3.4 0 0 0 .2-2.527"></svg:path>`,
})
export class MaterialIconThemeFolderFastlaneOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderFaviconIcon],svg[material-icon-theme-folder-favicon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fbc02d" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#fffde7" d="m24 24l6 4l-2-6l4-4h-6l-1.999-6L22 18h-6l4 4l-2 6z"></svg:path>`,
})
export class MaterialIconThemeFolderFaviconIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderFaviconOpenIcon],svg[material-icon-theme-folder-favicon-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fbc02d" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124c-.468 0-.921-.164-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#fffde7" d="m24 24l6 4l-2-6l4-4h-6l-1.999-6L22 18h-6l4 4l-2 6z"></svg:path>`,
})
export class MaterialIconThemeFolderFaviconOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderFirebaseIcon],svg[material-icon-theme-folder-firebase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"><svg:path fill="#ff9100" fill-rule="nonzero" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4c-1.097 0-2 .903-2 2v16c0 1.097.903 2 2 2h24c1.097 0 2-.903 2-2V10c0-1.097-.903-2-2-2H15.124c-.468 0-.921-.164-1.28-.464"></svg:path><svg:path fill="#ffe0b2" d="M24 28.014s-4.584.213-7-4.014c-.66-1.156-1.006-2.805-1-4c.012-2.264.962-3.881 1.038-4c.117-.181 2.954-.867 4.962 0s3.979 3.215 4 6s-2.275 4.565-2.691 4.881s.691 1.133.691 1.133M22 25.5c2.051-1.646 1.875-2.063 2-3.5s-1.007-3.071-2-4s-2.934-.65-3.5-.5c-2.418 5.405 3.5 8 3.5 8"></svg:path><svg:path fill="#ffe0b2" d="m24 28.014l2.527-.941s-1.988-1.265-2.909-2.168C21.381 22.71 20.021 20.085 20 16s4-8 4-8s8.063 6.276 8 12c-.644 8.183-8 8.014-8 8.014m4-3.023c1.044-1.135 1.95-2.042 2-4.991c.075-4.381-6-9.5-6-9.5s-1.856 2.393-2 5.5c-.338 7.273 6 8.991 6 8.991"></svg:path><svg:path fill="#ffe0b2" d="M22.34 25.64s3.453-.086 5.66-.649c3.451-.879-1.022 2.191-1.022 2.191L24 28.015l-1.313-.536z"></svg:path></svg:g>`,
})
export class MaterialIconThemeFolderFirebaseIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderFirebaseOpenIcon],svg[material-icon-theme-folder-firebase-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FF9100" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#ffe0b2" d="M24 28.014s-4.584.213-7-4.014c-.66-1.156-1.006-2.805-1-4c.012-2.264.962-3.881 1.038-4c.117-.181 2.954-.867 4.962 0s3.979 3.215 4 6s-2.275 4.565-2.691 4.881s.691 1.133.691 1.133M22 25.5c2.051-1.646 1.875-2.063 2-3.5s-1.007-3.071-2-4s-2.934-.65-3.5-.5c-2.418 5.405 3.5 8 3.5 8"></svg:path><svg:path fill="#ffe0b2" d="m24 28.014l2.527-.941s-1.988-1.265-2.909-2.168C21.381 22.71 20.021 20.085 20 16s4-8 4-8s8.063 6.276 8 12c-.644 8.183-8 8.014-8 8.014m4-3.023c1.044-1.135 1.95-2.042 2-4.991c.075-4.381-6-9.5-6-9.5s-1.856 2.393-2 5.5c-.338 7.273 6 8.991 6 8.991"></svg:path><svg:path fill="#ffe0b2" d="M22.34 25.64s3.453-.086 5.66-.649c3.451-.879-1.022 2.191-1.022 2.191L24 28.015l-1.313-.536z"></svg:path>`,
})
export class MaterialIconThemeFolderFirebaseOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderFirestoreIcon],svg[material-icon-theme-folder-firestore-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"><svg:path fill="#2196f3" fill-rule="nonzero" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4c-1.097 0-2 .903-2 2v16c0 1.097.903 2 2 2h24c1.097 0 2-.903 2-2V10c0-1.097-.903-2-2-2H15.124c-.468 0-.921-.164-1.28-.464"></svg:path><svg:path fill="#bbdefb" d="m24 10l-8 4v4l8-4l8 4v-4z"></svg:path><svg:path fill="#bbdefb" d="M16 20v4l8-4l8 4v-4l-8-4z"></svg:path><svg:path fill="#bbdefb" d="m24 24l3-1l4 2l-7 3z"></svg:path></svg:g>`,
})
export class MaterialIconThemeFolderFirestoreIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderFirestoreOpenIcon],svg[material-icon-theme-folder-firestore-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"><svg:path fill="#2196f3" fill-rule="nonzero" d="M28.967 12H9.442c-.859 0-1.627.553-1.898 1.368L4 24V10h24c0-1.097-.903-2-2-2H15.124c-.468 0-.921-.164-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4c-1.097 0-2 .903-2 2v16c0 1.097.903 2 2 2h22l4.805-11.212c.107-.249.162-.517.162-.788c0-1.097-.903-2-2-2"></svg:path><svg:path fill="#bbdefb" d="m24 10l-8 4v4l8-4l8 4v-4z"></svg:path><svg:path fill="#bbdefb" d="M16 20v4l8-4l8 4v-4l-8-4z"></svg:path><svg:path fill="#bbdefb" d="m24 24l3-1l4 2l-7 3z"></svg:path></svg:g>`,
})
export class MaterialIconThemeFolderFirestoreOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderFlowIcon],svg[material-icon-theme-folder-flow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#546e7a" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#fbc02d" fill-opacity=".976" d="m12 10l6.71 6h-4.725l4.672 4h-6.676L20 28.025V12h3.548l1.584 2H22v6h1.98l1.979 2h-3.984l.025.025V28h10l-4-3.033v-1.221l.657.655L28 18h-2v-2.01l4 1.997v-5.99l-6-.999L21.923 10Z"></svg:path>`,
})
export class MaterialIconThemeFolderFlowIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderFlowOpenIcon],svg[material-icon-theme-folder-flow-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#546e7a" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#fbc02d" fill-opacity=".976" d="m12 10l6.71 6h-4.725l4.672 4h-6.676L20 28.025V12h3.548l1.584 2H22v6h1.98l1.979 2h-3.984l.025.025V28h10l-4-3.033v-1.221l.657.655L28 18h-2v-2.01l4 1.997v-5.99l-6-.999L21.923 10Z"></svg:path>`,
})
export class MaterialIconThemeFolderFlowOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderFlutterIcon],svg[material-icon-theme-folder-flutter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#03a9f4" d="m13.8 7.5l-1.2-1a2 2 0 0 0-1.3-.5H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.1a2 2 0 0 1-1.3-.5"></svg:path><svg:path fill="#b3e5fc" d="m20 10l-8 8l4 4l12-12zm4 8l-6 6l6 6h8l-6-6l6-6z"></svg:path>`,
})
export class MaterialIconThemeFolderFlutterIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderFlutterOpenIcon],svg[material-icon-theme-folder-flutter-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#03a9f4" d="M29 12H9.4a2 2 0 0 0-1.9 1.4L4 24V10h24a2 2 0 0 0-2-2H15.1a2 2 0 0 1-1.3-.5l-1.2-1a2 2 0 0 0-1.3-.5H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.8-11.2A2 2 0 0 0 29 12"></svg:path><svg:path fill="#b3e5fc" d="m20 10l-8 8l4 4l12-12zm4 8l-6 6l6 6h8l-6-6l6-6z"></svg:path>`,
})
export class MaterialIconThemeFolderFlutterOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderFontIcon],svg[material-icon-theme-folder-font-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ff5252" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#ffcdd2" d="M24.077 12h-2.154L16 28h2.423L20 24h6l1.577 4H30Zm-3.64 10L23 14.764L25.552 22Z"></svg:path>`,
})
export class MaterialIconThemeFolderFontIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderFontOpenIcon],svg[material-icon-theme-folder-font-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ff5252" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#ffcdd2" d="M24.077 12h-2.154L16 28h2.423L20 24h6l1.577 4H30Zm-3.64 10L23 14.764L25.552 22Z"></svg:path>`,
})
export class MaterialIconThemeFolderFontOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderForgejoIcon],svg[material-icon-theme-folder-forgejo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#757575" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:g fill="none" transform="translate(14.53 10.455)scale(.08531)"><svg:path stroke="#FF6D00" stroke-width="25" d="M58 168V70a50 50 0 0 1 50-50h20" class="prefix__prefix__orange"></svg:path><svg:path stroke="#D50000" stroke-width="25" d="M58 168v-30a50 50 0 0 1 50-50h20" class="prefix__prefix__red"></svg:path><svg:circle cx="142" cy="20" r="18" stroke="#FF6D00" stroke-width="15" class="prefix__prefix__orange"></svg:circle><svg:circle cx="142" cy="88" r="18" stroke="#D50000" stroke-width="15" class="prefix__prefix__red"></svg:circle><svg:circle cx="58" cy="180" r="18" stroke="#D50000" stroke-width="15" class="prefix__prefix__red"></svg:circle></svg:g>`,
})
export class MaterialIconThemeFolderForgejoIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderForgejoOpenIcon],svg[material-icon-theme-folder-forgejo-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#757575" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:g fill="none" transform="translate(14.53 10.455)scale(.08531)"><svg:path stroke="#FF6D00" stroke-width="25" d="M58 168V70a50 50 0 0 1 50-50h20" class="prefix__prefix__orange"></svg:path><svg:path stroke="#D50000" stroke-width="25" d="M58 168v-30a50 50 0 0 1 50-50h20" class="prefix__prefix__red"></svg:path><svg:circle cx="142" cy="20" r="18" stroke="#FF6D00" stroke-width="15" class="prefix__prefix__orange"></svg:circle><svg:circle cx="142" cy="88" r="18" stroke="#D50000" stroke-width="15" class="prefix__prefix__red"></svg:circle><svg:circle cx="58" cy="180" r="18" stroke="#D50000" stroke-width="15" class="prefix__prefix__red"></svg:circle></svg:g>`,
})
export class MaterialIconThemeFolderForgejoOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderFunctionsIcon],svg[material-icon-theme-folder-functions-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#0288d1" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#b3e5fc" d="M24 16h-2.982l.14-1.676l.002-.01a1.945 1.945 0 0 1 3.848-.485l1.475-1.687a3.9 3.9 0 0 0-3.01-2.126a4.143 4.143 0 0 0-4.263 4.105L19.048 16H16v2h2.87l-.529 5.874a2.05 2.05 0 0 1-1.348 1.776l-.026.009a1.92 1.92 0 0 1-2.451-1.465l-1.477 1.687a3.91 3.91 0 0 0 2.99 2.1a4.13 4.13 0 0 0 4.274-4.08L20.839 18H24Zm8 4.929l-1.414-1.414l-2.829 2.828l-2.828-2.828l-1.414 1.414l2.828 2.828l-2.828 2.829L24.929 28l2.828-2.828L30.586 28L32 26.586l-2.828-2.829z"></svg:path>`,
})
export class MaterialIconThemeFolderFunctionsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderFunctionsOpenIcon],svg[material-icon-theme-folder-functions-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#0288d1" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#b3e5fc" d="M24 16h-2.982l.14-1.676l.002-.01a1.945 1.945 0 0 1 3.848-.485l1.475-1.687a3.9 3.9 0 0 0-3.01-2.126a4.143 4.143 0 0 0-4.263 4.105L19.048 16H16v2h2.87l-.529 5.874a2.05 2.05 0 0 1-1.348 1.776l-.026.009a1.92 1.92 0 0 1-2.451-1.465l-1.477 1.687a3.91 3.91 0 0 0 2.99 2.1a4.13 4.13 0 0 0 4.274-4.08L20.839 18H24Zm8 4.929l-1.414-1.414l-2.829 2.828l-2.828-2.828l-1.414 1.414l2.828 2.828l-2.828 2.829L24.929 28l2.828-2.828L30.586 28L32 26.586l-2.828-2.829z"></svg:path>`,
})
export class MaterialIconThemeFolderFunctionsOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderGamemakerIcon],svg[material-icon-theme-folder-gamemaker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#26a69a" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#b2dfdb" d="m32 20l-9.03-9.03L13.942 20l9.03 9.03l3.765-3.766l.007-5.264Zm-9.513 2.526L19.96 20l3.01-3.01L25.98 20h-3.494Z"></svg:path>`,
})
export class MaterialIconThemeFolderGamemakerIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderGamemakerOpenIcon],svg[material-icon-theme-folder-gamemaker-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#26a69a" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#b2dfdb" d="m32 20l-9.03-9.03L13.942 20l9.03 9.03l3.765-3.766l.007-5.264Zm-9.513 2.526L19.96 20l3.01-3.01L25.98 20h-3.494Z"></svg:path>`,
})
export class MaterialIconThemeFolderGamemakerOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderGeneratorIcon],svg[material-icon-theme-folder-generator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ef5350" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#ffcdd2" d="M23.998 12.978v2.986l4-3.981l-4-3.983v2.986A7.98 7.98 0 0 0 16 18.95v.002a7.9 7.9 0 0 0 1.239 4.24l1.46-1.455a5.86 5.86 0 0 1-.7-2.785a5.987 5.987 0 0 1 6-5.974m6.759 1.732l-1.46 1.454a5.968 5.968 0 0 1-5.3 8.76v-2.985l-4 3.983l4 3.981v-2.986a7.98 7.98 0 0 0 7.999-7.964v-.001a7.87 7.87 0 0 0-1.24-4.24Z"></svg:path>`,
})
export class MaterialIconThemeFolderGeneratorIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderGeneratorOpenIcon],svg[material-icon-theme-folder-generator-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ef5350" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#ffcdd2" d="M23.998 12.978v2.986l4-3.981l-4-3.983v2.986A7.98 7.98 0 0 0 16 18.95v.002a7.9 7.9 0 0 0 1.239 4.24l1.46-1.455a5.86 5.86 0 0 1-.7-2.785a5.987 5.987 0 0 1 6-5.974m6.759 1.732l-1.46 1.454a5.968 5.968 0 0 1-5.3 8.76v-2.985l-4 3.983l4 3.981v-2.986a7.98 7.98 0 0 0 7.999-7.964v-.001a7.87 7.87 0 0 0-1.24-4.24Z"></svg:path>`,
})
export class MaterialIconThemeFolderGeneratorOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderGhWorkflowsIcon],svg[material-icon-theme-folder-gh-workflows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#546e7a" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#eceff1" d="M24 22v2h-2a2 2 0 0 1-2-2v-4h2v-6h-6v6h2v4a4.004 4.004 0 0 0 4 4h2v2h6v-6Zm-6-6v-2h2v2Zm10 10h-2v-2h2Z"></svg:path>`,
})
export class MaterialIconThemeFolderGhWorkflowsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderGhWorkflowsOpenIcon],svg[material-icon-theme-folder-gh-workflows-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#546e7a" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#eceff1" d="M24 22v2h-2a2 2 0 0 1-2-2v-4h2v-6h-6v6h2v4a4.004 4.004 0 0 0 4 4h2v2h6v-6Zm-6-6v-2h2v2Zm10 10h-2v-2h2Z"></svg:path>`,
})
export class MaterialIconThemeFolderGhWorkflowsOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderGitIcon],svg[material-icon-theme-folder-git-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ff7043" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#ffccbc" d="m12.593 18.589l5.784-5.794l1.692 1.7a1.98 1.98 0 0 0 .93 2.233v5.544a1.99 1.99 0 0 0-1 1.731a2.002 2.002 0 0 0 4.003 0A1.99 1.99 0 0 0 23 22.272v-4.864l2.071 2.092a1.2 1.2 0 0 0-.07.5a2.002 2.002 0 1 0 2.002-2.002a1.2 1.2 0 0 0-.5.07l-2.573-2.571a1.98 1.98 0 0 0-1.15-2.342a2.1 2.1 0 0 0-1.281-.09l-1.702-1.692l.791-.78a1.975 1.975 0 0 1 2.822 0l7.996 7.996a1.975 1.975 0 0 1 0 2.822l-7.996 7.996a1.975 1.975 0 0 1-2.822 0l-7.996-7.996a1.975 1.975 0 0 1 0-2.822Z"></svg:path>`,
})
export class MaterialIconThemeFolderGitIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderGitOpenIcon],svg[material-icon-theme-folder-git-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ff7043" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#ffccbc" d="m12.593 18.589l5.784-5.794l1.692 1.7a1.98 1.98 0 0 0 .93 2.233v5.544a1.99 1.99 0 0 0-1 1.731a2.002 2.002 0 0 0 4.003 0A1.99 1.99 0 0 0 23 22.272v-4.864l2.071 2.092a1.2 1.2 0 0 0-.07.5a2.002 2.002 0 1 0 2.002-2.002a1.2 1.2 0 0 0-.5.07l-2.573-2.571a1.98 1.98 0 0 0-1.15-2.342a2.1 2.1 0 0 0-1.281-.09l-1.702-1.692l.791-.78a1.975 1.975 0 0 1 2.822 0l7.996 7.996a1.975 1.975 0 0 1 0 2.822l-7.996 7.996a1.975 1.975 0 0 1-2.822 0l-7.996-7.996a1.975 1.975 0 0 1 0-2.822Z"></svg:path>`,
})
export class MaterialIconThemeFolderGitOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderGiteaIcon],svg[material-icon-theme-folder-gitea-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#689f38" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#dcedc8" d="M24 14v4h1.5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 1 .5-.5H22v-4H12a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h3.202l.3 2A4.55 4.55 0 0 0 20 28h6a4.55 4.55 0 0 0 4.497-4L32 14Zm-12 6v-4h2.3l.602 4Z"></svg:path>`,
})
export class MaterialIconThemeFolderGiteaIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderGiteaOpenIcon],svg[material-icon-theme-folder-gitea-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#689f38" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#dcedc8" d="M24 14v4h1.5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 1 .5-.5H22v-4H12a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h3.202l.3 2A4.55 4.55 0 0 0 20 28h6a4.55 4.55 0 0 0 4.497-4L32 14Zm-12 6v-4h2.3l.602 4Z"></svg:path>`,
})
export class MaterialIconThemeFolderGiteaOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderGithubIcon],svg[material-icon-theme-folder-github-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#546e7a" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#eceff1" d="M23 10a9.03 9.03 0 0 0-9 9.063a9.08 9.08 0 0 0 6.157 8.609c.45.072.593-.21.593-.453v-1.532c-2.493.544-3.024-1.214-3.024-1.214a2.42 2.42 0 0 0-.998-1.333c-.82-.561.062-.544.062-.544a1.9 1.9 0 0 1 1.377.933a1.925 1.925 0 0 0 2.62.754a1.96 1.96 0 0 1 .566-1.215c-1.998-.227-4.094-1.007-4.094-4.459a3.52 3.52 0 0 1 .927-2.456a3.26 3.26 0 0 1 .09-2.392s.754-.245 2.474.924a8.6 8.6 0 0 1 4.5 0c1.718-1.169 2.476-.924 2.476-.924a3.26 3.26 0 0 1 .088 2.392a3.52 3.52 0 0 1 .927 2.456c0 3.462-2.105 4.223-4.112 4.45a2.17 2.17 0 0 1 .622 1.676v2.484c0 .244.143.533.602.453A9.08 9.08 0 0 0 23 10"></svg:path>`,
})
export class MaterialIconThemeFolderGithubIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderGithubOpenIcon],svg[material-icon-theme-folder-github-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#546e7a" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#eceff1" d="M23 10a9.03 9.03 0 0 0-9 9.063a9.08 9.08 0 0 0 6.157 8.609c.45.072.593-.21.593-.453v-1.532c-2.493.544-3.024-1.214-3.024-1.214a2.42 2.42 0 0 0-.998-1.333c-.82-.561.062-.544.062-.544a1.9 1.9 0 0 1 1.377.933a1.925 1.925 0 0 0 2.62.754a1.96 1.96 0 0 1 .566-1.215c-1.998-.227-4.094-1.007-4.094-4.459a3.52 3.52 0 0 1 .927-2.456a3.26 3.26 0 0 1 .09-2.392s.754-.245 2.474.924a8.6 8.6 0 0 1 4.5 0c1.718-1.169 2.476-.924 2.476-.924a3.26 3.26 0 0 1 .088 2.392a3.52 3.52 0 0 1 .927 2.456c0 3.462-2.105 4.223-4.112 4.45a2.17 2.17 0 0 1 .622 1.676v2.484c0 .244.143.533.602.453A9.08 9.08 0 0 0 23 10"></svg:path>`,
})
export class MaterialIconThemeFolderGithubOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderGitlabIcon],svg[material-icon-theme-folder-gitlab-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#757575" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#e53935" d="m31.35 17.703l-.022-.063l-2.339-6.097a.6.6 0 0 0-.24-.291a.617.617 0 0 0-.928.353l-1.577 4.831h-6.39l-1.58-4.83a.62.62 0 0 0-.926-.354a.6.6 0 0 0-.24.29l-2.337 6.1l-.024.06a4.34 4.34 0 0 0 1.44 5.017l.009.006l.02.015l3.556 2.667l1.764 1.333l1.072.81a.724.724 0 0 0 .873 0l1.072-.811l1.764-1.334l3.583-2.68l.01-.008a4.34 4.34 0 0 0 1.44-5.014"></svg:path><svg:path fill="#ef6c00" d="m31.35 17.703l-.022-.063a7.9 7.9 0 0 0-3.143 1.413l-5.133 3.883l3.268 2.47l3.581-2.68l.011-.009a4.34 4.34 0 0 0 1.44-5.014Z"></svg:path><svg:path fill="#f9a825" d="m19.772 25.405l1.764 1.334l1.072.81a.724.724 0 0 0 .873 0l1.072-.81l1.766-1.334l-3.27-2.469Z"></svg:path><svg:path fill="#ef6c00" d="M17.912 19.053a7.9 7.9 0 0 0-3.141-1.412l-.024.062a4.34 4.34 0 0 0 1.44 5.016l.009.006l.02.016l3.556 2.666l3.27-2.471Z"></svg:path>`,
})
export class MaterialIconThemeFolderGitlabIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderGitlabOpenIcon],svg[material-icon-theme-folder-gitlab-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#757575" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#e53935" d="m31.35 17.703l-.022-.063l-2.339-6.097a.6.6 0 0 0-.24-.291a.617.617 0 0 0-.928.353l-1.577 4.831h-6.39l-1.58-4.83a.62.62 0 0 0-.926-.354a.6.6 0 0 0-.24.29l-2.337 6.1l-.024.06a4.34 4.34 0 0 0 1.44 5.017l.009.006l.02.015l3.556 2.667l1.764 1.333l1.072.81a.724.724 0 0 0 .873 0l1.072-.811l1.764-1.334l3.583-2.68l.01-.008a4.34 4.34 0 0 0 1.44-5.014"></svg:path><svg:path fill="#ef6c00" d="m31.35 17.703l-.022-.063a7.9 7.9 0 0 0-3.143 1.413l-5.133 3.883l3.268 2.47l3.581-2.68l.011-.009a4.34 4.34 0 0 0 1.44-5.014Z"></svg:path><svg:path fill="#f9a825" d="m19.772 25.407l1.764 1.333l1.072.81a.724.724 0 0 0 .873 0l1.072-.81l1.766-1.333l-3.27-2.471Z"></svg:path><svg:path fill="#ef6c00" d="M17.912 19.053a7.9 7.9 0 0 0-3.141-1.412l-.024.062a4.34 4.34 0 0 0 1.44 5.016l.009.006l.02.016l3.556 2.666l3.27-2.471Z"></svg:path>`,
})
export class MaterialIconThemeFolderGitlabOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderGlobalIcon],svg[material-icon-theme-folder-global-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#5c6bc0" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#c5cae9" d="M22 10a10 10 0 1 0 10 10a10 10 0 0 0-10-10m8 10a8 8 0 0 1-.263 2H26l-2-2v-2h-4v-4h4v2h2v-2.918A8 8 0 0 1 30 20m-16 0a8 8 0 0 1 .123-1.347L18 20h4l2 2l-2 2v4a8.01 8.01 0 0 1-8-8"></svg:path><svg:path fill="#c5cae9" d="M26 17h2v1h-2z"></svg:path>`,
})
export class MaterialIconThemeFolderGlobalIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderGlobalOpenIcon],svg[material-icon-theme-folder-global-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#5c6bc0" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#c5cae9" d="M22 10a10 10 0 1 0 10 10a10 10 0 0 0-10-10m8 10a8 8 0 0 1-.263 2H26l-2-2v-2h-4v-4h4v2h2v-2.918A8 8 0 0 1 30 20m-16 0a8 8 0 0 1 .123-1.347L18 20h4l2 2l-2 2v4a8.01 8.01 0 0 1-8-8"></svg:path><svg:path fill="#c5cae9" d="M26 17h2v1h-2z"></svg:path>`,
})
export class MaterialIconThemeFolderGlobalOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderGodotIcon],svg[material-icon-theme-folder-godot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#42a5f5" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#bbdefb" d="M19.966 10a11.7 11.7 0 0 0-2.665.871a18 18 0 0 0 .166 2.093a11 11 0 0 0-.983.61a9 9 0 0 0-.914.717a18 18 0 0 0-1.779-.989A13 13 0 0 0 12 15.544a18 18 0 0 0 1.21 1.665h.011v5.056l.029.001l3.247.299a.34.34 0 0 1 .316.31l.1 1.367l2.833.192l.195-1.262a.345.345 0 0 1 .346-.285h3.426a.346.346 0 0 1 .346.285l.195 1.262l2.833-.192l.1-1.367a.345.345 0 0 1 .316-.31l3.246-.299l.028-.001v-.404h.002v-4.65h.011A18 18 0 0 0 32 15.545a13 13 0 0 0-1.791-2.242a18 18 0 0 0-1.779.987a9 9 0 0 0-.914-.717a11 11 0 0 0-.982-.61a19 19 0 0 0 .166-2.093a11.8 11.8 0 0 0-2.666-.87a18 18 0 0 0-.99 1.84a7 7 0 0 0-1.037-.08h-.014a7 7 0 0 0-1.037.08a18 18 0 0 0-.99-1.84m-2.569 7.396a1.87 1.87 0 1 1 .11 3.736h-.004a1.87 1.87 0 1 1-.106-3.736m9.206 0a1.87 1.87 0 1 1 .026 3.736h-.025a1.87 1.87 0 1 1-.024-3.736zM22 18.488a.593.593 0 0 1 .63.547v1.72a.626.626 0 0 1-.69.543a.62.62 0 0 1-.57-.544v-1.72a.59.59 0 0 1 .63-.546"></svg:path><svg:path fill="#bbdefb" d="m27.863 23.203l-.1 1.376a.34.34 0 0 1-.324.31l-3.459.234l-.026.001a.345.345 0 0 1-.345-.285l-.198-1.284H20.59l-.199 1.284a.345.345 0 0 1-.371.284l-3.459-.236a.345.345 0 0 1-.324-.31l-.1-1.375l-2.92-.269l.005.693c0 2.944 3.912 4.358 8.772 4.374h.011c4.86-.016 8.772-1.43 8.772-4.374l.005-.693Z"></svg:path>`,
})
export class MaterialIconThemeFolderGodotIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderGodotOpenIcon],svg[material-icon-theme-folder-godot-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#42a5f5" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#bbdefb" d="M19.966 10a11.7 11.7 0 0 0-2.665.871a18 18 0 0 0 .166 2.093a11 11 0 0 0-.983.61a9 9 0 0 0-.914.717a18 18 0 0 0-1.779-.989A13 13 0 0 0 12 15.544a18 18 0 0 0 1.21 1.665h.011v5.056l.029.001l3.247.299a.34.34 0 0 1 .316.31l.1 1.367l2.833.192l.195-1.262a.345.345 0 0 1 .346-.285h3.426a.346.346 0 0 1 .346.285l.195 1.262l2.833-.192l.1-1.367a.345.345 0 0 1 .316-.31l3.246-.299l.028-.001v-.404h.002v-4.65h.011A18 18 0 0 0 32 15.545a13 13 0 0 0-1.791-2.242a18 18 0 0 0-1.779.987a9 9 0 0 0-.914-.717a11 11 0 0 0-.982-.61a19 19 0 0 0 .166-2.093a11.8 11.8 0 0 0-2.666-.87a18 18 0 0 0-.99 1.84a7 7 0 0 0-1.037-.08h-.014a7 7 0 0 0-1.037.08a18 18 0 0 0-.99-1.84m-2.569 7.396a1.87 1.87 0 1 1 .11 3.736h-.004a1.87 1.87 0 1 1-.106-3.736m9.206 0a1.87 1.87 0 1 1 .026 3.736h-.025a1.87 1.87 0 1 1-.024-3.736zM22 18.488a.593.593 0 0 1 .63.547v1.72a.626.626 0 0 1-.69.543a.62.62 0 0 1-.57-.544v-1.72a.59.59 0 0 1 .63-.546"></svg:path><svg:path fill="#bbdefb" d="m27.863 23.203l-.1 1.376a.34.34 0 0 1-.324.31l-3.459.234l-.026.001a.345.345 0 0 1-.345-.285l-.198-1.284H20.59l-.199 1.284a.345.345 0 0 1-.371.284l-3.459-.236a.345.345 0 0 1-.324-.31l-.1-1.375l-2.92-.269l.005.693c0 2.944 3.912 4.358 8.772 4.374h.011c4.86-.016 8.772-1.43 8.772-4.374l.005-.693Z"></svg:path>`,
})
export class MaterialIconThemeFolderGodotOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderGradleIcon],svg[material-icon-theme-folder-gradle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#0097a7" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#b2ebf2" d="M31.4 13.692a3.3 3.3 0 0 0-2.869-1.691c-1.097-.022-1.998.592-1.828.996a6 6 0 0 0 .369.726c.183.269.51.061.624 0a1.84 1.84 0 0 1 1.124-.194a1.68 1.68 0 0 1 1.276.98c.832 1.618-1.736 4.945-4.95 2.641a8.34 8.34 0 0 0-7.754-1.077c-1.414.465-2.065.932-1.505 2.012a21 21 0 0 0 1.243 2.232c1.17 1.93 3.733-.888 3.733-.888c-1.908 2.846-3.544 2.159-4.172 1.164a16 16 0 0 1-1.004-1.93C10.854 20.386 12.161 28 12.161 28h2.4c.611-2.803 2.8-2.699 3.174 0h1.831c1.621-5.475 5.727 0 5.727 0h2.387c-.67-3.732 1.342-4.907 2.61-7.095c1.268-2.19 2.469-4.868 1.11-7.213m-6.158 7.21a1.28 1.28 0 0 1-.845-1.589q.015-.05.034-.099s1.103.36 2.593.852a1.43 1.43 0 0 1-1.782.836"></svg:path>`,
})
export class MaterialIconThemeFolderGradleIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderGradleOpenIcon],svg[material-icon-theme-folder-gradle-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#0097a7" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#b2ebf2" d="M31.4 13.692a3.3 3.3 0 0 0-2.869-1.691c-1.097-.022-1.998.592-1.828.996a6 6 0 0 0 .369.726c.183.269.51.061.624 0a1.84 1.84 0 0 1 1.124-.194a1.68 1.68 0 0 1 1.276.98c.832 1.618-1.736 4.945-4.95 2.641a8.34 8.34 0 0 0-7.754-1.077c-1.414.465-2.065.932-1.505 2.012a21 21 0 0 0 1.243 2.232c1.17 1.93 3.733-.888 3.733-.888c-1.908 2.846-3.544 2.159-4.172 1.164a16 16 0 0 1-1.004-1.93C10.854 20.386 12.161 28 12.161 28h2.4c.611-2.803 2.8-2.699 3.174 0h1.831c1.621-5.475 5.727 0 5.727 0h2.387c-.67-3.732 1.342-4.907 2.61-7.095c1.268-2.19 2.469-4.868 1.11-7.213m-6.158 7.21a1.28 1.28 0 0 1-.845-1.589q.015-.05.034-.099s1.103.36 2.593.852a1.43 1.43 0 0 1-1.782.836"></svg:path>`,
})
export class MaterialIconThemeFolderGradleOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderGraphqlIcon],svg[material-icon-theme-folder-graphql-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ec407a" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#f8bbd0" d="M22.995 10A1.99 1.99 0 0 0 21 11.984a2 2 0 0 0 .036.37l-3.734 2.14a2 2 0 0 0-.308-.221h-.003a2.01 2.01 0 0 0-2.72.761a1.948 1.948 0 0 0 1.07 2.825v4.277a1.975 1.975 0 0 0-1.228 2.52a2.007 2.007 0 0 0 2.884 1.063a2 2 0 0 0 .303-.218l3.736 2.135a1.998 1.998 0 1 0 3.96.376a2 2 0 0 0-.05-.431l3.7-2.12a2.015 2.015 0 0 0 2.828-.128a2 2 0 0 0 .251-.34h.003v-.002a1.97 1.97 0 0 0-.73-2.704l-.002-.001a2 2 0 0 0-.341-.15v-4.28a1.974 1.974 0 0 0 1.236-2.516a2.006 2.006 0 0 0-2.886-1.067H29a2 2 0 0 0-.31.22l-3.732-2.132a1.985 1.985 0 0 0-1.586-2.324a2 2 0 0 0-.376-.036Zm-1.802 3.78l-4.534 7.777v-3.713a1.934 1.934 0 0 0 1.288-2.208Zm3.616.005l3.234 1.854a1.94 1.94 0 0 0 1.292 2.205v3.707Zm-2.178.14a1.9 1.9 0 0 0 .734 0l5.12 8.787a1.85 1.85 0 0 0-.374.639H17.882a2 2 0 0 0-.153-.337l-.002-.003a2 2 0 0 0-.217-.296ZM18.472 24.66h9.144l-3.293 1.883a1.974 1.974 0 0 0-2.618-.03l-3.233-1.85Z"></svg:path>`,
})
export class MaterialIconThemeFolderGraphqlIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderGraphqlOpenIcon],svg[material-icon-theme-folder-graphql-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ec407a" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#f8bbd0" d="M22.995 10A1.99 1.99 0 0 0 21 11.984a2 2 0 0 0 .036.37l-3.734 2.14a2 2 0 0 0-.308-.221h-.003a2.01 2.01 0 0 0-2.72.761a1.948 1.948 0 0 0 1.07 2.825v4.277a1.975 1.975 0 0 0-1.228 2.52a2.007 2.007 0 0 0 2.884 1.063a2 2 0 0 0 .303-.218l3.736 2.135a1.998 1.998 0 1 0 3.96.376a2 2 0 0 0-.05-.431l3.7-2.12a2.015 2.015 0 0 0 2.828-.128a2 2 0 0 0 .251-.34h.003v-.002a1.97 1.97 0 0 0-.73-2.704l-.002-.001a2 2 0 0 0-.341-.15v-4.28a1.974 1.974 0 0 0 1.236-2.516a2.006 2.006 0 0 0-2.886-1.067H29a2 2 0 0 0-.31.22l-3.732-2.132a1.985 1.985 0 0 0-1.586-2.324a2 2 0 0 0-.376-.036Zm-1.802 3.78l-4.534 7.777v-3.713a1.934 1.934 0 0 0 1.288-2.208Zm3.616.005l3.234 1.854a1.94 1.94 0 0 0 1.292 2.205v3.707Zm-2.178.14a1.9 1.9 0 0 0 .734 0l5.12 8.787a1.85 1.85 0 0 0-.374.639H17.882a2 2 0 0 0-.153-.337l-.002-.003a2 2 0 0 0-.217-.296ZM18.472 24.66h9.144l-3.293 1.883a1.974 1.974 0 0 0-2.618-.03l-3.233-1.85Z"></svg:path>`,
})
export class MaterialIconThemeFolderGraphqlOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderGuardIcon],svg[material-icon-theme-folder-guard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#43a047" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#c8e6c9" d="m25 9.962l-7 3.273v4.908c0 4.542 2.986 8.788 7 9.82c4.014-1.032 7-5.278 7-9.82v-4.908ZM28 20h-6v-2h6Z"></svg:path>`,
})
export class MaterialIconThemeFolderGuardIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderGuardOpenIcon],svg[material-icon-theme-folder-guard-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#43a047" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#c8e6c9" d="m25 9.962l-7 3.273v4.908c0 4.542 2.986 8.788 7 9.82c4.014-1.032 7-5.278 7-9.82v-4.908ZM28 20h-6v-2h6Z"></svg:path>`,
})
export class MaterialIconThemeFolderGuardOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderGulpIcon],svg[material-icon-theme-folder-gulp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ff5252" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#ffcdd2" d="M24 16v-2.968l2.563-1.306A1 1 0 0 0 27 10.381a1 1 0 0 0-1.345-.437L22 11.806V16h-4v2h1l1 10h6l1-10h1v-2Z"></svg:path>`,
})
export class MaterialIconThemeFolderGulpIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderGulpOpenIcon],svg[material-icon-theme-folder-gulp-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ff5252" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#ffcdd2" d="M24 16v-2.968l2.563-1.306A1 1 0 0 0 27 10.381a1 1 0 0 0-1.345-.437L22 11.806V16h-4v2h1l1 10h6l1-10h1v-2Z"></svg:path>`,
})
export class MaterialIconThemeFolderGulpOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderHelmIcon],svg[material-icon-theme-folder-helm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#00acc1" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#b2ebf2" d="M23.24 27.996c-.13-.09-.284-.39-.372-.724c-.078-.296-.108-1.078-.056-1.462c.02-.143.03-.264.025-.27a2 2 0 0 0-.27-.042c-.82-.099-1.694-.378-2.36-.752a2 2 0 0 0-.294-.144c-.02 0-.092.106-.16.236c-.313.604-.861 1.204-1.278 1.4c-.152.07-.355.088-.448.038c-.142-.076-.183-.376-.099-.708c.058-.227.29-.706.478-.985c.083-.124.248-.333.366-.466l.213-.24l-.111-.107c-.294-.28-.846-.93-.846-.995c0-.023.753-.546.808-.56c.028-.008.095.058.187.184c.197.272.726.795 1.038 1.026c2.372 1.764 5.716 1.32 7.517-.996c.095-.123.188-.224.207-.224c.036 0 .78.506.807.548c.023.037-.303.46-.58.752c-.133.139-.24.264-.24.278s.103.134.23.267c.402.424.797 1.086.907 1.518c.084.332.043.632-.099.708a.5.5 0 0 1-.18.029c-.433 0-1.15-.696-1.577-1.527c-.082-.16-.161-.292-.176-.292a1 1 0 0 0-.186.102c-.62.397-1.544.74-2.344.868a2 2 0 0 0-.34.074c-.022.017-.02.097.01.277c.052.32.032 1.083-.037 1.392c-.07.318-.179.565-.313.711c-.154.168-.273.193-.427.086m-8.513-6.49c-.008-.02-.01-1.076-.007-2.347l.008-2.31h1.21l.008.85c.006.637.017.857.043.874c.02.012.323.023.674.023c.497 0 .645-.008.67-.038q.03-.038.039-.874l.008-.834h1.21v4.677h-1.21l-.008-.893c-.005-.6-.018-.905-.04-.93c-.025-.03-.173-.04-.673-.04s-.649.01-.674.04c-.021.025-.034.33-.04.93l-.007.893l-.599.008c-.463.006-.602 0-.612-.03zm4.9 0c-.008-.02-.01-1.076-.006-2.347l.007-2.31h2.998l.008.513l.008.512l-.887.007l-.888.008l-.008.344c-.006.256.002.35.03.368c.02.013.364.023.765.024h.728l-.008.513l-.008.512l-1.498.03v.808l.922.014l.922.014v1.011l-1.535.007c-1.214.006-1.54 0-1.55-.029zm4.035 0c-.007-.02-.01-1.076-.006-2.347l.007-2.31h1.211l.015 1.82l.014 1.818l1.758.03v1.01l-1.492.007c-1.179.006-1.496 0-1.507-.029zm3.834 0c-.007-.02-.01-1.076-.006-2.346l.007-2.31l.634-.007c.35-.004.649.002.666.014c.043.029.683 1.773.824 2.245c.147.491.136.462.17.429c.015-.016.083-.21.15-.431c.15-.488.74-2.178.78-2.23c.02-.027.176-.034.664-.028l.638.008v4.677l-.54.008l-.54.008l-.019-.077c-.04-.158.014-1.83.074-2.307c.094-.75.08-.762-.143-.115c-.241.7-.72 1.987-.766 2.057c-.04.06-.063.065-.34.065c-.205 0-.308-.011-.327-.036c-.036-.046-.624-1.647-.785-2.136c-.114-.345-.175-.47-.173-.349c0 .03.027.267.059.529c.06.49.112 2.136.073 2.292l-.019.075h-.534c-.4 0-.537-.009-.547-.036zm.381-5.333a5.7 5.7 0 0 0-.64-.807c-.78-.82-1.716-1.337-2.867-1.583c-.33-.071-.417-.078-1.024-.079c-.714-.002-.87.016-1.424.161a5.3 5.3 0 0 0-2.035 1.037c-.29.237-.753.725-.95 1.003c-.122.17-.184.234-.216.222c-.105-.04-.808-.513-.808-.543c.001-.069.475-.663.797-1l.332-.347l-.22-.238c-.402-.436-.787-1.086-.894-1.508c-.085-.332-.043-.632.099-.708a.5.5 0 0 1 .18-.03c.433.002 1.15.697 1.577 1.528c.082.16.16.291.172.291s.125-.058.25-.13c.644-.367 1.677-.694 2.381-.754c.122-.01.236-.028.255-.04c.025-.015.021-.093-.016-.315c-.068-.41-.047-1.213.041-1.547c.14-.528.364-.824.592-.781c.213.04.42.387.527.886c.07.325.072 1.241.003 1.541c-.025.111-.038.211-.027.222s.148.04.307.065c.918.145 1.615.401 2.469.91c.058.034.113.05.121.036c.01-.014.088-.169.175-.344c.338-.676.882-1.29 1.328-1.5c.152-.07.354-.088.448-.038c.142.076.183.376.1.708c-.063.243-.3.721-.512 1.032c-.1.146-.3.386-.448.534l-.267.27l.263.28c.266.282.735.882.821 1.048c.04.075.04.096.008.126c-.066.06-.775.477-.812.477c-.02 0-.058-.038-.086-.085"></svg:path>`,
})
export class MaterialIconThemeFolderHelmIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderHelmOpenIcon],svg[material-icon-theme-folder-helm-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#00acc1" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#b2ebf2" d="M23.239 27.996c-.13-.09-.284-.39-.372-.724c-.078-.296-.108-1.078-.056-1.462c.02-.143.03-.264.025-.27a2 2 0 0 0-.27-.042c-.82-.099-1.694-.378-2.36-.752a2 2 0 0 0-.294-.144c-.02 0-.092.106-.16.236c-.313.604-.861 1.204-1.278 1.4c-.152.07-.355.088-.448.038c-.142-.076-.183-.376-.099-.708c.058-.227.29-.706.478-.985c.083-.124.248-.333.366-.466l.213-.24l-.111-.107c-.294-.28-.846-.93-.846-.995c0-.023.753-.546.808-.56c.028-.008.095.058.187.184c.197.272.726.795 1.038 1.026c2.372 1.764 5.716 1.32 7.517-.996c.095-.123.188-.224.207-.224c.036 0 .78.506.807.548c.023.037-.303.46-.58.752c-.133.139-.24.264-.24.278s.103.134.23.267c.402.424.797 1.086.907 1.518c.084.332.043.632-.099.708a.5.5 0 0 1-.18.029c-.433 0-1.15-.696-1.577-1.527c-.082-.16-.161-.292-.176-.292a1 1 0 0 0-.186.102c-.62.397-1.544.74-2.344.868a2 2 0 0 0-.34.074c-.022.017-.02.097.01.277c.052.32.032 1.083-.037 1.392c-.07.318-.179.565-.313.711c-.154.168-.273.193-.427.086m-8.513-6.49c-.008-.02-.01-1.076-.007-2.347l.008-2.31h1.21l.008.85c.006.637.017.857.043.874c.02.012.323.023.674.023c.497 0 .645-.008.67-.038q.03-.038.039-.874l.008-.834h1.21v4.677h-1.21l-.008-.893c-.005-.6-.018-.905-.04-.93c-.025-.03-.173-.04-.673-.04s-.649.01-.674.04c-.021.025-.034.33-.04.93l-.007.893l-.599.008c-.463.006-.602 0-.612-.03zm4.9 0c-.008-.02-.01-1.076-.006-2.347l.007-2.31h2.998l.008.513l.008.512l-.887.007l-.888.008l-.008.344c-.006.256.002.35.03.368c.02.013.364.023.765.024h.728l-.008.513l-.008.512l-1.498.03v.808l.922.014l.922.014v1.011l-1.535.007c-1.214.006-1.54 0-1.55-.029zm4.035 0c-.007-.02-.01-1.076-.006-2.347l.007-2.31h1.211l.015 1.82l.014 1.818l1.758.03v1.01l-1.492.007c-1.179.006-1.496 0-1.506-.029zm3.834 0c-.007-.02-.01-1.076-.006-2.346l.007-2.31l.634-.007c.35-.004.649.002.666.014c.043.029.683 1.773.824 2.245c.147.491.136.462.17.429c.015-.016.083-.21.15-.431c.15-.488.74-2.178.78-2.23c.02-.027.176-.034.664-.028l.638.008v4.677l-.54.008l-.54.008l-.019-.077c-.04-.158.014-1.83.074-2.307c.094-.75.08-.762-.143-.115c-.241.7-.72 1.987-.766 2.057c-.04.06-.063.065-.34.065c-.205 0-.308-.011-.327-.036c-.036-.046-.624-1.647-.785-2.136c-.114-.345-.175-.47-.173-.349c0 .03.027.267.059.529c.06.49.112 2.136.073 2.292l-.019.075h-.534c-.4 0-.537-.009-.547-.036zm.381-5.333a5.7 5.7 0 0 0-.64-.807c-.78-.82-1.716-1.337-2.867-1.583c-.33-.071-.417-.078-1.024-.079c-.714-.002-.87.016-1.424.161a5.3 5.3 0 0 0-2.035 1.037c-.29.237-.753.725-.95 1.003c-.122.17-.184.234-.216.222c-.105-.04-.808-.513-.808-.543c.001-.069.475-.663.797-1l.332-.347l-.22-.238c-.402-.436-.787-1.086-.894-1.508c-.085-.332-.043-.632.099-.708a.5.5 0 0 1 .18-.03c.433.002 1.15.697 1.577 1.528c.082.16.16.291.172.291s.125-.058.25-.13c.644-.367 1.677-.694 2.381-.754c.122-.01.236-.028.255-.04c.025-.015.021-.093-.016-.315c-.068-.41-.047-1.213.041-1.547c.14-.528.364-.824.592-.781c.213.04.42.387.527.886c.07.325.072 1.241.003 1.541c-.025.111-.038.211-.027.222s.148.04.307.065c.918.145 1.615.401 2.469.91c.058.034.113.05.121.036c.01-.014.088-.169.175-.344c.338-.676.882-1.29 1.328-1.5c.152-.07.354-.088.448-.038c.142.076.183.376.1.708c-.063.243-.3.721-.512 1.032c-.1.146-.3.386-.448.534l-.267.27l.263.28c.266.282.735.882.821 1.048c.04.075.04.096.008.126c-.066.06-.775.477-.812.477c-.02 0-.058-.038-.086-.085"></svg:path>`,
})
export class MaterialIconThemeFolderHelmOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderHelperIcon],svg[material-icon-theme-folder-helper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#afb42b" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#f0f4c3" d="M28.178 12a1.57 1.57 0 0 0-1.138.467l-4.62 4.691l4.493 4.555l4.628-4.684a1.646 1.646 0 0 0 0-2.28l-2.259-2.282A1.54 1.54 0 0 0 28.178 12m-6.521 5.924l-4.739 4.803a1.635 1.635 0 0 0 .008 2.291l.008.008C15.963 26.017 14.978 27.01 14 28h4.5l.684-.693a1.58 1.58 0 0 0 2.234-.016l4.732-4.803"></svg:path>`,
})
export class MaterialIconThemeFolderHelperIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderHelperOpenIcon],svg[material-icon-theme-folder-helper-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#afb42b" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#f0f4c3" d="M28.178 12a1.57 1.57 0 0 0-1.138.467l-4.62 4.691l4.493 4.555l4.628-4.684a1.646 1.646 0 0 0 0-2.28l-2.259-2.282A1.54 1.54 0 0 0 28.178 12m-6.521 5.924l-4.739 4.803a1.635 1.635 0 0 0 .008 2.291l.008.008C15.963 26.017 14.978 27.01 14 28h4.5l.684-.693a1.58 1.58 0 0 0 2.234-.016l4.732-4.803"></svg:path>`,
})
export class MaterialIconThemeFolderHelperOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderHomeIcon],svg[material-icon-theme-folder-home-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ff5252" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#ffcdd2" d="M20 12L8 22h4v8h6v-6h4v6h6v-8h4z"></svg:path>`,
})
export class MaterialIconThemeFolderHomeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderHomeOpenIcon],svg[material-icon-theme-folder-home-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ff5252" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#ffcdd2" d="M20 12L8 22h4v8h6v-6h4v6h6v-8h4z"></svg:path>`,
})
export class MaterialIconThemeFolderHomeOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderHookIcon],svg[material-icon-theme-folder-hook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#7e57c2" d="m443.008 241.152l-41.216-34.304A64 64 0 0 0 360.832 192H128a64 64 0 0 0-64 64v512a64 64 0 0 0 64 64h768a64 64 0 0 0 64-64V320a64 64 0 0 0-64-64H483.968a64 64 0 0 1-40.96-14.848"></svg:path><svg:path fill="#d1c4e9" d="M800 320c-53.02 0-96 42.98-96 96c.104 40.593 25.729 76.733 64 90.264V768c0 35.346-28.654 64-64 64s-64-28.654-64-64v-64h64L576 576v192c0 70.692 57.308 128 128 128s128-57.308 128-128V506.264c38.271-13.531 63.896-49.671 64-90.264c0-53.02-42.98-96-96-96m0 64c17.673 0 32 14.327 32 32s-14.327 32-32 32s-32-14.327-32-32s14.327-32 32-32"></svg:path>`,
})
export class MaterialIconThemeFolderHookIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderHookOpenIcon],svg[material-icon-theme-folder-hook-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#7e57c2" d="M926.944 384h-624.8a64 64 0 0 0-60.736 43.776L128 768V320h768a64 64 0 0 0-64-64H483.968a64 64 0 0 1-40.96-14.848l-41.216-34.304A64 64 0 0 0 360.832 192H128a64 64 0 0 0-64 64v512a64 64 0 0 0 64 64h704l153.76-358.784A64 64 0 0 0 926.944 384"></svg:path><svg:path fill="#d1c4e9" d="M800 320c-53.02 0-96 42.98-96 96c.104 40.593 25.729 76.733 64 90.264V768c0 35.346-28.654 64-64 64s-64-28.654-64-64v-64h64L576 576v192c0 70.692 57.308 128 128 128s128-57.308 128-128V506.264c38.271-13.531 63.896-49.671 64-90.264c0-53.02-42.98-96-96-96m0 64c17.673 0 32 14.327 32 32s-14.327 32-32 32s-32-14.327-32-32s14.327-32 32-32"></svg:path>`,
})
export class MaterialIconThemeFolderHookOpenIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderHuskyIcon],svg[material-icon-theme-folder-husky-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#607d8b" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#cfd8dc" d="M24.942 12.076c.872.35 1.217 1.731.761 3.095c-.452 1.357-1.518 2.184-2.395 1.84c-.869-.34-1.22-1.725-.771-3.093c.444-1.36 1.523-2.179 2.405-1.842m4.879 2.832c.738.602.566 1.947-.371 3.023c-.961 1.07-2.321 1.46-3.057.87c-.74-.595-.561-1.937.388-3.005c.948-1.078 2.308-1.468 3.04-.888m-10.343-1.795c.97.116 1.68 1.34 1.62 2.724c-.104 1.386-.935 2.421-1.9 2.31c-.963-.111-1.668-1.326-1.588-2.716s.928-2.425 1.868-2.319m12.285 7.131c.561.765.094 2.021-1.064 2.785s-2.555.76-3.133-.026c-.578-.782-.102-2.024 1.04-2.808c1.163-.742 2.571-.738 3.157.05m-5.388 6.733a2.14 2.14 0 0 1-1.984 1.017c-1.545-.147-2.323-2.153-3.68-2.94c-1.358-.79-3.515-.422-4.367-1.731a2.41 2.41 0 0 1 .065-2.586c.711-.952 2.249-.792 3.4-1.12c1.519-.409 3.245-1.831 4.617-1.033c1.366.79 1.06 3 1.41 4.53c.277 1.278 1.134 2.718.539 3.863"></svg:path>`,
})
export class MaterialIconThemeFolderHuskyIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderHuskyOpenIcon],svg[material-icon-theme-folder-husky-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#607d8b" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#cfd8dc" d="M24.942 12.076c.872.35 1.217 1.731.761 3.095c-.452 1.357-1.518 2.184-2.395 1.84c-.869-.34-1.22-1.725-.771-3.093c.444-1.36 1.523-2.179 2.405-1.842m4.879 2.832c.738.602.566 1.947-.371 3.023c-.961 1.07-2.321 1.46-3.057.87c-.74-.595-.561-1.937.388-3.005c.948-1.078 2.308-1.468 3.04-.888m-10.343-1.795c.97.116 1.68 1.34 1.62 2.724c-.104 1.386-.935 2.421-1.9 2.31c-.963-.111-1.668-1.326-1.588-2.716s.928-2.425 1.868-2.319m12.285 7.131c.561.765.094 2.021-1.064 2.785s-2.555.76-3.133-.026c-.578-.782-.102-2.024 1.04-2.808c1.163-.742 2.571-.738 3.157.05m-5.388 6.733a2.14 2.14 0 0 1-1.984 1.017c-1.545-.147-2.323-2.153-3.68-2.94c-1.358-.79-3.515-.422-4.367-1.731a2.41 2.41 0 0 1 .065-2.586c.711-.952 2.249-.792 3.4-1.12c1.519-.409 3.245-1.831 4.617-1.033c1.366.79 1.06 3 1.41 4.53c.277 1.278 1.134 2.718.539 3.863"></svg:path>`,
})
export class MaterialIconThemeFolderHuskyOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderI18nIcon],svg[material-icon-theme-folder-i18n-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#5c6bc0" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#c5cae9" d="m22.79 23.762l-2.308-2.259l.027-.026a15.7 15.7 0 0 0 3.373-5.877h2.663v-1.8h-6.363V12h-1.819v1.8H12v1.8h10.155a14.2 14.2 0 0 1-2.882 4.814a14 14 0 0 1-2.1-3.014h-1.819a15.8 15.8 0 0 0 2.71 4.103l-4.629 4.518l1.292 1.278l4.545-4.5l2.828 2.799zm5.12-4.562h-1.82L22 30h1.818l1.017-2.7h4.32l1.025 2.699H32zm-2.384 6.3L27 21.602l1.473 3.897Z"></svg:path>`,
})
export class MaterialIconThemeFolderI18nIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderI18nOpenIcon],svg[material-icon-theme-folder-i18n-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#5c6bc0" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#c5cae9" d="m22.79 23.762l-2.308-2.259l.027-.026a15.7 15.7 0 0 0 3.373-5.877h2.663v-1.8h-6.363V12h-1.819v1.8H12v1.8h10.155a14.2 14.2 0 0 1-2.882 4.814a14 14 0 0 1-2.1-3.014h-1.819a15.8 15.8 0 0 0 2.71 4.103l-4.629 4.518l1.292 1.278l4.545-4.5l2.828 2.799zm5.12-4.562h-1.82L22 30h1.818l1.017-2.7h4.32l1.025 2.699H32zm-2.384 6.3L27 21.602l1.473 3.897Z"></svg:path>`,
})
export class MaterialIconThemeFolderI18nOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderImagesIcon],svg[material-icon-theme-folder-images-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#009688" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#b2dfdb" d="M24 10h-7a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V16Zm-4 6a2 2 0 1 1-2 2a2.01 2.01 0 0 1 2-2m8 10H18l4-4l2 2l4-4Zm-4.828-9.172V12L28 16.828Z"></svg:path>`,
})
export class MaterialIconThemeFolderImagesIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderImagesOpenIcon],svg[material-icon-theme-folder-images-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#009688" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#b2dfdb" d="M24 10h-7a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V16Zm-4 6a2 2 0 1 1-2 2a2.01 2.01 0 0 1 2-2m8 10H18l4-4l2 2l4-4Zm-4.828-9.172V12L28 16.828Z"></svg:path>`,
})
export class MaterialIconThemeFolderImagesOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderImportIcon],svg[material-icon-theme-folder-import-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#afb42b" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#f0f4c3" d="M25 14a7 7 0 1 0 7 7a7 7 0 0 0-7-7m1 8v4h-2v-4h-4v-2h4v-4h2v4h4v2Z"></svg:path>`,
})
export class MaterialIconThemeFolderImportIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderImportOpenIcon],svg[material-icon-theme-folder-import-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#afb42b" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#f0f4c3" d="M25 14a7 7 0 1 0 7 7a7 7 0 0 0-7-7m1 8v4h-2v-4h-4v-2h4v-4h2v4h4v2Z"></svg:path>`,
})
export class MaterialIconThemeFolderImportOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderIncludeIcon],svg[material-icon-theme-folder-include-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#039be5" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#b3e5fc" d="M25 14a7 7 0 1 0 7 7a7 7 0 0 0-7-7m1 8v4h-2v-4h-4v-2h4v-4h2v4h4v2Z"></svg:path>`,
})
export class MaterialIconThemeFolderIncludeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderIncludeOpenIcon],svg[material-icon-theme-folder-include-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#039be5" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#b3e5fc" d="M25 14a7 7 0 1 0 7 7a7 7 0 0 0-7-7m1 8v4h-2v-4h-4v-2h4v-4h2v4h4v2Z"></svg:path>`,
})
export class MaterialIconThemeFolderIncludeOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderIntellijIcon],svg[material-icon-theme-folder-intellij-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="materialIconThemeFolderIntellij0" x1="-338.646" x2="-234.114" y1="3272.835" y2="3209.742" gradientTransform="translate(55.497 -331.024)scale(.11021)" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#fdd835"></svg:stop><svg:stop offset="1" stop-color="#f57c00"></svg:stop></svg:lineargradient><svg:lineargradient id="materialIconThemeFolderIntellij1" x1="-316.541" x2="-221.129" y1="3121.343" y2="3204.873" gradientTransform="translate(55.497 -331.024)scale(.11021)" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#ef5350"></svg:stop><svg:stop offset=".57" stop-color="#ff6e40"></svg:stop><svg:stop offset="1" stop-color="#f57c00"></svg:stop></svg:lineargradient><svg:lineargradient id="materialIconThemeFolderIntellij2" x1="-310.483" x2="-367.028" y1="3197.064" y2="3161.75" gradientTransform="translate(55.497 -331.024)scale(.11021)" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#8e24aa"></svg:stop><svg:stop offset=".385" stop-color="#ab47bc"></svg:stop><svg:stop offset=".765" stop-color="#ec407a"></svg:stop><svg:stop offset=".957" stop-color="#ec407a"></svg:stop></svg:lineargradient><svg:lineargradient id="materialIconThemeFolderIntellij3" x1="-311.503" x2="-366.707" y1="3117.085" y2="3162.678" gradientTransform="translate(55.497 -331.024)scale(.11021)" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#ef5350"></svg:stop><svg:stop offset=".364" stop-color="#ec407a"></svg:stop><svg:stop offset="1" stop-color="#ec407a"></svg:stop></svg:lineargradient></svg:defs><svg:path fill="#546e7a" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="url(#materialIconThemeFolderIntellij0)" d="M30.93 22.519a.68.68 0 0 0 .22-.47a.69.69 0 0 0-.647-.72a.72.72 0 0 0-.485.161l-12.314 6.745a1.44 1.44 0 0 0-.69.602a1.48 1.48 0 0 0 .506 2.03l.022.013a1.51 1.51 0 0 0 1.573-.03c.03-.029.073-.043.103-.073l11.461-8.053a2 2 0 0 0 .25-.205Z"></svg:path><svg:path fill="url(#materialIconThemeFolderIntellij1)" d="m30.959 21.534l-9.376-9.199a1.133 1.133 0 1 0-1.66 1.543a2 2 0 0 0 .176.147l9.904 8.48a.76.76 0 0 0 .441.19a.69.69 0 0 0 .72-.646a.73.73 0 0 0-.205-.515"></svg:path><svg:path fill="url(#materialIconThemeFolderIntellij2)" d="M21.892 20.711c-.015 0-5.79-4.555-5.907-4.628l-.265-.133a1.644 1.644 0 0 0-1.44 2.94a1.3 1.3 0 0 0 .294.131c.059.03 6.671 2.763 6.671 2.763a.63.63 0 0 0 .647-1.073"></svg:path><svg:path fill="url(#materialIconThemeFolderIntellij3)" d="M20.746 11.968a1.2 1.2 0 0 0-.676.22l-5.849 3.939c-.014.014-.03.014-.03.029h-.014a1.638 1.638 0 0 0 .397 2.865a1.61 1.61 0 0 0 1.528-.205a1.4 1.4 0 0 0 .265-.235l5.084-4.585a1.132 1.132 0 0 0-.705-2.028"></svg:path>`,
})
export class MaterialIconThemeFolderIntellijIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderIntellijLightIcon],svg[material-icon-theme-folder-intellij-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="materialIconThemeFolderIntellijLight0" x1="-338.646" x2="-234.114" y1="3611.926" y2="3548.833" gradientTransform="translate(55.497 -368.395)scale(.11021)" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#fdd835"></svg:stop><svg:stop offset="1" stop-color="#f57c00"></svg:stop></svg:lineargradient><svg:lineargradient id="materialIconThemeFolderIntellijLight1" x1="-316.541" x2="-221.129" y1="3460.434" y2="3543.963" gradientTransform="translate(55.497 -368.395)scale(.11021)" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#ef5350"></svg:stop><svg:stop offset=".57" stop-color="#ff6e40"></svg:stop><svg:stop offset="1" stop-color="#f57c00"></svg:stop></svg:lineargradient><svg:lineargradient id="materialIconThemeFolderIntellijLight2" x1="-310.483" x2="-367.028" y1="3536.154" y2="3500.841" gradientTransform="translate(55.497 -368.395)scale(.11021)" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#8e24aa"></svg:stop><svg:stop offset=".385" stop-color="#ab47bc"></svg:stop><svg:stop offset=".765" stop-color="#ec407a"></svg:stop><svg:stop offset=".957" stop-color="#ec407a"></svg:stop></svg:lineargradient><svg:lineargradient id="materialIconThemeFolderIntellijLight3" x1="-311.503" x2="-366.707" y1="3456.176" y2="3501.769" gradientTransform="translate(55.497 -368.395)scale(.11021)" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#ef5350"></svg:stop><svg:stop offset=".364" stop-color="#ec407a"></svg:stop><svg:stop offset="1" stop-color="#ec407a"></svg:stop></svg:lineargradient></svg:defs><svg:path fill="#b0bec5" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="url(#materialIconThemeFolderIntellijLight0)" d="M30.93 22.519a.68.68 0 0 0 .22-.47a.69.69 0 0 0-.647-.72a.72.72 0 0 0-.485.161l-12.314 6.745a1.44 1.44 0 0 0-.69.602a1.48 1.48 0 0 0 .506 2.03l.022.013a1.51 1.51 0 0 0 1.573-.03c.03-.029.073-.043.103-.073l11.461-8.053a2 2 0 0 0 .25-.205Z"></svg:path><svg:path fill="url(#materialIconThemeFolderIntellijLight1)" d="m30.959 21.534l-9.376-9.199a1.133 1.133 0 1 0-1.66 1.543a2 2 0 0 0 .176.147l9.904 8.48a.76.76 0 0 0 .441.19a.69.69 0 0 0 .72-.646a.73.73 0 0 0-.205-.515"></svg:path><svg:path fill="url(#materialIconThemeFolderIntellijLight2)" d="M21.892 20.711c-.015 0-5.79-4.555-5.907-4.628l-.265-.133a1.644 1.644 0 0 0-1.44 2.94a1.3 1.3 0 0 0 .294.131c.059.03 6.671 2.763 6.671 2.763a.63.63 0 0 0 .647-1.073"></svg:path><svg:path fill="url(#materialIconThemeFolderIntellijLight3)" d="M20.746 11.968a1.2 1.2 0 0 0-.676.22l-5.849 3.939c-.014.014-.03.014-.03.029h-.014a1.638 1.638 0 0 0 .397 2.865a1.61 1.61 0 0 0 1.528-.205a1.4 1.4 0 0 0 .265-.235l5.084-4.585a1.132 1.132 0 0 0-.705-2.028"></svg:path>`,
})
export class MaterialIconThemeFolderIntellijLightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderIntellijOpenIcon],svg[material-icon-theme-folder-intellij-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="materialIconThemeFolderIntellijOpen0" x1=".445" x2="104.977" y1="3272.835" y2="3209.742" gradientTransform="translate(18.126 -331.024)scale(.11021)" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#fdd835"></svg:stop><svg:stop offset="1" stop-color="#f57c00"></svg:stop></svg:lineargradient><svg:lineargradient id="materialIconThemeFolderIntellijOpen1" x1="22.55" x2="117.962" y1="3121.343" y2="3204.873" gradientTransform="translate(18.126 -331.024)scale(.11021)" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#ef5350"></svg:stop><svg:stop offset=".57" stop-color="#ff6e40"></svg:stop><svg:stop offset="1" stop-color="#f57c00"></svg:stop></svg:lineargradient><svg:lineargradient id="materialIconThemeFolderIntellijOpen2" x1="28.608" x2="-27.937" y1="3197.064" y2="3161.75" gradientTransform="translate(18.126 -331.024)scale(.11021)" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#8e24aa"></svg:stop><svg:stop offset=".385" stop-color="#ab47bc"></svg:stop><svg:stop offset=".765" stop-color="#ec407a"></svg:stop><svg:stop offset=".957" stop-color="#ec407a"></svg:stop></svg:lineargradient><svg:lineargradient id="materialIconThemeFolderIntellijOpen3" x1="27.588" x2="-27.616" y1="3117.085" y2="3162.678" gradientTransform="translate(18.126 -331.024)scale(.11021)" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#ef5350"></svg:stop><svg:stop offset=".364" stop-color="#ec407a"></svg:stop><svg:stop offset="1" stop-color="#ec407a"></svg:stop></svg:lineargradient></svg:defs><svg:path fill="#546e7a" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="url(#materialIconThemeFolderIntellijOpen0)" d="M30.93 22.519a.68.68 0 0 0 .22-.47a.69.69 0 0 0-.647-.72a.72.72 0 0 0-.485.161l-12.314 6.745a1.44 1.44 0 0 0-.69.602a1.48 1.48 0 0 0 .506 2.03l.022.013a1.51 1.51 0 0 0 1.573-.03c.03-.029.073-.043.103-.073l11.461-8.053a2 2 0 0 0 .25-.205Z"></svg:path><svg:path fill="url(#materialIconThemeFolderIntellijOpen1)" d="m30.959 21.534l-9.376-9.199a1.133 1.133 0 1 0-1.66 1.543a2 2 0 0 0 .176.147l9.904 8.48a.76.76 0 0 0 .441.19a.69.69 0 0 0 .72-.646a.73.73 0 0 0-.205-.515"></svg:path><svg:path fill="url(#materialIconThemeFolderIntellijOpen2)" d="M21.892 20.711c-.015 0-5.79-4.555-5.907-4.628l-.265-.133a1.644 1.644 0 0 0-1.44 2.94a1.3 1.3 0 0 0 .294.131c.059.03 6.671 2.763 6.671 2.763a.63.63 0 0 0 .647-1.073"></svg:path><svg:path fill="url(#materialIconThemeFolderIntellijOpen3)" d="M20.746 11.968a1.2 1.2 0 0 0-.676.22l-5.849 3.939c-.014.014-.03.014-.03.029h-.014a1.638 1.638 0 0 0 .397 2.865a1.61 1.61 0 0 0 1.528-.205a1.4 1.4 0 0 0 .265-.235l5.084-4.585a1.132 1.132 0 0 0-.705-2.028"></svg:path>`,
})
export class MaterialIconThemeFolderIntellijOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderIntellijOpenLightIcon],svg[material-icon-theme-folder-intellij-open-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="materialIconThemeFolderIntellijOpenLight0" x1=".445" x2="104.977" y1="3611.926" y2="3548.833" gradientTransform="translate(18.126 -368.395)scale(.11021)" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#fdd835"></svg:stop><svg:stop offset="1" stop-color="#f57c00"></svg:stop></svg:lineargradient><svg:lineargradient id="materialIconThemeFolderIntellijOpenLight1" x1="22.55" x2="117.962" y1="3460.434" y2="3543.963" gradientTransform="translate(18.126 -368.395)scale(.11021)" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#ef5350"></svg:stop><svg:stop offset=".57" stop-color="#ff6e40"></svg:stop><svg:stop offset="1" stop-color="#f57c00"></svg:stop></svg:lineargradient><svg:lineargradient id="materialIconThemeFolderIntellijOpenLight2" x1="28.608" x2="-27.937" y1="3536.154" y2="3500.841" gradientTransform="translate(18.126 -368.395)scale(.11021)" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#8e24aa"></svg:stop><svg:stop offset=".385" stop-color="#ab47bc"></svg:stop><svg:stop offset=".765" stop-color="#ec407a"></svg:stop><svg:stop offset=".957" stop-color="#ec407a"></svg:stop></svg:lineargradient><svg:lineargradient id="materialIconThemeFolderIntellijOpenLight3" x1="27.588" x2="-27.616" y1="3456.176" y2="3501.769" gradientTransform="translate(18.126 -368.395)scale(.11021)" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#ef5350"></svg:stop><svg:stop offset=".364" stop-color="#ec407a"></svg:stop><svg:stop offset="1" stop-color="#ec407a"></svg:stop></svg:lineargradient></svg:defs><svg:path fill="#b0bec5" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="url(#materialIconThemeFolderIntellijOpenLight0)" d="M30.93 22.519a.68.68 0 0 0 .22-.47a.69.69 0 0 0-.647-.72a.72.72 0 0 0-.485.161l-12.314 6.745a1.44 1.44 0 0 0-.69.602a1.48 1.48 0 0 0 .506 2.03l.022.013a1.51 1.51 0 0 0 1.573-.03c.03-.029.073-.043.103-.073l11.461-8.053a2 2 0 0 0 .25-.205Z"></svg:path><svg:path fill="url(#materialIconThemeFolderIntellijOpenLight1)" d="m30.959 21.534l-9.376-9.199a1.133 1.133 0 1 0-1.66 1.543a2 2 0 0 0 .176.147l9.904 8.48a.76.76 0 0 0 .441.19a.69.69 0 0 0 .72-.646a.73.73 0 0 0-.205-.515"></svg:path><svg:path fill="url(#materialIconThemeFolderIntellijOpenLight2)" d="M21.892 20.711c-.015 0-5.79-4.555-5.907-4.628l-.265-.133a1.644 1.644 0 0 0-1.44 2.94a1.3 1.3 0 0 0 .294.131c.059.03 6.671 2.763 6.671 2.763a.63.63 0 0 0 .647-1.073"></svg:path><svg:path fill="url(#materialIconThemeFolderIntellijOpenLight3)" d="M20.746 11.968a1.2 1.2 0 0 0-.676.22l-5.849 3.939c-.014.014-.03.014-.03.029h-.014a1.638 1.638 0 0 0 .397 2.865a1.61 1.61 0 0 0 1.528-.205a1.4 1.4 0 0 0 .265-.235l5.084-4.585a1.132 1.132 0 0 0-.705-2.028"></svg:path>`,
})
export class MaterialIconThemeFolderIntellijOpenLightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderInterfaceIcon],svg[material-icon-theme-folder-interface-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#1976d2" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#bbdefb" d="M16 12v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V12a2 2 0 0 0-2-2H18a2 2 0 0 0-2 2m14 14H18v-4h12Zm0-6H18v-4h12Z"></svg:path>`,
})
export class MaterialIconThemeFolderInterfaceIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderInterfaceOpenIcon],svg[material-icon-theme-folder-interface-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#1976d2" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#bbdefb" d="M16 12v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V12a2 2 0 0 0-2-2H18a2 2 0 0 0-2 2m14 14H18v-4h12Zm0-6H18v-4h12Z"></svg:path>`,
})
export class MaterialIconThemeFolderInterfaceOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderIosIcon],svg[material-icon-theme-folder-ios-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#78909c" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#cfd8dc" d="M12 18h2v10h-2zm0-4h2v2h-2zm4 1v12a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V15a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1m6 11h-4V16h4Zm10-10v-2h-5a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h3v4h-4v2h5a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-3v-4Z"></svg:path>`,
})
export class MaterialIconThemeFolderIosIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderIosOpenIcon],svg[material-icon-theme-folder-ios-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#78909c" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#cfd8dc" d="M12 18h2v10h-2zm0-4h2v2h-2zm4 1v12a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V15a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1m6 11h-4V16h4Zm10-10v-2h-5a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h3v4h-4v2h5a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-3v-4Z"></svg:path>`,
})
export class MaterialIconThemeFolderIosOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderJavaIcon],svg[material-icon-theme-folder-java-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ef5350" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#ffcdd2" d="M14 26h16v2H14zm17-14H16v8a4 4 0 0 0 4 4h4a4 4 0 0 0 4-4h3a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1m-1 6h-2v-4h2Z"></svg:path>`,
})
export class MaterialIconThemeFolderJavaIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderJavaOpenIcon],svg[material-icon-theme-folder-java-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ef5350" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#ffcdd2" d="M14 26h16v2H14zm17-14H16v8a4 4 0 0 0 4 4h4a4 4 0 0 0 4-4h3a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1m-1 6h-2v-4h2Z"></svg:path>`,
})
export class MaterialIconThemeFolderJavaOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderJavascriptIcon],svg[material-icon-theme-folder-javascript-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ffca28" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#ffecb3" d="M24 19.06a1.33 1.33 0 0 0 .3 1.04a2.5 2.5 0 0 0 .61.28c.54.18 1.33.37 2.09.62c2.64.88 2.96 2.32 2.99 3.49c.01.16.01.31.01.46V25c0 1.06-.46 2.79-3.44 2.98c-.13.01-.25.01-.37.01A1 1 0 0 1 26 28h-4v-1.76l.24-.24H26a2 2 0 0 0 .25-.01h.17c.18-.01.33-.03.47-.04a2 2 0 0 0 .27-.06c.07-.02.13-.04.19-.06a.04.04 0 0 0 .03-.01c.49-.18.59-.45.61-.66A1 1 0 0 0 28 25c0-.32-.68-1.23-3-2c-2.74-.91-2.98-2.42-2.99-3.61a.6.6 0 0 1-.01-.13V19a2.85 2.85 0 0 1 .45-1.59c.04-.06.07-.11.11-.16c.01-.01.01-.02.02-.03a1 1 0 0 1 .18-.2A4.3 4.3 0 0 1 25.91 16H30v2h-4c-.13 0-.26 0-.39.01c-1.18.06-1.49.4-1.58.7a.13.13 0 0 0-.01.06A1 1 0 0 0 24 19ZM16 28a3.64 3.64 0 0 1-4-4h2c0 1.44.56 2 2 2s2-.56 2-2v-8h2v8a3.64 3.64 0 0 1-4 4"></svg:path>`,
})
export class MaterialIconThemeFolderJavascriptIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderJavascriptOpenIcon],svg[material-icon-theme-folder-javascript-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ffca28" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#ffecb3" d="M24 19.06a1.33 1.33 0 0 0 .3 1.04a2.5 2.5 0 0 0 .61.28c.54.18 1.33.37 2.09.62c2.64.88 2.96 2.32 2.99 3.49c.01.16.01.31.01.46V25c0 1.06-.46 2.79-3.44 2.98c-.13.01-.25.01-.37.01A1 1 0 0 1 26 28h-4v-1.76l.24-.24H26a2 2 0 0 0 .25-.01h.17c.18-.01.33-.03.47-.04a2 2 0 0 0 .27-.06c.07-.02.13-.04.19-.06a.04.04 0 0 0 .03-.01c.49-.18.59-.45.61-.66A1 1 0 0 0 28 25c0-.32-.68-1.23-3-2c-2.74-.91-2.98-2.42-2.99-3.61a.6.6 0 0 1-.01-.13V19a2.85 2.85 0 0 1 .45-1.59c.04-.06.07-.11.11-.16c.01-.01.01-.02.02-.03a1 1 0 0 1 .18-.2A4.3 4.3 0 0 1 25.91 16H30v2h-4c-.13 0-.26 0-.39.01c-1.18.06-1.49.4-1.58.7a.13.13 0 0 0-.01.06A1 1 0 0 0 24 19ZM16 28a3.64 3.64 0 0 1-4-4h2c0 1.44.56 2 2 2s2-.56 2-2v-8h2v8a3.64 3.64 0 0 1-4 4"></svg:path>`,
})
export class MaterialIconThemeFolderJavascriptOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderJinjaIcon],svg[material-icon-theme-folder-jinja-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#e0e0e0" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#424242" d="M32 17v-3a41.3 41.3 0 0 1-9 1a41.3 41.3 0 0 1-9-1v3a36 36 0 0 0 3.938.681L17.728 20H14v2h3.545L17 28h3v-6h6v6h3l-.545-6H32v-2h-3.727l-.211-2.319A36 36 0 0 0 32 17m-6 3h-2v-2h-2v2h-2v-2.116c.938.07 1.945.116 3 .116s2.062-.046 3-.116Z"></svg:path>`,
})
export class MaterialIconThemeFolderJinjaIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderJinjaLightIcon],svg[material-icon-theme-folder-jinja-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#616161" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#f5f5f5" d="M32 17v-3a41.3 41.3 0 0 1-9 1a41.3 41.3 0 0 1-9-1v3a36 36 0 0 0 3.938.681L17.728 20H14v2h3.545L17 28h3v-6h6v6h3l-.545-6H32v-2h-3.727l-.211-2.319A36 36 0 0 0 32 17m-6 3h-2v-2h-2v2h-2v-2.116c.938.07 1.945.116 3 .116s2.062-.046 3-.116Z"></svg:path>`,
})
export class MaterialIconThemeFolderJinjaLightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderJinjaOpenIcon],svg[material-icon-theme-folder-jinja-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#e0e0e0" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#424242" d="M32 17v-3a41.3 41.3 0 0 1-9 1a41.3 41.3 0 0 1-9-1v3a36 36 0 0 0 3.938.681L17.728 20H14v2h3.545L17 28h3v-6h6v6h3l-.545-6H32v-2h-3.727l-.211-2.319A36 36 0 0 0 32 17m-6 3h-2v-2h-2v2h-2v-2.116c.938.07 1.945.116 3 .116s2.062-.046 3-.116Z"></svg:path>`,
})
export class MaterialIconThemeFolderJinjaOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderJinjaOpenLightIcon],svg[material-icon-theme-folder-jinja-open-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#616161" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#f5f5f5" d="M32 17v-3a41.3 41.3 0 0 1-9 1a41.3 41.3 0 0 1-9-1v3a36 36 0 0 0 3.938.681L17.728 20H14v2h3.545L17 28h3v-6h6v6h3l-.545-6H32v-2h-3.727l-.211-2.319A36 36 0 0 0 32 17m-6 3h-2v-2h-2v2h-2v-2.116c.938.07 1.945.116 3 .116s2.062-.046 3-.116Z"></svg:path>`,
})
export class MaterialIconThemeFolderJinjaOpenLightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderJobIcon],svg[material-icon-theme-folder-job-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ffa000" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#ffecb3" d="M30 14h-4v-2l-2-2h-4l-2 2v2h-4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V16a2 2 0 0 0-2-2m-10-2h4v2h-4Zm6 10l-7.023 4l-1.014-1.725l5.558-3.27l-5.558-3.269l1.014-1.724L26 20Z"></svg:path>`,
})
export class MaterialIconThemeFolderJobIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderJobOpenIcon],svg[material-icon-theme-folder-job-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ffa000" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#ffecb3" d="M30 14h-4v-2l-2-2h-4l-2 2v2h-4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V16a2 2 0 0 0-2-2m-10-2h4v2h-4Zm6 10l-7.023 4l-1.014-1.725l5.558-3.27l-5.558-3.269l1.014-1.724L26 20Z"></svg:path>`,
})
export class MaterialIconThemeFolderJobOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderJsonIcon],svg[material-icon-theme-folder-json-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#f9a825" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#fffde7" d="M24 28v-2h3q.425 0 .713-.287T28 25v-2q0-.95.55-1.725t1.45-1.1v-.35q-.9-.325-1.45-1.1T28 17v-2q0-.425-.287-.713T27 14h-3v-2h3q1.25 0 2.125.875T30 15v2q0 .425.287.712T31 18h1v4h-1q-.425 0-.713.287T30 23v2q0 1.25-.875 2.125T27 28zm-7 0q-1.25 0-2.125-.875T14 25v-2q0-.425-.287-.713T13 22h-1v-4h1q.425 0 .713-.287T14 17v-2q0-1.25.875-2.125T17 12h3v2h-3q-.425 0-.713.287T16 15v2q0 .95-.55 1.725t-1.45 1.1v.35q.9.325 1.45 1.1T16 23v2q0 .425.287.713T17 26h3v2z"></svg:path>`,
})
export class MaterialIconThemeFolderJsonIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderJsonOpenIcon],svg[material-icon-theme-folder-json-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#f9a825" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#fffde7" d="M24 28v-2h3q.425 0 .713-.288Q28 25.425 28 25v-2q0-.95.55-1.725t1.45-1.1v-.35q-.9-.325-1.45-1.1T28 17v-2q0-.425-.287-.712Q27.424 14 27 14h-3v-2h3q1.25 0 2.125.875T30 15v2q0 .425.287.712q.288.288.713.288h1v4h-1q-.425 0-.713.288Q30 22.575 30 23v2q0 1.25-.875 2.125T27 28zm-7 0q-1.25 0-2.125-.875T14 25v-2q0-.425-.287-.712Q13.425 22 13 22h-1v-4h1q.425 0 .713-.288Q14 17.425 14 17v-2q0-1.25.875-2.125T17 12h3v2h-3q-.425 0-.713.288Q16 14.575 16 15v2q0 .95-.55 1.725t-1.45 1.1v.35q.9.325 1.45 1.1T16 23v2q0 .425.287.712q.288.288.713.288h3v2z"></svg:path>`,
})
export class MaterialIconThemeFolderJsonOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderJupyterIcon],svg[material-icon-theme-folder-jupyter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FF9800" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:g fill="#FFE0B2" transform="matrix(.7 0 0 .7 10 10)"><svg:path d="M6.2 18a22.7 22.7 0 0 0 9.8 2a22.7 22.7 0 0 0 9.8-2a10.002 10.002 0 0 1-19.6 0m0-4a22.7 22.7 0 0 1 9.8-2a22.7 22.7 0 0 1 9.8 2a10.002 10.002 0 0 0-19.6 0"></svg:path><svg:circle cx="27" cy="5" r="3"></svg:circle><svg:circle cx="5" cy="27" r="3"></svg:circle><svg:circle cx="5" cy="5" r="3"></svg:circle></svg:g>`,
})
export class MaterialIconThemeFolderJupyterIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderJupyterOpenIcon],svg[material-icon-theme-folder-jupyter-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FF9800" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:g fill="#FFE0B2" transform="matrix(.7 0 0 .7 10 10)"><svg:path d="M6.2 18a22.7 22.7 0 0 0 9.8 2a22.7 22.7 0 0 0 9.8-2a10.002 10.002 0 0 1-19.6 0m0-4a22.7 22.7 0 0 1 9.8-2a22.7 22.7 0 0 1 9.8 2a10.002 10.002 0 0 0-19.6 0"></svg:path><svg:circle cx="27" cy="5" r="3"></svg:circle><svg:circle cx="5" cy="27" r="3"></svg:circle><svg:circle cx="5" cy="5" r="3"></svg:circle></svg:g>`,
})
export class MaterialIconThemeFolderJupyterOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderKeysIcon],svg[material-icon-theme-folder-keys-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#26a69a" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#b2dfdb" d="M21.651 20a6 6 0 1 0 0 4H26v4h4v-4h2v-4ZM16 24a2 2 0 1 1 2-2a2 2 0 0 1-2 2"></svg:path>`,
})
export class MaterialIconThemeFolderKeysIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderKeysOpenIcon],svg[material-icon-theme-folder-keys-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#26a69a" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#b2dfdb" d="M21.651 20a6 6 0 1 0 0 4H26v4h4v-4h2v-4ZM16 24a2 2 0 1 1 2-2a2 2 0 0 1-2 2"></svg:path>`,
})
export class MaterialIconThemeFolderKeysOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderKubernetesIcon],svg[material-icon-theme-folder-kubernetes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#448aff" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#bbdefb" d="M22.069 10.463a.6.6 0 0 0-.116.003a.59.59 0 0 0-.517.635v.16a3.6 3.6 0 0 0 .08.543a5.2 5.2 0 0 1 .065 1.018a.6.6 0 0 1-.186.305l-.013.238a7 7 0 0 0-1.031.157a7.27 7.27 0 0 0-3.706 2.117l-.196-.145a.52.52 0 0 1-.346-.039a5.4 5.4 0 0 1-.765-.69a5 5 0 0 0-.372-.395l-.12-.093a.75.75 0 0 0-.397-.158a.6.6 0 0 0-.463.197a.61.61 0 0 0 .148.834l.013.013c.026.027.079.067.106.093a4 4 0 0 0 .475.277a5.4 5.4 0 0 1 .848.597a.6.6 0 0 1 .106.33l.183.158a7.22 7.22 0 0 0-1.137 5.121l-.25.065a.8.8 0 0 1-.254.253a4.4 4.4 0 0 1-1.018.158a2 2 0 0 0-.543.051l-.144.029h-.013v.013c-.04 0-.08.013-.106.013a.57.57 0 1 0 .339 1.086l.004-.001a1 1 0 0 0 .174-.041a2.7 2.7 0 0 0 .488-.197a7 7 0 0 1 1.018-.292a.5.5 0 0 1 .305.119l.263-.039a7.43 7.43 0 0 0 3.27 4.088l-.094.238a.7.7 0 0 1 .042.33a4.2 4.2 0 0 1-.517.913c-.106.159-.199.304-.318.462a.17.17 0 0 1-.052.148c-.013.04-.04.066-.054.106a.57.57 0 0 0 1.072.382c.027-.04.051-.132.078-.132a5 5 0 0 0 .16-.53a5 5 0 0 1 .437-1.017a.45.45 0 0 1 .25-.12l.132-.237a7.4 7.4 0 0 0 5.254.013l.105.212a.5.5 0 0 1 .277.183a6 6 0 0 1 .398.954c.04.172.094.344.16.542c.027 0 .051.08.078.12c.013.039.028.065.041.105a.568.568 0 0 0 .984-.569l-.007-.012a1 1 0 0 1-.052-.16c-.106-.146-.212-.305-.318-.45a7.4 7.4 0 0 1-.501-.9a.44.44 0 0 1 .039-.343a1 1 0 0 1-.093-.225a7.44 7.44 0 0 0 3.268-4.113c.08.013.158.025.251.038a.33.33 0 0 1 .305-.106a4.7 4.7 0 0 1 1.018.28a2.6 2.6 0 0 0 .475.196a.7.7 0 0 0 .187.028v.013c0 .013.053.013.093.026a.585.585 0 0 0 .635-.491a.57.57 0 0 0-.483-.645l-.008-.001a.34.34 0 0 1-.157-.067h-.543a6.6 6.6 0 0 1-1.018-.186a.55.55 0 0 1-.253-.238l-.251-.064a7.2 7.2 0 0 0-1.165-5.109l.211-.184a.4.4 0 0 1 .106-.317a5 5 0 0 1 .848-.597a3.3 3.3 0 0 0 .462-.277a1 1 0 0 0 .12-.093c.039-.026.08-.053.08-.08a.556.556 0 0 0-.78-.793c-.04 0-.093.054-.133.08a10 10 0 0 0-.372.395a4.8 4.8 0 0 1-.767.69a.5.5 0 0 1-.344.039l-.212.158a7.37 7.37 0 0 0-4.708-2.274l-.013-.253a.45.45 0 0 1-.186-.29a5.2 5.2 0 0 1 .065-1.018a3.6 3.6 0 0 0 .08-.543v-.292a.57.57 0 0 0-.504-.506m-.778 4.408l-.16 2.977h-.013a.5.5 0 0 1-.106.28a.5.5 0 0 1-.687.118h-.013l-2.434-1.734a5.75 5.75 0 0 1 2.803-1.535c.212-.04.412-.08.61-.106m1.427 0a5.9 5.9 0 0 1 3.4 1.641l-2.421 1.734h-.013a.6.6 0 0 1-.277.067a.494.494 0 0 1-.516-.47v-.008Zm-5.727 2.713l2.223 2.024v.013a.34.34 0 0 1 .144.253a.483.483 0 0 1-.323.602l-.02.005v.013l-2.858.822a5.9 5.9 0 0 1 .834-3.732m10.013.04a6.18 6.18 0 0 1 .86 3.679l-2.87-.822l-.013-.013a.47.47 0 0 1-.238-.157a.49.49 0 0 1 .042-.694l.01-.01l-.013-.038Zm-5.462 2.144h.912l.568.7l-.199.886l-.819.398l-.819-.398l-.212-.886Zm-2.132 2.447h.106a.55.55 0 0 1 .504.382a.5.5 0 0 1-.052.28v.038l-1.127 2.74a5.84 5.84 0 0 1-2.366-2.952Zm4.87 0h.319l2.948.475a5.85 5.85 0 0 1-2.367 2.977l-1.14-2.79a.53.53 0 0 1 .24-.662m-2.327 1.199a.51.51 0 0 1 .488.256h.013l1.442 2.607a5 5 0 0 1-.569.157a5.9 5.9 0 0 1-3.214-.157l1.442-2.607h.012c.04-.093.107-.133.2-.2a.5.5 0 0 1 .186-.056"></svg:path>`,
})
export class MaterialIconThemeFolderKubernetesIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderKubernetesOpenIcon],svg[material-icon-theme-folder-kubernetes-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#448aff" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#bbdefb" d="M22.069 10.463a.6.6 0 0 0-.116.003a.59.59 0 0 0-.517.635v.16a3.6 3.6 0 0 0 .08.543a5.2 5.2 0 0 1 .065 1.018a.6.6 0 0 1-.186.305l-.013.238a7 7 0 0 0-1.031.157a7.27 7.27 0 0 0-3.706 2.117l-.196-.145a.52.52 0 0 1-.346-.039a5.4 5.4 0 0 1-.765-.69a5 5 0 0 0-.372-.395l-.12-.093a.75.75 0 0 0-.397-.158a.6.6 0 0 0-.463.197a.61.61 0 0 0 .148.834l.013.013c.026.027.079.067.106.093a4 4 0 0 0 .475.277a5.4 5.4 0 0 1 .848.597a.6.6 0 0 1 .106.33l.183.158a7.22 7.22 0 0 0-1.137 5.121l-.25.065a.8.8 0 0 1-.254.253a4.4 4.4 0 0 1-1.018.158a2 2 0 0 0-.543.051l-.144.029h-.013v.013c-.04 0-.08.013-.106.013a.57.57 0 1 0 .339 1.086l.004-.001a1 1 0 0 0 .174-.041a2.7 2.7 0 0 0 .488-.197a7 7 0 0 1 1.018-.292a.5.5 0 0 1 .305.119l.263-.039a7.43 7.43 0 0 0 3.27 4.088l-.094.238a.7.7 0 0 1 .042.33a4.2 4.2 0 0 1-.517.913c-.106.159-.199.304-.318.462a.17.17 0 0 1-.052.148c-.013.04-.04.066-.054.106a.57.57 0 0 0 1.072.382c.027-.04.051-.132.078-.132a5 5 0 0 0 .16-.53a5 5 0 0 1 .437-1.017a.45.45 0 0 1 .25-.12l.132-.237a7.4 7.4 0 0 0 5.254.013l.105.212a.5.5 0 0 1 .277.183a6 6 0 0 1 .398.954c.04.172.094.344.16.542c.027 0 .051.08.078.12c.013.039.028.065.041.105a.568.568 0 0 0 .984-.569l-.007-.012a1 1 0 0 1-.052-.16c-.106-.146-.212-.305-.318-.45a7.4 7.4 0 0 1-.501-.9a.44.44 0 0 1 .039-.343a1 1 0 0 1-.093-.225a7.44 7.44 0 0 0 3.268-4.113c.08.013.158.025.251.038a.33.33 0 0 1 .305-.106a4.7 4.7 0 0 1 1.018.28a2.6 2.6 0 0 0 .475.196a.7.7 0 0 0 .187.028v.013c0 .013.053.013.093.026a.585.585 0 0 0 .635-.491a.57.57 0 0 0-.483-.645l-.008-.001a.34.34 0 0 1-.157-.067h-.543a6.6 6.6 0 0 1-1.018-.186a.55.55 0 0 1-.253-.238l-.251-.064a7.2 7.2 0 0 0-1.165-5.109l.211-.184a.4.4 0 0 1 .106-.317a5 5 0 0 1 .848-.597a3.3 3.3 0 0 0 .462-.277a1 1 0 0 0 .12-.093c.039-.026.08-.053.08-.08a.556.556 0 0 0-.78-.793c-.04 0-.093.054-.133.08a10 10 0 0 0-.372.395a4.8 4.8 0 0 1-.767.69a.5.5 0 0 1-.344.039l-.212.158a7.37 7.37 0 0 0-4.708-2.274l-.013-.253a.45.45 0 0 1-.186-.29a5.2 5.2 0 0 1 .065-1.018a3.6 3.6 0 0 0 .08-.543v-.292a.57.57 0 0 0-.504-.506m-.778 4.408l-.16 2.977h-.013a.5.5 0 0 1-.106.28a.5.5 0 0 1-.687.118h-.013l-2.434-1.734a5.75 5.75 0 0 1 2.803-1.535c.212-.04.412-.08.61-.106m1.427 0a5.9 5.9 0 0 1 3.4 1.641l-2.421 1.734h-.013a.6.6 0 0 1-.277.067a.494.494 0 0 1-.516-.47v-.008Zm-5.727 2.713l2.223 2.024v.013a.34.34 0 0 1 .144.253a.483.483 0 0 1-.323.602l-.02.005v.013l-2.858.822a5.9 5.9 0 0 1 .834-3.732m10.013.04a6.18 6.18 0 0 1 .86 3.679l-2.87-.822l-.013-.013a.47.47 0 0 1-.238-.157a.49.49 0 0 1 .042-.694l.01-.01l-.013-.038Zm-5.462 2.144h.912l.568.7l-.199.886l-.819.398l-.819-.398l-.212-.886Zm-2.132 2.447h.106a.55.55 0 0 1 .504.382a.5.5 0 0 1-.052.28v.038l-1.127 2.74a5.84 5.84 0 0 1-2.366-2.952Zm4.87 0h.319l2.948.475a5.85 5.85 0 0 1-2.367 2.977l-1.14-2.79a.53.53 0 0 1 .24-.662m-2.327 1.199a.51.51 0 0 1 .488.256h.013l1.442 2.607a5 5 0 0 1-.569.157a5.9 5.9 0 0 1-3.214-.157l1.442-2.607h.012c.04-.093.107-.133.2-.2a.5.5 0 0 1 .186-.056"></svg:path>`,
})
export class MaterialIconThemeFolderKubernetesOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderKustoIcon],svg[material-icon-theme-folder-kusto-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#1e88e5" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#bbdefb" d="M25 10c-3.878 0-7 3.122-7 7v7h7c3.878 0 7-3.122 7-7s-3.122-7-7-7m3 4h2v6h-2zm-8 2h2v4h-2zm4 2h2v2h-2zm-8 2l-3.996.02v2.322L12 24h4zm-4 6v4h4v-4zm6 0v4h4v-4z"></svg:path>`,
})
export class MaterialIconThemeFolderKustoIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderKustoOpenIcon],svg[material-icon-theme-folder-kusto-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#1e88e5" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#bbdefb" d="M25 10c-3.878 0-7 3.122-7 7v7h7c3.878 0 7-3.122 7-7s-3.122-7-7-7m3 4h2v6h-2zm-8 2h2v4h-2zm4 2h2v2h-2zm-8 2l-3.996.02v2.322L12 24h4zm-4 6v4h4v-4zm6 0v4h4v-4z"></svg:path>`,
})
export class MaterialIconThemeFolderKustoOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderLayoutIcon],svg[material-icon-theme-folder-layout-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#039be5" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#b3e5fc" d="M10 16h6v14h-6zm8 8h6v6h-6zm8 0h6v6h-6zm-8-8h14v6H18z"></svg:path>`,
})
export class MaterialIconThemeFolderLayoutIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderLayoutOpenIcon],svg[material-icon-theme-folder-layout-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#039be5" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#b3e5fc" d="M10 16h6v14h-6zm8 8h6v6h-6zm8 0h6v6h-6zm-8-8h14v6H18z"></svg:path>`,
})
export class MaterialIconThemeFolderLayoutOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderLefthookIcon],svg[material-icon-theme-folder-lefthook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#607d8b" d="m13.845 7.533l-1.288-1.072a2 2 0 0 0-1.28-.464H4a2 2 0 0 0-2 2v16.002a2 2 0 0 0 2 2h24.003a2 2 0 0 0 2-2V9.997a2 2 0 0 0-2-2H15.125a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#f44336" d="M14 20v6h-4zm4.026-5.342l-2.385.795a1.494 1.494 0 0 0-.867 2.094l.534 1.068l4.696-1.624c.014-.293-.004-.602-.004-.91a1.496 1.496 0 0 0-1.974-1.423m12.886 5.502l-5.546-5.18C24.272 13.999 23.85 14 22 14v3.012a3.36 3.36 0 0 1-1.301 2.787L24 24l5.876 1.676c.606-.698.85-1.005 1.38-1.595a2.583 2.583 0 0 0-.344-3.921"></svg:path><svg:path fill="#b71c1c" d="m10 26l4-2l4 2l-4 2zm10.699-6.2a20 20 0 0 1-2.463 1.314a3.5 3.5 0 0 1-2.236.302v1.339l8.98 4.888a3.22 3.22 0 0 0 4.054-1c.333-.384.505-.582.842-.967zm-5.127-1.89l3.756-1.408a.5.5 0 0 1 .675.492a1.48 1.48 0 0 1-.832 1.42l-1.83.915c-1.399.7-2.717-1.063-1.769-1.419"></svg:path>`,
})
export class MaterialIconThemeFolderLefthookIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderLefthookOpenIcon],svg[material-icon-theme-folder-lefthook-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#607d8b" d="M28.97 11.998H9.444a2 2 0 0 0-1.898 1.368L4.001 24V9.998h24.003a2 2 0 0 0-2-2H15.125a2 2 0 0 1-1.28-.464L12.557 6.46a2 2 0 0 0-1.28-.464H4.002a2 2 0 0 0-2.001 2V24A2 2 0 0 0 4 26h22.003l4.806-11.214a2 2 0 0 0-1.838-2.788z"></svg:path><svg:path fill="#f44336" d="M14 20v6h-4zm4.026-5.342l-2.385.795a1.494 1.494 0 0 0-.867 2.094l.534 1.068l4.696-1.624c.014-.293-.004-.602-.004-.91a1.496 1.496 0 0 0-1.974-1.423m12.886 5.502l-5.546-5.18C24.272 13.999 23.85 14 22 14v3.012a3.36 3.36 0 0 1-1.301 2.787L24 24l5.876 1.676c.606-.698.85-1.005 1.38-1.595a2.583 2.583 0 0 0-.344-3.921"></svg:path><svg:path fill="#b71c1c" d="m10 26l4-2l4 2l-4 2zm10.699-6.2a20 20 0 0 1-2.463 1.314a3.5 3.5 0 0 1-2.236.302v1.339l8.98 4.888a3.22 3.22 0 0 0 4.054-1c.333-.384.505-.582.842-.967zm-5.127-1.89l3.756-1.408a.5.5 0 0 1 .675.492a1.48 1.48 0 0 1-.832 1.42l-1.83.915c-1.399.7-2.717-1.063-1.769-1.419"></svg:path>`,
})
export class MaterialIconThemeFolderLefthookOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderLessIcon],svg[material-icon-theme-folder-less-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#0277bd" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#b3e5fc" d="M20 21a1 1 0 0 0-1-1a1 1 0 0 0 1-1v-5h2v-2h-2a2 2 0 0 0-2 2v4a1 1 0 0 1-1 1h-1v2h1a1 1 0 0 1 1 1v4a2 2 0 0 0 2 2h2v-2h-2Zm11-2a1 1 0 0 1-1-1v-4a2 2 0 0 0-2-2h-2v2h2v5a1 1 0 0 0 1 1a1 1 0 0 0-1 1v5h-2v2h2a2 2 0 0 0 2-2v-4a1 1 0 0 1 1-1h1v-2Z"></svg:path>`,
})
export class MaterialIconThemeFolderLessIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderLessOpenIcon],svg[material-icon-theme-folder-less-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#0277bd" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#b3e5fc" d="M20 21a1 1 0 0 0-1-1a1 1 0 0 0 1-1v-5h2v-2h-2a2 2 0 0 0-2 2v4a1 1 0 0 1-1 1h-1v2h1a1 1 0 0 1 1 1v4a2 2 0 0 0 2 2h2v-2h-2Zm11-2a1 1 0 0 1-1-1v-4a2 2 0 0 0-2-2h-2v2h2v5a1 1 0 0 0 1 1a1 1 0 0 0-1 1v5h-2v2h2a2 2 0 0 0 2-2v-4a1 1 0 0 1 1-1h1v-2Z"></svg:path>`,
})
export class MaterialIconThemeFolderLessOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderLibIcon],svg[material-icon-theme-folder-lib-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#c0ca33" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#f0f4c3" d="M22.931 16a3 3 0 0 0 .003-6h-.003a3 3 0 0 0-3 2.999V13a3 3 0 0 0 2.999 3zm0 3.973c-2.225-2.078-5.955-3.978-9-3.973v10c3.19 0 6.85 2.004 9 4c2.226-2.078 5.955-4.005 9-4V16c-3.044-.005-6.774 1.895-9 3.973"></svg:path>`,
})
export class MaterialIconThemeFolderLibIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderLibOpenIcon],svg[material-icon-theme-folder-lib-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#c0ca33" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#f0f4c3" d="M23 16a3 3 0 0 0 .003-6H23a3 3 0 0 0-3 2.999V13a3 3 0 0 0 2.999 3zm0 3.973c-2.225-2.078-5.955-3.978-9-3.973v10c3.19 0 6.85 2.004 9 4c2.225-2.078 5.955-4.005 9-4V16c-3.045-.005-6.775 1.895-9 3.973"></svg:path>`,
})
export class MaterialIconThemeFolderLibOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderLinkIcon],svg[material-icon-theme-folder-link-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#7E57C2" d="m443.008 241.152l-41.216-34.304A64 64 0 0 0 360.832 192H128a64 64 0 0 0-64 64v512a64 64 0 0 0 64 64h768a64 64 0 0 0 64-64V320a64 64 0 0 0-64-64H483.968a64 64 0 0 1-40.96-14.848"></svg:path><svg:path fill="#d1c4e9" d="M736 320c-53.02 0-96 42.98-96 96c.104 40.593 25.729 76.733 64 90.264V576h-32c-17.673 0-32 14.327-32 32s14.327 32 32 32h32v190.547C595.489 821.653 512 768.467 512 704h64L448 576v128c0 106.039 128.942 192 288 192s288-85.961 288-192V576L896 704h64c0 64.467-83.489 117.653-192 126.547V640h32c17.673 0 32-14.327 32-32s-14.327-32-32-32h-32v-69.736c38.271-13.531 63.896-49.671 64-90.264c0-53.02-42.98-96-96-96m0 64c17.673 0 32 14.327 32 32s-14.327 32-32 32s-32-14.327-32-32s14.327-32 32-32"></svg:path>`,
})
export class MaterialIconThemeFolderLinkIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderLinkOpenIcon],svg[material-icon-theme-folder-link-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#7E57C2" d="M926.912 384H302.144a64 64 0 0 0-60.736 43.776L128 768V320h768a64 64 0 0 0-64-64H483.968a64 64 0 0 1-40.96-14.848l-41.216-34.304A64 64 0 0 0 360.832 192H128a64 64 0 0 0-64 64v512a64 64 0 0 0 64 64h704l153.792-358.784A64 64 0 0 0 926.912 384"></svg:path><svg:path fill="#d1c4e9" d="M736 320c-53.02 0-96 42.98-96 96c.104 40.593 25.729 76.733 64 90.264V576h-32c-17.673 0-32 14.327-32 32s14.327 32 32 32h32v190.547C595.489 821.653 512 768.467 512 704h64L448 576v128c0 106.039 128.942 192 288 192s288-85.961 288-192V576L896 704h64c0 64.467-83.489 117.653-192 126.547V640h32c17.673 0 32-14.327 32-32s-14.327-32-32-32h-32v-69.736c38.271-13.531 63.896-49.671 64-90.264c0-53.02-42.98-96-96-96m0 64c17.673 0 32 14.327 32 32s-14.327 32-32 32s-32-14.327-32-32s14.327-32 32-32"></svg:path>`,
})
export class MaterialIconThemeFolderLinkOpenIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderLinuxIcon],svg[material-icon-theme-folder-linux-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#f9a825" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#ffecb3" d="M24.62 16.35c-.42.28-1.75 1.04-1.95 1.19a.825.825 0 0 1-1.14-.01c-.2-.16-1.53-.92-1.95-1.19c-.48-.309-.45-.699.08-.919a6.16 6.16 0 0 1 4.91.03c.49.21.51.6.05.9Zm7.218 7.279A19.1 19.1 0 0 0 28 17.971a4.3 4.3 0 0 1-1.06-1.88c-.1-.33-.17-.67-.24-1.01a11.3 11.3 0 0 0-.7-2.609a4.06 4.06 0 0 0-3.839-2.47a4.2 4.2 0 0 0-3.95 2.4a6 6 0 0 0-.46 1.34c-.17.76-.32 1.55-.5 2.319a3.4 3.4 0 0 1-.959 1.71a19.5 19.5 0 0 0-3.88 5.348a6 6 0 0 0-.37.88c-.19.66.29 1.12.99.96c.44-.09.88-.18 1.3-.31c.41-.15.57-.05.67.35a6.73 6.73 0 0 0 4.24 4.498c4.119 1.56 8.928-.66 9.968-4.578c.07-.27.17-.37.47-.27c.46.14.93.24 1.4.35a.724.724 0 0 0 .92-.64a1.44 1.44 0 0 0-.16-.73Z"></svg:path>`,
})
export class MaterialIconThemeFolderLinuxIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderLinuxOpenIcon],svg[material-icon-theme-folder-linux-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#f9a825" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#ffecb3" d="M24.62 16.35c-.42.28-1.75 1.04-1.95 1.19a.825.825 0 0 1-1.14-.01c-.2-.16-1.53-.92-1.95-1.19c-.48-.309-.45-.699.08-.919a6.16 6.16 0 0 1 4.91.03c.49.21.51.6.05.9Zm7.218 7.279A19.1 19.1 0 0 0 28 17.971a4.3 4.3 0 0 1-1.06-1.88c-.1-.33-.17-.67-.24-1.01a11.3 11.3 0 0 0-.7-2.609a4.06 4.06 0 0 0-3.839-2.47a4.2 4.2 0 0 0-3.95 2.4a6 6 0 0 0-.46 1.34c-.17.76-.32 1.55-.5 2.319a3.4 3.4 0 0 1-.959 1.71a19.5 19.5 0 0 0-3.88 5.348a6 6 0 0 0-.37.88c-.19.66.29 1.12.99.96c.44-.09.88-.18 1.3-.31c.41-.15.57-.05.67.35a6.73 6.73 0 0 0 4.24 4.498c4.119 1.56 8.928-.66 9.968-4.578c.07-.27.17-.37.47-.27c.46.14.93.24 1.4.35a.724.724 0 0 0 .92-.64a1.44 1.44 0 0 0-.16-.73Z"></svg:path>`,
})
export class MaterialIconThemeFolderLinuxOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderLiquibaseIcon],svg[material-icon-theme-folder-liquibase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#f44336" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#ffcdd2" d="M23 12a7 3 0 0 0-7 3a7 3 0 0 0 7 3a7 3 0 0 0 7-3a7 3 0 0 0-7-3m7 5c-.222.2-.438.417-.703.582c-.84.466-1.767.724-2.701.957c-1.639.41-3.069.673-5.645 1.363c-1.232.33-3.29 1.07-4.305 2.494c-.686.961-.644 2.116-.646 2.604c.438-.29.91-.82 3.26-1.51a61 61 0 0 1 3.146-.777c.785-.175 1.57-.329 2.354-.516c2.854-.697 3.632-1.07 4.326-1.539c.608-.413.916-.91.914-1.658c0 0-.024-1.342 0-2m0 4.453c-1.39.78-2.246 1.215-4.326 1.682c-1.767.4-3.53.81-5.295 1.22c-1.188.282-3.556.975-4.18 2.145c-.287.536-.296 1.164.168 1.643c.05.05.56.524.738.586c0 0 .218-.106.836-.393c1.16-.536 2.397-.858 3.64-1.162c1.825-.425 3.66-.818 5.45-1.383c.819-.252 1.605-.582 2.26-1.13C29.755 24.271 30 24 30 23zm0 4.147s-.505.507-2.014 1.076c-3.774 1.303-5.957 1.324-8.96 2.474c-.15.058-.388.147-.532.211c.124.05.717.236.711.229c.96.243 2.365.416 3.795.41c.534-.013 4.287.128 6.164-1.39c.384-.34.833-.61.836-1.61z"></svg:path>`,
})
export class MaterialIconThemeFolderLiquibaseIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderLiquibaseOpenIcon],svg[material-icon-theme-folder-liquibase-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#f44336" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#ffcdd2" d="M23 12c-3.865 0-6.998 1.343-6.998 3s3.133 3 6.999 3S30 16.657 30 15s-3.134-3-7-3m7 5c-.222.2-.438.417-.703.582c-.84.466-1.767.724-2.7.957c-1.64.41-3.07.673-5.645 1.363c-1.232.33-3.29 1.07-4.304 2.494c-.686.961-.644 2.116-.646 2.604c.438-.29.91-.82 3.26-1.51a61 61 0 0 1 3.145-.777c.785-.175 1.57-.329 2.354-.516c2.853-.697 3.631-1.07 4.325-1.539c.608-.413.916-.91.914-1.658c0 0-.024-1.342 0-2m0 4.453c-1.39.78-2.246 1.215-4.325 1.682c-1.767.4-3.53.81-5.295 1.22c-1.188.282-3.555.975-4.18 2.145c-.286.536-.295 1.164.169 1.643c.05.05.56.524.738.586c0 0 .218-.106.836-.393c1.16-.536 2.396-.858 3.64-1.162c1.824-.425 3.659-.818 5.448-1.383c.82-.252 1.605-.582 2.26-1.13C29.755 24.271 30 24 30 23Zm0 4.147s-.505.507-2.014 1.076C24.213 27.979 22.03 28 19.027 29.15c-.15.058-.388.147-.532.211c.124.05.717.236.711.229c.96.243 2.365.416 3.795.41c.534-.013 4.286.128 6.163-1.39c.384-.34.833-.61.836-1.61Z"></svg:path>`,
})
export class MaterialIconThemeFolderLiquibaseOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderLogIcon],svg[material-icon-theme-folder-log-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#afb42b" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#afb42b" d="M20 14h8v2h-8zm0 4h8v2h-8zm0 4h6v2h-6z"></svg:path><svg:path fill="#f0f4c3" d="M30.337 14H17.663A1.663 1.663 0 0 0 16 15.663v10.674A1.663 1.663 0 0 0 17.663 28h12.674A1.663 1.663 0 0 0 32 26.337V15.663A1.663 1.663 0 0 0 30.337 14M26 26h-6v-2h6Zm2-4h-8v-2h8Zm0-4h-8v-2h8Z"></svg:path>`,
})
export class MaterialIconThemeFolderLogIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderLogOpenIcon],svg[material-icon-theme-folder-log-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#afb42b" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#f0f4c3" d="M30.337 14H17.663A1.663 1.663 0 0 0 16 15.663v10.674A1.663 1.663 0 0 0 17.663 28h12.674A1.663 1.663 0 0 0 32 26.337V15.663A1.663 1.663 0 0 0 30.337 14M26 26h-6v-2h6Zm2-4h-8v-2h8Zm0-4h-8v-2h8Z"></svg:path>`,
})
export class MaterialIconThemeFolderLogOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderLottieIcon],svg[material-icon-theme-folder-lottie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#00bfa5" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#a7ffeb" d="M28 10H18a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V14a4 4 0 0 0-4-4m0 5.563a.48.48 0 0 1-.437.464c-1.541.201-2.457 1.49-3.715 3.503c-1.233 1.971-2.619 4.19-5.323 4.446a.495.495 0 0 1-.525-.501v-1.038a.48.48 0 0 1 .437-.465c1.541-.2 2.457-1.489 3.715-3.502c1.233-1.971 2.619-4.19 5.323-4.446a.495.495 0 0 1 .525.501Z"></svg:path>`,
})
export class MaterialIconThemeFolderLottieIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderLottieOpenIcon],svg[material-icon-theme-folder-lottie-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#00bfa5" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#a7ffeb" d="M28 10H18a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V14a4 4 0 0 0-4-4m0 5.563a.48.48 0 0 1-.437.464c-1.541.201-2.457 1.49-3.715 3.503c-1.233 1.971-2.619 4.19-5.323 4.446a.495.495 0 0 1-.525-.501v-1.038a.48.48 0 0 1 .437-.465c1.541-.2 2.457-1.489 3.715-3.502c1.233-1.971 2.619-4.19 5.323-4.446a.495.495 0 0 1 .525.501Z"></svg:path>`,
})
export class MaterialIconThemeFolderLottieOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderLuaIcon],svg[material-icon-theme-folder-lua-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#42a5f5" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:circle cx="29" cy="13" r="3" fill="#b3e5fc"></svg:circle><svg:path fill="#b3e5fc" d="M19.703 14.594a7.703 7.703 0 1 0 7.703 7.703a7.703 7.703 0 0 0-7.703-7.703M21 24a3 3 0 1 1 3-3a3 3 0 0 1-3 3"></svg:path>`,
})
export class MaterialIconThemeFolderLuaIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderLuaOpenIcon],svg[material-icon-theme-folder-lua-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#42a5f5" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:circle cx="29" cy="13" r="3" fill="#b3e5fc"></svg:circle><svg:path fill="#b3e5fc" d="M19.703 14.594a7.703 7.703 0 1 0 7.703 7.703a7.703 7.703 0 0 0-7.703-7.703M21 24a3 3 0 1 1 3-3a3 3 0 0 1-3 3"></svg:path>`,
})
export class MaterialIconThemeFolderLuaOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderLuauIcon],svg[material-icon-theme-folder-luau-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#42A5F5" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#B3E5FC" fill-rule="evenodd" d="M18.381 12L31 15.381L27.619 28L15 24.619zm8.095 3.86l2.524.676l-.676 2.524l-2.524-.677z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class MaterialIconThemeFolderLuauIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderLuauOpenIcon],svg[material-icon-theme-folder-luau-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#42A5F5" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#B3E5FC" fill-rule="evenodd" d="M18.381 12L31 15.381L27.619 28L15 24.619zm8.095 3.86l2.524.676l-.676 2.524l-2.524-.677z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class MaterialIconThemeFolderLuauOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderMacosIcon],svg[material-icon-theme-folder-macos-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#546e7a" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#cfd8dc" d="M30.64 27.499c-.82 1.24-1.687 2.45-3.008 2.47c-1.322.03-1.746-.79-3.245-.79c-1.508 0-1.972.77-3.224.82c-1.292.05-2.268-1.32-3.096-2.53c-1.687-2.47-2.979-7.02-1.243-10.08a4.81 4.81 0 0 1 4.063-2.51c1.262-.02 2.465.87 3.244.87c.77 0 2.229-1.07 3.757-.91a4.56 4.56 0 0 1 3.59 1.98a4.57 4.57 0 0 0-2.12 3.81A4.41 4.41 0 0 0 32 24.67a11.1 11.1 0 0 1-1.36 2.83Zm-5.632-16a4.46 4.46 0 0 1 2.9-1.499a4.42 4.42 0 0 1-1.026 3.19a3.58 3.58 0 0 1-2.91 1.42a4.3 4.3 0 0 1 1.036-3.11Z"></svg:path>`,
})
export class MaterialIconThemeFolderMacosIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderMacosOpenIcon],svg[material-icon-theme-folder-macos-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#546e7a" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#cfd8dc" d="M30.64 27.499c-.82 1.24-1.687 2.45-3.008 2.47c-1.322.03-1.746-.79-3.245-.79c-1.508 0-1.972.77-3.224.82c-1.292.05-2.268-1.32-3.096-2.53c-1.687-2.47-2.979-7.02-1.243-10.08a4.81 4.81 0 0 1 4.063-2.51c1.262-.02 2.465.87 3.244.87c.77 0 2.229-1.07 3.757-.91a4.56 4.56 0 0 1 3.59 1.98a4.57 4.57 0 0 0-2.12 3.81A4.41 4.41 0 0 0 32 24.67a11.1 11.1 0 0 1-1.36 2.83Zm-5.632-16a4.46 4.46 0 0 1 2.9-1.499a4.42 4.42 0 0 1-1.026 3.19a3.58 3.58 0 0 1-2.91 1.42a4.3 4.3 0 0 1 1.036-3.11Z"></svg:path>`,
})
export class MaterialIconThemeFolderMacosOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderMailIcon],svg[material-icon-theme-folder-mail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ff5252" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#ffcdd2" d="M14 16v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V16a2 2 0 0 0-2-2H16a2 2 0 0 0-2 2m16 2l-7 4l-7-4v-2l7 4l7-4Z"></svg:path>`,
})
export class MaterialIconThemeFolderMailIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderMailOpenIcon],svg[material-icon-theme-folder-mail-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ff5252" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#ffcdd2" d="M14 16v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V16a2 2 0 0 0-2-2H16a2 2 0 0 0-2 2m16 2l-7 4l-7-4v-2l7 4l7-4Z"></svg:path>`,
})
export class MaterialIconThemeFolderMailOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderMappingsIcon],svg[material-icon-theme-folder-mappings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#afb42b" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#f0f4c3" d="M18 16h2v2h-2zm4 0h6v2h-6zm-4 4h2v2h-2zm4 0h6v2h-6zm-4 4h2v2h-2zm4 0h6v2h-6z"></svg:path><svg:path fill="#f0f4c3" d="M14 12.5v17a.5.5 0 0 0 .5.5h17a.5.5 0 0 0 .5-.5v-17a.5.5 0 0 0-.5-.5h-17a.5.5 0 0 0-.5.5M30 28H16V14h14Z"></svg:path>`,
})
export class MaterialIconThemeFolderMappingsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderMappingsOpenIcon],svg[material-icon-theme-folder-mappings-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#afb42b" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#f0f4c3" d="M18 16h2v2h-2zm4 0h6v2h-6zm-4 4h2v2h-2zm4 0h6v2h-6zm-4 4h2v2h-2zm4 0h6v2h-6z"></svg:path><svg:path fill="#f0f4c3" d="M14 12.5v17a.5.5 0 0 0 .5.5h17a.5.5 0 0 0 .5-.5v-17a.5.5 0 0 0-.5-.5h-17a.5.5 0 0 0-.5.5M30 28H16V14h14Z"></svg:path>`,
})
export class MaterialIconThemeFolderMappingsOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderMarkdownIcon],svg[material-icon-theme-folder-markdown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#0277bd" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#b3e5fc" d="M22 18v10h-4v-6l-2 2l-2-2v6h-4V18h4l2 2l2-2zm10 6l-4 5l-4-5h2v-6h4v6z"></svg:path>`,
})
export class MaterialIconThemeFolderMarkdownIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderMarkdownOpenIcon],svg[material-icon-theme-folder-markdown-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#0277bd" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#b3e5fc" d="M22 18v10h-4v-6l-2 2l-2-2v6h-4V18h4l2 2l2-2zm10 6l-4 5l-4-5h2v-6h4v6z"></svg:path>`,
})
export class MaterialIconThemeFolderMarkdownOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderMercurialIcon],svg[material-icon-theme-folder-mercurial-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#78909c" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#cfd8dc" d="M31.983 20.728c.31-5.49-3.708-11.404-9.888-10.665a6.1 6.1 0 0 0-5.15 3.379c-1.237 2.64.102 6.125 4.12 7.286c2.472.74 2.987 1.795 2.678 3.062c-.31 1.162-1.133 2.43-1.34 3.485a3 3 0 0 0-.102.95c.103 2.324 4.738 3.274 8.343-2.956a9.35 9.35 0 0 0 1.34-4.54Z"></svg:path><svg:circle cx="16" cy="26" r="4" fill="#cfd8dc"></svg:circle><svg:circle cx="12" cy="18" r="2" fill="#cfd8dc"></svg:circle>`,
})
export class MaterialIconThemeFolderMercurialIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderMercurialOpenIcon],svg[material-icon-theme-folder-mercurial-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#78909c" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#cfd8dc" d="M31.983 20.728c.31-5.49-3.708-11.404-9.888-10.665a6.1 6.1 0 0 0-5.15 3.379c-1.237 2.64.102 6.125 4.12 7.286c2.472.74 2.987 1.795 2.678 3.062c-.31 1.162-1.133 2.43-1.34 3.485a3 3 0 0 0-.102.95c.103 2.324 4.738 3.274 8.343-2.956a9.35 9.35 0 0 0 1.34-4.54Z"></svg:path><svg:circle cx="16" cy="26" r="4" fill="#cfd8dc"></svg:circle><svg:circle cx="12" cy="18" r="2" fill="#cfd8dc"></svg:circle>`,
})
export class MaterialIconThemeFolderMercurialOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderMessagesIcon],svg[material-icon-theme-folder-messages-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ff9800" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#fff9c4" d="M31 12H15a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h3v3a1 1 0 0 0 1 1h.697a1 1 0 0 0 .555-.168L26 26h5a1 1 0 0 0 1-1V13a1 1 0 0 0-1-1m-15 6h8v2h-8Zm10 6H16v-2h10Zm4-8H16v-2h14Z"></svg:path>`,
})
export class MaterialIconThemeFolderMessagesIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderMessagesOpenIcon],svg[material-icon-theme-folder-messages-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ff9800" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#fff9c4" d="M31 12H15a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h3v3a1 1 0 0 0 1 1h.697a1 1 0 0 0 .555-.168L26 26h5a1 1 0 0 0 1-1V13a1 1 0 0 0-1-1m-15 6h8v2h-8Zm10 6H16v-2h10Zm4-8H16v-2h14Z"></svg:path>`,
})
export class MaterialIconThemeFolderMessagesOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderMetaIcon],svg[material-icon-theme-folder-meta-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#7cb342" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#dcedc8" d="M16 16h-2v13a1 1 0 0 0 1 1h13v-2H16Z"></svg:path><svg:path fill="#dcedc8" d="M31 12H19a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V13a1 1 0 0 0-1-1m-5 12h-6v-2h6Zm4-4H20v-2h10Zm0-4H20v-2h10Z"></svg:path>`,
})
export class MaterialIconThemeFolderMetaIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderMetaOpenIcon],svg[material-icon-theme-folder-meta-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#7cb342" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#dcedc8" d="M16 16h-2v13a1 1 0 0 0 1 1h13v-2H16Z"></svg:path><svg:path fill="#dcedc8" d="M31 12H19a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V13a1 1 0 0 0-1-1m-5 12h-6v-2h6Zm4-4H20v-2h10Zm0-4H20v-2h10Z"></svg:path>`,
})
export class MaterialIconThemeFolderMetaOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderMiddlewareIcon],svg[material-icon-theme-folder-middleware-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#5c6bc0" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#c5cae9" d="M30.107 20H32v-4a2 2 0 0 0-2-2h-4v-2a2 2 0 0 0-4 0v2h-4a2 2 0 0 0-2 2v4h-2a2 2 0 0 0 0 4h2v4a2 2 0 0 0 2 2h4v-1.893a2.074 2.074 0 0 1 1.664-2.08A2 2 0 0 1 26 28v2h4a2 2 0 0 0 2-2v-4h-2a2 2 0 0 1-1.973-2.336A2.074 2.074 0 0 1 30.107 20"></svg:path>`,
})
export class MaterialIconThemeFolderMiddlewareIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderMiddlewareOpenIcon],svg[material-icon-theme-folder-middleware-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#5c6bc0" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#c5cae9" d="M30.107 20H32v-4a2 2 0 0 0-2-2h-4v-2a2 2 0 0 0-4 0v2h-4a2 2 0 0 0-2 2v4h-2a2 2 0 0 0 0 4h2v4a2 2 0 0 0 2 2h4v-1.893a2.074 2.074 0 0 1 1.664-2.08A2 2 0 0 1 26 28v2h4a2 2 0 0 0 2-2v-4h-2a2 2 0 0 1-1.973-2.336A2.074 2.074 0 0 1 30.107 20"></svg:path>`,
})
export class MaterialIconThemeFolderMiddlewareOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderMjmlIcon],svg[material-icon-theme-folder-mjml-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ff5722" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:rect width="12" height="4" x="14" y="24" fill="#ffccbc" rx="2"></svg:rect><svg:rect width="12" height="4" x="20" y="18" fill="#ffccbc" rx="2"></svg:rect><svg:rect width="12" height="4" x="14" y="12" fill="#ffccbc" rx="2"></svg:rect><svg:circle cx="30" cy="26" r="2" fill="#ffccbc"></svg:circle><svg:circle cx="16" cy="20" r="2" fill="#ffccbc"></svg:circle><svg:circle cx="30" cy="14" r="2" fill="#ffccbc"></svg:circle>`,
})
export class MaterialIconThemeFolderMjmlIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderMjmlOpenIcon],svg[material-icon-theme-folder-mjml-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ff5722" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:rect width="12" height="4" x="14" y="24" fill="#ffccbc" rx="2"></svg:rect><svg:rect width="12" height="4" x="20" y="18" fill="#ffccbc" rx="2"></svg:rect><svg:rect width="12" height="4" x="14" y="12" fill="#ffccbc" rx="2"></svg:rect><svg:circle cx="30" cy="26" r="2" fill="#ffccbc"></svg:circle><svg:circle cx="16" cy="20" r="2" fill="#ffccbc"></svg:circle><svg:circle cx="30" cy="14" r="2" fill="#ffccbc"></svg:circle>`,
})
export class MaterialIconThemeFolderMjmlOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderMobileIcon],svg[material-icon-theme-folder-mobile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ff5252" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#ffcdd2" d="M12 14v10a2 2 0 0 0 2 2h8v-2h-6V14h12v2h4v-2a2 2 0 0 0-2-2H14a2 2 0 0 0-2 2"></svg:path><svg:path fill="#ffcdd2" d="M24 19v8a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1m6 7h-4v-6h4Z"></svg:path>`,
})
export class MaterialIconThemeFolderMobileIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderMobileOpenIcon],svg[material-icon-theme-folder-mobile-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ff5252" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#ffcdd2" d="M12 14v10a2 2 0 0 0 2 2h8v-2h-6V14h12v2h4v-2a2 2 0 0 0-2-2H14a2 2 0 0 0-2 2"></svg:path><svg:path fill="#ffcdd2" d="M24 19v8a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1m6 7h-4v-6h4Z"></svg:path>`,
})
export class MaterialIconThemeFolderMobileOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderMockIcon],svg[material-icon-theme-folder-mock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#8d6e63" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#d7ccc8" d="M16 24.667V28h3.333l9.83-9.83l-3.333-3.333Zm15.74-9.074a.885.885 0 0 0 .001-1.252v-.001l-2.08-2.08a.885.885 0 0 0-1.253-.001l-1.627 1.627l3.333 3.333Z"></svg:path>`,
})
export class MaterialIconThemeFolderMockIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderMockOpenIcon],svg[material-icon-theme-folder-mock-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#8d6e63" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#d7ccc8" d="M16 24.667V28h3.333l9.83-9.83l-3.333-3.333Zm15.74-9.074a.885.885 0 0 0 .001-1.252v-.001l-2.08-2.08a.885.885 0 0 0-1.253-.001l-1.627 1.627l3.333 3.333Z"></svg:path>`,
})
export class MaterialIconThemeFolderMockOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderMojoIcon],svg[material-icon-theme-folder-mojo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ff7043" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#ffccbc" d="M30.495 17.1a9 9 0 0 0-.88-.913c-.765-.663-1.638-1.14-2.365-1.84A5.4 5.4 0 0 1 26.253 8a7.5 7.5 0 0 0-2.845 1.462a8.59 8.59 0 0 0-2.743 9.877a.8.8 0 0 1 .094.364a.62.62 0 0 1-.4.556a.72.72 0 0 1-.757-.135a5.42 5.42 0 0 1-.785-5.87a7.8 7.8 0 0 0-2.802 6.469a8 8 0 0 0 .335 1.669a7.2 7.2 0 0 0 .808 1.918a8.02 8.02 0 0 0 5.675 3.566a8.8 8.8 0 0 0 6.934-1.769a6.44 6.44 0 0 0 1.746-7.324l-.145-.285a12 12 0 0 0-.88-1.398m-3.61 6.99a4 4 0 0 1-1.258.662a3.33 3.33 0 0 1-3.318-.913a3.13 3.13 0 0 0 2.415-2.275a6.2 6.2 0 0 0-.32-2.467a4 4 0 0 1 .19-2.282a7 7 0 0 0 .727 1.17c.873 1.112 2.256 1.597 2.554 3.109a1.7 1.7 0 0 1 .073.47a3.34 3.34 0 0 1-1.063 2.525Z"></svg:path>`,
})
export class MaterialIconThemeFolderMojoIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderMojoOpenIcon],svg[material-icon-theme-folder-mojo-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ff7043" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#ffccbc" d="M30.495 17.1a9 9 0 0 0-.88-.913c-.765-.663-1.638-1.14-2.365-1.84A5.4 5.4 0 0 1 26.253 8a7.5 7.5 0 0 0-2.845 1.462a8.59 8.59 0 0 0-2.743 9.877a.8.8 0 0 1 .094.364a.62.62 0 0 1-.4.556a.72.72 0 0 1-.757-.135a5.42 5.42 0 0 1-.785-5.87a7.8 7.8 0 0 0-2.802 6.469a8 8 0 0 0 .335 1.669a7.2 7.2 0 0 0 .808 1.918a8.02 8.02 0 0 0 5.675 3.566a8.8 8.8 0 0 0 6.934-1.769a6.44 6.44 0 0 0 1.746-7.324l-.145-.285a12 12 0 0 0-.88-1.398m-3.61 6.99a4 4 0 0 1-1.258.662a3.33 3.33 0 0 1-3.318-.913a3.13 3.13 0 0 0 2.415-2.275a6.2 6.2 0 0 0-.32-2.467a4 4 0 0 1 .19-2.282a7 7 0 0 0 .727 1.17c.873 1.112 2.256 1.597 2.554 3.109a1.7 1.7 0 0 1 .073.47a3.34 3.34 0 0 1-1.063 2.525Z"></svg:path>`,
})
export class MaterialIconThemeFolderMojoOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderMoonIcon],svg[material-icon-theme-folder-moon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#7e57c2" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#d1c4e9" d="M32 14a3.995 3.995 0 0 0-7.64-1.64A7.7 7.7 0 0 0 22 12a8 8 0 1 0 8 8a7.7 7.7 0 0 0-.36-2.36A3.99 3.99 0 0 0 32 14m-8 8a4 4 0 0 1 0-8a4 4 0 0 0 4 4a4 4 0 0 1-4 4"></svg:path>`,
})
export class MaterialIconThemeFolderMoonIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderMoonOpenIcon],svg[material-icon-theme-folder-moon-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#7e57c2" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#d1c4e9" d="M32 14a3.995 3.995 0 0 0-7.64-1.64A7.7 7.7 0 0 0 22 12a8 8 0 1 0 8 8a7.7 7.7 0 0 0-.36-2.36A3.99 3.99 0 0 0 32 14m-8 8a4 4 0 0 1 0-8a4 4 0 0 0 4 4a4 4 0 0 1-4 4"></svg:path>`,
})
export class MaterialIconThemeFolderMoonOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderNetlifyIcon],svg[material-icon-theme-folder-netlify-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#26a69a" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#a7ffeb" d="M22 16h-4v6h2v-4h1.5a.5.5 0 0 1 .5.5V22h2v-4a2 2 0 0 0-2-2"></svg:path><svg:rect width="6" height="2" x="26" y="18" fill="#a7ffeb" rx=".5"></svg:rect><svg:rect width="2" height="6" x="20" y="8" fill="#a7ffeb" rx=".5"></svg:rect><svg:rect width="6" height="2" x="10" y="18" fill="#a7ffeb" rx=".5"></svg:rect><svg:rect width="2" height="6" x="20" y="24" fill="#a7ffeb" rx=".5"></svg:rect><svg:path fill="#a7ffeb" d="m13 12.172l1.414-1.414l2.828 2.828L15.828 15zM15.828 23l1.414 1.414l-2.828 2.828L13 25.828z"></svg:path>`,
})
export class MaterialIconThemeFolderNetlifyIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderNetlifyOpenIcon],svg[material-icon-theme-folder-netlify-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#26a69a" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#a7ffeb" d="M22 16h-4v6h2v-4h1.5a.5.5 0 0 1 .5.5V22h2v-4a2 2 0 0 0-2-2"></svg:path><svg:rect width="6" height="2" x="26" y="18" fill="#a7ffeb" rx=".5"></svg:rect><svg:rect width="2" height="6" x="20" y="8" fill="#a7ffeb" rx=".5"></svg:rect><svg:rect width="6" height="2" x="10" y="18" fill="#a7ffeb" rx=".5"></svg:rect><svg:rect width="2" height="6" x="20" y="24" fill="#a7ffeb" rx=".5"></svg:rect><svg:path fill="#a7ffeb" d="m13 12.172l1.414-1.414l2.828 2.828L15.828 15zM15.828 23l1.414 1.414l-2.828 2.828L13 25.828z"></svg:path>`,
})
export class MaterialIconThemeFolderNetlifyOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderNextIcon],svg[material-icon-theme-folder-next-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#546e7a" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#cfd8dc" d="M24 12a8 8 0 1 0 3.969 14.94L22 19v4.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5h1.232a.5.5 0 0 1 .416.223l6.736 10.103A7.993 7.993 0 0 0 24 12m4 8h-2v-3.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5Z"></svg:path>`,
})
export class MaterialIconThemeFolderNextIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderNextOpenIcon],svg[material-icon-theme-folder-next-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#546e7a" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#cfd8dc" d="M24 12a8 8 0 1 0 3.969 14.94L22 19v4.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5h1.232a.5.5 0 0 1 .416.223l6.736 10.103A7.993 7.993 0 0 0 24 12m4 8h-2v-3.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5Z"></svg:path>`,
})
export class MaterialIconThemeFolderNextOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderNgrxStoreIcon],svg[material-icon-theme-folder-ngrx-store-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#8bc34a" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#dcedc8" d="m23 9l-9 3l1 12l8 4l8-4l1-12Zm-1.869 2.785a2.3 2.3 0 0 1 1.124.324a5.3 5.3 0 0 0 1.214.305a6.63 6.63 0 0 1 4.433 2.834c.448.875.356 1.348-.33 1.7c-.59.303-1.799.157-3.554-.432l-1.481-.497l-.527.199a3.53 3.53 0 0 0-1.84 1.73a2.9 2.9 0 0 0-.218 1.622a2.9 2.9 0 0 0 .41 1.645c.35.613 1.15 1.395 1.287 1.259c.038-.038-.044-.287-.182-.553a1.1 1.1 0 0 1-.178-.595c.038-.061.4.165.802.504a5.6 5.6 0 0 0 2.898 1.333c.787.081.967-.064.377-.307a1.8 1.8 0 0 1-.547-.363c-.23-.252-.243-.244.738-.462a4.6 4.6 0 0 0 1.887-.996c.023-.073-.173-.102-.495-.077c-.292.023-.53-.006-.53-.067a3 3 0 0 1 .53-.656a4.93 4.93 0 0 0 1.585-3.596l.08-1.114l.258.53a3.2 3.2 0 0 1 .133 2.148c-.168.605-.056.672.253.152c.382-.644.505-.543.438.364a3.95 3.95 0 0 1-1.183 2.561c-.627.68-.551.803.207.34c.731-.449.83-.379.453.325a6.08 6.08 0 0 1-3.782 2.831a6.2 6.2 0 0 1-2.487.16a7.33 7.33 0 0 1-5.44-3.849a13 13 0 0 0-.836-1.437c-.403-.542-.436-.785-.166-1.197a.92.92 0 0 0 .111-.73c-.257-1.451-.248-1.496.337-2.088c.512-.513.543-.581.543-1.182c0-.52.052-.69.29-.925a1 1 0 0 1 .561-.291a2.88 2.88 0 0 0 1.624-.865a1.67 1.67 0 0 1 1.203-.587"></svg:path>`,
})
export class MaterialIconThemeFolderNgrxStoreIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderNgrxStoreOpenIcon],svg[material-icon-theme-folder-ngrx-store-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#8bc34a" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#dcedc8" d="m23 9l-9 3l1 12l8 4l8-4l1-12Zm-1.869 2.785a2.3 2.3 0 0 1 1.124.324a5.3 5.3 0 0 0 1.214.305a6.63 6.63 0 0 1 4.433 2.834c.448.875.356 1.348-.33 1.7c-.59.303-1.799.157-3.554-.432l-1.481-.497l-.527.199a3.53 3.53 0 0 0-1.84 1.73a2.9 2.9 0 0 0-.218 1.622a2.9 2.9 0 0 0 .41 1.645c.35.613 1.15 1.395 1.287 1.259c.038-.038-.044-.287-.182-.553a1.1 1.1 0 0 1-.178-.595c.038-.061.4.165.802.504a5.6 5.6 0 0 0 2.898 1.333c.787.081.967-.064.377-.307a1.8 1.8 0 0 1-.547-.363c-.23-.252-.243-.244.738-.462a4.6 4.6 0 0 0 1.887-.996c.023-.073-.173-.102-.495-.077c-.292.023-.53-.006-.53-.067a3 3 0 0 1 .53-.656a4.93 4.93 0 0 0 1.585-3.596l.08-1.114l.258.53a3.2 3.2 0 0 1 .133 2.148c-.168.605-.056.672.253.152c.382-.644.505-.543.438.364a3.95 3.95 0 0 1-1.183 2.561c-.627.68-.551.803.207.34c.731-.449.83-.379.453.325a6.08 6.08 0 0 1-3.782 2.831a6.2 6.2 0 0 1-2.487.16a7.33 7.33 0 0 1-5.44-3.849a13 13 0 0 0-.836-1.437c-.403-.542-.436-.785-.166-1.197a.92.92 0 0 0 .111-.73c-.257-1.451-.248-1.496.337-2.088c.512-.513.543-.581.543-1.182c0-.52.052-.69.29-.925a1 1 0 0 1 .561-.291a2.88 2.88 0 0 0 1.624-.865a1.67 1.67 0 0 1 1.203-.587"></svg:path>`,
})
export class MaterialIconThemeFolderNgrxStoreOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderNodeIcon],svg[material-icon-theme-folder-node-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#8bc34a" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#dcedc8" d="m25 12l-7 4.072v7.854L25 28l7-4.074v-7.854Z"></svg:path>`,
})
export class MaterialIconThemeFolderNodeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderNodeOpenIcon],svg[material-icon-theme-folder-node-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#8bc34a" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#dcedc8" d="m25 12l-7 4.072v7.854L25 28l7-4.074v-7.854Z"></svg:path>`,
})
export class MaterialIconThemeFolderNodeOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderNuxtIcon],svg[material-icon-theme-folder-nuxt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#546e7a" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#00e676" d="M22.498 27.998h6.927a1.56 1.56 0 0 0 1.127-.617a1.3 1.3 0 0 0 .188-.631a1.26 1.26 0 0 0-.188-.618l-4.685-8.053a1.14 1.14 0 0 0-.443-.443a1.5 1.5 0 0 0-.67-.188a1.29 1.29 0 0 0-1.074.63l-1.182 2.054l-2.376-3.986a1.3 1.3 0 0 0-.43-.497a1.52 1.52 0 0 0-1.247 0a1.5 1.5 0 0 0-.51.497l-5.799 9.986a1.2 1.2 0 0 0-.134.618a1.24 1.24 0 0 0 .134.63a1.3 1.3 0 0 0 .497.43a1.3 1.3 0 0 0 .63.188h4.363a4.26 4.26 0 0 0 3.88-2.241l2.12-3.692l1.114-1.933l3.436 5.866h-4.564Zm-4.9-2h-3.04l4.533-7.8l2.28 3.893l-1.52 2.667a2.34 2.34 0 0 1-2.267 1.24Z"></svg:path>`,
})
export class MaterialIconThemeFolderNuxtIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderNuxtOpenIcon],svg[material-icon-theme-folder-nuxt-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#546e7a" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#00e676" d="M22.498 27.998h6.927a1.56 1.56 0 0 0 1.127-.617a1.3 1.3 0 0 0 .188-.631a1.26 1.26 0 0 0-.188-.618l-4.685-8.053a1.14 1.14 0 0 0-.443-.443a1.5 1.5 0 0 0-.67-.188a1.29 1.29 0 0 0-1.074.63l-1.182 2.054l-2.376-3.986a1.3 1.3 0 0 0-.43-.497a1.52 1.52 0 0 0-1.247 0a1.5 1.5 0 0 0-.51.497l-5.799 9.986a1.2 1.2 0 0 0-.134.618a1.24 1.24 0 0 0 .134.63a1.3 1.3 0 0 0 .497.43a1.3 1.3 0 0 0 .63.188h4.363a4.26 4.26 0 0 0 3.88-2.241l2.12-3.692l1.114-1.933l3.436 5.866h-4.564Zm-4.9-2h-3.04l4.533-7.8l2.28 3.893l-1.52 2.667a2.34 2.34 0 0 1-2.267 1.24Z"></svg:path>`,
})
export class MaterialIconThemeFolderNuxtOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderObsidianIcon],svg[material-icon-theme-folder-obsidian-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill-rule="evenodd"><svg:path fill="#673AB7" d="m221.5 120.58l-20.6-17.16A32 32 0 0 0 180.42 96H64c-17.67 0-32 14.33-32 32v256c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32V160c0-17.67-14.33-32-32-32H241.98a32 32 0 0 1-20.48-7.42"></svg:path><svg:g fill="#D1C4E9"><svg:path d="M336.2 318.24c8.07-1.51 12.6-2.02 21.66-2.02c-34.18-89.72 48.95-139.27 18.63-155.11c-17-8.88-52.32 37.77-72.93 56.26l-10.67 37.41c19.77 16.2 36.25 39.63 43.31 63.46m75.04 128.91c13.05 3.85 26.66-5.92 28.52-19.42c1.35-9.81 3.51-20.65 8.24-30.94c-2.66-7.51-25.72-71.18-104.74-56.39c7.6 31.4-4.15 64.54-22.83 91.02c33.14.31 59.29 6.45 90.81 15.73"></svg:path><svg:path d="M478.76 346.86c7.02-12.43-16.61-22.28-28.74-50.78c-10.52-24.69 4.93-53.82-8.18-66.23l-40.17-38.02c-14.09 38.27-40.29 56.91-17.12 123.38c37.13 6.98 67.48 27.2 77.55 58.42c0 0 13.67-21.49 16.66-26.77m-221.26 5.78c-8.21 18.67 17.96 36.81 43.46 63.29c29-40.73 24.17-88.95-15.12-127.91z"></svg:path></svg:g></svg:g>`,
})
export class MaterialIconThemeFolderObsidianIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderObsidianOpenIcon],svg[material-icon-theme-folder-obsidian-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill-rule="evenodd"><svg:path fill="#673AB7" d="M463.47 192H151.06c-13.77 0-26 8.82-30.35 21.89L64 384V160h384c0-17.67-14.33-32-32-32H241.98a32 32 0 0 1-20.48-7.42l-20.6-17.15c-5.75-4.8-13-7.43-20.48-7.43H64c-17.67 0-32 14.33-32 32v256c0 17.67 14.33 32 32 32h352l76.88-179.39c1.7-3.98 2.59-8.28 2.59-12.61c0-17.67-14.33-32-32-32"></svg:path><svg:g fill="#D1C4E9"><svg:path d="M336.2 318.24c8.07-1.51 12.6-2.02 21.66-2.02c-34.18-89.72 48.95-139.27 18.63-155.11c-17-8.88-52.32 37.77-72.93 56.26l-10.67 37.41c19.77 16.2 36.25 39.63 43.31 63.46m75.04 128.91c13.05 3.85 26.66-5.92 28.52-19.42c1.35-9.81 3.51-20.65 8.24-30.94c-2.66-7.51-25.72-71.18-104.74-56.39c7.6 31.4-4.15 64.54-22.83 91.02c33.14.31 59.29 6.45 90.81 15.73"></svg:path><svg:path d="M478.76 346.86c7.02-12.43-16.61-22.28-28.74-50.78c-10.52-24.69 4.93-53.82-8.18-66.23l-40.17-38.02c-14.09 38.27-40.29 56.91-17.12 123.38c37.13 6.98 67.48 27.2 77.55 58.42c0 0 13.67-21.49 16.66-26.77m-221.26 5.78c-8.21 18.67 17.96 36.81 43.46 63.29c29-40.73 24.17-88.95-15.12-127.91z"></svg:path></svg:g></svg:g>`,
})
export class MaterialIconThemeFolderObsidianOpenIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderOtherIcon],svg[material-icon-theme-folder-other-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ff7043" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#ffccbc" d="M22 10a10 10 0 1 0 10 10a10 10 0 0 0-10-10m-6 12.125a2 2 0 1 1 2-2a2 2 0 0 1-2 2m6 0a2 2 0 1 1 2-2a2 2 0 0 1-2 2m6 0a2 2 0 1 1 2-2a2 2 0 0 1-2 2"></svg:path>`,
})
export class MaterialIconThemeFolderOtherIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderOtherOpenIcon],svg[material-icon-theme-folder-other-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ff7043" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#ffccbc" d="M22 10a10 10 0 1 0 10 10a10 10 0 0 0-10-10m-6 12.125a2 2 0 1 1 2-2a2 2 0 0 1-2 2m6 0a2 2 0 1 1 2-2a2 2 0 0 1-2 2m6 0a2 2 0 1 1 2-2a2 2 0 0 1-2 2"></svg:path>`,
})
export class MaterialIconThemeFolderOtherOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderPackagesIcon],svg[material-icon-theme-folder-packages-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#1e88e5" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#bbdefb" d="M31.2 12.933L29.6 10.8A2 2 0 0 0 28 10h-8a2 2 0 0 0-1.6.8l-1.6 2.133a4 4 0 0 0-.8 2.4V26a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V15.333a4 4 0 0 0-.8-2.4M20 12h8l1.5 2h-11Zm6 10v4h-4v-4h-4l6-6l6 6Z"></svg:path>`,
})
export class MaterialIconThemeFolderPackagesIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderPackagesOpenIcon],svg[material-icon-theme-folder-packages-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#1e88e5" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#bbdefb" d="M31.2 12.933L29.6 10.8A2 2 0 0 0 28 10h-8a2 2 0 0 0-1.6.8l-1.6 2.133a4 4 0 0 0-.8 2.4V26a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V15.333a4 4 0 0 0-.8-2.4M20 12h8l1.5 2h-11Zm6 10v4h-4v-4h-4l6-6l6 6Z"></svg:path>`,
})
export class MaterialIconThemeFolderPackagesOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderPdfIcon],svg[material-icon-theme-folder-pdf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ef5350" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#ffcdd2" d="M22.433 17.937a14.7 14.7 0 0 1-1.015 2.407a9 9 0 0 0-.494 1.036l.109-.041a18.3 18.3 0 0 1 3.342-.924q-.218-.151-.42-.324a6.25 6.25 0 0 1-1.522-2.154m6.474 3.812a1.14 1.14 0 0 1-.9.299a7.2 7.2 0 0 1-2.985-.739a20 20 0 0 0-4.047.75l-.184.07c-1.243 2.123-2.162 3.07-2.974 3.07a1 1 0 0 1-.44-.104l-.48-.315l-.023-.053a.83.83 0 0 1-.053-.538a3.8 3.8 0 0 1 1.883-2.118a5.5 5.5 0 0 1 .89-.49c.296-.522.616-1.128.952-1.804a17.3 17.3 0 0 0 1.087-2.924l-.005-.012a4.94 4.94 0 0 1-.219-3.265c.11-.386.42-.776.794-.776h.237a.85.85 0 0 1 .608.246c.659.659.357 2.267.022 3.595l-.035.141a5.8 5.8 0 0 0 1.596 2.556a8 8 0 0 0 .862.586a12 12 0 0 1 1.298-.074c1.24 0 1.986.224 2.277.686a.8.8 0 0 1 .124.551a.96.96 0 0 1-.285.662M30 10H16a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V12a2 2 0 0 0-2-2m-1.486 11.043c-.112-.106-.522-.356-1.918-.356a.26.26 0 0 0-.23.1a5.4 5.4 0 0 0 1.902.512a1.3 1.3 0 0 0 .196-.015l.034-.006c.048-.014.08-.03.09-.13a1 1 0 0 0-.074-.105m-9.185 1.455a4 4 0 0 0-.475.314a3.66 3.66 0 0 0-1.215 1.692c.455-.156 1.043-.812 1.692-2.006Zm3.016-6.906l.056-.037c.073-.323.12-.601.16-.823l.03-.162c.096-.541.085-.853-.098-1.096l-.147-.05a1 1 0 0 0-.067.118a3.65 3.65 0 0 0 .067 2.05Z"></svg:path>`,
})
export class MaterialIconThemeFolderPdfIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderPdfOpenIcon],svg[material-icon-theme-folder-pdf-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ef5350" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#ffcdd2" d="M22.433 17.937a14.7 14.7 0 0 1-1.015 2.407a9 9 0 0 0-.494 1.036l.109-.041a18.3 18.3 0 0 1 3.342-.924q-.218-.151-.42-.324a6.25 6.25 0 0 1-1.522-2.154m6.474 3.812a1.14 1.14 0 0 1-.9.299a7.2 7.2 0 0 1-2.985-.739a20 20 0 0 0-4.047.75l-.184.07c-1.243 2.123-2.162 3.07-2.974 3.07a1 1 0 0 1-.44-.104l-.48-.315l-.023-.053a.83.83 0 0 1-.053-.538a3.8 3.8 0 0 1 1.883-2.118a5.5 5.5 0 0 1 .89-.49c.296-.522.616-1.128.952-1.804a17.3 17.3 0 0 0 1.087-2.924l-.005-.012a4.94 4.94 0 0 1-.219-3.265c.11-.386.42-.776.794-.776h.237a.85.85 0 0 1 .608.246c.659.659.357 2.267.022 3.595l-.035.141a5.8 5.8 0 0 0 1.596 2.556a8 8 0 0 0 .862.586a12 12 0 0 1 1.298-.074c1.24 0 1.986.224 2.277.686a.8.8 0 0 1 .124.551a.96.96 0 0 1-.285.662M30 10H16a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V12a2 2 0 0 0-2-2m-1.486 11.043c-.112-.106-.522-.356-1.918-.356a.26.26 0 0 0-.23.1a5.4 5.4 0 0 0 1.902.512a1.3 1.3 0 0 0 .196-.015l.034-.006c.048-.014.08-.03.09-.13a1 1 0 0 0-.074-.105m-9.185 1.455a4 4 0 0 0-.475.314a3.66 3.66 0 0 0-1.215 1.692c.455-.156 1.043-.812 1.692-2.006Zm3.016-6.906l.056-.037c.073-.323.12-.601.16-.823l.03-.162c.096-.541.085-.853-.098-1.096l-.147-.05a1 1 0 0 0-.067.118a3.65 3.65 0 0 0 .067 2.05Z"></svg:path>`,
})
export class MaterialIconThemeFolderPdfOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderPdmIcon],svg[material-icon-theme-folder-pdm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#9575cd" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#d1c4e9" d="m23.51 10.276l-7 3.937a1 1 0 0 0-.51.872v7.83a1 1 0 0 0 .51.872l7 3.937a1 1 0 0 0 .98 0l7-3.937a1 1 0 0 0 .51-.872v-7.83a1 1 0 0 0-.51-.872l-7-3.937a1 1 0 0 0-.98 0m-5.255 5.25l5.5-3.098a.5.5 0 0 1 .49 0L26 13.42V14l-8 4v-2.038a.5.5 0 0 1 .255-.435ZM26 16v5.52l-5.24-2.9Zm-2.246 9.572l-5.5-3.099a.5.5 0 0 1-.254-.435V20l.59-.29l8.1 4.48l-2.444 1.381a.5.5 0 0 1-.492 0ZM30 22.038a.5.5 0 0 1-.255.435l-1.005.567l-.74-.41v-8.09l1.746.986a.5.5 0 0 1 .254.436Z"></svg:path>`,
})
export class MaterialIconThemeFolderPdmIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderPdmOpenIcon],svg[material-icon-theme-folder-pdm-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#9575cd" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#d1c4e9" d="m23.51 10.276l-7 3.937a1 1 0 0 0-.51.872v7.83a1 1 0 0 0 .51.872l7 3.937a1 1 0 0 0 .98 0l7-3.937a1 1 0 0 0 .51-.872v-7.83a1 1 0 0 0-.51-.872l-7-3.937a1 1 0 0 0-.98 0m-5.255 5.25l5.5-3.098a.5.5 0 0 1 .49 0L26 13.42V14l-8 4v-2.038a.5.5 0 0 1 .255-.435ZM26 16v5.52l-5.24-2.9Zm-2.246 9.572l-5.5-3.099a.5.5 0 0 1-.254-.435V20l.59-.29l8.1 4.48l-2.444 1.381a.5.5 0 0 1-.492 0ZM30 22.038a.5.5 0 0 1-.255.435l-1.005.567l-.74-.41v-8.09l1.746.986a.5.5 0 0 1 .254.436Z"></svg:path>`,
})
export class MaterialIconThemeFolderPdmOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderPhpIcon],svg[material-icon-theme-folder-php-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#1e88e5" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#bbdefb" d="M12 18H8.5a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V24h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2m0 3.5a.5.5 0 0 1-.5.5H10v-2h1.5a.5.5 0 0 1 .5.5ZM28 18h-3.5a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V24h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2m0 3.5a.5.5 0 0 1-.5.5H26v-2h1.5a.5.5 0 0 1 .5.5ZM20 18h-2v-3.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V20h1.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V20a2 2 0 0 0-2-2"></svg:path>`,
})
export class MaterialIconThemeFolderPhpIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderPhpOpenIcon],svg[material-icon-theme-folder-php-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#1e88e5" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#bbdefb" d="M12 18H8.5a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V24h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2m0 3.5a.5.5 0 0 1-.5.5H10v-2h1.5a.5.5 0 0 1 .5.5ZM28 18h-3.5a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V24h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2m0 3.5a.5.5 0 0 1-.5.5H26v-2h1.5a.5.5 0 0 1 .5.5ZM20 18h-2v-3.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V20h1.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V20a2 2 0 0 0-2-2"></svg:path>`,
})
export class MaterialIconThemeFolderPhpOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderPhpmailerIcon],svg[material-icon-theme-folder-phpmailer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#616161" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#eee" d="M14 14h-4v14h2v-6h2a4 4 0 0 0 0-8m0 6h-2v-4h2a2 2 0 0 1 0 4"></svg:path><svg:path fill="#ffd180" d="M20 17v11h12V17l-6 6z"></svg:path><svg:path fill="#ffd180" d="M32 14H20l6 6z"></svg:path>`,
})
export class MaterialIconThemeFolderPhpmailerIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderPhpmailerOpenIcon],svg[material-icon-theme-folder-phpmailer-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#616161" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#eee" d="M14 14h-4v14h2v-6h2a4 4 0 0 0 0-8m0 6h-2v-4h2a2 2 0 0 1 0 4"></svg:path><svg:path fill="#ffd180" d="M20 17v11h12V17l-6 6z"></svg:path><svg:path fill="#ffd180" d="M32 14H20l6 6z"></svg:path>`,
})
export class MaterialIconThemeFolderPhpmailerOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderPipeIcon],svg[material-icon-theme-folder-pipe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#00897b" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#b2dfdb" d="M30 22v2h-6v-2h2v-2h-2v-4a2 2 0 0 0-2-2h-6v-2h-2v8h2v-2h4v2h-2v2h2v4a2 2 0 0 0 2 2h8v2h2v-8Z"></svg:path>`,
})
export class MaterialIconThemeFolderPipeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderPipeOpenIcon],svg[material-icon-theme-folder-pipe-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#00897b" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#b2dfdb" d="M30 22v2h-6v-2h2v-2h-2v-4a2 2 0 0 0-2-2h-6v-2h-2v8h2v-2h4v2h-2v2h2v4a2 2 0 0 0 2 2h8v2h2v-8Z"></svg:path>`,
})
export class MaterialIconThemeFolderPipeOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderPlasticIcon],svg[material-icon-theme-folder-plastic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ff9800" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#fffde7" d="m30.973 14.255l-6.955-3.984a2.05 2.05 0 0 0-2.033 0l-6.955 3.984A2.05 2.05 0 0 0 14 16.032v7.94a1.93 1.93 0 0 0 1.016 1.708l.984.56v-9.306a1.7 1.7 0 0 1 .14-.58a1.64 1.64 0 0 1 .689-.798l5.398-3.092a1.59 1.59 0 0 1 1.576 0l5.398 3.092a1.6 1.6 0 0 1 .749.983a1.6 1.6 0 0 1 .05.395v6.138a1.58 1.58 0 0 1-.797 1.375l-5.406 3.096a1.6 1.6 0 0 1-.797.21v2.246a2.06 2.06 0 0 0 1.02-.27l6.95-3.982A2.05 2.05 0 0 0 32 23.97v-7.938a2 2 0 0 0-.076-.548a2.03 2.03 0 0 0-.95-1.229Z"></svg:path><svg:path fill="#fffde7" d="m23.539 25.412l3.89-2.228a1.14 1.14 0 0 0 .57-.985v-4.402a1.14 1.14 0 0 0-.572-.988l-3.862-2.211a1.14 1.14 0 0 0-1.13 0l-3.862 2.211a1.15 1.15 0 0 0-.512.618a1.2 1.2 0 0 0-.061.37l-.014 9.578L20 28.505v-4.468l2.402 1.375a1.15 1.15 0 0 0 1.137 0m-3.2-3.5a.68.68 0 0 1-.339-.585v-2.649a.7.7 0 0 1 .04-.232a.68.68 0 0 1 .304-.36l2.321-1.329a.68.68 0 0 1 .671 0l2.322 1.33a.68.68 0 0 1 .328.45a1 1 0 0 1 .014.141v2.65a.68.68 0 0 1-.34.585l-2.322 1.329a.7.7 0 0 1-.339.09a.7.7 0 0 1-.339-.089Z"></svg:path>`,
})
export class MaterialIconThemeFolderPlasticIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderPlasticOpenIcon],svg[material-icon-theme-folder-plastic-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ff9800" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#fffde7" d="m30.973 14.255l-6.955-3.984a2.05 2.05 0 0 0-2.033 0l-6.955 3.984A2.05 2.05 0 0 0 14 16.032v7.94a1.93 1.93 0 0 0 1.016 1.708l.984.56v-9.306a1.7 1.7 0 0 1 .14-.58a1.64 1.64 0 0 1 .689-.798l5.398-3.092a1.59 1.59 0 0 1 1.576 0l5.398 3.092a1.6 1.6 0 0 1 .749.983a1.6 1.6 0 0 1 .05.395v6.138a1.58 1.58 0 0 1-.797 1.375l-5.406 3.096a1.6 1.6 0 0 1-.797.21v2.246a2.06 2.06 0 0 0 1.02-.27l6.95-3.982A2.05 2.05 0 0 0 32 23.97v-7.938a2 2 0 0 0-.076-.548a2.03 2.03 0 0 0-.95-1.229Z"></svg:path><svg:path fill="#fffde7" d="m23.539 25.412l3.89-2.228a1.14 1.14 0 0 0 .57-.985v-4.402a1.14 1.14 0 0 0-.572-.988l-3.862-2.211a1.14 1.14 0 0 0-1.13 0l-3.862 2.211a1.15 1.15 0 0 0-.512.618a1.2 1.2 0 0 0-.061.37l-.014 9.578L20 28.505v-4.468l2.402 1.375a1.15 1.15 0 0 0 1.137 0m-3.2-3.5a.68.68 0 0 1-.339-.585v-2.649a.7.7 0 0 1 .04-.232a.68.68 0 0 1 .304-.36l2.321-1.329a.68.68 0 0 1 .671 0l2.322 1.33a.68.68 0 0 1 .328.45a1 1 0 0 1 .014.141v2.65a.68.68 0 0 1-.34.585l-2.322 1.329a.7.7 0 0 1-.339.09a.7.7 0 0 1-.339-.089Z"></svg:path>`,
})
export class MaterialIconThemeFolderPlasticOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderPluginIcon],svg[material-icon-theme-folder-plugin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#0288d1" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#b3e5fc" d="M30.107 20H32v-4a2 2 0 0 0-2-2h-4v-2a2 2 0 0 0-4 0v2h-4a2 2 0 0 0-2 2v4h-2a2 2 0 0 0 0 4h2v4a2 2 0 0 0 2 2h4v-1.893a2.074 2.074 0 0 1 1.664-2.08A2 2 0 0 1 26 28v2h4a2 2 0 0 0 2-2v-4h-2a2 2 0 0 1-1.973-2.336A2.074 2.074 0 0 1 30.107 20"></svg:path>`,
})
export class MaterialIconThemeFolderPluginIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderPluginOpenIcon],svg[material-icon-theme-folder-plugin-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#0288d1" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#b3e5fc" d="M30.107 20H32v-4a2 2 0 0 0-2-2h-4v-2a2 2 0 0 0-4 0v2h-4a2 2 0 0 0-2 2v4h-2a2 2 0 0 0 0 4h2v4a2 2 0 0 0 2 2h4v-1.893a2.074 2.074 0 0 1 1.664-2.08A2 2 0 0 1 26 28v2h4a2 2 0 0 0 2-2v-4h-2a2 2 0 0 1-1.973-2.336A2.074 2.074 0 0 1 30.107 20"></svg:path>`,
})
export class MaterialIconThemeFolderPluginOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderPolicyIcon],svg[material-icon-theme-folder-policy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#0288d1" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#90caf9" d="m21.972 21.668l.697.696a1.004 1.004 0 0 0 1.414 0l5.626-5.623a1.003 1.003 0 0 0 0-1.413l-.697-.707a1.004 1.004 0 0 0-1.414 0l-.707.707l-1.404-1.404a1.003 1.003 0 0 0 0-1.413a.99.99 0 0 0-1.404 0l-1.414-1.423l.707-.687a.99.99 0 0 0 0-1.403l-.707-.707a.99.99 0 0 0-1.404 0l-5.636 5.633a.99.99 0 0 0 0 1.404l.707.706a.99.99 0 0 0 1.404 0l.717-.706l1.394 1.413l-9.56 9.555a1.003 1.003 0 0 0 0 1.413a.99.99 0 0 0 1.404 0l9.57-9.565l1.404 1.404l-.697.706a.985.985 0 0 0 0 1.414M24 26h6a2 2 0 0 1 2 2v2H22v-2a2 2 0 0 1 2-2"></svg:path>`,
})
export class MaterialIconThemeFolderPolicyIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderPolicyOpenIcon],svg[material-icon-theme-folder-policy-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#0288d1" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#90caf9" d="m21.972 21.668l.697.696a1.004 1.004 0 0 0 1.414 0l5.626-5.623a1.003 1.003 0 0 0 0-1.413l-.697-.707a1.004 1.004 0 0 0-1.414 0l-.707.707l-1.404-1.404a1.003 1.003 0 0 0 0-1.413a.99.99 0 0 0-1.404 0l-1.414-1.423l.707-.687a.99.99 0 0 0 0-1.403l-.707-.707a.99.99 0 0 0-1.404 0l-5.636 5.633a.99.99 0 0 0 0 1.404l.707.706a.99.99 0 0 0 1.404 0l.717-.706l1.394 1.413l-9.56 9.555a1.003 1.003 0 0 0 0 1.413a.99.99 0 0 0 1.404 0l9.57-9.565l1.404 1.404l-.697.706a.985.985 0 0 0 0 1.414M24 26h6a2 2 0 0 1 2 2v2H22v-2a2 2 0 0 1 2-2"></svg:path>`,
})
export class MaterialIconThemeFolderPolicyOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderPowershellIcon],svg[material-icon-theme-folder-powershell-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#03a9f4" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#b3e5fc" d="M31.25 14.034a1 1 0 0 0-.285-.034H14.496a1.03 1.03 0 0 0-.996.731l-3.461 12A1.007 1.007 0 0 0 11.035 28h16.469a1.03 1.03 0 0 0 .996-.731l3.461-12a1.007 1.007 0 0 0-.71-1.235ZM15.001 26a1 1 0 0 1-.556-1.832l4.986-3.323l-3.138-3.138a1 1 0 0 1 1.414-1.414l4 4a1 1 0 0 1-.152 1.54l-6 4A1 1 0 0 1 15 26ZM26 26h-4a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2"></svg:path>`,
})
export class MaterialIconThemeFolderPowershellIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderPowershellOpenIcon],svg[material-icon-theme-folder-powershell-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#03a9f4" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#b3e5fc" d="M31.25 14.034a1 1 0 0 0-.285-.034H14.496a1.03 1.03 0 0 0-.996.731l-3.461 12A1.007 1.007 0 0 0 11.035 28h16.469a1.03 1.03 0 0 0 .996-.731l3.461-12a1.007 1.007 0 0 0-.71-1.235ZM15.001 26a1 1 0 0 1-.556-1.832l4.986-3.323l-3.138-3.138a1 1 0 0 1 1.414-1.414l4 4a1 1 0 0 1-.152 1.54l-6 4A1 1 0 0 1 15 26ZM26 26h-4a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2"></svg:path>`,
})
export class MaterialIconThemeFolderPowershellOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderPrismaIcon],svg[material-icon-theme-folder-prisma-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#00bfa5" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#a7ffeb" d="m30.209 26.275l-9.76 2.39a.42.42 0 0 1-.51-.224a.3.3 0 0 1-.012-.165l3.486-13.827a.35.35 0 0 1 .412-.21a.34.34 0 0 1 .221.15l6.457 11.352a.362.362 0 0 1-.218.51zm1.672-.564l-7.475-13.144a1.335 1.335 0 0 0-1.647-.453a1.2 1.2 0 0 0-.468.357l-8.106 10.873a.87.87 0 0 0 .014 1.092l3.964 5.083a1.41 1.41 0 0 0 1.432.435l11.503-2.816a1.22 1.22 0 0 0 .79-.567a.86.86 0 0 0-.007-.86"></svg:path>`,
})
export class MaterialIconThemeFolderPrismaIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderPrismaOpenIcon],svg[material-icon-theme-folder-prisma-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#00bfa5" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#a7ffeb" d="m30.209 26.275l-9.76 2.39a.42.42 0 0 1-.51-.224a.3.3 0 0 1-.012-.165l3.486-13.827a.35.35 0 0 1 .412-.21a.34.34 0 0 1 .221.15l6.457 11.352a.362.362 0 0 1-.218.51zm1.672-.564l-7.475-13.144a1.335 1.335 0 0 0-1.647-.453a1.2 1.2 0 0 0-.468.357l-8.106 10.873a.87.87 0 0 0 .014 1.092l3.964 5.083a1.41 1.41 0 0 0 1.432.435l11.503-2.816a1.22 1.22 0 0 0 .79-.567a.86.86 0 0 0-.007-.86"></svg:path>`,
})
export class MaterialIconThemeFolderPrismaOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderPrivateIcon],svg[material-icon-theme-folder-private-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ff5252" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#ffcdd2" d="M24 14a8 8 0 1 0 8 8a8 8 0 0 0-8-8m6 8a5.96 5.96 0 0 1-1.115 3.471l-8.356-8.356A5.99 5.99 0 0 1 30 22m-12 0a5.96 5.96 0 0 1 1.115-3.471l8.356 8.356A5.99 5.99 0 0 1 18 22"></svg:path>`,
})
export class MaterialIconThemeFolderPrivateIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderPrivateOpenIcon],svg[material-icon-theme-folder-private-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ff5252" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#ffcdd2" d="M24 14a8 8 0 1 0 8 8a8 8 0 0 0-8-8m6 8a5.96 5.96 0 0 1-1.115 3.471l-8.356-8.356A5.99 5.99 0 0 1 30 22m-12 0a5.96 5.96 0 0 1 1.115-3.471l8.356 8.356A5.99 5.99 0 0 1 18 22"></svg:path>`,
})
export class MaterialIconThemeFolderPrivateOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderProjectIcon],svg[material-icon-theme-folder-project-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#1e88e5" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#bbdefb" d="M27.354 20.871L32 25.343l-2.74 2.624l-4.613-4.471v-.737l1.947-1.888zm.751-2.023l-.8-.768l-3.953 3.839v1.577L18.706 28L16 25.343l4.612-4.472h1.626l.644-.624l-3.17-3.08h-1.071l-2.32-2.271l2.162-2.096l2.311 2.24v1.048l3.21 3.072l2.194-2.128l-.791-.808l1.072-1.049h-2.196l-.536-.52L26.48 12l.545.527v2.129l1.081-1.057l2.707 2.625a2.22 2.22 0 0 1 0 3.184l-1.627-1.609Z"></svg:path>`,
})
export class MaterialIconThemeFolderProjectIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderProjectOpenIcon],svg[material-icon-theme-folder-project-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#1e88e5" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#bbdefb" d="M27.354 20.871L32 25.343l-2.74 2.624l-4.613-4.471v-.737l1.947-1.888zm.751-2.023l-.8-.768l-3.953 3.839v1.577L18.706 28L16 25.343l4.612-4.472h1.626l.644-.624l-3.17-3.08h-1.071l-2.32-2.271l2.162-2.096l2.311 2.24v1.048l3.21 3.072l2.194-2.128l-.791-.808l1.072-1.049h-2.196l-.536-.52L26.48 12l.545.527v2.129l1.081-1.057l2.707 2.625a2.22 2.22 0 0 1 0 3.184l-1.627-1.609Z"></svg:path>`,
})
export class MaterialIconThemeFolderProjectOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderProtoIcon],svg[material-icon-theme-folder-proto-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ff7043" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#ffccbc" d="m22 12l-10 6v4l10 6l10-6v-4Zm0 12l-6.667-4L22 16l6.667 4Z"></svg:path>`,
})
export class MaterialIconThemeFolderProtoIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderProtoOpenIcon],svg[material-icon-theme-folder-proto-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ff7043" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#ffccbc" d="m22 12l-10 6v4l10 6l10-6v-4Zm0 12l-6.667-4L22 16l6.667 4Z"></svg:path>`,
})
export class MaterialIconThemeFolderProtoOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderPublicIcon],svg[material-icon-theme-folder-public-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#039be5" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#b3e5fc" d="M22 10a10 10 0 1 0 10 10a10 10 0 0 0-10-10m6.918 6H25.96a15.8 15.8 0 0 0-1.342-3.54a8.04 8.04 0 0 1 4.3 3.54M22 12a14.1 14.1 0 0 1 1.89 4h-3.78A14.1 14.1 0 0 1 22 12m-2.618.46A15.8 15.8 0 0 0 18.04 16h-2.958a8.04 8.04 0 0 1 4.3-3.54M14.263 22a7.7 7.7 0 0 1 0-4h3.407a15.5 15.5 0 0 0 0 4Zm.82 2h2.957a15.8 15.8 0 0 0 1.342 3.54a8.04 8.04 0 0 1-4.3-3.54ZM22 28a14.1 14.1 0 0 1-1.89-4h3.78A14.1 14.1 0 0 1 22 28m2.31-6h-4.62a13.4 13.4 0 0 1 0-4h4.62a13.4 13.4 0 0 1 0 4m.308 5.54A15.8 15.8 0 0 0 25.96 24h2.958a8.04 8.04 0 0 1-4.3 3.54M29.737 22H26.33a15.5 15.5 0 0 0 0-4h3.407a7.7 7.7 0 0 1 0 4"></svg:path>`,
})
export class MaterialIconThemeFolderPublicIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderPublicOpenIcon],svg[material-icon-theme-folder-public-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#039be5" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#b3e5fc" d="M22 10a10 10 0 1 0 10 10a10 10 0 0 0-10-10m6.918 6H25.96a15.8 15.8 0 0 0-1.342-3.54a8.04 8.04 0 0 1 4.3 3.54M22 12a14.1 14.1 0 0 1 1.89 4h-3.78A14.1 14.1 0 0 1 22 12m-2.618.46A15.8 15.8 0 0 0 18.04 16h-2.958a8.04 8.04 0 0 1 4.3-3.54M14.263 22a7.7 7.7 0 0 1 0-4h3.407a15.5 15.5 0 0 0 0 4Zm.82 2h2.957a15.8 15.8 0 0 0 1.342 3.54a8.04 8.04 0 0 1-4.3-3.54ZM22 28a14.1 14.1 0 0 1-1.89-4h3.78A14.1 14.1 0 0 1 22 28m2.31-6h-4.62a13.4 13.4 0 0 1 0-4h4.62a13.4 13.4 0 0 1 0 4m.308 5.54A15.8 15.8 0 0 0 25.96 24h2.958a8.04 8.04 0 0 1-4.3 3.54M29.737 22H26.33a15.5 15.5 0 0 0 0-4h3.407a7.7 7.7 0 0 1 0 4"></svg:path>`,
})
export class MaterialIconThemeFolderPublicOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderPythonIcon],svg[material-icon-theme-folder-python-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#42a5f5" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#0277bd" d="M21.123 10a2.574 2.574 0 0 0-2.574 2.574v1.512h3.86c.352 0 .64.513.64.864h-6.426a2.574 2.574 0 0 0-2.574 2.574v3.404A2.57 2.57 0 0 0 16.62 23.5h1.065v-2.412a2.565 2.565 0 0 1 2.556-2.574h4.734a2.565 2.565 0 0 0 2.574-2.556v-3.384A2.574 2.574 0 0 0 24.975 10zm-.648 1.449c.36 0 .648.109.648.64s-.288.8-.648.8c-.351 0-.64-.27-.64-.8s.289-.64.64-.64"></svg:path><svg:path fill="#fdd835" d="M28.412 14.5v2.412a2.565 2.565 0 0 1-2.556 2.574h-4.733a2.565 2.565 0 0 0-2.574 2.556v3.382A2.574 2.574 0 0 0 21.12 28h3.854a2.574 2.574 0 0 0 2.574-2.574v-1.513h-3.862c-.351 0-.638-.512-.638-.863h6.426a2.574 2.574 0 0 0 2.574-2.574v-3.403a2.574 2.574 0 0 0-2.574-2.573Zm-8.675 4.063l-.004.003q.017-.003.034-.003Zm5.886 6.547c.35 0 .639.27.639.801a.64.64 0 0 1-.64.64c-.36 0-.647-.109-.647-.64s.288-.8.648-.8Z"></svg:path>`,
})
export class MaterialIconThemeFolderPythonIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderPythonOpenIcon],svg[material-icon-theme-folder-python-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#42a5f5" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#0277bd" d="M21.123 10a2.574 2.574 0 0 0-2.574 2.574v1.512h3.86c.352 0 .64.513.64.864h-6.426a2.574 2.574 0 0 0-2.574 2.574v3.404A2.57 2.57 0 0 0 16.62 23.5h1.065v-2.412a2.565 2.565 0 0 1 2.556-2.574h4.734a2.565 2.565 0 0 0 2.574-2.556v-3.384A2.574 2.574 0 0 0 24.975 10zm-.648 1.449c.36 0 .648.109.648.64s-.288.8-.648.8c-.351 0-.64-.27-.64-.8s.289-.64.64-.64"></svg:path><svg:path fill="#fdd835" d="M28.412 14.5v2.412a2.565 2.565 0 0 1-2.556 2.574h-4.733a2.565 2.565 0 0 0-2.574 2.556v3.382A2.574 2.574 0 0 0 21.12 28h3.854a2.574 2.574 0 0 0 2.574-2.574v-1.513h-3.862c-.351 0-.638-.512-.638-.863h6.426a2.574 2.574 0 0 0 2.574-2.574v-3.403a2.574 2.574 0 0 0-2.574-2.573Zm-8.675 4.063l-.004.003q.017-.003.034-.003Zm5.886 6.547c.35 0 .639.27.639.801a.64.64 0 0 1-.64.64c-.36 0-.647-.109-.647-.64s.288-.8.648-.8Z"></svg:path>`,
})
export class MaterialIconThemeFolderPythonOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderQuasarIcon],svg[material-icon-theme-folder-quasar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#1976d2" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#bbdefb" d="M24.026 20A2.028 2.028 0 1 1 22 18.048A1.99 1.99 0 0 1 24.026 20m6.967-5.002a10 10 0 0 0-1.59-2.002L27.06 14.3a7.9 7.9 0 0 0-2.445-1.365a9.3 9.3 0 0 0-1.893 2.6a11.74 11.74 0 0 1 7.8 2.618l1.473-.819A9.8 9.8 0 0 0 30.993 15Zm0 10.002A9.8 9.8 0 0 0 32 22.67l-2.342-1.303a7.2 7.2 0 0 0 .005-2.72a10 10 0 0 0-3.285-.278a10.7 10.7 0 0 1 1.545 7.812l1.473.82A10 10 0 0 0 30.993 25m-8.992 5a10.8 10.8 0 0 0 2.597-.326v-2.603a7.9 7.9 0 0 0 2.451-1.357a9.1 9.1 0 0 0-1.392-2.88a11.36 11.36 0 0 1-6.255 5.196v1.64a10.8 10.8 0 0 0 2.599.33m-8.994-5a10 10 0 0 0 1.592 2.004L16.94 25.7a7.8 7.8 0 0 0 2.447 1.365a9.3 9.3 0 0 0 1.891-2.6a11.75 11.75 0 0 1-7.8-2.618l-1.471.819a9.8 9.8 0 0 0 1 2.333Zm0-10A9.8 9.8 0 0 0 12 17.33l2.343 1.303a7.2 7.2 0 0 0-.005 2.72a10 10 0 0 0 3.286.278a10.7 10.7 0 0 1-1.545-7.814l-1.475-.82a10 10 0 0 0-1.597 2.005Zm8.992-5a10.8 10.8 0 0 0-2.597.326v2.603a7.9 7.9 0 0 0-2.45 1.357a9.1 9.1 0 0 0 1.393 2.88A11.35 11.35 0 0 1 24.6 11.97v-1.64A10.8 10.8 0 0 0 22 10Z"></svg:path>`,
})
export class MaterialIconThemeFolderQuasarIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderQuasarOpenIcon],svg[material-icon-theme-folder-quasar-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#1976d2" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#bbdefb" d="M24.026 20A2.028 2.028 0 1 1 22 18.048A1.99 1.99 0 0 1 24.026 20m6.967-5.002a10 10 0 0 0-1.59-2.002L27.06 14.3a7.9 7.9 0 0 0-2.445-1.365a9.3 9.3 0 0 0-1.893 2.6a11.74 11.74 0 0 1 7.8 2.618l1.473-.819A9.8 9.8 0 0 0 30.993 15Zm0 10.002A9.8 9.8 0 0 0 32 22.67l-2.342-1.303a7.2 7.2 0 0 0 .005-2.72a10 10 0 0 0-3.285-.278a10.7 10.7 0 0 1 1.545 7.812l1.473.82A10 10 0 0 0 30.993 25m-8.992 5a10.8 10.8 0 0 0 2.597-.326v-2.603a7.9 7.9 0 0 0 2.451-1.357a9.1 9.1 0 0 0-1.392-2.88a11.36 11.36 0 0 1-6.255 5.196v1.64a10.8 10.8 0 0 0 2.599.33m-8.994-5a10 10 0 0 0 1.592 2.004L16.94 25.7a7.8 7.8 0 0 0 2.447 1.365a9.3 9.3 0 0 0 1.891-2.6a11.75 11.75 0 0 1-7.8-2.618l-1.471.819a9.8 9.8 0 0 0 1 2.333Zm0-10A9.8 9.8 0 0 0 12 17.33l2.343 1.303a7.2 7.2 0 0 0-.005 2.72a10 10 0 0 0 3.286.278a10.7 10.7 0 0 1-1.545-7.814l-1.475-.82a10 10 0 0 0-1.597 2.005Zm8.992-5a10.8 10.8 0 0 0-2.597.326v2.603a7.9 7.9 0 0 0-2.45 1.357a9.1 9.1 0 0 0 1.393 2.88A11.35 11.35 0 0 1 24.6 11.97v-1.64A10.8 10.8 0 0 0 22 10Z"></svg:path>`,
})
export class MaterialIconThemeFolderQuasarOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderQueueIcon],svg[material-icon-theme-folder-queue-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#039be5" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#b3e5fc" d="M24 16v-2h-3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3v-2h-2v-8Zm8-2v-2h-5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h5v-2h-4V14Zm-16 2h2v8h-2z"></svg:path>`,
})
export class MaterialIconThemeFolderQueueIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderQueueOpenIcon],svg[material-icon-theme-folder-queue-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#039be5" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#b3e5fc" d="M24 16v-2h-3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3v-2h-2v-8Zm8-2v-2h-5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h5v-2h-4V14Zm-16 2h2v8h-2z"></svg:path>`,
})
export class MaterialIconThemeFolderQueueOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderReactComponentsIcon],svg[material-icon-theme-folder-react-components-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#00bcd4" d="m6.922 3.768l-.644-.536A1 1 0 0 0 5.638 3H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H7.562a1 1 0 0 1-.64-.232"></svg:path><svg:g fill="#b2ebf2"><svg:path d="M10.5 8.399c2.924 0 4.714 1.037 4.714 1.6s-1.79 1.602-4.714 1.602S5.785 10.564 5.785 10s1.79-1.601 4.715-1.601m0-.8c-3.038 0-5.5 1.075-5.5 2.4s2.462 2.402 5.5 2.402S16 11.326 16 10s-2.463-2.401-5.5-2.401"></svg:path><svg:path d="M10.5 9.2a.786.8 0 1 0 .785.8a.786.8 0 0 0-.785-.8"></svg:path><svg:path d="M8.322 5.8c.793 0 2.333 1.272 3.538 3.4c1.463 2.58 1.476 4.677.997 4.959a.354.36 0 0 1-.18.04c-.792 0-2.333-1.271-3.538-3.399c-1.463-2.58-1.476-4.677-.997-4.96a.354.36 0 0 1 .18-.04m0-.8a1.128 1.149 0 0 0-.572.147c-1.128.663-.81 3.374.708 6.054C9.748 13.478 11.491 15 12.678 15a1.128 1.149 0 0 0 .572-.148c1.127-.663.81-3.373-.71-6.053C11.25 6.522 9.509 5 8.323 5Z"></svg:path><svg:path d="M12.677 5.8a.354.36 0 0 1 .18.04c.48.283.466 2.38-.997 4.96c-1.206 2.128-2.746 3.4-3.538 3.4a.354.36 0 0 1-.18-.04c-.48-.284-.466-2.38.997-4.96c1.206-2.128 2.746-3.4 3.538-3.4m0-.8c-1.186 0-2.929 1.522-4.22 3.8c-1.517 2.68-1.835 5.39-.707 6.052a1.128 1.149 0 0 0 .572.148c1.186 0 2.929-1.523 4.22-3.8c1.517-2.68 1.835-5.39.708-6.052A1.128 1.149 0 0 0 12.677 5"></svg:path></svg:g>`,
})
export class MaterialIconThemeFolderReactComponentsIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderReactComponentsOpenIcon],svg[material-icon-theme-folder-react-components-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#00bcd4" d="M14.484 6H4.72a1 1 0 0 0-.949.684L2 12V5h13a1 1 0 0 0-1-1H7.562a1 1 0 0 1-.64-.232l-.644-.536A1 1 0 0 0 5.638 3H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h11l2.403-5.606A1 1 0 0 0 14.483 6"></svg:path><svg:g fill="#b2ebf2"><svg:path d="M10.5 8.399c2.924 0 4.714 1.037 4.714 1.6s-1.79 1.602-4.714 1.602S5.785 10.564 5.785 10s1.79-1.601 4.715-1.601m0-.8c-3.038 0-5.5 1.075-5.5 2.4s2.462 2.402 5.5 2.402S16 11.326 16 10s-2.463-2.401-5.5-2.401"></svg:path><svg:path d="M10.5 9.2a.786.8 0 1 0 .785.8a.786.8 0 0 0-.785-.8"></svg:path><svg:path d="M8.322 5.8c.793 0 2.333 1.272 3.538 3.4c1.463 2.58 1.476 4.677.997 4.959a.354.36 0 0 1-.18.04c-.792 0-2.333-1.271-3.538-3.399c-1.463-2.58-1.476-4.677-.997-4.96a.354.36 0 0 1 .18-.04m0-.8a1.128 1.149 0 0 0-.572.147c-1.128.663-.81 3.374.708 6.054C9.748 13.478 11.491 15 12.678 15a1.128 1.149 0 0 0 .572-.148c1.127-.663.81-3.373-.71-6.053C11.25 6.522 9.509 5 8.323 5Z"></svg:path><svg:path d="M12.677 5.8a.354.36 0 0 1 .18.04c.48.283.466 2.38-.997 4.96c-1.206 2.128-2.746 3.4-3.538 3.4a.354.36 0 0 1-.18-.04c-.48-.284-.466-2.38.997-4.96c1.206-2.128 2.746-3.4 3.538-3.4m0-.8c-1.186 0-2.929 1.522-4.22 3.8c-1.517 2.68-1.835 5.39-.707 6.052a1.128 1.149 0 0 0 .572.148c1.186 0 2.929-1.523 4.22-3.8c1.517-2.68 1.835-5.39.708-6.052A1.128 1.149 0 0 0 12.677 5"></svg:path></svg:g>`,
})
export class MaterialIconThemeFolderReactComponentsOpenIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderReduxReducerIcon],svg[material-icon-theme-folder-redux-reducer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ef5350" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#ffcdd2" stroke="#ffcdd2" stroke-linejoin="round" stroke-width=".293" d="M25.948 24.114a1.65 1.65 0 0 0 .97-.6a1.8 1.8 0 0 0 .381-1.274a1.72 1.72 0 0 0-1.69-1.596h-.06a1.724 1.724 0 0 0-1.61 1.814a1.85 1.85 0 0 0 .34.985a8.85 8.85 0 0 1-3.863 3.799a6.15 6.15 0 0 1-3.876.771a3.13 3.13 0 0 1-2.32-1.411a3.67 3.67 0 0 1-.18-3.738a5.8 5.8 0 0 1 1.605-1.986a.3.3 0 0 0 .098-.313a14 14 0 0 1-.315-1.298a.29.29 0 0 0-.172-.213a.28.28 0 0 0-.272.036c-3.731 2.836-3.326 6.763-2.188 8.579a5.36 5.36 0 0 0 4.294 2.229q.125 0 .24-.005h.04a6 6 0 0 0 1.5-.188a9.88 9.88 0 0 0 7.078-5.591Z"></svg:path><svg:path fill="#ffcdd2" stroke="#ffcdd2" stroke-linejoin="round" stroke-width=".293" d="M30.327 20.428a10.12 10.12 0 0 0-7.774-3.69q-.133 0-.265.003h-.234a1.61 1.61 0 0 0-1.377-.78h-.053a1.62 1.62 0 0 0-1.175.535a1.806 1.806 0 0 0 .039 2.466a1.67 1.67 0 0 0 1.19.494h.064a1.68 1.68 0 0 0 1.375-.886h.27a8.83 8.83 0 0 1 5.126 1.646a6.6 6.6 0 0 1 2.522 3.202a3.48 3.48 0 0 1-.046 2.831a3.39 3.39 0 0 1-3.137 1.97a5.8 5.8 0 0 1-2.32-.522a.27.27 0 0 0-.304.054a14 14 0 0 1-1.088.912a.294.294 0 0 0 .039.495a7.7 7.7 0 0 0 3.313.84l.192.002a5.66 5.66 0 0 0 4.886-2.948a6.39 6.39 0 0 0-1.243-6.624Z"></svg:path><svg:path fill="#ffcdd2" stroke="#ffcdd2" stroke-linejoin="round" stroke-width=".293" d="m17.249 24.295l.123-.01l-.123.02a1.705 1.705 0 0 0 1.67 1.682h.053a1.715 1.715 0 0 0 1.64-1.778a1.78 1.78 0 0 0-.507-1.224a1.6 1.6 0 0 0-1.187-.493h-.076a9.6 9.6 0 0 1-1.154-5.448a6.83 6.83 0 0 1 1.39-3.853a3.97 3.97 0 0 1 2.842-1.363h.055c2.438 0 3.415 3.34 3.477 4.491a.29.29 0 0 0 .216.265c.299.073.822.246 1.213.384a.27.27 0 0 0 .266-.048a.3.3 0 0 0 .105-.247C26.928 12.088 24.204 10 21.804 10a5.96 5.96 0 0 0-5.36 4.39a11.38 11.38 0 0 0 .936 9.155a1.5 1.5 0 0 0-.131.75Z"></svg:path>`,
})
export class MaterialIconThemeFolderReduxReducerIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
