import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riTakeawayFillIcon],svg[ri-takeaway-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 1a1 1 0 0 1 1 1v.999L22 3v6l-2.02-.001l2.767 7.596a4 4 0 1 1-7.62 2.406h-4.253a4.002 4.002 0 0 1-7.8-.229A2 2 0 0 1 2 17v-5h9a1 1 0 0 0 .883.993L12 13h2a1 1 0 0 0 .993-.883L15 12V3h-3V1zM7 16a2 2 0 1 0 0 4a2 2 0 0 0 0-4m12 0a2 2 0 1 0 0 4a2 2 0 0 0 0-4M10 3a1 1 0 0 1 1 1v7H2V4a1 1 0 0 1 1-1zm10 2h-3v2h3zM9 5H4v1h5z"></svg:path>`,
})
export class RiTakeawayFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
