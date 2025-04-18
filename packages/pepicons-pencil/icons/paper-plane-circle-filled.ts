import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPaperPlaneCircleFilledIcon],svg[pepicons-pencil-paper-plane-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilPaperPlaneCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path fill-rule="evenodd" d="m3.874 10.454l7.823 2.046l2.803 7.868a.5.5 0 0 0 .95-.026l4.746-16.085a.5.5 0 0 0-.655-.61L3.826 9.502a.5.5 0 0 0 .048.952m1.783-.567l13.296-4.954l-4.027 13.652l-2.376-6.67a.5.5 0 0 0-.344-.315z" clip-rule="evenodd"></svg:path><svg:path d="m19 4.293l.707.707L12 12.707L11.293 12z"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilPaperPlaneCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilPaperPlaneCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
