import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotonePhoneIncomingIcon],svg[icon-park-twotone-phone-incoming-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTPhoneIncoming0"><svg:g fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="4"><svg:path fill="#555" d="M15.376 9.794a2 2 0 0 1 1.748 1.03l2.447 4.406a2 2 0 0 1 .04 1.866l-2.357 4.713s.683 3.512 3.542 6.37s6.358 3.53 6.358 3.53l4.713-2.357a2 2 0 0 1 1.866.041l4.42 2.457a2 2 0 0 1 1.027 1.748v5.074c0 2.583-2.4 4.45-4.847 3.623c-5.028-1.696-12.833-4.927-17.78-9.873c-4.947-4.947-8.177-12.752-9.874-17.78c-.826-2.448 1.04-4.848 3.624-4.848z"></svg:path><svg:path stroke-linecap="round" d="M29 20L42 7.5M42 20H29V7"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTPhoneIncoming0)"></svg:path>`,
})
export class IconParkTwotonePhoneIncomingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
