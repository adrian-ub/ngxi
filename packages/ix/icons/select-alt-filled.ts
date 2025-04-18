import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixSelectAltFilledIcon],svg[ix-select-alt-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m106.667 64l298.666 201.671l-115.905 40.035l66.066 110.419L298.28 448l-66.067-110.419l-93.883 76.841z"></svg:path>`,
})
export class IxSelectAltFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
