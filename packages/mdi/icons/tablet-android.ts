import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiTabletAndroidIcon],svg[mdi-tablet-android-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.25 19H4.75V3h14.5M14 22h-4v-1h4m4-21H6a3 3 0 0 0-3 3v18a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3Z"></svg:path>`,
})
export class MdiTabletAndroidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
