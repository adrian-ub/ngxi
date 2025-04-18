import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignMosque1FilledIcon],svg[tdesign-mosque-1-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.004 10.004V8h-2v.004H5v2z"></svg:path><svg:path fill="currentColor" d="m10 5.586l-4-4l-4 4V22h9.5v-7h7v7H22V9.996h-1.025C20.727 7.5 18.661 5.486 16 5.076V3.5h-2v1.576c-1.667.256-3.1 1.143-4 2.383zM7.996 20H4V6.414l2-2l2 2z"></svg:path><svg:path fill="currentColor" d="M13.5 17v5h3v-5z"></svg:path>`,
})
export class TdesignMosque1FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
