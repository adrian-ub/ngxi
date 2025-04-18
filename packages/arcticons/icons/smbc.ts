import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSmbcIcon],svg[arcticons-smbc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m11 43.5l8.5-4l9-12l8.5-4v-19l-8.5 4l-9 12l-8.5 4zm8.5-23v19m9-31v19"></svg:path>`,
})
export class ArcticonsSmbcIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
