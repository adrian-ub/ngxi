import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTabletkiuaIcon],svg[arcticons-tabletkiua-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="31.184" cy="24" r="12.316"></svg:circle><svg:path d="M31.184 36.316V11.684"></svg:path></svg:g><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.005 34.002c-4.813 3.468-11.567 3.037-15.898-1.294c-4.81-4.81-4.81-12.607 0-17.417c4.331-4.33 11.085-4.762 15.899-1.293m-4.927 12.265L8.106 15.29"></svg:path>`,
})
export class ArcticonsTabletkiuaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
