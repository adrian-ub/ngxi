import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsPaintbrushSolidIcon],svg[teenyicons-paintbrush-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.854.146a.5.5 0 0 1 .079.605l-3.841 6.634l-3.477-3.477L14.25.068a.5.5 0 0 1 .605.078M6.72 4.427l-1.97 1.14a.5.5 0 0 0-.104.787l4 4a.5.5 0 0 0 .787-.103l1.14-1.97zM.99 10.441a3.06 3.06 0 0 1 2.947-2.227H4a3 3 0 0 1 3 3v.053a2.947 2.947 0 0 1-2.947 2.947h-.08a2.6 2.6 0 0 1-1.115-.252a1.6 1.6 0 0 0-1.57.113l-.51.341a.5.5 0 0 1-.759-.553z"></svg:path>`,
})
export class TeenyiconsPaintbrushSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
