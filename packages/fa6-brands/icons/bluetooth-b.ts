import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6BrandsBluetoothBIcon],svg[fa6-brands-bluetooth-b-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m196.48 260.023l92.626-103.333L143.125 0v206.33l-86.111-86.111l-31.406 31.405l108.061 108.399L25.608 368.422l31.406 31.405l86.111-86.111L145.84 512l148.552-148.644zm40.86-102.996l-49.977 49.978l-.338-100.295zM187.363 313.04l49.977 49.978l-50.315 50.316z"></svg:path>`,
})
export class Fa6BrandsBluetoothBIcon {
  readonly viewBox = input("0 0 320 512")
  readonly width = input("0.63em")
  readonly height = input("1em")
}
