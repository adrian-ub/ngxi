import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiPingPongIcon],svg[twemoji-ping-pong-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#DD2E44" d="M23.106 5.971C17.615.48 8.384-.521 3.307 4.557C-1.77 9.634-.77 18.865 4.721 24.356c3.554 3.554 7.785 4.323 11.707 3.058l-.015.013l.13-.052c.264-.088.527-.179.788-.284a25 25 0 0 1 2.942-.806c1.848-.38 3.541 1.606 4.955 3.021s4.242 5.657 4.949 6.364s1.414 0 2.122-.707l.707-.707l.707-.707c.707-.708 1.414-1.415.707-2.122s-4.95-3.535-6.364-4.949s-3.4-3.107-3.021-4.955a24 24 0 0 1 .653-2.481c1.974-4.222 1.537-8.952-2.582-13.071"></svg:path><svg:path fill="#D99E82" d="M15.564 27.655q.434-.104.864-.241l-.015.013l.13-.052c.264-.088.527-.179.788-.284a25 25 0 0 1 2.942-.806c1.848-.38 3.541 1.606 4.955 3.021s4.242 5.657 4.949 6.364s1.414 0 2.122-.707l.707-.707l.707-.707c.707-.708 1.414-1.415.707-2.122s-4.95-3.535-6.364-4.949s-3.4-3.107-3.021-4.955a24 24 0 0 1 .653-2.481q.536-1.147.824-2.334z"></svg:path><svg:path fill="#FFCC4D" d="m20.277 22.942l1.414-1.414l12.022 12.021l-1.414 1.414z"></svg:path><svg:circle cx="31.5" cy="6.5" r="3.5" fill="#CCD6DD"></svg:circle>`,
})
export class TwemojiPingPongIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
