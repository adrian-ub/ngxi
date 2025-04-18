import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignBuilding5FilledIcon],svg[tdesign-building-5-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.382 6.2L11.998.81L3.618 6.2l1.081 1.682l.3-.193v3.417l-3.374 2.062l1.043 1.707l.332-.203V22h8v-6h2v6h8v-7.328l.332.203l1.043-1.707L19 11.106V7.689l.3.193zM7 9.882v-3.48l4.998-3.214L17 6.403v3.48l-5-3.055z"></svg:path>`,
})
export class TdesignBuilding5FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
