import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsHematologyIcon],svg[healthicons-hematology-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3zm15.018 28.993c4.48-.003 7.997-3.463 7.994-7.863C32.008 23.044 24 12.993 24 12.993s-7.992 9.75-7.988 14.15s3.526 7.854 8.006 7.85" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsHematologyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
