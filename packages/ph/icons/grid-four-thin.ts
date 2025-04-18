import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phGridFourThinIcon],svg[ph-grid-four-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 44H56a12 12 0 0 0-12 12v144a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12m4 12v68h-72V52h68a4 4 0 0 1 4 4M56 52h68v72H52V56a4 4 0 0 1 4-4m-4 148v-68h72v72H56a4 4 0 0 1-4-4m148 4h-68v-72h72v68a4 4 0 0 1-4 4"></svg:path>`,
})
export class PhGridFourThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
