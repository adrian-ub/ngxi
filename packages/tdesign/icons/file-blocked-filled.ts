import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFileBlockedFilledIcon],svg[tdesign-file-blocked-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 1H3v22h10.101A7 7 0 0 1 21 11.674V9h-8z"></svg:path><svg:path fill="currentColor" d="M21 7v-.414L15.414 1H15v6zm-3 5.5a5.5 5.5 0 1 0 0 11a5.5 5.5 0 0 0 0-11M14.5 18a3.5 3.5 0 0 1 5.165-3.08l-4.744 4.745A3.5 3.5 0 0 1 14.5 18m1.835 3.08l4.744-4.745a3.5 3.5 0 0 1-4.745 4.745"></svg:path>`,
})
export class TdesignFileBlockedFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
