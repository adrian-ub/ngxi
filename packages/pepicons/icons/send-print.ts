import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsSendPrintIcon],svg[pepicons-send-print-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M1.874 9.454a.5.5 0 0 1-.048-.952l15.715-5.855a.5.5 0 0 1 .654.61l-4.744 16.085a.5.5 0 0 1-.95.026L9.696 11.5L1.874 9.454Z" opacity=".8"></svg:path><svg:path fill-rule="evenodd" d="M.874 7.454L8.697 9.5l2.803 7.868a.5.5 0 0 0 .95-.026l4.745-16.085a.5.5 0 0 0-.654-.61L.826 6.502a.5.5 0 0 0 .048.952Zm1.783-.567l13.296-4.954l-4.027 13.652l-2.376-6.67a.5.5 0 0 0-.344-.315L2.657 6.887Z" clip-rule="evenodd"></svg:path><svg:path d="m16 1.293l.707.707L9 9.707L8.293 9L16 1.293Z"></svg:path></svg:g>`,
})
export class PepiconsSendPrintIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
