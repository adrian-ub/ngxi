import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phMagnetStraightThinIcon],svg[ph-magnet-straight-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 44h-40a12 12 0 0 0-12 12v88a20 20 0 0 1-40 0V56a12 12 0 0 0-12-12H56a12 12 0 0 0-12 12v88a84 84 0 0 0 84 84h.64c46-.34 83.36-38.47 83.36-85V56a12 12 0 0 0-12-12m-40 8h40a4 4 0 0 1 4 4v36h-48V56a4 4 0 0 1 4-4M56 52h40a4 4 0 0 1 4 4v36H52V56a4 4 0 0 1 4-4m72.58 168H128a76 76 0 0 1-76-76v-44h48v44a28 28 0 0 0 56 0v-44h48v43c0 42.15-33.83 76.69-75.42 77"></svg:path>`,
})
export class PhMagnetStraightThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
