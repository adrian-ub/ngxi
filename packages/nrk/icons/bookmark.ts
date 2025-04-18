import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkBookmarkIcon],svg[nrk-bookmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m12 17.542l1.163.83L17 21.115V3H7v18.114l3.838-2.741zm-7 4.729l1.894 1.376l.106-.076L12 20l5 3.571l.108.078L19 22.274V1H5z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M17 7H7V5h10z" clip-rule="evenodd"></svg:path>`,
})
export class NrkBookmarkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
