import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiSpongeIcon],svg[twemoji-sponge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#F4900C" d="M35.676 18.625c.057.794.011 5.907.006 6.093a7 7 0 0 1-.026.422c-.618 6.445-5.937 10.342-12.187 9.375c-6.062-.938-8.938-5.5-11.938-8.5S1.656 22.827.641 19.312a7 7 0 0 1-.294-2.267c.011-.256-.141-5.031.035-6.169c.338-2.189 35.008 3.795 35.294 7.749"></svg:path><svg:path fill="#FFCC4D" d="M4.718 4.856c3.5-2.125 8.964-2.286 12.5 1.25c3 3 4.243 3.843 9.243 4.843s9.632 3.532 9.194 8.094c-.618 6.445-5.937 10.342-12.187 9.375c-6.062-.938-8.938-5.5-11.938-8.5S1.655 16.73.64 13.215c-1.109-3.842.996-6.487 4.078-8.359"></svg:path><svg:g fill="#FFAC33"><svg:circle cx="12.513" cy="14.106" r="1.5"></svg:circle><svg:circle cx="29.013" cy="25.794" r="1"></svg:circle><svg:circle cx="17.013" cy="24.106" r="1"></svg:circle><svg:circle cx="24.513" cy="24.794" r="1.5"></svg:circle><svg:circle cx="31.825" cy="21.606" r="1.5"></svg:circle><svg:circle cx="29.013" cy="18.419" r="1"></svg:circle><svg:circle cx="25.013" cy="20.356" r="1"></svg:circle><svg:circle cx="19.513" cy="21.356" r="1"></svg:circle><svg:path d="M14.013 20.606a1.5 1.5 0 0 0-1.5-1.5c-.496 0-.933.244-1.206.616c.074.067.155.127.224.197c.598.598 1.192 1.258 1.806 1.939c.406-.268.676-.728.676-1.252"></svg:path><svg:circle cx="9.575" cy="16.419" r="1"></svg:circle><svg:circle cx="16.013" cy="17.419" r="1"></svg:circle><svg:circle cx="24.513" cy="13.606" r="1.5"></svg:circle><svg:circle cx="21.013" cy="17.419" r="1.5"></svg:circle><svg:circle cx="12.013" cy="10.106" r="1"></svg:circle><svg:circle cx="20.513" cy="11.106" r="1"></svg:circle><svg:circle cx="14.513" cy="7.856" r="1"></svg:circle><svg:circle cx="7.575" cy="12.606" r="1"></svg:circle><svg:circle cx="6.013" cy="6.856" r="1"></svg:circle><svg:circle cx="28.575" cy="14.106" r="1"></svg:circle><svg:circle cx="33.325" cy="17.419" r="1"></svg:circle><svg:circle cx="3.263" cy="10.606" r="1.5"></svg:circle><svg:circle cx="10.575" cy="5.856" r="1.5"></svg:circle><svg:circle cx="16.513" cy="11.106" r="1.5"></svg:circle><svg:path d="M19.513 26.106c-.408 0-.778.164-1.048.429c.77.486 1.61.908 2.531 1.243c.007-.057.017-.113.017-.172a1.5 1.5 0 0 0-1.5-1.5m-14.75-10.5a.996.996 0 0 0-1.994-.029c.491.288 1.034.549 1.615.795a.99.99 0 0 0 .379-.766"></svg:path></svg:g>`,
})
export class TwemojiSpongeIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
