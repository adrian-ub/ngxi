import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSimplethankyouIcon],svg[arcticons-simplethankyou-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 14.81C-.49 26.4 22.37 39.47 24 39.47c1.79 0 24.48-13.07 18.5-24.66c-2.63-4.46-9.5-11.56-18.5 0c-5.38-7.81-13.73-8.42-18.5 0"></svg:path>`,
})
export class ArcticonsSimplethankyouIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
