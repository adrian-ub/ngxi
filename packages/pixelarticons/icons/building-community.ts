import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsBuildingCommunityIcon],svg[pixelarticons-building-community-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2h2v20H2v-8h2v6h4v-4h2v4h4v-6h2v6h4V4H10v2H8V2zm-8 10h2v2h-2zm-2-2h2v2h-2zm-2 0V8h2v2zm-2 2v-2h2v2zm0 0H4v2h2zm10-6h2v2h-2zm-2 0h-2v2h2zm2 4h2v2h-2z"></svg:path>`,
})
export class PixelarticonsBuildingCommunityIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
