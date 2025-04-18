import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPrintScissorsOffIcon],svg[pepicons-print-scissors-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M6.5 19.5a3 3 0 0 0 2.435-4.753a.75.75 0 0 0 .595-.217l1.72-1.72l5.72 5.72a.75.75 0 1 0 1.06-1.06l-5.72-5.72l5.72-5.72a.75.75 0 0 0-1.06-1.06l-5.72 5.72l-1.72-1.72a.75.75 0 0 0-.316-.19a3 3 0 1 0-.869 1.085a.8.8 0 0 0 .125.165l1.72 1.72l-1.72 1.72a.75.75 0 0 0-.217.595A3 3 0 1 0 6.5 19.5" clip-rule="evenodd" opacity=".2"></svg:path><svg:path fill-rule="evenodd" d="M5.5 8.5a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0-5a2 2 0 1 1 0 4a2 2 0 0 1 0-4m0 15a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0-5a2 2 0 1 1 0 4a2 2 0 0 1 0-4" clip-rule="evenodd"></svg:path><svg:path d="M16.978 15.782a.5.5 0 0 1-.697.718L7.405 7.873a.5.5 0 1 1 .697-.717z"></svg:path><svg:path d="M7.146 13.146a.5.5 0 0 0 .708.708l9-9a.5.5 0 0 0-.708-.708z"></svg:path><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPrintScissorsOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
