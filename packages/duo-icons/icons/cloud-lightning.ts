import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[duoIconsCloudLightningIcon],svg[duo-icons-cloud-lightning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.132 13.004a1 1 0 0 1 1.788.888l-.052.104L11.723 16h2.105a1.1 1.1 0 0 1 1.006 1.545l-.051.1l-1.915 3.351a1 1 0 0 1-1.788-.888l.052-.104L12.277 18h-2.105a1.1 1.1 0 0 1-1.006-1.545l.051-.1z" class="duoicon-primary-layer"></svg:path><svg:path fill="currentColor" d="M11.5 2a6.5 6.5 0 0 1 6.086 4.212c4.455 1.225 5.913 6.814 2.624 10.059a6 6 0 0 1-3.397 1.674c.449-1.555-.41-3.198-1.894-3.751c.53-2.249-1.573-4.228-3.785-3.563a3 3 0 0 0-1.739 1.381l-1.914 3.35A3.06 3.06 0 0 0 7.273 18H7c-3.849.003-6.257-4.163-4.335-7.497A5 5 0 0 1 5 8.416A6.5 6.5 0 0 1 11.5 2" class="duoicon-secondary-layer" opacity=".3"></svg:path>`,
})
export class DuoIconsCloudLightningIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
