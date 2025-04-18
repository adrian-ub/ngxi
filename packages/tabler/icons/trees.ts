import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerTreesIcon],svg[tabler-trees-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m16 5l3 3l-2 1l4 4l-3 1l4 4h-9m2 3v-3m-7-5l-2-2m2 1l2-2M8 21V8m-2.176 8a3 3 0 0 1-2.743-3.69a3 3 0 0 1 .304-4.833A3 3 0 0 1 8 3.77a3 3 0 0 1 4.614 3.707a3 3 0 0 1 .305 4.833A3 3 0 0 1 10 16.005H6z"></svg:path>`,
})
export class TablerTreesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
