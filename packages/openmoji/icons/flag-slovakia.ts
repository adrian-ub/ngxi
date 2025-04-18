import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFlagSlovakiaIcon],svg[openmoji-flag-slovakia-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#d22f27" d="M5 17h62v38H5z"></svg:path><svg:path fill="#fff" d="M5 17h62v13H5z"></svg:path><svg:path fill="#1e50a0" d="M5 30h62v12H5z"></svg:path><svg:path fill="#d22f27" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M23.833 45s6.75-2.25 6.75-9v-9h-13.5v9c0 6.75 6.75 9 6.75 9"></svg:path><svg:path fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M23.833 29.5v12m-2-10h4m-5.5 3h7"></svg:path><svg:circle cx="23.833" cy="41.5" r="3.167" fill="#1e50a0"></svg:circle><svg:path fill="#1e50a0" d="M19.25 39.333a2.15 2.15 0 0 0-1.326.465a9.6 9.6 0 0 0 2.702 3.363a2.158 2.158 0 0 0-1.376-3.828m9.167 0a2.158 2.158 0 0 0-1.376 3.828a9.6 9.6 0 0 0 2.702-3.363a2.15 2.15 0 0 0-1.326-.465"></svg:path><svg:path fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M23.833 45s6.75-2.25 6.75-9v-9h-13.5v9c0 6.75 6.75 9 6.75 9"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h62v38H5z"></svg:path>`,
})
export class OpenmojiFlagSlovakiaIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
