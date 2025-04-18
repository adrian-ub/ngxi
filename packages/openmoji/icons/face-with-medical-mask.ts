import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFaceWithMedicalMaskIcon],svg[openmoji-face-with-medical-mask-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="36" cy="36" r="24" fill="#FCEA2B"></svg:circle><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="m58.87 38.37l-14.28 13.6"></svg:path><svg:path fill="#fff" d="M40.55 55.13c-1.106.342-8.026.692-9.083.212c-9.386-4.261-9.325-11.73-10.13-16.94c2.693-1.103 26.93-.077 28.96-.106c-.535 9.32-2.022 11.1-9.751 16.84z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="m58.91 34.37l-8.4 4.853m-37.34-.853l13.96 13.6m-14-17.6l8.4 4.853"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:path d="M23.24 32.01s3.439-2.888 7.849-1.546M48.76 32.01s-3.439-2.888-7.849-1.546M58.91 33.52l-8.427 4.775"></svg:path><svg:path d="M58.23 30.14C55.642 20.298 46.69 13.03 36.04 13c-10.68-.025-19.68 7.237-22.29 17.1m.74 14.11C17.788 52.84 26.14 58.98 35.93 59c9.833.023 18.24-6.128 21.55-14.8"></svg:path><svg:path d="m21.52 38.4l28.96-.106c0 22.21-28.96 22.25-28.96.112zm37.44-1.05l-10.59 10.3M13.05 33.52l8.427 4.775M13 37.35l10.59 10.3"></svg:path></svg:g>`,
})
export class OpenmojiFaceWithMedicalMaskIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
