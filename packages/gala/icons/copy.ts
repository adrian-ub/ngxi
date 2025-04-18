import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[galaCopyIcon],svg[gala-copy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"><svg:rect width="144" height="144" x="16" y="16" ry="32"></svg:rect><svg:path d="M 95.999712,127.9996 A 31.999891,31.999891 0 0 1 127.9996,95.999712"></svg:path><svg:path d="m -239.99922,127.9996 a 31.999891,31.999891 0 0 1 31.99989,-31.999888" transform="scale(-1 1)"></svg:path><svg:path d="m -239.99922,-207.99933 a 31.999891,31.999891 0 0 1 31.99989,-31.99989" transform="scale(-1)"></svg:path><svg:path d="M 95.999712,-207.99933 A 31.999891,31.999891 0 0 1 127.9996,-239.99922" transform="scale(1 -1)"></svg:path><svg:path d="m 159.99949,239.99923 h 15.99995"></svg:path><svg:path d="m 159.99949,95.9997 h 15.99995"></svg:path><svg:path d="m 95.999709,159.99949 v 15.99995"></svg:path><svg:path d="m 239.99923,159.99949 v 15.99995"></svg:path></svg:g>`,
})
export class GalaCopyIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
