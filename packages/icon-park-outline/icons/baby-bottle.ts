import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineBabyBottleIcon],svg[icon-park-outline-baby-bottle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M36 20H12v24h24zM26 36h10m-10-8h10M8 20h32m-28-6h8.4V7.6C20.4 6.398 21.6 4 24 4s3.6 2.398 3.6 3.6V14H36"></svg:path>`,
})
export class IconParkOutlineBabyBottleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
