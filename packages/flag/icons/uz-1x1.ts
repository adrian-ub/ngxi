import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagUz1x1Icon],svg[flag-uz-1x1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#1eb53a" d="M0 341.3h512V512H0z"></svg:path><svg:path fill="#0099b5" d="M0 0h512v170.7H0z"></svg:path><svg:path fill="#ce1126" d="M0 163.8h512v184.4H0z"></svg:path><svg:path fill="#fff" d="M0 174h512v164H0z"></svg:path><svg:circle cx="143.4" cy="81.9" r="61.4" fill="#fff"></svg:circle><svg:circle cx="163.8" cy="81.9" r="61.4" fill="#0099b5"></svg:circle><svg:g fill="#fff" transform="translate(278.5 131)scale(2.048)"><svg:g id="flagUz1x10"><svg:g id="flagUz1x11"><svg:g id="flagUz1x12"><svg:g id="flagUz1x13"><svg:path id="flagUz1x14" d="M0-6L-1.9-.3L1 .7"></svg:path><svg:use width="100%" height="100%" href="#flagUz1x14" transform="scale(-1 1)"></svg:use></svg:g><svg:use width="100%" height="100%" href="#flagUz1x13" transform="rotate(72)"></svg:use></svg:g><svg:use width="100%" height="100%" href="#flagUz1x13" transform="rotate(-72)"></svg:use><svg:use width="100%" height="100%" href="#flagUz1x12" transform="rotate(144)"></svg:use></svg:g><svg:use width="100%" height="100%" y="-24" href="#flagUz1x11"></svg:use><svg:use width="100%" height="100%" y="-48" href="#flagUz1x11"></svg:use></svg:g><svg:use width="100%" height="100%" x="24" href="#flagUz1x10"></svg:use><svg:use width="100%" height="100%" x="48" href="#flagUz1x10"></svg:use><svg:use width="100%" height="100%" x="-48" href="#flagUz1x11"></svg:use><svg:use width="100%" height="100%" x="-24" href="#flagUz1x11"></svg:use><svg:use width="100%" height="100%" x="-24" y="-24" href="#flagUz1x11"></svg:use></svg:g>`,
})
export class FlagUz1x1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
