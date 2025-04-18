import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[systemUiconsRadioOnIcon],svg[system-uicons-radio-on-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="10.5" cy="10.5" r="8"></svg:circle><svg:circle cx="10.5" cy="10.5" r="5" fill="currentColor"></svg:circle></svg:g>`,
})
export class SystemUiconsRadioOnIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}
