import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laKickstarterKIcon],svg[la-kickstarter-k-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 5a3 3 0 0 0-3 3v16a3 3 0 1 0 6 0v-4.586l5.742 6.563A3 3 0 0 0 22.002 27a2.999 2.999 0 0 0 2.256-4.975l-5.399-6.17L23.4 9.801a3.001 3.001 0 0 0-4.8-3.602L14 12.334V8a3 3 0 0 0-3-3"></svg:path>`,
})
export class LaKickstarterKIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
