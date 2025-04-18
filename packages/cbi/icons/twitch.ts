import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiTwitchIcon],svg[cbi-twitch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.97 1L1.493 4.776V20.21h5.254V23h2.956l2.79-2.791h4.27l5.746-5.746V1Zm17.568 12.478l-3.285 3.283H12l-2.791 2.791v-2.791H4.776V2.97h15.76v10.508Zm-3.285-6.732v5.746h-1.97V6.746Zm-5.254 0v5.746h-1.97V6.746Z"></svg:path>`,
})
export class CbiTwitchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
