import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsVolkskrantIcon],svg[arcticons-volkskrant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m39.431 5.5l-15.417 37l-15.417-37m19.594 26.976L16.951 5.5m18.882 0H42m-37 0h15.548"></svg:path>`,
})
export class ArcticonsVolkskrantIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
