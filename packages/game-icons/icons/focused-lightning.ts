import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsFocusedLightningIcon],svg[game-icons-focused-lightning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.594 18.125V104.5l210.094 181.78l-84.97 178.22l230.938-92.188l-39.875 117.032l94.47-35.813l67.594 44.533l-34.594-106.344l-59.75 27.5l76.75-168.25l-198.03 99.093l76.5-122.75L238.186 18.125H121.813L312.406 244.72L218.47 393.75l58.28-142.813L43.72 18.125H19.593z"></svg:path>`,
})
export class GameIconsFocusedLightningIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
