import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phIdentificationBadgeFillIcon],svg[ph-identification-badge-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16M96 48h64a8 8 0 0 1 0 16H96a8 8 0 0 1 0-16m84.81 150.4a8 8 0 0 1-11.21-1.6a52 52 0 0 0-83.2 0a8 8 0 1 1-12.8-9.6a67.9 67.9 0 0 1 27.4-21.69a40 40 0 1 1 53.94 0a67.9 67.9 0 0 1 27.46 21.69a8 8 0 0 1-1.59 11.2M152 136a24 24 0 1 1-24-24a24 24 0 0 1 24 24"></svg:path>`,
})
export class PhIdentificationBadgeFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
