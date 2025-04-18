import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[humbleiconsBoxIcon],svg[humbleicons-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 21l7.794-4.5v-9M12 21l-7.794-4.5v-9M12 21v-9m7.794-4.5L12 3L4.206 7.5m15.588 0L12 12M4.206 7.5L12 12"></svg:path>`,
})
export class HumbleiconsBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
