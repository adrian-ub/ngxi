import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiLighterIcon],svg[openmoji-lighter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#EA5A47" d="M45 66H27V28h9l9-3z"></svg:path><svg:path fill="#D22F27" d="m33 66l12-33v33z"></svg:path><svg:path fill="#D0CFCE" d="M45 25v11H27v-8h9zm-9 3v7"></svg:path><svg:path fill="#F1B31C" d="M35 17.714C35 20.857 33.21 25 31 25s-4-4.143-4-7.286C27 11.887 31 9 31 6c0 3 4 5.429 4 11.714"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:path d="M45 66H27V28h9l9-3zM35 17.714C35 20.857 33.21 25 31 25s-4-4.143-4-7.286C27 11.887 31 9 31 6c0 3 4 5.429 4 11.714"></svg:path><svg:path d="M35 17.714C35 20.857 33.21 25 31 25s-4-4.143-4-7.286C27 11.887 31 9 31 6c0 3 4 5.429 4 11.714M27 35h18m-9-7v3"></svg:path></svg:g>`,
})
export class OpenmojiLighterIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
