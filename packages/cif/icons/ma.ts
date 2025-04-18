import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cifMaIcon],svg[cif-ma-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#C1272D" d="M.5.5h300v200H.5z"></svg:path><svg:path fill="#006233" d="m150.49 67.166l-7.479 23.094l-24.26.021l19.615 14.271l-7.479 23.115a5499 5499 0 0 1 19.615-14.271l19.635 14.26l-7.5-23.094l19.615-14.292h-24.24zm0 15.813l2.385 7.281l-4.75.01zm-9.073 12.167l-1.458 4.531l-6.198-4.51zm5.125 0h7.917l2.448 7.542l-6.406 4.667l-6.406-4.667zm13.042 0h7.646l-6.177 4.531zm-17.073 12.437l3.854 2.781l-6.198 4.51zm16 0l2.344 7.292l-6.188-4.5v-.01z"></svg:path></svg:g>`,
})
export class CifMaIcon {
  readonly viewBox = input("0 0 301 201")
  readonly width = input("1.5em")
  readonly height = input("1em")
}
