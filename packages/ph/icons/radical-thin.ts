import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phRadicalThinIcon],svg[ph-radical-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M244 80v24a4 4 0 0 1-8 0V84H130.77l-47 125.4a4 4 0 0 1-7.49 0l-48-128a4 4 0 1 1 7.49-2.81L80 196.61l44.26-118A4 4 0 0 1 128 76h112a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhRadicalThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
