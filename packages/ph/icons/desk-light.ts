import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phDeskLightIcon],svg[ph-desk-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 66H8a6 6 0 0 0 0 12h10v114a6 6 0 0 0 12 0v-50h196v50a6 6 0 0 0 12 0V78h10a6 6 0 0 0 0-12M30 78h92v52H30Zm196 52h-92V78h92ZM94 104a6 6 0 0 1-6 6H64a6 6 0 0 1 0-12h24a6 6 0 0 1 6 6m68 0a6 6 0 0 1 6-6h24a6 6 0 0 1 0 12h-24a6 6 0 0 1-6-6"></svg:path>`,
})
export class PhDeskLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
