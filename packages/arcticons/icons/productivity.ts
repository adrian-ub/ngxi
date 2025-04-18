import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsProductivityIcon],svg[arcticons-productivity-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 5.5h37l-37 37h37Z"></svg:path>`,
})
export class ArcticonsProductivityIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
