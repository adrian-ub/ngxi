import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsDOutlineIcon],svg[healthicons-d-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11 12a3 3 0 0 1 3-3h8c8.284 0 15 6.716 15 15s-6.716 15-15 15h-8a3 3 0 0 1-3-3zm3-1a1 1 0 0 0-1 1v24a1 1 0 0 0 1 1h8c7.18 0 13-5.82 13-13s-5.82-13-13-13zm1 3a1 1 0 0 1 1-1h6c6.075 0 11 4.925 11 11s-4.925 11-11 11h-6a1 1 0 0 1-1-1zm2 1v18h5a9 9 0 1 0 0-18z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsDOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
