import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageMusicCircleIcon],svg[mage-music-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:rect width="19" height="19" x="2.5" y="2.5" rx="9.5"></svg:rect><svg:path stroke-linecap="round" d="M9.667 17.5a2.333 2.333 0 1 0 0-4.667a2.333 2.333 0 0 0 0 4.667ZM12 15.167V6.5m0 0l3.7 1.053a1.33 1.33 0 0 1 .967 1.28v.56A1.334 1.334 0 0 1 15 10.68l-3-.847"></svg:path></svg:g>`,
})
export class MageMusicCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
