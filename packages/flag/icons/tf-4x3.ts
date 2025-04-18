import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagTf4x3Icon],svg[flag-tf-4x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="flagTf4x30" fill="#fff" d="m0-21l12.3 38L-20-6.5h40L-12.3 17z"></svg:path></svg:defs><svg:path fill="#002395" d="M0 0h640v480H0z"></svg:path><svg:path fill="#fff" d="M0 0h292.8v196.8H0z"></svg:path><svg:path fill="#002395" d="M0 0h96v192H0z"></svg:path><svg:path fill="#ed2939" d="M192 0h96v192h-96z"></svg:path><svg:path fill="#fff" d="m426 219.6l15.4 24.6h44V330l-33-51.6l-44.4 70.8h21.6l22.8-40.8l46.8 84l46.8-84l22.8 40.8h21.6L546 278.4L513 330v-47.4h19.8l14.7-23.4H513v-15h44l15.4-24.6zm51.6 105h-48v16.8h48zm91.2 0h-48v16.8h48z"></svg:path><svg:use width="100%" height="100%" x="416" y="362" href="#flagTf4x30" transform="scale(1.2)"></svg:use><svg:use width="100%" height="100%" x="371" y="328" href="#flagTf4x30" transform="scale(1.2)"></svg:use><svg:use width="100%" height="100%" x="461" y="328" href="#flagTf4x30" transform="scale(1.2)"></svg:use><svg:use width="100%" height="100%" x="333" y="227" href="#flagTf4x30" transform="scale(1.2)"></svg:use><svg:use width="100%" height="100%" x="499" y="227" href="#flagTf4x30" transform="scale(1.2)"></svg:use>`,
})
export class FlagTf4x3Icon {
  readonly viewBox = input("0 0 640 480")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
