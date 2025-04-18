import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTouchTheNotchIcon],svg[arcticons-touch-the-notch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m22.825 37.342l-.039-3.235l-2.31-2.497s.096-3.829-1.78-5.574c-1.878-1.746.894-1.228 1.316-.283c.423.944 1.749 1.21 1.987 3.154s.282-10.276.282-10.276s.854-1.673 2.013-.059l.19 7.376s.709-2.24 1.89-.104c0 0 1.16-1.542 2.092.134c0 0 1.616-.433 1.475 1.556c0 0 .153 3.377-.889 4.63c0 0-.846.774-.353 5.336"></svg:path><svg:circle cx="23.297" cy="15.147" r="1.183" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:rect width="39" height="27" x="4.5" y="10.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect>`,
})
export class ArcticonsTouchTheNotchIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
