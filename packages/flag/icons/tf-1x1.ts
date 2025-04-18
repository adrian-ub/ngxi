import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagTf1x1Icon],svg[flag-tf-1x1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="flagTf1x10" fill="#fff" d="m0-21l12.3 38L-20-6.5h40L-12.3 17z"></svg:path></svg:defs><svg:path fill="#002395" d="M0 0h512v512H0z"></svg:path><svg:path fill="#fff" d="M0 0h312.3v210H0z"></svg:path><svg:path fill="#002395" d="M0 0h102.4v204.8H0z"></svg:path><svg:path fill="#ed2939" d="M204.8 0h102.4v204.8H204.8z"></svg:path><svg:path fill="#fff" d="m282.4 234.2l16.5 26.3h46.9V352l-35.3-55l-47.3 75.5h23l24.4-43.5l49.9 89.6l49.9-89.6l24.3 43.5h23L410.5 297l-35.2 55v-50.6h21.1l15.7-25h-36.8v-16h46.9l16.5-26.2zm55 112h-51.2v18h51.2zm97.3 0h-51.2v18h51.2z"></svg:path><svg:use width="100%" height="100%" x="416" y="362" href="#flagTf1x10" transform="translate(-172)scale(1.28)"></svg:use><svg:use width="100%" height="100%" x="371" y="328" href="#flagTf1x10" transform="translate(-172)scale(1.28)"></svg:use><svg:use width="100%" height="100%" x="461" y="328" href="#flagTf1x10" transform="translate(-172)scale(1.28)"></svg:use><svg:use width="100%" height="100%" x="333" y="227" href="#flagTf1x10" transform="translate(-172)scale(1.28)"></svg:use><svg:use width="100%" height="100%" x="499" y="227" href="#flagTf1x10" transform="translate(-172)scale(1.28)"></svg:use>`,
})
export class FlagTf1x1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
