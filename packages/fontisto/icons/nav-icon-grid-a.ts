import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoNavIconGridAIcon],svg[fontisto-nav-icon-grid-a-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 5.217a2.608 2.608 0 1 1 0-5.216a2.608 2.608 0 0 1 0 5.216m8.609 0a2.608 2.608 0 1 1 0-5.216a2.608 2.608 0 0 1 0 5.216m-18 0a2.608 2.608 0 1 1 0-5.216a2.608 2.608 0 0 1 0 5.216M12 14.608a2.608 2.608 0 1 1 0-5.216a2.608 2.608 0 0 1 0 5.216m8.609 0a2.608 2.608 0 1 1 0-5.216a2.608 2.608 0 0 1 0 5.216m-18 0a2.608 2.608 0 1 1 0-5.216a2.608 2.608 0 0 1 0 5.216M12 23.999a2.608 2.608 0 1 1 0-5.216A2.608 2.608 0 0 1 12 24zm8.609 0a2.608 2.608 0 1 1 0-5.216a2.608 2.608 0 0 1 0 5.216m-18 0a2.608 2.608 0 1 1 0-5.216a2.608 2.608 0 0 1 0 5.216"></svg:path>`,
})
export class FontistoNavIconGridAIcon {
  readonly viewBox = input("0 0 23 24")
  readonly width = input("0.96em")
  readonly height = input("1em")
}
