import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsIconPackMixerIcon],svg[arcticons-icon-pack-mixer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 28.338c0 3.739.6 8.677 3.646 8.677c4.8 0 10.477-16.661 26.954-25.477"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.423 10.985c2.573 7.942 8.492 26.03 14.585 26.03c7.43 0 14.492-7.477 14.492-7.477"></svg:path>`,
})
export class ArcticonsIconPackMixerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
