import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phAirplayDuotoneIcon],svg[ph-airplay-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 64v112a16 16 0 0 1-16 16h-52.57L128 160l-27.43 32H48a16 16 0 0 1-16-16V64a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M134.08 154.79a8 8 0 0 0-12.15 0l-48 56A8 8 0 0 0 80 224h96a8 8 0 0 0 6.07-13.21ZM97.39 208L128 172.29L158.61 208ZM232 64v112a24 24 0 0 1-24 24h-8a8 8 0 0 1 0-16h8a8 8 0 0 0 8-8V64a8 8 0 0 0-8-8H48a8 8 0 0 0-8 8v112a8 8 0 0 0 8 8h8a8 8 0 0 1 0 16h-8a24 24 0 0 1-24-24V64a24 24 0 0 1 24-24h160a24 24 0 0 1 24 24"></svg:path></svg:g>`,
})
export class PhAirplayDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
