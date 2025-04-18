import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageStarSquareFillIcon],svg[mage-star-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#mageStarSquareFill0)"><svg:path fill="currentColor" d="M15.25 2h-6.5A6.76 6.76 0 0 0 2 8.75v6.53a6.76 6.76 0 0 0 6.75 6.75h6.5A6.75 6.75 0 0 0 22 15.28v-6.5A6.75 6.75 0 0 0 15.25 2m2.65 10.59a1 1 0 0 1-.48.34l-1.68.56a3.7 3.7 0 0 0-1.4.87a3.5 3.5 0 0 0-.86 1.4l-.58 1.67a.9.9 0 0 1-.35.47a1 1 0 0 1-.56.18a1 1 0 0 1-.56-.18a.93.93 0 0 1-.35-.48l-.56-1.69a3.59 3.59 0 0 0-2.26-2.26l-1.69-.55a1 1 0 0 1-.47-.36a.94.94 0 0 1 0-1.12a.92.92 0 0 1 .47-.34l1.68-.56a3.6 3.6 0 0 0 1.41-.88c.399-.383.7-.857.88-1.38l.56-1.66a1 1 0 0 1 .32-.48a1 1 0 0 1 .56-.2a1 1 0 0 1 .56.16c.17.109.3.27.37.46l.57 1.71a3.4 3.4 0 0 0 .87 1.41c.395.4.877.701 1.41.88l1.67.58a1 1 0 0 1 .48.35c.105.165.164.355.17.55a1 1 0 0 1-.18.55"></svg:path></svg:g><svg:defs><svg:clippath id="mageStarSquareFill0"><svg:path fill="#fff" d="M2 2h20v20H2z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class MageStarSquareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
