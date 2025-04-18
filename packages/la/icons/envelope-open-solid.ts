import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laEnvelopeOpenSolidIcon],svg[la-envelope-open-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 3l-.531.344l-12 7.812L3 11.47V29h26V11.469l-.469-.313l-12-7.812zm0 2.375L26.188 12L16 18.594L5.812 12zM5 13.844l10.469 6.781l.531.344l.531-.344L27 13.844V27H5z"></svg:path>`,
})
export class LaEnvelopeOpenSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
