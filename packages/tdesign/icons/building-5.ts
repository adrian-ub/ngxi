import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignBuilding5Icon],svg[tdesign-building-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.998.811l8.384 5.388L19.3 7.882l-.3-.193v3.417l3.375 2.062l-1.043 1.707l-.332-.203V22H3v-7.328l-.332.203l-1.043-1.707L5 11.106V7.689l-.3.193L3.617 6.2zM7 6.403v3.48l5-3.055l5 3.055v-3.48L11.998 3.19zM5 13.45V20h6v-4h2v4h6v-6.55l-7-4.278z"></svg:path>`,
})
export class TdesignBuilding5Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
