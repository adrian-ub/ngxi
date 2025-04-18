import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icons8ArrowsLongDownIcon],svg[icons8-arrows-long-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 4v20.063l-4.28-4.282l-1.44 1.407l6 6l.72.72l.72-.72l6-6l-1.44-1.406L17 24.063V4z"></svg:path>`,
})
export class Icons8ArrowsLongDownIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
