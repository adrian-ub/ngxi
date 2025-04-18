import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPaperPlaneOffIcon],svg[pepicons-pencil-paper-plane-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M.874 7.454L8.697 9.5l2.803 7.868a.5.5 0 0 0 .95-.026l4.746-16.085a.5.5 0 0 0-.655-.61L.826 6.502a.5.5 0 0 0 .048.952m1.783-.567l13.296-4.954l-4.027 13.652l-2.376-6.67a.5.5 0 0 0-.344-.315z" clip-rule="evenodd"></svg:path><svg:path d="m16 1.293l.707.707L9 9.707L8.293 9z"></svg:path><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPencilPaperPlaneOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
