import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsTombstoneIcon],svg[game-icons-tombstone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 46c-81.822 0-150 63.366-150 150v150c0 6.668-.757 23.558 0 30h300c.757-6.442 0-23.332 0-30V196c0-86.634-68.178-150-150-150M16 406v60h480v-60z"></svg:path>`,
})
export class GameIconsTombstoneIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
