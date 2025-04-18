import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignMapRulerIcon],svg[tdesign-map-ruler-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.857.216l7.812 7.811L7.86 23.835L.05 16.023zm0 2.828l-2.184 2.184l1.602 1.603l-1.414 1.414l-1.602-1.602l-2.184 2.184l2.402 2.402l-1.415 1.414l-2.401-2.402l-2.184 2.184l1.602 1.602l-1.414 1.415l-1.603-1.603l-2.184 2.184l4.983 4.983l12.98-12.979z"></svg:path>`,
})
export class TdesignMapRulerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
