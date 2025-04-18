import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiChestnutIcon],svg[openmoji-chestnut-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="openmojiChestnut0" d="M46.473 27.544s4.606 13.533-1.184 25.301"></svg:path></svg:defs><svg:path fill="#a57939" d="m28 28.614l18-1s5 25-1 25l-9 5l-7.79-4.769C24 40.614 28 28.614 28 28.614"></svg:path><svg:path fill="#f1b31c" d="M17 23.614s1.4-3.124 4.977-5.807c6.775-4.602 14.695-4.3 14.695-4.3L23 25.614z"></svg:path><svg:path fill="#6a462f" d="m27 27.614l-11.25-4s-12.75 19 11.25 28zm20 0l9.825-3.175S67.755 36.583 47 51.614l1-13z"></svg:path><svg:path fill="#f1b31c" d="m16.927 23.498l.084.194C34.508 34.185 57 23.614 57 23.614a23.84 23.84 0 0 0-19.356-10.108"></svg:path><svg:g fill="none" stroke="#000" stroke-width="2"><svg:path stroke-miterlimit="10" d="m16.927 23.498l.084.194C34.508 34.185 57 23.614 57 23.614a23.84 23.84 0 0 0-19.356-10.108"></svg:path><svg:path stroke-miterlimit="10" d="M16 23.614c17.497 10.492 41 0 41 0"></svg:path><svg:use href="#openmojiChestnut0" stroke-miterlimit="10"></svg:use><svg:use href="#openmojiChestnut0" stroke-miterlimit="10"></svg:use><svg:path stroke-linecap="round" stroke-linejoin="round" d="M21.977 17.807c-6.157 3.983-10.244 10.39-9.866 17.742c.389 7.565 6.78 14.68 13.547 16.362c4.101 1.018 8.704 4.838 10.017 5.983c.217.19.537.208.773.04a69.4 69.4 0 0 1 8.549-4.984c8.574-4.202 13.503-9.836 14.977-17.4c2.29-11.762-10.085-22.043-23.302-22.043c-3.929.002-7.81.85-11.383 2.484"></svg:path><svg:path stroke-miterlimit="10" d="M27.026 27.544a113.8 113.8 0 0 0 1.184 25.301"></svg:path></svg:g>`,
})
export class OpenmojiChestnutIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
