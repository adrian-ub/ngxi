import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMetaAdsIcon],svg[arcticons-meta-ads-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24 17.85l-8 8.3h16z"></svg:path>`,
})
export class ArcticonsMetaAdsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMetadataremoverIcon],svg[arcticons-metadataremover-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="31" height="39" x="8.5" y="4.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:rect width="31" height="21" x="8.5" y="4.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.15 7.21c-.554 0-1 .447-1 1v13.72l2.93-2.719l3.26 3.21L27 13.51l9.55 9.144a1 1 0 0 0 .3-.714V8.21a1 1 0 0 0-1-1zm2.68 23.3h6.43m0 4.13h-6.43m0 3.86h6.51m7.11-6.91l5.73 5.73m-5.75.04l5.73-5.73"></svg:path><svg:circle cx="31.325" cy="34.465" r="6.25" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="19.75" cy="12.815" r="2.921" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="11.9" cy="30.505" r=".75" fill="currentColor"></svg:circle><svg:circle cx="11.9" cy="34.64" r=".75" fill="currentColor"></svg:circle><svg:circle cx="11.9" cy="38.5" r=".75" fill="currentColor"></svg:circle>`,
})
export class ArcticonsMetadataremoverIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMetagerIcon],svg[arcticons-metager-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.09 15.654V5.837c0-.186.14-.337.326-.337h23.759c7.02 0 9.091 6.467 9.091 9.814v6.711m0 0v12.826c0 3.675-3.861 7.649-7.536 7.649H13.578c-3.502 0-6.844-4.147-6.844-7.649v-8.21a.34.34 0 0 1 .342-.337c6.34.032 6.017.903 6-3.938a.34.34 0 0 1 .336-.34z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.408 26.503c0-.093.075-.169.168-.169h4.073a2.53 2.53 0 0 1 2.528 2.528v6.21a2.53 2.53 0 0 1-2.528 2.528h-1.714a2.53 2.53 0 0 1-2.527-2.528z"></svg:path>`,
})
export class ArcticonsMetagerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMetamaskIcon],svg[arcticons-metamask-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.971 35.016h2.262l.726 3.415h-3.335"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m42.158 31.771l-11.57.213l-4.355 3.032l.384-18.232l2.391-5.934l11.613-4.611L42.5 11.96l-1.708 6.746l.171 3.415l-1.11 1.638zl-2.092 8.496l-8.539-2.647l-4.568 4.141h-2.988m15.882-18.002l-8.155-2.406m9.094-2.647l1.494-.256m0 1.878l-1.404.171m-14.443 4.745l7.949-.177"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m35.647 31.891l-4.12 5.729l-.939-5.636l3.8-6.917l-2.69-3.714l-5.081-4.569L40.621 6.239M26.233 35.016l5.294 2.604"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m27.45 29.663l3.186-1.185l-2.274-1.185zm1.558-18.813h-5.037m.058 24.166h-2.262l-.726 3.415h2.583"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m5.842 31.771l11.57.213l4.355 3.032l-.384-18.232l-2.391-5.934L7.379 6.239L5.5 11.96l1.708 6.746l-.171 3.415l1.11 1.638zl2.092 8.496l8.539-2.647l4.568 4.141h2.988M8.147 23.759l8.155-2.406m-9.094-2.647l-1.495-.256m0 1.878l1.405.171m14.443 4.745l-7.949-.177"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m12.353 31.891l4.12 5.729l.939-5.636l-3.8-6.917l2.69-3.714l5.081-4.569L7.379 6.239m14.388 28.777l-5.294 2.604"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m20.55 29.663l-3.186-1.185l2.274-1.185zM18.992 10.85h5.037"></svg:path>`,
})
export class ArcticonsMetamaskIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMetatrader4Icon],svg[arcticons-metatrader-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="26.158" r="8.28" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24" cy="9.597" r="4.658" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.108 18.85c.01-.082.01-.165.01-.248v-2.37h7.764v2.37c0 .083 0 .166.01.249m.766-9.254a5.177 5.177 0 0 1 5.175 5.176v3.83a2.97 2.97 0 0 1-2.94 2.98m-13.786 0a2.98 2.98 0 0 1-2.94-2.98v-3.83a5.177 5.177 0 0 1 5.175-5.176"></svg:path><svg:circle cx="9.658" cy="34.439" r="4.658" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.617 33.183a2 2 0 0 0-.22.115l-2.053 1.185l-3.881-6.723l2.053-1.185c.071-.042.143-.083.21-.133m-8.397 3.963a5.177 5.177 0 0 1 1.894-7.07l3.317-1.915a2.97 2.97 0 0 1 4.051 1.056m6.894 11.94a2.98 2.98 0 0 1-1.112 4.036l-3.317 1.915a5.177 5.177 0 0 1-7.07-1.894"></svg:path><svg:circle cx="38.342" cy="34.439" r="4.658" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.274 26.442c.067.05.139.091.21.133l2.053 1.185l-3.881 6.723l-2.053-1.185q-.106-.065-.22-.116m7.63 5.291a5.177 5.177 0 0 1-7.07 1.894l-3.316-1.915a2.97 2.97 0 0 1-1.112-4.036m6.894-11.94a2.98 2.98 0 0 1 4.051-1.055l3.317 1.914a5.177 5.177 0 0 1 1.894 7.07m-15.566.253v-9l-4.83 6.046h5.962"></svg:path>`,
})
export class ArcticonsMetatrader4Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMetatrader5Icon],svg[arcticons-metatrader-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="26.158" r="8.28" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24" cy="9.597" r="4.658" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.108 18.85c.01-.082.01-.165.01-.248v-2.37h7.764v2.37c0 .083 0 .166.01.249m.766-9.254a5.177 5.177 0 0 1 5.175 5.176v3.83a2.97 2.97 0 0 1-2.94 2.98m-13.786 0a2.98 2.98 0 0 1-2.94-2.98v-3.83a5.177 5.177 0 0 1 5.175-5.176"></svg:path><svg:circle cx="9.658" cy="34.439" r="4.658" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.617 33.183a2 2 0 0 0-.22.115l-2.053 1.185l-3.881-6.723l2.053-1.185c.071-.042.143-.083.21-.133m-8.397 3.963a5.177 5.177 0 0 1 1.894-7.07l3.317-1.915a2.97 2.97 0 0 1 4.051 1.056m6.894 11.94a2.98 2.98 0 0 1-1.112 4.036l-3.317 1.915a5.177 5.177 0 0 1-7.07-1.894"></svg:path><svg:circle cx="38.342" cy="34.439" r="4.658" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.274 26.442c.067.05.139.091.21.133l2.053 1.185l-3.881 6.723l-2.053-1.185q-.106-.065-.22-.116m7.63 5.291a5.177 5.177 0 0 1-7.07 1.894l-3.316-1.915a2.97 2.97 0 0 1-1.112-4.036m6.894-11.94a2.98 2.98 0 0 1 4.051-1.055l3.317 1.914a5.177 5.177 0 0 1 1.894 7.07M21.244 29.9c.621.52 1.224.758 2.73.758h.26a2.523 2.523 0 0 0 2.522-2.523h0a2.523 2.523 0 0 0-2.523-2.523h-2.99v-3.954h5.513"></svg:path>`,
})
export class ArcticonsMetatrader5Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMeteoIcon],svg[arcticons-meteo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 16a8 8 0 1 1-8 8a8 8 0 0 1 8-8m-.02 19.82v6.68m-8.35-10.16l-4.72 4.73m1.27-13.09H5.5m10.16-8.35l-4.73-4.72m13.09 1.27V5.5m8.35 10.16l4.72-4.73m-1.27 13.09h6.68m-10.16 8.35l4.73 4.72"></svg:path>`,
})
export class ArcticonsMeteoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMeteoFranceIcon],svg[arcticons-meteo-france-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.08 16.15A13.72 13.72 0 0 1 32.89 34a13.24 13.24 0 0 1-17.78 0a13.72 13.72 0 0 1-2.19-17.89a13.22 13.22 0 0 1 17.16-4.37m2.5-1l1.56 1.66l1.56 1.67l-2.29.52l-2.18.52l.77-2.19ZM26.44 4.5c-6.13 15.81-3.43 27.56.32 39v-.1"></svg:path>`,
})
export class ArcticonsMeteoFranceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMeteocielIcon],svg[arcticons-meteociel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.628 37.626c11.675.122 17.389-.015 24.84.025m0-.012a6.625 6.625 0 0 0 1.243-13.166a7.69 7.69 0 0 0-7.204-5.216a8.2 8.2 0 0 0-2.857.546A10.211 10.211 0 0 0 8.4 24.4a6.951 6.951 0 0 0 2.856 13.29m11.676-22.357a9.1 9.1 0 0 1 7.824-4.72a8.78 8.78 0 0 1 7.701 4.72a9.41 9.41 0 0 1-.186 9.315"></svg:path>`,
})
export class ArcticonsMeteocielIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMeteocoolcomIcon],svg[arcticons-meteocoolcom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m9.144 27.16l-2.395-.002c-.837-.041-1.293-.747-1.246-1.397c.116-1.594.386-8.658 7.852-8.836c.413-5.414 7.278-9.38 11.828-5.143c3.205-1.978 8.384-2.17 11.458 1.698M12.287 27.051H40.78s1.423.1 1.665-1.068c.31-1.495-.686-5.471-3.215-7.383c.137-.888-.279-1.901-.694-2.482"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m9.816 17.622l-3.64.052s-.853-.403-.21-2.37c.642-1.968 2.242-4.383 5.198-4.328c.291-4.15 5.43-6.124 7.735-3.929c4.38-1.385 7.75.068 9.335 3.115M12.987 29.143l-1.006 2.753m7.036-2.753l-1.006 2.753m7.037-2.753l-1.006 2.753m7.036-2.753l-1.006 2.753m7.035-2.753l-1.005 2.753m-21.596 2.241L13.5 36.89m7.036-2.753L19.53 36.89m7.037-2.753L25.56 36.89m7.037-2.753L31.59 36.89m-15.049 2.217l-1.005 2.753m7.035-2.753l-1.006 2.753m7.035-2.753l-1.005 2.753"></svg:path>`,
})
export class ArcticonsMeteocoolcomIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMeteorIcon],svg[arcticons-meteor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.543 27.472h-7.872a1.736 1.736 0 0 0 0 3.471h13.886a6.943 6.943 0 0 0 0-13.886H5.236a1.736 1.736 0 0 0 0 3.472h6.145"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.547 20.529H11.381a1.736 1.736 0 0 0 0 3.471h6.145m13.088 0H17.526a1.736 1.736 0 0 0 0 3.472h6.145"></svg:path><svg:circle cx="37.557" cy="24" r="3.739" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsMeteorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMeteorolojiIcon],svg[arcticons-meteoroloji-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 43.5C7.566 30.626 8.001 16.656 8.045 4.5h31.91c.043 12.156.48 26.126-15.955 39"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.556 19.016c1.047-.218 1.729.304 2.911-.359c1.348-.755 4.622.972 4.686 2.75c3.03-.373 4.137 5.213 1.058 5.213H15.218c-1.25 0-2.263-.488-2.263-1.738c.047-1.846 2.245-1.882 2.337-2.13c.036-.1 1.181-1.353 1.987-1.666c1.092-.425 2.378.145 3.511-.153c1.362-.358 2.387-1.63 3.765-1.917z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.745 19.3a2.798 2.798 0 0 0-5.552.492c0 .409.09.763.262 1.133m2.536-6.464v2.37m-3.864-.903l1.678 1.678m-3.151 2.186h2.366m6.794-3.823l-1.678 1.678m1.31 10.477l-1.49 5.526h2.283l-1.982 6.992"></svg:path><svg:circle cx="21.542" cy="28.877" r=".75" fill="currentColor"></svg:circle><svg:circle cx="14.208" cy="28.877" r=".75" fill="currentColor"></svg:circle><svg:circle cx="17.94" cy="28.877" r=".75" fill="currentColor"></svg:circle><svg:circle cx="16.087" cy="31.314" r=".75" fill="currentColor"></svg:circle><svg:circle cx="19.741" cy="31.314" r=".75" fill="currentColor"></svg:circle><svg:circle cx="17.381" cy="34.061" r=".75" fill="currentColor"></svg:circle><svg:circle cx="20.43" cy="34.061" r=".75" fill="currentColor"></svg:circle><svg:circle cx="19.741" cy="36.593" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m27.751 28.05l-.91 3.03m6.83-3.03l-.91 3.03m-2.231-2.939l-.91 3.03m1.43.474l-.91 3.03m-2.165-2.516l-.91 3.03m-.852 2.228l-.91 3.03m3.328-4.969l-.91 3.03M8.123 12.3h31.754"></svg:path><svg:circle cx="21.542" cy="39.126" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.52 10.368v-3.95l2 4l2-4v4m5.954-4h2.6m-1.3 4v-4m3.327 2h1.3m.7 2h-2v-4h2m3.029 4.001c-.75 0-1.3-.6-1.3-1.3v-1.35c0-.75.6-1.35 1.3-1.35h0c.75 0 1.35.6 1.35 1.35v1.3c0 .75-.6 1.35-1.35 1.35M19.597 8.418h1.3m.7 2h-2v-4h2"></svg:path><svg:circle cx="22.414" cy="36.593" r=".75" fill="currentColor"></svg:circle>`,
})
export class ArcticonsMeteorolojiIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMeteoswissIcon],svg[arcticons-meteoswiss-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.46 22.69A7.21 7.21 0 0 0 9.57 26.9a6.45 6.45 0 0 0-5.07 6.3c0 2.74 1.64 6.46 6.92 6.46h17a5.05 5.05 0 0 0 4.46-7.44"></svg:path><svg:circle cx="30.41" cy="24.43" r="6.25" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.41 11.34v5.29m9.26-1.46l-3.74 3.74m7.57 5.52h-5.29m1.46 9.25l-3.74-3.74M21.16 15.17l3.74 3.74m-15.95-3.2v-4.77m-2.39 2.39h4.78M9 18.89c4.71-1.81 4.47-5.42 4.44-7.6V9.65A16.8 16.8 0 0 0 9 8.89a16.8 16.8 0 0 0-4.44.76s0 1.22 0 1.64c-.08 2.18-.32 5.79 4.44 7.6"></svg:path>`,
})
export class ArcticonsMeteoswissIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMetlifeIcon],svg[arcticons-metlife-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.792 41.168H7.608a2.11 2.11 0 0 1-2.108-2.11V8.162a1.33 1.33 0 0 1 1.454-1.323c12.74 1.235 22.838 18.445 22.838 31.373z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.208 41.168h22.184a2.11 2.11 0 0 0 2.108-2.109V8.162a1.33 1.33 0 0 0-1.454-1.323c-12.74 1.235-22.838 18.445-22.838 31.373z"></svg:path>`,
})
export class ArcticonsMetlifeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMetrictimeIcon],svg[arcticons-metrictime-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24" cy="24" r="1.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 3v2m0 38v2m19.972-14.511l-1.902-.618m-6.902 9.5l1.175 1.618m7.629-23.478l-1.902.618M36.343 7.011l-1.175 1.618M12.832 39.371l-1.175 1.618M5.93 29.871l-1.902.618m0-12.978l1.902.618m5.727-11.118l1.175 1.618M24 25.5V35m14.266-6.365l-12.841-4.172m4.82-7.796a2.35 2.35 0 0 0 2.358 2.358a2.276 2.276 0 0 0 2.271-2.358v-2.359a2.33 2.33 0 0 0-2.27-2.358a2.406 2.406 0 0 0-2.359 2.358Zm4.105-3.844l-3.494 5.328"></svg:path><svg:circle cx="20.812" cy="18.239" r=".873" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.126 18.413a2.74 2.74 0 0 0 2.096.612h.262a2.31 2.31 0 0 0 2.271-2.271h0a2.31 2.31 0 0 0-2.271-2.271h-2.358v-2.446h4.629m8.996 6.988a1.75 1.75 0 0 0 1.747-1.747h0a1.75 1.75 0 0 0-1.747-1.747h0a1.75 1.75 0 0 0 1.747-1.747h0a1.75 1.75 0 0 0-1.747-1.747m-2.882.612a2.97 2.97 0 0 1 2.184-.612h.698m-2.882 6.376a2.84 2.84 0 0 0 2.184.612h.698"></svg:path><svg:circle cx="20.812" cy="13.61" r=".873" fill="currentColor"></svg:circle>`,
})
export class ArcticonsMetrictimeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMetroIcon],svg[arcticons-metro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.59 40s4.51-5.36 4.86-11.67c.46-8-2.52-12.86-6.48-16.3h0a22 22 0 0 0-6.49-4L24 40L17.51 8A20.7 20.7 0 0 0 11 12c-3.94 3.46-6.94 8.36-6.49 16.3c.4 6.36 4.9 11.7 4.9 11.7"></svg:path>`,
})
export class ArcticonsMetroIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMetroDeIcon],svg[arcticons-metro-de-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5 9.071h12.214L24 22.643L30.786 9.07H43v29.86h-9.5V21.286l-6.786 17.643h-5.428L14.5 21.286v17.643H5z"></svg:path>`,
})
export class ArcticonsMetroDeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMetroFastIcon],svg[arcticons-metro-fast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.5 22.588v-6.87l3.478 6.957l3.479-6.957v6.957m-3.395 2.601h2.261m-1.681 1.794h1.328m1.886 1.572h2.26m-3.922 3.479l2.658-6.957h3.478m-9.891.118h.188m13.476 4.456h-3.13m-.783 2.347l2.348-6.956l2.348 6.956m1.698-.585c.435.521.957.782 1.74.782h1.043c.956 0 1.739-.783 1.739-1.74h0c0-.956-.783-1.738-1.74-1.738h-1.13a1.745 1.745 0 0 1-1.739-1.74h0c0-.956.783-1.739 1.74-1.739h1.043c.782 0 1.304.174 1.739.783m1.402-.917h4.522m-2.261 6.957v-6.957m-12.218-9.473h4.521m-2.26 6.957v-6.957m3.92 6.957v-6.957h2.26c1.305 0 2.349 1.044 2.349 2.348s-1.044 2.348-2.348 2.348h-2.261m2.261 0l2.261 2.261m3.985 0a2.245 2.245 0 0 1-2.26-2.261v-2.348c0-1.304 1.043-2.348 2.26-2.348h0a2.34 2.34 0 0 1 2.348 2.348v2.26a2.34 2.34 0 0 1-2.348 2.349m-19.784-3.479h2.261m1.217 3.479h-3.478v-6.957h3.478"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path>`,
})
export class ArcticonsMetroFastIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMetroMoscowIcon],svg[arcticons-metro-moscow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.725 32.067a16.03 16.03 0 0 1-4.83-11.49C7.905 11.693 15.114 4.497 24 4.5c8.893 0 16.328 7.204 16.1 16.085c-.101 4.139-1.152 7.722-3.96 10.556L23.9 43.501m-5.737-17.829v-11.64l5.835 11.652l5.836-11.641v11.64"></svg:path>`,
})
export class ArcticonsMetroMoscowIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMetro2Icon],svg[arcticons-metro2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.5 42.383h-9a4 4 0 0 1-4-4V9.617a4 4 0 0 1 4-4h.374a3 3 0 0 1 2.204.965l5.361 5.808a4 4 0 0 1 1.061 2.713z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.874 5.617h13a3 3 0 0 1 2.204.965l5.361 5.808a4 4 0 0 1 1.061 2.713v27.28h-13"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.874 5.617h13a3 3 0 0 1 2.204.965l5.361 5.808a4 4 0 0 1 1.061 2.713v23.28a4 4 0 0 1-4 4h-9"></svg:path>`,
})
export class ArcticonsMetro2Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMetrobankIcon],svg[arcticons-metrobank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m14.07 40.702l3.575-33.403H9.23L5.5 40.702Zm10.824 0l-6.144-13.65l1.747-16.194l4.435 9.26l5.85-12.82h7.057L42.5 40.701h-9.011L31.72 27.16Z"></svg:path>`,
})
export class ArcticonsMetrobankIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMetrobankOnlineIcon],svg[arcticons-metrobank-online-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.5 22.905L25.97 34.753c-1.05.606-2.998.596-3.99 0L5.5 22.907V42.54h37z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.308 17.417L22.285 5.97c.95-.68 2.48-.68 3.43 0l15.977 11.447c.95.681.95 1.777 0 2.458L25.715 31.322c-.95.681-2.48.681-3.43 0L6.308 19.875c-.95-.68-.95-1.777 0-2.458M5.6 18.646h36.8"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 31.74V5.54l-9.312 13.106zl9.311-13.094L24 5.54"></svg:path>`,
})
export class ArcticonsMetrobankOnlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMetrodroidIcon],svg[arcticons-metrodroid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M39.5 8.4h-31a4 4 0 0 0-4 4v23.2a4 4 0 0 0 4 4h31a4 4 0 0 0 4-4V12.4a4 4 0 0 0-4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m36.999 21.754l2.925 3.12c.25.221.274.603.053.853l-.005.005l-2.925 3.12M7.872 29.883V16.108l6.875 13.79l6.875-13.769v13.769m10.261-13.762V29.87"></svg:path><svg:rect width="6.867" height="9.134" x="25.016" y="20.736" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="3.433" ry="3.433"></svg:rect>`,
})
export class ArcticonsMetrodroidIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMetrolinkIcon],svg[arcticons-metrolink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.94 28.334c2.362-.364 4.727-.715 7.088-1.104a.244.244 0 0 1 .279.197c.747 4.015 3.317 7.657 6.901 9.626c.116.064.306.166.423.228c3.068 1.612 6.751 1.988 10.09 1.062c.127-.035.334-.095.46-.133c4.842-1.456 8.64-5.76 9.549-10.727a.25.25 0 0 1 .279-.204c2.357.333 4.706.726 7.061 1.074c.131.019.217.14.19.27a21.2 21.2 0 0 1-6.007 10.883a21.27 21.27 0 0 1-11.94 5.79c-.132.017-.346.041-.478.054c-3.878.381-7.897.083-11.504-1.461l-.442-.19c-6.178-2.67-10.857-8.486-12.143-15.092a.23.23 0 0 1 .193-.273M9.602 7.711c3.356-2.93 7.659-4.76 12.099-5.126c.132-.011.347-.025.48-.031c2.573-.132 5.186-.053 7.687.612l.464.127c4.623 1.283 8.757 4.22 11.513 8.146a21.2 21.2 0 0 1 3.631 9.1a.243.243 0 0 1-.204.274c-2.374.364-4.743.756-7.119 1.102a.23.23 0 0 1-.264-.205c-.372-3.131-1.795-6.131-4.038-8.351A14.04 14.04 0 0 0 23.119 9.27c-3.292.153-6.526 1.522-8.866 3.85c-.094.094-.245.248-.336.344c-2.14 2.245-3.436 5.215-3.857 8.275a.23.23 0 0 1-.268.2a662 662 0 0 0-7.064-1.1a.24.24 0 0 1-.204-.273A21.2 21.2 0 0 1 9.242 8.03z"></svg:path>`,
})
export class ArcticonsMetrolinkIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMetronomeIcon],svg[arcticons-metronome-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 2.5A21.51 21.51 0 0 0 2.5 24M24 45.5A21.51 21.51 0 0 0 45.5 24"></svg:path><svg:circle cx="24" cy="24" r="8.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m30.01 30.01l9.19 9.19M17.99 17.99L8.8 8.8"></svg:path>`,
})
export class ArcticonsMetronomeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMetronomeAltIcon],svg[arcticons-metronome-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M40.838 17.352a3.03 3.03 0 1 1-4.893-3.574a3.03 3.03 0 0 1 4.893 3.574m-17.116 18.3L36.605 18.01m3.574-4.893l1.699-2.326M21.27 23.503h4.848m-3.636-2.827h2.424m-3.636 8.483h4.848m-3.636-2.828h2.424m-3.636-8.483h4.848m-3.636-2.828h2.424m8.584 2.367l-1.918-5.397c-1.985-4.567-3.69-7.49-7.826-7.49s-6.687 2.854-7.93 7.49L6.123 39.258V43.5h35.146v-4.242L35.81 23.911m-2.818 3.853l2.821 7.858H11.576l8.483-23.632h7.272l3.327 9.27"></svg:path>`,
})
export class ArcticonsMetronomeAltIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMetronomerousIcon],svg[arcticons-metronomerous-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.9 4.5h15.806c.556 0 1.032.396 1.133.943l6.772 36.696c.13.708-.413 1.36-1.132 1.36H9.52a1.152 1.152 0 0 1-1.134-1.348l6.378-36.697A1.15 1.15 0 0 1 15.9 4.5M24 30.014v-9.766m0-3.955v-5.135"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 30.014c2.636 0 4.633 1.774 4.633 5.162c0 .619.004 1.666-.79 1.666h-7.686c-.794 0-.79-1.047-.79-1.666c0-3.388 1.997-5.163 4.633-5.163m-2.948-13.72h5.749v3.955h-5.749z"></svg:path>`,
})
export class ArcticonsMetronomerousIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMetroplayerIcon],svg[arcticons-metroplayer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="8.16" cy="38.57" r="3.65" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M39.85 5.78a3.64 3.64 0 0 0-3.2 1.91h0L24 30.91L11.37 7.69a3.66 3.66 0 0 0-6.43 3.5L20.79 40.3a3.63 3.63 0 0 0 6.41 0h0l9-16.49v14.76a3.66 3.66 0 0 0 7.31 0h0V9.43a3.65 3.65 0 0 0-3.66-3.65"></svg:path>`,
})
export class ArcticonsMetroplayerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMetrotrIcon],svg[arcticons-metrotr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14 33.978V14l10 15l10-14.97V34"></svg:path>`,
})
export class ArcticonsMetrotrIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMetrozoneIcon],svg[arcticons-metrozone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.623 19.311a4.688 4.688 0 1 1 9.377 0v7.736m-9.377-12.424v12.425"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 19.311a4.688 4.688 0 1 1 9.377 0v7.736m-7.843 6.33V28.54l3.163 4.837V28.54m-14.074 0h3.163l-3.163 4.837h3.163m13.204-2.418h1.558m.829 2.418H30.99V28.54h2.387m-11.717 0c.874 0 1.582.717 1.582 1.602v1.633c0 .885-.708 1.602-1.582 1.602h0a1.59 1.59 0 0 1-1.581-1.602v-1.633c0-.885.708-1.602 1.582-1.602"></svg:path>`,
})
export class ArcticonsMetrozoneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMeuTimIcon],svg[arcticons-meu-tim-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="7.115" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2" ry="2"></svg:rect><svg:rect width="15.654" height="7.115" x="5.5" y="35.385" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2" ry="2"></svg:rect><svg:rect width="15.654" height="7.115" x="5.5" y="20.442" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2" ry="2"></svg:rect><svg:rect width="15.654" height="7.115" x="26.846" y="35.385" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2" ry="2"></svg:rect><svg:rect width="15.654" height="7.115" x="26.846" y="20.442" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2" ry="2"></svg:rect>`,
})
export class ArcticonsMeuTimIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMeualeloIcon],svg[arcticons-meualelo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36.213 26.874a2.06 2.06 0 0 1-2.053-2.053v-1.334a2.053 2.053 0 0 1 4.106 0v1.334a2.06 2.06 0 0 1-2.053 2.053m-9.955-1.027a1.99 1.99 0 0 1-1.745 1.027a2.06 2.06 0 0 1-2.053-2.053v-1.334a2.053 2.053 0 0 1 4.106 0v.718H22.46m7.698-5.542v7.184a.97.97 0 0 0 1.026 1.027h.308m-13.034-8.211v7.184a.97.97 0 0 0 1.026 1.027h.308m-4.926-2.053a2.053 2.053 0 0 1-4.105 0v-1.334a2.053 2.053 0 0 1 4.105 0m0-2.053v5.44"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.895 32.21a6.4 6.4 0 0 0-2.999.47a9.237 9.237 0 1 1 0-17.36a6.4 6.4 0 0 0 2.999.47c1.438-.212 5.131-2.456 5.131-2.456a12.316 12.316 0 1 1 0 21.331s-3.693-2.244-5.131-2.454"></svg:path>`,
})
export class ArcticonsMeualeloIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMeweIcon],svg[arcticons-mewe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.06 28.974c-.32.641-1.07 1.07-1.818 1.07a2.146 2.146 0 0 1-2.14-2.14v-1.39c0-1.177.964-2.14 2.14-2.14s2.14.963 2.14 2.14v.748h-4.28m20.078 1.712c-.322.641-1.07 1.07-1.82 1.07a2.146 2.146 0 0 1-2.139-2.14v-1.39c0-1.177.963-2.14 2.14-2.14s2.139.963 2.139 2.14v.748h-4.279m-1.006-5.776l-2.139 8.558l-2.139-8.558l-2.14 8.558l-2.139-8.558"></svg:path><svg:circle cx="29.937" cy="18.812" r=".75" fill="currentColor"></svg:circle><svg:circle cx="25.508" cy="18.812" r=".75" fill="currentColor"></svg:circle><svg:circle cx="34.366" cy="18.812" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.5 30.043v-8.557l4.279 8.557l4.278-8.557v8.557"></svg:path><svg:circle cx="12.779" cy="18.812" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 42.5h-29c-2.2 0-4-1.8-4-4v-29c0-2.2 1.8-4 4-4h29c2.2 0 4 1.8 4 4v29c0 2.2-1.8 4-4 4"></svg:path>`,
})
export class ArcticonsMeweIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMexcIcon],svg[arcticons-mexc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.343 35.994c4.577 0 6.346-4.038 4.338-7.52l-8.042-13.942c-.82-1.42-2.181-2.534-4.215-2.534s-3.395 1.114-4.214 2.534l-8.046 13.942c-2.01 3.483-.242 7.52 4.338 7.52z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.503 35.994H9.658c-4.58 0-6.348-4.037-4.338-7.52l8.046-13.942c.82-1.42 2.18-2.534 4.214-2.534s3.395 1.114 4.215 2.534l10.128 17.559c.811 1.406 2.654 3.549 5.123 3.91"></svg:path>`,
})
export class ArcticonsMexcIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMgIcon],svg[arcticons-mg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.663 5.5L42.5 16.337v15.326L31.663 42.5H16.337L5.5 31.663V16.337L16.337 5.5z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.257 36.993V10.925h-2.453L16.22 23.959l-3.727-7.196l-1.77 1.657v11.035m26.556-9.137v-1.773l-7.495-7.62h-4.08v26.068H29.7l7.579-7.537V23.96h-4.626"></svg:path>`,
})
export class ArcticonsMgIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMgenIcon],svg[arcticons-mgen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.991 21.598V28.2a2.2 2.2 0 0 1-2.201 2.202h0a2.2 2.2 0 0 1-1.557-.645"></svg:path><svg:rect width="4.402" height="5.833" x="20.589" y="21.598" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.201" ry="2.201" transform="rotate(180 22.79 24.514)"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 23.799c0-1.216.986-2.202 2.201-2.202h0c1.216 0 2.202.986 2.202 2.202v3.632M9.5 21.598v5.833m4.403-3.632c0-1.216.985-2.202 2.2-2.202h0c1.216 0 2.202.986 2.202 2.202v3.632m13.152-1.111a2.2 2.2 0 0 1-1.913 1.11h0a2.2 2.2 0 0 1-2.201-2.2v-1.431c0-1.216.986-2.201 2.201-2.201h0c1.216 0 2.202.985 2.202 2.2v.716h-4.403M38.5 27.43V23.8a2.2 2.2 0 0 0-2.201-2.202h0a2.2 2.2 0 0 0-2.202 2.202v3.632m0-3.633v-2.201"></svg:path>`,
})
export class ArcticonsMgenIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMgmPlusIcon],svg[arcticons-mgm-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.5 35.5v-23a4 4 0 0 0-4-4h-31a4 4 0 0 0-4 4v23a4 4 0 0 0 4 4h31a4 4 0 0 0 4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.6 22.004v4m-2-2h4m-15.07 3.99v-8l4 8l4-7.98v7.99m-10.41-5.35a2.65 2.65 0 1 0-5.3 0v2.7a2.65 2.65 0 0 0 5.3.003v-.003h-2.65M7.4 27.994v-8l4 8l4-7.98v7.99"></svg:path>`,
})
export class ArcticonsMgmPlusIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMgrOnlineIcon],svg[arcticons-mgr-online-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.835 31.979a1.97 1.97 0 0 1-1.986-1.958v-2.092c0-1.145.917-2.062 1.986-2.062h0a2.055 2.055 0 0 1 2.063 2.046v2.003a2.055 2.055 0 0 1-2.047 2.063zm26.316 0h-3.056v-6.112h3.056m-3.056 3.056h1.986m-8.044 3.056v-6.112l4.049 6.112v-6.112m-17.18 6.112v-6.112l4.05 6.112v-6.112m7.072 0v6.112m-5.064-6.112v6.112h3.056m6.209-15.949h5.896c.762 0 1.374.656 1.374 1.503v.61c0 .846-.612 1.528-1.375 1.528H31.23m5.895.026c.762 0 1.375.656 1.375 1.503v1.27m-7.27-6.441v6.441m-1.978-5.136c-.131-.744-.926-1.313-1.892-1.313h-3.957c-1.06 0-1.91.681-1.91 1.528v3.401c0 .847.85 1.528 1.91 1.528h3.957c1.058 0 1.91-.68 1.91-1.528v-1.24h-3.882m-5.855 2.746v-6.413h-.541l-3.92 6.413h-1.111l-3.92-6.413H9.5v6.413"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path>`,
})
export class ArcticonsMgrOnlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMhStoriesIcon],svg[arcticons-mh-stories-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.912 20.263c2.444-.17 3.155 1.58 2.397 3.191c-.058-.47-.946-.755-1.967-.265m-3.844 1.735c.816.12 1.743.152 2.76.31c.764.12 1.504.4 2.098-.195m-5.5 1.032c.245-.555.293-.636.642-1.147m-.641 1.147l-.903-3.675c-.355-1.445-.123-2.66.91-3.88c.228-1.361 0-2.872-1.525-3.28c6.22-1.39 5.338 2.08 4.665 3.487m-2.479 1.81l3.387-.27c2.442-.194 3.155 1.58 2.397 3.191c-.058-.47-.946-.755-1.967-.265m-3.844 1.735c.816.12 1.744.152 2.76.31c.764.12 1.504.4 2.098-.195m-5.5 1.032c.246-.555.294-.636.642-1.147m1.77 3.569c-1.247-.224-2.17-.184-3.167-.205c.07-.63.51-1.661.756-2.217l-.903-3.676c-.355-1.444-.123-2.658.91-3.88c.228-1.36 0-2.872-1.525-3.278c6.22-1.39 5.338 2.079 4.665 3.486m-18.917 1.54c-2.444-.17-3.156 1.58-2.397 3.191c.058-.47.945-.755 1.967-.265m3.843 1.735c-.816.12-1.743.152-2.759.31c-.764.12-1.505.4-2.099-.195m5.5 1.032c-.245-.555-.293-.636-.642-1.147m.642 1.147l.902-3.676c.355-1.444.123-2.658-.91-3.88c-.227-1.36 0-2.872 1.525-3.279c-6.22-1.39-5.338 2.08-4.665 3.487m2.479 1.81l-3.386-.27c-2.442-.195-3.156 1.58-2.397 3.19c.058-.469.945-.754 1.967-.264m3.843 1.735c-.816.12-1.743.152-2.759.31c-.764.119-1.505.4-2.099-.195m5.5 1.032c-.245-.555-.293-.636-.642-1.147m-1.77 3.569c1.247-.224 2.17-.184 3.167-.205c-.07-.63-.51-1.662-.755-2.217l.902-3.676c.355-1.444.123-2.659-.91-3.88c-.227-1.36 0-2.872 1.525-3.279c-6.22-1.39-5.338 2.08-4.665 3.487m.677 9.769a9.9 9.9 0 0 0-3.29 1.188m6.07 3.841a10.2 10.2 0 0 1-1.659-2.279c-1.09.54-1.812 1.128-2.479 1.724m2.491 2.439c.506-.742 1.074-1.32 1.648-1.884c1.284 1.314 2.984 2.261 5.52 2.641m.054 0c.582.635.74 1.208 1.851 1.792c-.557.754-1.186 1.5-1.878 1.97c-.692-.47-1.32-1.216-1.878-1.97c1.11-.584 1.27-1.157 1.878-1.792c2.563-.38 4.263-1.327 5.548-2.64c.573.562 1.141 1.14 1.647 1.881m.013-4.16c.5-.92.854-1.868 1.12-2.752m0 0c1.159.198 2.273.6 3.291 1.189m-6.071 3.841a10.2 10.2 0 0 0 1.66-2.279c1.089.54 1.811 1.128 2.478 1.723m-16.893-1.723c-.5-.92-.854-1.867-1.121-2.75m8.328-12.36l1.883 1.1m-3.766 0l1.883-1.1v-2.05m0-3.106l-1.298-2.248h2.598zm-3.008.906c-1.026 0-1.852.1-1.852-.925m7.869.925c1.025 0 1.851.1 1.851-.925m-2.338-2.862v4.058a1.847 1.847 0 0 1-1.844 1.85H23.33a1.847 1.847 0 0 1-1.852-1.843V8.094m5.678 17.999c0 3.664-1.413 6.635-3.157 6.635h0c-1.743 0-3.156-2.97-3.156-6.635h0c0-3.665 1.413-6.635 3.156-6.635h0c1.744 0 3.157 2.97 3.157 6.635q0 0 0 0m8.656 11.09c6.44-7.167 2.792-24.841-9.615-32.03c-1.35-.78-2.742-.958-4.358 0c-12.33 7.318-16.173 24.973-9.615 32.03c7.276 7.828 15.504 8.997 23.587 0z"></svg:path>`,
})
export class ArcticonsMhStoriesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMhleIcon],svg[arcticons-mhle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 5.5h37v37h-37z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.975 11.975h24.05v24.05h-24.05z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.988 17.988h12.025v12.025H17.988zM24 5.5v12.488M42.5 24H30.013M5.5 24h12.488M24 42.5V30.013"></svg:path>`,
})
export class ArcticonsMhleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMhpbIcon],svg[arcticons-mhpb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.903 36.46c16.417 0 21.69-23.475 21.69-30.96h12.503c0 12.759-8.76 37-34.193 37z"></svg:path>`,
})
export class ArcticonsMhpbIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMhrsMobilIcon],svg[arcticons-mhrs-mobil-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.964 40.837H9.176a2 2 0 0 1-2-2V11.211a2 2 0 0 1 2-2h2.955m5.288 0h11.64m4.542 0h3.201a2 2 0 0 1 2 2V29.83"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.827 20.291h6.324v6.324h-6.324zm9.626 0h6.324v6.324h-6.324zm-19.251 0h6.324v6.324h-6.324zm9.625 9.838h6.324v6.324h-6.324zm-9.625 0h6.324v6.324h-6.324zM13.432 6.5h2.402a1 1 0 0 1 1 1v5.043a1 1 0 0 1-1 1h-2.402a1 1 0 0 1-1-1V7.5a1 1 0 0 1 1-1m16.713 0h2.402a1 1 0 0 1 1 1v5.043a1 1 0 0 1-1 1h-2.402a1 1 0 0 1-1-1V7.5a1 1 0 0 1 1-1"></svg:path><svg:circle cx="35.777" cy="36.452" r="7.048" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.404 17.24H38.81m1.454 17.996a2.371 2.371 0 0 0-4.401-1.221a2.371 2.371 0 0 0-4.242 2.07c.784 2.255 4.242 4.73 4.242 4.73s3.458-2.475 4.242-4.73c.1-.264.159-.55.159-.849"></svg:path>`,
})
export class ArcticonsMhrsMobilIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMhshareIcon],svg[arcticons-mhshare-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.552 8.499h34.896a1.88 1.88 0 0 1 1.882 1.873v.009l.058 2.046q.225 7.927 0 15.854l-.058 2.046a1.937 1.937 0 0 1-1.936 1.882H6.552a1.88 1.88 0 0 1-1.882-1.874v-.008l-.058-2.03q-.225-7.943 0-15.887l.058-2.03A1.88 1.88 0 0 1 6.544 8.5zm13.201 5.915l8.494 12.822m0-12.822l-8.494 12.822M24 32.269l-4.123 7.233h8.245z"></svg:path>`,
})
export class ArcticonsMhshareIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMiAfipIcon],svg[arcticons-mi-afip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.398 27.532V11.269l8.069 16.281l8.068-16.256V27.55"></svg:path><svg:circle cx="35.212" cy="11.777" r=".75" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.212 16.763V27.55m-8.315 4.219v4.962m3.19 0v-4.962h1.705c.964 0 1.745.746 1.745 1.666s-.781 1.667-1.745 1.667h-1.705m-8.984-.852h1.693m-1.693 2.481v-4.962h2.604m-6.365 3.318h-2.308m-.571 1.644l1.725-4.962l1.725 4.962"></svg:path>`,
})
export class ArcticonsMiAfipIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMiAttIcon],svg[arcticons-mi-att-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.997 5.536a21.27 21.27 0 0 0-11-3.03a21.35 21.35 0 0 0-11.151 3.119c-.97.598-1.517 1.075-1.517 1.69c0 1.813 4.238 3.764 11.755 3.764c7.44 0 13.21-2.136 13.21-4.192c0-.49-.43-.833-1.297-1.351"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.372 12.058c0 4.18 10.48 7.21 20.28 7.21c10.442 0 15.102-3.408 15.102-6.404c-.223-2.095-2.048-3.607-3.539-4.954c.074.156.118.306.118.51c0 2.388-7.309 6.613-18.944 6.613c-8.55 0-10.15-3.172-10.15-5.188c0-.721.276-1.459.869-2.223C8.373 9.048 6.37 11.32 6.37 12.058z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.142 20.278c1.09 2.895 7.99 7.276 23.555 7.276c9.495 0 16.87-2.333 18.065-6.59c.552-1.966-.62-4.768-1.478-6.438c.166 5.588-15.404 9.187-23.26 9.187c-8.51 0-15.608-3.39-15.608-7.672c0-.411.085-.823.17-1.257c-.665 1.704-2.12 3.699-1.445 5.492z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.516 23.997c-.06 2.052-.02 4.04 1.38 5.585c2.584 2.854 9.31 6.67 20.817 6.67c15.677 0 19.262-5.222 19.994-6.94c.757-1.777.883-5.214.743-6.48c-.806 4.199-14.2 9.785-25.774 9.785c-11.007 0-16.197-5.125-17.16-8.62"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M40.041 37.778c2.155-1.765 3.368-4.343 3.945-5.901c-3.258 4.751-12.624 7.72-22.293 7.72c-6.836 0-14.19-2.185-17.089-6.348c2.662 5.712 10.8 8.827 20.853 8.827c5.292 0 11.104-1.446 14.584-4.299z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.997 45.495a21.3 21.3 0 0 0 14.156-5.348c-1.708 1.112-6.543 3.585-14.156 3.585c-6.616 0-10.797-1.476-13.172-2.774a21.3 21.3 0 0 0 13.172 4.537"></svg:path>`,
})
export class ArcticonsMiAttIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMiBand6WatchFacesIcon],svg[arcticons-mi-band-6-watch-faces-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path stroke-linecap="round" stroke-miterlimit="10" d="M24 8.455a5.43 5.43 0 0 1 5.435 5.44v20.112c0 3.012-2.426 5.441-5.435 5.441s-5.435-2.429-5.435-5.44V13.895A5.43 5.43 0 0 1 24 8.455Z"></svg:path><svg:path d="M31.86 33.521c0 3.206.098 6.024-1.358 8.356c-1.358 2.332-4.95 2.623-5.823 2.623h-1.358c-.874 0-4.465-.292-5.823-2.623s-1.359-5.15-1.359-8.356V14.48c0-3.206-.097-6.024 1.359-8.356C18.856 3.791 22.448 3.5 23.32 3.5h1.358c.874 0 4.465.292 5.823 2.623s1.359 5.15 1.359 8.356z"></svg:path></svg:g><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.896 21.896h4.308v4.308h-4.308zm4.208-4.808h-4.208L24 12.88zm0 15.928c-.1 2.805-4.208 2.805-4.308 0c.1-2.805 4.308-2.805 4.308 0"></svg:path>`,
})
export class ArcticonsMiBand6WatchFacesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMiBudsM8Icon],svg[arcticons-mi-buds-m8-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.824 15.78c-1.79.11-3.935-1.116-4.972-2.012c-2.177-1.879-2.828-5.671-1.114-7.483c1.71-1.809 3.863-2.289 6.259-1.23c1.962.866 3.297 2.194 3.723 3.895m-8.17-1.272l1.576 1.3m8.782 4.175l-1.551 1.799m.762-6.04c-1.546-.22-3.19.474-4.355 1.635c-1.68 1.671-1.92 5.232.582 6.582c2.18 1.177 4.727.49 5.852-.997c2.472-3.263.905-6.797-2.079-7.22m-20.896 9.603c1.79.11 3.933-1.117 4.972-2.013c2.176-1.879 2.827-5.671 1.114-7.484c-1.712-1.809-3.863-2.287-6.26-1.23c-1.963.867-3.298 2.195-3.723 3.896m8.168-1.272l-1.574 1.3m-8.782 4.175l1.55 1.799m-.762-6.04c1.547-.22 3.19.474 4.355 1.635c1.68 1.671 1.92 5.231-.581 6.58c-2.181 1.178-4.728.493-5.854-.995c-2.47-3.263-.903-6.797 2.08-7.22M22.1 31.47v4.699m7.346-6.986v6.987m-11.002 0v-6.987h5.624c.97 0 1.757.768 1.757 1.715v5.271m-10.67-16.602v2.503H8.831c-.86 0-1.254.41-1.254 1.08v13.087A7.247 7.247 0 0 0 14.81 43.5h18.246a7.247 7.247 0 0 0 7.263-7.231V23.151c0-.67-.393-1.08-1.255-1.08h-6.333v-5.374m-3.838-1.627h-.233v7.001h-9.436v-4.302"></svg:path>`,
})
export class ArcticonsMiBudsM8Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMiClaroIcon],svg[arcticons-mi-claro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.05 27.15c-6.224 0-11.356 5.135-11.356 11.363a3.986 3.986 0 0 0 3.984 3.987h14.745c2.2 0 3.984-1.785 3.985-3.987c0-6.229-5.133-11.364-11.357-11.364m-.001-16.758V5.5m8.364 13.256h4.892m-7.344-5.912l5.353-5.353"></svg:path><svg:circle cx="23.051" cy="18.756" r="4.89" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsMiClaroIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMiCommunityIcon],svg[arcticons-mi-community-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.446 27.163L9.182 32.3c-.812 3.033 2.147 4.406 3.588 1.908c0 0 1.625 6.456 11.134 6.456s11.66-6.58 11.66-6.58c.643 2.4 3.653 1.335 3.653-.243c0-.59-1.377-6.631-1.377-6.631c1.224-.328 1.338-.986.463-1.862c.392-3.42-.176-5.998-2.296-9.293c2.193-1.267 6.493-3.48 6.493-6.162c0-2.44-2.355-3.147-4.218-2.07c-2.308 1.627-3.904 3.727-5.25 6.06c0 0-3.364-2.455-9.01-2.455s-8.706 2.335-8.706 2.335c-1.665-2.414-5.021-7.898-8.798-5.9c-2.94 2.14.942 6.106 5.828 8.064c-2.346 3.226-2.38 5.413-2.38 9.5c-.702.704-.633 1.436.48 1.735z"></svg:path>`,
})
export class ArcticonsMiCommunityIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMiEntelPeruIcon],svg[arcticons-mi-entel-peru-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.985 23.497H4.5c0-20.416 23.485-20.416 23.485 0m0 12.252C17.771 43.925 4.5 39.837 4.5 23.497M35.84 8.163c10.214 6.126 10.214 24.504 0 30.63"></svg:path>`,
})
export class ArcticonsMiEntelPeruIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMiFitnessIcon],svg[arcticons-mi-fitness-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24" cy="24" r="13" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsMiFitnessIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMiHomeIcon],svg[arcticons-mi-home-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.964 29.122a17.4 17.4 0 0 1-.242-2.9V4.5L24 10.94L41.278 4.5v9.444m0 5.96v6.318A17.28 17.28 0 0 1 24 43.5h0A17.28 17.28 0 0 1 8.215 33.258"></svg:path>`,
})
export class ArcticonsMiHomeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMiMoverIcon],svg[arcticons-mi-mover-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.546 18.653L11.373 29.392M36.29 18.638L23.154 29.355M27.36 40.94a2.67 2.67 0 0 0 2.758 2.055a2.7 2.7 0 0 0 1.86-.88l7.645-8.51c.99-1.102.9-2.797-.202-3.787l-.008-.007c-.589-.53-1.355-.538-4.11-.456H11.92a4.176 4.176 0 1 0 0 8.34h15.44zM20.68 7.06a2.67 2.67 0 0 0-2.762-2.055a2.7 2.7 0 0 0-1.857.88l-7.645 8.507c-.99 1.103-.9 2.8.204 3.791l.006.006c.59.53 1.355.538 4.11.457H36.12a4.176 4.176 0 1 0 0-8.345H20.679z"></svg:path>`,
})
export class ArcticonsMiMoverIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMiMovistarIcon],svg[arcticons-mi-movistar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.637 18.574C7.825 1.672.005 28.354 7.408 37.44c1.992 2.444 4.476-.096 3.798-2.491c-3.302-11.65-.336-11.838 3.43-4.696c3.093 5.87 11.938 13.457 16.208-1.143c2.968-10.148 7.582-10.052 7.431-3.92c-.255 10.42 2.598 8.595 4.492 3.349c3.456-9.579-6.007-28.958-13.678-12.7c-2.935 6.22-4.41 12.181-10.452 2.735"></svg:path>`,
})
export class ArcticonsMiMovistarIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMiO2Icon],svg[arcticons-mi-o2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.545 34.063a4.17 4.17 0 0 1 4.062-4.218a4.198 4.198 0 0 1 2.969 7.187c-1.719 1.406-7.03 5.468-7.03 5.468h8.28"></svg:path><svg:ellipse cx="19.816" cy="20.962" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="13.642" ry="15.461"></svg:ellipse>`,
})
export class ArcticonsMiO2Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMiPayIcon],svg[arcticons-mi-pay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m14.624 12.665l6.681 7.3L33.376 7.5M16.71 25.642V15.136m10.692 10.506V13.978m5.833 0v11.664m-6.495 9.376a2.34 2.34 0 0 1-2.333 2.333h0a2.34 2.34 0 0 1-2.333-2.333V33.5a2.34 2.34 0 0 1 2.333-2.332h0A2.34 2.34 0 0 1 26.74 33.5m0 3.851v-6.182"></svg:path><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M33.429 35.018v3.15a2.34 2.34 0 0 1-2.333 2.332h0c-.7 0-1.283-.233-1.633-.7"></svg:path><svg:path d="M33.429 31.169v3.849a2.34 2.34 0 0 1-2.333 2.333h0a2.34 2.34 0 0 1-2.333-2.333v-3.85"></svg:path></svg:g><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.571 37.407v-8.64h2.808c1.62 0 2.916 1.296 2.916 2.916S19 34.6 17.38 34.6h-2.808"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.5 43.5h25a3 3 0 0 0 3-3v-33a3 3 0 0 0-3-3h-25a3 3 0 0 0-3 3v33a3 3 0 0 0 3 3"></svg:path>`,
})
export class ArcticonsMiPayIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMiPersonalFlowIcon],svg[arcticons-mi-personal-flow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.527 19.83c0-.92.746-1.665 1.666-1.665h0m-1.666 0v4.414m2.79-.372c.304.255.632.372 1.37.372h.373c.609 0 1.102-.494 1.102-1.104h0c0-.609-.493-1.103-1.102-1.103h-.747a1.1 1.1 0 0 1-1.101-1.104h0c0-.61.493-1.103 1.1-1.103h.375c.737 0 1.065.117 1.37.372m15.86-2.621v5.83c0 .46.373.833.833.833H40m-2.615-1.666c0 .92-.746 1.666-1.666 1.666h0c-.92 0-1.665-.746-1.665-1.666v-1.082c0-.92.746-1.666 1.665-1.666h0c.92 0 1.666.746 1.666 1.666m0 2.748v-4.414m-4.843 4.415v-2.75c0-.92-.746-1.665-1.665-1.665h0c-.92 0-1.666.746-1.666 1.666m0 2.748v-4.414M15.88 21.739c-.287.502-.828.84-1.448.84h0c-.92 0-1.665-.746-1.665-1.666v-1.082c0-.92.746-1.666 1.665-1.666h0c.92 0 1.666.746 1.666 1.666v.541h-3.331M8 20.913c0 .92.746 1.666 1.666 1.666h0c.92 0 1.665-.746 1.665-1.666v-1.082c0-.92-.745-1.666-1.665-1.666h0c-.92 0-1.666.746-1.666 1.666m0-1.666v6.663m16.607-4.998a1.666 1.666 0 1 1 3.331 0v1.083a1.666 1.666 0 1 1-3.331 0zm7.888 7.84l-1.374 4.414l-1.374-4.414l-1.374 4.414l-1.375-4.414m-6.711-2.25v5.831c0 .46.373.833.833.833h.25m-4.878 0v-5.497c0-.644.522-1.166 1.166-1.166h0c.574 0 .932.17 1.178.488m-3.331 1.761h2.332m4.607 1.665a1.666 1.666 0 1 1 3.33 0v1.083a1.666 1.666 0 1 1-3.33 0zm3.66-8.963l.336-.005"></svg:path>`,
})
export class ArcticonsMiPersonalFlowIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMiStoreIcon],svg[arcticons-mi-store-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 30.832V17.168h10.735a3.355 3.355 0 0 1 3.354 3.354v10.31M34.5 17.168v13.664m-14.022-9.191v9.191"></svg:path><svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect>`,
})
export class ArcticonsMiStoreIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMiTelcelIcon],svg[arcticons-mi-telcel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.825 40.869c1.04-1.034 1.19-1.614.907-3.51c-.669-4.465-3.935-8.174-8.505-9.659c-1.796-.583-4.953-.58-6.847.006c-5.012 1.55-8.628 5.918-8.729 10.538c-.125 1.578.697 2.322 1.734 3.32c4.21 2.603 17.94 2.78 21.44-.695"></svg:path><svg:circle cx="22.681" cy="19.18" r="4.59" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.681 9.815V4.5m6.622 8.058L33.062 8.8m-1.016 10.38h5.315"></svg:path>`,
})
export class ArcticonsMiTelcelIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMiUnefonIcon],svg[arcticons-mi-unefon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22 22.705v-8l5.3 8v-8m1.775 18.59v-8l5.3 8v-8m-20.75-10.59v5.35a2.65 2.65 0 1 0 5.3 0v-5.35m11.45 4h2.608m1.392 4h-4v-8h4m-20.75 14.59h2.6m-2.6 4v-8h4m5.725 0a2.65 2.65 0 0 1 2.65 2.65v2.7a2.65 2.65 0 0 1-2.65 2.65h0a2.65 2.65 0 0 1-2.65-2.65v-2.7a2.65 2.65 0 0 1 2.65-2.65"></svg:path>`,
})
export class ArcticonsMiUnefonIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMiVideoIcon],svg[arcticons-mi-video-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.93 42.5a4.06 4.06 0 0 1-2-.53a4 4 0 0 1-2-3.46v-29a4 4 0 0 1 6-3.46l25.13 14.49a4 4 0 0 1 0 6.92L15.93 42a4.07 4.07 0 0 1-2 .5m4-26.1v15.2L31.08 24ZM31.08 24l7.99-4.61m-29.13-7.6l7.99 4.61m0 15.2v9.21"></svg:path>`,
})
export class ArcticonsMiVideoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMiWiFiIcon],svg[arcticons-mi-wi-fi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.568 19.507c8.024-9.448 21.338-9.448 28.864.393m-22.247 6.368c3.473-5.789 11.578-5.789 15.63 0m-5.499 6.368L24 35.531l-2.316-2.895q2.316-2.316 4.631 0"></svg:path><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsMiWiFiIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMiastoZgierzIcon],svg[arcticons-miasto-zgierz-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m37.77 12.253l3.624-.837l.837 3.624M29.88 9.275l3.254-1.803l1.802 3.253M33.17 17.82l3.253-1.803l1.802 3.253m-8.199 4.527l3.253-1.803l1.803 3.252m-18.525-8.401l2.238-2.97l2.97 2.238m3.386 0l2.97-2.238l2.238 2.97m-9.022 6.404l2.63-2.63l2.63 2.63M5.768 15.04l.837-3.624l3.624.837M8.657 19.27l1.803-3.253l3.252 1.803m-.266 7.426l1.803-3.252l3.253 1.803m-5.056-13.073l1.803-3.253l3.253 1.803m2.833-1.145l2.63-2.63l2.63 2.63"></svg:path><svg:circle cx="21.824" cy="30.075" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.633 32.94h4.645l-4.645 6.271h4.645m-8.984-6.27v6.27m0-3.948a2.33 2.33 0 0 1 2.322-2.322h0m-5.083 5.051c-.349.697-1.162 1.161-1.974 1.161h0a2.33 2.33 0 0 1-2.323-2.322v-1.51A2.33 2.33 0 0 1 26.56 33h0a2.33 2.33 0 0 1 2.322 2.322v.813h-4.645m-2.412-3.271v6.27m-4.735-6.039a2.33 2.33 0 0 1 2.322 2.323v1.51a2.33 2.33 0 0 1-2.322 2.322h0a2.33 2.33 0 0 1-2.323-2.323v-1.51a2.33 2.33 0 0 1 2.323-2.322m2.322.116v6.967A2.33 2.33 0 0 1 17.09 42.5h0c-.697 0-1.278-.232-1.626-.697m-7.806-11.96h6.038l-6.038 9.29h6.038"></svg:path>`,
})
export class ArcticonsMiastoZgierzIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMibandIcon],svg[arcticons-miband-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" d="M24 8.5a5.453 5.453 0 0 1 5.45 5.456v20.088a5.45 5.45 0 1 1-10.9 0V13.956A5.453 5.453 0 0 1 24 8.5Z"></svg:path><svg:path fill="none" stroke="currentColor" d="M31.83 33.519c0 3.203.063 6.041-1.315 8.384S25.553 44.5 24.722 44.5h-1.444c-.83 0-4.415-.254-5.793-2.597s-1.314-5.181-1.314-8.384V14.48c0-3.203-.064-6.041 1.314-8.384S22.448 3.5 23.278 3.5h1.444c.83 0 4.415.254 5.793 2.597s1.314 5.181 1.314 8.384z"></svg:path>`,
})
export class ArcticonsMibandIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMibroFitIcon],svg[arcticons-mibro-fit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="11.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m27.704 18.53l-3.878 4.399v6.173"></svg:path><svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect>`,
})
export class ArcticonsMibroFitIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMicasa3dIcon],svg[arcticons-micasa-3d-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.87 26.12a4.42 4.42 0 0 1 4.418-4.418h0a4.42 4.42 0 0 1 4.42 4.419v7.291m-8.839-11.71v11.71"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.707 26.12a4.42 4.42 0 0 1 4.42-4.418h0a4.42 4.42 0 0 1 4.418 4.419v7.291"></svg:path><svg:circle cx="33.234" cy="18.484" r="3.896" fill="none" stroke="currentColor" stroke-miterlimit="10"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.234 26.247v7.165"></svg:path>`,
})
export class ArcticonsMicasa3dIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMichelinIcon],svg[arcticons-michelin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M5.328 22.06a4.56 4.56 0 0 0 .2 2.439q.177.525.457 1.002a.4.4 0 0 0 0 .087a4.74 4.74 0 0 0 1.932 4.443q.337.256.71.455c.24.688.678 1.289 1.258 1.728c.425.331.9.593 1.409.774c.589.795 2.005 1.858 3.18 1.76c0 0 .513 1.05 1.932 1.107a4.86 4.86 0 0 0 .2 2.278H44.5a5 5 0 0 0-.734-2.634l-.045-.06a5.304 5.304 0 0 0-4.23-5.923a5 5 0 0 0-.428-.064h-.059a11.6 11.6 0 0 0-3.454-2.306l.05-.214h.06c1.512-.656 2.41-1.772 2.602-3.226a4.78 4.78 0 0 0-.816-3.309v-.045a6.84 6.84 0 0 0-.697-4.028a4.8 4.8 0 0 0-2.142-2.047c-.246-.833-1.308-1.471-2.447-1.44c-.912.023-1.873.456-2.242 1.135a6.31 6.31 0 0 0-4.102 4.976a4.274 4.274 0 0 0-.583 6.38a20.4 20.4 0 0 0-3.933.41h-.05c-1.267-.91-3.184-1.23-4.543-.784c-.685-.322-1.435-.273-1.435-.273a4.4 4.4 0 0 0-1.085-1.823l-.082-.073a11 11 0 0 0-.3-1.244a3.7 3.7 0 0 0-1.022-1.69"></svg:path><svg:path d="M3.836 12.575c1.186-.364.922 2.393 1.774 3.04m-1.522-3.07c-.128-.36-.495-1.284.217-1.37c.937-.205 1.381 2.933 2.054 3.51M4.834 11.43c-.109-.39-.45-1.5.392-1.562c.66-.047 1.813 3.92 2.132 4.329m1.784 1.645l.45-.652c.554-.765.48-2.605 1.612-2.807c1.018-.05-.588 4.839-.405 5.569a3.3 3.3 0 0 1-.338 1.358c.055 1.356 1.028 2.55.202 2.485M5.98 10.807c.619-2.822 2.813 3.511 3.586 4.421m-1.867 7.07c-.758-.061-.326-1.82-.882-2.145c-1.62-1.794-4.129-7.227-3.058-7.57m31.313 9.942c-.222.035.047.147-.146.196c-1.802.715-3.866.23-5.592-.492c-.898.365 1.048.66 1.176 1.134c1.43 1.667 3.13.505 4.616-.391c.085.51.414-.48-.059-.448M5.985 25.588s2.36 2.493 5.243 1.515c2.881-.977 2.855-4.193 2.855-4.193m-5.455 7.575s3.664 1.106 5.607-1.01c1.943-2.118.932-5.109.932-5.109"></svg:path><svg:path d="M11.293 32.987s2.578 1.008 5.158-1.872c2.579-2.88-.684-6.37-.684-6.37"></svg:path><svg:path d="M14.474 34.747s4.714.744 5.602-3.672c.889-4.417-3.195-6.165-3.195-6.165"></svg:path><svg:path d="M16.406 35.855s4.734.869 6.484-3.122s-1.59-6.995-1.59-6.995m22.417 9.679s-.237 1.073-.454 1.636c-.231.6-.75 1.08-.75 1.08m-3.528-8.681s1.936 1.96 1.796 3.748s-.913 2.25-.913 2.25s.883.373 1.125 1.209c.241.835-.08 1.474-.08 1.474M5.29 22.157c.181-.71.204-.844.55-1.295c.344-.45.986-.715.986-.717m6.059-.159s-.376-.535-1.125-.722c-.748-.187-1.173.098-1.173.098m12.38 13.383s7.248 2.865 11.58 3.052c4.333.188 5.267-.303 5.267-.303M35.63 19.779c-.127.946-.79 1.64-1.48 1.549q0 0 0 0c-.69-.091-1.145-.931-1.018-1.877q0 0 0 0c.127-.946.79-1.64 1.479-1.549q0 0 0 0c.69.09 1.146.93 1.019 1.877q0 0 0 0m-3.573-.434c-.127.946-.79 1.64-1.479 1.549q0 0 0 0c-.69-.09-1.146-.931-1.019-1.877q0 0 0 0c.127-.946.79-1.64 1.48-1.549q0 0 0 0c.69.09 1.145.931 1.018 1.877q0 0 0 0"></svg:path></svg:g><svg:circle cx="33.895" cy="20.294" r=".784" fill="currentColor"></svg:circle><svg:circle cx="30.421" cy="19.821" r=".784" fill="currentColor"></svg:circle>`,
})
export class ArcticonsMichelinIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMicoIcon],svg[arcticons-mico-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.554 39.393c1.125.061 1.38-.24 1.995-1.435l8.604-16.733c.73-1.422.355-2.628-1.576-2.734l-19.1-1.045c-1.124-.07-1.38.24-1.995 1.435L10.88 35.614c-.73 1.421-.356 2.628 1.575 2.733z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.522 30.556c1.126.061 1.38-.24 1.996-1.435l8.603-16.733c.73-1.422.356-2.628-1.575-2.734l-19.1-1.045c-1.125-.07-1.38.24-1.995 1.435L5.847 26.777c-.73 1.421-.355 2.628 1.576 2.733z"></svg:path>`,
})
export class ArcticonsMicoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMicopacksIcon],svg[arcticons-micopacks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m38.941 6.594l2.96 2.96a2.047 2.047 0 0 1 0 2.893L23.524 30.824l-5.853-5.853L36.048 6.594a2.047 2.047 0 0 1 2.893 0M18.162 29.003c-2.47-1.84-5.983-1.54-8.138.66c-2.803 2.86-.226 5.834-3.857 7.83c-.786.431-.907 1.517-.205 2.075c4.75 3.779 8.79 2.983 12.914-1.14a6.232 6.232 0 0 0-.714-9.425"></svg:path>`,
})
export class ArcticonsMicopacksIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMicroBitIcon],svg[arcticons-micro-bit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 15h21a9 9 0 0 1 9 9h0a9 9 0 0 1-9 9h-21a9 9 0 0 1-9-9h0a9 9 0 0 1 9-9"></svg:path><svg:circle cx="14.5" cy="24" r="2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="33.5" cy="24" r="2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsMicroBitIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMicrobreakerIcon],svg[arcticons-microbreaker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="14.285" cy="31.679" r="8.784" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m12.483 23.089l-2.111-5.951l14.915-1.364l2.488 7.032l2.714 7.657l-7.438.685m2.235-15.378l-14.917 1.366l12.015-8.235L37.3 7.536z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.486 30.46L42.5 22.226l-5.2-14.69l-12.014 8.234zm-9.378-4.31a2.45 2.45 0 0 0 1.753-2.585a2.44 2.44 0 0 0-2.666-2.196a2.436 2.436 0 0 0-2.206 2.354m4.849-.401l4.939-.516m12.203-7.7l-12.203 7.7"></svg:path>`,
})
export class ArcticonsMicrobreakerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMicrochipIcon],svg[arcticons-microchip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.91 17.14h12.18a.76.76 0 0 1 .77.77v12.18a.76.76 0 0 1-.77.77H17.91a.76.76 0 0 1-.77-.77V17.91a.76.76 0 0 1 .77-.77"></svg:path><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.97 13.26V2.59m-3.94 10.67V2.59m-3.94 10.67V3.32m11.82 9.94V3.32m-7.88 31.51V45.5m3.94-10.67V45.5m3.94-10.67v9.94m-11.82-9.94v9.94m16.69-18.75h10.67m-10.67-3.94h10.67m-10.67-3.94h9.94m-9.94 11.81h9.94m-31.5-7.87H2.55m10.67 3.94H2.55m10.67 3.93H3.28m9.94-11.81H3.28"></svg:path>`,
})
export class ArcticonsMicrochipIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMicrocoilCalculatorIcon],svg[arcticons-microcoil-calculator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:ellipse cx="27.881" cy="35.257" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="7.759" ry="3.879" transform="rotate(-44.99 27.881 35.257)"></svg:ellipse><svg:ellipse cx="24.792" cy="32.936" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="7.759" ry="3.879" transform="rotate(-44.99 24.792 32.936)"></svg:ellipse><svg:ellipse cx="21.703" cy="30.827" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="7.759" ry="3.879" transform="rotate(-44.99 21.703 30.827)"></svg:ellipse><svg:ellipse cx="18.614" cy="28.486" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="7.759" ry="3.879" transform="rotate(-44.99 18.614 28.486)"></svg:ellipse><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.214 28.885c-3.03 3.03-6.66 4.493-8.176 2.978s-.287-5.199 2.743-8.228a13.8 13.8 0 0 1 3.453-2.557m.104-.052c1.498-.79 2.733-1.695 2.975-3.613L19.01 4.5m19.6 8.704c-.51 6.68-1.901 17.083-1.532 20.037c.234 1.812-1.031 4.534-3.365 6.867c-3.03 3.03-6.715 4.258-8.23 2.743s-.308-4.863 2.722-7.893"></svg:path>`,
})
export class ArcticonsMicrocoilCalculatorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMicrogsettingsIcon],svg[arcticons-microgsettings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M39.23 26a17 17 0 0 0 .14-2a17 17 0 0 0-.14-2l4.33-3.39a1 1 0 0 0 .25-1.31l-4.1-7.11a1 1 0 0 0-1.25-.44l-5.11 2.06a15.7 15.7 0 0 0-3.46-2l-.77-5.43a1 1 0 0 0-1-.86H19.9a1 1 0 0 0-1 .86l-.77 5.43a15.4 15.4 0 0 0-3.46 2L9.54 9.75a1 1 0 0 0-1.25.44l-4.1 7.11a1 1 0 0 0 .25 1.31L8.76 22a17 17 0 0 0-.14 2a17 17 0 0 0 .14 2l-4.32 3.39a1 1 0 0 0-.25 1.31l4.1 7.11a1 1 0 0 0 1.25.44l5.11-2.06a15.7 15.7 0 0 0 3.46 2l.77 5.43a1 1 0 0 0 1 .86h8.2a1 1 0 0 0 1-.86l.77-5.43a15.4 15.4 0 0 0 3.46-2l5.11 2.06a1 1 0 0 0 1.25-.44l4.1-7.11a1 1 0 0 0-.25-1.31Zm-21.97-3.66l-4.72-1.18m6.79-7.92l1.93 4.58m-2.34 16.73l2.1-4.48"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.62 19.21a6.84 6.84 0 0 0-4.75-1.89a6.68 6.68 0 1 0 0 13.36a6.9 6.9 0 0 0 4.77-1.9l3.45 3.45a11.66 11.66 0 1 1-8.6-19.89h0a12 12 0 0 1 1.88.1a11.6 11.6 0 0 1 6.72 3.31Z"></svg:path>`,
})
export class ArcticonsMicrogsettingsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMicrosoftIcon],svg[arcticons-microsoft-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4M24 42.5v-37M5.5 24h37"></svg:path>`,
})
export class ArcticonsMicrosoftIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMicrosoft365Icon],svg[arcticons-microsoft-365-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.507 3.241L8.443 9.74a8.6 8.6 0 0 0-4.508 7.563V30.7a8.6 8.6 0 0 0 4.508 7.564m15.668-5.597l-2.826-1.557a8.6 8.6 0 0 1-4.45-7.532v-4.072"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.166 19.275v4.45a8.6 8.6 0 0 1-4.508 7.564l-11.466 6.202a8.6 8.6 0 0 1-7.435.358q.33.222.687.414l11.465 6.202a8.6 8.6 0 0 0 8.182 0l11.465-6.202a8.6 8.6 0 0 0 4.508-7.563"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M39.557 9.739L28.092 3.536a8.6 8.6 0 0 0-7.585-.295a8.6 8.6 0 0 0-3.673 7.048v8.986l3.288-1.661a8.6 8.6 0 0 1 7.756 0l11.465 5.793a8.6 8.6 0 0 1 4.72 7.484l.001-.191V17.302a8.6 8.6 0 0 0-4.507-7.563"></svg:path>`,
})
export class ArcticonsMicrosoft365Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMicrosoft365AdminIcon],svg[arcticons-microsoft-365-admin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.02 14.06q.49-.05.983-.049c5.523 0 10 4.477 10 10s-4.477 10-10 10q-.493 0-.984-.048"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.202 34.01q.316.37.655.72l-1.23 2.816a1.5 1.5 0 0 0 .458 1.788a19.4 19.4 0 0 0 4.631 2.65a1.5 1.5 0 0 0 1.766-.502l1.81-2.455a14.9 14.9 0 0 0 7.421 0l1.811 2.455a1.5 1.5 0 0 0 1.766.502a19.4 19.4 0 0 0 4.63-2.65a1.5 1.5 0 0 0 .46-1.788l-1.23-2.816a15.5 15.5 0 0 0 3.742-6.428l3.003-.338a1.5 1.5 0 0 0 1.315-1.263c.123-.804.28-1.693.287-2.686c.005-.993-.14-1.875-.25-2.67a1.5 1.5 0 0 0-1.32-1.285l-3.033-.34a15.5 15.5 0 0 0-3.73-6.459l1.22-2.795a1.5 1.5 0 0 0-.455-1.783a19.4 19.4 0 0 0-4.616-2.664a1.5 1.5 0 0 0-1.771.498l-1.809 2.451a15.16 15.16 0 0 0-7.441.028l-1.81-2.455a1.5 1.5 0 0 0-1.766-.502a19.4 19.4 0 0 0-4.631 2.65a1.5 1.5 0 0 0-.46 1.787l1.231 2.816q-.339.351-.654.72"></svg:path><svg:rect width="20" height="20" x="4.503" y="14.011" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2" ry="2"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.134 25.98h-5.262m-1.304 3.866l3.935-11.671l3.935 11.67"></svg:path>`,
})
export class ArcticonsMicrosoft365AdminIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMicrosoftAdvertisingIcon],svg[arcticons-microsoft-advertising-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:ellipse cx="39.5" cy="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="15.5"></svg:ellipse><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.999 33.813L39.323 39.5m0-31L13.608 18H6.393a1.5 1.5 0 0 0-1.455 1.135c-.025.098-.09.295-.145.623C4.611 20.848 4.5 22.34 4.5 24s.111 3.151.293 4.242c.055.328.12.524.145.623A1.5 1.5 0 0 0 6.393 30H7"></svg:path><svg:rect width="17" height="17" x="7" y="22.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.5" ry="1.5"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.675 32.641h-4.35m-1.078 3.219l3.253-9.722l3.252 9.723"></svg:path>`,
})
export class ArcticonsMicrosoftAdvertisingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMicrosoftAltIcon],svg[arcticons-microsoft-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.5 5.5h17v17h-17zm0 20h17v17h-17zm-20-20h17v17h-17zm0 20h17v17h-17z"></svg:path>`,
})
export class ArcticonsMicrosoftAltIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMicrosoftAuthenticatorIcon],svg[arcticons-microsoft-authenticator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 43.5c12.764-5.885 14.86-15.67 14.86-21.982V16.91S33.43 14.286 24 14.286S9.14 16.909 9.14 16.909v4.61c0 6.31 2.096 16.096 14.86 21.981"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.013 14.96v-2.447a8.013 8.013 0 0 0-16.026 0v2.448m9.837 12.109a3.79 3.79 0 1 0-3.648 0a5.67 5.67 0 0 0-3.849 5.368h11.346a5.67 5.67 0 0 0-3.849-5.367"></svg:path>`,
})
export class ArcticonsMicrosoftAuthenticatorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMicrosoftAuthenticatorAltIcon],svg[arcticons-microsoft-authenticator-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 43.5c1.275 0 11.507-5.888 11.507-12.837V15.508C32.489 15.508 24 13.992 24 13.992s-8.496 1.516-11.507 1.516v15.155C12.493 37.613 22.725 43.5 24 43.5m8.014-30.618q.01-.178.012-.356a8.026 8.026 0 0 0-16.052 0q.002.178.012.356"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 21.534a3.142 3.142 0 0 0-1.406 5.952a3.99 3.99 0 0 0-2.583 3.736h7.978a3.99 3.99 0 0 0-2.583-3.736A3.142 3.142 0 0 0 24 21.534"></svg:path>`,
})
export class ArcticonsMicrosoftAuthenticatorAltIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMicrosoftAzureIcon],svg[arcticons-microsoft-azure-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m26.783 40.814l-12.01-11.669h12.06l3.275 9.562c.69 2.014-1.798 3.59-3.325 2.107"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m19.619 33.855l-2.188 6.374a1.62 1.62 0 0 1-1.53 1.092H7.226a1.724 1.724 0 0 1-1.63-2.283l10.72-31.295c.519-1.515 2.661-1.515 3.18 0l4.532 13.23l-2.805 8.172m5.61 0l-2.804-8.172"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.907 6.602h12.378c.637 0 1.203.405 1.41 1.007l10.699 31.22a1.94 1.94 0 0 1-1.836 2.57h-12.38"></svg:path>`,
})
export class ArcticonsMicrosoftAzureIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMicrosoftBingIcon],svg[arcticons-microsoft-bing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.139 16.799a1.5 1.5 0 0 0-1.318 1.403c-.023.318-.016.34.703 2.19c1.636 4.209 2.033 5.222 2.1 5.365c.16.345.388.67.672.962c.217.223.36.344.604.506c.426.285.638.364 2.299.856c1.618.479 2.501.797 3.263 1.175c.987.49 1.675 1.047 2.11 1.708c.313.474.59 1.324.71 2.18c.047.335.048 1.075 0 1.377c-.1.657-.304 1.207-.614 1.667c-.165.245-.108.204.132-.094c.68-.845 1.371-2.288 1.724-3.596a10.86 10.86 0 0 0 .167-4.895a10.77 10.77 0 0 0-5.385-7.362c-.175-.096-6.432-3.353-6.54-3.386a2.3 2.3 0 0 0-.474-.073z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.125 36.203c-.03.025-1.432.893-2.135 1.322a4.7 4.7 0 0 1-1.784.628c-.294.04-.851.04-1.145 0a4.6 4.6 0 0 1-2.157-.873a6 6 0 0 1-.888-.887a4.6 4.6 0 0 1-.828-1.854a4 4 0 0 0-.068-.295c-.013-.013.01.225.054.536c.044.323.138.791.24 1.192c.788 3.098 3.028 5.618 6.062 6.816a10.4 10.4 0 0 0 2.713.67c.36.04 1.38.056 1.757.027c1.725-.13 3.227-.638 4.767-1.612l3.72-2.349l.02-.013s2.875-1.851 3.453-2.418c.24-.236.604-.639.622-.69c.004-.01.068-.11.144-.221q.46-.68.61-1.661c.048-.303.047-1.042 0-1.377c-.09-.647-.298-1.38-.52-1.848c-.366-.766-1.145-1.462-2.263-2.023c-.309-.155-.628-.297-.664-.295c-.016.001-11.69 7.207-11.71 7.224"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m11.107 34.198l.07.314c.219.982.598 1.69 1.258 2.348a4.44 4.44 0 0 0 3.2 1.323c.877 0 1.637-.22 2.42-.698c.132-.08 2.06-1.27 2.06-1.27s-.007-24.681-.019-24.856a4.43 4.43 0 0 0-1.305-2.868c-.236-.234-.439-.39-1.041-.805c-.3-.207-4.398-3.027-4.574-3.09a1.6 1.6 0 0 0-.702-.087a1.54 1.54 0 0 0-1.35 1.218c-.023.102-.017 28.47-.017 28.47"></svg:path>`,
})
export class ArcticonsMicrosoftBingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMicrosoftBingAltIcon],svg[arcticons-microsoft-bing-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m10.57 4.5l7.85 2.87l-.05 27.16l10.43-6.05l-5.2-2.8l-3.28-8.18l16.88 5.88l.23 9L18.37 43.5L10.65 39Z"></svg:path>`,
})
export class ArcticonsMicrosoftBingAltIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMicrosoftBingWallpapersIcon],svg[arcticons-microsoft-bing-wallpapers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="23.63" height="39" x="12.185" y="4.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.8" ry="1.8"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.69 6.99h5.66"></svg:path><svg:circle cx="20.36" cy="6.99" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.885 25.333V31m0-5.667L20.67 17l9.618 12.069m0 0L25.84 20.6l1.407-2.13l5.868 8.198v4.299L14.885 31"></svg:path>`,
})
export class ArcticonsMicrosoftBingWallpapersIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMicrosoftCompanyPortalIcon],svg[arcticons-microsoft-company-portal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.223 32.383H6.541a1.025 1.025 0 0 1-1.027-1.027V7.735c0-.57.458-1.027 1.027-1.027h34.918c.57 0 1.027.458 1.027 1.027v23.621c0 .57-.458 1.027-1.027 1.027H26.256"></svg:path><svg:circle cx="18.394" cy="20.831" r="6.162" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.064 41.292h20.415c.996-17.147-21.246-17.879-20.415 0m9.559-34.584v8.007m12.083-8.007v25.675m12.78-12.838H24.428m-18.914 0H12.3m17.475 6.309h12.711"></svg:path>`,
})
export class ArcticonsMicrosoftCompanyPortalIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMicrosoftCopilotIcon],svg[arcticons-microsoft-copilot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.32 19.203a3.99 3.99 0 0 1 3.838-2.878h11.57a3.99 3.99 0 0 1-3.838-2.869l-1.13-3.857a3.99 3.99 0 0 0-3.838-2.868m-2.678 20.138l-.57 1.938a3.99 3.99 0 0 1-3.838 2.868H10.703a3.99 3.99 0 0 1 3.847 2.888l1.102 3.819a3.99 3.99 0 0 0 3.838 2.887"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.751 6.73h-13.85c-3.96 0-6.335 5.225-7.912 10.46c-1.89 6.193-4.332 14.485 2.764 14.485h5.985a4 4 0 0 0 3.847-2.906c1.045-3.639 2.86-9.974 4.293-14.82c.732-2.45 1.33-4.559 2.261-5.87a3.13 3.13 0 0 1 2.612-1.349m-9.499 34.54h13.85c3.961 0 6.336-5.225 7.913-10.46c1.88-6.202 4.331-14.485-2.764-14.485h-5.985a4 4 0 0 0-3.847 2.897a1797 1797 0 0 1-4.294 14.819c-.731 2.46-1.33 4.56-2.26 5.88a3.13 3.13 0 0 1-2.613 1.349"></svg:path>`,
})
export class ArcticonsMicrosoftCopilotIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMicrosoftCopilotAltIcon],svg[arcticons-microsoft-copilot-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.94 16.325h4.788a3.99 3.99 0 0 1-3.838-2.869l-1.13-3.857a3.99 3.99 0 0 0-3.838-2.868M10.703 31.675a3.99 3.99 0 0 1 3.847 2.888l1.102 3.819a3.99 3.99 0 0 0 3.838 2.887"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.751 6.73h-13.85c-3.96 0-6.335 5.225-7.912 10.46c-1.89 6.193-4.332 14.485 2.764 14.485h5.985a4 4 0 0 0 3.847-2.906c1.045-3.639 2.86-9.974 4.293-14.82c.732-2.45 1.33-4.559 2.261-5.87a3.13 3.13 0 0 1 2.612-1.349m-9.499 34.54h13.85c3.961 0 6.336-5.225 7.913-10.46c1.88-6.202 4.331-14.485-2.764-14.485h-5.985a4 4 0 0 0-3.847 2.897a1797 1797 0 0 1-4.294 14.819c-.731 2.46-1.33 4.56-2.26 5.88a3.13 3.13 0 0 1-2.613 1.349"></svg:path>`,
})
export class ArcticonsMicrosoftCopilotAltIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMicrosoftDefenderIcon],svg[arcticons-microsoft-defender-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M41.556 11.021v10.403c0 3.407-1.544 6.733-3.752 9.72C33.63 36.77 27.08 41.17 24 42.5c-3.08-1.33-9.631-5.729-13.804-11.357c-2.208-2.986-3.752-6.312-3.752-9.719V11.021c0-.357.289-.646.653-.646h2.817C16.22 10.375 16.377 5.5 24 5.5s7.78 4.875 14.086 4.875h2.817c.364 0 .653.289.653.646M24 5.5v37m17.411-19.275H6.589"></svg:path>`,
})
export class ArcticonsMicrosoftDefenderIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMicrosoftDesignerIcon],svg[arcticons-microsoft-designer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.625 23.992C12.609 23.982 8.055 16.698 7.93 8.1c-.026-1.67 1.142-2.6 2.6-2.6h11.68c9.112 0 17.544 7.513 17.861 18.5c-.317 10.99-8.75 18.5-17.865 18.5H10.53c-1.458 0-2.626-.93-2.6-2.6c.125-8.594 4.68-15.881 14.694-15.892L27.326 24a8.704 8.704 0 0 1 8.73 8.677v2.866"></svg:path>`,
})
export class ArcticonsMicrosoftDesignerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMicrosoftDynamics365RemoteAssistIcon],svg[arcticons-microsoft-dynamics-365-remote-assist-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m23 13.518l-7.578 4.375a2 2 0 0 0-1 1.732v8.75a2 2 0 0 0 1 1.733L23 34.483a2 2 0 0 0 2 0l7.578-4.375a2 2 0 0 0 1-1.733v-8.75a2 2 0 0 0-1-1.732L25 13.518a2 2 0 0 0-2 0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m23 2.768l-16.887 9.75a2 2 0 0 0-1 1.732v19.5a2 2 0 0 0 1 1.732L23 45.232a2 2 0 0 0 2 0l16.887-9.75a2 2 0 0 0 1-1.732v-19.5a2 2 0 0 0-1-1.732L25 2.768a2 2 0 0 0-2 0M14.422 19.78l-9.309 5.375m28.465 3.065l9.309-5.375"></svg:path>`,
})
export class ArcticonsMicrosoftDynamics365RemoteAssistIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMicrosoftEdgeIcon],svg[arcticons-microsoft-edge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.78 45.33C19.41 45.25 14 37.71 14 31.87c0-7.3 6-13.27 10-13.27c4.46 0 5.44 4.79 5.44 4.79"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.5 24c0-7.29 7.84-11.38 13.87-11.38S29.5 17.4 29.5 24c0 3.2-1.92 2.77-1.92 4.69c0 1.49 3 2.5 6.36 2.5c5.44 0 12-2.72 11.53-9.39q0 0 0 0A21.54 21.54 0 1 0 24 45.5c8 0 14.64-4.59 18.72-10.84c.66-1-.51-2-1.56-1.08a15.5 15.5 0 0 1-7.77 2.82c-4.21 0-14.74-2.82-14.74-12c0-3.81 2.2-4.87 2.2-4.87"></svg:path>`,
})
export class ArcticonsMicrosoftEdgeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMicrosoftEdgeBetaIcon],svg[arcticons-microsoft-edge-beta-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M39.15 9.5a2 2 0 0 1 0 4h-3.3v-8h3.3a2 2 0 0 1 0 4m0 0h-3.3m-9.07 35.83c-7.357-.08-12.757-7.605-12.757-13.434c0-7.287 5.99-13.245 9.982-13.245c4.451 0 5.43 4.78 5.43 4.78"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.445 4.663a21.5 21.5 0 1 0-9.44 40.837c7.985 0 14.612-4.581 18.684-10.82c.66-.998-.509-1.996-1.557-1.077a15.5 15.5 0 0 1-7.755 2.814c-4.202 0-14.712-2.814-14.712-11.977c0-3.803 2.157-4.78 2.157-4.78"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.545 24.04c0-7.275 7.826-11.358 13.844-11.358s13.105 4.771 13.105 11.359c0 3.194-1.916 2.765-1.916 4.68c0 1.488 2.994 2.496 6.348 2.496c5.43 0 11.977-2.715 11.508-9.372h0a21.5 21.5 0 0 0-2.08-7.308"></svg:path><svg:circle cx="38.5" cy="9.5" r="7" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsMicrosoftEdgeBetaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMicrosoftEdgeCanaryIcon],svg[arcticons-microsoft-edge-canary-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.78 45.33c-7.357-.08-12.757-7.605-12.757-13.434c0-7.287 5.99-13.245 9.982-13.245c4.451 0 5.43 4.78 5.43 4.78"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.445 4.663a21.5 21.5 0 1 0-9.44 40.837c7.985 0 14.612-4.581 18.684-10.82c.66-.998-.509-1.996-1.557-1.077a15.5 15.5 0 0 1-7.755 2.814c-4.202 0-14.712-2.814-14.712-11.977c0-3.803 2.157-4.78 2.157-4.78"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.545 24.04c0-7.275 7.826-11.358 13.844-11.358s13.105 4.771 13.105 11.359c0 3.194-1.916 2.765-1.916 4.68c0 1.488 2.994 2.496 6.348 2.496c5.43 0 11.977-2.715 11.508-9.372h0a21.5 21.5 0 0 0-2.08-7.308"></svg:path><svg:circle cx="38.5" cy="9.5" r="7" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M41.15 10.817v.033a2.65 2.65 0 0 1-2.65 2.65h0a2.65 2.65 0 0 1-2.65-2.65v-2.7A2.65 2.65 0 0 1 38.5 5.5h0a2.65 2.65 0 0 1 2.65 2.65v.033"></svg:path>`,
})
export class ArcticonsMicrosoftEdgeCanaryIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMicrosoftEdgeDevIcon],svg[arcticons-microsoft-edge-dev-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.78 45.33c-7.357-.08-12.757-7.605-12.757-13.434c0-7.287 5.99-13.245 9.982-13.245c4.451 0 5.43 4.78 5.43 4.78"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.445 4.663a21.5 21.5 0 1 0-9.44 40.837c7.985 0 14.612-4.581 18.684-10.82c.66-.998-.509-1.996-1.557-1.077a15.5 15.5 0 0 1-7.755 2.814c-4.202 0-14.712-2.814-14.712-11.977c0-3.803 2.157-4.78 2.157-4.78"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.545 24.04c0-7.275 7.826-11.358 13.844-11.358s13.105 4.771 13.105 11.359c0 3.194-1.916 2.765-1.916 4.68c0 1.488 2.994 2.496 6.348 2.496c5.43 0 11.977-2.715 11.508-9.372h0a21.5 21.5 0 0 0-2.08-7.308"></svg:path><svg:circle cx="38.5" cy="9.5" r="7" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36.85 13.5v-8h1.8a3.5 3.5 0 0 1 3.5 3.5v1a3.5 3.5 0 0 1-3.5 3.5Z"></svg:path>`,
})
export class ArcticonsMicrosoftEdgeDevIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMicrosoftExcelIcon],svg[arcticons-microsoft-excel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.82 18.5L15.5 24l-3.68 5.5m7.36-11L15.5 24l3.68 5.5"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 16v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V16a2 2 0 0 0-2-2h-16a2 2 0 0 0-2 2"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.23 14V8.5a4 4 0 0 1 4-4H38.5a4 4 0 0 1 4 4v31a4 4 0 0 1-4 4H17.23a4 4 0 0 1-4-4V34"></svg:path>`,
})
export class ArcticonsMicrosoftExcelIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMicrosoftFamilySafetyIcon],svg[arcticons-microsoft-family-safety-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.143 5.036C9.608 5.036 3.5 11.144 3.5 18.679a13.62 13.62 0 0 0 5.293 10.79v.001a7.612 7.612 0 0 1 5.94-12.373h3.236a6.03 6.03 0 0 0 0-12.061z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.857 5.036c7.535 0 13.643 6.108 13.643 13.643a13.62 13.62 0 0 1-5.293 10.79v.001a7.612 7.612 0 0 0-5.94-12.373h-3.236a6.03 6.03 0 0 1 0-12.061z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m8.793 29.47l12.285 12.284a4.13 4.13 0 0 0 5.844 0l12.285-12.285"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.566 31.243c3.79 3.791 9.937 3.791 13.728 0l5.438-5.438a9.92 9.92 0 0 0 2.904-7.013v-1.695"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24.49 31.047l-5.242-5.242a9.92 9.92 0 0 1-2.905-7.013v-1.695"></svg:path>`,
})
export class ArcticonsMicrosoftFamilySafetyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMicrosoftFinanceAndOperationsIcon],svg[arcticons-microsoft-finance-and-operations-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.449 17.7L21.531 29.618a.96.96 0 0 1-1.362 0L8.933 18.382a.96.96 0 0 1 0-1.363L20.169 5.784a.96.96 0 0 1 1.362 0L39.067 23.32a.96.96 0 0 1 0 1.362L21.531 42.217a.96.96 0 0 1-1.362 0L8.933 30.981a.96.96 0 0 1 0-1.362l11.236-11.237a.96.96 0 0 1 1.362 0L33.45 30.3"></svg:path>`,
})
export class ArcticonsMicrosoftFinanceAndOperationsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMicrosoftLauncherIcon],svg[arcticons-microsoft-launcher-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43 25.42L31.06 40.13H18.12a.56.56 0 0 1-.44-.92L30 24L16.94 7.87h14.12L43 22.58a2.26 2.26 0 0 1 0 2.84"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 16.58L18 24l2.95 3.64a1.12 1.12 0 0 1 0 1.42l-6 7.46a.56.56 0 0 1-.87 0L5 25.42a2.26 2.26 0 0 1 0-2.84L16.94 7.87"></svg:path>`,
})
export class ArcticonsMicrosoftLauncherIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMicrosoftLensIcon],svg[arcticons-microsoft-lens-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 16v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V16a2 2 0 0 0-2-2h-16a2 2 0 0 0-2 2"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.43 34a18.5 18.5 0 1 0 0-20m32.46 2.44L24.5 16.4m-2.46-2.47l4.81-8.34m-2.35 26l4.87.01M23.1 42.4l10.67-18.38m6.22 10.83L29.39 16.4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.75 18.01v11h5.5"></svg:path>`,
})
export class ArcticonsMicrosoftLensIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMicrosoftListsIcon],svg[arcticons-microsoft-lists-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5H14.75L5.5 14.75V38.5a4 4 0 0 0 4 4h23.75l9.25-9.25V9.5a4 4 0 0 0-4-4m-33 27.75h37M5.5 24h37m-37-9.25h37m-27.75 0V42.5"></svg:path>`,
})
export class ArcticonsMicrosoftListsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMicrosoftLoopIcon],svg[arcticons-microsoft-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17 30.98h7c3.709 0 7-3.087 7-7c0-3.801-3.05-7-7-7c-3.75 0-7 3.017-7 7zc0 5.815-4.646 11.525-11.5 11.54V23.98c0-10.423 8.386-18.5 18.5-18.5c11.262 0 18.5 9.308 18.5 18.5c0 9.292-7.526 18.5-18.5 18.5l-18.5.04"></svg:path>`,
})
export class ArcticonsMicrosoftLoopIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMicrosoftMathIcon],svg[arcticons-microsoft-math-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="23" x="5.5" y="12.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2"></svg:rect><svg:rect width="37" height="23" x="5.5" y="12.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2" transform="rotate(90 24 24)"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m30.13 21.97l-4.94 6.55m4.94 0l-4.94-6.55M31.45 19h-8.11l-3.88 10l-2.91-7.03"></svg:path>`,
})
export class ArcticonsMicrosoftMathIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMicrosoftOfficeIcon],svg[arcticons-microsoft-office-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m28 11.81l-9.71 3.44a3 3 0 0 0-2 2.63v13.24a2.61 2.61 0 0 1-1.4 2.1l-4.32 2a1.44 1.44 0 0 1-1.89-1.36V14.72a5.26 5.26 0 0 1 2.7-3.22l12.16-6.86c2.38-.51 4.17.36 4.46 2.78Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.75 4.61A3 3 0 0 1 28 7.42V40a4.12 4.12 0 0 1-1.73 3.17l10.86-3.08a4.54 4.54 0 0 0 2.2-2.69V11.14a3.31 3.31 0 0 0-2.53-3.25Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.51 42.7c1.75.84 2.31 1 3.75.5A4.16 4.16 0 0 0 28 40v-4.9H16.18c-1.61.55-2.57 2.27-.77 3.56Z"></svg:path>`,
})
export class ArcticonsMicrosoftOfficeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMicrosoftOnedriveIcon],svg[arcticons-microsoft-onedrive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.84 36.77a8.66 8.66 0 0 0 1.5-17.18a12.75 12.75 0 0 0-22.33-3a10.12 10.12 0 0 0 .62 20.22ZM14.01 16.55l28.1 16.26m-5.77-13.22L6.6 32.81"></svg:path>`,
})
export class ArcticonsMicrosoftOnedriveIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMicrosoftOnenoteIcon],svg[arcticons-microsoft-onenote-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.8 18.5v11m7.4 0v-11m-7.4 0l7.4 11M5.5 16v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V16c0-1.1-.9-2-2-2h-16c-1.1 0-2 .9-2 2"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.2 14V8.5c0-2.2 1.8-4 4-4h21.3c2.2 0 4 1.8 4 4v31c0 2.2-1.8 4-4 4H17.2c-2.2 0-4-1.8-4-4V34"></svg:path>`,
})
export class ArcticonsMicrosoftOnenoteIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMicrosoftOutlookIcon],svg[arcticons-microsoft-outlook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M41.92 25.3v-4.77h0V7.5a2 2 0 0 0-2-2H15.55a2 2 0 0 0-2 2V14m4.64 8.19a3.68 3.68 0 0 0-3.89-3.68a3.83 3.83 0 0 0-3.49 3.89v3.41a3.69 3.69 0 0 0 3.69 3.69h0a3.69 3.69 0 0 0 3.69-3.69h0z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 16v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V16a2 2 0 0 0-2-2h-16a2 2 0 0 0-2 2m39 26.5l-19-10.68"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.67 34v8.5H43.5V24.39l-15.91 9.17"></svg:path>`,
})
export class ArcticonsMicrosoftOutlookIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMicrosoftPlannerIcon],svg[arcticons-microsoft-planner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.2 29.5h10.3c1.1 0 2-.9 2-2v-20c0-1.1-.9-2-2-2H30.2V34c0 1.1-.9 2-2 2H17.8"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 23.8h12.3v16.7c0 1.1-.9 2-2 2H7.5c-1.1 0-2-.9-2-2v-33c0-1.1.9-2 2-2h22.9"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.8 5.5v13.2h12.35"></svg:path>`,
})
export class ArcticonsMicrosoftPlannerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMicrosoftPowerAppsIcon],svg[arcticons-microsoft-power-apps-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.92 8.059L22.433 6.57a2 2 0 0 0-2.93.11L4.852 23.704a2 2 0 0 0 .103 2.719l14.942 14.941a2 2 0 0 0 2.93-.11l1.186-1.379"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m20.165 15.403l6.175 6.174a2 2 0 0 1 .102 2.72l-7.118 8.272a2 2 0 0 0 .102 2.718l6.142 6.143a2 2 0 0 0 2.93-.11l14.65-17.024a2 2 0 0 0-.103-2.718L28.103 6.636a2 2 0 0 0-2.93.11l-5.11 5.938a2 2 0 0 0 .102 2.718"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m39.24 28.836l-1.206 1.399a2 2 0 0 1-2.928.108l-6.141-6.141a2 2 0 0 1-.102-2.719l5.11-5.938a2 2 0 0 1 2.93-.11l1.35 1.351"></svg:path>`,
})
export class ArcticonsMicrosoftPowerAppsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMicrosoftPowerAutomateIcon],svg[arcticons-microsoft-power-automate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.92 8.5a1.5 1.5 0 0 0-1.172 2.438L17.199 24L6.748 37.062A1.5 1.5 0 0 0 7.92 39.5h20.959a1.5 1.5 0 0 0 1.172-.563l11.2-14a1.5 1.5 0 0 0 0-1.875l-11.2-14a1.5 1.5 0 0 0-1.172-.563zm21.564.145L17.2 24m18.6-7.75L17.196 39.5"></svg:path>`,
})
export class ArcticonsMicrosoftPowerAutomateIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMicrosoftPowerBiIcon],svg[arcticons-microsoft-power-bi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.379 23.613h9.508a2 2 0 0 1 2 2v18.036H11.379a2 2 0 0 1-2-2V25.613a2 2 0 0 1 2-2m15.58-9.44V6.649a2 2 0 0 1 2-2h9.508a2 2 0 0 1 2 2v35a2 2 0 0 1-2 2h-6.79"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.169 23.613v-7.44a2 2 0 0 1 2-2h9.508a2 2 0 0 1 2 2v27.476h-8.79"></svg:path>`,
})
export class ArcticonsMicrosoftPowerBiIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMicrosoftPowerpointIcon],svg[arcticons-microsoft-powerpoint-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.66 29V18h3.7a3.7 3.7 0 0 1 0 7.39h-3.7"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 16v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V16a2 2 0 0 0-2-2h-16a2 2 0 0 0-2 2"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.43 34a18.5 18.5 0 1 0 0-20"></svg:path>`,
})
export class ArcticonsMicrosoftPowerpointIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMicrosoftRemotedesktopIcon],svg[arcticons-microsoft-remotedesktop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m14.959 37.5l9.186-9.187l-9.186-9.187M33.041 10.5l-9.186 9.187l9.186 9.187"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path>`,
})
export class ArcticonsMicrosoftRemotedesktopIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMicrosoftSharepointIcon],svg[arcticons-microsoft-sharepoint-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.55 16v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V16c0-1.1-.9-2-2-2h-16c-1.1 0-2 .9-2 2"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.15 28.3c.7.9 1.5 1.2 2.7 1.2h1.6c1.5 0 2.7-1.2 2.7-2.7h0c0-1.5-1.2-2.7-2.7-2.7h-1.8c-1.5 0-2.7-1.2-2.7-2.7h0c0-1.5 1.2-2.8 2.8-2.8h1.6c1.2 0 2 .3 2.7 1.2m14.4 15.8c.4.1.9.1 1.3.1c5.4 0 9.7-4.4 9.7-9.7s-4.4-9.7-9.7-9.7c-4.3 0-8 2.8-9.2 6.7"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.55 26.5c4.4 0 8 3.6 8 8c0 .4 0 .8-.1 1.1c-.6 3.9-3.9 6.9-7.9 6.9c-4.4 0-8-3.6-8-8V34m-3.7-20c1-4.9 5.4-8.5 10.5-8.5c5.9 0 10.8 4.8 10.8 10.7"></svg:path>`,
})
export class ArcticonsMicrosoftSharepointIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMicrosoftSolitaireIcon],svg[arcticons-microsoft-solitaire-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.4 12.1v-1.57a1 1 0 0 1 1-1h17.2a1 1 0 0 1 1 1V12l-9.13-2.44a1.11 1.11 0 0 0-1.22.71L17 33.47a1 1 0 0 0 .71 1.22l3.18.85m3.24.87l10.2 2.73a1 1 0 0 0 1.22-.71l6.21-23.2a1 1 0 0 0-.67-1.23l-7.48-2m-9.44 24.4l-3.24-.87h-5.52a1 1 0 0 1-1-1v-22.4l-7.16 1.92a1 1 0 0 0-.71 1.22l6.21 23.2a1 1 0 0 0 1.22.71Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.6 28c-.22-.61-1.08 1-.6 3.2l-2.8-.8c1.74-1.47 1.59-3.22 1.3-3c-3.95 1.68-5.49-.83-5-3.4c.51-4.21 5.9-3.9 8.7-6.9c.8 3.54 5.66 6.4 4.4 10.3c-1.16 2.6-3.91 3.69-6 .6m3.2 7.7c-1 .44-1.73-.23-1.6-.9c.13-1.09 1.58-1 2.3-1.8c.21.92 1.43 1.59 1.1 2.6a1 1 0 0 1-1.8.1l-.3 1.1m-7-22.5c-1 .44-1.73-.23-1.6-.9c.13-1.09 1.58-1 2.3-1.8c.21.92 1.43 1.59 1.1 2.6a1 1 0 0 1-1.8.1l-.3 1.1"></svg:path>`,
})
export class ArcticonsMicrosoftSolitaireIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMicrosoftStartIcon],svg[arcticons-microsoft-start-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m13.709 26.437l-8.493-4.215a.924.924 0 0 1-.375-1.316l5.83-9.382a.924.924 0 0 1 1.196-.34l8.403 4.17c.485.24.66.845.378 1.308L14.91 26.09a.923.923 0 0 1-1.2.347m12.354 6.131l-8.493-4.214a.924.924 0 0 1-.374-1.316l5.829-9.383a.924.924 0 0 1 1.196-.34l8.403 4.17c.485.24.66.846.379 1.308l-5.74 9.428a.923.923 0 0 1-1.2.347"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m14.917 12.7l5.702-9.192a.914.914 0 0 1 1.198-.335l8.4 4.169a.92.92 0 0 1 .378 1.304l-4.917 8.082l-.617 1.005m-2.248.264l-2.291-1.128m12.356 6.125l3.137 1.56a.93.93 0 0 0 1.199-.344l.82-1.348l4.917-8.082a.93.93 0 0 0-.379-1.313l-8.399-4.169a.925.925 0 0 0-1.198.344L27.88 17.82l-.617 1.004M10.413 24.8l-5.209 8.364a.927.927 0 0 0 .38 1.322L14.07 38.7a.925.925 0 0 0 1.198-.344l5.218-8.557m-2.749-3.624l-2.212-1.101m12.355 6.134l5.113 2.538c.44.212.625.732.44 1.172a.7.7 0 0 1-.062.141l-5.746 9.422a.92.92 0 0 1-1.198.352l-8.496-4.221a.92.92 0 0 1-.37-1.314l5.2-8.372m5.12-13.105l-2.204-1.093"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m38.034 22.862l4.75 2.353a.93.93 0 0 1 .379 1.313l-5.737 9.421a.92.92 0 0 1-1.199.353l-2.794-1.384"></svg:path>`,
})
export class ArcticonsMicrosoftStartIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMicrosoftSurfaceIcon],svg[arcticons-microsoft-surface-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.5 16.758h5v5h-5zm0 2.5h5m-2.5-2.5v5M5.5 33.517a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4m-37-4.826a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4"></svg:path>`,
})
export class ArcticonsMicrosoftSurfaceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMicrosoftTeamsIcon],svg[arcticons-microsoft-teams-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="37.07" cy="13.19" r="4.16" fill="none" stroke="currentColor" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M33.46 35.73a4 4 0 0 0 1.28.79a6.42 6.42 0 0 0 8.76-6v-9.38a1.75 1.75 0 0 0-1.72-1.76h-9.36m-8.05-1.88s1.07-.17 1.42-.25a5.89 5.89 0 0 0 3.92-7.55A6 6 0 0 0 18 11.52a6.2 6.2 0 0 0 .15 1.36l.28 1.12"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M14 34a16 16 0 0 0 .55 2.07A10.5 10.5 0 0 0 24 42.5a10.43 10.43 0 0 0 10.12-10.67V21.16a1.74 1.74 0 0 0-1.7-1.78h-8"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.35 18.5h8.3m-4.15 11v-11"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M4.5 16v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V16a2 2 0 0 0-2-2h-16a2 2 0 0 0-2 2Z"></svg:path>`,
})
export class ArcticonsMicrosoftTeamsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMicrosoftTodoIcon],svg[arcticons-microsoft-todo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m12.66 16.49l7.5 7.5L35.38 8.77L43 16.39L20.17 39.23L5 24.06Zm-.12 15.12l7.62-7.62"></svg:path>`,
})
export class ArcticonsMicrosoftTodoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMicrosoftTranslatorIcon],svg[arcticons-microsoft-translator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m10.315 35.636l4.142-11.144m3.97 11.177l-3.97-11.177m2.642 7.439h-5.407m14.166-18.584h12.457m-6.228-2.468v2.468m3.486 0c0 3.408-3.957 9.048-7.913 9.91"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.287 16.441c.392 2.35 4.466 6.268 8.09 6.816m-9.631 11.676a5.166 5.166 0 0 0 5.165-5.166v-2.575"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m29.581 29.522l2.33-2.33l2.331 2.33M19.537 13.347a5.166 5.166 0 0 0-5.166 5.165v2.575"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m16.701 18.758l-2.329 2.329l-2.332-2.329"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29c-2.2 0-4 1.8-4 4v29c0 2.2 1.8 4 4 4h29c2.2 0 4-1.8 4-4v-29c0-2.2-1.8-4-4-4"></svg:path>`,
})
export class ArcticonsMicrosoftTranslatorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMicrosoftVivaEngageIcon],svg[arcticons-microsoft-viva-engage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.002 30.384c0 7.794 5.04 12.116 11.01 12.116a8.832 8.832 0 1 0 0-17.664c-5.715 0-11.01-4.32-11.01-9.954z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.936 24.82a9.149 9.149 0 1 0-16.115-.048"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.002 14.882c0-5.57 3.537-9.382 8.832-9.382s7.045 3.348 8.552 5.825m.613 16.943a8.82 8.82 0 0 1 6.99-3.432c5.714 0 11.009-4.32 11.009-9.954v15.502c0 7.794-5.04 12.116-11.01 12.116A8.82 8.82 0 0 1 24 39.068m17.998-24.186c0-5.57-3.537-9.382-8.831-9.382c-5.295 0-7.046 3.348-8.553 5.825"></svg:path>`,
})
export class ArcticonsMicrosoftVivaEngageIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMicrosoftWhiteboardIcon],svg[arcticons-microsoft-whiteboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24.038 27.43l-1.116-.967m4.916-.357l-3.8 1.324l-1.445.29l.329-1.257c.396-.546 1.78-3.453 1.78-3.453m3.136 3.096l-3.136-3.096L40.54 8.247c1.324.557 2.409 1.69 2.96 2.865zm-21.08-.882c2.507-3.089 4.146-2.27 8.018 1.214c3.871 3.484 5.51 4.303 8.018 1.215m17.595-13.56v24.294c0 .756-.608 1.366-1.365 1.366H5.866c-.757 0-1.366-.61-1.366-1.366V14.134c0-.756.61-1.366 1.366-1.366H35.69"></svg:path>`,
})
export class ArcticonsMicrosoftWhiteboardIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMicrosoftWordIcon],svg[arcticons-microsoft-word-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M5.5 16v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V16a2 2 0 0 0-2-2h-16a2 2 0 0 0-2 2Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m9 18.5l3.25 11m3.25-11l-3.25 11m3.25-11l3.25 11m3.25-11l-3.25 11M13.23 14V8.5a4 4 0 0 1 4-4H38.5a4 4 0 0 1 4 4v31a4 4 0 0 1-4 4H17.23a4 4 0 0 1-4-4V34"></svg:path>`,
})
export class ArcticonsMicrosoftWordIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMicrosoftWordamentIcon],svg[arcticons-microsoft-wordament-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m34.505 27.406l5.807 1.024l-2.657 15.07l-15.07-2.657l1.043-5.916m.592-3.358l1.022-5.796l5.774 1.018m-7.252-10.269l-1.006 5.705l-15.07-2.657L10.346 4.5l15.07 2.658l-.996 5.646m-3.826 21.7l-1.024 5.807L4.5 37.654l2.657-15.07l15.07 2.657l-1.003 5.69m6.19-17.477l1.016-5.766l15.07 2.658l-2.657 15.07l-5.736-1.012m-3.599-.634l-5.735-1.011l1.027-5.827"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m22.078 14.338l7.033 1.24m0-.001l-.827-1.182m-.355 2.011l1.182-.828m-3.189 18.084l-7.033-1.24m0 0l1.182-.827m-.354 2.009l-.827-1.182m14.772-10.344l-1.24 7.032m.001 0l1.182-.827m-2.011-.355l.828 1.182M13.242 8.636l.592 8.392l3.427-7.683l.592 8.391l3.427-7.683M33.927 20.57a2.704 2.704 0 0 1-2.193-3.131l.479-2.713a2.704 2.704 0 0 1 5.324.94l-.478 2.712a2.704 2.704 0 0 1-3.132 2.193m-5.85 17.614l1.417-8.037l2.631.464a2.74 2.74 0 0 1 2.218 3.174a2.74 2.74 0 0 1-3.17 2.224l-2.631-.464m2.631.464l2.167 3.101M9.993 34.997l1.417-8.037l1.809.319a3.57 3.57 0 0 1 2.896 4.136l-.177 1.005a3.57 3.57 0 0 1-4.136 2.896z"></svg:path>`,
})
export class ArcticonsMicrosoftWordamentIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMicrosoftWordamentAltIcon],svg[arcticons-microsoft-wordament-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.842 5.5v37m12.368-37v37M5.5 17.842h37M5.5 30.21h37M8.158 8.164l1.8 7.2l1.8-7.2l1.8 7.2l1.8-7.2m8.642 7.2a2.385 2.385 0 0 1-2.385-2.385v-2.43a2.385 2.385 0 1 1 4.77 0v2.43A2.385 2.385 0 0 1 24 15.364m9.899 0v-7.2h2.357c1.333 0 2.413 1.082 2.413 2.418S37.589 13 36.256 13H33.9m2.485.002l2.358 2.362m-4.839 12.265v-7.2h1.62a3.15 3.15 0 0 1 3.15 3.15v.9a3.15 3.15 0 0 1-3.15 3.15zm3.942 9.852h-3.119m-.777 2.387l2.34-7.179l2.34 7.2m-18.23-.008V32.69l3.6 7.2l3.6-7.189v7.19M9.964 36.289h2.347m1.253 3.6h-3.6v-7.2h3.6M9.373 27.6v-7.2l4.77 7.2v-7.2m7.472 0h4.77M24 27.6v-7.2"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29c-2.2 0-4 1.8-4 4v29c0 2.2 1.8 4 4 4h29c2.2 0 4-1.8 4-4v-29c0-2.2-1.8-4-4-4"></svg:path>`,
})
export class ArcticonsMicrosoftWordamentAltIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMicrosoftYourphoneIcon],svg[arcticons-microsoft-yourphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.32 34H41.8c.94 0 1.7-.56 1.7-1.25v-1.23h-2.27v-23a1.69 1.69 0 0 0-1.69-1.69H8.47a1.69 1.69 0 0 0-1.7 1.68h0v23H4.5v1.25c0 .69.75 1.25 1.7 1.25h5.63"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.6 11.2a1.77 1.77 0 0 0-1.77 1.8v26.56a1.67 1.67 0 0 0 1.67 1.67h14.18a1.66 1.66 0 0 0 1.64-1.65V12.89a1.67 1.67 0 0 0-1.67-1.67Z"></svg:path><svg:circle cx="16.83" cy="14.6" r=".73" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.77 31.51h5.06m29.4.01H29.32M18.96 14.6h6.26"></svg:path>`,
})
export class ArcticonsMicrosoftYourphoneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMidasIcon],svg[arcticons-midas-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.365 30.991c.434-.207.79-.465.79-.574s-1.361-2.898-3.025-6.199c-3.22-6.392-3.807-7.211-5.371-7.505c-.883-.165-2.534.266-2.703.706c-.133.346 5.765 12.112 6.415 12.8c1.057 1.114 2.554 1.41 3.894.772m10.345 0c.435-.207.79-.465.79-.574s-1.36-2.898-3.024-6.199c-3.221-6.392-3.807-7.211-5.372-7.505c-.883-.165-2.534.266-2.703.706c-.133.346 5.765 12.112 6.416 12.8c1.057 1.114 2.554 1.41 3.893.772"></svg:path><svg:ellipse cx="13.569" cy="29.226" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.069" ry="2.091"></svg:ellipse>`,
})
export class ArcticonsMidasIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMidgtIcon],svg[arcticons-midgt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m26.315 5.5l-2.452 7.597s-.28 1.155-1.768 1.155H8.823L7.41 19.019h23.533s5.073.19 7.22-5.078s3.218-8.255 3.218-8.255zm-4.63 37l2.452-7.597s.28-1.155 1.768-1.155h13.272l1.412-4.767H17.056s-5.073-.19-7.22 5.078c-2.149 5.268-3.218 8.255-3.218 8.255zM6.907 24H41.33"></svg:path>`,
})
export class ArcticonsMidgtIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMidikeyboardIcon],svg[arcticons-midikeyboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.67 4.84v23h6.89V10.43"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.24 45.45A21.87 21.87 0 0 1 2.71 21.37A21.61 21.61 0 0 1 24.09 2.5a21.63 21.63 0 0 1 21.23 19.06A21.87 21.87 0 0 1 29.58 45.5"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m29.58 45.5l-1-4.18h-9.41l-.93 4.13M14 5v22.8H7.12v-17m20.11-8.04v25.06h-6.84v-25m-9.69 25v13.74m26.19-13.74v14.07M23.84 27.82v13.49"></svg:path>`,
})
export class ArcticonsMidikeyboardIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMidttrafikIcon],svg[arcticons-midttrafik-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.18 31.98c3.76 2.41 14.75-6.17 14.68-10.56c-.07-4.4-13.75-16.38-20.14-13.05c-6.38 3.33-.29 19.92 5.46 23.61"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.04 38.81c4.12-1.71 3.35-15.63-.3-18.08s-21.3 1.95-22.2 9.09c-.91 7.14 16.19 11.61 22.5 8.99"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.47 28.41c-1.43 4.23 9.55 12.82 13.79 11.69c4.25-1.13 12.57-17.3 7.8-22.69s-19.4 4.53-21.59 11"></svg:path>`,
})
export class ArcticonsMidttrafikIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMifareclassictoolIcon],svg[arcticons-mifareclassictool-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.38 18.62a2.48 2.48 0 0 1 2.46 2.47h0m-2.46-4.37a4.27 4.27 0 0 1 4.29 4.25V21h0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.38 14.89A6.12 6.12 0 0 1 39.5 21h0m-31 8.51v-8.58l4.29 8.58l4.3-8.58v8.58m10.01-8.58h5.72m-2.86 8.58v-8.58m-4.61 5.72a2.85 2.85 0 0 1-2.84 2.86h-.02h0a2.85 2.85 0 0 1-2.86-2.84v-2.88a2.85 2.85 0 0 1 2.84-2.86h.02a2.85 2.85 0 0 1 2.86 2.84v.02h0"></svg:path><svg:rect width="39" height="31" x="4.5" y="8.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect>`,
})
export class ArcticonsMifareclassictoolIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMifitIcon],svg[arcticons-mifit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.14 3.15a2.4 2.4 0 0 1 1.91.66a2.81 2.81 0 0 1-.33 4l-7 7a2.8 2.8 0 0 1-3.95.32a2.81 2.81 0 0 1 .32-3.94l7-7a3.32 3.32 0 0 1 2-1ZM2.5 24A21.5 21.5 0 1 0 24 2.5m9.89 15.67v13.66"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.11 31.83v-13.6l9.89-.06a3.5 3.5 0 0 1 3.53 3.5v10.08m-6.73-9.17v9.25"></svg:path>`,
})
export class ArcticonsMifitIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMightyDoomIcon],svg[arcticons-mighty-doom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m13.846 32.221l-7.278 5.465V18.814h7.278zm1.918-1.277l4.913 3.689l2.364-1.952V18.814h-7.277zm16.472 0l-4.913 3.689l-2.364-1.952V18.814h7.277zM6.568 18.814H4.5m36.932 18.872V18.814h-1.273l-2.421 15.452l-2.312-15.452h-1.272v13.407m7.278-13.407H43.5m-27.509-8.478v5.978m-8.682-.006v-5.972l2.989 5.978l2.989-5.969v5.969m17.358-5.978h3.961m-1.98 5.978v-5.978m-8.044 0v5.978m3.961-5.978v5.978m-3.961-3h3.961m12.148-3l-1.98 2.99l-1.981-2.99m1.981 5.979v-2.989m-16.375-.988a1.98 1.98 0 0 0-1.98-1.98h0a1.98 1.98 0 0 0-1.98 1.98v2.018a1.98 1.98 0 0 0 1.98 1.98h0a1.98 1.98 0 0 0 1.98-1.98h-1.98"></svg:path>`,
})
export class ArcticonsMightyDoomIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMigraineLogIcon],svg[arcticons-migraine-log-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.3 4.5h2.3c1.1 0 2 .9 2 2v35c0 1.1-.9 2-2 2h-2.3m0-39v39H10.4c-1.1 0-2-.9-2-2v-35c0-1.1.9-2 2-2zM8.445 17.833h31.093M8.445 31.166h31.093"></svg:path>`,
})
export class ArcticonsMigraineLogIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMigraneAppIcon],svg[arcticons-migrane-app-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.233 4.5c-2.177 2.686 4.047 6 8.23 8.602c2.69 1.674 10.282 5.909 8.669 12.09a.11.11 0 0 0 .04.118c1.044.787 1.856 2.183 2.121 2.484c.27.306.122.558-.577.901c-.577.284-.823 0-.636.945c.328.769-.35.538-.35.797c0 .36.262.918-.442 1.165c-.704.248.288 1.482-.772 2.107s-5.638-.8-6.25 1.534c-.306 1.17 7.073 4.296 5.838 6.74s-4.808 1.202-4.808 1.202"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.848 11.486c-.78 3.555 3.016 5.008 5.386 6.483c2.359 1.468 7.023 3.3 5.225 7.253a.08.08 0 0 0 .023.096c.731.555 1.299 1.531 1.485 1.742c.19.216.086.394-.406.635c-.407.2-.58 0-.448.665c.23.541-.246.378-.246.56c0 .255.184.647-.312.821s.203 1.044-.543 1.484c-1.348.794-3.222.438-3.96.278c-5.407-1.169-5.163 3.75-10.472.516"></svg:path>`,
})
export class ArcticonsMigraneAppIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMigrateFlasherIcon],svg[arcticons-migrate-flasher-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 41.03L43.5 24L4.5 6.97m39.082 21.067l-9.143 4.318l6.729 5.047l-9.729 3.628"></svg:path>`,
})
export class ArcticonsMigrateFlasherIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMigrateHelperIcon],svg[arcticons-migrate-helper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 41.03L43.5 24L4.5 6.97m37.927 29.277q.032-.243.034-.489a4 4 0 0 0-.034-.489l1.059-.829a.244.244 0 0 0 .06-.32l-1.002-1.738a.244.244 0 0 0-.305-.108l-1.25.504a3.8 3.8 0 0 0-.845-.49l-.189-1.327a.244.244 0 0 0-.244-.21H37.7a.244.244 0 0 0-.244.21l-.189 1.328q-.455.189-.846.489l-1.254-.504a.244.244 0 0 0-.305.108L33.86 34.12a.244.244 0 0 0 .061.32l1.057.83a4 4 0 0 0-.035.488q.003.246.035.489l-1.057.829a.244.244 0 0 0-.06.32l1.002 1.738c.06.108.19.154.305.108l1.25-.504q.392.299.845.49l.189 1.327a.244.244 0 0 0 .244.21h2.005a.244.244 0 0 0 .244-.21l.189-1.328q.455-.189.846-.489l1.249.504c.114.046.245 0 .306-.108l1.002-1.738a.244.244 0 0 0-.061-.32z"></svg:path>`,
})
export class ArcticonsMigrateHelperIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMigrategpeIcon],svg[arcticons-migrategpe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 41.03L43.5 24L4.5 6.97"></svg:path>`,
})
export class ArcticonsMigrategpeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMigrosIcon],svg[arcticons-migros-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m17.18 35l-4.259-17.709l12.093 11.038L30.766 13l4.312 17.933"></svg:path>`,
})
export class ArcticonsMigrosIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMiguIcon],svg[arcticons-migu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m11.572 28.149l-.654-8.965l5.142 8.647l3.833-9.288l.654 8.96m8.916-6.627l.49 6.73a2.25 2.25 0 0 1-2.079 2.408h0a2.24 2.24 0 0 1-1.634-.542"></svg:path><svg:rect width="4.499" height="5.961" x="25.186" y="21.032" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.249" ry="2.249" transform="rotate(175.825 27.436 24.012)"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m31.997 20.69l.27 3.703a2.25 2.25 0 0 0 2.407 2.08h0a2.25 2.25 0 0 0 2.08-2.408l-.27-3.702m.27 3.702l.164 2.243"></svg:path><svg:circle cx="22.344" cy="18.632" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m22.544 21.381l.434 5.945"></svg:path>`,
})
export class ArcticonsMiguIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMihonIcon],svg[arcticons-mihon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M21.454 6.66L8.427 8.955a2 2 0 0 0 .695 3.94l10.387-1.832a212 212 0 0 1-1.199 10.37c-.893.08-1.775.078-2.689.24c-6.04 1.064-10.766 6.87-9.623 13.351c.332 1.882 1.06 3.578 2.367 4.8s3.24 1.79 5.164 1.45a6.46 6.46 0 0 0 3.652-2.035c.863-.959 1.396-2.026 1.852-3.022c1.222-2.674 2.123-6.268 2.891-10.988c3.047.064 6.965.878 11.006 1.787c-.372 3.77-1.245 7.324-2.705 10.631a2 2 0 1 0 3.66 1.615c1.587-3.595 2.523-7.41 2.957-11.383c1.066.264 1.667.327 2.85.627a2 2 0 0 0 .984-3.877c-1.459-.37-2.332-.476-3.643-.797c.07-2.958-.024-5.964-.432-9.059a2 2 0 1 0-3.965.521c.35 2.648.451 5.186.434 7.672c-3.786-.83-7.584-1.596-10.695-1.697c.493-3.687.98-7.232 1.42-12.473a2 2 0 0 0-2.34-2.139zm-3.627 18.817c-.71 4.127-1.5 7.038-2.434 9.078c-.397.868-.79 1.57-1.185 2.008s-.72.657-1.373.771c-.887.156-1.284-.008-1.742-.436s-.933-1.292-1.158-2.568c-.738-4.185 2.45-8.025 6.381-8.719c.512-.09 1.008-.073 1.512-.135z"></svg:path>`,
})
export class ArcticonsMihonIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMiitomoIcon],svg[arcticons-miitomo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M25.438 3.146c2.774.099 9.876 1.96 12.1 5.502c3.738 5.955 7.03 15.898 6.486 24.133c-.262 3.947-.72 7.184-3.728 10c-2.398 2.247-8.946 2.706-8.634 1.744c.978-3-2.652 1.081-1.636-1.32c2.126-5.022 8.747-16.36 6.45-21.596c-4.1-9.342-2.784-.557-2.784-.557s-4.059-.014-5.001-.045c-.791-.027.503-6.727-.768-7.347m-.378 24.283s-.46 1.4-3.845 1.281m-3.3-1.281s.461 1.4 3.846 1.281M35.68 23.876s-5.218-3.273-8.409-.916m-15.129.84s5.219-3.274 8.41-.916m8.916 5.62c0 .97.758 1.757 1.692 1.757s1.691-.786 1.691-1.756s-.757-1.756-1.691-1.756c-.935 0-1.692.786-1.692 1.756m6.188.455s-3.81-6.257-7.616-.319m8.77-.514c-.304-.582-6.023-5.128-8.77.514m-9.463-.215c0 .97-.758 1.756-1.692 1.756s-1.691-.785-1.691-1.756c0-.969.757-1.755 1.691-1.755c.935 0 1.692.786 1.692 1.755m-6.188.455s3.81-6.258 7.615-.319m-8.77-.513c.305-.583 6.023-5.129 8.77.513m3.615 2.756s-1.25 3.111-1.273 3.215c-.024.105.158 1.06 1.828 1.317m1.263-32.703s-4.936-.177-5.295-.141c-2.423.248-7.24 1.652-9.68 5.54C6.723 14.5 3.43 24.444 3.976 32.678c.262 3.948.72 7.184 3.727 10c2.4 2.248 8.948 2.706 8.635 1.745c-.177-.54-.204-.85-.135-1.01c.313-.73 2.605 1.66 1.771-.31c-1.531-3.618-5.395-10.513-6.578-16.043c-.459-2.148-.514-4.089.129-5.553c4.099-9.343 2.783-.558 2.783-.558s3.728-.031 4.67-.062c.593.039.315-7.21.825-7.258"></svg:path><svg:path d="M19.803 13.63c.832-.083.824 3.727.753 5.883c-.026.796.563 1.601 1.353 1.696c1.2.144 2.66.187 3.731.11c.838-.06 1.376-1.433 1.357-2.44l-.08-3.977c-.011-.496.168-1.454.609-1.399c.134.017.298.075.492.193"></svg:path></svg:g>`,
})
export class ArcticonsMiitomoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMijnDswIcon],svg[arcticons-mijn-dsw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.509 5.507H9.507c-2.2 0-4 1.8-4 4V38.51c0 2.2 1.8 4 4 4H38.51c2.2 0 4-1.8 4-4V9.507c0-2.2-1.8-4-4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m38.5 18.905l-2.548 10.19l-2.547-10.19l-2.548 10.19l-2.547-10.19m-8.937 9.075c.625.812 1.409 1.115 2.5 1.115h1.508a2.54 2.54 0 0 0 2.542-2.543h0v-.01A2.54 2.54 0 0 0 23.381 24h-1.664a2.545 2.545 0 0 1-2.545-2.545h0a2.55 2.55 0 0 1 2.55-2.55h1.5c1.09 0 1.874.303 2.5 1.117M9.5 29.095v-10.19h2.293a4.46 4.46 0 0 1 4.458 4.458v1.274a4.46 4.46 0 0 1-4.458 4.458z"></svg:path>`,
})
export class ArcticonsMijnDswIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMijnKpnIcon],svg[arcticons-mijn-kpn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.084 18.277C30.181 8.88 22.502 4.5 17.34 4.5s-9.306 7.24-5.81 17.464c-4.106 1.526-5.854 3.387-5.854 6.05c0 5.765 11.519 13.894 20.384 10.772c2.716 4.027 6.15 4.714 7.211 4.714c3.715 0 5.089-6.025 6.181-10.177s2.872-5.436 2.872-8.587s-1.904-6.46-9.24-6.46"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.719 21.798c-1.053-.013-1.577.36-1.729 1.254c-.2 1.176.747 2.968 1.196 3.697m-2.974.628c-1.57-1.419-2.551-2.688-.723-3.343m6.792-2.236c1.053-.013 1.577.36 1.729 1.254c.2 1.176-.747 2.968-1.196 3.697m1.842 3.03s-1.87-.587-3.656-.587s-3.655.587-3.655.587m8.443-2.402c1.57-1.419 2.552-2.688.723-3.343"></svg:path><svg:circle cx="24" cy="18.958" r=".75" fill="currentColor"></svg:circle>`,
})
export class ArcticonsMijnKpnIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMijnSimyoIcon],svg[arcticons-mijn-simyo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 33.25a9.25 9.25 0 0 0 9.25 9.25h18.5a9.25 9.25 0 1 0 0-18.5h-18.5a9.25 9.25 0 0 1 0-18.5h18.5a9.25 9.25 0 0 1 9.25 9.25"></svg:path>`,
})
export class ArcticonsMijnSimyoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMijnVolleybalIcon],svg[arcticons-mijn-volleybal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.999 24a35 35 0 0 1 3.124-7.348a35 35 0 0 1 5.45-7.24a33 33 0 0 1 3.551-3.163M16.515 3.845a29.2 29.2 0 0 0-9.44 20.037m9.002 1.09v-.01c.828-9.342 6.14-17.214 13.624-21.69"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.999 24a34.7 34.7 0 0 1-7.922.962a35 35 0 0 1-9.001-1.08a34.5 34.5 0 0 1-4.506-1.498m29.788 16.329h-.01c-7.104 3.62-14.986 4.058-22.041 1.859M3.193 29.43c7.62 4.242 17.098 4.904 25.603.943"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.999 24a35.2 35.2 0 0 1 4.797 6.373a34.7 34.7 0 0 1 3.552 8.34a34 34 0 0 1 .973 4.661m-.759-33.972s.01 0 .01.01A29.26 29.26 0 0 1 45.194 27.58m-6.092 11.707c-.136-8.72-4.301-17.254-11.98-22.635"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.999 24a35.2 35.2 0 0 1 4.797 6.373a34.7 34.7 0 0 1 3.552 8.34a34 34 0 0 1 .973 4.661"></svg:path>`,
})
export class ArcticonsMijnVolleybalIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMijngegevensIcon],svg[arcticons-mijngegevens-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.72 5.5h4.56v8.554h-4.56z"></svg:path><svg:circle cx="18.869" cy="23.804" r="3.28" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.477 35.477a6.392 6.392 0 1 1 12.785 0zm15.205-6.393h7.841m-7.841-4h7.841m-7.841 8h7.841"></svg:path>`,
})
export class ArcticonsMijngegevensIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMijnsimpelIcon],svg[arcticons-mijnsimpel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.29 23.585a1.95 1.95 0 0 1 1.95-1.95h0a1.95 1.95 0 0 1 1.95 1.95v3.22m-3.901-5.171v5.17"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.19 23.585a1.95 1.95 0 0 1 1.952-1.95h0a1.95 1.95 0 0 1 1.95 1.95v3.22"></svg:path><svg:circle cx="14.107" cy="19.245" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.107 21.634v5.17m-5.484-.436c.356.3.74.436 1.604.436h.438c.712 0 1.29-.578 1.29-1.292h0c0-.714-.578-1.293-1.29-1.293H9.79a1.29 1.29 0 0 1-1.29-1.292h0c0-.714.577-1.293 1.29-1.293h.437c.864 0 1.249.137 1.605.437M38.232 19v6.829c0 .539.437.975.975.975h.293m-3.603-.984a1.95 1.95 0 0 1-1.695.984h0a1.95 1.95 0 0 1-1.95-1.95v-1.269a1.95 1.95 0 0 1 1.95-1.95h0a1.95 1.95 0 0 1 1.951 1.95v.634h-3.902m-5.981.635a1.95 1.95 0 0 0 1.952 1.95h0a1.95 1.95 0 0 0 1.95-1.95v-1.269a1.95 1.95 0 0 0-1.95-1.95h0a1.95 1.95 0 0 0-1.951 1.95m0-1.951v7.804"></svg:path><svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect>`,
})
export class ArcticonsMijnsimpelIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMijnuvaIcon],svg[arcticons-mijnuva-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m19.5 19.5l9 9m0-9l-9 9m0-23l9 9m0-9l-9 9m0 19l9 9m0-9l-9 9m-4.218-24.864v7.343c0 5.386 1.56 7 7 7c4.176 0 10.436 0 10.436-4.25m0 4.25V17.636"></svg:path>`,
})
export class ArcticonsMijnuvaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMikrotikIcon],svg[arcticons-mikrotik-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.878 6.587a21 21 0 0 0-.11 2.165a21.173 21.173 0 0 0 21.174 21.173a21.3 21.3 0 0 0 3.558-.297M5.65 9.446a29 29 0 0 0-.15 2.965a29 29 0 0 0 29.002 29.002a29 29 0 0 0 4.874-.408"></svg:path>`,
})
export class ArcticonsMikrotikIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMilanoteIcon],svg[arcticons-milanote-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M41.83 41.83L7.207 7.207c-.63-.63-1.707-.184-1.707.707V40.5a2 2 0 0 0 2 2h33a2 2 0 0 0 2-2V7.914c0-.89-1.077-1.337-1.707-.707L6.086 41.914"></svg:path>`,
})
export class ArcticonsMilanoteIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMileageIcon],svg[arcticons-mileage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.59 13.9v29.6h18.9v-23H8.59m-2.4 23h23.6M8.59 10.2V4.5h7.3"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.19 4.5h8.3v16.1"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.49 20.5c.5-.9 1.4-2 2.6-2c1.4 0 2.9.7 2.9 3.6c0 1.1 0 8.5.3 9.9s1.1 3.9 4.2 3.9c3.3 0 4.5-4.1 4.3-6.1a105 105 0 0 0-1.9-10.9c-.7-3.4-3.6-6.9-3.9-8.7a9.47 9.47 0 0 0-3-4.6a9 9 0 0 0-1.8-1"></svg:path>`,
})
export class ArcticonsMileageIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMilesIcon],svg[arcticons-miles-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.104 21.468v6.519M9.5 29.649v-6.512l3.26 5.953l3.26-7.076v6.509m18.29-3.893c.4.452.9.558 1.598.437l.966-.168c.898-.156 1.626-1.01 1.626-1.909v-.006c0-.899-.728-1.5-1.626-1.344l-1.065.185c-.9.156-1.628-.446-1.628-1.346h0c0-.9.73-1.758 1.631-1.915l.96-.167c.698-.12 1.2-.014 1.599.437m-9.99 7.541l3.26-.566m-3.26-5.954l3.26-.566m-3.26 3.826l2.125-.369m-2.125-2.891v6.52m-6.078-5.463v6.519l3.26-.566"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path>`,
})
export class ArcticonsMilesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMilesAndMoreIcon],svg[arcticons-miles-and-more-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 28.133v-6.696l3.352 6.703l3.351-6.693v6.693"></svg:path><svg:circle cx="18.012" cy="21.646" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.012 23.699v4.441m9.268-.374c.307.257.637.375 1.379.375h.376a1.11 1.11 0 0 0 1.108-1.11h0a1.11 1.11 0 0 0-1.108-1.111h-.752a1.11 1.11 0 0 1-1.108-1.11h0c0-.614.496-1.11 1.108-1.11h.376c.742 0 1.072.117 1.378.374m-4.695 3.221a1.68 1.68 0 0 1-1.456.845h0c-.926 0-1.676-.75-1.676-1.675v-1.09c0-.925.75-1.676 1.676-1.676h0c.925 0 1.676.75 1.676 1.676v.545H22.21m-2.388-4.483v5.866c0 .462.375.838.837.838h.252m-2.899 8.352v-6.696l3.352 6.703l3.352-6.693V36.5"></svg:path><svg:rect width="3.352" height="4.441" x="26.415" y="32.059" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.676" ry="1.676"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.511 33.735c0-.926.75-1.676 1.676-1.676h0m-1.676 0V36.5m6.038-.846a1.68 1.68 0 0 1-1.457.846h0c-.925 0-1.676-.75-1.676-1.676v-1.09c0-.925.75-1.675 1.676-1.675h0c.926 0 1.676.75 1.676 1.676v.545h-3.351M15.244 36.5h-.567c-.375 0-.727-.18-.948-.483l-2.325-3.196c-.3-.392-.825-.909-.825-1.674c0-.722.587-1.35 1.403-1.35c.795 0 1.359.628 1.359 1.35c0 .765-.62 1.42-1.766 1.636c-1.277.243-2.075.943-2.075 2.098c0 .934.589 1.619 1.766 1.619c1.547 0 2.457-1.467 3.802-3.27"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29c-2.2 0-4 1.8-4 4v29c0 2.2 1.8 4 4 4h29c2.2 0 4-1.8 4-4v-29c0-2.2-1.8-4-4-4"></svg:path>`,
})
export class ArcticonsMilesAndMoreIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMilkiIcon],svg[arcticons-milki-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m13.958 19.342l1.282-.59c.609-.279 1.216-.572 1.757-.966s1.016-.882 1.382-1.443m15.663 2.999l-1.282-.59c-.609-.279-1.216-.572-1.757-.966s-1.016-.882-1.382-1.443m-9.568 14.614l1.327.331c.812.203 1.639.37 2.476.368s1.665-.158 2.485-.326q.804-.164 1.607-.335"></svg:path><svg:circle cx="16.478" cy="23.115" r="1.4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="31.831" cy="23.115" r="1.4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsMilkiIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMilkrunIcon],svg[arcticons-milkrun-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="39" height="31" x="4.5" y="8.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.492 21.228v5.543h2.771m-4.659-5.543v5.543m-7.43-.006v-5.537l2.771 5.543l2.771-5.534v5.534m13.302-.001v-5.542h1.814c1.026 0 1.857.834 1.857 1.862s-.831 1.86-1.857 1.86h-1.814m1.815.001l1.815 1.818m7.488.002v-5.543l3.672 5.543v-5.543m-19.657 0v5.543m2.979 0L21.851 24l2.279-2.753M21.851 24h-.7m10.426-2.772v3.707a1.836 1.836 0 1 0 3.672 0v-3.707"></svg:path>`,
})
export class ArcticonsMilkrunIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMilkteamisskeyIcon],svg[arcticons-milkteamisskey-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.22 8.083a1.72 1.72 0 0 0-1.72 1.72v28.395a1.72 1.72 0 0 0 1.72 1.72h28.395a1.73 1.73 0 0 0 1.72-1.72v-6.3c4.308 0 7.164-1.548 7.164-8.346c0-8.454-7.164-7.394-7.164-7.394V9.803a1.72 1.72 0 0 0-1.72-1.72Zm30.114 8.075v15.739"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.918 27.161V21.21l2.975 5.951l2.975-5.951v5.951m5.638-5.95v5.95m0-1.265l2.678-2.677m-1.86 1.86l2.158 2.082"></svg:path><svg:circle cx="14.754" cy="21.433" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.754 23.219v3.942m1.883-5.95v5.95m12.169-.744a1.44 1.44 0 0 1-1.265.744a1.49 1.49 0 0 1-1.488-1.488v-.966a1.488 1.488 0 0 1 2.976 0v.52h-2.976m-2.375-3.273v4.463a.703.703 0 0 0 .744.744h.223m-1.71-3.942h1.562m9.421 2.455a1.488 1.488 0 1 1-2.976 0v-.967a1.488 1.488 0 1 1 2.976 0m.232 2.27v-3.942"></svg:path>`,
})
export class ArcticonsMilkteamisskeyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMilkytrackerIcon],svg[arcticons-milkytracker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.66 20.54v16l13.3 7l13.38-7V21l-6.25-8l-13.65-6.6ZM24 43.5v-16"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.66 20.54L24 27.47L37.34 21M24 27.47L31.09 13m6.25 8l-7.62-5.22M31.09 13v-1.8L17.44 4.5v1.9"></svg:path>`,
})
export class ArcticonsMilkytrackerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMimoIcon],svg[arcticons-mimo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.18 4.684a58.6 58.6 0 0 1 14.466 4.809c3.16 1.626 4.18 4.489 3.462 7.969a31 31 0 0 1-2.522 8.061a8.01 8.01 0 0 1-8.558 4.346a38.5 38.5 0 0 1-14.834-5.619C8.27 22.229 7.6 19.597 8.395 16.134a24.8 24.8 0 0 1 2.448-7.325c2.01-3.37 4.86-4.861 8.337-4.125"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m23.957 19.368l1.156-2.776a1.619 1.619 0 1 1 2.989 1.245l-1.156 2.775a1.619 1.619 0 0 1-2.989-1.244m-9.401-4.033a1.989 1.989 0 0 1 3.68 1.485"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36.978 19.16a15.321 15.321 0 1 1-26.981 4.36"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.133 29.688s2.063 5.23 5.304 3.094"></svg:path>`,
})
export class ArcticonsMimoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMindfulIcon],svg[arcticons-mindful-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 29.22h39m-30.992 6.087h22.984M20.11 41.073h7.608M10.344 12.724l3.976 3.975m23.198-4.405l-3.976 3.975m-9.5-9.341l.011 5.622M13.204 29.22c-.208-1.784-.416-3.568.018-5.61c.435-2.044 1.51-4.347 3.398-5.99c1.888-1.641 4.587-2.623 7.267-2.594c2.68.028 5.342 1.066 7.241 2.762s3.036 4.05 3.46 6.065s.135 3.69-.153 5.367"></svg:path>`,
})
export class ArcticonsMindfulIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMindfulnotifierIcon],svg[arcticons-mindfulnotifier-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="20.721" cy="17.963" r="7.611" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.721 29.76c8.467 0 15.221 2.367 15.221 5.19v7.264H5.5V34.95c0-2.823 6.753-5.19 15.221-5.19M32.974 9.702a14.79 14.79 0 0 1 0 16.523M38.78 5.786a21.8 21.8 0 0 1 0 24.355"></svg:path>`,
})
export class ArcticonsMindfulnotifierIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMindicatorIcon],svg[arcticons-mindicator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 18.54h39v11.048h-39Zm28.302 11.071a10.438 10.438 0 0 1-17.603 0m-.091-11.077a10.438 10.438 0 0 1 17.784 0m6.386 11.064a16.273 16.273 0 0 1-30.559 0m-.045-11.07a16.273 16.273 0 0 1 30.653.01"></svg:path><svg:circle cx="24" cy="24" r="1.867" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.532 24h9.78m-3.792-2.19L37.312 24l-3.792 2.19M20.468 24h-9.78m3.792 2.19L10.688 24l3.792-2.19"></svg:path>`,
})
export class ArcticonsMindicatorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMindsIcon],svg[arcticons-minds-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.408 4.5h9.184l6.664 7.094l.621 11.236l-4.916 7.778l-1.351 3.925v6.824L24 43.5l-5.61-2.143v-6.824l-1.35-3.925l-4.917-7.778l.62-11.235Zm0 0v8.256m-6.664-1.162l6.663 1.162M12.122 22.83l7.285-10.074M28.593 4.5l-9.185 8.256M28.593 4.5l2.764 13.36m3.899-6.266l-3.899 6.266m4.521 4.97l-4.52-4.97m-.398 12.748l.397-12.748m-11.949-5.104l11.949 5.104"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m12.122 22.83l10.842 1.819l7.997 5.96m.396-12.749l-8.393 6.788m-3.556-11.892l3.556 11.892m-5.924 5.96l5.925-5.96"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m22.964 24.648l-4.574 9.885l12.571-3.925M18.39 34.533h11.22"></svg:path>`,
})
export class ArcticonsMindsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMindshineIcon],svg[arcticons-mindshine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.52 42.297c-14.14-3.558-12.546-27.817.712-35.03c8.833-4.806 26.751.537 26.17 11.854c-.52 10.12-18.392 25.312-26.881 23.176zm11.956-27.092c-11.913-5.164-19.092 15.169-9.43 17.126c7.974 1.615 19.88-12.595 9.43-17.126"></svg:path>`,
})
export class ArcticonsMindshineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMindtwistedKanjistudyIcon],svg[arcticons-mindtwisted-kanjistudy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.542 4.5c1.681 1.46 2.694 3.737 3.327 6.478M10.844 14.46c7.937-.468 19.022-6.182 27.994-6.02a8.64 8.64 0 0 1-3.326 5.952"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.343 9.971c1.199 3.344.558 6.253-1.663 9.499m7.441-.744c5.713.107 10.264-3.527 14.576-2.802a89 89 0 0 1-7.529 7.223C27 28.758 31.258 34.254 22.03 43.5a17.1 17.1 0 0 1-3.72-5.077"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.65 29.625c9.671-.73 20.282-5.252 28.67-5.253"></svg:path>`,
})
export class ArcticonsMindtwistedKanjistudyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMindustryIcon],svg[arcticons-mindustry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m15.316 25.51l-4.53 4.531H5.5V17.959h5.286l4.53 4.531zm17.368-3.02l4.53-4.531H42.5v12.082h-5.286l-4.53-4.531zm-7.174-7.174h2.643l4.53 4.53v8.307l-4.53 4.53h-8.306l-4.53-4.53v-8.306l4.53-4.53h2.643m0-.001l-4.531-4.53V5.5h12.082v5.286l-4.531 4.53zm3.02 17.368l4.531 4.53V42.5H17.959v-5.286l4.531-4.53z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.01 15.316v6.4l-.788.788h-2.444l-.788-.788v-6.4"></svg:path>`,
})
export class ArcticonsMindustryIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMindvalleyIcon],svg[arcticons-mindvalley-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.5 32.555v-8.392a5.85 5.85 0 0 0-3.76-5.473c-3.116-1.193-8.035-2.679-14.24-3.246c2.828 6.165 8.259 12.648 18 17.111m3 0v-8.392a5.85 5.85 0 0 1 3.76-5.473c3.116-1.193 8.035-2.679 14.24-3.246c-2.828 6.165-8.259 12.648-18 17.111"></svg:path>`,
})
export class ArcticonsMindvalleyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMinecraftIcon],svg[arcticons-minecraft-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 45L5.756 34.467V13.533L24 24.066z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m21.72 22.749l-2.281-1.316l-2.28-1.317l-2.281-1.317l-2.28-1.316l-2.281-1.317l-2.28-1.316l-2.281-1.317v7.85L8.037 22.7v2.617l2.28 1.316V21.4l2.281 1.316v-2.617l2.28 1.317v5.234l2.281 1.316v-2.617l2.28 1.317v2.617l2.281 1.316v-2.616L24 29.299v-5.233z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 24.066L5.756 13.533L24 3l18.243 10.533z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.243 34.467L24 45V24.066l18.243-10.533z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m39.963 14.85l-2.28 1.316l-2.281 1.317l-2.28 1.316l-2.281 1.317l-2.28 1.317l-2.281 1.316L24 24.066v7.85l2.28-1.317v2.617l2.281-1.316v-5.234l2.28-1.317v-2.616l2.281-1.317v5.234l2.28-1.317v-2.617l2.281-1.316v2.616l2.28-1.316v-2.617l2.28-1.317v-5.233z"></svg:path>`,
})
export class ArcticonsMinecraftIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMinecraftAltIcon],svg[arcticons-minecraft-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" class="c"><svg:path d="m40.9 14.273l-.055 19.454L24.027 43.5l.056-19.453L40.9 14.273zm-16.817 9.774L24.027 43.5L7.1 33.727l.055-19.454l16.928 9.774z"></svg:path><svg:path d="m40.9 14.273l-16.817 9.774l-16.928-9.774L23.973 4.5L40.9 14.273z"></svg:path></svg:g>`,
})
export class ArcticonsMinecraftAltIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMinecraftAxeIcon],svg[arcticons-minecraft-axe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.643 21.357H24V24h-2.643v2.643h-2.643v2.643h-2.643v2.643h-2.642v2.642h-2.643v2.643H8.143V42.5h5.286v-2.643h2.642v-2.643h2.643v-2.643h2.643v-2.642H24v-2.643h2.643v-2.643h2.643v-5.286zm7.928-7.928h2.643v2.643h-2.643z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M37.214 18.714v-2.643h-2.643V8.143h-2.642V5.5h-5.286v2.643H24v2.643h-2.643v2.643h-2.643v5.285h2.643v2.643h7.929V24h2.643v2.643h5.285V24h2.643v-5.286z"></svg:path>`,
})
export class ArcticonsMinecraftAxeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMinecraftCommandIcon],svg[arcticons-minecraft-command-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 24v21.5m4.965-27.95l2.482-1.433v-5.734L28.965 8.95h-9.93l-2.483 1.433v5.734l2.482 1.433z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24 2.5l18.62 10.75v21.5L24 45.5L5.38 34.75v-21.5z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.38 13.25L24 24l18.62-10.75M8.483 31.525v-7.167l6.207-3.583l6.206 10.75v7.167l-1.24.716l-9.931-5.733zm31.033 0v-7.167l-6.207-3.583l-6.206 10.75v7.167l1.241.716l9.93-5.733z"></svg:path><svg:circle cx="21.517" cy="11.817" r=".75" fill="currentColor"></svg:circle><svg:circle cx="24" cy="13.25" r=".75" fill="currentColor"></svg:circle><svg:circle cx="26.483" cy="11.817" r=".75" fill="currentColor"></svg:circle><svg:circle cx="26.483" cy="14.683" r=".75" fill="currentColor"></svg:circle><svg:circle cx="21.517" cy="14.683" r=".75" fill="currentColor"></svg:circle><svg:circle cx="14.69" cy="26.508" r=".75" fill="currentColor"></svg:circle><svg:circle cx="12.208" cy="27.942" r=".75" fill="currentColor"></svg:circle><svg:circle cx="14.69" cy="29.375" r=".75" fill="currentColor"></svg:circle><svg:circle cx="17.173" cy="30.808" r=".75" fill="currentColor"></svg:circle><svg:circle cx="17.173" cy="33.675" r=".75" fill="currentColor"></svg:circle><svg:circle cx="14.69" cy="32.242" r=".75" fill="currentColor"></svg:circle><svg:circle cx="12.208" cy="30.808" r=".75" fill="currentColor"></svg:circle><svg:circle cx="30.827" cy="30.808" r=".75" fill="currentColor"></svg:circle><svg:circle cx="33.31" cy="29.375" r=".75" fill="currentColor"></svg:circle><svg:circle cx="33.31" cy="26.508" r=".75" fill="currentColor"></svg:circle><svg:circle cx="35.792" cy="27.942" r=".75" fill="currentColor"></svg:circle><svg:circle cx="35.792" cy="30.808" r=".75" fill="currentColor"></svg:circle><svg:circle cx="33.31" cy="32.242" r=".75" fill="currentColor"></svg:circle><svg:circle cx="30.827" cy="33.675" r=".75" fill="currentColor"></svg:circle>`,
})
export class ArcticonsMinecraftCommandIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMinecraftCompassIcon],svg[arcticons-minecraft-compass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M39.857 16.072v-2.643h-2.643v-2.643H31.93V8.143H16.07v2.643h-5.285v2.643H8.143v2.643H5.5v15.857h2.643v2.643h2.643v2.642h5.285v2.643H31.93v-2.643h5.285v-2.642h2.643v-2.643H42.5V16.072z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.144 24v2.643h2.642v2.643h5.286v2.643h15.857v-2.643h5.285v-2.643h2.643V24m-10.32-8.075v2.391h-2.643v2.392h-2.643v2.391h5.286v-2.391h2.643v-2.392h2.643v-2.391z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.861 25.993v-5.286h2.391v5.286z"></svg:path>`,
})
export class ArcticonsMinecraftCompassIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMinecraftCraftingTableIcon],svg[arcticons-minecraft-crafting-table-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 45L5.756 34.467V13.533L24 24.066z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 24.066L5.756 13.533L24 3l18.243 10.533z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.243 34.467L24 45V24.066l18.243-10.533zM24 19.286l-9.966-5.753L24 7.779l9.966 5.754zm9.122-.487v20.935M14.878 18.799v20.935m2.821-24.448l9.652-5.572m-6.702 7.638l9.966-5.754m-3.264 5.754l-9.966-5.754m3.264-1.884l9.879 5.703m-19.062 15.52l-3.61-1.816v-2.344l3.61 1.817zm-1.805-8.731v5.479"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.937 27.813v1.148l2.294.713v2.393"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.231 26.488v1.148l-2.294 3.363v2.393m-6.732-3.715l-3.531-2.038v-4.052l3.531 2.039zm-3.531-2.038v3.023l1.177.679v3.023l1.177.68v3.023l1.177.679v-9.069z"></svg:path>`,
})
export class ArcticonsMinecraftCraftingTableIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMinecraftCreeperIcon],svg[arcticons-minecraft-creeper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13 13h7.333v7.333H13zm14.667 0H35v7.333h-7.333zm0 11v-3.667h-7.334V24h-3.666v11h3.666v-3.667h7.334V35h3.666V24z"></svg:path>`,
})
export class ArcticonsMinecraftCreeperIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMinecraftEducationIcon],svg[arcticons-minecraft-education-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.401 9.75H9.75v4.75M24 38.25h9.561m-14.16 0H24v-19m9.561-4.75V9.75H24v9.5h-4.599V14.5M24 9.75h-4.599m0 4.75H9.75v4.75h9.651V24M9.75 24v14.25h9.651V24L9.75 19.25zM33.561 9.75h4.689v4.75h-4.689v23.75h4.689V14.5"></svg:path><svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect>`,
})
export class ArcticonsMinecraftEducationIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMinecraftEducationPreviewIcon],svg[arcticons-minecraft-education-preview-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 38.25h14.25V9.75H9.75v4.75m9.651 23.75H24v-19m0 0h-4.599V14.5m0 0H9.75v4.75h9.651V24M9.75 24v14.25h9.651V24L9.75 19.25z"></svg:path><svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect>`,
})
export class ArcticonsMinecraftEducationPreviewIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMinecraftPickaxeIcon],svg[arcticons-minecraft-pickaxe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.346 36.808v-2.846h2.846v-2.847h2.847v-2.846h2.846v-2.846h2.846v-2.846h2.846v-2.846h2.846v-2.846h2.846v-2.846H16.885v-2.847h-2.846V8.346h2.846V5.5h14.23v2.846h8.539v8.539H42.5v14.23h-2.846v2.847h-2.846v-2.847h-2.846V19.731h-2.847v2.846h-2.846v2.846h-2.846v2.846h-2.846v2.846h-2.846v2.847h-2.846v2.846h-2.846v2.846h-2.847V42.5H5.5v-5.692z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.962 8.346v5.693h5.692m-5.692 5.692v-2.846h-2.847v-2.846h-2.846"></svg:path>`,
})
export class ArcticonsMinecraftPickaxeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMinecraftSteveIcon],svg[arcticons-minecraft-steve-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 24.066L5.756 13.533L24 3l18.243 10.533zM5.756 31.841l4.561 2.633l2.281 1.317v-2.617l2.28 1.317l2.281 1.316v-5.224l2.28 1.316l2.281 1.317v2.617L24 37.15"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 45L5.756 34.467V13.533L24 24.066zm4.561-10.484l-2.281 1.317v-2.617l2.281-1.316m0 0l2.28-1.317V33.2l-2.28 1.316"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24 31.916l2.28-1.317v-2.616l2.281-1.317l2.28-1.317l2.281-1.316l2.28-1.317l2.281-1.316l2.28-1.317V22.7l2.28-1.317m-4.56 7.867l-2.281 1.317V27.95l2.281-1.317m-2.281 6.55V35.8l-2.28 1.317l-2.281 1.316v-2.617l-2.28 1.317v5.234l2.28-1.317l2.281-1.317l2.28-1.316l2.281-1.317v-5.233zm2.281-6.55l2.28-1.316v2.616l-2.28 1.317m-2.281 3.933l-4.561 2.633V33.2l4.561-2.633z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.243 34.467L24 45V24.066l18.243-10.533z"></svg:path>`,
})
export class ArcticonsMinecraftSteveIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMinecraftSwordIcon],svg[arcticons-minecraft-sword-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.75 28.625v2.312h2.312v2.313h2.313v2.312H24v2.313h4.625V33.25h-2.313v-2.313H24v-2.312h-2.313v-2.313h-2.312v-2.273h-2.313v-2.313H14.75v-2.273h-4.625v4.586h2.312v4.586z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M40.187 5.5h-4.625v2.312H33.25v2.313h-2.313v2.312h-2.312v2.313h-2.313v2.312H24v2.313h-2.313v2.313h-2.312v4.624h2.312v2.313h4.625v-2.313h2.313V24h2.312v-2.312h2.313v-2.313h2.312v-2.313h2.313V14.75h2.312v-2.313H42.5V5.5zM14.75 30.937h-2.313v2.313h-2.312h0v2.312H5.5V42.5h6.937v-4.625h2.313v-2.313h2.312v-4.625z"></svg:path>`,
})
export class ArcticonsMinecraftSwordIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMinecraftTntIcon],svg[arcticons-minecraft-tnt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 45L5.756 34.467V13.533L24 24.066z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 24.066L5.756 13.533L24 3l18.243 10.533z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.243 34.467L24 45V24.066l18.243-10.533zM24 29.994L5.757 19.461m0 9.078L24 39.072M8.651 23.507l2.913 1.682m-1.457 3.456v-4.297m7.824 4.517l2.912 1.681m-1.456 3.456v-4.296m-6.096.777v-4.297l2.912 5.994v-4.297m26.04-8.422L24 29.994m0 9.078l18.243-10.533m-15.348 2.159l2.912-1.682m-1.456 5.138v-4.297m7.823-4.517l2.913-1.681m-1.456 5.137v-4.297"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.535 32.316v-4.297l2.912 2.631v-4.297M20.768 15.399l6.464-3.732m-6.484-.012l6.504 3.756"></svg:path>`,
})
export class ArcticonsMinecraftTntIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMinecraftToolboxIcon],svg[arcticons-minecraft-toolbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:rect width="5.089" height="5.089" x="21.456" y="13.239" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1" ry="1"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.456 15.783H5.5m21.044 0H42.5"></svg:path>`,
})
export class ArcticonsMinecraftToolboxIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMinekortIcon],svg[arcticons-minekort-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.432 24.367h2.861v2.778h-2.861zm-.008 9.613h2.861v2.778h-2.861zm.032-18.645h2.861v2.778h-2.861z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M41.409 29.91v-9.023a2.76 2.76 0 0 0-2.76-2.76H8.546a2.76 2.76 0 0 0-2.76 2.76v9.023"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M41.409 37.02v-7.11a2.76 2.76 0 0 0-2.76-2.76H8.546a2.76 2.76 0 0 0-2.76 2.76v7.11m35.623-16.133v-9.22a2.76 2.76 0 0 0-2.76-2.76H8.546a2.76 2.76 0 0 0-2.76 2.76v9.22"></svg:path><svg:path fill="none" stroke="currentColor" stroke-dasharray="2 2" stroke-linecap="round" stroke-linejoin="round" d="M4.5 39.094h39"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.76 18.044a6.53 6.53 0 0 1 13.058 0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m29.262 18.044l-.987-1.709h-1.974l-.987 1.709m-2.657-4.602l2.657 4.602m3.645-6.312l-2.658 4.602m1.974 0h5.316M20.76 27.145a6.53 6.53 0 0 1 13.058 0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m29.262 27.145l-.987-1.71h-1.974l-.987 1.71m-2.657-4.603l2.657 4.603m3.645-6.312l-2.658 4.602m1.974 0h5.316M20.76 36.245a6.53 6.53 0 0 1 13.058 0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m29.262 36.245l-.987-1.709h-1.974l-.987 1.709m-2.657-4.602l2.657 4.602m3.645-6.312l-2.658 4.603m1.974 0h5.316"></svg:path>`,
})
export class ArcticonsMinekortIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMines3dIcon],svg[arcticons-mines3d-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29c-2.2 0-4 1.8-4 4v29c0 2.2 1.8 4 4 4h29c2.2 0 4-1.8 4-4v-29c0-2.2-1.8-4-4-4m2.826 1.174L6.674 41.326m0-34.652l34.652 34.652M24 5.5v37m-12.333-37v37m6.166-37v37m12.334-37v37m6.166-37v37"></svg:path>`,
})
export class ArcticonsMines3dIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMinesweeperIcon],svg[arcticons-minesweeper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" d="M15.24 22.65a2.2 2.2 0 1 1 2.19-2.19a2.19 2.19 0 0 1-2.19 2.19ZM21 18.89a3 3 0 1 1 3-3a3 3 0 0 1-3 3Z"></svg:path><svg:circle cx="24.01" cy="24" r="15.73" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 2.5v5.77m21.51 15.71h-5.76M24.03 45.5v-5.77M2.51 24.02h5.77m26.86-11.14l2.04-2.04m-2.04 24.28l2.04 2.04m-24.29-2.04l-2.04 2.04m2.04-24.28l-2.04-2.04"></svg:path>`,
})
export class ArcticonsMinesweeperIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMinesweeperTwistIcon],svg[arcticons-minesweeper-twist-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.236 4.438v38.976m5.864.024H23.822m3.504-25.643l-7.774-3.219l-7.774-3.218l7.776-3.33L27.33 4.7l-.002 6.548z"></svg:path>`,
})
export class ArcticonsMinesweeperTwistIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMinetestIcon],svg[arcticons-minetest-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43 31.827L24.016 43.049L5 32.07V21.223"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.552 29.275L7.744 28.23v5.424l9.782 5.647v-1.808l-1.566-.904v-1.808l-1.888-1.09v-3.616l-4.52-2.61Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m17.688 39.396l-9.556-5.518l3.137-1.742l2.803 1.556m20.792-16.598L32.2 15.221l-6.056 3.654l4.201 2.515v1.81l5.96 3.447l3.136-1.808L43 22.787v0l-5.424-3.815m-5.377-3.75l-.047-1.827"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.245 17.596L5 21.223l12.688 7.325l12.656-7.157l-5.78-3.465l7.588-4.53l-6.797-3.925l-4.712 2.914M30.344 23.2l-12.656 7.156v1.808l1.404.81v1.808l4.924 2.843l10.848-6.393v-1.94l1.512-.872l-.071-1.773"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m12.803 18.495l.026 3.821l1.566.714l1.565-.714V20.51l-.023-1.993l-1.542.899"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m7.744 15.575l6.65 3.84l6.006-3.468V8.418l-6.005-3.467l-6.65 3.839Zm27.12 6.618l1.451.837l1.261-.728V14.72l-1.26-.728l-1.452.97ZM43 25.499l-3.616 2.088v.904l-1.808 1.043v1.808l-1.808 1.044v3.616L43 31.827Zm-25.312 3.049v1.808"></svg:path>`,
})
export class ArcticonsMinetestIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMinhaoiIcon],svg[arcticons-minhaoi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.648 30.403a3.397 3.397 0 0 1-3.454-3.355v-2.171a3.456 3.456 0 0 1 6.908 0v2.178a3.414 3.414 0 0 1-3.454 3.352Z"></svg:path><svg:circle cx="29.05" cy="18.81" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.05 21.522v8.881M5.365 22.277c.045-5.664 3.073-10.126 6.908-13.335s8.666-4.484 14.31-4.44s14.17 4.577 15.79 9.868s-4.715 8.902-5.922 13.323s.786 9.987-1.48 12.83s-5.424 3.056-8.388 2.96c-13.823-.445-21.246-9.38-21.218-21.206"></svg:path>`,
})
export class ArcticonsMinhaoiIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMiniIcon],svg[arcticons-mini-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.753 21.823v4.354m-6.32-.005v-4.349l2.177 4.354l2.177-4.347v4.347m3.927 0v-4.354l2.884 4.354v-4.354m1.966 0v4.354M3.5 19.672h12.291M6.368 22.54h8.467m-5.607 2.859h5.598m-2.731 2.868h3.664"></svg:path><svg:circle cx="24" cy="24" r="9.28" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M44.5 19.672H32.209m9.423 2.868h-8.468m5.609 2.859h-5.599m2.731 2.868h-3.664"></svg:path>`,
})
export class ArcticonsMiniIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMiniDesktopIcon],svg[arcticons-mini-desktop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.323 22.79c-4.18-.679-7.573 1.77-7.831 6.557c3.21-2.466 6.337-1.006 6.337-1.006"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.237 40.01c5.705-.2 8.858-2.78 9.46-5.618c0 0 7.281 1.319 15.738-7.138c7.51-7.51 7.051-19.493 7.051-19.493s-11.982-.458-19.493 7.052c-8.456 8.457-7.137 15.738-7.137 15.738c-2.838.602-5.418 3.755-5.619 9.46"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.457 32.925c.68 4.18-1.769 7.573-6.556 7.83c2.465-3.21 1.005-6.337 1.005-6.337m-6.05-3.867l3.841 3.841m-2.375-11.601l10.135 10.134M16.819 19.99l11.44 11.441m3.312-22.479l7.735 7.735"></svg:path><svg:circle cx="28.968" cy="19.29" r="3.892" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsMiniDesktopIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMiniMetroIcon],svg[arcticons-mini-metro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="23.5" cy="24" r="14.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.5 9.5v-5m0 39v-5m6-27.7V4.5m-12 6.3V4.5m16.25 29.75L39 39.5m-10.06-2.06l5.54 5.54"></svg:path>`,
})
export class ArcticonsMiniMetroIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMiniMilitiaIcon],svg[arcticons-mini-militia-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.295 27.576L32.813 5.058l2.732 2.732l-22.518 22.518zm18.326-8.543s1.703 2.66 3.135 4.092l-3.305 3.306l-2.49.639c-.55 3.018 3.812 9.408 4.363 9.959s.308 1.763.308 1.763l-4.715 4.715l-2.622.022c-2.402-2.402-3.24-10.51-5.288-12.56c-2.05-2.049-4.01 1.279-4.01 1.279l-.904.154l-.066-2.093l22.519-22.52l2.16 2.16l-12.869 12.868c-1.564 1.564 1.124 4.253 1.124 4.253"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.223 22.431c1.058 1.058 2.997 1.587 2.997 1.587l-1.135 1.135c-.826.01-1.703.066-2.713-.837M33.475 5.72l1.19-1.191l1.4 1.4l-1.19 1.19zM13.693 27.802l-.892-.892m2.005-.221l-.892-.892m2.005-.222l-.891-.892m2.005-.221l-.892-.892m2.005-.221l-.892-.892m-5.894 2.674l.69.69m7.52-7.521l3.988-3.988l1.366 1.366l-3.988 3.988z"></svg:path>`,
})
export class ArcticonsMiniMilitiaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMiniMilitiaAltIcon],svg[arcticons-mini-militia-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m23.14 33.246l4.628-2.977l2.84 4.414l-4.319 3.71z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m26.29 38.393l-3.515.807l-5.186-8.394l4.302-3.227l1.613.212l1.153 1.69l3.111.787"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24.657 29.481l-1.326-.134l-2.535 1.805l2.343 2.094"></svg:path><svg:circle cx="27.159" cy="34.129" r="1.575" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m23.14 33.246l-2.587 2.359M7.14 22.02c.665.494 1.561.602 2.213.68c.652.076 1.06.122 1.476-.825c.416-.946.842-2.883 1.313-3.807c.47-.924.987-.833 2.807-.593s4.943.63 7.75.611s5.297-.444 6.573-.878s1.34-.878 1.066-1.34c-.273-.462-.885-.942-1.163-1.487s-.224-1.157-.39-2.022c-.164-.865-.55-1.983-1.326-3.026S25.515 7.32 23.894 6.61S20.2 5.446 17.986 5.505s-4.568.63-6.5 1.693C9.551 8.262 8.04 9.82 7.242 11.323s-.878 2.951-.873 3.753c.004.8.095.955.04 1.154c-.054.2-.253.444-.412 1.041c-.158.598-.276 1.549-.117 2.463c.158.914.593 1.793 1.258 2.286Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.41 16.23c.483-.06.966-.12 1.533.017c.568.137 1.22.472 1.871.807m-1.192 5.542c.146.97.292 1.94.91 2.962c.617 1.023 1.705 2.098 3.35 2.814c1.646.715 3.85 1.07 6.052 1.425m5.146-1.161c.781-.237 1.562-.474 2.427-1.15c.864-.675 1.812-1.789 2.317-2.768c.506-.98.57-1.825.505-2.395c-.066-.57-.261-.864-.392-1.016c-.132-.152-.199-.162-.215-.198s.02-.101.077-.164s.137-.123.166-.227s.007-.251.016-.328s.051-.083.236-.107c.184-.024.51-.066.672-.117s.158-.112-.057-.581s-.642-1.345-1.069-2.222M15.487 20.15c-.006-.219-.016-.655.089-1.057c.104-.402.416-.925.64-1.148c.226-.223.365-.146.885.029s1.42.448 2.161.732c.74.284 1.32.579 1.731.923s.655.738.804.975s.203.317.168.361c-.035.045-.16.055-1.237-.044a358 358 0 0 1-4.136-.416c-1.031-.11-1.066-.124-1.083-.131q-.017-.007-.022-.225h0Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.764 17.362c-.68.253-1.36.506-1.943.745c-.583.238-1.067.464-1.513.749s-.851.63-1.152.954s-.495.628-.566.785c-.072.157-.02.167 1.065.033s3.206-.411 5.326-.689m-13.037 1.038c.225.546.45 1.092.894 1.403s1.106.385 1.673.303c.566-.082 1.037-.32 1.352-.63c.314-.309.472-.688.63-1.068"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.589 20.595c.331.53.662 1.06 1.046 1.373s.82.408 1.32.347c.497-.061 1.057-.28 1.365-.653c.307-.373.363-.901.418-1.43"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.984 21.482c.315.726.629 1.452 1.134 1.876c.505.425 1.202.548 1.738.524c.535-.024.91-.195 1.361-.304c.45-.11.976-.157 2.362-.092s3.632.242 5.369.3s2.966-.003 3.88-.436s1.51-1.238 2.109-2.043M16.654 24.83a.92.92 0 0 1 .283.71c-.013.393-.238.966-.345 1.294s-.096.41 1.2.42c1.298.01 3.88-.053 5.248-.13s1.523-.17 1.673-.317s.294-.35.367-.552c.072-.203.072-.406.16-.539s.26-.195.342-.25c.082-.056.072-.104-1.417-.234s-4.457-.342-5.972-.44s-1.576-.083-1.607-.076q-.03.008.068.114m12.521-10.45c-.766.301-1.532.602-3.745.767s-5.871.191-8.096.048s-3.018-.457-3.81-.771m20.71 14.669c-.324.015-.7-.13-.966-.468s-.42-.869-.444-1.414c-.024-.546.082-1.106.266-1.497c.183-.39.444-.613.695-.685s.492.005.71.251c.216.246.41.661.506 1.265s.097 1.394-.039 1.877c-.135.483-.405.657-.728.671m5.264-.313c-.425.27-.792.3-1.207.101s-.879-.622-1.294-1.153s-.782-1.168-.868-1.675c-.087-.507.106-.884.448-1.294c.343-.41.835-.854 1.294-1.004c.458-.15.883-.005 1.323.343s.893.898 1.177 1.496c.285.599.4 1.246.217 1.825s-.666 1.09-1.09 1.36M16.16 35.508c.502-.01 1.004-.02 1.431-.234s.78-.635.954-.98s.169-.615-.005-.939s-.517-.7-.86-1.076"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.347 34.636a234 234 0 0 1 2.085 3.044c.433.656.474.772.201 1.137s-.86.98-1.744 1.355s-2.065.512-2.809.334c-.744-.177-1.05-.669-1.392-1.42s-.717-1.76-.877-2.604c-.16-.843-.106-1.518.368-2.426c.475-.908 1.369-2.048 2.314-2.785s1.942-1.072 2.611-1.198c.67-.127 1.01-.045 1.203.112s.237.39.281.621"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.673 38.062c.753-.248 1.507-.495 2.003-.878s.736-.901.976-1.419m-9.884-.543L8.86 36.507l.71 2.433l2.535 2.635l1.396-1.004m-2.733-5.349l.097-.419c-.796-.99-1.593-1.981-2.039-2.644s-.541-.997-.504-1.425s.209-.951.541-1.355s.828-.691 1.297-.814c.47-.123.913-.082 1.737.243c.823.325 2.026.935 3.23 1.545"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.006 29.223c.111-.656.222-1.312.484-1.708c.26-.395.671-.53 1.082-.664m19.065 6.323l1.028-1.425l5.898-1.208l.983 1.31l1.781.983l.738-.02l2.13-4.342l-.594-.819l-1.007-.234"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.799 28.787c.389.196.777.391 1.07.683s.492.682.69 1.071m-3.363-2.015c-.36.132-.721.264-1.024.748c-.304.483-.55 1.317-.675 1.667s-.127.218-.132-.214s-.012-1.163-.028-1.606c-.015-.443-.038-.584-.365-.953c-.327-.37-.958-.943-1.449-1.412s-.848-.842-1.206-1.215"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m29.655 23.012l1.506-3.128l2.26.232L38.59 7.518l1.665 1.897l-8.914 19.706"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m38.59 7.518l-1.68-.814l-5.482 13.207"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m36.754 7.087l-.003.008l-1.28-.627l-.318.731l.84 1.72m1.41 1.491l1.854 1.212m-3.022 6.67l.16 1.64l2.17.902l-.932 3.022c-.271.11-.543.219-.83.3s-.587.13-.913.025a1.7 1.7 0 0 1-.903-.753c-.227-.387-.331-.9-.435-1.414m1.85-2.082l-.84.45"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.984 22.461c.145-.207.29-.415.538-.63c.249-.214.601-.436.92-.446s.603.193.78.39a.83.83 0 0 1 .224.672c-.02.28-.126.647-.496.891c-.37.245-1.005.367-1.64.49M12.805 41.072l6.392 1.161l-1.524-4.171m-1.282 1.856l.472 1.691m1.877-.628l-.023-3.286"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m22.027 37.992l-.988.965l.164 3.543l-2.007-.266m2.008.266l2.354-1.107l.462-2.48m3.143-.653l.634.082l-.307 1.045l1.905 2.805"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m23.558 41.394l2.564-1.34l.695.261l.827-1.45"></svg:path>`,
})
export class ArcticonsMiniMilitiaAltIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMiniMotorwaysIcon],svg[arcticons-mini-motorways-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.417 32.062c6.305-6.305 6.305-16.528 0-22.833c-6.306-6.305-16.528-6.305-22.833 0c-6.306 6.305-6.306 16.528 0 22.833L24.022 43.5z"></svg:path><svg:circle cx="24" cy="20.645" r="5.029" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m20.444 24.201l11.423 11.424"></svg:path>`,
})
export class ArcticonsMiniMotorwaysIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMinibitsIcon],svg[arcticons-minibits-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.025 37.097c-.147-12.733.443-24.483 9.145-24.483c6.539 0 5.457 14.798 9.93 14.798c5.409 0 6.195-14.798 14.651-14.798c7.867 0 4.573 23.942 4.573 23.942"></svg:path>`,
})
export class ArcticonsMinibitsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMinidoroIcon],svg[arcticons-minidoro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.799 17.882c5.61-6.24 17.88-7.34 19.605 5.71c1.112 8.415-7.527 16.622-19.605 16.78c-9.573.123-19.729-7.756-19.285-17.014c.63-13.135 16.374-11.578 19.285-5.477"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.799 17.882c1.754-3.466 4.324-6.27 9.322-7.108M17.944 7.628c6.974 2.334 6.823 5.854 5.855 10.254c-1.112-3.314-3.575-5.951-9.176-7.02m9.176 9.614v6.902m0 0l6.321 7.02"></svg:path>`,
})
export class ArcticonsMinidoroIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMinifluttIcon],svg[arcticons-miniflutt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4M22.03 18.956h6.683m-3.279 10.088V18.956"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.681 25.009c0-1.387 1.135-2.522 2.522-2.522s2.522 1.135 2.522 2.522v4.035m-5.044-6.557v6.557m5.044-4.035c0-1.387 1.135-2.522 2.522-2.522s2.522 1.135 2.522 2.522v4.035m11.867-10.088h6.683m-3.278 10.088V18.956"></svg:path>`,
})
export class ArcticonsMinifluttIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMinimaKwgtIcon],svg[arcticons-minima-kwgt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.94 11.906v21.5m37.24-21.5v19.592M27.215 3.844v37.625M31.87 6.531v25.885m4.655-23.198v20.92M17.905 3.844v37.625M13.25 6.531v32.25M8.595 9.218v26.875m9.31-32.249L22.56 6.53l4.654-2.687m-9.309 4.95l4.655 2.688l4.654-2.688m-9.309 4.949l4.655 2.688l4.654-2.688m-9.309 4.949l4.655 2.688l4.654-2.688"></svg:path><svg:circle cx="37.06" cy="37.156" r="7" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.214 33.148v8.016m3.692 0v-2.053l-2.073-1.955l2.073-1.955v-2.053"></svg:path>`,
})
export class ArcticonsMinimaKwgtIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMinimalIcon],svg[arcticons-minimal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="8.32" cy="36.81" r="3.82" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m4.75 23.34l2.57 2.57l5.07-5.07M4.71 9.87l2.58 2.57l5.07-5.07m4.22 2.57H43.5M16.58 23.38H43.5M16.58 36.81H43.5"></svg:path>`,
})
export class ArcticonsMinimalIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMinimalOIconPackIcon],svg[arcticons-minimal-o-icon-pack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path><svg:circle cx="24" cy="24" r="12" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 36v6.5M12 24h24m-21.079 7.846l.537.06a78 78 0 0 0 17.084-.001l.533-.059m.004-15.692l-.537-.06a78 78 0 0 0-17.084.001l-.533.059"></svg:path>`,
})
export class ArcticonsMinimalOIconPackIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMinimalistIconPackIcon],svg[arcticons-minimalist-icon-pack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.5 33.25H24v9.25m9.25-9.25V5.5M42.5 24h-9.25M24 42.5l9.25-9.25M42.5 14.5h-9.25"></svg:path><svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect>`,
})
export class ArcticonsMinimalistIconPackIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMinimalistPhoneIcon],svg[arcticons-minimalist-phone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 2.5c11.874 0 21.5 9.626 21.5 21.5h0c0 11.874-9.626 21.5-21.5 21.5h0C12.126 45.5 2.5 35.874 2.5 24h0A21.43 21.43 0 0 1 8.797 8.797"></svg:path>`,
})
export class ArcticonsMinimalistPhoneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMinimalwallzIcon],svg[arcticons-minimalwallz-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.209 40.359L24 24.567L8.209 8.776zm22.356-9.227l9.226 9.227V8.776L24 24.567"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m17.742 30.825l6.565 6.565l15.484-15.484"></svg:path>`,
})
export class ArcticonsMinimalwallzIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMinimumLauncherIcon],svg[arcticons-minimum-launcher-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="16.586" height="16.586" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:rect width="16.586" height="16.586" x="25.914" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:rect width="16.586" height="16.586" x="5.5" y="25.914" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.207 42.5V25.914m-8.293 8.293H42.5"></svg:path>`,
})
export class ArcticonsMinimumLauncherIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMinimusIcon],svg[arcticons-minimus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24 17.508l-12.75-7.361a4.5 4.5 0 0 0-4.5 0h0a4.5 4.5 0 0 0-2.25 3.896v19.914a4.5 4.5 0 0 0 6.75 3.896L24 30.493"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M41.25 10.147a4.5 4.5 0 0 1 2.25 3.896v19.914a4.5 4.5 0 0 1-6.75 3.897l-17.246-9.957a4.5 4.5 0 0 1 0-7.793l17.246-9.957a4.5 4.5 0 0 1 4.5 0"></svg:path>`,
})
export class ArcticonsMinimusIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMininoteIcon],svg[arcticons-mininote-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.659 38.04c-.341 0-.652-.128-.886-.339m-.437-1.815v-.972m0-2.7v-.21m0-4.853v-.97m0-1.942v-.97m0-1.94v-.97m0-4.855v-.97m0-4.854v-.34c0-.22.053-.426.147-.608m1.669-.714h.97m1.942 0h.97m1.942 0h.972m1.94 0h.97m1.942 0h.97m1.941 0h.97m1.941 0h.97m1.933.134q.481.105.926.287m1.64 1.02q.364.322.668.702m.937 1.69q.16.451.241.939m.08 1.937v.97m0 1.942v.97m0 1.942v.97m0 1.941v.971m0 1.942v.97m0 1.941v.97m0 1.941v.107q0 .439-.063.86M36.35 35q-.23.431-.526.815m-1.42 1.308a5.7 5.7 0 0 1-.857.456m-1.879.448a6 6 0 0 1-.386.013h-.584m-1.942 0h-.97m-1.942 0h-.97m-1.94 0h-.972m-1.94 0h-.97m-1.941 0h-.97m-1.941 0h-.971m9.322-25.59c-4.582-.47-9.432 3.372-9.36 6.459c.079 3.27-.511 4.783-.257 6.865c.395 3.253 1.904 4.57 3.2 6.083c1.32 1.543 2.895 2.043 4.347 2.191c1.607.165 3.137-.03 4.467-.376c5.03.224 7.687-1.21 9.275-6.804c.34-2.58-.025-3.62.227-6.95c-.294-4.31-4.166-6.98-6.659-7.482c-1.606-.324-3.292-.056-5.24.015zm-2.257 7.982c0 .617-.9 1.117-2.008 1.117h0c-1.11 0-2.008-.5-2.008-1.117h0c0-.617.899-1.117 2.008-1.117h0c1.109 0 2.008.5 2.008 1.117m10.727 0c0 .617-.899 1.117-2.008 1.117h0c-1.11 0-2.009-.5-2.009-1.117h0c0-.617.9-1.117 2.008-1.117h0c1.11 0 2.009.5 2.01 1.116zm-5.256-.64c-.227 1.126-1.119 1.927-2.147 1.927c-1.029 0-1.92-.8-2.147-1.926m6.03-3.517c-.489.286-.983.572-1.292.97c-.192.246-.173.449 0 .685c.297.406.803.683 1.291.97m-6.04-1.393c0 .704-.512 1.276-1.143 1.276h-.001c-.632 0-1.144-.572-1.144-1.276h0c0-.705.512-1.275 1.144-1.275s1.144.57 1.145 1.275m16.93 4.826h5.11l-1.506 2.656l1.506 2.656h-5.11m0-14.418h5.11l-1.506 2.656L43.5 18.54h-5.11m-1.016-9.1a6.3 6.3 0 0 1 2.733 3.786m.188 5.313v3.796m0 5.31v7.524a6.295 6.295 0 0 1-6.28 6.31h-21.62c-.805 0-1.454-.65-1.454-1.456v-.486m-4.5-7.635h2.74c1.076 0 1.942.711 1.942 1.594s-.866 1.594-1.941 1.594h-2.74c-1.076 0-1.942-.71-1.942-1.594c0-.883.866-1.594 1.94-1.594Zm0-4.59h2.74c1.076 0 1.942.71 1.942 1.593c0 .884-.866 1.595-1.941 1.595h-2.74c-1.076 0-1.942-.71-1.942-1.595c0-.883.866-1.594 1.94-1.594zm0-11.756h2.74c1.076 0 1.942.71 1.942 1.594s-.866 1.595-1.941 1.595h-2.74c-1.076 0-1.942-.711-1.942-1.595c0-.883.866-1.594 1.94-1.594Zm0-4.59h2.74c1.076 0 1.942.71 1.942 1.594c0 .883-.866 1.594-1.941 1.594h-2.74c-1.076 0-1.942-.711-1.942-1.594s.866-1.594 1.94-1.594Zm2.557 20.937V30.5m0-3.188v-8.568m0-3.187v-1.402m0-3.19v-2.99c0-.807.65-1.456 1.456-1.456h21.59a6.295 6.295 0 0 1 6.31 6.28v20.429a6.295 6.295 0 0 1-6.282 6.309H10.453c-.805 0-1.455-.65-1.455-1.456v-2.99"></svg:path>`,
})
export class ArcticonsMininoteIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMinionIcon],svg[arcticons-minion-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="20.688" cy="15.325" r=".75" fill="currentColor"></svg:circle><svg:circle cx="19.906" cy="14.978" r="4.094" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="28.094" cy="14.978" r="4.094" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.616 31.622c0 5.863-4.753 7.541-10.616 7.541s-10.616-1.678-10.616-7.54V14.977c0-5.864 4.753-10.09 10.616-10.09s10.616 4.227 10.616 10.09zM15.917 15.9l-2.533.101m2.643-2.336l-2.59.253"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.063 22.98c2.138.822 5.9.746 7.918-.055M19.269 38.68a4.8 4.8 0 0 1 .564 1.78c.022.21.196.367.407.367h2.405a.41.41 0 0 0 .387-.275l.49-1.392"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.24 40.827c-.527.577-.719 1.392-.788 1.907a.58.58 0 0 0 .422.646c.6.157 1.672.283 2.507-.462l.657-.278s-.31-1.34-.25-1.84M24 27.008c-3.491 0-7.556-.555-7.556-.555s1.04 9.248-1.512 9.844m2.272-8.294l-3.82-3.042m.198 8.587l2.73.694"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 29.765c-1.342 0-2.987-.285-2.987-.285c0 1.93-.453 4.65 2.987 4.65m-11.417 5.623c-.234-1.412.585-2.494.585-2.494"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.385 40.275c-1.272-1.448-1.272-3.297-1.217-3.016"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.581 38.753c-1.667-.5-2.413-1.494-2.413-1.494s-1.199-3.714.216-8.978"></svg:path><svg:circle cx="27.312" cy="15.325" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m32.083 15.9l2.533.101m-2.643-2.336l2.59.253M28.731 38.68a4.8 4.8 0 0 0-.564 1.78a.407.407 0 0 1-.407.367h-2.405a.41.41 0 0 1-.387-.275l-.49-1.392"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.76 40.827c.527.577.719 1.392.788 1.907a.58.58 0 0 1-.422.646c-.6.157-1.672.283-2.507-.462l-.657-.278s.31-1.34.25-1.84M24 27.008c3.491 0 7.556-.555 7.556-.555s-1.04 9.248 1.512 9.844m-2.272-8.294l3.82-3.042m-.198 8.587l-2.73.694"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 29.765c1.342 0 2.987-.285 2.987-.285c0 1.93.453 4.65-2.987 4.65m11.417 5.623c.234-1.412-.585-2.494-.585-2.494"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.615 40.275c1.272-1.448 1.272-3.297 1.217-3.016"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.419 38.753c1.667-.5 2.413-1.494 2.413-1.494s1.199-3.714-.216-8.978M24 4.888c2.892-.731 6.831-.537 8.706 1.518M24 4.888c-2.891-.731-6.831-.537-8.706 1.518"></svg:path>`,
})
export class ArcticonsMinionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMinionAltIcon],svg[arcticons-minion-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="14.978" r="4.844" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.616 31.622c0 5.863-4.753 7.541-10.616 7.541s-10.616-1.678-10.616-7.54V14.977c0-5.864 4.753-10.09 10.616-10.09s10.616 4.227 10.616 10.09zM19.1 15.9l-5.716.101m5.827-2.336l-5.774.253"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.063 22.98c2.187-.405 5.947-.437 7.918-.055M19.269 38.68a4.8 4.8 0 0 1 .564 1.78c.022.21.196.367.407.367h2.405a.41.41 0 0 0 .387-.275l.49-1.392"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.24 40.827c-.527.577-.719 1.392-.788 1.907a.58.58 0 0 0 .422.646c.6.157 1.672.283 2.507-.462l.657-.278s-.31-1.34-.25-1.84M24 27.008c-3.491 0-7.556-.555-7.556-.555s1.04 9.248-1.512 9.844m2.272-8.294l-3.82-3.042m.198 8.587l2.73.694"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 29.765c-1.342 0-2.987-.285-2.987-.285c0 1.93-.453 4.65 2.987 4.65m-11.417 5.623c-.234-1.412.585-2.494.585-2.494"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.385 40.275c-1.272-1.448-1.272-3.297-1.217-3.016"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.581 38.753c-1.667-.5-2.413-1.494-2.413-1.494s-1.199-3.714.216-8.978M29.066 15.9l5.55.101m-5.661-2.336l5.608.253M28.731 38.68a4.8 4.8 0 0 0-.564 1.78a.407.407 0 0 1-.407.367h-2.405a.41.41 0 0 1-.387-.275l-.49-1.392"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.76 40.827c.527.577.719 1.392.788 1.907a.58.58 0 0 1-.422.646c-.6.157-1.672.283-2.507-.462l-.657-.278s.31-1.34.25-1.84M24 27.008c3.491 0 7.556-.555 7.556-.555s-1.04 9.248 1.512 9.844m-2.272-8.294l3.82-3.042m-.198 8.587l-2.73.694"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 29.765c1.342 0 2.987-.285 2.987-.285c0 1.93.453 4.65-2.987 4.65m11.417 5.623c.234-1.412-.585-2.494-.585-2.494"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.615 40.275c1.272-1.448 1.272-3.297 1.217-3.016"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.419 38.753c1.667-.5 2.413-1.494 2.413-1.494s1.199-3.714-.216-8.978M19.407 14.004h9.186m-3.009.002q.12.282.119.594a1.703 1.703 0 1 1-3.406 0q0-.31.119-.594M24 4.888c2.892-.731 6.831-.537 8.706 1.518M24 4.888c-2.891-.731-6.831-.537-8.706 1.518"></svg:path>`,
})
export class ArcticonsMinionAltIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMinireviewIcon],svg[arcticons-minireview-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.015 23.606c7.065.072 8.62 10.644 16.174 7.604c6.367-2.563 1.899-14.056.18-17.828c-2.073-4.551-5.423-6.123-8.083-6.15c-3.18-.033-5.347 2.73-8.132 2.702S19.258 7.1 16.08 7.067c-2.66-.027-6.041 1.476-8.207 5.985C6.077 16.788 1.377 28.19 7.69 30.88c7.49 3.193 9.259-7.346 16.324-7.274"></svg:path><svg:circle cx="15.608" cy="16.58" r="3.553" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="31.005" cy="14.7" r="1.496" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="34.911" cy="18.686" r="1.496" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24 27.679l1.514 3.068l3.387.492l-2.451 2.389l.579 3.373L24 35.408l-3.029 1.593l.579-3.373l-2.451-2.389l3.387-.492zm10.979 5.976l1.182 2.396l2.644.384l-1.913 1.865l.451 2.633l-2.364-1.243l-2.365 1.243l.452-2.633l-1.914-1.865l2.644-.384zm-21.958 0l1.183 2.396l2.644.384l-1.914 1.865l.452 2.633l-2.365-1.243l-2.364 1.243l.451-2.633l-1.913-1.865l2.644-.384z"></svg:path>`,
})
export class ArcticonsMinireviewIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMinlaegeIcon],svg[arcticons-minlaege-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.17 21.333V9.975l5.632 11.286l5.631-11.286v11.358"></svg:path><svg:circle cx="26.922" cy="11.462" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.927 13.927v7.406m7.903 0v-4.656c0-1.552-1.268-2.821-2.816-2.821s-2.816 1.27-2.816 2.821v4.656m0-4.656v-2.821M8.5 23.169v11.046h5.512m10.003-1.333c-.334.828-1.114 1.38-1.894 1.38c-1.226 0-2.228-1.242-2.228-2.761v-1.795c0-1.519 1.002-2.762 2.228-2.762s2.228 1.243 2.228 2.762v.966h-4.456m-4.137-2.26c.331-.829 1.105-1.381 1.88-1.381c1.216 0 2.211 1.243 2.211 2.762v1.794c0 1.52-.995 2.762-2.212 2.762s-2.126-.948-2.028-2.27c0-1.69 1.377-1.407 4.286-1.407m19.194 2.501c-.414.829-1.378 1.381-2.343 1.381a2.767 2.767 0 0 1-2.755-2.761v-1.795c0-1.52 1.24-2.762 2.755-2.762s2.756 1.243 2.756 2.762v.966h-5.51m-2.045-3.985v8.285a2.767 2.767 0 0 1-2.756 2.761c-.826 0-1.515-.276-1.929-.828"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.19 26.979a2.767 2.767 0 0 1 2.755 2.761v1.795c0 1.52-1.24 2.762-2.756 2.762s-2.756-1.243-2.756-2.762V29.74a2.767 2.767 0 0 1 2.756-2.761"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path>`,
})
export class ArcticonsMinlaegeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMinlonIcon],svg[arcticons-minlon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.56 20.542c-.974-1.262-2.29-2.277-4.35-2.252a5.711 5.711 0 0 0 0 11.42c2.56-.128 4.188-1.12 5.918-3.421l2.752-3.783c2.182-2.788 3.426-4.065 6.414-4.216a5.71 5.71 0 0 1 0 11.42c-1.915-.02-3.102-.772-4.406-2.077m19.204 2.077h-5.946V18.358h5.946h-.268a5.676 5.676 0 0 1 0 11.352z"></svg:path>`,
})
export class ArcticonsMinlonIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMinmaIconPackIcon],svg[arcticons-minma-icon-pack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="6.825" height="17.744" x="9.177" y="10.667" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="3.412" ry="3.412" transform="rotate(27.837 12.59 19.538)"></svg:rect><svg:circle cx="37.96" cy="32.936" r="3.412" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m17.928 37.197l-1.84 3.483a3.41 3.41 0 0 1-4.61 1.424h0a3.41 3.41 0 0 1-1.424-4.61l9.885-18.72m1.322-2.504l4.727-8.95a3.41 3.41 0 0 1 4.61-1.424h0a3.41 3.41 0 0 1 1.425 4.61L19.165 34.854m9.395 2.668l-.836 1.585a3.41 3.41 0 0 1-4.61 1.424h0a3.41 3.41 0 0 1-1.425-4.61l6.698-12.685m1.323-2.504l1.54-2.916a3.41 3.41 0 0 1 4.61-1.424h0a3.41 3.41 0 0 1 1.424 4.61l-7.508 14.22"></svg:path>`,
})
export class ArcticonsMinmaIconPackIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMinminguardIcon],svg[arcticons-minminguard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.07 4.5H15.93L4.5 15.93v16.14L15.93 43.5h16.14L43.5 32.07V15.93Zm7.29 17.9a3.24 3.24 0 0 0-3.42-3.23a3.36 3.36 0 0 0-3.06 3.42v3a3.24 3.24 0 0 0 3.24 3.24h0a3.24 3.24 0 0 0 3.24-3.24h-3.24M8.64 28.83v-9.67l4.83 9.68l4.82-9.66v9.66m2.47 0v-9.68l4.82 9.68l4.82-9.66v9.66"></svg:path>`,
})
export class ArcticonsMinminguardIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMinsundhedIcon],svg[arcticons-minsundhed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.714 21.473c1.308.914.623 3.325-2.97 6.258c0 0-2.801-2.12-2.85-4.17s1.749-1.99 2.543.282c0 0 1.97-3.284 3.277-2.37m19.961 0c1.308.914.623 3.325-2.97 6.258c0 0-2.801-2.12-2.85-4.17s1.749-1.99 2.543.282c0 0 1.97-3.284 3.277-2.37m-7.77 12.528h-9.81s.477 5.439 4.947 5.439S28.905 34 28.905 34"></svg:path>`,
})
export class ArcticonsMinsundhedIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMintIcon],svg[arcticons-mint-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 43.5c-5.1-4.812-14-6.766-14-15.271c0-4.717 4.33-16.367 14-23.729c9.67 7.362 14 19.012 14 23.729c0 8.505-8.9 10.459-14 15.271m0-39v39"></svg:path>`,
})
export class ArcticonsMintIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMintBrowserIcon],svg[arcticons-mint-browser-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.466 8.094c7.117 14.179-2.83 22.36-11.14 24.2m-16.375 8.644c-8.368-14.918 1.82-23.53 10.36-25.47m-3.28-12.12c23.828 2.069 16.49 28.311 9.222 29.019m3.443 12.026c-15.246-1.325-17.73-12.55-15.636-20.646M2.786 20.605c8.733-14.715 21.763-9.595 27.466-3.01m15.05 9.24c-8.11 13.91-20.006 10.478-26.254 4.62M32.95 24A8.95 8.95 0 0 1 24 32.95h0A8.95 8.95 0 0 1 15.05 24h0A8.95 8.95 0 0 1 24 15.05h0A8.95 8.95 0 0 1 32.95 24m12.55 0c0 11.874-9.626 21.5-21.5 21.5S2.5 35.874 2.5 24S12.126 2.5 24 2.5S45.5 12.126 45.5 24"></svg:path>`,
})
export class ArcticonsMintBrowserIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMintKeyboardIcon],svg[arcticons-mint-keyboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M29.955 10.578c-2.479-.503-14.39-.711-10.671 10.659c13.346 5.353 11.48-6.78 10.67-10.66"></svg:path><svg:path d="M17.471 21.822c4.077-.988 9.484-4.634 12.484-11.244"></svg:path></svg:g><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M13.168 18.573H7.64c-1.148 0-2.078.93-2.078 2.078v19.771c0 1.148.93 2.078 2.078 2.078h32.72c1.148 0 2.078-.93 2.078-2.078V20.651c0-1.148-.93-2.078-2.078-2.078h-5.284"></svg:path><svg:rect width="20.044" height="3.327" x="14.1" y="35.763" rx=".421" ry=".421"></svg:rect><svg:rect width="3.366" height="3.366" x="10.733" y="29.78" rx=".421" ry=".421"></svg:rect><svg:rect width="3.366" height="3.366" x="16.586" y="29.78" rx=".421" ry=".421"></svg:rect><svg:path d="M25.805 30.355v2.37a.42.42 0 0 1-.42.421H22.86a.42.42 0 0 1-.42-.42h0v-2.37"></svg:path><svg:rect width="3.366" height="3.366" x="28.291" y="29.78" rx=".421" ry=".421"></svg:rect><svg:rect width="3.366" height="3.366" x="34.144" y="29.78" rx=".421" ry=".421"></svg:rect><svg:rect width="3.366" height="3.366" x="10.733" y="23.797" rx=".421" ry=".421"></svg:rect><svg:path d="M18.276 27.163h-1.27a.42.42 0 0 1-.42-.421v-.875m15.072 0v.875a.42.42 0 0 1-.421.42h-1.269"></svg:path><svg:rect width="3.366" height="3.366" x="34.144" y="23.797" rx=".421" ry=".421"></svg:rect><svg:path d="m34.253 23.878l-10.131 7.768l-10.13-7.768a2.1 2.1 0 0 1-.824-1.67V7.183c0-.93.753-1.683 1.683-1.683h18.542c.93 0 1.683.754 1.683 1.683h0v15.025c0 .654-.304 1.271-.824 1.67"></svg:path></svg:g>`,
})
export class ArcticonsMintKeyboardIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMintLauncherIcon],svg[arcticons-mint-launcher-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.5 19.696L24 5.5L5.5 19.696V42.5h37z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.5 42.5L24 25.64L5.5 42.5M24 5.5v20.14"></svg:path>`,
})
export class ArcticonsMintLauncherIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMintMobileIcon],svg[arcticons-mint-mobile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M6.081 23.475c7.906-2.108 15.81-1.054 15.81 1.054h4.217c0-2.108 7.906-3.426 15.81-1.054"></svg:path><svg:path d="M7.135 23.211c0 8.96 3.69 10.804 7.379 10.804s7.378-2.635 7.378-9.486m18.973-1.318c0 8.96-3.69 10.804-7.379 10.804s-7.378-2.635-7.378-9.486"></svg:path></svg:g><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.69 15.358c4.215-2.635 8.959-6.324 14.756-5.533c.527 4.216-.527 7.905-2.108 12.121c1.054 2.372 2.371 4.48 3.162 8.96l-2.372-.264l2.372 3.426c-1.921-1.112-3.61-1.779-5.126-2.103c-3.219-.688-5.656.167-7.882 1.567c-2.187 1.375-4.17 3.275-6.492 4.752m-3.69-22.926c-2.634-1.58-5.27-3.689-7.905-4.48c-2.635-.526-6.851 4.48-6.545 5.214c.399 1.907 1.04 3.82 1.802 5.854c-1.054 2.372-2.371 4.48-3.162 8.96l2.372-.264L4.5 34.068c5.913-3.423 9.62-2.62 12.858-.629c2.247 1.381 4.267 3.334 6.642 4.845m-3.69-22.926c2.636-.527 4.744-.527 7.38 0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.784 35.122c2.635.264 5.797.264 8.432 0h0M5.86 16.092c2.066 1.111 4.437 1.638 6.545 1.638c.527-3.162.527-5.006 0-6.85"></svg:path>`,
})
export class ArcticonsMintMobileIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMirPayIcon],svg[arcticons-mir-pay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4m-8.064 28.373l-2.1-5.3"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m32.336 28.573l-2.5 7.2c-.2.5-.6.8-1.1.8h-.3m-2.036-4.75c0 1.1-.9 2-2 2h0c-1.1 0-2-.9-2-2v-1.3c0-1.1.9-2 2-2h0c1.1 0 2 .9 2 2m0 3.3v-5.3m-10.736 5.3v-8h2.6c1.5 0 2.7 1.2 2.7 2.7s-1.2 2.7-2.7 2.7h-2.6m14.192-7.851V11.427h3.882c2.24 0 4.032 1.791 4.032 4.031s-1.792 4.032-4.032 4.032h-3.882m4.126-.005l3.788 3.887M26.016 11.427v11.945m-15.786 0V11.427l5.973 11.945l5.972-11.945v11.945"></svg:path>`,
})
export class ArcticonsMirPayIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMiraieIcon],svg[arcticons-miraie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.986 22.679v8M4.5 30.67v-7.991l4 8l4-7.988v7.988m5.914-3.3a2 2 0 0 1 2-2m-2 0v5.3"></svg:path><svg:circle cx="15.457" cy="22.929" r=".7" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.457 25.379v5.3m27.781-1.009a2 2 0 0 1-3.738-.99v-1.3a2 2 0 1 1 4 0v.65h-4m-9.149-.001h-3.544m-.878 2.65l2.65-8l2.65 8"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.17 22.179v8.5h13.572v-8.5l-6.786-4.858z"></svg:path>`,
})
export class ArcticonsMiraieIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMirakelIcon],svg[arcticons-mirakel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.355 17.943a4.203 4.203 0 0 0 6.87-.234"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.937 36.25c-.94-1.882-4.416-1.036-4.416 1.985c0 3.399 3.196 4.394 5.341 4.394s5.636-1.022 5.636-5.06s-2.239-3.659-2.239-6.483s3.372-4.698 3.372-7.984s-4.371-5.393-4.371-10.892a6.574 6.574 0 0 1 6.94-6.839c5.467 0 8.894 4.82 8.894 9.363s-2.996 4.95-2.996 7.96a4.4 4.4 0 0 0 1.013 2.705c-1.97 1.846-4.052 2.93-4.052 6.544c0 2.27.379 6.565 5.678 6.565c5.226 0 7.6-4.734 8.064-7.426s2.38-5.556 5.1-5.556c3.28 0 3.89 2.338 3.89 3.973c0 2.63-3.488 4.256-5.797 1.062"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36.287 36.21a2.357 2.357 0 0 1 2.44-2.742c1.822 0 2.705 1.662 2.705 3.302c0 1.284-.729 4.5-7.251 4.5c-4.17 0-5.758-3.216-7.252-5.879m9.695-20.504a2.382 2.382 0 0 0-3.661 1.949c0 1.654.717 4.822 4.768 3.73m-21.349 4.027l-5.247-5.247l-5.306 5.307l7.588 7.588"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.177 20.305c-1.13-1.644-2.435-.619-2.918.078c-.535.771.164 3.9 2.631 4.21m16.221.805l11.457-11.457l5.406 5.405l-17.12 17.12M8.521 27.345c-.593 2.213-.788 7.086 6.017 6.752m2.889 2.153l4.321 4.322l1.404-1.404"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.829 28.22c-4.054 2.006-3.18 7.836 1.09 9.287a13.14 13.14 0 0 0 8.567-.44"></svg:path><svg:circle cx="16.763" cy="13.312" r="2.254" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="23.335" cy="13.312" r="2.254" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="23.335" cy="13.312" r=".75" fill="currentColor"></svg:circle><svg:circle cx="16.763" cy="13.312" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.096 36.38c-1.71-2.238-3.14-3.597-5.103-3.044c-1.886.532-2.621 1.766-2.495 4.233"></svg:path>`,
})
export class ArcticonsMirakelIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMiremoteIcon],svg[arcticons-miremote-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24" cy="24" r="7.981" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="38.816" cy="24" r=".75" fill="currentColor"></svg:circle><svg:circle cx="24" cy="9.185" r=".75" fill="currentColor"></svg:circle><svg:circle cx="9.184" cy="24" r=".75" fill="currentColor"></svg:circle><svg:circle cx="24" cy="38.816" r=".75" fill="currentColor"></svg:circle>`,
})
export class ArcticonsMiremoteIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMiriaIcon],svg[arcticons-miria-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.337 7.812A15.52 15.52 0 0 0 7.949 17.6M6.337 7.812c.298.393.76.647 1.242.735m.001 0c.141-.679.32-1.419.84-1.914m0 0c3.186-.164 6.55.72 8.956 2.886m-6.655 8.604c-1.765 3.764-2.05 8.472.2 12.107m2.596-8.178c.027 1.008-.087 2.425.902 3.022m2.332-5.529c-.425 2.334 1.048 4.602 3.119 5.6"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.844 16.397c-2.526 2.137-4.037 5.435-3.975 8.747m3.975-8.747c-.2 3.37 1.947 6.822 5.301 7.678c1.67.765 3.678.01 5.231 1.008c1.094.81 1.438 2.238 1.484 3.528"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.665 25.129c1.594-1.847 4.553-1.574 6.223.026c.612.601 2.015 1.405.663 2.17m-6.416-.85a8 8 0 0 0 .055 1.878"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.19 28.353c.033 2.179 3.456 3.163 4.237.93c.47-1.138.254-2.385.264-3.578m7.708 6.895c.159 2.212-1.194 4.324-3.15 5.301m5.011-10.216c1.888 1.503 3.467 4.258 2.094 6.594c-.567 1.005-1.466 1.778-2.415 2.41m-1.925-20.737c2.282-2.457 2.158-6.14 1.752-9.257c-1.824.434-2.006-1.889-3.805-.983c-3.035.455-6.29 1.313-8.468 3.62"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.617 9.143c4.928 1.112 10.063 3.722 12.301 8.491c1.25 2.695 1.235 5.809.506 8.644M25.617 9.143c-5.522-.657-11.683.463-15.712 4.56m0 0c-3.3 5.147-4.27 12.138-1.157 17.599c.484.881 1.05 1.716 1.679 2.5m0 0c.259 2.229 1.967 4.513 4.425 4.32"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.852 38.122c-.906-.632-1.544-4.008.037-2.22c.615.426 1.263.82 1.973 1.066m-4.422-4.213c4.732 3.754 11.48 3.953 16.927 1.734a28 28 0 0 0 4.383-2.171"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.221 33.666c1.335 1.21 3.576 1 4.24-.81m-12.973-5.543c.692-1.697 2.423-2.843 4.187-3.135c1.473.035 3.087.528 3.904 1.848"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.901 26.198c-.663 1.595-.525 4.074 1.45 4.624c1.926.806 3.324-1.227 3.166-2.975c.019-.366.046-.738-.02-1.1m-.704 8.867c-1.104.379-1.142 1.818-2.644 1.464c-1.26.96-2.828 3.257-.753 4.311c.287.232.601.433.937.588m-.992-.511c-.193.134-.86.826-.975 1.034"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.901 35.86c-2.65.491-.51 3.133.86 3.87a50 50 0 0 0 4.042 2.77"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.13 35.911c-.492 1.586-.054 3.343.843 4.7m1.638-4.74c-.727 1.622-1.236 3.51-.727 5.27m1.448-5.342c1.908-.142 3.84 2.05 1.632 3.338c-.93.803-2.003 1.422-3.08 2.005m4.168-5.894c2.413-.23 4.263 1.782 5.704 3.457c.177.53-.205 1.067-.433 1.522m.298-.496c1.66.922 3.8 2.278 5.646 2.77"></svg:path><svg:ellipse cx="27.475" cy="27.42" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx=".813" ry="1.444"></svg:ellipse><svg:ellipse cx="17.131" cy="27.822" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx=".834" ry="1.385"></svg:ellipse><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.107 28.951c1.35.8 2.932 2.238 2.286 3.986c-.408 1.155-1.332 2.03-2.258 2.786"></svg:path>`,
})
export class ArcticonsMiriaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMiroIcon],svg[arcticons-miro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 5.5h5.322l10.58 10.205L11.072 42.5H5.5l5.071-24.354z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.643 5.5h5.322l9.767 6.73l-9.517 30.27h-5.572l4.759-26.795z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.786 5.5h5.322l9.392 5.916L33.358 42.5h-5.572l3.946-30.27z"></svg:path>`,
})
export class ArcticonsMiroIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMirroringIcon],svg[arcticons-mirroring-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.5 39.892a2.323 2.323 0 0 1-2.329 2.329h-4.075a2.323 2.323 0 0 1-2.328-2.329v-4.075c0-10.39-9.062-21.306-21.864-21.306H7.829A2.323 2.323 0 0 1 5.5 12.183V8.108a2.323 2.323 0 0 1 2.33-2.329h19.355c10.629 0 15.274 4.771 15.316 13.796z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.559 39.892a2.323 2.323 0 0 1-2.33 2.329h-4.074a2.323 2.323 0 0 1-2.329-2.329v-2.568c0-5.942-4.533-9.673-10.183-9.673H7.83a2.323 2.323 0 0 1-2.33-2.329v-4.075a2.323 2.323 0 0 1 2.33-2.327h1.814c11.23 0 18.916 7.392 18.916 18.154z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.829 33.489h1.396c3.432 0 5.007 1.952 5.007 5.05v1.353a2.323 2.323 0 0 1-2.328 2.329H7.829A2.323 2.323 0 0 1 5.5 39.892v-4.075a2.323 2.323 0 0 1 2.329-2.328"></svg:path>`,
})
export class ArcticonsMirroringIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMirryIcon],svg[arcticons-mirry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.57 18.25C35.57 10.66 30.39 4.5 24 4.5s-11.57 6.16-11.57 13.75c0 6.1 3.35 11.26 8 13h0c1.81.69 1.67 2.79 1.45 4.3L20.92 40a3.13 3.13 0 0 0 6.21.83a2.9 2.9 0 0 0 0-.83l-.93-4.38c-.21-1.49-.36-3.61 1.46-4.3h0c4.56-1.81 7.91-6.97 7.91-13.07M24 28.81c-4.74 0-8.59-4.72-8.59-10.56S19.26 7.67 24 7.67s8.59 4.74 8.59 10.58S28.74 28.81 24 28.81m-1.59-17.08l-2.74 2.74M25.85 12l-5.91 5.9"></svg:path>`,
})
export class ArcticonsMirryIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMiruIcon],svg[arcticons-miru-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.832 42.135H31.79m-6.881-6.1c.066 2.861.62 4.452 1.153 6.1"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.115 28.54c2.098 4.97-4.72 7.891-9.403 12.863"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.97 32.427c-.056.588-.036 1.17.218 1.734c.863 1.31.715 1.927.857 2.666c.564 1.77 1.323 3.539 2.745 5.308M6.877 32.162c.838 1.46 1.09 3.281 1.315 5.12l-.63.23c-.117.658-.111 1.299.108 1.91l.829.324c.142.822-.138 1.614-.667 2.389m-.955-9.973l9.194-2.404l8.993.229l-7.693 3.949l.127 2.98M6.877 32.162l10.494 1.774m9.655-5.707c-1.3.36-1.894 1.141-1.962 1.758m0 0c-.398 2.501-4.203 5.857-6.038 8.483c-.581-.196-1.114-.613-1.528-1.554c.008.62.03 1.24-.026 1.86c-4.087 1.355.108 3.63 1.24 2.627"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m10.008 30.369l-1.86-4.713l-1.197-4.153c-4.565-.364 3.11-10.2 3.006-9.604l-.382 2.063c2.541-3.62 5.315-6.845 9.4-7.846c3.296-.253 5.675-.492 8.076.23c9.416 2.625 16.557 12.743 15.307 12.431c-2.173-2.394-4.401-4.706-6.977-6.496c2.51 3.073 4.078 5.55 6.063 9.044c0 0-1.164-.529-1.299-.255c-.339.687-1.215 4.45-1.019 4.23c0 0-.356-1.733-.382-1.631c-.025.102-1.197 2.7-1.197 2.7l-.56-2.318l-.688 1.223l-.204 3.515l-.764-2.725c-1.597 2.275-4.203 3.926-4.535 6.985l-1.529-2.833l.051-2.98l-2.711 2.206c1.73-2.728 1.991-5.406 1.692-8.066"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m33.496 28.231l4.993 3.386l-.993.637l.127 1.083l-4.485-4.71l3.327 5.854l-1.414-.356l-.577 1.18l-2.08-5.802M12.44 21.244c.927 1.79 1.985 3.567.443 5.622c2.77 2.485 6.31 1.114 9.573 1.13l-.03 1.924m5.683-4.027l-2.5.836l.1 2.167m2.591-7.52c-4.768 1.348-7.148.437-6.253-3.572c1.702-4.233 9.2 2.511 6.252 3.572"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.36 21.04c1.142 2.686 4.788 4.635 3.202-.92c-.717-2.495-4-.923-3.202.92"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.562 20.12c-2.423 1-1.187 2.298-.376 3.56m-3.746-2.436l.034 3.918l-3.394-2.646l.908 4.18l-1.84-1.04m18.177-8.454c.184 1.754-.084 3.307-.716 4.698m-.653-5.326c-2.057.95-1.367 4.149-.592 5.326m-11.78 11.226c.033 1.825-.149 3.891.484 5.042M20.625 5.99c10.396 4.626 18.412 9.671 17.591 16.273c-1.205-3.59-3.549-6.04-5.88-8.504c1.828 3.716 3.922 7.367 3.963 11.515M16.562 20.12c2.445 1.693 4.817 2.078 7.146 1.718c-3.966-1.223-5.328-5.228-7.388-8.488m12.998 13.885c1.434-2.596 1.87-3.766 2.804-5.647c-.708 3.29-1.34 6.705-2.855 8.628m-10.563-3.641l1.107.096"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.606 9.423c1.83 1.967 4.2 3.586 3.965 6.89c-1.853-.688-3.954-1.09-4.964-2.746c.421 1.767.714 3.314.088 3.296a27 27 0 0 1-2.681-2.044m9.512-2.014c5.03 6.159 4.221 10.42 2.868 16.698M9.575 13.962c-1.91 3.865 1.692 5.97 3.444 2.067m-6.068 5.474c1.444.194 3.837-1.517 5.744-2.266"></svg:path>`,
})
export class ArcticonsMiruIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMisMateriasIcon],svg[arcticons-mis-materias-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m17.019 13.039l-6.794 3.005v4.321l1.982 1.794m.617-.167l-5.322 3.319l2.661.814v3.068l2.661-1.878m0-8.015l-2.599 1.064m1.847-10.581a12.3 12.3 0 0 0-4.782 3.123"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.981 17.265h4.195v21.662a3.07 3.07 0 0 1-3.07 3.07h-5.351c-.814 0-1.44 0-2.755 1.503c-1.315-1.503-1.941-1.503-2.755-1.503h-5.35a3.07 3.07 0 0 1-3.071-3.07V17.265h4.195"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 8.562c9.11 0 11.928 1.221 11.928 1.221l-4.31 1.664a.995.995 0 0 0-.637.928v4.796a2.19 2.19 0 0 1-2.191 2.192h-.991a1.55 1.55 0 0 0-1.051.41l-1.426 1.31a1.55 1.55 0 0 1-1.05.41h-.543a1.55 1.55 0 0 1-1.051-.41l-1.425-1.31a1.55 1.55 0 0 0-1.052-.41h-.991a2.19 2.19 0 0 1-2.191-2.191v-4.797a.995.995 0 0 0-.637-.928l-4.31-1.664S14.89 8.562 24 8.562"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m30.981 13.039l6.794 3.005v4.321l-1.982 1.794m-.617-.167l5.322 3.319l-2.661.814v3.068l-2.661-1.878m0-8.015l2.599 1.064"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m35.176 14.895l5.534-1.99V7.6C37.14 5.04 32.484 4.5 24 4.5s-13.14.54-16.71 3.1v5.306l5.533 1.989"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.928 9.783a12.3 12.3 0 0 1 4.782 3.123"></svg:path>`,
})
export class ArcticonsMisMateriasIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMisesIcon],svg[arcticons-mises-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.23 10.96c-1.692.391-3.181 1.545-4.139 3.209l-6.5 11.302c-1.99 3.462-1.184 8.14 1.803 10.448s7.022 1.372 9.014-2.09l6.5-11.302c1.99-3.462 1.184-8.14-1.803-10.448c-1.433-1.107-3.186-1.509-4.875-1.118"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.894 12.079c-2.987 2.308-3.794 6.985-1.803 10.448l6.5 11.302c2.573 4.473 8.244 4.473 10.817 0l6.5-11.302c1.991-3.463 1.184-8.14-1.803-10.448"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.77 10.96c-1.689-.39-3.442.012-4.875 1.12c-2.987 2.307-3.794 6.985-1.803 10.447l6.5 11.302c1.991 3.462 6.027 4.398 9.014 2.09s3.794-6.986 1.803-10.448l-6.5-11.302c-.958-1.664-2.447-2.818-4.139-3.208"></svg:path>`,
})
export class ArcticonsMisesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMissilesIcon],svg[arcticons-missiles-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m23.276 36.658l-.953.575l-3.17-.477c-.467-.405-.93-1.736.048-1.865l3.483-.46m2.04 2.227l.953.575l3.17-.477c.467-.405.93-1.736-.048-1.865l-3.483-.46M17.869 9.378h4.885m7.377 0h-4.885"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.876 12.662v9.82c-.546 6.023-2.008 9.401-3.876 16.63c-1.868-7.229-3.33-10.607-3.876-16.63v-9.82c1.175-1.194 1.834-1.945 3.876-2.84c2.042.895 2.701 1.646 3.876 2.84"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m20.282 24.673l-14.729-2.36c-.95-1.922-1.594-4.513-.417-5.48l14.91-1.163m7.672 9.003l14.729-2.36c.95-1.922 1.594-4.513.417-5.48l-14.91-1.163M24 8.888v.932m0 7.264c.723 0 1.305.69 1.305 1.55v3.013c0 .859-.582 1.55-1.305 1.55s-1.305-.691-1.305-1.55v-3.014c0-.858.582-1.55 1.305-1.55zm-3.85-4.327h7.7"></svg:path>`,
})
export class ArcticonsMissilesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMisskeyIcon],svg[arcticons-misskey-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="39.393" cy="14.766" r="4.106" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.295a4.635 4.635 0 0 1 4.635-4.635c2.56 0 3.226 1.272 4.002 2.249l9.092 11.677m10.579 8.12a4.635 4.635 0 1 1-9.269 0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-miterlimit="5.052" d="M4.5 32.706V15.293"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m14.991 29.726l-1.222-1.573v4.553a4.635 4.635 0 0 1-9.269 0m19.04 0v-4.553l-1.222 1.572m-14.08-8.689l5.532 7.117m9.77 0l5.605-7.224"></svg:path><svg:path fill="none" stroke="currentColor" stroke-miterlimit="5.052" d="M14.991 29.726s3.38 4.834 7.326 0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="5.052" d="M8.27 21.068c-1.548-1.93-3.46-.734-3.76 1.078m17.72 2.44c1.445 1.67 3.292 1.15 4.379-.383m2.535-3.275a2.046 2.046 0 0 1 3.653.33"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="5.052" d="M16.517 17.221c1.427 1.893 2.848 1.93 4.35.059l3.544-4.584c.688-.812 1.203-2.036 3.763-2.036a4.635 4.635 0 0 1 4.635 4.634v17.413"></svg:path><svg:path fill="none" stroke="currentColor" stroke-miterlimit="5.052" d="M39.392 20.646a4.106 4.106 0 0 0-4.106 4.106v8.483a4.107 4.107 0 0 0 8.214 0v-8.483a4.107 4.107 0 0 0-4.108-4.106Z"></svg:path>`,
})
export class ArcticonsMisskeyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMistplayIcon],svg[arcticons-mistplay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.564 36.83a5.58 5.58 0 0 1-5.578 5.578h0a5.58 5.58 0 0 1-5.578-5.579h0a5.58 5.58 0 0 1 5.578-5.578h0a5.58 5.58 0 0 1 5.578 5.578m-.04-18.122a4.637 4.637 0 0 1-4.637 4.637h0a4.637 4.637 0 0 1-4.636-4.637h0a4.637 4.637 0 0 1 4.636-4.636h0a4.637 4.637 0 0 1 4.637 4.636m-13.496-8.418a3.264 3.264 0 1 1-6.528 0a3.264 3.264 0 0 1 6.528 0M34.27 8.857a3.264 3.264 0 1 1-6.527 0h0a3.264 3.264 0 0 1 3.264-3.264h0a3.264 3.264 0 0 1 3.264 3.264m8.229 8.541a3.264 3.264 0 1 1-6.528 0a3.264 3.264 0 0 1 6.528 0m-7.618 9.596a3.591 3.591 0 1 1-7.183 0a3.591 3.591 0 0 1 7.183 0"></svg:path>`,
})
export class ArcticonsMistplayIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMitaicompanionIcon],svg[arcticons-mitaicompanion-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m39.46 22.23l1.02-.59v-9.45l-8.19-4.73l-8.18 4.73m0 0l-8.19-4.73l-8.18 4.73v9.45l1.04.6m7.14 4.12v9.45l8.19 4.73l8.18-4.73v-9.45"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.48 20.21h5.27a5.55 5.55 0 0 1 5.55 5.55v.6h0h-16.38h0v-.6a5.55 5.55 0 0 1 5.56-5.55m-5.56 8.52h16.37m-16.37 3.42h16.37"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m20.4 20.31l-1.18-2.16h-2.73m11.44 2.16l1.18-2.16h2.73M15.93 33.32a11.1 11.1 0 0 1-3.64 2.52M4.6 22.55c2.89-.84 9.18-.23 11.42 2.2m16.27 8.57a11.1 11.1 0 0 0 3.64 2.52m7.71-13.27c-2.9-.84-9.19-.23-11.43 2.2m-8.1-12.58v8.02"></svg:path><svg:circle cx="21.84" cy="23.47" r=".75" fill="currentColor"></svg:circle><svg:circle cx="26.38" cy="23.47" r=".75" fill="currentColor"></svg:circle>`,
})
export class ArcticonsMitaicompanionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMitchIcon],svg[arcticons-mitch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m16 23.6l8 8l8-8l9.95 19.9H32l-4-4l-4 4l-4-4l-4 4H6.09Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24 26.78l-9.28-9.28h5.57v-13h7.42v13h5.57Z"></svg:path>`,
})
export class ArcticonsMitchIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMitdkIcon],svg[arcticons-mitdk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.676 10.315c-2.72 3.77-5.697 7.603-10.667 7.603c-4.903 0-7.947-3.833-10.667-7.603"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M41.775 14.304c-1.31 2.23-8.37 11.999-17.766 11.999c-9.375 0-16.454-9.77-17.765-11.999"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.342 10.315c-3.017-4.933-10.097-.966-7.098 3.99m35.943 15.951l-.016 6.162c0 4.62-8.047 4.803-8.08-.048l-.033-6.065c0-5.014 8.129-4.867 8.129-.049"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m13.629 22.41l-.016 14.008c0 4.62-8.047 4.803-8.08-.048L5.5 12.1c0 2.413 4.785 7.773 8.129 10.31m21.047-12.095c3.017-4.933 10.097-.966 7.1 3.99"></svg:path>`,
})
export class ArcticonsMitdkIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMitidIcon],svg[arcticons-mitid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.38 34.656V13.344h5.796a9.324 9.324 0 0 1 9.324 9.324v2.664a9.324 9.324 0 0 1-9.324 9.324zm-23.88 0a9.77 9.77 0 0 1 9.768-9.768h0a9.77 9.77 0 0 1 9.768 9.768h0z"></svg:path><svg:circle cx="14.268" cy="19.116" r="5.772" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsMitidIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMitidappIcon],svg[arcticons-mitidapp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:ellipse cx="14.185" cy="17.762" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="5.112" ry="5.159"></svg:ellipse><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.185 26.048c-5.315.027-9.707 3.239-9.685 9.349h19.37c.015-5.947-4.37-9.376-9.685-9.349m12.668-13.445v22.794h6.514C40.077 35.415 43.53 30.254 43.5 24s-3.24-11.422-10.133-11.396z"></svg:path>`,
})
export class ArcticonsMitidappIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMitozaIcon],svg[arcticons-mitoza-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.462 26.083c-.925-9.014-8.736-13.436-14.484-21.526c-.069-.097-.224-.064-.246.053c-.697 3.69-3.62 11.221-4.702 12.854c-.46.693-3.155 5.67-3.545 10.744c-.74 9.62 5.132 15.712 12.477 15.27c7.92-.478 11.31-9.502 10.5-17.395"></svg:path>`,
})
export class ArcticonsMitozaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMitsubishiIcon],svg[arcticons-mitsubishi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24 7.044l6.32 10.714L24 28.472l-6.32-10.637zm0 21.43h12.333L42.5 38.956H30.167zm0 0H11.667L5.5 38.956h12.333z"></svg:path>`,
})
export class ArcticonsMitsubishiIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMiuiDownloaderIcon],svg[arcticons-miui-downloader-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M15.413 5.5h14.398m-2.757.019v12.526l10.459 17.797c2.212 3.764-1.29 6.658-3.624 6.658H11.416c-2.13 0-5.891-1.978-3.527-6.658c1.785-3.535 10.506-17.797 10.506-17.797V5.664"></svg:path><svg:path d="M21.666 24.504c.096-.812.847-1.395 1.677-1.303h0c.83.092 1.425.824 1.329 1.635l-.287 2.424m-2.545-4.225l-.46 3.893"></svg:path><svg:path d="M24.672 24.836c.096-.811.847-1.394 1.677-1.302h0c.83.091 1.425.824 1.329 1.635l-.287 2.424m.469 7.305l-.746 2.04c-.25.683.082 1.445.74 1.702s1.393-.087 1.642-.77l.746-2.04m-.746 2.04l-.452 1.236m-13.252-8.303l-1.275 4.815m2.736-1.076l-4.197-2.663m10.046 1.498c-.649 0-1.174-.557-1.174-1.245v-.808c0-.688.525-1.245 1.174-1.245s1.174.557 1.174 1.245v.808c0 .688-.526 1.245-1.174 1.245m4.338-4.063l.948 3.11m3.933.481l-.28 3.81m-12.619-7.969l-.207 3.73"></svg:path></svg:g><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m31.497 14.575l4.258 4.283l4.258-4.283m-4.258 4.283V5.613"></svg:path><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M22.717 37.43a1.52 1.52 0 0 1-1.261 1.736l-.525.082c-.547.084-1.059-.294-1.144-.845s.288-1.066.835-1.15l2.022-.314"></svg:path><svg:path d="M19.76 35.748c.307-.42.557-.491 1.257-.6c.795-.123 1.372.146 1.518 1.091l.418 2.696"></svg:path></svg:g>`,
})
export class ArcticonsMiuiDownloaderIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMiuiIconPackIcon],svg[arcticons-miui-icon-pack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m6.087 42.5l7.458-8.046V5.5l-7.458 8.046zm35.826-37H24.244l-5.998 6.93h17.67zM32.17 16.954c7.195 1.97 9.743 7.674 9.743 12.983c0 6.918-3.5 12.563-12.198 12.563c-5.876 0-9.037-3.93-11.914-8.713l4.7-5.43c2.148 3.89 5.39 6.484 10.861 4.863c.345-4.6-.972-8.389-6.038-10.415l8.592-10.375"></svg:path>`,
})
export class ArcticonsMiuiIconPackIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMiviIcon],svg[arcticons-mivi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.024 40.419L15.91 11.64l4.671 19.215l14.077-18.014l-.267 25.887"></svg:path>`,
})
export class ArcticonsMiviIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMivoIcon],svg[arcticons-mivo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m5.5 19.954l.319 10.062l8.944-18.261v23.372l9.157-29.6l-.266 36.946l9.689-29.227l-.426 23.584L42.5 19.315v7.72"></svg:path>`,
})
export class ArcticonsMivoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMixcloudIcon],svg[arcticons-mixcloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.014 24h-7.768M9.5 28.115v-8.239l4.124 8.248l4.123-8.235v8.235M38.5 20.392l-8.247 7.216m8.247 0l-8.247-7.216"></svg:path>`,
})
export class ArcticonsMixcloudIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMixerboxBffIcon],svg[arcticons-mixerbox-bff-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 4.5c-6.345 0-11.49 5.104-11.49 11.401v.001c.01 1.292.241 2.573.684 3.788a4.94 4.94 0 0 0-1.585 3.608c0 2.74 2.237 4.96 4.997 4.961h.001a5.02 5.02 0 0 0 3.252-1.194A5.01 5.01 0 0 0 24 29.26a5.01 5.01 0 0 0 4.141-2.194a5.02 5.02 0 0 0 3.252 1.194c2.76 0 4.998-2.22 4.998-4.96a4.94 4.94 0 0 0-1.582-3.618c.44-1.212.67-2.49.68-3.779c0-6.297-5.143-11.402-11.488-11.403z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.894 16.143c0 3.23-2.639 5.85-5.894 5.85s-5.894-2.62-5.894-5.85v0c0-3.23 2.64-5.849 5.894-5.849s5.894 2.62 5.894 5.85zm.604 12.217l-4.534 13.595c-.27.807-.97 1.545-2.045 1.545s-1.775-.738-2.045-1.545l-4.528-13.58"></svg:path>`,
})
export class ArcticonsMixerboxBffIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMixplorerIcon],svg[arcticons-mixplorer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m4.38 12.26l7.83 6l7.84-6v16.67H4.38zm18.53 8.1h4.28v8.57h-4.28Zm7 2.17h13.32l-3.65 6.4l3.8 6.77H29.74l3.79-6.77l-3.64-6.4Z"></svg:path>`,
})
export class ArcticonsMixplorerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMixplorerThemeCreatorIcon],svg[arcticons-mixplorer-theme-creator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.215 44.457c-1.65.116-3.209-.416-4.714-1.146c-.362-.175-.642-.195-1.017.001c-1.918 1.002-3.98 1.4-6.113 1.089c-2.531-.37-4.356-1.831-5.638-4.013a10.4 10.4 0 0 1-1.017-2.364c-.116-.4-.327-.593-.72-.722c-1.924-.632-3.66-1.574-4.913-3.227c-1.528-2.015-1.83-4.293-1.374-6.715a10.2 10.2 0 0 1 1.063-2.958c.142-.264.139-.482-.002-.756c-.993-1.932-1.485-3.99-1.18-6.148c.366-2.6 1.834-4.498 4.093-5.794c.762-.437 1.557-.812 2.411-1.03c.386-.099.51-.365.617-.705c.64-2.04 1.677-3.832 3.47-5.069c2.425-1.673 5.058-1.715 7.771-.84c.546.176 1.092.372 1.577.68c.331.21.607.17.932.002a10.7 10.7 0 0 1 3.434-1.13c3.7-.531 6.72 1.028 8.435 4.112c.428.77.78 1.57 1.026 2.413c.087.298.26.45.546.53c1.432.401 2.737 1.066 3.856 2.04c1.673 1.457 2.607 3.287 2.715 5.539c.09 1.886-.361 3.632-1.183 5.302c-.156.317-.158.587.003.901c.946 1.846 1.362 3.81 1.155 5.875c-.2 1.993-1.147 3.618-2.64 4.935c-1.096.967-2.39 1.573-3.758 2.031c-.408.137-.631.357-.753.766c-.435 1.472-1.133 2.815-2.19 3.932c-1.574 1.664-3.49 2.585-5.892 2.47z"></svg:path><svg:circle cx="24" cy="24.003" r="9" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsMixplorerThemeCreatorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMixtubeIcon],svg[arcticons-mixtube-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="18.671" cy="33.489" r="10.011" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.682 33.489V15.277m10.074-5.815l-8.32-4.804a1.17 1.17 0 0 0-1.754 1.013v11.632l10.074-5.816a1.17 1.17 0 0 0 0-2.025m-.042 10.909v5.299m-4.318-2.089v7.192M23.713 20.006v-3.995m-9.462 5.551v-3.995m4.731.547V9.408"></svg:path>`,
})
export class ArcticonsMixtubeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMiyousheIcon],svg[arcticons-miyoushe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 5.5h29c2.216 0 4 1.784 4 4v29c0 2.216-1.784 4-4 4h-29c-2.216 0-4-1.784-4-4v-29c0-2.216 1.784-4 4-4"></svg:path><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M21.813 35.108c.297 1.16.679 1.895 1.018 2.54m9.271-7.248c.339.78.628 1.737 1.11 2.501"></svg:path><svg:path d="M16.443 42.478c-1.72-6.016-1.98-8.545.504-11.146c5.436-5.694 12.51-6.933 16.149-7.249c3.288-.285 4.5.495 6.223 3.65c1.09 1.997 2.138 3.74 3.181 5.454"></svg:path></svg:g><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m18.036 26.563l-2.912 2.126c-1.531 1.119-1.968-.07-2.22-.782c-.748-2.106-.84-6.786-.343-9.883c.158-.986.934-1.893 1.794-2.399c.843-.496 1.531-.763 2.297-1.143c1.043-.518 1.58.207 1.511 1.057c-.233 2.904-.117 5.758.277 8.615c.217 1.573.408 1.816-.404 2.41"></svg:path><svg:path d="M15.495 21.726c-.05 2.03.067 4.234.641 6.226"></svg:path></svg:g><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m33.208 21.095l-2.912.96c-1.668.551-2.14.152-2.393-.904c-.547-2.29-.766-6.558-.23-9.563c.238-1.338.993-1.931 1.854-2.446c.784-.468 1.531-.7 2.296-.951c1.043-.342 1.723.207 1.652 1.48c-.172 3.097-.09 5.58.305 8.662c.206 1.611.312 2.47-.572 2.762"></svg:path><svg:path d="M30.586 15.694c.056 2.44.173 3.84.597 6.07"></svg:path></svg:g>`,
})
export class ArcticonsMiyousheIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMizuhoDirectIcon],svg[arcticons-mizuho-direct-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.569 28.423c7.926-.767 17.613-.49 23.931.686m-20.584-9.511v5.449M9.5 25.04v-6.149l3.183 6.157l3.183-6.147v6.147m3.867-5.45h3.737l-3.737 5.45h3.737m5.504-5.45v5.449m3.736-5.449v5.449m-3.736-2.734h3.736m-7.472-2.715v3.645c0 .997.836 1.805 1.868 1.805h1.868m7.422-5.45c1.031 0 1.868.808 1.868 1.805v1.84c0 .997-.837 1.805-1.869 1.805h0c-1.031 0-1.868-.808-1.868-1.806v-1.84c0-.996.837-1.805 1.868-1.805"></svg:path>`,
})
export class ArcticonsMizuhoDirectIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMizuhoWalletIcon],svg[arcticons-mizuho-wallet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 16.5c0-3.324 2.676-6 6-6h25c3.324 0 6 2.676 6 6"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 20.5c0-3.324 2.676-6 6-6h25c3.324 0 6 2.676 6 6M18.417 32.477V21.323L24 32.489l5.583-11.149v11.149M18 35.71c4.704-1.358 10.645-.967 14.485.954"></svg:path>`,
})
export class ArcticonsMizuhoWalletIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMjEzIcon],svg[arcticons-mj-ez-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:ellipse cx="24.207" cy="24.141" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="16.023" ry="15.865"></svg:ellipse><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.185 19.758h-11.49v8.532h11.49m-8.473-4.164h8.454"></svg:path>`,
})
export class ArcticonsMjEzIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMjPdfIcon],svg[arcticons-mj-pdf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m10.613 33.129l-4.928-9.86v9.799m4.928.062l.032.062l.031-.061zm.777 7.572c.496.496 1.115.744 1.735.744a2.49 2.49 0 0 0 2.48-2.48V23.27l-4.929 9.86m7.86.062V23.27h3.224c1.86 0 3.349 1.488 3.349 3.348s-1.488 3.348-3.349 3.348h-3.224m9.502 3.226V23.27h2.232c2.356 0 4.34 1.984 4.34 4.34v1.24c0 2.356-1.984 4.34-4.34 4.34zm9.502-4.961h3.224m-3.224 4.961V23.27h4.96M5.706 11.523H42.5M5.706 6.554H42.5m-37 10.199h26.76"></svg:path>`,
})
export class ArcticonsMjPdfIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMjPdfReaderIcon],svg[arcticons-mj-pdf-reader-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.295 10.402h5.59v8.384a2.803 2.803 0 0 1-2.795 2.795h0a2.803 2.803 0 0 1-2.795-2.795v-.978m-14.179 3.773V10.402l5.589 11.179l5.59-11.179v11.179m-4.171 16.018v-11.18h1.817c3.074 0 5.59 2.515 5.59 5.59h0c0 3.074-2.516 5.59-5.59 5.59zm10.786-11.18h5.59m-5.59 5.59h3.634m-3.634-5.59v11.18m-21.41 0v-11.18h3.633c2.097 0 3.774 1.677 3.774 3.773s-1.677 3.773-3.774 3.773H10.5"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path>`,
})
export class ArcticonsMjPdfReaderIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMjuMobileIcon],svg[arcticons-mju-mobile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.538 9.002v14.232c0 4.028 3.222 7.25 6.98 7.25s6.982-3.222 6.982-7.25V9.002m-22.107.001c3.048 0 5.502-.113 5.502 2.936v21.374c0 3.05-2.821 5.685-5.869 5.685M6.5 30.216V9.002l8.77 21.482l7.197-17.625"></svg:path>`,
})
export class ArcticonsMjuMobileIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMjweatherIcon],svg[arcticons-mjweather-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.791 16.676c4.187-8.723 14.73-4.48 12.46 4.033c12.405-4.342 9.047 13.645 1.511 8.353c3.331 9.063-8.08 8.363-9.65 3.745c-2.064 3.336-6.675 5.08-8.713-1.584"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.197 24.31c6.821 10.358 15.547 4.372 19.948-.865"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 18.62c13.344-4.169 12.556 13.292 25.925 2.232"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.894 14.948c1.67 2.572 4.443 5.228 10.874 3.169"></svg:path>`,
})
export class ArcticonsMjweatherIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMlauncherIcon],svg[arcticons-mlauncher-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="17.164" r="2.196" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.196 30.836a2.196 2.196 0 1 1-4.392 0h0a2.196 2.196 0 1 1 4.392 0m-6.803-13.672a2.196 2.196 0 0 1-2.197 2.196h0A2.196 2.196 0 0 1 15 17.164h0a2.196 2.196 0 1 1 4.393 0m0 13.672a2.196 2.196 0 1 1-2.197-2.196h0c1.213 0 2.197.983 2.197 2.196m0-6.836A2.196 2.196 0 1 1 15 24h0c0-1.213.983-2.196 2.196-2.196h0c1.213 0 2.197.983 2.197 2.196M33 17.164a2.196 2.196 0 0 1-2.196 2.196h0a2.196 2.196 0 0 1-2.197-2.196h0a2.196 2.196 0 1 1 4.393 0m0 13.672a2.196 2.196 0 0 1-2.196 2.196h0a2.196 2.196 0 1 1 0-4.392h0c1.213 0 2.196.983 2.196 2.196M33 24a2.196 2.196 0 0 1-2.196 2.196h0A2.196 2.196 0 0 1 28.607 24h0c0-1.213.984-2.196 2.197-2.196h0c1.213 0 2.196.983 2.196 2.196m-6.804 0a2.196 2.196 0 1 1-4.392 0h0c0-1.213.983-2.196 2.196-2.196h0c1.213 0 2.196.983 2.196 2.196"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.5 40.589v4.688M24 2.854V7.47M2.5 24h4.766m33.264 0h4.785m-4.785 0c0 9.13-7.4 16.53-16.53 16.53S7.47 33.13 7.47 24S14.87 7.47 24 7.47S40.53 14.87 40.53 24m4.97 0c0 11.874-9.626 21.5-21.5 21.5S2.5 35.874 2.5 24S12.126 2.5 24 2.5S45.5 12.126 45.5 24"></svg:path>`,
})
export class ArcticonsMlauncherIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMlinkIcon],svg[arcticons-mlink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.492 17.646h15.016M24 34.48V17.646M40.513 35.49l-14.82 8.556a3.39 3.39 0 0 1-3.387 0L7.486 35.49a3.39 3.39 0 0 1-1.693-2.934V15.444c0-1.21.646-2.329 1.694-2.934l14.82-8.556a3.39 3.39 0 0 1 3.387 0l14.82 8.556a3.39 3.39 0 0 1 1.693 2.934v17.112c0 1.21-.646 2.329-1.694 2.934"></svg:path>`,
})
export class ArcticonsMlinkIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMllerIcon],svg[arcticons-mller-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.5 42.48h-11s-4.334-.323-7.5-6.007c-3.166 5.703-7.5 6.027-7.5 6.027h-11m36.98-37v11s-.323 4.334-6.007 7.5c5.703 3.166 6.027 7.5 6.027 7.5v11M5.5 5.52h11s4.334.323 7.5 6.007C27.166 5.824 31.5 5.5 31.5 5.5h11m-36.98 37v-11s.323-4.334 6.007-7.5C5.824 20.834 5.5 16.5 5.5 16.5v-11m11.481 16.172l5.752 8.564l5.125-7.631v7.631h-1.48H32.5h-1.481V17.764H32.5h-6.122l-3.467 5.717l-3.823-5.717H15.5h1.481v12.472H15.5h2.962"></svg:path>`,
})
export class ArcticonsMllerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMlmanagerIcon],svg[arcticons-mlmanager-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.5 5.5v17.2l1.9-1.8l2.5 2.4l2.5-2.5l2.5 2.6l2.5-2.5l2.5 2.4l2.5-2.5l2 2V5.5m1 30.1c0-3.3 5.2-3.5 5.2 0m-5.2 0h5.2v4.3h-5.2zm3.8 4.4v2.5M35.7 40v2.5m-2.8-7.3v4m8.2-4v4m-5-6L35 31.7m2.9 1.5l1.1-1.5"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.6 9.7v8h4m-14.3 0v-8l4 8l4-8v8M37 28.6c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5s8.5-3.8 8.5-8.5h0c0-4.7-3.8-8.5-8.5-8.5"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.5 42.5h-21c-2.2 0-4-1.8-4-4v-29c0-2.2 1.8-4 4-4h29c2.2 0 4 1.8 4 4v21.1"></svg:path>`,
})
export class ArcticonsMlmanagerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMlpBankingIcon],svg[arcticons-mlp-banking-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24" cy="24" r="2.389" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.611 24v21.367l-.004-9.665A11.945 11.945 0 1 0 12.055 24v17.877"></svg:path>`,
})
export class ArcticonsMlpBankingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMmrlIcon],svg[arcticons-mmrl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.765 13.857L24.24 24.523V44.5l17.995-10.39V14.14L23.808 3.5zm9.238 5.333L33.022 8.82M24.24 24.523l17.995-10.384"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m5.765 13.857l.006 20.51L24.24 44.5"></svg:path>`,
})
export class ArcticonsMmrlIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMnmlIcon],svg[arcticons-mnml-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36.649 20.649v6.702H40m-31 0V20.65l3.351 6.702l3.352-6.702v6.702m10.892-.001V20.65l3.351 6.702l3.351-6.702v6.702m-14.243-.001V20.65l4.44 6.702V20.65"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path>`,
})
export class ArcticonsMnmlIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMoBusIcon],svg[arcticons-mo-bus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.778 28c-1.5 0-2.6-1.2-2.6-2.6v-2.7c0-1.5 1.2-2.7 2.6-2.7h0c1.5 0 2.7 1.2 2.7 2.7v2.6c0 1.5-1.2 2.7-2.7 2.7M26.9 24h-3.2m3.2 0c1.1 0 2 .9 2 2s-.9 2-2 2h-3.3v-8h3.3c1.1 0 2 .9 2 2s-.9 2-2 2m4.422-4v5.3c0 1.5 1.2 2.7 2.6 2.7s2.6-1.2 2.6-2.7V20m2.522 7.1c.5.6 1.1.9 2 .9h1.2c1.1 0 2-.9 2-2h0c0-1.1-.9-2-2-2h-1.3c-1.1 0-2-.9-2-2h0c0-1.1.9-2 2-2h1.2c.9 0 1.5.2 2 .9m-40.388 7V20l4 8l4-8v8M45.5 30.804C42.379 39.533 33.73 45.407 24 45.407S5.621 39.533 2.51 30.813h31.537L28.98 35.62M2.5 17.01C5.621 8.282 14.27 2.408 24 2.408s18.379 5.874 21.5 14.604H13.974l5.067-4.8"></svg:path>`,
})
export class ArcticonsMoBusIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMobiIcon],svg[arcticons-mobi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.417 32.062c6.305-6.305 6.305-16.528 0-22.833c-6.306-6.305-16.528-6.305-22.833 0c-6.306 6.305-6.306 16.528 0 22.833L24.022 43.5z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.634 28.934c1.344 0 2.443 1.1 2.443 2.444s-1.1 2.443-2.443 2.443h-4.032v-9.774h4.032c1.344 0 2.443 1.1 2.443 2.444s-1.1 2.443-2.443 2.443m.056 0H19m9.961-5.146v9.774M13.965 21.586l.047-9.42l4.947 9.49l4.817-9.502l-.013 9.574M35.52 16.67a4.689 4.689 0 1 0-9.377 0v.397a4.689 4.689 0 1 0 9.378 0z"></svg:path>`,
})
export class ArcticonsMobiIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMobielYouIcon],svg[arcticons-mobiel-you-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36.032 16.131s-6.473-3.54-11.227-3.54s-9.912 4.046-9.912 9.305c0 3.588 1.315 5.36 1.315 5.36c-5.664-2.24-6.675-6.574-6.675-9.81S11.657 4.5 25.007 4.5c8.294 0 14.261 4.147 14.261 4.147zM11.777 31.335s6.079 4.074 12.41 4.074c4.754 0 9.912-4.046 9.912-9.305c0-3.588-1.314-5.36-1.314-5.36c5.663 2.24 6.675 6.574 6.675 9.81S37.336 43.5 23.985 43.5c-9.361 0-15.445-4.68-15.445-4.68z"></svg:path>`,
})
export class ArcticonsMobielYouIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMobikwikIcon],svg[arcticons-mobikwik-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.719 12.85L5.993 14.949A1.78 1.78 0 0 0 4.5 16.708v20.825h26.35a1.305 1.305 0 0 0 1.299-1.177l2.418-24.455a1.305 1.305 0 0 0-1.511-1.416l-12.47 2.057"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m7.201 34.728l11.92-22.643a.73.73 0 0 1 1.375.373l-.861 19.083a.592.592 0 0 0 1.123.285l6.488-14.302a.565.565 0 0 1 1.079.248l-.344 13.32m6.487-18.188l1.411-.187a1.847 1.847 0 0 1 2.077 2.035l-2.104 18.853a1.847 1.847 0 0 1-1.835 1.642H32.26"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M37.47 19.101c1.535.057 2.095-1.075 4.25-1.075c1.99 0 2.806 3.766-.207 5.065a11.4 11.4 0 0 1-4.621 1.197"></svg:path><svg:circle cx="40.407" cy="20.831" r=".75" fill="currentColor"></svg:circle>`,
})
export class ArcticonsMobikwikIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMobilbankIcon],svg[arcticons-mobilbank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.287 25.025s.88 4.083 4.802 4.083s4.455-4.097 4.455-4.097m-7.288 6.323s.849 7.894 1.514 10.657m1.533 1.509s1.525-3.835 2.201-12.004"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.617 17.317c-2.459 1.847-3.39 3.191-2.482 6.309s1.268 3.19 1.268 3.19a5.59 5.59 0 0 1 2.025-5.27c2.683-2.092 3.994-4.781 2.788-8.827s-4.7-8.22-4.7-8.22s.294 5.749-2.281 8.478c-1.517 1.608-5 3.624-3.56 7.501s2.725 3.288 2.725 3.288s-2.274-3.908.591-6.389s4.217-3.396 4.278-5.942c0 0 1.806 4.035-.652 5.882"></svg:path>`,
})
export class ArcticonsMobilbankIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMobildenizIcon],svg[arcticons-mobildeniz-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="5.074" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24" cy="24" r="2.343" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24" cy="24" r="11.037" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24" cy="24" r="14.076" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 13.131v5.634m1.5-8.951v-5.94c0-.83-.822-1.374-1.5-1.374s-1.5.544-1.5 1.374V9.85m9.186 6.465l-3.984 3.983m7.39-5.268l4.2-4.2c.587-.587.39-1.553-.09-2.033s-1.444-.676-2.032-.089l-4.224 4.225m-1.261 18.753l-3.983-3.984m5.268 7.39l4.2 4.2c.588.587 1.553.39 2.033-.09s.676-1.444.089-2.032l-4.225-4.224M13.131 24h5.634m-8.951-1.5h-5.94c-.83 0-1.374.822-1.374 1.5s.544 1.5 1.374 1.5H9.85M34.869 24h-5.634m8.952 1.5h5.939c.83 0 1.374-.822 1.374-1.5s-.544-1.5-1.374-1.5H38.15m-21.835-6.186l3.983 3.984m-5.268-7.39l-4.2-4.2c-.587-.587-1.553-.39-2.033.09s-.676 1.444-.089 2.032l4.225 4.224m3.381 16.631l3.984-3.983m-7.39 5.268l-4.2 4.2c-.587.588-.39 1.553.09 2.033s1.444.676 2.032.089l4.224-4.225M24 34.869v-5.634m-1.5 8.952v5.939c0 .83.822 1.374 1.5 1.374s1.5-.544 1.5-1.374V38.15"></svg:path>`,
})
export class ArcticonsMobildenizIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMobileDeIcon],svg[arcticons-mobile-de-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29c-2.2 0-4 1.8-4 4v29c0 2.2 1.8 4 4 4h29c2.2 0 4-1.8 4-4v-29c0-2.2-1.8-4-4-4m-22.6.3v36.4m4.8-23.8v11.2"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.7 22.629a4.225 4.225 0 0 1 4.225-4.225h0a4.225 4.225 0 0 1 4.225 4.225V29.6M20.7 18.404V29.6m8.45-6.971a4.225 4.225 0 0 1 4.225-4.225h0a4.225 4.225 0 0 1 4.225 4.225V29.6"></svg:path>`,
})
export class ArcticonsMobileDeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMobileJknIcon],svg[arcticons-mobile-jkn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.465 16.769c-2.063 4.526-2.065 9.944 0 14.468m35.07-14.468c2.064 4.526 2.065 9.944 0 14.468M8.605 18.813c-1.173 3.321-1.16 7.05 0 10.375m30.79-10.375c1.173 3.321 1.16 7.05 0 10.375M21.85 18.65v8.1m0-1.7l3.6-3.7m-2.4 2.5l2.8 2.8m-7.65-5.3v6c0 1.1-.9 2-2 2h0c-.5 0-1-.2-1.4-.6"></svg:path><svg:circle cx="18.2" cy="19.05" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.2 26.75v-3.3c0-1.1-.9-2-2-2s-2 .9-2 2m0 3.3v-5.4"></svg:path>`,
})
export class ArcticonsMobileJknIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMobileLegendsBangBangIcon],svg[arcticons-mobile-legends-bang-bang-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17 30.985V17l7 7l7-6.979V31M17 17L6.672 6.672M42.5 17.955L30.045 5.5M31 31l10.328 10.328M17.955 42.5L5.5 30.045"></svg:path>`,
})
export class ArcticonsMobileLegendsBangBangIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMobileLegendsBangBangAltIcon],svg[arcticons-mobile-legends-bang-bang-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.028 23.876c-1.504.088-1.464-3.398 1.579-6.919c3.325-3.847 3.322-2.77 3.322-2.77s.766-3.162 6.75-3.11m.001.001a5 5 0 0 1 1.623.412a6.12 6.12 0 0 1 3.96 4.222m-2.508 5.814s-.386-3.401 1.324-4.49a12 12 0 0 0 2.977-2.958a36 36 0 0 0-1.433 5.137c-.229 1.744-.97 2.767-2.188 3.165"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.857 29.269c-6.242-1.574-3.863-13.532.072-15.081s4.41 2.65 4.41 2.65s-2.122-3.425-2.03-.31s-.133 8.65-6.754 10.017"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.697 17.878a2.93 2.93 0 0 0 1.642-1.04a2.19 2.19 0 0 1 1.854-.67m2.264 1.596a10.5 10.5 0 0 1 1.298 3.762m.828-8.533s-2.195 4.198-8.337 7.46m-1.17 2.867s.41-.039.732 1.46s2.828 2.593 3.007 2.687a5.4 5.4 0 0 1 1.29 1.165c.303.407 1.392.695 2.237-.593s2.292-2.895 2.063-4.226"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.318 27.467c-.261.277-2.353 1.794-2.784 2.658m10.856-7.19c1.138-.975-.147-1.915 5.07-1.247s-.741-1.052-5.47 4.31m-2.592 4.148q-.204.468-.393.971m-6.942 4.07s-6.306 1.251-7 5.458c-.568 3.443.655 4.074 1.648 4.855"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.064 41.865c-.02.093-1.84-6.804 7.96-9.192m.001 0s3.549 3.485 3.595 5.966a2.75 2.75 0 0 1-1.428 2.74M10.277 32.53l26.908-10.517m-17.179 9.105s-1.33 1.986 2.039 2.936s2.591-.75 4.19-1.622s2.362-4.658 5.648-5.358M25.136 45.29s4.01-8.46 5.638-8.942"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.883 27.074s-4.595 2.831-3.089 6.258s3.954 3.674 6.774 1.599m1.617-12.918s2.598.831-.512 4.397l8.34-7.473m0 0l-11.546.134s4.929.384 3.718 2.942M12.886 34.717c-2.903-2.895-3.88-2.019-3.88-2.019m4.092.626c-.22-.843-3.163-2.777-3.163-2.777c-.734-.195-2.965 1.597-3.017 2.137a4.96 4.96 0 0 0-1.22 2.408C3.62 36.997 2.644 39.838 3.04 40.7c.386.84 1.688.971 2.742.81"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m8.342 34.825l1.642.096l1.004.922m11.632 2.796a4.115 4.115 0 0 0 4.157 2.825M14.452 23.029a18 18 0 0 1 .122 1.88c-.042.218.193.606 1.099.676m-1.312-14.236c-.127-.731-1.538-7.947 8.213-6.358c.93.073 3.57.617 4.745.11"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.303 11.49s8.924-3.545 3.27-6.499m11.479 12.361c-1.512-2.202-3.614-3.712-6.88-1.735c1.476-4.269-.194-10.347 1.025-12.69M39.37 17.101c-.678-2.476-2.07-6.855-.692-8.711m-1.063 25.367a47 47 0 0 1-1.858 7.887"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="M41.021 32.697s-2.526 1.083-3.706.3s3.76-2.648 3.76-2.648"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="M38.216 31.625s-2.49.675-2.383.002s.225-1.751 4.819-4.323"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="M37.062 29.628s-2.038.81-1.868-.294a5.9 5.9 0 0 1 1.479-2.924m3.979.894l1.087-.373m-.664 3.418l.865-.49m-.919 2.838l2.88-1.134s2.007-.154.715-4.692c-.757-2.662-1.143-3.72-1.623-4.18"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="M36.086 27.2s-1.239.111-1.345-.795c-.017-.149.291-1.294 1.9-2.132"></svg:path><svg:path fill="none" stroke="currentColor" d="m21.404 23.813l-.65-2.287"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.592 34.849a21.405 21.405 0 1 1 39.373-6.579m-.96 3.283A21.42 21.42 0 0 1 25.136 45.29"></svg:path>`,
})
export class ArcticonsMobileLegendsBangBangAltIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMobileLegendsBangBangAlt2Icon],svg[arcticons-mobile-legends-bang-bang-alt-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.05 24.215c-1.476.087-1.437-3.333 1.547-6.785c3.26-3.773 3.258-2.716 3.258-2.716s.751-3.102 6.62-3.05m0 0a.931.931 0 0 1 1.592.404a6 6 0 0 1 3.884 4.14m-2.46 5.702s-.378-3.335 1.299-4.403a11.8 11.8 0 0 0 2.92-2.901a35 35 0 0 0-1.406 5.038c-.224 1.71-1.335 2.805-1.719 2.793"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.784 29.503c-6.12-1.543-3.787-13.27.071-14.79s4.325 2.6 4.325 2.6s-2.08-3.36-1.99-.305s-.131 8.484-6.624 9.824"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.57 18.333a2.87 2.87 0 0 0 1.61-1.02a2.15 2.15 0 0 1 1.819-.656m2.22 1.564a10.2 10.2 0 0 1 1.272 3.689m.813-8.368s-2.153 4.117-8.176 7.316m-1.148 2.811s.403-.037.717 1.432s2.774 2.544 2.95 2.635a5.3 5.3 0 0 1 1.264 1.143c.297.399 1.366.682 2.194-.581s2.248-2.84 2.023-4.144"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.16 27.737c-.257.27-2.308 1.76-2.73 2.606m3.249 1.436a3.5 3.5 0 0 1 .744.636m6.653-9.123c1.116-.956-.144-1.878 4.972-1.223s-.727-1.031-5.364 4.227m-2.542 4.068q-.2.459-.385.953m-3.334 1.098l-1.74.372l-1.735 2.52s-6.071 1.248-6.865 5.353s1.103 3.683 1.616 4.762"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.67 36.364a12.7 12.7 0 0 0 .113 6.678s-1.5-8.344 8.012-10.2m0 .001s3.48 3.417 3.525 5.85a2.69 2.69 0 0 1-1.4 2.687m-10.704-8.679l26.388-10.314m-16.847 8.93s-1.305 1.948 2 2.88s2.54-.736 4.108-1.59s2.318-4.57 5.54-5.256a1.35 1.35 0 0 0 .036-1.222m-3.584-2.114q-.591-.156-1.311-.296M24.414 45.5s4.306-8.582 5.903-9.055"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.405 27.351s-4.507 2.777-3.03 6.138s3.878 3.603 6.643 1.567m1.586-12.669s2.548.816-.502 4.313l8.179-7.33m-.001 0l-11.322.132s4.834.377 3.646 2.885m-23.83 12.459c-2.846-2.838-3.805-1.98-3.805-1.98m4.013.614c-.215-.826-3.101-2.724-3.101-2.724c-.72-.191-2.909 1.567-2.959 2.096a4.86 4.86 0 0 0-1.197 2.362c-2.038 1.868-2.995 4.655-2.606 5.5c.379.824 1.656.952 2.688.795"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m11.283 35.567l-1.394-1.08l-1.767-.19m-.564 1.549l1.61.094l.403.432m12.749 2.321a4.035 4.035 0 0 0 4.077 2.77m-2.589-7.002c-.211.014.828 4.442 4.367 4.591m2.142-2.607c-.678.237-3.896.56-5.008-3.196M14.31 23.384a18 18 0 0 1 .12 1.845c-.042.213.188.594 1.077.662m.095-3.93s2.214 1.853 2.98-1.872"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.602 21.961s-.384-1.442 2.98-1.872m-5.963 4.084a1.71 1.71 0 0 0 1.383-.817"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.002 23.356s-.159-.785-1.501-.596m1.72-10.83c-.125-.717-1.508-7.794 8.054-6.235c.912.072 3.501.605 4.654.108m17.78 14.647a9.6 9.6 0 0 1-1.523 3.9M28.175 39.052a16.3 16.3 0 0 0 .8 3.063c.176.374.395.814.631 1.276"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.067 12.068s8.753-3.476 3.208-6.374m-5.838 21.123a2.3 2.3 0 0 0 .778-.309a10 10 0 0 1 .936-.474m15.381-8.217c-1.483-2.16-3.712-3.572-6.916-1.633c0 0-1.88.97.257-9.798M38.746 17.57c-.664-2.427-1.721-7.33-.37-9.15M27.875 2.996a19.5 19.5 0 0 0-1.001 3.39m10.152 27.519a38.4 38.4 0 0 1-1.68 7.225"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="M40.366 32.865s-2.477 1.063-3.634.295s3.688-2.597 3.688-2.597"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="M37.615 31.815s-2.441.661-2.336.002s.22-1.718 4.725-4.24"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="M36.484 29.856s-2 .795-1.832-.289a5.8 5.8 0 0 1 1.45-2.867m3.902.877l1.067-.366m-.651 3.352l.848-.48m-.902 2.782l2.824-1.111s1.968-.152.702-4.602c-.743-2.61-1.121-3.648-1.593-4.1"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="M35.526 27.475s-1.214.109-1.318-.78c-.017-.146.285-1.269 1.863-2.091"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.767 33.713a20.942 20.942 0 1 1 38.527-4.963m-1.056 3.053a21.03 21.03 0 0 1-7.346 8.904a21.53 21.53 0 0 1-10.661 3.618"></svg:path>`,
})
export class ArcticonsMobileLegendsBangBangAlt2Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMobileManagerIcon],svg[arcticons-mobile-manager-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 43.5c1.704 0 15.24-7.82 15.24-16.943V6.505C35.228 6.505 24 4.5 24 4.5S12.671 6.505 8.76 6.505v20.052C8.76 35.68 22.297 43.5 24 43.5"></svg:path><svg:circle cx="24" cy="33.675" r="2.707" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24.702 30.968l3.108-11.129m-13.735 1.504c0-5.514 4.41-9.925 9.925-9.925s9.925 4.411 9.925 9.925M24 11.518v2.406m-9.925 7.419h2.406m17.444 0h-2.406"></svg:path><svg:circle cx="24" cy="33.675" r="2.707" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsMobileManagerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMobilePasmoIcon],svg[arcticons-mobile-pasmo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M40.306 37.095a3.194 3.194 0 1 1-3.105 3.942m-20.006-6.554h7.426"></svg:path><svg:ellipse cx="14.662" cy="24.75" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.342" ry="3.272"></svg:ellipse><svg:ellipse cx="15.646" cy="24.75" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.358" ry="2.442"></svg:ellipse><svg:ellipse cx="27.166" cy="24.75" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.342" ry="3.272"></svg:ellipse><svg:ellipse cx="28.151" cy="24.75" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.358" ry="2.442"></svg:ellipse><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.519 7.504a1.6 1.6 0 1 1 1.6 0m.924 6.554l-.924-6.554m-2.706 6.554l1.106-6.554m12.22 30.789l-23.096-.045c-2.849-.006-4.839-2.227-4.891-5.075L4.5 19.603c-.053-2.843 2.409-5.136 5.142-5.143c4-.184 6.707-.36 9.77-.402m3.63 0c4.367-.016 7.062.165 9.128.402c2.83.325 4.962 2.3 5.142 5.142c.14 2.234-.221 5.513-.221 8.88m-2.944 1.373h5.774v8.288h-5.774zm1.88 9.723h2.011m-2.462-8.168v2.763m2.916-2.763v2.763m-1.458-2.763v2.763"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.745 28.473h8.576v12.498h-8.576z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m33.333 28.48l-.013-9.783H8.493v12.425h24.235"></svg:path>`,
})
export class ArcticonsMobilePasmoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMobilePrintIcon],svg[arcticons-mobile-print-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 20.831h39v20.475h-39z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M37.163 41.306V31.069H10.81v10.237m18.483-28.414V6.694H11.604v14.137h24.792v-7.939zm0-6.198l7.103 6.198m-10.516 0H15.573m16.715 3.621H15.573"></svg:path><svg:circle cx="39.461" cy="25.079" r=".75" fill="currentColor"></svg:circle>`,
})
export class ArcticonsMobilePrintIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMobileSuicaIcon],svg[arcticons-mobile-suica-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M37.547 32.772v-6.46h-5.035v8.147h3.535"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.995 32.313a14.77 14.77 0 0 1-18.714 4.019a14.77 14.77 0 0 1-6.973-17.826a14.773 14.773 0 0 1 28.74 4.95"></svg:path><svg:circle cx="10.678" cy="23.552" r="2.319" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="27.461" cy="21.856" r="2.319" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:ellipse cx="19.387" cy="25.671" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4.426" ry="3.091" transform="rotate(-4.031 19.387 25.672)"></svg:ellipse><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.743 25.882c1.068.792 4.956.31 5.5-.399m8.803-2.002h8.002v9.469c-2.486-.625-3.53.533-2.89 1.702c.512.933 1.475 1.01 2.796 2.652h-7.908zm8.002 9.469c2.254.608 3.91 2.288 4.35 3.882c.525 1.906-1.112 2.707-1.823 2.616c-1.918-.245-1.795-1.167-2.62-2.144m-1.408-8.083l-5.035 2.54"></svg:path>`,
})
export class ArcticonsMobileSuicaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMobileTrackerFreeClientIcon],svg[arcticons-mobile-tracker-free-client-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.5 24v14.5c0 2.216-1.784 4-4 4H24M5.5 24V9.5c0-2.216 1.784-4 4-4H24"></svg:path><svg:circle cx="24" cy="24" r="18.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.004 31.978V16.004L24 31.996l7.996-15.968v15.968"></svg:path>`,
})
export class ArcticonsMobileTrackerFreeClientIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMobilempkIcon],svg[arcticons-mobilempk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.54 39.076h4.742V43.5H8.54zm26.178 0h4.742V43.5h-4.742zM7.29 10.992h1.202v7.934a2.434 2.434 0 0 1-2.405-2.462v-4.241A1.22 1.22 0 0 1 7.29 10.99m33.42.002h-1.202v7.934a2.434 2.434 0 0 0 2.405-2.462v-4.241a1.22 1.22 0 0 0-1.202-1.232ZM24 4.5c-5.511 0-15.46.856-15.46 3.097v31.479h30.921V7.596C39.461 5.357 29.439 4.5 24 4.5m.024 4.232q8.185 0 12.197 1.224a.96.96 0 0 1 .667.926v17.019a.975.975 0 0 1-.975.975H12.135a.975.975 0 0 1-.975-.975V10.882a.96.96 0 0 1 .667-.926q4.014-1.224 12.197-1.224m-10.435 22.77a2.502 2.502 0 0 1 0 5h0a2.465 2.465 0 0 1-2.429-2.5h0a2.465 2.465 0 0 1 2.429-2.5m20.87 0a2.502 2.502 0 0 1 0 5h0a2.465 2.465 0 0 1-2.428-2.5h0a2.465 2.465 0 0 1 2.429-2.5Z"></svg:path>`,
})
export class ArcticonsMobilempkIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMobilepassIcon],svg[arcticons-mobilepass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 43.5c13.355-4.243 16.635-14.368 16.635-19.286V11.309a1.13 1.13 0 0 0-.739-1.062L24.788 4.641a2.27 2.27 0 0 0-1.576 0L8.104 10.246a1.13 1.13 0 0 0-.74 1.063v12.905c0 4.918 3.281 15.043 16.636 19.286"></svg:path><svg:circle cx="24.989" cy="23.54" r="1.904" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="18.773" cy="23.54" r="1.904" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="12.556" cy="23.54" r="1.904" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m29.302 22.419l2.513 2.513l5.533-5.532"></svg:path>`,
})
export class ArcticonsMobilepassIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMobilepayIcon],svg[arcticons-mobilepay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m18.924 19.179l4.332 10.45a21.15 21.15 0 0 1 9.041-2.112a19.24 19.24 0 0 1 8.772 2.112v-10.45a10.3 10.3 0 0 0-3.574-1.408l-2.22-5.577a20.4 20.4 0 0 0-8.825 1.733c-6.28 2.761-7.526 5.252-7.526 5.252"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m32.898 27.531l2.718 6.229a2.365 2.365 0 0 1-1.221 3.114l-12.438 5.428a2.365 2.365 0 0 1-3.113-1.221L7.129 14.24a2.365 2.365 0 0 1 1.222-3.113l12.437-5.429a2.365 2.365 0 0 1 3.114 1.222l2.98 6.828"></svg:path>`,
})
export class ArcticonsMobilepayIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMobilerakerIcon],svg[arcticons-mobileraker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m5.5 26.578l18.652 12.938L42.5 26.578"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.303 20.664L24 31.581l16.697-10.917"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m9.35 16.47l14.928 8.996L38.65 16.47L24.278 8.484z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m16.018 16.975l7.906-4.043l8.058 4.043m-12.2 2.375l4.269-2.375l4.167 2.375"></svg:path>`,
})
export class ArcticonsMobilerakerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMobilfizetesIcon],svg[arcticons-mobilfizetes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.405 5.114a2 2 0 0 0-1.732 1l-3.057 5.295l3.635 6.294L9.616 24l3.635 6.297l-3.635 6.295l3.057 5.295a2 2 0 0 0 1.732 1h19.5a2 2 0 0 0 1.733-1L45.388 25a2 2 0 0 0 0-2l-9.75-16.887a2 2 0 0 0-1.733-1h-19.5z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.25 17.704h7.27L24.155 24l-3.635 6.296h-7.27L9.616 24H2.345"></svg:path>`,
})
export class ArcticonsMobilfizetesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMobiliteitluIcon],svg[arcticons-mobiliteitlu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.338 34.98V13.178l3.419.04l9.27 11.708l8.122-11.872l2.169.018l-.047 22.01c-.07.07-20.546 6.824-20.546 6.824C14.421 43.714 8.68 41.305 8.68 35.9V7.125c0-.315.208-1.678 1.562-1.623c0 0 26.137 1.799 29.08 2.226h0"></svg:path>`,
})
export class ArcticonsMobiliteitluIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMobilityIcon],svg[arcticons-mobility-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.57 24.75c1.07 1.11 1.63 1.43 2.65 1.39l.11-2.5h1.57m-10.63-1.71h5.19c.13-2.21 1.15-3.74 3.8-4l.07 2.29h1.57M7.63 30.59s-2.76.09-2.89-.92a37.3 37.3 0 0 1 .1-9.23c.25-2.06 3.92-2.3 4.91-4.15c.39-.74-.46-2.08.24-2.1c4.28-.16 8.43-.9 11.39-.68a15.9 15.9 0 0 1 7.36 2.32c2.48 1.48 4.49 3.13 6.84 4.39C38.1 21.58 41.15 21.85 43 24c.73.88.72 5.82-.13 6.25a8.5 8.5 0 0 1-4 .45m-.11-.11a3.93 3.93 0 1 1-3.93-3.93a3.93 3.93 0 0 1 3.88 3.94Zm-23.12 0h8.09m-8.15 0a3.93 3.93 0 1 1-3.93-3.93a3.93 3.93 0 0 1 3.88 3.93Z"></svg:path>`,
})
export class ArcticonsMobilityIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMobilitySchweizIcon],svg[arcticons-mobility-schweiz-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.764 21.362a8.12 8.12 0 0 1 8.118-8.119h0A8.12 8.12 0 0 1 24 21.362v13.395M7.764 13.243v21.514M24 21.362a8.12 8.12 0 0 1 8.118-8.119h0a8.12 8.12 0 0 1 8.118 8.119v13.395m-35.736 0h6.527M4.5 13.451l3.264-.208m12.972 21.514h6.528m9.709 0H43.5"></svg:path>`,
})
export class ArcticonsMobilitySchweizIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMobilizonIcon],svg[arcticons-mobilizon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.82 7.67c-.08 2.87-.63 3.55-3.66 3.54c-2.88 0-4-.62-3.94-3.48c0-2.65.78-3.1 3.72-3.15c3.12-.04 3.95.67 3.88 3.09M36 29.16c.05 8.66-4.83 14.54-12.18 14.42c-6.53-.09-11.82-5-11.82-14.42s4.46-14 11.94-14.29S36 20.15 36 29.16"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.28 29.29c0 6-1.49 9.31-5.4 9.29c-3.49 0-5.11-3.4-5.13-9.28c0-6.18 2-9.19 5.23-9.29c3-.1 5.35 2.74 5.31 9.28Z"></svg:path>`,
})
export class ArcticonsMobilizonIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMobilklinikIcon],svg[arcticons-mobilklinik-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.692 32.112c.977 1.727-1.085 4.065-6.692 5.43c0 0-2.007-3.884-.961-6.208s3.03-1.296 2.702 1.679c0 0 3.974-2.629 4.95-.902Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.148 33.846c3.158-8.134 6.293-16.275 9.465-24.403a7.21 7.21 0 0 1 9.548-3.56a6.71 6.71 0 0 1 3.206 8.907c-3.102 7.99-6.182 15.99-9.299 23.976a7.21 7.21 0 0 1-9.548 3.56a6.664 6.664 0 0 1-3.372-8.48m1.768-6.011l-4.64-9.536M19.9 11.95A6.951 6.951 0 1 1 12.95 5a6.95 6.95 0 0 1 6.95 6.95"></svg:path>`,
})
export class ArcticonsMobilklinikIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMobilnyUsosIcon],svg[arcticons-mobilny-usos-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.5 20.48L24 9.54L4.5 20.48L24 31.42z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36.26 24.54v7.04L24 38.46l-12.26-6.88v-7.04"></svg:path>`,
})
export class ArcticonsMobilnyUsosIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMobitechIcon],svg[arcticons-mobitech-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.666 35.653V19.246m4.399-3.794c13.307 3.12 13.396 11.93 13.365 20.201m1.388-13.366c2.245-3.424 7.12-7.17 11.168-7.23m4.228 4.011l.09 16.585"></svg:path><svg:circle cx="6.84" cy="14.688" r="2.341" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="41.16" cy="14.708" r="2.341" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsMobitechIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMobizenIcon],svg[arcticons-mobizen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.475 30.945c-1.217 7.282-11.026 5.507-9.205-2.868L20 19.623c.022-3.87-4.131-2.993-4.211 1.57l-1.092 6.275c-1.525 9.457-11.72 11.249-10.003.734l1.65-9.421c1.616-6.84 16.181-7.17 19.538-5.121c5.792-2.253 19.3-1.616 17.444 5.132l-1.479 8.716c-1.172 10.549-11.652 9.536-9.763 1.389l1.41-9.092c.4-4.245-3.584-3.255-4.141 1.001z"></svg:path>`,
})
export class ArcticonsMobizenIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMobmuplatIcon],svg[arcticons-mobmuplat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="6.03" cy="27.28" r="1.39" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24" cy="24" r="14.21" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="17.82" cy="6.83" r="1.39" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="8.13" cy="14.92" r="1.39" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="12.23" cy="38.04" r="1.39" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="35.81" cy="38.04" r="1.39" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="42.09" cy="27.19" r="1.39" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="39.96" cy="14.88" r="1.39" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="30.24" cy="6.84" r="1.39" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24 24l12.24-7.12"></svg:path>`,
})
export class ArcticonsMobmuplatIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMobvoiIcon],svg[arcticons-mobvoi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m23.663 7.108l-8.015 3.736v27.36c0 .35-.34.598-.673.49l-6.618-2.155V8.562L17.074 4.5l6.561 2.142a.25.25 0 0 1 .028.466"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.628 19.873v14.093c0 .318-.31.544-.613.446l-7.836-2.54a.26.26 0 0 1-.176-.242V17.536c0-.318.31-.544.613-.446l7.836 2.54a.26.26 0 0 1 .176.243"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M39.643 11.837v27.886l-8 3.735a.44.44 0 0 1-.626-.398V15.796l-11.195-3.631a.273.273 0 0 1-.031-.507l7.917-3.69l3.31 1.073z"></svg:path>`,
})
export class ArcticonsMobvoiIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMobvoiHealthIcon],svg[arcticons-mobvoi-health-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.272 42.5a6.99 6.99 0 0 0 6.992-6.992h0V24.567a6.99 6.99 0 0 0-6.992-6.984H13.331a6.99 6.99 0 0 0-6.988 6.984a6.99 6.99 0 0 0 6.988 6.996h3.942V35.5a6.99 6.99 0 0 0 6.988 6.995h.011zm6.992-12.083h3.401c3.86 0 6.99-3.128 6.992-6.988a6.99 6.99 0 0 0-6.992-6.991h-3.938v-3.946A6.99 6.99 0 0 0 23.735 5.5h-.003h0a6.99 6.99 0 0 0-6.992 6.992v5.09"></svg:path>`,
})
export class ArcticonsMobvoiHealthIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMobywatelIcon],svg[arcticons-mobywatel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 43.47c1.69 0 15.25-7.77 15.25-16.94v-20c-4 0-15.25-2-15.25-2s-11.26 2-15.25 2v20c0 9.17 13.56 16.94 15.25 16.94"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.23 28.204v-12.6h0a3.586 3.586 0 0 0-3.587-3.56M24.23 23.08a6.803 6.803 0 0 0 6.8-6.8"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.432 12.878a6.803 6.803 0 0 0-6.802 6.802m5.305-4.233h4.404m-4.693 2.416h4.405m-4.844 2.417h4.405m-6.079 2.416h4.405m-5.88 1.119l3.115 3.114m-5.655-2.096l3.115 3.115m-3.313-.018l3.965 3.964m1.42 1.419l1.323 1.324m-3.188-1.001l-1.021 1.022m3.521-2.723h1.446m-8.64-1.811l1.2 1.2m-1.2 1l1.2 1.2m-1.2 1l1.2 1.2M24.23 23.08a6.803 6.803 0 0 1-6.803-6.8"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.027 12.878a6.803 6.803 0 0 1 6.801 6.802m-5.304-4.233h-4.405m4.693 2.416h-4.405m4.844 2.417h-4.405m6.079 2.416H13.52m5.88 1.119l-3.115 3.114m5.655-2.096l-3.114 3.115m3.312-.018l-3.965 3.964m-1.419 1.419l-1.324 1.324m3.187-1.001l1.023 1.022m-3.521-2.723h-1.446m8.64-1.811l-1.2 1.2m1.2 1l-1.2 1.2m1.2 1l-1.2 1.2"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="M24 10.36V8.202m-1.643 2.149l-1.08-1.87m4.366 1.87l1.08-1.87"></svg:path>`,
})
export class ArcticonsMobywatelIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsModalisIcon],svg[arcticons-modalis-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24.353" cy="24.05" r="9.578" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 6.81c16.13-.12 16.13-.211 18.147 5.142M42.5 41.19c-16.13.12-16.13.211-18.147-5.142"></svg:path>`,
})
export class ArcticonsModalisIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsModanisaIcon],svg[arcticons-modanisa-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.026 20.697h-3.462L10 24l2.564 3.303h3.462l-2.448 2.448l.523 4.148l4.148.523l2.448-2.448v3.462L24 38l3.303-2.564v-3.462l2.448 2.448L33.9 33.9l.523-4.149l-2.448-2.448h3.462L38 24l-2.564-3.303h-3.462l2.448-2.448L33.9 14.1l-4.149-.523l-2.448 2.448v-3.462L24 10l-3.303 2.564v3.472l-2.448-2.458l-4.148.523l-.523 4.148z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m39.203 39.203l-2.655.087l-.603 2.587l-2.62-.432l-1.097 2.419l-2.486-.935l-1.547 2.158l-2.256-1.402L24 45.5l-1.938-1.815l-2.256 1.402l-1.547-2.158l-2.486.935l-1.097-2.42l-2.62.433l-.604-2.587l-2.654-.087l-.088-2.655l-2.586-.603l.432-2.62l-2.419-1.097l.935-2.486l-2.158-1.547l1.402-2.256L2.5 24l1.816-1.938l-1.402-2.256l2.158-1.547l-.935-2.486l2.42-1.097l-.433-2.62l2.586-.604l.088-2.654l2.654-.088l.604-2.586l2.62.432l1.097-2.419l2.486.935l1.547-2.158l2.256 1.402L24 2.5l1.94 1.816l2.255-1.402l1.547 2.158l2.486-.935l1.097 2.42l2.62-.433l.604 2.586l2.654.088l.087 2.654l2.587.604l-.432 2.62l2.419 1.097l-.935 2.486l2.158 1.547l-1.402 2.256L45.5 24l-1.815 1.94l1.402 2.255l-2.158 1.547l.935 2.486l-2.42 1.096l.433 2.62l-2.586.604z"></svg:path>`,
})
export class ArcticonsModanisaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsModel3dIcon],svg[arcticons-model3d-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.1 16.35c.5-13.2 20.7-14.5 22 0c-5.7 2.5-16.8 2-22 0m5.4-8.9l-2.1-3m13.4 3l2.1-3"></svg:path><svg:circle cx="19.1" cy="12.35" r="1.1" fill="none" stroke="currentColor" stroke-miterlimit="10"></svg:circle><svg:circle cx="28.9" cy="12.35" r="1.1" fill="none" stroke="currentColor" stroke-miterlimit="10"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m35.1 16.35l-.2 18.9a19.49 19.49 0 0 1-21.7 0l-.1-18.9"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.6 37.35V42a1.58 1.58 0 0 0 1.6 1.6H20a1.58 1.58 0 0 0 1.6-1.6v-3.4m5.5-.25v3.5a1.58 1.58 0 0 0 1.6 1.6h1.8a1.58 1.58 0 0 0 1.6-1.6v-5m-8.2-15.8l-5.5 2.8l5.5 2.8l5.7-2.8Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.6 23.85v6.3l-5.6 3l-5.5-3v-6.3m5.4 2.8v6.4m-13.7.4H8a1.11 1.11 0 0 1-1.1-1.1v-14a1.11 1.11 0 0 1 1.1-1.1h2.1a1.11 1.11 0 0 1 1.1 1.1v14a1 1 0 0 1-1 1.1m29.8 0h-2.1a1.11 1.11 0 0 1-1.1-1.1v-14a1.11 1.11 0 0 1 1.1-1.1H40a1.11 1.11 0 0 1 1.1 1.1v14a1.11 1.11 0 0 1-1.1 1.1"></svg:path>`,
})
export class ArcticonsModel3dIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsModernWarshipsIcon],svg[arcticons-modern-warships-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M39.754 15.959v4.958l3.212 3.092h.534v-5.454l-2.795-2.795c-.34-.339-.95-.338-.95.199zm-6.296 1.408L43.5 27.408l-.001 5.17h-1.674l-9.087-9.13l-9.088 9.13h-1.674v-5.17l10.041-10.041s.392-.414.72-.414c.329 0 .72.414.72.414zM8.246 32.04v-4.958L5.034 23.99H4.5v5.454l2.795 2.795c.34.339.95.338.95-.199zm6.296-1.408L4.5 20.592l.001-5.17h1.674l9.087 9.13l9.088-9.13h1.674v5.17L15.983 30.633s-.392.414-.72.414c-.329 0-.72-.414-.72-.414z"></svg:path>`,
})
export class ArcticonsModernWarshipsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsModoIcon],svg[arcticons-modo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 42.459V27.022M5.5 5.5L24 32.48L42.5 5.557V42.5"></svg:path>`,
})
export class ArcticonsModoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsModpizzaIcon],svg[arcticons-modpizza-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.68 19.4a3.15 3.15 0 0 0-3.31-3.14a3.27 3.27 0 0 0-3 3.32v2.91a3.15 3.15 0 0 0 3.15 3.14h0a3.15 3.15 0 0 0 3.14-3.14V19.4m-17.82 6.23v-9.37l4.67 9.38l4.68-9.37v9.37m10.69-.01v-9.39h1.59a4.69 4.69 0 0 1 4.69 4.7h0a4.69 4.69 0 0 1-4.69 4.69Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.2 4.86L6.69 11.25V27C6.69 35.44 24 43.5 24 43.5S41.31 35.44 41.31 27V11.25L25.8 4.86a4.68 4.68 0 0 0-3.6 0"></svg:path>`,
})
export class ArcticonsModpizzaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsModsAddonsForMinecraftPeIcon],svg[arcticons-mods-addons-for-minecraft-pe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M37.615 42.295s-.4-.834-1.198-.834s-1.198.834-1.198.834l-1.177-.487s.313-.871-.25-1.435s-1.438-.257-1.438-.257l-.488-1.177s.837-.395.837-1.192s-.834-1.198-.834-1.198l.488-1.177s.87.313 1.434-.251s.251-1.434.251-1.434l1.177-.488s.401.834 1.198.834s1.198-.834 1.198-.834l1.178.488s-.313.87.25 1.434c.565.564 1.438.257 1.438.257l.487 1.177s-.837.395-.837 1.192s.835 1.198.835 1.198l-.488 1.177s-.87-.312-1.434.251c-.564.564-.251 1.435-.251 1.435z"></svg:path><svg:path d="M38.235 37.747a1.818 1.818 0 1 1-3.635 0a1.818 1.818 0 0 1 3.635 0"></svg:path><svg:path d="M43.17 37.747a6.753 6.753 0 1 1-13.505 0a6.753 6.753 0 0 1 13.505 0"></svg:path></svg:g><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m4.83 13.661l17.6 10.161v20.196L4.83 33.857z"></svg:path><svg:path d="m7.03 25.029l2.2 1.27V21.25l2.2 1.27v-2.524l2.2 1.27v5.049l2.2 1.27v-2.524l2.2 1.27v2.524l2.2 1.27v-2.524l2.2 1.27v-5.049l-2.2-1.27l-2.2-1.27l-2.2-1.27l-2.2-1.27l-2.2-1.27l-2.2-1.27l-2.2-1.27l-2.2-1.27v7.573l2.2 1.27z"></svg:path><svg:path d="m22.43 3.5l17.599 10.161l-17.6 10.161l-17.6-10.16zm7.517 36.177l-7.518 4.34V23.823h0l17.6-10.16v18.382"></svg:path><svg:path d="m24.63 32.65l2.2-1.27v-5.05l2.199-1.27v-2.524l2.2-1.27v5.05l2.2-1.271v-2.524l2.2-1.27v2.524l2.2-1.27V19.98l2.2-1.27v-5.048l-2.2 1.27l-2.2 1.27l-2.2 1.27l-2.2 1.27l-2.2 1.27l-2.2 1.27l-2.2 1.27l-2.2 1.27v7.574l2.2-1.27z"></svg:path></svg:g>`,
})
export class ArcticonsModsAddonsForMinecraftPeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsModsMapsSkinsForMinecraftIcon],svg[arcticons-mods-maps-skins-for-minecraft-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.995 10.995a2.3 2.3 0 0 0-.182 3.041C7.7 18.359 4.981 23.836 5 29.442l2.014 2.013c1.043-4.158 3.747-9.036 8.48-12.342l22.11 22.11l3.618-3.619l-22.11-22.11c3.307-4.733 8.186-7.437 12.344-8.48L29.442 5c-5.605-.02-11.082 2.698-15.404 5.812a2.3 2.3 0 0 0-3.043.183"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.336 25.83c.472 4.88 1.868 6.577 2.916 8.034l-1.998 1.998l3.753 3.753l2.004-2.004a16 16 0 0 0 6.2 2.68V43h5.306v-2.572c1.712-.247 3.912-.759 6.616-2.677M25.727 9.397c4.73.45 6.68 1.807 8.137 2.855l1.998-1.998l3.753 3.753l-2.004 2.004a16 16 0 0 1 2.68 6.2H43v5.306h-2.572c-.247 1.712-1 4.266-2.687 6.606"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.47 30.852a11.2 11.2 0 0 0 1.687-5.928c0-6.213-5.037-11.25-11.25-11.25a11.2 11.2 0 0 0-5.528 1.449m-4.269 4.265a11.2 11.2 0 0 0-1.454 5.536c0 6.214 5.037 11.25 11.25 11.25a11.2 11.2 0 0 0 5.95-1.7"></svg:path>`,
})
export class ArcticonsModsMapsSkinsForMinecraftIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMoekeyIcon],svg[arcticons-moekey-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.5 5.5c-5.523 0-10 4.477-10 10v27h11v-26c0-.554.446-1 1-1s1 .446 1 1v26h11v-26c0-.554.446-1 1-1s1 .446 1 1v26h11v-27c0-5.523-4.477-10-10-10a10 10 0 0 0-8.494 4.744A10 10 0 0 0 15.5 5.5"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.5 23c0-.554.446-1 1-1s1 .446 1 1m11 0c0-.554.446-1 1-1s1 .446 1 1m-15 16h-11m24 0h-11m24 0h-11"></svg:path>`,
})
export class ArcticonsMoekeyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMoelistIcon],svg[arcticons-moelist-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.01 9.99H38.9M24.46 5.51v18.71m-11.54-6.96h23.07m-4.42 6.96H43m-21.34 0h5.61v6.58h-5.61zm12.18 0c0 4.31-.81 11.15 5.71 18.27M43 33.81l-9.49 4.58m.43-8.24h3.35m-11.21 6.46C23.49 39 18 41.9 14.54 42.49M5.86 24.16h5.82l2.08 2.08l2-2h1.83c0 5.06.06 9.59-2.64 13.15"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5 41c2.64-2.91 5-6.57 5-16.81"></svg:path>`,
})
export class ArcticonsMoelistIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMoeyIcon],svg[arcticons-moey-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.316 21.181a3.68 3.68 0 0 1 3.682-3.682h0a3.68 3.68 0 0 1 3.683 3.682v6.076m-7.365-9.758v9.758"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.68 21.181a3.68 3.68 0 0 1 3.683-3.682h0a3.68 3.68 0 0 1 3.683 3.682v6.076"></svg:path><svg:circle cx="32.934" cy="30.028" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.934 17.222v8.95"></svg:path>`,
})
export class ArcticonsMoeyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMohafizIcon],svg[arcticons-mohafiz-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="10.989" fill="none" stroke="currentColor" stroke-miterlimit="10"></svg:circle><svg:circle cx="24" cy="24" r="19.049" fill="none" stroke="currentColor" stroke-miterlimit="10"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="m19.869 13.646l.029-5.425l-2.138-1.989m10.371 7.414l-.029-5.425l2.138-1.989"></svg:path><svg:circle cx="24" cy="3.726" r="1.226" fill="none" stroke="currentColor" stroke-miterlimit="10"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="m13.646 28.131l-5.425-.029l-1.989 2.138m7.414-10.371l-5.425.029l-1.989-2.138"></svg:path><svg:circle cx="3.726" cy="24" r="1.226" fill="none" stroke="currentColor" stroke-miterlimit="10"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="m28.131 34.354l-.029 5.425l2.138 1.989m-10.371-7.414l.029 5.425l-2.138 1.989"></svg:path><svg:circle cx="24" cy="44.274" r="1.226" fill="none" stroke="currentColor" stroke-miterlimit="10"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="m34.354 19.869l5.425.029l1.989-2.138m-7.414 10.371l5.425-.029l1.989 2.138"></svg:path><svg:circle cx="44.274" cy="24" r="1.226" fill="none" stroke="currentColor" stroke-miterlimit="10"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.117 27.342a7.642 7.642 0 1 1-10.456-10.459"></svg:path><svg:path fill="currentColor" d="m25.376 18.233l.978 3.008h3.164l-2.56 1.86l.978 3.009l-2.56-1.86l-2.559 1.86l.978-3.009l-2.56-1.86H24.4zm0-1.05a1.05 1.05 0 0 0-.998.725l-.742 2.284h-2.401a1.05 1.05 0 0 0-.617 1.898l1.942 1.412l-.742 2.283a1.05 1.05 0 0 0 1.615 1.173l1.943-1.411l1.942 1.411a1.05 1.05 0 0 0 1.615-1.173l-.742-2.283l1.943-1.412a1.05 1.05 0 0 0-.617-1.898h-2.401l-.742-2.284a1.05 1.05 0 0 0-.998-.725"></svg:path>`,
})
export class ArcticonsMohafizIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMohelaIcon],svg[arcticons-mohela-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.574 20.965v6.07h3.034M8 27.028v-6.063l3.035 6.07l3.034-6.06v6.06m7.33-6.07v6.07m4.021-6.07v6.07m-4.021-3.046h4.021m1.678.011h1.978m1.056 3.035h-3.034v-6.07h3.034"></svg:path><svg:rect width="4.021" height="6.069" x="15.724" y="20.965" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.01" ry="2.01"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M39.334 25.024h-2.689m-.666 2.011l2.011-6.07l2.01 6.07"></svg:path><svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect>`,
})
export class ArcticonsMohelaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMoinCardIcon],svg[arcticons-moin-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.75 34.383v-8h1.3a4.01 4.01 0 0 1 4 4h0a4.01 4.01 0 0 1-4 4zm-7.584 0v-8h2.6a2.7 2.7 0 1 1 0 5.4h-2.6m2.79-.006l2.51 2.606m-8.602-2.7h-3.4m4.3 2.7l-2.6-7.999l-2.7 7.999m.9-2.7h3.5m-6.512 0a2.69 2.69 0 0 1-2.678 2.7h-.022a2.69 2.69 0 0 1-2.7-2.677q0 0 0 0v-2.723a2.69 2.69 0 0 1 2.677-2.7h.023a2.606 2.606 0 0 1 2.602 2.61h0l-.002.09h0m14.281-15.267v8m-19.582 0v-8l4 8l4-8v8m14.722 0v-8l5.3 8v-8m-16.88 5.301a2.65 2.65 0 1 0 5.3 0v-2.7a2.69 2.69 0 0 0-2.678-2.7q0 0 0 0h-.022a2.606 2.606 0 0 0-2.602 2.61h0l.002.09z"></svg:path><svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect>`,
})
export class ArcticonsMoinCardIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMoisesIcon],svg[arcticons-moises-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 27.258h2.02M4.5 33.245h6.624M4.5 14.659c9.05.123 10.64 12.745 19.5 12.745S34.45 14.782 43.5 14.66"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 20.886c7.966.896 8.669 12.455 19.5 12.455s11.534-11.559 19.5-12.455m-2.02 6.372h2.02m-6.624 5.987H43.5"></svg:path>`,
})
export class ArcticonsMoisesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMojA1Icon],svg[arcticons-moj-a1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m32.32 12.642l2.75-1.497v11m-6.745 5.165H19.66m-2.16 6.631L24 14l6.5 20"></svg:path>`,
})
export class ArcticonsMojA1Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMojeidKlIcon],svg[arcticons-mojeid-kl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.473 20.073v15.699c5.306-10.36 12.104-15.238 21.136-15.6"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.306 35.88V12.334h6.424c6.782 0 12.492 4.71 12.492 10.301v2.944c0 5.592-5.71 10.301-12.492 10.301z"></svg:path><svg:circle cx="12.894" cy="14.131" r=".987" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsMojeidKlIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMojeikpIcon],svg[arcticons-mojeikp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 13.458c1.376-3.022 3.636-5.03 6.88-5.801c3.263-.777 6.265-.041 8.746 2.165c3.596 3.195 4.17 7.87 2.42 11.648c-1.353 2.916-3.436 5.298-5.591 7.603c-2.579 2.759-5.344 5.336-8.174 7.839A584 584 0 0 1 24 40.643a592 592 0 0 1-4.28-3.731c-2.83-2.503-5.597-5.08-8.175-7.839c-2.155-2.305-4.239-4.687-5.59-7.603c-1.752-3.778-1.177-8.453 2.419-11.648c2.482-2.206 5.483-2.942 8.746-2.165c3.244.772 5.504 2.779 6.88 5.801m0 0v27.185"></svg:path>`,
})
export class ArcticonsMojeikpIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMojeplikiIcon],svg[arcticons-mojepliki-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.5 13.044H24.77c-1.963-.108-5.931-4.238-8.188-4.238H6.68v-.001a2.176 2.176 0 0 0-2.18 2.171v7.307m6.18 20.912h30.64a2.176 2.176 0 0 0 2.18-2.171V18.283h-27m-12 0v20.912"></svg:path>`,
})
export class ArcticonsMojeplikiIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMojeprahaIcon],svg[arcticons-mojepraha-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.543 17.845c0-.843.69-1.533 1.533-1.533s1.533.69 1.533 1.533v2.453m-3.066-3.985v3.986m3.066-2.454c0-.843.69-1.533 1.533-1.533s1.533.69 1.533 1.533v2.453m3.18.077c-.843 0-1.533-.69-1.533-1.533v-.997c0-.843.69-1.533 1.533-1.533s1.533.69 1.533 1.533v.997c0 .843-.69 1.533-1.533 1.533m3.205-2.6v4.599c0 .843-.69 1.533-1.533 1.533c-.383 0-.767-.153-1.073-.46m7.119-3.839c-.23.46-.767.767-1.303.767c-.844 0-1.533-.69-1.533-1.533v-.997c0-.843.69-1.533 1.533-1.533s1.533.69 1.533 1.533v.537h-3.066M9.5 30.885V22.49h2.728c1.574 0 2.833 1.26 2.833 2.833s-1.26 2.833-2.833 2.833H9.5m7.386-.869c0-1.154.945-2.098 2.099-2.098m-2.099 0v5.561m20.774-1.886c0 1.154-.944 2.099-2.098 2.099s-2.098-.945-2.098-2.099V27.5c0-1.154.944-2.098 2.098-2.098s2.099.944 2.099 2.098"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 30.963c-.42 0-.84-.42-.84-.84v-4.721m-13.075 3.249c0 1.154-.945 2.099-2.099 2.099s-2.098-.945-2.098-2.099v-1.364c0-1.154.944-2.098 2.098-2.098s2.099.944 2.099 2.098"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.424 30.75c-.42 0-.84-.42-.84-.84v-4.72m2.76-2.805v8.394m0-3.462c0-1.154.945-2.099 2.099-2.099s2.098.945 2.098 2.099v3.462m-9.498-14.467"></svg:path><svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect>`,
})
export class ArcticonsMojeprahaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMojevutIcon],svg[arcticons-mojevut-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.6 10.5V15h26.8v4h-8a2 2 0 0 0-2 2v16.5h-4.6v-27z"></svg:path>`,
})
export class ArcticonsMojevutIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMojmIcon],svg[arcticons-mojm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 33.598v-8.586l6.04-6.04h7.432l9.74 9.74l-.388.388h-9.14l-.644.643l4.38 4.38l-8.376 8.377z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.598 5.5h-8.586l-6.04 6.04v7.432l9.74 9.74l.388-.388v-9.14l.643-.644l4.38 4.38l8.377-8.376z"></svg:path>`,
})
export class ArcticonsMojmIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMojoIcon],svg[arcticons-mojo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="7.611" height="18.33" x="7.177" y="14.835" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="3.806" ry="3.806" transform="rotate(30 10.982 24)"></svg:rect><svg:rect width="7.611" height="18.33" x="20.194" y="14.835" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="3.806" ry="3.806" transform="rotate(30 24 24)"></svg:rect><svg:rect width="7.611" height="18.33" x="33.212" y="14.835" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="3.806" ry="3.806" transform="rotate(30 37.018 24)"></svg:rect>`,
})
export class ArcticonsMojoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMojoSportsIcon],svg[arcticons-mojo-sports-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M39.77 33.324v3.729m-1.614-2.797l3.229 1.865m-3.229 0l3.229-1.865"></svg:path><svg:circle cx="39.77" cy="35.189" r="3.729" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.418 24H4.5V9.082l7.459 7.459l7.459-7.459z"></svg:path><svg:circle cx="26.877" cy="16.541" r="7.459" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="26.877" cy="31.459" r="7.459" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.418 31.46a7.46 7.46 0 1 1-14.918 0h7.46V24h7.458z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.915 37.73a30.5 30.5 0 0 1 11.506-7.132c.019-.01.028-.01.047-.018a30.5 30.5 0 0 1 9.846-1.623a30 30 0 0 1 4.717.364"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.42 38.423a24.6 24.6 0 0 1 9.464-5.414c.015-.007.023-.007.038-.014c2.514-.76 5.2-1.025 7.972-1.025c2.337 0 4.502.423 7.257 1.147"></svg:path>`,
})
export class ArcticonsMojoSportsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMoleIcon],svg[arcticons-mole-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.503 9.711a13.703 13.703 0 0 1 20.994 0M18.73 17.887a50 50 0 0 0-14.23.527v24.77c5.675-2.187 12.167-1.673 19.5-.527m5.27-24.77a50 50 0 0 1 14.23.527v24.77c-5.674-2.187-12.167-1.673-19.5-.527"></svg:path><svg:circle cx="24" cy="18.413" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.752 14.115a6.85 6.85 0 0 1 10.496 0M24 23.684v18.973m3.162-11.595h12.122m-31.094 0h12.12m-6.06-6.324v12.648"></svg:path>`,
})
export class ArcticonsMoleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMollyIcon],svg[arcticons-molly-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 2.5A21.5 21.5 0 0 0 8.797 39.203L2.5 45.5H24a21.5 21.5 0 0 0 0-43"></svg:path><svg:circle cx="24" cy="27.546" r="2.364" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24" cy="34.636" r="2.364" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24" cy="20.454" r="2.364" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="14.158" cy="27.546" r="2.364" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="14.158" cy="34.636" r="2.364" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="14.158" cy="20.454" r="2.364" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="33.842" cy="27.546" r="2.364" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="33.842" cy="34.636" r="2.364" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="33.842" cy="20.454" r="2.364" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="14.158" cy="13.364" r="2.364" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="33.842" cy="13.364" r="2.364" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsMollyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMolotovIcon],svg[arcticons-molotov-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M45.5 24A21.5 21.5 0 1 1 24 2.5A21.51 21.51 0 0 1 45.5 24"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.5 18.18c1.59-3.2 4.85-6.7 5.6-6.7s-1.64 9.15-2.8 21c0 0 5.91-17.82 9.53-17.82c1.44 0-1.45 13.88-1.45 13.88s5.9-14.08 9.49-14.08c2.39 0-2.17 13.56-2.09 16.69a11.7 11.7 0 0 0 1.5 5.41m1.28-3.21a24.5 24.5 0 0 1 5.94 1"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.88 36a79 79 0 0 1 13.56-2.52"></svg:path>`,
})
export class ArcticonsMolotovIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMomoIcon],svg[arcticons-momo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="34.571" cy="13.429" r="7.929" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 21.357V9.466c0-1.985 1.851-3.964 3.965-3.964c2.119 0 3.965 1.978 3.965 3.964v11.891"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.429 9.465c0-1.985 1.85-3.964 3.964-3.964c2.119 0 3.965 1.978 3.965 3.964v11.891M5.5 42.5V30.608c0-1.985 1.85-3.965 3.964-3.965c2.119 0 3.965 1.979 3.965 3.965V42.5m0-11.892c0-1.985 1.85-3.965 3.964-3.965c2.119 0 3.965 1.979 3.965 3.965V42.5"></svg:path><svg:circle cx="34.571" cy="34.571" r="7.929" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsMomoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMomoRootCheckerIcon],svg[arcticons-momo-root-checker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M40.851 37.283c-3.924 5.144-9.911 8.154-16.394 8.217h-.452c-6.51-.002-12.886-3.077-16.856-8.217M23.666 2.5h.645c7.11.056 14.042 3.904 17.803 9.928c2.133 3.236 3.256 7.089 3.386 10.95v1.137c-.126 4.496-1.692 8.929-4.446 12.49c-.29-1.759-.434-3.546-.905-5.273c-1.006-3.882-2.795-7.754-5.981-10.328c-2.813-2.325-6.535-3.352-10.15-3.235c-3.671-.121-7.45.94-10.282 3.332c-3.238 2.69-5.04 6.695-5.987 10.712c-.4 1.601-.59 3.241-.74 4.882a21.5 21.5 0 0 1-4.51-12.58v-1.12c.142-6.678 3.623-13.195 9.148-16.973c3.468-2.524 7.743-3.83 12.018-3.922Zm-6.14 25.615c-1.267.54-1.745 2.22-1.3 3.45c.285 1.19 1.683 2.092 2.852 1.51c1.698-.83 1.844-3.42.486-4.622c-.543-.505-1.364-.522-2.039-.338Zm11.933-.02c-1.038.412-1.631 1.602-1.531 2.683c-.046 1.378 1.305 2.832 2.74 2.39c1.944-.622 2.226-3.612.643-4.776c-.5-.448-1.238-.435-1.852-.296"></svg:path>`,
})
export class ArcticonsMomoRootCheckerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMomoxIcon],svg[arcticons-momox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.113 17.03s4.442-4.831 10.974-4.954s12.542 5.871 12.41 11.68c-.13 5.81-4.572 12.17-12.28 12.17s-10.974-4.832-10.974-4.832s-3.135 2.263-6.401 2.263c-1.794 0-4.77-1.076-6.794-2.966c-1.66-1.55-2.577-3.659-2.547-6.084c.065-5.382 4.397-8.561 7.999-9.234c1.522-.285 3.582-.07 4.704.284c1.669.527 2.909 1.673 2.909 1.673m21.038 4.221l-4.072 5.498m4.072 0l-4.072-5.498"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.175 23.287c0-1.12.916-2.036 2.036-2.036h0c1.12 0 2.036.917 2.036 2.036v3.36m-4.072-5.396v5.498m4.072-3.462c0-1.12.916-2.036 2.036-2.036h0c1.12 0 2.036.917 2.036 2.036v3.36m1.476-3.309c0-1.12.917-2.036 2.036-2.036s2.037.916 2.037 2.036v1.324c0 1.12-.917 2.036-2.037 2.036s-2.036-.916-2.036-2.036z"></svg:path><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M22.36 23.287c0-1.12.916-2.036 2.036-2.036h0c1.12 0 2.036.917 2.036 2.036v3.36m-4.072-5.396v5.498"></svg:path><svg:path d="M26.432 23.287c0-1.12.916-2.036 2.036-2.036h0c1.12 0 2.036.917 2.036 2.036v3.36"></svg:path></svg:g><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.935 23.338c0-1.12.916-2.036 2.036-2.036s2.036.916 2.036 2.036v1.324c0 1.12-.916 2.036-2.036 2.036s-2.036-.916-2.036-2.036z"></svg:path>`,
})
export class ArcticonsMomoxIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMonCpfIcon],svg[arcticons-mon-cpf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.914 28.388V19.5l4.5 9l4.5-9v9m9.472-3.091a3.026 3.026 0 0 1-3.038 3.037h0c-1.687 0-3.037-1.35-3.037-2.925v-3.037c0-1.687 1.35-3.036 3.037-2.923h0c1.687 0 2.923 1.348 2.923 2.923h0M32.587 24h2.924m-2.924 4.5v-9h4.499"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 5.5h29c2.216 0 4 1.784 4 4v29c0 2.216-1.784 4-4 4h-29c-2.216 0-4-1.784-4-4v-29c0-2.216 1.784-4 4-4"></svg:path>`,
})
export class ArcticonsMonCpfIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMonEleclercIcon],svg[arcticons-mon-eleclerc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 2.5c11.873 0 21.5 9.627 21.5 21.5S35.873 45.5 24 45.5S2.5 35.873 2.5 24S12.127 2.5 24 2.5"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.023 11.774C24.73 7.8 32.578 9.207 36.55 14.915s2.566 13.555-3.142 17.528q-.17.119-.344.23"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.798 14.361h8.909v2.952q-1.54.457-1.541 2.089v13.18c6.06.156 7.17-.484 7.902-2.273h1.763v5.63H13.8v-2.835c.967-.51 1.62-1.476 1.685-2.795V19.402q-.066-1.632-1.686-2.09z"></svg:path>`,
})
export class ArcticonsMonEleclercIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMonEspaceSantIcon],svg[arcticons-mon-espace-sant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.508 42.5V12.363c.207-7.678 11.259-10.437 13.98 0v12.81m0-12.81c1.188-8.743 13.784-9.55 14.223 0v12.81l8.78.01"></svg:path>`,
})
export class ArcticonsMonEspaceSantIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMondaycomIcon],svg[arcticons-mondaycom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="39.038" cy="30.84" r="4.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.75 12.763a4.5 4.5 0 0 0-2.827 1.97L5.171 28.415a4.5 4.5 0 0 0 7.582 4.851v-.001l8.752-13.682a4.5 4.5 0 0 0-1.364-6.216l-.001-.001a4.5 4.5 0 0 0-3.39-.603m15.036 0a4.5 4.5 0 0 0-2.824 1.97L20.21 28.415a4.5 4.5 0 0 0 7.58 4.85l8.754-13.682a4.5 4.5 0 0 0-1.365-6.216l-.002-.001a4.5 4.5 0 0 0-3.39-.604"></svg:path>`,
})
export class ArcticonsMondaycomIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMondialRelayIcon],svg[arcticons-mondial-relay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m26.72 16.427l-.035 6.474c-4.194-.546-8.185 1.01-8.185 5.548V38.83l-7.235 4.67V28.448c0-7.163 5.869-13.614 15.456-12.022m3.373-.249h5.702a.94.94 0 0 1 .939.939h0v5.619c0 .518-.42.938-.939.938h-5.702a.94.94 0 0 1-.938-.938h0v-5.62c0-.517.42-.938.938-.938q0 0 0 0M19.961 4.5a4.3 4.3 0 0 1 4.312 4.288h0c0 2.376-1.924 4.3-4.312 4.3a4.31 4.31 0 0 1-4.312-4.3c0-2.364 1.936-4.288 4.312-4.288"></svg:path>`,
})
export class ArcticonsMondialRelayIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMondlyLanguagesIcon],svg[arcticons-mondly-languages-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.076 6.187c-10.004 0-18.113 7.532-18.113 16.822c0 5.336 2.683 10.082 6.855 13.164v4.774a.68.68 0 0 0 1.004.598L18.5 39.01c1.758.528 3.629.82 5.576.82c10.004 0 18.114-7.531 18.114-16.822S34.08 6.187 24.075 6.187"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.336 23.178c2.689.103 6.982 1.766 7.543 4.345c.41 1.89-5.047 3.926-4.795 7.991c-2.663-1.318-3-3.449-3.056-4.598s-2.13-2.692-1.935-4.094s1.178-2.972-.672-4.177c1.29.533 1.963.496 2.915.533"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.42 22.645c-1.471-.673-1.401-1.402-.967-2.089s1.64.28 2.426.294s2.671-2.817 3.782-3.378s2.19-1.08 1.643-2.229s-2.383-.757-3.14-1.234s-.968-1.99-1.332-2.102s-3.677 2.78-4.963 5.369c-1.051 2.117-2.145 3.687-1.135 4.794s1.864-.266 3.687.575Zm21.8-.841s2.944 3.266 3.434 1.36c1.6-6.22-5.397-11.23-6.252-11.145s-2.874.672-3.07 1.387s1.472 1.192 1.514 1.739s-1.935.897-3.028 1.304s-1.276 1.682-1.01 2.144s1.473-.574 2.356-.616s1.948.518 2.803.546s.954-1.009 1.85-.7s.463 1.794-1.008 2.214s-2.117-.553-3.52-.532c-1.815.027-3.924 1.009-3.77 3.406s4.135 1.402 4.612 2.566s.322 4.64 1.164 5.86s2.621 1.331 3.392-.59s-.196-2.915.477-3.869s3.133-2.253 1.829-3.515M18.345 12.465c.48-.686 1.277-1.515 2.016-1.515s1.134.375 1.704.375s1.921-.29 3.167-.29s1.499.738.401 1.683s-2.513 1.689-3.297 1.689s-1.268-3.34-1.975-3.457"></svg:path>`,
})
export class ArcticonsMondlyLanguagesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMonefyIcon],svg[arcticons-monefy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M39.523 23.115v-4.4a1.003 1.003 0 0 0-1.004-1.003H9.553"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.705 14.2h-4.95A2.254 2.254 0 0 0 5.5 16.454h0v24.022a1.93 1.93 0 0 0 1.93 1.93h30.162a1.93 1.93 0 0 0 1.93-1.93v-4.44m2.978 3.93V16.98a2.78 2.78 0 0 0-2.78-2.78h-1.65"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.512 33.423a3.843 3.843 0 0 1 0-7.687m0 7.687h4l2.955-1.817m-6.955-5.87h4l2.955-1.816m-5.285-6.39l-2.377-6.134l-15.424 6.226m12.882-5.46l-4.984-6.568l-16.076 11.902"></svg:path><svg:circle cx="35.161" cy="29.579" r=".634" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsMonefyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMoneroIcon],svg[arcticons-monero-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.15 32.26h8.08V15.74L24 28.5l11.76-12.76v16.52h8.09"></svg:path><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsMoneroIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMonerujoIcon],svg[arcticons-monerujo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.65 44a7.47 7.47 0 0 0 7.49-7.75V19.74c0-3.16-3.94-6.93-7.88-7s-7.88 3.73-7.88 7.13c0-3.36-3.75-7.21-7.58-7.28c-4-.09-8.08 3.37-8.08 7.14v15.7m15.66.01v-15.7M7.72 12.69v7"></svg:path><svg:circle cx="39.13" cy="6.48" r="1.54" fill="none" stroke="currentColor" stroke-miterlimit="10"></svg:circle>`,
})
export class ArcticonsMonerujoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMoneseIcon],svg[arcticons-monese-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 23.986L11.936 10.762C9.658 8.265 5.5 9.877 5.5 13.257v21.457c0 3.38 4.158 4.992 6.436 2.495zm0 0l12.063-13.224c2.279-2.497 6.437-.885 6.437 2.495v21.457c0 3.38-4.158 4.992-6.437 2.495z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.5 14.392L26.136 37.709a2.61 2.61 0 0 1-4.273 0L5.5 14.392"></svg:path>`,
})
export class ArcticonsMoneseIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMonetaSmartBankaIcon],svg[arcticons-moneta-smart-banka-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.186 28.186L42.5 42.5v-37l-37 37v-37L24 24"></svg:path>`,
})
export class ArcticonsMonetaSmartBankaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMoneyLoverIcon],svg[arcticons-money-lover-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 19.952a8 8 0 0 0 8 8h21a8 8 0 0 0 8-8"></svg:path><svg:circle cx="14.523" cy="31.774" r="1.804" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="33.477" cy="31.774" r="1.804" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:ellipse cx="23.836" cy="35.957" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="5.686" ry="4.52"></svg:ellipse><svg:circle cx="21.184" cy="35.797" r=".967" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="26.841" cy="35.797" r=".967" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.883 21.913H33.48m-3.439 0a7.536 7.536 0 1 0-11.72 0z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.623 11.39H24.41c-.765 1.727-2.147 3.082-3.842 3.743v.462h2.018v6.319h3.037z"></svg:path>`,
})
export class ArcticonsMoneyLoverIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMoneyManagerIcon],svg[arcticons-money-manager-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.072 20.726a12.5 12.5 0 0 1 3.647-5.67c-.932-.745 0-5.376 0-5.376s3.726 1.65 4.392 2.422c0 0 2.874-3.487 11.206-3.487S43.5 15.057 43.5 23.654s-6.228 11.339-6.228 11.339a20 20 0 0 1-1.491 4.392H32.48a21 21 0 0 1-1.41-2.529s-2.635.32-4.525.32a23 23 0 0 1-3.966-.426a6.4 6.4 0 0 1-.932 2.635h-3.593c-1.118-.958-1.677-3.966-1.677-3.966S7.327 31.32 5.41 28.87c-1.039-1.943-.906-6.255-.906-6.255a7.94 7.94 0 0 1 3.567-1.89"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.544 13.779a11.55 11.55 0 0 1 7.347-2.156a13.2 13.2 0 0 1 7.985 2.529"></svg:path><svg:circle cx="11.612" cy="21.285" r=".75" fill="currentColor"></svg:circle>`,
})
export class ArcticonsMoneyManagerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMoneyManagerKtwappsIcon],svg[arcticons-money-manager-ktwapps-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24.437 11.219l-2.649-4.78l-13.092 8.456m26.321 0l-4.288-7.74l-11.984 7.74m16 13.675a2.047 2.047 0 1 1-2.045-2.047h0c1.13 0 2.045.916 2.045 2.047m-2.54 5.804c-3.23 0-5.831-2.568-5.831-5.757s2.6-5.756 5.832-5.756l9.127-.097c.648 0 1.168.52 1.168 1.166v9.18c0 .647-.52 1.167-1.167 1.167zm7.825-.085v4.238a3.026 3.026 0 0 1-3.019 3.034H8.532A3.026 3.026 0 0 1 5.5 38.543V17.927a3.026 3.026 0 0 1 3.02-3.033h28.477a3.026 3.026 0 0 1 3.033 3.02v4.864"></svg:path>`,
})
export class ArcticonsMoneyManagerKtwappsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMoneybackIcon],svg[arcticons-moneyback-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M32.655 32.065c-.032.146-10.78.584-10.78-8.172m-5.647 6.663s10.716-1.436 11.906 7.827"></svg:path><svg:path d="M21.875 23.893a6.77 6.77 0 0 1-6.768 6.768h0a6.768 6.768 0 1 1 6.768-6.768m17.689-13.61a5.783 5.783 0 1 1-11.566 0a5.783 5.783 0 0 1 11.566 0m.096 27.434a5.783 5.783 0 0 1-5.782 5.783h0a5.783 5.783 0 1 1 5.783-5.783"></svg:path><svg:path d="M16.348 17.24c.032.146 10.577 1.657 11.723-7.875m5.709 6.701s-11.905-.498-11.905 7.827"></svg:path></svg:g>`,
})
export class ArcticonsMoneybackIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMoneyboxIcon],svg[arcticons-moneybox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:circle cx="24" cy="22" r="9" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15 42.5a9 9 0 1 1 18 0"></svg:path>`,
})
export class ArcticonsMoneyboxIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMoneybusterIcon],svg[arcticons-moneybuster-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.92 33.94a6.86 6.86 0 0 0 3.65.86h3.2a5.41 5.41 0 0 0 5.39-5.4h0a5.4 5.4 0 0 0-5.39-5.4h-3.54a5.4 5.4 0 0 1-5.39-5.4h0a5.4 5.4 0 0 1 5.39-5.4h3.2a7.36 7.36 0 0 1 3.23.63M24 13.2v-2.7m0 27v-2.7M8.8 39.2L39.2 8.8"></svg:path>`,
})
export class ArcticonsMoneybusterIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMoneycontrolIcon],svg[arcticons-moneycontrol-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.618 22.092c0-2.097 1.605-3.797 3.586-3.797h0c1.98 0 3.586 1.7 3.586 3.796v6.264m-7.173-10.059v10.059m7.173-6.263c0-2.097 1.605-3.797 3.586-3.797h0c1.98 0 3.586 1.7 3.586 3.796v6.264"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.379 14.536V34.99c0 .744.566 1.138 1.276.919c2.724-.839 9.468-2.536 16.93-1.559c.737.097 1.914.355 2.64.518c9.584 2.158 14.933-.032 17.06-1.31c.637-.383 1.093-1.385 1.093-2.129V12.755c0-.743-.566-1.139-1.279-.928c-2.733.808-9.51 2.37-17.061.785c-.728-.153-1.899-.44-2.629-.58c-8.354-1.606-14.314-.154-16.775.673c-.705.237-1.255 1.087-1.255 1.83"></svg:path>`,
})
export class ArcticonsMoneycontrolIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMoneyhubIcon],svg[arcticons-moneyhub-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.25 4.844a4 4 0 0 0-3.465 2L3.035 22a4 4 0 0 0 0 4l8.75 15.156a4 4 0 0 0 3.465 2h17.5a4 4 0 0 0 3.465-2L44.965 26a4 4 0 0 0 0-4l-8.75-15.156a4 4 0 0 0-3.465-2zm-7.84 9.578l33.18 19.156"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M40.59 14.422L24 24V4.844"></svg:path>`,
})
export class ArcticonsMoneyhubIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMoneytrackerIcon],svg[arcticons-moneytracker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="19.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.135 31.36a5.48 5.48 0 0 0 4.6 2.07h2.76a4.6 4.6 0 0 0 0-9.2h-2.99a4.6 4.6 0 1 1 0-9.2h2.76c2.07 0 3.45.46 4.6 2.07m-5.98-4.6v23"></svg:path>`,
})
export class ArcticonsMoneytrackerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMoneyviewIcon],svg[arcticons-moneyview-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 33.413c1.923-4.698 5.916-13.845 5.916-13.845l6.166 14.015l8.39-19.456L38.5 33.874"></svg:path>`,
})
export class ArcticonsMoneyviewIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMoneywalletIcon],svg[arcticons-moneywallet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="39" height="31" x="4.5" y="8.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.34 16.8a3.6 3.6 0 0 0-3.59 3.6h0a3.6 3.6 0 0 0 3.59 3.6h1.22m0 0h1.22a3.59 3.59 0 0 1 3.59 3.59v.01h0a3.59 3.59 0 0 1-3.58 3.6h-.01M24 18c-1-.83-2.06-1.21-4.47-1.21h-1.19M15.09 30c1 .83 2.07 1.21 4.47 1.21h1.22M19.56 33V15m16.79 5.4h7.15v7.2h-7.15a2.85 2.85 0 0 1-2.85-2.85v-1.5a2.85 2.85 0 0 1 2.85-2.85"></svg:path><svg:circle cx="36.47" cy="24" r=".8" fill="currentColor"></svg:circle>`,
})
export class ArcticonsMoneywalletIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMonicaIcon],svg[arcticons-monica-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M40.5 24c0 7.906-7.385 14.315-16.495 14.315c-9.11.005-16.499-6.4-16.505-14.306V24c0-7.906 7.385-14.314 16.495-14.314h.007c9.11-.002 16.496 6.405 16.498 14.31zm-7.437-2.75l-4.009 4.04l5.232 3.235M16.68 20.988V28.8"></svg:path><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsMonicaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMonitoIcon],svg[arcticons-monito-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.128 4.5h7.57a13.101 13.101 0 0 1 0 26.202h-7.57m7.569 0L29.467 43.5m-12.77-39h22.176M9.127 17.601h29.746"></svg:path>`,
})
export class ArcticonsMonitoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMonkIcon],svg[arcticons-monk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.5 42.5H18.23L5.5 29.77V5.5h29.928l7.072 7.072z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.008 30.008h-5.651l-6.365-6.365v-5.651h12.016zM17.992 17.992H5.5"></svg:path>`,
})
export class ArcticonsMonkIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMonoIcon],svg[arcticons-mono-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 42.5A9.25 9.25 0 0 0 24 24ZM24 24a9.25 9.25 0 0 1 0-18.5Zm18.5 0A9.25 9.25 0 0 0 24 24ZM24 24a9.25 9.25 0 0 1-18.5 0Z"></svg:path>`,
})
export class ArcticonsMonoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMonobankIcon],svg[arcticons-monobank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 23.35a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v3.3m-4-5.3v5.3m4-3.3a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v3.3m5 0a2 2 0 0 1-2-2v-1.3a2 2 0 1 1 4 0v1.3a2 2 0 0 1-2 2m14 0a2 2 0 0 1-2-2v-1.3a2 2 0 1 1 4 0v1.3a2 2 0 0 1-2 2m-5 0v-3.3a2 2 0 1 0-4 0m0 3.3v-5.3"></svg:path>`,
})
export class ArcticonsMonobankIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMonochromaticIcon],svg[arcticons-monochromatic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 5.5V24l18.5 18.5v-37zm0 37V24L5.5 42.5z"></svg:path>`,
})
export class ArcticonsMonochromaticIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMonochromeIcon],svg[arcticons-monochrome-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M4.5 21.809c0-3.54 2.621-6.411 5.854-6.411h27.292c3.233 0 5.854 2.87 5.854 6.41l-11.917 7.715z"></svg:path><svg:path d="M10.354 9.602h27.292c3.233 0 5.854 2.63 5.854 5.875v17.046c0 3.245-2.621 5.875-5.854 5.875H10.354c-3.233 0-5.854-2.63-5.854-5.875V15.477c0-3.245 2.621-5.875 5.854-5.875"></svg:path></svg:g>`,
})
export class ArcticonsMonochromeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMonoclesBrowserIcon],svg[arcticons-monocles-browser-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.005 29.023s1.874-1.47 3.021-.909c3.847 1.881 5.53 7.56 13.556 3.215c-5.478 9.967-14.201 5.72-16.577 2.231c-2.375 3.489-11.098 7.736-16.576-2.23c8.026 4.343 9.709-1.335 13.556-3.216c1.147-.56 3.02.909 3.02.909m18.735-.66v-6.9"></svg:path><svg:circle cx="33.53" cy="17.247" r="5.224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.261 28.363v-6.9"></svg:path><svg:circle cx="14.47" cy="17.247" r="5.224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="5.262" cy="17.247" r=".75" fill="currentColor"></svg:circle><svg:circle cx="42.74" cy="17.247" r=".75" fill="currentColor"></svg:circle>`,
})
export class ArcticonsMonoclesBrowserIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMonoclesChatIcon],svg[arcticons-monocles-chat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.004 27.816s1.342-1.052 2.164-.65c2.756 1.347 3.96 5.414 9.71 2.302c-3.924 7.14-10.172 4.097-11.874 1.598c-1.701 2.5-7.95 5.541-11.873-1.598c5.749 3.112 6.954-.955 9.71-2.303c.821-.401 2.163.651 2.163.651"></svg:path><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M37.423 27.343v-4.941"></svg:path><svg:circle cx="30.826" cy="19.381" r="3.742" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="37.423" cy="19.381" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.578 27.343v-4.941"></svg:path><svg:circle cx="17.174" cy="19.381" r="3.742" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="10.578" cy="19.381" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.15 34.36L2.5 45.5l11.14-2.65"></svg:path>`,
})
export class ArcticonsMonoclesChatIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMonoclesmailIcon],svg[arcticons-monoclesmail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.999 28.21s2.266-1.798 3.653-1.112c4.651 2.303 6.686 9.255 16.39 3.936c-6.623 12.202-17.17 7.003-20.043 2.732c-2.871 4.27-13.418 9.47-20.041-2.732c9.704 5.319 11.738-1.633 16.39-3.936c1.387-.686 3.651 1.113 3.651 1.113Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.53 31.187V11.389a2 2 0 0 0-2-2H6.47v.03a2 2 0 0 0-2 2V31.24m35.21-18.001L24 24.779L8.32 13.239"></svg:path>`,
})
export class ArcticonsMonoclesmailIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMonoclesmailAltIcon],svg[arcticons-monoclesmail-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.497 10.73A1.997 1.997 0 0 0 4.5 12.727h0v22.576A1.997 1.997 0 0 0 6.497 37.3h35.006a1.997 1.997 0 0 0 1.997-1.997h0V12.697a1.997 1.997 0 0 0-1.997-1.996H6.497ZM43.5 12.697L24 26.067L4.5 12.727"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 26.043s1.87-1.467 3.016-.908c3.841 1.878 5.522 7.548 13.535 3.21c-5.47 9.952-14.18 5.712-16.552 2.228c-2.371 3.483-11.08 7.724-16.55-2.228c8.014 4.338 9.694-1.332 13.535-3.21c1.145-.559 3.015.908 3.015.908"></svg:path>`,
})
export class ArcticonsMonoclesmailAltIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMonoicIconPackIcon],svg[arcticons-monoic-icon-pack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.5 29.488V18.5l5.5 8.25l5.5-8.233V29.5h1.313"></svg:path><svg:circle cx="24" cy="24" r="11.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="34.709" cy="13.291" r="3.52" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsMonoicIconPackIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMonoicSqBlackIcon],svg[arcticons-monoic-sq-black-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.5 29.488V18.5l5.5 8.25l5.5-8.233V29.5h1.313"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.5 13.5h-15a2 2 0 0 0-2 2v17a2 2 0 0 0 2 2h17a2 2 0 0 0 2-2v-15"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M37.5 9.5h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1"></svg:path>`,
})
export class ArcticonsMonoicSqBlackIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMonolithIcon],svg[arcticons-monolith-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m26.581 43.5l-10.937-6.769V8.137l10.937 6.768zm-10.937-6.769l10.937-6.768"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.644 8.137L21.419 4.5l10.937 6.768v28.595L26.581 43.5m0-28.595l5.775-3.637"></svg:path>`,
})
export class ArcticonsMonolithIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMonomaxIcon],svg[arcticons-monomax-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m36.688 32.358l-5.356 7.925m0-7.925l5.356 7.925m-14.002 0l2.678-7.925l2.678 7.925m-.887-2.625h-3.582m-12.261 2.616v-7.916l4.043 7.925l4.043-7.912v7.912"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.878 30.141h36.245V42.5H5.878zm9.431-2.679v-6.954l4.806 6.954v-6.954m10.175 0c1.331 0 2.403 1.028 2.403 2.304v2.347c0 1.276-1.072 2.303-2.402 2.303s-2.404-1.027-2.404-2.303v-2.347c0-1.276 1.073-2.303 2.403-2.303m.002-12.322c1.33 0 2.402 1.028 2.402 2.303v2.347c0 1.276-1.071 2.303-2.402 2.303s-2.404-1.027-2.404-2.303V10.49c0-1.276 1.073-2.303 2.404-2.303m-16.207 6.945V8.186l3.627 6.953l3.626-6.942v6.942"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.001 17.824h12.578v12.324H24.001zm-12.579 0H24v12.324H11.422zM24.001 5.5h12.577v12.324H24.001zm-12.58 0h12.577v12.324H11.421z"></svg:path>`,
})
export class ArcticonsMonomaxIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMonopolyIcon],svg[arcticons-monopoly-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36.117 24.076c1.646-1.355 2.826-3.394 1.522-6.29c-2.82-6.26-11.93-1.43-19.292 0c-8.122 1.58-12.579 4.74-10.04 8.01c.983 1.268 2.44 1.985 3.856 2.388"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.04 14.721V7.464c-1.975-3.272-7.245-3.834-14.16-1.692c-6.373 1.974-8.348 5.923-8.348 5.923c3.272 6.036 3.267 8.04 3.267 8.04m26.122 8.954c-2.933-11.098-9.644-9.469-16.772-7.687c-7.446 1.862-10.36 5.19-8.612 12.354m24.557-3.592c.764-1.31 3.685-1.662 3.272 1.31c-.314 2.252-1.708 2.404-2.445 1.885c-.338 2.258-4.155 12.186-15.813 10.305c-3.444-.555-5.483-1.974-6.647-3.697"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.197 32.716c-2.82-.3-3.31 2.67-4.419 2.633s-1.278-.752-1.733-2.388c0 0-1.388 2.594-.203 4.832s6.43 1.147 8.16-1.448c2.35 1.636 10.003 4.193 10.812-.846c.201-1.257.015-2.342-.38-3.262c-.335 1.645-1.369 2.81-2.986 2.36s-1.993-1.975-5.077-2.22"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.065 30.686c-.282 1.09.251 3.48 2.181 3.158c2.031-.338 2.614-1.824 1.73-3.497m3.93-7.765c1.56-.358 3.836.169 4.626 2.275m6.444.979l-1.819.6m0 1.748l2.403-.738M17.54 38.3c.563 1.505 4.49 4.597 6.907-.127m-8.835-14.996c1.72-.07 2.529.89 2.529.89"></svg:path><svg:ellipse cx="15.753" cy="27.815" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.454" ry="1.788"></svg:ellipse><svg:ellipse cx="26.77" cy="27.268" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.461" ry="1.788"></svg:ellipse>`,
})
export class ArcticonsMonopolyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMonopostoIcon],svg[arcticons-monoposto-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M23.017 33.901c-4.279-.187-9.487-.24-14.27-.355c-2.656-.063-4.181-.288-4.247-1.221c.33-1.463.328-2.454 1.033-4.449c.333-.943.679-1.27 1.167-1.613m18.283 7.638c4.279-.187 9.487-.24 14.27-.355c2.656-.063 4.181-.288 4.247-1.221c-.33-1.463-.328-2.454-1.033-4.449c-.333-.943-.679-1.27-1.167-1.613"></svg:path><svg:path d="m5.652 31.235l6.127-1.748c4.408-1.258 6.738-.313 10.073.6m20.496 1.148l-6.127-1.748c-4.408-1.258-6.738-.313-10.073.6m-4.086 1.325a15.8 15.8 0 0 1 .046-5.869c.122-.629.859-.637 1.892-.637s1.77.008 1.892.637a15.8 15.8 0 0 1 .046 5.869c-.21 1.163-.429 2.598-1.938 2.598s-1.729-1.435-1.938-2.598m-1.839-8.381h-3.568a1.124 1.124 0 0 1-1.128-1.125v-.042c0-.624.503-1.126 1.128-1.126h3.741m7.381 2.293h3.568c.625 0 1.128-.502 1.128-1.125v-.042c0-.624-.503-1.126-1.128-1.126h-3.741"></svg:path><svg:path d="M21.75 29.578a299 299 0 0 1-1.245-9.327h6.99c-.422 3.576-.891 6.99-1.246 9.327m2.116-10.296c.13-.65.755-1.208 1.333-1.776c.252-.999-.334-1.568-1.204-1.568h-8.988c-.87 0-1.456.569-1.204 1.568c.578.568 1.204 1.126 1.333 1.776M24 15.857v-1.723m-1.668-.144h3.336m1.24 12.281l7.095-.12m-12.911.12l-7.095-.12M30.021 20.6c.005-.58-.049-1.608 1.257-1.62l1.698-.015c.993-.008 1.42.59 1.54 1.44c.058.413.112.713.142 1.064M17.979 20.6c-.005-.58.049-1.608-1.257-1.62l-1.698-.015c-.993-.008-1.42.59-1.54 1.44c-.058.413-.112.713-.142 1.064m27.295 9.045c.962-1.327.421-9.326-1.822-9.326l-3.418.131c-.735.153-.975.899-.848 1.403c.593 2.339.79 4.775.54 6.265M7.363 30.514c-.962-1.327-.421-9.326 1.822-9.326l3.418.131c.735.153.975.899.848 1.403c-.593 2.339-.79 4.775-.54 6.265"></svg:path></svg:g>`,
})
export class ArcticonsMonopostoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMonpetitgazonIcon],svg[arcticons-monpetitgazon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.888 19.43s2.184 2.265 3.635 2.494a14.57 14.57 0 0 0 11.125-3.294c2.312-1.949 3.282-4.368 4.009-8.137a7.9 7.9 0 0 1-2.142-.824a4.26 4.26 0 0 1-1.694-2.257c2.573-.11 4.06 1.393 6.229.84c.219-1.052-.336-2.26-1.312-3.599a14.9 14.9 0 0 1 4.746 3.739A6.35 6.35 0 0 0 32.04 4.5a7.9 7.9 0 0 1 4.165 4.145c.822.286 1.233-.711 3.967-.897a14.6 14.6 0 0 1-3.394 4.119a4.4 4.4 0 0 0 .61 2.39c.349.87 1.218 1.527 1.38 2.45a2.65 2.65 0 0 1-.342 2.063c-.51.633-.863.93-2.267.903a2.76 2.76 0 0 0 .772 2.487a2.06 2.06 0 0 1-2.067-2.77l-1.104-.813L29.753 43.5h-1.476l.23-12.813C26.46 34.514 25.978 39.05 25.33 43.5h-1.798l.472-8.976a3.58 3.58 0 0 0-1.772-2.353c-1.331-.75-3.039-.592-4.562-.464a12.8 12.8 0 0 0-5.324 1.468a2.9 2.9 0 0 0-.954.942l.027 9.383H9.557l-1.73-10.257a7 7 0 0 1 .196-.687c.294-.737.98-1.2 1.105-2.108l1.015-7.367c.092-.664-1.253-3.65-1.253-3.65Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m12.889 32.965l2.263 10.553h1.774l-.956-11.549"></svg:path><svg:circle cx="32.346" cy="11.802" r=".732" fill="currentColor"></svg:circle><svg:circle cx="37.303" cy="17.14" r=".75" fill="currentColor"></svg:circle>`,
})
export class ArcticonsMonpetitgazonIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMonsterSuperLeagueIcon],svg[arcticons-monster-super-league-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36.477 25.565a12.58 12.58 0 0 1-4.893 8.466m-2.785 1.593a12.58 12.58 0 0 1-9.597 0m-2.785-1.593a12.58 12.58 0 0 1-4.878-8.34m-.016-3.256a12.58 12.58 0 0 1 4.894-8.466m2.788-1.593a12.58 12.58 0 0 1 9.574-.007m2.82 1.611a12.58 12.58 0 0 1 4.864 8.343m-24.919.107a2.146 2.146 0 0 1 .003 3.262m24.91-.122a2.146 2.146 0 0 1-.008-3.258M16.432 33.996a2.147 2.147 0 0 1 2.8 1.596m9.538 0a2.148 2.148 0 0 1 2.799-1.596M19.232 12.403a2.148 2.148 0 0 1-2.8 1.601m15.17-.01a2.148 2.148 0 0 1-2.84-1.623M17.009 39.884l-3.366 1.415l-.36-3.025M6.288 26.017l-3.005-2.173l3.005-2.174m6.956-11.96l.397-3.321l3.403 1.43m13.91 0l3.404-1.43l.396 3.322M41.71 21.67l3.006 2.174l-3.005 2.173m-6.993 12.256l-.36 3.025h0l-3.366-1.414M17.036 7.886l-.389 3.257l-3.11-1.307m20.926 0l-3.11 1.307l-.389-3.258m-13.928 32.23l-.389-3.258l-3.11 1.307m20.926 0l-3.11-1.307l-.389 3.257M6.634 21.92l2.659 1.924l-2.871 2.077m35.156 0l-2.871-2.076l2.659-1.924m-.062 6.56a17.9 17.9 0 0 1-4.757 8.25m-7.784 4.497a17.87 17.87 0 0 1-9.527 0m-7.783-4.497a17.9 17.9 0 0 1-4.757-8.25m0-8.963a17.9 17.9 0 0 1 4.757-8.248m7.784-4.498a17.87 17.87 0 0 1 9.51-.005m7.8 4.503a17.9 17.9 0 0 1 4.752 8.228m-12.55 21.716l-.549 3.818m-8.402 0l-.548-3.818m-7.756-4.504l-3.652 1.462m-4.164-7.29l3.051-2.399m0-8.968l-3.051-2.399m4.165-7.289l3.652 1.463m7.756-4.504l.548-3.82m8.394-.054l.555 3.86m7.8 4.5l3.61-1.446m4.196 7.265l-3.06 2.405m-.023 8.987l3.05 2.4m-4.164 7.288l-3.652-1.462M24 15.12l-2.618 5.306l-5.853.85l4.236 4.129l-1 5.83L24 28.483l5.235 2.753l-1-5.83l4.236-4.129l-5.853-.851zM45.5 24c0 11.874-9.626 21.5-21.5 21.5h0C12.126 45.5 2.5 35.874 2.5 24q0 0 0 0C2.5 12.126 12.126 2.5 24 2.5h0c11.874 0 21.5 9.626 21.5 21.5"></svg:path>`,
})
export class ArcticonsMonsterSuperLeagueIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMonstermusicIcon],svg[arcticons-monstermusic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.57 18.926c-.166.703-.991 1.272-1.843 1.272c-.85 0-1.406-.57-1.24-1.272c.167-.703.992-1.272 1.844-1.272c.85 0 1.406.57 1.24 1.272m-9.14 0c.167.703.992 1.272 1.843 1.272s1.407-.57 1.24-1.272c-.166-.703-.991-1.272-1.843-1.272c-.85 0-1.406.57-1.24 1.272m3.666 4.224h1.808m-7.898-4.503a7.2 7.2 0 0 1-.194-1.67A7.163 7.163 0 0 1 23.97 9.81H24a7.163 7.163 0 0 1 7.19 7.136v.032c0 .575-.068 1.134-.195 1.67c-.13.545-2.606 7.501-6.995 7.501s-6.865-6.956-6.995-7.501zm-4.914 23.827V18.7L24 42.5l11.908-23.762V42.5m-29.287-.016V25.212m.138-6.083C7.83 11.42 14.98 5.5 23.694 5.5h.615c8.715 0 15.863 5.921 16.932 13.629m.14 6.083v17.272"></svg:path>`,
})
export class ArcticonsMonstermusicIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMontiIcon],svg[arcticons-monti-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:ellipse cx="24" cy="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="17.779" ry="19.5"></svg:ellipse><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.079 29.985c7.414-4.334 12.59-2.942 17.059.258"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M41.396 28.027c-6.612-2.928-12.06-.893-17.258 2.216c-4.69 2.805-9.412 5.297-14.054 5.894"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.458 26.832c2.31-19.392-18.77-20.763-16.96.427"></svg:path>`,
})
export class ArcticonsMontiIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMonumentValleyIcon],svg[arcticons-monument-valley-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.313 15.78a4.703 4.703 0 0 0-1.62-6.45a5.7 5.7 0 0 0-1.395-.558C26.41 8.235 12.018 4.5 12.018 4.5s10.465 10.854 12.079 12.332a4.708 4.708 0 0 0 7.216-1.051"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.869 9.438a4.705 4.705 0 0 0-1.067 8.338"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.299 8.772c-3.565 1.508-4.519 4.546-4.202 8.06m1.871 1.049c0 4.634-8.916 7.728-8.916 10.716s2.916 5.833 8.038 5.833s6.651-2.276 6.651-3.948s-3.443-6.952-3.443-12.528"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.463 19.792a3.49 3.49 0 0 0 2.994.306m-3.189 14.331v7.648l1.46 1.423m1.317-9.388v6.054l1.286 1.12"></svg:path>`,
})
export class ArcticonsMonumentValleyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMonumentValley2Icon],svg[arcticons-monument-valley-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.133 16.648a4.142 4.142 0 0 0 2.997 6.83"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.981 16.646a3.1 3.1 0 0 0-1.235.208c-3.201 1.365-6.967 3.609-4.308 10.491c0 0 .663-3.074 2.656-3.588l.002-.005a4.14 4.14 0 1 0 2.885-7.106"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.5 24.9c-.33 3.136-3.985 7.704-3.985 7.704s-.04 3.553 4.69 3.553s4.405-2.944 4.405-3.411s-2.748-6.379-2.856-8.214"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m12.065 42.471l-1.14-.913l.139-5.479m3.617 4.951l-1.319-.995l.077-3.956"></svg:path><svg:circle cx="22.133" cy="29.112" r="1.259" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.13 28.917a8.5 8.5 0 0 0 5.915.827m-6.417-2.137c-1.266-.383-5.363 6.273-6.421 6.944"></svg:path><svg:circle cx="30.26" cy="12.118" r="4.501" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.98 16.61a4.501 4.501 0 0 0-2.817-7.747"></svg:path><svg:circle cx="36.83" cy="7.301" r="2.801" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m33.821 9.368l.708-.474m-4.113 16.171c-.027 1.38 1.625 10.882 7.31 10.232a5.21 5.21 0 0 0 0-5.864a5.2 5.2 0 0 0 4.737.516c-.27-1.149-2.978-3.774-2.978-3.774a3.35 3.35 0 0 0 2.978.135c-1.272-.65-9.718-4.846-10.206-7.011a1.53 1.53 0 0 1-2.49 0c-.054.785-2.003 13.02-3.249 14.618c1.597.406 2.304.541 2.75-.135s1.23-5.712 1.148-8.717"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m28.332 41.957l1.928-1.191l-.56-8.465h2.944M31.499 43.5l1.868-1.543l-.164-8.839m-9.983-4.639c1.322-1.032 4.337-2.388 6.187-6.759m2.85-2.421V16.15m-2.49 3.149v-2.651"></svg:path>`,
})
export class ArcticonsMonumentValley2Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMonzoIcon],svg[arcticons-monzo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M5.14 13.31L5 32l9.21 9.18v-18.9l9.86 9.86l9.37-9.38v18.72L43 31.93V13.21l-6.68-6.69l-12.25 12.24L11.9 6.6Z"></svg:path>`,
})
export class ArcticonsMonzoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMoodleIcon],svg[arcticons-moodle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m5.8 18.8l-.106 7.86M29.79 24v14.182M16.319 23.409c-.07 4.857 0 9.88 0 14.773m27.182 0V24c-.028-7.434-13.59-7.528-13.71 0a5.42 5.42 0 0 0-2.6-4.727m1.42-1.891l-2.365-2.246l6.5-5.318A58.86 58.86 0 0 0 4.5 18.8h8.51v4.018c5.755 1.312 11.215.902 15.6-5.436"></svg:path>`,
})
export class ArcticonsMoodleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMooltifillIcon],svg[arcticons-mooltifill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="29.135" height="25.056" x="9.432" y="18.444" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2"></svg:rect><svg:circle cx="24" cy="30.973" r="3.496" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.26 13.24A8.74 8.74 0 0 1 24 4.5h0a8.74 8.74 0 0 1 8.74 8.74m0 0v5.204M15.26 13.24l.01 5.204m-.01-5.204v5.204"></svg:path>`,
})
export class ArcticonsMooltifillIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMoonIcon],svg[arcticons-moon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.213 35.215C38.476 41.551 31.585 45.8 23.702 45.8C11.838 45.8 2.22 36.174 2.22 24.3S11.837 2.8 23.7 2.8c-9.647 19.619 6.773 33.218 18.512 32.415"></svg:path>`,
})
export class ArcticonsMoonIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMoonPhaseIcon],svg[arcticons-moon-phase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="24" cy="24" r="21.5"></svg:circle><svg:path d="M23.94 29.086a6.36 6.36 0 1 1 1.202-3.72h0q0 .627-.122 1.241"></svg:path><svg:circle cx="34.289" cy="16.917" r="3.064"></svg:circle><svg:circle cx="14.304" cy="13.125" r="2.002"></svg:circle><svg:circle cx="29.671" cy="9.321" r="1.472"></svg:circle><svg:ellipse cx="41.807" cy="22.725" rx=".985" ry="1.786"></svg:ellipse><svg:ellipse cx="40.144" cy="32.413" rx="1.019" ry="1.601"></svg:ellipse><svg:circle cx="27.569" cy="34.038" r="2.021"></svg:circle><svg:circle cx="19.893" cy="40.978" r="2.256"></svg:circle><svg:circle cx="9.335" cy="30.028" r="1.193"></svg:circle><svg:ellipse cx="19.073" cy="5.836" rx="1.601" ry=".8"></svg:ellipse><svg:circle cx="26.52" cy="39.261" r=".951"></svg:circle><svg:circle cx="19.273" cy="22.994" r="1.414"></svg:circle><svg:circle cx="25.173" cy="28.051" r="1.392"></svg:circle><svg:path d="M23.39 45.492c-4.656-6.134-7.19-13.718-7.19-21.532c0-7.749 2.492-15.276 7.08-21.385"></svg:path></svg:g>`,
})
export class ArcticonsMoonPhaseIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMoondropLinkIcon],svg[arcticons-moondrop-link-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.095 18.042v11.916m0-4.151l6.405-7.725m0 11.876L33.594 24m-15.222-5.958v11.916M9.5 18.042v11.916h5.958m5.829 0V18.042l7.894 11.916V18.042"></svg:path><svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect>`,
})
export class ArcticonsMoondropLinkIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMoonlightIcon],svg[arcticons-moonlight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24" cy="24" r="3" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 2.5V21m0 6v18.5M45.5 24H27m-6 0H2.5M39.2 8.8L26.12 21.88m-4.24 4.24L8.8 39.2m30.4 0L26.12 26.12m-4.24-4.24L8.8 8.8"></svg:path>`,
})
export class ArcticonsMoonlightIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMoonpayIcon],svg[arcticons-moonpay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="19.5" cy="28.5" r="14" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="37" cy="11" r="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsMoonpayIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMoonreaderproIcon],svg[arcticons-moonreaderpro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M37 3a8 8 0 1 0 7.9 8A8 8 0 0 0 37 3m4.79 10.3a5.26 5.26 0 1 1-7.2-7.19a.18.18 0 0 1 .25.06a.24.24 0 0 1 0 .12A5.25 5.25 0 0 0 41.57 13a.19.19 0 0 1 .26 0a.18.18 0 0 1-.04.3M27.87 25.87L24.9 28l1.1 3.43a.3.3 0 0 1-.18.38a.31.31 0 0 1-.28 0l-2.91-2.21l-2.93 2.17a.3.3 0 0 1-.42-.07a.32.32 0 0 1 0-.27L20.4 28l-3-2.12a.3.3 0 0 1-.06-.42a.28.28 0 0 1 .23-.12h3.62l1.11-3.44a.29.29 0 0 1 .38-.19a.3.3 0 0 1 .19.19L24 25.33h3.6a.29.29 0 0 1 .34.25a.3.3 0 0 1-.12.29Zm7 6.57L33 33.78l.73 2.22a.18.18 0 0 1-.11.24a.21.21 0 0 1-.19 0l-1.85-1.34l-1.85 1.34a.18.18 0 0 1-.26-.05a.23.23 0 0 1 0-.16l.7-2.18l-1.85-1.34a.19.19 0 0 1-.06-.26a.18.18 0 0 1 .17-.09h2.29l.71-2.18a.19.19 0 0 1 .24-.12a.18.18 0 0 1 .12.12l.64 2.18h2.29a.19.19 0 0 1 .22.15a.2.2 0 0 1-.09.2ZM8.4 6.45v35.1a2 2 0 0 0 1.95 2h2.38V4.5h-2.38A2 2 0 0 0 8.4 6.45"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.32 4.5H12.73v39h24.92a2 2 0 0 0 2-2V18.43"></svg:path>`,
})
export class ArcticonsMoonreaderproIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMoorepayIcon],svg[arcticons-moorepay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 28.061V22.83a3.17 3.17 0 0 1 3.17-3.17h0a3.17 3.17 0 0 1 3.172 3.17v5.232"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.842 22.83a3.17 3.17 0 0 1 3.17-3.172h0a3.17 3.17 0 0 1 3.172 3.171v5.232m1.974-3.171a3.17 3.17 0 0 0 3.171 3.171h0a3.17 3.17 0 0 0 3.171-3.17v-2.062a3.17 3.17 0 0 0-3.17-3.17h0a3.17 3.17 0 0 0-3.172 3.17m0 0v9.513"></svg:path><svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect>`,
})
export class ArcticonsMoorepayIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMoovitIcon],svg[arcticons-moovit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 43.5s15.496-12.013 15.496-23.504a15.496 15.496 0 0 0-30.992 0C8.504 31.487 24 43.5 24 43.5"></svg:path><svg:circle cx="17.203" cy="18.555" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.75 22.322A8 8 0 0 1 24 24a8 8 0 0 1-4.75-1.678"></svg:path><svg:circle cx="30.797" cy="18.555" r=".75" fill="currentColor"></svg:circle>`,
})
export class ArcticonsMoovitIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMoozzaIcon],svg[arcticons-moozza-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.9 20.503a5.35 5.35 0 0 0-5.362-5.363H23.46a5.35 5.35 0 0 0-5.361 5.363v8.647a2.38 2.38 0 0 0 2.383 2.384h7.034a2.38 2.38 0 0 0 2.383-2.384z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.915 23.81a7.324 7.324 0 0 1-11.829.005m7.354-2.999l-2.321 1.91v-3.818zM5.5 28.68v-1.992a3.567 3.567 0 0 1 3.574-3.575h3.639c.66 0 1.191.532 1.191 1.192v15.658c0 .66-.531 1.192-1.191 1.192H9.074A3.567 3.567 0 0 1 5.5 37.581v-1.995m0-1.609v-3.684m5.194-5.487v-1.691M42.5 28.68v-1.992a3.567 3.567 0 0 0-3.574-3.575h-3.639c-.66 0-1.191.532-1.191 1.192v15.658c0 .66.531 1.192 1.191 1.192h3.639a3.567 3.567 0 0 0 3.574-3.574v-1.995m0-1.609v-3.684m-5.194-5.487v-1.691"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.57 19.01C10.625 11.714 16.766 6.307 24 6.306c7.234.001 13.375 5.408 14.43 12.706M16.219 7.55l.946 1.9m3.379 19.713v12.532"></svg:path><svg:path fill="currentColor" d="M35.347 36.426a.75.75 0 1 0 1.5 0a.75.75 0 0 0-1.5 0m0 2.049a.75.75 0 1 0 1.5 0a.75.75 0 0 0-1.5 0m-24.194-2.049a.75.75 0 1 0 1.5 0a.75.75 0 0 0-1.5 0m0 2.049a.75.75 0 1 0 1.5 0a.75.75 0 0 0-1.5 0"></svg:path>`,
})
export class ArcticonsMoozzaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMopriaPrintServiceIcon],svg[arcticons-mopria-print-service-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="24.842" height="7.238" x="11.58" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.5" ry="1.5"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.653 28.418h4.916c.604 0 1.09.42 1.09.94v1.616c0 .52-.486.939-1.09.939h-4.916m-.004-5.349h4.517c.842 0 1.518-.678 1.518-1.52V14.258c0-.841-.676-1.52-1.518-1.52H8.836c-.841 0-1.519.679-1.519 1.52v10.788c0 .841.678 1.52 1.52 1.52h4.945m.002-1.76H11.56c-.602 0-1.087-.42-1.087-.94V21.78c0-.52.485-.938 1.087-.938h24.88c.602 0 1.087.418 1.087.938v2.086c0 .52-.485.94-1.087.94h-1.787m2.298-10.132h.013a2.068 2.068 0 1 1-2.07 2.07v-.001c0-1.139.919-2.063 2.057-2.069"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.847 22.863h18.742c.587 0 1.064.519 1.064 1.158v17.32c0 .64-.477 1.159-1.064 1.159H14.846c-.588 0-1.064-.519-1.064-1.158v-17.32c0-.64.476-1.159 1.064-1.159"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.783 31.913H8.474c-.641 0-1.158-.419-1.158-.939v-1.617c0-.52.517-.938 1.158-.938h5.309m2.483 9.031h15.688m-15.688 2.56h15.688"></svg:path><svg:ellipse cx="19.505" cy="29.742" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="3.868" ry="1.529"></svg:ellipse><svg:ellipse cx="28.32" cy="26.988" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="3.84" ry="1.545"></svg:ellipse><svg:ellipse cx="22.338" cy="23.755" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.65" ry=".892"></svg:ellipse><svg:ellipse cx="27.737" cy="33.453" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="5.023" ry="1.971"></svg:ellipse>`,
})
export class ArcticonsMopriaPrintServiceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMoreSharingIcon],svg[arcticons-more-sharing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.244 11.876h25.751M4.456 32.961h21.621m-23.49-7.028h35.326m-34.8-7.028H20.16m-7.028 7.028l7.028-7.028l-7.028-7.028m14.178 4.685l4.686-4.685L27.31 7.19m-5.918 30.456l4.686-4.685l-7.029-7.029m14.178 4.686l4.686-4.685l-4.686-4.686"></svg:path>`,
})
export class ArcticonsMoreSharingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMoredaysIcon],svg[arcticons-moredays-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.488 23.662s-1.15-7.584 2.456-10.469s7.214.175 7.833 2.526a46 46 0 0 1 .776 7.308s1.254-6.316 3.453-8.528s4.003-2.888 6.561-1.066c2.203 1.57 2.138 2.385 1.938 10.792m.126 1.985a6.67 6.67 0 0 1-3.605 7.405c-4.831 2.489-8.955 3.082-12.886 1.447s-5.732-2.887-6.516-6.088s-.216-2.78.145-2.606a55 55 0 0 0 11.093 1.17c5.964.11 11.896.657 11.77-1.328"></svg:path><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsMoredaysIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMoreleNetIcon],svg[arcticons-morele-net-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="26" cy="24" r="10.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="10" cy="24" r="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="40" cy="24" r="3.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsMoreleNetIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMorhipoIcon],svg[arcticons-morhipo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width=".968" d="M18.122 26.126a1.446 1.446 0 0 1-1.442-1.441v-.937c0-.793.65-1.442 1.442-1.442h0c.793 0 1.442.649 1.442 1.442v.937c0 .793-.65 1.441-1.442 1.441m-9.042-2.45c0-.793.649-1.442 1.441-1.442s1.442.65 1.442 1.442v2.378m-2.883-3.82v3.892"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width=".968" d="M11.963 23.676c0-.793.649-1.442 1.441-1.442s1.442.65 1.442 1.442v2.378m9.811-5.766v5.838m0-2.45c0-.793.649-1.442 1.441-1.442s1.442.65 1.442 1.442v2.45m-6.126-2.45c0-.793.649-1.442 1.442-1.442m-1.442 0v3.892"></svg:path><svg:circle cx="29.437" cy="20.505" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width=".968" d="M29.437 22.234v3.892m1.873-1.441c0 .792.648 1.441 1.441 1.441s1.442-.649 1.442-1.441v-.937c0-.793-.649-1.442-1.442-1.442s-1.441.649-1.441 1.441m0-1.513V28"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M37.479 26.126a1.446 1.446 0 0 1-1.442-1.441v-.937c0-.793.649-1.442 1.442-1.442h0c.792 0 1.441.649 1.441 1.442v.937c0 .793-.649 1.441-1.441 1.441"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path>`,
})
export class ArcticonsMorhipoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMorseIcon],svg[arcticons-morse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10 34.57A5.56 5.56 0 1 1 15.6 29a5.55 5.55 0 0 1-5.6 5.57m33.39-12.32H21.07v-8.84h22.42Z"></svg:path>`,
})
export class ArcticonsMorseIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMorsemaniaIcon],svg[arcticons-morsemania-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.9 18.833h7.4m7.4 0h7.4M12.9 29.167h7.4m7.4 0h7.4"></svg:path>`,
})
export class ArcticonsMorsemaniaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMorsetrainerIcon],svg[arcticons-morsetrainer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M40.16 6.58c4.1 8.3 4 30.9-1.8 35c-4.2 2.9-25.1-1.6-29.8-6.5c-3.5-3.7-4-10-3.3-13.6c1-5.6 32.5-20 34.9-14.9Z"></svg:path><svg:path fill="none" stroke="currentColor" d="M19.16 14.88v11.3H23V30h4v8.6h6.5v-15h-3.8V15h-2.5v8.6H22V15Z"></svg:path>`,
})
export class ArcticonsMorsetrainerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMortalKombatIcon],svg[arcticons-mortal-kombat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m7.1 37.3l1.7-1.6v-23L6.9 11h5.5l5.4 15.6L23 11h5.4L27 12.6v23l1.7 1.7H21l1.8-1.7V23.5l-5 13.9l-5.1-13.9v12.2l1.7 1.7H7.2"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27 23.334L34.8 12l-1-1h7.3l-1.9 1l-7.4 11.1l8.9 14.3h-4.6l-6.5-11.3l-2.6 3.467"></svg:path><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsMortalKombatIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMosburgerIcon],svg[arcticons-mosburger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.524 11.353c-2.622 1.407-3.682 4.815-2.369 7.617l7.093 15.146c1.318 2.8 4.51 3.932 7.134 2.53c2.623-1.407 3.683-4.816 2.37-7.618l-7.094-15.146c-.632-1.344-1.738-2.365-3.075-2.84a5 5 0 0 0-4.059.311m14.186 0c-2.622 1.407-3.682 4.815-2.369 7.617l7.093 15.146c1.318 2.8 4.51 3.932 7.134 2.53c2.623-1.407 3.683-4.816 2.37-7.618l-7.094-15.146c-.632-1.344-1.738-2.365-3.076-2.84s-2.797-.363-4.058.311M9.82 18.87L5.063 29.028c-1.314 2.802-.254 6.21 2.369 7.617c2.624 1.403 5.816.271 7.134-2.529l1.192-2.545z"></svg:path>`,
})
export class ArcticonsMosburgerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMoscowElectronicSchoolIcon],svg[arcticons-moscow-electronic-school-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="24" cy="24" r="21.5" transform="rotate(-88.777 24 24)"></svg:circle><svg:path d="m28.871 13.733l5.396 5.396l-2.732 2.733l-5.397-5.397M31.603 11L37 16.397l-2.733 2.732M20.414 24.24c-.274-.957 0-2.05.751-2.802h0c1.161-1.161 3.006-1.093 4.099 0l1.366 1.367c1.161 1.16 1.093 3.005 0 4.098h0c-.751.752-1.844 1.025-2.8.752m2.117-5.534l-2.528 2.528M16.397 37L11 31.603l8.129 2.664l-2.664-8.129l5.397 5.397"></svg:path></svg:g>`,
})
export class ArcticonsMoscowElectronicSchoolIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMoscowTransportIcon],svg[arcticons-moscow-transport-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.163 31.663a15.326 15.326 0 1 1 21.674 0L24 42.5"></svg:path><svg:circle cx="24" cy="20.826" r="5.109" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.775 28.051a10.217 10.217 0 1 1 14.45 0L20.388 38.888"></svg:path>`,
})
export class ArcticonsMoscowTransportIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMoshidonIcon],svg[arcticons-moshidon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="35.157" cy="25.74" r="4.993"></svg:circle><svg:path d="M17.917 26.765v-6.464a5.034 5.034 0 0 0-5.034-5.034h0A5.034 5.034 0 0 0 7.849 20.3v10.432M17.917 20.3a5.034 5.034 0 0 1 5.033-5.033h0a5.034 5.034 0 0 1 5.034 5.034h0v10.432"></svg:path></svg:g>`,
})
export class ArcticonsMoshidonIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMoshupIcon],svg[arcticons-moshup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.05 36.95v-25.9L24 31.4l12.95-20.35v25.9"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 5.5h8.597L24 21.062L33.904 5.5H42.5v37H31.4V30.109L24 41.738l-7.4-11.629V42.5H5.5z"></svg:path>`,
})
export class ArcticonsMoshupIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMotioneyeIcon],svg[arcticons-motioneye-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.67 7.28a30.14 30.14 0 0 1 14.08 3.38l.25.12l.25-.12a29.7 29.7 0 0 1 18.36-2.82c-6.36 2.32-12.39 5.65-16.46 12.91h-4.29C17.79 13.49 11.75 10.16 5.39 7.84a29 29 0 0 1 4.29-.56ZM14 12.11c-3.38.66-6.42 3.84-6.43 7.28a7.21 7.21 0 0 0 14.29 1.36h4.29a7.2 7.2 0 0 0 14.27-1.36c0-3.44-3-6.62-6.42-7.28m-19.21 4.65a2.63 2.63 0 0 1 2.63 2.63h0A2.63 2.63 0 0 1 14.79 22h0a2.62 2.62 0 0 1-2.63-2.62h0a2.62 2.62 0 0 1 2.62-2.63Zm18.42 0a2.63 2.63 0 0 1 2.63 2.63h0A2.62 2.62 0 0 1 33.22 22h0a2.62 2.62 0 0 1-2.63-2.62h0a2.63 2.63 0 0 1 2.63-2.63ZM24 23.46a10.53 10.53 0 0 1-3.22 4.86c1 1.36 2.06 2.79 3.22 4.64c1.16-1.85 2.2-3.28 3.22-4.64A10.53 10.53 0 0 1 24 23.46"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.51 9.09a21.5 21.5 0 1 0 31 0m-1.82-1.67a21.49 21.49 0 0 0-27.2-.14"></svg:path>`,
})
export class ArcticonsMotioneyeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMotionleapIcon],svg[arcticons-motionleap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.564 25.969c-.723 0-1.2-.052-2.865-.581c-3.961-1.26-8.164-7.027-7.074-10.33c-.814-2.31-.624-3.359.57-5.92c1.634 4.822 6.69 5.393 6.503 10.136c-.034.862-.14 2.056-.336 2.802c1.647.214 3.201 1.496 3.201 1.496s1.555-1.282 3.202-1.496c-.196-.746-.303-1.94-.337-2.802c-.187-4.743 5.74-6.078 8.199-9.377c1.194 2.561.421 4.002-1.125 5.161c1.09 3.303-3.113 9.07-7.074 10.33c-1.664.529-2.142.58-2.865.58Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.196 9.138c3.654.383 4.84 2.055 4.84 2.055c1.054-.808 1.958-1.37 4.527-1.37s3.474.562 4.528 1.37c0 0 2.882-.913 6.536-1.296m-1.125 5.161c.14 7.888-4.286 11.156-14.3 15.688S9.351 41.497 14.2 43.5c4.005-7.642 20.8-12.192 16.302-28.442"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.65 33.653c-4.235-4.762-4.17-14.16-1.025-18.595c-.905 4.91-.564 10.63 4.088 16.426m8.28-21.404c2.362-1.592 11.005-1.118 15.31-5.58c1.826 2.16 3.39 6.57-6.782 9.592m-3.215 1.373c.597.65 1.353 3.197-3.215 4.498c-.281-2.074 1.405-5.148 3.215-4.498m-2.394 1.232l.549.806m-13.967-2.269c-.597.65-1.353 3.197 3.215 4.497c.281-2.073-1.405-5.147-3.215-4.497m2.394 1.232l-.549.806"></svg:path>`,
})
export class ArcticonsMotionleapIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMotivationIcon],svg[arcticons-motivation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.578 22.039c0-1.27-1.029-2.298-2.298-2.298s-2.297.812-2.297 2.081s1.028 1.99 2.297 1.99c1.153 0 2.237.873 1.98 1.71"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.578 22.039c0 3.79-.724 5.554-2.298 6.22m-4.263-6.22c0-1.27-1.028-2.298-2.297-2.298s-2.298.812-2.298 2.081s1.029 1.99 2.298 1.99c1.153 0 2.237.873 1.979 1.71"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.017 22.039c0 3.79-.724 5.554-2.297 6.22"></svg:path>`,
})
export class ArcticonsMotivationIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMotiveIcon],svg[arcticons-motive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.726 24.002h9.038v-8.044h-5.152l3.683-6.376L31.227 5.5l-3.683 6.376l-2.576-4.455L18 11.446l4.515 7.818c.829 1.443 1.95 2.938 3.318 3.729s3.227 1.009 4.892 1.009m0 0h9.038v8.044h-5.152l3.683 6.376l-7.072 4.078l-3.683-6.376l-2.572 4.46L18 36.556l4.515-7.818c.829-1.442 1.95-2.94 3.318-3.728C27.2 24.22 29.06 24 30.725 24m-8.202 4.737l-4.52 7.822l-6.966-4.022l2.572-4.455H6.236v-8.16h7.37l-2.576-4.456l6.97-4.02l4.52 7.822c.832 1.439 1.574 3.156 1.574 4.734c0 1.582-.742 3.299-1.574 4.737z"></svg:path>`,
})
export class ArcticonsMotiveIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMotoIcon],svg[arcticons-moto-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 36.23a45 45 0 0 0-3-5.7c-1.92-2.68-3.45-3.65-5.23-3.68C10.13 26.85 5.55 37 4.5 40.46h0L15.43 7.54z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24 36.23l8.6-28.69l10.9 32.92h0c-1-3.44-5.63-13.61-11.31-13.61c-1.78 0-3.31 1-5.23 3.68a45 45 0 0 0-2.96 5.7"></svg:path>`,
})
export class ArcticonsMotoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMotoNoteIcon],svg[arcticons-moto-note-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.5 25.5h-13a4 4 0 0 0-4 4v13m17-17l-17 17"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4V11a5 5 0 0 1 0 10v6a5 5 0 0 1 0 10v1.5a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path>`,
})
export class ArcticonsMotoNoteIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMotoSecureIcon],svg[arcticons-moto-secure-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 38.144c-6.516-2.798-10.771-8.18-11.52-14.684a75 75 0 0 1-.067-9.07c3.525-.3 7.791-1.197 11.587-3.977c3.803 2.783 8.07 3.68 11.587 3.979c.161 3.04.138 6.069-.068 9.068c-.747 6.504-5.003 11.886-11.519 14.684"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 43.5c9.043-3.117 15.489-10.363 16.5-19.589c.28-4.005.257-8.025-.071-12.027a2.54 2.54 0 0 0-2.468-2.366c-4.091-.126-8.846-.808-12.52-4.427a2.05 2.05 0 0 0-2.881 0c-3.675 3.619-8.43 4.301-12.52 4.427a2.54 2.54 0 0 0-2.468 2.366A79.4 79.4 0 0 0 7.5 23.911C8.512 33.137 14.957 40.383 24 43.5m0-33.087v-5.83m0 33.561V43.5m11.52-20.04h4.98"></svg:path>`,
})
export class ArcticonsMotoSecureIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMotoUnpluggedIcon],svg[arcticons-moto-unplugged-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.589 33.113a9.557 9.557 0 0 1 18.822 0m-2.992-17.247a6.53 6.53 0 0 1-12.838-.001"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 5.5h29c2.216 0 4 1.784 4 4v29c0 2.216-1.784 4-4 4h-29c-2.216 0-4-1.784-4-4v-29c0-2.216 1.784-4 4-4"></svg:path>`,
})
export class ArcticonsMotoUnpluggedIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMotoaudioIcon],svg[arcticons-motoaudio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.5 34.717h4.333m4.334-21.434H16.5M20.833 24h4.334M29.5 13.283h4.333m4.334 21.434H42.5M5.667 38.5v-29m8.666 29v-29M23 38.5v-29m8.667 29v-29m8.666 29v-29"></svg:path>`,
})
export class ArcticonsMotoaudioIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMotogpIcon],svg[arcticons-motogp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.773 19.413h4.636c1.707 0 3.091 1.37 3.091 3.058s-1.384 3.058-3.09 3.058h-2.32v3.058h-6.954c-2.561 0-4.637-2.054-4.637-4.587s2.076-4.587 4.637-4.587zv9.174"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M40.409 22.471h-9.273c-.853 0-1.545.685-1.545 1.53s.691 1.528 1.545 1.528h2.318M4.5 28.587l10.818-9.174v9.174l9.182-9.174v9.174"></svg:path>`,
})
export class ArcticonsMotogpIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMotohubIcon],svg[arcticons-motohub-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36 30H12a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h24a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1m1-4V12a1 1 0 0 0-1-1h-9.25a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1H36a1 1 0 0 0 1-1m-14.75-9.5V12a1 1 0 0 0-1-1h-9.252a1 1 0 0 0-1 1v4.5a1 1 0 0 0 1 1h9.251a1 1 0 0 0 1-1m.001 9.75v-4.5a1 1 0 0 0-1-1h-9.252a1 1 0 0 0-1 1v4.5a1 1 0 0 0 1 1h9.251a1 1 0 0 0 1-1"></svg:path>`,
})
export class ArcticonsMotohubIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMotomarketIcon],svg[arcticons-motomarket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.33 4.5H15.67a3.16 3.16 0 0 0-3.14 3.14v32.72a3.16 3.16 0 0 0 3.14 3.14h16.66a3.16 3.16 0 0 0 3.14-3.14V7.64a3.16 3.16 0 0 0-3.14-3.14M24 20.22a6 6 0 1 1 6-6a6 6 0 0 1-6 6"></svg:path><svg:circle cx="24" cy="14.27" r="3.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsMotomarketIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMotonotificationsIcon],svg[arcticons-motonotifications-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M40.2 12.59H15.88L4.5 8.1v28.44a3.32 3.32 0 0 0 3.3 3.32h32.4a3.32 3.32 0 0 0 3.3-3.32V15.89a3.3 3.3 0 0 0-3.3-3.3m-24.89 18a3.12 3.12 0 1 1-3.11-3.13a3.13 3.13 0 0 1 3.11 3.13m0-9a3.12 3.12 0 1 1-3.11-3.13a3.13 3.13 0 0 1 3.11 3.13m2.61 8.93h20.82m-20.82-8.96h20.82"></svg:path>`,
})
export class ArcticonsMotonotificationsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMotorsportComIcon],svg[arcticons-motorsport-com-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 28.141v-7.648c0-2.56-2.012-4.635-4.494-4.635s-4.494 2.075-4.494 4.635v7.648M24 20.494c0-2.56 2.012-4.635 4.494-4.635s4.494 2.075 4.494 4.635v7.648m0 3.999H15.012"></svg:path>`,
})
export class ArcticonsMotorsportComIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMouTeIcon],svg[arcticons-mou-te-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.581 26.543a2.03 2.03 0 0 1-2.024-2.025v-1.316a2.03 2.03 0 0 1 2.024-2.024h0a2.03 2.03 0 0 1 2.025 2.024v1.316a2.03 2.03 0 0 1-2.025 2.025m3.634-5.365v3.34c0 1.114.91 2.025 2.024 2.025s2.024-.911 2.024-2.025v-3.34m.001 3.441v1.924M8 23.165c0-1.093.894-1.987 1.987-1.987h0c1.093 0 1.987.894 1.987 1.987v3.278M8 21.178v5.365m3.974-3.378c0-1.093.894-1.987 1.987-1.987h0c1.093 0 1.987.894 1.987 1.987v3.278M33.6 19.457v6.073c0 .608.405 1.013 1.012 1.013h.304m-2.43-5.466h2.227m4.983 4.453c-.303.608-1.012 1.013-1.72 1.013h0a2.03 2.03 0 0 1-2.025-2.025v-1.316a2.03 2.03 0 0 1 2.025-2.024h0A2.03 2.03 0 0 1 40 23.202v.709h-4.049m-7.022.101h2.873"></svg:path>`,
})
export class ArcticonsMouTeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMountainBikeXtremeIcon],svg[arcticons-mountain-bike-xtreme-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M16.003 19.964c2.088 1.128 3.955 2.2 3.897 3.326m-.437-15.53c.384-.8.774-1.695 1.166-1.948c.997-.053 2.185.087 3.016.597c.502.306.964.67 1.276 1.25c1.117.604 1.187 1.311 2.414 1.808l-2.588-.742l.04.45"></svg:path><svg:path d="M24.551 9.074c-.238.814-.614 1.655-1.276 2.37c.168.26.394.401.443.909c-.537-.091-.71.029-.72.505m-4.855 16.097l-1.396 2.28l-.201 1.158c.462.56.787 1.825 1.142 2.936c1.163.298 2.75 1.127.846 1.204l-3.653-1.615c-.185-.332-.224-.87.353-1.559a54 54 0 0 1 1.246-7.564c-1.384-1.367-3.063-2.622-4.885-3.462c-.295-.84-.93-1.12-1.49-1.524c-.608-.514-1.015-1.356-1.3-2.468c.123-1.19.372-1.522.587-2.085c.692-1.167 1.485-1.715 1.872-2.608c.864-.465 1.354-1.265 2.259-2.049a58 58 0 0 0 2.61-1.51c1.11-.635 2.297-.22 2.583-.72c.274.066.54-.084.672-.297l-.016-.664l-.397-.469"></svg:path><svg:path d="M20.878 30.938c-.55.21-1.131.38-1.73.48l-1.005-2.463m1.355-.62c.143.451.345.772.52 1.152c.322.01.654-.002.982-.025m1.632-16.152c-.401-.56-.59-1.047-.505-1.538c-.643-.196-1.188-.252-1.997.1c.076 1.26-.382 2.252-1.01 2.994c.98-.094 1.937-.355 2.963-.151l2.205.043c.584.491.853 1.048 1.272 1.573l-1.282.022c-.515-.413-1.023-.833-1.675-1.074c-1.35.11.159.319-2.186.41c-.441.448-.804.47-1.852.425l.144.826l.681.363l1.454 1.034c.548.1 1.06.168 1.671.32l.909-.08l.492.96l-.407.079c-.233-.105-.104-.397-.699-.315c-.743-.313-1.487-.331-2.231-.257l-3.59-1.125c.209-.32-.12-1.487-.18-2.068c-.675.304-1.563.537-2.509.75l.346.81c2.066.57 3.7 1.117 5.448 2.146c.562.549.695 1.16.69 2.188l-.794 1.177l-.163 1.024"></svg:path></svg:g><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M31.79 23.997a7.33 7.33 0 1 1-2.95 5.878c0-1.179.278-2.291.771-3.277M16.92 37.472a6.31 6.31 0 1 1-4.209-7.601"></svg:path><svg:path d="M37.923 29.69a1.671 1.671 0 1 1-1.672-1.672h0c.924 0 1.672.748 1.672 1.671m-25.777 6.269c0 .8-.649 1.449-1.449 1.449h0c-.8 0-1.449-.65-1.449-1.45h0c0-.8.649-1.448 1.45-1.448h0c.8 0 1.448.649 1.448 1.449"></svg:path><svg:path d="m34.621 29.345l-8.992-9.74l-6.125 6.648"></svg:path><svg:path d="m26.514 20.564l-1.994 2.681l-2.555 8.265l-.924 1.344m6.886-11.379l.521.436m.682 3.027l1.584.053m-9.526 8.935c0 .577-.468 1.045-1.045 1.045h0a1.045 1.045 0 0 1-1.046-1.045h0c0-.577.468-1.045 1.046-1.045h0c.577 0 1.045.468 1.045 1.045m-7.323 1.946a39 39 0 0 1-1.73.257m1.27-12.41l2.638 4.049M10.8 24.227l2.757-.802m1.581 5.373l-3.586 5.991"></svg:path><svg:path d="M12.217 35.852c.125 1.204.098 2.03-.287 3.044c1.012.199 3.116-.187 4.573-.71m.582-4.724l.845-.278m-6.003 1.972l1.536-.504m5.755.286l-1.021 2.15m6.081-18.825l1.52 1.55M24.774 15.7l.444 2.114l-1.328 1.137l-1.257.04"></svg:path></svg:g>`,
})
export class ArcticonsMountainBikeXtremeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMountainPathIcon],svg[arcticons-mountain-path-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.97 23.573c.015.146.043.438.311 1.174c.269.736.778 1.916 1.266 2.866s.953 1.67 1.28 2.4c.325.73.512 1.47.974 2.159c.463.69 1.202 1.33 3.065.687c1.864-.642 4.678-2.455 6.301-4.126s1.694-2.757 1.849-3.292c.154-.534.378-.287.626-.309s.522-.314.926-1.227s.938-2.447 1.003-3.75c.065-1.305-.339-2.38-.91-2.805c-.57-.425-.681-.391-1.187-2.437s-.697-4.332-2.47-6.381s-5.045-2.86-7.61-2.068s-4.426 3.185-5.236 5.712s-.572 5.187-.659 6.586s-.468 1.526-.461 2.099c.006.572.462 1.57.69 2.068s.229.498.243.644Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.521 20.33c.202-.395.404-.79 1.228-.965s1.992-.137 2.55.548s.366 2.014.23 2.854c-.134.84-.214 1.19-.081 1.454s.476.437.82.611"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.547 27.613c.325-.495.65-.99 1.341-1.333c.69-.343 1.746-.533 2.967-.674s2.607-.23 3.568-.1s1.497.481 2.244.253c.746-.229 1.704-1.037 2.2-2.2c.496-1.165.531-2.684.33-3.685s-.642-1.485-1.178-2.266c-.535-.782-1.168-1.862-1.506-2.811s-.382-1.766-.751-2.275c-.369-.51-1.063-.712-2.235-.729s-2.824.15-4.388.513s-2.883.867-4.359 1.428m4.222 14.438c.674.103 1.336.204 2.133.052s1.661-.541 2.566-.95"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.318 18.486c.58-.386 1.16-.773 1.87-.86c.712-.088 1.556.123 2.056.395s.659.606.817.94m-3.635 1.21c-.02-.403.4-.868 1.284-.917c.885-.05 1.655.319 1.677.746s-.88.735-1.635.776s-1.304-.202-1.326-.605m-6.596 1.258c.174-.281.63-.624 1.149-.733c.518-.11 1.098.013 1.247.272s-.132.654-.595.874s-1.11.263-1.487.175c-.377-.087-.487-.307-.314-.588m14.724-1.545c.413.351.826.703.772 1.222c-.055.52-.425 1.008-.84 1.557m-.578-4.15c.053-.44.105-.879.289-1.183c.183-.304.498-.473.812-.642m-10.047 7c.364-.1.728-.2.956-.161c.23.039.323.217.417.396m6.521 4.024c.83 1.383 1.5 2.502 2.846 3.075s2.754.3 4.109.885s2.174 1.685 3.266 3.147M5.67 34.7c1.565-1.802 3.13-3.603 5.596-4.532s5.784-.985 9.11-1.042m8.237 7.226c1.133-.29 2.266-.58 3.28-1.4s1.911-2.17 2.808-3.52"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.199 29.21c.52 1.256 1.04 2.513 2.16 3.712s2.842 2.34 4.564 3.482m-13.89 3.941l1.079-2.972m22.56 3.774l-.62 2.354"></svg:path>`,
})
export class ArcticonsMountainPathIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMountainProjectIcon],svg[arcticons-mountain-project-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m5 24.325l9.797-8.796l3.784 3.561l-2.859 4.591l.084.601h.547L29.68 12.011l13.313 12.228v-6.093c0-.314.039-.69-.118-.963c-.278-.483-.805-.658-1.286-.938c-4.925-2.87-11.962-6.83-15.27-8.773c-.266-.156-.51-.297-.723-.428c-.799-.488-1.016-.62-1.6-.654c-.583-.035-.988.097-1.716.472C19.33 8.38 11.56 12.8 6.43 16.13a3.1 3.1 0 0 0-.934.95c-.259.41-.467.994-.475 1.535c-.029 1.958-.021 5.71-.021 5.71"></svg:path><svg:path d="M23.643 26.572c-.47-.691-.402-2.471.03-3.834c.189-.594-.135-1.219.08-1.635c.254-.49 1.064-.903 1.488-.965c.678-.098 1.532.507 2.164.993c.524.403-.218 1.065-.091 1.37c.127.304.707.625.707.625c.384-.666.988-.937 1.437-1.139c.857-.788 1.36-1.578 1.59-2.07l.933-3.597c-.109-.266.79-1.441 1.282-.993"></svg:path><svg:path d="M28.601 35.86c-.675-.408-1.39-1.019-1.373-1.55c.044-.438-.013-1.024-.136-1.14c-1.268-1.206-2.073-2.221-2.786-3.325h0c.867-2.35 1.655-3.878 2.322-5.073c0 0 .173-.7-.533-.821c-.877.25-2.045-.652-2.422-1.213m5.587.862c.31.567 1.939.491 2.023 1.505c.019.231-.326.404-.33.607c-.02 1.202.956 2.1 1.73 3.293c1.334-.315 3.05-.942 3.368-.755s4.217 2.35 4.58 2.24c.155-.047 2.438-.396 2.367-.196c-.247 1.008-1.67.882-1.885 1.747c-.876.542-1.235-.756-1.235-.756c-2.508-.15-3.834-1.101-3.834-1.101s-2.352 1.328-3.605 1.186c.413 1.75 3.364 1.684 4.065 3.273c.778 1.754.72 2.402 1.346 3.908c.24.917 1.653 2.846 1.778 3.042s-2.291-.922-2.799-1.33c-.632-.507.02-.822-.023-1.365c-.38-.61-1.35-2.824-1.825-3.086c-.548-.303-2.585-1.44-4.299-2.674c-.833-.721-.794-1.737-.794-1.737c-.597-1.31-1.308-2.172-1.745-3.089c-.355-.543-.269-2.183-.796-2.336"></svg:path></svg:g>`,
})
export class ArcticonsMountainProjectIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMouserEiuMagazineIcon],svg[arcticons-mouser-eiu-magazine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.466 30.654V9.5L24 30.678L34.534 9.531v21.147M17.818 38.5h2.859m-2.859-5.719h2.859m-2.859 2.859h1.859m-1.859-2.859V38.5m5.724-5.719V38.5m2.923-5.72v3.79c0 1.072.858 1.93 1.859 1.93s1.858-.858 1.858-1.93v-3.79"></svg:path>`,
})
export class ArcticonsMouserEiuMagazineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMoveItIcon],svg[arcticons-move-it-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.209 21.044v5.912M9.5 26.949v-5.905l2.956 5.912l2.955-5.903v5.903m19.173-5.912H38.5m-1.958 5.912v-5.912m-10.647 0l-1.958 5.912l-1.958-5.912M27.26 24h1.927m1.029 2.956H27.26v-5.912h2.956"></svg:path><svg:rect width="3.916" height="5.911" x="17.048" y="21.044" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.958" ry="1.958"></svg:rect><svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect>`,
})
export class ArcticonsMoveItIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMoveToIosIcon],svg[arcticons-move-to-ios-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 5.5h29c2.216 0 4 1.784 4 4v29c0 2.216-1.784 4-4 4h-29c-2.216 0-4-1.784-4-4v-29c0-2.216 1.784-4 4-4m2.56 16.282v8.872"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.497 29.229c.834 1.069 1.88 1.467 3.335 1.467h2.014c1.875 0 3.394-1.496 3.394-3.34v-.015c0-1.845-1.52-3.341-3.394-3.341h-2.221c-1.877 0-3.398-1.497-3.398-3.345h0c0-1.85 1.525-3.351 3.405-3.351h2.003c1.455 0 2.501.398 3.336 1.467m-16.574-1.467c2.496 0 4.506 1.978 4.506 4.436v4.52c0 2.458-2.01 4.436-4.506 4.436h0c-2.497 0-4.506-1.978-4.506-4.436v-4.52c0-2.458 2.01-4.436 4.506-4.436"></svg:path><svg:circle cx="12.06" cy="17.68" r=".75" fill="currentColor"></svg:circle>`,
})
export class ArcticonsMoveToIosIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMovieWitcherIcon],svg[arcticons-movie-witcher-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.178 17.951V9.985h-3.68L14.839 33.13L9.18 9.985H5.5V33.55m7.34 2.976l1.999-3.396m6.526-.996l.929 5.881h2.582l5.659-23.145l5.659 23.145h2.581L42.5 14.45m-9.966-2.977l-1.999 3.397"></svg:path>`,
})
export class ArcticonsMovieWitcherIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMoviebaseIcon],svg[arcticons-moviebase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 19.628c3.145 4.82 10.797 19.395 16.206 19.395c7.652 0 .449-30.046-6.166-30.046c-3.112 0-6.137 4.32-8.128 7.568m-3.777 6.107c-3.712 6.155-9.812 16.37-14.341 16.37c-7.652 0-.449-30.045 6.166-30.045c4.484 0 8.464 7.904 10.04 10.65"></svg:path>`,
})
export class ArcticonsMoviebaseIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMovieboxIcon],svg[arcticons-moviebox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m24.382 36.74l13.766-7.95c1.574-.908 2.607-2.677 2.607-4.79s-1.033-3.882-2.607-4.79h0L15.563 6.166c-2.886-1.667-8.317-.22-8.317 4.803v26.06c0 5.023 5.431 6.47 8.317 4.803l5.161-2.98"></svg:path><svg:path d="M27.251 12.916v10.135h3.34c1.036 0 1.619.375.751 1.851l-9.41 16.006l-9.41-16.006c-.867-1.476-.284-1.85.752-1.85h3.34v-11.35c0-2.464-.718-5.331-3.16-6.174m1.676 23.807l-7.884 4.553m28.159-16.262l-8.153 4.708m-10.64-5.78l-9.367 5.41m2.798-13.666v1.98m0 3.902v1.981m0 3.903v1.98m0 3.903v1.98m0 3.903v1.98m0 3.902v1.98"></svg:path></svg:g>`,
})
export class ArcticonsMovieboxIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMovieboxAltIcon],svg[arcticons-moviebox-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.993 9.009c-7.815 0-6.885 33.491-19.458 33.491S1.83 5.5 9.17 5.5s13.078 22.966 23.285 22.966S44.894 9.01 38.993 9.01z"></svg:path>`,
})
export class ArcticonsMovieboxAltIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMovieboxproIcon],svg[arcticons-movieboxpro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.088 27.597c2.372 0 4.281 1.877 4.281 4.21v4.29c0 2.333-1.91 4.211-4.281 4.211s-4.282-1.878-4.282-4.21v-4.29c0-2.334 1.91-4.212 4.282-4.212m-11.882 6.355H6.874m5.332 0c1.785 0 3.231 1.424 3.231 3.179s-1.446 3.177-3.231 3.177H6.874V27.596h5.332c1.785 0 3.231 1.423 3.231 3.178s-1.446 3.178-3.231 3.178m28.92-6.355l-8.563 12.712m0-12.711l8.563 12.712M27.43 15.76a2.76 2.76 0 0 1 2.753 2.762v2.844a2.76 2.76 0 0 1-2.74 2.775h-.013a2.76 2.76 0 0 1-2.752-2.764v-2.842a2.76 2.76 0 0 1 2.74-2.776zM7.04 23.224c.51.67 1.149.918 2.037.918h1.23a2.08 2.08 0 0 0 2.073-2.09v-.01a2.08 2.08 0 0 0-2.073-2.09H8.95a2.084 2.084 0 0 1-2.074-2.094h0c0-1.159.93-2.098 2.08-2.098h1.222c.89 0 1.528.25 2.037.918m28.911-.918l-2.077 8.383l-2.077-8.383l-2.077 8.382l-2.077-8.381m-17.04 4.175h5.504m0-4.175v8.382m-5.504-8.382v8.382M33.869 7.69h6.191l2.44 2.308l-2.44 2.307h-6.19L36.3 10zm-9.457 0h6.192l2.44 2.308l-2.44 2.307h-6.192L26.845 10zm-9.456 0h6.192l2.44 2.308l-2.44 2.307h-6.192L17.39 10zm-9.456 0h6.191l2.44 2.308l-2.44 2.307H5.5L7.932 10z"></svg:path>`,
})
export class ArcticonsMovieboxproIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMoviedbIcon],svg[arcticons-moviedb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.07 23.55h18.34a2.46 2.46 0 0 0 2.47-2.47V17a2.47 2.47 0 0 0-2.47-2.48h-22"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m21.07 23.55l-8.07 6v.58a2.47 2.47 0 0 0 2.48 2.47h23.93a2.46 2.46 0 0 0 2.47-2.47V26a2.47 2.47 0 0 0-2.47-2.48Z"></svg:path><svg:rect width="28.88" height="9.01" x="13" y="32.56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.48"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.2 26.32c0-4.48 0-10.81-.07-14a54 54 0 0 1 0-5.84l9.61 7l9.58 7s-16.84 12.38-19 13.93c-.09.06-.09-.42-.12-8.09"></svg:path>`,
})
export class ArcticonsMoviedbIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMovielabIcon],svg[arcticons-movielab-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M41.876 28.694c4.198-8.521-3.855-14.405-12.665-18.702C5.33-1.654 5.615 12.15 5.03 22.65c-.39 7.044 1.69 24.287 16.698 17.702c18.619-8.17 19.542-14.95 5.469-23.172c-14.35-8.385-15.917-1.87-15.975 6.188c-.011 1.57-1.074 11.994 9.642 9.932a19.84 19.84 0 0 0 8.636-4.174"></svg:path>`,
})
export class ArcticonsMovielabIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMoviesAnywhereIcon],svg[arcticons-movies-anywhere-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m12.073 25.33l-6.81 14.014c-.37.765-.675.698-.683-.15c-.093-9.825-.577-19.695 2.642-29.14a.859.859 0 0 1 1.575-.312c6.443 7.57 8.658 22.178 13.197 24.838a3.97 3.97 0 0 0 2.995.087c5.395-2.46 7.757-17.84 13.76-25.1a.839.839 0 0 1 1.55.312c3.467 10.383 3.485 19.92 2.937 29.317c-.05.846-.407.917-.794.16L35.281 25.33"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.1 18.999s4.16-8.46 7.774-10.537a3.96 3.96 0 0 1 2.98-.1c4.104 1.862 8.13 10.38 8.13 10.38"></svg:path>`,
})
export class ArcticonsMoviesAnywhereIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMovirtIcon],svg[arcticons-movirt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36.763 20.078v8.057c0 .806.535 1.343 1.337 1.343h.4m-3.207-7.251h2.94m-7.937 2.685a2.687 2.687 0 0 1 2.673-2.685h0m-2.673 0v7.251"></svg:path><svg:circle cx="26.735" cy="19.004" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.735 22.227v7.251m-2.638-10.743l-3.475 10.743l-3.475-10.743m-4.973 10.743A2.687 2.687 0 0 1 9.5 26.792v-1.745a2.687 2.687 0 0 1 2.673-2.686h0a2.687 2.687 0 0 1 2.673 2.686v1.745a2.687 2.687 0 0 1-2.673 2.686"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path>`,
})
export class ArcticonsMovirtIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMowsnowprosIcon],svg[arcticons-mowsnowpros-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.976 17.14V9.164l3.992 7.985l3.993-7.972v7.972M11.5 38.836V30.85h2.614c1.478 0 2.676 1.2 2.676 2.681s-1.198 2.682-2.676 2.682H11.5m7.17 2.623V30.85h2.615c1.478 0 2.676 1.2 2.676 2.681s-1.198 2.682-2.676 2.682H18.67m2.615.001l2.614 2.62m-5.228-10.842v-7.984l5.29 7.984v-7.984M40.5 9.164l-1.996 7.985l-1.996-7.985l-1.997 7.985l-1.996-7.985M11.658 27.118c.49.637 1.104.875 1.958.875h1.182c1.1 0 1.992-.894 1.992-1.997h0A1.994 1.994 0 0 0 14.798 24h-1.306c-1.1 0-1.992-.894-1.992-1.996h0c0-1.103.892-1.996 1.992-1.996h1.182c.854 0 1.468.237 1.958.875M33.16 37.96c.489.638 1.103.876 1.957.876H36.3c1.1 0 1.992-.894 1.992-1.997h0a1.994 1.994 0 0 0-1.992-1.996h-1.306c-1.1 0-1.992-.894-1.992-1.996h0c0-1.103.892-1.996 1.992-1.996h1.182c.854 0 1.468.237 1.958.875M25.836 14.504a2.645 2.645 0 1 0 5.29 0V11.81a2.645 2.645 0 1 0-5.29 0zM40.5 20.008l-1.996 7.984l-1.996-7.984l-1.997 7.984l-1.996-7.984m-6.679 5.34a2.645 2.645 0 1 0 5.29 0v-2.695a2.645 2.645 0 1 0-5.29 0zm0 10.842a2.645 2.645 0 1 0 5.29 0v-2.694a2.645 2.645 0 1 0-5.29 0z"></svg:path>`,
})
export class ArcticonsMowsnowprosIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMoy7Icon],svg[arcticons-moy-7-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.35 28.347c.408 3.124 1.115 5.508 2.263 7.086c1.092 1.48.783 3.62-.828 2.97c-.938 2.527-2.097 3.333-4.956 1.997a1.1 1.1 0 0 0-1.291.276c-2.12 2.55-4.46 2.196-8.334.353a2.86 2.86 0 0 0-2.406 0c-3.874 1.843-6.214 2.197-8.344-.353a1.1 1.1 0 0 0-1.291-.276c-2.86 1.336-4.007.53-4.945-1.998c-1.612.652-1.92-1.49-.839-2.969c2.141-2.936 2.76-8.642 2.76-16.776S15.645 5.5 24 5.5s13.863 5.022 13.863 13.157c0 .728 0 1.434.022 2.119"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.89 28.96c3.745-.742 6.004.124 8.48 2.012m7.055.248c-1.95-.403-3.404.556-3.992 1.578m6.344-1.672c2.507-1.485 4.797-1.052 6.19-.154"></svg:path><svg:circle cx="17.811" cy="23.999" r="3.61" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="33.872" cy="24.303" r="3.61" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.811 30.566a6.66 6.66 0 0 0 4.393-6.258c0-3.687-2.98-6.678-6.666-6.678s-6.667 2.991-6.667 6.678c0 1.744.673 3.344 1.788 4.536m22.207 1.589c2.042-.805 3.5-2.99 3.5-5.551c0-3.268-2.363-5.916-5.277-5.916c-2.902 0-5.264 2.649-5.264 5.916c0 2.56 1.456 4.746 3.487 5.551m-16.141-8.072l.355-.356m1.068.588l.093-.093m14.428.333l.356-.356m1.068.588l.093-.093"></svg:path>`,
})
export class ArcticonsMoy7Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMozcIcon],svg[arcticons-mozc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.399 38.03c-8.521 3.532-18.293-.511-21.825-9.032s.51-18.293 9.031-21.826c8.521-3.532 18.293.511 21.826 9.032a16.7 16.7 0 0 1-3.04 17.597"></svg:path><svg:circle cx="34.992" cy="37.852" r="4.253" fill="none" stroke="currentColor" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.477 15.017h16.44m-10.29-2.819v9.9c0 2.143.332 4.735 1.977 6.12m3.803-8.53c-2.014 6.955-4.774 11.755-8.501 11.755c-2.406 0-4.064-1.9-4.064-4.19c0-4.077 4.674-7.809 10.662-7.823c3.977-.01 7.232 2.931 7.232 6.675c0 3.48-2.83 5.494-7.12 6.303"></svg:path>`,
})
export class ArcticonsMozcIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMozillaVpnIcon],svg[arcticons-mozilla-vpn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m15.329 19.05l3.721-3.721m9.9 17.342l3.721-3.721M30.621 24H17.379"></svg:path><svg:circle cx="10.379" cy="24" r="2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="10.379" cy="24" r="7" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="37.621" cy="24" r="2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="37.621" cy="24" r="7" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24" cy="10.379" r="2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24" cy="10.379" r="7" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24" cy="37.621" r="2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24" cy="37.621" r="7" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsMozillaVpnIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMp3SnijderAndBeltoonMakerIcon],svg[arcticons-mp3-snijder-and-beltoon-maker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M37.72 8.881h2.552c1.87 0 2.375-1.33 2.193-2.908H37.72v9.617m0 .273a2.753 2.753 0 1 1-5.506 0a2.753 2.753 0 0 1 5.506 0M9.168 22.674a2.545 2.545 0 1 0 3.284 3.888a2.545 2.545 0 0 0-3.284-3.888m5.698-1.482a5.31 5.31 0 1 0-.63 7.482h0a5.23 5.23 0 0 0 1.757-2.956l3.9-.009c.453 0 .945.205 1.24.554s.415.868.34 1.314l-.661 3.845a5.23 5.23 0 0 0-3.208 1.237a5.31 5.31 0 1 0 6.852 8.112h0a5.31 5.31 0 0 0 .63-7.482a5.2 5.2 0 0 0-1.728-1.34l.696-4.077l13.609-1.18c1.78-.154 3.625-2.004 4.534-3.612l-17.329.028l2.922-17.08c-1.737.627-3.87 2.137-4.32 3.867l-3.435 13.22l-4.136.006a5.2 5.2 0 0 0-1.033-1.93Zm7.807 17.466a2.545 2.545 0 1 1-3.3-3.876l.015-.011a2.545 2.545 0 0 1 3.285 3.888"></svg:path><svg:circle cx="23.099" cy="24.688" r=".75" fill="currentColor"></svg:circle>`,
})
export class ArcticonsMp3SnijderAndBeltoonMakerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMp3VideoConverterIcon],svg[arcticons-mp3-video-converter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36.155 23.661v-3.939A10.887 10.887 0 0 0 25.24 8.815h-2.48a10.887 10.887 0 0 0-10.914 10.909v3.938m23.394 0h1.476a.87.87 0 0 1 .873.872v13.78c0 .483-.39.872-.873.872H35.24a.87.87 0 0 1-.873-.873V24.534c0-.483.39-.872.873-.872m-23.956 0h1.476a.87.87 0 0 1 .873.872v13.78c0 .483-.39.872-.873.872h-1.476a.87.87 0 0 1-.873-.873V24.534c0-.483.39-.872.873-.872m-.874 14.267a6.765 6.765 0 0 1 0-13.01m27.179 0a6.765 6.765 0 0 1 4.911 6.505h0a6.765 6.765 0 0 1-4.91 6.505M16.459 26.732h9.334v9.384h-9.334zm11.409 3.23l3.673-3.274v9.471l-3.673-3.274z"></svg:path>`,
})
export class ArcticonsMp3VideoConverterIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMparivahanIcon],svg[arcticons-mparivahan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.166 26.811h7.105m-7.105 1.84h7.105m-8.957 5.375v1.124a1.366 1.366 0 1 1-2.733 0v-1.124m16.275 0v1.124a1.366 1.366 0 1 1-2.733 0v-1.124m-11.426-10.64c0-1.148.957-2.059 2.906-2.059s2.332 1.039 2.332 2.06"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M40.761 31.202v-3.826c0-1.366-.305-2.522-1.275-3.06a3.18 3.18 0 0 1-1.421-1.859a169 169 0 0 0-1.603-3.753a3.76 3.76 0 0 0-2.715-1.877c-.729-.073-2.077-.145-5.028-.145s-4.3.073-5.029.145a3.76 3.76 0 0 0-2.714 1.877a166 166 0 0 0-1.603 3.753a3.18 3.18 0 0 1-1.422 1.858c-.97.54-1.275 1.695-1.275 3.061v3.826M38.5 23.386H18.937"></svg:path><svg:circle cx="36.935" cy="26.811" r="1.366" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="20.502" cy="26.811" r="1.366" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.719 34.026h10.657a1.62 1.62 0 0 0 1.622-1.622h0a1.62 1.62 0 0 0-1.621-1.621H18.06a1.62 1.62 0 0 0-1.622 1.621h0a1.62 1.62 0 0 0 1.622 1.622Zm6.021-10.64c0-1.148-.956-2.059-2.906-2.059s-2.332 1.039-2.332 2.06"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.719 16.682V7.099a2.6 2.6 0 0 0-2.6-2.599H9.601a2.6 2.6 0 0 0-2.599 2.6v33.8a2.6 2.6 0 0 0 2.6 2.6h16.517a2.6 2.6 0 0 0 2.6-2.6v-6.874"></svg:path>`,
})
export class ArcticonsMparivahanIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMpdroidIcon],svg[arcticons-mpdroid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M17.8 27.37h-8v-5.7c0-17.9 28.4-17.9 28.4 0v5.7h-8V43h7.1a5 5 0 0 0 5.2-5.2V21.67c0-22.2-36.8-22.2-37 0v16.11A4.88 4.88 0 0 0 10.7 43h7.1Z"></svg:path>`,
})
export class ArcticonsMpdroidIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMporeznaIcon],svg[arcticons-mporezna-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m40.189 40.4l-6.833 3.1V21.566l6.833-3.1z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.208 14.569c4.045-2.03 6.33-5.252 1.937-7.72c-7.507-4.215-13.022-1.953-18.501.533l-1.744.791h0l-5.09 2.31l25.546 11.083l6.833-3.1z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.788 12.239c1.023-.517 2.523-1.9.85-2.828c-1.8-1-3.404-.716-5.815.652zm3.282 24.715V25.396c0-.82-.486-1.562-1.238-1.888L9.386 15.505a1.126 1.126 0 0 0-1.575 1.033v15.879l19.824 8.6a1.027 1.027 0 0 0 1.436-.942v-.63m0-2.491l-4.865-2.119"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.81 29.899v-5.971a1.398 1.398 0 0 1 1.953-1.283l2.114.915a2.71 2.71 0 0 1 1.63 2.484v6.323m.001 0v-5.971a1.398 1.398 0 0 1 1.954-1.283l2.114.915a2.71 2.71 0 0 1 1.63 2.484v6.323"></svg:path>`,
})
export class ArcticonsMporeznaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMppIcon],svg[arcticons-mpp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="15.5" cy="25.1" r="4.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="32.6" cy="21" r="4.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="33.1" cy="19.2" r="1.2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="16.2" cy="23.5" r="1.2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsMppIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMpretinacIcon],svg[arcticons-mpretinac-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M37.525 4.5h-27.05c-1.02 0-1.848.828-1.848 1.849v27.049c0 1.02.827 1.848 1.848 1.848h3.754c.56 0 1.102.205 1.522.577h0c.768.679.994 1.784.553 2.71L13.94 43.5l12.387-7.96a1.85 1.85 0 0 1 1-.293h10.199c1.02 0 1.848-.828 1.848-1.849V6.348c0-1.02-.827-1.848-1.848-1.848"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.912 9.968h16.176c.61 0 1.105.495 1.105 1.105V27.25c0 .61-.495 1.105-1.105 1.105h-2.245c-.335 0-.66.123-.91.345h0a1.374 1.374 0 0 0-.33 1.62l1.413 2.971l-7.407-4.76a1.1 1.1 0 0 0-.598-.176h-6.099c-.61 0-1.105-.495-1.105-1.105V11.073c0-.61.495-1.105 1.105-1.105"></svg:path>`,
})
export class ArcticonsMpretinacIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMpt4uIcon],svg[arcticons-mpt4u-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24.059 9.195l5.708 9.89l-8.468 14.585h5.485l5.63 9.83l-2.926-14.405l5.8-10.01L26.736 4.5"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m21.22 33.6l-8.508-14.515L21.16 4.5h5.54l-8.47 14.585l5.691 9.86"></svg:path>`,
})
export class ArcticonsMpt4uIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMpvIcon],svg[arcticons-mpv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="24" cy="24" r="21.5"></svg:circle><svg:circle cx="25.165" cy="22.721" r="16.612"></svg:circle><svg:circle cx="23.139" cy="24.408" r="10.762"></svg:circle><svg:path d="m20.712 20.011l-.204 8.71l7.36-4.392z"></svg:path></svg:g>`,
})
export class ArcticonsMpvIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMpvktIcon],svg[arcticons-mpvkt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m21.264 5.88l13.707 13.654c2.577 2.578 2.92 6.416.402 8.7c-2.518 2.286-6.31 3.143-9.504 0L12.162 14.448c-2.15-2.37-1.303-6.42.776-8.326c2.08-1.905 6.085-2.311 8.326-.24"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m35.373 28.235l-13.48 13.513c-3.067 2.612-6.882 2.043-8.97 0c-2.09-2.043-2.871-5.888-.19-8.557l9.17-8.945"></svg:path>`,
})
export class ArcticonsMpvktIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMradioIcon],svg[arcticons-mradio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.8 25.888c4.446-1.169 7.73-5.204 7.73-10.018c0-5.727-4.643-10.37-10.37-10.37H9.038v37h29.925zm7.673-11.136H9.037m23.533 9.252H9.037m24.265 9.244H9.037"></svg:path>`,
})
export class ArcticonsMradioIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMrepoIcon],svg[arcticons-mrepo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.988 5.604c.486-.238 1.003-.42 1.52-.604c.502.182 1.012.36 1.49.592c5.364 2.696 10.71 5.42 16.077 8.107c.5.29.95.782.915 1.346c.014 5.542.01 11.084.004 16.627c.063.826-.5 1.574-1.323 1.913c-4.931 2.473-9.869 4.934-14.8 7.405c-.921.457-1.854 1.302-3.003.908c-5.545-2.875-11.198-5.605-16.771-8.445a1.83 1.83 0 0 1-1.072-1.778C6 26.123 6.039 20.57 6 15.02c.032-.911 1.027-1.428 1.833-1.782C12.9 10.718 17.936 8.15 22.99 5.604Zm-10.737 9.641c1.323.683 2.671 1.328 3.98 2.032c4.152-1.988 8.196-4.164 12.345-6.165c-1.366-.67-2.71-1.368-4.072-2.041c-4.089 2.047-8.16 4.13-12.253 6.174M32.7 13.216q-6.046 3.077-12.118 6.116c1.17.867 2.62 1.38 3.911 2.088c4.1-2.038 8.193-4.086 12.247-6.193c-1.359-.655-2.682-1.356-4.04-2.01m-22.572 5.186c.003 4.117 0 8.238 0 12.355c4.103 2.07 8.22 4.115 12.33 6.175c.003-4.083-.035-8.163.017-12.246c-4.065-2.17-8.248-4.162-12.347-6.285m16.485 6.162c-.084 4.117-.101 8.244.01 12.362c4.062-2.098 8.186-4.096 12.264-6.169c0-4.12-.01-8.244.004-12.365c-4.093 2.057-8.157 4.158-12.278 6.172"></svg:path>`,
})
export class ArcticonsMrepoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMspWalletIcon],svg[arcticons-msp-wallet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.689 27.388v-.846m0-6.781v-.847m-2.079 6.883c.412.544.922.745 1.637.745h.982c.923 0 1.664-.756 1.664-1.698h0a1.68 1.68 0 0 0-1.663-1.693q0 0 0 0h-1.085c-.919 0-1.663-.756-1.663-1.693h0c0-.938.744-1.697 1.663-1.697h.982c.715 0 1.225.204 1.633.744M9.391 26.53v-6.77l3.326 6.782l3.334-6.766v6.766m9.28 0V19.76h2.18c1.233 0 2.23 1.02 2.23 2.279s-.997 2.275-2.23 2.275h-2.18m1.338 14.167a11.24 11.24 0 0 0 11.086-.181l5.382 1.546l-1.754-4.895a11.74 11.74 0 0 0 2.117-6.759c0-5.272-3.44-9.725-8.153-11.165m-1.436 5.84c.004 8.126-6.581 14.718-14.708 14.722a14.7 14.7 0 0 1-7.321-1.947l-6.917 1.943l2.256-6.18A14.67 14.67 0 0 1 4.5 22.868c0-8.13 6.584-14.723 14.703-14.723s14.715 6.592 14.715 14.719z"></svg:path>`,
})
export class ArcticonsMspWalletIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMsxemuIcon],svg[arcticons-msxemu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.5 12.431v5.15h2.372v-5.15zm17.666 0v5.15H44.5v-5.15z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m44.5 17.58l-.362 19.5H3.862L3.5 17.58"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m35.555 30.005l2.315-2.315l-2.315-2.314l-.778.778v3.073zm0 0l2.315-2.315l2.316 2.314l-.779.778h-3.074zm4.63 0L37.87 27.69l2.316-2.314l.778.778v3.073zm0-4.629L37.87 27.69l-2.315-2.314l.778-.778h3.075zM11.35 23.703v2.543H7.036v-2.543zm4.314 0v2.543H11.35v-2.543z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.987 23.703v2.543h-4.323v-2.543zm4.313 0v2.543h-4.313v-2.543zm-10.788 2.543v2.544H9.198v-2.544zm8.637 0v2.544h-4.324v-2.544z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.462 26.246v2.544h-4.314v-2.544M11.35 31.334H7.036V28.79m8.628 0v2.544H11.35V28.79zm0 0h4.323v2.544h-4.323"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.987 28.79H24.3v2.544h-4.314m-6.886 0v2.543H9.488v-2.543m14.462 0v2.543H13.1v-2.543m14.465 0v2.543H23.95v-2.543zm-1.103-5.088v2.544m4.314 0v-2.544H24.3v-2.543h6.475v7.63H24.3V28.79h4.313v2.544M7.036 28.79v-2.544h4.314"></svg:path><svg:path fill="none" stroke="currentColor" d="M9.198 28.79H7.036"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.872 10.921h15.295v8.286H5.872zm23.976 3.352h11.008v1.583H29.848z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="M5.872 15.064h15.294M5.872 12.993h15.294M5.872 17.134h15.294M7.907 21.663h1.397m1.483 0h1.397m1.483 0h1.397m1.483 0h1.398m7.142 0h1.574m1.671 0h1.573m3.934 0h1.574m1.67 0h1.574m-1.574 0h1.574m1.671 0H41.9"></svg:path>`,
})
export class ArcticonsMsxemuIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMtBankIcon],svg[arcticons-mt-bank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.847 24.138h-.868a1.8 1.8 0 0 1-1.455-.74l-3.564-4.9c-.458-.601-1.263-1.393-1.263-2.566c0-1.107.899-2.07 2.15-2.07c1.219 0 2.082.963 2.082 2.07c0 1.173-.95 2.176-2.706 2.509c-1.957.371-3.18 1.445-3.18 3.216c0 1.431.902 2.48 2.706 2.48c2.371 0 3.767-2.248 5.828-5.012m.115-5.263H38.5m-3.404 10.276V13.862m-3.249 10.265h4.212m-4.367-10.265v.963m6.808-.963v.963m-28.037 9.302V13.862l5.138 10.276l5.138-10.26v10.26M9.5 24.127h1.927m8.349 0h1.927m-.964-10.265h.964m-12.203 0h.963m19.966 5.263h1.806"></svg:path><svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 32.5h37"></svg:path>`,
})
export class ArcticonsMtBankIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMtManagerIcon],svg[arcticons-mt-manager-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 11.5a3 3 0 0 1 3-3h8.718a4 4 0 0 1 2.325.745l4.914 3.51a4 4 0 0 0 2.325.745H40.5a3 3 0 0 1 3 3v20a3 3 0 0 1-3 3h-33a3 3 0 0 1-3-3z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.411 32.187V20.2l6 12l6-11.982V32.2m3.228-12h7.95m-3.975 12v-12"></svg:path>`,
})
export class ArcticonsMtManagerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMtaIcon],svg[arcticons-mta-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.952 9.828C18.46 3.53 29.575 4.177 36.3 11.305c6.725 7.127 6.725 18.263 0 25.39c-6.725 7.128-17.84 7.776-25.348 1.477"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.656 35.562V12.438l5.782 22.16l5.78-20.233v19.27M24 32.672V15.328m-3.469-.578l6.938 1.156m1.229 10.658l4.599-.25m-5.828 5.78l3.468-15.61l3.47 14.453"></svg:path>`,
})
export class ArcticonsMtaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMtbBankingIcon],svg[arcticons-mtb-banking-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 27.442L24 33.273l18.5-5.831m-14.425-6.169l-11.271-6.112l-8.916 5.44m11.874.981l5.789 2.439m-6.995.315l5.79 2.44m-6.995.315l5.789 2.439m1.752-12.007l5.678-2.796l9.61 6.077"></svg:path><svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect>`,
})
export class ArcticonsMtbBankingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMtgfamIcon],svg[arcticons-mtgfam-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 5.454L4.5 19.622l7.448 22.924h24.104L43.5 19.622zm19.5 14.168L24 26.621m0-21.167v21.167M4.5 19.622L24 26.621M11.948 42.546L24 26.621m12.052 15.925L24 26.621"></svg:path>`,
})
export class ArcticonsMtgfamIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMthaiIcon],svg[arcticons-mthai-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.62 33.99v4.142m-6.84 0V42.5m-9.744-8.51h3.905v8.51m0-8.51h4.934c.498 0 .903.402.904.9v3.129h6.84v4.48h1.897l3.582-7.959c.332-.738 1.617-.732 1.947 0m2.62 5.82h-7.141m4.521-5.819l2.62 5.82l.964 2.139h1.783v-8.51m-6.309-15.173l7.545-8.81m-7.545 8.81v11.616h7.545V9.903L32.172 5.5L24 15.722m-8.103 3.096l-7.545-8.812m7.545 8.811l8.104 9.4m8.102-9.4l-8.102 9.4V15.722L15.828 5.5L8.352 9.902v20.532h7.546V18.817"></svg:path>`,
})
export class ArcticonsMthaiIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMticketsIcon],svg[arcticons-mtickets-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M37.962 14.925a3.456 3.456 0 0 1-4.887-4.887L28.539 5.5L5.5 28.538l4.538 4.538a3.456 3.456 0 0 1 4.887 4.886l4.537 4.538L42.5 19.462Zm-16.056-2.793L24 14.226m1.862 1.862l2.094 2.094m1.862 1.862l2.094 2.094M33.774 24l2.094 2.094"></svg:path>`,
})
export class ArcticonsMticketsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMtnMomoIcon],svg[arcticons-mtn-momo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.514 22.84a4.973 4.973 0 0 1-4.977 4.97h0a4.973 4.973 0 0 1-4.977-4.97h0a4.973 4.973 0 0 1 4.977-4.97h0a4.973 4.973 0 0 1 4.977 4.97M31.153 4.5l-4.28 6.593c5.98 4.98 9.916 12.094 11.657 19.62c.41-6.817-.245-13.918-3.433-20.07C34 8.466 32.66 6.416 31.153 4.5M20.42 10.735L9.36 27.509c8.41 1.282 16.409 5.09 22.63 10.893c1.74 1.597 3.38 3.3 4.91 5.098c.734-9.014-1.584-18.514-7.56-25.47c-2.493-2.95-5.547-5.414-8.92-7.295"></svg:path>`,
})
export class ArcticonsMtnMomoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMtsUrentIcon],svg[arcticons-mts-urent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.893 15.995c0 .83-.675 1.504-1.508 1.504h0a1.506 1.506 0 0 1 0-3.012h0c.833 0 1.508.673 1.508 1.504zm7.245 2.245c0 .83-.675 1.504-1.508 1.504h0a1.506 1.506 0 0 1 0-3.012h0c.833 0 1.508.674 1.508 1.504zm5.095 2.43v9.26a3.575 3.575 0 0 1-3.568 3.583H17.358a3.575 3.575 0 0 1-3.59-3.56v-9.279"></svg:path><svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect>`,
})
export class ArcticonsMtsUrentIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMtvKatsomoIcon],svg[arcticons-mtv-katsomo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.45 18.913a14.455 14.455 0 1 1-.002-.116M34.145 37.31l-2.357 6.123l-2.356-6.123m-15.576 2.451a2.332 2.332 0 1 1 4.663 0V43.5m-4.664-6.076V43.5"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.52 39.761a2.332 2.332 0 1 1 4.663 0V43.5m2.77-7.81v6.669a1.05 1.05 0 0 0 1.112 1.111h.333m-2.556-5.891h2.334M20.84 25.493a21.63 21.63 0 0 0 9.213-6a21.63 21.63 0 0 0-9.212-6h0a20.5 20.5 0 0 0 0 12"></svg:path>`,
})
export class ArcticonsMtvKatsomoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMuLauncherIcon],svg[arcticons-mu-launcher-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.75 18.5v7.013a4.25 4.25 0 0 0 4.25 4.25h0a4.25 4.25 0 0 0 4.25-4.25V18.5m0 7.012v4.25m-8.5-4.25V35.5"></svg:path>`,
})
export class ArcticonsMuLauncherIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMubiIcon],svg[arcticons-mubi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="11.67" cy="11.67" r="6.17" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="11.67" cy="24" r="6.17" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="11.67" cy="36.33" r="6.17" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24" cy="11.67" r="6.17" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24" cy="24" r="6.17" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="36.33" cy="24" r="6.17" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24" cy="36.33" r="6.17" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsMubiIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMuchbetterIcon],svg[arcticons-muchbetter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m18.444 34.94l-6.667-22.857m4.56-1.33l6.75-1.968a7.14 7.14 0 0 1 3.998 13.708a7.14 7.14 0 1 1 3.998 13.709L19.773 39.5m7.312-17.007l-6.75 1.971"></svg:path><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsMuchbetterIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMuckeIcon],svg[arcticons-mucke-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.1 6.6h-5.6l-4.8 3.5V6.6h-10l-4.9 3.7V6.6H5.5v34.8l7.3-7.1V14h7.5v27.4l7.4-7.7V14h7.4v27l7.4-7.7V6.6z"></svg:path>`,
})
export class ArcticonsMuckeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMucuteclientIcon],svg[arcticons-mucuteclient-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.749 44.714a21.5 21.5 0 0 1 .029-41.436M14.225 27.04L35.453 5.812m-17.868 30.03l24.083-24.083M23.666 41.923L45.189 20.4"></svg:path>`,
})
export class ArcticonsMucuteclientIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMufgBankIcon],svg[arcticons-mufg-bank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18 10.5c-7.456 0-13.5 6.044-13.5 13.5S10.544 37.5 18 37.5a13.5 13.5 0 0 0 6-1.435a13.5 13.5 0 0 0 6 1.435c7.456 0 13.5-6.044 13.5-13.5S37.456 10.5 30 10.5a13.5 13.5 0 0 0-5.978 1.422A13.5 13.5 0 0 0 18 10.5"></svg:path><svg:circle cx="24" cy="24" r="5.4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24" cy="24" r="12" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsMufgBankIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMufgCardIcon],svg[arcticons-mufg-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m25.8 37.624l1.989 1.988m-6.242-2.005h-2.689m2.056-29.22c-4.018 0-7.275 3.226-7.275 7.206s3.257 7.205 7.275 7.205a7.3 7.3 0 0 0 3.233-.766a7.3 7.3 0 0 0 3.233.766c4.018 0 7.275-3.226 7.275-7.205s-3.257-7.206-7.275-7.206a7.3 7.3 0 0 0-3.222.759a7.3 7.3 0 0 0-3.244-.76"></svg:path><svg:ellipse cx="24.147" cy="15.593" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.91" ry="2.882"></svg:ellipse><svg:ellipse cx="24.147" cy="15.593" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="6.466" ry="6.405"></svg:ellipse><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.982 31.735v-6.05l3.036 6.057l3.035-6.048v6.048m4.906 7.871v-6.057h1.987a2.034 2.034 0 1 1 0 4.068H23.96m-6.956-.042v.025c0 1.108-.9 2.006-2.01 2.006s-2.012-.898-2.012-2.006v-2.045c0-1.108.9-2.006 2.011-2.006s2.011.898 2.011 2.007v.024m3.874-9.902v4.05c0 1.109.9 2.007 2.01 2.007s2.012-.898 2.012-2.007v-4.05m4.723 13.928v-6.057h1.366a2.653 2.653 0 0 1 2.656 2.65v.757a2.653 2.653 0 0 1-2.656 2.65zm-2.885-10.899h1.973m-1.973 3.028v-6.057h3.035m5.245 2.005c0-1.107-.9-2.006-2.011-2.006s-2.011.899-2.011 2.007v2.044a2.01 2.01 0 0 0 4.022 0h-2.011m-14.669 9.878l2.011-6.057l2.011 6.057"></svg:path>`,
})
export class ArcticonsMufgCardIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMujAlbertIcon],svg[arcticons-muj-albert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.55 16.82c.894-2.402.046-4.285-1.837-4.85c-2.73-.847-7.155 2.26-10.027 7.203a17.6 17.6 0 0 0-2.071 5.555a8.04 8.04 0 0 0 1.506 6.214a7.5 7.5 0 0 1-.424-.941c-1.13-2.966 2.73-8.05 10.357-12.005"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.5 30.048c.047 3.342-8.238 6.12-18.548 6.12c-10.31.047-18.69-2.636-18.737-6.026c-.047-3.342 8.286-6.073 18.549-6.12c10.31-.047 18.689 2.636 18.736 6.026"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.965 24.116c4.519-3.295 6.779-6.779 5.366-8.709c-1.93-2.542-9.65-1.365-17.277 2.59S4.568 27.034 5.698 30a6.8 6.8 0 0 0 1.6 2.118a3 3 0 0 1-1.083-1.977"></svg:path>`,
})
export class ArcticonsMujAlbertIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMujVlakIcon],svg[arcticons-muj-vlak-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m22.541 26.622l2.713-15.534l7.583.003c7.024.002 11.708 5.785 10.462 12.917h0c-1.245 7.133-7.949 12.912-14.973 12.91l-7.907-.003l-7.381-.002C7.414 36.91 3.663 32.28 4.66 26.569h0c.997-5.71 6.365-10.338 11.989-10.337l2.636.001"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m27.61 26.623l1.814-10.386h2.515c4.224.002 7.04 3.48 6.292 7.77h0a9.57 9.57 0 0 1-9.006 7.764l-15.288-.005A4.217 4.217 0 0 1 9.73 26.57h0a6.4 6.4 0 0 1 6.021-5.192l2.637.001m1.797-10.293l-12.819-.004"></svg:path>`,
})
export class ArcticonsMujVlakIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMujiIcon],svg[arcticons-muji-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.385 19.45v9.1m-2.677-9.1v6.825c0 1.257-1.073 2.275-2.397 2.275s-2.398-1.018-2.398-2.275v-.755M9.615 28.54v-9.09l4.795 9.1l4.795-9.087v9.087m2.677-9.1v6.086c0 1.665 1.422 3.015 3.177 3.015s3.176-1.35 3.176-3.015V19.45"></svg:path>`,
})
export class ArcticonsMujiIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMullIcon],svg[arcticons-mull-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.666 19.425a5.66 5.66 0 0 1-3.243-5.127v-4.67a1 1 0 0 1 1-1h4.735a5.58 5.58 0 0 1 4.738 2.578m3.514-.986c1.03 4.38 1.61 9.07 1.61 13.57c0 2.21-.13 4.41-.38 6.61c-1.2.59-2.28 1.41-3.17 2.41c0-.04-.01-.1-.02-.14c-.31-1.94-1.11-3.77-2.27-5.37m-1.77-2.01c-1.78-1.71-4-3-6.38-3.65"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.937 24.87c-.896 1.921-2.773 2.942-4.192 2.281h0c-1.42-.662-1.844-2.756-.947-4.678h0c.896-1.922 2.773-2.943 4.192-2.282c1.42.662 1.843 2.757.947 4.678"></svg:path><svg:path fill="currentColor" d="M17.223 23.384a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.884 37.239a37 37 0 0 1-2.8-3.383s1.14-1.04 3.916-1.047c2.776.007 3.823 1.035 3.917 1.047a37 37 0 0 1-2.801 3.383a1.52 1.52 0 0 1-2.232 0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 9.885c-3.917 0-8.516.461-12.65 4.151c2.373-.183 3.987.27 3.987.27c-5.76 2.761-9.063 7.442-10.575 12.24a7.3 7.3 0 0 1 3.957-1.389c-2.01 1.06-4.017 3.344-4.219 5.608a15 15 0 0 1 3.796-1.094a8.2 8.2 0 0 0-3.018 3.158a9.6 9.6 0 0 1 4.431-1.08c5.228 0 7.924 5.195 8.842 7.201c.631 1.382 1.713 2.297 3.144 2.421A3.15 3.15 0 0 0 24 40.37a3.15 3.15 0 0 0 2.305 1.002c1.43-.124 2.513-1.039 3.145-2.42c.917-2.007 3.614-7.203 8.841-7.202c1.542 0 3.062.37 4.43 1.08a8.2 8.2 0 0 0-3.017-3.158c1.308.196 2.584.564 3.796 1.094c-.202-2.264-2.208-4.547-4.219-5.608a7.3 7.3 0 0 1 3.957 1.389c-1.512-4.798-4.814-9.479-10.575-12.24c0 0 1.614-.453 3.988-.27c-4.134-3.69-8.734-4.151-12.65-4.151Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.104 11.206a5.57 5.57 0 0 1 4.737-2.577h4.736a1 1 0 0 1 1 1v4.669a5.66 5.66 0 0 1-3.243 5.127M32.82 27.3c-1.16 1.6-1.96 3.43-2.27 5.37c-.01.04-.02.1-.02.14c-.89-1-1.97-1.82-3.17-2.41c-.25-2.2-.38-4.4-.38-6.61c0-4.5.58-9.19 1.61-13.57m12.38 11.42c-2.38.65-4.6 1.94-6.38 3.65"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.01 20.191c1.42-.661 3.296.36 4.192 2.282h0c.897 1.922.472 4.016-.947 4.678h0c-1.42.662-3.296-.36-4.192-2.281s-.472-4.017.947-4.679"></svg:path><svg:path fill="currentColor" d="M30.777 23.384a.75.75 0 1 1 .75.75a.75.75 0 0 1-.75-.75"></svg:path>`,
})
export class ArcticonsMullIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMullvadvpnIcon],svg[arcticons-mullvadvpn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.81 12.71C19.19 12.39 8.6 14 8.27 14m-1.63 2.51c.21.15 6.09 8.34 8.13 10.14A30 30 0 0 0 17.82 29l-.73 1.29l1.49 1.52a.63.63 0 0 1 0 .85l-3.47 4.16a.82.82 0 0 0 0 1.06c1.25 1.52 5.36 5.62 13.24 5.62a18.18 18.18 0 0 0 13.72-5.74a.83.83 0 0 0 0-1.08l-2.67-3.32l.84.06L38.72 31l1.14.15l-1.38-1.8h1.35L38 27.43l1.68.21l-2-2.38l1.55-.26a22 22 0 0 0-1.94-2.56"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6 14c-.32.69-.48 2 .17 2.38A1.36 1.36 0 0 0 8 15.82c.32-.57.68-2.11-.26-2.42A1.3 1.3 0 0 0 6 14m11.82 15s2.56.33 3.57.33c3.46 0 7.79-3.13 8-3.25s1.63.8 1.51 1c0 0-.81-.83-.93-.78S26.74 31 22.42 31s-4.6-2-4.6-2m21.47-7.68c.32-.58 6.56-10-1-14.62c-5.51-3.31-9-2.43-11.55-.33h0c-1.31-.53-2.92.37-3.59 2a3.6 3.6 0 0 0-.15 2.55l-.05.07l-5.78.32s5.29 1.55 6.9 3c1.07.94 4.26 4.24 6.84 5.64a64.5 64.5 0 0 0 8.81 3.25s-.72-1.29-.43-1.88"></svg:path><svg:ellipse cx="25.46" cy="9.29" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.41" ry="1" transform="rotate(-67.66 25.457 9.298)"></svg:ellipse>`,
})
export class ArcticonsMullvadvpnIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMullwegdeIcon],svg[arcticons-mullwegde-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.25 9.79a2 2 0 0 1-2.06 2.06a1.82 1.82 0 0 1 2.06 2.05a1.81 1.81 0 0 1 2.05-2.05a1.82 1.82 0 0 1-2.05-2.06m4.8 5.92a1.19 1.19 0 0 1-1.22 1.22a1.08 1.08 0 0 1 1.22 1.23a1.08 1.08 0 0 1 1.22-1.23a1.08 1.08 0 0 1-1.22-1.22m-8.87 1s0 3.68-3.67 3.68q3.68 0 3.67 3.67q0-3.68 3.68-3.67q-3.67.03-3.68-3.65ZM24 22.86l4.89 3.68A8.5 8.5 0 0 1 27 28.39s1.75 12.2 0 12.83s-3.89 0-3.48-.86a8.6 8.6 0 0 0 1.07-5.26c0 3.14-.59 3.68-2.53 4.9c-2.39-.32-4.76-3-4.76-3c1.64-1.22.58-.72 3-3.17s5.92-5.91 2.45-2.45a20.1 20.1 0 0 1-7 4.9a44 44 0 0 1-4.32-4.58a30 30 0 0 0 3.45-.93l1.77-.61c-3.67 1.22-4.89.57-6.12 0a11.1 11.1 0 0 1-2-3.35s12.24 1.22 14.69-1.22a3.07 3.07 0 0 1 .78-2.73m3.67 0l11-17.13"></svg:path>`,
})
export class ArcticonsMullwegdeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMultiAppIcon],svg[arcticons-multi-app-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 45.5V24l18.62-10.75v21.5zL5.38 34.75v-21.5L24 2.5v10.75"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.69 40.125v-21.5l18.62-10.75v10.75"></svg:path>`,
})
export class ArcticonsMultiAppIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMultiAppUninstallerIcon],svg[arcticons-multi-app-uninstaller-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.6 14.764h21.883V41.12a2.38 2.38 0 0 1-2.38 2.38H14.98a2.38 2.38 0 0 1-2.38-2.38z"></svg:path><svg:rect width="27.574" height="6.753" x="10.213" y="8.011" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1" ry="1"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.326 8.011V4.5h7.348v3.511M17.59 35.083l11.903-11.902m-11.903 0l11.903 11.902"></svg:path>`,
})
export class ArcticonsMultiAppUninstallerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMultilingOKeyboardIcon],svg[arcticons-multiling-o-keyboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.5 5.5a1.996 1.996 0 0 0-2 2v13a1.996 1.996 0 0 0 2 2h13a1.996 1.996 0 0 0 2-2v-13a1.996 1.996 0 0 0-2-2Zm20 0a1.996 1.996 0 0 0-2 2v13a1.996 1.996 0 0 0 2 2h13a1.996 1.996 0 0 0 2-2v-13a1.996 1.996 0 0 0-2-2Zm-20 20a1.996 1.996 0 0 0-2 2v13a1.996 1.996 0 0 0 2 2h13a1.996 1.996 0 0 0 2-2v-13a1.996 1.996 0 0 0-2-2Zm20 0a1.996 1.996 0 0 0-2 2v13a1.996 1.996 0 0 0 2 2h13a1.996 1.996 0 0 0 2-2v-13a1.996 1.996 0 0 0-2-2Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.9 29.6a.9.9 0 1 1-.9-.9a.9.9 0 0 1 .9.9"></svg:path><svg:path fill="currentColor" d="M32.596 9.25a.75.75 0 0 0 0 1.5a.75.75 0 0 0 0-1.5m2.809 0a.75.75 0 1 0 .75.75a.75.75 0 0 0-.75-.75"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34 34.5h-2.2a1.3 1.3 0 1 0 0 2.6h.2a2.006 2.006 0 0 0 2-2m0-1.31a2.006 2.006 0 0 0-2-2a1.68 1.68 0 0 0-1.4.6m7.1 3.71a1.94 1.94 0 0 1-1.7 1a2.006 2.006 0 0 1-2-2v-1.3a2 2 0 0 1 4 0v.7h-4m-18 .6a2.006 2.006 0 0 1-2 2h0a2.006 2.006 0 0 1-2-2v-1.3a2.006 2.006 0 0 1 2-2h0a2.006 2.006 0 0 1 2 2m.8 3.3a.86.86 0 0 1-.8-.8v-4.5m0-16.7a2.006 2.006 0 0 1-2 2h0a2.006 2.006 0 0 1-2-2v-1.3a2.006 2.006 0 0 1 2-2h0a2.006 2.006 0 0 1 2 2m.8 3.3a.86.86 0 0 1-.8-.8v-4.5m20 3.3a2.006 2.006 0 0 1-2 2h0a2.006 2.006 0 0 1-2-2v-1.3a2.006 2.006 0 0 1 2-2h0a2.006 2.006 0 0 1 2 2m.8 3.3a.86.86 0 0 1-.8-.8v-4.5"></svg:path>`,
})
export class ArcticonsMultilingOKeyboardIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMultipayIcon],svg[arcticons-multipay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.001 16.406L23.394 5.5m-12.614 37l7.579-12.503m8.116-13.591L32.868 5.5M5.52 36.135l6.393-10.906m21.557-4.396l8.06-13.945m-14.424 35.56l-6.726-11.81M36.741 42.5l-6.837-11.888m12.576 5.937l-5.754-9.871M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.614 31.133c-1.428 1.966-3.726 2.246-5.507 1.075S9.91 28.742 11 26.828l6-10.42c.73-1.215 1.572-1.515 2.332-1.47c.761.045 1.453.455 1.936 1.282l2.553 4.286l2.776-4.286c.542-.774 1.175-1.237 1.935-1.282c.761-.045 1.625.27 2.333 1.47l5.955 10.44a3.883 3.883 0 0 1-1.107 5.38c-1.78 1.171-4.25.598-5.588-1.284l-1.5-2.271l-1.165 1.86c-.965 1.47-2.088 2.34-3.559 2.337s-2.698-.85-3.577-2.339l-1.121-1.822z"></svg:path>`,
})
export class ArcticonsMultipayIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMultipleAccountsIcon],svg[arcticons-multiple-accounts-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.384 14.304c-5.293-2.004-11.21.674-13.216 5.98s.66 11.232 5.953 13.235s11.21-.673 13.216-5.98c.427-1.13.652-2.329.664-3.538c.056-5.671 4.69-10.229 10.35-10.18c5.661.05 10.205 4.688 10.148 10.36s-4.69 10.23-10.35 10.18a10.2 10.2 0 0 1-3.53-.662"></svg:path>`,
})
export class ArcticonsMultipleAccountsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMultivncIcon],svg[arcticons-multivnc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.08 7.6H35v13.7H13ZM4.53 32.8h7.28v7.6H4.5Zm10.47 0h7.29v7.6h-7.35Zm10.68 0H33v7.6h-7.35Zm10.53 0h7.29v7.6h-7.31ZM23.93 21.31V27h15.91v5.77M29.31 27v5.8M23.93 27H8.16v5.7M18.59 27v5.8"></svg:path>`,
})
export class ArcticonsMultivncIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMumbai11Icon],svg[arcticons-mumbai-1-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m26.783 20.68l-2.83-1.66L4.5 30.25l6.287 3.63v6.714l12.873-7.433l13.098 7.563v-7.033L43.5 29.8l-13.654-7.884V7.808l-5.82 3.36l-6.741-3.893V22.89"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.846 21.916v8.255l-2.72 1.57m-3.466 1.421l-6.348-3.665v-3.33"></svg:path>`,
})
export class ArcticonsMumbai11Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMuniIcon],svg[arcticons-muni-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.125 24.375v9.75m26-16.25v9.75a6.5 6.5 0 1 1-13 0v-3.25a6.5 6.5 0 1 0-13 0a6.5 6.5 0 1 0-13 0v9.75"></svg:path><svg:circle cx="43.125" cy="14.625" r=".75" fill="currentColor"></svg:circle>`,
})
export class ArcticonsMuniIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMunipolisIcon],svg[arcticons-munipolis-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.997 45.289C10.388 43.793 2.5 34.714 2.5 24C2.5 12.126 12.126 2.5 24 2.5S45.5 12.126 45.5 24c0 10.714-7.888 19.793-18.497 21.289"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.994 35.912A12.286 12.286 0 0 1 11.714 24c0-6.785 5.5-12.286 12.286-12.286h0c6.786 0 12.286 5.5 12.286 12.286h0a12.286 12.286 0 0 1-9.28 11.912"></svg:path><svg:circle cx="24" cy="24" r="3.071" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 27.071V45.5"></svg:path>`,
})
export class ArcticonsMunipolisIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMunsterAppIcon],svg[arcticons-munster-app-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.889 9.961v6.874m3.625 11.813v9.39m3.694-12.707V38.03m-7.319-12.7v12.7m-.3-21.124a3.295 3.295 0 0 0-3.294 3.294c.001.77.272 1.514.764 2.105l-.013.013l6.438 6.383s5.296-5.218 6.32-6.392c1.023-1.175.993-3.326-.286-4.518c-1.214-1.13-3.156-1.232-4.351-.12c-1.196 1.113-1.738 1.72-1.738 1.72s-1.282-1.395-1.728-1.73s-.772-.755-2.111-.755M22.275 9.96v28.07m-3.69-22.09v22.09M14.89 22.351v15.68"></svg:path><svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect>`,
})
export class ArcticonsMunsterAppIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMupdfIcon],svg[arcticons-mupdf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M12.702 6.779c-.653.036-.99.803-.655 1.63c.339.832 1.345 2.04 2.1 2.583c-1.768.304-3.482 1.285-4.776 4.243c2.47 1.297 5.561.469 6.854-1.015v3.669c-.33 2.932-2.33 5.365-4.69 7.365c-2.542 2.153-4.984 4.55-5.044 8.071c-1.723 1.183-.964 3.834.465 4.758c1.417-.455 2.147-2.659.427-4.744c.19-1.464.65-2.41 1.863-2.58v9.495c0 .537.432.969.969.969h1.295a.966.966 0 0 0 .968-.969v-.27c-.008-.415-.135-1.173.473-1.173s.481.758.473 1.173v.27c0 .537.432.969.968.969h1.294a.966.966 0 0 0 .968-.969v-.27c0-1.074 1.378-2.156 3.03-2.156s3.028 1.082 3.028 2.156v.27c0 .537.432.969.968.969h1.295a.966.966 0 0 0 .969-.969v-.27c-.008-.415-.135-1.173.473-1.173s.48.758.472 1.173v.27c0 .537.432.969.969.969h1.295a.966.966 0 0 0 .968-.969v-5.032h4.558a.966.966 0 0 0 .969-.968V14.22c1.292 1.484 4.384 2.312 6.853 1.015c-1.293-2.958-3.007-3.94-4.775-4.243c.754-.542 1.76-1.75 2.1-2.583c.447-1.103-.305-2.097-1.4-1.398c-2.519 1.607-4.27 1.549-6.393 1.549H19.84c-2.122 0-3.874.058-6.392-1.549c-.274-.175-.528-.245-.745-.232Z"></svg:path><svg:path d="M24.102 18.484c0 .913-.574 1.653-1.282 1.653s-1.282-.74-1.282-1.653h0c0-.914.574-1.654 1.282-1.654h0c.708 0 1.282.74 1.282 1.654m6.232 0c0 .913-.574 1.653-1.282 1.653h0c-.708 0-1.281-.74-1.281-1.653h0c0-.914.573-1.654 1.281-1.654h0c.708 0 1.282.74 1.282 1.654m1.696 11.272c0 1.339-.798 2.424-1.782 2.424h0c-.985 0-1.783-1.085-1.783-2.424h0c0-1.339.798-2.424 1.783-2.424h0c.984 0 1.782 1.085 1.782 2.424m-8.622 0c0 1.339-.799 2.424-1.783 2.424h0c-.985 0-1.783-1.085-1.783-2.424s.798-2.424 1.783-2.424s1.783 1.085 1.783 2.424m-2.762-15.48h10.58m-10.58 8.722h10.58m-.896-4.361h.896m-7.13 0h3.688m-7.138 0h.904m-4.07 8.029c2.412-.711 5.39-1.098 8.456-1.098c3.01 0 5.936.372 8.326 1.06"></svg:path><svg:path d="m34.253 17.005l-5.778-6.381h-10.99v23.521h11.524"></svg:path></svg:g>`,
})
export class ArcticonsMupdfIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMupdfAltIcon],svg[arcticons-mupdf-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 10.762c5.714 0 10.345 4.632 10.345 10.345S29.714 31.453 24 31.453S13.655 26.82 13.655 21.107S18.286 10.762 24 10.762m0 5.39a4.957 4.957 0 1 0-.001 9.913H24a4.957 4.957 0 0 0 4.958-4.956v-.002A4.957 4.957 0 0 0 24 16.151"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.528 42.5H38.5a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h10.972v-5.922c0-1.076.872-1.947 1.948-1.947h3.16c1.076 0 1.948.871 1.948 1.947z"></svg:path>`,
})
export class ArcticonsMupdfAltIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMurglar2Icon],svg[arcticons-murglar-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.392 5.501L31.766 42.5m-7.879-24.948H35.7m-10.305 4.505H35.7m-8.798 4.505h4.16m2.508 1.973l2.203 2.203l2.203-2.203m-2.204-2.866v5.062m-3.614 2.138h7.23"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 5.5h29c2.216 0 4 1.784 4 4v29c0 2.216-1.784 4-4 4h-29c-2.216 0-4-1.784-4-4v-29c0-2.216 1.784-4 4-4"></svg:path><svg:circle cx="12.079" cy="28.818" r="3.182" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.041 16h3.225c.43 0 .78.35.78.78v1.97c0 .43-.35.78-.78.78H15.26v-2.75c0-.43.35-.78.78-.78m-.779 3.53v9.288"></svg:path>`,
})
export class ArcticonsMurglar2Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMusclewikiIcon],svg[arcticons-musclewiki-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.449 29.994V5.5L24 25.116L40.551 5.537V30.02"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.808 20.181V42.5L24 29.293l-9.808 13.172v-22.31"></svg:path>`,
})
export class ArcticonsMusclewikiIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMuseDashIcon],svg[arcticons-muse-dash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 17.476c6.383 3.743 10.313 2.734 15.444 4.795c0 0-.084-4.164.925-6.35c-.378 2.607.8 4.626 3.449 6.35c-.673-5.51-.187-9.832 4.523-16.51C29.547 14.08 39.196 24 39.196 24c-.505 3.654-4.668 7.565-4.668 7.565c3.449.084 5.467-2.27 5.467-2.27c-1.976 3.91-11.313 7.78-11.313 7.78m-9.2 1.115c-2.176-3.113-9.533-6.625-13.982-7.13"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.958 20.505C12.91 20.757 10.682 24 10.682 24m-1.093-.972c.462 2.902 3.827 6.729 3.827 6.729c-2.776.168-5.594-3.365-5.594-3.365"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.954 32.985c-1.314-1.798-.833-3.81-.833-3.81m9.571 2.558C24.14 32.238 27 31.08 27 31.08c.589 2.672-.9 4.222-3 4.228c-3.056.009-3.308-3.575-3.308-3.575m1.251-2.702c.546-.694 2.334-.914 3.26-.115m3.5-6.664c3.218-1.58 6.73-.801 9.19 2.374"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M37.366 24s-2.539 5.71-6.181 4.407c-4.1-1.468-1.822-6.444-1.822-6.444m-10.177-.302c1.905 4.29-1.312 7.928-4.971 6.098S11.7 22.92 11.7 22.92m16.457-8.408c1.009-.652 4.436-1.935 4.436-1.935m-16.233-.799a41 41 0 0 1 2.797 2.628M28.892 42.5s2.313.105 1.935-3.112s-4.122-2.755-4.858-.379c-1.598-.63-4.394-.19-5.11.589c-1.45-1.872-3.565-3.334-4.877-.105c-1.052 2.586 2.586 3.007 2.586 3.007m-1.717-15.995l-.141-2.636m15.056 2.93l.112-2.496"></svg:path>`,
})
export class ArcticonsMuseDashIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMusekitIcon],svg[arcticons-musekit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="11.225" cy="37.75" r="4.75" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="36.775" cy="31.75" r="4.75" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.975 37.75V13.08A4.75 4.75 0 0 1 19.9 8.402l16.05-2.83a4.75 4.75 0 0 1 5.575 4.678v21.5"></svg:path>`,
})
export class ArcticonsMusekitIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMusescoreIcon],svg[arcticons-musescore-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:circle cx="33" cy="20.4" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.5 25.35v7.2m0-7.2a4.513 4.513 0 0 1 4.5-4.5h0a4.513 4.513 0 0 1 4.5 4.5m0 0v2.925a4.513 4.513 0 0 0 4.5 4.5h.001a4.51 4.51 0 0 0 4.499-4.5V23.1m-18 2.25a4.513 4.513 0 0 0-4.5-4.5h0a4.513 4.513 0 0 0-4.5 4.5v7.2m18-12.825a4.513 4.513 0 0 1 4.5-4.5h.001a4.51 4.51 0 0 1 4.5 4.5"></svg:path>`,
})
export class ArcticonsMusescoreIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMuseumpoolIcon],svg[arcticons-museumpool-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.717 20.39h.07m0 0l4.212 3.657l4.213-3.658m0 0h.07m-8.495 6.25l4.212 3.599l4.213-3.598M9.249 20.39v15.996H7.092v1.366H5.5v3.592h37v-3.592h-1.593v-1.366h-2.158V20.39h-4.144v15.999h-2.25v-16h-4.144v15.999h-8.425V20.389h-4.145v15.999h-2.249V20.389zm-2.006-4.543h33.513v4.542H7.243zm31.393 0v-2.11l-14.574-7.08l-14.573 7.082v2.109z"></svg:path>`,
})
export class ArcticonsMuseumpoolIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMusicIcon],svg[arcticons-music-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m42.31 13.38l-25.1 3.48V7.98l25.1-3.48zm0 0v17.15m-25.1-13.67v20.88"></svg:path><svg:circle cx="11.45" cy="37.74" r="5.76" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="36.55" cy="30.53" r="5.76" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsMusicIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMusicAiIcon],svg[arcticons-music-ai-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.043 15.912v16.176m-6.21-15.231v9.217m12.42-4.152v9.257m6.247-7.053v4.924m-25-10.029v4.924"></svg:path><svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect>`,
})
export class ArcticonsMusicAiIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMusicAlt1Icon],svg[arcticons-music-alt-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.082 4.5v22.757a8.77 8.77 0 0 0-4.388-1.178c-4.83 0-8.745 3.9-8.744 8.712c0 4.81 3.916 8.71 8.744 8.709c4.407-.005 8.698-3.245 8.704-8.173l.028-22.163h8.624V4.5z"></svg:path>`,
})
export class ArcticonsMusicAlt1Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMusicAlt2Icon],svg[arcticons-music-alt-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.36 26.95v10.16m1.997.002c.85 0 1.535-.69 1.535-1.546v-7.07c0-.857-.684-1.546-1.535-1.546H9.105c-2.551 0-4.605 2.068-4.605 4.636v.89c0 2.568 2.054 4.635 4.605 4.635zm23.282-10.163v10.16m-1.996.003c-.85 0-1.535-.69-1.535-1.546v-7.07c0-.857.684-1.546 1.535-1.546h4.252c2.551 0 4.605 2.068 4.605 4.636v.89c0 2.568-2.054 4.635-4.605 4.635zM10.973 26.95v-3.7c0-6.848 5.477-12.362 12.28-12.362h1.492c6.804 0 12.281 5.514 12.281 12.362v3.7"></svg:path>`,
})
export class ArcticonsMusicAlt2Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMusicAlt3Icon],svg[arcticons-music-alt-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.297 36.017c1.064 2.177-.524 5.151-3.547 6.644s-6.336.94-7.4-1.237h0c-1.065-2.176.524-5.15 3.547-6.643q0 0 0 0c3.023-1.494 6.336-.94 7.4 1.236"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.623 37.417V4.5c2.112 8.053 8.126 10.351 9.957 17.387c1.36 5.223-1.012 8.128-2.999 11.606c6.817-11.242.284-18.77-6.86-19.563"></svg:path>`,
})
export class ArcticonsMusicAlt3Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMusicBowersAndWilkinsIcon],svg[arcticons-music-bowers-and-wilkins-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.699 26.927c7.974 0 9.935 13.624 24.965 13.624c7.648 0 10.723-1.852 13.45-3.536"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.394 30.152C7.028 28.902 10.28 26.7 15.72 26.7c7.794 0 17.551 7.038 27.451 7.038"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M45.349 26.558C32.472 28.229 15.41 35.704 8.527 38.927M35.54 13.643l-2 8l-2-8l-2 8l-2-8m-11.78 4a2 2 0 1 1 0 4h-3.3v-8h3.3a2 2 0 1 1 0 4m0 0h-3.3m14.093 4h-.676a1.4 1.4 0 0 1-1.132-.577l-2.775-3.814c-.357-.468-.984-1.084-.984-1.998c0-.862.7-1.611 1.674-1.611a1.6 1.6 0 0 1 1.621 1.611c0 .913-.74 1.694-2.106 1.953c-1.524.29-2.477 1.126-2.477 2.504c0 1.115.703 1.932 2.107 1.932c1.846 0 2.933-1.751 4.538-3.903"></svg:path>`,
})
export class ArcticonsMusicBowersAndWilkinsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMusicDownloaderIcon],svg[arcticons-music-downloader-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m34.299 16.729l-16.258 2.254v-5.752l16.258-2.254zm0 0v11.108m-16.258-8.854v13.524"></svg:path><svg:circle cx="14.31" cy="32.507" r="3.731" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="30.568" cy="27.837" r="3.731" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 42.499v-8m-3.297 4.704l3.297 3.296l3.297-3.296"></svg:path><svg:circle cx="38.5" cy="38.499" r="7" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.432 43.326A21.4 21.4 0 0 1 24 45.5C12.126 45.5 2.5 35.874 2.5 24S12.126 2.5 24 2.5S45.5 12.126 45.5 24c0 3.383-.781 6.583-2.173 9.43"></svg:path>`,
})
export class ArcticonsMusicDownloaderIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMusicEditorIcon],svg[arcticons-music-editor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 13.97v3.362m6.5-7.285v11.207m3.25-15.129v19.052m3.25-15.13v11.207m3.25-9.526v7.845M24 8.366v14.57M7.75 11.728v7.845m19.5-7.845v7.845m3.25-9.526v11.207m3.25-15.129v19.052M37 10.047v11.207m3.25-9.526v7.845m3.25-5.603v3.362m-25.103 8.965l8.405 11.207m-5.604 0l8.405-11.207"></svg:path><svg:circle cx="19.181" cy="39.41" r="2.466" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="28.819" cy="39.41" r="2.466" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsMusicEditorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMusicPartyIcon],svg[arcticons-music-party-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.116 11.774v24.452M8.804 16.833v14.334M4.5 21.471v5.058m12.957-9.696v14.334m4.49-9.696v5.058m12.722-14.755v24.452m-4.312-19.393v14.334m-4.304-9.696v5.058m12.957-9.696v14.334m4.49-9.696v5.058"></svg:path>`,
})
export class ArcticonsMusicPartyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMusicSpeedChangerIcon],svg[arcticons-music-speed-changer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m20.919 21.683l-11.973-8.37c-1.874-1.31-4.446.03-4.446 2.317v16.739c0 2.285 2.572 3.626 4.446 2.316l11.973-8.37a2.826 2.826 0 0 0 0-4.633Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.632 14.584v-2.83c0-1.757 1.98-2.792 3.428-1.78l17.51 12.242a2.175 2.175 0 0 1 0 3.568L25.06 38.026c-1.448 1.012-3.428-.022-3.428-1.788v-2.822"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.203 31.71v2.563c0 2.12 2.393 3.369 4.13 2.15l4.299-3.007l10.395-7.262a2.624 2.624 0 0 0 0-4.307l-10.395-7.262l-4.3-3.007c-1.736-1.22-4.13.022-4.13 2.15v2.563"></svg:path>`,
})
export class ArcticonsMusicSpeedChangerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMusicWidgetIcon],svg[arcticons-music-widget-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="13.928" height="13.921" x="4.5" y="27.211" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx=".928" ry=".928"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m8.18 27.21l-.208-16.713c-.037-2.978 2.666-4.184 4.883-2.804l17.35 10.8c2.715 1.69 2.84 4.818-.104 6.646l-11.21 6.957"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m19.829 31.514l-.013 2.657c-.013 2.536 2.805 2.645 5.194 1.092l16.622-10.8c1.97-1.28 2.941-3.661.052-5.503L24.334 7.901c-2.547-1.624-5.245-1.555-5.245 1.817v1.817"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m7.997 12.474l15.974 11.47c1.812 1.301 1.914 3.811.525 4.673"></svg:path><svg:circle cx="10.379" cy="36.732" r="1.207" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.586 36.732v-5.47h1.254"></svg:path>`,
})
export class ArcticonsMusicWidgetIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMusicYouIcon],svg[arcticons-music-you-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="18.538" cy="35.378" r="8.122" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.66 35.378V12.834M28.69 4.5h6.864a2.03 2.03 0 0 1 2.03 2.03v4.273a2.03 2.03 0 0 1-2.03 2.03H26.66h0V6.53a2.03 2.03 0 0 1 2.03-2.03"></svg:path>`,
})
export class ArcticonsMusicYouIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMusicbrainzIcon],svg[arcticons-musicbrainz-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="31.966" cy="12.004" r="1.413" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="37.952" cy="16.16" r="1.413" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="38.117" cy="23.342" r="1.413" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="38.117" cy="31.325" r="1.413" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="33.123" cy="35.749" r="1.413" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="30.054" cy="29.795" r="1.413" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="31.052" cy="18.987" r="1.413" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.221 17.844A7.14 7.14 0 0 0 26.5 14.66m1.147.496a8 8 0 0 0 3.605-1.933m6.118 4.225a11.7 11.7 0 0 0 .06 4.66m-.177 8.105s-2.834-3.453-3.458-3.952a6.2 6.2 0 0 0-3.741-1.164c-1.982.026-2.673-.873-3.553-1.561"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.966 25.366s2.782-2.074 4.737-2.024m-4.851 13.015c-3.215 1.827-3.073-.56-5.352-.313m3.138-4.904s-1.437 3.672-3.138 4.904"></svg:path><svg:ellipse cx="11.154" cy="32.475" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="3.055" ry="2.078" transform="rotate(-23.434 11.154 32.475)"></svg:ellipse><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.07 31.751V12.876l7.43-4.612m-7.43 16.147l7.43-4.612m-7.43-.531l7.43-4.612m5-11.173l16.519 9.537v21.96L26.5 44.517z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.5 44.518L4.981 34.98V13.02L21.5 3.482z"></svg:path>`,
})
export class ArcticonsMusicbrainzIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsMusicoletIcon],svg[arcticons-musicolet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.52 4.5a1.14 1.14 0 0 0-1.15 1.15v36.7a1.13 1.13 0 0 0 1.68 1l15.51-9.18L40.07 25a1.17 1.17 0 0 0 0-2l-15.51-9.17L9.05 4.65a1.2 1.2 0 0 0-.53-.15m12 14.78v11.26h0v0a3.26 3.26 0 0 1-3.49 3a3.26 3.26 0 0 1-3.49-3a3.26 3.26 0 0 1 3.49-3a4.19 4.19 0 0 1 3.5 1.63V15.72a5.2 5.2 0 0 0 .28 1.54a5.3 5.3 0 0 0 1 1.09a5.18 5.18 0 0 1 2 4.2"></svg:path>`,
})
export class ArcticonsMusicoletIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
