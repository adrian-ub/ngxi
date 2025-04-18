import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBankmillenniumIcon],svg[arcticons-bankmillennium-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.951 5.5c6.273.786 8.011 6.101 8.863 8.007L25.822 40.37l11.626-27.614l5.6 29.743"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.158 42.5s6.568-29.196 4.813-32.657"></svg:path>`,
})
export class ArcticonsBankmillenniumIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
