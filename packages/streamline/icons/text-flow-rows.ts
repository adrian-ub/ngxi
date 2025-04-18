import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineTextFlowRowsIcon],svg[streamline-text-flow-rows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.948.5H4.14v3.192H.948zm0 9.344H4.14v3.192H.948zM9.857.5h3.192v3.192H9.857zm1.136 8.88l2.06 2.06l-2.06 2.06m2.059-2.062H4.14m5.717-9.344h-5.72M10.27 3.71L4.138 9.84"></svg:path>`,
})
export class StreamlineTextFlowRowsIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
