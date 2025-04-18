import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsPowerLightningIcon],svg[game-icons-power-lightning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M29.805 29.777L242.14 209.55H118.712l112.54 86.784H95.995l225.656 174.012l-81.537-116.05l66.487.143l179.185 138.175l-171.96-244.746h84.568L248.082 29.776z"></svg:path>`,
})
export class GameIconsPowerLightningIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
