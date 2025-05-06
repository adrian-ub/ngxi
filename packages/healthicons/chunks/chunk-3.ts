import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsMedicalRecordsNegativeIcon],svg[healthicons-medical-records-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsMedicalRecordsNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM9 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3zm7 6h3a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2h3a2 2 0 0 1 2 2v22a2 2 0 0 1-2 2H16a2 2 0 0 1-2-2V14a2 2 0 0 1 2-2m8.557 16l-2.493 6.649a1 1 0 1 0 1.872.702l1.259-3.355h2.61l1.259 3.355a1 1 0 1 0 1.872-.702L28.444 28h2.858a1 1 0 1 0 0-2h-10.3a1 1 0 0 0 0 2zM31 19.24H17v-2h14zM17 23.4h5v-2h-5zm11.5-.4a2 2 0 1 1-4 0a2 2 0 0 1 4 0M27 12h-6v2h6z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsMedicalRecordsNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsMedicalRecordsNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsMedicalRecordsOutlineIcon],svg[healthicons-medical-records-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M21 10a2 2 0 0 0-2 2h-3a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V14a2 2 0 0 0-2-2h-3a2 2 0 0 0-2-2zm0 2h6v2h-6zm3.557 16l-2.493 6.649a1 1 0 1 0 1.872.702l1.259-3.355h2.61l1.259 3.355a1 1 0 1 0 1.872-.702L28.444 28h2.858a1 1 0 1 0 0-2h-10.3a1 1 0 0 0 0 2zM31 19.24H17v-2h14zM17 23.4h5v-2h-5zm11.5-.4a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path><svg:path d="M39 8H9a1 1 0 0 0-1 1v30a1 1 0 0 0 1 1h30a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1M9 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3z"></svg:path></svg:g>`,
})
export class HealthiconsMedicalRecordsOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsMedicalSampleIcon],svg[healthicons-medical-sample-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M18.142 4L4 18.142l7.778 7.778L25.92 11.778zm-1.328 4.35l-1.415 1.415l4.95 4.95l1.414-1.415zm-3.536 3.536L11.864 13.3l4.95 4.95l1.414-1.414zm-3.536 3.536l-1.414 1.414l4.95 4.95l1.414-1.415z"></svg:path><svg:path d="m11.864 23.2l11.314-11.314l17.677 17.678a8 8 0 1 1-11.313 11.313zm2.828 0l16.264 16.263a6 6 0 0 0 8.485-8.485L23.178 14.714z"></svg:path><svg:path d="m19.642 23.907l7.779-7.778l12.02 12.02l-7.778 7.779zm2.829 0l9.192 9.192l4.95-4.95l-9.192-9.192z"></svg:path><svg:path d="M27.066 29.917c-1.414.707-3.182 2.475-3.536 3.536l6.718 6.717a7 7 0 0 0 9.9-9.899l-2.122-2.12l-6.363 6.363z"></svg:path><svg:path d="m24.755 33.263l6.2 6.2a6 6 0 0 0 8.486-8.485l-1.415-1.414l-6.363 6.364l-4.755-4.755a9.3 9.3 0 0 0-1.3 1.087a7.3 7.3 0 0 0-.853 1.003m-.562-2.418c.712-.712 1.593-1.406 2.426-1.822l.12-.06l.656-.132l4.268 4.268l6.363-6.363l2.83 2.828a8 8 0 1 1-11.314 11.313l-7.072-7.07l.083-.585l.029-.085c.253-.761.924-1.605 1.611-2.292"></svg:path></svg:g>`,
})
export class HealthiconsMedicalSampleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsMedicalSampleNegativeIcon],svg[healthicons-medical-sample-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm18.142 4L4 18.142l7.778 7.778l1.403-1.403l16.36 16.36a8 8 0 1 0 11.314-11.313l-16.36-16.36l1.425-1.426zm18.47 24.15l-9.192-9.193l-4.95 4.95l9.193 9.192zM26.007 17.543l-2.828-2.828l-8.486 8.485l9.346 9.345c.523-.715 1.337-1.51 2.152-2.09l-6.548-6.548zm-7.778-.707l-4.95-4.95l-1.414 1.414l4.95 4.95zM16.814 8.35l-1.415 1.415l4.95 4.95l1.414-1.415zm-7.072 7.072l-1.414 1.414l4.95 4.95l1.414-1.415z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsMedicalSampleNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsMedicalSampleOutlineIcon],svg[healthicons-medical-sample-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M4.08 18.222L18.222 4.08L26 11.858L11.858 26zm2.828 0l4.95 4.95l11.314-11.314l-4.95-4.95z"></svg:path><svg:path d="m11.858 23.172l11.314-11.314l17.677 17.678a8 8 0 1 1-11.313 11.313zm2.828 0L30.95 39.435a6 6 0 1 0 8.485-8.485L23.172 14.686z"></svg:path><svg:path d="m19.636 23.879l7.778-7.779l12.021 12.021l-7.778 7.779zm2.829 0l9.192 9.192l4.95-4.95l-9.193-9.192zM8.322 13.98l7.425 7.424l-1.414 1.414l-7.425-7.425zm3.536-3.536l7.424 7.424l-1.414 1.415l-7.424-7.425zm3.535-3.536l7.425 7.425l-1.414 1.414l-7.425-7.425z"></svg:path><svg:path d="M25.602 32.231c-.639.64-1.028 1.21-1.128 1.51l-1.898-.633c.254-.76.925-1.604 1.612-2.29c.712-.713 1.593-1.407 2.425-1.823l.895 1.788c-.582.291-1.292.835-1.906 1.448"></svg:path></svg:g>`,
})
export class HealthiconsMedicalSampleOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsMedicalSearchIcon],svg[healthicons-medical-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M25 19v-4h4v4h4v4h-4v4h-4v-4h-4v-4z"></svg:path><svg:path fill-rule="evenodd" d="M27 36c8.284 0 15-6.716 15-15S35.284 6 27 6s-15 6.716-15 15c0 3.826 1.432 7.317 3.79 9.967l-1.158 1.159l-1.705.119L6 39.172L8.828 42l6.884-6.884l.158-1.4l1.346-1.346A14.94 14.94 0 0 0 27 36m0-2c7.18 0 13-5.82 13-13S34.18 8 27 8s-13 5.82-13 13s5.82 13 13 13" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="m16.537 30.302l.627.705l.704.605a13.94 13.94 0 0 0 8.481 3.373c-7.275-.333-13.103-6.219-13.341-13.519a13.94 13.94 0 0 0 3.53 8.836m-1.463 2.795l-1.705.12l-5.955 5.955l1.414 1.414l5.93-5.93l.158-1.4zm.638 2.02L8.828 42L6 39.172l6.927-6.927l1.705-.12l1.158-1.158A14.94 14.94 0 0 1 12 21c0-8.284 6.716-15 15-15s15 6.716 15 15s-6.716 15-15 15a14.94 14.94 0 0 1-9.784-3.63l-1.346 1.346zM26 20h-4v2h4v4h2v-4h4v-2h-4v-4h-2zm3-5v4h4v4h-4v4h-4v-4h-4v-4h4v-4zm11 6c0 7.18-5.82 13-13 13s-13-5.82-13-13S19.82 8 27 8s13 5.82 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsMedicalSearchIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsMedicalSearch1Icon],svg[healthicons-medical-search-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="M0 0h48v48H0z"></svg:path><svg:path fill="currentColor" d="M23 31.584a5 5 0 1 1 0-9.168z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M10.005 4.898A1 1 0 0 1 11 4h10a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v2.273a1.5 1.5 0 0 1 1 1.415V18a9 9 0 0 1 7.032 14.618l2.45 2.45a2 2 0 0 1 1.932.518l5 5a2 2 0 1 1-2.828 2.828l-5-5a2 2 0 0 1-.518-1.932l-2.45-2.45A8.96 8.96 0 0 1 21 36v3a5.002 5.002 0 0 1-10 0V12.688a1.5 1.5 0 0 1 1-1.415V9h-1a1 1 0 0 1-1-1V5q0-.053.005-.102m7.365 16.115a7 7 0 1 1-1.367 10.889L16 31.899A6.98 6.98 0 0 1 14 27a6.98 6.98 0 0 1 2-4.899a7 7 0 0 1 1.37-1.088m1.63-7.91a1.5 1.5 0 0 1-1-1.415V9h-4v2.688a1.5 1.5 0 0 1-1 1.414V18h6z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsMedicalSearch1Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsMedicalSearch1NegativeIcon],svg[healthicons-medical-search-1-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsMedicalSearch1Negative0)"><svg:path fill-rule="evenodd" d="M21 20a6.97 6.97 0 0 0-5 2.101A6.98 6.98 0 0 0 14 27a6.98 6.98 0 0 0 2 4.899l.003.003l.047.048A6.98 6.98 0 0 0 21 34a7 7 0 0 0 0-14m0 12c.711 0 1.387-.148 2-.416v-9.168A5 5 0 1 0 21 32" clip-rule="evenodd"></svg:path><svg:path d="M18 11.688a1.5 1.5 0 0 0 1 1.414V18h-6v-4.898a1.5 1.5 0 0 0 1-1.415V9h4z"></svg:path><svg:path fill-rule="evenodd" d="M48 0H0v48h48zM11 4a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h1v2.273a1.5 1.5 0 0 0-1 1.415V39a5.002 5.002 0 0 0 10 0v-3a8.96 8.96 0 0 0 5.618-1.968l2.45 2.45a2 2 0 0 0 .518 1.932l5 5a2 2 0 1 0 2.828-2.828l-5-5a2 2 0 0 0-1.932-.518l-2.45-2.45A9 9 0 0 0 21 18v-5.312a1.5 1.5 0 0 0-1-1.415V9h1a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsMedicalSearch1Negative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsMedicalSearch1NegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsMedicalSearch1OutlineIcon],svg[healthicons-medical-search-1-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="M0 0h48v48H0z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M21 20.132a8.5 8.5 0 0 1 8.176 13.63l1.306 1.306a2 2 0 0 1 1.932.518l5 5a2 2 0 1 1-2.828 2.828l-5-5a2 2 0 0 1-.518-1.932l-1.306-1.306A8.46 8.46 0 0 1 22.5 37a8.6 8.6 0 0 1-1.5-.132V39a5.002 5.002 0 0 1-10 0V12.688a1.5 1.5 0 0 1 1-1.415V10h-1a1 1 0 0 1-1-1V5q0-.053.005-.102A1 1 0 0 1 11 4h10a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-1v1.273a1.5 1.5 0 0 1 1 1.415zM14 10h4v1.273a2 2 0 0 0 1 1.732V18h-6v-4.995a2 2 0 0 0 1-1.732zm-1 10v19a3.002 3.002 0 0 0 6 0v-2.752a8.5 8.5 0 0 1-5-7.748a8.5 8.5 0 0 1 5-7.748V20zM12 8h8V6h-8zm9 14.174a6.495 6.495 0 0 0-5 6.326a6.495 6.495 0 0 0 6.5 6.5a6.47 6.47 0 0 0 3.835-1.251a6.5 6.5 0 0 0 1.414-1.414A6.5 6.5 0 0 0 23 22.019V33.5h-2z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsMedicalSearch1OutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsMedicalSearchNegativeIcon],svg[healthicons-medical-search-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" fill-rule="evenodd" clip-path="url(#healthiconsMedicalSearchNegative0)" clip-rule="evenodd"><svg:path d="M27 34c7.18 0 13-5.82 13-13S34.18 8 27 8s-13 5.82-13 13s5.82 13 13 13m-2-15v-4h4v4h4v4h-4v4h-4v-4h-4v-4z"></svg:path><svg:path d="M0 0h48v48H0zm14.632 32.126l-1.705.119L6 39.172L8.828 42l6.884-6.884l.158-1.4l1.346-1.346A14.94 14.94 0 0 0 27 36c8.284 0 15-6.716 15-15S35.284 6 27 6s-15 6.716-15 15c0 3.826 1.432 7.317 3.79 9.967z"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsMedicalSearchNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsMedicalSearchNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsMedicalSearchOutlineIcon],svg[healthicons-medical-search-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M24 24h-4v-6h4v-4h6v4h4v6h-4v4h-6zm-2-2v-2h4v-4h2v4h4v2h-4v4h-2v-4z"></svg:path><svg:path d="M27 36c8.284 0 15-6.716 15-15S35.284 6 27 6s-15 6.716-15 15c0 3.782 1.4 7.238 3.71 9.876l-1.893 1.893l-2.707-.121l-6.524 6.524l4.242 4.242l6.472-6.471l-.004-2.825l1.828-1.828A14.94 14.94 0 0 0 27 36m0-2c7.18 0 13-5.82 13-13S34.18 8 27 8s-13 5.82-13 13s5.82 13 13 13M8.828 40.586l-1.414-1.414l4.486-4.487l1.397.063l.002 1.367z"></svg:path></svg:g>`,
})
export class HealthiconsMedicalSearchOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsMedicineBottleIcon],svg[healthicons-medicine-bottle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9 7a3 3 0 0 1 3-3h24a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3v23a3 3 0 0 1-3 3H15a3 3 0 0 1-3-3V18a3 3 0 0 1-3-3zm7 9V6h-4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1zm2 0h5V6h-5zm7 0h5V6h-5zm7 0h4a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-4zm-9 14v5h2v-5h5v-2h-5v-5h-2v5h-5v2z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsMedicineBottleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsMedicineBottleNegativeIcon],svg[healthicons-medicine-bottle-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsMedicineBottleNegative0)"><svg:path d="M16 16h-4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h4zm7 0h-5V6h5zm7 0h-5V6h5zm2 0V6h4a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1zm-9 19v-5h-5v-2h5v-5h2v5h5v2h-5v5z"></svg:path><svg:path fill-rule="evenodd" d="M48 0H0v48h48zM12 4a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3v23a3 3 0 0 0 3 3h18a3 3 0 0 0 3-3V18a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsMedicineBottleNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsMedicineBottleNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsMedicineBottleOutlineIcon],svg[healthicons-medicine-bottle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M23 23v5h-5v2h5v5h2v-5h5v-2h-5v-5z"></svg:path><svg:path fill-rule="evenodd" d="M9 7a3 3 0 0 1 3-3h24a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3v23a3 3 0 0 1-3 3H15a3 3 0 0 1-3-3V18a3 3 0 0 1-3-3zm5 11h20v23a1 1 0 0 1-1 1H15a1 1 0 0 1-1-1zm22-2h-4V6h4a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1M30 6h-5v10h5zM12 6h4v10h-4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1m6 10V6h5v10z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsMedicineBottleOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsMedicineMortarIcon],svg[healthicons-medicine-mortar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M38.014 7.265a3 3 0 0 0-4.02.97L27.685 18h8.248l3.42-6.671a3 3 0 0 0-1.17-3.967z"></svg:path><svg:path fill-rule="evenodd" d="M43 22h-2v3c0 5.784-3.778 10.686-9 12.373V41a1 1 0 0 1-1 1H17a1 1 0 0 1-1-1v-3.627C10.778 35.686 7 30.784 7 25v-3H5v-2h38zM18 38v2h12v-2z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsMedicineMortarIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsMedicineMortarNegativeIcon],svg[healthicons-medicine-mortar-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsMedicineMortarNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM33.994 8.235a3 3 0 0 1 4.02-.97l.168.097a3 3 0 0 1 1.17 3.967L35.932 18h-8.247zM41 22h2v-2H5v2h2v3c0 5.784 3.778 10.686 9 12.373V41a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3.627c5.222-1.687 9-6.589 9-12.373zM20 38h10v2H18v-2z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsMedicineMortarNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsMedicineMortarNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsMedicineMortarOutlineIcon],svg[healthicons-medicine-mortar-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M37.014 8.997a1 1 0 0 0-1.34.323L28.774 20h3.886l4.913-9.584a1 1 0 0 0-.39-1.322zM34.908 20l4.444-8.671a3 3 0 0 0-1.17-3.967l-.168-.097a3 3 0 0 0-4.02.97L26.394 20H6v2h1v3c0 5.784 3.778 10.686 9 12.373V41a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3.627c5.222-1.687 9-6.589 9-12.373v-3h1v-2zM39 22H9v3c0 6.075 4.925 11 11 11h8c6.075 0 11-4.925 11-11zM20 38h-2v2h12v-2z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsMedicineMortarOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsMedicinesIcon],svg[healthicons-medicines-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M42 14a8 8 0 1 1-16 0a8 8 0 0 1 16 0m-3.718.985a1 1 0 0 1-1.198.75l-6.616-1.52a1 1 0 0 1 .448-1.95l6.616 1.521a1 1 0 0 1 .75 1.199" clip-rule="evenodd"></svg:path><svg:path d="M16.778 9.245c-.647-1.532-2.813-1.686-3.682-.263L6.292 20.115c-.785 1.284.092 2.924 1.623 3.033l11.866.846c1.53.11 2.644-1.388 2.06-2.77z"></svg:path><svg:path fill-rule="evenodd" d="M35.385 36.36a6 6 0 0 0-5.071-10.876l-10.876 5.07a6 6 0 1 0 5.071 10.877zm-5.442.33l4.597-2.143a4 4 0 0 0-3.381-7.25l-4.597 2.143z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsMedicinesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsMedicines24pxIcon],svg[healthicons-medicines-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="healthiconsMedicines24px0" d="M8.298 3.851C7.824 2.71 6.25 2.6 5.621 3.664L2.277 9.327a1.5 1.5 0 0 0 1.187 2.259l5.868.41a1.5 1.5 0 0 0 1.49-2.072z"></svg:path><svg:path id="healthiconsMedicines24px1" d="M16.5 2a4.5 4.5 0 1 0 0 9a4.5 4.5 0 0 0 0-9m-2.416 3.856a1 1 0 0 1 1.225-.707l2.898.777a1 1 0 1 1-.518 1.931l-2.898-.776a1 1 0 0 1-.707-1.225M8.828 21.684a3.75 3.75 0 0 1-.348-7.156l6.108-2.223a3.75 3.75 0 1 1 2.565 7.048l-6.108 2.223q-.366.132-.736.187m2.144-6.553l2.819-1.026a1.75 1.75 0 0 1 1.197 3.29l-2.82 1.025z"></svg:path></svg:defs><svg:mask id="healthiconsMedicines24px2" fill="none"><svg:use href="#healthiconsMedicines24px0"></svg:use><svg:use href="#healthiconsMedicines24px1" fill-rule="evenodd" clip-rule="evenodd"></svg:use></svg:mask><svg:g fill="currentColor"><svg:use href="#healthiconsMedicines24px0"></svg:use><svg:use href="#healthiconsMedicines24px1" fill-rule="evenodd" clip-rule="evenodd"></svg:use><svg:path d="m10.362 20.764l-1.481-.078l-.106 1.997l1.48.078zm-4.74-17.1L3.898 2.647zm2.676.187l-1.847.768zm-6.02 5.476l1.721 1.017zm1.186 2.259l-.14 1.995zm5.868.41l.14-1.995zm1.49-2.072l-1.847.768zm4.487-4.775l-.518 1.932zm-1.225.707l1.932.518zm4.123.07l-.518 1.931zm.707 1.224l1.932.518zm-1.225.707l.518-1.931zm-2.898-.776l-.518 1.932zm.48 7.103l.685 1.88zm-2.818 1.027l-.684-1.88l-1.88.684l.684 1.88zm5.062.02l1.879-.685zm-1.046 2.242l.684 1.88zm-2.82 1.026l-1.879.684l.684 1.88l1.88-.684zm-7.41.836l-1.88.684zm2.24-4.807l.685 1.88zm6.109-2.223l-.684-1.88zm4.806 2.241l-1.88.684zm-2.241 4.807l-.684-1.88zm-6.108 2.223l.684 1.88zM7.343 4.68a.5.5 0 0 1-.892-.062l3.694-1.535C9.038.42 5.365.164 3.899 2.647zM4 10.344L7.343 4.68L3.9 2.647L.555 8.31zm-.395-.753a.5.5 0 0 1 .395.753L.555 8.31c-1.323 2.24.174 5.09 2.77 5.27zM9.47 10l-5.867-.41l-.28 3.99l5.868.41zm-.496.69A.5.5 0 0 1 9.47 10l-.279 3.99c2.596.182 4.475-2.432 3.476-4.834zM6.45 4.62l2.524 6.073l3.694-1.535l-2.524-6.073zM14 6.5A2.5 2.5 0 0 1 16.5 4V0A6.5 6.5 0 0 0 10 6.5zM16.5 9A2.5 2.5 0 0 1 14 6.5h-4a6.5 6.5 0 0 0 6.5 6.5zM19 6.5A2.5 2.5 0 0 1 16.5 9v4A6.5 6.5 0 0 0 23 6.5zM16.5 4A2.5 2.5 0 0 1 19 6.5h4A6.5 6.5 0 0 0 16.5 0zm-.674-.783a3 3 0 0 0-3.674 2.122l3.864 1.035a1 1 0 0 1-1.225.707zm2.898.777l-2.898-.777l-1.035 3.864l2.898.776zm2.122 3.674a3 3 0 0 0-2.122-3.674L17.69 7.857a1 1 0 0 1-.707-1.224zM17.17 9.789a3 3 0 0 0 3.675-2.121l-3.864-1.035a1 1 0 0 1 1.225-.707zm-2.897-.776l2.897.776l1.036-3.863l-2.898-.777zm-2.122-3.674a3 3 0 0 0 2.122 3.674l1.035-3.864a1 1 0 0 1 .707 1.225zm2.436 6.966l-2.82 1.026l1.369 3.759l2.819-1.026zm4.806 2.241a3.75 3.75 0 0 0-4.806-2.24l1.368 3.758a.25.25 0 0 1-.32-.15zm-2.241 4.807a3.75 3.75 0 0 0 2.241-4.807l-3.759 1.368a.25.25 0 0 1 .15-.32zm-2.82 1.026l2.82-1.026l-1.368-3.759l-2.82 1.026zm-3.76-4.485l1.197 3.29l3.759-1.369l-1.197-3.289zM4.36 20.02a5.75 5.75 0 0 0 3.968 3.602l1-3.873a1.75 1.75 0 0 1-1.21-1.097zm3.437-7.37a5.75 5.75 0 0 0-3.437 7.37l3.759-1.368a1.75 1.75 0 0 1 1.046-2.243zm6.107-2.223L7.797 12.65l1.368 3.759l6.108-2.224zm7.37 3.436a5.75 5.75 0 0 0-7.37-3.436l1.369 3.758a1.75 1.75 0 0 1 2.243 1.046zm-3.436 7.37a5.75 5.75 0 0 0 3.436-7.37l-3.758 1.368a1.75 1.75 0 0 1-1.046 2.243zm-7.235 2.51a6 6 0 0 0 1.127-.287l-1.368-3.758a2 2 0 0 1-.346.087zm1.127-.287l6.108-2.223l-1.368-3.759l-6.108 2.224z" mask="url(#healthiconsMedicines24px2)"></svg:path></svg:g>`,
})
export class HealthiconsMedicines24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsMedicinesNegativeIcon],svg[healthicons-medicines-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsMedicinesNegative0)"><svg:path d="M38.282 14.985a1 1 0 0 1-1.198.75l-6.616-1.52a1 1 0 0 1 .448-1.95l6.616 1.521a1 1 0 0 1 .75 1.199M29.943 36.69l-3.381-7.25l4.597-2.144a4 4 0 1 1 3.38 7.25z"></svg:path><svg:path fill-rule="evenodd" d="M48 0H0v48h48zm-6 14a8 8 0 1 1-16 0a8 8 0 0 1 16 0M16.778 9.245c-.647-1.532-2.813-1.686-3.682-.263L6.292 20.115c-.785 1.284.092 2.924 1.623 3.033l11.866.846c1.53.11 2.644-1.388 2.06-2.77zM35.385 36.36a6 6 0 0 0-5.071-10.876l-10.876 5.072a6 6 0 1 0 5.071 10.876z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsMedicinesNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsMedicinesNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsMedicinesOutlineIcon],svg[healthicons-medicines-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M37.084 15.735a1 1 0 1 0 .448-1.949l-6.616-1.52a1 1 0 1 0-.448 1.948z"></svg:path><svg:path fill-rule="evenodd" d="M34 22a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0-2a6 6 0 1 0 0-12a6 6 0 0 0 0 12M16.778 9.245c-.647-1.532-2.813-1.686-3.682-.263L6.292 20.115c-.785 1.284.092 2.924 1.623 3.033l11.866.846c1.53.11 2.644-1.388 2.06-2.77zm-1.967.768l-.009.012L8.01 21.14l.002.002l.01.004a.1.1 0 0 0 .036.007l11.867.846h.038a.1.1 0 0 0 .029-.015l-5.056-11.96l-.004-.01a.1.1 0 0 0-.054-.014a.13.13 0 0 0-.062.009l-.003.001v.001zM35.385 36.36a6 6 0 0 0-5.071-10.876l-10.876 5.07a6 6 0 1 0 5.071 10.877zm-15.102-3.992a4 4 0 1 0 3.381 7.25l4.466-2.083l-3.38-7.25zm9.66 4.322l-3.381-7.25l4.597-2.144a4 4 0 1 1 3.38 7.25z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsMedicinesOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsMedicinesOutline24pxIcon],svg[healthicons-medicines-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M5.621 3.664c.629-1.064 2.203-.954 2.677.187l2.524 6.073a1.5 1.5 0 0 1-1.49 2.072l-5.868-.41a1.5 1.5 0 0 1-1.187-2.26zm-1.21 5.983l4.253.297l-1.83-4.402z" clip-rule="evenodd"></svg:path><svg:path d="M15.759 5.284a1 1 0 1 0-.518 1.932l1.932.518a1 1 0 1 0 .518-1.932z"></svg:path><svg:path fill-rule="evenodd" d="M16.5 2a4.5 4.5 0 1 0 0 9a4.5 4.5 0 0 0 0-9M14 6.5a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0M6.238 19.335a3.75 3.75 0 0 1 2.242-4.807l6.108-2.223a3.75 3.75 0 1 1 2.565 7.048l-6.108 2.223a3.75 3.75 0 0 1-4.807-2.241m6.908-4.377l2.126-.774a1.75 1.75 0 0 1 1.197 3.29l-2.126.773zm-1.88.684l-2.102.766a1.75 1.75 0 1 0 1.197 3.288l2.103-.765z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsMedicinesOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsMediumBarsIcon],svg[healthicons-medium-bars-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M19 21a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3zM6 33a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3z"></svg:path><svg:path fill-rule="evenodd" d="M32 9a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v30a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3zm3-1a1 1 0 0 0-1 1v30a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsMediumBarsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsMediumBarsNegativeIcon],svg[healthicons-medium-bars-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsMediumBarsNegative0)"><svg:path d="M34 9a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v30a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1z"></svg:path><svg:path fill-rule="evenodd" d="M48 0H0v48h48zM22 18a3 3 0 0 0-3 3v18a3 3 0 0 0 3 3h4a3 3 0 0 0 3-3V21a3 3 0 0 0-3-3zM6 33a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3zM35 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h4a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsMediumBarsNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsMediumBarsNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsMediumBarsOutlineIcon],svg[healthicons-medium-bars-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M32 9a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v30a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3zm3-1a1 1 0 0 0-1 1v30a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1zM19 21a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3zm5-1l-3 3v2.172l5.159-5.16A1 1 0 0 0 26 20zm3 2l-6 6v2.172l6-6zm0 5l-6 6v2.172l6-6zm0 5l-6 6v1c0 .32.15.605.384.788L27 34.172zm0 5l-3 3h2a1 1 0 0 0 1-1zM6 33a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3zm3-1a1 1 0 0 0-1 1v2.172L11.172 32zm4.707.293L8 38v1c0 .32.15.605.384.788L14 34.172V33a1 1 0 0 0-.293-.707M14 37l-3 3h2a1 1 0 0 0 1-1z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsMediumBarsOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsMediumLevelIcon],svg[healthicons-medium-level-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M35.465 12.12A17.92 17.92 0 0 0 25 8.028V13h-2V8.027a17.93 17.93 0 0 0-10.465 4.094l3 3l-1.414 1.415l-3.056-3.057A17.93 17.93 0 0 0 6.109 24h3.944v2H6a17.9 17.9 0 0 0 3.864 11.127l2.919-2.918l1.414 1.414l-3.005 3.006l.018.019l-1.42 1.407A19.92 19.92 0 0 1 4 25.99C4 14.95 12.955 6 24 6s20 8.949 20 19.99a19.93 19.93 0 0 1-6.085 14.357l-1.391-1.437l.012-.012l-3.477-3.477l1.415-1.414l3.42 3.42A17.9 17.9 0 0 0 42 26h-4.316v-2h4.207a17.93 17.93 0 0 0-4.956-10.52L34 16.413L32.586 15z"></svg:path><svg:path d="M20.627 37.704c-.029.392.087.781.325 1.094l1.923 2.212c1.125.49 1.625.49 2.568 0l1.922-2.212c.238-.313.354-.702.326-1.094L25.31 23.902c-.145-1.997-2.17-2.015-2.314-.018z"></svg:path></svg:g>`,
})
export class HealthiconsMediumLevelIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsMediumLevel24pxIcon],svg[healthicons-medium-level-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12 3a10 10 0 0 0-7.071 17.071l.707.707l2.421-2.421l-1.414-1.414l-.963.962A8 8 0 0 1 4.063 14H6v-2H4.063A8 8 0 0 1 5.68 8.095l.613.612l.5.5l1.414-1.414L7.095 6.68A8 8 0 0 1 11 5.063V6.5h2V5.063a8 8 0 0 1 3.905 1.617l-1.112 1.113l1.414 1.414l1.113-1.112A8 8 0 0 1 19.937 12H18v2h1.937a8 8 0 0 1-1.618 3.906l-.962-.963l-1.414 1.414l2.421 2.421l.707-.707A10.001 10.001 0 0 0 12 3"></svg:path><svg:path d="M13 13V8.5a1 1 0 1 0-2 0V13a1 1 0 1 0 2 0"></svg:path></svg:g>`,
})
export class HealthiconsMediumLevel24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsMediumLevelNegativeIcon],svg[healthicons-medium-level-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsMediumLevelNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM11.065 13.48A17.93 17.93 0 0 0 6.109 24h3.944v2H6a17.9 17.9 0 0 0 3.864 11.127l2.211-2.21l.708-.708l1.414 1.414l-.707.707l-2.233 2.233l-.066.066l.02.019l-1.421 1.407A19.92 19.92 0 0 1 4 25.99C4 14.95 12.955 6 24 6s20 8.949 20 19.99a19.93 19.93 0 0 1-6.085 14.357l-1.391-1.437l.013-.012L36 38.36l-2.233-2.233l-.708-.707l1.415-1.414l.707.707l2.233 2.233l.48.48A17.9 17.9 0 0 0 42 26h-4.316v-2h4.207a17.93 17.93 0 0 0-4.956-10.52l-2.228 2.227l-.707.707L32.586 15l.707-.707l2.172-2.172A17.92 17.92 0 0 0 25 8.027V13h-2V8.027a17.93 17.93 0 0 0-10.465 4.094l.172.172l2.121 2.121l.708.707l-1.415 1.414l-.707-.707l-2.121-2.12zm9.561 24.224c-.028.392.088.781.326 1.094l1.922 2.212c1.126.49 1.626.49 2.569 0l1.922-2.212c.238-.313.354-.702.326-1.094L25.31 23.902c-.145-1.997-2.17-2.015-2.314-.018z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsMediumLevelNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsMediumLevelNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsMediumLevelOutlineIcon],svg[healthicons-medium-level-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M6.109 24a17.93 17.93 0 0 1 4.956-10.52l3.056 3.055l1.415-1.414l-3.001-3A17.93 17.93 0 0 1 23 8.027V13h2V8.027a17.92 17.92 0 0 1 10.465 4.094L32.585 15L34 16.414l2.935-2.935A17.93 17.93 0 0 1 41.891 24h-4.207v2H42a17.9 17.9 0 0 1-4.106 11.427l-3.42-3.42l-1.415 1.414l3.477 3.477l-.012.012l1.391 1.437A19.93 19.93 0 0 0 44 25.99C44 14.95 35.045 6 24 6S4 14.949 4 25.99a19.92 19.92 0 0 0 5.79 14.065l1.42-1.407l-.019-.02l3.006-3.005l-1.414-1.414l-2.919 2.918A17.9 17.9 0 0 1 6 26h4.053v-2z"></svg:path><svg:path fill-rule="evenodd" d="m22.996 23.884l-2.37 13.82c-.028.392.088.781.326 1.094l1.923 2.212c1.125.49 1.625.49 2.568 0l1.922-2.212c.238-.313.354-.702.326-1.094L25.31 23.902c-.145-1.997-2.17-2.015-2.314-.018m2.666 13.825l-1.508-8.742l-1.5 8.742l1.411 1.622c.077.026.124.038.15.043zm-1.477 1.673l.01-.002zm-.886-15.44v-.003z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsMediumLevelOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsMediumLevelOutline24pxIcon],svg[healthicons-medium-level-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12 3a10 10 0 0 0-7.071 17.071l.707.707l2.421-2.421l-1.414-1.414l-.963.962A8 8 0 0 1 4.063 14H6v-2H4.063A8 8 0 0 1 5.68 8.095l.613.612l.5.5l1.414-1.414L7.095 6.68A8 8 0 0 1 11 5.063V6.5h2V5.063a8 8 0 0 1 3.905 1.617l-1.112 1.113l1.414 1.414l1.113-1.112A8 8 0 0 1 19.937 12H18v2h1.937a8 8 0 0 1-1.618 3.906l-.962-.963l-1.414 1.414l2.421 2.421l.707-.707A10.001 10.001 0 0 0 12 3"></svg:path><svg:path d="M13 13V8.5a1 1 0 1 0-2 0V13a1 1 0 1 0 2 0"></svg:path></svg:g>`,
})
export class HealthiconsMediumLevelOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsMegaphoneIcon],svg[healthicons-megaphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12 31v7a2 2 0 1 0 4 0v-7zm-5-5v-6a3 3 0 0 1 3-3h6v12h-6a3 3 0 0 1-3-3m27-3v-1a3 3 0 0 0-3-3v7a3 3 0 0 0 3-3m-16 7V15l9.463-6.022A1 1 0 0 1 29 9.822v25.356a1 1 0 0 1-1.537.844z"></svg:path><svg:path fill-rule="evenodd" d="M40.832 17.445a1 1 0 0 1-.277 1.387l-3 2a1 1 0 0 1-1.11-1.664l3-2a1 1 0 0 1 1.387.277M36 24a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1m.168 3.445a1 1 0 0 1 1.387-.277l3 2a1 1 0 0 1-1.11 1.664l-3-2a1 1 0 0 1-.277-1.387" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsMegaphoneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsMegaphoneNegativeIcon],svg[healthicons-megaphone-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsMegaphoneNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM12 38v-7h4v7a2 2 0 1 1-4 0M7 26v-6a3 3 0 0 1 3-3h6v12h-6a3 3 0 0 1-3-3m27-4v1a3 3 0 0 1-3 3v-7a3 3 0 0 1 3 3m-16 8V15l9.463-6.022A1 1 0 0 1 29 9.822v25.356a1 1 0 0 1-1.537.844zm22.555-11.168a1 1 0 0 0-1.11-1.664l-3 2a1 1 0 0 0 1.11 1.664zM37 23a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2zm.555 4.168a1 1 0 0 0-1.11 1.664l3 2a1 1 0 0 0 1.11-1.664z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsMegaphoneNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsMegaphoneNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsMegaphoneOutlineIcon],svg[healthicons-megaphone-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10 18a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4V18zm4 12h-2v8a1 1 0 1 0 2 0zm-4 0a4 4 0 0 1-4-4v-6a4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v21a3 3 0 1 1-6 0zM30.481 7.123A1 1 0 0 1 31 8v10a4 4 0 0 1 4 4v1a4 4 0 0 1-4 4v10a1 1 0 0 1-1.537.844l-11-7A1 1 0 0 1 18 30V15a1 1 0 0 1 .463-.844l11-7a1 1 0 0 1 1.018-.033M31 25a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2zm-11-9.451V29.45l9 5.727V9.822zm20.832 1.896a1 1 0 0 1-.277 1.387l-3 2a1 1 0 0 1-1.11-1.664l3-2a1 1 0 0 1 1.387.277M36 24a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1m.168 3.445a1 1 0 0 1 1.387-.277l3 2a1 1 0 0 1-1.11 1.664l-3-2a1 1 0 0 1-.277-1.387" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsMegaphoneOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsMentalDisordersIcon],svg[healthicons-mental-disorders-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M38.885 20.259c-.026 1.747-.049 3.286.83 5.107c0 0 2.596 2.336 2.254 4.21s-3.724 2.39-3.724 2.39c0 7.573-7.231 7.091-10.84 6.379l-.215-.044c-1.08-.224-1.786-.455-1.786-.455v1.423s-.075.238-.307.574q-.092.135-.22.285c-.677.796-2.148 1.857-5.18 1.857c-2.284.181-6.194-1.314-7.23-3.422v-6.449C8.814 29.384 6 25.707 6 20.94c0-3.963 1.654-7.763 4.597-10.564S17.532 6 21.695 6a22.7 22.7 0 0 1 9.202 1.929a14.4 14.4 0 0 1 5.779 4.21a11.83 11.83 0 0 1 2.211 6.573c.013.54.005 1.052-.002 1.547M27.45 21.88c-.156.175-.238.266-.727.266a3.9 3.9 0 0 1-2.166-.651c-.449.462-.998.82-1.608 1.047q-.117.055-.216.12c-.345.219-.55.502-.76.836l-.108.175q-.078.128-.164.265a3.7 3.7 0 0 0-.585 1.998v3.978H17c-.104-.852-.298-1.671-.77-2.396a5.8 5.8 0 0 0-1.851-1.794a3.85 3.85 0 0 1-1.619-1.268a3.7 3.7 0 0 1-.71-1.9a3.685 3.685 0 0 1-.26-4.853a3.4 3.4 0 0 1-.136-.995a3.7 3.7 0 0 1 .753-2.234l1.972-1.359a3.8 3.8 0 0 1 1.42-1.62a3.93 3.93 0 0 1 3.008-.501A3.9 3.9 0 0 1 21.116 10l4.189.284a3.9 3.9 0 0 1 2.27 1.532h.273l2.42.824a3.74 3.74 0 0 1 1.354 2.12a3.9 3.9 0 0 1 1.93 1.75c.42.781.55 1.679.369 2.542c-.18.864-.66 1.64-1.359 2.201l-2.48.878a3.93 3.93 0 0 1-2.193-.636c-.234.155-.35.284-.44.385M34 25.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0M21 32v2h-4v-2zm-4 4v2h4v-2z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsMentalDisordersIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsMentalDisordersNegativeIcon],svg[healthicons-mental-disorders-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsMentalDisordersNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zm-9.115 20.259c-.026 1.747-.049 3.286.83 5.107c0 0 2.596 2.336 2.254 4.21s-3.724 2.39-3.724 2.39c0 10.092-12.84 5.88-12.84 5.88v1.423s-.857 2.716-5.708 2.716c-2.284.181-6.194-1.314-7.23-3.422v-6.449C8.814 29.384 6 25.707 6 20.94c0-3.963 1.654-7.763 4.597-10.564S17.532 6 21.695 6a22.7 22.7 0 0 1 9.202 1.929a14.4 14.4 0 0 1 5.779 4.21a11.83 11.83 0 0 1 2.211 6.573c.013.54.005 1.052-.002 1.547M27.45 21.88c-.156.175-.238.266-.727.266a3.9 3.9 0 0 1-2.166-.651c-.449.462-.998.82-1.608 1.047c-.552.265-.79.653-1.084 1.13v.001q-.078.129-.164.265a3.7 3.7 0 0 0-.585 1.998v3.978H17c-.104-.852-.298-1.671-.77-2.396a5.8 5.8 0 0 0-1.851-1.794a3.85 3.85 0 0 1-1.619-1.268a3.7 3.7 0 0 1-.71-1.9a3.685 3.685 0 0 1-.26-4.853a3.4 3.4 0 0 1-.136-.995a3.7 3.7 0 0 1 .753-2.234l1.972-1.359a3.8 3.8 0 0 1 1.42-1.62a3.93 3.93 0 0 1 3.008-.501A3.9 3.9 0 0 1 21.116 10l4.189.284a3.9 3.9 0 0 1 2.27 1.532h.273l2.42.824a3.74 3.74 0 0 1 1.354 2.12a3.9 3.9 0 0 1 1.93 1.75c.42.781.55 1.679.369 2.542c-.18.864-.66 1.64-1.359 2.201l-2.48.878a3.93 3.93 0 0 1-2.193-.636c-.234.155-.35.284-.44.385M34 25.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0M17 34h4v-2h-4zm4 4h-4v-2h4z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsMentalDisordersNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsMentalDisordersNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsMentalDisordersOutlineIcon],svg[healthicons-mental-disorders-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M34.723 25.5c0 .828-.685 1.5-1.532 1.5c-.846 0-1.531-.672-1.531-1.5s.686-1.5 1.531-1.5c.847 0 1.532.672 1.532 1.5M17.362 34h4.085v-2h-4.085zm4.085 4h-4.085v-2h4.085z"></svg:path><svg:path fill-rule="evenodd" d="M27.292 22.146c.5 0 .582-.091.741-.266c.093-.1.21-.23.45-.385a4.1 4.1 0 0 0 2.24.636l2.532-.878a3.82 3.82 0 0 0 1.388-2.2a3.7 3.7 0 0 0-.376-2.543a3.96 3.96 0 0 0-1.972-1.75a3.73 3.73 0 0 0-1.382-2.12l-2.472-.824h-.278a3.97 3.97 0 0 0-2.32-1.532L21.565 10c-.88.07-1.711.42-2.358.994a4.08 4.08 0 0 0-3.073.502a3.8 3.8 0 0 0-1.45 1.62l-2.012 1.358a3.64 3.64 0 0 0-.77 2.234c-.005.337.042.672.14.995a3.6 3.6 0 0 0-.808 2.28a3.65 3.65 0 0 0 1.072 2.572c.055.685.306 1.342.726 1.9c.42.56.99.998 1.653 1.27a5.9 5.9 0 0 1 1.89 1.793c.482.725.68 1.544.787 2.396h4.203v-3.978c0-.706.206-1.398.597-1.998q.089-.137.169-.265c.3-.478.542-.866 1.106-1.13a4.5 4.5 0 0 0 1.642-1.048a4.06 4.06 0 0 0 2.212.65m1.535-2.826l.773.495c.243.155.524.257.819.294l1.768-.613c.233-.246.389-.543.456-.858a1.72 1.72 0 0 0-.177-1.19a1.94 1.94 0 0 0-.966-.852l-.965-.4l-.232-1a1.7 1.7 0 0 0-.437-.798l-1.763-.588h-1l-.61-.848a1.9 1.9 0 0 0-.99-.702l-3.898-.258a1.96 1.96 0 0 0-1.026.468l-.79.701l-1.039-.233a2 2 0 0 0-1.523.242a1.8 1.8 0 0 0-.684.761l-.235.502l-2.154 1.455c-.139.249-.21.524-.21.802v.032q-.003.203.056.4l.3.994l-.658.813c-.243.3-.368.662-.365 1.026v.015c0 .428.17.85.494 1.177l.512.516l.059.718c.025.31.139.613.335.874c.197.263.47.475.796.608l.143.059l.133.08q.456.27.869.598c.355.273.797.672 1.37 1.388c.6.75.928 1.589 1.017 1.914h.523v-.875q0-.132-.004-.309c-.01-.574-.027-1.457.152-2.152c.215-.836.658-1.652 1.212-2.43c.555-.777 1.393-1.32 1.708-1.437s.634-.238.945-.543c.25-.244.94-.945 1.253-1.265l1.4.918c.268.175.623.273.766.3c.039-.03.16-.125.335-.254c.176-.128.866-.576 1.19-.785z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M40.56 25.366s2.652 2.336 2.302 4.21s-3.803 2.39-3.803 2.39c0 7.573-7.386 7.091-11.072 6.379a19 19 0 0 1-2.042-.5v1.424s-.077.238-.314.574c-.563.797-2.029 2.142-5.515 2.142c-2.333.181-6.326-1.314-7.384-3.422v-6.449c-3.73-2.73-6.604-6.407-6.604-11.174c0-3.963 1.688-7.763 4.694-10.564S17.905 6 22.156 6a23.6 23.6 0 0 1 9.399 1.929c2.32.91 4.352 2.36 5.9 4.21c1.416 1.943 2.2 4.226 2.26 6.573c.012.54.005 1.052-.003 1.547c-.026 1.747-.05 3.286.848 5.107m-1.665 1.224l-.175-.355c-1.129-2.29-1.088-4.416-1.054-6.217c.008-.44.016-.859.007-1.257a9.7 9.7 0 0 0-1.84-5.406c-1.321-1.559-3.052-2.79-5.038-3.57l-.033-.013l-.033-.014A21.6 21.6 0 0 0 22.16 8h-.003c-3.74 0-7.31 1.386-9.925 3.824c-2.613 2.435-4.06 5.717-4.06 9.116c0 3.882 2.319 7.037 5.784 9.572l.82.6v6.87c.34.397 1.002.891 1.996 1.32c1.219.527 2.454.746 3.184.69l.08-.007h.081c2.072 0 3.049-.557 3.47-.899c.145-.117.247-.228.316-.315v-3.686l2.676.86h.003l.015.005l.086.026q.121.036.362.101c.32.085.785.199 1.345.307c1.136.22 2.584.4 3.98.31c1.419-.09 2.557-.442 3.317-1.075c.683-.569 1.33-1.589 1.33-3.652v-1.718l1.727-.258l.011-.002l.071-.013a6.7 6.7 0 0 0 1.23-.353c.343-.137.591-.28.738-.403l.053-.048a1.3 1.3 0 0 0-.09-.294a4.4 4.4 0 0 0-.555-.92a8.7 8.7 0 0 0-1-1.1l-.008-.005v-.001l-.002-.001l-.001-.002zm1.988 2.54v.002l-.003.002z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsMentalDisordersOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsMentalHealthIcon],svg[healthicons-mental-health-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-width="2" d="m38.9 25.978l-.086-.178c-.981-2.033-.956-3.776-.93-5.502v-.054c.008-.497.015-.99.003-1.507zm0 0l.145.13m-.145-.13l.145.13m0 0v.001m0 0l.003.002l.015.015l.07.065a9.6 9.6 0 0 1 1.034 1.172c.274.37.515.763.667 1.14c.155.382.19.678.151.893c-.032.175-.141.37-.392.584c-.255.218-.604.41-.993.569a7.5 7.5 0 0 1-1.485.425l-.02.004h-.002l-.848.13v.858c0 2.294-.718 3.618-1.654 4.415c-.974.828-2.334 1.214-3.831 1.311c-1.486.097-2.998-.099-4.156-.327a20 20 0 0 1-1.767-.432l-.095-.03l-.022-.006l-.004-.001h-.001l-1.31-.43v2.596l-.063.109a2.8 2.8 0 0 1-.61.686c-.616.51-1.808 1.128-4.035 1.128h-.04l-.039.003c-.928.074-2.307-.2-3.6-.77c-1.208-.534-2.127-1.231-2.551-1.913v-6.692l-.402-.3C9.543 28.681 7 25.265 7 20.94c0-3.681 1.536-7.222 4.286-9.84C14.04 8.48 17.782 7 21.695 7a21.7 21.7 0 0 1 8.798 1.843l.016.007l.016.007a13.4 13.4 0 0 1 5.356 3.89a10.8 10.8 0 0 1 2.006 5.99zM20.49 29.628l-.647-.556l-.646-.555q-.512-.437-1.127-.943l-.023-.02c-1.22-1.008-2.693-2.227-3.925-3.569c-1.649-1.796-3.213-4.17-3.118-7.086v-.003c.065-1.906 1.002-3.766 2.602-4.892zm0 0l.65-.55m-.65.55l.65-.55m0 0l.651-.55q.466-.393 1.014-.84l.023-.02c1.253-1.028 2.784-2.284 4.06-3.68c1.649-1.802 3.209-4.184 3.107-7.094c-.065-1.904-1-3.762-2.6-4.888m-6.254 17.072l6.255-17.072m0 0c-1.575-1.115-3.338-1.199-4.84-.755c-.552.164-1.027.49-1.402.796c-.233.19-.456.395-.655.584c-.2-.19-.423-.395-.657-.585c-.375-.304-.849-.63-1.4-.792c-1.5-.442-3.261-.359-4.836.75zM32.5 28a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5Z"></svg:path>`,
})
export class HealthiconsMentalHealthIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsMentalHealth24pxIcon],svg[healthicons-mental-health-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M18.407 6.094a7.4 7.4 0 0 0-2.953-2.158A11.1 11.1 0 0 0 10.974 3c-2.099 0-4.122.794-5.62 2.22C3.853 6.65 3 8.597 3 10.64c0 2.363 1.296 4.16 2.874 5.453v2.612l.103.208c.385.785 1.197 1.31 1.892 1.616c.705.311 1.543.51 2.256.464c1.256-.007 2.114-.367 2.677-.833c.277-.229.462-.467.582-.663a2 2 0 0 0 .184-.382l.006-.015l.002-.007v-.003l.001-.002v-.001l.047-.147v-.031a7.7 7.7 0 0 0 1.643.272c.782.035 1.738-.08 2.512-.691c.634-.5 1.02-1.228 1.16-2.15q.145-.037.3-.085c.284-.09.634-.23.945-.445c.305-.214.682-.582.786-1.152c.083-.457-.02-.881-.139-1.195a4.2 4.2 0 0 0-.454-.849a6 6 0 0 0-.536-.68c-.228-.522-.225-.886-.22-1.532c0-.22.002-.473-.005-.775v-.002a6.26 6.26 0 0 0-1.168-3.477l-.02-.028zm-5.677.55c-.616-.436-1.304-.47-1.893-.295c-.153.045-.3.164-.441.294l-.118.112c-.097.092-.19.181-.278.245a3 3 0 0 1-.279-.245l-.118-.112c-.14-.13-.288-.248-.44-.293c-.589-.174-1.277-.14-1.892.293a2.46 2.46 0 0 0-1.02 1.917v.001c-.037 1.147.578 2.084 1.235 2.8c.492.536 1.093 1.032 1.589 1.443q.239.196.436.365l.485.416l.488-.412q.18-.152.394-.326c.508-.417 1.13-.928 1.64-1.485c.657-.718 1.27-1.658 1.23-2.802a2.46 2.46 0 0 0-1.018-1.917M18 12.75a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsMentalHealth24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsMentalHealthOutlineIcon],svg[healthicons-mental-health-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M32.5 27a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m-9.66-14.79c1.263-.373 2.697-.295 3.98.613h-5.36a6 6 0 0 1 1.38-.613"></svg:path><svg:path fill-rule="evenodd" d="M21.46 12.823h5.36c1.327.935 2.121 2.496 2.176 4.106c.088 2.518-1.26 4.65-2.845 6.384c-1.229 1.343-2.714 2.562-3.98 3.602c-.364.298-.71.581-1.025.849l-.651.55l-.647-.556c-.348-.299-.734-.618-1.14-.955c-1.234-1.02-2.664-2.203-3.85-3.494c-1.585-1.728-2.936-3.853-2.854-6.378v-.002c.055-1.61.849-3.172 2.177-4.107h5.356q.516.311.963.7a7 7 0 0 1 .96-.7m-.19 2.762c.551-.666 1.33-1.218 2.137-1.457c.784-.232 1.56-.166 2.257.328l.003.002c.785.552 1.295 1.517 1.33 2.54c.06 1.733-.862 3.369-2.322 4.965c-1.122 1.227-2.45 2.318-3.701 3.345l-.47.386q-.301-.252-.611-.507c-1.209-1-2.477-2.05-3.56-3.23c-1.461-1.591-2.387-3.22-2.33-4.96c.035-1.023.544-1.987 1.33-2.54c.697-.49 1.476-.557 2.26-.325c.808.238 1.586.787 2.136 1.453l.77.932z" clip-rule="evenodd"></svg:path><svg:path d="M19.537 12.823H14.18c1.282-.903 2.716-.982 3.978-.61c.483.143.947.352 1.378.61"></svg:path><svg:path fill-rule="evenodd" d="M41.969 29.576c.342-1.874-2.254-4.21-2.254-4.21c-.879-1.82-.856-3.36-.83-5.107c.007-.495.015-1.007.002-1.547a11.83 11.83 0 0 0-2.211-6.573a14.4 14.4 0 0 0-5.779-4.21A22.7 22.7 0 0 0 21.695 6c-4.163 0-8.155 1.574-11.098 4.376S6 16.978 6 20.94c0 4.767 2.814 8.444 6.467 11.174v6.449c1.036 2.108 4.946 3.603 7.23 3.422c3.414 0 4.85-1.345 5.4-2.142c.232-.336.307-.574.307-.574v-1.423s.8.262 2 .499c3.61.712 10.841 1.194 10.841-6.378c0 0 3.382-.517 3.724-2.39m-4.056-3.341l.171.355l.29.26l.002.002h.001l.006.007l.057.053c.053.052.134.13.231.232c.199.207.453.493.692.815c.245.33.434.647.544.919c.059.145.08.24.088.294l-.051.048c-.145.123-.388.266-.723.403a6.5 6.5 0 0 1-1.274.366l-.01.002l-1.692.258v1.718c0 2.063-.634 3.083-1.302 3.652c-.744.633-1.86.985-3.248 1.075c-1.367.09-2.785-.09-3.898-.31a19 19 0 0 1-1.67-.408l-.085-.026l-.015-.005h-.003l-2.62-.86v3.686a2 2 0 0 1-.31.315c-.412.342-1.369.9-3.397.9h-.08l-.078.005c-.714.057-1.924-.162-3.117-.688c-.974-.43-1.621-.924-1.955-1.32v-6.87l-.803-.6C10.271 27.976 8 24.822 8 20.94c0-3.4 1.418-6.68 3.976-9.116C14.537 9.386 18.032 8 21.695 8h.002a20.7 20.7 0 0 1 8.392 1.758l.032.014l.032.013c1.945.78 3.64 2.011 4.933 3.57a9.8 9.8 0 0 1 1.802 5.406c.009.398.001.817-.007 1.256c-.034 1.801-.073 3.927 1.032 6.218" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsMentalHealthOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsMentalHealthOutline24pxIcon],svg[healthicons-mental-health-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M13.23 7.143c-.616-.435-1.304-.469-1.893-.294a2.8 2.8 0 0 0-.837.414a2.8 2.8 0 0 0-.837-.414c-.589-.173-1.277-.14-1.892.294a2.46 2.46 0 0 0-1.02 1.917v.001c-.037 1.147.578 2.084 1.235 2.8c.492.536 1.093 1.032 1.589 1.443q.239.196.436.365l.485.416l.488-.412q.18-.152.394-.326c.508-.417 1.13-.928 1.64-1.485c.657-.718 1.27-1.658 1.23-2.802a2.46 2.46 0 0 0-1.018-1.917m-1.468 1.144a1.5 1.5 0 0 0-.684.47l-.578.7l-.578-.7a1.5 1.5 0 0 0-.684-.469c-.23-.068-.426-.043-.603.081a.96.96 0 0 0-.384.741c-.018.56.278 1.124.84 1.736c.416.453.896.85 1.373 1.246l.039.031c.489-.401.985-.81 1.409-1.274c.562-.615.856-1.181.837-1.737a.96.96 0 0 0-.384-.743l-.002-.001c-.176-.125-.371-.149-.6-.081" clip-rule="evenodd"></svg:path><svg:path d="M15.75 13.5a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5"></svg:path><svg:path fill-rule="evenodd" d="M15.454 3.936a7.4 7.4 0 0 1 2.953 2.158l.021.026l.02.028a6.26 6.26 0 0 1 1.168 3.477v.002c.008.33.005.607.002.85c-.008.641-.013 1.039.199 1.544l.067.07c.126.13.295.319.462.544c.164.221.345.504.475.824c.127.315.233.737.149 1.199c-.092.502-.38.862-.657 1.098a3.1 3.1 0 0 1-.833.491q-.104.043-.203.077c-.14.971-.55 1.735-1.19 2.279c-.765.65-1.723.87-2.545.924a8.7 8.7 0 0 1-2.092-.145l-.066.115c-.12.196-.305.434-.582.663c-.563.466-1.421.826-2.677.833c-.713.047-1.551-.153-2.256-.464c-.694-.306-1.507-.83-1.892-1.616l-.103-.208v-2.612C4.296 14.8 3 13.003 3 10.64c0-2.043.853-3.991 2.354-5.42C6.852 3.794 8.875 3 10.974 3a11.1 11.1 0 0 1 4.48.936m-2.518 13.267l.005.002l.036.011q.051.016.155.044c.137.038.337.088.577.135c.49.096 1.11.175 1.704.136c.605-.04 1.073-.192 1.378-.452c.268-.227.54-.647.54-1.538v-.86l.845-.128h.004l.029-.006l.125-.027c.111-.027.252-.068.389-.124q.179-.075.262-.138l-.018-.048a2 2 0 0 0-.228-.384a4 4 0 0 0-.398-.451l-.016-.015l-.008-.008l-.003-.003l-.145-.13l-.085-.177c-.504-1.045-.486-2.023-.47-2.825c.003-.191.007-.373.003-.543a4.25 4.25 0 0 0-.778-2.338a5.4 5.4 0 0 0-2.146-1.55l-.016-.007l-.016-.007A9.1 9.1 0 0 0 10.976 5c-1.6 0-3.126.606-4.244 1.67C5.618 7.73 5 9.16 5 10.64c0 1.676.98 3.05 2.473 4.165l.401.3v3.068c.14.152.401.35.803.527c.519.229 1.038.32 1.332.297l.039-.004h.04c.879 0 1.278-.24 1.439-.373a1 1 0 0 0 .097-.095v-1.752l1.31.43z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsMentalHealthOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsMicroscopeIcon],svg[healthicons-microscope-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.263 7.453l-1.49.848l-1.22-2.187l-2.63 1.444l1.242 2.227l-1.508.858l1.06 1.839a2.98 2.98 0 0 0-.252 3.368l.596 1.024c-2.754 1.585-4.874 3.478-6.06 5.831c-1.142 2.27-1.359 4.851-.597 7.779A9.98 9.98 0 0 0 7 38a10 10 0 0 0 .832 4H40a1 1 0 1 0 0-2H26.8a10.05 10.05 0 0 0-.766-6.293l12.042-6.786l-.992-1.736l-12.08 6.807l.992 1.736l-6.514 3.671l-.992-1.736l6.508-3.668A9.99 9.99 0 0 0 17 28c-1.752 0-3.4.45-4.831 1.242c-.442-2.211-.18-4.053.619-5.637c.948-1.882 2.715-3.528 5.278-5.002l2.922 5.024a3.023 3.023 0 0 0 4.11 1.101l.668-.382l.609 1.177l2.674-1.362l-.677-1.309l.848-.486a2.977 2.977 0 0 0 1.095-4.085l-4.523-7.777a3.025 3.025 0 0 0-3.549-1.352z"></svg:path>`,
})
export class HealthiconsMicroscopeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsMicroscope24pxIcon],svg[healthicons-microscope-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.636 1.834l-1.732 1l.712 1.233l-.312.18a1 1 0 0 0-.366 1.366l.86 1.49C7.526 7.677 5 10.544 5 14a7.01 7.01 0 0 0 3.368 6H5v2h14v-2h-3.617c.49-.302.939-.66 1.338-1.056c.582-.576.98-1.263 1.28-1.944H20v-2h-7v2h2.74a3.3 3.3 0 0 1-.427.524c-.912.904-2.099 1.476-3.362 1.476C9.224 19 7 16.77 7 14c0-2.723 2.205-4.942 4.894-5l2.497 4.324l1.22-.704l.73 1.266l1.732-1l-.73-1.266l1.368-.79l-4.453-7.712a1 1 0 0 0-1.366-.366l-.544.314z"></svg:path>`,
})
export class HealthiconsMicroscope24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsMicroscopeNegativeIcon],svg[healthicons-microscope-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsMicroscopeNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm22.244 9.152a3.025 3.025 0 0 1 3.548 1.352l4.523 7.777a2.977 2.977 0 0 1-1.095 4.085l-.848.486l.677 1.309l-2.674 1.362l-.61-1.177l-.666.382a3.023 3.023 0 0 1-4.111-1.101l-2.922-5.024c-2.563 1.474-4.33 3.12-5.278 5.002c-.798 1.584-1.06 3.426-.62 5.637A9.96 9.96 0 0 1 17 28c3.27 0 6.173 1.57 7.997 3.996l-6.507 3.667l.992 1.736l6.514-3.67l-.992-1.737l12.08-6.807l.992 1.736l-12.042 6.786A10.05 10.05 0 0 1 26.8 40H40a1 1 0 1 1 0 2H7.832A10 10 0 0 1 7 38a9.98 9.98 0 0 1 3.404-7.516c-.762-2.927-.546-5.51.597-7.779c1.186-2.353 3.306-4.246 6.06-5.831l-.596-1.024a2.98 2.98 0 0 1 .253-3.368l-1.062-1.838l1.509-.859l-1.241-2.227l2.63-1.444l1.219 2.188l1.49-.848z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsMicroscopeNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsMicroscopeNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsMicroscopeOutlineIcon],svg[healthicons-microscope-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m19.773 8.302l1.49-.848l.98 1.698a3.025 3.025 0 0 1 3.55 1.352l4.522 7.777a2.977 2.977 0 0 1-1.095 4.085l-.848.486l.677 1.309l-2.674 1.362l-.61-1.177l-.666.382a3.023 3.023 0 0 1-4.111-1.101l-2.922-5.024c-2.563 1.474-4.33 3.12-5.278 5.002c-.798 1.584-1.06 3.426-.62 5.637A9.96 9.96 0 0 1 17 28c3.27 0 6.173 1.57 7.997 3.996l12.087-6.811l.992 1.736l-12.042 6.786A10.05 10.05 0 0 1 26.8 40H40a1 1 0 1 1 0 2H7.832A10 10 0 0 1 7 38a9.98 9.98 0 0 1 3.404-7.516c-.762-2.927-.545-5.51.597-7.778c1.186-2.354 3.306-4.247 6.06-5.832l-.596-1.024a2.98 2.98 0 0 1 .253-3.368l-1.062-1.838l1.509-.859l-1.241-2.227l2.63-1.444zm8.807 10.973L24.057 11.5a1.01 1.01 0 0 0-1.37-.368l-4.122 2.363a.99.99 0 0 0-.365 1.361l4.523 7.777c.277.478.891.642 1.37.367l4.122-2.362a.99.99 0 0 0 .365-1.362M24.749 40A8 8 0 0 0 25 38c0-1.18-.255-2.3-.714-3.308L19.482 37.4l-.992-1.736l4.746-2.675A8 8 0 0 0 9.252 40z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsMicroscopeOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsMicroscopeOutline24pxIcon],svg[healthicons-microscope-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m11.636 1.834l-1.732 1l.712 1.233l-.75.433A1 1 0 0 0 9.5 5.866l.78 1.35A7.009 7.009 0 0 0 8.368 20H4.999v1.999h14v-2h-3.617a7.5 7.5 0 0 0 1.338-1.056c.582-.576.98-1.263 1.28-1.944h2v-2h-7v2h2.74a3.3 3.3 0 0 1-.427.524c-.912.904-2.099 1.476-3.362 1.476C9.224 19 7 16.77 7 14c0-2.532 1.906-4.628 4.335-4.955l2.618 4.533l1.657-.957l.731 1.266l1.732-1l-.73-1.266l1.806-1.043l-4.453-7.712A1 1 0 0 0 13.33 2.5l-.982.567zm3.049 9.012l-2.953-5.114l1.732-1l2.953 5.114z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsMicroscopeOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsMicroscopeWithSpecimenIcon],svg[healthicons-microscope-with-specimen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M25.504 10.192a3.03 3.03 0 0 0-3.563-1.347l-.037-.068a1.62 1.62 0 0 0-2.202-.59l-.056.033l-1.269-2.173l-2.6 1.497l1.266 2.168l-.149.085a1.595 1.595 0 0 0-.462 2.371a2.98 2.98 0 0 0-.255 3.37l.68 1.168c-2.898 1.619-5.128 3.562-6.356 6c-1.143 2.269-1.36 4.85-.598 7.778A9.98 9.98 0 0 0 6.5 38a10 10 0 0 0 .832 4H39.5a1 1 0 1 0 0-2H26.3a10.05 10.05 0 0 0-.052-4.242l-8.519 2.257l-.524-1.93l8.395-2.224l.65 1.889l11.754-3.104l-.524-1.93l-11.876 3.141A10 10 0 0 0 16.5 28c-1.752 0-3.4.45-4.831 1.242c-.442-2.21-.18-4.053.618-5.637c.984-1.954 2.852-3.653 5.575-5.17l2.838 4.88a3.023 3.023 0 0 0 4.11 1.101l.71-.406l.716 1.227l2.6-1.497l-.713-1.222l.81-.464q.105-.06.205-.129a2.977 2.977 0 0 0 .89-3.956z"></svg:path><svg:path fill-rule="evenodd" d="M31.5 6a9.95 9.95 0 0 0-5.583 1.702c.519.39.97.888 1.316 1.484l4.523 7.777c.57.98.769 2.072.64 3.115q.045.021.09.048l1.647.986c.474.283.64.904.372 1.387a.963.963 0 0 1-1.345.36l-1.423-.851a5 5 0 0 1-.93 1.14l.772 1.32l-2.25 1.296c.7.154 1.426.236 2.171.236c5.523 0 10-4.477 10-10s-4.477-10-10-10m4.306 10.04a1.044 1.044 0 0 1 0-1.439l1.344-1.393a.96.96 0 0 1 1.389 0a1.044 1.044 0 0 1 0 1.439l-1.345 1.394a.96.96 0 0 1-1.388 0m-3.267-3.927a.96.96 0 0 1-1.389 0l-1.344-1.393a1.044 1.044 0 0 1 0-1.44a.96.96 0 0 1 1.388 0l1.345 1.394a1.044 1.044 0 0 1 0 1.44m.289 2.8c.525 0 .95.441.95.985s-.425.986-.95.986s-.951-.442-.951-.986s.426-.985.95-.985m2.377-4.884c.525 0 .95.441.95.986s-.425.985-.95.985c-.526 0-.951-.441-.951-.985c0-.545.425-.986.95-.986m.95 8.58c.525 0 .951.44.951.985s-.426.985-.95.985c-.526 0-.951-.441-.951-.985c0-.545.425-.986.95-.986" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsMicroscopeWithSpecimenIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsMicroscopeWithSpecimenOutlineIcon],svg[healthicons-microscope-with-specimen-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="m19.314 8.17l.089-.05a1.624 1.624 0 0 1 2.346.912a3.03 3.03 0 0 1 3.586 1.331l4.523 7.73a2.95 2.95 0 0 1-1.095 4.06l-.848.483l.677 1.3l-2.674 1.354l-.609-1.17l-.667.38a3.033 3.033 0 0 1-4.111-1.094l-2.786-4.761c-2.66 1.49-4.488 3.159-5.458 5.073c-.798 1.574-1.06 3.405-.618 5.603a10 10 0 0 1 4.831-1.235c4.037 0 7.516 2.378 9.095 5.801l12.242-3.223l.524 1.918l-12.119 3.19a9.9 9.9 0 0 1 .058 4.24h13.2c.552 0 1 .445 1 .994a.997.997 0 0 1-1 .994H7.332a9.85 9.85 0 0 1-.832-3.975a9.9 9.9 0 0 1 3.403-7.47c-.761-2.91-.545-5.476.598-7.731c1.211-2.39 3.398-4.302 6.239-5.898l-.732-1.25a2.945 2.945 0 0 1 .303-3.408a1.58 1.58 0 0 1 .283-2.55l.116-.065l-1.243-2.218L18.097 6zm8.809 10.91L23.6 11.353a1.01 1.01 0 0 0-1.37-.365l-4.122 2.348a.983.983 0 0 0-.365 1.353l4.523 7.73a1.01 1.01 0 0 0 1.37.364l4.122-2.348a.983.983 0 0 0 .365-1.353M24.5 38.026c0 .683-.087 1.345-.25 1.975H8.75a8 8 0 0 1-.25-1.975c0-4.373 3.57-7.94 8-7.94a8 8 0 0 1 7.122 4.321l-6.417 1.69l.524 1.918l6.578-1.732a8 8 0 0 1 .193 1.743" clip-rule="evenodd"></svg:path><svg:path d="M32.263 19.697a4.9 4.9 0 0 1-.487 2.022l1.229.731a.967.967 0 0 0 1.344-.358a1.03 1.03 0 0 0-.371-1.378l-1.647-.98z"></svg:path><svg:path d="M31.634 24.11a8 8 0 0 1-.723-.044l.382.733l-1.963.994a9.6 9.6 0 0 0 2.279.304a9.65 9.65 0 0 0 5.457-1.613a9.9 9.9 0 0 0 3.647-4.416a10.1 10.1 0 0 0 .623-5.722a10 10 0 0 0-2.603-5.117a9.7 9.7 0 0 0-4.973-2.792a9.6 9.6 0 0 0-5.664.497a9.7 9.7 0 0 0-2.084 1.167c.408.35.765.773 1.052 1.263l.178.305a7.7 7.7 0 0 1 1.613-.896a7.6 7.6 0 0 1 4.48-.393a7.7 7.7 0 0 1 3.948 2.218a8 8 0 0 1 2.085 4.103a8.1 8.1 0 0 1-.5 4.6a7.9 7.9 0 0 1-2.912 3.53a7.64 7.64 0 0 1-4.322 1.279"></svg:path><svg:path d="M35.15 14.74a1.033 1.033 0 0 0 0 1.43a.96.96 0 0 0 1.389 0l1.344-1.385a1.033 1.033 0 0 0 0-1.43a.96.96 0 0 0-1.388 0zm-4.5-1.373a.96.96 0 0 0 1.389 0a1.033 1.033 0 0 0 0-1.43l-1.345-1.386a.96.96 0 0 0-1.388 0a1.033 1.033 0 0 0 0 1.43zm3.002 3.155c0-.541-.426-.98-.951-.98s-.951.439-.951.98s.426.979.95.979c.526 0 .951-.439.951-.98m1.849-4.849c0-.54-.426-.979-.95-.979c-.526 0-.952.439-.952.98s.426.979.951.979s.95-.439.95-.98m.997 7.454c0-.54-.425-.98-.95-.98c-.526 0-.951.44-.951.98c0 .541.425.98.95.98c.526 0 .951-.439.951-.98"></svg:path></svg:g>`,
})
export class HealthiconsMicroscopeWithSpecimenOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsMilitaryWorkerIcon],svg[healthicons-military-worker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M24 6c-5.293 0-9.583 4.477-9.583 10c0 .576-.637 1.816-1.176 2.764c-.235.412.177.923.628.777a48 48 0 0 1 2.208-.654Q16 19.434 16 20a8 8 0 1 0 15.923-1.113a48 48 0 0 1 2.208.654c.452.146.863-.365.628-.777c-.54-.948-1.176-2.188-1.176-2.764c0-5.523-4.29-10-9.583-10m-.173 3.125a.181.181 0 0 1 .345 0l.494 1.52a.18.18 0 0 0 .172.126h1.599c.175 0 .248.225.106.328l-1.293.94a.18.18 0 0 0-.066.202l.494 1.52a.181.181 0 0 1-.279.204l-1.293-.94a.18.18 0 0 0-.213 0l-1.294.94a.181.181 0 0 1-.279-.203l.494-1.52a.18.18 0 0 0-.065-.203l-1.294-.94a.181.181 0 0 1 .107-.328h1.598c.079 0 .148-.05.173-.125zm-5.712 9.698q-.114.57-.115 1.177a6 6 0 1 0 11.885-1.177c-4.14-1.002-7.63-1.002-11.77 0" clip-rule="evenodd"></svg:path><svg:path d="m35 24l5-2.857V9h2v23l-7-3zm.726 7.728L32.644 42H42v-5.5c0-2.004-2.663-3.642-6.274-4.772"></svg:path><svg:path fill-rule="evenodd" d="M33.798 31.193c-3.32-.814-7.12-1.239-10.327-1.186C16.258 30.124 6 32.44 6 36.5V42h24.556zm-21.692 4.36a1 1 0 0 1 1.341-.447l1.553.776l1.553-.776a1 1 0 1 1 .894 1.788l-2 1a1 1 0 0 1-.894 0l-2-1a1 1 0 0 1-.447-1.341" clip-rule="evenodd"></svg:path><svg:path d="M12.142 29.338a1 1 0 1 0-.895-1.788L7.552 29.4a1 1 0 0 0 .896 1.788z"></svg:path></svg:g>`,
})
export class HealthiconsMilitaryWorkerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsMilitaryWorkerNegativeIcon],svg[healthicons-military-worker-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsMilitaryWorkerNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm18.115 18.823a6 6 0 1 0 11.77 0c-4.14-1.002-7.63-1.002-11.77 0m13.808.064a48 48 0 0 1 2.208.654c.452.146.863-.365.628-.777c-.54-.948-1.176-2.188-1.176-2.764c0-5.523-4.29-10-9.583-10s-9.583 4.477-9.583 10c0 .576-.637 1.816-1.176 2.764c-.235.412.177.923.628.777a48 48 0 0 1 2.208-.654Q16 19.434 16 20a8 8 0 1 0 15.923-1.113M42 42h-9.356l3.082-10.272C39.337 32.858 42 34.496 42 36.5zM23.47 30.007c3.209-.053 7.008.372 10.328 1.186L30.556 42H6v-5.5c0-4.06 10.258-6.376 17.47-6.493m-10.023 5.099a1 1 0 1 0-.894 1.788l2 1a1 1 0 0 0 .894 0l2-1a1 1 0 1 0-.894-1.788L15 35.882zm-.858-7.11a1 1 0 0 1-.447 1.342l-3.694 1.85a1 1 0 0 1-.896-1.788l3.695-1.85a1 1 0 0 1 1.342.447M40 9v12.143L35 24v5l7 3V9zm-16.173.125a.181.181 0 0 1 .345 0l.494 1.52a.18.18 0 0 0 .172.126h1.599c.175 0 .248.225.106.328l-1.293.94a.18.18 0 0 0-.066.202l.494 1.52a.181.181 0 0 1-.279.204l-1.293-.94a.18.18 0 0 0-.213 0l-1.294.94a.181.181 0 0 1-.279-.203l.494-1.52a.18.18 0 0 0-.065-.203l-1.294-.94a.181.181 0 0 1 .107-.328h1.598c.079 0 .148-.05.173-.125z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsMilitaryWorkerNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsMilitaryWorkerNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsMilitaryWorkerOutlineIcon],svg[healthicons-military-worker-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M23.827 9.125a.181.181 0 0 1 .345 0l.494 1.52a.18.18 0 0 0 .172.126h1.599c.175 0 .248.225.106.328l-1.293.94a.18.18 0 0 0-.066.202l.494 1.52a.181.181 0 0 1-.279.204l-1.293-.94a.18.18 0 0 0-.213 0l-1.294.94a.181.181 0 0 1-.279-.203l.494-1.52a.18.18 0 0 0-.065-.203l-1.294-.94a.181.181 0 0 1 .107-.328h1.598c.079 0 .148-.05.173-.125z"></svg:path><svg:path fill-rule="evenodd" d="M16.023 19.396q-.826.25-1.699.55a1 1 0 0 1-1.041-1.643l.007-.008a4 4 0 0 0 .202-.23c.137-.165.32-.4.502-.68c.384-.592.673-1.249.673-1.814C14.667 10.312 18.819 6 24 6s9.333 4.312 9.333 9.571c0 .565.29 1.222.673 1.814a7 7 0 0 0 .663.866l.007.007q.022.026.034.037l.007.008a1 1 0 0 1-1.041 1.643q-.873-.3-1.699-.55q.023.299.023.604a8 8 0 1 1-15.977-.604m.644-3.825C16.667 11.363 19.977 8 24 8c4.024 0 7.333 3.363 7.333 7.571c0 .587.142 1.15.34 1.653c-2.377-.667-4.565-1.05-6.74-1.134a24 24 0 0 0-2.185.014c-2.07.109-4.16.486-6.422 1.12a4.5 4.5 0 0 0 .34-1.653m1.448 3.252a6 6 0 1 0 11.77 0c-1.61-.39-3.114-.626-4.588-.713a22 22 0 0 0-2.417-.01c-1.53.078-3.09.317-4.765.723M35 24l5-2.857V9h2v23l-7-3zm5-.554l-3 1.715v2.52l3 1.286z" clip-rule="evenodd"></svg:path><svg:path d="M12.142 29.338a1 1 0 1 0-.895-1.788L7.552 29.4a1 1 0 0 0 .896 1.788zm-.036 6.215a1 1 0 0 1 1.341-.447l1.553.776l1.553-.776a1 1 0 1 1 .894 1.788l-2 1a1 1 0 0 1-.894 0l-2-1a1 1 0 0 1-.447-1.341"></svg:path><svg:path fill-rule="evenodd" d="M42 36.5c0-4.06-10.924-6.617-18.53-6.493C16.259 30.124 6 32.44 6 36.5V42h36zm-18.497-4.494c3.015-.049 6.6.35 9.72 1.105L31.156 40H8v-3.5c0-.088.048-.473.9-1.1c.825-.606 2.1-1.2 3.736-1.719c3.25-1.032 7.42-1.618 10.867-1.675m11.648 1.637L33.244 40H40v-3.5c0-.042-.032-.44-.98-1.112c-.873-.617-2.197-1.22-3.869-1.745" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsMilitaryWorkerOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsMinerWorkerIcon],svg[healthicons-miner-worker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M29 13.48a1 1 0 0 1-1-1V7.882a10 10 0 0 0-3-.807v3.405a1 1 0 0 1-2 0V7.02a8.9 8.9 0 0 0-3 .69v4.77a1 1 0 0 1-2 0V8.955a7.5 7.5 0 0 0-2.04 2.808q-.144.12-.282.25c-.243.91-.217 1.672-.045 2.15a1 1 0 0 1-1.882.676a4 4 0 0 1-.148-.525c-1.466 2.051-.114 3.533 2.493 4.447a8 8 0 1 0 15.809 0c2.611-.916 3.963-2.402 2.484-4.459q-.06.27-.15.53a1 1 0 1 1-1.887-.662c.195-.556.2-1.295-.017-2.098a4 4 0 0 0-.236-.122c-.402-.99-1.104-1.983-2.099-2.818v3.35a1 1 0 0 1-1 1m-4.356 6.375a1.5 1.5 0 1 0-1.288-2.71a1.5 1.5 0 0 0 1.288 2.71M24 22c1.51 0 2.796-.956 3.287-2.295a27 27 0 0 0 2.674-.391Q30 19.652 30 20a6 6 0 1 1-11.961-.686c.842.17 1.742.3 2.674.39A3.5 3.5 0 0 0 24 22" clip-rule="evenodd"></svg:path><svg:path d="M25 7a1 1 0 1 0-2 0z"></svg:path><svg:path fill-rule="evenodd" d="M28.466 28.4c1.15.184 2.348.43 3.534.735V42H16V29.135a40 40 0 0 1 3.534-.735L23 31h2zM26 37a2 2 0 1 1-4 0a2 2 0 0 1 4 0" clip-rule="evenodd"></svg:path><svg:path d="M12 30.425a29 29 0 0 1 2-.717V42h-2zm22-.717c.687.22 1.357.459 2 .717V42h-2zm-24 1.637C7.635 32.597 6 34.167 6 36v6h4zM42 36c0-1.833-1.635-3.404-4-4.655V42h4z"></svg:path></svg:g>`,
})
export class HealthiconsMinerWorkerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsMinerWorkerAltIcon],svg[healthicons-miner-worker-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M33.655 20.75h-8.172v19.615A1.64 1.64 0 0 1 23.848 42a1.64 1.64 0 0 1-1.635-1.635v-8.172h-3.269v8.172A1.64 1.64 0 0 1 17.31 42a1.64 1.64 0 0 1-1.635-1.635V20.75v7.467c-.899 0-3.675-1.711-3.675-5.925c0-3.176 2.776-4.81 3.675-4.81h17.98a1.64 1.64 0 0 1 1.635 1.634a1.64 1.64 0 0 1-1.635 1.634"></svg:path><svg:path d="M34 11v30h-2V11z"></svg:path><svg:path d="M26 15c0-1.657 3.134-3 7-3s7 1.343 7 3c-5-1.5-8.5-1.5-14 0"></svg:path><svg:path fill-rule="evenodd" d="M25 10.5h-1.902c.468.566.75 1.29.75 2.078a3.28 3.28 0 0 1-3.27 3.269a3.28 3.28 0 0 1-3.268-3.27c0-.787.282-1.511.75-2.077H16a4.5 4.5 0 1 1 9 0m-4.5-.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsMinerWorkerAltIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsMinerWorkerAltNegativeIcon],svg[healthicons-miner-worker-alt-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsMinerWorkerAltNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM23 10.5h-1.902c.468.566.75 1.29.75 2.078a3.28 3.28 0 0 1-3.27 3.269a3.28 3.28 0 0 1-3.268-3.27c0-.787.282-1.511.75-2.077H14a4.5 4.5 0 1 1 9 0m-4.5-.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3M32 13.892v3.626c.735.16 1.29.817 1.29 1.598c0 .78-.555 1.439-1.29 1.598V41h-2V20.75h-6.517v19.615A1.64 1.64 0 0 1 21.848 42a1.64 1.64 0 0 1-1.635-1.635v-8.172h-3.269v8.172A1.64 1.64 0 0 1 15.31 42a1.64 1.64 0 0 1-1.635-1.635V28.217c-.899 0-3.675-1.711-3.675-5.925c0-3.176 2.776-4.81 3.675-4.81H30v-3.57c-1.825.11-3.744.473-6 1.088c0-1.511 2.608-2.762 6-2.97V11h2v1.03c3.392.208 6 1.459 6 2.97c-2.19-.657-4.092-1.026-6-1.108" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsMinerWorkerAltNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsMinerWorkerAltNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsMinerWorkerAltOutlineIcon],svg[healthicons-miner-worker-alt-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M14.207 19.403C13.55 20.06 13 21.02 13 22.292c0 1.872.612 3.125 1.264 3.897q.206.242.411.424V20.75h2v19.615a.64.64 0 0 0 .635.635a.64.64 0 0 0 .634-.635v-9.172h5.27v9.172a.64.64 0 0 0 .634.635a.64.64 0 0 0 .635-.635V19.75h9.172a.64.64 0 0 0 .635-.634a.64.64 0 0 0-.635-.635h-17.98l-.005.002c-.03.006-.197.039-.484.189c-.298.157-.648.4-.979.731m.468 9.577a4 4 0 0 1-.459-.233a5.8 5.8 0 0 1-1.48-1.267C11.776 26.343 11 24.633 11 22.292c0-1.903.838-3.349 1.794-4.304a6.1 6.1 0 0 1 1.463-1.087c.444-.233.956-.42 1.418-.42h17.98a2.64 2.64 0 0 1 2.635 2.635a2.64 2.64 0 0 1-2.635 2.634h-7.172v18.615A2.64 2.64 0 0 1 23.848 43a2.64 2.64 0 0 1-2.635-2.635v-7.172h-1.269v7.172A2.64 2.64 0 0 1 17.31 43a2.64 2.64 0 0 1-2.635-2.635z" clip-rule="evenodd"></svg:path><svg:path d="M34 11v30h-2V11z"></svg:path><svg:path d="M26 15c0-1.657 3.134-3 7-3s7 1.343 7 3c-5-1.5-8.5-1.5-14 0"></svg:path><svg:path fill-rule="evenodd" d="M26 11h-1.455a4.3 4.3 0 0 1 .303 1.578a4.28 4.28 0 0 1-4.27 4.269a4.28 4.28 0 0 1-4.268-4.27c0-.556.107-1.088.303-1.577H15c0-2.761 2.462-5 5.5-5S26 8.239 26 11m-3.796 0h-3.25c-.398.41-.644.967-.644 1.578a2.28 2.28 0 0 0 2.269 2.269a2.28 2.28 0 0 0 2.269-2.27A2.26 2.26 0 0 0 22.204 11M20.5 10a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsMinerWorkerAltOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsMinerWorkerNegativeIcon],svg[healthicons-miner-worker-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsMinerWorkerNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm31.904 18.76Q32 19.368 32 20a8 8 0 1 1-15.904-1.24c-2.607-.914-3.959-2.396-2.493-4.447q.057.271.148.525a1 1 0 1 0 1.882-.676c-.172-.479-.197-1.24.045-2.15q.138-.13.282-.25A7.5 7.5 0 0 1 18 8.954v3.526a1 1 0 0 0 2 0V7.71a8.9 8.9 0 0 1 3-.69v3.46a1 1 0 0 0 2 0V7.075a10 10 0 0 1 3 .807v4.599a1 1 0 0 0 2 0V9.13c.995.835 1.697 1.829 2.1 2.818a4 4 0 0 1 .235.122c.216.803.212 1.542.017 2.098a1 1 0 1 0 1.887.662q.09-.26.15-.53c1.479 2.057.127 3.544-2.485 4.459m-13.865.554c.842.17 1.742.3 2.674.391a3.501 3.501 0 0 0 6.574 0c.932-.09 1.832-.221 2.674-.391Q30 19.652 30 20a6 6 0 1 1-11.961-.686M24 20a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m1-13a1 1 0 1 0-2 0zm7 22.135V42H16V29.135a40 40 0 0 1 3.534-.735L23 31h2l3.466-2.6c1.15.184 2.348.43 3.534.735m-20 1.29a29 29 0 0 1 2-.717V42h-2zM36 42h-2V29.708c.687.22 1.357.459 2 .717zM10 31.345C7.635 32.597 6 34.167 6 36v6h4zM38 42h4v-6c0-1.833-1.635-3.404-4-4.655zm-12-5a2 2 0 1 1-4 0a2 2 0 0 1 4 0" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsMinerWorkerNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsMinerWorkerNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsMinerWorkerOutlineIcon],svg[healthicons-miner-worker-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M24 6a1 1 0 0 1 1 1v.068c2.798.292 4.933 1.495 6.323 3.026c.956 1.053 1.589 2.308 1.788 3.532l.108.083c1.124.871 1.949 1.927 1.753 3.138c-.189 1.17-1.246 1.882-2.23 2.317a9 9 0 0 1-.76.296q.018.267.018.54a8 8 0 1 1-15.982-.54a9 9 0 0 1-.76-.296c-.984-.435-2.041-1.147-2.23-2.317c-.196-1.211.629-2.267 1.753-3.138l.127-.098a6 6 0 0 1 .096-.474a7.6 7.6 0 0 1 1.411-2.853C17.755 8.576 19.948 7.196 23 7.02V7a1 1 0 0 1 1-1m7.66 10.44a1 1 0 0 0 1.152-.356c.197.275.19.421.186.444c-.013.08-.166.41-1.065.808c-1.049.464-2.627.8-4.437.99a3.5 3.5 0 0 0-6.992 0c-1.81-.19-3.388-.526-4.437-.99c-.899-.398-1.052-.728-1.065-.808c-.004-.023-.011-.168.186-.444a1 1 0 0 0 1.75-.931c-.12-.324-.157-.861.009-1.543a5.6 5.6 0 0 1 1.042-2.091l.011-.014V13.5a1 1 0 1 0 2 0V9.846c.822-.435 1.817-.739 3-.823V11.5a1 1 0 1 0 2 0V9.081c1.17.147 2.168.482 3 .93V13.5a1 1 0 1 0 2 0v-1.881c1.116 1.327 1.352 2.731 1.06 3.541a1 1 0 0 0 .6 1.28m-10.193 4.475a28 28 0 0 1-3.448-.435a6 6 0 0 0 11.962 0c-1.06.208-2.234.352-3.448.435A3.5 3.5 0 0 1 24 22a3.5 3.5 0 0 1-2.533-1.085M25.5 18.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0" clip-rule="evenodd"></svg:path><svg:path d="M24 39a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path><svg:path fill-rule="evenodd" d="M19.534 28.4L23 31h2l3.466-2.6C34.561 29.376 42 32.09 42 36v6H6v-6c0-3.91 7.439-6.624 13.534-7.6m6.133 4.6l3.31-2.483c1.003.184 2.024.415 3.023.686V40h2v-8.185c.7.24 1.371.501 2 .782V40H12v-7.403c.629-.28 1.3-.542 2-.782V40h2v-8.797c.999-.271 2.02-.502 3.023-.686L22.333 33zm13.638 1.69c.564.584.695 1.015.695 1.31v4h-2v-6.344c.54.346.976.694 1.305 1.035m-30.61 0c.33-.34.766-.688 1.305-1.034V40H8v-4c0-.295.13-.726.695-1.31" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsMinerWorkerOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsMinistryOfHealthIcon],svg[healthicons-ministry-of-health-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M23.375 5.22a1 1 0 0 1 1.25 0L39.35 17H42v6H6v-6h2.65zM25 10v2h2v2h-2v2h-2v-2h-2v-2h2v-2zm-1 15a4 4 0 0 0-4 4v8h-6v-4h-2v-8H8v8H6v4H4v6h40v-6h-2v-4h-2v-8h-4v8h-2v4h-6v-8a4 4 0 0 0-4-4m0 2a2 2 0 0 1 2 2v8h-4v-8a2 2 0 0 1 2-2" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsMinistryOfHealthIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsMinistryOfHealth24pxIcon],svg[healthicons-ministry-of-health-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M4.286 8L12 2l7.714 6H21v3H3V8zm6.964 1V7.75H10v-1.5h1.25V5h1.5v1.25H14v1.5h-1.25V9z" clip-rule="evenodd"></svg:path><svg:path d="M21 17v3H3v-3h2v-4.5h2V17h2v-4.5h2V17h2v-4.5h2V17h2v-4.5h2V17z"></svg:path></svg:g>`,
})
export class HealthiconsMinistryOfHealth24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsMinistryOfHealthNegativeIcon],svg[healthicons-ministry-of-health-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsMinistryOfHealthNegative0)"><svg:path d="M25 12v-2h-2v2h-2v2h2v2h2v-2h2v-2zm1 17a2 2 0 1 0-4 0v8h4z"></svg:path><svg:path fill-rule="evenodd" d="M48 0H0v48h48zM24.625 5.22a1 1 0 0 0-1.25 0L8.65 17H6v6h36v-6h-2.65zM20 29a4 4 0 0 1 8 0v8h6v-4h2v-8h4v8h2v4h2v6H4v-6h2v-4h2v-8h4v8h2v4h6z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsMinistryOfHealthNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsMinistryOfHealthNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsMinistryOfHealthOutlineIcon],svg[healthicons-ministry-of-health-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M25 16v-2h2v-2h-2v-2h-2v2h-2v2h2v2z"></svg:path><svg:path fill-rule="evenodd" d="M24.625 5.22a1 1 0 0 0-1.25 0L8.65 17H7a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1v10H7a1 1 0 0 0-1 1v3H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h38a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-1v-3a1 1 0 0 0-1-1h-1V23h1a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-1.65zM36.149 17L24 7.28L11.85 17zM8 19v2h32v-2zm30 4h-2v10h2zm-4 10V23H14v10h1a1 1 0 0 1 1 1v3h4v-8a4 4 0 0 1 8 0v8h4v-3a1 1 0 0 1 1-1zm-12-4v8h4v-8a2 2 0 1 0-4 0m20 10v2H6v-2zm-8-4v2h6v-2zm-24-2V23h2v10zm-2 2h6v2H8z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsMinistryOfHealthOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsMinistryOfHealthOutline24pxIcon],svg[healthicons-ministry-of-health-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M4.286 8L12 2l7.714 6H21v3H3V8zm6.964 1V7.75H10v-1.5h1.25V5h1.5v1.25H14v1.5h-1.25V9z" clip-rule="evenodd"></svg:path><svg:path d="M21 17v3H3v-3h2v-4.5h2V17h2v-4.5h2V17h2v-4.5h2V17h2v-4.5h2V17z"></svg:path></svg:g>`,
})
export class HealthiconsMinistryOfHealthOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsMobileIcon],svg[healthicons-mobile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M12.967 7.005A3 3 0 0 1 15.96 4l15.973-.026a3 3 0 0 1 3.005 2.995l.055 33.987A3 3 0 0 1 32 43.96l-15.972.026a3 3 0 0 1-3.005-2.995zm1.999.997a2 2 0 0 1 1.996-2.004l13.978-.022a2 2 0 0 1 2.003 1.996l.044 26.99a2 2 0 0 1-1.997 2.003l-13.977.023a2 2 0 0 1-2.003-1.996zm9.044 33.973a1.998 1.998 0 1 0-.008-3.997a1.998 1.998 0 0 0 .008 3.996" clip-rule="evenodd"></svg:path><svg:path d="M23.192 27.54c-1.589-1.316-2.895-2.398-3.806-3.416c-.91-1.015-1.41-1.95-1.41-2.967c-.002-1.656 1.418-2.957 3.228-2.959c1.024 0 2.01.436 2.653 1.125l.117.126l.117-.126c.642-.69 1.627-1.128 2.652-1.129c1.81-.002 3.231 1.297 3.233 2.953c0 1.018-.497 1.953-1.405 2.97c-.907 1.017-2.206 2.098-3.785 3.413l-.016.014l-.788.652z"></svg:path></svg:g>`,
})
export class HealthiconsMobileIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsMobile24pxIcon],svg[healthicons-mobile-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M11.677 12.686c-.663-.625-1.208-1.14-1.588-1.623c-.379-.482-.587-.926-.588-1.41c0-.786.591-1.403 1.346-1.404c.427 0 .838.207 1.106.534l.05.06l.048-.06a1.45 1.45 0 0 1 1.105-.536c.755 0 1.348.616 1.349 1.403c0 .483-.207.927-.586 1.41c-.378.483-.92.997-1.578 1.622l-.006.006l-.33.31z"></svg:path><svg:path fill-rule="evenodd" d="M8.5 2h7A2.5 2.5 0 0 1 18 4.5v15a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 6 19.5v-15A2.5 2.5 0 0 1 8.5 2M13 19.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0M8 4h8v13H8z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsMobile24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsMobileClinicIcon],svg[healthicons-mobile-clinic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 10a3 3 0 0 0-3 3v22h3.126a4.002 4.002 0 0 0 7.748 0h1.252a4.002 4.002 0 0 0 7.748 0h9.252a4.002 4.002 0 0 0 7.748 0H44v-8.124a3 3 0 0 0-.965-2.205l-5.282-4.875A3 3 0 0 0 35.718 19H32v-6a3 3 0 0 0-3-3zm33.874 23H42v-5H32v5h1.126a4.002 4.002 0 0 1 7.748 0M32 26h9.526l-5.13-4.735a1 1 0 0 0-.678-.265H32zM6 33v-5h24v5h-6.126a4.002 4.002 0 0 0-7.748 0h-1.252a4.002 4.002 0 0 0-7.748 0zm3 1a2 2 0 1 0 4 0a2 2 0 0 0-4 0m11 2a2 2 0 1 0 0-4a2 2 0 0 0 0 4m19-2a2 2 0 1 1-4 0a2 2 0 0 1 4 0M19 15v3h3v2h-3v3h-2v-3h-3v-2h3v-3z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsMobileClinicIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsMobileClinic24pxIcon],svg[healthicons-mobile-clinic-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 3a1 1 0 0 0-1 1v14h2.05q-.05.243-.05.5a2.5 2.5 0 1 0 4.95-.5h6.1q-.05.243-.05.5a2.5 2.5 0 1 0 4.95-.5H22v-4.764c0-.31-.072-.617-.211-.894L20.17 9.106A2 2 0 0 0 18.382 8H16V4a1 1 0 0 0-1-1zm14.5 13H20v-2h-4v2zM14 16H4v-2h10zm5.382-4l-1-2H16v2zM8 7.5V6h2v1.5h1.5v2H10V11H8V9.5H6.5v-2z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsMobileClinic24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsMobileClinicNegativeIcon],svg[healthicons-mobile-clinic-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsMobileClinicNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM4 13a3 3 0 0 1 3-3h22a3 3 0 0 1 3 3v6h3.718a3 3 0 0 1 2.035.796l5.282 4.875A3 3 0 0 1 44 26.876V35h-3.126a4.002 4.002 0 0 1-7.748 0h-9.252a4.002 4.002 0 0 1-7.748 0h-1.252a4.002 4.002 0 0 1-7.748 0H4zm38 20h-1.126a4.002 4.002 0 0 0-7.748 0H32v-5h10zm-.474-7H32v-5h3.718a1 1 0 0 1 .678.265zM6 28v5h1.126a4.002 4.002 0 0 1 7.748 0h1.252a4.002 4.002 0 0 1 7.748 0H30v-5zm5 8a2 2 0 1 1 0-4a2 2 0 0 1 0 4m11-2a2 2 0 1 1-4 0a2 2 0 0 1 4 0m15 2a2 2 0 1 0 0-4a2 2 0 0 0 0 4M19 18v-3h-2v3h-3v2h3v3h2v-3h3v-2z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsMobileClinicNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsMobileClinicNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsMobileClinicOutlineIcon],svg[healthicons-mobile-clinic-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M17 18v-3h2v3h3v2h-3v3h-2v-3h-3v-2z"></svg:path><svg:path fill-rule="evenodd" d="M4 13a3 3 0 0 1 3-3h22a3 3 0 0 1 3 3v6h3.718a3 3 0 0 1 2.035.796l5.282 4.875A3 3 0 0 1 44 26.876V35h-3.126a4.002 4.002 0 0 1-7.748 0h-9.252a4.002 4.002 0 0 1-7.748 0h-1.252a4.002 4.002 0 0 1-7.748 0H4zm33 17a4 4 0 0 0-3.874 3H32v-5h10v5h-1.126A4 4 0 0 0 37 30m-.604-8.735L41.526 26H32v-5h3.718a1 1 0 0 1 .678.265M7 12a1 1 0 0 0-1 1v13h24V13a1 1 0 0 0-1-1zm13 18a4 4 0 0 1 3.874 3H30v-5H6v5h1.126a4.002 4.002 0 0 1 7.748 0h1.252c.444-1.725 2.01-3 3.874-3m-9 6a2 2 0 1 1 0-4a2 2 0 0 1 0 4m11-2a2 2 0 1 1-4 0a2 2 0 0 1 4 0m15 2a2 2 0 1 0 0-4a2 2 0 0 0 0 4" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsMobileClinicOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsMobileClinicOutline24pxIcon],svg[healthicons-mobile-clinic-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 16v-2h10v2zm10-4H4V5h10zm2 4v-2h4v2zm0-4h3.382l-1-2H16zm-2 6H8.95q.05.243.05.5a2.5 2.5 0 1 1-4.95-.5H2V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v4h2.382a2 2 0 0 1 1.789 1.106l1.618 3.236c.139.277.211.584.211.894V18h-2.05q.05.243.05.5a2.5 2.5 0 1 1-4.95-.5zm3.5 0a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1m-11 0a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1M8 11V9.5H6.5v-2H8V6h2v1.5h1.5v2H10V11z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsMobileClinicOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsMobileNegativeIcon],svg[healthicons-mobile-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsMobileNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm12.967 7.249a3 3 0 0 1 2.995-3.005l15.972-.026a3 3 0 0 1 3.005 2.995l.055 33.987A3 3 0 0 1 32 44.205l-15.972.026a3 3 0 0 1-3.005-2.995zm1.999.997a2 2 0 0 1 1.996-2.004L30.94 6.22a2 2 0 0 1 2.003 1.997l.044 26.99a2 2 0 0 1-1.997 2.003l-13.977.023a2 2 0 0 1-2.003-1.997zm9.044 33.972a1.998 1.998 0 1 0-.008-3.996a1.998 1.998 0 0 0 .008 3.996m-.818-14.679l.79.657l.788-.652l.016-.014c1.58-1.315 2.878-2.396 3.785-3.413s1.406-1.952 1.405-2.97c-.002-1.656-1.423-2.954-3.233-2.953c-1.025 0-2.01.439-2.652 1.13l-.117.125l-.117-.126c-.643-.69-1.629-1.125-2.653-1.125c-1.81.002-3.23 1.303-3.228 2.959c0 1.018.5 1.952 1.41 2.967c.911 1.018 2.217 2.1 3.806 3.416" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsMobileNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsMobileNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsMobileOutlineIcon],svg[healthicons-mobile-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="m31.964 6.339l-16 .013a1 1 0 0 0-1 1l.028 34a1 1 0 0 0 1.001 1l16-.013a1 1 0 0 0 1-1.001l-.029-34a1 1 0 0 0-1-1M15.962 4.352a3 3 0 0 0-2.998 3.002l.028 34a3 3 0 0 0 3.003 2.998l16-.013a3 3 0 0 0 2.997-3.003l-.028-34a3 3 0 0 0-3.002-2.997z"></svg:path><svg:path d="M16.964 7.351a1 1 0 0 0-.999 1l.022 27a1 1 0 0 0 1.001 1l14-.011a1 1 0 0 0 1-1.001l-.023-27a1 1 0 0 0-1-1zm6.228 20.189l.79.656l.788-.652l.016-.014c1.58-1.315 2.878-2.396 3.785-3.413s1.406-1.952 1.405-2.97c-.002-1.656-1.423-2.954-3.233-2.953c-1.025 0-2.01.439-2.652 1.13l-.117.125l-.117-.126c-.643-.69-1.629-1.125-2.653-1.125c-1.81.002-3.23 1.303-3.228 2.959c0 1.018.5 1.952 1.41 2.967c.911 1.018 2.217 2.1 3.806 3.416m.8 13.805a2 2 0 1 0-.003-4a2 2 0 0 0 .003 4"></svg:path></svg:g>`,
})
export class HealthiconsMobileOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsMobileOutline24pxIcon],svg[healthicons-mobile-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M13 18a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path fill-rule="evenodd" d="M9 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5zm2.744 7.002c-.53-.493-.965-.9-1.27-1.28c-.302-.382-.469-.732-.47-1.114c0-.62.473-1.108 1.077-1.109c.341 0 .67.163.884.422l.04.047l.038-.047c.214-.259.543-.423.884-.423c.604 0 1.077.486 1.078 1.107c0 .382-.166.732-.469 1.114c-.302.381-.734.787-1.26 1.28l-.006.005l-.263.244z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M8.5 2h7A2.5 2.5 0 0 1 18 4.5v15a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 6 19.5v-15A2.5 2.5 0 0 1 8.5 2m0 2a.5.5 0 0 0-.5.5v15a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-15a.5.5 0 0 0-.5-.5z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsMobileOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsMoneyBagIcon],svg[healthicons-money-bag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M24.039 6c-4.517 0-8.632 1.492-11.067 2.711q-.33.165-.616.322c-.378.206-.7.398-.956.567l2.77 4.078l1.304.519c5.096 2.571 11.93 2.571 17.027 0l1.48-.768L36.6 9.6a16 16 0 0 0-1.689-.957C32.488 7.437 28.471 6 24.04 6m-6.442 4.616a25 25 0 0 1-2.901-.728C16.978 8.875 20.377 7.8 24.04 7.8c2.537 0 4.936.516 6.92 1.17c-2.325.327-4.806.882-7.17 1.565c-1.86.538-4.034.48-6.192.081m15.96 5.064l-.246.124c-5.606 2.828-13.042 2.828-18.648 0l-.233-.118C6.008 24.927-.422 41.997 24.039 41.997S41.913 24.61 33.557 15.68M23 24a2 2 0 1 0 0 4zm2-2v-1h-2v1a4 4 0 0 0 0 8v4c-.87 0-1.611-.555-1.887-1.333a1 1 0 1 0-1.885.666A4 4 0 0 0 23 36v1h2v-1a4 4 0 0 0 0-8v-4c.87 0 1.611.555 1.887 1.333a1 1 0 1 0 1.885-.666A4 4 0 0 0 25 22m0 8v4a2 2 0 1 0 0-4" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsMoneyBagIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsMoneyBagNegativeIcon],svg[healthicons-money-bag-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsMoneyBagNegative0)"><svg:path d="M14.696 9.561c.924.291 1.904.545 2.9.729c2.159.398 4.333.457 6.193-.08c2.364-.685 4.845-1.239 7.17-1.567c-1.984-.653-4.383-1.17-6.92-1.17c-3.662 0-7.062 1.075-9.343 2.088"></svg:path><svg:path fill-rule="evenodd" d="M28.772 24.667A4 4 0 0 0 25 22v-1h-2v1a4 4 0 0 0 0 8v4c-.87 0-1.611-.555-1.887-1.333a1 1 0 1 0-1.885.666A4 4 0 0 0 23 36v1h2v-1a4 4 0 0 0 0-8v-4c.87 0 1.611.555 1.887 1.333a1 1 0 1 0 1.885-.666M23 24a2 2 0 1 0 0 4zm2 10a2 2 0 1 0 0-4z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M48 0H0v48h48zM12.972 8.385c2.435-1.22 6.55-2.711 11.067-2.711c4.433 0 8.449 1.437 10.873 2.643l.015.007l.105.053c.654.33 1.184.641 1.568.897l-2.619 3.828l-1.48.768c-5.097 2.572-11.931 2.572-17.027 0l-1.304-.519l-2.77-4.077c.257-.169.578-.361.956-.567q.287-.157.616-.322m20.34 7.092l.245-.123C41.913 24.282 48.5 41.67 24.039 41.67s-18.03-17.07-9.61-26.31l.234.118c5.606 2.828 13.042 2.828 18.649 0" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsMoneyBagNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsMoneyBagNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsMoneyBagOutlineIcon],svg[healthicons-money-bag-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M28.772 24.667A4 4 0 0 0 25 22v-1h-2v1a4 4 0 1 0 0 8v4c-.87 0-1.611-.555-1.887-1.333a1 1 0 1 0-1.885.666A4 4 0 0 0 23 36v1h2v-1a4 4 0 0 0 0-8v-4a2 2 0 0 1 1.886 1.333a1 1 0 1 0 1.886-.666M23 24a2 2 0 1 0 0 4zm2 10a2 2 0 1 0 0-4z"></svg:path><svg:path d="M13.153 8.621C15.607 7.42 19.633 6 24.039 6c4.314 0 8.234 1.361 10.675 2.546l.138.067c.736.364 1.33.708 1.748.987L32.906 15C41.422 23.706 48 41.997 24.039 41.997S6.479 24.038 15.069 15l-3.67-5.4c.283-.185.642-.4 1.07-.628q.318-.171.684-.35m17.379 6.307l2.957-4.323c-2.75.198-6.022.844-9.172 1.756c-2.25.65-4.75.551-7.065.124a25 25 0 0 1-1.737-.386l1.92 2.827c4.115 1.465 8.981 1.465 13.097.002M16.28 16.63c4.815 1.86 10.602 1.86 15.417-.002a29.3 29.3 0 0 1 4.988 7.143c1.352 2.758 2.088 5.515 1.968 7.891c-.116 2.293-1.018 4.252-3.078 5.708c-2.147 1.517-5.758 2.627-11.537 2.627c-5.785 0-9.413-1.091-11.58-2.591c-2.075-1.437-2.986-3.37-3.115-5.632c-.135-2.35.585-5.093 1.932-7.87c1.285-2.648 3.078-5.197 5.005-7.274m-1.15-6.714c.8.238 1.636.445 2.484.602c2.15.396 4.306.454 6.146-.079a54 54 0 0 1 6.53-1.471C28.45 8.414 26.298 8 24.038 8c-3.445 0-6.658.961-8.908 1.916"></svg:path></svg:g>`,
})
export class HealthiconsMoneyBagOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsMosqueIcon],svg[healthicons-mosque-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.195 14.932c1.266-.402 2.269-.634 3.305-.634c1.033 0 2.033.23 3.292.63c-.89-4.066-3.292-8.88-3.292-8.88s-2.473 4.996-3.305 8.884M13 17.102l-.316-.105c-1.485-.496-2.356-.7-3.184-.7s-1.699.204-3.184.7L6 17.102v24.946h7zm4 10.946v4h-2h4v-1a1 1 0 1 1 2 0v1h2v-1a1 1 0 1 1 2 0v1h2v-1a1 1 0 1 1 2 0v1h4h-2v-4zm15.207-2H15.793c-.51-1.156-.793-2.496-.793-4c0-3.765 3.175-6.499 5.836-8.789c.802-.69 1.557-1.34 2.164-1.966V8.048h2v3.245c.607.626 1.362 1.276 2.164 1.966c2.66 2.29 5.836 5.024 5.836 8.789c0 1.504-.284 2.844-.793 4m2.793 16h7v-25a1 1 0 0 1-.316-.051c-1.485-.496-2.356-.7-3.184-.7s-1.699.204-3.184.7l-.316.105zm.195-27.116c1.266-.402 2.269-.634 3.305-.634c1.032 0 2.033.23 3.292.63c-.89-4.066-3.292-8.88-3.292-8.88s-2.473 4.996-3.305 8.884M33 42.048v-8H15v8h4v-1.12a4 4 0 0 1 2.308-3.624L24 36.048l2.692 1.256A4 4 0 0 1 29 40.929v1.119z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsMosqueIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsMosqueNegativeIcon],svg[healthicons-mosque-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsMosqueNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM9.5 14.298c-1.036 0-2.04.232-3.305.634C7.027 11.044 9.5 6.048 9.5 6.048s2.401 4.814 3.292 8.88c-1.26-.4-2.26-.63-3.292-.63m3.184 2.699l.316.105v24.946H6V17.102l.316-.105c1.485-.496 2.356-.7 3.184-.7s1.698.204 3.184.7M17 32.047v-4h14v4h-2v-1a1 1 0 1 0-2 0v1h-2v-1a1 1 0 1 0-2 0v1h-2v-1a1 1 0 1 0-2 0v1zm-1.207-6h16.414c.51-1.155.793-2.495.793-4c0-3.764-3.175-6.498-5.836-8.788c-.802-.69-1.557-1.34-2.164-1.966V8.048h-2v3.245c-.607.626-1.362 1.276-2.164 1.966c-2.66 2.29-5.836 5.024-5.836 8.789c0 1.504.284 2.844.793 4M35 17.103l.316-.105c1.485-.496 2.356-.7 3.184-.7s1.699.204 3.184.7a1 1 0 0 0 .316.051v25h-7zm3.5-2.804c-1.036 0-2.04.232-3.305.634c.832-3.888 3.305-8.884 3.305-8.884s2.401 4.814 3.292 8.88c-1.26-.4-2.26-.63-3.292-.63M33 34.048v8h-4v-1.12a4 4 0 0 0-2.308-3.624L24 36.048l-2.692 1.256A4 4 0 0 0 19 40.929v1.119h-4v-8z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsMosqueNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsMosqueNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsMosqueOutlineIcon],svg[healthicons-mosque-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10 6.048s.485.85 1.122 2.138c.877 1.77 2.043 4.369 2.635 6.721q.148.584.243 1.14v15h2V25.7c-.64-1.191-1-2.608-1-4.224c0-3.585 3.175-6.189 5.836-8.37a44 44 0 0 0 1.797-1.525q.191-.175.367-.347V8.048h2v3.186q.176.172.367.347c.533.489 1.15.995 1.797 1.525c2.66 2.181 5.836 4.785 5.836 8.37c0 1.616-.36 3.033-1 4.224v5.348h2v-15q.082-.547.228-1.137c.56-2.273 1.755-4.92 2.652-6.726c.635-1.28 1.12-2.137 1.12-2.137s.485.85 1.122 2.138c.877 1.77 2.043 4.369 2.635 6.721q.148.584.243 1.14v26H6v-26q.082-.546.228-1.136c.56-2.273 1.755-4.92 2.652-6.726C9.515 6.905 10 6.048 10 6.048m18 34v-.528a2 2 0 0 0-1.106-1.789L24 36.284l-2.894 1.447A2 2 0 0 0 20 39.52v.528zm2 0h4v-7H14v7h4v-.528a4 4 0 0 1 2.211-3.578L24 34.048l3.789 1.894A4 4 0 0 1 30 39.52zm6-23.532c.808-.195 1.404-.293 2-.293s1.192.098 2 .293v23.532h-4zm-28 0v23.532h4V16.516c-.808-.195-1.404-.293-2-.293s-1.192.098-2 .293m.456-2.142c.396-1.26.962-2.633 1.543-3.896c.563 1.232 1.122 2.597 1.528 3.893A8.6 8.6 0 0 0 10 14.223c-.508 0-1.01.054-1.544.15m9.475 10.674c-.582-.946-.931-2.132-.931-3.572c0-1.161.505-2.272 1.466-3.442c.98-1.193 2.278-2.266 3.638-3.381l.027-.023c.633-.519 1.29-1.057 1.869-1.589c.579.532 1.236 1.07 1.869 1.59l.027.022c1.36 1.115 2.659 2.188 3.638 3.38c.96 1.17 1.466 2.282 1.466 3.443c0 1.44-.35 2.626-.93 3.572zm.069 2v4h1v-1a1 1 0 1 1 2 0v1h2v-1a1 1 0 1 1 2 0v1h2v-1a1 1 0 1 1 2 0v1h1v-4zm20-16.57c-.582 1.263-1.148 2.636-1.544 3.896a8.6 8.6 0 0 1 1.544-.15c.502 0 1 .053 1.527.147c-.406-1.295-.965-2.66-1.528-3.892" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsMosqueOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsMosquitoIcon],svg[healthicons-mosquito-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M24.001 6a1 1 0 0 1 1 1v8.485c.318.318.61.784.869 1.367l3.63-2.69v-2.829a1 1 0 0 1 .31-.724l3.5-3.333a1 1 0 0 1 1.38 1.448l-3.19 3.038v2.905a1 1 0 0 1-.405.803l-4.5 3.334q-.04.03-.081.054c.307 1.335.486 2.93.486 4.642q0 .965-.073 1.87l5.987 5.294a1 1 0 0 1 .317.95l-.719 3.5l2.914 1.371a1 1 0 1 1-.852 1.81l-3.626-1.707a1 1 0 0 1-.553-1.106l.76-3.703l-4.556-4.03q-.13.632-.293 1.19l2.125 2.88a1 1 0 0 1 .14.92l-1.257 3.654l2.677 4.056a1 1 0 0 1-1.669 1.102l-2.948-4.467a1 1 0 0 1-.111-.876l1.247-3.623l-1.131-1.534c-.413.607-.882.949-1.379.949s-.966-.343-1.379-.949l-1.13 1.534l1.246 3.623a1 1 0 0 1-.111.876l-2.948 4.467a1 1 0 0 1-1.67-1.102l2.678-4.056l-1.258-3.654a1 1 0 0 1 .141-.92l2.125-2.88q-.164-.558-.293-1.19l-4.557 4.03l.761 3.703a1 1 0 0 1-.553 1.106l-3.626 1.707a1 1 0 0 1-.852-1.81l2.914-1.371l-.72-3.5a1 1 0 0 1 .318-.95l5.987-5.295A24 24 0 0 1 21 23.5c0-1.713.179-3.307.486-4.642a1 1 0 0 1-.081-.054l-4.5-3.334a1 1 0 0 1-.405-.803v-2.905l-3.19-3.038a1 1 0 0 1 1.38-1.448l3.5 3.333a1 1 0 0 1 .31.724v2.83l3.63 2.69c.26-.586.553-1.052.871-1.37V7a1 1 0 0 1 1-1M12.877 25c-2.953 0-4.096-.759-4.503-1.212l-.057-.067l10.019-1.345a5 5 0 0 1-.495.717c-.803.961-2.25 1.907-4.964 1.907m-6.769-3c-.45 1.667.271 5 6.77 5c4.882 0 7.013-2.635 7.77-4.935C20.9 21.305 21 20.58 21 20zm29.015 3c2.953 0 4.096-.759 4.503-1.212q.03-.033.057-.067l-10.019-1.345q.208.369.495.717c.803.961 2.25 1.907 4.964 1.907m6.769-3c.45 1.667-.271 5-6.77 5c-4.882 0-7.013-2.635-7.77-4.935A6.8 6.8 0 0 1 27 20z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsMosquitoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsMosquito24pxIcon],svg[healthicons-mosquito-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12.5 6.84c.232.11.431.302.55.576l.192.442q.048.108.092.218L15.5 6.723V4.76l2.688-2.15a.5.5 0 1 1 .624.78L16.5 5.24v2.037L13.665 9.05A9 9 0 0 1 14 11.501v1.289q0 .084-.004.168l3.615 2.891l-.96 2.218l2.064.983a.5.5 0 0 1-.43.902l-2.935-1.397l1.04-2.402l-2.601-2.08a4 4 0 0 1-.424.88l1.737 1.39l-1.046 2.613l1.373 2.288a.5.5 0 1 1-.858.514l-1.627-2.712l.954-2.386l-1.09-.872a1 1 0 0 1-1.616 0l-1.09.872l.954 2.386l-1.627 2.712a.5.5 0 0 1-.858-.514l1.373-2.288l-1.046-2.614l1.737-1.389l-.085-.127a3.3 3.3 0 0 1-.365-.732L7.61 16.151l1.04 2.402l-2.936 1.398a.5.5 0 0 1-.43-.904l2.064-.982l-.96-2.218L10 12.96v-.978c0-.984.127-1.961.375-2.908L7.5 7.277V5.24L5.188 3.39a.5.5 0 1 1 .624-.78L8.5 4.76v1.963l2.183 1.364q.122-.34.267-.671c.119-.274.318-.466.55-.577V2h1z"></svg:path><svg:path fill-rule="evenodd" d="M9.814 9.611A.5.5 0 0 1 10 10c0 .907-.875 3.059-3.93 3.495c-1.468.21-2.48.005-3.143-.426C2.26 12.634 2 12 2 11.5a.5.5 0 0 1 .395-.489l7-1.5a.5.5 0 0 1 .42.1M3.12 11.88c.072.118.184.242.354.352c.387.252 1.125.464 2.456.274c1.785-.255 2.576-1.174 2.89-1.848zM14 10a.5.5 0 0 1 .605-.489l7 1.5A.5.5 0 0 1 22 11.5c0 .5-.259 1.134-.927 1.57c-.663.43-1.675.635-3.144.425C14.875 13.059 14 10.907 14 10m6.527 2.23c.17-.11.282-.233.354-.351l-5.7-1.222c.314.674 1.105 1.593 2.89 1.848c1.331.19 2.07-.022 2.456-.274" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsMosquito24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsMosquitoCollectionIcon],svg[healthicons-mosquito-collection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M24 4a1 1 0 0 1 1 1v6.95q.143.229.27.517l1.959-2.211l.827-2.37a1 1 0 0 1 1.888.659l-.892 2.556a1 1 0 0 1-.195.334l-2.48 2.797l10.386 1.196l.195.618c.24.76.144 1.836-.745 2.683c-.85.81-2.276 1.271-4.399 1.271c-2.228 0-3.762-.693-4.738-1.695a4.6 4.6 0 0 1-1.077-1.762l.001.172c0 .745-.054 1.456-.151 2.104l2.51.962a1 1 0 0 1 .301.183l1.551 1.364l1.97.495a1 1 0 1 1-.487 1.94l-2.205-.555a1 1 0 0 1-.417-.218l-1.598-1.405l-1.254-.482l1.555 1.303a1 1 0 0 1 .337.971l-.43 2.06l1.141 1.142a1 1 0 0 1 .154 1.217c2.258-.192 4.254-.508 5.852-.908c1.145-.286 2.006-.596 2.591-.888c-.555-.277-1.36-.57-2.42-.845v-2.06c3.08.73 5 1.761 5 2.905v3.667c0 .801-.439 1.438-1 1.927v7.714c0 1.055-.795 1.801-1.571 2.286c-.83.517-1.963.946-3.275 1.291C31.517 43.582 27.926 44 24 44s-7.516-.419-10.154-1.114c-1.312-.346-2.446-.775-3.275-1.292C9.795 41.109 9 40.364 9 39.308v-7.713c-.561-.49-1-1.127-1-1.928V26c0-1.144 1.92-2.176 5-2.905v2.06c-1.06.274-1.865.567-2.42.845c.585.292 1.446.602 2.591.888c1.694.423 3.835.754 6.26.94a1 1 0 0 1 .133-1.248l1.142-1.142l-.43-2.06a1 1 0 0 1 .245-.886l1.227-1.321l-.92.393l-1.487 1.402a1 1 0 0 1-.443.242l-2.204.554a1 1 0 0 1-.487-1.94l1.952-.49l1.427-1.345a1 1 0 0 1 .292-.191l2.274-.974a14 14 0 0 1-.151-2.279a4.6 4.6 0 0 1-1.076 1.762C19.948 19.307 18.414 20 16.185 20c-2.122 0-3.548-.46-4.398-1.27c-.889-.848-.986-1.923-.745-2.684l.195-.618l10.385-1.196l-2.479-2.797a1 1 0 0 1-.195-.334l-.892-2.556a1 1 0 0 1 1.888-.66l.827 2.37l1.959 2.211q.127-.287.27-.515V5a1 1 0 0 1 1-1m-.458 18.07a1 1 0 0 1-.202.325l-1.001 1.079l.435 2.084a1 1 0 0 1-.271.912l-1.46 1.46a61 61 0 0 0 6.283-.02l-1.441-1.44a1 1 0 0 1-.272-.912l.419-2.003l-1.281-1.073a1 1 0 0 1-.293-.412a.84.84 0 0 1-.458.145a.84.84 0 0 1-.458-.145M10 27.938v1.729c0 .012.024.277.712.711c.638.402 1.627.801 2.94 1.151c2.608.696 6.267 1.138 10.348 1.138s7.74-.442 10.349-1.138c1.312-.35 2.301-.749 2.939-1.15c.688-.435.712-.7.712-.712v-1.729C35.27 29.168 30.024 30 24 30s-11.27-.832-14-2.062m28.13-2.4q.003 0-.02.023a.1.1 0 0 1 .02-.024m-28.26 0q.002-.001.02.023q-.023-.024-.02-.024m24.994 7.924c.78-.208 1.5-.444 2.136-.707v6.55c-.007.023-.065.24-.63.591c-.587.367-1.504.733-2.725 1.056c-2.43.642-5.84 1.05-9.645 1.05c-3.806 0-7.216-.408-9.644-1.048c-1.222-.323-2.14-.69-2.727-1.056c-.564-.351-.622-.568-.628-.59v-.002L11 32.754c.636.264 1.356.5 2.136.708c2.82.752 6.66 1.205 10.864 1.205c4.203 0 8.044-.453 10.864-1.205m.024-16.237l-.055.057c-.31.295-1.118.718-3.019.718c-1.794 0-2.774-.544-3.306-1.09a2.7 2.7 0 0 1-.36-.46zm-21.72.057l-.056-.057l6.74-.776a2.7 2.7 0 0 1-.36.46c-.532.547-1.512 1.092-3.306 1.092c-1.9 0-2.71-.424-3.019-.72" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsMosquitoCollectionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsMosquitoCollectionNegativeIcon],svg[healthicons-mosquito-collection-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M23.542 22.07a1 1 0 0 1-.202.325l-1.001 1.079l.435 2.084a1 1 0 0 1-.271.912l-1.46 1.46a61 61 0 0 0 6.283-.02l-1.441-1.44a1 1 0 0 1-.272-.912l.419-2.003l-1.281-1.073a1 1 0 0 1-.293-.412a.84.84 0 0 1-.458.145a.84.84 0 0 1-.458-.145"></svg:path><svg:path d="M38 27.938C35.27 29.168 30.024 30 24 30s-11.27-.832-14-2.062v1.729c0 .012.024.277.712.711c.638.402 1.627.801 2.94 1.151c2.608.696 6.267 1.138 10.348 1.138s7.74-.442 10.349-1.138c1.312-.35 2.301-.749 2.939-1.15c.688-.435.712-.7.712-.712zm-1 4.817c-.636.263-1.356.499-2.136.707c-2.82.752-6.66 1.205-10.864 1.205c-4.203 0-8.044-.453-10.864-1.205c-.78-.208-1.5-.444-2.136-.707v6.55c.007.023.065.24.63.591c.587.367 1.504.733 2.725 1.056C16.786 41.592 20.196 42 24 42c3.806 0 7.216-.408 9.645-1.048c1.221-.323 2.138-.69 2.726-1.056c.564-.351.622-.568.628-.59v-.002zm1.13-7.218q.003 0-.02.024a.1.1 0 0 1 .02-.024m-28.26 0q.002 0 .02.024q-.023-.024-.02-.024m25.018-8.312l-.055.057c-.31.295-1.118.718-3.019.718c-1.794 0-2.774-.544-3.306-1.09a2.7 2.7 0 0 1-.36-.46zm-21.721.057l-.055-.057l6.74-.776a2.7 2.7 0 0 1-.36.46C18.96 17.457 17.98 18 16.186 18c-1.9 0-2.71-.423-3.019-.718"></svg:path><svg:path fill-rule="evenodd" d="M0 0h48v48H0zm8 26v3.667c0 .801.439 1.438 1 1.927v7.714c0 1.055.795 1.801 1.571 2.286c.83.517 1.963.946 3.274 1.291C16.485 43.582 20.075 44 24 44s7.516-.419 10.154-1.114c1.312-.346 2.446-.775 3.275-1.292c.776-.485 1.571-1.23 1.571-2.286v-7.713c.561-.49 1-1.127 1-1.928V26c0-1.144-1.92-2.176-5-2.905v2.06c1.06.274 1.865.567 2.42.845c-.585.292-1.446.602-2.591.888c-1.598.4-3.594.716-5.852.908a1 1 0 0 0-.154-1.217l-1.141-1.141l.43-2.061a1 1 0 0 0-.337-.971l-1.555-1.302l1.254.48l1.598 1.406a1 1 0 0 0 .417.219l2.205.553a1 1 0 0 0 .487-1.94l-1.97-.494l-1.55-1.364a1 1 0 0 0-.303-.183l-2.51-.962A14 14 0 0 0 26 16.543c.195.589.537 1.21 1.077 1.762c.976 1.002 2.51 1.695 4.738 1.695c2.123 0 3.55-.46 4.399-1.27c.889-.848.986-1.923.745-2.684l-.195-.618l-10.385-1.196l2.479-2.797a1 1 0 0 0 .195-.334l.892-2.556a1 1 0 0 0-1.888-.66l-.827 2.37l-1.959 2.211a4 4 0 0 0-.27-.515V5a1 1 0 1 0-2 0v6.95a4 4 0 0 0-.27.517l-1.959-2.211l-.827-2.37a1 1 0 0 0-1.888.659l.892 2.556q.066.186.195.334l2.48 2.797l-10.386 1.196l-.195.618c-.24.76-.144 1.836.745 2.683c.85.81 2.276 1.271 4.399 1.271c2.228 0 3.762-.693 4.739-1.695A4.6 4.6 0 0 0 22 16.543l-.001.172c0 .747.054 1.458.152 2.107l-2.274.974a1 1 0 0 0-.292.191l-1.427 1.345l-1.952.49a1 1 0 0 0 .487 1.94l2.204-.553a1 1 0 0 0 .443-.243l1.487-1.402l.92-.393l-1.227 1.321a1 1 0 0 0-.246.885l.43 2.06l-1.14 1.142a1 1 0 0 0-.134 1.25c-2.425-.187-4.566-.518-6.26-.94c-1.145-.287-2.006-.597-2.591-.889c.555-.277 1.36-.57 2.42-.845v-2.06c-3.08.73-5 1.761-5 2.905" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsMosquitoCollectionNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsMosquitoCollectionOutlineIcon],svg[healthicons-mosquito-collection-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M23.5 4a1 1 0 0 1 1 1v6.317a2.6 2.6 0 0 1 .66.664l1.7-1.416a1 1 0 0 1 .423-.208l3-.667a1 1 0 1 1 .433 1.953l-2.763.614l-1.813 1.511a1 1 0 0 1-.146.102l.018.067l11.174 1.287l.195.618c.25.794.15 1.92-.783 2.81c-.894.853-2.406 1.348-4.683 1.348c-2.383 0-4.014-.74-5.049-1.802a5 5 0 0 1-.368-.423a19 19 0 0 1-.031 1.34q.053.03.105.065l2.248 1.57a1 1 0 0 1 .242.238l1.21 1.696l2.019.506a1 1 0 0 1-.488 1.94l-2.374-.596a1 1 0 0 1-.57-.389l-1.325-1.854l-1.352-.944q-.12.591-.284 1.101l1.618 1.355a1 1 0 0 1 .337.971l-.473 2.26l.787.787c2.385-.188 4.491-.515 6.162-.933c1.145-.286 2.006-.596 2.591-.888c-.555-.277-1.36-.57-2.42-.845v-2.06c3.08.73 5 1.761 5 2.905v3.667c0 .801-.439 1.438-1 1.927v7.714c0 1.055-.795 1.801-1.571 2.286c-.83.517-1.963.946-3.275 1.291C31.017 43.582 27.426 44 23.5 44s-7.516-.419-10.154-1.114c-1.312-.346-2.446-.775-3.275-1.292c-.776-.485-1.571-1.23-1.571-2.286v-7.713c-.561-.49-1-1.127-1-1.928V26c0-1.144 1.92-2.176 5-2.905v2.06c-1.06.274-1.865.567-2.42.845c.585.292 1.446.602 2.591.888c1.76.44 4.005.78 6.549.962l.816-.816l-.472-2.26a1 1 0 0 1 .246-.885l1.303-1.403a11 11 0 0 1-.263-.983l-.948.76l-1.345 1.882a1 1 0 0 1-.57.389l-2.374.596a1 1 0 1 1-.487-1.94l2.017-.506l1.212-1.696a1 1 0 0 1 .188-.198l1.957-1.57l.037-.028a19 19 0 0 1-.036-1.417a5 5 0 0 1-.368.423C19.098 19.259 17.467 20 15.084 20c-2.277 0-3.79-.495-4.683-1.348c-.934-.89-1.034-2.016-.783-2.81l.195-.619l11.174-1.286l.019-.067q-.077-.044-.147-.102l-1.813-1.511l-2.763-.614a1 1 0 0 1 .433-1.953l3 .667a1 1 0 0 1 .424.208l1.7 1.416q.046-.066.096-.129c.148-.188.336-.38.564-.534V5a1 1 0 0 1 1-1m-1.39 20.35l-.483.521l.477 2.283a1 1 0 0 1-.195.826a63 63 0 0 0 3.589-.012a1 1 0 0 1-.186-.814l.46-2.202l-.812-.68c-.33.375-.817.728-1.46.728c-.599 0-1.061-.305-1.39-.65m13.26-7.322q-.06.087-.152.177c-.354.338-1.248.795-3.303.795c-1.95 0-3.026-.593-3.616-1.198a3 3 0 0 1-.476-.643zm-23.74 0q.058.087.15.177c.355.338 1.25.795 3.304.795c1.95 0 3.026-.593 3.616-1.198c.202-.207.358-.427.476-.643zM19.922 29.9a1 1 0 0 1-.989-.065c-4.046-.301-7.422-.991-9.433-1.897v1.729c0 .012.024.277.712.711c.638.402 1.627.801 2.94 1.151c2.608.696 6.267 1.138 10.348 1.138s7.74-.442 10.349-1.138c1.312-.35 2.301-.749 2.939-1.15c.688-.435.712-.7.712-.712v-1.729c-1.932.87-5.126 1.542-8.965 1.86c-.317.24-.743.266-1.084.08A63 63 0 0 1 23.5 30c-1.23 0-2.428-.035-3.578-.1m17.708-4.363q.003 0-.02.024a.1.1 0 0 1 .02-.024m-28.26 0q.002 0 .02.024q-.023-.024-.02-.024m24.994 7.925c.78-.208 1.5-.444 2.136-.707v6.55c-.007.023-.065.24-.63.591c-.587.367-1.504.733-2.725 1.056c-2.43.64-5.84 1.048-9.645 1.048c-3.806 0-7.216-.408-9.644-1.048c-1.222-.323-2.14-.69-2.727-1.056c-.564-.351-.622-.568-.628-.59v-.002l-.001-6.55c.636.264 1.356.5 2.136.708c2.82.752 6.66 1.205 10.864 1.205c4.203 0 8.044-.453 10.864-1.205M22.5 18c0-1.58.214-2.967.534-3.926c.159-.477.326-.795.466-.975c.139.18.306.498.465.975c.32.959.535 2.347.535 3.926s-.215 2.968-.535 3.926c-.159.477-.326.795-.465.975c-.14-.18-.307-.498-.466-.975c-.32-.958-.534-2.347-.534-3.926m.881 5.024l-.002.002l.007-.004z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsMosquitoCollectionOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsMosquitoNegativeIcon],svg[healthicons-mosquito-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsMosquitoNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM25.001 7a1 1 0 1 0-2 0v8.482c-.318.319-.612.785-.87 1.37l-3.631-2.69v-2.829a1 1 0 0 0-.31-.724l-3.5-3.333a1 1 0 0 0-1.38 1.448l3.19 3.038v2.905a1 1 0 0 0 .405.803l4.5 3.334q.04.03.081.054C21.18 20.193 21 21.788 21 23.5q0 .965.073 1.87l-5.987 5.294a1 1 0 0 0-.317.95l.719 3.5l-2.914 1.371a1 1 0 1 0 .852 1.81l3.626-1.707a1 1 0 0 0 .553-1.106l-.76-3.703l4.556-4.03q.13.632.293 1.19l-2.125 2.88a1 1 0 0 0-.14.92l1.257 3.654l-2.677 4.056a1 1 0 0 0 1.669 1.102l2.948-4.467a1 1 0 0 0 .111-.876l-1.247-3.623l1.131-1.534c.413.607.882.949 1.379.949s.966-.343 1.379-.949l1.13 1.534l-1.246 3.623a1 1 0 0 0 .111.876l2.948 4.467a1 1 0 1 0 1.67-1.102l-2.678-4.056l1.258-3.654a1 1 0 0 0-.141-.92l-2.125-2.88q.164-.558.293-1.19l4.557 4.03l-.761 3.703a1 1 0 0 0 .553 1.106l3.626 1.707a1 1 0 0 0 .852-1.81l-2.914-1.371l.72-3.5a1 1 0 0 0-.318-.95l-5.987-5.295c.048-.601.073-1.227.073-1.869c0-1.713-.179-3.307-.486-4.642q.041-.026.081-.054l4.5-3.334a1 1 0 0 0 .405-.803v-2.905l3.19-3.038a1 1 0 0 0-1.38-1.448l-3.5 3.333a1 1 0 0 0-.31.724v2.83l-3.63 2.69c-.259-.584-.551-1.05-.869-1.368zM8.374 23.788c.407.453 1.55 1.212 4.503 1.212c2.714 0 4.16-.946 4.964-1.907c.192-.23.356-.472.495-.717L8.317 23.72q.027.034.057.067M6.108 22l12.881-1.73L21 20c0 .58-.1 1.304-.351 2.065C19.89 24.365 17.76 27 12.877 27c-6.498 0-7.22-3.333-6.769-5m33.518 1.788c-.407.453-1.55 1.212-4.503 1.212c-2.714 0-4.16-.946-4.964-1.907a5 5 0 0 1-.495-.717l10.019 1.345zM41.892 22L29.01 20.27L27 20c0 .58.1 1.304.351 2.065c.758 2.3 2.889 4.935 7.772 4.935c6.498 0 7.22-3.333 6.769-5" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsMosquitoNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsMosquitoNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsMosquitoOutlineIcon],svg[healthicons-mosquito-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M24.001 6a1 1 0 0 1 1 1v6.565c.73.553 1.365 1.696 1.825 3.22l2.674-2.547v-2.905a1 1 0 0 1 .31-.724l3.5-3.333a1 1 0 0 1 1.38 1.448l-3.19 3.038v2.905a1 1 0 0 1-.31.724l-3.5 3.333a1 1 0 0 1-.373.225q.087.54.15 1.114L41.891 22c.45 1.667-.271 5-6.77 5c-4.422 0-6.587-2.162-7.52-4.279c-.002.97-.06 1.906-.166 2.786l5.501 5.178a1 1 0 0 1 .294.93l-.719 3.499l2.914 1.371a1 1 0 1 1-.852 1.81l-3.626-1.707a1 1 0 0 1-.553-1.106l.765-3.723l-4.151-3.907c-.158.63-.345 1.207-.554 1.719l1.921 2.181a1 1 0 0 1 .196.987l-1.258 3.654l2.677 4.056a1 1 0 0 1-1.669 1.102l-2.948-4.467a1 1 0 0 1-.111-.876l1.228-3.57l-1.107-1.256c-.425.465-.893.721-1.383.721s-.958-.257-1.384-.723l-1.108 1.258l1.228 3.57a1 1 0 0 1-.111.876l-2.948 4.467a1 1 0 1 1-1.67-1.102l2.678-4.056l-1.258-3.654a1 1 0 0 1 .196-.987l1.923-2.183a13 13 0 0 1-.554-1.719l-4.152 3.91l.765 3.723a1 1 0 0 1-.553 1.106l-3.626 1.707a1 1 0 0 1-.852-1.81l2.914-1.371l-.72-3.5a1 1 0 0 1 .295-.929l5.504-5.18a24 24 0 0 1-.167-2.79C19.47 24.834 17.305 27 12.877 27c-6.498 0-7.22-3.333-6.769-5l14.428-1.938q.063-.571.15-1.112a1 1 0 0 1-.376-.226l-3.5-3.333a1 1 0 0 1-.31-.724v-2.905l-3.19-3.038a1 1 0 0 1 1.38-1.448l3.5 3.333a1 1 0 0 1 .31.724v2.905l2.676 2.549c.46-1.525 1.095-2.67 1.825-3.222V7a1 1 0 0 1 1-1M8.374 23.788c.407.453 1.55 1.212 4.503 1.212c2.714 0 4.16-.946 4.964-1.907c.192-.23.356-.472.495-.717L8.317 23.72q.027.034.057.067m31.252 0c-.407.453-1.55 1.212-4.503 1.212c-2.714 0-4.16-.946-4.964-1.907a5 5 0 0 1-.495-.717l10.019 1.345zm-14.023-1.139c0 2.432-.379 4.543-.924 5.973c-.24.63-.482 1.049-.678 1.3c-.196-.251-.438-.67-.677-1.3c-.545-1.43-.924-3.541-.924-5.972s.379-4.543.924-5.974c.24-.628.481-1.048.677-1.298c.196.25.439.67.678 1.298c.545 1.431.924 3.542.924 5.974" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsMosquitoOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsMosquitoOutline24pxIcon],svg[healthicons-mosquito-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12.5 6.84c.232.11.431.302.55.576l.192.442q.048.108.092.218L15.5 6.723V4.76l2.688-2.15a.5.5 0 1 1 .624.78L16.5 5.24v2.037L13.665 9.05A9 9 0 0 1 14 11.501v1.289q0 .084-.004.168l3.615 2.891l-.96 2.218l2.064.983a.5.5 0 0 1-.43.902l-2.935-1.397l1.04-2.402l-2.601-2.08a4 4 0 0 1-.424.88l1.737 1.39l-1.046 2.613l1.373 2.288a.5.5 0 1 1-.858.514l-1.627-2.712l.954-2.386l-1.09-.872a1 1 0 0 1-1.616 0l-1.09.872l.954 2.386l-1.627 2.712a.5.5 0 0 1-.858-.514l1.373-2.288l-1.046-2.614l1.737-1.389l-.085-.127a3.3 3.3 0 0 1-.365-.732L7.61 16.151l1.04 2.402l-2.936 1.398a.5.5 0 0 1-.43-.904l2.064-.982l-.96-2.218L10 12.96v-.978c0-.984.127-1.961.375-2.908L7.5 7.277V5.24L5.188 3.39a.5.5 0 1 1 .624-.78L8.5 4.76v1.963l2.183 1.364q.122-.34.267-.671c.119-.274.318-.466.55-.577V2h1z"></svg:path><svg:path fill-rule="evenodd" d="M9.814 9.611A.5.5 0 0 1 10 10c0 .907-.875 3.059-3.93 3.495c-1.468.21-2.48.005-3.143-.426C2.26 12.634 2 12 2 11.5a.5.5 0 0 1 .395-.489l7-1.5a.5.5 0 0 1 .42.1M3.12 11.88c.072.118.184.242.354.352c.387.252 1.125.464 2.456.274c1.785-.255 2.576-1.174 2.89-1.848zM14 10a.5.5 0 0 1 .605-.489l7 1.5A.5.5 0 0 1 22 11.5c0 .5-.259 1.134-.927 1.57c-.663.43-1.675.635-3.144.425C14.875 13.059 14 10.907 14 10m6.527 2.23c.17-.11.282-.233.354-.351l-5.7-1.222c.314.674 1.105 1.593 2.89 1.848c1.331.19 2.07-.022 2.456-.274" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsMosquitoOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsMouthIcon],svg[healthicons-mouth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 24c3-5.455 11.2-13.745 20-9.818C33 9.818 41 18.545 44 24c-3 4.364-11.2 12-20 12S7 28.364 4 24m5.31-.477C12.414 22.473 18.183 21 24 21c5.747 0 11.45 1.439 14.58 2.486c.457.152.431.798-.03.936l-.025.008C35.5 25.34 29.98 27 24 27c-6.08 0-11.683-1.625-14.672-2.573c-.448-.142-.463-.754-.019-.904" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsMouthIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsMouth24pxIcon],svg[healthicons-mouth-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 6.668C7 4 3.5 9.134 2 12.218C3.5 14.683 7.6 19 12 19s8.5-4.316 10-6.783C20.5 9.134 17 4 12 6.667M12 14c4.418 0 8-.672 8-1.5S16.418 11 12 11s-8 .672-8 1.5S7.582 14 12 14" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsMouth24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsMouthNegativeIcon],svg[healthicons-mouth-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsMouthNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM24 14.182C15.2 10.255 7 18.545 4 24c3 4.364 11.2 12 20 12s17-7.636 20-12c-3-5.455-11-14.182-20-9.818M24 21c-5.816 0-11.585 1.473-14.69 2.523c-.445.15-.43.762.018.904C12.318 25.375 17.92 27 24 27c5.98 0 11.5-1.66 14.525-2.57l.025-.008c.461-.138.487-.784.03-.936C35.45 22.439 29.747 21 24 21" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsMouthNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsMouthNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsMouthOutlineIcon],svg[healthicons-mouth-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M24 14.182C15.2 10.255 7 18.545 4 24c3 4.364 11.2 12 20 12s17-7.636 20-12c-3-5.455-11-14.182-20-9.818m17.604 9.694c-1.464-2.32-3.734-4.995-6.458-6.8c-3.11-2.059-6.598-2.877-10.274-1.095a2 2 0 0 1-1.687.027c-3.593-1.603-7.119-.782-10.28 1.248C10.158 19.02 7.86 21.608 6.4 23.88c1.471 1.86 3.772 4.166 6.569 6.114C16.31 32.322 20.162 34 24 34s7.69-1.678 11.032-4.005c2.8-1.95 5.102-4.258 6.572-6.12"></svg:path><svg:path d="M12.555 23.958C15.683 24.992 19.745 26 24 26c4.196 0 8.204-1.037 11.334-2.077C32.155 22.912 28.066 22 24 22c-4.114 0-8.252.934-11.445 1.958m-3.521-.86C12.448 21.73 18.202 20 24 20c5.7 0 11.36 1.672 14.793 3.03c.828.327.777 1.493-.057 1.806C35.414 26.079 29.919 28 24 28c-6.04 0-11.636-1.894-14.935-3.174c-.804-.312-.832-1.406-.031-1.727"></svg:path></svg:g>`,
})
export class HealthiconsMouthOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsMouthOutline24pxIcon],svg[healthicons-mouth-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 12.257c1.5-3.065 5-8.17 10-5.518c5-2.652 8.5 2.453 10 5.518C20.5 14.709 16.4 19 12 19s-8.5-4.291-10-6.743m15.464 2.212q-.15.036-.305.07c-1.354.29-3.177.461-5.159.461s-3.805-.171-5.16-.461l-.304-.07q.295.258.61.504C8.735 16.218 10.431 17 12 17s3.264-.782 4.855-2.027q.313-.246.609-.504m-.388-5.543c.727.572 1.38 1.343 1.939 2.158l-.113-.06c-.466-.236-1.074-.42-1.743-.562C15.805 10.172 13.982 10 12 10s-3.805.171-5.16.461c-.668.144-1.276.327-1.742.563l-.113.06c.558-.815 1.212-1.586 1.94-2.158q.968-.762 1.902-.895c.597-.087 1.326-.007 2.236.475a2 2 0 0 0 1.874 0c.91-.482 1.64-.562 2.236-.475q.933.133 1.903.895M7.26 12.583a10 10 0 0 1-.356-.083q.165-.042.356-.083C8.44 12.164 10.116 12 12 12s3.56.164 4.74.417q.19.04.356.083q-.165.042-.356.083c-1.18.253-2.856.417-4.74.417s-3.56-.164-4.74-.417" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsMouthOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsMsmIcon],svg[healthicons-msm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 9.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0M9.55 21.23c.073-.433.153-.846.239-1.23H10v20.5a1.5 1.5 0 0 0 2.995.12l.85-10.62h2.31l.85 10.62A1.5 1.5 0 0 0 20 40.5V20h.52c.202.46.402.964.595 1.492a37 37 0 0 1 1.015 3.236c.126.48.223.899.287 1.228q.047.248.068.4c.012.09.015.134.015.144a1.5 1.5 0 0 0 3 0c0-.01.003-.054.015-.143q.02-.154.068-.4c.064-.33.161-.749.287-1.229c.251-.96.607-2.12 1.015-3.236c.193-.528.393-1.032.595-1.492H28v20.5a1.5 1.5 0 0 0 2.995.12l.85-10.62h2.31l.85 10.62A1.5 1.5 0 0 0 38 40.5V20h.211c.086.384.166.797.24 1.23c.387 2.257.549 4.67.549 5.27a1.5 1.5 0 0 0 3 0c0-.798-.182-3.384-.592-5.777c-.205-1.193-.48-2.428-.854-3.397c-.183-.476-.426-.983-.76-1.396c-.324-.402-.918-.93-1.794-.93H28v.023c-.66.098-1.15.489-1.446.78c-.374.368-.697.834-.972 1.3c-.557.943-1.076 2.16-1.514 3.357l-.068.187l-.068-.186c-.438-1.198-.957-2.415-1.514-3.358c-.275-.466-.598-.932-.972-1.3c-.296-.291-.787-.682-1.446-.78V15H10c-.876 0-1.47.527-1.794.93c-.334.413-.577.92-.76 1.396c-.374.969-.65 2.204-.854 3.397C6.182 23.116 6 25.703 6 26.5a1.5 1.5 0 0 0 3 0c0-.6.162-3.013.55-5.27M29 9.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 0 0-7 0"></svg:path>`,
})
export class HealthiconsMsmIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsMsmNegativeIcon],svg[healthicons-msm-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsMsmNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm15.5 13a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7M10 20h-.211c-.086.384-.166.797-.24 1.23C9.162 23.487 9 25.9 9 26.5a1.5 1.5 0 0 1-3 0c0-.798.182-3.384.592-5.777c.205-1.193.48-2.428.854-3.396c.183-.477.426-.984.76-1.397c.324-.402.918-.93 1.794-.93h10v.023c.66.098 1.15.489 1.446.78c.374.368.697.834.972 1.3c.557.943 1.076 2.16 1.514 3.357l.068.187l.068-.186c.438-1.198.957-2.415 1.514-3.358c.275-.466.598-.932.972-1.3c.296-.291.787-.682 1.446-.78V15h10c.876 0 1.47.527 1.794.93c.334.413.577.92.76 1.396c.374.969.65 2.204.854 3.397c.41 2.393.592 4.98.592 5.777a1.5 1.5 0 0 1-3 0c0-.6-.162-3.013-.55-5.27a26 26 0 0 0-.239-1.23H38v20.5a1.5 1.5 0 0 1-2.995.12L34.155 30h-2.31l-.85 10.62A1.5 1.5 0 0 1 28 40.5V20h-.52c-.202.46-.402.964-.595 1.492a37 37 0 0 0-1.015 3.236a20 20 0 0 0-.287 1.228a7 7 0 0 0-.068.4c-.012.09-.014.134-.015.143q0 .004 0 0a1.5 1.5 0 0 1-3 0q0 .004 0 0c0-.01-.003-.053-.015-.142a7 7 0 0 0-.068-.4c-.064-.33-.161-.749-.287-1.229a37 37 0 0 0-1.015-3.236A26 26 0 0 0 20.52 20H20v20.5a1.5 1.5 0 0 1-2.995.12L16.155 30h-2.31l-.85 10.62A1.5 1.5 0 0 1 10 40.5zM29 9.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 0 0-7 0" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsMsmNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsMsmNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsMsmOutlineIcon],svg[healthicons-msm-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M20 10.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-2 0a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m19 0a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-2 0a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m1.15 31.496A2.5 2.5 0 0 0 38.5 39.5v-8.542q.245.042.5.042a3 3 0 0 0 3-3c0-.521-.006-1.004-.01-1.41l-.001-.01v-.003l-.004-.371a31 31 0 0 1 0-.74l.001-.014l.001-.03v-.006l.001-.007l.008-.088l.004-.089v-.088c0-2.096-.25-4.243-1.179-5.96c-.492-.91-1.202-1.748-2.191-2.343c-.992-.596-2.085-.841-3.176-.841h-3.908c-3.381 0-5.957 2.228-7.546 4.304C22.411 18.228 19.835 16 16.454 16h-3.908c-1.09 0-2.184.245-3.176.841c-.989.595-1.699 1.433-2.191 2.343C6.249 20.9 6 23.048 6 25.144v.088l.004.089l.008.088v.013l.002.044q.003.057.003.157c.002.136.001.325-.002.583q0 .173-.004.373v.002C6.006 26.988 6 27.474 6 28a3 3 0 0 0 3.5 2.958V39.5a2.5 2.5 0 0 0 4.985.276l.015-.138l.015.138A2.5 2.5 0 0 0 19.5 39.5v-9.477l.243-5.34c.372.593.663 1.192.872 1.736c.28.73.385 1.293.385 1.581a3 3 0 1 0 6 0c0-.288.105-.85.385-1.58c.21-.545.5-1.144.872-1.736l.243 5.339V39.5a2.5 2.5 0 0 0 4.982.298l.018-.148l.018.148a2.5 2.5 0 0 0 2.631 2.197M11.5 39.5a.5.5 0 0 0 .997.055l1.01-9.082a1 1 0 0 1 1.987 0l1.01 9.082a.5.5 0 0 0 .996-.055V30l.001-.045l.36-7.92a1 1 0 0 1 1.653-.712a9.6 9.6 0 0 1 1.488 1.652a12.2 12.2 0 0 1 1.48 2.728c.323.841.518 1.663.518 2.297a1 1 0 1 0 2 0c0-1.76-.943-4.211-2.377-6.196C21.195 19.827 19.048 18 16.454 18h-3.908c-.789 0-1.514.176-2.145.555c-.63.38-1.11.927-1.463 1.58C8.249 21.409 8 23.149 8 25.144v.045l.004.044c.015.17.017.492.011.995q0 .176-.004.375C8.006 27.011 8 27.489 8 28a1 1 0 0 0 1.5.867V23h2zm13.877-17.696q-.101.14-.199.283c.394.691.742 1.416 1.024 2.147c.232-.42.497-.844.796-1.259a9.7 9.7 0 0 1 1.488-1.652a1 1 0 0 1 1.653.711l.36 7.92l.001.046v9.5a.5.5 0 0 0 .996.06l1.011-8.423a1 1 0 0 1 1.986 0l1.01 8.423a.5.5 0 0 0 .997-.06V23h2v5.866A1 1 0 0 0 40 28c0-.512-.006-.988-.01-1.396V26.6l-.001-.01l-.004-.364c-.006-.503-.004-.826.011-.995l.004-.044v-.044c0-1.996-.25-3.736-.937-5.008c-.354-.654-.833-1.201-1.464-1.58c-.631-.38-1.356-.556-2.145-.556h-3.908c-2.594 0-4.741 1.827-6.17 3.804" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsMsmOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsNIcon],svg[healthicons-n-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16 17.524V36a2 2 0 1 1-4 0V12a2 2 0 0 1 3.536-1.28L32 30.476V12a2 2 0 1 1 4 0v24a2 2 0 0 1-3.536 1.28z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsNIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsNNegativeIcon],svg[healthicons-n-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsNNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM16 36V17.524L32.464 37.28A2 2 0 0 0 36 36V12a2 2 0 1 0-4 0v18.476L15.536 10.72A2 2 0 0 0 12 12v24a2 2 0 1 0 4 0" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsNNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsNNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsNOutlineIcon],svg[healthicons-n-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11 36V12a3 3 0 0 1 5.305-1.92L31 27.713V12a3 3 0 0 1 6 0v24a3 3 0 0 1-5.305 1.92L17 20.286V36a3 3 0 1 1-6 0m2-24v24a1 1 0 1 0 2 0V17.524a1 1 0 0 1 1.768-.64L33.232 36.64A1 1 0 0 0 35 36V12a1 1 0 0 0-2 0v18.476a1 1 0 0 1-1.768.64L14.768 11.36l.768-.64l-.768.64A1 1 0 0 0 13 12" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsNOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsNappyDiaperIcon],svg[healthicons-nappy-diaper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M6 11.51c0-.834.676-1.51 1.51-1.51h32.98c.834 0 1.51.676 1.51 1.51v3.24h-5.882c-1.17 0-2.118.895-2.118 2s.948 2 2.118 2H42V20a18 18 0 0 1-.249 3H41c-8.248 0-14.94 6.656-15 14.89a18.2 18.2 0 0 1-4 0C21.94 29.656 15.248 23 7 23h-.751A18 18 0 0 1 6 20v-1.25h5.882c1.17 0 2.118-.895 2.118-2s-.948-2-2.118-2H6z"></svg:path><svg:path d="M41.297 25c-1.803 6.248-6.9 11.1-13.29 12.552C28.245 30.58 33.97 25 41 25zM7 25c7.03 0 12.756 5.58 12.992 12.552C13.603 36.1 8.507 31.248 6.704 25z"></svg:path></svg:g>`,
})
export class HealthiconsNappyDiaperIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsNappyDiaper24pxIcon],svg[healthicons-nappy-diaper-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M3.281 4C2.574 4 2 4.57 2 5.274v1.76h2.963c.555 0 1.005.447 1.005.999s-.45 1-1.005 1H2v1.027q0 .75.109 1.47h.764c4.443 0 8.042 3.586 8.042 8v.412a10 10 0 0 0 2.17 0v-.412c0-4.414 3.6-8 8.042-8h.764q.108-.72.109-1.47V9.032h-2.963a1 1 0 0 1-1.005-1c0-.551.45-.998 1.005-.998H22v-1.76C22 4.57 21.426 4 20.718 4z"></svg:path><svg:path d="M21.374 13.529h-.247c-3.325 0-6.023 2.68-6.032 5.986a10 10 0 0 0 6.28-5.986m-12.47 5.986c-.009-3.306-2.707-5.986-6.032-5.986h-.247a10 10 0 0 0 6.279 5.986"></svg:path></svg:g>`,
})
export class HealthiconsNappyDiaper24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsNappyDiaperOutlineIcon],svg[healthicons-nappy-diaper-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.51 10A1.51 1.51 0 0 0 6 11.51V14h.157C5.517 14 5 14.518 5 15.157v3.686C5 19.483 5.518 20 6.157 20H6c0 9.941 8.059 18 18 18s18-8.059 18-18h-.157c.64 0 1.157-.518 1.157-1.157v-3.686c0-.64-.518-1.157-1.157-1.157H42v-2.49A1.51 1.51 0 0 0 40.49 10zM40 14v-2H8v2h4a3 3 0 1 1 0 6H8c0 1.026.097 2.03.281 3.003c7.224.142 13.106 5.756 13.674 12.868a16 16 0 0 0 4.09 0c.568-7.112 6.45-12.726 13.674-12.868c.184-.973.281-1.977.281-3.003h-4a3 3 0 1 1 0-6zM19.904 35.47c-.718-5.643-5.356-10.063-11.098-10.443A16.03 16.03 0 0 0 19.904 35.47m8.192 0a16.03 16.03 0 0 0 11.098-10.443c-5.742.38-10.38 4.8-11.098 10.444M7 16v2h5a1 1 0 1 0 0-2zm34 2h-5a1 1 0 1 1 0-2h5z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsNappyDiaperOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsNappyDiaperOutline24pxIcon],svg[healthicons-nappy-diaper-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M2.053 5.274C2.053 4.57 2.623 4 3.327 4h17.346c.704 0 1.275.57 1.275 1.274v1.26h-2v-.535H4.053v.535h-2z"></svg:path><svg:path fill-rule="evenodd" d="M2.053 9.532v.528C2.053 15.55 6.506 20 12 20s9.948-4.45 9.948-9.94v-.528h-2v.528q0 .492-.06.97a8.006 8.006 0 0 0-7.244 6.946a8 8 0 0 1-1.288 0a8.006 8.006 0 0 0-7.245-6.946a8 8 0 0 1-.058-.97v-.528zm7.18 7.975a6.01 6.01 0 0 0-4.565-4.378a7.97 7.97 0 0 0 4.566 4.378m5.534 0a7.97 7.97 0 0 0 4.565-4.378a6.01 6.01 0 0 0-4.565 4.378" clip-rule="evenodd"></svg:path><svg:path d="M17 8.033a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1M3 7.034a1 1 0 1 0 0 1.998h3a1 1 0 1 0 0-1.998z"></svg:path></svg:g>`,
})
export class HealthiconsNappyDiaperOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsNauseaIcon],svg[healthicons-nausea-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M25.172 8.172a4 4 0 0 1 3.075-1.164A4.502 4.502 0 0 0 19.5 8.5a4.5 4.5 0 0 0 5.018 4.47a4 4 0 0 1 .654-4.798"></svg:path><svg:path d="M13.85 17c1.244-1.26 3.015-2 5.138-2h10.184l-2.586-2.586a2 2 0 1 1 2.828-2.828l6 6A2 2 0 0 1 34 19h-4v23a2 2 0 0 1-3.993.166L25.16 32h-2.32l-.847 10.166A2 2 0 0 1 18 42V30h3a4 4 0 0 0 0-8h-3v-2.891c-.6.144-1.02.413-1.306.703A2.46 2.46 0 0 0 16 21.52a2.34 2.34 0 0 0 .65 1.673c.407.414 1.121.808 2.338.808h2.003a2 2 0 1 1 0 4H18.99c-2.152 0-3.942-.731-5.193-2.005c-1.23-1.253-1.811-2.903-1.796-4.514A6.46 6.46 0 0 1 13.85 17"></svg:path></svg:g>`,
})
export class HealthiconsNauseaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsNauseaNegativeIcon],svg[healthicons-nausea-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsNauseaNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm24 15h-5.012c-2.123 0-3.894.74-5.139 2A6.46 6.46 0 0 0 12 21.48c-.015 1.612.565 3.262 1.796 4.515C15.046 27.27 16.836 28 18.988 28h2.003a2 2 0 1 0 0-4h-2.003c-1.217 0-1.931-.394-2.338-.808A2.34 2.34 0 0 1 16 21.52a2.46 2.46 0 0 1 .694-1.707c.287-.29.706-.56 1.306-.703V22h3a4 4 0 0 1 0 8h-3v12a2 2 0 0 0 3.993.166L22.84 32h2.32l.847 10.166A2 2 0 0 0 30 42V19h4a2 2 0 0 0 1.414-3.414l-6-6a2 2 0 1 0-2.828 2.828L29.172 15zm1.172-6.828a4 4 0 0 1 3.075-1.164A4.502 4.502 0 0 0 19.5 8.5a4.5 4.5 0 0 0 5.018 4.47a4 4 0 0 1 .654-4.798" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsNauseaNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsNauseaNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsNauseaOutlineIcon],svg[healthicons-nausea-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M25 14c.924 0 1.79-.25 2.532-.688L28.587 15H19a1 1 0 0 0-.138.01c-2.321.1-4.288 1.007-5.692 2.492c-1.452 1.536-2.152 3.534-2.17 5.47c-.018 1.938.648 3.96 2.112 5.519c1.238 1.318 2.917 2.168 4.888 2.426V41a3 3 0 0 0 5.985.298l.73-7.298h.57l.73 7.298A3 3 0 0 0 32 41V21h2a3 3 0 0 0 2.544-4.59l-5-8a3 3 0 0 0-1.933-1.347A5.001 5.001 0 0 0 20 9a5 5 0 0 0 5 5m0-2a3 3 0 0 0 1.472-.385l-.016-.025a3 3 0 0 1 1.073-4.205A3 3 0 1 0 25 12m4.848-2.53a1 1 0 0 0-1.696 1.06l3.087 4.94a1 1 0 0 1-.848 1.53H19.1l-.066.004c-1.873.062-3.369.771-4.41 1.872c-1.073 1.136-1.61 2.635-1.623 4.115s.495 2.987 1.57 4.131c1.04 1.108 2.552 1.814 4.462 1.874a1 1 0 0 1 .222.032q.441.004.841.012l.076.002c.316.006.605.011.878.012c.6.001 1.035-.024 1.355-.097c.306-.07.405-.159.448-.214c.048-.062.148-.24.148-.716c0-.426-.106-.588-.17-.658c-.078-.086-.24-.193-.6-.269s-.82-.101-1.392-.1c-.272 0-.553.007-.852.013h-.032c-.306.007-.63.014-.954.014a1 1 0 0 1-.34-.06c-1.205-.125-2.06-.605-2.632-1.214c-.685-.73-1.037-1.722-1.028-2.744c.01-1.022.38-2.022 1.078-2.76c.623-.66 1.557-1.161 2.863-1.239a1 1 0 0 1 1.058 1v5.003c.277-.006.559-.012.834-.012c.6-.001 1.234.021 1.81.143c.579.123 1.197.365 1.666.88c.484.532.69 1.223.69 2.004c0 .73-.15 1.407-.57 1.946c-.426.546-1.015.806-1.584.935c-.555.125-1.183.147-1.8.146c-.292 0-.599-.006-.91-.013L20 31.04V41a1 1 0 0 0 1.995.1l.82-8.2a1 1 0 0 1 .995-.9h2.38a1 1 0 0 1 .995.9l.82 8.2A1 1 0 0 0 30 41V20a1 1 0 0 1 1-1h3a1 1 0 0 0 .848-1.53zM18 21.272c-.203.105-.354.23-.469.351c-.32.34-.526.843-.53 1.405c-.006.56.188 1.04.485 1.356c.116.123.279.257.514.368z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsNauseaOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsNauseousIcon],svg[healthicons-nauseous-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M21.5 32a1 1 0 0 0-.63.224c-.204-.658-.62-1.264-1.09-1.85a1 1 0 0 0-1.56 1.251c.626.782.774 1.17.78 1.42c.005.212-.09.566-.74 1.282a1 1 0 1 0 1.48 1.346c.537-.592.97-1.2 1.158-1.875A1 1 0 0 0 21.5 34h5a1 1 0 0 0 .602-.202c.189.674.62 1.283 1.158 1.875a1 1 0 1 0 1.48-1.346c-.65-.715-.745-1.07-.74-1.281c.006-.25.154-.639.78-1.42a1 1 0 0 0-1.56-1.251c-.47.585-.886 1.19-1.09 1.849A1 1 0 0 0 26.5 32zm-7.757-8.65c-.12.738.381 1.445 1.064 1.883c.714.457 1.732.707 2.93.53a3.8 3.8 0 0 0 2.654-1.665c.504-.764.711-1.693.48-2.382a.5.5 0 0 0-.818-.203c-1.796 1.704-3.824 2.123-5.642 1.448a.5.5 0 0 0-.668.39m20.076-.001c.119.738-.382 1.445-1.065 1.883c-.714.457-1.731.707-2.93.53a3.8 3.8 0 0 1-2.653-1.665c-.504-.764-.712-1.693-.48-2.382a.5.5 0 0 1 .818-.203c1.796 1.704 3.824 2.123 5.642 1.448a.5.5 0 0 1 .668.39"></svg:path><svg:path fill-rule="evenodd" d="M42 24c0 9.941-8.059 18-18 18S6 33.941 6 24S14.059 6 24 6s18 8.059 18 18m-2 0c0 8.837-7.163 16-16 16S8 32.837 8 24S15.163 8 24 8s16 7.163 16 16" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsNauseousIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsNauseous24pxIcon],svg[healthicons-nauseous-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M9.264 9.54c-.03.153-.13.443-.318.712c-.184.262-.42.46-.72.54c-.298.08-.602.027-.893-.108a2 2 0 0 1-.631-.458l-1.131.985c.229.263.625.599 1.13.833c.51.238 1.182.393 1.914.197c.731-.195 1.236-.666 1.56-1.128c.319-.455.494-.944.561-1.286zm4 .287c.067.342.242.831.562 1.286c.323.462.827.933 1.559 1.129s1.404.04 1.915-.198c.504-.234.9-.57 1.13-.833l-1.132-.985c-.103.118-.334.32-.631.458c-.29.136-.595.189-.894.109c-.298-.08-.535-.278-.72-.541a2 2 0 0 1-.317-.713zm-4.036 4.416a.75.75 0 1 0-.956 1.156l.386.32c.12.1.12.284 0 .385l-.386.318a.75.75 0 0 0 .956 1.156l.385-.319a1.74 1.74 0 0 0 .476-.616h3.822c.106.23.264.442.476.616l.385.32a.75.75 0 1 0 .956-1.157l-.386-.319a.25.25 0 0 1 0-.385l.386-.319a.75.75 0 1 0-.956-1.156l-.385.319a1.75 1.75 0 0 0-.459.58h-3.856a1.7 1.7 0 0 0-.459-.58z"></svg:path><svg:path fill-rule="evenodd" d="M17 3.34C12.217.579 6.101 2.217 3.34 7S2.217 17.9 7 20.66S17.9 21.784 20.66 17S21.783 6.101 17 3.34M5.072 8a8 8 0 1 1 13.856 8A8 8 0 0 1 5.072 8" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsNauseous24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsNauseousNegativeIcon],svg[healthicons-nauseous-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" fill-rule="evenodd" clip-path="url(#healthiconsNauseousNegative0)" clip-rule="evenodd"><svg:path d="M24 40c8.837 0 16-7.163 16-16S32.837 8 24 8S8 15.163 8 24s7.163 16 16 16m-2.5-8a1 1 0 0 0-.63.224c-.204-.658-.62-1.264-1.09-1.85a1 1 0 0 0-1.56 1.251c.626.782.774 1.17.78 1.42c.005.212-.09.566-.74 1.282a1 1 0 1 0 1.48 1.346c.537-.592.97-1.2 1.158-1.875A1 1 0 0 0 21.5 34h5a1 1 0 0 0 .602-.202c.189.674.62 1.283 1.158 1.875a1 1 0 1 0 1.48-1.346c-.65-.715-.745-1.07-.74-1.281c.006-.25.154-.639.78-1.42a1 1 0 0 0-1.56-1.251c-.47.585-.886 1.19-1.09 1.849A1 1 0 0 0 26.5 32zm-6.693-6.767c-.683-.438-1.183-1.145-1.064-1.883a.5.5 0 0 1 .668-.389c1.818.675 3.846.257 5.642-1.448a.5.5 0 0 1 .818.203c.231.689.024 1.618-.48 2.382a3.8 3.8 0 0 1-2.654 1.665c-1.198.177-2.216-.073-2.93-.53m17.947 0c.683-.438 1.184-1.145 1.065-1.883a.5.5 0 0 0-.668-.389c-1.818.675-3.846.257-5.642-1.448a.5.5 0 0 0-.818.203c-.232.689-.024 1.618.48 2.382a3.8 3.8 0 0 0 2.653 1.665c1.199.177 2.216-.073 2.93-.53"></svg:path><svg:path d="M0 0h48v48H0zm24 42c9.941 0 18-8.059 18-18S33.941 6 24 6S6 14.059 6 24s8.059 18 18 18"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsNauseousNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsNauseousNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsNauseousOutlineIcon],svg[healthicons-nauseous-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M21.5 32a1 1 0 0 0-.63.224c-.204-.658-.62-1.264-1.09-1.85a1 1 0 0 0-1.56 1.251c.626.782.774 1.17.78 1.42c.005.212-.09.566-.74 1.282a1 1 0 1 0 1.48 1.346c.537-.592.97-1.2 1.158-1.875A1 1 0 0 0 21.5 34h5a1 1 0 0 0 .602-.202c.189.674.62 1.283 1.158 1.875a1 1 0 1 0 1.48-1.346c-.65-.715-.745-1.07-.74-1.281c.006-.25.154-.639.78-1.42a1 1 0 0 0-1.56-1.251c-.47.585-.886 1.19-1.09 1.849A1 1 0 0 0 26.5 32zm-7.757-8.65c-.12.738.381 1.445 1.064 1.883c.714.457 1.732.707 2.93.53a3.8 3.8 0 0 0 2.654-1.665c.504-.764.711-1.693.48-2.382a.5.5 0 0 0-.818-.203c-1.796 1.704-3.824 2.123-5.642 1.448a.5.5 0 0 0-.668.39m20.076-.001c.119.738-.382 1.445-1.065 1.883c-.714.457-1.731.707-2.93.53a3.8 3.8 0 0 1-2.653-1.665c-.504-.764-.712-1.693-.48-2.382a.5.5 0 0 1 .818-.203c1.796 1.704 3.824 2.123 5.642 1.448a.5.5 0 0 1 .668.39"></svg:path><svg:path fill-rule="evenodd" d="M42 24c0 9.941-8.059 18-18 18S6 33.941 6 24S14.059 6 24 6s18 8.059 18 18m-2 0c0 8.837-7.163 16-16 16S8 32.837 8 24S15.163 8 24 8s16 7.163 16 16" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsNauseousOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsNauseousOutline24pxIcon],svg[healthicons-nauseous-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M9.264 9.539c-.03.154-.13.444-.318.713c-.184.262-.42.46-.72.54c-.298.08-.602.027-.893-.108a2 2 0 0 1-.631-.459l-1.131.986c.229.262.625.598 1.13.833c.51.237 1.182.393 1.914.197s1.236-.667 1.56-1.128c.319-.455.494-.944.561-1.286zm4 .288c.067.342.242.83.562 1.286c.323.461.827.932 1.559 1.128s1.404.04 1.915-.197c.504-.235.9-.57 1.13-.833l-1.132-.986c-.103.119-.334.32-.631.459c-.29.135-.595.188-.894.108c-.298-.08-.535-.278-.72-.54a2 2 0 0 1-.317-.713zm-4.036 4.416a.75.75 0 1 0-.956 1.156l.386.32c.12.1.12.284 0 .385l-.386.318a.75.75 0 0 0 .956 1.156l.385-.319a1.74 1.74 0 0 0 .476-.616h3.822c.106.23.264.442.476.616l.385.32a.75.75 0 1 0 .956-1.157l-.386-.319a.25.25 0 0 1 0-.385l.386-.319a.75.75 0 1 0-.956-1.156l-.385.319a1.75 1.75 0 0 0-.459.58h-3.856a1.7 1.7 0 0 0-.459-.58z"></svg:path><svg:path fill-rule="evenodd" d="M17 3.34C12.217.579 6.101 2.217 3.34 7S2.217 17.9 7 20.66S17.9 21.784 20.66 17S21.783 6.101 17 3.34M5.072 8a8 8 0 1 1 13.856 8A8 8 0 0 1 5.072 8" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsNauseousOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsNegativeIcon],svg[healthicons-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20M14 23a1 1 0 1 0 0 2h20a1 1 0 1 0 0-2z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsNegative24pxIcon],svg[healthicons-negative-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m5-9.25a.75.75 0 0 0 0-1.5H7a.75.75 0 0 0 0 1.5z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsNegative24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsNegativeNegativeIcon],svg[healthicons-negative-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm44 24c0 11.046-8.954 20-20 20S4 35.046 4 24S12.954 4 24 4s20 8.954 20 20m-30-1a1 1 0 1 0 0 2h20a1 1 0 1 0 0-2z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsNegativeNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsNegativeOutlineIcon],svg[healthicons-negative-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M24 42c9.941 0 18-8.059 18-18S33.941 6 24 6S6 14.059 6 24s8.059 18 18 18m0 2c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20"></svg:path><svg:path d="M13 24a1 1 0 0 1 1-1h20a1 1 0 1 1 0 2H14a1 1 0 0 1-1-1"></svg:path></svg:g>`,
})
export class HealthiconsNegativeOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsNegativeOutline24pxIcon],svg[healthicons-negative-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M16 13a1 1 0 1 0 0-2H8a1 1 0 1 0 0 2z"></svg:path><svg:path fill-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2M4 12a8 8 0 1 1 16 0a8 8 0 0 1-16 0" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsNegativeOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsNephrologyIcon],svg[healthicons-nephrology-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6 9a3 3 0 0 1 3-3h30a3 3 0 0 1 3 3v30a3 3 0 0 1-3 3H26.848V27.363c0-.855.31-1.155.482-1.278a1 1 0 0 1 .402-.169l.01-.001h-.013l-.005.001h-.003l-.07-.997l-.07-.998h-.004l-.006.001l-.014.001a1 1 0 0 0-.142.019a3 3 0 0 0-1.245.515c-.73.518-1.322 1.44-1.322 2.906V42h-1.836V27.363c0-1.465-.593-2.388-1.321-2.907a3 3 0 0 0-1.35-.529l-.037-.004h-.015l-.006-.001h-.003s-.002 0-.07.997l-.07.997h-.015l-.006-.001l.01.001a1 1 0 0 1 .402.17c.172.122.481.422.481 1.277V42H9a3 3 0 0 1-3-3zm26.964 22.248c8.623-3.637 5.22-15.913-.766-17.942c-2.483-.841-5.223 1.95-5.205 3.684c.007.749.394 1.48.797 2.241c.529 1 1.086 2.052.85 3.268c-.417 2.143-.884 5.76.318 7.476c1.203 1.716 2.412 1.945 4.006 1.273m-18.068 0c-8.623-3.637-5.22-15.913.766-17.942c2.483-.841 5.223 1.95 5.206 3.684c-.008.749-.395 1.48-.797 2.241c-.53 1-1.086 2.052-.85 3.268c.417 2.143.883 5.76-.319 7.476s-2.411 1.945-4.006 1.273" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsNephrologyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsNephrologyNegativeIcon],svg[healthicons-nephrology-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsNephrologyNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM9 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h12.012V27.363c0-.855-.309-1.155-.481-1.278a1 1 0 0 0-.403-.169l-.01-.001h.014l.004.001h.004l.07-.997c.068-.998.07-.998.07-.998h.003l.006.001l.015.001a1 1 0 0 1 .141.019a3 3 0 0 1 1.245.515c.73.518 1.322 1.44 1.322 2.906V42h1.836V27.363c0-1.465.593-2.388 1.322-2.907a3 3 0 0 1 1.35-.529l.037-.004h.014l.006-.001h.004s.002 0 .07.997c.069.998.07.997.07.997h.014l.007-.001l-.01.001a1 1 0 0 0-.402.17c-.173.122-.482.422-.482 1.277V42H39a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3zm23.198 7.306c5.986 2.029 9.39 14.305.766 17.942c-1.594.672-2.803.443-4.006-1.273c-1.202-1.717-.735-5.333-.319-7.476c.237-1.216-.32-2.269-.85-3.268c-.402-.761-.789-1.492-.796-2.241c-.018-1.734 2.722-4.525 5.205-3.684m-16.536 0c-5.986 2.029-9.389 14.305-.766 17.942c1.595.672 2.804.443 4.006-1.273c1.202-1.717.736-5.333.32-7.476c-.237-1.216.32-2.269.848-3.268c.403-.761.79-1.492.798-2.241c.017-1.734-2.723-4.525-5.206-3.684" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsNephrologyNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsNephrologyNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsNephrologyOutlineIcon],svg[healthicons-nephrology-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M15.546 31.316c-7.901-3.778-5.026-15.951.379-17.866c2.241-.795 4.781 2.036 4.796 3.762c.006.747-.332 1.468-.685 2.22c-.463.987-.95 2.025-.714 3.242c.417 2.143.905 5.755-.157 7.444s-2.158 1.896-3.619 1.198m17.104 0c7.901-3.778 5.026-15.951-.379-17.866c-2.242-.795-4.781 2.036-4.796 3.762c-.006.747.332 1.468.685 2.22c.463.987.95 2.025.714 3.242c-.417 2.143-.905 5.755.157 7.444s2.158 1.896 3.619 1.198"></svg:path><svg:path fill-rule="evenodd" d="M6 39a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3zM40 9a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v30a1 1 0 0 0 1 1h12.012V27.363c0-.924-.288-1.197-.378-1.269a.5.5 0 0 0-.171-.09l-.035-.007h.01l.013.002h.019s.002 0 .03-.999c.028-1 .03-1 .03-1h.011l.016.002a1 1 0 0 1 .145.014a2.5 2.5 0 0 1 1.177.513c.665.529 1.133 1.437 1.133 2.834V40h2.172V27.363c0-1.397.468-2.305 1.133-2.834a2.5 2.5 0 0 1 1.177-.513a2 2 0 0 1 .144-.014l.016-.001h.012l.03.999c.028 1 .03 1 .03 1h.009l.01-.001l.013-.001l.01-.001s-.015.002-.035.008a.5.5 0 0 0-.17.089c-.092.072-.38.345-.38 1.268V40H39a1 1 0 0 0 1-1z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsNephrologyOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsNerveIcon],svg[healthicons-nerve-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M25.438 8.123a1 1 0 0 1-.502 1.323a5 5 0 0 0-2.948 4.544v.035a5 5 0 0 0 9.97.521a1 1 0 1 1 1.99.213a6.97 6.97 0 0 1-1.71 3.878a7 7 0 0 1 3.784 2.286a1 1 0 0 1-1.521 1.3a5 5 0 0 0-7.955 6.034l.007.008a1 1 0 0 1 .2.49c.333.042.651.203.888.476q.342.396.622.807c.363.53.315 1.218-.071 1.691a1.41 1.41 0 0 1 1.365.954c.21.613.372 1.212.51 1.756a1.41 1.41 0 0 1-.442 1.416c.473.068.9.373 1.101.844c.185.433.362.644.526.76c.264.186.444.446.533.732c.223-.294.561-.5.957-.548q.32-.038.719-.124c.406-.089.809.007 1.122.231a1 1 0 0 1 .437-.35l.274-.115a2.06 2.06 0 0 0 1.073-1.21c.199-.6.182-1.47-.392-2.583a1 1 0 1 1 1.777-.917c.408.79.641 1.566.71 2.302a11.2 11.2 0 0 0 1.777-2.992a1 1 0 1 1 1.853.755c-.626 1.535-1.404 2.71-2.153 3.587c.487.057 1 .177 1.554.37a1 1 0 0 1-.655 1.89c-.995-.346-1.702-.36-2.391-.216c-.642.133-1.273.396-2.154.765l-.187.078a4 4 0 0 1-.353.146a1 1 0 0 1-.633.023a1.41 1.41 0 0 1-1.058.995q-.513.112-.984.169a1.41 1.41 0 0 1-1.516-.981a1.41 1.41 0 0 1-1.94.3c-.747-.528-1.193-1.255-1.493-1.957a1.41 1.41 0 0 1 .372-1.622a1.41 1.41 0 0 1-1.17-1.048a20 20 0 0 0-.445-1.54a1.41 1.41 0 0 1 .242-1.351a1.41 1.41 0 0 1-1.195-.615a6 6 0 0 0-.427-.553a1.41 1.41 0 0 1-.278-1.354a1 1 0 0 1-.29-.277l-.01-.017a4.99 4.99 0 0 0-3.94-1.92c-1.6 0-3.024.75-3.94 1.92a7 7 0 0 1-.211.29a5 5 0 0 0-.85 2.79c0 .953.266 1.84.727 2.597a1 1 0 0 1-1.708 1.04a6.97 6.97 0 0 1-.993-4.236a7.03 7.03 0 0 1-4.154.41a1 1 0 0 1 .403-1.959q.492.102 1.016.103c1.6 0 3.024-.75 3.94-1.92q.102-.149.211-.29a5 5 0 0 0-7.854-6.148a1 1 0 0 1-1.481-1.345a7 7 0 0 1 3.644-2.126a7 7 0 0 1-1.695-3.744a1 1 0 0 1 1.984-.251a5.001 5.001 0 0 0 9.96-.618v-.035a5 5 0 0 0-2.864-4.505a1 1 0 1 1 .856-1.808a7.03 7.03 0 0 1 3.009 2.723a7.03 7.03 0 0 1 3.127-2.778a1 1 0 0 1 1.323.501m-4.45 15.887a1.5 1.5 0 1 0 0-2.999a1.5 1.5 0 0 0 0 3" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsNerveIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsNerveNegativeIcon],svg[healthicons-nerve-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsNerveNegative0)"><svg:path d="M22.487 22.51a1.5 1.5 0 1 1-2.999 0a1.5 1.5 0 0 1 2.999 0"></svg:path><svg:path fill-rule="evenodd" d="M48 0H0v48h48zM24.937 9.446a1 1 0 0 0-.822-1.824a7.03 7.03 0 0 0-3.127 2.778a7.03 7.03 0 0 0-3.01-2.723a1 1 0 1 0-.855 1.808a5 5 0 0 1 2.864 4.505v.035a5 5 0 0 1-9.96.618a1 1 0 0 0-1.984.25a7 7 0 0 0 1.695 3.744a7 7 0 0 0-3.644 2.127a1 1 0 1 0 1.48 1.344a5 5 0 0 1 7.854 6.148a7 7 0 0 0-.21.291a4.99 4.99 0 0 1-4.956 1.817a1 1 0 1 0-.403 1.959a7.03 7.03 0 0 0 4.154-.41a6.97 6.97 0 0 0 .993 4.237a1 1 0 0 0 1.708-1.041a4.97 4.97 0 0 1-.727-2.597c0-1.033.313-1.993.85-2.79q.109-.143.212-.29a4.99 4.99 0 0 1 3.938-1.92c1.6 0 3.023.75 3.94 1.92l.012.017q.121.173.29.277a1.41 1.41 0 0 0 .277 1.354q.233.27.427.553c.28.408.735.624 1.195.615a1.41 1.41 0 0 0-.242 1.352c.172.503.311 1.014.445 1.538c.146.571.621.971 1.17 1.05a1.41 1.41 0 0 0-.372 1.62c.3.703.746 1.43 1.493 1.958c.624.44 1.482.304 1.94-.3c.198.638.83 1.063 1.516.98q.471-.056.984-.168c.527-.115.92-.51 1.058-.995a1 1 0 0 0 .633-.023l.06-.021q.15-.057.293-.125l.187-.078c.88-.369 1.512-.632 2.154-.765c.689-.143 1.396-.13 2.39.215a1 1 0 1 0 .656-1.89a7.4 7.4 0 0 0-1.554-.37c.75-.877 1.527-2.05 2.153-3.586a1 1 0 0 0-1.853-.755c-.525 1.29-1.168 2.268-1.778 2.992c-.068-.736-.301-1.512-.709-2.302a1 1 0 0 0-1.777.917c.574 1.113.591 1.982.392 2.584a2.06 2.06 0 0 1-1.073 1.21l-.274.113a1 1 0 0 0-.437.351a1.4 1.4 0 0 0-1.122-.231a8 8 0 0 1-.72.124a1.4 1.4 0 0 0-.956.548a1.4 1.4 0 0 0-.533-.732c-.164-.116-.34-.327-.526-.76a1.41 1.41 0 0 0-1.1-.844c.39-.34.578-.881.441-1.416c-.139-.544-.3-1.143-.51-1.756a1.41 1.41 0 0 0-1.365-.954a1.41 1.41 0 0 0 .071-1.691a9 9 0 0 0-.622-.807a1.4 1.4 0 0 0-.888-.476a1 1 0 0 0-.2-.49l-.007-.009a5 5 0 0 1 7.955-6.034a1 1 0 1 0 1.52-1.299a7 7 0 0 0-3.784-2.285a6.97 6.97 0 0 0 1.71-3.879a1 1 0 1 0-1.988-.213a5 5 0 0 1-9.971-.521v-.035a5 5 0 0 1 2.948-4.544" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsNerveNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsNerveNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsNerveOutlineIcon],svg[healthicons-nerve-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M25.45 8.123a1 1 0 0 1-.5 1.323A5 5 0 0 0 22 13.99v.035a5 5 0 0 0 9.971.521a1 1 0 1 1 1.989.213a6.97 6.97 0 0 1-1.71 3.878a7 7 0 0 1 3.784 2.286a1 1 0 1 1-1.52 1.3a5 5 0 0 0-8.247 5.542a2.41 2.41 0 0 1 2.143.811q.38.441.69.897a2.4 2.4 0 0 1 .409 1.62c.455.283.82.718 1.007 1.265c.223.652.392 1.283.533 1.833a2.4 2.4 0 0 1-.015 1.252c.262.23.478.52.624.863c.102.237.172.322.19.34q.101.073.193.153q.281-.11.594-.15q.267-.03.626-.108a2.41 2.41 0 0 1 2.218.65c.429-.258.744-.642.9-1.115c.2-.602.182-1.471-.392-2.584a1 1 0 0 1 1.778-.917c.407.79.64 1.566.709 2.302c.61-.724 1.252-1.702 1.778-2.992a1 1 0 1 1 1.852.755c-.626 1.535-1.403 2.71-2.152 3.587c.487.057 1 .177 1.554.37a1 1 0 0 1-.656 1.89c-.994-.346-1.702-.36-2.39-.216c-.642.133-1.274.396-2.155.765l-.126.053a2.41 2.41 0 0 1-1.892 2.166q-.554.121-1.077.185a2.4 2.4 0 0 1-1.879-.582a2.41 2.41 0 0 1-2.273-.276c-.954-.673-1.495-1.584-1.836-2.38a2.4 2.4 0 0 1-.104-1.602a2.4 2.4 0 0 1-.743-1.214a19 19 0 0 0-.422-1.462a2.4 2.4 0 0 1-.118-1.04a2.4 2.4 0 0 1-.715-.686a5 5 0 0 0-.357-.463a2.41 2.41 0 0 1-.262-2.793A4.98 4.98 0 0 0 21 27.512c-1.6 0-3.024.75-3.939 1.92a7 7 0 0 1-.212.29a5 5 0 0 0-.849 2.79c0 .953.266 1.84.727 2.597a1 1 0 0 1-1.708 1.04a6.97 6.97 0 0 1-.994-4.236a7.03 7.03 0 0 1-4.154.41a1 1 0 0 1 .404-1.959q.492.102 1.016.103c1.6 0 3.024-.75 3.939-1.92q.102-.149.212-.29a5 5 0 0 0-7.854-6.148a1 1 0 0 1-1.481-1.345a7 7 0 0 1 3.643-2.126a7 7 0 0 1-1.694-3.744a1 1 0 0 1 1.984-.251a5.001 5.001 0 0 0 9.96-.618v-.035a5 5 0 0 0-2.864-4.505a1 1 0 1 1 .855-1.808A7.03 7.03 0 0 1 21 10.4a7.03 7.03 0 0 1 3.128-2.778a1 1 0 0 1 1.322.501m-7.184 17.943A7 7 0 0 1 21 25.512c.97 0 1.894.197 2.734.554a6.97 6.97 0 0 1 1.724-5.229A7 7 0 0 1 21 17.615a7 7 0 0 1-4.459 3.222a6.97 6.97 0 0 1 1.725 5.229M21 22.012a.5.5 0 1 0 0 .998a.5.5 0 0 0 0-.998m-2.5.499a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0m9.416 10.369l.12-.147l.19-.004a.41.41 0 0 1 .398.279c.197.574.35 1.142.487 1.678a.41.41 0 0 1-.13.415l-.14.123l-.187-.027a.41.41 0 0 1-.341-.306a21 21 0 0 0-.469-1.616a.41.41 0 0 1 .072-.395m1.58 3.965l-.184-.026l-.143.123a.41.41 0 0 0-.108.474c.26.607.61 1.15 1.15 1.533a.41.41 0 0 0 .567-.087l.128-.17l-.063-.203a.4.4 0 0 0-.155-.214c-.37-.261-.643-.654-.869-1.183a.41.41 0 0 0-.322-.247m3.098 1.95l-.128.17l.063.204a.414.414 0 0 0 .443.285a10 10 0 0 0 .89-.153a.412.412 0 0 0-.176-.805q-.439.095-.812.14a.4.4 0 0 0-.28.16m-5.474-7.547l.19-.004l.12-.148a.41.41 0 0 0 .02-.493a8 8 0 0 0-.552-.717a.412.412 0 1 0-.623.54q.27.314.495.642a.41.41 0 0 0 .35.18m4.732 5.402l-.003-.002z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsNerveOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsNervousIcon],svg[healthicons-nervous-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M24 40c8.837 0 16-7.163 16-16S32.837 8 24 8S8 15.163 8 24s7.163 16 16 16m0 2c9.941 0 18-8.059 18-18S33.941 6 24 6S6 14.059 6 24s8.059 18 18 18"></svg:path><svg:path d="M14 31.5a4.5 4.5 0 0 1 4.5-4.5h11a4.5 4.5 0 1 1 0 9h-11a4.5 4.5 0 0 1-4.5-4.5m3 1.5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H18a1 1 0 0 1-1-1m1-4a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2zm-.5-4c1.38 0 2.5-1.79 2.5-4s-1.12-4-2.5-4s-2.5 1.79-2.5 4s1.12 4 2.5 4m13 0c1.38 0 2.5-1.79 2.5-4s-1.12-4-2.5-4s-2.5 1.79-2.5 4s1.12 4 2.5 4"></svg:path></svg:g>`,
})
export class HealthiconsNervousIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsNervous24pxIcon],svg[healthicons-nervous-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M7.427 15.246a2.5 2.5 0 0 1 2.498-2.498h4.135a2.498 2.498 0 0 1 0 4.995H9.926a2.5 2.5 0 0 1-2.498-2.497M9 14.285a.5.5 0 0 1 .5-.5h5a.5.5 0 1 1 0 1h-5a.5.5 0 0 1-.5-.5m.5 1.422a.5.5 0 0 0 0 1h5a.5.5 0 1 0 0-1z" clip-rule="evenodd"></svg:path><svg:path d="M10.25 9.75a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m6.5 0a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0"></svg:path><svg:path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12m10-8a8 8 0 1 0 0 16a8 8 0 0 0 0-16" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsNervous24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsNervousNegativeIcon],svg[healthicons-nervous-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsNervousNegative0)"><svg:path d="M17 33a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H18a1 1 0 0 1-1-1m1-4a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2z"></svg:path><svg:path fill-rule="evenodd" d="M24 40c8.837 0 16-7.163 16-16S32.837 8 24 8S8 15.163 8 24s7.163 16 16 16m-10-8.5a4.5 4.5 0 0 1 4.5-4.5h11a4.5 4.5 0 1 1 0 9h-11a4.5 4.5 0 0 1-4.5-4.5M20 21c0 2.21-1.12 4-2.5 4S15 23.21 15 21s1.12-4 2.5-4s2.5 1.79 2.5 4m13 0c0 2.21-1.12 4-2.5 4S28 23.21 28 21s1.12-4 2.5-4s2.5 1.79 2.5 4" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M48 0H0v48h48zM24 42c9.941 0 18-8.059 18-18S33.941 6 24 6S6 14.059 6 24s8.059 18 18 18" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsNervousNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsNervousNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsNervousOutlineIcon],svg[healthicons-nervous-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M24 40c8.837 0 16-7.163 16-16S32.837 8 24 8S8 15.163 8 24s7.163 16 16 16m0 2c9.941 0 18-8.059 18-18S33.941 6 24 6S6 14.059 6 24s8.059 18 18 18"></svg:path><svg:path d="M14 31.5a4.5 4.5 0 0 1 4.5-4.5h11a4.5 4.5 0 1 1 0 9h-11a4.5 4.5 0 0 1-4.5-4.5m3 1.5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H18a1 1 0 0 1-1-1m1-4a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2zm12.5-9a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1m-2.5.5a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0M17.5 20a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1m-2.5.5a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0"></svg:path></svg:g>`,
})
export class HealthiconsNervousOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsNervousOutline24pxIcon],svg[healthicons-nervous-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12m10-8a8 8 0 1 0 0 16a8 8 0 0 0 0-16" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M7.427 15.246a2.5 2.5 0 0 1 2.498-2.498h4.135a2.498 2.498 0 0 1 0 4.995H9.926a2.5 2.5 0 0 1-2.498-2.497M9 14.285a.5.5 0 0 1 .5-.5h5a.5.5 0 1 1 0 1h-5a.5.5 0 0 1-.5-.5m.5 1.422a.5.5 0 0 0 0 1h5a.5.5 0 1 0 0-1z" clip-rule="evenodd"></svg:path><svg:path d="M8.75 11.25a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m6.5 0a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3"></svg:path></svg:g>`,
})
export class HealthiconsNervousOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsNetwork4gIcon],svg[healthicons-network-4g-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M35.087 9.408a12 12 0 0 0-2.602-3.893L33.9 4.1a14 14 0 0 1 0 19.8l-1.415-1.415a12 12 0 0 0 2.602-13.077" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M29.543 11.704a6 6 0 0 0-1.3-1.947l1.414-1.414a8 8 0 0 1 0 11.314l-1.414-1.414a6 6 0 0 0 1.3-6.54m-9.786-1.946a6 6 0 0 0 0 8.486l-1.414 1.414a8 8 0 0 1 0-11.314z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M15.515 5.515a12 12 0 0 0 0 16.97L14.1 23.9a14 14 0 0 1 0-19.8z" clip-rule="evenodd"></svg:path><svg:path d="M26 14a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path><svg:path fill-rule="evenodd" d="M10 29a3 3 0 0 1 3-3h22a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H13a3 3 0 0 1-3-3zm10.282.04A1 1 0 0 1 21 30v6a1 1 0 1 1 0 2v1a1 1 0 0 1-2 0v-1h-3.5a1 1 0 0 1-.841-1.54l4.5-7a1 1 0 0 1 1.123-.42M19 36v-2.595L17.332 36zm13.753-4.226a1 1 0 0 0-.08-1.412a5.503 5.503 0 1 0 0 8.204a1 1 0 0 0 .334-.745v-3.357a1 1 0 0 0-1-1h-3.002a1 1 0 1 0 0 2h2.002v1.875a3.505 3.505 0 0 1-5.506-2.875a3.503 3.503 0 0 1 5.84-2.611a1 1 0 0 0 1.412-.08" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsNetwork4gIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsNetwork4gNegativeIcon],svg[healthicons-network-4g-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsNetwork4gNegative0)"><svg:path fill-rule="evenodd" d="M21 30a1 1 0 0 0-1.841-.54l-4.5 7A1 1 0 0 0 15.5 38H19v1a1 1 0 1 0 2 0v-1a1 1 0 1 0 0-2zm-3.668 6L19 33.405V36z" clip-rule="evenodd"></svg:path><svg:path d="M32.674 30.362a1 1 0 1 1-1.333 1.49a3.505 3.505 0 1 0-.334 5.487v-1.875h-2.002a1 1 0 0 1 0-2h3.002a1 1 0 0 1 1 1v3.357a1 1 0 0 1-.333.745a5.503 5.503 0 1 1 0-8.204"></svg:path><svg:path fill-rule="evenodd" d="M48 0H0v48h48zM13 26a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h22a3 3 0 0 0 3-3V29a3 3 0 0 0-3-3zM35.087 9.408a12 12 0 0 0-2.602-3.893L33.9 4.1a14 14 0 0 1 0 19.799l-1.415-1.415a12 12 0 0 0 2.602-13.077m-6.844.35a6 6 0 0 1 0 8.485l1.414 1.414a8 8 0 0 0 0-11.314zm-8.486 0a6 6 0 0 0 0 8.485l-1.414 1.414a8 8 0 0 1 0-11.314zm-6.844-.35a12 12 0 0 1 2.602-3.893L14.1 4.1a14 14 0 0 0 0 19.799l1.415-1.415a12 12 0 0 1-2.602-13.077M26 14a2 2 0 1 1-4 0a2 2 0 0 1 4 0" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsNetwork4gNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsNetwork4gNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsNetwork4gOutlineIcon],svg[healthicons-network-4g-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="healthiconsNetwork4gOutline0" d="M35 27H13a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V28a1 1 0 0 0-1-1m-22-2a3 3 0 0 0-3 3v13a3 3 0 0 0 3 3h22a3 3 0 0 0 3-3V28a3 3 0 0 0-3-3z"></svg:path><svg:path id="healthiconsNetwork4gOutline1" d="M20.282 29.04A1 1 0 0 1 21 30v6a1 1 0 1 1 0 2v1a1 1 0 0 1-2 0v-1h-3.5a1 1 0 0 1-.841-1.54l4.5-7a1 1 0 0 1 1.123-.42M19 36v-2.595L17.332 36zM35.087 9.408a12 12 0 0 0-2.602-3.893L33.9 4.1a14 14 0 0 1 0 19.8l-1.415-1.415a12 12 0 0 0 2.602-13.077"></svg:path><svg:path id="healthiconsNetwork4gOutline2" d="M29.543 11.704a6 6 0 0 0-1.3-1.947l1.414-1.414a8 8 0 0 1 0 11.314l-1.414-1.414a6 6 0 0 0 1.3-6.54m-9.786-1.946a6 6 0 0 0 0 8.486l-1.414 1.414a8 8 0 0 1 0-11.314z"></svg:path><svg:path id="healthiconsNetwork4gOutline3" d="M15.515 5.515a12 12 0 0 0 0 16.97L14.1 23.9a14 14 0 0 1 0-19.8z"></svg:path><svg:path id="healthiconsNetwork4gOutline4" d="M26 14a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path></svg:defs><svg:g fill="currentColor"><svg:use href="#healthiconsNetwork4gOutline0" fill-rule="evenodd" clip-rule="evenodd"></svg:use><svg:use href="#healthiconsNetwork4gOutline1" fill-rule="evenodd" clip-rule="evenodd"></svg:use><svg:use href="#healthiconsNetwork4gOutline2" fill-rule="evenodd" clip-rule="evenodd"></svg:use><svg:use href="#healthiconsNetwork4gOutline3" fill-rule="evenodd" clip-rule="evenodd"></svg:use><svg:use href="#healthiconsNetwork4gOutline4"></svg:use><svg:path fill-rule="evenodd" d="M32.674 30.262a1 1 0 1 1-1.333 1.49a3.504 3.504 0 1 0-.334 5.487v-1.875h-2.002a1 1 0 0 1 0-2h3.002a1 1 0 0 1 1 1v3.357a1 1 0 0 1-.333.745a5.504 5.504 0 1 1 0-8.204" clip-rule="evenodd"></svg:path><svg:use href="#healthiconsNetwork4gOutline0" fill-rule="evenodd" clip-rule="evenodd"></svg:use><svg:use href="#healthiconsNetwork4gOutline1" fill-rule="evenodd" clip-rule="evenodd"></svg:use><svg:use href="#healthiconsNetwork4gOutline2" fill-rule="evenodd" clip-rule="evenodd"></svg:use><svg:use href="#healthiconsNetwork4gOutline3" fill-rule="evenodd" clip-rule="evenodd"></svg:use><svg:use href="#healthiconsNetwork4gOutline4"></svg:use><svg:path fill-rule="evenodd" d="M32.753 31.674a1 1 0 0 1-1.412.079a3.504 3.504 0 1 0-.334 5.486v-1.875h-2.002a1 1 0 0 1 0-2h3.002a1 1 0 0 1 1 1v3.357a1 1 0 0 1-.333.745a5.504 5.504 0 1 1 0-8.204a1 1 0 0 1 .079 1.412" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsNetwork4gOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsNetwork4g2xOutlineIcon],svg[healthicons-network-4g2x-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="healthiconsNetwork4g2xOutline0" d="M35 27H13a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V28a1 1 0 0 0-1-1m-22-2a3 3 0 0 0-3 3v13a3 3 0 0 0 3 3h22a3 3 0 0 0 3-3V28a3 3 0 0 0-3-3z"></svg:path><svg:path id="healthiconsNetwork4g2xOutline1" d="M20.282 29.04A1 1 0 0 1 21 30v6a1 1 0 1 1 0 2v1a1 1 0 0 1-2 0v-1h-3.5a1 1 0 0 1-.841-1.54l4.5-7a1 1 0 0 1 1.123-.42M19 36v-2.595L17.332 36zM35.087 9.408a12 12 0 0 0-2.602-3.893L33.9 4.1a14 14 0 0 1 0 19.8l-1.415-1.415a12 12 0 0 0 2.602-13.077"></svg:path><svg:path id="healthiconsNetwork4g2xOutline2" d="M29.543 11.704a6 6 0 0 0-1.3-1.947l1.414-1.414a8 8 0 0 1 0 11.314l-1.414-1.414a6 6 0 0 0 1.3-6.54m-9.786-1.946a6 6 0 0 0 0 8.486l-1.414 1.414a8 8 0 0 1 0-11.314z"></svg:path><svg:path id="healthiconsNetwork4g2xOutline3" d="M15.515 5.515a12 12 0 0 0 0 16.97L14.1 23.9a14 14 0 0 1 0-19.8z"></svg:path><svg:path id="healthiconsNetwork4g2xOutline4" d="M26 14a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path></svg:defs><svg:g fill="currentColor"><svg:use href="#healthiconsNetwork4g2xOutline0" fill-rule="evenodd" clip-rule="evenodd"></svg:use><svg:use href="#healthiconsNetwork4g2xOutline1" fill-rule="evenodd" clip-rule="evenodd"></svg:use><svg:use href="#healthiconsNetwork4g2xOutline2" fill-rule="evenodd" clip-rule="evenodd"></svg:use><svg:use href="#healthiconsNetwork4g2xOutline3" fill-rule="evenodd" clip-rule="evenodd"></svg:use><svg:use href="#healthiconsNetwork4g2xOutline4"></svg:use><svg:path fill-rule="evenodd" d="M32.674 30.262a1 1 0 1 1-1.333 1.49a3.504 3.504 0 1 0-.334 5.487v-1.875h-2.002a1 1 0 0 1 0-2h3.002a1 1 0 0 1 1 1v3.357a1 1 0 0 1-.333.745a5.504 5.504 0 1 1 0-8.204" clip-rule="evenodd"></svg:path><svg:use href="#healthiconsNetwork4g2xOutline0" fill-rule="evenodd" clip-rule="evenodd"></svg:use><svg:use href="#healthiconsNetwork4g2xOutline1" fill-rule="evenodd" clip-rule="evenodd"></svg:use><svg:use href="#healthiconsNetwork4g2xOutline2" fill-rule="evenodd" clip-rule="evenodd"></svg:use><svg:use href="#healthiconsNetwork4g2xOutline3" fill-rule="evenodd" clip-rule="evenodd"></svg:use><svg:use href="#healthiconsNetwork4g2xOutline4"></svg:use><svg:path fill-rule="evenodd" d="M32.753 31.674a1 1 0 0 1-1.412.079a3.504 3.504 0 1 0-.334 5.486v-1.875h-2.002a1 1 0 0 1 0-2h3.002a1 1 0 0 1 1 1v3.357a1 1 0 0 1-.333.745a5.504 5.504 0 1 1 0-8.204a1 1 0 0 1 .079 1.412" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsNetwork4g2xOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsNetwork5gIcon],svg[healthicons-network-5g-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M35.087 9.408a12 12 0 0 0-2.602-3.893L33.9 4.1a14 14 0 0 1 0 19.8l-1.415-1.415a12 12 0 0 0 2.602-13.077" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M29.543 11.704a6 6 0 0 0-1.3-1.947l1.414-1.414a8 8 0 0 1 0 11.314l-1.414-1.414a6 6 0 0 0 1.3-6.54m-9.786-1.946a6 6 0 0 0 0 8.486l-1.414 1.414a8 8 0 0 1 0-11.314z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M15.515 5.515a12 12 0 0 0 0 16.97L14.1 23.9a14 14 0 0 1 0-19.8z" clip-rule="evenodd"></svg:path><svg:path d="M26 14a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path><svg:path fill-rule="evenodd" d="M10 29a3 3 0 0 1 3-3h22a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H13a3 3 0 0 1-3-3zm12 1a1 1 0 0 0-1-1h-5.25a1 1 0 0 0-.98.804l-.75 3.75a1 1 0 0 0 1.535 1.028c.21-.14 1.143-.582 2.445-.582a2 2 0 1 1 0 4h-.832c-.577 0-1.054-.36-1.227-.84a1 1 0 1 0-1.882.68A3.3 3.3 0 0 0 17.17 40H18a4 4 0 0 0 0-8c-.61 0-1.173.072-1.666.182L16.57 31H21a1 1 0 0 0 1-1m10.753 1.774a1 1 0 0 0-.08-1.412a5.503 5.503 0 1 0 0 8.204a1 1 0 0 0 .334-.745v-3.357a1 1 0 0 0-1-1h-3.002a1 1 0 1 0 0 2h2.002v1.875a3.505 3.505 0 0 1-5.506-2.875a3.503 3.503 0 0 1 5.84-2.611a1 1 0 0 0 1.412-.08" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsNetwork5gIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsNetwork5gNegativeIcon],svg[healthicons-network-5g-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsNetwork5gNegative0)"><svg:path d="M22 30a1 1 0 0 0-1-1h-5.25a1 1 0 0 0-.98.804l-.75 3.75a1 1 0 0 0 1.535 1.028c.21-.14 1.143-.582 2.445-.582a2 2 0 1 1 0 4h-.832c-.577 0-1.054-.36-1.227-.84a1 1 0 1 0-1.882.68A3.3 3.3 0 0 0 17.17 40H18a4 4 0 0 0 0-8a7.7 7.7 0 0 0-1.666.182L16.57 31H21a1 1 0 0 0 1-1m10.753 1.774a1 1 0 0 0-.08-1.412a5.503 5.503 0 1 0 0 8.204a1 1 0 0 0 .334-.745v-3.357a1 1 0 0 0-1-1h-3.002a1 1 0 1 0 0 2h2.002v1.875a3.504 3.504 0 1 1 .334-5.486a1 1 0 0 0 1.412-.079"></svg:path><svg:path fill-rule="evenodd" d="M0 0h48v48H0zm10 29a3 3 0 0 1 3-3h22a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H13a3 3 0 0 1-3-3zM32.485 5.515a12 12 0 0 1 0 16.97L33.9 23.9a14 14 0 0 0 0-19.8zm-2.942 6.189a6 6 0 0 0-1.3-1.947l1.414-1.414a8 8 0 0 1 0 11.314l-1.414-1.414a6 6 0 0 0 1.3-6.54m-11.086 0a6 6 0 0 1 1.3-1.947l-1.414-1.414a8 8 0 0 0 0 11.314l1.414-1.414a6 6 0 0 1-1.3-6.54m-2.942-6.19a12 12 0 0 0 0 16.971L14.1 23.9a14 14 0 0 1 0-19.8zM24 16a2 2 0 1 0 0-4a2 2 0 0 0 0 4" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsNetwork5gNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsNetwork5gNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsNetwork5gOutlineIcon],svg[healthicons-network-5g-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M35.087 9.408a12 12 0 0 0-2.602-3.893L33.9 4.1a14 14 0 0 1 0 19.8l-1.415-1.415a12 12 0 0 0 2.602-13.077" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M29.543 11.704a6 6 0 0 0-1.3-1.947l1.414-1.414a8 8 0 0 1 0 11.314l-1.414-1.414a6 6 0 0 0 1.3-6.54m-9.786-1.946a6 6 0 0 0 0 8.486l-1.414 1.414a8 8 0 0 1 0-11.314z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M15.515 5.515a12 12 0 0 0 0 16.97L14.1 23.9a14 14 0 0 1 0-19.8z" clip-rule="evenodd"></svg:path><svg:path d="M26 14a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path><svg:path fill-rule="evenodd" d="M35 27H13a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V28a1 1 0 0 0-1-1m-22-2a3 3 0 0 0-3 3v13a3 3 0 0 0 3 3h22a3 3 0 0 0 3-3V28a3 3 0 0 0-3-3z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M22 30a1 1 0 0 0-1-1h-5.25a1 1 0 0 0-.98.804l-.75 3.75a1 1 0 0 0 1.535 1.028c.21-.14 1.143-.582 2.445-.582a2 2 0 1 1 0 4h-.832c-.577 0-1.054-.36-1.227-.84a1 1 0 1 0-1.882.68A3.3 3.3 0 0 0 17.17 40H18a4 4 0 0 0 0-8c-.61 0-1.173.072-1.666.182L16.57 31H21a1 1 0 0 0 1-1m10.674.362a1 1 0 1 1-1.333 1.49a3.505 3.505 0 1 0-.334 5.487v-1.875h-2.002a1 1 0 0 1 0-2h3.002a1 1 0 0 1 1 1v3.357a1 1 0 0 1-.333.745a5.503 5.503 0 1 1 0-8.204" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsNetwork5gOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsNeuroSurgeryIcon],svg[healthicons-neuro-surgery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M24 10.75c0-.912.128-1.796.367-2.637c3.924 5.769 6.546 9.07 13.526 12.529c-.92.233-1.89.358-2.893.358c-6.137 0-11-4.649-11-10.25m-2 0a11.6 11.6 0 0 1 .613-3.727c-2.57.12-5.096.711-7.435 1.745a13.2 13.2 0 0 0-5.297 3.86a10.84 10.84 0 0 0-2.027 6.025c-.012.495-.005.964.002 1.418c.023 1.601.044 3.012-.761 4.681c0 0-2.38 2.141-2.066 3.86c.313 1.718 3.413 2.19 3.413 2.19c0 6.942 6.629 6.5 9.938 5.848l.196-.04c.99-.206 1.637-.418 1.637-.418v1.304s.069.22.281.527q.084.123.202.261c.62.73 1.97 1.703 4.748 1.703c2.094.165 5.678-1.205 6.628-3.138v-5.91c2.813-2.104 5.084-4.82 5.738-8.226A14 14 0 0 1 35 23c-7.118 0-13-5.425-13-12.25M40.132 37v-7a2 2 0 0 1 2-2c1.105 0 2.019.902 1.847 1.994c-.733 4.67-3.847 7.006-3.847 7.006m1.5-10a1.5 1.5 0 0 0 1.5-1.5v-2.086l-2.812 2.813a1.5 1.5 0 0 0 1.312.773m-1.5-5.586v2.172l3-3v-2.172zm0-9.914v7.086l3-3V11.5a1.5 1.5 0 0 0-3 0" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsNeuroSurgeryIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsNeuroSurgeryNegativeIcon],svg[healthicons-neuro-surgery-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsNeuroSurgeryNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM24.367 8.113A9.6 9.6 0 0 0 24 10.75C24 16.351 28.863 21 35 21c1.003 0 1.972-.125 2.893-.358c-6.98-3.459-9.602-6.76-13.526-12.529m-1.754-1.09A11.6 11.6 0 0 0 22 10.75C22 17.575 27.882 23 35 23c.964 0 1.904-.099 2.81-.287c-.654 3.406-2.925 6.122-5.738 8.225v5.911c-.95 1.933-4.534 3.303-6.628 3.138c-2.779 0-4.128-.973-4.748-1.703a3 3 0 0 1-.202-.261a2.2 2.2 0 0 1-.281-.527v-1.304s-.647.212-1.637.418l-.196.04c-3.309.653-9.938 1.094-9.938-5.847c0 0-3.1-.473-3.413-2.192c-.314-1.718 2.066-3.859 2.066-3.859c.805-1.669.784-3.08.76-4.681c-.006-.454-.013-.923-.001-1.418a10.84 10.84 0 0 1 2.027-6.026a13.2 13.2 0 0 1 5.297-3.86a20.8 20.8 0 0 1 7.435-1.744M40.133 30v7s3.113-2.336 3.846-7.006c.172-1.092-.742-1.994-1.847-1.994a2 2 0 0 0-2 2m3-6.586l-2.813 2.813a1.5 1.5 0 0 0 2.812-.727zm0-5v2.172l-3 3v-2.172zm0-2.828l-3 3V11.5a1.5 1.5 0 0 1 3 0z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsNeuroSurgeryNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsNeuroSurgeryNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsNeuroSurgeryOutlineIcon],svg[healthicons-neuro-surgery-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m7.725 25.976l.171-.355c1.012-2.096.984-3.913.96-5.487v-.093c-.007-.458-.014-.89-.003-1.34a8.84 8.84 0 0 1 1.618-4.858a11.2 11.2 0 0 1 4.45-3.219l.033-.013l.032-.014a18.8 18.8 0 0 1 6.276-1.55A11.5 11.5 0 0 0 21 11.5C21 17.851 26.149 23 32.5 23c.768 0 1.52-.075 2.246-.22c-.635 2.557-2.423 4.726-4.871 6.556l-.803.6v6.32c-.292.326-.846.745-1.692 1.119c-1.078.475-2.159.667-2.778.618l-.079-.007h-.079c-2.25 0-3.02-.758-3.225-.998l-.006-.007v-3.55l-2.62.86h-.003l-.01.004l-.064.02q-.093.028-.282.08a17 17 0 0 1-1.242.292c-1.578.312-3.639.496-5.202-.014c-.731-.24-1.272-.603-1.644-1.114c-.37-.51-.704-1.344-.704-2.756v-1.718l-1.69-.258l-.009-.002l-.06-.01A6 6 0 0 1 6.61 28.5a2.5 2.5 0 0 1-.588-.319a1 1 0 0 1 .05-.147a4 4 0 0 1 .479-.806a8 8 0 0 1 .878-.985l.006-.006l.001-.001zM22.613 7q.46.683.896 1.322l.031.011l-.008.023c3.853 5.648 6.507 8.91 13.468 12.339c0 4.37-2.58 7.74-5.928 10.243v5.911c-.95 1.933-4.534 3.303-6.628 3.137c-2.779 0-4.128-.972-4.748-1.702a3 3 0 0 1-.202-.261a2.2 2.2 0 0 1-.281-.527v-1.304s-.647.212-1.637.418l-.363.072c-3.36.633-9.77.948-9.77-5.88c0 0-3.1-.473-3.414-2.19c-.314-1.719 2.066-3.86 2.066-3.86c.805-1.669.784-3.08.76-4.681a37 37 0 0 1-.001-1.418a10.84 10.84 0 0 1 2.027-6.026a13.2 13.2 0 0 1 5.297-3.86A20.8 20.8 0 0 1 22.613 7M23 11.5q0-.196.008-.388c1.364 1.934 2.685 3.641 4.204 5.189c1.696 1.726 3.608 3.226 6.067 4.668q-.386.03-.779.031a9.5 9.5 0 0 1-9.5-9.5M38.13 38v-9c0-.97.46-1.832 1.175-2.38a2.5 2.5 0 0 1-1.174-2.12v-14a2.5 2.5 0 1 1 5 0v14a2.5 2.5 0 0 1-.745 1.78c1.04.485 1.786 1.555 1.58 2.869a12.8 12.8 0 0 1-2.385 5.697a12 12 0 0 1-1.259 1.437a9 9 0 0 1-.534.473l-.037.029l-.013.01l-.004.003h-.002c0 .001-.001.002-.601-.798l.6.8zm2-16.414v-2.172l1-1v2.172zm0-11.086v6.086l1-1V10.5a.5.5 0 0 0-1 0m1 12.914V24.5a.5.5 0 0 1-1 0v-.086zm-1 10.026a10.84 10.84 0 0 0 1.86-4.601c.06-.378-.256-.839-.86-.839a1 1 0 0 0-1 1z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsNeuroSurgeryOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsNeurologyIcon],svg[healthicons-neurology-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M29.584 22.87a6.2 6.2 0 0 0 3.25-.905a6.24 6.24 0 0 0 3.29.885l3.72-1.221c1.047-.78 1.767-1.862 2.037-3.063a4.9 4.9 0 0 0-.552-3.538c-.627-1.087-1.65-1.947-2.895-2.435c-.285-1.163-1.001-2.204-2.031-2.949l-3.63-1.146h-.41c-.807-1.064-2.019-1.823-3.406-2.132l-7.783-.395c-1.294.097-2.514.584-3.463 1.383a6.8 6.8 0 0 0-1.37-.148a6.24 6.24 0 0 0-3.144.846c-.935.55-1.675 1.333-2.128 2.254l-2.958 1.89a4.9 4.9 0 0 0-1.13 3.109c-.007.468.062.934.204 1.384c-.775.909-1.193 2.025-1.185 3.173c-.002 1.33.561 2.611 1.574 3.579c.081.952.45 1.867 1.066 2.644a5.73 5.73 0 0 0 2.428 1.765a8.5 8.5 0 0 1 2.777 2.496a7.5 7.5 0 0 1 1.31 3.334h2.72v-7.744l-2.642-2.348l-1.788 1.788a1 1 0 0 1-1.414-1.415l2.084-2.083l-.635-3.493l-2.826-1.413a1 1 0 0 1 .895-1.789l2.767 1.384l3.461-2.203l-1.066-2.844a1 1 0 0 1 1.872-.703l1.138 3.034h1.399l.65-1.298l-.951-2.218a1 1 0 0 1 1.838-.788l.826 1.927l3.3.6l.057-.05l2.046-1.636a1 1 0 0 1 1.25 1.561l-1.472 1.178l1.729 2.223l.678-1.356a1 1 0 0 1 .894-.553h2.455a1 1 0 1 1 0 2h-1.837l-.419.839l2.064.458q.12.027.23.082l1.636.818a1 1 0 1 1-.894 1.79l-1.526-.764l-3.562-.791a1 1 0 0 1-.572-.363l-2.63-3.38l-3.263-.593a1 1 0 0 1-.208.149l-.701 1.401v.809h1.454a1 1 0 0 1 .448.105l3.273 1.637a1 1 0 1 1-.895 1.789l-3.062-1.531h-1.218v1.864a1 1 0 1 1-2 0v-3.909h-1.572l-3.688 2.346l.637 3.5l3.424 3.043a1 1 0 0 1 .335.747v8.193h2.918v-5.535a4.9 4.9 0 0 1 .876-2.78a5.66 5.66 0 0 1 2.373-1.943c.55-.19.684-.445.85-.758c.11-.208.234-.442.503-.7c.233.145.414.272.571.383c.487.343.743.524 1.62.524M23 38h-8v-2h8zm0 4h-8v-2h8z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsNeurologyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsNeurology24pxIcon],svg[healthicons-neurology-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M7 9.015C6.32 10 6.5 11.5 8 12c0 0 6 0 7-1.5s-.5-5-2-3.5s-2.5-1-3.5.5s-1.82.53-2.5 1.515"></svg:path><svg:path fill-rule="evenodd" d="M12 4c-4.118 0-7.5 2.709-7.5 6.5c0 1.824.997 3.06 2.1 3.887c.306.23.614.423.9.581V14a2.9 2.9 0 0 1 .207-1.043l-.023-.008c-1.053-.351-1.73-1.101-1.969-2.005c-.228-.866-.03-1.786.462-2.497a2.1 2.1 0 0 1 1.007-.809c.263-.099.563-.142.716-.164l.068-.01a.8.8 0 0 0 .305-.093c.072-.043.209-.146.395-.426c.379-.568.907-.945 1.59-.945c.473 0 .92.204 1.15.309l.06.027c.299.133.413.164.493.164h.002c.018 0 .118.005.33-.207a2.2 2.2 0 0 1 1.026-.606a1.83 1.83 0 0 1 1.153.094c.652.273 1.092.861 1.36 1.397c.281.563.457 1.231.487 1.886c.03.644-.08 1.38-.487 1.99c-.247.372-.601.631-.936.816c-.343.19-.732.337-1.124.455c-.785.235-1.695.384-2.532.48c-.504.059-.994.1-1.434.128q-.005.038-.013.076c-.032.158-.082.3-.118.398l-.053.14l-.048.128A1 1 0 0 0 9.5 14v6a1 1 0 1 1-2 0v-2.809l-.192-.084a10 10 0 0 1-1.908-1.12c-1.397-1.047-2.9-2.81-2.9-5.487C2.5 5.291 7.118 2 12 2c2.616 0 4.486 1.316 5.665 2.563a10.5 10.5 0 0 1 1.629 2.285a6 6 0 0 1 .108.22l.008.017l.002.005l.001.002s0 .002-.913.408l.914-.406q.024.054.042.112l2 6.5A1 1 0 0 1 20.5 15h-2v3.5a1 1 0 0 1-1 1h-3v.5a1 1 0 1 1-2 0v-1.5a1 1 0 0 1 1-1h3V14a1 1 0 0 1 1-1h1.646l-1.581-5.138l-.048-.097a8.5 8.5 0 0 0-1.306-1.828C15.264 4.934 13.884 4 12 4m-3.822 6.998h.064a29 29 0 0 0 2.768-.178c.788-.092 1.565-.224 2.187-.41q.466-.143.731-.29q.13-.072.188-.124c.04-.034.053-.052.052-.05c.092-.14.171-.404.153-.791a2.8 2.8 0 0 0-.278-1.083a1.6 1.6 0 0 0-.228-.347l-.061-.06l-.047.042c-.529.529-1.116.793-1.746.793c-.549 0-1.02-.21-1.288-.329l-.017-.007a8 8 0 0 0-.309-.132l-.015.023c-.314.47-.655.808-1.038 1.036a2.8 2.8 0 0 1-1.001.347l-.229.036a1 1 0 0 0-.174.036q-.01.003-.008.004a.3.3 0 0 0-.06.07a1.06 1.06 0 0 0-.173.85c.051.194.186.413.529.564m5.632-3.373h-.002z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsNeurology24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsNeurologyNegativeIcon],svg[healthicons-neurology-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsNeurologyNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM32.834 21.965c-.958.59-2.09.906-3.25.906c-.876 0-1.132-.181-1.619-.524c-.157-.11-.338-.238-.571-.382a2.5 2.5 0 0 0-.503.7c-.166.312-.3.567-.85.757a5.66 5.66 0 0 0-2.373 1.942a4.9 4.9 0 0 0-.876 2.78v5.535h-2.918v-8.192a1 1 0 0 0-.335-.747l-3.424-3.044l-.637-3.499l3.688-2.346h1.572v3.909a1 1 0 0 0 2 0v-1.864h1.218l3.062 1.53a1 1 0 0 0 .895-1.788L24.64 16a1 1 0 0 0-.448-.105h-1.454v-.81l.7-1.4a1 1 0 0 0 .21-.15l3.262.594l2.63 3.38a1 1 0 0 0 .572.362l3.562.792l1.526.763a1 1 0 1 0 .894-1.789l-1.636-.818a1 1 0 0 0-.23-.082l-2.064-.458l.42-.839h1.836a1 1 0 1 0 0-2h-2.455a1 1 0 0 0-.894.553l-.678 1.356l-1.73-2.223l1.472-1.178a1 1 0 0 0-1.249-1.561l-2.046 1.636l-.057.05l-3.3-.6l-.826-1.927a1 1 0 1 0-1.838.788l.95 2.217l-.65 1.299h-1.398l-1.138-3.034a1 1 0 0 0-1.872.703l1.066 2.844l-3.461 2.203l-2.767-1.384a1 1 0 0 0-.895 1.789l2.826 1.413l.635 3.492l-2.084 2.084a1 1 0 1 0 1.414 1.415l1.787-1.788l2.642 2.348v7.743h-2.718a7.5 7.5 0 0 0-1.31-3.333a8.5 8.5 0 0 0-2.777-2.496a5.73 5.73 0 0 1-2.429-1.765a4.93 4.93 0 0 1-1.066-2.644C6.56 22.473 5.998 21.192 6 19.86c-.008-1.147.41-2.264 1.185-3.172a4.3 4.3 0 0 1-.204-1.384a4.9 4.9 0 0 1 1.13-3.109l2.957-1.89c.454-.922 1.194-1.704 2.13-2.254a6.24 6.24 0 0 1 3.143-.846q.693.004 1.37.148c.95-.8 2.17-1.286 3.463-1.383l7.783.395c1.387.31 2.6 1.068 3.407 2.131h.409l3.63 1.147c1.03.745 1.746 1.786 2.03 2.949c1.246.488 2.269 1.348 2.896 2.435a4.9 4.9 0 0 1 .552 3.538c-.27 1.201-.99 2.283-2.038 3.063l-3.719 1.221a6.24 6.24 0 0 1-3.29-.885M23 38h-8v-2h8zm-8 4h8v-2h-8z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsNeurologyNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsNeurologyNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsNeurologyOutlineIcon],svg[healthicons-neurology-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M29.584 22.873c1.16 0 2.292-.315 3.25-.904a6.25 6.25 0 0 0 3.29.884l3.72-1.22c1.047-.779 1.767-1.858 2.037-3.058s.076-2.446-.552-3.532c-.627-1.085-1.65-1.944-2.895-2.431c-.285-1.162-1.001-2.2-2.031-2.944l-3.63-1.145h-.41c-.807-1.062-2.019-1.82-3.406-2.129L21.174 6c-1.294.097-2.514.583-3.463 1.38a6.8 6.8 0 0 0-1.37-.147a6.25 6.25 0 0 0-3.144.845c-.935.549-1.675 1.33-2.128 2.25L8.11 12.216c-.736.899-1.132 1.987-1.13 3.103a4.3 4.3 0 0 0 .204 1.382c-.775.907-1.193 2.022-1.185 3.168c-.002 1.329.561 2.607 1.574 3.573c.081.951.45 1.864 1.066 2.64a5.73 5.73 0 0 0 2.428 1.762a8.5 8.5 0 0 1 2.777 2.492a7.5 7.5 0 0 1 1.31 3.329h7.637v-5.526a4.87 4.87 0 0 1 .876-2.776a5.66 5.66 0 0 1 2.373-1.94c.55-.188.684-.443.85-.756c.11-.208.234-.442.503-.698c.233.143.414.27.571.381c.487.343.743.523 1.62.523m4.448-2.528a4.25 4.25 0 0 0 1.79.496l3.056-1.002c.558-.485.912-1.087 1.052-1.71a2.88 2.88 0 0 0-.332-2.09c-.385-.666-1.04-1.236-1.893-1.57l-.967-.379l-.247-1.008a3.1 3.1 0 0 0-1.032-1.62l-2.994-.945h-1.093l-.6-.79c-.476-.625-1.21-1.119-2.1-1.35l-7.462-.378a4.1 4.1 0 0 0-2.213.908l-.748.627l-.954-.203a5 5 0 0 0-.957-.103c-.77.002-1.51.206-2.129.569s-1.076.862-1.347 1.41l-.247.5l-3.125 1.996c-.342.5-.51 1.057-.509 1.607v.035q-.006.375.11.744l.338 1.06l-.723.846c-.478.558-.71 1.212-.706 1.855v.016c0 .75.315 1.513.954 2.123l.548.523l.064.753c.047.545.26 1.088.64 1.568c.384.483.926.885 1.585 1.14l.135.053l.126.071q.22.124.432.258l-.006.004c2.719 1.659 3.872 4.073 4.264 5.307h.612v-7.293l-2.203-1.959l-1.496 1.496a1 1 0 0 1-1.414-1.414l1.792-1.792l-.538-2.957l-2.436-1.218a1 1 0 1 1 .895-1.789l2.377 1.188l2.911-1.852l-.905-2.415a1 1 0 0 1 1.872-.702l.973 2.595h1.077l.514-1.029l-.815-1.902a1 1 0 1 1 1.838-.788l.702 1.638l2.788.507l.011-.01l1.803-1.44a1 1 0 0 1 1.25 1.562l-1.205.963l1.335 1.717l.513-1.025a1 1 0 0 1 .895-.553h2.162a1 1 0 1 1 0 2h-1.544l-.269.536l1.67.371q.12.027.23.082l1.441.72a1 1 0 1 1-.894 1.79l-1.332-.666l-3.123-.694a1 1 0 0 1-.572-.363l-2.289-2.942l-2.773-.504q-.06.05-.13.09l-.587 1.177v.565h1.162a1 1 0 0 1 .447.106l2.883 1.441a1 1 0 1 1-.894 1.79l-2.672-1.337h-.926v1.523a1 1 0 0 1-2 0v-3.324h-1.232l-3.151 2.005l.539 2.963l2.985 2.654a1 1 0 0 1 .336.748v7.742h1.438V28.1c0-2.702 1.509-4.36 2.333-5.145c.66-.628 1.65-1.157 2.063-1.344c.082-.183.361-.66.824-1.097l1.125-1.067c1.238.708 2.199 1.418 2.199 1.418s1.281-.07 1.863-.304c.466-.188 1.278-.709 1.625-.946z" clip-rule="evenodd"></svg:path><svg:path d="M15 38h8v-2h-8zm8 4h-8v-2h8z"></svg:path></svg:g>`,
})
export class HealthiconsNeurologyOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsNeurologyOutline24pxIcon],svg[healthicons-neurology-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 4c-4.118 0-7.5 2.709-7.5 6.5c0 1.824.997 3.06 2.1 3.887c.306.23.614.423.9.581V14a2.9 2.9 0 0 1 .207-1.044l-.023-.007c-1.053-.351-1.73-1.101-1.969-2.005c-.228-.866-.03-1.786.462-2.497a2.1 2.1 0 0 1 1.007-.809c.263-.099.563-.142.716-.164l.068-.01a.8.8 0 0 0 .305-.093c.072-.043.209-.146.395-.426c.379-.568.907-.945 1.59-.945c.473 0 .92.204 1.15.309l.06.027c.299.133.413.164.493.164h.002c.018 0 .118.005.33-.207a2.2 2.2 0 0 1 1.026-.606a1.83 1.83 0 0 1 1.153.094c.653.273 1.092.861 1.36 1.397c.281.563.457 1.231.487 1.886c.03.644-.08 1.38-.487 1.99c-.756 1.134-2.02 1.434-2.874 1.505a6.6 6.6 0 0 1-1.604-.07l-.033-.005l-.01-.002h-.004l-.002-.001l.195-.981l-.196.98a1 1 0 0 1 .39-1.961l.01.002a3 3 0 0 0 .296.038c.21.02.491.032.792.007c.646-.054 1.132-.254 1.376-.62c.092-.14.171-.404.153-.791a2.8 2.8 0 0 0-.278-1.083a1.6 1.6 0 0 0-.228-.347l-.061-.06l-.047.042c-.529.529-1.116.793-1.746.793c-.549 0-1.02-.21-1.288-.329l-.017-.007a8 8 0 0 0-.309-.132l-.015.023c-.314.47-.655.808-1.038 1.036a2.8 2.8 0 0 1-1.001.347l-.229.036a1 1 0 0 0-.174.036q-.01.003-.008.004a.3.3 0 0 0-.06.07a1.06 1.06 0 0 0-.173.85c.058.218.22.468.667.617c.414.138.846.331 1.145.67c.38.43.406.918.332 1.288c-.031.158-.082.3-.118.398l-.053.14l-.048.128A1 1 0 0 0 9.5 14v6a1 1 0 1 1-2 0v-2.809l-.192-.084a10 10 0 0 1-1.908-1.12c-1.397-1.047-2.9-2.81-2.9-5.487C2.5 5.291 7.118 2 12 2c2.616 0 4.486 1.316 5.665 2.563a10.5 10.5 0 0 1 1.629 2.285a6 6 0 0 1 .108.22l.008.017l.002.005l.001.002s0 .002-.913.408l.914-.406q.024.054.042.112l2 6.5A1 1 0 0 1 20.5 15h-2v3.5a1 1 0 0 1-1 1h-3v.5a1 1 0 1 1-2 0v-1.5a1 1 0 0 1 1-1h3V14a1 1 0 0 1 1-1h1.646l-1.581-5.138l-.048-.097a8.5 8.5 0 0 0-1.306-1.828C15.264 4.934 13.884 4 12 4m1.81 3.625h-.002z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsNeurologyOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsNeutralIcon],svg[healthicons-neutral-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M24 40c8.837 0 16-7.163 16-16S32.837 8 24 8S8 15.163 8 24s7.163 16 16 16m0 2c9.941 0 18-8.059 18-18S33.941 6 24 6S6 14.059 6 24s8.059 18 18 18" clip-rule="evenodd"></svg:path><svg:path d="M20 21c0 2.21-1.12 4-2.5 4S15 23.21 15 21s1.12-4 2.5-4s2.5 1.79 2.5 4m13 0c0 2.21-1.12 4-2.5 4S28 23.21 28 21s1.12-4 2.5-4s2.5 1.79 2.5 4"></svg:path><svg:path fill-rule="evenodd" d="M16 31a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H17a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsNeutralIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsNeutral24pxIcon],svg[healthicons-neutral-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-width="1.5" d="M9.25 9.7a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0ZM7.75 15a.25.25 0 0 1 .25-.25h8a.25.25 0 1 1 0 .5H8a.25.25 0 0 1-.25-.25Zm8.5-5.3a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0ZM2.75 12a9.25 9.25 0 1 1 18.5 0a9.25 9.25 0 0 1-18.5 0ZM12 3.25a8.75 8.75 0 1 0 0 17.5a8.75 8.75 0 0 0 0-17.5Z"></svg:path>`,
})
export class HealthiconsNeutral24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsNeutralNegativeIcon],svg[healthicons-neutral-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsNeutralNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm24 40c8.837 0 16-7.163 16-16S32.837 8 24 8S8 15.163 8 24s7.163 16 16 16m0 2c9.941 0 18-8.059 18-18S33.941 6 24 6S6 14.059 6 24s8.059 18 18 18m-6.5-17c1.38 0 2.5-1.79 2.5-4s-1.12-4-2.5-4s-2.5 1.79-2.5 4s1.12 4 2.5 4M33 21c0 2.21-1.12 4-2.5 4S28 23.21 28 21s1.12-4 2.5-4s2.5 1.79 2.5 4m-16 9a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsNeutralNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsNeutralNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsNeutralOutlineIcon],svg[healthicons-neutral-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M24 40c8.837 0 16-7.163 16-16S32.837 8 24 8S8 15.163 8 24s7.163 16 16 16m0 2c9.941 0 18-8.059 18-18S33.941 6 24 6S6 14.059 6 24s8.059 18 18 18"></svg:path><svg:path d="M30.5 20a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1m-2.5.5a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0M17.5 20a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1m-2.5.5a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0M16 31a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H17a1 1 0 0 1-1-1"></svg:path></svg:g>`,
})
export class HealthiconsNeutralOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsNeutralOutline24pxIcon],svg[healthicons-neutral-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-width="1.5" d="M9.25 9.7a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0ZM7.75 15a.25.25 0 0 1 .25-.25h8a.25.25 0 1 1 0 .5H8a.25.25 0 0 1-.25-.25Zm8.5-5.3a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0ZM2.75 12a9.25 9.25 0 1 1 18.5 0a9.25 9.25 0 0 1-18.5 0ZM12 3.25a8.75 8.75 0 1 0 0 17.5a8.75 8.75 0 0 0 0-17.5Z"></svg:path>`,
})
export class HealthiconsNeutralOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsNoIcon],svg[healthicons-no-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M44 24c0 11.046-8.954 20-20 20S4 35.046 4 24S12.954 4 24 4s20 8.954 20 20m-27.778 7.778a1 1 0 0 1 0-1.414L22.586 24l-6.364-6.364a1 1 0 0 1 1.414-1.414L24 22.586l6.364-6.364a1 1 0 0 1 1.414 1.414L25.414 24l6.364 6.364a1 1 0 0 1-1.414 1.414L24 25.414l-6.364 6.364a1 1 0 0 1-1.414 0" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsNoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsNo24pxIcon],svg[healthicons-no-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m4.066-14.066a.75.75 0 0 1 0 1.06L13.06 12l3.005 3.005a.75.75 0 0 1-1.06 1.06L12 13.062l-3.005 3.005a.75.75 0 1 1-1.06-1.06L10.938 12L7.934 8.995a.75.75 0 1 1 1.06-1.06L12 10.938l3.005-3.005a.75.75 0 0 1 1.06 0" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsNo24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsNoNegativeIcon],svg[healthicons-no-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsNoNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20m-7.778-13.636a1 1 0 0 0 1.414 1.414L24 25.414l6.364 6.364a1 1 0 0 0 1.414-1.414L25.414 24l6.364-6.364a1 1 0 0 0-1.414-1.414L24 22.586l-6.364-6.364a1 1 0 0 0-1.414 1.414L22.586 24z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsNoNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsNoNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsNoOutlineIcon],svg[healthicons-no-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M16.222 31.778a1 1 0 0 1 0-1.414L22.586 24l-6.364-6.364a1 1 0 0 1 1.414-1.414L24 22.586l6.364-6.364a1 1 0 0 1 1.414 1.414L25.414 24l6.364 6.364a1 1 0 0 1-1.414 1.414L24 25.414l-6.364 6.364a1 1 0 0 1-1.414 0"></svg:path><svg:path fill-rule="evenodd" d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20m0-2c9.941 0 18-8.059 18-18S33.941 6 24 6S6 14.059 6 24s8.059 18 18 18" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsNoOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsNoOutline24pxIcon],svg[healthicons-no-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M8.478 8.478a1 1 0 0 1 1.414 0l2.154 2.153l2.153-2.153a1 1 0 1 1 1.414 1.414l-2.153 2.154l2.153 2.153a1 1 0 0 1-1.414 1.414l-2.153-2.153l-2.154 2.153A1 1 0 0 1 8.478 14.2l2.153-2.153l-2.153-2.154a1 1 0 0 1 0-1.414"></svg:path><svg:path fill-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2M4 12a8 8 0 1 1 16 0a8 8 0 0 1-16 0" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsNoOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsNoseIcon],svg[healthicons-nose-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30.915 6.403a1 1 0 1 0-1.83-.806l-.004.008l-.013.03a30 30 0 0 1-.266.582a93 93 0 0 1-3.76 7.217c-2.48 4.279-5.741 9.017-9.033 11.39c-4.344 3.118-5.65 6.952-4.735 10.162c.896 3.145 3.865 5.387 7.37 5.387h3.229A2.627 2.627 0 0 1 24.5 43h2a4.627 4.627 0 0 0-4.627-4.627h-.576c.224-.336.582-.665 1.126-.918c.994-.464 2.68-.7 5.35-.08a1 1 0 1 0 .453-1.948c-2.929-.68-5.11-.503-6.649.215c-1.357.633-2.155 1.664-2.461 2.73h-.472c-2.647 0-4.805-1.683-5.446-3.935c-.624-2.187.121-5.221 3.978-7.989l.002-.001c3.67-2.645 7.111-7.725 9.595-12.01a96 96 0 0 0 3.844-7.379l.278-.608l.015-.034l.005-.011zL30 6zm4.841 28.588c-.52 2.09-1.817 3.979-3.227 4.858L31.47 38.15c.882-.55 1.923-1.947 2.344-3.642c.409-1.647.195-3.408-1.16-4.815l1.44-1.388c1.947 2.022 2.192 4.547 1.66 6.685"></svg:path>`,
})
export class HealthiconsNoseIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsNose24pxIcon],svg[healthicons-nose-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.38 3.474a1 1 0 1 0-1.76-.948L10.645 8.05c-.825 1.532-2.086 3.122-3.407 4.179c-.7.56-1.61 1.389-2.196 2.376c-.6 1.012-.936 2.348-.135 3.684a4.23 4.23 0 0 0 2.798 1.972l.824.165c.557.11 1.219.367 1.717.713c.525.366.66.676.66.861h2c0-.727-.31-1.326-.72-1.796l.02-.005c1.098-.295 2.288-1.133 2.927-2.07c-1.515-1.033-2.98-1.717-4.86-1.186c-.958.27-1.659.648-2.318 1.323a2.23 2.23 0 0 1-1.333-1.006c-.286-.477-.245-.986.14-1.634c.399-.673 1.082-1.32 1.726-1.835c1.56-1.25 2.985-3.06 3.918-4.793zm.87 12.188a2.998 2.998 0 0 1-.751 4.583l1.002 1.731a5 5 0 0 0 1.249-7.638z"></svg:path>`,
})
export class HealthiconsNose24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsNoseNegativeIcon],svg[healthicons-nose-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsNoseNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM30.915 6.403a1 1 0 1 0-1.83-.806l-.004.008l-.013.03a30 30 0 0 1-.266.582a93 93 0 0 1-3.76 7.217c-2.48 4.279-5.741 9.017-9.033 11.39c-4.344 3.118-5.65 6.952-4.735 10.162c.896 3.145 3.865 5.387 7.37 5.387h3.229A2.627 2.627 0 0 1 24.5 43h2a4.627 4.627 0 0 0-4.627-4.627h-.576c.224-.336.582-.665 1.126-.918c.994-.464 2.68-.7 5.35-.08a1 1 0 1 0 .453-1.948c-2.929-.68-5.11-.503-6.649.215c-1.357.633-2.155 1.664-2.461 2.73h-.472c-2.647 0-4.805-1.683-5.446-3.935c-.624-2.187.121-5.221 3.978-7.989l.002-.001c3.67-2.645 7.111-7.725 9.595-12.01a96 96 0 0 0 3.844-7.379l.278-.608l.015-.034l.005-.011zL30 6zm4.84 28.588c-.518 2.09-1.816 3.979-3.226 4.858L31.47 38.15c.882-.55 1.923-1.947 2.344-3.642c.409-1.647.195-3.408-1.16-4.815l1.44-1.388c1.947 2.022 2.192 4.547 1.66 6.685" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsNoseNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsNoseNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsNoseOutlineIcon],svg[healthicons-nose-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30.404 5.085a1 1 0 0 1 .511 1.318L30 6l.915.403v.002l-.005.011l-.015.033a29 29 0 0 1-.278.61a96 96 0 0 1-3.844 7.38c-2.484 4.283-5.925 9.363-9.595 12.008l-.002.001c-3.857 2.768-4.602 5.802-3.978 7.99c.641 2.251 2.799 3.935 5.446 3.935h.472c.306-1.067 1.104-2.098 2.461-2.731c1.54-.718 3.72-.895 6.65-.215a1 1 0 1 1-.453 1.948c-2.671-.62-4.357-.384-5.351.08c-.543.253-.901.582-1.126.918h.576A4.627 4.627 0 0 1 26.5 43h-2a2.627 2.627 0 0 0-2.627-2.627h-3.23c-3.504 0-6.473-2.243-7.369-5.388c-.914-3.21.39-7.043 4.735-10.161c3.292-2.373 6.554-7.111 9.033-11.39a93 93 0 0 0 3.76-7.217a51 51 0 0 0 .266-.582l.013-.03l.004-.008a1 1 0 0 1 1.319-.512m2.125 34.764c1.41-.88 2.708-2.768 3.227-4.858c.53-2.139.286-4.663-1.66-6.685l-1.441 1.387c1.355 1.408 1.569 3.169 1.16 4.816c-.421 1.695-1.462 3.093-2.344 3.642z"></svg:path>`,
})
export class HealthiconsNoseOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsNoseOutline24pxIcon],svg[healthicons-nose-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.974 2.12a1 1 0 0 1 .406 1.354l-2.974 5.524c-.933 1.732-2.357 3.543-3.918 4.793c-.644.515-1.327 1.162-1.726 1.835c-.385.648-.426 1.157-.14 1.634c.312.52.82.889 1.408 1.025a5 5 0 0 1 7.088-.115l-1.393 1.435a3 3 0 0 0-3.24-.623c.314.147.62.319.904.516c.73.508 1.516 1.342 1.516 2.502h-2c0-.185-.134-.495-.66-.86c-.497-.348-1.16-.603-1.716-.715l-.824-.164a4.23 4.23 0 0 1-2.798-1.972c-.801-1.336-.466-2.672.135-3.684c.586-.988 1.496-1.816 2.196-2.376C8.56 11.172 9.82 9.582 10.645 8.05l2.975-5.524a1 1 0 0 1 1.354-.407M17 17.645a2.98 2.98 0 0 0-.75-1.984l1.5-1.324a5 5 0 0 1-1.249 7.638l-1.002-1.731c.9-.52 1.501-1.49 1.501-2.6" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsNoseOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsNotOkIcon],svg[healthicons-not-ok-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M14.807 23.233c-.683-.438-1.183-1.145-1.064-1.883a.5.5 0 0 1 .668-.389c1.818.675 3.846.256 5.642-1.448a.5.5 0 0 1 .818.203c.231.689.024 1.618-.48 2.382a3.8 3.8 0 0 1-2.654 1.665c-1.198.177-2.216-.073-2.93-.53m17.947 0c.683-.438 1.184-1.145 1.065-1.883a.5.5 0 0 0-.668-.389c-1.818.675-3.846.256-5.642-1.448a.5.5 0 0 0-.818.203c-.232.689-.024 1.618.48 2.382a3.8 3.8 0 0 0 2.653 1.665c1.199.177 2.216-.073 2.93-.53m-15.789 8.943c.097-.355.245-.72.431-1.005C18.664 29.225 21.151 28 23.892 28c2.646 0 5.048 1.139 6.354 2.962l.017.023a4 4 0 0 1 .278.403c.164.285.284.637.357.973a3.6 3.6 0 0 1 .076 1.123c-.038.356-.17.9-.64 1.268c-.523.41-1.15.372-1.656.195c-2.394-.782-3.53-1.12-4.648-1.126c-1.116-.006-2.277.317-4.714 1.128l-.008.003l-.008.002c-.56.176-1.222.216-1.772-.187c-.527-.386-.668-.976-.698-1.377a3.7 3.7 0 0 1 .135-1.214"></svg:path><svg:path fill-rule="evenodd" d="M42 24c0 9.941-8.059 18-18 18S6 33.941 6 24S14.059 6 24 6s18 8.059 18 18m-2 0c0 8.837-7.163 16-16 16S8 32.837 8 24S15.163 8 24 8s16 7.163 16 16" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsNotOkIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsNotOk24pxIcon],svg[healthicons-not-ok-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12m10-8a8 8 0 1 0 0 16a8 8 0 0 0 0-16" clip-rule="evenodd"></svg:path><svg:path d="M9.387 8.253c.188-.27.287-.56.317-.713l1.472.288a3.5 3.5 0 0 1-.561 1.286c-.324.461-.828.932-1.56 1.128c-.731.196-1.404.04-1.914-.197a3.5 3.5 0 0 1-1.13-.833l1.13-.986c.104.119.335.32.632.459c.291.135.595.188.894.108s.535-.278.72-.54m.1 4.647c.665-.486 1.517-.9 2.513-.9s1.848.414 2.513.9c.665.485 1.206 1.088 1.6 1.58a1.25 1.25 0 0 1-.024 1.595c-.322.382-.934.62-1.536.32l-1-.5c-.44-.22-.73-.31-.937-.352A3 3 0 0 0 12 15.5c-.248 0-.41.002-.616.043s-.497.132-.937.351l-1 .5a1.26 1.26 0 0 1-1.536-.32a1.25 1.25 0 0 1-.023-1.593c.393-.493.934-1.096 1.599-1.582m4.81-5.359c.03.154.13.444.318.713c.184.262.42.46.72.54c.298.08.602.027.893-.108c.298-.139.528-.34.631-.459l1.131.986a3.5 3.5 0 0 1-1.13.833c-.51.238-1.182.393-1.914.197c-.731-.196-1.236-.667-1.56-1.128a3.5 3.5 0 0 1-.56-1.286z"></svg:path></svg:g>`,
})
export class HealthiconsNotOk24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsNotOkNegativeIcon],svg[healthicons-not-ok-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsNotOkNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zm-8 24c0 8.837-7.163 16-16 16S8 32.837 8 24S15.163 8 24 8s16 7.163 16 16m2 0c0 9.941-8.059 18-18 18S6 33.941 6 24S14.059 6 24 6s18 8.059 18 18m-12.567 7.544C28.345 30.026 26.272 29 23.893 29c-2.469 0-4.608 1.104-5.66 2.717c-.453.696-.886 2.802.767 2.283c4.813-1.6 5.28-1.542 10 0c1.317.472 1.07-1.424.674-2.115c-.048-.083-.106-.16-.164-.238zM13.631 21.35c-.119.738.381 1.445 1.065 1.883c.713.457 1.73.707 2.93.53a3.8 3.8 0 0 0 2.653-1.665c.504-.764.712-1.693.48-2.382a.5.5 0 0 0-.818-.203c-1.796 1.704-3.824 2.123-5.642 1.448a.5.5 0 0 0-.668.39m20.076 0c.119.738-.382 1.445-1.065 1.883c-.713.457-1.73.707-2.93.53a3.8 3.8 0 0 1-2.653-1.665c-.504-.764-.712-1.693-.48-2.382a.5.5 0 0 1 .818-.203c1.796 1.704 3.824 2.123 5.642 1.448a.5.5 0 0 1 .668.39" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsNotOkNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsNotOkNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsNotOkOutlineIcon],svg[healthicons-not-ok-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M14.807 23.233c-.683-.438-1.183-1.145-1.064-1.883a.5.5 0 0 1 .668-.389c1.818.675 3.846.256 5.642-1.448a.5.5 0 0 1 .818.203c.231.689.024 1.618-.48 2.382a3.8 3.8 0 0 1-2.654 1.665c-1.198.177-2.216-.073-2.93-.53m17.947 0c.683-.438 1.184-1.145 1.065-1.883a.5.5 0 0 0-.668-.389c-1.818.675-3.846.256-5.642-1.448a.5.5 0 0 0-.818.203c-.232.689-.024 1.618.48 2.382a3.8 3.8 0 0 0 2.653 1.665c1.199.177 2.216-.073 2.93-.53"></svg:path><svg:path fill-rule="evenodd" d="M17.396 31.17c-.186.285-.334.65-.431 1.006a3.7 3.7 0 0 0-.136 1.214c.03.4.172.99.699 1.377c.55.403 1.212.363 1.772.187l.008-.002l.008-.003c2.437-.81 3.598-1.134 4.713-1.127c1.12.006 2.254.343 4.648 1.125c.507.177 1.134.215 1.656-.195c.47-.368.602-.912.64-1.268a3.6 3.6 0 0 0-.075-1.123a3.5 3.5 0 0 0-.357-.973a4 4 0 0 0-.278-.403l-.018-.023C28.94 29.139 26.538 28 23.892 28c-2.742 0-5.228 1.225-6.496 3.17m1.436 2.132l.002.006l-.003-.01zm.062-.598q-.045.162-.06.298c2.288-.76 3.736-1.189 5.207-1.18c1.421.008 2.807.426 4.93 1.117a2 2 0 0 0-.028-.153a1.6 1.6 0 0 0-.137-.403c-.019-.033-.029-.046-.053-.078a4 4 0 0 1-.133-.178C27.75 30.913 26.005 30 23.892 30c-2.195 0-3.987.983-4.821 2.263a1.8 1.8 0 0 0-.177.44m10.08.628l-.002.008l.004-.01z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M42 24c0 9.941-8.059 18-18 18S6 33.941 6 24S14.059 6 24 6s18 8.059 18 18m-2 0c0 8.837-7.163 16-16 16S8 32.837 8 24S15.163 8 24 8s16 7.163 16 16" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsNotOkOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsNotOkOutline24pxIcon],svg[healthicons-not-ok-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12m10-8a8 8 0 1 0 0 16a8 8 0 0 0 0-16" clip-rule="evenodd"></svg:path><svg:path d="M9.387 8.253c.188-.27.287-.56.317-.713l1.472.288a3.5 3.5 0 0 1-.561 1.286c-.324.461-.828.932-1.56 1.128c-.731.196-1.404.04-1.914-.197a3.5 3.5 0 0 1-1.13-.833l1.13-.986c.104.119.335.32.632.459c.291.135.595.188.894.108s.535-.278.72-.54m.1 4.647c.665-.486 1.517-.9 2.513-.9s1.848.414 2.513.9c.665.485 1.206 1.088 1.6 1.58a1.25 1.25 0 0 1-.024 1.595c-.322.382-.934.62-1.536.32l-1-.5c-.44-.22-.73-.31-.937-.352A3 3 0 0 0 12 15.5c-.248 0-.41.002-.616.043s-.497.132-.937.351l-1 .5a1.26 1.26 0 0 1-1.536-.32a1.25 1.25 0 0 1-.023-1.593c.393-.493.934-1.096 1.599-1.582m4.81-5.359c.03.154.13.444.318.713c.184.262.42.46.72.54c.298.08.602.027.893-.108c.298-.139.528-.34.631-.459l1.131.986a3.5 3.5 0 0 1-1.13.833c-.51.238-1.182.393-1.914.197c-.731-.196-1.236-.667-1.56-1.128a3.5 3.5 0 0 1-.56-1.286z"></svg:path></svg:g>`,
})
export class HealthiconsNotOkOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsNurseIcon],svg[healthicons-nurse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M24 6c-2.806 0-6.238 1.026-8.264 1.731c-.988.344-1.483 1.417-1.156 2.41l2.148 6.521a8 8 0 1 0 14.544 0l2.148-6.52c.327-.994-.168-2.067-1.156-2.41C30.237 7.025 26.806 6 24 6m-5.62 12.425c3.757-1.543 7.483-1.543 11.24 0q.09.037.186.056a6 6 0 1 1-11.613 0q.096-.019.187-.056M25 11h2v2h-2v2h-2v-2h-2v-2h2V9h2z"></svg:path><svg:path d="M22.85 32.193L16.88 28S6 31.393 6 35.467V42h36v-6.533C42 31.393 31.121 28 31.121 28l-5.972 4.193a2 2 0 0 1-2.298 0M32 32h2v2h2v2h-2v2h-2v-2h-2v-2h2z"></svg:path></svg:g>`,
})
export class HealthiconsNurseIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsNurseNegativeIcon],svg[healthicons-nurse-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsNurseNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM22.85 32.193L16.88 28S6 31.393 6 35.467V42h36v-6.533C42 31.393 31.121 28 31.121 28l-5.972 4.193a2 2 0 0 1-2.298 0M36 34h-2v-2h-2v2h-2v2h2v2h2v-2h2zM24 6c-2.806 0-6.238 1.026-8.264 1.731c-.988.344-1.483 1.417-1.156 2.41l2.148 6.521a8 8 0 1 0 14.544 0l2.148-6.52c.327-.994-.168-2.067-1.156-2.41C30.237 7.025 26.806 6 24 6m1 5h2v2h-2v2h-2v-2h-2v-2h2V9h2zm-6.62 7.425c3.757-1.543 7.483-1.543 11.24 0q.09.037.186.056a6 6 0 1 1-11.613 0q.096-.019.187-.056" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsNurseNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsNurseNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsNurseOutlineIcon],svg[healthicons-nurse-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M27 13v-2h-2V9h-2v2h-2v2h2v2h2v-2z"></svg:path><svg:path fill-rule="evenodd" d="m31.32 16.767l1.978-5.606c.536-1.52-.228-3.24-1.829-3.747C29.61 6.824 26.57 6 24 6s-5.61.824-7.47 1.414c-1.6.508-2.364 2.228-1.828 3.747l1.979 5.606a8 8 0 1 0 14.639 0M24 8c-2.24 0-5.029.738-6.865 1.32c-.46.146-.73.658-.547 1.176l2.024 5.734c3.587-1.14 7.189-1.14 10.776 0l2.024-5.734c.183-.518-.087-1.03-.547-1.175C29.029 8.738 26.239 8 24 8m5.806 10.481h-.001a1 1 0 0 1-.156-.045c-3.774-1.415-7.524-1.415-11.298 0a1 1 0 0 1-.157.045a6 6 0 1 0 11.613 0" clip-rule="evenodd"></svg:path><svg:path d="M34 34h2v2h-2v2h-2v-2h-2v-2h2v-2h2z"></svg:path><svg:path fill-rule="evenodd" d="M16.879 28S6 31.393 6 35.467V42h36v-6.533C42 31.393 31.121 28 31.121 28l-5.972 4.193a2 2 0 0 1-2.298 0zm14.562 2.22l-5.142 3.61a4 4 0 0 1-4.597 0l-5.143-3.61a38 38 0 0 0-4.227 1.776c-1.296.646-2.482 1.363-3.316 2.092C8.115 34.875 8 35.343 8 35.467V40h32v-4.533c0-.124-.115-.592-1.016-1.38c-.834-.728-2.02-1.445-3.317-2.092a38 38 0 0 0-3.547-1.528q-.376-.14-.679-.248" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsNurseOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsNutritionIcon],svg[healthicons-nutrition-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M7.065 17.388c-1.122-1.027-1.888-2.693-2.038-5.384a.954.954 0 0 1 .977-.996c1.675.03 2.958.144 3.937.433c.42-1.089 1.258-2.116 2.512-3.056a.91.91 0 0 1 1.093 0c1.265.947 2.106 1.984 2.523 3.083c1.008-.34 2.301-.438 3.93-.462a.954.954 0 0 1 .974.998c-.15 2.691-.916 4.357-2.038 5.384c.548.407.865 1.092.749 1.832c-.277 1.76-.756 4.47-1.508 7.78H12v2h5.704c-.75 3.075-1.72 6.555-2.957 10.209a1.827 1.827 0 0 1-3.494 0c-.486-1.434-.93-2.842-1.336-4.21H12v-2H9.34a128 128 0 0 1-2.16-9H11v-2H6.793c-.2-1.084-.357-2.02-.477-2.779c-.117-.74.2-1.425.749-1.832m7.133-5.211l.683 1.8l1.825-.614c.503-.169 1.184-.27 2.154-.32c-.297 1.932-1.013 2.748-1.665 3.17c-.931.602-2.289.785-4.165.787h-.06c-1.877-.002-3.234-.185-4.166-.788c-.651-.421-1.366-1.236-1.663-3.164c1 .055 1.713.157 2.235.311l1.768.522l.663-1.72c.191-.495.56-1.05 1.193-1.634c.64.59 1.01 1.151 1.198 1.65m19.509 1.53c-1.973 1.973-2.165 4.727-1.056 7.32C37.505 17.85 43 21.78 43 28c0 5.523-4.925 10-11 10s-11-4.477-11-10c0-5.792 4.764-9.6 9.34-7.53c-.781-2.8-.377-5.848 1.953-8.177zm6.263 16.535a1 1 0 1 0-1.94-.485a4.43 4.43 0 0 1-3.273 3.273a1 1 0 1 0 .485 1.94a6.43 6.43 0 0 0 4.728-4.728" clip-rule="evenodd"></svg:path><svg:path d="M34 18c3 0 5-2 5-5c-3 0-5 2-5 5"></svg:path></svg:g>`,
})
export class HealthiconsNutritionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsNutrition24pxIcon],svg[healthicons-nutrition-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M5.648 2.347A2.5 2.5 0 0 1 6.916 2c.463 0 .896.126 1.268.347a2.49 2.49 0 0 1 2.397.057a2.516 2.516 0 0 1 .915 3.43l-.5.869q-.036.063-.076.124a2.98 2.98 0 0 1 .919 2.588c-.157 1.16-.439 3.08-.785 4.638L11 14.05H8c-.552 0-1 .45-1 1.004c0 .555.448 1.005 1 1.005h2.518c-.61 2.009-1.418 4.132-1.607 4.624c-.676 1.755-3.146 1.755-3.822 0c-.239-.622-1.466-3.844-2.031-6.153a37 37 0 0 1-.5-2.488H6c.552 0 1-.45 1-1.005s-.448-1.004-1-1.004H2.247l-.086-.618a2.98 2.98 0 0 1 .818-2.49q-.077-.106-.144-.222l-.5-.87c-.69-1.2-.28-2.736.915-3.43a2.49 2.49 0 0 1 2.398-.056m1.268 3.67a.5.5 0 0 0 .207-.044l.756-.348l.779.294a.5.5 0 0 0 .606-.22l.5-.87a.503.503 0 0 0-.183-.686a.5.5 0 0 0-.481-.01l-.981.507l-.95-.563a.5.5 0 0 0-.253-.068a.5.5 0 0 0-.252.068l-.951.563l-.981-.508a.5.5 0 0 0-.482.011a.503.503 0 0 0-.183.686l.5.87a.5.5 0 0 0 .607.22l.778-.294l.757.348a.5.5 0 0 0 .207.044m10.998 3.922l-.002.005l-.012.028l-.047.118a7 7 0 0 0-.15.423c-.117.365-.203.748-.203 1.027c0 .28.086.663.202 1.028a7 7 0 0 0 .198.541l.012.028l.002.005l-.914.407l-.914.407l-.001-.003l-.002-.004l-.006-.014l-.086-.21a9 9 0 0 1-.194-.545c-.133-.421-.297-1.043-.297-1.64c0-.596.164-1.218.297-1.639a9 9 0 0 1 .26-.708l.02-.047l.006-.014l.002-.004v-.003a1 1 0 0 1 1.32-.511c.505.225.733.818.51 1.325" clip-rule="evenodd"></svg:path><svg:path d="M19.086 9.446c-.707.71-.707 2.13-.707 2.13s1.414 0 2.121-.71s.707-2.13.707-2.13s-1.414 0-2.121.71"></svg:path><svg:path fill-rule="evenodd" d="M22 16.241c0 2.789-2.357 4.84-5 4.84s-5-2.051-5-4.84v-.03c0-.641-.002-2.508 1.688-3.531c1.02-.617 2.08-.564 2.92-.25q.203.077.392.172q.189-.095.393-.172c.839-.314 1.899-.367 2.918.25c1.69 1.023 1.69 2.89 1.689 3.53zm-5.041 1.117a1.005 1.005 0 0 0 .582 1.922h.003l.003-.002l.011-.003l.034-.011l.11-.038c.09-.031.215-.078.356-.138c.262-.111.66-.302.985-.576s.581-.634.736-.874a6 6 0 0 0 .253-.43l.017-.032l.005-.01l.001-.003l.002-.003a1.006 1.006 0 0 0-.44-1.35a1 1 0 0 0-1.343.439l-.007.015a4 4 0 0 1-.167.282c-.123.191-.25.35-.342.428a2 2 0 0 1-.48.264a4 4 0 0 1-.305.116z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsNutrition24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsNutritionNegativeIcon],svg[healthicons-nutrition-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsNutritionNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm32.65 21.027c-1.108-2.593-.916-5.347 1.057-7.32l-1.414-1.414c-2.33 2.33-2.734 5.377-1.953 8.178C25.765 18.4 21 22.208 21 28c0 5.523 4.925 10 11 10s11-4.477 11-10c0-6.22-5.495-10.151-10.35-6.973m6.593 8.003a1 1 0 0 1 .727 1.212a6.43 6.43 0 0 1-4.727 4.728a1 1 0 1 1-.486-1.94a4.43 4.43 0 0 0 3.273-3.273a1 1 0 0 1 1.212-.727M34 18c3 0 5-2 5-5c-3 0-5 2-5 5m-15.065-.613c1.122-1.026 1.888-2.692 2.038-5.383a.954.954 0 0 0-.974-.998c-1.628.024-2.922.123-3.93.462c-.417-1.099-1.258-2.136-2.523-3.082a.91.91 0 0 0-1.092 0c-1.255.939-2.093 1.966-2.512 3.055c-.98-.289-2.263-.404-3.938-.433a.954.954 0 0 0-.977.996c.15 2.691.916 4.357 2.038 5.384a1.9 1.9 0 0 0-.749 1.832c.12.76.277 1.695.477 2.78H11v2H7.18c.511 2.53 1.215 5.609 2.16 9H12v2H9.917a116 116 0 0 0 1.336 4.209a1.828 1.828 0 0 0 3.494 0A123 123 0 0 0 17.705 29H12v-2h6.176c.753-3.31 1.23-6.02 1.508-7.78a1.9 1.9 0 0 0-.749-1.832m-4.736-5.21l.682 1.8l1.825-.614c.503-.169 1.184-.27 2.154-.32c-.297 1.932-1.012 2.748-1.665 3.17c-.936.605-2.303.787-4.195.787s-3.259-.182-4.195-.788c-.652-.421-1.367-1.236-1.664-3.164c1 .055 1.713.157 2.235.311l1.768.522l.664-1.72c.19-.495.559-1.05 1.192-1.634c.64.59 1.01 1.151 1.198 1.65" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsNutritionNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsNutritionNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsNutritionOutlineIcon],svg[healthicons-nutrition-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M5.027 12.004c.15 2.691.916 4.357 2.038 5.384a1.9 1.9 0 0 0-.749 1.832c.572 3.635 2.003 11.323 4.937 19.989a1.827 1.827 0 0 0 3.494 0c2.933-8.666 4.365-16.354 4.937-19.989a1.9 1.9 0 0 0-.749-1.832c1.122-1.027 1.888-2.693 2.038-5.384a.954.954 0 0 0-.974-.998c-1.629.024-2.922.123-3.93.462c-.417-1.099-1.258-2.136-2.523-3.082a.91.91 0 0 0-1.092 0c-1.255.939-2.093 1.966-2.513 3.055c-.98-.289-2.262-.404-3.937-.433a.954.954 0 0 0-.977.996m9.854 1.973l-.683-1.8c-.189-.499-.558-1.06-1.198-1.65c-.634.584-1.002 1.14-1.193 1.634l-.663 1.72l-1.768-.522c-.522-.154-1.234-.256-2.235-.311c.297 1.928 1.012 2.743 1.663 3.164c.932.603 2.29.786 4.166.788h.06c1.877-.002 3.234-.185 4.165-.788c.652-.421 1.368-1.237 1.665-3.17c-.97.051-1.651.152-2.154.321zM8.306 19h9.388c-.287 1.807-.784 4.6-1.57 8H12v2h3.645c-.69 2.782-1.56 5.882-2.645 9.13a115 115 0 0 1-.995-3.13H13v-2h-1.582a126 126 0 0 1-2.197-9H12v-2H8.827a107 107 0 0 1-.521-3" clip-rule="evenodd"></svg:path><svg:path d="M38.242 28.03a1 1 0 0 1 .728 1.212a6.43 6.43 0 0 1-4.728 4.728a1 1 0 0 1-.485-1.94a4.43 4.43 0 0 0 3.273-3.273a1 1 0 0 1 1.212-.727"></svg:path><svg:path fill-rule="evenodd" d="M32.65 21.027c-1.108-2.593-.916-5.347 1.057-7.32l-1.414-1.414c-2.33 2.33-2.734 5.377-1.953 8.178C25.764 18.4 21 22.208 21 28c0 5.523 4.925 10 11 10s11-4.477 11-10c0-6.22-5.495-10.151-10.35-6.973M32 24.061l-1.25-1c-1.858-1.486-3.688-1.403-5.074-.547C24.21 23.419 23 25.357 23 28c0 4.243 3.846 8 9 8s9-3.757 9-8c0-2.642-1.21-4.58-2.676-5.486c-1.386-.856-3.217-.939-5.075.548z" clip-rule="evenodd"></svg:path><svg:path d="M34 18c3 0 5-2 5-5c-3 0-5 2-5 5"></svg:path></svg:g>`,
})
export class HealthiconsNutritionOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsNutritionOutline24pxIcon],svg[healthicons-nutrition-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M5.648 2.347A2.5 2.5 0 0 1 6.916 2c.463 0 .896.126 1.268.347a2.49 2.49 0 0 1 2.397.057a2.516 2.516 0 0 1 .915 3.43l-.5.869q-.036.063-.076.124a2.98 2.98 0 0 1 .919 2.588c-.173 1.281-.5 3.492-.897 5.116c-.565 2.31-1.792 5.531-2.031 6.153c-.676 1.755-3.146 1.755-3.822 0c-.239-.622-1.466-3.844-2.031-6.153c-.398-1.625-.724-3.835-.897-5.116a2.98 2.98 0 0 1 .818-2.49q-.077-.106-.144-.222l-.5-.87c-.69-1.2-.28-2.736.915-3.43a2.49 2.49 0 0 1 2.398-.056m-.524 5.679a.987.987 0 0 0-.98 1.12c.035.264.077.565.124.888H6c.552 0 1 .45 1 1.004c0 .555-.448 1.005-1 1.005H4.589c.124.705.263 1.405.411 2.008c.233.952.592 2.086.941 3.112a81 81 0 0 0 .998 2.755l.016.041a.048.048 0 0 0 .09 0l.016-.04a81 81 0 0 0 .998-2.756c.122-.358.245-.73.364-1.103H7c-.552 0-1-.45-1-1.005s.448-1.004 1-1.004h2c.37-1.51.684-3.625.857-4.906a.987.987 0 0 0-.981-1.12zm1.792-2.009a.5.5 0 0 0 .207-.044l.756-.348l.779.294a.5.5 0 0 0 .606-.22l.5-.87a.503.503 0 0 0-.183-.686a.5.5 0 0 0-.481-.01l-.981.507l-.95-.563a.5.5 0 0 0-.253-.068a.5.5 0 0 0-.252.068l-.951.563l-.981-.508a.5.5 0 0 0-.482.011a.503.503 0 0 0-.183.686l.5.87a.5.5 0 0 0 .607.22l.778-.294l.757.348a.5.5 0 0 0 .207.044" clip-rule="evenodd"></svg:path><svg:path d="M15.793 17.858c-.16-.53.138-1.091.666-1.253l.014-.005l.067-.022c.06-.021.144-.053.239-.093a2 2 0 0 0 .479-.265c.093-.078.219-.236.342-.427a4 4 0 0 0 .167-.283l.007-.013a1 1 0 0 1 1.344-.44c.492.25.689.855.439 1.35l-.002.002l-.001.004l-.005.01l-.017.03a5 5 0 0 1-.253.432c-.155.24-.41.6-.736.874c-.325.274-.723.465-.985.576a6 6 0 0 1-.466.175l-.034.011l-.01.004h-.004l-.003.002a1 1 0 0 1-1.248-.669"></svg:path><svg:path fill-rule="evenodd" d="m17.912 9.944l.002-.005a1.006 1.006 0 0 0-.508-1.325a1 1 0 0 0-1.32.511l-.001.003l-.002.004l-.006.014l-.086.21a9 9 0 0 0-.194.546c-.133.42-.297 1.042-.297 1.639c0 .222.023.448.058.665a3.2 3.2 0 0 0-1.87.473C11.998 13.702 12 15.57 12 16.211v.03c0 2.788 2.357 4.84 5 4.84s5-2.052 5-4.84v-.03c0-.642.002-2.509-1.689-3.532c-.923-.558-1.879-.568-2.674-.331a3.3 3.3 0 0 1-.137-.807c0-.28.086-.663.202-1.027a7 7 0 0 1 .198-.542zM20 16.24c0 1.564-1.343 2.831-3 2.831s-3-1.267-3-2.831c0-.703.062-1.442.72-1.841c.794-.48 1.613.026 2.28.655c.667-.63 1.486-1.135 2.28-.655c.658.399.72 1.138.72 1.84" clip-rule="evenodd"></svg:path><svg:path d="M18.379 11.576s0-1.42.707-2.13s2.121-.71 2.121-.71s0 1.42-.707 2.13s-2.121.71-2.121.71"></svg:path></svg:g>`,
})
export class HealthiconsNutritionOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsOIcon],svg[healthicons-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10 24c0-7.732 6.268-14 14-14s14 6.268 14 14s-6.268 14-14 14s-14-6.268-14-14m14-10c-5.523 0-10 4.477-10 10s4.477 10 10 10s10-4.477 10-10s-4.477-10-10-10" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsOIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsONegativeIcon],svg[healthicons-o-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsONegative0)"><svg:path d="M14 24c0-5.523 4.477-10 10-10s10 4.477 10 10s-4.477 10-10 10s-10-4.477-10-10"></svg:path><svg:path fill-rule="evenodd" d="M48 0H0v48h48zM24 10c-7.732 0-14 6.268-14 14s6.268 14 14 14s14-6.268 14-14s-6.268-14-14-14" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsONegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsONegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsOOutlineIcon],svg[healthicons-o-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9 24c0-8.284 6.716-15 15-15s15 6.716 15 15s-6.716 15-15 15S9 32.284 9 24m15-13c-7.18 0-13 5.82-13 13s5.82 13 13 13s13-5.82 13-13s-5.82-13-13-13m0 4a9 9 0 1 0 0 18a9 9 0 0 0 0-18m-11 9c0-6.075 4.925-11 11-11s11 4.925 11 11s-4.925 11-11 11s-11-4.925-11-11" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsOOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsObservationIcon],svg[healthicons-observation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M36 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8m0 2a6 6 0 1 0 0-12a6 6 0 0 0 0 12m-17.904-2.895a3.77 3.77 0 0 0-5.333-.002l-.704.704a3.95 3.95 0 0 0-3.892 1.021a4.034 4.034 0 0 0 0 5.676l.833.839V34H6v2h3.05a3.5 3.5 0 1 0 4.899 0h20.102a3.5 3.5 0 1 0 4.899 0H42v-2h-4v-3h.066C40.24 31 42 29.224 42 27.033s-1.761-3.967-3.934-3.967H20.11a.3.3 0 0 1-.218-.09l-.366-.37l.369-.367a3.77 3.77 0 0 0 .001-5.333zm.02 6.083l.365-.364a1.77 1.77 0 0 0 0-2.504l-1.8-1.8a1.77 1.77 0 0 0-2.504-.002l-.35.35zM36 31v3H11v-8.644l5.275 5.311c.212.213.498.333.797.333zm1-21a1 1 0 1 0-2 0v2.303l1.168 1.752a1 1 0 0 0 1.664-1.11L37 11.697z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsObservationIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsObservation24pxIcon],svg[healthicons-observation-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M20 4.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m-2 0a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0m-9.554.763L10.39 8H18a3 3 0 0 1 2 5.236V16h1v2h-1.268a2 2 0 1 1-3.465 0H7.733a2 2 0 1 1-3.465 0H3v-2h1V9.365l-.446-.628a3 3 0 0 1 4.892-3.474M7.292 14H18v2H6v-3.82z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsObservation24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsObservationNegativeIcon],svg[healthicons-observation-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsObservationNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM20.11 23.066h17.956c2.173 0 3.934 1.776 3.934 3.967S40.239 31 38.066 31H38v3h4v2h-3.05a3.5 3.5 0 1 1-4.899 0H13.95a3.5 3.5 0 1 1-4.899 0H6v-2h3V23.343l-.833-.839a4.034 4.034 0 0 1 0-5.676a3.95 3.95 0 0 1 3.892-1.021l.704-.704a3.77 3.77 0 0 1 5.333.002l1.8 1.801a3.77 3.77 0 0 1-.002 5.333l-.368.368l.366.369c.058.058.137.09.218.09m-1.993-1.878l.364-.364a1.77 1.77 0 0 0 0-2.504l-1.8-1.8a1.77 1.77 0 0 0-2.504-.002l-.35.35zM36 31v3H11v-8.644l5.275 5.311c.212.213.498.333.797.333zm0-15a4 4 0 1 0 0-8a4 4 0 0 0 0 8m0 2a6 6 0 1 0 0-12a6 6 0 0 0 0 12m1-8a1 1 0 1 0-2 0v2.303l.168.252l1 1.5a1 1 0 0 0 1.664-1.11L37 11.697z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsObservationNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsObservationNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsObservationOutlineIcon],svg[healthicons-observation-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M37 10a1 1 0 1 0-2 0v2.303l1.168 1.752a1 1 0 0 0 1.664-1.11L37 11.697z"></svg:path><svg:path fill-rule="evenodd" d="M36 18a6 6 0 1 0 0-12a6 6 0 0 0 0 12m0-2a4 4 0 1 0 0-8a4 4 0 0 0 0 8m-17.904-.895a3.77 3.77 0 0 0-5.333-.002l-.704.704a3.95 3.95 0 0 0-3.892 1.021a4.034 4.034 0 0 0 0 5.676l.833.839V34H6v2h3.05a3.5 3.5 0 1 0 4.899 0h20.102a3.5 3.5 0 1 0 4.899 0H42v-2h-4v-3h.066C40.24 31 42 29.224 42 27.033s-1.761-3.967-3.934-3.967H20.11a.3.3 0 0 1-.218-.09l-.366-.37l.369-.367a3.77 3.77 0 0 0 .001-5.333zM36 34v-3H17.072c-.299 0-.585-.12-.797-.333L11 25.357V34zM18.117 21.188l.364-.364a1.77 1.77 0 0 0 0-2.504l-1.8-1.8a1.77 1.77 0 0 0-2.504-.002l-.35.35zm19.95 3.878H20.11a2.3 2.3 0 0 1-1.636-.68l-6.106-6.148a1.953 1.953 0 0 0-2.782 0a2.034 2.034 0 0 0 0 2.857L17.438 29h20.628C39.12 29 40 28.135 40 27.033s-.882-1.967-1.934-1.967M13 38.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0M36.5 40a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsObservationOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsObservationOutline24pxIcon],svg[healthicons-observation-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M20 4.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m-2 0a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0M10.39 8L8.446 5.263a3 3 0 0 0-4.892 3.474L4 9.365V16H3v2h1.268a2 2 0 1 0 3.465 0h8.535a2 2 0 1 0 3.465 0H21v-2h-1v-2.764A3 3 0 0 0 18 8zm-2.065 4l-3.14-4.42a1 1 0 0 1 1.63-1.16L9.358 10H18a1 1 0 1 1 0 2zm-1.033 2H18v2H6v-3.82z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsObservationOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsObstetricsmoniaIcon],svg[healthicons-obstetricsmonia-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3zm6.515 26.283c4.686 4.686 12.284 4.686 16.97 0c4.687-4.687 4.687-12.285 0-16.971c-4.364-4.364-11.253-4.664-15.965-.9c2.836-.293 4.746 3.27 2.544 5.472c-1.076 1.076-.314 2.916 1.207 2.916h.638a3.47 3.47 0 0 1 3.355 2.577l1.273 4.774a6.9 6.9 0 0 0 1.825-1.149l-.04.003a1.5 1.5 0 0 1-1.57-1.132l-.99-3.96a1.5 1.5 0 1 1 2.91-.727l.683 2.73l1.955-.15a1.5 1.5 0 0 1 1.52 2.023c-.628 1.673-2.988 5.338-8.17 5.914a1.5 1.5 0 0 1-1.62-1.127l-.626-2.505l-2.505.626a1.5 1.5 0 1 1-.728-2.91l3.96-.99a1.5 1.5 0 0 1 .971.083l-.298-1.117A1.97 1.97 0 0 0 20.91 24.3h-.637c-2.858 0-4.29-3.456-2.269-5.476c1.267-1.268-.024-3.382-1.73-2.834l-1.87.601c-3.54 4.702-3.169 11.411 1.112 15.692M14.1 33.697c5.468 5.467 14.332 5.467 19.8 0c5.467-5.468 5.467-14.332 0-19.8c-5.468-5.467-14.332-5.467-19.8 0c-5.467 5.468-5.467 14.332 0 19.8m19.295-9.405a2.8 2.8 0 1 1-3.96-3.96a2.8 2.8 0 0 1 3.96 3.96" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsObstetricsmoniaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsObstetricsmoniaNegativeIcon],svg[healthicons-obstetricsmonia-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsObstetricsmoniaNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM6 9a3 3 0 0 1 3-3h30a3 3 0 0 1 3 3v30a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3zm26.485 23.283c-4.686 4.686-12.284 4.686-16.97 0c-4.28-4.28-4.651-10.99-1.113-15.692l1.871-.6c1.706-.55 2.997 1.565 1.73 2.833c-2.02 2.02-.59 5.476 2.268 5.476h.638c.893 0 1.675.6 1.905 1.463l.298 1.117a1.5 1.5 0 0 0-.97-.083l-3.96.99a1.5 1.5 0 1 0 .727 2.91l2.505-.626l.626 2.505a1.5 1.5 0 0 0 1.62 1.127c5.182-.576 7.542-4.241 8.17-5.914a1.5 1.5 0 0 0-1.52-2.023l-1.955.15l-.683-2.73a1.5 1.5 0 1 0-2.91.727l.99 3.96a1.5 1.5 0 0 0 1.57 1.132l.04-.003a6.9 6.9 0 0 1-1.825 1.149l-1.273-4.774a3.47 3.47 0 0 0-3.355-2.577h-.637c-1.522 0-2.284-1.84-1.208-2.916c2.202-2.201.292-5.765-2.544-5.472c4.712-3.764 11.601-3.464 15.965.9c4.687 4.686 4.687 12.284 0 16.97m1.415 1.414c-5.468 5.467-14.332 5.467-19.8 0c-5.467-5.468-5.467-14.332 0-19.8c5.468-5.467 14.332-5.467 19.8 0c5.467 5.468 5.467 14.332 0 19.8m-4.465-9.405a2.8 2.8 0 1 0 3.96-3.96a2.8 2.8 0 0 0-3.96 3.96" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsObstetricsmoniaNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsObstetricsmoniaNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsObstetricsmoniaOutlineIcon],svg[healthicons-obstetricsmonia-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M39 8H9a1 1 0 0 0-1 1v30a1 1 0 0 0 1 1h30a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1M9 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3z"></svg:path><svg:path d="M32.485 32.283c-4.686 4.686-12.284 4.686-16.97 0c-4.28-4.28-4.651-10.99-1.113-15.692l1.871-.6c1.706-.55 2.997 1.565 1.73 2.833c-2.02 2.02-.59 5.476 2.268 5.476h.638c.893 0 1.675.6 1.905 1.463l.298 1.117a1.5 1.5 0 0 0-.97-.083l-3.96.99a1.5 1.5 0 1 0 .727 2.91l2.505-.626l.626 2.505a1.5 1.5 0 0 0 1.62 1.127c5.182-.576 7.542-4.241 8.17-5.914a1.5 1.5 0 0 0-1.52-2.023l-1.955.15l-.683-2.73a1.5 1.5 0 1 0-2.91.727l.99 3.96a1.5 1.5 0 0 0 1.57 1.132l.04-.003a6.9 6.9 0 0 1-1.825 1.149l-1.273-4.774a3.47 3.47 0 0 0-3.355-2.577h-.637c-1.522 0-2.284-1.84-1.208-2.916c2.202-2.201.292-5.765-2.544-5.472c4.712-3.764 11.601-3.464 15.965.9c4.687 4.686 4.687 12.284 0 16.97m1.415 1.414c-5.468 5.467-14.332 5.467-19.8 0c-5.467-5.468-5.467-14.332 0-19.8c5.468-5.467 14.332-5.467 19.8 0c5.467 5.468 5.467 14.332 0 19.8m-4.465-9.405a2.8 2.8 0 1 0 3.96-3.96a2.8 2.8 0 0 0-3.96 3.96"></svg:path></svg:g>`,
})
export class HealthiconsObstetricsmoniaOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsOccupationalTherapyIcon],svg[healthicons-occupational-therapy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M24.753 16.357c1.03-1.18 2.498-2.176 4.065-2.616c1.547-.434 3.15-.319 4.578.64l.002.002a5.92 5.92 0 0 1 2.597 4.665c.092 2.499-1.032 4.84-2.838 7.063a6 6 0 0 0-7.123 6.524l-.753.587q-.652.507-1.276.997c-.49-.391-.997-.789-1.513-1.193c-2.105-1.651-4.36-3.42-6.275-5.396c-2.58-2.665-4.318-5.493-4.212-8.583a5.92 5.92 0 0 1 2.596-4.664c1.429-.954 3.033-1.07 4.581-.637c1.567.438 3.035 1.432 4.064 2.611l.754.864zM18.5 18.5a1 1 0 1 0 0 2c.161 0 .37.053.548.244c.18.194.452.666.452 1.756c0 1.22.394 2.165 1.168 2.766c.725.563 1.615.689 2.332.689V29.5a1 1 0 1 0 2 0v-3.546c.717 0 1.607-.125 2.332-.688c.774-.6 1.168-1.546 1.168-2.766c0-1.09.272-1.562.452-1.756a.74.74 0 0 1 .548-.244a1 1 0 1 0 0-2c-.589 0-1.38.199-2.014.884c-.633.681-.986 1.71-.986 3.116c0 .777-.231 1.06-.395 1.186c-.212.166-.572.268-1.105.268V19.5a1 1 0 1 0-2 0v4.454c-.533 0-.893-.102-1.105-.268c-.164-.126-.395-.409-.395-1.186c0-1.407-.353-2.435-.986-3.116A2.74 2.74 0 0 0 18.5 18.5"></svg:path><svg:path d="M32 36a4 4 0 1 0 0-8a4 4 0 0 0 0 8m-1-3v1.5h2V33h1.5v-2H33v-1.5h-2V31h-1.5v2z"></svg:path><svg:path d="M39 6H9a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3m-1.007 12.975c.109 2.946-1.118 5.576-2.886 7.891A6 6 0 1 1 26.64 34.7l-.205.16c-.637.496-1.246.97-1.81 1.421l-.63.506l-.626-.51a143 143 0 0 0-2.02-1.603c-2.13-1.67-4.55-3.568-6.568-5.652c-2.7-2.788-4.91-6.126-4.775-10.044v-.002a7.91 7.91 0 0 1 3.485-6.256c2.002-1.336 4.23-1.458 6.23-.899a10 10 0 0 1 2.161.9c.775.433 1.49.96 2.117 1.544a11 11 0 0 1 2.114-1.544a10 10 0 0 1 2.165-.905c2-.56 4.23-.439 6.232.905a7.91 7.91 0 0 1 3.483 6.255"></svg:path></svg:g>`,
})
export class HealthiconsOccupationalTherapyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsOccupationalTherapyOutlineIcon],svg[healthicons-occupational-therapy-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M18.5 18.5a1 1 0 1 0 0 2c.161 0 .37.053.548.244c.18.194.452.666.452 1.756c0 1.22.394 2.165 1.168 2.766c.725.563 1.615.689 2.332.689V29.5a1 1 0 1 0 2 0v-3.546c.717 0 1.607-.125 2.332-.688c.774-.6 1.168-1.546 1.168-2.766c0-1.09.272-1.562.452-1.756a.74.74 0 0 1 .548-.244a1 1 0 1 0 0-2c-.589 0-1.38.199-2.014.884c-.633.681-.986 1.71-.986 3.116c0 .777-.231 1.06-.395 1.186c-.212.166-.572.268-1.105.268V19.5a1 1 0 1 0-2 0v4.454c-.533 0-.893-.102-1.105-.268c-.164-.126-.395-.409-.395-1.186c0-1.407-.353-2.435-.986-3.116A2.74 2.74 0 0 0 18.5 18.5m12.5 16V33h-1.5v-2H31v-1.5h2V31h1.5v2H33v1.5z"></svg:path><svg:path fill-rule="evenodd" d="m26.435 34.86l.205-.16a6 6 0 1 0 8.467-7.833c1.768-2.316 2.995-4.946 2.886-7.892a7.91 7.91 0 0 0-3.483-6.255c-2.003-1.344-4.233-1.465-6.232-.905a10 10 0 0 0-2.165.905c-.774.434-1.488.961-2.113 1.544a11 11 0 0 0-2.118-1.544a10 10 0 0 0-2.161-.9c-2-.559-4.228-.437-6.23.9a7.91 7.91 0 0 0-3.485 6.255v.002c-.134 3.918 2.074 7.256 4.775 10.044c2.018 2.084 4.437 3.981 6.568 5.652c.714.56 1.396 1.095 2.02 1.602l.626.51l.63-.505c.564-.451 1.173-.925 1.81-1.42m2.383-21.119c-1.567.44-3.035 1.436-4.065 2.616l-.753.864l-.754-.864c-1.029-1.18-2.497-2.173-4.064-2.61c-1.548-.434-3.152-.318-4.58.636a5.92 5.92 0 0 0-2.597 4.664c-.106 3.09 1.632 5.918 4.212 8.583c1.915 1.976 4.17 3.745 6.275 5.396q.775.606 1.512 1.193q.625-.491 1.277-.997l.005-.004l.747-.583a6 6 0 0 1 7.123-6.524c1.807-2.223 2.93-4.564 2.839-7.063a5.92 5.92 0 0 0-2.596-4.665l-.003-.002c-1.428-.959-3.03-1.074-4.578-.64M36 32a4 4 0 1 1-8 0a4 4 0 0 1 8 0" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M39 6H9a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3M8 9a1 1 0 0 1 1-1h30a1 1 0 0 1 1 1v30a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsOccupationalTherapyOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsOdontologyIcon],svg[healthicons-odontology-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M20.96 9.281c-4.338-2.44-8.18-1.293-11.375 2.585c-3.082 3.742-.98 10.488.53 15.338c.36 1.156.687 2.205.902 3.079c1.115 4.54 2.183 7.37 4.616 9.418c1.205 1.014 2.572-.729 4.014-2.567c1.25-1.594 2.556-3.26 3.863-3.264c1.285-.004 2.571 1.66 3.804 3.254c1.423 1.84 2.775 3.59 3.973 2.577c1.86-1.57 2.703-2.722 3.725-5.956a8.003 8.003 0 0 0 4.342-12.607c1.006-3.42 1.126-6.904-1.773-10.265c-4.14-4.8-9.877-2.32-12.548-.733l3.618 3.1a1 1 0 1 1-1.302 1.52zM39 26a6 6 0 1 1-12 0a6 6 0 0 1 12 0m-7-3a1 1 0 1 1 2 0v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 1 1-2 0v-2h-2a1 1 0 1 1 0-2h2z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsOdontologyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsOdontologyImplantIcon],svg[healthicons-odontology-implant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M39.578 9.134c-4.61-4.856-10.98-2.675-14.14-1.105l6.086 4.43a1 1 0 0 1-1.177 1.617L23.53 9.113l-.03.02c-6.18-4.81-11.548-3.78-15.91 1.032c-2.715 2.994-1.418 7.038-.05 11.301c.83 2.588 1.685 5.256 1.685 7.82c.213.47 2.356.848 5.383 1.105a2 2 0 0 0-.043 1.059l.03.13l2.781-1.001c1.706.091 3.555.15 5.42.174l-7.748 2.79l.4 1.73l12.65-4.554c5.011-.137 9.18-.587 9.662-1.433c0-2.214 1.015-4.537 2.051-6.91c1.907-4.365 3.888-8.9-.233-13.242M33.095 32.92L16.3 38.966l-.4-1.73l17.585-6.33a2 2 0 0 1-.05.544zm-16.082 7.915l15.547-5.597l-.471 2.044l-13.05 4.698a3 3 0 0 1-2.026-1.145M24.889 42h3.724a3 3 0 0 0 2.924-2.325l.017-.074z"></svg:path>`,
})
export class HealthiconsOdontologyImplantIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsOdontologyImplantNegativeIcon],svg[healthicons-odontology-implant-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsOdontologyImplantNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm22.796 30.753a134 134 0 0 1-5.42-.174l-2.78 1.001l-.03-.13a2 2 0 0 1 .042-1.06c-3.027-.256-5.17-.634-5.383-1.104c0-2.564-.855-5.232-1.685-7.82c-1.368-4.263-2.665-8.307.05-11.301c4.362-4.812 9.73-5.841 15.91-1.031l.03-.02l6.817 4.962a1 1 0 1 0 1.177-1.617l-6.086-4.43c3.16-1.57 9.53-3.751 14.14 1.105c4.12 4.341 2.14 8.877.233 13.242c-1.036 2.373-2.05 4.696-2.05 6.91c-.483.846-4.652 1.296-9.663 1.433l-12.65 4.554l-.4-1.73zM16.3 38.966l16.795-6.046l.34-1.47a2 2 0 0 0 .05-.544L15.9 37.236zm16.26-3.728l-15.547 5.597a3 3 0 0 0 2.027 1.145l13.049-4.698zM28.613 42H24.89l6.665-2.4l-.017.075A3 3 0 0 1 28.613 42" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsOdontologyImplantNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsOdontologyImplantNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsOdontologyImplantOutlineIcon],svg[healthicons-odontology-implant-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M7.59 10.165c4.362-4.812 9.73-5.841 15.91-1.031c0 0 9.716-6.702 16.078 0c4.12 4.341 2.14 8.877.233 13.242c-1.036 2.373-2.05 4.696-2.05 6.91c-.483.846-4.652 1.296-9.663 1.433l-12.65 4.554l-.4-1.73l7.748-2.79a134 134 0 0 1-5.42-.174l-2.78 1.001l-.03-.13a2 2 0 0 1 .042-1.06c-3.027-.256-5.17-.634-5.383-1.104c0-2.564-.855-5.232-1.685-7.82c-1.368-4.263-2.665-8.307.05-11.301m14.682.547q.083.064.17.12l6.46 4.712a1 1 0 1 0 1.178-1.616l-4.833-3.526c.215-.126.481-.275.79-.435c.923-.478 2.194-1.04 3.62-1.41c2.866-.746 5.996-.653 8.47 1.954c1.29 1.359 1.764 2.636 1.856 3.864c.097 1.296-.22 2.701-.807 4.304c-.29.793-.632 1.597-.998 2.438l-.194.445l-.001.003c-.302.69-.615 1.408-.9 2.117c-.54 1.342-1.047 2.815-1.24 4.34l-.088.02c-.715.165-1.752.311-3.053.427c-2.585.23-5.97.321-9.373.29c-3.402-.03-6.765-.183-9.302-.43c-1.208-.116-2.18-.25-2.865-.39c-.139-1.51-.487-2.988-.882-4.375c-.257-.904-.544-1.8-.818-2.652l-.013-.043c-.272-.848-.53-1.65-.755-2.435c-.954-3.331-1.012-5.393.378-6.926c1.963-2.166 3.969-3.281 5.984-3.476c2.006-.194 4.397.486 7.216 2.68m14.205 17.105l-.037.02zm-26.072-.08l.006.002z" clip-rule="evenodd"></svg:path><svg:path d="M33.095 32.92L16.3 38.966l-.4-1.73l17.585-6.33q.013.267-.05.544zm-16.082 7.915l15.547-5.597l-.471 2.044l-13.05 4.698a3 3 0 0 1-2.026-1.145M31.554 39.6L24.889 42h3.724a3 3 0 0 0 2.924-2.325z"></svg:path></svg:g>`,
})
export class HealthiconsOdontologyImplantOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsOdontologyNegativeIcon],svg[healthicons-odontology-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsOdontologyNegative0)"><svg:path d="M33 22a1 1 0 0 0-1 1v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2h-2v-2a1 1 0 0 0-1-1"></svg:path><svg:path fill-rule="evenodd" d="M48 0H0v48h48zM21.166 9.4c-4.422-2.596-8.336-1.473-11.58 2.466c-3.083 3.742-.982 10.488.53 15.338c.36 1.156.686 2.205.9 3.079c1.116 4.54 2.184 7.37 4.617 9.418c1.205 1.014 2.572-.729 4.014-2.567c1.25-1.594 2.556-3.26 3.863-3.264c1.285-.004 2.571 1.66 3.804 3.254c1.423 1.84 2.775 3.59 3.973 2.577c1.86-1.57 2.703-2.722 3.725-5.956a8 8 0 1 1 4.342-12.607c1.006-3.42 1.126-6.903-1.773-10.265c-4.128-4.786-9.844-2.335-12.524-.747l3.598 3.118a1 1 0 1 1-1.31 1.512zM33 32a6 6 0 0 0 5.508-8.384A6.001 6.001 0 0 0 27 26a6 6 0 0 0 6 6" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsOdontologyNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsOdontologyNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsOdontologyOutlineIcon],svg[healthicons-odontology-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22.254 12.648a2 2 0 0 0 2.541.05l.003-.002l.005-.004l.05-.038q.074-.056.23-.167c.208-.147.519-.356.91-.591c.793-.476 1.874-1.032 3.08-1.406c2.392-.741 4.929-.705 6.993 1.689c1.246 1.444 1.765 2.84 1.898 4.21c.097.997-.006 2.038-.256 3.142a8 8 0 1 0-4.887 14.467c-.326.926-.62 1.572-.928 2.087c-.364.608-.784 1.097-1.431 1.683c-.327-.31-.74-.804-1.285-1.505l-.267-.345c-.562-.728-1.228-1.59-1.907-2.28c-.717-.726-1.923-1.773-3.5-1.768c-1.568.005-2.777 1.035-3.51 1.767c-.688.69-1.364 1.551-1.934 2.28q-.138.177-.27.343c-.556.705-.976 1.202-1.309 1.511c-1.611-1.574-2.5-3.808-3.52-7.965c-.232-.94-.584-2.072-.949-3.24v-.001l-.313-1.011c-.481-1.565-.959-3.212-1.286-4.839c-.687-3.416-.558-6.03.717-7.578c1.695-2.058 3.38-2.994 5.002-3.121c1.629-.128 3.66.522 6.123 2.632m12.758 21.097c-1.022 3.234-1.866 4.386-3.725 5.956c-1.198 1.013-2.55-.736-3.973-2.577c-1.233-1.595-2.519-3.258-3.804-3.254c-1.307.004-2.614 1.67-3.864 3.264c-1.441 1.838-2.808 3.581-4.013 2.567c-2.433-2.048-3.5-4.877-4.616-9.418c-.215-.874-.541-1.923-.902-3.08c-1.51-4.849-3.612-11.595-.53-15.337c3.818-4.635 8.562-5.37 13.97-.737c0 0 8.459-6.711 14.026-.256c2.9 3.362 2.779 6.844 1.773 10.265a8.003 8.003 0 0 1-4.342 12.607M39 26a6 6 0 1 1-12 0a6 6 0 0 1 12 0m-6-4a1 1 0 0 0-1 1v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2h-2v-2a1 1 0 0 0-1-1" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsOdontologyOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsOesophagusCancerIcon],svg[healthicons-oesophagus-cancer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M19.75 11a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m1.5 3.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0"></svg:path><svg:path fill-rule="evenodd" d="m24.302 4.003l-.036 4.612c1.014.61 1.748 1.688 1.738 3.041A3.77 3.77 0 0 1 27 14.284c-.026 1.475-.945 3.201-2.75 3.623l-.01 2.693v.002c0 .21-.004.384-.008.541c-.007.252-.012.457.005.682c.023.314.087.473.172.58c.115.142.205.173.312.182c.156.015.386-.021.741-.137c.17-.056.349-.122.547-.197l.06-.024c.176-.066.367-.139.559-.205c.418-.145.926-.29 1.454-.29c3.246 0 5.129 2.65 6.321 4.877c1.507 2.813 1.443 6.317-.161 9.071c-1.043 1.79-2.396 3.375-4.471 4.22c-2.992 1.218-6.28.741-8.97-.649c-.373-.193-.884.098-.884.557V44H12.46v-4.015c0-.888.165-1.767.486-2.592c.744-1.908 1.779-2.881 3.101-3.454c.62-.269 1.283-.44 1.934-.595l.395-.093a27 27 0 0 0 1.659-.427c.708-.212 1.268-.774 1.479-1.393c.192-.568.103-1.198-.535-1.738q-.194-.164-.398-.332c-.936-.777-2.009-1.67-2.725-2.932c-1.026-1.81-1.02-3.75-1.016-5.482v-2.942A4.74 4.74 0 0 1 15 14.25c0-.506.11-1.019.263-1.479A3.4 3.4 0 0 1 15 11.5c0-1.49.724-2.81 1.84-3.63V4zm-.465 8.12q.02-.13.02-.266a1.714 1.714 0 0 0-2.494-1.527a2.285 2.285 0 0 0-4.363.956c0 .5.161.964.435 1.341a2.857 2.857 0 1 0 4.899 2.941a1.7 1.7 0 0 0 .952.29a1.714 1.714 0 0 0 .451-3.37q.07-.174.1-.365" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsOesophagusCancerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsOesophagusCancerOutlineIcon],svg[healthicons-oesophagus-cancer-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M15 14.25a4.74 4.74 0 0 0 1.84 3.754V20.6l-.001.347c-.005 1.732-.01 3.671 1.016 5.482c.716 1.263 1.79 2.155 2.725 2.932l.398.332c.638.54.727 1.17.534 1.737c-.21.62-.77 1.182-1.478 1.394c-.58.174-1.122.3-1.66.427l-.394.093c-.651.155-1.313.326-1.934.595c-1.322.573-2.357 1.546-3.1 3.454a7.1 7.1 0 0 0-.487 2.591V44h1.8v-4.016c0-.664.124-1.322.364-1.938c.583-1.498 1.293-2.089 2.139-2.455c.463-.201.99-.343 1.635-.497l.362-.085h.005a30 30 0 0 0 1.786-.46c1.26-.377 2.268-1.363 2.667-2.54c.417-1.23.157-2.646-1.076-3.69l-.427-.358c-.952-.796-1.75-1.464-2.293-2.42c-.784-1.383-.783-2.87-.781-4.714v-1.958q.536.13 1.11.131c.949 0 1.898-.298 2.699-.812l-.01 2.409v.003c0 .107-.002.234-.006.37c-.007.314-.015.681.008.989c.036.49.156 1.066.565 1.573c.426.53.966.794 1.549.848c.532.049 1.048-.083 1.465-.22c.215-.07.43-.15.626-.224l.06-.023c.18-.069.344-.131.508-.188c.372-.128.649-.192.867-.192c2.116 0 3.546 1.707 4.735 3.928c1.21 2.262 1.16 5.102-.13 7.315c-.94 1.611-2.033 2.823-3.595 3.459c-2.397.976-5.128.626-7.463-.581c-1.544-.798-3.512.315-3.512 2.156V44h1.8v-4.19c0-.46.51-.75.885-.557c2.69 1.39 5.977 1.867 8.969.65c2.075-.846 3.428-2.432 4.47-4.221c1.605-2.754 1.669-6.258.162-9.07c-1.192-2.227-3.075-4.879-6.321-4.879c-.527 0-1.036.146-1.454.291c-.191.066-.383.139-.558.205l-.061.023a13 13 0 0 1-.547.198c-.355.116-.585.152-.741.137c-.107-.01-.197-.04-.312-.183c-.085-.106-.149-.265-.172-.58a6 6 0 0 1-.005-.68c.004-.158.009-.333.009-.542V20.6l.01-2.693c1.805-.422 2.724-2.148 2.75-3.623a3.77 3.77 0 0 0-.996-2.628c.01-1.353-.724-2.43-1.739-3.04l.036-4.613l-1.8-.006l-.015 4.071a3 3 0 0 0-.408.005C21.503 7.515 20.671 7 19.5 7q-.442 0-.86.082V4h-1.8v3.87A4.5 4.5 0 0 0 15 11.5c0 .482.117.917.263 1.271A4.7 4.7 0 0 0 15 14.25m8.837-2.127q.02-.13.02-.266a1.714 1.714 0 0 0-2.494-1.527a2.285 2.285 0 0 0-4.363.956c0 .5.161.964.435 1.341a2.857 2.857 0 1 0 4.899 2.941a1.7 1.7 0 0 0 .952.29a1.714 1.714 0 0 0 .451-3.37q.07-.174.1-.365" clip-rule="evenodd"></svg:path><svg:path d="M21.25 14.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m-1.5-3.5a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0"></svg:path></svg:g>`,
})
export class HealthiconsOesophagusCancerOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsOfficerIcon],svg[healthicons-officer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M13.5 10.097C13.5 7.774 24 6 24 6s10.5 1.774 10.5 4.097c0 3.097-1.91 4.403-1.91 4.403H15.41s-1.91-1.306-1.91-4.403m12.5-.53s-1.467-.534-2-1.067c-.533.533-2 1.067-2 1.067s.4 2.933 2 2.933s2-2.933 2-2.933m5.814 8.713c1.39-1.085 1.174-2.28 1.174-2.28H15.012s-.217 1.195 1.174 2.28a8 8 0 1 0 15.629 0M24 20c2.721 0 4.624-.314 5.952-.766q.047.376.048.766a6 6 0 1 1-11.952-.766c1.329.452 3.23.766 5.952.766"></svg:path><svg:path d="m16.879 28l6.477 5.457a1 1 0 0 0 1.288 0L31.121 28S42 31.393 42 35.467V42H6v-6.533C6 31.393 16.879 28 16.879 28m-4.154 9.207a1 1 0 0 1-.725-.961V35h7v1.246a1 1 0 0 1-.725.961l-2.5.715a1 1 0 0 1-.55 0zm20.94-4.082a.17.17 0 0 0-.33 0l-.471 1.52a.174.174 0 0 1-.165.126h-1.526c-.167 0-.237.225-.101.328l1.234.94c.06.046.086.128.063.202l-.471 1.52c-.052.168.13.307.266.204l1.234-.94a.166.166 0 0 1 .204 0l1.234.94c.136.103.318-.036.267-.203l-.472-1.52a.19.19 0 0 1 .063-.203l1.234-.94c.136-.103.066-.328-.101-.328H34.3a.174.174 0 0 1-.165-.125z"></svg:path></svg:g>`,
})
export class HealthiconsOfficerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsOfficerNegativeIcon],svg[healthicons-officer-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsOfficerNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM23.356 33.457L16.879 28S6 31.393 6 35.467V42h36v-6.533C42 31.393 31.121 28 31.121 28l-6.477 5.457a1 1 0 0 1-1.288 0M19 35h-7v1.246a1 1 0 0 0 .725.961l2.5.715a1 1 0 0 0 .55 0l2.5-.715a1 1 0 0 0 .725-.961zm14.336-1.875a.17.17 0 0 1 .328 0l.472 1.52c.023.075.09.126.165.126h1.526c.167 0 .237.225.101.328l-1.234.94a.19.19 0 0 0-.063.202l.471 1.52c.052.168-.13.307-.266.204l-1.234-.94a.166.166 0 0 0-.204 0l-1.234.94c-.136.103-.318-.036-.267-.203l.472-1.52a.19.19 0 0 0-.063-.203l-1.234-.94c-.136-.103-.066-.328.101-.328H32.7c.075 0 .142-.05.165-.125zM31.814 18.28c1.39-1.085 1.174-2.28 1.174-2.28H15.012s-.217 1.195 1.174 2.28a8 8 0 1 0 15.629 0m-1.862.955q.047.376.048.766a6 6 0 1 1-11.952-.766c1.313.447 3.186.759 5.856.766h.192c2.67-.007 4.543-.32 5.856-.766M13.5 10.097C13.5 7.774 24 6 24 6s10.5 1.774 10.5 4.097c0 3.097-1.91 4.403-1.91 4.403H15.41s-1.91-1.306-1.91-4.403m12.5-.53s-1.467-.534-2-1.067c-.533.533-2 1.067-2 1.067s.4 2.933 2 2.933s2-2.933 2-2.933" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsOfficerNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsOfficerNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsOfficerOutlineIcon],svg[healthicons-officer-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M24 9.5c.533.533 2 1.067 2 1.067s-.4 2.933-2 2.933s-2-2.933-2-2.933s1.467-.534 2-1.067"></svg:path><svg:path fill-rule="evenodd" d="m23.816 6.017l-.008.002l-.023.004l-.083.016l-.31.062c-.266.054-.645.134-1.098.237c-.905.206-2.12.507-3.34.884c-1.208.373-2.473.837-3.454 1.38c-.488.27-.956.587-1.313.96c-.355.369-.687.886-.687 1.535c0 1.745.49 3.023 1.008 3.88c.255.422.514.737.718.953q.013.173.053.384c.101.526.354 1.196.934 1.847a8 8 0 1 0 15.575 0c.579-.651.832-1.32.933-1.847q.04-.21.053-.384a5.6 5.6 0 0 0 .718-.953c.519-.857 1.008-2.135 1.008-3.88c0-.649-.332-1.166-.687-1.535c-.357-.373-.825-.69-1.313-.96c-.981-.543-2.246-1.007-3.455-1.38a47 47 0 0 0-3.339-.884a51 51 0 0 0-1.408-.3l-.083-.015l-.023-.004l-.008-.002L24 5.983zM24 7l.184-.983zm-.184-.983L24 7zM24 18.5c2.207 0 3.689-.286 4.68-.658c.839-.315 1.328-.691 1.61-1.008q.153-.173.248-.334H17.462q.095.162.247.334c.284.317.772.693 1.61 1.008c.992.372 2.474.658 4.681.658m7.372-4H16.628a3.7 3.7 0 0 1-.409-.558c-.343-.567-.715-1.484-.719-2.824a.7.7 0 0 1 .13-.172c.162-.169.436-.372.839-.594c.8-.443 1.91-.859 3.076-1.22a45 45 0 0 1 3.192-.843A49 49 0 0 1 24 8.019l.208.041c.254.052.618.13 1.055.229c.876.199 2.037.487 3.192.844c1.166.36 2.276.776 3.076 1.219c.403.222.677.425.84.594c.09.095.12.151.129.172c-.004 1.34-.376 2.257-.72 2.824a3.7 3.7 0 0 1-.408.558M18 20q0-.27.023-.534c1.338.627 3.254 1.034 5.977 1.034c2.345 0 4.089-.3 5.382-.785q.315-.117.595-.25Q30 19.73 30 20a6 6 0 0 1-12 0m-2.503-8.873v-.003z" clip-rule="evenodd"></svg:path><svg:path d="M12 35h7v1.246a1 1 0 0 1-.725.961l-2.5.715a1 1 0 0 1-.55 0l-2.5-.715a1 1 0 0 1-.725-.961zm21.665-1.875a.17.17 0 0 0-.33 0l-.471 1.52a.174.174 0 0 1-.165.126h-1.526c-.167 0-.237.225-.101.328l1.234.94c.06.046.086.128.063.202l-.471 1.52c-.052.168.13.307.266.203l1.234-.94a.17.17 0 0 1 .204 0l1.234.94c.136.104.318-.035.267-.202l-.472-1.52a.19.19 0 0 1 .063-.203l1.234-.94c.136-.103.066-.328-.101-.328H34.3a.174.174 0 0 1-.165-.125z"></svg:path><svg:path fill-rule="evenodd" d="M16.879 28S6 31.393 6 35.467V42h36v-6.533C42 31.393 31.121 28 31.121 28l-6.477 5.457a1 1 0 0 1-1.288 0zm14.668 2.257l-5.614 4.73a3 3 0 0 1-3.866 0l-5.614-4.73q-.262.093-.573.21c-.98.367-2.27.89-3.548 1.528c-1.296.647-2.482 1.364-3.316 2.093C8.115 34.875 8 35.343 8 35.467V40h32v-4.533c0-.124-.115-.592-1.016-1.38c-.834-.728-2.02-1.445-3.317-2.092a38 38 0 0 0-4.12-1.738" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsOfficerOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsOkIcon],svg[healthicons-ok-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M30.84 30.616a2.9 2.9 0 0 1-.472.878C29.081 33.07 26.636 34 24.013 34c-2.517 0-4.856-.854-6.179-2.302l-.02-.022a3.4 3.4 0 0 1-.352-.417a2.8 2.8 0 0 1-.371-.854a2.6 2.6 0 0 1-.067-1.021c.056-.367.24-.856.738-1.154c.48-.29 1.022-.259 1.476-.13c2.354.613 3.5.887 4.639.892c1.135.005 2.308-.258 4.704-.894l.014-.004c.52-.13 1.108-.159 1.616.138c.55.321.74.86.78 1.277c.038.404-.046.799-.151 1.107m-9.538-7.508c.13-.358.091-.795-.016-1.193a4.2 4.2 0 0 0-.61-1.28c-.581-.829-1.544-1.59-2.845-1.646c-1.347-.056-2.353.799-2.973 1.706a5.5 5.5 0 0 0-.695 1.416c-.143.446-.219.902-.169 1.267a.5.5 0 0 0 .766.352c.4-.256.819-.607 1.207-.931c.176-.148.347-.29.505-.415c.562-.444 1-.697 1.362-.715c.345-.017.743.18 1.245.556c.18.134.354.277.534.424h.001l.194.159c.244.197.504.399.766.557a.5.5 0 0 0 .728-.257m5.311 0c-.13-.358-.09-.795.017-1.193c.112-.416.319-.863.61-1.28c.58-.829 1.544-1.59 2.845-1.646c1.346-.056 2.353.799 2.973 1.706c.314.46.548.958.695 1.416c.142.446.218.902.168 1.267a.5.5 0 0 1-.765.352c-.4-.256-.82-.607-1.207-.931a25 25 0 0 0-.505-.415c-.563-.444-1-.697-1.363-.715c-.344-.017-.743.18-1.244.556c-.18.134-.354.277-.534.424H28.3l-.194.159a7 7 0 0 1-.765.557a.5.5 0 0 1-.729-.257"></svg:path><svg:path fill-rule="evenodd" d="M24 42c9.941 0 18-8.059 18-18S33.941 6 24 6S6 14.059 6 24s8.059 18 18 18m0-2c8.837 0 16-7.163 16-16S32.837 8 24 8S8 15.163 8 24s7.163 16 16 16" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsOkIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsOk24pxIcon],svg[healthicons-ok-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M7.212 10.737c.089-.267.283-.682.553-1.014c.28-.344.533-.473.735-.473s.455.13.735.473c.27.332.464.747.553 1.014l1.423-.474a5 5 0 0 0-.812-1.486C10 8.287 9.364 7.75 8.5 7.75S7 8.288 6.601 8.777a5 5 0 0 0-.813 1.486zm7 0c.089-.267.283-.682.553-1.014c.28-.344.533-.473.735-.473s.455.13.735.473c.27.332.464.747.553 1.014l1.424-.474a5 5 0 0 0-.814-1.486c-.397-.49-1.034-1.027-1.898-1.027s-1.5.538-1.899 1.027a5 5 0 0 0-.812 1.486zm-5.38 2.708a1 1 0 0 0-1.664 1.11C8.418 16.43 10.603 17 12 17s3.581-.57 4.832-2.445a1 1 0 0 0-1.664-1.11C14.418 14.57 13.003 15 12 15s-2.419-.43-3.168-1.555"></svg:path><svg:path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12m10-8a8 8 0 1 0 0 16a8 8 0 0 0 0-16" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsOk24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsOkNegativeIcon],svg[healthicons-ok-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" fill-rule="evenodd" clip-path="url(#healthiconsOkNegative0)" clip-rule="evenodd"><svg:path d="M40 24c0 8.837-7.163 16-16 16S8 32.837 8 24S15.163 8 24 8s16 7.163 16 16m-18.698-.892c.13-.358.091-.795-.016-1.193a4.2 4.2 0 0 0-.61-1.28c-.581-.829-1.544-1.591-2.845-1.646c-1.347-.056-2.353.799-2.973 1.706a5.6 5.6 0 0 0-.695 1.416c-.143.446-.219.902-.169 1.267a.5.5 0 0 0 .766.352c.4-.256.819-.607 1.207-.931c.176-.148.347-.29.505-.415c.562-.444 1-.697 1.362-.715c.345-.017.743.18 1.245.556c.18.134.354.276.534.424l.195.159c.244.197.504.399.765.557a.5.5 0 0 0 .73-.257m5.311 0c-.13-.358-.09-.795.017-1.193c.112-.416.319-.863.61-1.28c.58-.829 1.544-1.591 2.845-1.646c1.346-.056 2.353.799 2.973 1.706c.314.46.548.958.695 1.416c.142.446.218.902.168 1.267a.5.5 0 0 1-.765.352c-.4-.256-.82-.607-1.207-.93a24 24 0 0 0-.505-.416c-.563-.444-1-.697-1.363-.715c-.344-.017-.743.18-1.244.556c-.18.134-.354.276-.534.424l-.196.159a7 7 0 0 1-.765.557a.5.5 0 0 1-.729-.257m4.474 7.326c-.167.394-.439.773-.772 1.12C29.022 32.9 26.757 34 24.013 34c-2.737 0-5.037-1.096-6.31-2.455a4 4 0 0 1-.753-1.102c-.16-.366-.271-.832-.151-1.306c.136-.54.535-.927 1.052-1.082c.453-.136.94-.082 1.388.044c2.353.614 3.5.888 4.638.893c1.135.005 2.308-.258 4.704-.894l.014-.004c.493-.123.997-.168 1.454-.05c.496.13.946.462 1.135 1.016c.17.498.064.994-.097 1.374"></svg:path><svg:path d="M48 0H0v48h48zm-6 24c0 9.941-8.059 18-18 18S6 33.941 6 24S14.059 6 24 6s18 8.059 18 18"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsOkNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsOkNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsOkOutlineIcon],svg[healthicons-ok-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M21.286 21.915c.107.398.146.835.016 1.193a.5.5 0 0 1-.728.257a7 7 0 0 1-.766-.557l-.194-.158c-.18-.148-.355-.29-.535-.425c-.502-.375-.9-.573-1.245-.556c-.362.018-.8.271-1.362.715c-.159.125-.329.267-.505.415c-.388.324-.808.675-1.207.931a.5.5 0 0 1-.766-.352c-.05-.365.026-.821.169-1.267a5.5 5.5 0 0 1 .695-1.416c.62-.907 1.626-1.762 2.973-1.706c1.3.055 2.264.817 2.844 1.647c.292.416.498.863.61 1.279m5.345 0c-.108.398-.147.835-.017 1.193a.5.5 0 0 0 .729.257c.262-.158.521-.36.765-.557l.194-.158l.002-.001c.18-.147.354-.29.534-.424c.501-.375.9-.573 1.244-.556c.363.018.8.271 1.363.715c.158.125.328.267.505.415c.387.324.807.675 1.207.931a.5.5 0 0 0 .765-.352c.05-.365-.026-.821-.168-1.267a5.6 5.6 0 0 0-.695-1.416c-.62-.907-1.627-1.762-2.974-1.706c-1.3.055-2.263.817-2.844 1.647a4.2 4.2 0 0 0-.61 1.279"></svg:path><svg:path fill-rule="evenodd" d="M30.368 31.494a2.9 2.9 0 0 0 .472-.878c.105-.308.189-.703.15-1.107c-.04-.416-.23-.956-.779-1.277c-.508-.297-1.096-.268-1.616-.138l-.014.004c-2.396.636-3.569.899-4.704.894c-1.138-.005-2.285-.28-4.639-.893c-.454-.128-.995-.159-1.476.13c-.497.3-.682.788-.738 1.155c-.055.364-.008.727.067 1.02c.076.296.201.602.371.855a3.4 3.4 0 0 0 .372.439C19.157 33.146 21.496 34 24.014 34c2.622 0 5.067-.93 6.354-2.506m-6.5-.502c1.406.006 2.797-.319 5.035-.91l-.03.06a1 1 0 0 1-.054.087c-.786.963-2.56 1.771-4.806 1.771c-2.142 0-3.868-.738-4.703-1.651q-.047-.052-.084-.09l-.002-.003l-.046-.048l-.014-.016l-.042-.048l-.006-.01c2.066.536 3.395.852 4.752.858" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M42 24c0 9.941-8.059 18-18 18S6 33.941 6 24S14.059 6 24 6s18 8.059 18 18m-2 0c0 8.837-7.163 16-16 16S8 32.837 8 24S15.163 8 24 8s16 7.163 16 16" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsOkOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsOkOutline24pxIcon],svg[healthicons-ok-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M7.212 10.737c.089-.267.283-.682.553-1.014c.28-.344.533-.473.735-.473s.455.13.735.473c.27.332.464.747.553 1.014l1.423-.474a5 5 0 0 0-.812-1.486C10 8.287 9.364 7.75 8.5 7.75S7 8.288 6.601 8.777a5 5 0 0 0-.813 1.486zm7 0c.089-.267.283-.682.553-1.014c.28-.344.533-.473.735-.473s.455.13.735.473c.27.332.464.747.553 1.014l1.424-.474a5 5 0 0 0-.814-1.486c-.397-.49-1.034-1.027-1.898-1.027s-1.5.538-1.899 1.027a5 5 0 0 0-.812 1.486zm-5.38 2.708a1 1 0 0 0-1.664 1.11C8.418 16.43 10.603 17 12 17s3.581-.57 4.832-2.445a1 1 0 0 0-1.664-1.11C14.418 14.57 13.003 15 12 15s-2.419-.43-3.168-1.555"></svg:path><svg:path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12m10-8a8 8 0 1 0 0 16a8 8 0 0 0 0-16" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsOkOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsOldManIcon],svg[healthicons-old-man-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M22 13a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9m13 12a3 3 0 0 0-3 3v.343a1 1 0 1 0 2 0V28a1 1 0 1 1 2 0v14.946a1 1 0 1 0 2 0V28a3 3 0 0 0-3-3m-5.291-4.821L28 19.433l1.595.677zm1.226 1.062a5 5 0 0 0-1.226-1.062L36 22.928v-.096v.002c.095 1.1-.755 2.067-1.899 2.16c-1.134.09-2.132-.714-2.241-1.801v-.002l-.015-.086a4 4 0 0 0-.115-.434a4.5 4.5 0 0 0-.795-1.43"></svg:path><svg:path fill-rule="evenodd" d="m36 22.831l-6.405-2.72A7 7 0 0 0 28 19.432V42a2 2 0 0 1-3.99.199l-1-10A2 2 0 0 1 23 32h-2q0 .1-.01.199l-1 10A2 2 0 0 1 16 42V27.919c-1.679-.223-3.09-.898-4.136-1.925A6.2 6.2 0 0 1 10 21.481A6.34 6.34 0 0 1 11.92 17c1.29-1.259 3.129-2 5.335-2h7.32c4.973 0 7.944 1.722 9.62 3.759a8.4 8.4 0 0 1 1.494 2.695c.146.44.26.893.309 1.353v.015l.002.006zm-21.169.362c.257.252.631.496 1.169.648V19.17c-.5.152-.864.389-1.123.641a2.4 2.4 0 0 0-.72 1.708c-.006.64.232 1.24.674 1.674" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsOldManIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsOldMan24pxIcon],svg[healthicons-old-man-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M13 4.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0"></svg:path><svg:path fill-rule="evenodd" d="M16.196 12.48a1 1 0 0 1-1.177-.784c-.17-.85-.629-1.227-1.23-1.442a3 3 0 0 0-.289-.088V20.93a1.071 1.071 0 0 1-2.131.151L10.643 16h-.286l-.726 5.08a1.071 1.071 0 0 1-2.131-.15V15a3.5 3.5 0 1 1 0-7H12v.002c.702.01 1.617.067 2.461.369c1.149.41 2.19 1.283 2.52 2.933a1 1 0 0 1-.785 1.177M7.5 10a1.5 1.5 0 0 0 0 3z" clip-rule="evenodd"></svg:path><svg:path d="M17 14.4c0-.223.087-.365.213-.466a.9.9 0 0 1 .537-.184c.187 0 .392.067.537.184a.56.56 0 0 1 .213.466V21a.75.75 0 0 0 1.5 0v-6.6c0-.71-.32-1.269-.771-1.634a2.4 2.4 0 0 0-1.479-.516c-.5 0-1.045.166-1.479.516A2.06 2.06 0 0 0 15.5 14.4a.75.75 0 0 0 1.5 0"></svg:path></svg:g>`,
})
export class HealthiconsOldMan24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsOldManNegativeIcon],svg[healthicons-old-man-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsOldManNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm26.5 8.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0M35 25a3 3 0 0 0-3 3v.343a1 1 0 1 0 2 0V28a1 1 0 1 1 2 0v14.946a1 1 0 1 0 2 0V28a3 3 0 0 0-3-3m-7-5.567V42a2 2 0 0 1-3.99.199l-1-10A2 2 0 0 1 23 32h-2q0 .1-.01.199l-1 10A2 2 0 0 1 16 42V27.919c-1.679-.223-3.09-.898-4.136-1.925A6.2 6.2 0 0 1 10 21.481A6.34 6.34 0 0 1 11.92 17c1.29-1.259 3.129-2 5.335-2h7.32c4.973 0 7.944 1.722 9.62 3.759a8.4 8.4 0 0 1 1.494 2.695c.146.44.26.893.309 1.353v.015l.002.006v.003c.002.139.002.174 0 .178V23v.009c.09 1.096-.758 1.893-1.899 1.984c-1.134.091-2.132-.713-2.241-1.8v-.002l-.015-.086a4 4 0 0 0-.115-.434a4.5 4.5 0 0 0-.795-1.43c-.503-.612-1.375-1.35-2.935-1.808m-12-.263c-.5.152-.864.389-1.123.641a2.4 2.4 0 0 0-.72 1.708c-.006.64.232 1.24.674 1.674c.257.252.631.496 1.169.648z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsOldManNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsOldManNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsOldManOutlineIcon],svg[healthicons-old-man-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M32 30.054a3 3 0 0 1 6 0V43a1 1 0 1 1-2 0V30.054a1 1 0 0 0-2 0v.343a1 1 0 1 1-2 0z"></svg:path><svg:path d="M18.255 17c-1.976 0-3.554.66-4.638 1.717A5.34 5.34 0 0 0 12 22.491a5.2 5.2 0 0 0 1.564 3.79c1.043 1.023 2.557 1.668 4.461 1.716l.975.025v13.245c0 .267.286.706.949.732c.666.026 1.018-.397 1.048-.68L21.975 32h4.05l.978 9.32c.03.282.382.705 1.048.679c.663-.026.949-.465.949-.732V19.248l1.414.643c1.103.501 1.82 1.14 2.294 1.715c.52.633 1.014 1.499 1.143 2.451l.002.02l.002.016c.052.512.54.954 1.166.903c.6-.048 1.027-.566.983-1.079a5.2 5.2 0 0 0-.264-1.148a7.4 7.4 0 0 0-1.318-2.375C32.964 18.622 30.295 17 25.576 17zm-6.034.285c1.5-1.462 3.6-2.285 6.034-2.285h7.32c5.225 0 8.498 1.822 10.392 4.123a9.4 9.4 0 0 1 1.672 3.016c.16.484.304 1.024.356 1.598v.004c.153 1.727-1.217 3.12-2.814 3.249c-1.636.131-3.136-1.025-3.314-2.676c-.066-.464-.334-.987-.704-1.437a4 4 0 0 0-.163-.185v18.575c0 1.585-1.396 2.672-2.87 2.73c-1.47.058-2.952-.906-3.116-2.47L24.224 34h-.448l-.79 7.528c-.164 1.563-1.646 2.527-3.116 2.47c-1.474-.058-2.87-1.146-2.87-2.731v-11.34c-1.925-.23-3.59-.995-4.837-2.22A7.2 7.2 0 0 1 10 22.472a7.34 7.34 0 0 1 2.22-5.186M19 18.957v7.083l-1.044-.046c-1.326-.06-2.237-.51-2.825-1.087a3.3 3.3 0 0 1-.974-2.398a3.4 3.4 0 0 1 1.022-2.414c.597-.581 1.499-1.027 2.773-1.088zm-2 2.281a1.41 1.41 0 0 0-.843 1.291c-.004.384.137.718.375.95c.094.093.242.207.468.304zM24 6a3 3 0 1 0 0 6a3 3 0 0 0 0-6m-5 3a5 5 0 1 1 10 0a5 5 0 0 1-10 0"></svg:path></svg:g>`,
})
export class HealthiconsOldManOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsOldManOutline24pxIcon],svg[healthicons-old-man-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M13 4.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0"></svg:path><svg:path fill-rule="evenodd" d="M16.196 12.48a1 1 0 0 1-1.177-.784c-.17-.85-.629-1.227-1.23-1.442a3 3 0 0 0-.289-.088V20.93a1.071 1.071 0 0 1-2.131.151L10.643 16h-.286l-.726 5.08a1.071 1.071 0 0 1-2.131-.15V15a3.5 3.5 0 1 1 0-7H12v.002c.702.01 1.617.067 2.461.369c1.149.41 2.19 1.283 2.52 2.933a1 1 0 0 1-.785 1.177M7.5 10a1.5 1.5 0 0 0 0 3z" clip-rule="evenodd"></svg:path><svg:path d="M17 14.4c0-.223.087-.365.213-.466a.9.9 0 0 1 .537-.184c.187 0 .392.067.537.184a.56.56 0 0 1 .213.466V21a.75.75 0 0 0 1.5 0v-6.6c0-.71-.32-1.269-.771-1.634a2.4 2.4 0 0 0-1.479-.516c-.5 0-1.045.166-1.479.516A2.06 2.06 0 0 0 15.5 14.4a.75.75 0 0 0 1.5 0"></svg:path></svg:g>`,
})
export class HealthiconsOldManOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsOldWomanIcon],svg[healthicons-old-woman-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M32 28a3 3 0 1 1 6 0v15a1 1 0 1 1-2 0V28a1 1 0 1 0-2 0v.343a1 1 0 1 1-2 0z"></svg:path><svg:path d="M22 13a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9m-10.081 4.001C13.21 15.741 15.049 15 17.255 15h7.32c4.973 0 7.944 1.722 9.62 3.759a8.4 8.4 0 0 1 1.494 2.695c.146.44.26.893.309 1.353v.015l.002.006v.006c.095 1.1-.755 2.067-1.899 2.16c-1.134.09-2.132-.714-2.241-1.801v-.002l-.015-.086a4 4 0 0 0-.115-.434a4.5 4.5 0 0 0-.795-1.43c-.614-.746-1.777-1.682-4.066-2.065q.013.091.013.187c0 2.43 2.883 13.139 3.824 16.573a.994.994 0 0 1-.802 1.246c-6.004.963-9.8.995-15.806.006a.993.993 0 0 1-.795-1.251c.457-1.62 1.357-4.862 2.168-8.105c-1.447-.284-2.673-.92-3.607-1.838A6.2 6.2 0 0 1 10 21.481A6.34 6.34 0 0 1 11.92 17m2.958 2.81c.427-.416 1.137-.79 2.28-.81q-.04.173-.04.362c0 .906-.294 2.588-.725 4.567c-.754-.13-1.246-.428-1.56-.737a2.3 2.3 0 0 1-.675-1.674a2.4 2.4 0 0 1 .72-1.708M16.5 39.015v3.482a1.5 1.5 0 0 0 2.95.383l.915-3.46a38 38 0 0 1-3.865-.405m7.134.398l.916 3.467a1.5 1.5 0 0 0 2.95-.383v-3.496c-1.365.207-2.63.346-3.866.412"></svg:path></svg:g>`,
})
export class HealthiconsOldWomanIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsOldWoman24pxIcon],svg[healthicons-old-woman-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.5 4.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0M7 21v-2l2 .25V21a1 1 0 1 1-2 0m4-1.75V21a1 1 0 1 0 2 0v-2zm5.196-6.77a1 1 0 0 1-1.177-.784c-.17-.85-.629-1.227-1.23-1.442c-.437-.156-.93-.216-1.431-.24L15 17.5s-2.817.5-5 .5s-5-.5-5-.5l1.001-2.836A3.5 3.5 0 0 1 7.5 8H12v.002c.702.01 1.617.067 2.461.369c1.149.41 2.19 1.283 2.52 2.933a1 1 0 0 1-.785 1.177M7.647 10H7.5a1.5 1.5 0 0 0-.825 2.753zM17 14.4c0-.223.087-.365.213-.466a.9.9 0 0 1 .537-.184c.187 0 .392.067.537.184a.56.56 0 0 1 .213.466V21a.75.75 0 0 0 1.5 0v-6.6c0-.71-.32-1.269-.771-1.634a2.4 2.4 0 0 0-1.479-.516c-.5 0-1.045.166-1.479.516A2.06 2.06 0 0 0 15.5 14.4a.75.75 0 0 0 1.5 0" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsOldWoman24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsOldWomanNegativeIcon],svg[healthicons-old-woman-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsOldWomanNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM35 25a3 3 0 0 0-3 3v.343a1 1 0 1 0 2 0V28a1 1 0 1 1 2 0v15a1 1 0 1 0 2 0V28a3 3 0 0 0-3-3M22 13a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9m-10.081 4.001C13.21 15.741 15.049 15 17.255 15h7.32c4.973 0 7.944 1.722 9.62 3.759a8.4 8.4 0 0 1 1.494 2.695c.146.44.26.893.309 1.353v.015l.002.006v.006c.095 1.1-.755 2.067-1.899 2.16c-1.134.09-2.132-.714-2.241-1.801v-.002l-.015-.086a4 4 0 0 0-.115-.434a4.5 4.5 0 0 0-.795-1.43c-.614-.746-1.777-1.682-4.066-2.065q.013.091.013.187c0 2.43 2.883 13.139 3.824 16.573a.994.994 0 0 1-.802 1.246c-6.004.963-9.8.995-15.806.006a.993.993 0 0 1-.795-1.251c.457-1.62 1.357-4.862 2.168-8.105c-1.447-.284-2.673-.92-3.607-1.838A6.2 6.2 0 0 1 10 21.481A6.34 6.34 0 0 1 11.92 17m2.958 2.81c.427-.416 1.137-.79 2.28-.81q-.04.173-.04.362c0 .906-.294 2.588-.725 4.567c-.754-.13-1.246-.428-1.56-.737a2.3 2.3 0 0 1-.675-1.674a2.4 2.4 0 0 1 .72-1.708M16.5 42.497v-3.482c1.364.209 2.63.343 3.864.405l-.914 3.46a1.5 1.5 0 0 1-2.95-.383m8.05.383l-.916-3.467a40 40 0 0 0 3.866-.412v3.496a1.5 1.5 0 0 1-2.95.383" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsOldWomanNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsOldWomanNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsOldWomanOutlineIcon],svg[healthicons-old-woman-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M17.5 9a5 5 0 1 1 10 0a5 5 0 0 1-10 0m5-3a3 3 0 1 0 0 6a3 3 0 0 0 0-6" clip-rule="evenodd"></svg:path><svg:path d="m18.165 19.46l-.172 1.173c-.165 1.125-.483 2.605-.865 4.186l-.312 1.293l-1.155-.658a3.3 3.3 0 0 1-.731-.56c-.625-.639-.942-1.501-.934-2.384a3.46 3.46 0 0 1 .98-2.4c.333-.339.774-.466 1.06-.526c.32-.067.658-.089.943-.096z"></svg:path><svg:path fill-rule="evenodd" d="M12.132 17.3c1.448-1.469 3.48-2.3 5.842-2.3h7.037c5.046 0 8.208 1.833 10.03 4.138c.996 1.259 1.774 2.874 1.945 4.57v.008l.002.018v.009l.001.002v.006l.003.03v.003c.044.61-.097 1.19-.377 1.687A3 3 0 0 1 38 28v15a1 1 0 0 1-2 0V28a1 1 0 0 0-2 0v.343a1 1 0 0 1-2 0V28c0-.532.138-1.031.381-1.464a2.6 2.6 0 0 1-.542-.519c-.439-.554-.662-1.268-.817-1.767L31 24.183l-.066-.208a3.6 3.6 0 0 0-.595-1.113c-.34-.43-.957-1.011-2.132-1.41c.77 3.812 2.672 10.531 3.439 13.189a1.993 1.993 0 0 1-1.618 2.524c-6.076.924-9.971.956-16.059.006a1.993 1.993 0 0 1-1.604-2.539c.357-1.203.964-3.28 1.588-5.555a7.3 7.3 0 0 1-1.877-1.383c-1.429-1.459-2.094-3.37-2.077-5.223a7.46 7.46 0 0 1 2.132-5.172m22.86 6.58l.002.07v.033l.005.061a1 1 0 0 1-.914.953c-.25.02-.388-.015-.464-.047a.53.53 0 0 1-.214-.173c-.184-.233-.311-.596-.497-1.192l-.07-.218a5.6 5.6 0 0 0-.931-1.746c-.772-.976-2.18-2.085-4.801-2.475l-1.323-.197l.185 1.324c.476 3.403 2.894 11.938 3.753 14.916c-5.88.894-9.568.923-15.438.006c.403-1.356 1.12-3.813 1.825-6.421l.237-.878l-.851-.32a5.4 5.4 0 0 1-1.99-1.282C12.479 25.246 11.987 23.86 12 22.49a5.46 5.46 0 0 1 1.556-3.787c1.037-1.05 2.54-1.703 4.418-1.703h7.037c4.512 0 7.064 1.611 8.462 3.379c.806 1.02 1.39 2.273 1.52 3.5" clip-rule="evenodd"></svg:path><svg:path d="M17.801 43.874a1.5 1.5 0 0 1-1.3-1.486v-3.374c1.364.203 2.63.333 3.867.393l-.92 3.375a1.5 1.5 0 0 1-1.647 1.092m6.752-1.092L23.63 39.4a41 41 0 0 0 3.87-.4v3.388a1.5 1.5 0 0 1-2.948.394"></svg:path></svg:g>`,
})
export class HealthiconsOldWomanOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsOldWomanOutline24pxIcon],svg[healthicons-old-woman-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.5 4.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0M7 21v-2l2 .25V21a1 1 0 1 1-2 0m4-1.75V21a1 1 0 1 0 2 0v-2zm5.196-6.77a1 1 0 0 1-1.177-.784c-.17-.85-.629-1.227-1.23-1.442c-.437-.156-.93-.216-1.431-.24L15 17.5s-2.817.5-5 .5s-5-.5-5-.5l1.001-2.836A3.5 3.5 0 0 1 7.5 8H12v.002c.702.01 1.617.067 2.461.369c1.149.41 2.19 1.283 2.52 2.933a1 1 0 0 1-.785 1.177M7.647 10H7.5a1.5 1.5 0 0 0-.825 2.753zM17 14.4c0-.223.087-.365.213-.466a.9.9 0 0 1 .537-.184c.187 0 .392.067.537.184a.56.56 0 0 1 .213.466V21a.75.75 0 0 0 1.5 0v-6.6c0-.71-.32-1.269-.771-1.634a2.4 2.4 0 0 0-1.479-.516c-.5 0-1.045.166-1.479.516A2.06 2.06 0 0 0 15.5 14.4a.75.75 0 0 0 1.5 0" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsOldWomanOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsOncologyIcon],svg[healthicons-oncology-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6 9a3 3 0 0 1 3-3h30a3 3 0 0 1 3 3v30a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3zm13.28 18.133l4.02 5.196l-4.02 5.133l-5.073-3.896zm-.186-15.525l-2.165 2.845c-1.732 2.289-1.732 5.443 0 7.67l12.061 15.34L34 33.565l-4.824-6.186l-5.815-7.422l-2.474-2.154c.433-.248.928-.433 1.423-.433h3.65c.494 0 .989.123 1.422.37c0 .063.062.063.062.063l-2.474 2.154l4.02 5.196l2.35-2.97c1.732-2.226 1.732-5.38 0-7.669l-2.226-2.907c-.371-.495-.866-.928-1.423-1.175c-.557-.31-1.175-.433-1.794-.433H22.31c-1.237 0-2.412.618-3.216 1.608m.927 4.113c-.015-.03-.03-.062-.062-.092c-.68-.99-.556-1.35.124-2.279c.557-.68 1.361-1.113 2.227-1.113h3.587c.433 0 .866.124 1.237.31c.372.185.743.494.99.803c.31.372.495.805.557 1.237c.13.523.046.611-.166.834a3 3 0 0 0-.33.393c-.061-.03-.138-.077-.216-.124c-.077-.046-.154-.092-.216-.123c-.557-.31-1.175-.433-1.794-.433h-3.587c-.619 0-1.237.185-1.794.433c-.186.062-.371.123-.495.247c-.03-.03-.046-.062-.062-.093" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsOncologyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsOncologyNegativeIcon],svg[healthicons-oncology-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsOncologyNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM9 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3zm14.3 26.329l-4.02-5.196l-5.073 6.433l5.072 3.896zm-6.371-17.876l2.165-2.845c.804-.99 1.979-1.608 3.216-1.608h3.587c.619 0 1.237.124 1.794.433c.557.247 1.052.68 1.423 1.175l2.226 2.907c1.732 2.289 1.732 5.443 0 7.67l-2.35 2.969l-4.02-5.196l2.474-2.154s-.062 0-.062-.062a2.9 2.9 0 0 0-1.423-.371h-3.65c-.494 0-.989.185-1.422.433l2.474 2.154l5.814 7.423L34 33.566l-5.01 3.896l-12.061-15.339c-1.732-2.227-1.732-5.381 0-7.67m3.03 1.176c.032.03.047.061.062.092c.016.031.031.062.062.093c.124-.124.31-.185.495-.247c.557-.248 1.175-.433 1.794-.433h3.587c.619 0 1.237.123 1.794.433c.062.03.14.077.216.123c.078.047.155.093.217.124c.128-.183.24-.3.329-.393c.212-.223.296-.31.166-.834a2.5 2.5 0 0 0-.557-1.237a3.15 3.15 0 0 0-.99-.804a2.8 2.8 0 0 0-1.237-.309H22.31c-.866 0-1.67.433-2.227 1.113c-.68.928-.804 1.289-.123 2.279" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsOncologyNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsOncologyNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsOncologyOutlineIcon],svg[healthicons-oncology-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M39 8H9a1 1 0 0 0-1 1v30a1 1 0 0 0 1 1h30a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1M9 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3z" clip-rule="evenodd"></svg:path><svg:path d="m19.28 27.133l4.02 5.196l-4.02 5.133l-5.073-3.896zm-2.351-12.68l2.165-2.845c.804-.99 1.979-1.608 3.216-1.608h3.587c.619 0 1.237.124 1.794.433c.557.247 1.052.68 1.423 1.175l2.226 2.907c1.732 2.289 1.732 5.443 0 7.67l-2.35 2.969l-4.02-5.196l2.474-2.154s-.062 0-.062-.062a2.9 2.9 0 0 0-1.423-.371h-3.65c-.494 0-.989.185-1.422.433l2.474 2.154l5.814 7.423L34 33.566l-5.01 3.896l-12.061-15.339c-1.732-2.227-1.732-5.381 0-7.67m3.03 1.176c.062.061.062.123.124.185c.124-.124.31-.185.495-.247c.557-.248 1.175-.433 1.794-.433h3.587c.619 0 1.237.123 1.794.433c.124.062.31.185.433.247c.433-.618.68-.484.495-1.227a2.5 2.5 0 0 0-.557-1.237a3.15 3.15 0 0 0-.99-.804a2.8 2.8 0 0 0-1.237-.309H22.31c-.866 0-1.67.433-2.227 1.113c-.68.928-.804 1.289-.123 2.279"></svg:path></svg:g>`,
})
export class HealthiconsOncologyOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsOpenmrsLogoIcon],svg[healthicons-openmrs-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M24.012 12.354c-3.22 0-6.135 1.305-8.244 3.414L15.76 8.08C18.228 6.808 21.044 6 24.012 6c2.966 0 5.767.718 8.234 1.989l-.008 7.763a11.62 11.62 0 0 0-8.226-3.398m-.017 23.292c3.22 0 6.133-1.304 8.242-3.413l-.006 7.778A17.9 17.9 0 0 1 23.995 42a17.94 17.94 0 0 1-8.236-1.99l.009-7.763a11.63 11.63 0 0 0 8.228 3.398m-8.228-3.413a11.62 11.62 0 0 1-3.414-8.241c0-3.212 1.299-6.119 3.399-8.228l-7.763-.008A17.94 17.94 0 0 0 6 23.992c0 2.967.718 5.768 1.99 8.236zM35.647 24a11.62 11.62 0 0 0-3.414-8.243l7.778.006A17.94 17.94 0 0 1 42.001 24c0 2.967-.718 5.767-1.99 8.235l-7.763-.009A11.62 11.62 0 0 0 35.647 24" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsOpenmrsLogoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsOpenmrsLogoNegativeIcon],svg[healthicons-openmrs-logo-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsOpenmrsLogoNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM15.768 15.768a11.62 11.62 0 0 1 8.244-3.414a11.62 11.62 0 0 1 8.226 3.398l.008-7.763A17.9 17.9 0 0 0 24.012 6c-2.968 0-5.784.808-8.253 2.08zm16.47 16.465a11.62 11.62 0 0 1-8.242 3.413c-3.212 0-6.12-1.298-8.228-3.398l-.009 7.763a17.94 17.94 0 0 0 8.237 1.99a17.9 17.9 0 0 0 8.235-1.99zm-19.885-8.241c0 3.22 1.305 6.133 3.414 8.241l-7.778-.005A17.9 17.9 0 0 1 6 23.992c0-2.968.718-5.768 1.989-8.236l7.763.008a11.63 11.63 0 0 0-3.399 8.228m19.88-8.236a11.62 11.62 0 0 1 3.414 8.243c0 3.211-1.299 6.12-3.399 8.226l7.763.009a17.9 17.9 0 0 0 1.99-8.235a17.9 17.9 0 0 0-1.99-8.237z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsOpenmrsLogoNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsOpenmrsLogoNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsOpenmrsLogoOutlineIcon],svg[healthicons-openmrs-logo-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15.301 7.192C17.89 5.858 20.861 5 24.011 5c3.13 0 6.088.758 8.693 2.1a1 1 0 0 1 .542.89l-.007 6.767l6.773.005a1 1 0 0 1 .888.542a18.94 18.94 0 0 1 2.1 8.695c0 3.13-.757 6.087-2.1 8.693a1 1 0 0 1-.89.542l-6.774-.008l-.005 6.785a1 1 0 0 1-.542.889a18.9 18.9 0 0 1-8.693 2.1c-3.131 0-6.088-.757-8.694-2.1a1 1 0 0 1-.543-.89l.008-6.777l-6.778-.005a1 1 0 0 1-.889-.542A18.9 18.9 0 0 1 5 23.992c0-3.131.758-6.087 2.1-8.694a1 1 0 0 1 .89-.542l6.777.007l-.008-6.681a1 1 0 0 1 .542-.89m-1.68 9.57l-5.01-.006A16.95 16.95 0 0 0 7 23.993c0 2.59.578 5.042 1.611 7.237l5.017.003a12.6 12.6 0 0 1-2.275-7.24c0-2.688.84-5.18 2.267-7.23m2.943 14.867a1 1 0 0 0-.09-.103a10.62 10.62 0 0 1-3.12-7.534c0-2.881 1.141-5.493 2.998-7.413a1 1 0 0 0 .123-.104a10.62 10.62 0 0 1 7.537-3.121a10.62 10.62 0 0 1 7.442 3.029a1 1 0 0 0 .072.08A10.62 10.62 0 0 1 34.645 24c0 2.915-1.168 5.555-3.064 7.478l-.052.049a10.62 10.62 0 0 1-7.535 3.12c-2.89 0-5.51-1.149-7.431-3.017m.201 2.75l-.005 5.01A16.9 16.9 0 0 0 23.995 41c2.59 0 5.043-.578 7.237-1.611l.003-5.017a12.6 12.6 0 0 1-7.24 2.274c-2.687 0-5.18-.838-7.23-2.266m17.616-3.151l5.009.005A16.9 16.9 0 0 0 41 24c0-2.59-.578-5.042-1.611-7.238l-5.017-.003A12.6 12.6 0 0 1 36.647 24c0 2.687-.838 5.18-2.266 7.229M31.24 13.62l.005-5.01A16.9 16.9 0 0 0 24.012 7c-2.573 0-5.04.648-7.252 1.7l.006 4.931a12.6 12.6 0 0 1 7.246-2.277c2.687 0 5.18.838 7.228 2.266" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsOpenmrsLogoOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsOpthalmologyIcon],svg[healthicons-opthalmology-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3zm15.04 9C30.75 15 39 24 39 24s-8.25 9-14.96 9S9 24 9 24s8.329-9 15.04-9m-12.21 9a44 44 0 0 1 3.394-2.916c.516-.397 1.053-.79 1.605-1.166A8.2 8.2 0 0 0 15.75 24a8.2 8.2 0 0 0 1.079 4.082a34 34 0 0 1-1.605-1.166A44 44 0 0 1 11.83 24m20.42 0a8.2 8.2 0 0 0-1.111-4.138c.575.391 1.135.802 1.671 1.218A43 43 0 0 1 36.183 24a43 43 0 0 1-3.373 2.92c-.536.416-1.096.827-1.671 1.218A8.2 8.2 0 0 0 32.25 24M24 30.25a6.25 6.25 0 1 0 0-12.5a6.25 6.25 0 0 0 0 12.5M27.75 24a3.75 3.75 0 1 1-1.311-2.849a1.125 1.125 0 1 0 .41.41c.562.656.901 1.508.901 2.439" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsOpthalmologyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsOpthalmologyNegativeIcon],svg[healthicons-opthalmology-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsOpthalmologyNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM6 9a3 3 0 0 1 3-3h30a3 3 0 0 1 3 3v30a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3zm33 15s-8.25-9-14.96-9S9 24 9 24s8.329 9 15.04 9S39 24 39 24m-23.776-2.916A44 44 0 0 0 11.83 24a44 44 0 0 0 3.394 2.916c.516.397 1.053.79 1.605 1.166A8.2 8.2 0 0 1 15.75 24a8.2 8.2 0 0 1 1.079-4.082c-.552.376-1.09.769-1.605 1.166m15.915-1.222A8.2 8.2 0 0 1 32.25 24a8.2 8.2 0 0 1-1.111 4.138a34 34 0 0 0 1.671-1.218A43 43 0 0 0 36.183 24a43 43 0 0 0-3.373-2.92a34 34 0 0 0-1.671-1.218M30.25 24a6.25 6.25 0 1 1-12.5 0a6.25 6.25 0 0 1 12.5 0M24 27.75a3.75 3.75 0 0 0 2.849-6.189a1.125 1.125 0 1 1-.41-.41A3.75 3.75 0 1 0 24 27.75" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsOpthalmologyNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsOpthalmologyNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsOpthalmologyOutlineIcon],svg[healthicons-opthalmology-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M27.5 24.4a3.5 3.5 0 1 1-1.224-2.658a1.05 1.05 0 1 0 .382.382c.525.612.842 1.407.842 2.276"></svg:path><svg:path fill-rule="evenodd" d="M24.037 16C30.3 16 38 24.4 38 24.4s-7.7 8.4-13.963 8.4S10 24.4 10 24.4S17.774 16 24.037 16m-11.202 8.4a41 41 0 0 1 3.055-2.615q.62-.479 1.276-.936A7.7 7.7 0 0 0 16.3 24.4c0 1.28.313 2.488.866 3.55a32 32 0 0 1-1.276-.934a41 41 0 0 1-3.055-2.616m18.865 0c0-1.3-.322-2.526-.892-3.6c.457.317.903.647 1.334.98a40 40 0 0 1 3.036 2.62a40 40 0 0 1-3.036 2.62c-.43.333-.877.663-1.334.98c.57-1.074.892-2.3.892-3.6M24 30.1a5.7 5.7 0 1 0 0-11.4a5.7 5.7 0 0 0 0 11.4" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M6 9a3 3 0 0 1 3-3h30a3 3 0 0 1 3 3v30a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3zm2 0a1 1 0 0 1 1-1h30a1 1 0 0 1 1 1v30a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsOpthalmologyOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsOralContraceptionPillsx21Icon],svg[healthicons-oral-contraception-pillsx21-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.028 33.899a4 4 0 0 1 0-5.657L28.242 7.029a4 4 0 0 1 5.656 0l7.071 7.07a4 4 0 0 1 0 5.657L19.756 40.97a4 4 0 0 1-5.656 0zm9.9-9.193a1.25 1.25 0 1 1-1.767 1.768a1.25 1.25 0 0 1 1.767-1.768M19.403 24a1.25 1.25 0 1 0-1.768-1.768A1.25 1.25 0 0 0 19.403 24m2.475-4.243a1.25 1.25 0 1 1-1.768 1.768a1.25 1.25 0 0 1 1.768-1.768m2.475-.707a1.25 1.25 0 1 0-1.769-1.767a1.25 1.25 0 0 0 1.769 1.767m2.474-4.242a1.25 1.25 0 1 1-1.767 1.767a1.25 1.25 0 0 1 1.767-1.767m2.475-.707a1.25 1.25 0 1 0-1.768-1.768a1.25 1.25 0 0 0 1.768 1.768m3.182 1.414a1.25 1.25 0 1 1-1.768 1.768a1.25 1.25 0 0 1 1.768-1.768M14.454 28.95a1.25 1.25 0 1 0-1.769-1.768a1.25 1.25 0 0 0 1.768 1.768m-2.83 1.06l-.53 2.299l-1.767-1.768zm11.668 2.829a1.25 1.25 0 1 0-1.768-1.768a1.25 1.25 0 0 0 1.768 1.768m2.475-4.243a1.25 1.25 0 1 1-1.768 1.768a1.25 1.25 0 0 1 1.768-1.768m2.475-.707a1.25 1.25 0 1 0-1.768-1.768a1.25 1.25 0 0 0 1.768 1.768m2.475-4.243a1.25 1.25 0 1 1-1.768 1.768a1.25 1.25 0 0 1 1.768-1.768m2.474-.707a1.25 1.25 0 1 0-1.768-1.767a1.25 1.25 0 0 0 1.768 1.767m2.475-4.242a1.25 1.25 0 1 1-1.767 1.767a1.25 1.25 0 0 1 1.767-1.767m-3.889-7.071a1.25 1.25 0 1 0-1.767-1.768a1.25 1.25 0 0 0 1.767 1.768m6.364 4.596a1.25 1.25 0 1 1-1.768 1.768a1.25 1.25 0 0 1 1.768-1.768m-3.182-1.414a1.25 1.25 0 1 0-1.768-1.768a1.25 1.25 0 0 0 1.768 1.768M20.817 33.545a1.25 1.25 0 1 1-1.768 1.768a1.25 1.25 0 0 1 1.768-1.768m-2.475 4.243a1.25 1.25 0 1 0-1.768-1.768a1.25 1.25 0 0 0 1.768 1.768m-3.182-4.95a1.25 1.25 0 1 1-1.767 1.768a1.25 1.25 0 0 1 1.767-1.768m2.475-.707a1.25 1.25 0 1 0-1.768-1.768a1.25 1.25 0 0 0 1.768 1.768" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsOralContraceptionPillsx21Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsOralContraceptionPillsx21NegativeIcon],svg[healthicons-oral-contraception-pillsx21-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsOralContraceptionPillsx21Negative0)"><svg:path d="M16.928 24.706a1.25 1.25 0 1 1-1.768 1.768a1.25 1.25 0 0 1 1.768-1.768m2.475-.707a1.25 1.25 0 1 0-1.768-1.768A1.25 1.25 0 0 0 19.403 24m2.475-4.244a1.25 1.25 0 1 1-1.768 1.768a1.25 1.25 0 0 1 1.768-1.768m2.475-.706a1.25 1.25 0 1 0-1.768-1.768a1.25 1.25 0 0 0 1.767 1.767m2.475-4.242a1.25 1.25 0 1 1-1.767 1.767a1.25 1.25 0 0 1 1.767-1.767m2.475-.707a1.25 1.25 0 1 0-1.768-1.768a1.25 1.25 0 0 0 1.768 1.768m3.182 1.414a1.25 1.25 0 1 1-1.768 1.768a1.25 1.25 0 0 1 1.768-1.768M14.453 28.949a1.25 1.25 0 1 0-1.768-1.768a1.25 1.25 0 0 0 1.768 1.768m-2.828 1.061l-.53 2.297l-1.769-1.767zm11.667 2.828a1.25 1.25 0 1 0-1.768-1.768a1.25 1.25 0 0 0 1.768 1.768m2.475-4.243a1.25 1.25 0 1 1-1.768 1.768a1.25 1.25 0 0 1 1.768-1.768m2.475-.707a1.25 1.25 0 1 0-1.768-1.768a1.25 1.25 0 0 0 1.768 1.768m2.475-4.242a1.25 1.25 0 1 1-1.768 1.767a1.25 1.25 0 0 1 1.767-1.768m2.475-.707a1.25 1.25 0 1 0-1.767-1.767a1.25 1.25 0 0 0 1.767 1.767m2.475-4.242a1.25 1.25 0 1 1-1.768 1.767a1.25 1.25 0 0 1 1.768-1.767m-3.889-7.071a1.25 1.25 0 1 0-1.768-1.768a1.25 1.25 0 0 0 1.768 1.768m6.364 4.595a1.25 1.25 0 1 1-1.768 1.769a1.25 1.25 0 0 1 1.768-1.768m-3.181-1.414a1.25 1.25 0 1 0-1.769-1.768a1.25 1.25 0 0 0 1.768 1.768M20.817 33.545a1.25 1.25 0 1 1-1.768 1.768a1.25 1.25 0 0 1 1.768-1.768m-2.475 4.243a1.25 1.25 0 1 0-1.768-1.768a1.25 1.25 0 0 0 1.768 1.768m-3.182-4.95a1.25 1.25 0 1 1-1.768 1.768a1.25 1.25 0 0 1 1.768-1.768m2.475-.708a1.25 1.25 0 1 0-1.767-1.767a1.25 1.25 0 0 0 1.767 1.768"></svg:path><svg:path fill-rule="evenodd" d="M0 0h48v48H0zm7.028 33.899a4 4 0 0 1 0-5.657L28.242 7.028a4 4 0 0 1 5.656 0L40.97 14.1a4 4 0 0 1 0 5.656L19.756 40.97a4 4 0 0 1-5.657 0z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsOralContraceptionPillsx21Negative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsOralContraceptionPillsx21NegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsOralContraceptionPillsx21OutlineIcon],svg[healthicons-oral-contraception-pillsx21-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M29.656 8.442L8.443 29.656a2 2 0 0 0 0 2.828l7.07 7.071a2 2 0 0 0 2.83 0l21.212-21.213a2 2 0 0 0 0-2.828l-7.07-7.072a2 2 0 0 0-2.83 0m-22.628 19.8a4 4 0 0 0 0 5.656L14.1 40.97a4 4 0 0 0 5.656 0L40.97 19.756a4 4 0 0 0 0-5.657l-7.071-7.07a4 4 0 0 0-5.657 0z" clip-rule="evenodd"></svg:path><svg:path d="M16.928 24.706a1.25 1.25 0 1 1-1.768 1.768a1.25 1.25 0 0 1 1.768-1.768m2.475-2.475A1.25 1.25 0 1 1 17.635 24a1.25 1.25 0 0 1 1.768-1.768m2.475-2.476a1.25 1.25 0 1 1-1.768 1.768a1.25 1.25 0 0 1 1.768-1.768m2.475-2.475a1.25 1.25 0 1 1-1.769 1.768a1.25 1.25 0 0 1 1.769-1.768m2.474-2.475a1.25 1.25 0 1 1-1.767 1.768a1.25 1.25 0 0 1 1.767-1.768m2.475-2.474a1.25 1.25 0 1 1-1.767 1.767a1.25 1.25 0 0 1 1.767-1.767m3.182 3.182a1.25 1.25 0 1 1-1.768 1.767a1.25 1.25 0 0 1 1.768-1.767M14.453 27.18a1.25 1.25 0 1 1-1.768 1.769a1.25 1.25 0 0 1 1.768-1.768m-2.828 2.829l-.53 2.297l-1.768-1.767zm11.667 1.06a1.25 1.25 0 1 1-1.768 1.768a1.25 1.25 0 0 1 1.768-1.768m2.475-2.475a1.25 1.25 0 1 1-1.768 1.768a1.25 1.25 0 0 1 1.768-1.768m2.475-2.475a1.25 1.25 0 1 1-1.768 1.768a1.25 1.25 0 0 1 1.768-1.768m2.475-2.475a1.25 1.25 0 1 1-1.768 1.768a1.25 1.25 0 0 1 1.767-1.768m2.475-2.475a1.25 1.25 0 1 1-1.767 1.768a1.25 1.25 0 0 1 1.767-1.768m2.475-2.474a1.25 1.25 0 1 1-1.768 1.767a1.25 1.25 0 0 1 1.768-1.768m-3.889-8.838a1.25 1.25 0 1 1-1.768 1.768a1.25 1.25 0 0 1 1.768-1.768m6.364 6.363a1.25 1.25 0 1 1-1.767 1.768a1.25 1.25 0 0 1 1.767-1.767m-3.181-3.182a1.25 1.25 0 1 1-1.769 1.767a1.25 1.25 0 0 1 1.768-1.767M20.817 33.545a1.25 1.25 0 1 1-1.767 1.767a1.25 1.25 0 0 1 1.767-1.767m-2.475 2.475a1.25 1.25 0 1 1-1.768 1.767a1.25 1.25 0 0 1 1.768-1.767m-3.182-3.182a1.25 1.25 0 1 1-1.768 1.767a1.25 1.25 0 0 1 1.768-1.767m2.475-2.475a1.25 1.25 0 1 1-1.768 1.768a1.25 1.25 0 0 1 1.768-1.768"></svg:path></svg:g>`,
})
export class HealthiconsOralContraceptionPillsx21OutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsOralContraceptionPillsx28Icon],svg[healthicons-oral-contraception-pillsx28-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M29.657 42.384a2 2 0 0 1-2.829 0L5.615 21.171a2 2 0 0 1 0-2.828L18.343 5.615a2 2 0 0 1 2.829 0l21.213 21.213a2 2 0 0 1 0 2.828zm-.707-6.364a1 1 0 1 0-1.414 1.415a1 1 0 0 0 1.414-1.415m-4.243-2.828a1 1 0 1 1 1.414 1.414a1 1 0 0 1-1.414-1.414m-1.414-2.829a1 1 0 1 0-1.414 1.415a1 1 0 0 0 1.414-1.415m-4.243-2.828a1 1 0 1 1 1.415 1.414a1 1 0 0 1-1.415-1.414m-1.414-2.829a1 1 0 1 0-1.414 1.415a1 1 0 0 0 1.414-1.415m-4.243-2.828a1 1 0 1 1 1.415 1.415a1 1 0 0 1-1.415-1.415M11.98 19.05a1 1 0 1 0-1.414 1.414a1 1 0 0 0 1.414-1.414m18.385 14.142a1 1 0 1 1 1.415 1.414a1 1 0 0 1-1.415-1.414m-1.414-2.829a1 1 0 1 0-1.414 1.415a1 1 0 0 0 1.414-1.415m-4.243-2.828a1 1 0 1 1 1.415 1.414a1 1 0 0 1-1.415-1.414m-1.414-2.829a1 1 0 1 0-1.414 1.415a1 1 0 0 0 1.414-1.415m-4.242-2.828a1 1 0 1 1 1.414 1.414a1 1 0 0 1-1.414-1.414m-1.415-2.828a1 1 0 1 0-1.414 1.414a1 1 0 0 0 1.414-1.414m-4.242-2.829a1 1 0 1 1 1.414 1.414a1 1 0 0 1-1.414-1.414m21.213 14.142a1 1 0 1 0-1.414 1.415a1 1 0 0 0 1.414-1.415m-4.242-2.828a1 1 0 1 1 1.414 1.413a1 1 0 0 1-1.415-1.413m-1.415-2.829a1 1 0 1 0-1.414 1.415a1 1 0 0 0 1.414-1.415m-4.242-2.828a1 1 0 1 1 1.414 1.414a1 1 0 0 1-1.415-1.414m-1.414-2.829a1 1 0 1 0-1.415 1.415a1 1 0 0 0 1.415-1.415m-4.243-2.828a1 1 0 1 1 1.414 1.414a1 1 0 0 1-1.414-1.414m-1.414-2.828a1 1 0 1 0-1.415 1.414a1 1 0 0 0 1.415-1.415m19.799 14.142a1 1 0 1 0-1.415 1.413a1 1 0 0 0 1.415-1.413m-4.243-2.829a1 1 0 1 1 1.414 1.414a1 1 0 0 1-1.414-1.414m-1.414-2.829a1 1 0 1 0-1.414 1.415a1 1 0 0 0 1.414-1.415m-4.243-2.828a1 1 0 1 1 1.414 1.415a1 1 0 0 1-1.414-1.415m-1.414-2.828a1 1 0 1 0-1.414 1.414a1 1 0 0 0 1.414-1.414m-4.242-2.829a1 1 0 1 1 1.414 1.414a1 1 0 0 1-1.415-1.414m-1.415-2.828a1 1 0 1 0-1.414 1.414a1 1 0 0 0 1.414-1.414"></svg:path><svg:path d="m26.132 38.86l2.11 2.11l2.103-2.102a3 3 0 0 1-4.213-.008m-.022-.022a3 3 0 0 1-.863-1.944a3 3 0 0 1-1.954-.874a3 3 0 0 1-.874-1.954a3 3 0 0 1-1.954-.874a3 3 0 0 1-.874-1.954a3 3 0 0 1-1.955-.875a3 3 0 0 1-.874-1.954a3 3 0 0 1-1.954-.874a3 3 0 0 1-.874-1.954a3 3 0 0 1-1.938-.857zM11.962 24.69a3 3 0 0 1-.857-1.938a3 3 0 0 1 0-5.99c.04-.712.331-1.412.874-1.955a3 3 0 0 1 1.955-.874c.04-.711.33-1.411.874-1.955a3 3 0 0 1 1.955-.874a3 3 0 0 1 5.062-2.008L19.757 7.03L7.03 19.757zm9.97-15.486a3 3 0 0 1 .822 1.9a3 3 0 0 1 1.892.814zm2.836 2.835a3 3 0 0 1 .814 1.893a3 3 0 0 1 1.9.822zm2.821 2.822c.51.535.783 1.212.821 1.9c.69.038 1.368.313 1.903.824zm2.826 2.825a3 3 0 0 1 .824 1.903c.686.038 1.361.31 1.896.817zm2.835 2.835c.507.535.78 1.21.817 1.897a3 3 0 0 1 1.899.82zm2.826 2.827a3 3 0 0 1 .82 1.898c.69.039 1.37.314 1.906.827zm2.82 2.82a3 3 0 0 1-.028 4.176l2.103-2.102zm-.065 4.214a3 3 0 0 1-1.936.855a3 3 0 0 1-.848 1.928zm-2.836 2.835a3 3 0 0 1-1.928.849a3 3 0 0 1-.851 1.93zm-2.826 2.827c-.54.528-1.23.812-1.93.85a3 3 0 0 1-.856 1.935zm-2.816-14.155a1 1 0 1 0 .012-.012zm-1.414-1.414l.011-.012l.012-.011a1 1 0 1 0-.023.023m-4.233-4.252a1 1 0 1 0 .004-.005m-1.419-1.41a1 1 0 0 1-1.412-1.416l.012-.011a1 1 0 0 1 1.403 1.425m-2.84-2.817a1 1 0 1 1 .011-.011zm-8.472 8.473a1 1 0 1 0-.005.004l.002-.002m.003-.002l-.003.002zm1.414 1.414a1 1 0 0 1 1.412 1.416l-.012.012a1 1 0 0 1-1.403-1.426m2.84 2.817l-.011.011l-.011.012a1 1 0 1 0 .022-.023m4.243 4.243a1 1 0 1 0-.023.023l.012-.012zm1.414 1.414l-.011.011l-.011.012a1 1 0 1 0 1.437 0l-.012-.012l-.012-.012a1 1 0 0 0-1.39.001m8.463-2.806a1 1 0 1 0 .023-.023l-.012.012zm-1.415-1.414l.012-.011l.012-.012a1 1 0 1 0-.023.023m-4.23-4.254a1 1 0 1 0 .002-.003m-2.842-2.814a1 1 0 0 0 1.423 1.405m-1.4-1.428l-.012.011l-.011.012m.023-.023a1 1 0 0 1 1.405 1.423m-4.257 1.428a1 1 0 1 0 .023-.022l-.011.01v.001zm-1.414-1.414l.011-.011l.012-.012a1 1 0 1 0-.023.023m2.829-2.829l.011-.01l.011-.012a1 1 0 1 0-.022.023m4.241 11.291l.012.012l.012.012a1 1 0 0 0 1.39 0l.013-.012l.011-.012a1 1 0 0 0-1.423-1.404m-1.414-1.415a1 1 0 1 0-.005.005m.005-.005l-.003.003zm4.252 4.234l-.012.011l-.012.012a1 1 0 1 0 .024-.023m-2.853-1.415a1 1 0 0 1 .012-1.402zm9.912-2.817a1 1 0 1 0-1.414-1.414a1 1 0 0 0 1.414 1.414m-7.071 11.315a1 1 0 1 0 1.414-1.415a1 1 0 0 0-1.414 1.415m-2.829-2.829a1 1 0 1 0 1.414-1.414a1 1 0 0 0-1.414 1.414m5.657 0a1 1 0 1 0 1.415-1.414a1 1 0 0 0-1.415 1.414m-16.97-16.97a1 1 0 1 0 1.414-1.415a1 1 0 0 0-1.414 1.414m19.799 14.141a1 1 0 1 0 1.414-1.414a1 1 0 0 0-1.414 1.414m-16.97-16.97a1 1 0 1 0 1.414-1.415a1 1 0 0 0-1.415 1.415M36.02 28.949a1 1 0 1 0 1.415-1.415a1 1 0 0 0-1.415 1.415m-9.193 13.435a2 2 0 0 0 2.829 0l12.728-12.728a2 2 0 0 0 0-2.828L21.172 5.615a2 2 0 0 0-2.829 0L5.615 18.343a2 2 0 0 0 0 2.828z"></svg:path></svg:g>`,
})
export class HealthiconsOralContraceptionPillsx28Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsOralContraceptionPillsx28NegativeIcon],svg[healthicons-oral-contraception-pillsx28-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsOralContraceptionPillsx28Negative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM26.828 42.385a2 2 0 0 0 2.829 0l12.728-12.728a2 2 0 0 0 0-2.829L21.172 5.615a2 2 0 0 0-2.829 0L5.615 18.343a2 2 0 0 0 0 2.828zm.708-6.364a1 1 0 1 1 1.414 1.414a1 1 0 0 1-1.414-1.414m-1.415-2.829a1 1 0 1 0-1.414 1.414a1 1 0 0 0 1.414-1.414m-4.242-2.829a1 1 0 1 1 1.414 1.415a1 1 0 0 1-1.414-1.415m-1.414-2.828a1 1 0 1 0-1.415 1.415a1 1 0 0 0 1.415-1.415m-4.243-2.828a1 1 0 1 1 1.414 1.414a1 1 0 0 1-1.414-1.414m-1.414-2.828a1 1 0 1 0-1.415 1.414a1 1 0 0 0 1.415-1.414m-4.243-2.829a1 1 0 1 1 1.414 1.414a1 1 0 0 1-1.414-1.414M31.78 33.192a1 1 0 1 0-1.415 1.414a1 1 0 0 0 1.415-1.414m-4.243-2.829a1 1 0 1 1 1.414 1.415a1 1 0 0 1-1.414-1.415m-1.415-2.828a1 1 0 1 0-1.414 1.415a1 1 0 0 0 1.415-1.415m-4.242-2.828a1 1 0 1 1 1.414 1.414a1 1 0 0 1-1.414-1.414m-1.414-2.829a1 1 0 1 0-1.414 1.415a1 1 0 0 0 1.414-1.415m-4.243-2.828a1 1 0 1 1 1.414 1.414a1 1 0 0 1-1.414-1.414m-1.414-2.829a1 1 0 1 0-1.414 1.415a1 1 0 0 0 1.414-1.415m18.385 14.142a1 1 0 1 1 1.414 1.415a1 1 0 0 1-1.414-1.415m-1.414-2.828a1 1 0 1 0-1.414 1.414a1 1 0 0 0 1.414-1.414m-4.243-2.828a1 1 0 1 1 1.414 1.414a1 1 0 0 1-1.414-1.414m-1.414-2.829a1 1 0 1 0-1.414 1.415a1 1 0 0 0 1.414-1.415m-4.243-2.828a1 1 0 1 1 1.415 1.414a1 1 0 0 1-1.415-1.414m-1.414-2.829a1 1 0 1 0-1.414 1.414a1 1 0 0 0 1.414-1.414m-4.243-2.828a1 1 0 1 1 1.415 1.414a1 1 0 0 1-1.415-1.414m19.8 14.142a1 1 0 1 1 1.414 1.414a1 1 0 0 1-1.415-1.414m-1.415-2.829a1 1 0 1 0-1.414 1.415a1 1 0 0 0 1.414-1.415m-4.242-2.828a1 1 0 1 1 1.414 1.414a1 1 0 0 1-1.414-1.414M28.95 19.05a1 1 0 1 0-1.414 1.414a1 1 0 0 0 1.414-1.414m-4.242-2.829a1 1 0 1 1 1.414 1.414a1 1 0 0 1-1.414-1.414m-1.414-2.829a1 1 0 1 0-1.415 1.414a1 1 0 0 0 1.415-1.414m-4.243-2.828a1 1 0 1 1 1.414 1.415a1 1 0 0 1-1.414-1.415" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsOralContraceptionPillsx28Negative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsOralContraceptionPillsx28NegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsOralContraceptionPillsx28OutlineIcon],svg[healthicons-oral-contraception-pillsx28-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="m8.444 21.172l18.384 18.384a2 2 0 0 0 2.829 0l9.9-9.9a2 2 0 0 0 0-2.828L21.171 8.444a2 2 0 0 0-2.829 0l-9.9 9.9a2 2 0 0 0 0 2.828m16.97 19.799a4 4 0 0 0 5.657 0l9.9-9.9a4 4 0 0 0 0-5.657L22.586 7.03a4 4 0 0 0-5.657 0l-9.9 9.899a4 4 0 0 0 0 5.657z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M28.95 36.02a1 1 0 1 0-1.414 1.415a1 1 0 0 0 1.414-1.414m-2.829-2.829a1 1 0 1 0-1.414 1.415a1 1 0 0 0 1.414-1.415m-2.828-2.828a1 1 0 1 0-1.414 1.414a1 1 0 0 0 1.414-1.414m-2.828-2.829a1 1 0 1 0-1.415 1.415a1 1 0 0 0 1.415-1.415m-2.829-2.828a1 1 0 1 0-1.414 1.414a1 1 0 0 0 1.414-1.414m-2.828-2.828a1 1 0 1 0-1.415 1.414a1 1 0 0 0 1.415-1.414M11.98 19.05a1 1 0 1 0-1.415 1.414a1 1 0 0 0 1.414-1.414m19.8 14.142a1 1 0 1 0-1.415 1.414a1 1 0 0 0 1.415-1.414m-2.829-2.828a1 1 0 1 0-1.414 1.414a1 1 0 0 0 1.414-1.415m-2.828-2.828a1 1 0 1 0-1.415 1.414a1 1 0 0 0 1.415-1.414m-2.829-2.828a1 1 0 1 0-1.414 1.413a1 1 0 0 0 1.414-1.413m-2.828-2.829a1 1 0 1 0-1.414 1.415a1 1 0 0 0 1.414-1.415m-2.829-2.828a1 1 0 1 0-1.414 1.414a1 1 0 0 0 1.414-1.414m-2.828-2.829a1 1 0 1 0-1.414 1.415a1 1 0 0 0 1.414-1.415m19.799 14.142a1 1 0 1 0-1.414 1.415a1 1 0 0 0 1.414-1.415m-2.828-2.828a1 1 0 1 0-1.414 1.414a1 1 0 0 0 1.414-1.414m-2.829-2.828a1 1 0 1 0-1.414 1.413a1 1 0 0 0 1.414-1.413m-2.828-2.829a1 1 0 1 0-1.414 1.415a1 1 0 0 0 1.414-1.415m-2.828-2.828a1 1 0 1 0-1.415 1.414a1 1 0 0 0 1.415-1.414m-2.829-2.829a1 1 0 1 0-1.414 1.415a1 1 0 0 0 1.414-1.415m-2.828-2.828a1 1 0 1 0-1.415 1.414a1 1 0 0 0 1.415-1.414" clip-rule="evenodd"></svg:path><svg:path d="M36.021 27.535a1 1 0 1 1 1.415 1.414a1 1 0 0 1-1.415-1.414"></svg:path><svg:path fill-rule="evenodd" d="M37.436 27.535a1 1 0 1 0-1.415 1.414a1 1 0 0 0 1.415-1.414" clip-rule="evenodd"></svg:path><svg:path d="M33.193 24.706a1 1 0 1 1 1.414 1.415a1 1 0 0 1-1.414-1.415"></svg:path><svg:path fill-rule="evenodd" d="M34.607 24.706a1 1 0 1 0-1.414 1.415a1 1 0 0 0 1.414-1.415" clip-rule="evenodd"></svg:path><svg:path d="M30.365 21.878a1 1 0 1 1 1.414 1.414a1 1 0 0 1-1.414-1.414"></svg:path><svg:path fill-rule="evenodd" d="M31.779 21.878a1 1 0 1 0-1.414 1.414a1 1 0 0 0 1.414-1.414" clip-rule="evenodd"></svg:path><svg:path d="M27.536 19.05a1 1 0 1 1 1.414 1.414a1 1 0 0 1-1.414-1.414"></svg:path><svg:path fill-rule="evenodd" d="M28.95 19.05a1 1 0 1 0-1.414 1.414a1 1 0 0 0 1.414-1.414" clip-rule="evenodd"></svg:path><svg:path d="M24.708 16.221a1 1 0 1 1 1.414 1.415a1 1 0 0 1-1.414-1.415"></svg:path><svg:path fill-rule="evenodd" d="M26.122 16.221a1 1 0 1 0-1.414 1.415a1 1 0 0 0 1.414-1.415" clip-rule="evenodd"></svg:path><svg:path d="M21.88 13.393a1 1 0 1 1 1.414 1.414a1 1 0 0 1-1.415-1.414"></svg:path><svg:path fill-rule="evenodd" d="M23.294 13.393a1 1 0 1 0-1.414 1.414a1 1 0 0 0 1.414-1.414" clip-rule="evenodd"></svg:path><svg:path d="M19.051 10.564a1 1 0 1 1 1.414 1.415a1 1 0 0 1-1.414-1.415"></svg:path><svg:path fill-rule="evenodd" d="M20.465 10.564a1 1 0 1 0-1.414 1.415a1 1 0 0 0 1.414-1.415" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsOralContraceptionPillsx28OutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsOrthopaedicsIcon],svg[healthicons-orthopaedics-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3zm8.25 5.938a.982.982 0 0 1 1.167-.958c4.191.784 6.973.794 11.165.003a.98.98 0 0 1 1.168.956c0 .534.433.966.966.966H32a1 1 0 0 1 1 1v.874a1 1 0 0 1-1 1h-.25a1 1 0 0 0-1 1v.387a.99.99 0 0 1-.746.962c-4.465 1.116-7.327 1.115-11.998-.006a.99.99 0 0 1-.756-.965v-.378a1 1 0 0 0-1-1H16a1 1 0 0 1-1-1v-.874a1 1 0 0 1 1-1h.282a.97.97 0 0 0 .968-.967m2.25.8a1 1 0 0 1 1 1v2.24a1 1 0 1 1-2 0v-2.24a1 1 0 0 1 1-1m-1.083 7.242a.982.982 0 0 0-1.167.958a.97.97 0 0 1-.968.967H16a1 1 0 0 0-1 1v.874a1 1 0 0 0 1 1h.25a1 1 0 0 1 1 1v.378a.99.99 0 0 0 .756.965c4.67 1.121 7.533 1.122 11.998.006a.99.99 0 0 0 .746-.962v-.387a1 1 0 0 1 1-1H32a1 1 0 0 0 1-1v-.874a1 1 0 0 0-1-1h-.284a.966.966 0 0 1-.966-.966a.98.98 0 0 0-1.168-.956c-4.192.79-6.974.781-11.165-.003m2.083 2.758a1 1 0 1 0-2 0v2.24a1 1 0 1 0 2 0zm-3.25 7.2a.982.982 0 0 1 1.167-.958c4.191.784 6.973.794 11.165.003a.98.98 0 0 1 1.168.956c0 .534.433.966.966.966H32a1 1 0 0 1 1 1v.874a1 1 0 0 1-1 1h-.25a1 1 0 0 0-1 1v.387a.99.99 0 0 1-.746.962c-4.465 1.116-7.327 1.115-11.998-.006a.99.99 0 0 1-.756-.965v-.378a1 1 0 0 0-1-1H16a1 1 0 0 1-1-1v-.874a1 1 0 0 1 1-1h.282a.97.97 0 0 0 .968-.967m2.25.8a1 1 0 0 1 1 1v2.24a1 1 0 1 1-2 0v-2.24a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsOrthopaedicsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsOrthopaedicsNegativeIcon],svg[healthicons-orthopaedics-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsOrthopaedicsNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM6 9a3 3 0 0 1 3-3h30a3 3 0 0 1 3 3v30a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3zm12.417 1.98a.982.982 0 0 0-1.167.958a.97.97 0 0 1-.968.967H16a1 1 0 0 0-1 1v.874a1 1 0 0 0 1 1h.25a1 1 0 0 1 1 1v.378a.99.99 0 0 0 .756.965c4.67 1.121 7.533 1.122 11.998.006a.99.99 0 0 0 .746-.962v-.387a1 1 0 0 1 1-1H32a1 1 0 0 0 1-1v-.874a1 1 0 0 0-1-1h-.284a.966.966 0 0 1-.966-.966a.98.98 0 0 0-1.168-.956c-4.192.79-6.974.781-11.165-.003m2.083 2.758a1 1 0 1 0-2 0v2.24a1 1 0 1 0 2 0zm-3.25 7.2a.982.982 0 0 1 1.167-.958c4.191.784 6.973.794 11.165.003a.98.98 0 0 1 1.168.956c0 .534.433.966.966.966H32a1 1 0 0 1 1 1v.874a1 1 0 0 1-1 1h-.25a1 1 0 0 0-1 1v.387a.99.99 0 0 1-.746.962c-4.465 1.116-7.327 1.115-11.998-.006a.99.99 0 0 1-.756-.965v-.378a1 1 0 0 0-1-1H16a1 1 0 0 1-1-1v-.874a1 1 0 0 1 1-1h.282a.97.97 0 0 0 .968-.967m2.25.8a1 1 0 0 1 1 1v2.24a1 1 0 1 1-2 0v-2.24a1 1 0 0 1 1-1m-1.083 7.242a.982.982 0 0 0-1.167.958a.97.97 0 0 1-.968.967H16a1 1 0 0 0-1 1v.874a1 1 0 0 0 1 1h.25a1 1 0 0 1 1 1v.378a.99.99 0 0 0 .756.965c4.67 1.121 7.533 1.122 11.998.005a.99.99 0 0 0 .746-.96v-.388a1 1 0 0 1 1-1H32a1 1 0 0 0 1-1v-.874a1 1 0 0 0-1-1h-.284a.966.966 0 0 1-.966-.966a.98.98 0 0 0-1.168-.956c-4.192.79-6.974.781-11.165-.003m2.083 2.758a1 1 0 1 0-2 0v2.24a1 1 0 1 0 2 0z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsOrthopaedicsNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsOrthopaedicsNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsOrthopaedicsOutlineIcon],svg[healthicons-orthopaedics-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M39 8H9a1 1 0 0 0-1 1v30a1 1 0 0 0 1 1h30a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1M9 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3z"></svg:path><svg:path d="M18.417 10.98a.982.982 0 0 0-1.167.958a.97.97 0 0 1-.968.967H16a1 1 0 0 0-1 1v.874a1 1 0 0 0 1 1h.25a1 1 0 0 1 1 1v.378a.99.99 0 0 0 .756.965c4.67 1.121 7.533 1.122 11.998.006a.99.99 0 0 0 .746-.962v-.387a1 1 0 0 1 1-1H32a1 1 0 0 0 1-1v-.874a1 1 0 0 0-1-1h-.284a.966.966 0 0 1-.966-.966a.98.98 0 0 0-1.168-.956c-4.192.79-6.974.781-11.165-.003m2.083 2.758a1 1 0 1 0-2 0v2.24a1 1 0 1 0 2 0zm-2.083 6.242a.982.982 0 0 0-1.167.958a.97.97 0 0 1-.968.967H16a1 1 0 0 0-1 1v.874a1 1 0 0 0 1 1h.25a1 1 0 0 1 1 1v.378a.99.99 0 0 0 .756.965c4.67 1.121 7.533 1.122 11.998.006a.99.99 0 0 0 .746-.962v-.387a1 1 0 0 1 1-1H32a1 1 0 0 0 1-1v-.874a1 1 0 0 0-1-1h-.284a.966.966 0 0 1-.966-.966a.98.98 0 0 0-1.168-.956c-4.192.79-6.974.781-11.165-.003m2.083 2.758a1 1 0 1 0-2 0v2.24a1 1 0 1 0 2 0zm-2.083 6.242a.982.982 0 0 0-1.167.958a.97.97 0 0 1-.968.967H16a1 1 0 0 0-1 1v.874a1 1 0 0 0 1 1h.25a1 1 0 0 1 1 1v.378a.99.99 0 0 0 .756.965c4.67 1.121 7.533 1.122 11.998.005a.99.99 0 0 0 .746-.96v-.388a1 1 0 0 1 1-1H32a1 1 0 0 0 1-1v-.874a1 1 0 0 0-1-1h-.284a.966.966 0 0 1-.966-.966a.98.98 0 0 0-1.168-.956c-4.192.79-6.974.781-11.165-.003m2.083 2.758a1 1 0 1 0-2 0v2.24a1 1 0 1 0 2 0z"></svg:path></svg:g>`,
})
export class HealthiconsOrthopaedicsOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsOrthoticsIcon],svg[healthicons-orthotics-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.672 20.055a1 1 0 0 1 1.273.617c.452 1.303.912 2.144 1.354 2.74c.438.59.887.978 1.382 1.356l.367.274c.959.71 2.068 1.53 3.052 3.513c.426.859.823 1.892 1.228 2.948l.278.72c.517 1.33 1.08 2.696 1.8 3.974c1.428 2.537 3.425 4.65 6.79 5.322c.345.07 1.427.19 2.66.296c1.205.104 2.448.183 3.122.185H34a.996.996 0 0 1 1 1a1 1 0 0 1-1 1h-4.526c-3.019-.016-5.29-.53-7.014-1.425c-1.768-.916-2.896-2.196-3.659-3.596c-.75-1.375-1.145-2.864-1.469-4.177l-.092-.375c-.294-1.198-.537-2.188-.931-2.982c-.765-1.541-1.531-2.11-2.446-2.79l-.396-.298c-.57-.434-1.18-.953-1.774-1.753c-.59-.795-1.135-1.829-1.638-3.276a1 1 0 0 1-.055-.35v-1.956a1 1 0 0 1 .672-.967"></svg:path><svg:path fill-rule="evenodd" d="M23.693 4c0 3.494-1.387 6.149-7.21 9.815c-5.822 3.665-3.297 6.677 0 9.214c3.321 2.554 4.629 5.782 5.825 8.735C24.101 36.191 25.644 40 33.341 40c1.99 0 6.159-3.392 2.325-4.765c-8.422-3.015-8.737-10.082-5.986-18c.66-1.898 2.286-4.142 3.867-6.324C35.457 8.28 37.3 5.737 37.3 4zm-1.856 12.043a1 1 0 0 0-1.3-1.52c-.609.521-1.397 1.253-1.81 2.19c-.458 1.04-.411 2.223.427 3.443a1 1 0 0 0 1.648-1.134c-.46-.668-.413-1.12-.244-1.502c.213-.485.678-.963 1.279-1.477" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsOrthoticsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsOrthoticsOutlineIcon],svg[healthicons-orthotics-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M21.827 8.576C22.71 7.034 23 5.512 23 4h2c0 1.788-.348 3.67-1.438 5.571c-1.086 1.893-2.87 3.743-5.643 5.538c-2.56 1.657-2.87 2.888-2.705 3.714c.1.492.392 1.029.893 1.616c.498.585 1.152 1.165 1.89 1.748c3.263 2.58 4.55 5.847 5.64 8.614l.055.141c1.13 2.869 2.04 5.015 4.38 6.16c1.122.549 2.641.898 4.792.898c.209 0 .612-.11 1.099-.39c.469-.268.898-.629 1.175-.987c.295-.383.299-.6.285-.66c-.003-.014-.056-.262-.768-.525c-4.144-1.524-6.414-4.144-7.226-7.464c-.79-3.234-.162-6.99 1.124-10.794c.369-1.092 1.018-2.317 1.744-3.546a105 105 0 0 1 1.794-2.886l.002-.003l.563-.888c.792-1.253 1.517-2.439 2.045-3.488c.546-1.085.799-1.873.799-2.369h2c0 1.004-.455 2.159-1.012 3.268c-.576 1.145-1.35 2.405-2.141 3.657l-.579.912l-.003.005c-.608.956-1.208 1.9-1.746 2.81c-.712 1.205-1.272 2.282-1.572 3.168c-1.241 3.674-1.732 6.994-1.075 9.679c.635 2.598 2.379 4.74 5.973 6.063c1.032.38 1.82 1.014 2.031 1.969c.2.904-.206 1.731-.654 2.313c-.467.605-1.113 1.128-1.763 1.501c-.632.363-1.39.655-2.096.655c-2.36 0-4.2-.383-5.67-1.102c-3.116-1.524-4.26-4.424-5.338-7.164l-.032-.08c-1.112-2.822-2.228-5.653-5.067-7.898c-.778-.615-1.55-1.29-2.172-2.02c-.619-.727-1.14-1.567-1.33-2.519c-.414-2.06.79-3.982 3.579-5.787c2.577-1.668 4.105-3.303 4.994-4.854"></svg:path><svg:path d="M22.947 14.634a1 1 0 0 1-.11 1.41c-.6.513-1.066.991-1.28 1.476c-.168.383-.214.835.245 1.503a1 1 0 0 1-1.648 1.133c-.838-1.22-.885-2.403-.427-3.443c.413-.937 1.201-1.669 1.81-2.19a1 1 0 0 1 1.41.11m-11.002 6.039a1 1 0 0 0-1.945.35v1.956a1 1 0 0 0 .055.35c.503 1.447 1.048 2.481 1.638 3.276c.594.8 1.204 1.319 1.774 1.753q.202.155.396.298c.915.68 1.681 1.249 2.446 2.79c.394.794.637 1.785.931 2.983l.092.374c.324 1.313.72 2.802 1.47 4.177c.762 1.4 1.89 2.68 3.658 3.596c1.725.894 3.995 1.41 7.014 1.425H34a1 1 0 1 0 0-2h-.022c-.674-.002-1.917-.081-3.122-.185c-1.233-.105-2.315-.227-2.66-.296c-3.365-.673-5.362-2.785-6.79-5.322c-.72-1.279-1.283-2.645-1.8-3.973l-.278-.72c-.405-1.057-.802-2.09-1.228-2.949c-.984-1.982-2.093-2.803-3.052-3.512q-.188-.139-.367-.275c-.495-.378-.944-.766-1.382-1.356c-.442-.596-.902-1.437-1.354-2.74"></svg:path></svg:g>`,
})
export class HealthiconsOrthoticsOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsOutbreakIcon],svg[healthicons-outbreak-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M23.002 6.65a.535.535 0 0 0-.664-.53c-4.23 1.107-7.336 4.788-7.336 9.159a9.1 9.1 0 0 0 1.402 4.854l-.159.003a9.1 9.1 0 0 0-3.555.848c-3.96 1.847-5.984 6.218-5.2 10.519c.062.347.44.527.76.378a.59.59 0 0 0 .331-.593a7.003 7.003 0 0 1 6.502-7.593l.047-.003a7 7 0 0 1 1.95.156a6.99 6.99 0 0 1 4.82 3.874a6.97 6.97 0 0 1 .39 4.874a7 7 0 0 1-.769 1.75a7.003 7.003 0 0 1-10.913 1.288a.59.59 0 0 0-.667-.128a.535.535 0 0 0-.2.826c2.792 3.365 7.44 4.625 11.401 2.778a9.1 9.1 0 0 0 3.86-3.405a9.1 9.1 0 0 0 3.86 3.405c3.961 1.847 8.61.587 11.401-2.778a.535.535 0 0 0-.2-.826a.59.59 0 0 0-.666.128a7.003 7.003 0 0 1-11.707-3.128a6.97 6.97 0 0 1 .414-4.784a6.99 6.99 0 0 1 4.919-3.895a7 7 0 0 1 4.383.51a7 7 0 0 1 4.017 6.95a.59.59 0 0 0 .331.594c.32.15.698-.03.761-.378c.784-4.301-1.24-8.672-5.2-10.52a9.1 9.1 0 0 0-3.68-.85H33.6l.082-.133a9.1 9.1 0 0 0 1.32-4.721c0-4.37-3.106-8.052-7.336-9.16a.535.535 0 0 0-.664.53c0 .25.165.466.398.551a7.003 7.003 0 0 1 2.577 11.503a6.98 6.98 0 0 1-4.975 2.076a6.98 6.98 0 0 1-5.067-2.17a6.97 6.97 0 0 1-1.933-4.83c0-3.024 1.917-5.6 4.602-6.579a.59.59 0 0 0 .398-.55m4 18.319a2 2 0 1 0-4 0a2 2 0 0 0 4 0" clip-rule="evenodd"></svg:path><svg:path d="M15.029 25.707a10 10 0 0 0 4.686 7.751c.381-.572.64-1.216.763-1.89a8 8 0 0 1-3.42-5.657a5 5 0 0 0-2.029-.204m15.261 7.751a10 10 0 0 0 4.685-7.75c-.69-.074-1.38 0-2.028.203a8 8 0 0 1-3.42 5.656c.122.675.381 1.32.762 1.891m-5.287-18.489a9.96 9.96 0 0 0-4.47 1.052a5 5 0 0 0 1.281 1.609a8 8 0 0 1 3.19-.661c1.133 0 2.211.235 3.188.66c.531-.44.97-.986 1.281-1.608a9.96 9.96 0 0 0-4.47-1.052"></svg:path></svg:g>`,
})
export class HealthiconsOutbreakIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsOutbreak24pxIcon],svg[healthicons-outbreak-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.08 2.54c1.062 0 3.104.478 4.122 1.926c.836 1.19.953 2.22.698 3.649c-.11.619-.277 1.136-.52 1.594c.439.042.892.15 1.388.33c1.364.493 2.2 1.11 2.81 2.43c.745 1.605.315 3.306-.392 4.531c0 0-.143-2.466-1.166-3.46c-1.687-1.638-4.77-1.503-6 .5c-1.196 1.947-.117 4.638 2 5.5c1.506.613 4.105-.702 4.105-.702c-.53.918-1.965 2.448-3.728 2.606c-1.448.13-2.4-.285-3.51-1.22a5.8 5.8 0 0 1-.893-.92a5.8 5.8 0 0 1-.893.92c-1.11.935-2.061 1.35-3.51 1.22c-1.762-.158-3.198-1.688-3.728-2.606c0 0 2.599 1.315 4.105.702c2.117-.862 3.197-3.553 2-5.5c-1.23-2.003-4.313-2.138-6-.5C2.946 14.534 2.802 17 2.802 17c-.707-1.225-1.137-2.926-.393-4.531c.612-1.32 1.447-1.937 2.811-2.43a5.6 5.6 0 0 1 1.438-.334c-.242-.457-.408-.973-.518-1.59c-.255-1.428-.138-2.46.698-3.65C7.856 3.019 9.545 2.54 10.96 2.54c0 0-2.064 1.357-2.413 2.74c-.576 2.28 1.082 4.882 3.433 4.946c2.284.063 4.075-2.218 3.763-4.482C15.52 4.133 13.08 2.54 13.08 2.54m-2.538 6.294L9.8 6.976l-.003-.01a6 6 0 0 1 4.453.004h.002l-.748 1.867a4 4 0 0 0-2.963-.003m-.86 6.952L8.515 17.41a6 6 0 0 1-2.39-3.758v-.002l1.975-.371a4 4 0 0 0 1.59 2.5zm6.258-2.502l1.965.373l.01.003a6 6 0 0 1-2.396 3.754h-.002l-1.171-1.632a4 4 0 0 0 1.594-2.498m-2.92-.744a1 1 0 1 1-2 0a1 1 0 0 1 2 0" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsOutbreak24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsOutbreakNegativeIcon],svg[healthicons-outbreak-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsOutbreakNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm22.336 6.15a.535.535 0 0 1 .664.53a.59.59 0 0 1-.398.551a7.003 7.003 0 0 0-3.768 9.896l.01.02a7 7 0 0 0 1.181 1.588A6.98 6.98 0 0 0 25 20.81a6.98 6.98 0 0 0 5.067-2.17A6.97 6.97 0 0 0 32 13.81a7 7 0 0 0-4.602-6.578A.59.59 0 0 1 27 6.68c0-.353.323-.62.664-.53C31.894 7.259 35 10.94 35 15.31a9.1 9.1 0 0 1-1.402 4.854l.159.003a9.1 9.1 0 0 1 3.555.848c3.961 1.847 5.985 6.218 5.201 10.52a.535.535 0 0 1-.76.377a.59.59 0 0 1-.332-.593a7.003 7.003 0 0 0-6.501-7.593l-.047-.003a7 7 0 0 0-1.95.156a6.99 6.99 0 0 0-4.822 3.875a6.97 6.97 0 0 0-.389 4.873c.175.614.434 1.204.77 1.75a7.003 7.003 0 0 0 10.913 1.288a.59.59 0 0 1 .667-.128c.32.15.425.555.2.826c-2.792 3.365-7.441 4.625-11.402 2.778A9.1 9.1 0 0 1 25 35.736a9.1 9.1 0 0 1-3.86 3.405c-3.96 1.847-8.61.587-11.401-2.778a.535.535 0 0 1 .2-.826a.59.59 0 0 1 .667.128a7.003 7.003 0 0 0 11.706-3.128a6.97 6.97 0 0 0-.413-4.783a6.99 6.99 0 0 0-4.92-3.896a7 7 0 0 0-4.383.51a7 7 0 0 0-4.017 6.95a.59.59 0 0 1-.331.594a.535.535 0 0 1-.761-.378c-.783-4.301 1.24-8.672 5.2-10.52a9.1 9.1 0 0 1 3.556-.846l.016-.001l.143-.003l-.082-.133A9.1 9.1 0 0 1 15 15.31c0-4.37 3.106-8.051 7.336-9.16M25 23a2 2 0 1 1 0 4a2 2 0 0 1 0-4m-9.973 2.738a10 10 0 0 0 4.686 7.752c.381-.572.64-1.217.763-1.891a8 8 0 0 1-3.421-5.657a5 5 0 0 0-2.028-.204m15.26 7.752a10 10 0 0 0 4.686-7.752c-.69-.073-1.38 0-2.028.204a8 8 0 0 1-3.42 5.657c.122.674.381 1.319.762 1.89M25 15a9.96 9.96 0 0 0-4.47 1.052c.312.622.75 1.17 1.28 1.609A8 8 0 0 1 25 17c1.134 0 2.212.236 3.19.661a5 5 0 0 0 1.28-1.609A9.96 9.96 0 0 0 25 15" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsOutbreakNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsOutbreakNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsOutbreakOutlineIcon],svg[healthicons-outbreak-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M22.083 5.183C23.103 4.916 24 5.72 24 6.681c0 .703-.46 1.273-1.055 1.49a6 6 0 1 0 4.11 0A1.59 1.59 0 0 1 26 6.681c0-.96.897-1.765 1.918-1.498C32.545 6.395 36 10.443 36 15.31c0 1.415-.294 2.766-.825 3.998c.868.148 1.728.413 2.56.8c4.411 2.058 6.619 6.9 5.762 11.606c-.19 1.038-1.297 1.51-2.167 1.105a1.59 1.59 0 0 1-.905-1.587a6 6 0 1 0-1.737 3.726a1.59 1.59 0 0 1 1.796-.327c.87.406 1.22 1.559.547 2.37c-3.054 3.682-8.182 5.103-12.594 3.046A10.1 10.1 0 0 1 25 37.422a10.1 10.1 0 0 1-3.437 2.625c-4.411 2.057-9.54.636-12.594-3.045c-.674-.812-.324-1.965.547-2.37a1.59 1.59 0 0 1 1.797.326a6 6 0 1 0-1.737-3.726c.054.63-.268 1.29-.905 1.587c-.87.405-1.979-.067-2.168-1.106c-.857-4.706 1.351-9.547 5.762-11.604a10 10 0 0 1 2.56-.802A10.1 10.1 0 0 1 14 15.31c0-4.867 3.455-8.915 8.083-10.127m-4.134 4.844C16.725 11.484 16 13.323 16 15.31c0 1.578.454 3.054 1.25 4.323a1 1 0 0 1-.834 1.53a8.1 8.1 0 0 0-3.306.758c-1.8.84-3.16 2.275-3.964 4a8.003 8.003 0 0 1 11.856-1.07a4 4 0 0 1 1.971-3.3a8.003 8.003 0 0 1-5.024-11.524m9.078 11.524a4 4 0 0 1 1.97 3.3a8.003 8.003 0 0 1 11.857 1.07c-.803-1.725-2.164-3.16-3.964-4a8.1 8.1 0 0 0-3.306-.757a1 1 0 0 1-.833-1.531A8.1 8.1 0 0 0 34 15.31c0-1.987-.726-3.826-1.95-5.283a8.003 8.003 0 0 1-5.024 11.523m-.302 7.059c-.522.25-1.107.39-1.725.39s-1.203-.14-1.725-.39a8.002 8.002 0 0 1-8.169 10.09c1.837.494 3.811.374 5.612-.465a8.1 8.1 0 0 0 3.437-3.034a1 1 0 0 1 1.69 0a8.1 8.1 0 0 0 3.438 3.034c1.8.84 3.774.96 5.61.466a8.002 8.002 0 0 1-8.169-10.091M25 23a2 2 0 1 0 0 4a2 2 0 0 0 0-4"></svg:path><svg:path d="M20.476 31.599a5 5 0 0 1-.763 1.89a10 10 0 0 1-1.589-1.228a10 10 0 0 1-3.027-5.865a10 10 0 0 1-.07-.658a5 5 0 0 1 2.028.204a8 8 0 0 0 3.42 5.657m14.172-5.884a5 5 0 0 0-1.703.227a8 8 0 0 1-3.42 5.657a5 5 0 0 0 .762 1.89a10 10 0 0 0 1.589-1.228a10 10 0 0 0 3.027-5.866q.045-.325.07-.657a5 5 0 0 0-.325-.023m-12.23-10.378a10 10 0 0 0-1.887.715a5 5 0 0 0 1.28 1.609a8 8 0 0 1 3.34-.66a8 8 0 0 1 3.04.66c.53-.44.968-.987 1.28-1.609A9.9 9.9 0 0 0 25 15c-.893 0-1.76.117-2.583.337"></svg:path></svg:g>`,
})
export class HealthiconsOutbreakOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsOutbreakOutline24pxIcon],svg[healthicons-outbreak-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.08 2.54c1.062 0 3.104.478 4.122 1.926c.836 1.19.953 2.22.698 3.649c-.11.619-.277 1.136-.52 1.594c.439.042.892.15 1.388.33c1.364.493 2.2 1.11 2.81 2.43c.745 1.605.315 3.306-.392 4.531c0 0-.143-2.466-1.166-3.46c-1.687-1.638-4.77-1.503-6 .5c-1.196 1.947-.117 4.638 2 5.5c1.506.613 4.105-.702 4.105-.702c-.53.918-1.965 2.448-3.728 2.606c-1.448.13-2.4-.285-3.51-1.22a5.8 5.8 0 0 1-.893-.92a5.8 5.8 0 0 1-.893.92c-1.11.935-2.061 1.35-3.51 1.22c-1.762-.158-3.198-1.688-3.728-2.606c0 0 2.599 1.315 4.105.702c2.117-.862 3.197-3.553 2-5.5c-1.23-2.003-4.313-2.138-6-.5C2.946 14.534 2.802 17 2.802 17c-.707-1.225-1.137-2.926-.393-4.531c.612-1.32 1.447-1.937 2.811-2.43a5.6 5.6 0 0 1 1.438-.334c-.242-.457-.408-.973-.518-1.59c-.255-1.428-.138-2.46.698-3.65C7.856 3.019 9.545 2.54 10.96 2.54c0 0-2.064 1.357-2.413 2.74c-.576 2.28 1.082 4.882 3.433 4.946c2.284.063 4.075-2.218 3.763-4.482C15.52 4.133 13.08 2.54 13.08 2.54m-2.538 6.294L9.8 6.976l-.003-.01a6 6 0 0 1 4.453.004h.002l-.748 1.867a4 4 0 0 0-2.963-.003m-.86 6.952L8.515 17.41a6 6 0 0 1-2.39-3.758v-.002l1.975-.371a4 4 0 0 0 1.59 2.5zm6.258-2.502l1.965.373l.01.003a6 6 0 0 1-2.396 3.754h-.002l-1.171-1.632a4 4 0 0 0 1.594-2.498m-2.92-.744a1 1 0 1 1-2 0a1 1 0 0 1 2 0" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsOutbreakOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsOutpatientIcon],svg[healthicons-outpatient-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M21.935 10.723a4.001 4.001 0 1 1-7.86-1.494c1.525.926 2.854 1.448 4.239 1.638c1.176.16 2.34.074 3.62-.144m-6.988-3.306a4.002 4.002 0 0 1 6.845 1.301c-1.262.225-2.251.298-3.206.167c-1.08-.148-2.192-.568-3.64-1.468M14.5 15c-2.736 0-4.902 1.67-6.291 3.69C6.81 20.727 6 23.368 6 25.973c0 1.391.645 3.005 1.1 4.02A25 25 0 0 0 8 31.79V40a2 2 0 1 0 4 0V28.544c.292-2.408.978-4.59 1.763-6.374l.657 2.557a2 2 0 0 0 1.937 1.502H21.5a2 2 0 1 0 0-4h-3.592l-1.47-5.727A2 2 0 0 0 14.5 15M37 18a4 4 0 1 0 0-8a4 4 0 0 0 0 8"></svg:path><svg:path fill-rule="evenodd" d="M31.222 18.045a2 2 0 0 1 2.245 1.135l2.648 5.887H40a2 2 0 1 1 0 4h-5.179a2 2 0 0 1-1.824-1.18L31.563 24.7c-.457.842-.758 1.617-.949 2.422c-.2.844-.288 1.765-.272 2.887c.323.135.681.27 1.064.402c.884.304 1.793.558 2.536.757l.37.099h.001l.587.158a9 9 0 0 1 .377.111l.009.003c.061.02.328.103.575.254c.322.195.546.463.592.517l.006.007c.093.11.186.23.27.345c.173.231.377.526.591.845c.434.644.963 1.467 1.471 2.268a275 275 0 0 1 1.817 2.907l.168.272L39.07 40l1.705-1.047a2 2 0 0 1-3.41 2.093l-.162-.265a300 300 0 0 0-1.79-2.865A103 103 0 0 0 34 35.739q-.201-.3-.35-.51l-.334-.089l-.411-.11a43 43 0 0 1-2.803-.838L30 34.156V42h-2v-7H17v7h-2V32h11.033a4 4 0 0 1-.257-.284c-.397-.482-.776-1.176-.776-2.05c0-4.702 1.268-7.621 2.813-9.396a7.6 7.6 0 0 1 2.173-1.748c.313-.165.587-.277.799-.35a4 4 0 0 1 .406-.12l.016-.004l.008-.002h.003s.004-.001.425 1.954zm2.867 17.31l-.034-.011zm-.663-.43l-.01-.012z" clip-rule="evenodd"></svg:path><svg:path d="M23.5 12c.828 0 1.5-1.12 1.5-2.5S24.328 7 23.5 7S22 8.12 22 9.5s.672 2.5 1.5 2.5"></svg:path></svg:g>`,
})
export class HealthiconsOutpatientIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsOutpatientDepartmentIcon],svg[healthicons-outpatient-department-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6 9a3 3 0 0 1 3-3h30a3 3 0 0 1 3 3v30a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3zm9.08 18.602c.243-1.961.832-3.73 1.495-5.15l.577 2.197a1.5 1.5 0 0 0 1.45 1.119h4.064a1.5 1.5 0 1 0 0-3H19.76l-1.174-4.467a1.5 1.5 0 0 0-1.45-1.119c-2.111 0-3.801 1.261-4.896 2.82c-1.1 1.565-1.74 3.601-1.74 5.613c0 .578.143 1.168.299 1.658c.162.508.37 1.01.569 1.44a19 19 0 0 0 .712 1.394v6.348a1.5 1.5 0 0 0 3 0zm4.82-11.238c1.464 0 2.695-.973 3.055-2.293c-.99.159-1.904.221-2.832.097c-1.108-.148-2.165-.552-3.361-1.254a3 3 0 0 0-.021.359c0 1.707 1.414 3.09 3.16 3.09m0-6.182c-.884 0-1.684.356-2.258.929c1.102.663 1.94.967 2.747 1.075c.715.096 1.46.046 2.422-.12a3.16 3.16 0 0 0-2.91-1.884m5.531 2.704c0 1.067-.53 1.932-1.185 1.932c-.654 0-1.185-.865-1.185-1.932s.53-1.931 1.185-1.931s1.185.864 1.185 1.931m11.851 3.478c0 1.707-1.414 3.09-3.16 3.09c-1.745 0-3.16-1.383-3.16-3.09s1.415-3.091 3.16-3.091s3.16 1.384 3.16 3.09M31.04 27.085l-.605-1.317a6 6 0 0 0-.258.818c-.175.725-.238 1.539-.191 2.605c.622.2 1.24.369 1.746.5l.388.1l.343.09c.093.024.19.05.272.075c.04.012.096.03.154.051h.002c.023.01.201.072.38.2c.155.11.262.232.281.254l.003.003c.039.044.074.088.1.12c.053.069.11.148.168.228c.117.163.265.378.43.62c.33.486.748 1.117 1.157 1.737a417 417 0 0 1 1.473 2.257l.137.211l-2.519 1.63l-.135-.208a442 442 0 0 0-1.463-2.24a153 153 0 0 0-1.133-1.703l-.264-.385l-.118-.03l-.413-.107a38 38 0 0 1-1.591-.448V38h-1.58v-5.409H19.11V38h-1.58v-7.727h8.02a3 3 0 0 1-.213-.227c-.309-.361-.617-.895-.617-1.576c0-3.634 1.003-5.883 2.214-7.244a5.9 5.9 0 0 1 1.695-1.334a4.6 4.6 0 0 1 .825-.33l.074-.018l.029-.007l.012-.002l.005-.002h.003c.001 0 .003 0 .312 1.467l-.31-1.468a1.5 1.5 0 0 1 1.672.841l2.11 4.587h3.13a1.5 1.5 0 1 1 0 3H32.4a1.5 1.5 0 0 1-1.363-.873m5.98 8.552a1.5 1.5 0 0 1-2.519 1.63z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsOutpatientDepartmentIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsOutpatientDepartmentNegativeIcon],svg[healthicons-outpatient-department-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsOutpatientDepartmentNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM9 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3zm7.575 16.452a17.4 17.4 0 0 0-1.495 5.15v8.853a1.5 1.5 0 0 1-3 0v-6.348l-.167-.303a19 19 0 0 1-.545-1.09c-.198-.43-.407-.933-.569-1.441c-.156-.49-.299-1.08-.299-1.658c0-2.012.64-4.048 1.74-5.613c1.095-1.559 2.785-2.82 4.896-2.82a1.5 1.5 0 0 1 1.45 1.119l1.174 4.467h2.906a1.5 1.5 0 1 1 0 3h-4.063a1.5 1.5 0 0 1-1.451-1.119zm6.38-8.381c-.36 1.32-1.59 2.293-3.054 2.293c-1.746 0-3.16-1.384-3.16-3.091q0-.181.02-.36c1.197.703 2.255 1.107 3.362 1.255c.928.124 1.842.062 2.832-.097m-5.312-2.96a3.2 3.2 0 0 1 2.258-.929c1.308 0 2.43.777 2.91 1.885c-.962.165-1.707.215-2.422.119c-.806-.108-1.645-.412-2.747-1.075m6.603 3.707c.655 0 1.185-.865 1.185-1.932s-.53-1.931-1.185-1.931c-.654 0-1.185.864-1.185 1.931s.53 1.932 1.185 1.932m9.876 4.637c1.746 0 3.16-1.384 3.16-3.091s-1.414-3.091-3.16-3.091c-1.745 0-3.16 1.384-3.16 3.09c0 1.708 1.415 3.092 3.16 3.092m-3.69 6.315l.606 1.317a1.5 1.5 0 0 0 1.363.874h4.091a1.5 1.5 0 1 0 0-3h-3.13l-2.11-4.588a1.5 1.5 0 0 0-1.671-.84L29.89 21c-.31-1.468-.31-1.468-.312-1.467h-.003l-.005.002l-.012.002l-.03.007a3 3 0 0 0-.28.083c-.163.055-.375.14-.618.265a5.9 5.9 0 0 0-1.695 1.334c-1.211 1.361-2.214 3.61-2.214 7.244c0 .68.308 1.215.617 1.576q.103.12.214.227H17.53V38h1.58v-5.409h8.69V38h1.58v-5.852a38 38 0 0 0 2.004.555h.001l.118.03l.264.385c.318.469.727 1.085 1.133 1.702a405 405 0 0 1 1.463 2.24l.1.155l.027.04l.006.01l.002.004l1.26-.815l-1.26.815a1.5 1.5 0 1 0 2.52-1.63l-1.26.815l1.26-.815h-.001l-.002-.003l-.007-.01l-.027-.042l-.1-.156a478 478 0 0 0-1.474-2.257c-.409-.62-.827-1.25-1.157-1.738a32 32 0 0 0-.43-.62a7 7 0 0 0-.168-.226a3 3 0 0 0-.1-.121l-.003-.003a1.7 1.7 0 0 0-.281-.255a1.6 1.6 0 0 0-.38-.198h-.002a3 3 0 0 0-.154-.052a8 8 0 0 0-.272-.076l-.343-.088l-.388-.1c-.506-.132-1.124-.3-1.746-.501c-.047-1.066.016-1.88.191-2.605a6 6 0 0 1 .258-.818" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsOutpatientDepartmentNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsOutpatientDepartmentNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsOutpatientDepartmentOutlineIcon],svg[healthicons-outpatient-department-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M15.08 27.602c.243-1.961.832-3.73 1.495-5.15l.577 2.197a1.5 1.5 0 0 0 1.45 1.119h4.064a1.5 1.5 0 1 0 0-3H19.76l-1.174-4.467a1.5 1.5 0 0 0-1.45-1.119c-2.111 0-3.801 1.261-4.896 2.82c-1.1 1.565-1.74 3.601-1.74 5.613c0 .578.143 1.168.299 1.658c.162.508.37 1.01.569 1.44a19 19 0 0 0 .712 1.394v6.348a1.5 1.5 0 0 0 3 0zm7.302-12.414l.025-.032c.25-.318.439-.686.548-1.085c-.99.159-1.904.221-2.832.097l-.207-.03l-.015-.003c-.822-.136-1.622-.416-2.48-.857l-.009-.005q-.32-.165-.65-.36a3.1 3.1 0 0 0 .096 1.199c.346 1.201 1.416 2.106 2.72 2.236q.16.015.323.016a3.18 3.18 0 0 0 2.48-1.176M19.9 10.182a3.2 3.2 0 0 0-1.899.62a3 3 0 0 0-.359.309l.132.078c.767.45 1.407.723 2 .877l.127.03q.247.058.488.09c.67.09 1.367.051 2.245-.09h.003l.174-.03a3 3 0 0 0-.24-.446l-.014-.023a3.17 3.17 0 0 0-2.656-1.415m4.345 4.636c.482 0 .896-.467 1.081-1.14c.067-.241.104-.51.104-.792s-.037-.55-.104-.792c-.185-.672-.6-1.14-1.08-1.14c-.45 0-.842.41-1.043 1.012l-.039.128c-.067.242-.104.51-.104.792s.037.55.104.793c.186.672.6 1.14 1.081 1.14m13.037 1.545c0 1.707-1.415 3.09-3.16 3.09s-3.161-1.383-3.161-3.09s1.415-3.091 3.16-3.091s3.16 1.384 3.16 3.09"></svg:path><svg:path d="m30.433 25.77l.605 1.317a1.5 1.5 0 0 0 1.363.874h4.091a1.5 1.5 0 1 0 0-3h-3.13l-2.11-4.588a1.5 1.5 0 0 0-1.671-.84l.308 1.466a82 82 0 0 0-.311-1.466h-.003l-.005.002l-.012.002l-.03.007a3 3 0 0 0-.28.083a5 5 0 0 0-.618.265a5.9 5.9 0 0 0-1.695 1.334c-1.211 1.361-2.214 3.61-2.214 7.244c0 .68.308 1.215.617 1.576q.103.12.214.227H17.53V38h1.58v-5.409h8.69V38h1.58v-5.852c.59.182 1.148.332 1.592.448l.413.107l.118.03l.264.385c.318.469.727 1.085 1.133 1.702a405 405 0 0 1 1.463 2.24l.136.21a1.5 1.5 0 1 0 2.518-1.63l-.137-.212a478 478 0 0 0-1.474-2.257c-.408-.62-.826-1.25-1.156-1.738a32 32 0 0 0-.43-.62a7 7 0 0 0-.168-.226a3 3 0 0 0-.1-.121l-.003-.003a1.7 1.7 0 0 0-.281-.255a1.6 1.6 0 0 0-.38-.198h-.002a3 3 0 0 0-.154-.052a8 8 0 0 0-.272-.076l-.343-.088l-.388-.1c-.506-.132-1.124-.3-1.746-.501c-.047-1.066.016-1.88.191-2.605a6 6 0 0 1 .258-.818"></svg:path><svg:path fill-rule="evenodd" d="M9 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3zm31 3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v30a1 1 0 0 0 1 1h30a1 1 0 0 0 1-1z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsOutpatientDepartmentOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsOutpatientNegativeIcon],svg[healthicons-outpatient-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsOutpatientNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm12 28.544c.292-2.408.978-4.59 1.763-6.374l.657 2.557a2 2 0 0 0 1.937 1.502H21.5a2 2 0 1 0 0-4h-3.592l-1.47-5.727A2 2 0 0 0 14.5 15c-2.736 0-4.902 1.67-6.291 3.69C6.81 20.727 6 23.368 6 25.973c0 1.391.645 3.005 1.1 4.02A25 25 0 0 0 8 31.79V40a2 2 0 1 0 4 0zM18 14a4 4 0 0 0 3.935-3.277c-1.282.218-2.445.305-3.621.144c-1.385-.19-2.714-.712-4.24-1.638A4 4 0 0 0 18 14m0-8a3.99 3.99 0 0 0-3.054 1.417c1.447.9 2.56 1.32 3.64 1.468c.954.13 1.943.058 3.204-.167A4 4 0 0 0 18 6m23 8a4 4 0 1 1-8 0a4 4 0 0 1 8 0m-7.533 5.18a2 2 0 0 0-2.245-1.135l.42 1.955c-.42-1.955-.422-1.955-.424-1.954h-.003l-.008.002l-.016.004a4 4 0 0 0-.406.12a6 6 0 0 0-.8.35a7.6 7.6 0 0 0-2.172 1.748C26.268 22.045 25 24.964 25 29.667c0 .873.38 1.567.776 2.049q.123.149.257.284H15v10h2v-7h11v7h2v-7.844l.103.036a43 43 0 0 0 2.803.839l.41.11l.198.052l.138.037q.147.208.35.509c.402.598.909 1.385 1.411 2.177a270 270 0 0 1 1.79 2.865l.122.197l.031.051l.008.013l.002.003v.001L39.072 40l-1.704 1.046a2 2 0 0 0 3.409-2.092L39.071 40l1.705-1.046v-.002l-.003-.003l-.009-.014l-.032-.053l-.124-.2a314 314 0 0 0-1.817-2.908a107 107 0 0 0-1.47-2.268a24 24 0 0 0-.591-.845a7 7 0 0 0-.271-.345l-.006-.007a2.5 2.5 0 0 0-.592-.517a2.7 2.7 0 0 0-.575-.254l-.009-.003a10 10 0 0 0-.377-.111c-.163-.045-.366-.1-.586-.158h-.002l-.37-.099a39 39 0 0 1-2.536-.757a20 20 0 0 1-.556-.2c-.03-1.24.06-2.262.282-3.204a9.6 9.6 0 0 1 .641-1.84l1.224 2.721a2 2 0 0 0 1.824 1.18H40a2 2 0 0 0 0-4h-3.885zm-3.816 5.868c.191-.493.418-.979.68-1.469a7.3 7.3 0 0 0-.68 1.47m4.415 10.3l.01.003l-.02-.007zm-.655-.44l.015.017l-.01-.012l-.018-.02l.006.007zM25 9.5c0 1.38-.672 2.5-1.5 2.5S22 10.88 22 9.5S22.672 7 23.5 7S25 8.12 25 9.5" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsOutpatientNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsOutpatientNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsOutpatientOutlineIcon],svg[healthicons-outpatient-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M23.889 9.5a4.502 4.502 0 0 0-8.889 1a4.5 4.5 0 0 0 8.888 1H24a1 1 0 0 0 .123-.008c.23.887.76 1.508 1.377 1.508c.828 0 1.5-1.12 1.5-2.5S26.328 8 25.5 8c-.617 0-1.147.62-1.377 1.507A1 1 0 0 0 24 9.5zm-2.123 2.059a2.5 2.5 0 0 1-4.733-.655c1.628.72 3.029.716 4.732.655m-4.219-2.62a2.5 2.5 0 0 1 4.264.606l-.026.001c-1.842.063-2.852.097-4.238-.607m-8.919 10.56C10.28 17.518 12.76 16 15.76 16a3 3 0 0 1 2.864 2.107l1.275 4.09H21a3 3 0 0 1 0 6h-3.309a3 3 0 0 1-2.849-2.062A14.5 14.5 0 0 0 14 29.618V39a3 3 0 1 1-6 0v-6.988c-.193-.306-.43-.701-.672-1.143a14.5 14.5 0 0 1-.834-1.785C6.266 28.48 6 27.617 6 26.69c0-2.628.988-5.225 2.627-7.191M15.76 18c-2.286 0-4.24 1.153-5.597 2.78C8.812 22.4 8 24.548 8 26.69c0 .57.169 1.169.365 1.688c.202.536.466 1.07.719 1.534a20 20 0 0 0 .755 1.265a1 1 0 0 1 .161.544V39a1 1 0 1 0 2 0v-9.435q0-.053.005-.105c.268-2.53 1.153-4.804 2.149-6.582a1 1 0 0 1 1.827.192l.756 2.424a1 1 0 0 0 .954.702H21a1 1 0 1 0 0-2h-1.837a1 1 0 0 1-.955-.702l-1.493-4.792A1 1 0 0 0 15.76 18m21.74 0a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9m0-2a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5"></svg:path><svg:path d="M34.379 17.77a3 3 0 0 0-3.335-1.71l-.035.008h-.003l-.015.004l-.021.005h-.003a4 4 0 0 0-.511.15a7 7 0 0 0-.936.41c-.727.383-1.611 1-2.461 1.977C25.32 20.609 24 23.78 24 28.667c0 .51.099 2.273 1.854 3.137q.256.125.492.196H16v10h2v-7h11v7h2v-8.46a36 36 0 0 1 2.546 1.947q.118.187.301.494c.276.462.62 1.056.977 1.674l.505.88l.003.005l.027.046v.002h.001c.5.871.984 1.715 1.182 2.025a3 3 0 0 0 5.059-3.226a84 84 0 0 1-.986-1.697l-.002-.003l-.59-1.027c-.358-.62-.723-1.25-1.024-1.754a31 31 0 0 0-.418-.683l-.005-.009c-.084-.132-.274-.432-.485-.675a5 5 0 0 0-.492-.48l-.018-.016a24 24 0 0 0-.53-.446a42 42 0 0 0-1.984-1.53H39a3 3 0 0 0 0-6h-2.239zm-2.85 13.716a1 1 0 0 0-.121-.067a1 1 0 0 0-.111-.081c-.583-.369-1.168-.7-1.684-.916c-.801-.336-1.358-.303-1.806-.277l-.04.003a4 4 0 0 1-.397.01a1.55 1.55 0 0 1-.633-.148c-.652-.32-.737-.974-.737-1.343c0-4.519 1.215-7.186 2.567-8.74a6.6 6.6 0 0 1 1.884-1.52a5 5 0 0 1 .793-.334q.182-.003.355-.072a1 1 0 0 1 .956.589l2.648 5.887a1 1 0 0 0 .912.59H39a1 1 0 1 1 0 2h-4.179a1 1 0 0 1-.912-.59l-1.023-2.275a1 1 0 0 0-1.837.031a15.2 15.2 0 0 0-.953 3.403a1 1 0 0 0 .568 1.065c1.188.549 2.547 1.476 3.613 2.267c.59.438 1.114.853 1.505 1.174c.195.16.36.3.484.408l.01.009c.041.036.097.085.157.14c.062.059.113.11.145.147c.046.053.101.128.161.214c.059.085.11.167.154.234c.11.174.243.392.389.637c.293.49.65 1.108 1.008 1.727l.59 1.028l.002.003l.034.06c.463.805.855 1.488.999 1.714a1 1 0 1 1-1.687 1.075a86 86 0 0 1-1.163-1.997v-.001c-.169-.293-.34-.593-.508-.883c-.357-.619-.708-1.225-.992-1.7a27 27 0 0 0-.417-.678a1 1 0 0 0-.18-.206l-.016-.015a20 20 0 0 0-.44-.37a38 38 0 0 0-1.428-1.114a31 31 0 0 0-1.556-1.088"></svg:path></svg:g>`,
})
export class HealthiconsOutpatientOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsOverweightIcon],svg[healthicons-overweight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M24 13a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9m12.56 4.08a2 2 0 1 1-1.12 3.84a69 69 0 0 0-3.097-.83l.048.148c1.308 4.077 2.637 8.22.426 11.79L30.45 42.444A2 2 0 0 1 26.5 42v-6.07c-.796.07-1.624.07-2.5.07c-.694 0-1.358 0-2-.035V42a2 2 0 0 1-3.95.443l-2.14-9.414c-3.19-3.786-1.733-8.327-.301-12.79l.037-.116c-.982.232-2.014.5-3.111.804a2 2 0 0 1-1.07-3.854C16.23 15.75 20.08 15.018 23.991 15c3.917-.017 7.777.683 12.569 2.08" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsOverweightIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsOverweight24pxIcon],svg[healthicons-overweight-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 6q-.825 0-1.412-.588A1.93 1.93 0 0 1 10 4q0-.824.588-1.412A1.93 1.93 0 0 1 12 2q.825 0 1.412.587Q14 3.176 14 4t-.588 1.412A1.93 1.93 0 0 1 12 6m-3.683 4.733L5.05 14l-1.4-1.4l4.525-4.525q.525-.525 1.175-.8T10.75 7h2.5q.75 0 1.4.275t1.175.8L20.35 12.6l-1.4 1.4l-3.267-3.267a16 16 0 0 1 .173 6.704L15 22h-2v-5h-2v5H9l-.856-4.563a16 16 0 0 1 .173-6.704"></svg:path>`,
})
export class HealthiconsOverweight24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsOverweightNegativeIcon],svg[healthicons-overweight-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsOverweightNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM28.5 8.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m9.42 11.06a2 2 0 0 0-1.36-2.48c-4.792-1.397-8.652-2.097-12.57-2.08c-3.91.018-7.76.75-12.525 2.073a2 2 0 1 0 1.07 3.854a83 83 0 0 1 3.11-.804l-.036.115c-1.432 4.464-2.89 9.005.301 12.79l2.14 9.415A2 2 0 0 0 22 42v-6.035c.642.035 1.306.035 2 .035c.876 0 1.704 0 2.5-.07V42a2 2 0 0 0 3.95.443l2.367-10.414c2.211-3.572.882-7.714-.426-11.79l-.048-.15c.978.237 2.006.513 3.097.831a2 2 0 0 0 2.48-1.36" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsOverweightNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsOverweightNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsOverweightOutlineIcon],svg[healthicons-overweight-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M24 6a3 3 0 1 0 0 6a3 3 0 0 0 0-6m-5 3a5 5 0 1 1 10 0a5 5 0 0 1-10 0m4.986 6c4.048-.018 8.01.708 12.853 2.12a3 3 0 1 1-1.678 5.76a73 73 0 0 0-2.118-.584c.48 1.585.893 3.236.95 4.853c.076 2.171-.485 4.308-2.287 6.216l-.718 7.907A3 3 0 0 1 25 41v-5.005q-.491.006-.982.005h-.036q-.491.001-.982-.005V41a3 3 0 0 1-5.988.272l-.719-7.907c-1.795-1.902-2.36-4.031-2.287-6.196c.054-1.615.464-3.263.943-4.847q-1.03.258-2.147.569a3 3 0 1 1-1.604-5.782C16 15.776 19.948 15.02 23.986 15m12.294 4.04c-4.74-1.381-8.498-2.057-12.285-2.04c-3.783.017-7.537.725-12.263 2.036a1 1 0 0 0 .535 1.928a78 78 0 0 1 3.95-.997l1.704-.378l-.536 1.661c-.69 2.135-1.318 4.12-1.38 5.986c-.06 1.798.41 3.454 1.953 4.97l.262.257l.784 8.627A1 1 0 0 0 21 41v-7.113l1.067.072c.6.04 1.229.041 1.933.041s1.333 0 1.933-.04L27 33.886V41a1 1 0 0 0 1.996.09l.784-8.627l.262-.257c1.548-1.52 2.016-3.181 1.952-4.987c-.065-1.873-.7-3.865-1.391-6.007l-.539-1.668l1.71.386c1.236.278 2.541.62 3.946 1.03a1 1 0 0 0 .56-1.92" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsOverweightOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsOverweightOutline24pxIcon],svg[healthicons-overweight-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 6q-.825 0-1.412-.588A1.93 1.93 0 0 1 10 4q0-.824.588-1.412A1.93 1.93 0 0 1 12 2q.825 0 1.412.587Q14 3.176 14 4t-.588 1.412A1.93 1.93 0 0 1 12 6m-3.683 4.733L5.05 14l-1.4-1.4l4.525-4.525q.525-.525 1.175-.8T10.75 7h2.5q.75 0 1.4.275t1.175.8L20.35 12.6l-1.4 1.4l-3.267-3.267a16 16 0 0 1 .173 6.704L15 22h-2v-5h-2v5H9l-.856-4.563a16 16 0 0 1 .173-6.704"></svg:path>`,
})
export class HealthiconsOverweightOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsOxygenTankIcon],svg[healthicons-oxygen-tank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M19 6.048h-2v2h5v2h-5v2.083c2.838.476 5 2.944 5 5.917v2H10v-2a6 6 0 0 1 5-5.917v-2.083h-2.17a3.001 3.001 0 0 1-5.83-1a3 3 0 0 1 5.83-1H15v-2h-2v-2h6zm-9 16v21a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-21zm0-14a1 1 0 1 0 0 2a1 1 0 0 0 0-2m16 13a4 4 0 1 1 8 0v6a4 4 0 0 1-8 0zm4-2a2 2 0 0 0-2 2v6a2 2 0 0 0 4 0v-6a2 2 0 0 0-2-2m5 7h3a1 1 0 1 1 0 2a3 3 0 0 0-3 3v2a1 1 0 0 0 1 1h5v-2h-4v-1a1 1 0 0 1 1-1a3 3 0 0 0 0-6h-3z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsOxygenTankIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsOxygenTank24pxIcon],svg[healthicons-oxygen-tank-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M15 16c-1.144 0-1.932-.527-2.409-1.233c-.449-.665-.591-1.439-.591-1.967v-1.6c0-.528.142-1.302.591-1.967C13.068 8.527 13.856 8 15 8s1.932.527 2.409 1.233c.449.665.591 1.439.591 1.967v1.6c0 .528-.142 1.302-.591 1.967C16.932 15.473 16.144 16 15 16m-1.5-3.2c0 .272.083.698.309 1.033c.198.294.535.567 1.191.567s.993-.273 1.191-.567c.226-.335.309-.761.309-1.033v-1.6c0-.272-.083-.698-.309-1.033c-.198-.294-.535-.567-1.191-.567s-.993.273-1.191.567A2 2 0 0 0 13.5 11.2z" clip-rule="evenodd"></svg:path><svg:path d="M20.25 13.75a.46.46 0 0 0-.065-.25h-.37a.4.4 0 0 0-.047.109a.75.75 0 1 1-1.45-.384c.152-.576.638-1.225 1.432-1.225h.5c.496 0 .888.27 1.13.593s.37.734.37 1.157c0 .446-.143.883-.415 1.215L20.532 16H21a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.593-1.21l1.75-2.254l.018-.022a.43.43 0 0 0 .075-.264M8 4H7v2.17C8.165 6.584 9 7.695 9 9H3c0-1.306.835-2.417 2-2.83V4H4V2h4zm1 16.95V11H3v9.95c0 .58.47 1.05 1.05 1.05h3.9C8.53 22 9 21.53 9 20.95"></svg:path></svg:g>`,
})
export class HealthiconsOxygenTank24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsOxygenTankNegativeIcon],svg[healthicons-oxygen-tank-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsOxygenTankNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM17 6.048h2v-2h-6v2h2v2h-2.17a3.001 3.001 0 1 0 0 2H15v2.083a6 6 0 0 0-5 5.917v2h12v-2a6 6 0 0 0-5-5.917v-2.083h5v-2h-5zm-7 37v-21h12v21a1 1 0 0 1-1 1H11a1 1 0 0 1-1-1m-1-34a1 1 0 1 1 2 0a1 1 0 0 1-2 0m21 8a4 4 0 0 0-4 4v6a4 4 0 0 0 8 0v-6a4 4 0 0 0-4-4m-2 4a2 2 0 1 1 4 0v6a2 2 0 0 1-4 0zm10 5h-3v-2h3a3 3 0 1 1 0 6a1 1 0 0 0-1 1v1h4v2h-5a1 1 0 0 1-1-1v-2a3 3 0 0 1 3-3a1 1 0 0 0 0-2" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsOxygenTankNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsOxygenTankNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsOxygenTankOutlineIcon],svg[healthicons-oxygen-tank-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M17 6h2V4h-6v2h2v2h-2.17a3.001 3.001 0 1 0 0 2H15v2.083A6 6 0 0 0 10 18v25a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V18a6 6 0 0 0-5-5.917V10h5V8h-5zm-1 8a4 4 0 0 0-4 4v2h8v-2a4 4 0 0 0-4-4m-4 28V22h8v20zM9 9a1 1 0 1 1 2 0a1 1 0 0 1-2 0m17 12a4 4 0 0 1 8 0v6a4 4 0 0 1-8 0zm4-2a2 2 0 0 0-2 2v6a2 2 0 1 0 4 0v-6a2 2 0 0 0-2-2m8 7h-3v-2h3a3 3 0 1 1 0 6a1 1 0 0 0-1 1v1h4v2h-5a1 1 0 0 1-1-1v-2a3 3 0 0 1 3-3a1 1 0 1 0 0-2" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsOxygenTankOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsOxygenTankOutline24pxIcon],svg[healthicons-oxygen-tank-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M7 6.17C8.165 6.584 9 7.695 9 9v10.95A2.05 2.05 0 0 1 6.95 22h-1.9A2.05 2.05 0 0 1 3 19.95V9c0-1.306.835-2.417 2-2.83V4H4V2h4v2H7zM5 12v7.95c0 .028.022.05.05.05h1.9a.05.05 0 0 0 .05-.05V12zm2-2H5V9a1 1 0 1 1 2 0zm8 6c-1.144 0-1.932-.527-2.409-1.233c-.449-.665-.591-1.439-.591-1.967v-1.6c0-.528.142-1.302.591-1.967C13.068 8.527 13.856 8 15 8s1.932.527 2.409 1.233c.449.665.591 1.439.591 1.967v1.6c0 .528-.142 1.302-.591 1.967C16.932 15.473 16.144 16 15 16m-1.5-3.2c0 .272.083.698.309 1.033c.198.294.535.567 1.191.567s.993-.273 1.191-.567c.226-.335.309-.761.309-1.033v-1.6c0-.272-.083-.698-.309-1.033c-.198-.294-.535-.567-1.191-.567s-.993.273-1.191.567A2 2 0 0 0 13.5 11.2z" clip-rule="evenodd"></svg:path><svg:path d="M20.25 13.75a.46.46 0 0 0-.065-.25h-.37a.4.4 0 0 0-.047.109a.75.75 0 1 1-1.45-.384c.152-.576.638-1.225 1.432-1.225h.5c.496 0 .888.27 1.13.593s.37.734.37 1.157c0 .446-.143.883-.415 1.215L20.532 16H21a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.593-1.21l1.75-2.254l.018-.022a.43.43 0 0 0 .075-.264"></svg:path></svg:g>`,
})
export class HealthiconsOxygenTankOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPIcon],svg[healthicons-p-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 12a2 2 0 0 1 2-2h10a8 8 0 1 1 0 16h-8v10a2 2 0 1 1-4 0zm4 10h8a4 4 0 0 0 0-8h-8z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsPIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPNegativeIcon],svg[healthicons-p-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsPNegative0)"><svg:path d="M26 22h-8v-8h8a4 4 0 0 1 0 8"></svg:path><svg:path fill-rule="evenodd" d="M48 0H0v48h48zM16 10a2 2 0 0 0-2 2v24a2 2 0 1 0 4 0V26h8a8 8 0 1 0 0-16z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsPNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsPNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPOutlineIcon],svg[healthicons-p-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13 12a3 3 0 0 1 3-3h10a9 9 0 1 1 0 18h-7v9a3 3 0 1 1-6 0zm3-1a1 1 0 0 0-1 1v24a1 1 0 1 0 2 0V26a1 1 0 0 1 1-1h8a7 7 0 1 0 0-14zm1 3a1 1 0 0 1 1-1h8a5 5 0 0 1 0 10h-8a1 1 0 0 1-1-1zm2 1v6h7a3 3 0 1 0 0-6z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsPOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPainIcon],svg[healthicons-pain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M18.714 43.199a1 1 0 0 1-.904-1.088l.803-8.716l4.045 2.14l.93-5.594a1 1 0 0 1 1.973.329l-1.386 8.33l-3.846-2.034l-.527 5.729a1 1 0 0 1-1.088.904M4.706 29.753a1 1 0 0 1 .385-1.361l7.943-4.439l.549 4.757l5.443-2.54a1 1 0 0 1 .845 1.813l-7.957 3.713l-.523-4.533l-5.324 2.975a1 1 0 0 1-1.36-.385M9.355 9.552a1 1 0 0 1 1.373-.336l7.967 4.835l-3.977 2.903l5.068 3.607a1 1 0 0 1-1.16 1.63l-7.329-5.216l3.796-2.77l-5.402-3.28a1 1 0 0 1-.336-1.373m21.902-4.214a1 1 0 0 1 .81 1.158l-1.502 8.522l-3.803-2.433l-1.366 5.403a1 1 0 0 1-1.939-.49l2.046-8.094l3.613 2.313l.982-5.568a1 1 0 0 1 1.159-.811m12.597 14.025a1 1 0 0 1-.395 1.358l-7.616 4.177l-.483-4.509l-5.097 2.33a1 1 0 0 1-.832-1.82l7.621-3.482l.46 4.284l4.985-2.734a1 1 0 0 1 1.357.396m-5.19 18.126a1 1 0 0 1-1.373.336l-7.519-4.563l3.717-2.713l-4.652-3.311a1 1 0 0 1 1.16-1.63l6.912 4.92l-3.535 2.58l4.954 3.007a1 1 0 0 1 .336 1.374" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsPainIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPainManagmentIcon],svg[healthicons-pain-managment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3zm20.536 4.868c.068-.402-.19-.786-.577-.857a.714.714 0 0 0-.823.6l-.698 4.115l-2.567-1.709L23.417 19a.74.74 0 0 0 .514.897c.38.1.767-.14.864-.535l.97-3.994l2.703 1.799zm-16.142 2.258a.695.695 0 0 1 .976-.248l5.662 3.574l-2.827 2.146l3.602 2.666c.32.237.395.698.167 1.03a.693.693 0 0 1-.99.174l-5.21-3.855l2.698-2.048l-3.84-2.423a.756.756 0 0 1-.238-1.016m-3.03 13.926a.755.755 0 0 0-.274 1.006a.696.696 0 0 0 .967.285l3.784-2.2l.372 3.351l5.655-2.744a.75.75 0 0 0 .344-.982a.7.7 0 0 0-.945-.358l-3.868 1.878l-.39-3.517zm9.039 10.141a.73.73 0 0 0 .643.804a.72.72 0 0 0 .772-.668l.375-4.235l2.733 1.504l.986-6.158a.737.737 0 0 0-.585-.85a.714.714 0 0 0-.818.607l-.66 4.135l-2.876-1.582zm18.51-16.815a.755.755 0 0 1-.282 1.004l-5.412 3.087l-.344-3.332l-3.622 1.722a.7.7 0 0 1-.942-.365a.75.75 0 0 1 .351-.98l5.416-2.574l.327 3.167l3.542-2.021a.697.697 0 0 1 .965.292m-4.665 13.647c.335.211.772.1.976-.249a.756.756 0 0 0-.239-1.015l-3.52-2.223l2.512-1.907l-4.913-3.637a.693.693 0 0 0-.991.174a.76.76 0 0 0 .166 1.03l3.307 2.448l-2.642 2.006z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsPainManagmentIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPainManagmentNegativeIcon],svg[healthicons-pain-managment-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsPainManagmentNegative0)"><svg:path d="M28.96 10.011c.386.071.644.455.576.857l-1.068 6.299l-2.703-1.799l-.97 3.994a.71.71 0 0 1-.864.535a.74.74 0 0 1-.515-.897l1.454-5.983l2.568 1.71l.698-4.116a.714.714 0 0 1 .823-.6M14.37 12.878a.695.695 0 0 0-.976.248a.756.756 0 0 0 .239 1.016l3.839 2.423l-2.698 2.048l5.21 3.855c.319.237.763.16.99-.173a.76.76 0 0 0-.167-1.03l-3.602-2.667l2.827-2.146zm-4.28 15.18a.755.755 0 0 1 .274-1.006l5.645-3.28l.39 3.516l3.868-1.878a.7.7 0 0 1 .945.358c.166.37.012.81-.344.982l-5.655 2.744l-.372-3.35l-3.783 2.199a.696.696 0 0 1-.968-.285m9.956 9.939a.733.733 0 0 1-.643-.804l.57-6.443l2.875 1.582l.662-4.135a.714.714 0 0 1 .817-.607a.737.737 0 0 1 .585.85l-.985 6.158l-2.734-1.504l-.375 4.235a.72.72 0 0 1-.773.668m17.586-16.615a.755.755 0 0 0 .281-1.004a.697.697 0 0 0-.965-.292l-3.542 2.02l-.327-3.166l-5.416 2.574a.75.75 0 0 0-.35.98a.7.7 0 0 0 .94.365l3.623-1.722l.344 3.332zm-3.407 12.394a.695.695 0 0 1-.976.248l-5.344-3.372l2.642-2.006l-3.307-2.447a.76.76 0 0 1-.166-1.03a.693.693 0 0 1 .99-.175l4.914 3.637l-2.513 1.907l3.521 2.223a.756.756 0 0 1 .239 1.015"></svg:path><svg:path fill-rule="evenodd" d="M48 0H0v48h48zM6 9a3 3 0 0 1 3-3h30a3 3 0 0 1 3 3v30a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsPainManagmentNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsPainManagmentNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPainManagmentOutlineIcon],svg[healthicons-pain-managment-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M39 8H9a1 1 0 0 0-1 1v30a1 1 0 0 0 1 1h30a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1M9 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3z"></svg:path><svg:path d="M20.046 37.997a.733.733 0 0 1-.643-.804l.57-6.443l2.875 1.582l.662-4.135a.714.714 0 0 1 .817-.607a.737.737 0 0 1 .585.85l-.985 6.158l-2.734-1.504l-.375 4.235a.72.72 0 0 1-.773.668m-9.955-9.939a.755.755 0 0 1 .274-1.006l5.645-3.28l.39 3.516l3.868-1.878a.7.7 0 0 1 .945.358c.166.37.012.81-.344.982l-5.655 2.744l-.372-3.35l-3.783 2.199a.696.696 0 0 1-.968-.285m3.304-14.932a.695.695 0 0 1 .976-.248l5.662 3.574l-2.827 2.146l3.602 2.666c.32.237.395.698.167 1.03a.693.693 0 0 1-.99.174l-5.21-3.855l2.698-2.048l-3.84-2.423a.756.756 0 0 1-.238-1.016m15.566-3.115c.386.071.644.455.576.857l-1.068 6.299l-2.703-1.799l-.97 3.994a.71.71 0 0 1-.864.535a.74.74 0 0 1-.515-.897l1.454-5.983l2.568 1.71l.698-4.116a.714.714 0 0 1 .823-.6m8.953 10.367a.755.755 0 0 1-.281 1.004l-5.412 3.087l-.344-3.332l-3.622 1.722a.7.7 0 0 1-.942-.365a.75.75 0 0 1 .351-.98l5.416-2.574l.327 3.167l3.542-2.021a.697.697 0 0 1 .965.292m-3.688 13.398a.695.695 0 0 1-.976.248l-5.344-3.372l2.642-2.006l-3.307-2.447a.76.76 0 0 1-.166-1.03a.693.693 0 0 1 .99-.175l4.914 3.637l-2.513 1.907l3.521 2.223a.756.756 0 0 1 .239 1.015"></svg:path></svg:g>`,
})
export class HealthiconsPainManagmentOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPainNegativeIcon],svg[healthicons-pain-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsPainNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm18.714 43.199a1 1 0 0 1-.904-1.088l.802-8.716l4.045 2.14l.93-5.594a1 1 0 0 1 1.974.329l-1.386 8.33l-3.846-2.034l-.528 5.729a1 1 0 0 1-1.087.904M5.09 28.392a1 1 0 0 0 .976 1.746l5.324-2.976l.523 4.534l7.957-3.713a1 1 0 0 0-.846-1.812l-5.443 2.54l-.548-4.758zm4.263-18.84a1 1 0 0 1 1.374-.336l7.967 4.835l-3.978 2.903l5.069 3.607a1 1 0 1 1-1.16 1.63l-7.329-5.216l3.796-2.77l-5.403-3.28a1 1 0 0 1-.336-1.373m22.713-3.056a1 1 0 1 0-1.97-.347l-.981 5.568l-3.613-2.313l-2.046 8.094a1 1 0 1 0 1.94.49l1.365-5.403l3.803 2.433zm11.787 12.867a1 1 0 0 1-.396 1.358l-7.615 4.177l-.484-4.509l-5.097 2.33a1 1 0 0 1-.831-1.82l7.62-3.482l.46 4.284l4.985-2.734a1 1 0 0 1 1.358.396M37.29 37.825a1 1 0 1 0 1.038-1.71l-4.954-3.007l3.535-2.58l-6.913-4.92a1 1 0 0 0-1.16 1.63l4.653 3.31l-3.717 2.714z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsPainNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsPainNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPainOutlineIcon],svg[healthicons-pain-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M18.714 43.199a1 1 0 0 1-.904-1.087l.803-8.717l4.044 2.14l.931-5.594a1 1 0 0 1 1.973.329l-1.386 8.33l-3.846-2.034l-.527 5.729a1 1 0 0 1-1.088.904M4.706 29.753a1 1 0 0 1 .385-1.361l7.943-4.439l.549 4.757l5.443-2.54a1 1 0 1 1 .845 1.813l-7.957 3.713l-.523-4.533l-5.324 2.975a1 1 0 0 1-1.36-.385M9.355 9.552a1 1 0 0 1 1.373-.336l7.967 4.835l-3.977 2.903l5.068 3.607a1 1 0 1 1-1.16 1.63l-7.329-5.216l3.796-2.77l-5.402-3.28a1 1 0 0 1-.336-1.373m21.902-4.214a1 1 0 0 1 .81 1.158l-1.502 8.522l-3.803-2.433l-1.366 5.403a1 1 0 0 1-1.939-.49l2.046-8.094l3.613 2.313l.982-5.568a1 1 0 0 1 1.159-.811m12.597 14.025a1 1 0 0 1-.395 1.358l-7.616 4.177l-.483-4.509l-5.097 2.33a1 1 0 0 1-.832-1.82l7.621-3.482l.46 4.284l4.985-2.734a1 1 0 0 1 1.357.396m-5.19 18.126a1 1 0 0 1-1.373.336l-7.519-4.563l3.717-2.713l-4.652-3.311a1 1 0 0 1 1.16-1.63l6.912 4.92l-3.535 2.58l4.954 3.007a1 1 0 0 1 .336 1.374" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsPainOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPalliativeCareIcon],svg[healthicons-palliative-care-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.031 7C11.811 7 8 12.453 8 18.333c0 1.58.246 3.093.68 4.53q.32 1.055.763 2.054C13.55 34.205 25 39.867 25 39.867s2.533-1.334 5.644-3.694c-1.97-1.392-4.694-3.747-6.008-6.821a10 10 0 0 1-.407-1.134a8.9 8.9 0 0 1-.362-2.498c0-3.245 2.033-6.253 4.816-6.253c1.932 0 3.365 1.35 4.25 3.264c.885-1.914 2.319-3.264 4.25-3.264c1.842 0 3.354 1.316 4.167 3.146c.415-1.37.65-2.8.65-4.28C42 12.453 38.189 7 32.969 7c-3.622 0-6.31 2.447-7.969 5.917C23.341 9.447 20.653 7 17.031 7m23.425 18.101a1.133 1.133 0 0 1 1.117 1.15c-.05 3.71-1.845 6.235-3.589 7.8a13 13 0 0 1-2.374 1.685a11 11 0 0 1-1.026.499q-.044.016-.069.028l-.021.008l-.008.003l-.003.001a1.134 1.134 0 0 1-.802-2.12l.005-.002l.036-.015l.164-.07a10.6 10.6 0 0 0 2.584-1.702c1.413-1.27 2.797-3.235 2.837-6.147a1.133 1.133 0 0 1 1.149-1.118"></svg:path>`,
})
export class HealthiconsPalliativeCareIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPalliativeCare24pxIcon],svg[healthicons-palliative-care-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M7.313 2C4.243 2 2 5.318 2 8.897c0 .961.145 1.881.4 2.756q.188.642.449 1.25C5.264 18.555 12 22 12 22s1.857-1.01 3.97-2.774c-.998-.55-3.136-1.903-4.046-3.82a5 5 0 0 1-.224-.562a4 4 0 0 1-.2-1.24c0-1.61 1.121-3.104 2.656-3.104c1.021 0 1.79.673 2.282 1.566c.025.045.1.045.124 0c.492-.893 1.26-1.566 2.282-1.566c1.148 0 2.065.836 2.454 1.93c.44-1.11.702-2.293.702-3.533C22 5.319 19.758 2 16.688 2c-2.082 0-3.64 1.554-4.62 3.594a.076.076 0 0 1-.136 0C10.95 3.554 9.394 2 7.312 2"></svg:path><svg:path fill-rule="evenodd" d="M20.5 13.5a1 1 0 0 1 1 1c0 .562-.203 1.428-.635 2.245c-.44.833-1.184 1.739-2.357 2.189a1 1 0 1 1-.716-1.868c.577-.221 1.008-.692 1.305-1.255c.306-.58.403-1.127.403-1.311a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsPalliativeCare24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPalliativeCareNegativeIcon],svg[healthicons-palliative-care-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsPalliativeCareNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM8 18.333C8 12.453 11.812 7 17.031 7c3.622 0 6.31 2.447 7.969 5.917C26.659 9.447 29.347 7 32.969 7C38.189 7 42 12.454 42 18.333c0 1.48-.235 2.91-.65 4.28c-.813-1.83-2.325-3.146-4.167-3.146c-1.931 0-3.365 1.35-4.25 3.264c-.885-1.915-2.318-3.264-4.25-3.264c-2.783 0-4.816 3.008-4.816 6.253c0 .871.131 1.706.362 2.499q.17.58.407 1.133c1.314 3.074 4.038 5.429 6.008 6.82C27.533 38.534 25 39.868 25 39.868s-11.451-5.662-15.557-14.95a18 18 0 0 1-.763-2.054a15.6 15.6 0 0 1-.68-4.53m33.573 7.917a1.133 1.133 0 0 0-2.266-.031c-.04 2.912-1.424 4.878-2.837 6.146a10.6 10.6 0 0 1-1.954 1.385a9 9 0 0 1-.794.388l-.024.01l-.012.005l-.005.002a1.133 1.133 0 0 0 .802 2.12l.004-.001l.007-.003l.021-.008l.033-.014l.036-.014q.086-.035.234-.102c.196-.088.468-.219.792-.397a13 13 0 0 0 2.374-1.684c1.744-1.566 3.538-4.09 3.59-7.802" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsPalliativeCareNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsPalliativeCareNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPalliativeCareOutlineIcon],svg[healthicons-palliative-care-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M23.427 20.815c.996-1.346 2.473-2.315 4.256-2.315c1.837 0 3.249.958 4.25 2.303c1.002-1.345 2.414-2.303 4.25-2.303c1.056 0 1.99.288 2.782.8a5.6 5.6 0 0 1 1.535 1.503a1 1 0 1 1-1.638 1.148c-.724-1.033-1.644-1.451-2.679-1.451c-1.379 0-2.54.947-3.342 2.684l-.908 1.965l-.907-1.965c-.803-1.737-1.963-2.684-3.343-2.684c-1 0-1.931.536-2.648 1.504c-.72.973-1.168 2.324-1.168 3.749c0 .77.116 1.51.322 2.219q.153.52.367 1.02c1.011 2.367 3.233 4.332 5.058 5.752a1 1 0 0 1-1.228 1.578c-.323-.25-.67-.527-1.028-.827c-1.68-1.407-3.626-3.342-4.641-5.717a11 11 0 0 1-.448-1.246a9.9 9.9 0 0 1-.402-2.78c0-1.82.567-3.594 1.56-4.937" clip-rule="evenodd"></svg:path><svg:path d="m22.194 13.8l1.673 3.2l1.939-3.2c1.48-3.108 3.613-4.8 6.163-4.8c1.853 0 3.567.962 4.882 2.688C38.174 13.425 39 15.838 39 18.379q0 .464-.035.921a5.6 5.6 0 0 1 1.535 1.503c.111.158.17.338.18.518c.235-.975.32-1.793.32-2.942C41 12.476 37.189 7 31.969 7c-2.86 0-5.138 1.532-6.787 3.893A14.4 14.4 0 0 0 24 12.94a14.4 14.4 0 0 0-1.182-2.048C21.169 8.532 18.892 7 16.03 7C10.811 7 7 12.475 7 18.38c0 1.586.246 3.104.68 4.547q.32 1.06.763 2.063C12.55 34.315 24 40 24 40s2.456-1.298 5.501-3.601a1 1 0 0 1-1.115-.077c-.323-.25-.67-.527-1.028-.827c-.646.464-1.252.875-1.794 1.229a44 44 0 0 1-1.59.99q-.349-.196-.803-.466a44 44 0 0 1-4.193-2.844c-3.267-2.503-6.85-6.007-8.705-10.22a16 16 0 0 1-.678-1.832A13.8 13.8 0 0 1 9 18.379c0-2.542.826-4.955 2.15-6.691C12.463 9.962 14.177 9 16.03 9c2.55 0 4.683 1.692 6.163 4.8m17.263 11.301a1.133 1.133 0 0 1 1.117 1.15c-.05 3.71-1.845 6.235-3.589 7.8a13 13 0 0 1-2.374 1.685a11 11 0 0 1-1.026.499q-.044.016-.069.028l-.021.008l-.008.003l-.003.001a1.134 1.134 0 0 1-.802-2.12l.005-.002l.036-.015l.164-.07a10.6 10.6 0 0 0 2.584-1.702c1.413-1.27 2.797-3.235 2.837-6.147a1.133 1.133 0 0 1 1.149-1.118"></svg:path></svg:g>`,
})
export class HealthiconsPalliativeCareOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPalliativeCareOutline24pxIcon],svg[healthicons-palliative-care-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M20.5 13.446c.552 0 1 .445 1 .995c0 .56-.203 1.422-.635 2.235c-.44.829-1.184 1.73-2.357 2.178a1 1 0 0 1-1.292-.573a.994.994 0 0 1 .576-1.286c.577-.22 1.008-.69 1.305-1.25c.306-.575.403-1.12.403-1.304c0-.55.448-.995 1-.995"></svg:path><svg:path d="m19.601 11.895l.027.048l.002.002l.003.006l.01.019l.036.06c.025.042.07.115.117.182a1.002 1.002 0 0 0 1.526.135a1 1 0 0 0 .193-.27c.033-.065.051-.122.056-.136a7 7 0 0 0 .087-.336c.04-.177.09-.42.14-.689C21.892 10.4 22 9.7 22 9.173c0-1.8-.564-3.555-1.55-4.882C19.46 2.959 17.992 2 16.219 2c-1.783 0-3.2.78-4.219 2.07C10.98 2.78 9.564 2 7.781 2c-1.773 0-3.241.959-4.23 2.29C2.563 5.618 2 7.373 2 9.173c0 .963.146 1.88.4 2.748q.188.635.444 1.232c1.182 2.752 3.39 4.914 5.233 6.363c.931.73 1.79 1.297 2.418 1.681a21 21 0 0 0 1.025.587l.017.009l.005.002l.002.001L12 22l.409-.181l.004-.002l.016-.007l.055-.025l.2-.093c.17-.08.41-.195.692-.338a22 22 0 0 0 2.02-1.148c1-.65.795-1.99-.03-2.525c-.914-.592-2.395-1.746-3.057-3.237a4 4 0 0 1-.166-.445A3.3 3.3 0 0 1 12 13.05c0-.597.197-1.153.494-1.541c.293-.383.639-.552.975-.552c.154 0 .436.091.789.379c.337.274.632.642.807.98a1.055 1.055 0 0 0 1.87-.002c.178-.343.468-.712.797-.984c.344-.284.617-.373.768-.373c.284 0 .461.073.597.18c.153.118.322.33.483.707zM4.32 11.363A7.8 7.8 0 0 1 4 9.173C4 5.304 6.5 3.99 8 3.99c2.68 0 4 2.488 4 2.488c.755-1.568 2.803-2.488 4.219-2.488c.99 0 1.912.527 2.623 1.483c.713.96 1.158 2.293 1.158 3.699a3 3 0 0 1-.006.172a3 3 0 0 0-1.494-.378c-.807 0-1.522.4-2.047.834q-.241.2-.458.43a5 5 0 0 0-.471-.436c-.53-.431-1.252-.828-2.055-.828c-1.091 0-1.98.573-2.564 1.335c-.58.756-.905 1.743-.905 2.75c0 .534.084 1.043.228 1.52q.106.351.252.675c.743 1.678 2.158 2.934 3.185 3.683a23 23 0 0 1-1.628.864a23.5 23.5 0 0 1-2.72-1.84c-1.732-1.361-3.642-3.274-4.633-5.584a9 9 0 0 1-.364-1.007"></svg:path></svg:g>`,
})
export class HealthiconsPalliativeCareOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPalmBranchesRoofIcon],svg[healthicons-palm-branches-roof-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M25.381 9.543a2.03 2.03 0 0 0-2.762 0L7.336 24.093c-.482.458-.463 1.1.171 1.344C9.144 26.066 13.366 27 24 27s14.856-.934 16.493-1.563c.634-.243.653-.886.171-1.345z"></svg:path><svg:path fill-rule="evenodd" d="m23.988 11.001l-13.762 13.1C12.488 24.545 16.624 25 24 25s11.512-.456 13.774-.898L24.012 11zm16.676 13.091c.482.459.463 1.102-.171 1.345C38.856 26.066 34.634 27 24 27s-14.856-.934-16.493-1.563c-.634-.243-.653-.886-.171-1.345l15.283-14.55a2.03 2.03 0 0 1 2.762 0zM12 29.407c2.602.336 6.417.593 12 .593s9.398-.257 12-.593v11.159C36 42 28 42 28 42v-5c0-1.912-1.692-4-4-4s-4 2.088-4 4v5s-8 0-8-1.434z" clip-rule="evenodd"></svg:path><svg:path d="M23.004 6.83c-.05-.447.411-.83.996-.83s1.045.383.997.83l-.409 3.755c-.025.234-.28.415-.588.415s-.563-.18-.588-.415z"></svg:path><svg:path d="M26 7.187c.177-.39.706-.508 1.145-.255c.44.254.602.77.352 1.12l-2.1 2.928c-.131.183-.41.222-.64.089c-.23-.134-.337-.394-.244-.599zm-3.833.004c-.178-.393-.708-.512-1.147-.259c-.44.254-.6.772-.35 1.123L22.78 11c.131.184.41.224.64.09c.231-.133.337-.394.243-.6z"></svg:path></svg:g>`,
})
export class HealthiconsPalmBranchesRoofIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPalmBranchesRoofNegativeIcon],svg[healthicons-palm-branches-roof-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsPalmBranchesRoofNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM24.746 9.14q.156.06.302.149L26 7.187c.177-.39.706-.508 1.145-.255c.44.254.602.77.352 1.12l-1.494 2.083l14.661 13.957c.482.459.463 1.102-.171 1.345C38.856 26.066 34.634 27 24 27s-14.856-.934-16.493-1.563c-.634-.243-.653-.886-.171-1.345l14.758-14.05l-1.424-1.987c-.25-.35-.09-.869.35-1.123c.44-.253.969-.134 1.147.259l.918 2.024q.083-.042.17-.075l-.252-2.31c-.048-.447.412-.83.997-.83s1.045.383.997.83zM12 29.407c2.602.336 6.417.593 12 .593s9.398-.257 12-.593v11.159C36 42 28 42 28 42v-5c0-1.912-1.692-4-4-4s-4 2.088-4 4v5s-8 0-8-1.434z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsPalmBranchesRoofNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsPalmBranchesRoofNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPalmBranchesRoofOutlineIcon],svg[healthicons-palm-branches-roof-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M24 6c-.585 0-1.045.383-.997.83l.252 2.317a2 2 0 0 0-.166.078l-.922-2.034c-.178-.393-.708-.512-1.147-.259c-.44.254-.6.772-.35 1.123l1.448 2.022L7.336 24.93c-.482.484-.463 1.162.171 1.42c.66.267 1.741.587 3.493.874v12.34c0 .703.496 1.123.812 1.321c.344.216.768.364 1.178.475c.836.224 1.906.365 2.92.456a54 54 0 0 0 3.993.183H21v-6c0-1.424 1.307-3 3-3s3 1.576 3 3v6h1.096l.26-.003a54 54 0 0 0 3.733-.18c1.015-.091 2.085-.232 2.92-.456c.411-.11.835-.26 1.179-.475c.316-.198.812-.618.812-1.32v-12.34c1.752-.287 2.833-.607 3.493-.875c.634-.257.653-.935.171-1.42L25.977 10.173l1.52-2.12c.25-.35.087-.866-.352-1.12c-.44-.253-.968-.136-1.145.255l-.957 2.114a2 2 0 0 0-.298-.154l.252-2.317C25.045 6.383 24.585 6 24 6m4 35v1zm-8 0v1zm4-29.98L10.072 25.018C12.282 25.493 16.43 26 24 26s11.718-.507 13.929-.983zM24 28c4.906 0 8.448-.21 11-.501v11.758c-.113.05-.28.11-.51.172c-.664.179-1.594.307-2.58.396a47 47 0 0 1-2.91.16V36c0-2.4-2.078-5-5-5s-5 2.6-5 5v3.984l-.22-.006a47 47 0 0 1-2.69-.153c-.986-.089-1.916-.217-2.58-.396a3.5 3.5 0 0 1-.51-.172V27.499c2.552.291 6.094.501 11 .501" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsPalmBranchesRoofOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPancreasIcon],svg[healthicons-pancreas-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M23.468 8.4V6h-2.33C12.882 6 6 12.612 6 21s6.881 15 15.139 15v6h2.329v-6c0-1.325-1.043-2.4-2.33-2.4C14.065 33.6 8.33 27.959 8.33 21c0-6.176 4.518-11.315 10.48-12.392c.756-.137 3.863-.208 4.659-.208m1.58 21.84c1.857 1.294 3.078 3.484 3.078 5.969V42h-2.33v-5.791q.001-.105-.004-.209c-.106-2.554-2.149-4.591-4.653-4.591c-5.845 0-10.582-4.66-10.582-10.409c0-3.175 1.617-6.345 4.346-8.367c.427-.316.88-.565 1.36-.759a10 10 0 0 1 4.522-1.074c.936 0 1.822.14 2.683.36c1.084.275 2.13.677 3.181 1.08c1.68.646 3.38 1.3 5.292 1.46c1.118.094 2.264-.624 3.429-1.355c1.777-1.115 3.6-2.259 5.447-.594c.942.849 1.753 2.66.656 4.737c-2.262 4.114-4.97 7.153-9.57 8.186l-1.815.407c-1.025 2.4-2.87 4.158-5.04 5.159" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsPancreasIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPancreas24pxIcon],svg[healthicons-pancreas-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M11.513 3c-.986 0-2.964.194-3.876.57a7.5 7.5 0 0 0-4.065 4.06A7.49 7.49 0 0 0 5.2 15.803a7.5 7.5 0 0 0 2.437 1.626c.552.229 1.496.39 2.374.481V21h2.003v-3.5a1.5 1.5 0 0 0-1.206-1.471a1.1 1.1 0 0 0-.293-.065c-.77-.063-1.673-.188-2.116-.371a5.52 5.52 0 0 1-2.988-2.983a5.505 5.505 0 0 1 1.197-6.008a5.5 5.5 0 0 1 1.791-1.195c.67-.277 2.39-.42 3.114-.42z"></svg:path><svg:path d="M20.57 5.89c-.361-.469-.875-.613-1.33-.58c-.389.03-.748.184-1.01.317a10 10 0 0 0-.808.473l-.087.055c-.224.141-.42.265-.606.369a.7.7 0 0 1-.162.06c-.593.147-1.317.305-2.432.173c-.533-.063-1.166-.243-2.03-.489l-.319-.09a4.54 4.54 0 0 0-2.432-.024a4.52 4.52 0 0 0-2.591 1.851a4.484 4.484 0 0 0 .798 5.893a4.53 4.53 0 0 0 3.082 1.1l-.001.002c1.372 0 2.374.59 2.374 1.5V21h2.003v-5.5c0-.727-.477-1.563-1.206-1.75l-.127-.036c.219-.218.413-.468.583-.739c.138-.018.299-.037.474-.057c.444-.052.978-.114 1.456-.203c.763-.141 1.627-.381 2.38-.883a5.48 5.48 0 0 0 2.223-3.064a4.8 4.8 0 0 0 .194-1.523c-.02-.428-.116-.953-.426-1.355"></svg:path></svg:g>`,
})
export class HealthiconsPancreas24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPancreasNegativeIcon],svg[healthicons-pancreas-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsPancreasNegative0)"><svg:path d="M21.14 10.259c.204-.07.369-.048.57.064c.239.133.5.383.775.739c.38.493.805 1.453.906 2.36c.104.928-.148 1.337-.504 1.505c-.255.119-.425.102-.568.049c-.178-.067-.4-.228-.642-.53c-.494-.618-.84-1.544-.944-2.197c-.093-.586-.126-1.088-.044-1.459c.047-.208.116-.342.253-.436l.013-.007l.059-.033l.014-.008l.003-.003a1 1 0 0 1 .11-.044m3.923 21.906l-.223.226l-.004.005l-.02.019q-.013.015-.036.037l-.04.04q-.105.104-.3.29c-.257.245-.622.582-1.046.946c-.87.749-1.91 1.542-2.777 1.947c-2.05.96-3.95 1.302-5.643 1.01c-1.671-.29-3.258-1.22-4.676-3.031c-3.435-4.389-2.352-11.076.88-15.613c1.283-1.8 3.695-3.723 5.889-5.24c.496-.343.975-.661 1.418-.947c.022.27.058.524.093.746c.152.963.627 2.269 1.403 3.24c.172.215.369.427.592.617q-.213.147-.436.305a3 3 0 0 0-.188.133c-1.723 1.222-3.933 2.902-5.341 4.413c-.707.759-1.373 1.508-1.842 2.368c-.49.898-.746 1.879-.725 3.088c.022 1.27.13 2.383 1.091 3.596c.473.597.994 1.047 1.62 1.359c.617.307 1.273.446 1.967.511c.558.053 1.186-.05 1.602-.136a11 11 0 0 0 .726-.177l.048-.014l.014-.004l.005-.002l.133-.04l4.95-3l.012-.008c1.728-1.107 3.12-1.275 4.368-.89c.82.254 1.652.769 2.521 1.558a6 6 0 0 0-.758.448a7.6 7.6 0 0 0-1.465 1.325c-.29.343-.57.742-.756 1.16a4 4 0 0 0-.338-.175c-.784-.358-1.56-.376-2.41-.181zm5.075 2.305a2 2 0 0 1-.06-.126a5 5 0 0 1-.028-.303c-.017-.277-.005-.489.02-.578c.029-.11.16-.375.46-.73a5.5 5.5 0 0 1 1.034-.936c.395-.271.744-.422.993-.467a.5.5 0 0 1 .21-.007c.017.004.02.006.027.014a.7.7 0 0 1 .156.205c.028.06.06.158.1.374c.027.149 0 .442-.211.861c-.203.402-.526.82-.914 1.168c-.392.35-.794.581-1.13.676c-.29.081-.463.048-.572-.01a1 1 0 0 1-.085-.142"></svg:path><svg:path fill-rule="evenodd" d="M48 0H0v48h48zM20.441 8.162q-.349.121-.627.296l-.171.098a59 59 0 0 0-3.804 2.415c-2.21 1.529-4.904 3.635-6.427 5.773c-3.546 4.976-5.103 12.817-.822 18.287c1.707 2.18 3.748 3.442 6.018 3.836c2.248.389 4.602-.095 6.924-1.181c1.15-.539 2.379-1.5 3.274-2.268a30 30 0 0 0 1.331-1.217c.336-.044.55.001.75.093c.293.134.648.408 1.206.969q.048.108.119.245c.11.21.358.65.77.926c.776.522 1.65.53 2.398.32c.736-.207 1.424-.642 1.99-1.15a6.3 6.3 0 0 0 1.413-1.82c.331-.658.562-1.466.412-2.275a3.8 3.8 0 0 0-.268-.906a2.8 2.8 0 0 0-.566-.808c-1.567-1.909-3.241-3.365-5.148-3.954a7 7 0 0 0-.247-.07q.42-.09.883-.122c.717-.052 1.433-.016 2.226.024q.462.025.966.044c1.138.04 2.402.02 3.634-.381c1.268-.414 2.441-1.213 3.44-2.62c.288-.408 1.085-1.594 1.538-2.802c.22-.586.42-1.33.321-2.045a2.2 2.2 0 0 0-.484-1.129a2.24 2.24 0 0 0-1.106-.703c-1.262-.371-2.388-.196-3.382.022q-.333.074-.645.148c-.762.178-1.457.341-2.274.372c-1.768.066-3.148-.109-4.6-.293l-.048-.006c-1.336-.17-2.735-.344-4.465-.304c.598-.841.687-1.923.59-2.804c-.146-1.306-.723-2.654-1.358-3.476c-.646-.836-1.947-2.157-3.761-1.534" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsPancreasNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsPancreasNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPancreasOutlineIcon],svg[healthicons-pancreas-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M23.468 8.4V6h-2.33C12.882 6 6 12.612 6 21s6.881 15 15.139 15v6h2.329v-6c0-1.325-1.043-2.4-2.33-2.4C14.065 33.6 8.33 27.959 8.33 21c0-6.176 4.518-11.315 10.48-12.392c.756-.137 3.863-.208 4.659-.208"></svg:path><svg:path fill-rule="evenodd" d="M25.048 30.24c1.857 1.294 3.078 3.485 3.078 5.969V42h-2.33v-5.791q.001-.105-.004-.209c-.106-2.554-2.149-4.591-4.653-4.591c-5.845 0-10.582-4.66-10.582-10.409c0-3.175 1.617-6.345 4.346-8.367a6 6 0 0 1 1.36-.76a10 10 0 0 1 4.522-1.073c.935 0 1.822.14 2.683.36c1.084.275 2.13.677 3.181 1.08c1.68.646 3.38 1.3 5.292 1.46c1.118.094 2.264-.624 3.429-1.355c1.776-1.115 3.6-2.259 5.447-.594c.942.85 1.753 2.66.656 4.737c-2.262 4.114-4.97 7.153-9.57 8.186l-1.815.407c-1.025 2.4-2.87 4.158-5.04 5.159m-2.942-1.163c2.607-.449 5.007-2.122 6.143-4.782l.402-.941l2.814-.632c3.79-.85 6.114-3.307 8.247-7.18c.59-1.132.141-1.967-.234-2.306c-.367-.33-.578-.335-.75-.319c-.305.03-.74.192-1.433.594c-.276.16-.549.331-.854.523l-.196.123c-.37.23-.786.487-1.215.716c-.82.437-1.961.93-3.257.82c-2.207-.186-4.156-.936-5.796-1.568l-.353-.135c-1.13-.433-2.125-.792-3.103-.999h-1.382c-4.662 0-8.253 3.69-8.253 8.009s3.591 8.009 8.253 8.009q.492 0 .967.068" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsPancreasOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPancreasOutline24pxIcon],svg[healthicons-pancreas-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M11.513 3c-.986 0-2.964.194-3.876.57a7.5 7.5 0 0 0-4.065 4.06A7.49 7.49 0 0 0 5.2 15.803a7.5 7.5 0 0 0 2.437 1.626c.552.229 1.496.39 2.374.481V21h2.003v-3.5a1.5 1.5 0 0 0-1.206-1.47a1.1 1.1 0 0 0-.295-.066c-.77-.064-1.671-.188-2.114-.371a5.52 5.52 0 0 1-2.988-2.983a5.505 5.505 0 0 1 1.197-6.008a5.5 5.5 0 0 1 1.791-1.195c.67-.277 2.39-.42 3.114-.42z"></svg:path><svg:path fill-rule="evenodd" d="M19.24 5.31c.455-.033.969.111 1.33.58c.31.402.407.927.426 1.355c.021.467-.042.992-.194 1.523a5.48 5.48 0 0 1-2.223 3.064c-.753.502-1.617.742-2.38.883c-.478.088-1.012.15-1.456.203c-.175.02-.336.039-.474.057c-.17.27-.364.521-.583.74l.127.035c.729.187 1.206 1.023 1.206 1.75V21h-2.003v-4.5c0-.91-1.002-1.5-2.374-1.5v-.002l-.091.002a4.53 4.53 0 0 1-2.99-1.102a4.484 4.484 0 0 1-.798-5.892a4.52 4.52 0 0 1 2.59-1.852a4.54 4.54 0 0 1 2.433.025l.319.09c.864.245 1.497.425 2.03.488c1.115.132 1.839-.026 2.432-.174a.7.7 0 0 0 .162-.06c.187-.103.382-.227.606-.368l.087-.055c.245-.155.529-.332.807-.473c.263-.133.622-.288 1.012-.316m-3.406 5.438a14 14 0 0 1-.96.14l-1.208.073c-.395.024-.736.28-.918.632c-.144.276-.336.586-.549.774a2.53 2.53 0 0 1-3.327.019a2.487 2.487 0 0 1-.444-3.27a2.52 2.52 0 0 1 1.443-1.03a2.53 2.53 0 0 1 1.77.173c.168.083.63.223.932.311q.28.08.57.115c.191.022.442.05.636.065c.16.013.361.024.535.033c1.232.09 2.1-.1 2.737-.26a2.7 2.7 0 0 0 .653-.252c.24-.134.486-.29.703-.427l.085-.054q.284-.18.504-.305c-.006.207-.042.46-.12.735a3.48 3.48 0 0 1-1.408 1.948c-.425.283-.98.46-1.634.58" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsPancreasOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPancreaticCancerIcon],svg[healthicons-pancreatic-cancer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M23.468 6v2.4c-.796 0-3.903.071-4.658.208C12.847 9.685 8.329 14.824 8.329 21c0 6.959 5.735 12.6 12.81 12.6c1.286 0 2.329 1.075 2.329 2.4v6h-2.33v-6C12.882 36 6 29.388 6 21S12.881 6 21.139 6z"></svg:path><svg:path d="M27.253 19.462c.315-.57 1.048-.846 1.882-.367L20.5 24.548l.108-.517a5.8 5.8 0 0 1 .602-1.64l.26-.467l-.245-.476c-.516-1-.244-1.948.275-2.32c.495-.356 1.409-.308 2.13.523l.37.427l.557-.097a5.3 5.3 0 0 1 1.677-.015l.684.1zm-7.067 5.283l-1.277.807c.18-.424.527-.677.89-.74z"></svg:path><svg:path fill-rule="evenodd" d="M28.126 36.209c0-2.485-1.221-4.675-3.079-5.97c2.172-1 4.016-2.758 5.041-5.158l1.815-.407c4.6-1.033 7.308-4.072 9.57-8.186c1.097-2.077.286-3.888-.656-4.737c-1.847-1.665-3.67-.52-5.447.594c-1.165.73-2.31 1.45-3.43 1.355c-1.91-.16-3.61-.814-5.29-1.46c-1.053-.403-2.098-.805-3.182-1.08c-.861-.22-1.747-.36-2.683-.36c-1.625 0-3.16.387-4.522 1.074c-.48.194-.933.443-1.36.76c-2.73 2.021-4.346 5.191-4.346 8.366c0 5.749 4.737 10.409 10.582 10.409c2.504 0 4.547 2.037 4.653 4.591q.005.105.005.209V42h2.329zm-7.627-11.662l8.636-5.453c.78.447 1.16 1.479 1.16 2.701h2c0-1.469-.442-3.448-2.165-4.436c-1.459-.836-3.195-.624-4.228.563a7 7 0 0 0-1.159.017c-1.218-1.08-3.008-1.443-4.411-.435c-1.39.999-1.672 2.831-1.103 4.368a8 8 0 0 0-.433 1.157c-1.455.59-2.214 2.187-1.965 3.835l2.078-1.312l-2.078 1.312c.192 1.267 1.216 1.915 2.042 2.226c.852.32 1.792.41 2.411.41v-2c-.472 0-1.154-.074-1.707-.282c-.578-.218-.74-.463-.769-.653c-.06-.403-.014-.743.101-1.013l1.277-.807l.282-.049z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsPancreaticCancerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPancreaticCancerOutlineIcon],svg[healthicons-pancreatic-cancer-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M23.468 6v2.4c-.796 0-3.903.071-4.658.208C12.847 9.685 8.329 14.824 8.329 21c0 6.959 5.735 12.6 12.81 12.6c1.286 0 2.329 1.075 2.329 2.4v6h-2.33v-6C12.882 36 6 29.388 6 21S12.881 6 21.139 6z"></svg:path><svg:path fill-rule="evenodd" d="M28.126 36.209c0-2.485-1.221-4.675-3.079-5.969c2.156-.993 3.989-2.733 5.018-5.106l.09-.068l1.748-.392c4.6-1.033 7.308-4.072 9.57-8.186c1.097-2.077.286-3.888-.656-4.737c-1.847-1.665-3.67-.52-5.447.594c-1.165.73-2.31 1.45-3.43 1.355c-1.91-.16-3.61-.813-5.29-1.46c-1.053-.403-2.098-.805-3.182-1.08a10.8 10.8 0 0 0-2.683-.36c-1.625 0-3.16.387-4.521 1.074c-.48.193-.934.443-1.36.76c-2.73 2.021-4.347 5.191-4.347 8.366c0 5.749 4.737 10.409 10.582 10.409c2.504 0 4.547 2.037 4.653 4.591q.005.105.005.209V42h2.329zm3.008-13.412l.33-.075c3.792-.85 6.115-3.307 8.248-7.18c.59-1.132.141-1.967-.234-2.306c-.367-.33-.578-.335-.75-.319c-.305.03-.74.192-1.433.594c-.276.16-.549.331-.854.523l-.196.123c-.37.23-.786.487-1.215.716c-.82.437-1.961.93-3.257.82c-2.207-.186-4.156-.936-5.796-1.568l-.353-.135c-1.13-.433-2.125-.792-3.103-.999h-1.382c-4.662 0-8.253 3.69-8.253 8.009c0 3.19 1.958 6.035 4.859 7.306a3.4 3.4 0 0 1-.108-.48c-.22-1.457.571-2.673 1.808-2.887a6.8 6.8 0 0 1 .707-1.92c-.675-1.31-.45-2.85.58-3.59s2.51-.425 3.47.68a6.3 6.3 0 0 1 1.993-.02c.622-1.122 2.003-1.467 3.255-.75c1.216.698 1.901 2.164 1.684 3.458" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsPancreaticCancerOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPatientBandIcon],svg[healthicons-patient-band-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M42 26.5a.5.5 0 0 1-.5.5H37v2h3.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-8.447v2H37.3c-2.85 2.272-7.223 2.524-10.474.733l-5.844-3.22l-.966 1.752l5.845 3.22c3.947 2.174 9.276 1.888 12.806-1.019A16 16 0 0 0 40.221 33h.278a2.5 2.5 0 0 0 2.5-2.5v-1a2.5 2.5 0 0 0-.162-.888A2.5 2.5 0 0 0 44 26.5v-1c0-.889-.464-1.669-1.162-2.112A2.5 2.5 0 0 0 43 22.5v-1a2.5 2.5 0 0 0-2-2.45v-.81a3 3 0 0 0-2.767-2.992L35.039 15h-.653c-4.994 0-9.914 1.2-14.347 3.501l.922 1.775A29.14 29.14 0 0 1 34.386 17h.575l3.117.242a1 1 0 0 1 .922.997V19h-2v2h3.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H37v2h4.5a.5.5 0 0 1 .5.5zM6 20h9v2H6zm0 10h9v2H6z"></svg:path><svg:path d="M14 10a3 3 0 1 1 6 0v8a3 3 0 1 1-6 0zm4 .555a1 1 0 1 1-2 0a1 1 0 0 1 2 0M17 15a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path><svg:path d="M14 10a3 3 0 1 1 6 0v8a3 3 0 1 1-6 0zm4 6.83V18a1 1 0 1 1-2 0v-1.17a3 3 0 0 0 2 0m-.172-3.39a1 1 0 1 1-1.657 1.12a1 1 0 0 1 1.657-1.12m0-2.324a1 1 0 1 0-1.657-1.12a1 1 0 0 0 1.657 1.12"></svg:path><svg:path d="M12 20a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-1.041 1.755c-.485.266-.959.693-.959 1.245a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1c0-.552-.475-.98-.959-1.245A2 2 0 0 1 12 32zm3.5 1a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5z"></svg:path><svg:path d="M15.236 32.986a3.3 3.3 0 0 1 .59 1.014h2.347a3.3 3.3 0 0 1 .591-1.014M14 18a2 2 0 0 0-2 2v12a2 2 0 0 0 1.041 1.755c.484.266.959.693.959 1.245a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1c0-.552.474-.98.959-1.245A2 2 0 0 0 22 32V20a2 2 0 0 0-2-2zm1 3.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5z"></svg:path></svg:g>`,
})
export class HealthiconsPatientBandIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPatientBandAltIcon],svg[healthicons-patient-band-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.443 15.857A1.5 1.5 0 0 1 8 14.787v-1.544a2 2 0 0 0-.586-1.415l-1.707-1.707a3 3 0 0 1 0-4.242l.172-.172a3 3 0 0 1 4.242 0l1.707 1.707A2 2 0 0 0 13.243 8h1.544c.402 0 .787.16 1.07.443l8.79 8.79A4.62 4.62 0 0 1 26 20.5c0 .695.276 1.362.768 1.854l15.44 15.439a3.122 3.122 0 0 1-4.415 4.414l-15.44-15.44A2.62 2.62 0 0 0 20.5 26a4.62 4.62 0 0 1-3.268-1.354zM8 9a1 1 0 1 0 0-2a1 1 0 0 0 0 2m18 18a1 1 0 1 0 0-2a1 1 0 0 0 0 2m4 2a1 1 0 1 1-2 0a1 1 0 0 1 2 0m2 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2m4 2a1 1 0 1 1-2 0a1 1 0 0 1 2 0m2 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2M13.293 11.707l-1.586 1.586a1 1 0 0 0 0 1.414l7.586 7.586a1 1 0 0 0 1.414 0l1.586-1.586a1 1 0 0 0 0-1.414l-7.586-7.586a1 1 0 0 0-1.414 0" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsPatientBandAltIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPatientBandAltNegativeIcon],svg[healthicons-patient-band-alt-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsPatientBandAltNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM8 14.787c0 .402.16.787.443 1.07l8.79 8.79A4.62 4.62 0 0 0 20.5 26c.695 0 1.362.276 1.854.768l15.439 15.44a3.122 3.122 0 0 0 4.414-4.415l-15.44-15.44A2.62 2.62 0 0 1 26 20.5a4.62 4.62 0 0 0-1.354-3.268l-8.789-8.789A1.5 1.5 0 0 0 14.787 8h-1.544a2 2 0 0 1-1.415-.586l-1.707-1.707a3 3 0 0 0-4.242 0l-.172.172a3 3 0 0 0 0 4.242l1.707 1.707A2 2 0 0 1 8 13.243zM9 8a1 1 0 1 1-2 0a1 1 0 0 1 2 0m18 18a1 1 0 1 1-2 0a1 1 0 0 1 2 0m2 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2m4 2a1 1 0 1 1-2 0a1 1 0 0 1 2 0m2 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2m4 2a1 1 0 1 1-2 0a1 1 0 0 1 2 0M11.707 13.293l1.586-1.586a1 1 0 0 1 1.414 0l7.586 7.586a1 1 0 0 1 0 1.414l-1.586 1.586a1 1 0 0 1-1.414 0l-7.586-7.586a1 1 0 0 1 0-1.414" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsPatientBandAltNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsPatientBandAltNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPatientBandAltOutlineIcon],svg[healthicons-patient-band-alt-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M7.736 16.565A2.5 2.5 0 0 1 7 14.786v-1.544a1 1 0 0 0-.293-.707L5 10.828a4 4 0 0 1 0-5.656L5.172 5a4 4 0 0 1 5.656 0l1.708 1.707a1 1 0 0 0 .707.293h1.544c.667 0 1.306.265 1.777.736l8.79 8.79A5.62 5.62 0 0 1 27 20.5c0 .43.17.842.475 1.146l15.44 15.44a4.122 4.122 0 0 1-5.83 5.828l-15.439-15.44A1.62 1.62 0 0 0 20.5 27c-1.49 0-2.92-.592-3.975-1.646zm-1.322-9.98l.172-.17a2 2 0 0 1 2.828 0l1.707 1.706A3 3 0 0 0 13.243 9h1.544c.136 0 .267.054.363.15l8.79 8.79c.678.678 1.06 1.6 1.06 2.56s.381 1.881 1.06 2.56L41.5 38.5a2.121 2.121 0 1 1-3 3L23.06 26.06c-.678-.678-1.6-1.06-2.56-1.06s-1.882-.382-2.56-1.06l-8.79-8.79a.5.5 0 0 1-.15-.363v-1.544a3 3 0 0 0-.879-2.122L6.414 9.414a2 2 0 0 1 0-2.828" clip-rule="evenodd"></svg:path><svg:path d="M27 26a1 1 0 1 1-2 0a1 1 0 0 1 2 0M9 8a1 1 0 1 1-2 0a1 1 0 0 1 2 0m21 21a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3 3a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3 3a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3 3a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path fill-rule="evenodd" d="M12.586 11a2 2 0 0 1 2.828 0L23 18.586a2 2 0 0 1 0 2.828L21.414 23a2 2 0 0 1-2.828 0L11 15.414a2 2 0 0 1 0-2.828zM14 12.414L12.414 14L20 21.586L21.586 20z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsPatientBandAltOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPatientBandNegativeIcon],svg[healthicons-patient-band-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsPatientBandNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM17 7a3 3 0 0 0-3 3v8a2 2 0 0 0-2 2H6v2h6v8H6v2h6a2 2 0 0 0 1.041 1.755c.484.266.959.693.959 1.245a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1c0-.552.474-.98.959-1.245a2 2 0 0 0 .674-.6l4.229 2.33c3.947 2.174 9.276 1.888 12.806-1.019A16 16 0 0 0 40.222 33h.278a2.5 2.5 0 0 0 2.5-2.5v-1a2.5 2.5 0 0 0-.162-.888A2.5 2.5 0 0 0 44 26.5v-1c0-.889-.464-1.669-1.162-2.112A2.5 2.5 0 0 0 43 22.5v-1a2.5 2.5 0 0 0-2-2.45v-.81a3 3 0 0 0-2.767-2.992L35.039 15h-.653a31.14 31.14 0 0 0-13.638 3.145A2 2 0 0 0 20 18v-8a3 3 0 0 0-3-3m-1.5 24a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5zm11.327 2.733L22 31.073V20a2 2 0 0 0-.013-.23A29.1 29.1 0 0 1 34.386 17h.575l3.117.242a1 1 0 0 1 .922.997V19h-2v2h3.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H37v2h4.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H37v2h3.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-8.447v2H37.3c-2.85 2.272-7.223 2.524-10.474.733M17 11.555a1 1 0 1 0 0-2a1 1 0 0 0 0 2M18 14a1 1 0 1 1-2 0a1 1 0 0 1 2 0" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsPatientBandNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsPatientBandNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPatientBandOutlineIcon],svg[healthicons-patient-band-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M42 26.667a.5.5 0 0 1-.5.5H37v2h3.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-8.447v2h5.314c-2.84 2.516-7.337 2.825-10.623.825l-5.224-3.18l-1.04 1.709l5.224 3.18c4.008 2.44 9.496 2.09 13.028-1.072c.479-.429.972-.906 1.49-1.462h.278a2.5 2.5 0 0 0 2.5-2.5v-1a2.5 2.5 0 0 0-.162-.888A2.5 2.5 0 0 0 44 26.666v-1a2.5 2.5 0 0 0-1.162-2.112a2.5 2.5 0 0 0 .162-.887v-1a2.5 2.5 0 0 0-2-2.45v-.811a3 3 0 0 0-2.767-2.991l-3.194-.248h-1.275a29.65 29.65 0 0 0-13.21 3.104l.892 1.79a27.65 27.65 0 0 1 12.318-2.895h1.197l3.117.243a1 1 0 0 1 .922.997v.76h-2v2h3.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H37v2h4.5a.5.5 0 0 1 .5.5z"></svg:path><svg:path d="M21 21.167a2 2 0 0 1-2-2v-8a1 1 0 1 0-2 0v8a2 2 0 0 1-2 2v9a2 2 0 0 1 2 2v1h2v-1a2 2 0 0 1 2-2zm0 11a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2v-8a3 3 0 1 0-6 0v8a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2v3h6z"></svg:path><svg:path d="M19 22.167h-2v7h2zm1-4h-5v-2h5zM6 20h9v2H6zm0 9h9v2H6z"></svg:path></svg:g>`,
})
export class HealthiconsPatientBandOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPavedRoadIcon],svg[healthicons-paved-road-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.056 40.001c-.062 1.103.84 2 1.944 2h14c1.105 0 1.989-.899 2.111-1.997a18 18 0 0 1 15.893-15.893C41.102 23.99 42 23.105 42 22.001V8c0-1.105-.896-2.007-1.999-1.945A36 36 0 0 0 6.056 40m30.957-24.363a27 27 0 0 1 2.213-.394l-.269-1.982a29 29 0 0 0-2.377.423zm-8.299 3.357a27 27 0 0 1 4.01-2.025l-.75-1.854a29 29 0 0 0-4.307 2.175zm-5.248 4.209a27 27 0 0 1 1.63-1.547l-1.315-1.507a29 29 0 0 0-3.358 3.463l1.547 1.268a27 27 0 0 1 1.496-1.677m-5.946 9.445a27 27 0 0 1 1.9-4.07l-1.735-.994a29 29 0 0 0-2.041 4.372zm-1.525 6.553q.118-1.122.325-2.224l-1.965-.372q-.224 1.183-.35 2.388z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsPavedRoadIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPavedRoad24pxIcon],svg[healthicons-paved-road-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M21 3.569c0-.552-.414-1.01-.947-1.048a1.2 1.2 0 0 0-.303-.018c-6.566.451-12.145 4.411-14.89 10.022q-.262.531-.49 1.082A18.5 18.5 0 0 0 3 19.499l.014.746A1.18 1.18 0 0 0 4.192 21.5h8.73c.567 0 1.039-.438 1.08-1.004c.25-3.344 2.775-6.204 6.085-6.73c.526-.083.913-.536.913-1.07zm-2.26 5.744q.627-.07 1.26-.071v-1.5q-.717 0-1.427.08zm-3.045.786q.585-.242 1.19-.417L16.47 8.24a12.7 12.7 0 0 0-2.637 1.093l.725 1.314q.552-.306 1.137-.548m-3.65 2.44q.447-.448.94-.841l-.934-1.174a12.8 12.8 0 0 0-2.02 2.02l1.173.936q.393-.493.841-.94m-2.439 3.652q.243-.586.548-1.137l-1.313-.726a12.8 12.8 0 0 0-1.093 2.64l1.442.415q.174-.606.416-1.192M8.75 20.5q0-.634.07-1.26l-1.49-.168q-.08.71-.08 1.428z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsPavedRoad24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPavedRoadAltIcon],svg[healthicons-paved-road-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15 6a2 2 0 0 0-2 2v32a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm8 5a1 1 0 1 1 2 0v4a1 1 0 0 1-2 0zm0 11a1 1 0 1 1 2 0v4a1 1 0 0 1-2 0zm1 10a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0v-4a1 1 0 0 0-1-1" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsPavedRoadAltIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPavedRoadAlt24pxIcon],svg[healthicons-paved-road-alt-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M6.75 21V3A.25.25 0 0 1 7 2.75h10a.25.25 0 0 1 .25.25v18a.25.25 0 0 1-.25.25H7a.25.25 0 0 1-.25-.25Zm7-16a1.75 1.75 0 1 0-3.5 0v2.5a1.75 1.75 0 0 0 1.1 1.625a1.75 1.75 0 0 0-1.1 1.625v2.5c0 .637.34 1.194.848 1.5a1.75 1.75 0 0 0-.848 1.5v2.5a1.75 1.75 0 1 0 3.5 0v-2.5c0-.637-.34-1.194-.848-1.5c.508-.306.848-.863.848-1.5v-2.5a1.75 1.75 0 0 0-1.1-1.625a1.75 1.75 0 0 0 1.1-1.625z"></svg:path>`,
})
export class HealthiconsPavedRoadAlt24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPavedRoadAltNegativeIcon],svg[healthicons-paved-road-alt-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsPavedRoadAltNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 .04L0 0l-.04 48l48 .04zM12.994 7.97a2 2 0 0 1 2.001-1.998l18 .015a2 2 0 0 1 1.999 2.002l-.027 32a2 2 0 0 1-2.001 1.998l-18-.015a2 2 0 0 1-1.999-2.001zM24.011 10a1 1 0 0 0-1.001 1l-.003 4a1 1 0 1 0 2 0l.003-4a1 1 0 0 0-1-1M24 21a1 1 0 0 0-1 1l-.003 4a1 1 0 1 0 2 0L25 22a1 1 0 0 0-1-1m-1.01 12a1 1 0 0 1 2 0l-.003 4a1 1 0 0 1-2 0z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsPavedRoadAltNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsPavedRoadAltNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPavedRoadAltOutlineIcon],svg[healthicons-paved-road-alt-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M33 7a1 1 0 0 1 2 0v34a1 1 0 1 1-2 0zM13 7a1 1 0 0 1 2 0v34a1 1 0 1 1-2 0zm10 4a1 1 0 0 1 2 0v4a1 1 0 1 1-2 0zm0 11a1 1 0 0 1 2 0v4a1 1 0 1 1-2 0zm0 11a1 1 0 0 1 2 0v4a1 1 0 1 1-2 0z"></svg:path>`,
})
export class HealthiconsPavedRoadAltOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPavedRoadAltOutline24pxIcon],svg[healthicons-paved-road-alt-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 1.75a1 1 0 0 1 1 1v18.5a1 1 0 1 1-2 0V2.75a1 1 0 0 1 1-1m10 0a1 1 0 0 1 1 1v18.5a1 1 0 1 1-2 0V2.75a1 1 0 0 1 1-1M13 5a1 1 0 1 0-2 0v2.5a1 1 0 1 0 2 0zm-1 10.25a1 1 0 0 1 1 1v2.5a1 1 0 1 1-2 0v-2.5a1 1 0 0 1 1-1m1-4.5a1 1 0 1 0-2 0v2.5a1 1 0 1 0 2 0z"></svg:path>`,
})
export class HealthiconsPavedRoadAltOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPavedRoadNegativeIcon],svg[healthicons-paved-road-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsPavedRoadNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM7.947 42c-1.104 0-2.005-.896-1.944-1.999A36 36 0 0 1 39.948 6.056c1.103-.062 2 .84 2 1.944v14c0 1.105-.899 1.989-1.996 2.111a18 18 0 0 0-15.894 15.893C23.936 41.102 23.052 42 21.948 42zm31.226-26.756q-1.118.15-2.213.394l-.108-.488l-.216-.977l-.108-.488a29 29 0 0 1 2.376-.423l.067.495l.135.991zM32.67 16.97a27 27 0 0 0-4.01 2.025l-.261-.426l-.524-.852l-.262-.426a29 29 0 0 1 4.307-2.175l.187.464l.375.927zm-7.627 4.687a27 27 0 0 0-3.127 3.224l-.387-.317l-.773-.634l-.387-.317a29 29 0 0 1 3.358-3.463l.33.377l.657.753zm-5.676 6.923a27 27 0 0 0-1.9 4.07l-.47-.174l-.938-.346l-.469-.173a29 29 0 0 1 2.042-4.372l.433.249l.868.497zm-3.1 8.398a27 27 0 0 0-.326 2.224l-.497-.052l-.995-.104l-.497-.052q.125-1.205.35-2.389l.49.094l.984.186z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsPavedRoadNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsPavedRoadNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPavedRoadOutlineIcon],svg[healthicons-paved-road-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M42 7A35 35 0 0 0 7 42a1 1 0 1 1-2 0A37 37 0 0 1 42 5a1 1 0 1 1 0 2"></svg:path><svg:path d="M38.376 15.244q-1.118.15-2.213.394l-.432-1.953a29 29 0 0 1 2.377-.423zm-6.502 1.726a27 27 0 0 0-4.01 2.025l-1.046-1.704a29 29 0 0 1 4.306-2.175zm-7.627 4.687a27 27 0 0 0-3.127 3.224l-1.547-1.268a29 29 0 0 1 3.359-3.463zM18.57 28.58a27 27 0 0 0-1.9 4.07l-1.876-.693a29 29 0 0 1 2.04-4.372zm-3.1 8.398a27 27 0 0 0-.326 2.224l-1.989-.208q.126-1.205.35-2.388zm19.259-12.532A19 19 0 0 1 42 23a1 1 0 1 1 0 2a17 17 0 0 0-17 17a1 1 0 1 1-2 0a19 19 0 0 1 11.729-17.554"></svg:path></svg:g>`,
})
export class HealthiconsPavedRoadOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPavedRoadOutline24pxIcon],svg[healthicons-paved-road-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M19.95 3.033c.596-.036 1.08.452 1.08 1.049s-.485 1.078-1.08 1.119A15.87 15.87 0 0 0 5.2 19.95c-.04.596-.52 1.08-1.118 1.08s-1.085-.484-1.05-1.08A18.03 18.03 0 0 1 19.95 3.033m-5.883 17.018l.002-.009a7.03 7.03 0 0 1 5.973-5.974l.01-.001q.105-.015.204-.05c.441-.146.775-.537.775-1.01c0-.548-.446-.998-.99-.937a9 9 0 0 0-.46.062a9.02 9.02 0 0 0-6.88 5.448a9 9 0 0 0-.631 2.46c-.06.545.39.99.937.99c.474 0 .864-.333 1.011-.774q.033-.1.05-.205m5.645-10.722q.655-.075 1.317-.074V7.752q-.746 0-1.486.084z"></svg:path><svg:path d="M16.526 10.15q.613-.252 1.246-.435l-.416-1.444a13.3 13.3 0 0 0-2.746 1.137l.727 1.316q.578-.32 1.19-.573m-3.819 2.551q.468-.468.984-.88l-.937-1.174a13.3 13.3 0 0 0-2.101 2.102l1.174.937q.411-.517.88-.985m-2.551 3.818q.253-.611.572-1.188l-1.315-.727a13.3 13.3 0 0 0-1.137 2.746l1.444.416q.182-.635.435-1.246m-.896 4.504q0-.662.075-1.318L7.84 19.54q-.083.739-.083 1.486z"></svg:path></svg:g>`,
})
export class HealthiconsPavedRoadOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPeaceIcon],svg[healthicons-peace-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M24 4C12.954 4 4 12.954 4 24s8.954 20 20 20s20-8.954 20-20S35.046 4 24 4m-1 2.027C13.524 6.547 6 14.394 6 24c0 4.61 1.734 8.817 4.585 12.001L23 23.586zm0 35.946a17.93 17.93 0 0 1-11.001-4.557L23 26.414zm2-35.946v17.559L37.416 36A17.93 17.93 0 0 0 42 24c0-9.606-7.524-17.454-17-17.973m11.001 31.389L25 26.414v15.559a17.93 17.93 0 0 0 11.001-4.557" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsPeaceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPeace24pxIcon],svg[healthicons-peace-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m1-17.938v7.524l5.32 5.32A8.001 8.001 0 0 0 13 4.062m3.906 14.258L13 14.414v5.524a7.96 7.96 0 0 0 3.906-1.618M11 19.938v-5.524L7.094 18.32A7.96 7.96 0 0 0 11 19.938m-5.32-3.032l5.32-5.32V4.062a8.001 8.001 0 0 0-5.32 12.844" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsPeace24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPeaceNegativeIcon],svg[healthicons-peace-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsPeaceNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm23 6.027C13.524 6.547 6 14.394 6 24c0 4.61 1.734 8.817 4.585 12.001l.208-.208L23 23.586zm0 35.946a17.93 17.93 0 0 1-11.001-4.557l.208-.209L23 26.414zM37.416 36A17.93 17.93 0 0 0 42 24c0-9.606-7.524-17.454-17-17.973v17.559zM36 37.416a17.93 17.93 0 0 1-11 4.557V26.414zM4 24C4 12.954 12.954 4 24 4s20 8.954 20 20s-8.954 20-20 20S4 35.046 4 24" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsPeaceNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsPeaceNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPeaceOutlineIcon],svg[healthicons-peace-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M24 4C12.954 4 4 12.954 4 24s8.954 20 20 20s20-8.954 20-20S35.046 4 24 4m-1 2.027C13.524 6.547 6 14.394 6 24c0 4.61 1.734 8.817 4.585 12.001L23 23.586zm0 35.946a17.93 17.93 0 0 1-11.001-4.557L23 26.414zm2-35.946v17.559L37.416 36A17.93 17.93 0 0 0 42 24c0-9.606-7.524-17.454-17-17.973m11.001 31.389L25 26.414v15.559a17.93 17.93 0 0 0 11.001-4.557" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsPeaceOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPeaceOutline24pxIcon],svg[healthicons-peace-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m1-17.938v7.524l5.32 5.32A8.001 8.001 0 0 0 13 4.062m3.906 14.258L13 14.414v5.524a7.96 7.96 0 0 0 3.906-1.618M11 19.938v-5.524L7.094 18.32A7.96 7.96 0 0 0 11 19.938m-5.32-3.032l5.32-5.32V4.062a8.001 8.001 0 0 0-5.32 12.844" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsPeaceOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPediatricSurgeryIcon],svg[healthicons-pediatric-surgery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M25.201 11.23c0 2.888-2.335 5.23-5.215 5.23s-5.216-2.342-5.216-5.23S17.106 6 19.987 6s5.215 2.342 5.215 5.23M8.205 15.139l.01.021c1.566 3.364 3.39 5.212 5.507 6.134l1.049.457V25.5H25.23v-3.75l1.048-.457c2.117-.922 3.941-2.77 5.507-6.134l.01-.021l.01-.021c.08-.16.206-.547.194-.98c-.01-.391-.126-.758-.448-1.081c-.415-.416-.748-.508-.996-.524c-.294-.018-.652.066-1.066.272c-.01.006-.08.051-.22.187a9 9 0 0 0-.579.644l-.31.376a27 27 0 0 1-1.465 1.682c-1.49 1.537-3.655 3.119-6.915 3.119s-5.425-1.582-6.915-3.119a27 27 0 0 1-1.465-1.681q-.166-.205-.31-.377a9 9 0 0 0-.579-.644c-.14-.136-.21-.18-.22-.187c-.413-.205-.772-.29-1.066-.272c-.248.016-.58.108-.996.524c-.322.323-.438.69-.448 1.082c-.011.432.115.82.194.979zm6.566 13.585V27.5H25.23v1.224c0 .637-.597 2.27-2.428 3.054c-.21.09-.445.202-.656.303l-.125.06c-.26.123-.511.24-.766.343c-.53.216-.945.32-1.255.32s-.724-.104-1.255-.32c-.255-.104-.506-.22-.766-.344l-.125-.06c-.211-.1-.447-.212-.656-.302c-1.83-.783-2.427-2.417-2.427-3.054m-.403 2.657a5.03 5.03 0 0 0 2.393 2.406a3.8 3.8 0 0 0-.834.96c-.5.815-.93 1.822-.93 2.77c0 .867.325 1.613.57 2.178l.019.042c.272.624.443 1.044.443 1.488c0 .999-.784 1.775-1.71 1.775c-.864 0-1.547-.63-2.056-1.848c-.497-1.189-.688-2.657-.688-3.635c0-2.648.997-4.604 2.793-6.136m11.264 0a5.03 5.03 0 0 1-2.393 2.406c.297.248.578.542.834.96c.5.815.93 1.822.93 2.77c0 .867-.325 1.613-.57 2.178l-.019.042c-.272.624-.444 1.044-.444 1.488c0 .999.785 1.775 1.711 1.775c.864 0 1.547-.63 2.056-1.848c.497-1.189.688-2.657.688-3.635c0-2.648-.997-4.604-2.793-6.136M35 38v-7a2 2 0 0 1 2-2c1.105 0 2.018.902 1.847 1.994C38.114 35.664 35 38 35 38m3-11.5a1.5 1.5 0 0 1-2.812.727L38 24.414zm0-4.914l-3 3v-2.172l3-3zm0-5l-3 3V12.5a1.5 1.5 0 0 1 3 0z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsPediatricSurgeryIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPediatricSurgeryNegativeIcon],svg[healthicons-pediatric-surgery-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsPediatricSurgeryNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM20.986 16.46c2.88 0 5.215-2.342 5.215-5.23S23.866 6 20.986 6s-5.216 2.342-5.216 5.23s2.335 5.23 5.216 5.23m-11.77-1.3l-.01-.021l-.011-.021a2.3 2.3 0 0 1-.194-.98c.01-.391.126-.758.448-1.081c.415-.416.748-.508.996-.524c.294-.018.652.067 1.066.272c.01.007.08.051.22.187c.158.153.342.36.579.644q.143.171.31.377c.403.492.906 1.105 1.465 1.681c1.49 1.537 3.655 3.119 6.915 3.119s5.426-1.582 6.915-3.119a27 27 0 0 0 1.465-1.681q.166-.205.31-.377c.237-.283.421-.491.579-.644c.14-.136.21-.18.22-.187c.414-.206.772-.29 1.066-.272c.248.016.58.108.995.524c.323.323.44.69.45 1.082c.01.432-.116.82-.195.979l-.01.02l-.01.022c-1.566 3.364-3.39 5.212-5.507 6.134l-1.048.457V25.5H15.77v-3.75l-1.048-.457c-2.117-.922-3.941-2.77-5.507-6.134M15.77 27.5v1.224c0 .637.596 2.27 2.427 3.054c.21.09.445.202.656.303l.125.06c.26.123.511.24.766.343c.53.216.945.32 1.255.32s.724-.104 1.255-.32c.255-.104.506-.22.766-.344l.125-.06c.211-.1.447-.212.656-.302c1.83-.783 2.428-2.417 2.428-3.054V27.5zm1.99 6.287a5.03 5.03 0 0 1-2.393-2.406c-1.796 1.532-2.793 3.488-2.793 6.136c0 .978.191 2.446.688 3.635c.51 1.218 1.193 1.848 2.057 1.848c.926 0 1.71-.776 1.71-1.775c0-.444-.171-.864-.443-1.488l-.018-.042c-.246-.565-.572-1.31-.572-2.178c0-.948.43-1.955.93-2.77a3.8 3.8 0 0 1 .835-.96m6.478 0a5.03 5.03 0 0 0 2.393-2.406c1.796 1.532 2.793 3.488 2.793 6.136c0 .978-.191 2.446-.688 3.635C28.228 42.37 27.545 43 26.681 43c-.926 0-1.71-.776-1.71-1.775c0-.444.171-.864.443-1.488l.018-.042c.246-.565.572-1.31.572-2.178c0-.948-.43-1.955-.93-2.77a3.8 3.8 0 0 0-.835-.96M36 31v7s3.114-2.336 3.847-7.006C40.018 29.902 39.105 29 38 29a2 2 0 0 0-2 2m.188-3.773L39 24.414V26.5a1.5 1.5 0 0 1-2.812.727M39 21.586v-2.172l-3 3v2.172zm-3-2l3-3V12.5a1.5 1.5 0 0 0-3 0z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsPediatricSurgeryNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsPediatricSurgeryNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPediatricSurgeryOutlineIcon],svg[healthicons-pediatric-surgery-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M25.826 11a6 6 0 1 1-12 0a6 6 0 0 1 12 0m-2 0a4 4 0 1 1-8 0a4 4 0 0 1 8 0"></svg:path><svg:path d="M31.326 17.995c.334-.667.7-2.3-.5-3.5s-2.5-.995-3.5-.5c-.462.229-.923.79-1.472 1.458c-1.235 1.502-2.913 3.542-6.028 3.542s-4.792-2.04-6.027-3.542c-.55-.668-1.011-1.23-1.473-1.458c-1-.495-2.3-.7-3.5.5s-.833 2.833-.5 3.5c1.449 3.105 3.243 5.024 5.5 6.005v5c0 .19.024.405.076.634a9.24 9.24 0 0 0-3.076 6.912c0 1.002.188 2.505.728 3.795c.527 1.258 1.558 2.66 3.383 2.66c1.8 0 3.223-1.487 3.223-3.273c0-.773-.294-1.444-.5-1.915l-.029-.063c-.233-.536-.36-.863-.36-1.204s.179-.872.54-1.46c.332-.538.734-.988 1.047-1.234c.32.09.646.148.968.148s.649-.058.968-.148c.314.246.715.696 1.047 1.234c.362.588.54 1.12.54 1.46c0 .332-.127.666-.362 1.21l-.03.069c-.204.472-.496 1.146-.496 1.902c0 1.787 1.422 3.273 3.222 3.273c1.819 0 2.84-1.49 3.358-2.73c.543-1.3.753-2.798.753-3.724a9.24 9.24 0 0 0-3.075-6.912q.075-.347.075-.634v-5c2.257-.98 4.051-2.9 5.5-6.005m-21.199-.87l.011.024c1.314 2.814 2.809 4.288 4.485 5.017l1.203.523V26h8v-3.311l1.203-.523c1.676-.729 3.172-2.203 4.485-5.017l.011-.024l.012-.024c.036-.071.122-.323.115-.604a.8.8 0 0 0-.24-.588c-.15-.15-.266-.22-.339-.253a.5.5 0 0 0-.195-.05c-.137-.009-.355.029-.66.18q.003-.003.005-.003l.006-.002l-.02.021c-.053.05-.21.201-.522.572l-.256.31c-.347.423-.798.972-1.296 1.484c-1.334 1.372-3.318 2.827-6.309 2.827s-4.975-1.455-6.309-2.827a24 24 0 0 1-1.296-1.484l-.256-.31c-.31-.371-.468-.521-.521-.572l-.02-.021l.01.004c-.306-.15-.523-.188-.66-.18a.5.5 0 0 0-.195.05a1.2 1.2 0 0 0-.339.254a.8.8 0 0 0-.24.588c-.007.28.08.533.115.604zM16.2 29.992c-.306-.474-.374-.873-.374-.992v-1h8v1c0 .119-.068.518-.373.992c-.285.44-.735.88-1.412 1.168c-.19.082-.404.184-.586.27l-.104.05c-.222.104-.428.2-.633.283c-.435.176-.72.237-.892.237c-.171 0-.456-.06-.892-.237a12 12 0 0 1-.633-.284l-.104-.049a17 17 0 0 0-.586-.27a3.1 3.1 0 0 1-1.411-1.168m-3.374 6.554c0-1.965.768-3.74 2.009-5.035A5.14 5.14 0 0 0 16.826 33l.034.015c-.273.313-.53.663-.752 1.023c-.44.715-.837 1.626-.837 2.508c0 .797.298 1.479.508 1.96l.02.044c.238.545.36.857.36 1.178c0 .724-.568 1.272-1.222 1.272c-.588 0-1.113-.417-1.538-1.432c-.411-.982-.573-2.206-.573-3.022m10.718-2.508a8 8 0 0 0-.752-1.023l.034-.015a5.14 5.14 0 0 0 1.992-1.49a7.25 7.25 0 0 1 2.008 5.036c0 .705-.173 1.935-.598 2.953c-.451 1.08-.986 1.501-1.513 1.501c-.654 0-1.222-.548-1.222-1.273c0-.307.123-.622.362-1.178l.02-.046c.21-.483.507-1.171.507-1.957c0-.882-.397-1.793-.838-2.508M35.73 37.8l-1.6 1.2v-9c0-.97.46-1.832 1.175-2.38a2.5 2.5 0 0 1-1.174-2.12v-14a2.5 2.5 0 1 1 5 0v14a2.5 2.5 0 0 1-.745 1.78c1.04.485 1.786 1.555 1.58 2.869a12.8 12.8 0 0 1-2.385 5.697a12 12 0 0 1-1.259 1.437a9 9 0 0 1-.534.473l-.02.016l-.017.013l-.013.01l-.004.003h-.002zm-.6-.8l.6.8zm2-15.414l-1 1v-2.172l1-1zm-1-4l1-1V11.5a.5.5 0 0 0-1 0zm0 7.828l1-1V25.5a.5.5 0 0 1-1 0zm0 9.026a10.84 10.84 0 0 0 1.86-4.601c.06-.378-.256-.839-.86-.839a1 1 0 0 0-1 1z"></svg:path></svg:g>`,
})
export class HealthiconsPediatricSurgeryOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPediatricsIcon],svg[healthicons-pediatrics-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3zm19.056 8.278a4.278 4.278 0 1 1-8.556 0a4.278 4.278 0 0 1 8.555 0m-.39 9.032c1.362-.194 2.791-.488 4.37-.878a2 2 0 1 0-.96-3.883c-2.945.728-5.142 1.05-7.29 1.041c-2.155-.008-4.36-.348-7.328-1.047a2 2 0 1 0-.916 3.894c1.567.369 2.99.657 4.347.853v1.488h7.778zm-7.777 3.023v1.51c0 .492.444 1.757 1.805 2.363c.156.07.33.156.488.235l.093.045c.193.096.38.186.57.267c.394.167.702.247.933.247c.23 0 .538-.08.933-.247c.19-.08.377-.171.57-.267l.093-.046c.157-.078.332-.165.488-.234c1.361-.606 1.805-1.871 1.805-2.364v-1.509zm-2.664 7.77c0-1.743.664-3.064 1.871-4.115c.372.628.99 1.26 1.909 1.678c-.139.13-.27.282-.395.468c-.39.579-.724 1.294-.724 1.969c0 .616.253 1.146.445 1.548l.013.03c.212.443.345.742.345 1.057c0 .71-.61 1.262-1.33 1.262c-.672 0-1.203-.448-1.599-1.313c-.387-.846-.535-1.89-.535-2.584m9.326-2.437c.92-.418 1.537-1.05 1.909-1.678c1.206 1.05 1.87 2.371 1.87 4.114c0 .696-.148 1.739-.534 2.584c-.396.866-.928 1.313-1.6 1.313c-.72 0-1.33-.551-1.33-1.261c0-.316.134-.614.345-1.058l.014-.03c.191-.401.444-.931.444-1.548c0-.674-.334-1.39-.723-1.969a2.7 2.7 0 0 0-.395-.467" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsPediatricsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPediatricsNegativeIcon],svg[healthicons-pediatrics-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsPediatricsNegative0)"><svg:path d="M23.778 18.556a4.278 4.278 0 1 0 0-8.556a4.278 4.278 0 0 0 0 8.555"></svg:path><svg:path d="M32.036 22.432c-1.579.39-3.008.684-4.37.878v1.468H19.89V23.29c-1.357-.196-2.78-.484-4.347-.853a2 2 0 1 1 .917-3.894c2.968.7 5.172 1.039 7.326 1.047c2.15.008 4.346-.313 7.29-1.041a2 2 0 1 1 .96 3.883m-12.147 5.41v-1.509h7.778v1.51c0 .492-.444 1.757-1.805 2.363c-.156.07-.331.156-.488.235l-.093.045c-.194.096-.38.186-.57.267c-.395.167-.702.247-.933.247s-.539-.08-.933-.247a10 10 0 0 1-.57-.267l-.093-.046c-.157-.078-.332-.165-.488-.234c-1.361-.606-1.805-1.871-1.805-2.364m-.793 2.146c-1.207 1.05-1.871 2.372-1.871 4.115c0 .695.148 1.738.535 2.584c.396.865.927 1.313 1.599 1.313c.72 0 1.33-.552 1.33-1.262c0-.315-.133-.614-.345-1.058l-.014-.03c-.191-.4-.444-.931-.444-1.547c0-.675.334-1.39.724-1.97a2.7 2.7 0 0 1 .395-.467c-.92-.418-1.537-1.05-1.909-1.678m9.364 0c-.372.628-.99 1.26-1.909 1.678c.138.13.27.281.395.467c.389.58.723 1.295.723 1.97c0 .615-.253 1.146-.444 1.547l-.014.03c-.211.444-.345.742-.345 1.058c0 .71.61 1.261 1.33 1.261c.672 0 1.204-.447 1.6-1.313c.386-.845.535-1.889.535-2.584c0-1.743-.665-3.064-1.872-4.114"></svg:path><svg:path fill-rule="evenodd" d="M48 0H0v48h48zM6 9a3 3 0 0 1 3-3h30a3 3 0 0 1 3 3v30a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsPediatricsNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsPediatricsNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPediatricsOutlineIcon],svg[healthicons-pediatrics-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M28.056 14.278a4.278 4.278 0 1 1-8.556 0a4.278 4.278 0 0 1 8.555 0m-.388 13.564c0 .493-.444 1.758-1.805 2.364c-.156.07-.331.156-.488.235l-.093.045c-.194.096-.38.186-.57.267c-.395.167-.702.247-.933.247s-.539-.08-.933-.247a10 10 0 0 1-.57-.267l-.093-.046c-.157-.078-.332-.165-.488-.234c-1.361-.606-1.805-1.871-1.805-2.364v-1.509h7.778z"></svg:path><svg:path d="M27.667 23.31c1.361-.194 2.79-.488 4.369-.878a2 2 0 1 0-.96-3.883c-2.945.728-5.142 1.05-7.29 1.041c-2.155-.008-4.36-.348-7.328-1.047a2 2 0 1 0-.916 3.894c1.567.369 2.99.657 4.347.853v1.488h7.778zM17.225 34.103c0-1.09.26-2.014.749-2.81l.09-.143a5.7 5.7 0 0 1 1.032-1.162c.163.275.372.55.634.809l.014.014q.134.13.286.254l.013.011c.274.222.594.423.962.59c-.139.13-.27.282-.395.468a5 5 0 0 0-.429.761l-.014.033c-.17.382-.28.785-.28 1.175c0 .616.252 1.146.444 1.548l.013.03c.212.443.345.742.345 1.057c0 .71-.61 1.262-1.33 1.262c-.672 0-1.203-.448-1.599-1.313c-.387-.846-.535-1.89-.535-2.584m11.235-4.115c-.163.275-.373.55-.634.808l-.015.014q-.133.132-.285.255l-.013.01a4.5 4.5 0 0 1-.962.59c.138.131.27.282.395.468c.158.235.307.493.428.762l.015.032c.169.383.28.786.28 1.175c0 .617-.253 1.147-.444 1.548l-.014.03c-.211.444-.345.742-.345 1.058c0 .71.61 1.261 1.33 1.261c.672 0 1.204-.447 1.6-1.313c.386-.845.535-1.889.535-2.584c0-1.09-.26-2.014-.75-2.81l-.09-.143a5.8 5.8 0 0 0-1.032-1.161"></svg:path><svg:path fill-rule="evenodd" d="M6 9a3 3 0 0 1 3-3h30a3 3 0 0 1 3 3v30a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3zm2 0a1 1 0 0 1 1-1h30a1 1 0 0 1 1 1v30a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsPediatricsOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPenisIcon],svg[healthicons-penis-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.087 6.846c1.1-.674 2.354-.846 3.47-.846H39a3 3 0 0 1 3 3v17c0 4.71-4.54 8-9 8s-9-3.29-9-8v-8.86a5.2 5.2 0 0 0-1.732.834C21.433 18.594 21 19.33 21 20v9c.756.357 1.313.827 1.641 1.51c.36.748.36 1.627.36 2.409v.08c0 2.19-.881 4.412-2.284 6.091c-1.196 1.432-2.833 2.537-4.717 2.832V16a4 4 0 0 1 4-4h15v-2H20a6 6 0 0 0-6 6v25.922c-1.884-.295-3.521-1.4-4.717-2.832C7.88 37.411 7 35.188 7 33v-.081c0-.782 0-1.66.359-2.41c.328-.682.885-1.152 1.641-1.51V14c0-3.184 1.652-5.66 4.087-7.153" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsPenisIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPenisAltIcon],svg[healthicons-penis-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.999 6S5.901 22.06 6.002 25.07C6.147 29.338 10 42 10 42h13v-6.17A3 3 0 0 1 21 33v-4a3 3 0 0 1-3-3v-1h2v1a1 1 0 0 0 1 1v-4h2v10a1 1 0 1 0 2 0V23h2v4a1 1 0 0 0 1-1v-1h2v1a3 3 0 0 1-3 3v4a3 3 0 0 1-2 2.83V42h13s3.853-12.661 3.998-16.93C42.099 22.06 39 6 39 6z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsPenisAltIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPenisAlt24pxIcon],svg[healthicons-penis-alt-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3c-2.468 7.03-2.858 10.97 0 18h6v-2.484A2.25 2.25 0 0 1 9.75 16.5v-.854a2.75 2.75 0 0 1-2-2.646v-1h1.5v1c0 .409.196.772.5 1v-3h1.5v5.5a.75.75 0 0 0 1.5 0V11h1.5v3c.304-.228.5-.591.5-1v-1h1.5v1a2.75 2.75 0 0 1-2 2.646v.854A2.25 2.25 0 0 1 13 18.516V21h6.105c2.708-7.03 2.339-10.97 0-18z"></svg:path>`,
})
export class HealthiconsPenisAlt24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPenisAltNegativeIcon],svg[healthicons-penis-alt-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" fill-rule="evenodd" clip-path="url(#healthiconsPenisAltNegative0)" clip-rule="evenodd"><svg:path d="M48 0H0v48h48zM8.999 6S5.901 22.06 6.002 25.07C6.147 29.338 10 42 10 42h28s3.853-12.661 3.998-16.93C42.099 22.06 39 6 39 6z"></svg:path><svg:path d="M23 23v10a1 1 0 1 0 2 0V23h2v10a3 3 0 1 1-6 0V23zm-3 2v1a1 1 0 0 0 1 1v2a3 3 0 0 1-3-3v-1zm8 1v-1h2v1a3 3 0 0 1-3 3v-2a1 1 0 0 0 1-1"></svg:path><svg:path d="M23 42v-7h2v7z"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsPenisAltNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsPenisAltNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPenisAltOutlineIcon],svg[healthicons-penis-alt-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M8.999 6h2S7.881 21.506 8 25.004C8.148 29.402 12 42 12 42h-2S6.147 29.339 6.002 25.07C5.901 22.06 9 6 9 6m30.001 0h-2s3.118 15.506 3 19.004C39.852 29.402 36 42 36 42h2s3.853-12.661 3.998-16.93C42.099 22.06 39 6 39 6M23 23v10a1 1 0 1 0 2 0V23h2v10a3 3 0 1 1-6 0V23zm-3 2v1a1 1 0 0 0 1 1v2a3 3 0 0 1-3-3v-1zm8 1v-1h2v1a3 3 0 0 1-3 3v-2a1 1 0 0 0 1-1"></svg:path><svg:path d="M23 42v-7h2v7z"></svg:path></svg:g>`,
})
export class HealthiconsPenisAltOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPenisAltOutline24pxIcon],svg[healthicons-penis-alt-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.057 2.669c-1.245 3.543-2.003 6.407-2.054 9.313c-.052 2.921.61 5.803 2.07 9.395l1.853-.754c-1.397-3.437-1.97-6.041-1.923-8.605c.045-2.58.716-5.2 1.94-8.687zm13.887 0c1.244 3.543 2.002 6.407 2.053 9.313c.052 2.921-.61 5.803-2.07 9.395l-1.853-.754c1.397-3.437 1.97-6.041 1.923-8.605c-.045-2.58-.716-5.2-1.94-8.687zM13 18.516V21h-2v-2.484A2.25 2.25 0 0 1 9.75 16.5v-.854a2.75 2.75 0 0 1-2-2.646v-1h1.5v1c0 .409.196.772.5 1v-3h1.5v5.5a.75.75 0 0 0 1.5 0V11h1.5v3c.304-.228.5-.591.5-1v-1h1.5v1a2.75 2.75 0 0 1-2 2.646v.854A2.25 2.25 0 0 1 13 18.516"></svg:path>`,
})
export class HealthiconsPenisAltOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPenisNegativeIcon],svg[healthicons-penis-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" fill-rule="evenodd" clip-path="url(#healthiconsPenisNegative0)" clip-rule="evenodd"><svg:path d="M48 0H0v48h48zM13.087 6.846c1.1-.674 2.354-.846 3.47-.846H39a3 3 0 0 1 3 3v17c0 4.71-4.54 8-9 8s-9-3.29-9-8v-8.86a5.2 5.2 0 0 0-1.732.834C21.433 18.594 21 19.33 21 20v9c.756.357 1.313.827 1.641 1.51c.36.748.36 1.627.36 2.409v.08c0 2.19-.881 4.412-2.284 6.091S17.304 42 15 42s-4.314-1.23-5.717-2.91C7.88 37.411 7 35.188 7 33v-.081c0-.782 0-1.66.359-2.41c.328-.682.885-1.152 1.641-1.51V14c0-3.184 1.652-5.66 4.087-7.153"></svg:path><svg:path d="M14 16a6 6 0 0 1 6-6h15v2H20a4 4 0 0 0-4 4v26h-2z"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsPenisNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsPenisNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPenisOutlineIcon],svg[healthicons-penis-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M9 14a9 9 0 0 1 5.625-8.346l.75 1.854A7 7 0 0 0 11 14v16.378l-.667.235c-.874.31-1.083.58-1.172.763c-.134.28-.16.683-.16 1.624c0 1.677.686 3.454 1.817 4.808S13.438 40 15 40s3.052-.838 4.182-2.192S21 34.677 21 33c0-.941-.027-1.344-.161-1.624c-.089-.184-.298-.454-1.172-.763L19 30.378V20a5 5 0 0 1 5-5h1v11c0 3.29 3.3 6 7 6s7-2.71 7-6V16h2v10c0 4.71-4.54 8-9 8s-9-3.29-9-8v-8.83A3 3 0 0 0 21 20v9c.756.358 1.313.827 1.641 1.51c.36.748.36 1.627.36 2.409v.08c0 2.19-.881 4.412-2.284 6.091S17.304 42 15 42s-4.314-1.23-5.717-2.91C7.88 37.411 7 35.188 7 33v-.081c0-.782 0-1.66.359-2.41c.328-.682.885-1.151 1.641-1.51z"></svg:path><svg:path d="M14 15a6 6 0 0 1 6-6h15v2H20a4 4 0 0 0-4 4v26h-2z"></svg:path></svg:g>`,
})
export class HealthiconsPenisOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPeopleIcon],svg[healthicons-people-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 24c3.867 0 7-3.133 7-7s-3.133-7-7-7s-7 3.133-7 7s3.133 7 7 7m22-3.5c0 3.039-2.461 5.5-5.5 5.5a5.5 5.5 0 0 1-5.5-5.5c0-3.039 2.461-5.5 5.5-5.5s5.5 2.461 5.5 5.5M17 26c2.734 0 7.183.851 10.101 2.545C28.293 29.758 29 31.081 29 32.4V38H4v-5.6c0-4.256 8.661-6.4 13-6.4m27 12H31v-5.6c0-1.416-.511-2.72-1.324-3.883c1.541-.344 3.058-.517 4.217-.517C37.62 28 44 29.787 44 33.333z"></svg:path>`,
})
export class HealthiconsPeopleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPeopleNegativeIcon],svg[healthicons-people-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsPeopleNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM24 17c0 3.867-3.133 7-7 7s-7-3.133-7-7s3.133-7 7-7s7 3.133 7 7m9.5 9c3.039 0 5.5-2.461 5.5-5.5S36.539 15 33.5 15a5.5 5.5 0 0 0-5.5 5.5c0 3.039 2.461 5.5 5.5 5.5M17 26c2.734 0 7.183.851 10.101 2.545C28.293 29.758 29 31.081 29 32.4V38H4v-5.6c0-4.256 8.661-6.4 13-6.4m27 12H31v-5.6c0-1.416-.511-2.72-1.324-3.883c1.541-.344 3.058-.517 4.217-.517C37.62 28 44 29.787 44 33.333z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsPeopleNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsPeopleNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPeopleOutlineIcon],svg[healthicons-people-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M17 24c3.867 0 7-3.133 7-7s-3.133-7-7-7s-7 3.133-7 7s3.133 7 7 7m5-7c0 2.763-2.237 5-5 5s-5-2.237-5-5s2.237-5 5-5s5 2.237 5 5M4 38v-5.6c0-4.256 8.661-6.4 13-6.4c2.886 0 7.685.949 10.575 2.837C29.635 28.28 31.894 28 33.5 28c1.858 0 4.351.374 6.41 1.13c1.026.378 2.009.874 2.752 1.516c.749.647 1.338 1.522 1.338 2.62V38zm2-5.6c0-.317.146-.751.766-1.315c.633-.576 1.607-1.134 2.84-1.62C12.077 28.49 15.077 28 17 28s4.924.49 7.393 1.465c1.234.486 2.208 1.044 2.84 1.62c.621.564.767.998.767 1.315V36H6zm23.353-1.93c1.513-.313 3.03-.47 4.147-.47c1.647 0 3.903.34 5.72 1.008c.909.334 1.644.728 2.135 1.152c.485.419.645.787.645 1.107V36H30v-3.6c0-.7-.235-1.345-.647-1.93M39 20.5c0 3.039-2.461 5.5-5.5 5.5a5.5 5.5 0 0 1-5.5-5.5c0-3.039 2.461-5.5 5.5-5.5s5.5 2.461 5.5 5.5M33.5 24c1.934 0 3.5-1.566 3.5-3.5S35.434 17 33.5 17a3.5 3.5 0 0 0-3.5 3.5c0 1.934 1.566 3.5 3.5 3.5" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsPeopleOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPersonIcon],svg[healthicons-person-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M6 36c0-4.965 11.993-8 18-8c6.008 0 18 3.035 18 8v6H6z"></svg:path><svg:path fill-rule="evenodd" d="M24 26c5.523 0 10-4.477 10-10S29.523 6 24 6s-10 4.477-10 10s4.477 10 10 10" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsPersonIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPersonNegativeIcon],svg[healthicons-person-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsPersonNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm24 26c5.523 0 10-4.477 10-10S29.523 6 24 6s-10 4.477-10 10s4.477 10 10 10m0 2c-6.007 0-18 3.035-18 8v6h36v-6c0-4.965-11.992-8-18-8" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsPersonNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsPersonNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPersonOutlineIcon],svg[healthicons-person-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M24 24c4.42 0 8-3.58 8-8s-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8m10-8c0 5.525-4.475 10-10 10s-10-4.475-10-10S18.475 6 24 6s10 4.475 10 10M9.223 34.212C8.22 35.022 8 35.629 8 36v4h32v-4c0-.37-.22-.979-1.224-1.788c-.98-.791-2.442-1.545-4.214-2.197C31.02 30.712 26.753 30 24 30s-7.02.712-10.562 2.015c-1.772.652-3.234 1.406-4.215 2.197M24 28c-6.007 0-18 3.035-18 8v6h36v-6c0-4.965-11.992-8-18-8" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsPersonOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPharmacyIcon],svg[healthicons-pharmacy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M18.305 13c-.057-1.61-.011-3.315.556-4.647c.299-.7.73-1.266 1.354-1.667c.627-.402 1.527-.686 2.843-.686c1.475 0 2.704.536 3.584 1.094c.437.278.778.555 1.007.76a6 6 0 0 1 .31.3l.01.01v.001a1 1 0 0 0 1.496-1.328l-.735.65c.735-.65.733-.652.733-.652v-.001l-.004-.004l-.01-.01a3 3 0 0 0-.122-.13a8 8 0 0 0-.343-.325a10 10 0 0 0-1.27-.96C26.624 4.716 25.024 4 23.058 4c-1.606 0-2.903.349-3.923 1.003c-1.023.657-1.69 1.57-2.114 2.566c-.738 1.733-.774 3.798-.718 5.431H11c-.553 0-1.006.45-.943.998c.615 5.38 6.16 9.643 13.058 9.98V32h2v-8.034a17 17 0 0 0 4.87-1.02q.015.172.015.357c0 .762-.623 1.674-1.901 2.466a8.6 8.6 0 0 1-2.099.924v2.066a10.6 10.6 0 0 0 3.151-1.29C30.624 26.56 32 25.123 32 23.304c0-.41-.038-.815-.123-1.208c3.367-1.804 5.68-4.732 6.066-8.097c.063-.548-.391-.998-.943-.998z"></svg:path><svg:path d="M30 39c0 1.165-.36 2.188-1.019 3H32v2H16v-2h7.115v-4h2v3.914c.802-.131 1.436-.404 1.892-.763c.625-.49.993-1.196.993-2.151s-.368-1.66-.993-2.151c-.65-.512-1.662-.85-3.007-.85c-1.517 0-3.2-.119-4.531-.71c-.684-.304-1.315-.75-1.773-1.403c-.462-.66-.696-1.461-.696-2.386s.234-1.726.696-2.386c.458-.653 1.09-1.099 1.773-1.403c.76-.338 1.637-.522 2.531-.617v2.013c-.658.083-1.242.22-1.719.432c-.441.196-.747.438-.946.722c-.194.277-.335.664-.335 1.239s.14.962.335 1.239c.199.284.505.526.946.722c.92.409 2.236.539 3.719.539c1.654 0 3.144.413 4.243 1.276C29.368 36.16 30 37.455 30 39"></svg:path></svg:g>`,
})
export class HealthiconsPharmacyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPharmacy24pxIcon],svg[healthicons-pharmacy-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M9 5c0-.406.152-.747.356-.884c.15-.1.713-.336 2.19.416a1 1 0 0 0 .908-1.782c-1.723-.877-3.16-1-4.21-.296C7.248 3.121 7 4.274 7 5H5c-.552 0-1.008.45-.919.996a6.3 6.3 0 0 0 .528 1.683c.402.85.991 1.62 1.734 2.27a8.2 8.2 0 0 0 2.596 1.518c.66.24 1.354.4 2.061.478V15h2v-3.055a9 9 0 0 0 1.934-.433a2 2 0 0 1-.934 1.22v2.142c1.725-.444 3-2.01 3-3.874a1 1 0 0 0-.111-.459q.405-.274.768-.591a7 7 0 0 0 1.734-2.271a6.4 6.4 0 0 0 .528-1.683C20.009 5.45 19.552 5 19 5z"></svg:path><svg:path d="M9.5 13h.5v2h-.5a.5.5 0 0 0 0 1h4.338a2.162 2.162 0 0 1 1.14 4H17v2H7v-2h4a1 1 0 0 1 .183-.577a1 1 0 0 1 .523-.379l2.183-.728a.162.162 0 0 0-.051-.316H9.5a2.5 2.5 0 0 1 0-5"></svg:path></svg:g>`,
})
export class HealthiconsPharmacy24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPharmacyAltIcon],svg[healthicons-pharmacy-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16 32v10h16V32h10V16H32V6H16v10H6v16zm10.5-15.497h-2.63a.6.6 0 0 0-.272.047c-.835.407-1.359 1.126-1.68 1.978q-.09.236-.156.475h-2.058c.082-.387.193-.787.343-1.182c.442-1.171 1.249-2.373 2.674-3.069a2.6 2.6 0 0 1 1.15-.25h2.63a1 1 0 0 1 0 2m-8.5 3.5c-.552 0-1.013.456-.863.988c.577 2.059 2.926 3.661 5.863 3.961v1.558c-.695.017-1.417.073-2.03.251c-.478.14-.985.378-1.373.814c-.406.456-.597 1.032-.597 1.675s.19 1.22.596 1.677c.388.437.895.677 1.374.817c.32.093.67.153 1.03.191v-2.013a3.4 3.4 0 0 1-.47-.098c-.27-.08-.389-.168-.438-.224c-.032-.036-.092-.117-.092-.35c0-.23.06-.31.09-.345c.05-.056.168-.145.44-.224c.383-.111.877-.153 1.47-.169v5.491h-3v2h8v-2h-3v-5.537c1.102-.086 1.995-.328 2.667-.761c.945-.61 1.333-1.517 1.333-2.48a2.93 2.93 0 0 0-.37-1.471c1.124-.71 1.927-1.672 2.233-2.763c.15-.532-.31-.988-.863-.988zm7 6.455c.809-.078 1.3-.252 1.583-.434c.305-.197.417-.428.417-.799c0-.281-.064-.472-.229-.63a9 9 0 0 1-1.77.357z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsPharmacyAltIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPharmacyAltNegativeIcon],svg[healthicons-pharmacy-alt-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsPharmacyAltNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 .002H0v48h48zM16 42V32H6V16h10V6h16v10h10v16H32v10zm7.87-25.497h2.63a1 1 0 0 0 0-2h-2.63c-.349 0-.755.057-1.15.25c-1.424.695-2.23 1.897-2.673 3.068c-.15.395-.261.795-.343 1.182h2.058q.067-.24.155-.475c.322-.852.845-1.57 1.68-1.978a.6.6 0 0 1 .274-.047m-6.733 4.488c-.15-.532.31-.988.863-.988h12c.552 0 1.013.456.863.988c-.306 1.09-1.109 2.054-2.234 2.763c.256.445.371.948.371 1.471c0 .963-.388 1.87-1.333 2.48c-.672.433-1.565.675-2.667.761v5.537h3v2h-8v-2h3v-5.491c-.593.016-1.087.058-1.47.17c-.272.079-.39.167-.44.223c-.03.035-.09.114-.09.345c0 .233.06.314.092.35c.05.056.168.145.439.224a3.4 3.4 0 0 0 .469.098v2.013a6 6 0 0 1-1.03-.191c-.48-.14-.986-.38-1.374-.817C19.19 30.47 19 29.893 19 29.25s.19-1.219.597-1.675c.388-.436.895-.674 1.374-.814c.612-.178 1.334-.233 2.03-.25v-1.559c-2.938-.3-5.287-1.902-5.864-3.961m9.446 5.032c-.283.183-.774.357-1.583.435v-1.506a9 9 0 0 0 1.771-.356c.165.157.229.348.229.63c0 .37-.112.601-.417.797" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsPharmacyAltNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsPharmacyAltNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPharmacyAltOutlineIcon],svg[healthicons-pharmacy-alt-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M23.87 16.503h2.63a1 1 0 0 0 0-2h-2.63c-.349 0-.755.057-1.15.25c-1.424.695-2.23 1.897-2.673 3.068c-.15.395-.261.795-.343 1.182h2.058q.067-.24.155-.475c.322-.852.845-1.57 1.68-1.978a.6.6 0 0 1 .274-.047m-5.87 3.5c-.552 0-1.013.456-.863.988c.577 2.059 2.926 3.661 5.863 3.961v1.558c-.695.017-1.417.073-2.03.251c-.478.14-.985.378-1.373.814c-.406.456-.597 1.032-.597 1.675s.19 1.22.596 1.677c.388.437.895.677 1.374.817c.32.093.67.153 1.03.191v-2.013a3.4 3.4 0 0 1-.47-.098c-.27-.08-.389-.168-.438-.224c-.032-.036-.092-.117-.092-.35c0-.23.06-.31.09-.345c.05-.056.168-.145.44-.224c.383-.111.877-.153 1.47-.169v5.491h-3v2h8v-2h-3v-5.537c1.102-.086 1.995-.328 2.667-.761c.945-.61 1.333-1.517 1.333-2.48a2.93 2.93 0 0 0-.37-1.471c1.124-.71 1.927-1.672 2.233-2.763c.15-.532-.31-.988-.863-.988zm8.583 6.02c-.283.183-.774.357-1.583.435v-1.506a9 9 0 0 0 1.771-.356c.165.157.229.348.229.63c0 .37-.112.601-.417.797"></svg:path><svg:path d="M32 32h10V16H32V6H16v10H6v16h10v10h16zm-2 8V30h10V18H30V8H18v10H8v12h10v10z"></svg:path></svg:g>`,
})
export class HealthiconsPharmacyAltOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPharmacyNegativeIcon],svg[healthicons-pharmacy-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsPharmacyNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM18.305 13c-.057-1.61-.011-3.315.556-4.647c.299-.7.73-1.266 1.354-1.667c.627-.402 1.527-.686 2.843-.686c1.475 0 2.704.536 3.584 1.094c.437.278.778.555 1.007.76a6 6 0 0 1 .31.3l.01.01v.001a1 1 0 0 0 1.496-1.328l-.735.65l.735-.65l-.003-.003l-.003-.004l-.01-.01a3 3 0 0 0-.122-.13a8 8 0 0 0-.343-.325a10 10 0 0 0-1.27-.96C26.624 4.716 25.024 4 23.058 4c-1.606 0-2.903.349-3.923 1.003c-1.023.657-1.69 1.57-2.114 2.566c-.738 1.733-.774 3.798-.718 5.431H11c-.553 0-1.006.45-.943.998c.615 5.38 6.16 9.643 13.058 9.98V32h2v-8.034a17 17 0 0 0 4.87-1.02q.015.172.015.357c0 .762-.623 1.674-1.901 2.466a8.6 8.6 0 0 1-2.099.924v2.066a10.6 10.6 0 0 0 3.151-1.29C30.624 26.56 32 25.123 32 23.304c0-.41-.038-.815-.123-1.208c3.367-1.804 5.68-4.732 6.066-8.097c.063-.548-.391-.998-.943-.998zM16 42h7.115v-4h2v3.914c.802-.131 1.436-.404 1.892-.763c.625-.49.993-1.196.993-2.151s-.368-1.66-.993-2.151c-.65-.512-1.662-.85-3.007-.85c-1.517 0-3.2-.119-4.531-.71c-.684-.304-1.315-.75-1.773-1.403c-.462-.66-.696-1.461-.696-2.386s.234-1.726.696-2.386c.458-.653 1.09-1.099 1.773-1.403c.76-.338 1.637-.522 2.531-.617v2.013c-.658.083-1.242.22-1.719.432c-.441.196-.747.438-.946.722c-.194.277-.335.664-.335 1.239s.14.962.335 1.239c.199.284.505.526.946.722c.92.409 2.236.539 3.719.539c1.654 0 3.144.413 4.243 1.276C29.368 36.16 30 37.455 30 39c0 1.165-.36 2.188-1.019 3H32v2H16z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsPharmacyNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsPharmacyNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPharmacyOutlineIcon],svg[healthicons-pharmacy-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M18.862 8.353c-.568 1.332-.614 3.037-.557 4.647H37c.552 0 1.006.45.943.998c-.385 3.365-2.699 6.293-6.066 8.097c.085.393.123.798.123 1.208c0 1.819-1.377 3.255-2.849 4.167A10.6 10.6 0 0 1 26 28.759v-2.067a8.6 8.6 0 0 0 2.099-.923C29.377 24.978 30 24.066 30 23.303q0-.185-.014-.356c-1.497.557-3.14.912-4.871 1.019V32h-2v-8.022c-6.898-.338-12.442-4.6-13.058-9.98c-.063-.548.39-.998.943-.998h5.304c-.057-1.633-.021-3.698.718-5.431c.424-.995 1.09-1.91 2.113-2.566C20.155 4.35 21.452 4 23.058 4c1.967 0 3.567.714 4.656 1.406c.547.347.975.695 1.27.959a8 8 0 0 1 .466.455l.01.01l.002.004l.002.001s0 .002-.734.653l.735-.651a1 1 0 0 1-1.495 1.328l-.01-.011l-.058-.06a6 6 0 0 0-.253-.24a8 8 0 0 0-1.007-.76C25.762 6.536 24.533 6 23.058 6c-1.316 0-2.215.284-2.843.686c-.624.4-1.055.967-1.353 1.667M12.306 15c1.175 3.76 5.667 7 11.694 7s10.52-3.24 11.694-7z" clip-rule="evenodd"></svg:path><svg:path d="M16 42v2h16v-2h-3.019c.66-.812 1.019-1.835 1.019-3c0-1.545-.632-2.84-1.757-3.724C27.143 34.413 25.655 34 24 34c-1.483 0-2.8-.13-3.719-.539c-.441-.196-.747-.438-.946-.722c-.194-.277-.335-.664-.335-1.24c0-.574.14-.96.335-1.238c.199-.284.505-.526.946-.722c.477-.212 1.06-.35 1.719-.432v-2.014c-.894.096-1.77.28-2.531.618c-.684.304-1.315.75-1.773 1.403c-.462.66-.696 1.461-.696 2.386s.234 1.726.696 2.386c.458.653 1.09 1.099 1.773 1.403c1.33.591 3.014.71 4.531.71c1.346 0 2.356.338 3.007.85c.625.49.993 1.196.993 2.15c0 .956-.368 1.661-.993 2.152c-.457.359-1.09.632-1.892.763V38h-2v4z"></svg:path></svg:g>`,
})
export class HealthiconsPharmacyOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPharmacyOutline24pxIcon],svg[healthicons-pharmacy-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M9 5c0-.406.152-.747.356-.884c.15-.1.713-.336 2.19.416a1 1 0 0 0 .908-1.782c-1.723-.877-3.16-1-4.21-.296C7.248 3.121 7 4.274 7 5H5c-.552 0-1.008.45-.919.996a6.3 6.3 0 0 0 .528 1.683c.402.85.991 1.62 1.734 2.27a8.2 8.2 0 0 0 2.596 1.518c.66.24 1.354.4 2.061.478V15h2v-3.055a9 9 0 0 0 1.934-.433a2 2 0 0 1-.934 1.22v2.142c1.725-.444 3-2.01 3-3.874a1 1 0 0 0-.111-.459q.405-.274.768-.591a7 7 0 0 0 1.734-2.271a6.4 6.4 0 0 0 .528-1.683C20.009 5.45 19.552 5 19 5zM7.66 8.445A5.1 5.1 0 0 1 6.505 7h10.99a5.1 5.1 0 0 1-1.155 1.445a6.2 6.2 0 0 1-1.96 1.142a7 7 0 0 1-2.376.413h-.008c-.82 0-1.629-.142-2.376-.413a6.2 6.2 0 0 1-1.96-1.142" clip-rule="evenodd"></svg:path><svg:path d="M7 20h4a1 1 0 0 1 .706-.956l2.183-.728a.162.162 0 0 0-.051-.316H9.5a2.5 2.5 0 0 1 0-5h.5v2h-.5a.5.5 0 0 0 0 1h4.338a2.162 2.162 0 0 1 1.14 4H17v2H7z"></svg:path></svg:g>`,
})
export class HealthiconsPharmacyOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPhoneIcon],svg[healthicons-phone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.24 21.58c2.88 5.66 7.52 10.28 13.18 13.18l4.4-4.4c.54-.54 1.34-.72 2.04-.48c2.24.74 4.66 1.14 7.14 1.14c1.1 0 2 .9 2 2V40c0 1.1-.9 2-2 2C21.22 42 6 26.78 6 8c0-1.1.9-2 2-2h7c1.1 0 2 .9 2 2c0 2.5.4 4.9 1.14 7.14c.22.7.06 1.48-.5 2.04z"></svg:path>`,
})
export class HealthiconsPhoneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPhoneNegativeIcon],svg[healthicons-phone-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsPhoneNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM26.42 34.76c-5.66-2.9-10.3-7.52-13.18-13.18l4.4-4.4c.56-.56.72-1.34.5-2.04A22.7 22.7 0 0 1 17 8c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2c0 18.78 15.22 34 34 34c1.1 0 2-.9 2-2v-6.98c0-1.1-.9-2-2-2c-2.48 0-4.9-.4-7.14-1.14c-.7-.24-1.5-.06-2.04.48z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsPhoneNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsPhoneNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPhoneOutlineIcon],svg[healthicons-phone-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.889 8A.894.894 0 0 0 8 8.889C8 26.073 21.927 40 39.111 40a.894.894 0 0 0 .889-.889V32.52a.894.894 0 0 0-.889-.889c-2.449 0-4.84-.395-7.057-1.127l-.01-.004a.88.88 0 0 0-.896.215l-4.67 4.67l-.648-.332c-5.531-2.834-10.067-7.348-12.883-12.884l-.33-.647l4.67-4.67a.9.9 0 0 0 .226-.913a22.5 22.5 0 0 1-1.124-7.05A.894.894 0 0 0 15.5 8zM6 8.889A2.894 2.894 0 0 1 8.889 6H15.5a2.894 2.894 0 0 1 2.889 2.889c0 2.254.36 4.415 1.026 6.43l.002.006l.002.007a2.9 2.9 0 0 1-.719 2.934l-3.634 3.635A27.6 27.6 0 0 0 26.1 32.933l3.633-3.633a2.88 2.88 0 0 1 2.953-.694a20.6 20.6 0 0 0 6.424 1.024A2.894 2.894 0 0 1 42 32.519v6.592A2.894 2.894 0 0 1 39.111 42C20.822 42 6 27.178 6 8.889" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsPhoneOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPhysicalTherapyIcon],svg[healthicons-physical-therapy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="healthiconsPhysicalTherapy0" d="M23.916 27h6.078h-.04c-2.044-.048-3.635-.408-4.981-1.62a7.7 7.7 0 0 1-.993-1.104l-1.247 1.557z"></svg:path><svg:path id="healthiconsPhysicalTherapy1" d="M9 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3zm18.5 11a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7m-7.252 12h-2.935l3.147 3.018l-.693 2.335q-.076.258-.218.486L17.9 37.5a2 2 0 0 1-3.4-2.11l1.509-2.43l1.025-3.46l.127-.5H14a2 2 0 0 0-2 2v7h-2v-7a4 4 0 0 1 4-4h3.645a2 2 0 0 1-.09-.177c-.952-2.107-.277-4.354.482-5.823a9.6 9.6 0 0 1 1.422-2.055c.446-.485 1.142-1.124 1.99-1.367a8 8 0 0 1 .931-.226c.337-.053.893-.097 1.494.153c.598.249.953.67 1.14.923c.155.21.31.465.424.657l.04.066l.462.772c.332.557.602 1.008.863 1.41c.364.558.621.872.846 1.074c.318.286.772.556 2.397.593a2 2 0 0 1-.038 4H34a4 4 0 0 1 4 4v7h-2v-7a2 2 0 0 0-2-2h-8.057l1.254 1.238a2 2 0 0 1 .43.627l2.075 4.784a2 2 0 0 1-3.67 1.591l-1.92-4.428z"></svg:path></svg:defs><svg:g fill="currentColor"><svg:use href="#healthiconsPhysicalTherapy0"></svg:use><svg:use href="#healthiconsPhysicalTherapy1" fill-rule="evenodd" clip-rule="evenodd"></svg:use><svg:use href="#healthiconsPhysicalTherapy0"></svg:use><svg:use href="#healthiconsPhysicalTherapy1" fill-rule="evenodd" clip-rule="evenodd"></svg:use></svg:g>`,
})
export class HealthiconsPhysicalTherapyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPhysicalTherapyNegativeIcon],svg[healthicons-physical-therapy-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsPhysicalTherapyNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM6 9a3 3 0 0 1 3-3h30a3 3 0 0 1 3 3v30a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3zm25 4.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0M17.313 29h2.935l3.864 3.813l1.92 4.427a2 2 0 1 0 3.67-1.591l-2.075-4.784a2 2 0 0 0-.43-.627L25.943 29H34a2 2 0 0 1 2 2v7h2v-7a4 4 0 0 0-4-4h-3.992a2 2 0 0 0 .038-4c-1.625-.037-2.08-.307-2.397-.593c-.225-.202-.482-.516-.846-1.074c-.261-.402-.53-.853-.863-1.41q-.21-.354-.462-.772l-.04-.066a8 8 0 0 0-.423-.657a2.74 2.74 0 0 0-1.142-.923c-.6-.25-1.156-.206-1.493-.153c-.319.05-.66.148-.932.226c-.847.243-1.543.882-1.99 1.367A9.6 9.6 0 0 0 18.039 21c-.76 1.47-1.435 3.716-.483 5.823q.041.092.09.177H14a4 4 0 0 0-4 4v7h2v-7a2 2 0 0 1 2-2h3.16l-.126.5l-1.025 3.46l-1.508 2.43a2 2 0 0 0 3.399 2.109l1.65-2.66q.14-.228.217-.486l.693-2.335zm12.681-2h-6.078l-1.183-1.167l1.247-1.557c.295.393.62.768.993 1.104c1.346 1.212 2.937 1.572 4.98 1.62z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsPhysicalTherapyNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsPhysicalTherapyNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPhysicalTherapyOutlineIcon],svg[healthicons-physical-therapy-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M39 8H9a1 1 0 0 0-1 1v30a1 1 0 0 0 1 1h30a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1M9 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3z"></svg:path><svg:path d="M31.477 13.746a3.746 3.746 0 1 1-7.493 0a3.746 3.746 0 0 1 7.493 0M14 30h5.828l4.394 4.336l2.066 4.764a2 2 0 0 0 3.67-1.592l-2.22-5.12a2 2 0 0 0-.43-.627L25.522 30H34a2 2 0 0 1 2 2v8h2v-8a4 4 0 0 0-4-4h-3.128a2 2 0 0 0-.42-3.945c-1.754-.04-2.28-.332-2.657-.671c-.253-.229-.536-.576-.928-1.178c-.282-.432-.572-.919-.928-1.516l-.493-.823l-.043-.07a9 9 0 0 0-.446-.692c-.195-.263-.556-.69-1.162-.942c-.609-.254-1.174-.21-1.523-.155a9 9 0 0 0-.98.238c-.868.249-1.591.908-2.065 1.423a10 10 0 0 0-1.5 2.169c-.805 1.558-1.505 3.913-.513 6.11l.024.052H14a4 4 0 0 0-4 4v8h2v-8a2 2 0 0 1 2-2m15.33-2h-5.834l-.956-.943l1.513-1.891c.318.426.666.83 1.066 1.19c1.175 1.058 2.53 1.498 4.211 1.644m-12.458 2.087l3.276 3.142l-.829 2.797q-.076.257-.218.486l-1.766 2.846a2 2 0 0 1-3.399-2.109l1.625-2.617l1.103-3.723z"></svg:path></svg:g>`,
})
export class HealthiconsPhysicalTherapyOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPill1Icon],svg[healthicons-pill-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M44 24c0 11.046-8.954 20-20 20S4 35.046 4 24S12.954 4 24 4s20 8.954 20 20m-9.793-9.707a1 1 0 0 1 0 1.414l-18.5 18.5a1 1 0 0 1-1.414-1.414l18.5-18.5a1 1 0 0 1 1.414 0" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsPill1Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPill124pxIcon],svg[healthicons-pill-1-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m4.707-13.293a1 1 0 0 0-1.414-1.414l-8 8a1 1 0 1 0 1.414 1.414z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsPill124pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPill1NegativeIcon],svg[healthicons-pill-1-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsPill1Negative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20m18-20c0 9.941-8.059 18-18 18S6 33.941 6 24S14.059 6 24 6s18 8.059 18 18m-7.793-9.707a1 1 0 0 1 0 1.414l-18.5 18.5a1 1 0 0 1-1.414-1.414l18.5-18.5a1 1 0 0 1 1.414 0" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsPill1Negative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsPill1NegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPill1OutlineIcon],svg[healthicons-pill-1-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M34.207 15.707a1 1 0 0 0-1.414-1.414l-18.5 18.5a1 1 0 0 0 1.414 1.414z"></svg:path><svg:path fill-rule="evenodd" d="M44 24c0 11.046-8.954 20-20 20S4 35.046 4 24S12.954 4 24 4s20 8.954 20 20m-2 0c0 9.941-8.059 18-18 18S6 33.941 6 24S14.059 6 24 6s18 8.059 18 18" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsPill1OutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPill1Outline24pxIcon],svg[healthicons-pill-1-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M16.207 9.207a1 1 0 0 0-1.414-1.414l-7 7a1 1 0 1 0 1.414 1.414z"></svg:path><svg:path fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-2 0a8 8 0 1 1-16 0a8 8 0 0 1 16 0" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsPill1Outline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPills2Icon],svg[healthicons-pills-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16 26c5.523 0 10-4.477 10-10S21.523 6 16 6S6 10.477 6 16s4.477 10 10 10m4.304-10.692a1 1 0 0 0-.762-1.849l-7.846 3.233a1 1 0 1 0 .763 1.85zM32 42c5.523 0 10-4.477 10-10s-4.477-10-10-10s-10 4.477-10 10s4.477 10 10 10m3.91-8.075a1 1 0 1 0 .449-1.949l-8.27-1.901a1 1 0 1 0-.448 1.949z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsPills2Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPills224pxIcon],svg[healthicons-pills-2-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.5 13a5.5 5.5 0 1 0 0-11a5.5 5.5 0 0 0 0 11m1.53-5.97a.75.75 0 0 0-1.06-1.06l-2 2a.75.75 0 0 0 1.06 1.06zM16.5 22a5.5 5.5 0 1 0 0-11a5.5 5.5 0 0 0 0 11m.47-3.97a.75.75 0 1 0 1.06-1.06l-2-2a.75.75 0 1 0-1.06 1.06z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsPills224pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPills2NegativeIcon],svg[healthicons-pills-2-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsPills2Negative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM26 16c0 5.523-4.477 10-10 10S6 21.523 6 16S10.477 6 16 6s10 4.477 10 10m-5.153-1.997a1 1 0 0 1-.543 1.305l-7.845 3.233a1 1 0 1 1-.763-1.849l7.846-3.233a1 1 0 0 1 1.305.544M42 32c0 5.523-4.477 10-10 10s-10-4.477-10-10s4.477-10 10-10s10 4.477 10 10m-4.89 1.175a1 1 0 0 1-1.2.75l-8.269-1.901a1 1 0 1 1 .448-1.95l8.27 1.902a1 1 0 0 1 .75 1.199" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsPills2Negative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsPills2NegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPills2OutlineIcon],svg[healthicons-pills-2-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M20.304 15.308a1 1 0 0 0-.762-1.85l-7.846 3.234a1 1 0 0 0 .762 1.85z"></svg:path><svg:path fill-rule="evenodd" d="M26 16c0 5.523-4.477 10-10 10S6 21.523 6 16S10.477 6 16 6s10 4.477 10 10m-2 0a8 8 0 1 1-16 0a8 8 0 0 1 16 0" clip-rule="evenodd"></svg:path><svg:path d="M35.91 33.925a1 1 0 1 0 .449-1.949l-8.27-1.901a1 1 0 1 0-.448 1.949z"></svg:path><svg:path fill-rule="evenodd" d="M32 42c5.523 0 10-4.477 10-10s-4.477-10-10-10s-10 4.477-10 10s4.477 10 10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsPills2OutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPills2Outline24pxIcon],svg[healthicons-pills-2-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M9.03 7.03a.75.75 0 0 0-1.06-1.06l-2 2a.75.75 0 0 0 1.06 1.06z"></svg:path><svg:path fill-rule="evenodd" d="M13 7.5a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0m-2 0a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0" clip-rule="evenodd"></svg:path><svg:path d="M16.97 18.03a.75.75 0 1 0 1.06-1.06l-2-2a.75.75 0 1 0-1.06 1.06z"></svg:path><svg:path fill-rule="evenodd" d="M22 16.5a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0m-2 0a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsPills2Outline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPills3Icon],svg[healthicons-pills-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M24 23a8.5 8.5 0 1 0 0-17a8.5 8.5 0 0 0 0 17m1.298-12.01a1 1 0 0 0-1.993-.167l-.602 7.187a1 1 0 0 0 1.992.167zM14.5 42a8.5 8.5 0 1 0 0-17a8.5 8.5 0 0 0 0 17m1.843-5.243a1 1 0 0 0 1.414-1.414l-5.1-5.1a1 1 0 0 0-1.414 1.414zM42 31.5a8.5 8.5 0 1 1-17 0a8.5 8.5 0 0 1 17 0m-4.241-1.755a1 1 0 0 1-.544 1.306l-6.668 2.748a1 1 0 0 1-.762-1.85l6.668-2.747a1 1 0 0 1 1.306.543"></svg:path><svg:path d="m23.305 10.823l-1.994-.167a3 3 0 0 1 2.168-2.635a6.5 6.5 0 0 0-1.067 12.784a3 3 0 0 1-1.703-2.962l.602-7.187zm1.993.167l-.602 7.187a1 1 0 0 1-1.994-.167m0-.001l.602-7.185m1.219 10.155a6.5 6.5 0 0 0 1.063-12.784a3 3 0 0 1 1.705 2.962l-.602 7.187a3 3 0 0 1-2.166 2.635m-4.738 16.306a6.5 6.5 0 0 0-9.071-9.069a3 3 0 0 1 3.357.613l5.1 5.1a3 3 0 0 1 .614 3.355m-1.5 1.5a6.5 6.5 0 0 1-9.069-9.071a3 3 0 0 0 .613 3.358l5.1 5.1a3 3 0 0 0 3.355.614m-1.944-2.03l-5.098-5.098a1 1 0 0 1 1.414-1.414h.001l5.098 5.099m-1.415 1.414l.002.001a1 1 0 0 0 1.414-1.414m19.458-4.292l.762 1.849l-6.668 2.748a3 3 0 0 1-3.336-.725a6.5 6.5 0 0 0 11.86-4.891a3 3 0 0 1-1.856 2.868zm1.812-2.973a3 3 0 0 0-3.336-.726l-6.668 2.749a3 3 0 0 0-1.857 2.867a6.5 6.5 0 0 1 11.86-4.89m-9.242 3.872l6.668-2.748a1 1 0 0 1 .762 1.849l-6.667 2.747h-.001a1 1 0 0 1-.762-1.848M24 23a8.5 8.5 0 1 0 0-17a8.5 8.5 0 0 0 0 17m1.298-12.01a1 1 0 0 0-1.993-.167M14.5 42a8.5 8.5 0 1 0 0-17a8.5 8.5 0 0 0 0 17m19-2a8.5 8.5 0 1 0 0-17a8.5 8.5 0 0 0 0 17"></svg:path></svg:g>`,
})
export class HealthiconsPills3Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPills324pxIcon],svg[healthicons-pills-3-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 11a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9m.707-3.75a.75.75 0 0 0 0-1.5h-1.414a.75.75 0 0 0 0 1.5zM6.5 22a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9m1.03-4.47a.75.75 0 1 0-1.06-1.06l-1 1a.75.75 0 1 0 1.06 1.06zM16.5 20a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9m-.03-3.47a.75.75 0 1 0 1.06-1.06l-1-1a.75.75 0 1 0-1.06 1.06z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsPills324pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPills3NegativeIcon],svg[healthicons-pills-3-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsPills3Negative0)"><svg:path d="M24.385 9.91a1 1 0 0 1 .913 1.08l-.602 7.187a1 1 0 0 1-1.994-.167l.603-7.187a1 1 0 0 1 1.08-.913m-6.628 26.847a1 1 0 0 1-1.414 0l-5.1-5.1a1 1 0 0 1 1.414-1.414l5.1 5.1a1 1 0 0 1 0 1.414m19.458-5.707a1 1 0 0 0-.762-1.848l-6.668 2.748a1 1 0 0 0 .762 1.849z"></svg:path><svg:path fill-rule="evenodd" d="M48 0H0v48h48zM32.5 14.5a8.5 8.5 0 1 1-17 0a8.5 8.5 0 0 1 17 0m-9.5 19a8.5 8.5 0 1 1-17 0a8.5 8.5 0 0 1 17 0M33.5 40a8.5 8.5 0 1 0 0-17a8.5 8.5 0 0 0 0 17" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsPills3Negative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsPills3NegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPills3OutlineIcon],svg[healthicons-pills-3-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M24 21a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13m0 2a8.5 8.5 0 1 0 0-17a8.5 8.5 0 0 0 0 17"></svg:path><svg:path d="M24.385 9.91a1 1 0 0 1 .913 1.08l-.602 7.187a1 1 0 0 1-1.994-.167l.603-7.187a1 1 0 0 1 1.08-.913M14.5 40a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13m0 2a8.5 8.5 0 1 0 0-17a8.5 8.5 0 0 0 0 17"></svg:path><svg:path d="M17.757 36.757a1 1 0 0 1-1.414 0l-5.1-5.1a1 1 0 0 1 1.414-1.414l5.1 5.1a1 1 0 0 1 0 1.414M33.5 38a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13m0 2a8.5 8.5 0 1 0 0-17a8.5 8.5 0 0 0 0 17"></svg:path><svg:path d="M37.759 29.745a1 1 0 0 1-.544 1.306l-6.668 2.748a1 1 0 0 1-.762-1.85l6.668-2.748a1 1 0 0 1 1.306.544"></svg:path></svg:g>`,
})
export class HealthiconsPills3OutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPills3Outline24pxIcon],svg[healthicons-pills-3-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12.707 7.25a.75.75 0 0 0 0-1.5h-1.414a.75.75 0 0 0 0 1.5z"></svg:path><svg:path fill-rule="evenodd" d="M16.5 6.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-2 0a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0" clip-rule="evenodd"></svg:path><svg:path d="M7.53 17.53a.75.75 0 1 0-1.06-1.06l-1 1a.75.75 0 1 0 1.06 1.06z"></svg:path><svg:path fill-rule="evenodd" d="M11 17.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-2 0a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0" clip-rule="evenodd"></svg:path><svg:path d="M16.47 16.53a.75.75 0 1 0 1.06-1.06l-1-1a.75.75 0 1 0-1.06 1.06z"></svg:path><svg:path fill-rule="evenodd" d="M21 15.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-2 0a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsPills3Outline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPills4Icon],svg[healthicons-pills-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M23 14.5a8.5 8.5 0 1 1-17 0a8.5 8.5 0 0 1 17 0m-4.66-2.545a1 1 0 0 1-.282 1.386l-6.011 3.985a1 1 0 1 1-1.105-1.667l6.012-3.985a1 1 0 0 1 1.386.281M42 14.5a8.5 8.5 0 1 1-17 0a8.5 8.5 0 0 1 17 0m-10.097-4.32a1 1 0 0 1 1.285.59l2.5 6.766a1 1 0 1 1-1.876.693l-2.5-6.765a1 1 0 0 1 .59-1.284M14.5 42a8.5 8.5 0 1 0 0-17a8.5 8.5 0 0 0 0 17m.467-4.787a1 1 0 0 0 1.845-.77l-2.779-6.656a1 1 0 1 0-1.845.77zM42 33.5a8.5 8.5 0 1 1-17 0a8.5 8.5 0 0 1 17 0m-5.011-3.008a1 1 0 0 1-.105 1.41l-5.462 4.71a1 1 0 0 1-1.306-1.514l5.462-4.71a1 1 0 0 1 1.41.104"></svg:path><svg:path d="M14.5 21a6.5 6.5 0 0 0 5.93-9.164a3 3 0 0 1-1.267 3.172l-6.012 3.985a3 3 0 0 1-3.409-.064A6.48 6.48 0 0 0 14.5 21m-5.93-3.835a6.5 6.5 0 0 1 10.689-7.093a3 3 0 0 0-3.41-.065l-6.012 3.985a3 3 0 0 0-1.267 3.173m2.373-1.507a1 1 0 0 0 1.104 1.668l6.012-3.984a1 1 0 0 0-1.104-1.668zM14.5 23a8.5 8.5 0 1 0 0-17a8.5 8.5 0 0 0 0 17m22.216-2.85a6.5 6.5 0 0 0-4.45-12.033a3 3 0 0 1 2.797 1.96l2.501 6.766a3 3 0 0 1-.848 3.307m-1.984.733Q34.133 21 33.5 21a6.5 6.5 0 0 1-3.216-12.15a3 3 0 0 0-.848 3.308l2.5 6.765a3 3 0 0 0 2.796 1.96m-1.544-10.112a1 1 0 1 0-1.876.693l2.5 6.765a1 1 0 1 0 1.876-.693zM17.949 39.01a6.5 6.5 0 0 0-4.947-11.837a3 3 0 0 1 2.877 1.843l2.779 6.655a3 3 0 0 1-.709 3.339m-1.953.816a6.5 6.5 0 0 1-4.943-11.838a3 3 0 0 0-.71 3.34l2.778 6.655a3 3 0 0 0 2.875 1.843m-1.03-2.614a1 1 0 0 0 1.846-.77v-.001l-2.779-6.655a1 1 0 1 0-1.845.77zM33.5 40a6.5 6.5 0 0 0 5.549-9.887a3 3 0 0 1-.859 3.304l-5.462 4.71m4.936-9.619a6.5 6.5 0 0 0-9.713 8.378a3 3 0 0 1 .859-3.303l5.462-4.71m3.392-.365a3 3 0 0 0-3.392.365zM33.5 40a6.47 6.47 0 0 1-4.162-1.507zm-4.162-1.507a3 3 0 0 0 3.39-.366zm7.545-6.59l-5.46 4.708v.001a1 1 0 0 1-1.307-1.514m5.462-4.71l-5.46 4.708zM33.5 23a8.5 8.5 0 1 0 0-17a8.5 8.5 0 0 0 0 17m-19 19a8.5 8.5 0 1 0 0-17a8.5 8.5 0 0 0 0 17m19 0a8.5 8.5 0 1 0 0-17a8.5 8.5 0 0 0 0 17"></svg:path></svg:g>`,
})
export class HealthiconsPills4Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPills424pxIcon],svg[healthicons-pills-4-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.5 22a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9m1.03-4.47a.75.75 0 1 0-1.06-1.06l-1 1a.75.75 0 1 0 1.06 1.06zM7.5 12a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9m-.03-3.47a.75.75 0 0 0 1.06-1.06l-1-1a.75.75 0 0 0-1.06 1.06zM17.5 11a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9m1.03-4.47a.75.75 0 0 0-1.06-1.06l-1 1a.75.75 0 0 0 1.06 1.06zM17.5 22a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9m-.707-5.25a.75.75 0 0 0 0 1.5h1.414a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsPills424pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPills4NegativeIcon],svg[healthicons-pills-4-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsPills4Negative0)"><svg:path d="M18.059 13.341a1 1 0 0 0-1.105-1.667l-6.012 3.985a1 1 0 0 0 1.104 1.667zm15.129-2.571a1 1 0 1 0-1.876.694l2.5 6.765a1 1 0 1 0 1.876-.693zM16.275 37.75a1 1 0 0 1-1.308-.537l-2.78-6.655a1 1 0 0 1 1.846-.77l2.78 6.655a1 1 0 0 1-.538 1.308m20.609-5.848a1 1 0 0 0-1.306-1.515l-5.462 4.71a1 1 0 0 0 1.306 1.514z"></svg:path><svg:path fill-rule="evenodd" d="M48 0H0v48h48zM14.5 23a8.5 8.5 0 1 0 0-17a8.5 8.5 0 0 0 0 17m19 0a8.5 8.5 0 1 0 0-17a8.5 8.5 0 0 0 0 17M23 33.5a8.5 8.5 0 1 1-17 0a8.5 8.5 0 0 1 17 0M33.5 42a8.5 8.5 0 1 0 0-17a8.5 8.5 0 0 0 0 17" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsPills4Negative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsPills4NegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPills4OutlineIcon],svg[healthicons-pills-4-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M14.5 21a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13m0 2a8.5 8.5 0 1 0 0-17a8.5 8.5 0 0 0 0 17"></svg:path><svg:path d="M18.34 11.956a1 1 0 0 1-.282 1.386l-6.011 3.984a1 1 0 0 1-1.105-1.667l6.012-3.985a1 1 0 0 1 1.386.282M33.5 21a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13m0 2a8.5 8.5 0 1 0 0-17a8.5 8.5 0 0 0 0 17"></svg:path><svg:path d="M31.903 10.18a1 1 0 0 1 1.285.591l2.5 6.765a1 1 0 1 1-1.876.694l-2.5-6.766a1 1 0 0 1 .59-1.284M14.5 40a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13m0 2a8.5 8.5 0 1 0 0-17a8.5 8.5 0 0 0 0 17"></svg:path><svg:path d="M16.275 37.75a1 1 0 0 1-1.308-.537l-2.78-6.655a1 1 0 1 1 1.847-.77l2.778 6.655a1 1 0 0 1-.537 1.308M33.5 40a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13m0 2a8.5 8.5 0 1 0 0-17a8.5 8.5 0 0 0 0 17"></svg:path><svg:path d="M36.989 30.492a1 1 0 0 1-.105 1.41l-5.462 4.71a1 1 0 1 1-1.306-1.514l5.462-4.71a1 1 0 0 1 1.41.104"></svg:path></svg:g>`,
})
export class HealthiconsPills4OutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPills4Outline24pxIcon],svg[healthicons-pills-4-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M7.53 17.53a.75.75 0 1 0-1.06-1.06l-1 1a.75.75 0 1 0 1.06 1.06z"></svg:path><svg:path fill-rule="evenodd" d="M11 17.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-2 0a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0" clip-rule="evenodd"></svg:path><svg:path d="M7.47 8.53a.75.75 0 0 0 1.06-1.06l-1-1a.75.75 0 0 0-1.06 1.06z"></svg:path><svg:path fill-rule="evenodd" d="M12 7.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-2 0a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0" clip-rule="evenodd"></svg:path><svg:path d="M18.53 6.53a.75.75 0 0 0-1.06-1.06l-1 1a.75.75 0 0 0 1.06 1.06z"></svg:path><svg:path fill-rule="evenodd" d="M22 6.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-2 0a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0" clip-rule="evenodd"></svg:path><svg:path d="M16.793 16.75a.75.75 0 0 0 0 1.5h1.414a.75.75 0 1 0 0-1.5z"></svg:path><svg:path fill-rule="evenodd" d="M22 17.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-2 0a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsPills4Outline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPlantationWorkerIcon],svg[healthicons-plantation-worker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M34 16c0 5.523-4.477 10-10 10s-10-4.477-10-10S18.477 6 24 6s10 4.477 10 10m-2 0a8 8 0 1 1-16 0a8 8 0 0 1 16 0" clip-rule="evenodd"></svg:path><svg:path d="M39 24c0 1.533-1.127 2.69-2 3.355v2.346q.194-.18.438-.317c1.383-.774 3.163-.2 4.034.172a.804.804 0 0 1 .488.836c-.103.909-.47 2.62-1.785 3.231c-1.09.507-2.343.408-3.175.246v1.832q.194-.18.438-.317c1.383-.773 3.163-.2 4.034.172a.804.804 0 0 1 .488.836c-.103.909-.47 2.62-1.785 3.231c-1.09.507-2.343.408-3.175.246V41a1 1 0 1 1-2 0v-1.13c-.832.161-2.085.26-3.175-.247c-1.315-.61-1.683-2.322-1.785-3.231a.804.804 0 0 1 .488-.836c.87-.372 2.65-.945 4.034-.172q.244.138.438.317V33.87c-.832.162-2.085.26-3.175-.246c-1.315-.61-1.683-2.322-1.785-3.231a.804.804 0 0 1 .488-.836c.87-.372 2.65-.946 4.034-.172q.244.137.438.317v-2.346c-.873-.666-2-1.822-2-3.355c0-1.903 1.738-3.227 2.569-3.75a.8.8 0 0 1 .862 0C37.261 20.773 39 22.097 39 24M6 35.538c0-3.235 3.69-5.2 8-6.31V35h-1a1 1 0 0 0-1 1v6H6zM24 36c-3.5 0-6-1-6-1h-2v-6.22a43 43 0 0 1 4-.574V30a2 2 0 0 0 2 2h4c.532 0 1.016-.208 1.374-.547q.05.165.105.337a8.6 8.6 0 0 0 .74 1.669q.121.206.283.437a3 3 0 0 0-1.406 1.847C26.21 35.89 25.16 36 24 36m0 2a21 21 0 0 0 3.191-.247c.068.293.162.652.288 1.037c.118.356.277.778.492 1.21H14v-3h3.651l.177.059c.336.108.811.249 1.401.388A21 21 0 0 0 24 38"></svg:path></svg:g>`,
})
export class HealthiconsPlantationWorkerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPlantationWorkerAltIcon],svg[healthicons-plantation-worker-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M24 9.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0"></svg:path><svg:path fill-rule="evenodd" d="M7 16.268a2 2 0 0 0 0 3.464v12.439A3 3 0 0 0 5 35v6h2v-4h2v4h2v-6a3 3 0 0 0-2-2.83V20h6v20a2 2 0 1 0 4 0v-9h3v9a2 2 0 1 0 4 0V27.917A6.002 6.002 0 0 0 25 16H9v-3H7zM28 22a2 2 0 0 0-2-2v4a2 2 0 0 0 2-2" clip-rule="evenodd"></svg:path><svg:path d="M36.914 17.595A1 1 0 0 1 37 18v23a1 1 0 0 1-2 0v-9.945c-.001.519-.04.88-.04.88s-2.928.393-4.083-.75c-1.154-1.143-.837-4.12-.837-4.12s2.928-.393 4.083.75c.738.73.874 2.21.877 3.183V18c0-.144.03-.282.086-.405c-.714-.792-1.586-1.986-1.586-3.095c0-1.877 2.5-4 2.5-4s2.5 2.123 2.5 4c0 1.109-.872 2.303-1.586 3.095"></svg:path><svg:path d="M37.877 34.815c1.155-1.142 4.083-.75 4.083-.75s.317 2.977-.837 4.12c-1.155 1.142-4.083.75-4.083.75s-.317-2.977.837-4.12m4.083-14.75s-2.928-.393-4.083.75c-1.154 1.143-.837 4.12-.837 4.12s2.928.393 4.083-.75c1.154-1.143.837-4.12.837-4.12"></svg:path></svg:g>`,
})
export class HealthiconsPlantationWorkerAltIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPlantationWorkerAltNegativeIcon],svg[healthicons-plantation-worker-alt-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsPlantationWorkerAltNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm7 16.268a2 2 0 0 0 0 3.464v12.439A3 3 0 0 0 5 35v6h2v-4h2v4h2v-6a3 3 0 0 0-2-2.83V20h6v20a2 2 0 1 0 4 0v-9h3v9a2 2 0 1 0 4 0V27.917A6.002 6.002 0 0 0 25 16H9v-3H7zM28 22a2 2 0 0 0-2-2v4a2 2 0 0 0 2-2m-7.5-9a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7m16.414 4.595A1 1 0 0 1 37 18v23a1 1 0 0 1-2 0v-9.945c-.001.52-.04.88-.04.88s-2.928.393-4.083-.75c-1.154-1.143-.837-4.12-.837-4.12s2.928-.393 4.083.75c.738.73.874 2.21.877 3.183V18c0-.144.03-.282.086-.405c-.714-.792-1.586-1.986-1.586-3.095c0-1.877 2.5-4 2.5-4s2.5 2.123 2.5 4c0 1.109-.872 2.303-1.586 3.095m.963 17.22c1.155-1.142 4.083-.75 4.083-.75s.317 2.977-.837 4.12c-1.155 1.142-4.083.75-4.083.75s-.317-2.977.837-4.12m4.083-14.75s-2.928-.393-4.083.75c-1.154 1.143-.837 4.12-.837 4.12s2.928.393 4.083-.75c1.154-1.143.837-4.12.837-4.12" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsPlantationWorkerAltNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsPlantationWorkerAltNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPlantationWorkerAltOutlineIcon],svg[healthicons-plantation-worker-alt-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M20.5 14a4 4 0 1 0 0-8a4 4 0 0 0 0 8m0-2a2 2 0 1 0 0-4a2 2 0 0 0 0 4" clip-rule="evenodd"></svg:path><svg:path d="M27 22a2 2 0 0 0-2-2v4a2 2 0 0 0 2-2"></svg:path><svg:path fill-rule="evenodd" d="M11 35a3 3 0 0 0-2-2.83V22h5v17a3 3 0 1 0 6 0v-8h1v8c0 .701.24 1.346.644 1.857A3 3 0 0 0 27 39V27.718c1.563-.72 4-2.808 4-6.147C31 17.364 27.129 16 26.015 16H9v-3H7v3.764c-.614.55-1 1.348-1 2.236s.386 1.687 1 2.236v10.935A3 3 0 0 0 5 35v6h2v-4h2v4h2zm14-8.563l1.163-.536c1.144-.527 2.837-2.047 2.837-4.33c0-1.394-.605-2.238-1.308-2.789a4.3 4.3 0 0 0-1.126-.63a2.7 2.7 0 0 0-.543-.15q-.02-.002-.008-.002H9v2h7v19a1 1 0 1 0 2 0V29h5v10a1 1 0 1 0 2 0zm12.754-8.752a10 10 0 0 1-.754.77v2.485c.395-.39.892-.605 1.33-.73c.445-.126.905-.18 1.3-.2a9 9 0 0 1 1.43.046l.027.003l.009.001h.004c.457.062.814.428.863.887v.013l.004.027a6 6 0 0 1 .026.412c.01.264.013.629-.016 1.031c-.03.398-.093.86-.227 1.306c-.132.437-.354.932-.748 1.322c-.396.392-.893.607-1.331.731c-.446.127-.906.18-1.301.2a9 9 0 0 1-1.338-.035L37 25.951v8.989c.395-.39.892-.605 1.33-.73c.445-.126.905-.18 1.3-.2a9 9 0 0 1 1.43.046l.027.003l.009.001h.004c.457.062.814.428.863.887v.013l.004.027a6 6 0 0 1 .026.412c.01.264.013.629-.016 1.031c-.03.398-.093.86-.227 1.306c-.132.437-.354.932-.748 1.323c-.396.391-.893.606-1.331.73c-.446.127-.906.18-1.301.2a9 9 0 0 1-1.338-.035L37 39.951V41a1 1 0 1 1-2 0v-8.05l-.032.003a9 9 0 0 1-1.338.035a6 6 0 0 1-1.3-.2c-.44-.124-.936-.339-1.331-.73s-.617-.886-.749-1.323a6 6 0 0 1-.227-1.306a9 9 0 0 1 .01-1.443l.003-.027l.001-.009v-.004c.05-.459.406-.825.863-.886h.004l.009-.002l.027-.003l.092-.01q.117-.013.316-.027a9 9 0 0 1 1.022-.008c.395.02.855.073 1.3.2c.439.124.935.338 1.33.729v-9.484a10 10 0 0 1-.754-.771a6.5 6.5 0 0 1-.813-1.147C33.203 16.11 33 15.58 33 15s.202-1.111.433-1.538c.234-.434.534-.826.813-1.147a10 10 0 0 1 1.098-1.07l.022-.018l.007-.006l.003-.002v-.001c.365-.29.883-.29 1.248 0l.003.003l.007.005l.022.019a7 7 0 0 1 .33.287c.208.19.486.46.768.783c.28.32.579.713.813 1.147c.23.427.433.958.433 1.538s-.202 1.111-.433 1.538a6.5 6.5 0 0 1-.813 1.147m-1.508-1.314a7 7 0 0 1-.246.268a7 7 0 0 1-.246-.268a4.5 4.5 0 0 1-.562-.783C35.048 15.32 35 15.124 35 15s.048-.32.192-.588c.141-.26.341-.53.562-.783q.125-.143.246-.268q.12.125.246.268c.22.254.421.523.562.783c.144.268.192.464.192.588s-.048.32-.192.588c-.141.26-.341.53-.562.783m2.629 19.764c-.261.074-.403.162-.47.228s-.16.212-.24.479a4 4 0 0 0-.147.874a7 7 0 0 0-.015.284q.129-.001.265-.008c.306-.016.605-.055.857-.127c.261-.074.404-.162.47-.228c.067-.066.16-.212.24-.479a4 4 0 0 0 .147-.874a7 7 0 0 0 .015-.284q-.129.001-.265.008a4 4 0 0 0-.857.127m-.47-13.772c.067-.066.209-.154.47-.228c.253-.072.552-.111.857-.127q.136-.007.265-.008a7 7 0 0 1-.015.284c-.023.311-.07.617-.147.874c-.08.267-.173.412-.24.479c-.066.066-.209.154-.47.228a4 4 0 0 1-.857.127q-.136.007-.265.008q.005-.138.015-.284c.023-.311.07-.617.147-.874c.08-.267.173-.412.24-.479M32.003 29q.005.138.015.284c.023.311.07.617.147.874c.08.267.173.412.24.479c.067.066.209.154.47.228c.253.072.552.111.857.127q.136.007.265.008a7 7 0 0 0-.015-.284a4 4 0 0 0-.147-.874c-.08-.267-.173-.412-.24-.479c-.066-.066-.209-.154-.47-.228a4 4 0 0 0-.857-.127a6 6 0 0 0-.265-.008" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsPlantationWorkerAltOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPlantationWorkerNegativeIcon],svg[healthicons-plantation-worker-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsPlantationWorkerNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm24 24a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0 2c5.523 0 10-4.477 10-10S29.523 6 24 6s-10 4.477-10 10s4.477 10 10 10m-10 3.229V35h-1a1 1 0 0 0-1 1v6H6v-6.462c0-3.235 3.69-5.2 8-6.31M18 35h-2v-6.22a43 43 0 0 1 4-.574V30a2 2 0 0 0 2 2h4c.532 0 1.016-.208 1.374-.547q.05.165.105.337c.16.482.395 1.083.74 1.67a7 7 0 0 0 .283.436a3 3 0 0 0-1.406 1.847C26.21 35.89 25.16 36 24 36c-3.5 0-6-1-6-1m10 1.783l1-.144zM24 38c1.183 0 2.262-.103 3.191-.246c.068.292.162.65.288 1.036c.118.356.277.778.492 1.21H14v-3h3.651l.177.059c.336.108.811.249 1.401.388A21 21 0 0 0 24 38m4-8.217l1-.143zm1.544-1.4l.253.617zM37 27.355c.873-.666 2-1.822 2-3.355c0-1.903-1.739-3.227-2.569-3.75a.8.8 0 0 0-.862 0C34.739 20.773 33 22.097 33 24c0 1.533 1.127 2.69 2 3.355v2.346a2.3 2.3 0 0 0-.438-.317c-1.383-.774-3.163-.2-4.034.172a.804.804 0 0 0-.488.836c.102.909.47 2.62 1.785 3.231c1.09.507 2.343.408 3.175.246v1.832a2.3 2.3 0 0 0-.438-.317c-1.383-.773-3.163-.2-4.034.172a.804.804 0 0 0-.488.836c.102.909.47 2.62 1.785 3.231c1.09.507 2.343.408 3.175.246V41a1 1 0 1 0 2 0v-1.13c.832.161 2.085.26 3.175-.247c1.315-.61 1.683-2.322 1.785-3.231a.804.804 0 0 0-.488-.836c-.87-.372-2.65-.945-4.034-.172A2.3 2.3 0 0 0 37 35.7v-1.83c.832.162 2.085.26 3.175-.246c1.315-.61 1.683-2.322 1.785-3.231a.804.804 0 0 0-.488-.836c-.87-.372-2.65-.946-4.034-.172A2.3 2.3 0 0 0 37 29.7z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsPlantationWorkerNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsPlantationWorkerNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPlantationWorkerOutlineIcon],svg[healthicons-plantation-worker-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M34 16c0 5.523-4.477 10-10 10s-10-4.477-10-10S18.477 6 24 6s10 4.477 10 10m-2 0a8 8 0 1 1-16 0a8 8 0 0 1 16 0M17.828 37.059L17.651 37H14v3h13.97q.115.23.25.46c.271.458.692 1.048 1.324 1.54H6v-6.462c0-4.214 6.26-6.274 12-7.092a45 45 0 0 1 2-.24V30q0 .109.011.215A2 2 0 0 0 22 32h4c.532 0 1.016-.208 1.374-.547q.05.165.105.337c.15.456.37 1.019.686 1.574A4 4 0 0 1 26 34h-4a4 4 0 0 1-3.974-3.537c-1.02.152-2.042.344-3.026.578V35h3s2.5 1 6 1c1.16 0 2.21-.11 3.096-.257a3 3 0 0 0-.066 1.18l.005.027l-.004-.026v.004l.001.006l.003.016l.006.042a9 9 0 0 0 .099.53l.051.232c-.929.143-2.008.246-3.191.246c-1.937 0-3.593-.276-4.77-.553a18 18 0 0 1-1.402-.388m-6.356-4.89q.723-.308 1.528-.57V35a1 1 0 0 0-1 1v4H8v-4.462c0-1.053.867-2.253 3.472-3.369m22.774-5.484c.276.317.55.583.755.771L35 27.5v1.962c-.24-.383-.57-.783-1.022-1.056c-.494-.297-1.047-.39-1.522-.404a6 6 0 0 0-1.365.133a9 9 0 0 0-1.43.42l-.027.01l-.009.003l-.002.002h-.002a1 1 0 0 0-.61 1.069v.004l.001.009l.005.028a7 7 0 0 0 .08.43c.057.273.149.65.282 1.054c.132.402.314.858.563 1.277c.243.412.59.857 1.08 1.153c.494.297 1.047.39 1.522.404c.482.014.96-.05 1.364-.133a9 9 0 0 0 1.03-.276l.062-.02v2.893c-.24-.383-.57-.783-1.022-1.056c-.494-.297-1.047-.39-1.522-.404a6 6 0 0 0-1.365.133a9 9 0 0 0-1.341.385l-.047.018l-.043.017l-.026.01l-.009.004h-.002l-.002.001a1 1 0 0 0-.61 1.069v.004l.001.009l.005.028a7 7 0 0 0 .08.43c.057.273.149.65.282 1.054c.132.402.314.858.563 1.277c.243.412.59.857 1.08 1.153c.494.297 1.047.39 1.522.404c.482.014.96-.05 1.364-.133a9 9 0 0 0 1.03-.276l.062-.02V42a1 1 0 1 0 2 0v-1.154l.044.01l.048.01c.404.082.882.146 1.364.132c.475-.014 1.028-.107 1.522-.404c.49-.296.837-.741 1.08-1.153c.249-.42.43-.875.563-1.277a10 10 0 0 0 .362-1.484l.005-.028l.001-.009v-.005a1 1 0 0 0-.61-1.068h-.002l-.003-.002l-.008-.003l-.026-.01l-.09-.035a9 9 0 0 0-1.342-.386a6 6 0 0 0-1.364-.132c-.475.014-1.028.107-1.522.404L37 35.42v-1.574l.08.017l.012.002c.404.083.882.147 1.364.133c.475-.014 1.028-.107 1.522-.404c.49-.296.837-.741 1.08-1.153c.249-.42.43-.875.563-1.277a10 10 0 0 0 .362-1.484l.005-.028l.001-.009v-.005a1 1 0 0 0-.61-1.068h-.002l-.003-.002l-.008-.003l-.026-.01l-.09-.035a9 9 0 0 0-1.342-.386a6 6 0 0 0-1.364-.132c-.475.014-1.028.107-1.522.404L37 28.42v-.964c.205-.188.478-.454.754-.771c.28-.32.579-.713.813-1.147c.23-.427.433-.958.433-1.538s-.202-1.111-.433-1.538a6.5 6.5 0 0 0-.813-1.147a10 10 0 0 0-1.098-1.07l-.022-.018l-.007-.006l-.004-.003a1 1 0 0 0-1.246 0h-.002l-.002.003l-.007.006l-.022.018a7 7 0 0 0-.33.287c-.208.19-.486.46-.768.783a6.4 6.4 0 0 0-.813 1.147c-.23.427-.433.958-.433 1.538s.202 1.111.433 1.538c.234.434.534.826.813 1.147M38.603 37c-.284.009-.457.063-.55.119c-.095.058-.234.194-.39.456a4.6 4.6 0 0 0-.384.885a8 8 0 0 0-.111.37q.153.04.323.075c.314.063.629.101.906.093c.284-.009.457-.063.55-.119c.095-.058.234-.194.39-.456a4.6 4.6 0 0 0 .384-.885q.063-.192.111-.37a7 7 0 0 0-.323-.075a4 4 0 0 0-.906-.093m-7.112.093q-.168.035-.323.075q.048.178.11.37c.106.32.235.63.385.885c.156.263.295.398.39.456c.093.056.266.11.55.119c.277.008.592-.03.906-.093q.168-.035.323-.075a8 8 0 0 0-.11-.37a4.6 4.6 0 0 0-.385-.885c-.156-.263-.295-.398-.39-.456c-.093-.056-.266-.11-.55-.119a4 4 0 0 0-.906.093M38.603 30c-.284.009-.457.063-.55.119c-.095.057-.234.194-.39.456a4.6 4.6 0 0 0-.384.885a8 8 0 0 0-.111.37q.153.04.323.075c.314.064.629.101.906.093c.284-.009.457-.063.55-.119c.095-.057.234-.194.39-.456a4.6 4.6 0 0 0 .384-.885q.063-.192.111-.37a7 7 0 0 0-.323-.075a4 4 0 0 0-.906-.093m-2.357-4.63a7 7 0 0 1-.246.268a7 7 0 0 1-.246-.268a4.5 4.5 0 0 1-.562-.783C35.048 24.32 35 24.124 35 24s.048-.32.192-.588c.141-.26.341-.53.562-.783q.125-.143.246-.268q.12.125.246.268c.22.253.421.523.562.783c.144.268.192.464.192.588s-.048.32-.192.588c-.141.26-.341.53-.562.783m-5.078 4.798q.153-.04.323-.075c.314-.064.629-.101.906-.093c.284.009.457.063.55.119c.095.057.234.194.39.456c.15.254.279.564.384.885q.063.192.111.37a7 7 0 0 1-.323.075a4 4 0 0 1-.906.093c-.284-.009-.457-.063-.55-.119c-.095-.057-.234-.194-.39-.456a4.6 4.6 0 0 1-.384-.885a8 8 0 0 1-.111-.37" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsPlantationWorkerOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPneumoniaIcon],svg[healthicons-pneumonia-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16.505 12.025c5.132 0 5.356 6.118 5.333 9.773q.09-.039.18-.088c.25-.137.483-.334.658-.623c.174-.288.324-.723.324-1.393V6.002h2v13.69c0 .67.15 1.105.325 1.393s.408.485.658.622q.07.04.14.07c-.023-3.654.203-9.768 5.333-9.768c7.45 0 12.772 26.006 9.58 28.66c-3.194 2.654-9.58 1.061-12.773-2.123c-2.578-2.571-2.355-8.579-2.195-12.891c.023-.634.045-1.23.057-1.774a4.4 4.4 0 0 1-1.107-.422A3.8 3.8 0 0 1 24 22.65a3.8 3.8 0 0 1-1.018.813a4.4 4.4 0 0 1-1.147.43c.011.546.034 1.144.057 1.778c.16 4.313.383 10.321-2.195 12.892c-3.193 3.185-9.579 4.777-12.772 2.123s2.129-28.66 9.58-28.66M34.042 17a2 2 0 1 1-3.998-.002a2 2 0 0 1 3.998.002m-20.04.004a2 2 0 1 0 4-.003a2 2 0 0 0-4 .003m-5.013 20a2 2 0 1 0 4-.003a2 2 0 0 0-4 .003m8.015-3.001a2 2 0 1 1-.004-4a2 2 0 0 1 .004 4m-7.002-5.999a2 2 0 1 0 4-.003a2 2 0 0 0-4 .003m7.002-3.001a2 2 0 1 1-.004-4a2 2 0 0 1 .004 4m20.022 13.995A2 2 0 1 0 37.027 35a2 2 0 0 0-.001 3.998M33.03 32a2 2 0 1 1-3.999-.002A2 2 0 0 1 33.03 32m3.003-2.002A2 2 0 1 0 36.035 26a2 2 0 0 0-.002 3.998M33.037 23a2 2 0 1 1-3.998-.002a2 2 0 0 1 3.998.002" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsPneumoniaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPneumonia24pxIcon],svg[healthicons-pneumonia-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 4a1 1 0 0 1 1 1v4.707l1.146 1.147a.5.5 0 0 0 .708-.708L14 9.293V8a1 1 0 0 1 1-1h2a1 1 0 0 1 .814.419c1.37 1.917 2.316 3.593 2.97 5.41c.654 1.814.998 3.722 1.212 6.08a1 1 0 0 1-.99 1.091h-.105c-1.229.009-2.324.016-3.353-.191c-1.095-.22-2.085-.673-3.166-1.523A1 1 0 0 1 14 17.5v-4.134a1 1 0 0 1-.207-.159L12 11.414l-1.793 1.793a1 1 0 0 1-.207.16V17.5a1 1 0 0 1-.382.786c-1.08.85-2.07 1.303-3.166 1.523c-1.029.207-2.125.2-3.353.192L2.994 20a1 1 0 0 1-.99-1.09c.215-2.36.558-4.267 1.211-6.08c.655-1.818 1.602-3.494 2.971-5.411A1 1 0 0 1 7 7h2a1 1 0 0 1 1 1v1.293l-.854.853a.5.5 0 0 0 .708.708L11 9.707V5a1 1 0 0 1 1-1m4 6a1 1 0 1 0 2 0a1 1 0 0 0-2 0m2 4a1 1 0 1 0 2 0a1 1 0 0 0-2 0m-2 3a1 1 0 1 0 2 0a1 1 0 0 0-2 0m4 2a1 1 0 1 1 0-2a1 1 0 0 1 0 2m-4-5a1 1 0 1 1 0-2a1 1 0 0 1 0 2m-8 3a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-3-2a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 3a1 1 0 1 1-2 0a1 1 0 0 1 2 0m2-7a1 1 0 1 0 0-2a1 1 0 0 0 0 2m2 2a1 1 0 1 1-2 0a1 1 0 0 1 2 0" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsPneumonia24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPneumoniaNegativeIcon],svg[healthicons-pneumonia-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsPneumoniaNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm16.505 12.025c5.132 0 5.356 6.118 5.333 9.773q.09-.039.18-.088c.25-.137.483-.334.658-.623c.174-.288.324-.723.324-1.393V6.002h2v13.69c0 .67.15 1.105.324 1.393c.176.289.41.485.659.622q.07.04.14.07c-.023-3.654.202-9.768 5.333-9.768c7.45 0 12.772 26.006 9.58 28.66c-3.194 2.654-9.58 1.061-12.773-2.123c-2.578-2.571-2.355-8.579-2.195-12.891c.023-.634.045-1.23.057-1.774a4.4 4.4 0 0 1-1.107-.422A3.8 3.8 0 0 1 24 22.65c-.315.358-.67.621-1.018.813a4.4 4.4 0 0 1-1.147.43c.011.546.034 1.144.057 1.778c.16 4.313.383 10.321-2.195 12.892c-3.193 3.185-9.58 4.777-12.772 2.123s2.129-28.66 9.58-28.66m-.531 6.914a2 2 0 1 1-.003-4a2 2 0 0 1 .003 4M8.989 36.945a2 2 0 1 0 4-.003a2 2 0 0 0-4 .003m7.997-3.007a2 2 0 1 1-.003-4a2 2 0 0 1 .003 4m-7.005-5.994a2 2 0 1 0 4-.003a2 2 0 0 0-4 .003m6.998-3.006a2 2 0 1 1-.003-4a2 2 0 0 1 .003 4m16.993-7.93a2 2 0 1 1-4 .004a2 2 0 0 1 4-.003m3.018 21.998a2 2 0 1 0-.003-4a2 2 0 0 0 .003 4m-4.006-6.997a2 2 0 1 1-4 .004a2 2 0 0 1 4-.004m2.999-2.002a2 2 0 1 0-.003-4a2 2 0 0 0 .003 4m-3.006-6.998a2 2 0 1 1-4 .004a2 2 0 0 1 4-.004" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsPneumoniaNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsPneumoniaNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPneumoniaOutlineIcon],svg[healthicons-pneumonia-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M33.974 19a2 2 0 1 1-4 .003a2 2 0 0 1 4-.003m3.016 18.997a2 2 0 1 0-.004-4a2 2 0 0 0 .004 4M33.986 34a2 2 0 1 1-4 .003a2 2 0 0 1 4-.003m1.998-3.002a2 2 0 1 0-.004-4a2 2 0 0 0 .004 4M33.979 25a2 2 0 1 1-4 .003a2 2 0 0 1 4-.003m-18.004-3.985a2 2 0 1 1-.003-4a2 2 0 0 1 .003 4M8.988 36.02a2 2 0 1 0 4-.003a2 2 0 0 0-4 .003m7-.005a2 2 0 1 1-.004-4a2 2 0 0 1 .004 4M9.982 29.02a2 2 0 1 0 4-.004a2 2 0 0 0-4 .004m5.998-2.005a2 2 0 1 1-.003-4a2 2 0 0 1 .003 4"></svg:path><svg:path fill-rule="evenodd" d="M24 6.001h1v14.496c0 1.397.564 1.942 1.004 2.198q.074.044.147.078l-.003-.373c-.038-3.528-.112-10.4 5.327-10.4c7.45 0 12.773 26.007 9.58 28.66c-3.194 2.654-9.58 1.062-12.773-2.123c-2.578-2.57-2.355-8.578-2.195-12.891q.016-.396.028-.773a4.3 4.3 0 0 1-1.118-.45A3.8 3.8 0 0 1 24 23.59c-.297.353-.64.627-.997.835c-.4.233-.793.37-1.119.45l.028.77c.16 4.313.384 10.321-2.194 12.892c-3.193 3.185-9.579 4.777-12.772 2.123S9.074 12 16.525 12c5.439 0 5.365 6.872 5.328 10.4v.049l-.004.327q.075-.036.148-.078C22.437 22.44 23 21.897 23 20.5V6zM31.475 14c-.954 0-1.49.3-1.867.687c-.433.446-.795 1.164-1.049 2.178c-.445 1.775-.426 3.817-.41 5.465l.004.816c0 .76-.033 1.67-.069 2.616v.002l-.04 1.127c-.044 1.375-.07 2.815-.004 4.208c.067 1.4.224 2.685.517 3.76c.297 1.09.694 1.82 1.137 2.262c1.279 1.275 3.297 2.304 5.355 2.704c2.035.394 3.673.102 4.633-.628l.016-.04a3.7 3.7 0 0 0 .19-.788c.117-.775.147-1.856.068-3.188c-.157-2.65-.728-6.012-1.63-9.32c-.904-3.321-2.109-6.46-3.474-8.722c-.683-1.133-1.357-1.96-1.982-2.485c-.618-.52-1.077-.654-1.395-.654m-14.95 0c.954 0 1.49.3 1.867.687c.433.446.795 1.164 1.05 2.178c.444 1.775.425 3.817.41 5.465q-.004.428-.005.816c0 .76.034 1.67.07 2.616l.04 1.129c.044 1.375.07 2.815.004 4.208c-.067 1.4-.224 2.685-.517 3.76c-.296 1.09-.694 1.82-1.137 2.262c-1.278 1.275-3.296 2.304-5.355 2.704c-2.035.394-3.673.102-4.632-.628l-.017-.04a3.7 3.7 0 0 1-.19-.788c-.116-.775-.147-1.856-.068-3.188c.157-2.65.727-6.012 1.629-9.32c.905-3.321 2.11-6.46 3.474-8.722c.683-1.132 1.357-1.96 1.982-2.485c.618-.52 1.077-.654 1.395-.654" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsPneumoniaOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPneumoniaOutline24pxIcon],svg[healthicons-pneumonia-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M13 5a1 1 0 1 0-2 0v4.586l-2.207 2.207a1 1 0 1 0 1.414 1.414L12 11.414l1.793 1.793a1 1 0 0 0 1.414-1.414L13 9.586z"></svg:path><svg:path d="M7 7a1 1 0 0 0-.814.419c-1.37 1.917-2.316 3.593-2.97 5.41c-.654 1.814-.997 3.722-1.212 6.08A1 1 0 0 0 2.994 20h.1c1.225.009 2.318.016 3.343-.188c1.101-.22 2.095-.672 3.181-1.526A1 1 0 0 0 10 17.5v-2a1 1 0 1 0-2 0v1.497c-.697.485-1.305.724-1.953.853c-.565.113-1.173.145-1.938.152c.207-1.747.51-3.166.988-4.495a16.5 16.5 0 0 1 1.282-2.723a1 1 0 1 0 1.068-1.679L7.518 9h.615A1 1 0 0 0 10 8.5V8a1 1 0 0 0-1-1zm10 0a1 1 0 0 1 .814.419c1.37 1.917 2.317 3.593 2.97 5.41c.654 1.814.998 3.722 1.212 6.08a1 1 0 0 1-.99 1.091h-.1c-1.225.009-2.318.016-3.343-.188c-1.101-.22-2.095-.672-3.181-1.526A1 1 0 0 1 14 17.5v-2a1 1 0 1 1 2 0v1.497c.697.485 1.305.724 1.953.853c.565.113 1.173.145 1.938.152c-.207-1.747-.51-3.166-.988-4.495a16.6 16.6 0 0 0-1.282-2.723a1 1 0 1 1-1.068-1.679L16.482 9h-.615A1 1 0 0 1 14 8.5V8a1 1 0 0 1 1-1z"></svg:path><svg:path d="M7 16a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-2a1 1 0 1 0 0-2a1 1 0 0 0 0 2m11 3a1 1 0 1 1 0-2a1 1 0 0 1 0 2m-2-4a1 1 0 1 0 2 0a1 1 0 0 0-2 0"></svg:path></svg:g>`,
})
export class HealthiconsPneumoniaOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPoisonIcon],svg[healthicons-poison-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M18 4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h2v4a7 7 0 0 0-7 7v20a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V21a7 7 0 0 0-7-7v-4h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zm4 11v-5h4v5a1 1 0 0 0 1 1h1a5 5 0 0 1 4.9 4H15.1a5 5 0 0 1 4.9-4h1a1 1 0 0 0 1-1m6.243 15.536l-.707-.707l-2.122 2.122l2.122 2.121l.707-.707l1.414 1.414l-2.829 2.829l-1.414-1.415l.707-.707L24 33.365l-2.12 2.12l.706.708l-1.414 1.414l-.707-.707l-1.415-1.414l-.707-.707l1.414-1.415l.708.708l2.12-2.121l-2.12-2.122l-.708.707l-1.414-1.414l.707-.707l1.414-1.414l.708-.707l1.414 1.414l-.707.707L24 30.537l2.122-2.122l-.708-.708l1.414-1.414l2.829 2.828z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsPoisonIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPoison24pxIcon],svg[healthicons-poison-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15 4v2a3 3 0 0 1 3 3v11a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9a3 3 0 0 1 3-3V4a1 1 0 1 1 0-2h6a1 1 0 1 1 0 2m-2 0h-2v4H9a1 1 0 0 0-1 1v1h8V9a1 1 0 0 0-1-1h-2zm.436 9.4l-1.414 1.414l-1.415-1.414l-1.414 1.414l1.414 1.414l-1.414 1.414l1.414 1.415l1.415-1.415l1.414 1.415l1.414-1.415l-1.414-1.414l1.414-1.414z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsPoison24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPoisonNegativeIcon],svg[healthicons-poison-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsPoisonNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM17 5a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-2v4a7 7 0 0 1 7 7v20a3 3 0 0 1-3 3H16a3 3 0 0 1-3-3V21a7 7 0 0 1 7-7v-4h-2a1 1 0 0 1-1-1zm5 5v5a1 1 0 0 1-1 1h-1a5 5 0 0 0-4.9 4h17.8a5 5 0 0 0-4.9-4h-1a1 1 0 0 1-1-1v-5zm5.536 19.829l.707.707l1.414-1.415l-2.829-2.828l-1.414 1.414l.708.708L24 30.537l-2.121-2.122l.707-.707l-1.414-1.414l-.708.707l-1.414 1.414l-.707.707l1.414 1.414l.707-.707l2.122 2.122l-2.121 2.12l-.708-.707l-1.414 1.415l.708.707l1.414 1.415l.707.706l1.414-1.414l-.707-.707L24 33.365l2.121 2.121l-.707.707l1.414 1.415l2.829-2.829l-1.414-1.414l-.707.707l-2.122-2.121z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsPoisonNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsPoisonNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPoisonOutlineIcon],svg[healthicons-poison-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M17 5a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-2v4a7 7 0 0 1 7 7v20a3 3 0 0 1-3 3H16a3 3 0 0 1-3-3V21a7 7 0 0 1 7-7v-4h-2a1 1 0 0 1-1-1zm5 5h4v5a1 1 0 0 0 1 1h1a5 5 0 0 1 4.9 4H15.1a5 5 0 0 1 4.9-4h1a1 1 0 0 0 1-1zm-7 12v19a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V22zm4-16v2h10V6zm1.464 23.83l2.122 2.12l-2.121 2.122l-.708-.708l-1.414 1.415l.708.707l1.414 1.415l.707.706l1.414-1.414l-.707-.707L24 33.365l2.121 2.121l-.707.707l1.414 1.415l2.829-2.829l-1.414-1.414l-.707.707l-2.122-2.121l2.122-2.122l.707.707l1.414-1.415l-2.829-2.828l-1.414 1.414l.708.708L24 30.537l-2.121-2.122l.707-.707l-1.414-1.414l-.708.707l-1.414 1.414l-.707.707l1.414 1.414z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsPoisonOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPoisonOutline24pxIcon],svg[healthicons-poison-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m9.193 17.643l1.414-1.415l-1.414-1.414l1.414-1.414l1.415 1.414l1.414-1.414l1.414 1.414l-1.414 1.414l1.414 1.415l-1.414 1.414l-1.414-1.414l-1.415 1.414z"></svg:path><svg:path fill-rule="evenodd" d="M15 6V4a1 1 0 1 0 0-2H9a1 1 0 0 0 0 2v2a3 3 0 0 0-3 3v11a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V9a3 3 0 0 0-3-3m-4-2h2v4h2a1 1 0 0 1 1 1v1H8V9a1 1 0 0 1 1-1h2zm-3 8h8v8H8z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsPoisonOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPolygonIcon],svg[healthicons-polygon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M28 10c0 .507-.094.992-.266 1.438l7.696 5.497a4 4 0 1 1 2.706 7.063l-2.32 10.437A4 4 0 1 1 30.126 39H17.874A4.002 4.002 0 0 1 10 38a4 4 0 0 1 2.184-3.565l-2.32-10.437a4 4 0 1 1 2.706-7.063l7.696-5.497A4 4 0 1 1 28 10m-6.57 3.065l-7.696 5.497a4 4 0 0 1-1.917 5.003l2.319 10.437A4 4 0 0 1 17.874 37h12.252a4 4 0 0 1 3.738-2.998l2.32-10.437a4 4 0 0 1-1.918-5.003l-7.695-5.497A3.98 3.98 0 0 1 24 14a3.98 3.98 0 0 1-2.57-.935" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsPolygonIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPolygon24pxIcon],svg[healthicons-polygon-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.986 5.289Q15.001 5.146 15 5a3 3 0 1 0-5.986.289L6.55 6.93a3 3 0 1 0-2.5 5.415l.893 4.47A3 3 0 1 0 9.598 20.5h4.803a3 3 0 1 0 4.655-3.684l.894-4.47a3.001 3.001 0 1 0-2.5-5.415zm2.193 10.716l.741-3.705a3 3 0 0 1-1.744-3.814l-2.051-1.368A3 3 0 0 1 12 8a3 3 0 0 1-2.125-.882l-2.05 1.367A3 3 0 0 1 6.08 12.3l.74 3.706Q6.91 16 7 16a3 3 0 0 1 2.958 2.5h4.083a3 3 0 0 1 3.138-2.495" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsPolygon24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPolygonNegativeIcon],svg[healthicons-polygon-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsPolygonNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm17.874 39A4.002 4.002 0 0 1 10 38a4 4 0 0 1 2.184-3.565l-2.32-10.437a4 4 0 1 1 2.706-7.063l7.696-5.497a4 4 0 1 1 7.467 0l7.697 5.497a4 4 0 1 1 2.706 7.063l-2.32 10.437A4 4 0 1 1 30.126 39zm0-2a4 4 0 0 0-3.738-2.998l-2.32-10.437a4 4 0 0 0 1.918-5.003l7.696-5.497A3.98 3.98 0 0 0 24 14a3.98 3.98 0 0 0 2.57-.935l7.696 5.497a4 4 0 0 0 1.917 5.003l-2.319 10.437A4 4 0 0 0 30.126 37z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsPolygonNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsPolygonNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPolygonOutlineIcon],svg[healthicons-polygon-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M27.734 11.438a4 4 0 1 0-7.467 0l-7.697 5.497a4 4 0 1 0-2.706 7.063l2.32 10.437A4 4 0 1 0 17.873 39h12.252A4.002 4.002 0 0 0 38 38a4 4 0 0 0-2.184-3.565l2.32-10.437a4 4 0 1 0-2.706-7.063zM24 12a2 2 0 1 0 0-4a2 2 0 0 0 0 4m2.57 1.065A3.98 3.98 0 0 1 24 14a3.98 3.98 0 0 1-2.57-.935l-7.696 5.497a4 4 0 0 1-1.917 5.003l2.319 10.437A4 4 0 0 1 17.874 37h12.252a4 4 0 0 1 3.738-2.998l2.32-10.437a4 4 0 0 1-1.918-5.003zM12 20a2 2 0 1 1-4 0a2 2 0 0 1 4 0m4 18a2 2 0 1 1-4 0a2 2 0 0 1 4 0m22-16a2 2 0 1 0 0-4a2 2 0 0 0 0 4m-2 16a2 2 0 1 1-4 0a2 2 0 0 1 4 0" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsPolygonOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPolygonOutline24pxIcon],svg[healthicons-polygon-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 2a3 3 0 0 0-2.986 3.289L6.55 6.93a3 3 0 1 0-2.5 5.415l.857 4.287A3 3 0 1 0 9.349 20.5h5.302a3 3 0 1 0 4.442-3.867l.857-4.287a3.001 3.001 0 1 0-2.5-5.415L14.986 5.29q.015-.144.014-.29a3 3 0 0 0-3-3m-1 3a1 1 0 1 1 2 0a1 1 0 0 1-2 0m5.176 3.486l-2.051-1.368A3 3 0 0 1 12 8a3 3 0 0 1-2.125-.882l-2.05 1.367A3 3 0 0 1 6.08 12.3l.739 3.702A3 3 0 0 1 9.708 18.5h4.583A3 3 0 0 1 17.18 16l.74-3.7a3 3 0 0 1-1.744-3.814M5 8.5a1 1 0 1 0 0 2a1 1 0 0 0 0-2M5.75 19a1 1 0 1 1 2 0a1 1 0 0 1-2 0m11.5-1a1 1 0 1 0 0 2a1 1 0 0 0 0-2M18 9.5a1 1 0 1 1 2 0a1 1 0 0 1-2 0" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsPolygonOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPositiveIcon],svg[healthicons-positive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M44 24c0 11.046-8.954 20-20 20S4 35.046 4 24S12.954 4 24 4s20 8.954 20 20m-31 0a1 1 0 0 1 1-1h9v-9a1 1 0 1 1 2 0v9h9a1 1 0 1 1 0 2h-9v9a1 1 0 1 1-2 0v-9h-9a1 1 0 0 1-1-1"></svg:path><svg:path d="M24 42c9.941 0 18-8.059 18-18S33.941 6 24 6S6 14.059 6 24s8.059 18 18 18M11 24a3 3 0 0 1 3-3h7v-7a3 3 0 1 1 6 0v7h7a3 3 0 1 1 0 6h-7v7a3 3 0 1 1-6 0v-7h-7a3 3 0 0 1-3-3m3-1a1 1 0 1 0 0 2h9v9a1 1 0 1 0 2 0v-9h9a1 1 0 1 0 0-2h-9v-9a1 1 0 1 0-2 0v9zm10 21c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20"></svg:path></svg:g>`,
})
export class HealthiconsPositiveIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPositive24pxIcon],svg[healthicons-positive-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m0-15.045a1 1 0 0 1 1 1V11h3.046a1 1 0 1 1 0 2H13v3.046a1 1 0 1 1-2 0V13H7.954a1 1 0 0 1 0-2H11V7.955a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsPositive24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPositiveNegativeIcon],svg[healthicons-positive-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsPositiveNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20M14 23a1 1 0 1 0 0 2h9v9a1 1 0 1 0 2 0v-9h9a1 1 0 1 0 0-2h-9v-9a1 1 0 1 0-2 0v9z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsPositiveNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsPositiveNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPositiveOutlineIcon],svg[healthicons-positive-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M13 24a1 1 0 0 1 1-1h9v-9a1 1 0 1 1 2 0v9h9a1 1 0 1 1 0 2h-9v9a1 1 0 1 1-2 0v-9h-9a1 1 0 0 1-1-1"></svg:path><svg:path fill-rule="evenodd" d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20m0-2c9.941 0 18-8.059 18-18S33.941 6 24 6S6 14.059 6 24s8.059 18 18 18" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsPositiveOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPositiveOutline24pxIcon],svg[healthicons-positive-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12 6.955a1 1 0 0 1 1 1V11h3.046a1 1 0 1 1 0 2H13v3.046a1 1 0 1 1-2 0V13H7.954a1 1 0 0 1 0-2H11V7.955a1 1 0 0 1 1-1"></svg:path><svg:path fill-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2M4 12a8 8 0 1 1 16 0a8 8 0 0 1-16 0" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsPositiveOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPpeApronIcon],svg[healthicons-ppe-apron-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m20.342 6.62l-.292-.657l-.716.068A7 7 0 0 0 13 13v12a3 3 0 0 0 3 3h1v11.72l3.521 1.174a11 11 0 0 0 6.958 0L31 39.721V28h1a3 3 0 0 0 3-3V13a7 7 0 0 0-6.334-6.969l-.716-.068l-.292.658a4.001 4.001 0 0 1-7.316 0M19 23v2h10v-2z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsPpeApronIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPpeApron24pxIcon],svg[healthicons-ppe-apron-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 4a2 2 0 0 0 2-2h1a4 4 0 0 1 4 4v5a4 4 0 0 1-3 3.874V21s-1.5 1-4 1s-4-1-4-1v-6.126A4 4 0 0 1 5 11V6a4 4 0 0 1 4-4h1a2 2 0 0 0 2 2m-3 7v2h6v-2z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsPpeApron24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPpeApronNegativeIcon],svg[healthicons-ppe-apron-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsPpeApronNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM19.428 7.027A6 6 0 0 0 14 13v12a2 2 0 0 0 2 2h2v12l2.838.946a10 10 0 0 0 6.324 0L30 39V27h2a2 2 0 0 0 2-2V13a6 6 0 0 0-5.428-5.973a5.001 5.001 0 0 1-9.144 0M19 25v-2h10v2z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsPpeApronNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsPpeApronNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPpeApronOutlineIcon],svg[healthicons-ppe-apron-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m20.05 5.963l.292.658a4.001 4.001 0 0 0 7.316 0l.292-.658l.716.068A7 7 0 0 1 35 13v12a3 3 0 0 1-3 3h-1v11.72l-3.521 1.174a11 11 0 0 1-6.957 0L17 39.721V28h-1a3 3 0 0 1-3-3V13a7 7 0 0 1 6.334-6.969zM33 25a1 1 0 0 1-1 1h-1V15h-2v7H19v-7h-2v11h-1a1 1 0 0 1-1-1V13a5 5 0 0 1 3.878-4.874A6 6 0 0 0 24 11a6 6 0 0 0 5.122-2.874A5 5 0 0 1 33 13zm-6.154 13.997L29 38.28V24H19v14.28l2.154.718a9 9 0 0 0 5.692 0" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsPpeApronOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPpeApronOutline24pxIcon],svg[healthicons-ppe-apron-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16.5 21s-1.687 1-4.5 1s-4.5-1-4.5-1v-6.03A4 4 0 0 1 4 11V6a4 4 0 0 1 4-4h1.875c0 1.105.951 2 2.125 2s2.125-.895 2.125-2H16q.063 0 .125.002A4 4 0 0 1 20 6v5a4 4 0 0 1-3.5 3.97zM18 11c0 .931-.638 1.716-1.5 1.937V8h-2v3h-5V8h-2v4.937A2 2 0 0 1 6 11V6a2 2 0 0 1 2-2h.422C9.154 5.225 10.53 6 12 6s2.846-.775 3.578-2H16a2 2 0 0 1 2 2zm-8.5 2h5v6.655c-.6.177-1.448.345-2.5.345s-1.9-.168-2.5-.345z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsPpeApronOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPpeFaceMaskIcon],svg[healthicons-ppe-face-mask-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M23.706 11.044a1 1 0 0 1 .588 0l13 4A1 1 0 0 1 38 16v1h1a5 5 0 0 1 5 5v4a5 5 0 0 1-5 5h-2.456a9 9 0 0 1-4.897 3.693l-7.353 2.263a1 1 0 0 1-.588 0l-7.353-2.263A9 9 0 0 1 11.456 31H9a5 5 0 0 1-5-5v-4a5 5 0 0 1 5-5h1v-1a1 1 0 0 1 .706-.956zM10 26.091c0 1.01.168 1.99.482 2.909H9a3 3 0 0 1-3-3v-4a3 3 0 0 1 3-3h1zM37.518 29H39a3 3 0 0 0 3-3v-4a3 3 0 0 0-3-3h-1v7.091c0 1.01-.168 1.99-.482 2.909M30 21H18v-2h12zm0 6H18v-2h12z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsPpeFaceMaskIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPpeFaceMask24pxIcon],svg[healthicons-ppe-face-mask-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="m5 8l7-2l7 2a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3h-.042a2 2 0 0 1-1.285 1.474l-.628.224a15 15 0 0 1-10.09 0l-.628-.224A2 2 0 0 1 5.042 16H5a3 3 0 0 1-3-3v-2a3 3 0 0 1 3-3m0 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1zm14 4a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1zM9 10v1.5h6V10zm0 3.5V15h6v-1.5z"></svg:path><svg:path d="m19 8l-7-2l-7 2a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h.042a2 2 0 0 0 1.285 1.474l.628.224a15 15 0 0 0 10.09 0l.628-.224A2 2 0 0 0 18.958 16H19a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3m1 3a1 1 0 0 0-1-1v4a1 1 0 0 0 1-1zM4 13a1 1 0 0 0 1 1v-4a1 1 0 0 0-1 1zm11-3H9v1.5h6zm-6 5v-1.5h6V15z"></svg:path></svg:g>`,
})
export class HealthiconsPpeFaceMask24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPpeFaceMaskNegativeIcon],svg[healthicons-ppe-face-mask-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsPpeFaceMaskNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM24.294 11.044a1 1 0 0 0-.588 0l-13 4A1 1 0 0 0 10 16v1H9a5 5 0 0 0-5 5v4a5 5 0 0 0 5 5h2.456a9 9 0 0 0 4.897 3.693l7.353 2.263a1 1 0 0 0 .588 0l7.353-2.263A9 9 0 0 0 36.544 31H39a5 5 0 0 0 5-5v-4a5 5 0 0 0-5-5h-1v-1a1 1 0 0 0-.706-.956zM10.482 29A9 9 0 0 1 10 26.091V19H9a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3zM39 29h-1.482A9 9 0 0 0 38 26.091V19h1a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3m-21-8h12v-2H18zm0 6h12v-2H18z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsPpeFaceMaskNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsPpeFaceMaskNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPpeFaceMaskOutlineIcon],svg[healthicons-ppe-face-mask-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M23.706 11.044a1 1 0 0 1 .588 0l13 4A1 1 0 0 1 38 16v1h1a5 5 0 0 1 5 5v4a5 5 0 0 1-5 5h-2.456a9 9 0 0 1-4.897 3.693l-7.353 2.263a1 1 0 0 1-.588 0l-7.353-2.263A9 9 0 0 1 11.456 31H9a5 5 0 0 1-5-5v-4a5 5 0 0 1 5-5h1v-1a1 1 0 0 1 .706-.956zM10 19H9a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h1.482A9 9 0 0 1 10 26.091zm28 7.091V19h1a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3h-1.482A9 9 0 0 0 38 26.091M12 16.74v9.352a7 7 0 0 0 4.941 6.69L24 34.955l7.059-2.172A7 7 0 0 0 36 26.092v-9.353l-12-3.693zM18 21v-2h12v2zm0 6h12v-2H18z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsPpeFaceMaskOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPpeFaceMaskOutline24pxIcon],svg[healthicons-ppe-face-mask-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M15 10v1.5H9V10zm0 4.5V13H9v1.5z"></svg:path><svg:path fill-rule="evenodd" d="m12 6l7 2a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3h-.042a2 2 0 0 1-1.285 1.474l-.628.224a15 15 0 0 1-10.09 0l-.628-.224A2 2 0 0 1 5.042 16H5a3 3 0 0 1-3-3v-2a3 3 0 0 1 3-3zm-7 4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1zm14 4a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1zm-2-4.491L12 8.08L7 9.509v6.082l.628.224a13 13 0 0 0 8.744 0L17 15.59z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsPpeFaceMaskOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPpeFaceShieldIcon],svg[healthicons-ppe-face-shield-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m30.829 28.757l-7.072 7.071l-1.414-1.414l7.071-7.07zm-3.536 9.193l5.657-5.657l-1.414-1.414l-5.657 5.657z"></svg:path><svg:path fill-rule="evenodd" d="M11 16.616c-1.05-.5-1.95-1.08-2.63-1.74C7.558 14.086 7 13.115 7 12c0-1.217.661-2.257 1.594-3.084c.934-.828 2.228-1.527 3.741-2.095C15.37 5.683 19.494 5 24 5s8.63.683 11.665 1.821c1.513.568 2.807 1.267 3.741 2.095C40.339 9.743 41 10.783 41 12c0 1.117-.559 2.087-1.37 2.875c-.68.661-1.58 1.241-2.63 1.74v20.92l-3.57 2.38a17 17 0 0 1-18.86 0L11 37.535zM9 12c0-.44.234-.978.92-1.587c.686-.608 1.735-1.201 3.117-1.72C15.794 7.66 19.67 7 24 7s8.206.66 10.963 1.694c1.382.518 2.43 1.111 3.116 1.719c.687.609.921 1.147.921 1.587c0 .405-.197.89-.764 1.441c-.316.308-.73.616-1.236.915V14a3 3 0 0 0-3-3H14a3 3 0 0 0-3 3v.356a6.5 6.5 0 0 1-1.236-.915C9.197 12.891 9 12.405 9 12m6.68 26.251L13 36.465V17h22v19.465l-2.68 1.786a15 15 0 0 1-16.64 0" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsPpeFaceShieldIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPpeFaceShieldAltIcon],svg[healthicons-ppe-face-shield-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M37.638 27.811c-.243.13-.514.198-.79.197h-1.935L34.76 36h-1.296c-2.5 0-4.903-1.023-6.68-2.855C25.003 31.312 24 28.82 24 26.215V14h9.675c.086.336.148.675.147.907l.193 3.167s2.728 4.035 4.347 7.63a1.62 1.62 0 0 1-.125 1.56c-.15.23-.356.418-.599.547M32.8 12h2.221c1.86 0 3.64.762 4.946 2.109A7.26 7.26 0 0 1 42 19.163V38h-7.28l.039-2H40V19.163a5.26 5.26 0 0 0-1.469-3.662A4.9 4.9 0 0 0 35.021 14h-1.346a6 6 0 0 0-.302-.9q-.27-.577-.573-1.1m0 0H22v.1H8.596c3.216-4.591 9.035-7.026 15.348-5.773C28.148 7.163 30.967 8.85 32.8 12M7.428 14.1H22v5.226H6.037a14.8 14.8 0 0 1 1.39-5.225M6 21.327h16v4.889c0 3.116 1.2 6.11 3.347 8.322A11.4 11.4 0 0 0 30 37.45V38h-2.464v4H10.959V31.657a14.8 14.8 0 0 1-3.7-5.036A14.7 14.7 0 0 1 6 21.326" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsPpeFaceShieldAltIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPpeFaceShieldAlt24pxIcon],svg[healthicons-ppe-face-shield-alt-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m17.402 7.775l1.56 5.45A1 1 0 0 1 18 14.5h-1v3a4.25 4.25 0 0 1-4.25-4.25v-5.5H17q.203 0 .4.024l-.81-1.524H17c2.623 0 5 2.127 5 4.75v8h-5v-1.5h3.5V11c0-1.5-1.304-3.224-3.098-3.225"></svg:path><svg:path d="M16 19a1 1 0 0 0 .292-.043a5.75 5.75 0 0 1-5.042-5.707V13H2.543c.335.85.783 1.57 1.22 2.143a10 10 0 0 0 1.355 1.45V20a1 1 0 0 0 1 1H11a1 1 0 0 0 1-1v-1zm-4.75-7.5H2.117A7.6 7.6 0 0 1 2 10.177a6.8 6.8 0 0 1 .434-2.427h8.816zm5.338-5.25a8.6 8.6 0 0 0-1.047-1.14C14.379 4.055 12.564 3 10 3C7.32 3 4.715 4.188 3.239 6.25z"></svg:path></svg:g>`,
})
export class HealthiconsPpeFaceShieldAlt24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPpeFaceShieldAltNegativeIcon],svg[healthicons-ppe-face-shield-alt-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsPpeFaceShieldAltNegative0)"><svg:path d="M36.848 28.008a1.66 1.66 0 0 0 1.39-.744a1.63 1.63 0 0 0 .124-1.56c-1.62-3.595-4.347-7.63-4.347-7.63l-.193-3.167c.001-.232-.06-.571-.147-.907h1.346a4.9 4.9 0 0 1 3.51 1.501A5.26 5.26 0 0 1 40 19.163V36h-5.241l.154-7.992z"></svg:path><svg:path fill-rule="evenodd" d="M48 0H0v48h48zM34.759 36l-.04 2H42V19.163a7.26 7.26 0 0 0-2.033-5.054A6.9 6.9 0 0 0 35.02 12H32.8c-1.833-3.15-4.652-4.837-8.856-5.673c-6.313-1.253-12.132 1.182-15.348 5.774H22V12h10.8q.304.523.573 1.1c.099.217.213.556.302.9H24v12.215c0 2.605 1.004 5.097 2.782 6.93S30.964 36 33.463 36zM22 14.1H7.428a14.8 14.8 0 0 0-1.39 5.226H22zm0 7.226H6a14.7 14.7 0 0 0 1.258 5.295a14.8 14.8 0 0 0 3.7 5.036V42h16.578v-4H30v-.55a11.4 11.4 0 0 1-4.653-2.913C23.201 32.325 22 29.331 22 26.215z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsPpeFaceShieldAltNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsPpeFaceShieldAltNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPpeFaceShieldAltOutlineIcon],svg[healthicons-ppe-face-shield-alt-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M24.807 6.323c-9.003-1.812-18.034 4.219-18.76 13.373a1 1 0 0 0-.03.486q-.015.294-.016.593a14.95 14.95 0 0 0 1.266 6.153c.792 1.8 1.93 3.422 3.35 4.775V41a1 1 0 1 0 2 0v-9.735a1 1 0 0 0-.333-.744a12.9 12.9 0 0 1-3.187-4.399A12.95 12.95 0 0 1 8 21h14v5.215c0 3.116 1.2 6.11 3.347 8.323S30.413 38 33.463 38H42V19.163a7.26 7.26 0 0 0-2.033-5.054A6.9 6.9 0 0 0 35.02 12h-2.235c-.663-1.11-1.435-2.11-2.373-2.96c-1.462-1.325-3.28-2.248-5.606-2.717m4.262 4.199q.721.655 1.322 1.478H11.717c3.138-3.118 7.879-4.686 12.695-3.716c2.006.404 3.487 1.176 4.657 2.238M8.14 19a12.3 12.3 0 0 1 1.932-5H22v5zm23.826-4.253a21 21 0 0 0-.36-.747H24v12.215c0 2.605 1.004 5.097 2.782 6.93S30.964 36 33.463 36H40V19.163a5.26 5.26 0 0 0-1.469-3.661A4.9 4.9 0 0 0 35.021 14h-1.2c.217.51.328 1.06.325 1.616v3.045l.257.488c.232.446.559 1.076.932 1.812c.745 1.47 1.685 3.374 2.446 5.089a2.55 2.55 0 0 1-1.109 3.268a2.5 2.5 0 0 1-1.211.306h-1.303v2.093a1 1 0 0 1-2 0v-3.093a1 1 0 0 1 1-1h2.307a.53.53 0 0 0 .447-.244a.55.55 0 0 0 .041-.52c-.74-1.668-1.662-3.536-2.402-4.994a171 171 0 0 0-1.191-2.305l-.072-.136l-.024-.045a1 1 0 0 1-.118-.471v-3.302a2.1 2.1 0 0 0-.181-.86m0 0l.002.003l.908-.417l-.911.41z" clip-rule="evenodd"></svg:path><svg:path d="M28 38a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1"></svg:path></svg:g>`,
})
export class HealthiconsPpeFaceShieldAltOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPpeFaceShieldAltOutline24pxIcon],svg[healthicons-ppe-face-shield-alt-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M16.476 6a7.6 7.6 0 0 0-.792-.874C14.54 4.046 12.713 3 10 3c-4.088 0-8 2.762-8 7.177c0 2.131.863 3.82 1.694 4.951A10 10 0 0 0 5 16.582V20a1 1 0 1 0 2 0v-3.882a1 1 0 0 0-.402-.802H6.6l-.015-.01l-.073-.06a6 6 0 0 1-.29-.26a8 8 0 0 1-.915-1.04A7.4 7.4 0 0 1 4.715 13H11a6 6 0 0 0 6 6h5v-8.25A4.75 4.75 0 0 0 17.25 6zM4.522 8A4.7 4.7 0 0 0 4 10.177q0 .426.059.823H11V8zm1.864-2h7.197C12.758 5.45 11.6 5 10 5c-1.36 0-2.61.364-3.614 1m9.002 2l.022.047l1.266 4.453H16a1 1 0 0 0-1 1V15a1 1 0 1 0 2 0v-.5h1a1 1 0 0 0 .962-1.273l-1.483-5.218A2.75 2.75 0 0 1 20 10.75V17h-3a4 4 0 0 1-4-4V8z" clip-rule="evenodd"></svg:path><svg:path d="M14 18.75a1 1 0 0 1 1 1V20a1 1 0 1 1-2 0v-.25a1 1 0 0 1 1-1"></svg:path></svg:g>`,
})
export class HealthiconsPpeFaceShieldAltOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPpeFaceShieldNegativeIcon],svg[healthicons-ppe-face-shield-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsPpeFaceShieldNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM9.92 10.413C9.235 11.022 9 11.56 9 12c0 .405.197.89.764 1.441c.317.308.73.616 1.236.915V14a3 3 0 0 1 3-3h20a3 3 0 0 1 3 3v.356a6.5 6.5 0 0 0 1.236-.915c.567-.55.764-1.036.764-1.441c0-.44-.234-.978-.92-1.587c-.686-.608-1.735-1.201-3.117-1.72C32.206 7.66 28.33 7 24 7s-8.206.66-10.963 1.694c-1.382.518-2.43 1.111-3.116 1.719m-1.55 4.462c.68.661 1.58 1.241 2.63 1.74v20.92l3.57 2.38a17 17 0 0 0 18.86 0l3.57-2.38v-20.92c1.05-.499 1.95-1.079 2.63-1.74C40.442 14.087 41 13.117 41 12c0-1.217-.661-2.257-1.594-3.084c-.934-.828-2.228-1.527-3.741-2.095C32.63 5.683 28.506 5 24 5s-8.63.683-11.665 1.821c-1.513.568-2.807 1.267-3.741 2.095C7.66 9.743 7 10.783 7 12c0 1.117.559 2.087 1.37 2.875M13 17v19.465l2.68 1.786a15 15 0 0 0 16.64 0L35 36.465V17zm10.757 18.828l7.071-7.07l-1.414-1.415l-7.07 7.071zm9.193-3.535l-5.657 5.657l-1.414-1.414l5.657-5.657z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsPpeFaceShieldNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsPpeFaceShieldNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPpeFaceShieldOutlineIcon],svg[healthicons-ppe-face-shield-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m30.829 28.757l-7.072 7.071l-1.414-1.414l7.071-7.07zm-3.536 9.193l5.657-5.657l-1.414-1.414l-5.657 5.657z"></svg:path><svg:path fill-rule="evenodd" d="M11 16.616c-1.05-.5-1.95-1.08-2.63-1.74C7.558 14.086 7 13.115 7 12c0-1.217.661-2.257 1.594-3.084c.934-.828 2.228-1.527 3.741-2.095C15.37 5.683 19.494 5 24 5s8.63.683 11.665 1.821c1.513.568 2.807 1.267 3.741 2.095C40.339 9.743 41 10.783 41 12c0 1.117-.559 2.087-1.37 2.875c-.68.661-1.58 1.241-2.63 1.74v20.92l-3.57 2.38a17 17 0 0 1-18.86 0L11 37.535zM9 12c0-.44.234-.978.92-1.587c.686-.608 1.735-1.201 3.117-1.72C15.794 7.66 19.67 7 24 7s8.206.66 10.963 1.694c1.382.518 2.43 1.111 3.116 1.719c.687.609.921 1.147.921 1.587c0 .405-.197.89-.764 1.441c-.316.308-.73.616-1.236.915V14a3 3 0 0 0-3-3H14a3 3 0 0 0-3 3v.356a6.5 6.5 0 0 1-1.236-.915C9.197 12.891 9 12.405 9 12m5 1a1 1 0 0 0-1 1v1h22v-1a1 1 0 0 0-1-1zm1.68 25.251L13 36.465V17h22v19.465l-2.68 1.786a15 15 0 0 1-16.64 0" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsPpeFaceShieldOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPpeGlovesIcon],svg[healthicons-ppe-gloves-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M24 6.5a1.5 1.5 0 0 1 3 0V19h1V8.5a1.5 1.5 0 0 1 3 0V24l2.923-3.653a1.881 1.881 0 0 1 3.034 2.218l-4.25 6.374a9.1 9.1 0 0 1-3.616 3.15L30 43H18l.905-10.859A6 6 0 0 1 16 27V10.5a1.5 1.5 0 0 1 3 0V19h1V8.5a1.5 1.5 0 0 1 3 0V19h1zM12 12h2v16c0 1.85 1.092 3.784 2.517 4.644l.544.328L16.216 41h-2.011l.738-7.011C13.181 32.647 12 30.286 12 28z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsPpeGlovesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPpeGloves24pxIcon],svg[healthicons-ppe-gloves-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M18.445 13.613a4.6 4.6 0 0 1-3.825 3.83L15 22H9l.398-4.778A3.835 3.835 0 0 1 7 13.667V5.5a1 1 0 1 1 2 0v4h.5v-5a1 1 0 1 1 2 0v5h.5v-6a1 1 0 1 1 2 0v6h.5V3a1 1 0 1 1 2 0v6.011c.002.558.118.86.228 1.014c.1.14.215.188.333.195a.68.68 0 0 0 .407-.12a.36.36 0 0 0 .131-.136l.002-.002v.005h.001l.454-1.297a1 1 0 0 1 1.888.66z"></svg:path><svg:path d="M6 14V6H4v8c0 1.525.61 2.728 1.191 3.526c.193.265.498.49.746.674c.126.094.238.177.313.249v.004L6 21h2l.25-3.25l-.646-.547l-.006-.005l-.041-.033a5 5 0 0 1-.748-.815C6.389 15.771 6 14.974 6 14"></svg:path></svg:g>`,
})
export class HealthiconsPpeGloves24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPpeGlovesNegativeIcon],svg[healthicons-ppe-gloves-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsPpeGlovesNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM25.5 5A1.5 1.5 0 0 0 24 6.5V19h-1V8.5a1.5 1.5 0 0 0-3 0V19h-1v-8.5a1.5 1.5 0 0 0-3 0V27a6 6 0 0 0 2.905 5.141L18 43h12l-.91-10.91a9.1 9.1 0 0 0 3.617-3.15l4.25-6.375a1.881 1.881 0 0 0-3.034-2.218L31 24V8.5a1.5 1.5 0 0 0-3 0V19h-1V6.5A1.5 1.5 0 0 0 25.5 5M14 12h-2v16c0 2.286 1.18 4.647 2.943 5.989L14.205 41h2.011l.845-8.028l-.544-.328C15.092 31.784 14 29.85 14 28z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsPpeGlovesNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsPpeGlovesNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPpeGlovesOutlineIcon],svg[healthicons-ppe-gloves-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M28 8.17A3 3 0 0 1 32 11v10.15l1.056-1.32a3.304 3.304 0 0 1 5.328 3.896l-3.458 5.188a11.4 11.4 0 0 1-4.759 4.054l.83 9.949A1 1 0 0 1 30 44H18a1 1 0 0 1-.997-1.083l.808-9.684A7 7 0 0 1 14 27V13a3 3 0 0 1 4-2.83V9a3 3 0 0 1 4.105-2.79A3.001 3.001 0 0 1 28 7zM25 6a1 1 0 0 0-1 1v13h-2V9a1 1 0 1 0-2 0v11h-2v-7a1 1 0 1 0-2 0v14a5 5 0 0 0 3.222 4.675a1 1 0 0 1 .64 1.017L19.087 42h9.826l-.8-9.591a1 1 0 0 1 .643-1.019a9.42 9.42 0 0 0 4.506-3.586l3.458-5.187a1.304 1.304 0 0 0-2.103-1.538l-2.836 3.546A1 1 0 0 1 30 24V11a1 1 0 1 0-2 0v9h-2V7a1 1 0 0 0-1-1" clip-rule="evenodd"></svg:path><svg:path d="M10 14h2v2h-2zm0 2v13a7 7 0 0 0 3.81 6.233L13.247 42h2.008l.608-7.307a1 1 0 0 0-.64-1.018A5 5 0 0 1 12 29V16z"></svg:path></svg:g>`,
})
export class HealthiconsPpeGlovesOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPpeGlovesOutline24pxIcon],svg[healthicons-ppe-gloves-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M18.445 13.613a4.6 4.6 0 0 1-3.825 3.83L15 22H9l.398-4.778A3.835 3.835 0 0 1 7 13.667V5.5a1 1 0 1 1 2 0v4h.5v-5a1 1 0 1 1 2 0v5h.5v-6a1 1 0 1 1 2 0v6h.5V3a1 1 0 1 1 2 0v6.011c.002.558.118.86.228 1.014c.1.14.215.188.333.195a.68.68 0 0 0 .407-.12a.36.36 0 0 0 .131-.136l.002-.002v.005h.001l.454-1.297a1 1 0 0 1 1.888.66z"></svg:path><svg:path d="M6 14V6H4v8c0 1.525.61 2.728 1.191 3.526c.193.265.498.49.746.674c.126.094.238.177.313.249v.004L6 21h2l.25-3.25l-.646-.547l-.006-.005l-.041-.033a5 5 0 0 1-.748-.815C6.389 15.771 6 14.974 6 14"></svg:path></svg:g>`,
})
export class HealthiconsPpeGlovesOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPpeGogglesIcon],svg[healthicons-ppe-goggles-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M11.5 26a1.5 1.5 0 0 1 1.5-1.5h22a1.5 1.5 0 0 1 1.5 1.5v3a4.5 4.5 0 0 1-8.805 1.315c-.43-1.412-1.76-2.815-3.695-2.815s-3.264 1.403-3.695 2.815A4.5 4.5 0 0 1 11.5 29z"></svg:path><svg:path fill-rule="evenodd" d="M17 9C9.82 9 4 14.82 4 22a5 5 0 0 0 4 4.9V29a8 8 0 0 0 15.653 2.336a.56.56 0 0 1 .17-.264A.27.27 0 0 1 24 31c.05 0 .11.017.177.072c.07.058.135.15.17.264A8 8 0 0 0 40 29v-2.1a5 5 0 0 0 4-4.9c0-7.18-5.82-13-13-13zm22.872 15.871A3 3 0 0 0 42 22c0-6.075-4.925-11-11-11H17c-6.075 0-11 4.925-11 11a3 3 0 0 0 2.128 2.871A5 5 0 0 1 13 21h22a5 5 0 0 1 4.872 3.871M13 23a3 3 0 0 0-3 3v3a6 6 0 0 0 11.74 1.753C22.02 29.833 22.86 29 24 29s1.98.834 2.26 1.753A6 6 0 0 0 38 29v-3a3 3 0 0 0-3-3z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsPpeGogglesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPpeGoggles24pxIcon],svg[healthicons-ppe-goggles-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 15.866a1 1 0 0 1-.1-.066l-.238-.179a4 4 0 0 1-1.372-4.53l.618-1.754A8 8 0 0 1 10.452 4h3.31a8 8 0 0 1 7.675 5.743l.435 1.477a4 4 0 0 1-1.438 4.33l-.334.25a1 1 0 0 1-.1.066v.555A3.58 3.58 0 0 1 16.42 20h-.078a4.17 4.17 0 0 1-3.705-2.26l-.02-.039a.673.673 0 0 0-1.204.016A4.04 4.04 0 0 1 7.777 20H7.6A3.6 3.6 0 0 1 4 16.4zm.794-5.863A6 6 0 0 1 10.452 6h3.31a6 6 0 0 1 5.756 4.307l.435 1.478a2 2 0 0 1-.215 1.613A5 5 0 0 0 15 10H9a5 5 0 0 0-4.717 3.336a2 2 0 0 1-.107-1.58zM10 11.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsPpeGoggles24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPpeGogglesNegativeIcon],svg[healthicons-ppe-goggles-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsPpeGogglesNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM4 22C4 14.82 9.82 9 17 9h14c7.18 0 13 5.82 13 13a5 5 0 0 1-4 4.9V29a8 8 0 0 1-15.653 2.336a.56.56 0 0 0-.17-.264A.27.27 0 0 0 24 31c-.05 0-.11.017-.177.072a.56.56 0 0 0-.17.264A8 8 0 0 1 8 29v-2.1A5 5 0 0 1 4 22m38 0a3 3 0 0 1-2.128 2.871A5 5 0 0 0 35 21H13a5 5 0 0 0-4.872 3.871A3 3 0 0 1 6 22c0-6.075 4.925-11 11-11h14c6.075 0 11 4.925 11 11m-32 4a3 3 0 0 1 3-3h22a3 3 0 0 1 3 3v3a6 6 0 0 1-11.74 1.753C25.98 29.833 25.14 29 24 29s-1.98.834-2.26 1.753A6 6 0 0 1 10 29zm3-1.5a1.5 1.5 0 0 0-1.5 1.5v3a4.5 4.5 0 0 0 8.805 1.315c.43-1.412 1.76-2.815 3.695-2.815s3.264 1.403 3.695 2.815A4.5 4.5 0 0 0 36.5 29v-3a1.5 1.5 0 0 0-1.5-1.5z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsPpeGogglesNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsPpeGogglesNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPpeGogglesOutlineIcon],svg[healthicons-ppe-goggles-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M17 9C9.82 9 4 14.82 4 22a5 5 0 0 0 4 4.9V29a8 8 0 0 0 15.653 2.336a.56.56 0 0 1 .17-.264A.27.27 0 0 1 24 31c.05 0 .11.017.177.072c.07.058.135.15.17.264A8 8 0 0 0 40 29v-2.1a5 5 0 0 0 4-4.9c0-7.18-5.82-13-13-13zm22.872 15.871A3 3 0 0 0 42 22c0-6.075-4.925-11-11-11H17c-6.075 0-11 4.925-11 11a3 3 0 0 0 2.128 2.871A5 5 0 0 1 13 21h22a5 5 0 0 1 4.872 3.871M10 26a3 3 0 0 1 3-3h22a3 3 0 0 1 3 3v3a6 6 0 0 1-11.74 1.753C25.98 29.833 25.14 29 24 29s-1.98.834-2.26 1.753A6 6 0 0 1 10 29z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsPpeGogglesOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPpeGogglesOutline24pxIcon],svg[healthicons-ppe-goggles-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M13.168 18.586A4.17 4.17 0 0 0 16.299 20h.08a3.58 3.58 0 0 0 3.584-3.58V15c0-2.761-2.242-5-5.007-5H8.948a5.003 5.003 0 0 0-5.007 5v1.4c0 1.988 1.614 3.6 3.604 3.6h.179a4.04 4.04 0 0 0 3.64-2.283a.674.674 0 0 1 1.206-.016l.02.038q.24.464.576.845zm4.792-2.165V15c0-1.657-1.345-3-3.004-3H8.948a3 3 0 0 0-3.004 3v1.4A1.6 1.6 0 0 0 7.545 18h.179a2.04 2.04 0 0 0 1.836-1.152c.96-1.987 3.78-2.024 4.791-.062l.02.039A2.17 2.17 0 0 0 16.299 18h.08a1.58 1.58 0 0 0 1.58-1.58"></svg:path><svg:path d="M10.402 6a6.01 6.01 0 0 0-5.665 4.003l-.62 1.753a2 2 0 0 0 .687 2.265l.238.179a1 1 0 0 1 .2 1.4a1 1 0 0 1-1.401.2l-.239-.179a4 4 0 0 1-1.373-4.53l.62-1.754A8.01 8.01 0 0 1 10.401 4h3.314a8.01 8.01 0 0 1 7.686 5.743l.435 1.477a4 4 0 0 1-1.44 4.33l-.334.25a1 1 0 0 1-1.402-.2a1 1 0 0 1 .2-1.4l.335-.25a2 2 0 0 0 .72-2.165l-.436-1.478A6.01 6.01 0 0 0 13.716 6z"></svg:path></svg:g>`,
})
export class HealthiconsPpeGogglesOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPpeGownIcon],svg[healthicons-ppe-gown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M30.363 4a5 5 0 0 1 4.977 4.526l1.447 15.19A3 3 0 0 1 36 26.04V30a1 1 0 0 1-1 1h-3v12a1 1 0 0 1-1 1H17a1 1 0 0 1-1-1V31h-3a1 1 0 0 1-1-1v-3.96a3 3 0 0 1-.787-2.324l1.447-15.19A5 5 0 0 1 17.637 4H21a3 3 0 0 0 6 0zM34 29h-2v-2h2zm-19.8-2H16v2h-2v-2zm2.8-2h14v-2H17z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsPpeGownIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPpeGownNegativeIcon],svg[healthicons-ppe-gown-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsPpeGownNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM35.34 8.526A5 5 0 0 0 30.363 4H27a3 3 0 1 1-6 0h-3.363a5 5 0 0 0-4.977 4.526l-1.447 15.19A3 3 0 0 0 12 26.04V30a1 1 0 0 0 1 1h3v12a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V31h3a1 1 0 0 0 1-1v-3.96c.56-.603.872-1.433.787-2.324zM32 29h2v-2h-2zm-16-2h-2v2h2zm15-2H17v-2h14z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsPpeGownNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsPpeGownNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPpeGownOutlineIcon],svg[healthicons-ppe-gown-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.66 8.526A5 5 0 0 1 17.637 4H21a3 3 0 1 0 6 0h3.363a5 5 0 0 1 4.977 4.526l1.447 15.19A3 3 0 0 1 35 26.75V30a1 1 0 0 1-1 1h-2v12a1 1 0 0 1-1 1H17a1 1 0 0 1-1-1V31h-2a1 1 0 0 1-1-1v-3.249a3 3 0 0 1-1.787-3.035zM30 30v-3H18v15h12zm2-3v2h1v-2zm0-2V11h-2v14H18V11h-2v14h-1.8a1 1 0 0 1-.996-1.095l1.447-15.19A3 3 0 0 1 17.637 6h1.779a5.001 5.001 0 0 0 9.168 0h1.779a3 3 0 0 1 2.986 2.716l1.447 15.19A1 1 0 0 1 33.801 25zm-16 2v2h-1v-2z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsPpeGownOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPpeMaskIcon],svg[healthicons-ppe-mask-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9 16.868c0-4.226 11.16-4.226 11.16-4.226l.9-1.616A2 2 0 0 1 22.809 10h2.559a2 2 0 0 1 1.747 1.026l.9 1.616S39 12.642 39 16.868v.167l1.73.42a4 4 0 0 1 3.042 4.235l-.557 6.387a4 4 0 0 1-2.62 3.412L33.84 33.94a1 1 0 0 1-.486.05C29.277 38 24.484 38 24.484 38h-.968s-4.866 0-8.963-4.1L7.36 31.101a4 4 0 0 1-2.532-3.348l-.573-6.021a4 4 0 0 1 3.114-4.284L9 17.087zm26.61 14.303c1.735-2.763 3.053-6.642 3.334-12.092l1.315.32a2 2 0 0 1 1.52 2.117l-.557 6.387a2 2 0 0 1-1.31 1.706zM9.058 19.123l-1.254.278a2 2 0 0 0-1.557 2.142l.573 6.021a2 2 0 0 0 1.266 1.674l4.096 1.593c-1.627-2.73-2.85-6.501-3.124-11.708M24 18.469l6.242 1.56a1 1 0 1 1-.485 1.941L24 20.53l-5.758 1.44a1 1 0 1 1-.485-1.94z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsPpeMaskIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPpeMask24pxIcon],svg[healthicons-ppe-mask-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.212 5.974L19 7.342v1.22a3 3 0 0 1 3 3v1.028a3 3 0 0 1-3 3a1.47 1.47 0 0 1-.623 1.192a11.05 11.05 0 0 1-12.755 0A1.47 1.47 0 0 1 5 15.59a3 3 0 0 1-3-3v-1.029a3 3 0 0 1 3-3v-1.22l4.788-1.367A3 3 0 0 1 12 5c.876 0 1.664.375 2.212.974M5 10.56a1 1 0 0 0-1 1v1.03a1 1 0 0 0 1 1zm14 3.03a1 1 0 0 0 1-1v-1.03a1 1 0 0 0-1-1zm-6.722-5.287l2.5 1a.75.75 0 0 1-.556 1.392L12 9.808l-2.221.888a.75.75 0 0 1-.558-1.392l2.5-1a.75.75 0 0 1 .557 0" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsPpeMask24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPpeMaskN95Icon],svg[healthicons-ppe-mask-n95-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M23.706 11.044a1 1 0 0 1 .588 0l13 4A1 1 0 0 1 38 16v1h1a5 5 0 0 1 5 5v4a5 5 0 0 1-5 5h-2.456a9 9 0 0 1-4.897 3.693l-7.353 2.263a1 1 0 0 1-.588 0l-7.353-2.263A9 9 0 0 1 11.456 31H9a5 5 0 0 1-5-5v-4a5 5 0 0 1 5-5h1v-1a1 1 0 0 1 .706-.956zM10 26.091c0 1.01.168 1.99.482 2.909H9a3 3 0 0 1-3-3v-4a3 3 0 0 1 3-3h1zM37.518 29H39a3 3 0 0 0 3-3v-4a3 3 0 0 0-3-3h-1v7.091c0 1.01-.168 1.99-.482 2.909M25 16v16h-2V16zm8 10a2 2 0 1 1-4 0a2 2 0 0 1 4 0" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsPpeMaskN95Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPpeMaskN9524pxIcon],svg[healthicons-ppe-mask-n95-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="m12 5.344l-7 2v1.22a3 3 0 0 0-3 3v1.029a3 3 0 0 0 3 3c.003.474.235.917.622 1.191a11.04 11.04 0 0 0 12.756 0c.387-.274.619-.717.622-1.191a3 3 0 0 0 3-3v-1.029a3 3 0 0 0-3-3v-1.22zm7 5.22v3.029a1 1 0 0 0 1-1v-1.029a1 1 0 0 0-1-1M5 13.593v-3.029a1 1 0 0 0-1 1v1.029a1 1 0 0 0 1 1m7.702 1.614V8.95h-1.404v6.259zm3.743-1.49a1.101 1.101 0 1 1-2.203 0a1.101 1.101 0 0 1 2.203 0"></svg:path><svg:path d="m19 7.344l-7-2l-7 2v1.22a3 3 0 0 0-3 3v1.029a3 3 0 0 0 3 3c.003.474.235.917.622 1.191a11.04 11.04 0 0 0 12.756 0c.387-.274.619-.717.622-1.191a3 3 0 0 0 3-3v-1.029a3 3 0 0 0-3-3zm-2 1.509v2.242a3.1 3.1 0 0 0-2.298-.413V8.196zm-7.702-.657V16.4A9 9 0 0 1 7 15.305V8.853zm3.404 7.012V8.949h-1.404v6.259zM19 13.593q.052 0 .102-.005a1 1 0 0 0 .898-.995v-1.029a1 1 0 0 0-1-1v1.029a1 1 0 0 0-.858.485a1 1 0 0 0 .858.486zm-4.298 1.02a1.101 1.101 0 1 0 1.283-1.791a1.101 1.101 0 0 0-1.283 1.79M5 10.564a1 1 0 0 0-1 1v1.029a1 1 0 0 0 1 1v-1.029a1 1 0 0 0 .858-.486A1 1 0 0 0 5 11.593z"></svg:path></svg:g>`,
})
export class HealthiconsPpeMaskN9524pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPpeMaskN95NegativeIcon],svg[healthicons-ppe-mask-n95-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsPpeMaskN95Negative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM24.294 11.044a1 1 0 0 0-.588 0l-13 4A1 1 0 0 0 10 16v1H9a5 5 0 0 0-5 5v4a5 5 0 0 0 5 5h2.456a9 9 0 0 0 4.897 3.693l7.353 2.263a1 1 0 0 0 .588 0l7.353-2.263A9 9 0 0 0 36.544 31H39a5 5 0 0 0 5-5v-4a5 5 0 0 0-5-5h-1v-1a1 1 0 0 0-.706-.956zM10.482 29A9 9 0 0 1 10 26.091V19H9a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3zM39 29h-1.482A9 9 0 0 0 38 26.091V19h1a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3M25 16v16h-2V16zm6 7a3 3 0 1 0 0 6a3 3 0 0 0 0-6" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsPpeMaskN95Negative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsPpeMaskN95NegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPpeMaskN95OutlineIcon],svg[healthicons-ppe-mask-n95-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M23.706 11.044a1 1 0 0 1 .588 0l13 4A1 1 0 0 1 38 16v1h1a5 5 0 0 1 5 5v4a5 5 0 0 1-5 5h-2.456a9 9 0 0 1-4.897 3.693l-7.353 2.263a1 1 0 0 1-.588 0l-7.353-2.263A9 9 0 0 1 11.456 31H9a5 5 0 0 1-5-5v-4a5 5 0 0 1 5-5h1v-1a1 1 0 0 1 .706-.956zM10 19H9a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h1.482A9 9 0 0 1 10 26.091zm28 7.091V19h1a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3h-1.482A9 9 0 0 0 38 26.091M12 16.74v9.352a7 7 0 0 0 4.941 6.69L24 34.955l7.059-2.172A7 7 0 0 0 36 26.092v-9.353l-12-3.693zM25 16v16h-2V16zm4 10a1 1 0 1 1 2 0a1 1 0 0 1-2 0m1-3a3 3 0 1 0 0 6a3 3 0 0 0 0-6" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsPpeMaskN95OutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPpeMaskN95Outline24pxIcon],svg[healthicons-ppe-mask-n95-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12.702 8.947v6.258h-1.404V8.947zm2.197 5.869a1.101 1.101 0 1 0 0-2.203a1.101 1.101 0 0 0 0 2.203"></svg:path><svg:path fill-rule="evenodd" d="m12 5.342l7 2v1.22a3 3 0 0 1 3 3v1.028a3 3 0 0 1-3 3a1.47 1.47 0 0 1-.623 1.192a11.05 11.05 0 0 1-12.755 0A1.47 1.47 0 0 1 5 15.59a3 3 0 0 1-3-3v-1.029a3 3 0 0 1 3-3v-1.22zm-7 5.22a1 1 0 0 0-1 1v1.028a1 1 0 0 0 1 1zm14 3.028a1 1 0 0 0 1-1v-1.029a1 1 0 0 0-1-1zm-2-4.74l-5-1.428L7 8.85v6.452a9.05 9.05 0 0 0 10-.001z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsPpeMaskN95Outline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPpeMaskNegativeIcon],svg[healthicons-ppe-mask-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsPpeMaskNegative0)"><svg:path d="m39.913 29.61l-4.303 1.56c1.735-2.762 3.053-6.642 3.334-12.09l1.315.318a2 2 0 0 1 1.52 2.118l-.556 6.387a2 2 0 0 1-1.31 1.706m-27.73 1.222c-1.628-2.73-2.851-6.501-3.125-11.708l-1.254.278a2 2 0 0 0-1.557 2.142l.573 6.021a2 2 0 0 0 1.266 1.674zM24 18.47l-6.242 1.56a1 1 0 1 0 .485 1.94L24 20.53l5.758 1.44a1 1 0 1 0 .485-1.94z"></svg:path><svg:path fill-rule="evenodd" d="M0 0h48v48H0zm20.16 12.642S9 12.642 9 16.868v.219l-1.63.362a4 4 0 0 0-3.114 4.284l.573 6.02a4 4 0 0 0 2.532 3.35l7.192 2.796C18.651 38 23.516 38 23.516 38h.968s4.794 0 8.872-4.01a1 1 0 0 0 .485-.05l6.754-2.45a4 4 0 0 0 2.62-3.413l.557-6.388a4 4 0 0 0-3.041-4.234L39 17.035v-.167c0-4.226-10.986-4.226-10.986-4.226l-.9-1.616A2 2 0 0 0 25.367 10h-2.56a2 2 0 0 0-1.746 1.026z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsPpeMaskNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsPpeMaskNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPpeMaskOutlineIcon],svg[healthicons-ppe-mask-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M30.242 20.03L24 18.47l-6.243 1.56a1 1 0 1 0 .485 1.94L24 20.53l5.757 1.44a1 1 0 0 0 .485-1.94"></svg:path><svg:path fill-rule="evenodd" d="M9 16.868c0-4.226 11.16-4.226 11.16-4.226l.9-1.616A2 2 0 0 1 22.809 10h2.559a2 2 0 0 1 1.747 1.026l.9 1.616S39 12.642 39 16.868v.167l1.73.42a4 4 0 0 1 3.042 4.235l-.554 6.35a4 4 0 0 1-2.687 3.435l-7.092 2.431C29.344 38 24.484 38 24.484 38h-.968s-4.866 0-8.963-4.1L7.36 31.101a4 4 0 0 1-2.532-3.348l-.573-6.021a4 4 0 0 1 3.114-4.284L9 17.087zm.058 2.255l-1.254.278a2 2 0 0 0-1.557 2.142l.573 6.021a2 2 0 0 0 1.266 1.674l4.096 1.593c-1.627-2.73-2.85-6.501-3.124-11.708m26.648 11.892l4.176-1.431a2 2 0 0 0 1.344-1.719l.554-6.35a2 2 0 0 0-1.521-2.117l-1.315-.319c-.276 5.348-1.55 9.184-3.238 11.936M22.803 12.011q-.186.332-.35.638c-.633 1.176-1.076 1.998-2.275 1.998c-5.942 0-8.988 1.573-8.988 2.145c0 16.445 8.973 19.027 12.592 19.198a2 2 0 0 0 .308.01h.09q.112 0 .218-.01c3.619-.17 12.592-2.753 12.592-19.198c0-.572-3.046-2.145-8.988-2.145c-1.2 0-1.642-.822-2.275-1.998q-.164-.306-.35-.638z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsPpeMaskOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPpeMaskOutline24pxIcon],svg[healthicons-ppe-mask-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m14.779 10.304l-2.5-1a.75.75 0 0 0-.557 0l-2.5 1a.75.75 0 0 0 .557 1.392L12 10.808l2.222.888a.75.75 0 0 0 .556-1.392"></svg:path><svg:path fill-rule="evenodd" d="M19 7.342v1.22a3 3 0 0 1 3 3v1.028a3 3 0 0 1-3 3a1.47 1.47 0 0 1-.623 1.192a11.05 11.05 0 0 1-12.755 0A1.47 1.47 0 0 1 5 15.59a3 3 0 0 1-3-3v-1.029a3 3 0 0 1 3-3v-1.22l4.788-1.367A3 3 0 0 1 12 5c.876 0 1.664.375 2.212.974zm-5.88.4l-.382-.417A1 1 0 0 0 12 7a1 1 0 0 0-.738.325l-.382.416L7 8.851v6.45a9.05 9.05 0 0 0 10 0v-6.45zM19 13.59v-3.029a1 1 0 0 1 1 1v1.03a1 1 0 0 1-1 1m-14-3.03v3.03a1 1 0 0 1-1-1v-1.03a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsPpeMaskOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPpeSanitizerIcon],svg[healthicons-ppe-sanitizer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.368 10.996c.292-.51.856-1.3 1.56-1.948C14.654 8.379 15.376 8 16 8h7v6h-4a2 2 0 0 0-2 2v3h-1a5 5 0 0 0-5 5v16a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V24a5 5 0 0 0-5-5h-1v-3a2 2 0 0 0-2-2h-4V8h8V6H16c-1.376 0-2.57.787-3.427 1.577a10.7 10.7 0 0 0-1.941 2.427zM18 29h5v-5h2v5h5v2h-5v5h-2v-5h-5z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsPpeSanitizerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPpeSanitizer24pxIcon],svg[healthicons-ppe-sanitizer-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M7.121 4.293A1 1 0 0 1 7.828 4H11v3h-1a1 1 0 0 0-1 1v1H8a3 3 0 0 0-3 3v10h14V12a3 3 0 0 0-3-3h-1V8a1 1 0 0 0-1-1h-1V4h4V2H7.83a3 3 0 0 0-2.122.879L4.293 4.293l1.414 1.414zM11.001 14v-2h2v2h2v2h-2v2h-2v-2H9v-2z"></svg:path><svg:path d="M9 11H8a1 1 0 0 0-1 1h2zm0 3v2h2v2h2v-2h2v-2h-2v-2h-2v2zm2-4h2V9h-2zm4 1v1h2a1 1 0 0 0-1-1zm0 7v2h2v-2zm-6 2v-2H7v2zM5.927 2.68A3 3 0 0 1 7.83 2H17v2h-4v3h1a1 1 0 0 1 1 1v1h1a3 3 0 0 1 3 3v10H5V12a3 3 0 0 1 3-3h1V8a1 1 0 0 1 1-1h1V4H7.83a1 1 0 0 0-.708.293L5.707 5.707L4.293 4.293l1.414-1.414q.106-.105.22-.2"></svg:path></svg:g>`,
})
export class HealthiconsPpeSanitizer24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPpeSanitizerNegativeIcon],svg[healthicons-ppe-sanitizer-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsPpeSanitizerNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm13.928 9.048a8.8 8.8 0 0 0-1.56 1.948l-1.736-.992a10.7 10.7 0 0 1 1.94-2.427C13.43 6.787 14.625 6 16 6h17v2h-8v6h4a2 2 0 0 1 2 2v3h1a5 5 0 0 1 5 5v16a2 2 0 0 1-2 2H13a2 2 0 0 1-2-2V24a5 5 0 0 1 5-5h1v-3a2 2 0 0 1 2-2h4V8h-7c-.624 0-1.346.38-2.072 1.048M18 29h5v-5h2v5h5v2h-5v5h-2v-5h-5z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsPpeSanitizerNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsPpeSanitizerNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPpeSanitizerOutlineIcon],svg[healthicons-ppe-sanitizer-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M25 29h5v2h-5v5h-2v-5h-5v-2h5v-5h2z"></svg:path><svg:path fill-rule="evenodd" d="M13.927 9.048a8.8 8.8 0 0 0-1.559 1.948l-1.736-.992a10.7 10.7 0 0 1 1.94-2.427C13.43 6.787 14.625 6 16 6h17v2h-8v6h4a2 2 0 0 1 2 2v2h1a6 6 0 0 1 6 6v15a3 3 0 0 1-3 3H13a3 3 0 0 1-3-3V24a6 6 0 0 1 6-6h1v-2a2 2 0 0 1 2-2h4V8h-7c-.624 0-1.346.38-2.073 1.048M12 24a4 4 0 0 1 4-4h16a4 4 0 0 1 4 4v15a1 1 0 0 1-1 1H13a1 1 0 0 1-1-1zm17-8v2H19v-2z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsPpeSanitizerOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPpeSanitizerOutline24pxIcon],svg[healthicons-ppe-sanitizer-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M11 12v2H9v2h2v2h2v-2h2v-2h-2v-2z"></svg:path><svg:path fill-rule="evenodd" d="M8.243 4a2 2 0 0 0-1.415.586l-1.12 1.121l-1.415-1.414l1.121-1.121A4 4 0 0 1 8.243 2H17v2h-4v3h1a2 2 0 0 1 2 2a3 3 0 0 1 3 3v10H5V12a3 3 0 0 1 3-3a2 2 0 0 1 2-2h1V4zM7 20h10v-8a1 1 0 0 0-1-1h-2V9h-4v2H8a1 1 0 0 0-1 1z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsPpeSanitizerOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPpeSantizerAltIcon],svg[healthicons-ppe-santizer-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M14 6a2 2 0 0 0-2 2v7.1A5 5 0 0 0 8 20v17a5 5 0 0 0 5 5h12a5 5 0 0 0 4.584-3h-2.348c-.55.614-1.348 1-2.236 1H13a3 3 0 0 1-3-3v-1h10a1 1 0 1 0 0-2H10v-9h8a1 1 0 1 0 0-2h-8v-3a3 3 0 0 1 3-3h12a3 3 0 0 1 2.236 1h2.348A5.01 5.01 0 0 0 26 15.1V8a2 2 0 0 0-2-2zm10 2H14v7h10z"></svg:path><svg:path d="M37.34 33.69A12.35 12.35 0 0 0 40 25.997V22.4a2.4 2.4 0 0 0-.696-1.697A2.36 2.36 0 0 0 37.627 20H23.374c-.63 0-1.233.253-1.678.703A2.4 2.4 0 0 0 21 22.4v3.598a12.35 12.35 0 0 0 2.66 7.69A12.12 12.12 0 0 0 30.5 38a12.12 12.12 0 0 0 6.84-4.31M32 25a1 1 0 1 0-2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2h-2z"></svg:path></svg:g>`,
})
export class HealthiconsPpeSantizerAltIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPpeSantizerAltNegativeIcon],svg[healthicons-ppe-santizer-alt-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsPpeSantizerAltNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM13 17a3 3 0 0 0-3 3v3h8a1 1 0 1 1 0 2h-8v9h10a1 1 0 1 1 0 2H10v1a3 3 0 0 0 3 3h12a3 3 0 0 0 2.236-1h2.348A5 5 0 0 1 25 42H13a5 5 0 0 1-5-5V20a5 5 0 0 1 4-4.9V8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v7.1a5.01 5.01 0 0 1 3.584 2.9h-2.348c-.55-.614-1.348-1-2.236-1zm11-2H14V8h10zm13.34 18.69A12.35 12.35 0 0 0 40 25.997V22.4a2.4 2.4 0 0 0-.696-1.697A2.36 2.36 0 0 0 37.627 20H23.374c-.63 0-1.233.253-1.678.703A2.4 2.4 0 0 0 21 22.4v3.598a12.35 12.35 0 0 0 2.66 7.69A12.12 12.12 0 0 0 30.5 38a12.12 12.12 0 0 0 6.84-4.31M32 25a1 1 0 1 0-2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2h-2z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsPpeSantizerAltNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsPpeSantizerAltNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPpeSantizerAltOutlineIcon],svg[healthicons-ppe-santizer-alt-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M14 6a2 2 0 0 0-2 2v7.1A5 5 0 0 0 8 20v17a5 5 0 0 0 5 5h12a5 5 0 0 0 4.584-3h-2.348c-.55.614-1.348 1-2.236 1H13a3 3 0 0 1-3-3v-1h10a1 1 0 1 0 0-2H10v-9h8a1 1 0 1 0 0-2h-8v-3a3 3 0 0 1 3-3h12a3 3 0 0 1 2.236 1h2.348A5.01 5.01 0 0 0 26 15.1V8a2 2 0 0 0-2-2zm10 2H14v7h10z" clip-rule="evenodd"></svg:path><svg:path d="M31 24a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 1 1-2 0v-2h-2a1 1 0 1 1 0-2h2v-2a1 1 0 0 1 1-1"></svg:path><svg:path fill-rule="evenodd" d="M23.66 33.689A12.12 12.12 0 0 0 30.5 38a12.12 12.12 0 0 0 6.84-4.31A12.35 12.35 0 0 0 40 25.997V22.4a2.4 2.4 0 0 0-.696-1.697A2.36 2.36 0 0 0 37.627 20H23.374c-.63 0-1.233.253-1.678.703A2.4 2.4 0 0 0 21 22.4v3.598a12.35 12.35 0 0 0 2.66 7.69M38 25.999v.004a10.35 10.35 0 0 1-2.228 6.445a10.13 10.13 0 0 1-5.273 3.492a10.13 10.13 0 0 1-5.271-3.492A10.35 10.35 0 0 1 23 26.002V22.4c0-.113.045-.217.117-.29a.36.36 0 0 1 .257-.11h14.252c.092 0 .185.037.257.11a.4.4 0 0 1 .117.29z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsPpeSantizerAltOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPpeSuitIcon],svg[healthicons-ppe-suit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M18 8a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v6.417h1a4 4 0 0 1 4 4V31a3 3 0 0 1-4 2.83V41a3 3 0 1 1-6 0V29h-2v12a3 3 0 1 1-6 0v-7.17A3 3 0 0 1 13 31V18.417a4 4 0 0 1 4-4h1zm13 23a1 1 0 1 0 2 0v-1h-2zm-15 1a1 1 0 0 1-1-1v-1h2v1a1 1 0 0 1-1 1m10-21a2 2 0 0 0 2-2V7h-8v2a2 2 0 0 0 2 2zm-8.6 12.792h5.5v-9.375h2.2v9.375h5.5v2.083H17.4z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsPpeSuitIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPpeSuit24pxIcon],svg[healthicons-ppe-suit-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9 5a3 3 0 0 1 6 0v2h.21a2 2 0 0 1 1.988 1.78l.627 5.647A1.417 1.417 0 0 1 16 15.937V21a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-5h-2v5a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-5.062a1.417 1.417 0 0 1-1.825-1.511l.627-5.648A2 2 0 0 1 8.79 7H9zm5-1h-4v.5A1.5 1.5 0 0 0 11.5 6h1A1.5 1.5 0 0 0 14 4.5zm-2.5 8V9h1v3H15v1H9v-1z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsPpeSuit24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPpeSuitNegativeIcon],svg[healthicons-ppe-suit-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsPpeSuitNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM22 4a4 4 0 0 0-4 4v6.417h-1a4 4 0 0 0-4 4V31a3 3 0 0 0 5 2.236V40.5a2.5 2.5 0 0 0 5 0V29h2v11.5a2.5 2.5 0 0 0 5 0v-7.264A3 3 0 0 0 35 31V18.417a4 4 0 0 0-4-4h-1V8a4 4 0 0 0-4-4zm.9 19.792h-5.5v2.083h13.2v-2.083h-5.5v-9.375h-2.2zM20 7h8v2a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2zm-5 23v1a1 1 0 1 0 2 0v-1zm16 1v-1h2v1a1 1 0 1 1-2 0" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsPpeSuitNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsPpeSuitNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPpeSuitOutlineIcon],svg[healthicons-ppe-suit-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M25 13a3 3 0 0 0 3-3V7h-8v3a3 3 0 0 0 3 3zm-2-2a1 1 0 0 1-1-1V9h4v1a1 1 0 0 1-1 1z"></svg:path><svg:path d="M17 9a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v5.1c2.282.463 4 2.481 4 4.9v12a3 3 0 0 1-4 2.83V40a4 4 0 0 1-7 2.646A4 4 0 0 1 17 40v-6.17A3 3 0 0 1 13 31V19a5 5 0 0 1 4-4.9zm13 7a3 3 0 0 1 3 3v9h-2v-9h-2v5h-4v-8zm2 16a1 1 0 0 1-1-1v-1h2v1a1 1 0 0 1-1 1m-5 10a2 2 0 0 1-2-2V30h4v10a2 2 0 0 1-2 2m-9-26a3 3 0 0 0-3 3v9h2v-9h2v5h4v-8zm3 26a2 2 0 0 0 2-2V30h-4v10a2 2 0 0 0 2 2m-5-10a1 1 0 0 0 1-1v-1h-2v1a1 1 0 0 0 1 1M26 6a3 3 0 0 1 3 3v5H19V9a3 3 0 0 1 3-3zm3 20v2h-4v-2zm-10 0v2h4v-2z"></svg:path></svg:g>`,
})
export class HealthiconsPpeSuitOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPpeSuitOutline24pxIcon],svg[healthicons-ppe-suit-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M14 5.5h-4v1A1.5 1.5 0 0 0 11.5 8h1A1.5 1.5 0 0 0 14 6.5zM11 12v-2h2v2h3v2H8v-2z"></svg:path><svg:path fill-rule="evenodd" d="M12 2a5 5 0 0 0-5 5v.395a4 4 0 0 0-2.225 3.04l-.528 3.692A3.395 3.395 0 0 0 7 17.947V19a3 3 0 0 0 5 2.236A3 3 0 0 0 17 19v-1.054a3.395 3.395 0 0 0 2.753-3.82l-.528-3.692A4 4 0 0 0 17 7.395V7a5 5 0 0 0-5-5M6.227 14.41a1.394 1.394 0 0 0 2.717.59H9v4a1 1 0 1 0 2 0v-4h2v4a1 1 0 1 0 2 0v-4h.056a1.394 1.394 0 0 0 2.717-.59l-.528-3.693A2 2 0 0 0 15.265 9H15V7a3 3 0 1 0-6 0v2h-.266a2 2 0 0 0-1.98 1.717z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsPpeSuitOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPregnantIcon],svg[healthicons-pregnant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M29 8a4 4 0 1 1-8 0a4 4 0 0 1 8 0"></svg:path><svg:path fill-rule="evenodd" d="M21.651 27.47a2 2 0 0 1-.827-.352l-5.5-4a2 2 0 0 1-.511-2.692L16.5 21.5l-1.687-1.074l.001-.002l.003-.004l.01-.015l.032-.051a34 34 0 0 1 .559-.84c.365-.536.874-1.258 1.437-1.987c.554-.717 1.203-1.496 1.848-2.113c.321-.307.69-.621 1.087-.87c.355-.224.962-.544 1.71-.544h2a2 2 0 0 1 1.176.383L23.5 16l1.177-1.617h.001l.002.002l.006.004l.017.013l.058.043l.202.154c.17.131.411.322.704.564a33 33 0 0 1 2.247 2.048c1.7 1.7 3.795 4.177 4.943 7.046c.665 1.662.681 3.22.148 4.593c-.513 1.319-1.452 2.255-2.329 2.892c-.88.641-1.807 1.06-2.484 1.316c-.282.107-.53.189-.73.25L26 41v1a2 2 0 1 1-4 0v-1c0-5.855-.003-9.657-.349-13.53m-.658-5.175a105 105 0 0 0-.514-2.899q-.228.278-.459.577c-.276.357-.54.715-.777 1.049z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsPregnantIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPregnant0812wIcon],svg[healthicons-pregnant-0812w-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M11.788 35.87a1 1 0 0 0 .104-1.411a16 16 0 0 1 2.118-22.957l.026-.02l.413.532l.335.432c.419.545.758 1.018.985 1.449c.228.434.287.724.268.922c-.015.156-.088.38-.45.678l-.747.615c-.59.485-.96 1.1-1.063 1.776c-.101.67.076 1.315.432 1.837c.714 1.047 2.113 1.577 3.607 1.18q.197-.052.299-.07c.04.066.09.153.162.28l.574 1.273l-3.244 1.061a2 2 0 0 0 1.244 3.802l1.732-.567l1.502 3.443a2 2 0 0 0 1.733 1.198c3.077.154 5.456-.974 6.954-2.572c.736-.784 1.265-1.69 1.542-2.61c.268-.89.347-1.965-.076-2.956a2 2 0 0 0-2.133-1.193l-1.48.22l-.726-2.225a2 2 0 1 0-3.802 1.24l1.25 3.83a2 2 0 0 0 2.04 1.376c-.518.39-1.234.724-2.178.85l-1.687-3.867a2 2 0 0 0-.109-.214l-1.35-2.993l-.042-.074a6 6 0 0 0-.329-.54a1.86 1.86 0 0 0-.626-.58c-.602-.326-1.264-.179-1.765-.045c-.756.201-1.25-.095-1.44-.374a.57.57 0 0 1-.106-.412c.018-.122.093-.314.355-.53l.748-.614c.683-.562 1.095-1.244 1.17-2.036c.07-.75-.178-1.449-.49-2.04c-.312-.596-.745-1.186-1.168-1.737L16 10.75l-.323-.415a16 16 0 0 1 22.824 20.427a1 1 0 1 0 1.813.845a18 18 0 1 0-29.936 4.16a1 1 0 0 0 1.41.102m24.081-.659a.8.8 0 0 0-.658.922l.833 5a.8.8 0 0 0 1.484.265l.972-1.701l.972 1.7a.8.8 0 0 0 1.484-.264l.833-5a.8.8 0 1 0-1.578-.264l-.464 2.785l-.552-.967a.8.8 0 0 0-1.39 0l-.552.967l-.464-2.785a.8.8 0 0 0-.92-.657M26.842 36a.8.8 0 0 0-1.366-.566l-1.042 1.042a.8.8 0 0 0 .808 1.328V41a.8.8 0 1 0 1.6 0z"></svg:path><svg:path fill-rule="evenodd" d="M19.862 38.5c.273-.34.438-.77.438-1.25c0-1.172-.99-2.05-2.12-2.05h-.86c-1.13 0-2.12.878-2.12 2.05c0 .48.165.91.438 1.25a1.98 1.98 0 0 0-.438 1.25c0 1.172.99 2.05 2.12 2.05h.86c1.13 0 2.12-.878 2.12-2.05c0-.48-.165-.91-.438-1.25m-2.542-1.7c-.329 0-.52.242-.52.45s.191.45.52.45h.86c.329 0 .52-.242.52-.45s-.191-.45-.52-.45zm1.38 2.95c0-.208-.191-.45-.52-.45h-.86c-.329 0-.52.242-.52.45s.191.45.52.45h.86c.329 0 .52-.242.52-.45" clip-rule="evenodd"></svg:path><svg:path d="M32.048 36.98c.12.1.152.198.152.27c0 .076-.038.186-.178.29l-.024.019l-3.5 2.818A.8.8 0 0 0 29 41.8h4a.8.8 0 0 0 0-1.6h-1.73l1.722-1.387c.466-.353.808-.905.808-1.563c0-1.263-1.172-2.05-2.3-2.05h-1c-.915 0-1.798.489-2.151 1.321a.8.8 0 1 0 1.473.625c.059-.14.287-.346.678-.346h1a.86.86 0 0 1 .548.18M22 38.2a.8.8 0 0 0 0 1.6h1a.8.8 0 0 0 0-1.6zm12.942-18.39a3.819 3.819 0 1 1-6.763-3.548a3.819 3.819 0 0 1 6.763 3.547"></svg:path></svg:g>`,
})
export class HealthiconsPregnant0812wIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPregnant0812wNegativeIcon],svg[healthicons-pregnant-0812w-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsPregnant0812wNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM16.8 37.25c0-.208.191-.45.52-.45h.86c.329 0 .52.242.52.45s-.191.45-.52.45h-.86c-.329 0-.52-.242-.52-.45m3.5 0c0 .48-.165.91-.438 1.25c.273.34.438.77.438 1.25c0 1.172-.99 2.05-2.12 2.05h-.86c-1.13 0-2.12-.878-2.12-2.05c0-.48.165-.91.438-1.25a2 2 0 0 1-.438-1.25c0-1.172.99-2.05 2.12-2.05h.86c1.13 0 2.12.878 2.12 2.05m-2.98 2.05h.86c.329 0 .52.242.52.45s-.191.45-.52.45h-.86c-.329 0-.52-.242-.52-.45s.191-.45.52-.45m14.728-2.32c.12.1.152.198.152.27c0 .076-.038.186-.178.29l-.024.019l-3.5 2.818A.8.8 0 0 0 29 41.8h4a.8.8 0 0 0 0-1.6h-1.73l1.722-1.387c.466-.353.808-.905.808-1.563c0-1.263-1.172-2.05-2.3-2.05h-1c-.915 0-1.798.489-2.151 1.321a.8.8 0 1 0 1.473.625c.059-.14.287-.346.678-.346h1a.86.86 0 0 1 .548.18M26.842 36a.8.8 0 0 0-1.366-.566l-1.042 1.042a.8.8 0 0 0 .808 1.328V41a.8.8 0 1 0 1.6 0zm9.026-.79a.8.8 0 0 0-.657.922l.833 5a.8.8 0 0 0 1.484.265l.972-1.701l.972 1.7a.8.8 0 0 0 1.484-.264l.833-5a.8.8 0 1 0-1.578-.264l-.464 2.785l-.552-.967a.8.8 0 0 0-1.39 0l-.552.967l-.464-2.785a.8.8 0 0 0-.92-.657M22 38.2a.8.8 0 0 0 0 1.6h1a.8.8 0 0 0 0-1.6zm-10.212-2.33a1 1 0 0 0 .104-1.411a16 16 0 0 1 2.118-22.957l.026-.02l.413.532l.335.432c.419.545.758 1.018.985 1.448c.228.435.287.725.268.923c-.015.156-.088.38-.45.678l-.747.615c-.59.485-.96 1.1-1.063 1.775c-.101.67.076 1.316.432 1.838c.714 1.047 2.113 1.577 3.607 1.18q.197-.052.299-.07c.04.066.09.153.162.28l.574 1.273l-3.244 1.061a2 2 0 1 0 1.244 3.802l1.732-.567l1.502 3.443a2 2 0 0 0 1.733 1.198c3.077.154 5.456-.974 6.954-2.572c.736-.784 1.265-1.69 1.542-2.61c.268-.89.347-1.965-.076-2.956a2 2 0 0 0-2.133-1.193l-1.48.22l-.726-2.226a2 2 0 1 0-3.802 1.241l1.25 3.83a2 2 0 0 0 2.04 1.376c-.518.39-1.234.724-2.178.85l-1.687-3.867a2 2 0 0 0-.109-.214l-1.332-2.952l-.018-.041l-.022-.04l-.02-.034c-.098-.174-.21-.373-.329-.54a1.86 1.86 0 0 0-.626-.58c-.602-.326-1.264-.179-1.765-.045c-.756.201-1.25-.095-1.44-.374a.57.57 0 0 1-.106-.412c.018-.122.093-.314.355-.53l.748-.614c.683-.562 1.095-1.244 1.17-2.036c.07-.75-.178-1.449-.49-2.04c-.312-.596-.745-1.186-1.168-1.737l-.371-.478l-.322-.414a16 16 0 0 1 22.824 20.427a1 1 0 1 0 1.813.845a18 18 0 1 0-29.936 4.16a1 1 0 0 0 1.41.102m23.154-16.06a3.819 3.819 0 1 1-6.763-3.548a3.819 3.819 0 0 1 6.763 3.547" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsPregnant0812wNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsPregnant0812wNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPregnant0812wOutlineIcon],svg[healthicons-pregnant-0812w-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M11.892 34.459a1 1 0 1 1-1.514 1.307a18 18 0 1 1 29.935-4.159a1 1 0 1 1-1.812-.845a16 16 0 0 0-22.824-20.427l.322.414l.002.002l.046.06l.323.416c.423.55.856 1.14 1.169 1.736c.311.592.56 1.291.49 2.041c-.076.792-.488 1.474-1.171 2.036l-.748.615c-.262.215-.337.407-.355.53a.57.57 0 0 0 .106.41c.19.28.684.576 1.44.375c.5-.134 1.163-.281 1.765.045c.298.162.493.391.627.58c.118.167.23.366.328.54l.042.074l.122.272a3 3 0 0 1 5.83-.224l.406 1.44l.648-.07a3 3 0 0 1 3.123 1.918c.492 1.296.32 2.62-.033 3.64c-.37 1.066-1.024 2.078-1.89 2.93c-1.78 1.75-4.494 2.875-7.845 2.57a3 3 0 0 1-2.525-1.9l-1.032-2.654l-.878.249a3 3 0 0 1-1.633-5.774l3.502-.99q.299-.084.598-.106l-.18-.396a9 9 0 0 0-.162-.28a4 4 0 0 0-.298.068c-1.494.398-2.893-.132-3.607-1.18a2.57 2.57 0 0 1-.432-1.837c.102-.675.473-1.29 1.063-1.775l.747-.614c.362-.299.435-.523.45-.68c.019-.197-.04-.487-.268-.921c-.227-.431-.566-.904-.985-1.449l-.335-.432l-.413-.533l-.026.021a16 16 0 0 0-2.118 22.957M24.09 20.8a1 1 0 1 0-1.925.543l1.093 3.878a1 1 0 0 0 .991.728a1 1 0 0 1 .6 1.822c-.677.468-1.571.832-2.689.935a1 1 0 0 1-1.024-.633l-1.529-3.933a1 1 0 0 0-1.204-.6l-3.503.99a1 1 0 1 0 .545 1.925l1.753-.496a1 1 0 0 1 1.204.6l1.361 3.502a1 1 0 0 0 .842.633c2.785.253 4.915-.68 6.261-2.005c.666-.654 1.143-1.408 1.403-2.16c.255-.737.327-1.553.054-2.273a1 1 0 0 0-1.042-.64l-1.487.16a1 1 0 0 1-1.07-.724z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M34.942 19.81a3.819 3.819 0 1 1-6.763-3.548a3.819 3.819 0 0 1 6.763 3.547m-1.77-.93a1.819 1.819 0 1 1-3.222-1.689a1.819 1.819 0 0 1 3.221 1.69M19.862 38.5c.273-.34.438-.77.438-1.25c0-1.172-.99-2.05-2.12-2.05h-.86c-1.13 0-2.12.878-2.12 2.05c0 .48.165.91.438 1.25a1.98 1.98 0 0 0-.438 1.25c0 1.172.99 2.05 2.12 2.05h.86c1.13 0 2.12-.878 2.12-2.05c0-.48-.165-.91-.438-1.25m-2.542-1.7c-.329 0-.52.242-.52.45s.191.45.52.45h.86c.329 0 .52-.242.52-.45s-.191-.45-.52-.45zm1.38 2.95c0-.208-.191-.45-.52-.45h-.86c-.329 0-.52.242-.52.45s.191.45.52.45h.86c.329 0 .52-.242.52-.45" clip-rule="evenodd"></svg:path><svg:path d="M32.2 37.25c0-.072-.033-.17-.152-.27a.86.86 0 0 0-.548-.18h-1c-.391 0-.62.207-.678.346a.8.8 0 1 1-1.473-.625c.353-.832 1.236-1.321 2.151-1.321h1c1.127 0 2.3.787 2.3 2.05c0 .658-.342 1.21-.808 1.563L31.269 40.2H33a.8.8 0 0 1 0 1.6h-4a.8.8 0 0 1-.502-1.423l3.5-2.818l.024-.019c.14-.104.178-.214.178-.29m-5.852-1.99a.8.8 0 0 1 .494.74v5a.8.8 0 0 1-1.6 0v-3.196a.8.8 0 0 1-.808-1.328l1.042-1.042a.8.8 0 0 1 .872-.173m8.862.871a.8.8 0 0 1 1.58-.264l.463 2.785l.552-.967a.8.8 0 0 1 1.39 0l.552.967l.464-2.785a.8.8 0 0 1 1.578.264l-.833 5a.8.8 0 0 1-1.484.265l-.972-1.701l-.972 1.7a.8.8 0 0 1-1.484-.264zM21.2 39a.8.8 0 0 1 .8-.8h1a.8.8 0 0 1 0 1.6h-1a.8.8 0 0 1-.8-.8"></svg:path></svg:g>`,
})
export class HealthiconsPregnant0812wOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPregnant2426wIcon],svg[healthicons-pregnant-2426w-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M38.985 32.09a1 1 0 0 0 1.328-.483a18 18 0 1 0-32.707-.174a1 1 0 1 0 1.822-.826a16 16 0 0 1 4.608-19.126l.413.533q.175.223.335.432c.419.545.758 1.018.985 1.448c.228.435.287.725.268.923c-.015.156-.088.38-.45.678l-.747.615c-.59.485-.96 1.1-1.063 1.775c-.101.67.076 1.316.432 1.838c.714 1.047 2.113 1.577 3.607 1.18q.197-.052.299-.07c.04.066.09.153.162.28l.574 1.273l-3.244 1.061a2 2 0 1 0 1.244 3.802l1.732-.567l1.502 3.443a2 2 0 0 0 1.733 1.198c3.077.154 5.456-.974 6.954-2.572c.736-.784 1.265-1.69 1.542-2.61c.268-.89.347-1.965-.076-2.956a2 2 0 0 0-2.133-1.193l-1.48.22l-.726-2.226a2 2 0 1 0-3.802 1.241l1.25 3.83a2 2 0 0 0 2.04 1.376c-.518.39-1.234.724-2.178.85l-1.687-3.867a2 2 0 0 0-.109-.214l-1.35-2.993l-.042-.074c-.098-.174-.21-.373-.329-.54a1.86 1.86 0 0 0-.626-.58c-.602-.326-1.264-.179-1.765-.045c-.756.201-1.25-.095-1.44-.374a.57.57 0 0 1-.106-.412c.018-.122.093-.314.355-.53l.748-.614c.683-.562 1.095-1.244 1.17-2.036c.07-.75-.178-1.449-.49-2.04c-.312-.596-.745-1.186-1.168-1.737L16 10.75l-.193-.247l-.13-.167q.355-.216.72-.413a16 16 0 0 1 22.104 20.84a1 1 0 0 0 .484 1.329m-3.775 4.04a.8.8 0 0 1 1.58-.264l.463 2.785l.552-.967a.8.8 0 0 1 1.39 0l.552.967l.464-2.785a.8.8 0 0 1 1.578.264l-.833 5a.8.8 0 0 1-1.484.265l-.972-1.701l-.972 1.7a.8.8 0 0 1-1.484-.264zM10.2 37.25c0-.072-.033-.17-.151-.27a.86.86 0 0 0-.549-.18h-1c-.391 0-.62.207-.678.346a.8.8 0 0 1-1.473-.625C6.702 35.689 7.585 35.2 8.5 35.2h1c1.127 0 2.3.787 2.3 2.05c0 .658-.342 1.21-.809 1.563L9.27 40.2H11a.8.8 0 0 1 0 1.6H7a.8.8 0 0 1-.502-1.423l3.5-2.818l.024-.019c.14-.104.178-.214.178-.29m15.349-.27c.118.1.151.198.151.27c0 .076-.038.186-.178.29l-.024.019l-3.5 2.818A.8.8 0 0 0 22.5 41.8h4a.8.8 0 0 0 0-1.6h-1.73l1.721-1.387c.467-.353.809-.905.809-1.563c0-1.263-1.172-2.05-2.3-2.05h-1c-.915 0-1.798.489-2.151 1.321a.8.8 0 1 0 1.473.625c.059-.14.287-.346.678-.346h1a.86.86 0 0 1 .549.18"></svg:path><svg:path fill-rule="evenodd" d="M17.3 36a.8.8 0 0 0-1.44-.48l-3 4a.8.8 0 0 0 .64 1.28h2.2v.2a.8.8 0 0 0 1.6 0v-.2h.2a.8.8 0 0 0 0-1.6h-.2zm-2.2 3.2l.6-.8v.8z" clip-rule="evenodd"></svg:path><svg:path d="M18.7 39a.8.8 0 0 1 .8-.8h1a.8.8 0 0 1 0 1.6h-1a.8.8 0 0 1-.8-.8"></svg:path><svg:path fill-rule="evenodd" d="M31.675 37.113a.52.52 0 0 0-.495-.313h-.86c-.329 0-.52.242-.52.45v.513q.253-.062.52-.063h.86c1.13 0 2.12.878 2.12 2.05s-.99 2.05-2.12 2.05h-.86c-1.13 0-2.12-.878-2.12-2.05v-2.5c0-1.172.99-2.05 2.12-2.05h.86c.898 0 1.693.545 1.995 1.354a.8.8 0 0 1-1.5.559M30.32 39.3c-.329 0-.52.242-.52.45s.191.45.52.45h.86c.329 0 .52-.242.52-.45s-.191-.45-.52-.45z" clip-rule="evenodd"></svg:path><svg:path d="M34.942 19.81a3.819 3.819 0 1 1-6.763-3.548a3.819 3.819 0 0 1 6.763 3.547"></svg:path></svg:g>`,
})
export class HealthiconsPregnant2426wIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPregnant2426wNegativeIcon],svg[healthicons-pregnant-2426w-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsPregnant2426wNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm10.049 36.98c.118.1.151.198.151.27c0 .076-.038.186-.178.29l-.01.008l-.014.01l-3.5 2.819A.8.8 0 0 0 7 41.8h4a.8.8 0 0 0 0-1.6H9.27l1.722-1.387c.466-.353.808-.905.808-1.563c0-1.263-1.173-2.05-2.3-2.05h-1c-.915 0-1.798.489-2.151 1.321a.8.8 0 1 0 1.473.625c.059-.14.287-.346.678-.346h1a.86.86 0 0 1 .549.18m25.162-.848a.8.8 0 0 1 1.578-.264l.464 2.785l.552-.967a.8.8 0 0 1 1.39 0l.552.967l.464-2.785a.8.8 0 0 1 1.578.264l-.833 5a.8.8 0 0 1-1.484.265l-.972-1.701l-.972 1.7a.8.8 0 0 1-1.484-.264zm-9.662.849c.118.099.151.197.151.269c0 .076-.038.186-.178.29l-.024.019l-3.5 2.818A.8.8 0 0 0 22.5 41.8h4a.8.8 0 0 0 0-1.6h-1.73l1.721-1.387c.467-.353.809-.905.809-1.563c0-1.263-1.172-2.05-2.3-2.05h-1c-.915 0-1.798.489-2.151 1.321a.8.8 0 1 0 1.473.625c.059-.14.287-.346.678-.346h1a.86.86 0 0 1 .549.18M17.3 36a.8.8 0 0 0-1.44-.48l-3 4a.8.8 0 0 0 .64 1.28h2.2v.2a.8.8 0 0 0 1.6 0v-.2h.2a.8.8 0 0 0 0-1.6h-.2zm-1.6 2.4v.8h-.6zm3 .6a.8.8 0 0 1 .8-.8h1a.8.8 0 0 1 0 1.6h-1a.8.8 0 0 1-.8-.8m12.975-1.887a.52.52 0 0 0-.495-.313h-.86c-.329 0-.52.242-.52.45v.513q.253-.062.52-.063h.86c1.13 0 2.12.878 2.12 2.05s-.99 2.05-2.12 2.05h-.86c-1.13 0-2.12-.878-2.12-2.05v-2.5c0-1.172.99-2.05 2.12-2.05h.86c.898 0 1.693.545 1.994 1.354a.8.8 0 1 1-1.499.559M30.32 39.3c-.329 0-.52.242-.52.45s.191.45.52.45h.86c.329 0 .52-.242.52-.45s-.191-.45-.52-.45zm8.665-7.21a1 1 0 0 0 1.328-.483a18 18 0 1 0-32.707-.174a1 1 0 1 0 1.822-.826a16 16 0 0 1 4.608-19.126l.413.533l.335.432c.419.545.758 1.018.985 1.448c.228.435.287.725.268.923c-.015.156-.088.38-.45.678l-.747.615c-.59.485-.96 1.1-1.063 1.775c-.101.67.076 1.316.432 1.838c.714 1.047 2.113 1.577 3.607 1.18q.197-.052.299-.07c.04.066.09.153.162.28l.574 1.273l-3.244 1.061a2 2 0 1 0 1.244 3.802l1.732-.567l1.502 3.443a2 2 0 0 0 1.733 1.198c3.077.154 5.456-.974 6.954-2.572c.736-.784 1.265-1.69 1.542-2.61c.268-.89.347-1.965-.076-2.956a2 2 0 0 0-2.133-1.193l-1.48.22l-.726-2.226a2 2 0 1 0-3.802 1.241l1.25 3.83a2 2 0 0 0 2.04 1.376c-.518.39-1.234.724-2.178.85l-1.687-3.867a2 2 0 0 0-.109-.214l-1.332-2.952l-.018-.041l-.022-.04l-.02-.034c-.098-.174-.21-.373-.329-.54a1.86 1.86 0 0 0-.626-.58c-.602-.326-1.264-.179-1.765-.045c-.756.201-1.25-.095-1.44-.374a.57.57 0 0 1-.106-.412c.018-.122.093-.314.355-.53l.748-.614c.683-.562 1.095-1.244 1.17-2.036c.07-.75-.178-1.449-.49-2.04c-.312-.596-.745-1.186-1.168-1.737l-.371-.478l-.322-.414q.355-.216.72-.413a16 16 0 0 1 22.104 20.84a1 1 0 0 0 .484 1.329m-4.043-12.28a3.819 3.819 0 1 1-6.763-3.548a3.819 3.819 0 0 1 6.763 3.547" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsPregnant2426wNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsPregnant2426wNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPregnant2426wOutlineIcon],svg[healthicons-pregnant-2426w-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M40.314 31.607a1 1 0 0 1-1.813-.845a16 16 0 0 0-22.824-20.427l.322.414q.184.235.37.478c.424.55.857 1.14 1.17 1.736c.311.592.56 1.291.49 2.041c-.076.792-.488 1.474-1.171 2.036l-.748.615c-.262.215-.337.407-.355.53a.57.57 0 0 0 .106.41c.19.28.684.576 1.44.375c.5-.134 1.163-.281 1.765.045c.298.162.493.391.627.58c.118.167.23.366.328.54l.042.074l.122.272a3 3 0 0 1 5.83-.224l.406 1.44l.648-.07a3 3 0 0 1 3.123 1.918c.492 1.296.32 2.62-.033 3.64c-.37 1.066-1.024 2.078-1.89 2.93c-1.78 1.75-4.494 2.875-7.845 2.57a3 3 0 0 1-2.525-1.9l-1.032-2.654l-.878.249a3 3 0 0 1-1.633-5.774l3.502-.99a3 3 0 0 1 .598-.106l-.18-.396a9 9 0 0 0-.162-.28a4 4 0 0 0-.298.068c-1.494.398-2.893-.132-3.607-1.18a2.57 2.57 0 0 1-.432-1.837c.102-.675.473-1.29 1.063-1.775l.747-.614c.362-.299.435-.523.45-.68c.019-.197-.04-.487-.268-.922c-.227-.43-.566-.903-.985-1.448l-.335-.431q-.203-.26-.413-.534a16 16 0 0 0-4.608 19.126a1 1 0 1 1-1.822.826a18 18 0 1 1 32.707.174M22.856 20.11a1 1 0 0 1 1.234.691l.635 2.252a1 1 0 0 0 1.069.724l1.487-.16a1 1 0 0 1 1.042.64c.273.72.201 1.536-.054 2.274c-.26.751-.737 1.505-1.403 2.16c-1.346 1.323-3.476 2.257-6.261 2.004a1 1 0 0 1-.842-.633l-1.361-3.502a1 1 0 0 0-1.204-.6l-1.753.496a1 1 0 0 1-.545-1.924l3.503-.991a1 1 0 0 1 1.204.6l1.53 3.933a1 1 0 0 0 1.023.633c1.118-.103 2.012-.466 2.689-.935a1 1 0 0 0-.6-1.822a1 1 0 0 1-.991-.728l-1.093-3.878a1 1 0 0 1 .691-1.234" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M29.787 21.418a3.819 3.819 0 1 0 3.547-6.764a3.819 3.819 0 0 0-3.547 6.764m.929-1.772a1.819 1.819 0 1 0 1.689-3.221a1.819 1.819 0 0 0-1.69 3.221" clip-rule="evenodd"></svg:path><svg:path d="M10.2 37.25c0-.072-.033-.17-.151-.27a.86.86 0 0 0-.549-.18h-1c-.391 0-.62.207-.678.346a.8.8 0 0 1-1.473-.625C6.702 35.689 7.585 35.2 8.5 35.2h1c1.127 0 2.3.787 2.3 2.05c0 .658-.342 1.21-.809 1.563L9.27 40.2H11a.8.8 0 0 1 0 1.6H7a.8.8 0 0 1-.502-1.423l3.5-2.818l.024-.019c.14-.104.178-.214.178-.29m25.669-2.04a.8.8 0 0 0-.658.922l.833 5a.8.8 0 0 0 1.484.265l.972-1.701l.972 1.7a.8.8 0 0 0 1.484-.264l.833-5a.8.8 0 1 0-1.578-.264l-.464 2.785l-.552-.967a.8.8 0 0 0-1.39 0l-.552.967l-.464-2.785a.8.8 0 0 0-.92-.657M25.7 37.25c0-.072-.033-.17-.151-.27A.86.86 0 0 0 25 36.8h-1c-.391 0-.62.207-.678.346a.8.8 0 0 1-1.473-.625c.353-.832 1.236-1.321 2.151-1.321h1c1.128 0 2.3.787 2.3 2.05c0 .658-.342 1.21-.809 1.563L24.77 40.2h1.73a.8.8 0 0 1 0 1.6h-4a.8.8 0 0 1-.502-1.423l3.5-2.818l.024-.019c.14-.104.178-.214.178-.29"></svg:path><svg:path fill-rule="evenodd" d="M16.753 35.241A.8.8 0 0 1 17.3 36v3.2h.2a.8.8 0 0 1 0 1.6h-.2v.2a.8.8 0 0 1-1.6 0v-.2h-2.2a.8.8 0 0 1-.64-1.28l3-4a.8.8 0 0 1 .893-.279M15.7 38.4l-.6.8h.6z" clip-rule="evenodd"></svg:path><svg:path d="M19.5 38.2a.8.8 0 0 0 0 1.6h1a.8.8 0 0 0 0-1.6z"></svg:path><svg:path fill-rule="evenodd" d="M31.18 36.8c.252 0 .435.15.495.313a.8.8 0 0 0 1.5-.56c-.302-.808-1.097-1.353-1.994-1.353h-.861c-1.13 0-2.12.878-2.12 2.05v2.5c0 1.172.99 2.05 2.12 2.05h.86c1.13 0 2.12-.878 2.12-2.05s-.99-2.05-2.12-2.05h-.86q-.268 0-.52.063v-.513c0-.208.191-.45.52-.45zm-1.38 2.95c0-.208.191-.45.52-.45h.86c.329 0 .52.242.52.45s-.191.45-.52.45h-.86c-.329 0-.52-.242-.52-.45" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsPregnant2426wOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPregnant24pxIcon],svg[healthicons-pregnant-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 4c0-1.11.89-2 2-2s2 .89 2 2s-.89 2-2 2s-2-.89-2-2m7 9a3.29 3.29 0 0 0-2-3c0-1.66-1.34-3-3-3s-3 1.34-3 3v7h2v5h3v-5h3z"></svg:path>`,
})
export class HealthiconsPregnant24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPregnant32wIcon],svg[healthicons-pregnant-32w-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M16.4 40.317a1 1 0 0 0 .844-1.813a16 16 0 0 1-3.208-27.023l.413.533q.175.223.335.432c.419.545.758 1.018.985 1.449c.228.434.287.724.268.922c-.015.156-.088.38-.45.678l-.747.615c-.59.485-.96 1.1-1.063 1.775c-.101.67.076 1.316.432 1.838c.714 1.047 2.113 1.577 3.607 1.18q.197-.052.299-.07c.04.066.09.153.162.28l.574 1.273l-3.244 1.061a2 2 0 1 0 1.244 3.802l1.732-.567l1.502 3.443a2 2 0 0 0 1.733 1.198c3.077.154 5.456-.974 6.954-2.572c.736-.784 1.265-1.69 1.542-2.61c.268-.89.347-1.965-.076-2.956a2 2 0 0 0-2.133-1.193l-1.48.22l-.726-2.226a2 2 0 1 0-3.802 1.241l1.25 3.83a2 2 0 0 0 2.04 1.376c-.518.39-1.234.724-2.178.85l-1.687-3.867a2 2 0 0 0-.109-.214l-1.35-2.993l-.042-.074c-.098-.174-.21-.373-.329-.54a1.86 1.86 0 0 0-.626-.58c-.602-.326-1.264-.179-1.765-.045c-.756.201-1.25-.095-1.44-.374a.57.57 0 0 1-.106-.412c.018-.122.093-.314.355-.53l.748-.614c.683-.562 1.095-1.244 1.17-2.036c.07-.75-.178-1.449-.49-2.04c-.312-.596-.745-1.186-1.168-1.737l-.371-.478l-.322-.414a16 16 0 0 1 20.115 2.85a16 16 0 0 1 2.712 17.57a1 1 0 1 0 1.813.845A18 18 0 1 0 16.4 40.317"></svg:path><svg:path d="M29.787 21.418a3.819 3.819 0 1 0 3.547-6.764a3.819 3.819 0 0 0-3.547 6.764m5.423 14.714a.8.8 0 0 1 1.58-.264l.463 2.785l.552-.967a.8.8 0 0 1 1.39 0l.552.967l.464-2.785a.8.8 0 0 1 1.578.264l-.833 5a.8.8 0 0 1-1.484.265l-.972-1.701l-.972 1.7a.8.8 0 0 1-1.484-.264zm-10.164.854c.124.102.154.2.154.264c0 .065-.03.163-.154.264a.92.92 0 0 1-.579.186h-1.021a.8.8 0 0 0 0 1.6h1.021a.92.92 0 0 1 .579.186c.124.102.154.2.154.264c0 .065-.03.163-.154.264a.92.92 0 0 1-.579.186h-1.021c-.416 0-.653-.215-.712-.351a.8.8 0 1 0-1.468.636c.362.834 1.26 1.315 2.18 1.315h1.021c1.128 0 2.333-.773 2.333-2.05c0-.499-.184-.921-.475-1.25c.291-.329.475-.751.475-1.25c0-1.277-1.205-2.05-2.333-2.05h-1.021c-.92 0-1.818.48-2.18 1.315a.8.8 0 0 0 1.468.636c.06-.136.296-.351.711-.351h1.022a.92.92 0 0 1 .579.186m7.002-.006c.12.1.152.198.152.27c0 .076-.038.186-.178.29l-.024.019l-3.5 2.818A.8.8 0 0 0 29 41.8h4a.8.8 0 0 0 0-1.6h-1.73l1.722-1.387c.466-.353.808-.905.808-1.563c0-1.263-1.172-2.05-2.3-2.05h-1c-.915 0-1.798.489-2.151 1.321a.8.8 0 1 0 1.473.625c.059-.14.287-.346.678-.346h1a.86.86 0 0 1 .548.18"></svg:path></svg:g>`,
})
export class HealthiconsPregnant32wIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPregnant32wNegativeIcon],svg[healthicons-pregnant-32w-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsPregnant32wNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM25.2 37.25c0-.065-.03-.163-.154-.264a.92.92 0 0 0-.579-.186h-1.021c-.416 0-.653.215-.712.352a.8.8 0 1 1-1.468-.637c.362-.834 1.26-1.315 2.18-1.315h1.021c1.128 0 2.333.773 2.333 2.05c0 .499-.184.921-.475 1.25c.291.329.475.751.475 1.25c0 1.277-1.205 2.05-2.333 2.05h-1.021c-.92 0-1.818-.48-2.18-1.315a.8.8 0 1 1 1.468-.636c.06.136.296.351.711.351h1.022a.92.92 0 0 0 .579-.186c.124-.102.154-.2.154-.264c0-.065-.03-.163-.154-.264a.92.92 0 0 0-.579-.186h-1.021a.8.8 0 0 1 0-1.6h1.021a.92.92 0 0 0 .579-.186c.124-.102.154-.2.154-.264m6.848-.27c.12.1.152.198.152.27c0 .076-.038.186-.178.29l-.024.019l-3.5 2.818A.8.8 0 0 0 29 41.8h4a.8.8 0 0 0 0-1.6h-1.73l1.722-1.387c.466-.353.808-.905.808-1.563c0-1.263-1.172-2.05-2.3-2.05h-1c-.915 0-1.798.489-2.151 1.321a.8.8 0 1 0 1.473.625c.059-.14.287-.346.678-.346h1a.86.86 0 0 1 .548.18m3.163-.848a.8.8 0 1 1 1.578-.264l.464 2.785l.552-.967a.8.8 0 0 1 1.39 0l.552.967l.464-2.785a.8.8 0 0 1 1.578.264l-.833 5a.8.8 0 0 1-1.484.265l-.972-1.701l-.972 1.7a.8.8 0 0 1-1.484-.264zm-7.106-14.14a2 2 0 0 1 2.133 1.193c.423.991.344 2.066.076 2.956c-.277.92-.806 1.826-1.541 2.61c-1.5 1.598-3.878 2.726-6.955 2.572a2 2 0 0 1-1.733-1.198l-1.502-3.443l-1.732.567a2 2 0 0 1-1.244-3.802l3.244-1.061l-.574-1.272a9 9 0 0 0-.163-.28q-.102.017-.298.068c-1.494.398-2.893-.132-3.607-1.18a2.57 2.57 0 0 1-.432-1.837c.102-.675.473-1.29 1.063-1.775l.747-.614c.362-.299.435-.523.45-.68c.019-.197-.04-.487-.268-.922c-.227-.43-.566-.903-.985-1.448l-.335-.432q-.203-.26-.413-.533A16 16 0 0 0 8.015 23.31a16 16 0 0 0 9.23 15.195a1 1 0 1 1-.845 1.813A18 18 0 1 1 40.317 31.6a1 1 0 1 1-1.813-.844a16 16 0 0 0-22.827-20.421l.322.414q.184.235.37.478c.424.55.857 1.14 1.17 1.736c.311.592.56 1.291.49 2.041c-.076.792-.488 1.474-1.171 2.036l-.748.615c-.262.215-.337.407-.355.53a.57.57 0 0 0 .106.41c.19.28.684.576 1.44.375c.5-.134 1.163-.281 1.765.045c.298.162.493.391.627.58c.118.167.23.366.328.54l.02.035l.022.039l.018.041l1.332 2.952q.06.103.109.214l1.687 3.867c.944-.126 1.66-.46 2.179-.85a2 2 0 0 1-2.042-1.375l-1.25-3.831a2 2 0 0 1 3.803-1.24l.726 2.224zm1.682-.575a3.819 3.819 0 1 0 3.547-6.763a3.819 3.819 0 0 0-3.547 6.764" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsPregnant32wNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsPregnant32wNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPregnant32wOutlineIcon],svg[healthicons-pregnant-32w-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M16.4 40.317a1 1 0 0 0 .844-1.813a16 16 0 0 1-3.208-27.023l.413.533q.175.223.335.432c.419.545.758 1.018.985 1.449c.228.434.287.724.268.922c-.015.156-.088.38-.45.678l-.747.615c-.59.485-.96 1.1-1.063 1.775c-.101.67.076 1.316.432 1.838c.714 1.047 2.113 1.577 3.607 1.18q.197-.052.299-.07c.04.066.09.153.162.28l.179.397a3 3 0 0 0-.598.105l-3.502.991a3 3 0 1 0 1.633 5.774l.878-.249l1.032 2.654a3 3 0 0 0 2.525 1.9c3.35.305 6.066-.82 7.844-2.57c.867-.852 1.521-1.864 1.89-2.93c.354-1.02.526-2.344.034-3.64a3 3 0 0 0-3.123-1.917l-.648.07l-.406-1.44a3 3 0 0 0-5.83.223l-.122-.272l-.042-.074c-.098-.174-.21-.373-.329-.54a1.86 1.86 0 0 0-.626-.58c-.602-.326-1.264-.179-1.765-.045c-.756.201-1.25-.095-1.44-.374a.57.57 0 0 1-.106-.412c.018-.122.093-.314.355-.53l.748-.614c.683-.562 1.095-1.244 1.17-2.036c.07-.75-.178-1.449-.49-2.04c-.312-.596-.745-1.186-1.168-1.737l-.371-.478l-.322-.414a16 16 0 0 1 20.115 2.85a16 16 0 0 1 2.712 17.57a1 1 0 1 0 1.813.845A18 18 0 1 0 16.4 40.317m6.456-20.208a1 1 0 0 1 1.234.691l.635 2.252a1 1 0 0 0 1.069.724l1.487-.16a1 1 0 0 1 1.042.64c.273.72.201 1.536-.054 2.274c-.26.751-.737 1.505-1.403 2.16c-1.346 1.323-3.476 2.257-6.261 2.004a1 1 0 0 1-.842-.633l-1.361-3.502a1 1 0 0 0-1.204-.6l-1.753.496a1 1 0 0 1-.545-1.924l3.503-.991a1 1 0 0 1 1.204.6l1.53 3.933a1 1 0 0 0 1.023.633c1.118-.103 2.012-.466 2.689-.935a1 1 0 0 0-.6-1.822a1 1 0 0 1-.991-.728l-1.093-3.878a1 1 0 0 1 .691-1.234" clip-rule="evenodd"></svg:path><svg:path d="M35.21 36.132a.8.8 0 0 1 1.58-.264l.463 2.785l.552-.967a.8.8 0 0 1 1.39 0l.552.967l.464-2.785a.8.8 0 0 1 1.578.264l-.833 5a.8.8 0 0 1-1.484.265l-.972-1.701l-.972 1.7a.8.8 0 0 1-1.484-.264zm-10.164.854c.124.102.154.2.154.264c0 .065-.03.163-.154.264a.92.92 0 0 1-.579.186h-1.021a.8.8 0 0 0 0 1.6h1.021a.92.92 0 0 1 .579.186c.124.102.154.2.154.264c0 .065-.03.163-.154.264a.92.92 0 0 1-.579.186h-1.021c-.416 0-.653-.215-.712-.351a.8.8 0 1 0-1.468.636c.362.834 1.26 1.315 2.18 1.315h1.021c1.128 0 2.333-.773 2.333-2.05c0-.499-.184-.921-.475-1.25c.291-.329.475-.751.475-1.25c0-1.277-1.205-2.05-2.333-2.05h-1.021c-.92 0-1.818.48-2.18 1.315a.8.8 0 0 0 1.468.636c.06-.136.296-.351.711-.351h1.022a.92.92 0 0 1 .579.186m7.002-.006c.12.1.152.198.152.27c0 .076-.038.186-.178.29l-.024.019l-3.5 2.818A.8.8 0 0 0 29 41.8h4a.8.8 0 0 0 0-1.6h-1.73l1.722-1.387c.466-.353.808-.905.808-1.563c0-1.263-1.172-2.05-2.3-2.05h-1c-.915 0-1.798.489-2.151 1.321a.8.8 0 1 0 1.473.625c.059-.14.287-.346.678-.346h1a.86.86 0 0 1 .548.18"></svg:path><svg:path fill-rule="evenodd" d="M29.787 21.418a3.819 3.819 0 1 0 3.547-6.764a3.819 3.819 0 0 0-3.547 6.764m.929-1.772a1.819 1.819 0 1 0 1.69-3.22a1.819 1.819 0 0 0-1.69 3.22" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsPregnant32wOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPregnant3638wIcon],svg[healthicons-pregnant-3638w-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M38.985 32.09a1 1 0 0 0 1.328-.483a18 18 0 1 0-32.707-.174a1 1 0 1 0 1.822-.826a16 16 0 0 1 4.608-19.126l.413.533q.175.223.335.432c.419.545.758 1.018.985 1.448c.228.435.287.725.268.923c-.015.156-.088.38-.45.678l-.747.615c-.59.485-.96 1.1-1.063 1.775c-.101.67.076 1.316.432 1.838c.714 1.047 2.113 1.577 3.607 1.18q.197-.052.299-.07c.04.066.09.153.162.28l.574 1.273l-3.244 1.061a2 2 0 1 0 1.244 3.802l1.732-.567l1.502 3.443a2 2 0 0 0 1.733 1.198c3.077.154 5.456-.974 6.954-2.572c.736-.784 1.265-1.69 1.542-2.61c.268-.89.347-1.965-.076-2.956a2 2 0 0 0-2.133-1.193l-1.48.22l-.726-2.226a2 2 0 1 0-3.802 1.241l1.25 3.83a2 2 0 0 0 2.04 1.376c-.518.39-1.234.724-2.178.85l-1.687-3.867a2 2 0 0 0-.109-.214l-1.35-2.993l-.042-.074c-.098-.174-.21-.373-.329-.54a1.86 1.86 0 0 0-.626-.58c-.602-.326-1.264-.179-1.765-.045c-.756.201-1.25-.095-1.44-.374a.57.57 0 0 1-.106-.412c.018-.122.093-.314.355-.53l.748-.614c.683-.562 1.095-1.244 1.17-2.036c.07-.75-.178-1.449-.49-2.04c-.312-.596-.745-1.186-1.168-1.737L16 10.75l-.193-.247l-.13-.167q.355-.216.72-.413a16 16 0 0 1 22.104 20.84a1 1 0 0 0 .484 1.329m-3.775 4.04a.8.8 0 0 1 1.58-.264l.463 2.785l.552-.967a.8.8 0 0 1 1.39 0l.552.967l.464-2.785a.8.8 0 0 1 1.578.264l-.833 5a.8.8 0 0 1-1.484.265l-.972-1.701l-.972 1.7a.8.8 0 0 1-1.484-.264zM10.7 37.25c0-.196-.188-.45-.541-.45h-.894c-.27 0-.457.159-.517.317a.8.8 0 0 1-1.496-.567c.308-.813 1.114-1.35 2.013-1.35h.894c1.128 0 2.141.866 2.141 2.05c0 .482-.168.91-.442 1.25c.274.34.442.768.442 1.25c0 1.184-1.013 2.05-2.141 2.05h-.894c-.899 0-1.705-.537-2.013-1.35a.8.8 0 0 1 1.496-.567c.06.158.248.317.517.317h.894c.353 0 .541-.254.541-.45s-.188-.45-.541-.45h-.894a.8.8 0 0 1 0-1.6h.894c.353 0 .541-.254.541-.45m15.5 0c0-.196-.188-.45-.541-.45h-.894c-.27 0-.457.159-.517.317a.8.8 0 0 1-1.496-.567c.308-.813 1.114-1.35 2.013-1.35h.894c1.128 0 2.141.866 2.141 2.05c0 .482-.168.91-.442 1.25c.274.34.442.768.442 1.25c0 1.184-1.013 2.05-2.141 2.05h-.894c-.899 0-1.705-.537-2.013-1.35a.8.8 0 1 1 1.496-.567c.06.158.248.317.517.317h.894c.353 0 .541-.254.541-.45s-.188-.45-.541-.45h-.894a.8.8 0 0 1 0-1.6h.894c.353 0 .541-.254.541-.45"></svg:path><svg:path fill-rule="evenodd" d="M16.68 36.8c.252 0 .435.15.495.313a.8.8 0 0 0 1.5-.56c-.302-.808-1.097-1.353-1.995-1.353h-.86c-1.13 0-2.12.878-2.12 2.05v2.5c0 1.172.99 2.05 2.12 2.05h.86c1.13 0 2.12-.878 2.12-2.05s-.99-2.05-2.12-2.05h-.86q-.268 0-.52.063v-.513c0-.208.191-.45.52-.45zm-1.38 2.95c0-.208.191-.45.52-.45h.86c.329 0 .52.242.52.45s-.191.45-.52.45h-.86c-.329 0-.52-.242-.52-.45m18.562-1.25c.273-.34.438-.77.438-1.25c0-1.172-.99-2.05-2.12-2.05h-.86c-1.13 0-2.12.878-2.12 2.05c0 .48.165.91.438 1.25a1.98 1.98 0 0 0-.438 1.25c0 1.172.99 2.05 2.12 2.05h.86c1.13 0 2.12-.878 2.12-2.05c0-.48-.165-.91-.438-1.25m-2.543-1.7c-.328 0-.519.242-.519.45s.191.45.52.45h.86c.329 0 .52-.242.52-.45s-.191-.45-.52-.45zm1.381 2.95c0-.208-.191-.45-.52-.45h-.86c-.329 0-.52.242-.52.45s.191.45.52.45h.86c.329 0 .52-.242.52-.45" clip-rule="evenodd"></svg:path><svg:path d="M20.5 38.2a.8.8 0 0 0 0 1.6h1a.8.8 0 0 0 0-1.6zm14.442-18.39a3.819 3.819 0 1 1-6.763-3.548a3.819 3.819 0 0 1 6.763 3.547"></svg:path></svg:g>`,
})
export class HealthiconsPregnant3638wIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPregnant3638wNegativeIcon],svg[healthicons-pregnant-3638w-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsPregnant3638wNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm10.159 36.8c.353 0 .541.254.541.45s-.188.45-.541.45h-.894a.8.8 0 0 0 0 1.6h.894c.353 0 .541.254.541.45s-.188.45-.541.45h-.894c-.27 0-.457-.159-.517-.317a.8.8 0 0 0-1.496.567c.308.813 1.114 1.35 2.013 1.35h.894c1.128 0 2.141-.866 2.141-2.05c0-.482-.168-.91-.442-1.25a1.97 1.97 0 0 0 .442-1.25c0-1.184-1.013-2.05-2.141-2.05h-.894c-.899 0-1.705.537-2.013 1.35a.8.8 0 0 0 1.496.567c.06-.158.248-.317.517-.317zm16.041.45c0-.196-.188-.45-.541-.45h-.894c-.27 0-.457.159-.517.317a.8.8 0 0 1-1.496-.567c.308-.813 1.114-1.35 2.013-1.35h.894c1.128 0 2.141.866 2.141 2.05c0 .482-.168.91-.442 1.25c.274.34.442.768.442 1.25c0 1.184-1.013 2.05-2.141 2.05h-.894c-.899 0-1.705-.537-2.013-1.35a.8.8 0 1 1 1.496-.567c.06.158.248.317.517.317h.894c.353 0 .541-.254.541-.45s-.188-.45-.541-.45h-.894a.8.8 0 0 1 0-1.6h.894c.353 0 .541-.254.541-.45m-9.52-.45c.252 0 .435.15.495.313a.8.8 0 0 0 1.5-.56c-.302-.808-1.097-1.353-1.995-1.353h-.86c-1.13 0-2.12.878-2.12 2.05v2.5c0 1.172.99 2.05 2.12 2.05h.86c1.13 0 2.12-.878 2.12-2.05s-.99-2.05-2.12-2.05h-.86q-.268 0-.52.063v-.513c0-.208.191-.45.52-.45zm-1.38 2.95c0-.208.191-.45.52-.45h.86c.329 0 .52.242.52.45s-.191.45-.52.45h-.86c-.329 0-.52-.242-.52-.45m19.91-3.618a.8.8 0 0 1 1.58-.264l.463 2.785l.552-.967a.8.8 0 0 1 1.39 0l.552.967l.464-2.785a.8.8 0 0 1 1.578.264l-.833 5a.8.8 0 0 1-1.484.265l-.972-1.701l-.972 1.7a.8.8 0 0 1-1.484-.264zm-3.89.668c-.329 0-.52.242-.52.45s.191.45.52.45h.86c.329 0 .52-.242.52-.45s-.191-.45-.52-.45zm2.542 1.7c.273-.34.438-.77.438-1.25c0-1.172-.99-2.05-2.12-2.05h-.86c-1.13 0-2.12.878-2.12 2.05c0 .48.165.91.438 1.25a1.98 1.98 0 0 0-.438 1.25c0 1.172.99 2.05 2.12 2.05h.86c1.13 0 2.12-.878 2.12-2.05c0-.48-.165-.91-.438-1.25m-1.681.8h-.861c-.329 0-.52.242-.52.45s.191.45.52.45h.86c.329 0 .52-.242.52-.45s-.191-.45-.52-.45M20.5 38.2a.8.8 0 0 0 0 1.6h1a.8.8 0 0 0 0-1.6zm18.485-6.11a1 1 0 0 0 1.328-.483a18 18 0 1 0-32.707-.174a1 1 0 1 0 1.822-.826a16 16 0 0 1 4.608-19.126l.413.533l.335.432c.419.545.758 1.018.985 1.448c.228.435.287.725.268.923c-.015.156-.088.38-.45.678l-.747.615c-.59.485-.96 1.1-1.063 1.775c-.101.67.076 1.316.432 1.838c.714 1.047 2.113 1.577 3.607 1.18q.197-.052.299-.07c.04.066.09.153.162.28l.574 1.273l-3.244 1.061a2 2 0 1 0 1.244 3.802l1.732-.567l1.502 3.443a2 2 0 0 0 1.733 1.198c3.077.154 5.456-.974 6.954-2.572c.736-.784 1.265-1.69 1.542-2.61c.268-.89.347-1.965-.076-2.956a2 2 0 0 0-2.133-1.193l-1.48.22l-.726-2.226a2 2 0 1 0-3.802 1.241l1.25 3.83a2 2 0 0 0 2.04 1.376c-.518.39-1.234.724-2.178.85l-1.687-3.867a2 2 0 0 0-.109-.214l-1.332-2.952l-.018-.041l-.022-.04l-.02-.034c-.098-.174-.21-.373-.329-.54a1.86 1.86 0 0 0-.626-.58c-.602-.326-1.264-.179-1.765-.045c-.756.201-1.25-.095-1.44-.374a.57.57 0 0 1-.106-.412c.018-.122.093-.314.355-.53l.748-.614c.683-.562 1.095-1.244 1.17-2.036c.07-.75-.178-1.449-.49-2.04c-.312-.596-.745-1.186-1.168-1.737l-.371-.478l-.322-.414q.355-.216.72-.413a16 16 0 0 1 22.104 20.84a1 1 0 0 0 .484 1.329m-4.043-12.28a3.819 3.819 0 1 1-6.763-3.548a3.819 3.819 0 0 1 6.763 3.547" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsPregnant3638wNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsPregnant3638wNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPregnant3638wOutlineIcon],svg[healthicons-pregnant-3638w-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M40.314 31.607a1 1 0 0 1-1.813-.845a16 16 0 0 0-22.824-20.427l.322.414v.001l.046.058q.161.206.325.42c.423.55.856 1.14 1.169 1.735c.311.592.56 1.291.49 2.041c-.076.792-.488 1.474-1.171 2.036l-.748.615c-.262.215-.337.407-.355.53a.57.57 0 0 0 .106.41c.19.28.684.576 1.44.375c.5-.134 1.163-.281 1.765.045c.298.162.493.391.627.58c.118.167.23.366.328.54l.042.074l.122.272a3 3 0 0 1 5.83-.224l.406 1.44l.648-.07a3 3 0 0 1 3.123 1.918c.492 1.296.32 2.62-.033 3.64c-.37 1.066-1.024 2.078-1.89 2.93c-1.78 1.75-4.494 2.875-7.845 2.57a3 3 0 0 1-2.525-1.9l-1.032-2.654l-.878.249a3 3 0 0 1-1.633-5.774l3.502-.99a3 3 0 0 1 .598-.106l-.18-.396a9 9 0 0 0-.162-.28a4 4 0 0 0-.298.068c-1.494.398-2.893-.132-3.607-1.18a2.57 2.57 0 0 1-.432-1.837c.102-.675.473-1.29 1.063-1.775l.747-.614c.362-.299.435-.523.45-.68c.019-.197-.04-.487-.268-.922c-.227-.43-.566-.903-.985-1.448l-.335-.432q-.203-.259-.413-.533a16 16 0 0 0-4.608 19.126a1 1 0 1 1-1.822.826a18 18 0 1 1 32.707.174M22.856 20.11a1 1 0 0 1 1.234.691l.635 2.252a1 1 0 0 0 1.069.724l1.487-.16a1 1 0 0 1 1.042.64c.273.72.201 1.536-.054 2.274c-.26.751-.737 1.505-1.403 2.16c-1.346 1.323-3.476 2.257-6.261 2.004a1 1 0 0 1-.842-.633l-1.361-3.502a1 1 0 0 0-1.204-.6l-1.753.496a1 1 0 0 1-.545-1.924l3.503-.991a1 1 0 0 1 1.204.6l1.53 3.933a1 1 0 0 0 1.023.633c1.118-.103 2.012-.466 2.689-.935a1 1 0 0 0-.6-1.822a1 1 0 0 1-.991-.728l-1.093-3.878a1 1 0 0 1 .691-1.234" clip-rule="evenodd"></svg:path><svg:path d="M10.159 36.8c.353 0 .541.254.541.45s-.188.45-.541.45h-.894a.8.8 0 0 0 0 1.6h.894c.353 0 .541.254.541.45s-.188.45-.541.45h-.894c-.27 0-.457-.159-.517-.317a.8.8 0 0 0-1.496.567c.308.813 1.114 1.35 2.013 1.35h.894c1.128 0 2.141-.866 2.141-2.05c0-.482-.168-.91-.442-1.25a1.97 1.97 0 0 0 .442-1.25c0-1.184-1.013-2.05-2.141-2.05h-.894c-.899 0-1.705.537-2.013 1.35a.8.8 0 0 0 1.496.567c.06-.158.248-.317.517-.317zm16.041.45c0-.196-.188-.45-.541-.45h-.894c-.27 0-.457.159-.517.317a.8.8 0 0 1-1.496-.567c.308-.813 1.114-1.35 2.013-1.35h.894c1.128 0 2.141.866 2.141 2.05c0 .482-.168.91-.442 1.25c.274.34.442.768.442 1.25c0 1.184-1.013 2.05-2.141 2.05h-.894c-.899 0-1.705-.537-2.013-1.35a.8.8 0 1 1 1.496-.567c.06.158.248.317.517.317h.894c.353 0 .541-.254.541-.45s-.188-.45-.541-.45h-.894a.8.8 0 0 1 0-1.6h.894c.353 0 .541-.254.541-.45"></svg:path><svg:path fill-rule="evenodd" d="M16.68 36.8c.252 0 .435.15.495.313a.8.8 0 0 0 1.5-.56c-.302-.808-1.097-1.353-1.995-1.353h-.86c-1.13 0-2.12.878-2.12 2.05v2.5c0 1.172.99 2.05 2.12 2.05h.86c1.13 0 2.12-.878 2.12-2.05s-.99-2.05-2.12-2.05h-.86q-.268 0-.52.063v-.513c0-.208.191-.45.52-.45zm-1.38 2.95c0-.208.191-.45.52-.45h.86c.329 0 .52.242.52.45s-.191.45-.52.45h-.86c-.329 0-.52-.242-.52-.45" clip-rule="evenodd"></svg:path><svg:path d="M35.21 36.132a.8.8 0 0 1 1.58-.264l.463 2.785l.552-.967a.8.8 0 0 1 1.39 0l.552.967l.464-2.785a.8.8 0 0 1 1.578.264l-.833 5a.8.8 0 0 1-1.484.265l-.972-1.701l-.972 1.7a.8.8 0 0 1-1.484-.264z"></svg:path><svg:path fill-rule="evenodd" d="M33.862 38.5c.273-.34.438-.77.438-1.25c0-1.172-.99-2.05-2.12-2.05h-.86c-1.13 0-2.12.878-2.12 2.05c0 .48.165.91.438 1.25a1.98 1.98 0 0 0-.438 1.25c0 1.172.99 2.05 2.12 2.05h.86c1.13 0 2.12-.878 2.12-2.05c0-.48-.165-.91-.438-1.25m-2.543-1.7c-.328 0-.519.242-.519.45s.191.45.52.45h.86c.329 0 .52-.242.52-.45s-.191-.45-.52-.45zm1.381 2.95c0-.208-.191-.45-.52-.45h-.86c-.329 0-.52.242-.52.45s.191.45.52.45h.86c.329 0 .52-.242.52-.45" clip-rule="evenodd"></svg:path><svg:path d="M20.5 38.2a.8.8 0 0 0 0 1.6h1a.8.8 0 0 0 0-1.6z"></svg:path><svg:path fill-rule="evenodd" d="M29.787 21.418a3.819 3.819 0 1 0 3.547-6.764a3.819 3.819 0 0 0-3.547 6.764m.929-1.772a1.819 1.819 0 1 0 1.69-3.22a1.819 1.819 0 0 0-1.69 3.22" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsPregnant3638wOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPregnantNegativeIcon],svg[healthicons-pregnant-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsPregnantNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm29 8a4 4 0 1 1-8 0a4 4 0 0 1 8 0m-8.176 19.118c.254.184.537.3.827.352c.346 3.873.349 7.675.349 13.53v1a2 2 0 0 0 4 0v-1l1.462-7.692c.2-.061.448-.143.73-.25c.677-.256 1.604-.675 2.484-1.315c.877-.638 1.816-1.574 2.329-2.893c.533-1.372.517-2.93-.148-4.593c-1.148-2.869-3.243-5.346-4.943-7.046a33 33 0 0 0-2.247-2.048a27 27 0 0 0-.906-.718l-.058-.043l-.017-.013l-.006-.004l-.002-.001c-.001-.001-.002-.002-1.178 1.616l1.176-1.617A2 2 0 0 0 23.5 14h-2c-.748 0-1.355.32-1.71.543c-.397.25-.766.564-1.087.871c-.645.617-1.294 1.396-1.848 2.113a42 42 0 0 0-1.996 2.827l-.033.051l-.01.015l-.002.004v.001h-.001L16.5 21.5l-1.687-1.074a2 2 0 0 0 .51 2.692zm-.345-7.722c.195 1.024.366 1.983.514 2.899l-1.75-1.273c.238-.334.502-.692.777-1.05q.231-.298.459-.576" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsPregnantNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsPregnantNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPregnantOutlineIcon],svg[healthicons-pregnant-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M24.574 11a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m0 2a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9m-4.42 2.307c.273-.12.779-.307 1.42-.307h2c.571 0 1.027.164 1.15.209l.009.002c.2.072.385.156.538.23c.313.153.654.347 1.004.568a20 20 0 0 1 2.468 1.864c1.778 1.564 3.884 3.932 5.116 7.013c.784 1.958.728 3.847 0 5.492c-.682 1.538-1.836 2.603-2.818 3.297c-3.05 2.154-3.193 3.554-3.969 7.434A3 3 0 0 1 21.074 41c0-5.133-.002-8.187-.234-11.075a3 3 0 0 1-4.136-.586a46 46 0 0 1-1.516-2.17a27 27 0 0 1-.88-1.412a9 9 0 0 1-.377-.729c-.057-.127-.13-.3-.192-.499a3.4 3.4 0 0 1-.165-1.029c0-.716.26-1.272.318-1.393v-.003l.003-.004c.094-.206.2-.39.284-.53c.173-.286.387-.599.606-.9a34 34 0 0 1 1.636-2.06c.6-.7 1.279-1.437 1.914-2.024c.311-.288.678-.6 1.065-.86c.194-.131.45-.287.754-.42M21.574 17c-.735 0-1.375.586-1.882 1.055c-.555.513-1.177 1.186-1.752 1.857a32 32 0 0 0-1.535 1.93c-.252.348-.514.704-.694 1.095a1.35 1.35 0 0 0-.137.563c0 .457.254.883.472 1.267c.223.391.516.854.811 1.3a45 45 0 0 0 1.427 2.046a1 1 0 0 0 1.58-1.226a44 44 0 0 1-1.88-2.77l-.346-.569l.391-.539a30 30 0 0 1 1.797-2.217l1.338-1.504l.39 1.974c1.512 7.646 1.52 10.161 1.52 19.738a1 1 0 0 0 1 1c.621 0 1-.521 1-1.099c.816-4.08 1.295-6.375 4.813-8.86c.815-.575 1.66-1.385 2.143-2.474c.498-1.124.567-2.452-.028-3.938c-1.077-2.694-2.946-4.817-4.58-6.255a18 18 0 0 0-2.213-1.673c-.365-.23-.745-.46-1.152-.607a1.4 1.4 0 0 0-.483-.094z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsPregnantOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPregnantOutline24pxIcon],svg[healthicons-pregnant-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 4c0-1.11.89-2 2-2s2 .89 2 2s-.89 2-2 2s-2-.89-2-2m7 9a3.29 3.29 0 0 0-2-3c0-1.66-1.34-3-3-3s-3 1.34-3 3v7h2v5h3v-5h3z"></svg:path>`,
})
export class HealthiconsPregnantOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPrescriptionDocumentIcon],svg[healthicons-prescription-document-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M27 15V4H10a1 1 0 0 0-1 1v38a1 1 0 0 0 1 1h28a1 1 0 0 0 1-1V16H28a1 1 0 0 1-1-1m2-1V4.586L38.414 14zm-12 5a1 1 0 0 1 1-1h5a4 4 0 0 1 .395 7.98L27 29.587l3.293-3.293l1.414 1.414L28.414 31l3.293 3.293l-1.414 1.414L27 32.414l-3.293 3.293l-1.414-1.414L25.586 31l-5-5H19v7h-2zm6 5h-4v-4h4a2 2 0 1 1 0 4" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsPrescriptionDocumentIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPrescriptionDocumentNegativeIcon],svg[healthicons-prescription-document-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsPrescriptionDocumentNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM27 4v11a1 1 0 0 0 1 1h11v27a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zm2 .586V14h9.414zM18 18a1 1 0 0 0-1 1v14h2v-7h1.586l5 5l-3.293 3.293l1.414 1.414L27 32.414l3.293 3.293l1.414-1.414L28.414 31l3.293-3.293l-1.414-1.414L27 29.586l-3.605-3.605A4 4 0 0 0 23 18zm1 6h4a2 2 0 1 0 0-4h-4z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsPrescriptionDocumentNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsPrescriptionDocumentNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPrescriptionDocumentOutlineIcon],svg[healthicons-prescription-document-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10 4a1 1 0 0 0-1 1v38a1 1 0 0 0 1 1h28a1 1 0 0 0 1-1V15a1 1 0 0 0-.293-.707l-10-10A1 1 0 0 0 28 4zm1 38V6h16v9a1 1 0 0 0 1 1h9v26zm24.586-28L29 7.414V14zM17 33h2v-7h1.586l5 5l-3.293 3.293l1.414 1.414L27 32.414l3.293 3.293l1.414-1.414L28.414 31l3.293-3.293l-1.414-1.414L27 29.586l-3.605-3.605A4 4 0 0 0 23 18h-5a1 1 0 0 0-1 1zm6-9h-4v-4h4a2 2 0 1 1 0 4" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsPrescriptionDocumentOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPrisonerIcon],svg[healthicons-prisoner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16 7c.918 0 2.006-.2 3.301-.437l.253-.047C20.915 6.267 22.453 6 24 6c1.6 0 3.17.266 4.541.516l.374.069C30.162 6.814 31.177 7 32 7a1 1 0 0 1 1 1v10a9 9 0 1 1-18 0V8a1 1 0 0 1 1-1m8 18a7 7 0 0 0 7-7v-2.163c-.759-.071-1.578-.205-2.396-.34l-.403-.066C26.831 15.21 25.412 15 24 15c-1.355 0-2.736.209-4.106.431l-.308.05c-.871.143-1.755.288-2.586.36V18a7 7 0 0 0 7 7m4.604-12.884c.819.135 1.637.269 2.396.34v1.371c-.618-.066-1.316-.18-2.102-.308l-.376-.062C27.152 13.235 25.59 13 24 13c-1.536 0-3.065.236-4.427.457l-.257.042c-.855.14-1.624.265-2.316.334V12.46c.831-.072 1.715-.217 2.586-.36l.308-.05c1.37-.222 2.751-.431 4.106-.431c1.412 0 2.832.21 4.201.432zM23.47 29.005C31.077 28.87 42 31.642 42 36.04V42H6v-5.96c0-4.398 10.258-6.908 17.47-7.035M37.95 34c-.807-.453-1.817-.888-2.995-1.28c-3.454-1.15-7.86-1.779-11.45-1.716c-3.433.061-7.588.694-10.823 1.808c-1.068.368-1.982.77-2.717 1.188zM40 38v2H8v-2z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsPrisonerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPrisonerNegativeIcon],svg[healthicons-prisoner-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsPrisonerNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm42 40v-3.96c0-4.398-10.924-7.17-18.53-7.035C16.259 29.132 6 31.642 6 36.04V42h36zm-2-2v2H8v-2zm-2.05-4H9.966c.735-.419 1.649-.82 2.717-1.188c3.235-1.114 7.39-1.747 10.824-1.808c3.59-.063 7.995.566 11.45 1.716c1.177.392 2.187.827 2.995 1.28M33 8a1 1 0 0 0-1-1c-.823 0-1.838-.186-3.085-.415l-.374-.069C27.171 6.266 25.601 6 24 6c-1.547 0-3.085.267-4.446.516l-.253.047C18.006 6.8 16.918 7 16 7a1 1 0 0 0-1 1v10a9 9 0 1 0 18 0zm-9 17a7 7 0 0 0 7-7v-2.163c-.759-.071-1.578-.205-2.396-.34l-.403-.066C26.831 15.21 25.412 15 24 15c-1.355 0-2.736.209-4.106.431l-.308.05c-.872.143-1.755.288-2.586.36V18a7 7 0 0 0 7 7m4.898-11.481c.786.128 1.484.242 2.102.308v-1.371c-.759-.071-1.578-.205-2.396-.34l-.403-.065c-1.37-.223-2.789-.432-4.201-.432c-1.355 0-2.736.209-4.106.431l-.308.05c-.872.143-1.755.288-2.586.36v1.373c.692-.069 1.461-.194 2.316-.334l.257-.042C20.935 13.236 22.463 13 24 13c1.59 0 3.151.235 4.522.457z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsPrisonerNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsPrisonerNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPrisonerOutlineIcon],svg[healthicons-prisoner-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M19.301 6.563C18.006 6.8 16.918 7 16 7a1 1 0 0 0-1 1v10a9 9 0 1 0 18 0V8a1 1 0 0 0-1-1c-.823 0-1.838-.186-3.085-.415l-.374-.069C27.171 6.266 25.601 6 24 6c-1.547 0-3.085.267-4.446.516zm.302 1.978c-.872.16-1.763.324-2.603.406v1.505c.692-.069 1.461-.194 2.316-.334l.257-.042c1.362-.221 2.89-.457 4.427-.457c1.59 0 3.151.235 4.522.457l.376.062c.786.128 1.484.242 2.102.309V8.942c-.768-.08-1.594-.233-2.415-.384h-.002l-.401-.074C26.812 8.234 25.402 8 24 8c-1.343 0-2.716.233-4.086.484zM24 25a7 7 0 0 0 7-7v-2.163c-.759-.071-1.578-.205-2.396-.34l-.403-.066C26.831 15.21 25.412 15 24 15c-1.355 0-2.736.209-4.106.431l-.308.05c-.871.143-1.755.288-2.586.36V18a7 7 0 0 0 7 7m4.898-11.481c.786.128 1.484.242 2.102.308v-1.371c-.759-.071-1.578-.205-2.396-.34h-.001l-.402-.065c-1.37-.223-2.789-.432-4.201-.432c-1.355 0-2.736.209-4.106.431l-.308.05c-.871.143-1.755.288-2.586.36v1.373c.692-.069 1.461-.194 2.316-.334l.257-.042C20.935 13.236 22.463 13 24 13c1.59 0 3.151.235 4.522.457zM23.47 29.005C31.077 28.87 42 31.642 42 36.04V42H6v-5.96c0-4.398 10.258-6.908 17.47-7.035M39.999 36c-.016-.22-.175-.683-1.04-1.346A8.5 8.5 0 0 0 37.95 34H10v-.02q-.6.339-1.038.688c-.788.628-.946 1.079-.96 1.332zm-16.492-4.996c2.749-.048 5.976.31 8.888.996H15.543a39.6 39.6 0 0 1 7.963-.996M40 38v2H8v-2z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsPrisonerOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsProperRoofIcon],svg[healthicons-proper-roof-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24.707 6.293a1 1 0 0 0-1.414 0l-4.357 4.356C19.222 11.41 20.017 12 21 12s1.779-.591 2.064-1.35a1 1 0 0 1 1.872 0c.285.759 1.08 1.35 2.064 1.35s1.779-.591 2.064-1.35zm5.835 5.835C29.794 13.266 28.473 14 27 14a4.27 4.27 0 0 1-3-1.213A4.27 4.27 0 0 1 21 14c-1.473 0-2.794-.734-3.542-1.873l-5.989 5.99q.121.063.226.164c.44.426 1.112.719 1.892.719c1.507 0 2.471-1.027 2.471-2a1 1 0 1 1 2 0c0 .973.965 2 2.471 2S23 17.973 23 17a1 1 0 1 1 2 0c0 .973.964 2 2.471 2c1.506 0 2.47-1.027 2.47-2a1 1 0 1 1 2 0c0 .973.965 2 2.472 2c.78 0 1.451-.293 1.892-.72q.105-.099.226-.163zM7.293 22.293l2.824-2.824q.072.136.188.25c.83.802 2.007 1.281 3.282 1.281c1.344 0 2.627-.553 3.471-1.472c.844.919 2.127 1.472 3.471 1.472s2.627-.553 3.471-1.472c.844.919 2.127 1.472 3.471 1.472s2.627-.553 3.47-1.472c.845.919 2.128 1.472 3.472 1.472c1.276 0 2.452-.48 3.282-1.28a1 1 0 0 0 .188-.25l2.824 2.823A1 1 0 0 1 41 23c0 1.55-1.453 3-3.5 3c-1.11 0-2.018-.254-2.617-.663c-.562-.385-.883-.919-.883-1.67a1 1 0 1 0-2 0c0 .751-.321 1.285-.883 1.67c-.599.41-1.507.663-2.617.663s-2.018-.254-2.617-.663c-.562-.385-.883-.919-.883-1.67a1 1 0 1 0-2 0c0 .751-.321 1.285-.883 1.67c-.599.41-1.507.663-2.617.663s-2.018-.254-2.617-.663c-.562-.385-.883-.919-.883-1.67a1 1 0 1 0-2 0c0 .751-.321 1.285-.883 1.67c-.599.41-1.507.663-2.617.663C8.453 26 7 24.55 7 23a1 1 0 0 1 .293-.707M10.5 39.566V28c1.376 0 2.717-.308 3.747-1.013q.42-.287.753-.654q.333.368.753.654C16.783 27.692 18.124 28 19.5 28s2.717-.308 3.747-1.013q.42-.287.753-.654q.333.367.753.654C25.783 27.692 27.124 28 28.5 28s2.717-.308 3.747-1.013q.42-.287.753-.654q.333.367.753.654C34.783 27.692 36.124 28 37.5 28v11.566c0 .732-.543 1.15-.857 1.334c-.354.21-.795.355-1.226.464c-.878.223-2.007.362-3.083.453a61 61 0 0 1-4.233.182l-.074.001h-.026L28 41v-5.737c0-1.912-1.596-3.763-4-3.763s-4 1.85-4 3.763V42h-.101l-.276-.003a61 61 0 0 1-3.957-.18c-1.076-.09-2.205-.23-3.083-.453c-.431-.109-.872-.254-1.226-.464c-.314-.185-.857-.602-.857-1.334M28 41v1z"></svg:path>`,
})
export class HealthiconsProperRoofIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsProperRoofNegativeIcon],svg[healthicons-proper-roof-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsProperRoofNegative0)"><svg:path d="M28 41v1z"></svg:path><svg:path fill-rule="evenodd" d="M0 0h48v48H0zm23.293 6.293a1 1 0 0 1 1.414 0l4.357 4.356C28.779 11.41 27.984 12 27 12s-1.779-.591-2.064-1.35a1 1 0 0 0-1.872 0C22.779 11.408 21.984 12 21 12s-1.779-.591-2.064-1.35zM27 14c1.473 0 2.794-.734 3.542-1.873l5.989 5.99q-.121.063-.226.164c-.44.426-1.112.719-1.892.719c-1.507 0-2.471-1.027-2.471-2a1 1 0 1 0-2 0c0 .973-.965 2-2.471 2S25 17.973 25 17a1 1 0 1 0-2 0c0 .973-.964 2-2.471 2c-1.506 0-2.47-1.027-2.47-2a1 1 0 1 0-2 0c0 .973-.965 2-2.472 2c-.78 0-1.451-.293-1.892-.72a1 1 0 0 0-.226-.163l5.99-5.99C18.205 13.268 19.526 14 21 14a4.27 4.27 0 0 0 3-1.213A4.27 4.27 0 0 0 27 14m-16.883 5.47l-2.824 2.823A1 1 0 0 0 7 23c0 1.55 1.453 3 3.5 3c1.11 0 2.018-.254 2.617-.663c.562-.385.883-.919.883-1.67a1 1 0 1 1 2 0c0 .751.321 1.285.883 1.67c.599.41 1.507.663 2.617.663s2.018-.254 2.617-.663c.562-.385.883-.919.883-1.67a1 1 0 1 1 2 0c0 .751.321 1.285.883 1.67c.599.41 1.507.663 2.617.663s2.018-.254 2.617-.663c.562-.385.883-.919.883-1.67a1 1 0 1 1 2 0c0 .751.321 1.285.883 1.67c.599.41 1.507.663 2.617.663c2.047 0 3.5-1.45 3.5-3a1 1 0 0 0-.293-.707l-2.824-2.824a1 1 0 0 1-.188.25c-.83.802-2.007 1.281-3.282 1.281c-1.344 0-2.627-.553-3.471-1.472c-.844.919-2.127 1.472-3.471 1.472s-2.627-.553-3.471-1.472c-.844.919-2.127 1.472-3.471 1.472s-2.627-.553-3.47-1.472C16.213 20.447 14.93 21 13.586 21c-1.275 0-2.452-.48-3.282-1.28a1 1 0 0 1-.188-.25M10.5 28v11.566c0 .732.543 1.15.857 1.334c.354.21.795.355 1.226.464c.878.223 2.007.362 3.083.453a61 61 0 0 0 4.233.182l.074.001H20v-6.737c0-1.912 1.596-3.763 4-3.763s4 1.85 4 3.763V42h.101l.276-.003a61 61 0 0 0 3.957-.18c1.076-.09 2.205-.23 3.083-.453c.431-.109.872-.254 1.226-.464c.314-.185.857-.602.857-1.334V28c-1.376 0-2.717-.308-3.747-1.013a4.3 4.3 0 0 1-.753-.654a4.3 4.3 0 0 1-.753.654C31.217 27.692 29.876 28 28.5 28s-2.717-.308-3.747-1.013a4.3 4.3 0 0 1-.753-.654a4.3 4.3 0 0 1-.753.654C22.217 27.692 20.876 28 19.5 28s-2.717-.308-3.747-1.013a4.3 4.3 0 0 1-.753-.654a4.3 4.3 0 0 1-.753.654C13.217 27.692 11.876 28 10.5 28" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsProperRoofNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsProperRoofNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsProperRoofOutlineIcon],svg[healthicons-proper-roof-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M24.707 6.293a1 1 0 0 0-1.414 0l-16 16A1 1 0 0 0 7 23c0 1.214.658 2.236 1.572 2.921a5.4 5.4 0 0 0 1.928.898v12.747c0 .732.543 1.15.857 1.334c.354.21.795.355 1.226.464c.878.223 2.007.362 3.083.453a61 61 0 0 0 4.233.182l.074.001H21v-6.737c0-1.363 1.151-2.763 3-2.763s3 1.4 3 2.763V42h1.101l.276-.003a61 61 0 0 0 3.957-.18c1.076-.09 2.205-.23 3.083-.453c.431-.109.872-.254 1.226-.464c.314-.185.857-.602.857-1.334V26.819a5.4 5.4 0 0 0 1.928-.898C40.342 25.236 41 24.214 41 23a1 1 0 0 0-.293-.707zM28 41v1zm-8 0v1zm15.5-14.013c-1.035-.056-2.03-.289-2.828-.75A4 4 0 0 1 32 25.75c-.203.185-.43.349-.672.488c-.926.535-2.117.763-3.328.763s-2.402-.228-3.328-.763A4 4 0 0 1 24 25.75c-.203.185-.43.349-.672.488c-.926.535-2.117.763-3.328.763s-2.402-.228-3.328-.763A4 4 0 0 1 16 25.75c-.203.185-.43.349-.672.488c-.798.461-1.793.694-2.828.75V39.24c.127.055.315.119.573.184c.716.181 1.712.31 2.761.4a53 53 0 0 0 3.166.16v-4.722c0-2.462 2.04-4.763 5-4.763s5 2.301 5 4.763v4.723l.3-.008a53 53 0 0 0 2.866-.154c1.049-.088 2.045-.218 2.76-.398a4 4 0 0 0 .574-.185zm-17.828-2.482c-.487-.28-.672-.61-.672-1.005a1 1 0 1 0-2 0c0 .395-.185.724-.671 1.005c-.522.301-1.331.495-2.329.495c-.91 0-1.694-.278-2.228-.679c-.391-.293-.623-.627-.72-.96l2.9-2.899c.704.35 1.554.538 2.436.538c1.042 0 2.033-.262 2.795-.738q.212-.131.41-.295q.196.164.408.296c.762.475 1.753.737 2.795.737s2.033-.262 2.795-.738q.211-.131.41-.295q.196.164.408.296c.762.475 1.753.737 2.795.737s2.033-.262 2.795-.738q.211-.131.409-.295q.196.164.409.296c.762.475 1.753.737 2.795.737c.882 0 1.732-.188 2.436-.538l2.9 2.9c-.097.332-.328.666-.72.96c-.534.4-1.319.678-2.228.678c-.998 0-1.807-.194-2.328-.495c-.487-.28-.672-.61-.672-1.005a1 1 0 1 0-2 0c0 .395-.185.724-.672 1.005c-.521.301-1.33.495-2.328.495s-1.807-.194-2.328-.495c-.487-.28-.672-.61-.672-1.005a1 1 0 1 0-2 0c0 .395-.185.724-.672 1.005c-.521.301-1.33.495-2.328.495s-1.807-.194-2.328-.495m.745-10.508l-4.907 4.907c.265.06.56.096.878.096c.728 0 1.339-.186 1.736-.434c.412-.257.468-.483.468-.566a1 1 0 1 1 2 0c0 .082.057.309.468.566c.397.248 1.009.434 1.736.434s1.339-.186 1.736-.434c.412-.257.468-.483.468-.566a1 1 0 1 1 2 0c0 .082.056.309.468.566c.397.248 1.009.434 1.736.434s1.339-.186 1.736-.434c.412-.257.468-.483.468-.566a1 1 0 1 1 2 0c0 .082.056.309.468.566c.397.248 1.008.434 1.736.434c.318 0 .613-.035.878-.096l-4.907-4.907c-.67.94-1.84 1.503-3.083 1.503c-.935 0-1.829-.319-2.5-.877c-.67.558-1.565.877-2.5.877c-1.242 0-2.412-.562-3.083-1.503m1.466-1.466q.022.04.04.085c.185.444.76.884 1.577.884c.816 0 1.392-.44 1.577-.884a1 1 0 0 1 1.846 0c.185.444.76.884 1.577.884c.816 0 1.392-.44 1.577-.884a1 1 0 0 1 .04-.085L24 8.414zm15.788 26.617l-.013.01zm-23.342 0l.013.01z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsProperRoofOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsProstateIcon],svg[healthicons-prostate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M8 6c0 5.169 5.544 11.027 14.09 11.803l.91.083V31.5c-.003 2.059-.032 4.286-.357 6.047c-.174.945-.468 1.977-1.047 2.815c-.646.935-1.668 1.638-3.033 1.638c-1.136 0-2.285-.495-3.238-1.082c-1.005-.62-2.026-1.485-2.94-2.523C10.575 36.338 9 33.39 9 30.007c0-2.965.516-5.746 1.43-7.86c.456-1.053 1.05-2.032 1.811-2.777c.729-.713 1.702-1.29 2.878-1.35C9.59 15.504 6 10.787 6 6z"></svg:path><svg:path fill-rule="evenodd" d="M25.91 17.803C34.456 17.027 40 11.169 40 6h2c0 4.787-3.59 9.504-9.119 12.02c1.176.06 2.15.637 2.878 1.35c.761.745 1.355 1.724 1.81 2.778c.915 2.113 1.431 4.894 1.431 7.86c0 3.381-1.574 6.33-3.385 8.387c-.914 1.038-1.934 1.903-2.94 2.523c-.953.587-2.102 1.082-3.238 1.082c-1.365 0-2.387-.703-3.033-1.638c-.579-.838-.873-1.87-1.047-2.815c-.325-1.761-.354-3.988-.357-6.047V17.886zM37 30.008" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsProstateIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsProstate24pxIcon],svg[healthicons-prostate-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.25 3c0 2.049 1.123 3.755 2.745 4.921a9.2 9.2 0 0 0 2.02 1.089c-.548.03-1.08.139-1.502.378c-1.9 1.075-2.264 2.954-2.263 5.16C4.252 17.986 7.08 22 8.776 22c1.105 0 1.696-.573 2.264-1.72c.469-.948.162-7.382.042-9.906l-.012-.242a1 1 0 0 0-.117-.43a11 11 0 0 0 2.001.007a1 1 0 0 0-.115.426l-.011.239c-.122 2.524-.433 8.958.043 9.906c.574 1.147 1.173 1.72 2.293 1.72c1.718 0 4.584-4.013 4.586-7.453c.001-2.205-.368-4.084-2.293-5.16c-.417-.232-.938-.34-1.478-.375a9.2 9.2 0 0 0 2.026-1.09C19.627 6.754 20.75 5.048 20.75 3h-1.5c0 1.451-.787 2.745-2.12 3.704c-1.338.961-3.181 1.546-5.13 1.546s-3.792-.585-5.13-1.546C5.538 5.744 4.75 4.45 4.75 3z"></svg:path>`,
})
export class HealthiconsProstate24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsProstateCancerIcon],svg[healthicons-prostate-cancer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 6c0 5.169 5.544 11.027 14.09 11.803l.91.083V31.5c-.003 2.059-.032 4.286-.357 6.047c-.174.945-.468 1.977-1.047 2.815c-.646.935-1.668 1.638-3.033 1.638c-1.136 0-2.285-.495-3.238-1.082c-1.005-.62-2.026-1.485-2.94-2.523C10.575 36.338 9 33.39 9 30.007c0-2.965.516-5.746 1.43-7.86c.456-1.053 1.05-2.032 1.811-2.777c.729-.713 1.702-1.29 2.878-1.35C9.59 15.504 6 10.787 6 6zm17.91 11.803C34.456 17.027 40 11.169 40 6h2c0 4.787-3.59 9.504-9.119 12.02c1.176.06 2.15.637 2.878 1.35c.761.745 1.355 1.724 1.81 2.778c.915 2.113 1.431 4.894 1.431 7.86c0 3.381-1.574 6.33-3.385 8.387c-.914 1.038-1.934 1.903-2.94 2.522c-.953.587-2.102 1.083-3.238 1.083c-1.365 0-2.387-.703-3.033-1.638c-.579-.838-.873-1.87-1.047-2.815c-.325-1.761-.354-3.988-.357-6.047V17.886zM27 31c0 4.492.05 9 2.437 9c.482 0 1.076-.182 1.719-.518a2.78 2.78 0 0 1-1.602-1.169c-.627-.982-.423-2.12.43-2.678a5.3 5.3 0 0 1-.082-1.62c-.918-.726-1.24-1.913-.707-2.785c.533-.871 1.735-1.127 2.8-.642a5.3 5.3 0 0 1 1.48-.665c.106-1.015 1.026-1.716 2.185-1.606c.479.045.93.221 1.309.486c-.257-4.95-2.08-8.788-4.29-8.788h-.052c-1.608 0-5.627-.001-5.627 1.977z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsProstateCancerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsProstateCancerOutlineIcon],svg[healthicons-prostate-cancer-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22.09 17.803C13.545 17.027 8 11.169 8 6H6c0 4.787 3.59 9.504 9.119 12.02c-1.176.06-2.15.637-2.878 1.35c-.761.745-1.355 1.724-1.81 2.778C9.515 24.26 9 27.042 9 30.008c0 3.381 1.574 6.33 3.385 8.387c.914 1.038 1.935 1.903 2.94 2.522c.953.587 2.102 1.083 3.238 1.083c1.365 0 2.387-.703 3.033-1.638c.579-.838.873-1.87 1.047-2.815c.325-1.761.354-3.988.357-6.047V17.886zm-6.717 2.212c1.608 0 5.627-.001 5.627 1.977V31c0 4.492-.05 9-2.437 9S11 35.526 11 30.007c0-5.518 1.935-9.992 4.322-9.992zM40 6c0 5.169-5.544 11.027-14.09 11.803l-.91.083V31.5c.003 2.059.032 4.286.357 6.047c.174.945.468 1.977 1.047 2.815c.646.935 1.668 1.638 3.033 1.638c1.136 0 2.285-.496 3.238-1.083c1.006-.619 2.026-1.484 2.94-2.522C37.425 36.338 39 33.389 39 30.007c0-2.965-.516-5.746-1.43-7.86c-.456-1.053-1.05-2.032-1.811-2.777c-.729-.713-1.702-1.29-2.878-1.35C38.41 15.504 42 10.787 42 6zM27 21.992V31c0 4.492.05 9 2.437 9c.482 0 1.076-.182 1.719-.518a2.78 2.78 0 0 1-1.602-1.169c-.627-.982-.423-2.12.43-2.678a5.3 5.3 0 0 1-.082-1.62c-.918-.726-1.24-1.913-.707-2.785c.533-.871 1.735-1.127 2.8-.642a5.3 5.3 0 0 1 1.48-.665c.106-1.015 1.026-1.716 2.185-1.606c.479.045.93.221 1.309.486c-.257-4.95-2.08-8.788-4.29-8.788h-.052c-1.608 0-5.627-.001-5.627 1.977" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsProstateCancerOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsProstateOutlineIcon],svg[healthicons-prostate-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 6c0 5.169 5.544 11.027 14.09 11.803l.91.083V31.5c-.003 2.059-.032 4.286-.357 6.047c-.174.945-.468 1.977-1.047 2.815c-.646.935-1.668 1.638-3.033 1.638c-1.136 0-2.285-.496-3.238-1.083c-1.005-.619-2.026-1.484-2.94-2.522C10.575 36.338 9 33.389 9 30.007c0-2.965.516-5.746 1.43-7.86c.456-1.053 1.05-2.032 1.811-2.777c.729-.713 1.702-1.29 2.878-1.35C9.59 15.504 6 10.787 6 6zm13 15.992V31c0 4.492-.05 9-2.437 9S11 35.526 11 30.007c0-5.518 1.935-9.992 4.322-9.992h.051c1.608 0 5.627-.001 5.627 1.977m4.91-4.189C34.456 17.027 40 11.169 40 6h2c0 4.787-3.59 9.504-9.119 12.02c1.176.06 2.15.637 2.878 1.35c.761.745 1.355 1.724 1.81 2.778c.915 2.113 1.431 4.894 1.431 7.86c0 3.381-1.574 6.33-3.385 8.387c-.914 1.038-1.934 1.903-2.94 2.522c-.953.587-2.102 1.083-3.238 1.083c-1.365 0-2.387-.703-3.033-1.638c-.579-.838-.873-1.87-1.047-2.815c-.325-1.761-.354-3.988-.357-6.047V17.886zM27 31c0 4.492.05 9 2.437 9S37 35.526 37 30.007c0-5.518-1.935-9.992-4.322-9.992h-.051c-1.608 0-5.627-.001-5.627 1.977z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsProstateOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsProstateOutline24pxIcon],svg[healthicons-prostate-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.85 8.124C4.18 6.924 3 5.15 3 3h2c0 1.351.731 2.576 2.017 3.5C8.307 7.43 10.098 8 12 8s3.693-.571 4.983-1.5C18.27 5.577 19 4.352 19 3h2c0 2.149-1.18 3.924-2.85 5.124q-.136.099-.279.193q.18.073.35.168c2.288 1.277 2.63 3.536 2.63 5.636c-.002 1.836-.755 3.743-1.685 5.175c-.47.723-1.011 1.366-1.575 1.84c-.532.449-1.223.864-1.974.864c-.708 0-1.333-.189-1.869-.613c-.502-.4-.853-.95-1.142-1.526c-.139-.277-.197-.622-.232-.884c-.04-.3-.066-.657-.082-1.043a46 46 0 0 1-.016-2.7c.034-1.865.13-3.876.185-5.012l.008-.162l.005-.07a12 12 0 0 1-.931 0l.004.068l.008.165c.054 1.136.15 3.145.183 5.008c.018.977.018 1.93-.015 2.702a13 13 0 0 1-.081 1.042c-.034.262-.092.606-.228.881c-.286.576-.631 1.127-1.129 1.527c-.531.427-1.153.617-1.857.617c-.75 0-1.437-.42-1.962-.868c-.557-.475-1.092-1.119-1.555-1.841c-.918-1.432-1.66-3.337-1.661-5.17c-.001-2.095.334-4.354 2.597-5.633q.15-.086.309-.153a9 9 0 0 1-.307-.21M8.077 10c-.563-.002-.989.083-1.247.229c-1.245.704-1.582 1.916-1.581 3.891c0 1.342.565 2.877 1.344 4.091c.386.6.797 1.082 1.17 1.4c.186.159.346.263.472.324q.093.044.144.056a.2.2 0 0 0 .048.009c.316 0 .477-.074.604-.177c.16-.127.346-.366.58-.836l.002-.013a3 3 0 0 0 .045-.258c.028-.219.05-.512.066-.869c.03-.712.03-1.618.014-2.58a173 173 0 0 0-.182-4.953l-.007-.155A8 8 0 0 0 8.078 10m9.168.231c-.266-.148-.704-.234-1.278-.23a8.4 8.4 0 0 0-1.501.16l-.008.153c-.054 1.139-.15 3.123-.183 4.955c-.018.962-.017 1.867.014 2.578c.015.357.038.65.067.868a3 3 0 0 0 .047.269c.237.468.425.707.587.835c.132.105.3.181.626.181c.041 0 .276-.048.686-.393c.378-.32.796-.8 1.186-1.401c.79-1.215 1.36-2.747 1.361-4.086c.001-1.97-.338-3.182-1.604-3.889" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsProstateOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsProviderFstIcon],svg[healthicons-provider-fst-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6 7a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm25 25a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1zm-.609-3.023l-3.184-3.184l-1.414 1.414l3.184 3.184zm-8.714-8.714l3.977 3.977l-1.414 1.415l-3.977-3.978v4.218h-2v-7.632h7.632v2z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsProviderFstIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsProviderFst24pxIcon],svg[healthicons-provider-fst-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h6v6H2zm6.264 6.385h4.733v2h-1.239l1.656 1.583l-1.382 1.446l-1.765-1.687l.002 1.272l-2 .002zM14 12.586L16.414 15L15 16.414L12.586 14zM22 16h-6v6h6z"></svg:path>`,
})
export class HealthiconsProviderFst24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsProviderFstNegativeIcon],svg[healthicons-provider-fst-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsProviderFstNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM7 6a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1zm25 25a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1zm-4.793-5.207l3.184 3.184l-1.414 1.414l-3.184-3.184zm-1.553-1.553l-3.977-3.977h4.218v-2h-7.632v7.632h2v-4.218l3.977 3.977z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsProviderFstNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsProviderFstNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsProviderFstOutlineIcon],svg[healthicons-provider-fst-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 8v7h7V8zM7 6a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1zm26 27v7h7v-7zm-1-2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1zm-1.609-2.023l-3.184-3.184l-1.414 1.414l3.184 3.184zm-8.714-8.714l3.977 3.977l-1.414 1.415l-3.977-3.978v4.218h-2v-7.632h7.632v2z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsProviderFstOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsProviderFstOutline24pxIcon],svg[healthicons-provider-fst-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M2 2h6v6H2zm2 2v2h2V4zm12 12h6v6h-6zm2 2v2h2v-2z" clip-rule="evenodd"></svg:path><svg:path d="m8.264 8.385l.004 4.616l2-.002v-1.272l1.764 1.687l1.382-1.446l-1.656-1.583h1.24v-2zM14 12.586L12.586 14L15 16.414L16.414 15z"></svg:path></svg:g>`,
})
export class HealthiconsProviderFstOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPsychologyIcon],svg[healthicons-psychology-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M9 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h5.389V30.762C11.345 28.487 9 25.422 9 21.45c0-3.302 1.378-6.469 3.83-8.803S18.61 9 22.08 9a18.9 18.9 0 0 1 7.669 1.607a12 12 0 0 1 4.815 3.509a9.85 9.85 0 0 1 1.843 5.478c.01.45.004.876-.002 1.288c-.022 1.457-.04 2.74.691 4.256c0 0 2.164 1.947 1.88 3.509c-.286 1.562-3.104 1.992-3.104 1.992c0 8.409-10.7 4.9-10.7 4.9V42H39a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3z" clip-rule="evenodd"></svg:path><svg:path d="M26.27 22.455c.643 0 .439-.19.971-.543a3.27 3.27 0 0 0 1.828.53l2.066-.731a3.2 3.2 0 0 0 1.132-1.834c.15-.72.042-1.468-.306-2.119a3.26 3.26 0 0 0-1.609-1.459a3.1 3.1 0 0 0-1.128-1.765l-2.017-.687h-.227a3.24 3.24 0 0 0-1.893-1.277l-3.49-.237a3.26 3.26 0 0 0-1.925.829a3.28 3.28 0 0 0-2.507.418c-.52.33-.93.798-1.182 1.35l-1.644 1.132a3.07 3.07 0 0 0-.627 1.862c-.004.28.034.559.113.828a3.07 3.07 0 0 0 .216 4.044c.045.57.25 1.118.592 1.584a3.2 3.2 0 0 0 1.35 1.057c.622.38 1.15.89 1.542 1.495c.393.604.555 1.286.642 1.996h3.43v-3.314c-.001-.589.168-1.166.487-1.666s.498-.903 1.04-1.163a3.6 3.6 0 0 0 1.34-.873a3.26 3.26 0 0 0 1.805.543m6.064 2.795a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0"></svg:path><svg:path fill-rule="evenodd" d="M21.5 32.333h-3.333v-2H21.5zm0 3.334h-3.333v-2H21.5zm0 3.333h-3.333v-2H21.5z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsPsychologyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPsychologyNegativeIcon],svg[healthicons-psychology-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" fill-rule="evenodd" clip-path="url(#healthiconsPsychologyNegative0)" clip-rule="evenodd"><svg:path d="M48 0H0v48h48zM9 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3z"></svg:path><svg:path d="M36.404 20.882c-.022 1.457-.04 2.74.691 4.256c0 0 2.164 1.947 1.88 3.509c-.286 1.562-3.104 1.992-3.104 1.992c0 8.409-10.7 4.9-10.7 4.9V42.5h-4.757c-1.168.093-2 .072-3.188.041c-.747-.018-1.636-.041-2.837-.041V30.762C11.345 28.487 9 25.422 9 21.45c0-3.302 1.378-6.469 3.83-8.803S18.61 9 22.08 9a18.9 18.9 0 0 1 7.669 1.607a12 12 0 0 1 4.815 3.509a9.85 9.85 0 0 1 1.843 5.478c.01.45.004.876-.002 1.288m-9.53 1.351c-.13.146-.197.222-.605.222a3.26 3.26 0 0 1-1.805-.543a3.6 3.6 0 0 1-1.34.873c-.46.22-.659.544-.903.942l-.137.221c-.32.5-.488 1.077-.487 1.665v3.315h-3.43c-.087-.71-.249-1.392-.642-1.996a4.85 4.85 0 0 0-1.543-1.495a3.2 3.2 0 0 1-1.349-1.057a3.1 3.1 0 0 1-.592-1.584a3.07 3.07 0 0 1-.216-4.044a2.8 2.8 0 0 1-.113-.828a3.07 3.07 0 0 1 .627-1.862l1.643-1.133a3.15 3.15 0 0 1 1.183-1.35a3.28 3.28 0 0 1 2.508-.418a3.26 3.26 0 0 1 1.924-.828l3.49.237a3.24 3.24 0 0 1 1.893 1.277h.227l2.017.687c.572.446.97 1.069 1.128 1.765c.692.293 1.26.808 1.609 1.459c.348.651.457 1.4.306 2.119a3.2 3.2 0 0 1-1.132 1.834l-2.066.732a3.3 3.3 0 0 1-1.828-.53a1.7 1.7 0 0 0-.366.32m5.46 3.017a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0m-14.167 7.083H21.5v-2h-3.333zm3.333 3.334h-3.333v-2H21.5zM18.167 39H21.5v-2h-3.333z"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsPsychologyNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsPsychologyNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPsychologyOutlineIcon],svg[healthicons-psychology-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6 9a3 3 0 0 1 3-3h30a3 3 0 0 1 3 3v30a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3zm3-1h30a1 1 0 0 1 1 1v30a1 1 0 0 1-1 1H25.014v-6s.833.273 2 .46c.293.046.607.088.934.118c2.717.25 6.34-.27 6.34-4.824c0 0 2.442-.373 2.69-1.727c.247-1.353-1.629-3.04-1.629-3.04c-.634-1.315-.617-2.427-.599-3.69c.005-.357.01-.726.002-1.116a8.54 8.54 0 0 0-1.597-4.747a10.4 10.4 0 0 0-4.174-3.041A16.4 16.4 0 0 0 22.335 11c-3.006 0-5.89 1.137-8.015 3.16S11 18.928 11 21.79c0 3.443 2.033 6.099 4.67 8.07V40H9a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1m17.491 14.47c-.112.125-.171.19-.524.19a2.83 2.83 0 0 1-1.565-.47c-.324.334-.72.593-1.161.757c-.399.191-.57.472-.783.817l-.119.191a2.7 2.7 0 0 0-.422 1.444v2.872h-2.973a6 6 0 0 0-.093-.568l-.005-.022a3.4 3.4 0 0 0-.457-1.14a4.2 4.2 0 0 0-1.337-1.296a2.8 2.8 0 0 1-1.17-.916a2.7 2.7 0 0 1-.513-1.372a2.66 2.66 0 0 1-.187-3.505a2.4 2.4 0 0 1-.098-.718c-.002-.58.19-1.146.544-1.614l1.424-.981a2.73 2.73 0 0 1 1.024-1.17a2.84 2.84 0 0 1 2.174-.362a2.82 2.82 0 0 1 1.667-.718l3.025.205c.668.16 1.252.554 1.64 1.107h.197l1.748.595a2.7 2.7 0 0 1 .978 1.53c.6.254 1.092.7 1.394 1.264a2.7 2.7 0 0 1 .266 1.837a2.76 2.76 0 0 1-.981 1.59l-1.79.633l-.133-.001h-.014a2.84 2.84 0 0 1-1.438-.458c-.17.112-.253.205-.318.278m3.648 3.697a1.083 1.083 0 0 0 .308-2.122l-.012-.004a1.08 1.08 0 0 0-1.19.429l-.005.008a1.083 1.083 0 0 0 .898 1.69m-8.306 5.514h-2.888v-2h2.888zm-2.888 6.606h2.888v-2h-2.888zm2.888-3.328h-2.888v-2h2.888z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsPsychologyOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPulseOximeterIcon],svg[healthicons-pulse-oximeter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M26.447 21.066h6.51c-.084.319-.19.747-.3 1.262H29.09a2.525 2.525 0 0 0 0 5.05h2.998q-.005.622.028 1.262h-1.763a2.525 2.525 0 0 0 0 5.048h2.886q.285.65.662 1.263h-1.024a2.524 2.524 0 1 0 0 5.049H44l.013-27.344l-8.43-3.467a2.518 2.518 0 1 0-1.842 4.688l4.871 1.826c.183.069.329.18.435.314H26.774c.148.636.226 1.3.226 1.983a8.7 8.7 0 0 1-.553 3.066m-1.713-4.94a2.526 2.526 0 0 0-.355 4.694a6.72 6.72 0 0 0 .355-4.695"></svg:path><svg:path d="M4 12.5c0-.828.705-1.5 1.575-1.5H17.65c4.06 0 7.35 3.134 7.35 7s-3.29 7-7.35 7H5.575C4.705 25 4 24.328 4 23.5v-2.074a2 2 0 0 1 .41-1.213l.23-.3a2 2 0 0 0 .41-1.214V17.3a2 2 0 0 0-.41-1.213l-.23-.3A2 2 0 0 1 4 14.574zM22 18a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-12-2h4v4h-4zm-2-2h8v8H8z"></svg:path></svg:g>`,
})
export class HealthiconsPulseOximeterIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPulseOximeterAltIcon],svg[healthicons-pulse-oximeter-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M7 10a3 3 0 0 0-3 3v4.85a2 2 0 0 0 .383 1.176l1.234 1.698A2 2 0 0 1 6 21.9v4.2a2 2 0 0 1-.383 1.176l-1.234 1.698A2 2 0 0 0 4 30.15V35a3 3 0 0 0 3 3h23c7.732 0 14-6.268 14-14s-6.268-14-14-14zm5 6h18a8 8 0 1 1 0 16H12a1 1 0 0 1-1-1V17a1 1 0 0 1 1-1m-3 1a3 3 0 0 1 3-3h18c5.523 0 10 4.477 10 10s-4.477 10-10 10H12a3 3 0 0 1-3-3zm27 7a3 3 0 1 1-6 0a3 3 0 0 1 6 0m-21-6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2z"></svg:path><svg:path d="M14 23a4 4 0 1 1 8 0a4 4 0 0 1-8 0m4-2a2 2 0 1 0 0 4a2 2 0 0 0 0-4m7.172 3.853c.062.055.078.109.078.147c0 .04-.018.1-.092.159l-.022.017l-2.625 2.255A.75.75 0 0 0 23 28.75h3a.75.75 0 0 0 0-1.5h-.976l1.08-.928A1.7 1.7 0 0 0 26.75 25c0-1.047-.925-1.75-1.875-1.75h-.75c-.764 0-1.478.436-1.758 1.14a.75.75 0 0 0 1.394.554c.029-.073.148-.194.364-.194h.75c.131 0 .234.047.297.103"></svg:path></svg:g>`,
})
export class HealthiconsPulseOximeterAltIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPulseOximeterAltNegativeIcon],svg[healthicons-pulse-oximeter-alt-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsPulseOximeterAltNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM4 13a3 3 0 0 1 3-3h23c7.732 0 14 6.268 14 14s-6.268 14-14 14H7a3 3 0 0 1-3-3v-4.85a2 2 0 0 1 .383-1.176l1.234-1.698A2 2 0 0 0 6 26.1v-4.2a2 2 0 0 0-.383-1.176l-1.234-1.698A2 2 0 0 1 4 17.85zm26 3H12a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h18a8 8 0 1 0 0-16m-18-2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h18c5.523 0 10-4.477 10-10s-4.477-10-10-10zm21 13a3 3 0 1 0 0-6a3 3 0 0 0 0 6m-20-7a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H15a2 2 0 0 1-2-2zm1 3a4 4 0 1 1 8 0a4 4 0 0 1-8 0m4-2a2 2 0 1 0 0 4a2 2 0 0 0 0-4m7.25 4c0-.038-.016-.091-.078-.146a.45.45 0 0 0-.297-.104h-.75c-.216 0-.335.12-.364.194a.75.75 0 1 1-1.394-.554c.28-.704.994-1.14 1.758-1.14h.75c.95 0 1.875.703 1.875 1.75a1.7 1.7 0 0 1-.646 1.322l-1.08.928H26a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.489-1.319l2.625-2.255l.022-.017c.074-.06.092-.119.092-.159" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsPulseOximeterAltNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsPulseOximeterAltNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPulseOximeterAltOutlineIcon],svg[healthicons-pulse-oximeter-alt-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M30 12H7a1 1 0 0 0-1 1v4.85l1.235 1.698A4 4 0 0 1 8 21.9v4.2a4 4 0 0 1-.765 2.352L6 30.15V35a1 1 0 0 0 1 1h23c6.627 0 12-5.373 12-12s-5.373-12-12-12M7 10a3 3 0 0 0-3 3v4.85a2 2 0 0 0 .383 1.176l1.234 1.698A2 2 0 0 1 6 21.9v4.2a2 2 0 0 1-.383 1.176l-1.234 1.698A2 2 0 0 0 4 30.15V35a3 3 0 0 0 3 3h23c7.732 0 14-6.268 14-14s-6.268-14-14-14z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M30 16H13a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h17a8 8 0 1 0 0-16m-17-2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h17c5.523 0 10-4.477 10-10s-4.477-10-10-10z" clip-rule="evenodd"></svg:path><svg:path d="M36 24a3 3 0 1 1-6 0a3 3 0 0 1 6 0"></svg:path><svg:path fill-rule="evenodd" d="M14 20a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H16a2 2 0 0 1-2-2zm1 3a4 4 0 1 1 8 0a4 4 0 0 1-8 0m4-2a2 2 0 1 0 0 4a2 2 0 0 0 0-4m7.25 4c0-.038-.016-.091-.078-.146a.45.45 0 0 0-.297-.104h-.75c-.216 0-.335.12-.364.194a.75.75 0 1 1-1.394-.554c.28-.704.994-1.14 1.758-1.14h.75c.95 0 1.875.703 1.875 1.75a1.7 1.7 0 0 1-.646 1.322l-1.08.928H27a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.489-1.319l2.625-2.255l.022-.017c.074-.06.092-.119.092-.159" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsPulseOximeterAltOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPulseOximeterNegativeIcon],svg[healthicons-pulse-oximeter-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsPulseOximeterNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm26.447 21.066h6.51c-.084.319-.19.747-.3 1.262H29.09a2.524 2.524 0 1 0 0 5.05h2.998q-.005.622.028 1.262h-1.764a2.524 2.524 0 1 0 0 5.048h2.887q.285.65.662 1.263h-1.024a2.524 2.524 0 1 0 0 5.049H44l.013-27.344l-8.43-3.467a2.518 2.518 0 1 0-1.842 4.688l4.87 1.826c.184.069.33.18.436.314H26.774c.148.636.226 1.3.226 1.983a8.7 8.7 0 0 1-.553 3.066m-2.068-.246C23.24 23.282 20.656 25 17.65 25H5.575C4.705 25 4 24.328 4 23.5v-2.074a2 2 0 0 1 .41-1.213l.23-.3a2 2 0 0 0 .41-1.214V17.3a2 2 0 0 0-.41-1.213l-.23-.3A2 2 0 0 1 4 14.574V12.5c0-.828.705-1.5 1.575-1.5H17.65c3.378 0 6.223 2.17 7.084 5.125c.173.597.266 1.226.266 1.875a6.7 6.7 0 0 1-.621 2.82M20 20a2 2 0 1 0 0-4a2 2 0 0 0 0 4m-6-4h-4v4h4zm-6-2v8h8v-8z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsPulseOximeterNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsPulseOximeterNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPulseOximeterOutlineIcon],svg[healthicons-pulse-oximeter-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M6 14v1.574l.23.3a4 4 0 0 1 .82 2.427V19.7a4 4 0 0 1-.82 2.427l-.23.3V24h11.65c3.048 0 5.35-2.33 5.35-5s-2.302-5-5.35-5zm-.425-2C4.705 12 4 12.672 4 13.5v2.074a2 2 0 0 0 .41 1.214l.23.3a2 2 0 0 1 .41 1.213V19.7a2 2 0 0 1-.41 1.213l-.23.3A2 2 0 0 0 4 22.426V24.5c0 .828.705 1.5 1.575 1.5H17.65c4.06 0 7.35-3.134 7.35-7s-3.29-7-7.35-7z" clip-rule="evenodd"></svg:path><svg:path d="M22 19a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path><svg:path fill-rule="evenodd" d="M15 17h-5v4h5zm-7-2v8h9v-8zm15 6.038v2h4.06a3.824 3.824 0 0 0 1.308 5.056a3.827 3.827 0 0 0 2.96 6.252h.676A3.827 3.827 0 0 0 35.368 40h8.617v-2h-8.617a1.827 1.827 0 1 1 0-3.654h4.045v-2h-8.084a1.827 1.827 0 0 1 0-3.654h5.352v-2h-6.258a1.827 1.827 0 1 1 0-3.654h6.259v-2zm.5-3.654h15.812c2.184 0 2.787-3.003.772-3.846l-4.756-1.989a1.628 1.628 0 0 1 1.206-3.024L44 11.25V9.226l-6.754-2.57a3.63 3.63 0 0 0-3.8.77c-1.887 1.809-1.301 4.96 1.11 5.968l4.756 1.99H23.5z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsPulseOximeterOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPwidIcon],svg[healthicons-pwid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="m33 14.414l1.293 1.293l1.414-1.414l-4-4l-1.414 1.414L31.586 13L28.5 16.086l-2.793-2.793l-1.414 1.414L25.586 16l-5.879 5.879a3 3 0 0 0-.529 3.529l-1.31 1.31l-2.164-2.454l-7.377 7.765l4.124 2.886A6 6 0 0 0 15.89 36H31a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-.5v6h-3a3 3 0 0 1-3-3v-1.5h2V31a1 1 0 0 0 1 1h1v-4a2 2 0 0 0-2-2H34l-3 2h-9.464l-4 4h-2.122l5.179-5.178a3 3 0 0 0 3.528-.53L30 20.415l1.293 1.293l1.414-1.414l-2.793-2.793zm-9.021 6.022L27 17.414L28.586 19l-3.022 3.021zM16.475 33.06l-.06-.061h.12z" clip-rule="evenodd"></svg:path><svg:path d="m4 11l10.375 11.759l-7.705 8.11L4 29z"></svg:path></svg:g>`,
})
export class HealthiconsPwidIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPwidNegativeIcon],svg[healthicons-pwid-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsPwidNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM27.707 15.293L27 14.586l-1.293-1.293l-1.414 1.414L25.586 16l-5.879 5.879a3 3 0 0 0-.529 3.529l-1.31 1.31l-2.164-2.454l-7.377 7.765l4.124 2.886A6 6 0 0 0 15.89 36H31a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-.5v6h-3a3 3 0 0 1-3-3v-1.5h2V31a1 1 0 0 0 1 1h1v-4a2 2 0 0 0-2-2H34l-3 2h-9.464l-4 4h-2.122l5.179-5.178a3 3 0 0 0 3.528-.53L30 20.415l1.293 1.293l1.414-1.414L31.414 19l-.707-.707l-.793-.793L33 14.414l1.293 1.293l1.414-1.414l-4-4l-1.414 1.414L31.586 13L28.5 16.086zm-3.728 5.143L27 17.414L28.586 19l-3.022 3.021zM16.475 33.06l-.06-.061h.12zM4 11l10.375 11.759l-7.705 8.11L4 29z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsPwidNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsPwidNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPwidOutlineIcon],svg[healthicons-pwid-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M35.293 15.707L34 14.414L31.914 16.5l2.793 2.793l-1.414 1.414L32 19.414l-5.879 5.879a3 3 0 0 1-3.528.529L21.414 27h9.172l3-3H38a3 3 0 0 1 2.236 1H41a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3h-7a4 4 0 0 1-3.465-2h-15.05a7 7 0 0 1-4.95-2.05L7.47 30.884L6.223 32.19a1 1 0 0 1-1.446-1.38l1.278-1.34L4 27.414V12.477c0-1.434 1.82-2.05 2.692-.911l7.318 9.57l1.267-1.326a1 1 0 0 1 1.446 1.38l-1.483 1.555l2.954 3.863a1 1 0 0 0 .452.332l2.532-2.532a3 3 0 0 1 .53-3.53L27.585 15l-1.293-1.293l1.414-1.414l2.793 2.793L32.586 13l-1.293-1.293l1.414-1.414l4 4zM17.187 28.4a3 3 0 0 1-.582-.576l-2.763-3.614l-4.99 5.228l3.098 3.099A5 5 0 0 0 15.485 34H32a2 2 0 0 0 2 2h1a4.98 4.98 0 0 1-1-3v-2.6h1.346A3 3 0 0 1 35 29v-1h2v1a1 1 0 0 0 1 1h1v-3a1 1 0 0 0-1-1h-3.586l-3 3h-12l-2 2h-2.828zM29 16.414L30.586 18L28.5 20.086L26.914 18.5zm-16.388 6.187l-5.175 5.422L6 26.586V13.954zM42 35a1 1 0 0 1-1 1h-2a3 3 0 0 1-3-3v-1.764c.53.475 1.232.764 2 .764h3v-5a1 1 0 0 1 1 1zM25.5 19.914l-2.379 2.379a1 1 0 0 0 0 1.414l.172.172a1 1 0 0 0 1.414 0l2.379-2.379z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsPwidOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsQIcon],svg[healthicons-q-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10 24c0-7.732 6.268-14 14-14s14 6.268 14 14c0 3.145-1.037 6.047-2.787 8.384l2.201 2.202a2 2 0 1 1-2.828 2.828l-2.202-2.201A13.94 13.94 0 0 1 24 38c-7.732 0-14-6.268-14-14m22.343 5.515l-2.929-2.93a2 2 0 1 0-2.828 2.83l2.929 2.928A9.95 9.95 0 0 1 24 34c-5.523 0-10-4.477-10-10s4.477-10 10-10s10 4.477 10 10c0 2.038-.61 3.934-1.657 5.515" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsQIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsQNegativeIcon],svg[healthicons-q-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsQNegative0)"><svg:path d="m29.414 26.586l2.93 2.929A9.95 9.95 0 0 0 34 24c0-5.523-4.477-10-10-10s-10 4.477-10 10s4.477 10 10 10c2.038 0 3.934-.61 5.515-1.657l-2.93-2.929a2 2 0 1 1 2.83-2.828"></svg:path><svg:path fill-rule="evenodd" d="M48 0H0v48h48zM24 10c-7.732 0-14 6.268-14 14s6.268 14 14 14c3.145 0 6.047-1.037 8.384-2.787l2.202 2.201a2 2 0 1 0 2.828-2.828l-2.201-2.202A13.94 13.94 0 0 0 38 24c0-7.732-6.268-14-14-14" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsQNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsQNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsQOutlineIcon],svg[healthicons-q-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9 24c0-8.284 6.716-15 15-15s15 6.716 15 15c0 3.056-.915 5.9-2.485 8.272l1.606 1.607a3 3 0 1 1-4.242 4.242l-1.607-1.606A14.93 14.93 0 0 1 24 39c-8.284 0-15-6.716-15-15m15-13c-7.18 0-13 5.82-13 13s5.82 13 13 13c2.921 0 5.615-.962 7.785-2.588l.694-.52l2.814 2.815a1 1 0 0 0 1.414-1.414l-2.814-2.814l.52-.694A12.94 12.94 0 0 0 37 24c0-7.18-5.82-13-13-13m0 4a9 9 0 1 0 0 18c1.39 0 2.706-.315 3.88-.877l-2.001-2.002a3 3 0 1 1 4.242-4.242l2.002 2.001A9 9 0 0 0 33 24a9 9 0 0 0-9-9m-11 9c0-6.075 4.925-11 11-11s11 4.925 11 11c0 2.24-.67 4.327-1.823 6.067l-.676 1.02l-3.794-3.794a1 1 0 0 0-1.414 1.414l3.794 3.794l-1.02.676A10.95 10.95 0 0 1 24 35c-6.075 0-11-4.925-11-11" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsQOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsQrCodeIcon],svg[healthicons-qr-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M6 9a3 3 0 0 1 3-3h6v2H9a1 1 0 0 0-1 1v6H6zm7 6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zm1 13a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1zm0-2a1 1 0 1 1 0-2a1 1 0 0 1 0 2"></svg:path><svg:path d="M15 23a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0 0a1 1 0 1 1 2 0a1 1 0 0 1-2 0m3 3a1 1 0 1 1 0-2a1 1 0 0 1 0 2"></svg:path><svg:path d="M20 24a1 1 0 1 1 0 2a1 1 0 0 1 0-2m0 0a1 1 0 1 1 0-2a1 1 0 0 1 0 2m4 2a1 1 0 1 1 0-2a1 1 0 0 1 0 2"></svg:path><svg:path d="M25 27a1 1 0 1 0-2 0a1 1 0 1 0-1 1a1 1 0 1 0 0 2a1 1 0 0 0 0-2a1 1 0 0 0 1-1a1 1 0 1 0 2 0m0 0a1 1 0 1 1 2 0a1 1 0 0 1-2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0 0a1 1 0 1 1 2 0a1 1 0 0 1-2 0"></svg:path><svg:path d="M24 20a1 1 0 1 1 0 2a1 1 0 0 1 0-2m0-2a1 1 0 1 0-1-1a1 1 0 0 0-1-1a1 1 0 1 0 0-2a1 1 0 0 0 0 2a1 1 0 1 0 1 1a1 1 0 0 0 1 1"></svg:path><svg:path d="M24 18a1 1 0 1 1 0 2a1 1 0 0 1 0-2m-1 3a1 1 0 1 1-2 0a1 1 0 0 1 2 0m1 11a1 1 0 1 1 0-2a1 1 0 0 1 0 2"></svg:path><svg:path d="M23 33a1 1 0 1 1 2 0a1 1 0 0 1-2 0m0 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0m2-2a1 1 0 1 1 2 0a1 1 0 0 1-2 0m2-6a1 1 0 1 0 2 0a1 1 0 0 0-2 0m3-1a1 1 0 1 1 0-2a1 1 0 0 1 0 2"></svg:path><svg:path d="M32 24a1 1 0 1 1 0-2a1 1 0 0 1 0 2m0 0a1 1 0 1 1 0 2a1 1 0 0 1 0-2m-2 10a1 1 0 1 1 0-2a1 1 0 0 1 0 2"></svg:path><svg:path d="M31 33a1 1 0 1 1 2 0a1 1 0 0 1-2 0m-3-3a1 1 0 1 1 0-2a1 1 0 0 1 0 2"></svg:path><svg:path d="M30 30a1 1 0 1 1 0-2a1 1 0 0 1 0 2"></svg:path><svg:path d="M31 29a1 1 0 1 1 2 0a1 1 0 0 1-2 0m-4-14a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zM6 39a3 3 0 0 0 3 3h6v-2H9a1 1 0 0 1-1-1v-6H6zM42 9a3 3 0 0 0-3-3h-6v2h6a1 1 0 0 1 1 1v6h2zm0 30a3 3 0 0 1-3 3h-6v-2h6a1 1 0 0 0 1-1v-6h2z"></svg:path></svg:g>`,
})
export class HealthiconsQrCodeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsQrCodeOutlineIcon],svg[healthicons-qr-code-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M6 9a3 3 0 0 1 3-3h6v2H9a1 1 0 0 0-1 1v6H6z"></svg:path><svg:path fill-rule="evenodd" d="M14 14a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1zm1 2v2h2v-2zm-1 12a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1zm1 2v2h2v-2z" clip-rule="evenodd"></svg:path><svg:path d="M13 25a1 1 0 1 0 1-1a1 1 0 0 0 1-1a1 1 0 1 0 2 0a1 1 0 0 0-2 0a1 1 0 1 0-1 1a1 1 0 0 0-1 1m4 0a1 1 0 1 0 2 0a1 1 0 1 0 1-1a1 1 0 1 0 0-2a1 1 0 0 0 0 2a1 1 0 0 0-1 1a1 1 0 1 0-2 0"></svg:path><svg:path d="M23 25a1 1 0 0 0 1 1a1 1 0 0 0-1 1a1 1 0 1 0-1 1a1 1 0 1 0 0 2a1 1 0 0 0 0-2a1 1 0 0 0 1-1a1 1 0 1 0 2 0a1 1 0 1 0 2 0a1 1 0 0 0-2 0a1 1 0 0 0-1-1a1 1 0 1 0 0-2a1 1 0 0 0 1-1a1 1 0 1 0 2 0a1 1 0 0 0-2 0a1 1 0 0 0-1-1a1 1 0 1 0 0-2a1 1 0 1 0 0-2a1 1 0 1 0-1-1a1 1 0 0 0-1-1a1 1 0 1 0 0-2a1 1 0 0 0 0 2a1 1 0 1 0 1 1a1 1 0 0 0 1 1a1 1 0 1 0 0 2a1 1 0 0 0-1 1a1 1 0 1 0-2 0a1 1 0 0 0 2 0a1 1 0 0 0 1 1a1 1 0 1 0 0 2a1 1 0 0 0-1 1m0 6a1 1 0 0 0 1 1a1 1 0 0 0-1 1a1 1 0 1 0-2 0a1 1 0 0 0 2 0a1 1 0 1 0 1-1a1 1 0 0 0 1-1a1 1 0 1 0 2 0a1 1 0 0 0-2 0a1 1 0 1 0-2 0"></svg:path><svg:path d="M28 26a1 1 0 1 1 0-2a1 1 0 0 1 0 2m1-3a1 1 0 1 0 2 0a1 1 0 0 0 1 1a1 1 0 1 0 0 2a1 1 0 0 0 0-2a1 1 0 1 0-1-1a1 1 0 1 0-2 0m0 10a1 1 0 1 0 2 0a1 1 0 1 0 2 0a1 1 0 0 0-2 0a1 1 0 1 0-2 0m-2-4a1 1 0 1 0 2 0a1 1 0 1 0 2 0a1 1 0 1 0 2 0a1 1 0 0 0-2 0a1 1 0 1 0-2 0a1 1 0 1 0-2 0"></svg:path><svg:path fill-rule="evenodd" d="M27 15a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zm2 3v-2h2v2z" clip-rule="evenodd"></svg:path><svg:path d="M6 39a3 3 0 0 0 3 3h6v-2H9a1 1 0 0 1-1-1v-6H6zM42 9a3 3 0 0 0-3-3h-6v2h6a1 1 0 0 1 1 1v6h2zm0 30a3 3 0 0 1-3 3h-6v-2h6a1 1 0 0 0 1-1v-6h2z"></svg:path></svg:g>`,
})
export class HealthiconsQrCodeOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsQuestionIcon],svg[healthicons-question-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M37.5 16.845c0-3.974-1.532-7.09-4.005-9.2c-2.41-2.057-5.533-3.013-8.572-3.132c-5.822-.228-12.885 2.725-14.363 9.328a2.5 2.5 0 1 0 4.88 1.091c.722-3.23 4.66-5.604 9.287-5.423c2.186.086 4.15.769 5.522 1.94c1.308 1.115 2.251 2.815 2.251 5.396c0 2.549-1.272 4.226-3.128 5.41c-1.946 1.242-4.388 1.813-6.046 1.929A2.5 2.5 0 0 0 21 26.678V31a2.5 2.5 0 1 0 5 0v-2.151c1.91-.388 4.102-1.128 6.062-2.378c2.916-1.861 5.438-4.964 5.438-9.626M24 36a4 4 0 1 0 0 8a4 4 0 0 0 0-8"></svg:path><svg:path fill-rule="evenodd" d="M24 28.849a2 2 0 0 1 1.602-1.96c1.735-.353 3.68-1.017 5.384-2.104c2.495-1.593 4.514-4.126 4.514-7.94c0-3.418-1.297-5.966-3.303-7.679c-1.995-1.702-4.654-2.549-7.352-2.654c-2.574-.101-5.417.508-7.738 1.838c-2.295 1.315-4.003 3.28-4.595 5.927a.5.5 0 1 0 .976.219c1.02-4.558 6.182-7.187 11.317-6.985c2.529.099 4.956.892 6.742 2.416c1.774 1.513 2.953 3.779 2.953 6.918c0 3.388-1.766 5.638-4.052 7.097c-2.298 1.466-5.086 2.105-6.983 2.237a.5.5 0 0 0-.465.499V31a.5.5 0 1 0 1 0zM24 38a2 2 0 1 0 0 4a2 2 0 0 0 0-4m9.495-30.355c2.473 2.11 4.005 5.226 4.005 9.2c0 4.662-2.522 7.765-5.438 9.626c-1.96 1.25-4.151 1.99-6.062 2.378V31a2.5 2.5 0 0 1-5 0v-4.322a2.5 2.5 0 0 1 2.326-2.494c1.658-.116 4.1-.687 6.046-1.928c1.856-1.185 3.128-2.862 3.128-5.411c0-2.581-.943-4.28-2.25-5.397c-1.372-1.17-3.337-1.853-5.523-1.939c-4.628-.181-8.565 2.193-9.287 5.423a2.5 2.5 0 1 1-4.88-1.091c1.478-6.603 8.54-9.556 14.363-9.328c3.039.12 6.162 1.075 8.572 3.132M20 40a4 4 0 1 1 8 0a4 4 0 0 1-8 0" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsQuestionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsQuestion24pxIcon],svg[healthicons-question-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.8 8.4C7.8 6.672 9.517 5 12 5s4.2 1.672 4.2 3.4c0 1.664-1.697 3.37-4.53 3.4a1.08 1.08 0 0 0-1.07 1.08V15a1 1 0 0 0 2 0v-1.26c3.087-.373 5.6-2.463 5.6-5.34C18.2 5.268 15.261 3 12 3S5.8 5.268 5.8 8.4a1 1 0 1 0 2 0M13.5 19a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path>`,
})
export class HealthiconsQuestion24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsQuestionCircleIcon],svg[healthicons-question-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20m7.663-31.697C33.69 13.868 35 16.23 35 19.29c0 3.52-1.954 5.954-4.19 7.445c-1.527 1.02-3.258 1.66-4.81 1.994V30a2 2 0 1 1-4 0v-3a2 2 0 0 1 1.874-1.996c1.302-.082 3.2-.584 4.716-1.596C30.054 22.431 31 21.11 31 19.29c0-1.794-.714-2.997-1.782-3.822c-1.133-.875-2.776-1.396-4.614-1.461c-1.83-.065-3.673.33-5.103 1.08c-1.43.751-2.286 1.756-2.56 2.863a2 2 0 1 1-3.883-.96c.627-2.535 2.472-4.336 4.585-5.444c2.114-1.11 4.659-1.623 7.103-1.537c2.437.087 4.956.78 6.917 2.294M22 36a2 2 0 1 1 4 0a2 2 0 0 1-4 0" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsQuestionCircleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsQuestionCircle24pxIcon],svg[healthicons-question-circle-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-width="2" d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0ZM10.75 9.8c0-.162.284-.8 1.31-.8c1.024 0 1.308.638 1.308.8c0 .067-.206.784-1.527.8a2.06 2.06 0 0 0-2.036 2.06V14c0 .584.25 1.11.65 1.476a2 2 0 1 0 2.645.048a2 2 0 0 0 .683-1.231c1.928-.623 3.585-2.193 3.585-4.493c0-2.961-2.715-4.8-5.309-4.8S6.75 6.839 6.75 9.8a2 2 0 1 0 4 0Z"></svg:path>`,
})
export class HealthiconsQuestionCircle24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsQuestionCircleNegativeIcon],svg[healthicons-question-circle-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsQuestionCircleNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zm-4 24c0 11.046-8.954 20-20 20S4 35.046 4 24S12.954 4 24 4s20 8.954 20 20m-9-4.71c0-3.06-1.31-5.422-3.337-6.987c-1.96-1.515-4.48-2.207-6.917-2.294c-2.444-.086-4.99.428-7.103 1.537s-3.958 2.91-4.585 5.444a2 2 0 0 0 3.884.96c.273-1.107 1.128-2.112 2.559-2.862c1.43-.75 3.272-1.146 5.103-1.081c1.838.065 3.481.586 4.614 1.461C30.286 16.293 31 17.496 31 19.29c0 1.82-.946 3.14-2.41 4.118c-1.516 1.012-3.414 1.514-4.716 1.596A2 2 0 0 0 22 27v3a2 2 0 1 0 4 0v-1.27c1.552-.335 3.283-.975 4.81-1.995c2.236-1.49 4.19-3.923 4.19-7.445M24 34a2 2 0 1 0 0 4a2 2 0 0 0 0-4" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsQuestionCircleNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsQuestionCircleNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsQuestionCircleOutlineIcon],svg[healthicons-question-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M24 42c9.941 0 18-8.059 18-18S33.941 6 24 6S6 14.059 6 24s8.059 18 18 18m0 2c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20" clip-rule="evenodd"></svg:path><svg:path d="M31.663 12.303C33.69 13.868 35 16.23 35 19.29c0 3.52-1.954 5.954-4.19 7.445c-1.527 1.02-3.258 1.66-4.81 1.994V30a2 2 0 1 1-4 0v-3a2 2 0 0 1 1.874-1.996c1.302-.082 3.2-.584 4.716-1.596C30.054 22.431 31 21.11 31 19.29c0-1.794-.714-2.997-1.782-3.822c-1.133-.875-2.776-1.396-4.614-1.461c-1.83-.065-3.673.33-5.103 1.08c-1.43.751-2.286 1.756-2.56 2.863a2 2 0 1 1-3.883-.96c.627-2.535 2.472-4.336 4.585-5.444c2.114-1.11 4.659-1.623 7.103-1.537c2.437.087 4.956.78 6.917 2.294M22 36a2 2 0 1 1 4 0a2 2 0 0 1-4 0"></svg:path></svg:g>`,
})
export class HealthiconsQuestionCircleOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsQuestionCircleOutline24pxIcon],svg[healthicons-question-circle-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M13 17a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-3-7.2c0-.844.87-1.8 2.31-1.8c1.438 0 2.308.956 2.308 1.8c0 .787-.836 1.78-2.515 1.8a1.06 1.06 0 0 0-1.048 1.06V14a1 1 0 0 0 2 0v-.49c1.947-.355 3.563-1.74 3.563-3.71c0-2.249-2.092-3.8-4.309-3.8S8 7.551 8 9.8a1 1 0 1 0 2 0"></svg:path><svg:path fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsQuestionCircleOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsQuestionMarkIcon],svg[healthicons-question-mark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M24 14c2.222.017 4 1.811 4 4c0 2.2-1.795 4-4.032 4a2 2 0 0 0-2 2v6a2 2 0 1 0 4 0v-4.25C29.43 24.865 32 21.738 32 18c0-4.386-3.537-7.931-7.904-7.999L24.032 10h-.064l-.064.001C19.537 10.069 16 13.614 16 18a2 2 0 0 0 4 0c0-2.189 1.778-3.983 4-4m0 24a2 2 0 1 0 0-4a2 2 0 0 0 0 4" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsQuestionMarkIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsQuestionMarkNegativeIcon],svg[healthicons-question-mark-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsQuestionMarkNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM24 14c2.222.017 4 1.811 4 4c0 2.2-1.795 4-4.032 4a2 2 0 0 0-2 2v6a2 2 0 1 0 4 0v-4.25C29.43 24.865 32 21.738 32 18c0-4.386-3.537-7.931-7.904-7.999L24.032 10h-.064l-.064.001C19.537 10.069 16 13.614 16 18a2 2 0 1 0 4 0c0-2.189 1.778-3.983 4-4m0 24a2 2 0 1 0 0-4a2 2 0 0 0 0 4" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsQuestionMarkNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsQuestionMarkNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsQuestionMarkOutlineIcon],svg[healthicons-question-mark-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M24.119 9.001L24.032 9h-.064l-.087.001C18.977 9.081 15 13.065 15 18a3 3 0 0 0 6 0c0-1.632 1.326-2.983 3-3c1.674.017 3 1.368 3 3c0 1.642-1.343 3-3.032 3a3 3 0 0 0-3 3v4a3 3 0 0 0 6 0v-1.509C30.474 25.261 33 21.933 33 18c0-4.935-3.977-8.918-8.881-8.999M24.032 11h.048c3.828.06 6.92 3.167 6.92 7c0 3.266-2.245 6.006-5.28 6.78a1 1 0 0 0-.752.97V28a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1C26.753 23 29 20.756 29 18c0-2.742-2.226-4.978-4.992-5h-.016C21.226 13.021 19 15.258 19 18a1 1 0 1 1-2 0c0-3.833 3.093-6.94 6.92-7zM24 35a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-3 1a3 3 0 1 1 6 0a3 3 0 0 1-6 0" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsQuestionMarkOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsQuestionNegativeIcon],svg[healthicons-question-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsQuestionNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM33.495 7.645c2.473 2.11 4.005 5.226 4.005 9.2c0 4.662-2.522 7.765-5.438 9.626c-1.96 1.25-4.151 1.99-6.062 2.378v2.15a2.5 2.5 0 1 1-5 0v-4.321a2.5 2.5 0 0 1 2.326-2.494c1.658-.116 4.1-.687 6.046-1.928c1.856-1.185 3.128-2.862 3.128-5.411c0-2.581-.943-4.28-2.25-5.397c-1.372-1.17-3.337-1.853-5.523-1.939c-4.628-.181-8.565 2.193-9.287 5.423a2.5 2.5 0 1 1-4.88-1.091c1.478-6.603 8.54-9.556 14.363-9.328c3.039.12 6.162 1.075 8.572 3.132M20 40a4 4 0 1 1 8 0a4 4 0 0 1-8 0" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsQuestionNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsQuestionNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsQuestionOutlineIcon],svg[healthicons-question-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M24.5 29.253a2 2 0 0 1 1.562-1.951c1.694-.38 3.55-1.047 5.192-2.096C33.857 23.546 36 20.87 36 16.845c0-3.557-1.356-6.247-3.48-8.06c-2.097-1.79-4.872-2.664-7.656-2.773c-2.634-.103-5.586.52-8.01 1.906c-2.394 1.37-4.2 3.433-4.83 6.25a1 1 0 0 0 1.952.437c.943-4.215 5.785-6.792 10.81-6.595c2.443.096 4.755.862 6.437 2.297C32.879 11.721 34 13.844 34 16.845c0 3.175-1.64 5.283-3.821 6.675c-2.21 1.41-4.912 2.032-6.749 2.16a1 1 0 0 0-.93.998V32a1 1 0 1 0 2 0zm1.04 4.946c.59-.547.96-1.33.96-2.2v-2.746c1.863-.418 3.947-1.159 5.83-2.36c3.023-1.93 5.67-5.175 5.67-10.048c0-4.114-1.59-7.37-4.18-9.58c-2.515-2.146-5.754-3.13-8.878-3.252c-5.941-.233-13.317 2.778-14.87 9.718a3 3 0 1 0 5.856 1.31c.647-2.893 4.271-5.209 8.78-5.032c2.1.082 3.949.738 5.216 1.82C31.116 12.844 32 14.402 32 16.844c0 2.338-1.147 3.872-2.897 4.99c-1.858 1.185-4.213 1.738-5.812 1.85a3 3 0 0 0-2.791 2.993V32a2.996 2.996 0 0 0 3 3q.255 0 .5-.042a3 3 0 0 0 1.54-.759m.273 2.235a4 4 0 0 0-2.313-.403A3.996 3.996 0 0 0 20 40a4 4 0 1 0 5.813-3.567M24 38a2 2 0 1 0 0 4a2 2 0 0 0 0-4" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsQuestionOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsQuestionOutline24pxIcon],svg[healthicons-question-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.8 8.4C7.8 6.672 9.517 5 12 5s4.2 1.672 4.2 3.4c0 1.664-1.697 3.37-4.53 3.4a1.08 1.08 0 0 0-1.07 1.08V15a1 1 0 0 0 2 0v-1.26c3.087-.373 5.6-2.463 5.6-5.34C18.2 5.268 15.261 3 12 3S5.8 5.268 5.8 8.4a1 1 0 1 0 2 0M13.5 19a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path>`,
})
export class HealthiconsQuestionOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsQuestionTriangleIcon],svg[healthicons-question-triangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M23.1 6.849a1 1 0 0 1 1.8 0l16.4 33.714A1 1 0 0 1 40.402 42H7.598a1 1 0 0 1-.899-1.437zm4.591 15.133c1.03.684 1.807 1.793 1.807 3.28c0 1.578-.637 2.738-1.668 3.448a4.5 4.5 0 0 1-1.33.614V30.5a1.5 1.5 0 0 1-3 0v-2.441a1.5 1.5 0 0 1 1.4-1.497c.554-.037.974-.147 1.228-.322a.7.7 0 0 0 .24-.272c.06-.12.13-.334.13-.707c0-.312-.123-.552-.468-.782c-.392-.26-1.022-.453-1.779-.476c-.748-.024-1.475.122-2.01.381c-.536.26-.732.552-.788.767a1.5 1.5 0 1 1-2.905-.746c.344-1.341 1.347-2.218 2.385-2.72c1.04-.505 2.263-.718 3.413-.681c1.143.036 2.363.324 3.345.977M25 38a2 2 0 1 0 0-4a2 2 0 0 0 0 4" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsQuestionTriangleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsQuestionTriangle24pxIcon],svg[healthicons-question-triangle-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.063 21h15.835a1 1 0 0 0 .899-1.439l-8.144-16.67a1 1 0 0 0-1.807.02l-7.691 16.67A1 1 0 0 0 4.063 21m7.823-8.75c-.752 0-1.14.493-1.14.849a.75.75 0 0 1-1.5 0c0-1.41 1.304-2.349 2.64-2.349c1.335 0 2.64.94 2.64 2.349c0 1.187-.927 2.007-2.036 2.264v.134a.75.75 0 1 1-1.5 0v-.765c0-.44.357-.78.776-.784c.9-.011 1.26-.533 1.26-.85c0-.355-.389-.848-1.14-.848m.614 5.425a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsQuestionTriangle24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsQuestionTriangleNegativeIcon],svg[healthicons-question-triangle-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsQuestionTriangleNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM24.9 6.849a1 1 0 0 0-1.8 0L6.7 40.563A1 1 0 0 0 7.598 42H40.4a1 1 0 0 0 .9-1.437zm4.598 18.412c0-1.486-.777-2.595-1.807-3.28c-.982-.653-2.201-.94-3.344-.977c-1.151-.037-2.374.176-3.414.68c-1.038.503-2.04 1.38-2.385 2.721a1.5 1.5 0 0 0 2.905.746c.056-.215.252-.507.789-.767c.534-.259 1.26-.405 2.01-.381c.756.023 1.386.216 1.778.476c.345.23.468.47.468.782c0 .373-.07.588-.13.707a.7.7 0 0 1-.24.272c-.254.175-.674.285-1.228.322a1.5 1.5 0 0 0-1.4 1.497V30.5a1.5 1.5 0 0 0 3 0v-1.176a4.5 4.5 0 0 0 1.33-.614c1.03-.71 1.668-1.87 1.668-3.449M27 36a2 2 0 1 1-4 0a2 2 0 0 1 4 0" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsQuestionTriangleNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsQuestionTriangleNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsQuestionTriangleOutlineIcon],svg[healthicons-question-triangle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M24 6a1 1 0 0 1 .894.553l17 34A1 1 0 0 1 41 42H7a1 1 0 0 1-.894-1.447l17-34A1 1 0 0 1 24 6M8.618 40h30.764L24 9.236z"></svg:path><svg:path d="M25 35a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-3 1a3 3 0 1 1 6 0a3 3 0 0 1-6 0m-1.503-14.715c1.209-.587 2.596-.821 3.881-.78c1.272.04 2.688.36 3.867 1.144c1.256.835 2.252 2.233 2.252 4.112c0 1.877-.774 3.359-2.1 4.273a5.2 5.2 0 0 1-.959.52A2.5 2.5 0 0 1 22.5 30v-1.441a2.5 2.5 0 0 1 2.333-2.495c.23-.015.41-.045.54-.079q.07-.018.113-.035q.007-.046.01-.124l-.02-.014c-.196-.13-.63-.29-1.257-.31c-.614-.02-1.175.105-1.541.282a1 1 0 0 0-.272.174a2.5 2.5 0 0 1-4.827-1.302c.441-1.718 1.715-2.788 2.918-3.371m3.818 1.218c-1.017-.032-2.074.159-2.946.581c-.873.424-1.605 1.105-1.853 2.07a.5.5 0 1 0 .969.249c.15-.585.609-1.074 1.32-1.419c.703-.34 1.595-.51 2.478-.481c.886.028 1.712.252 2.3.644a2.1 2.1 0 0 1 .676.691c.178.309.238.627.238.923c0 .502-.095.874-.235 1.155c-.14.278-.335.487-.567.648c-.478.329-1.119.455-1.729.496a.5.5 0 0 0-.466.499V30a.5.5 0 1 0 1 0v-.176a1 1 0 0 1 .725-.962a3.5 3.5 0 0 0 1.037-.475c.736-.507 1.235-1.345 1.235-2.626c0-1.093-.556-1.912-1.36-2.447c-.785-.522-1.808-.778-2.822-.81"></svg:path></svg:g>`,
})
export class HealthiconsQuestionTriangleOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsQuestionTriangleOutline24pxIcon],svg[healthicons-question-triangle-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M11.905 12.5c-.622 0-.905.404-.905.65a.75.75 0 0 1-1.5 0c0-1.3 1.199-2.15 2.405-2.15s2.404.85 2.404 2.15c0 1.07-.812 1.804-1.782 2.055v.045a.75.75 0 0 1-1.5 0v-.67a.78.78 0 0 1 .771-.78c.758-.01 1.011-.443 1.011-.65c0-.246-.283-.65-.904-.65m.595 4.75a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0"></svg:path><svg:path fill-rule="evenodd" d="M19.898 21H4.063a1 1 0 0 1-.908-1.419l7.691-16.669a1 1 0 0 1 1.807-.02l8.144 16.67A1 1 0 0 1 19.898 21M5.625 19h12.672L11.78 5.662z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsQuestionTriangleOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRIcon],svg[healthicons-r-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 12a2 2 0 0 1 2-2h10a8 8 0 0 1 2.954 15.437l4.835 9.669a2 2 0 0 1-3.578 1.788L24.764 26H18v10a2 2 0 1 1-4 0zm4 10h8a4 4 0 0 0 0-8h-8z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsRIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRNegativeIcon],svg[healthicons-r-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsRNegative0)"><svg:path d="M26 22h-8v-8h8a4 4 0 0 1 0 8"></svg:path><svg:path fill-rule="evenodd" d="M48 0H0v48h48zM16 10a2 2 0 0 0-2 2v24a2 2 0 1 0 4 0V26h6.764l5.447 10.894a2 2 0 0 0 3.578-1.788l-4.835-9.67A8.003 8.003 0 0 0 26 10z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsRNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsRNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
