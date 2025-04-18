import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsStarOutlineIcon],svg[grommet-icons-star-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M12.606 16.805L12 16.343l-.606.462L5.755 21.1l2.381-6.35l.263-.701l-.599-.45L3 10h6.72l.229-.684L12 3.162l2.051 6.154l.228.684H21l-4.8 3.6l-.6.45l.264.701l2.38 6.35z"></svg:path>`,
})
export class GrommetIconsStarOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
