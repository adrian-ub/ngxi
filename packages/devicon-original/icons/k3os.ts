import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconOriginalK3osIcon],svg[devicon-original-k3os-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FD824E" d="M113.4 12.7H14.6c-7.3 0-13.2 6-13.2 13.3v76c0 7.3 5.9 13.2 13.3 13.3h98.7c7.3 0 13.2-5.9 13.3-13.3V26c-.1-7.3-6-13.3-13.3-13.3zm-79.7 89.6c-6.7 0-12.2-5.4-12.2-12.1C21.5 83.4 27 78 33.7 78c2 0 4 .5 5.8 1.5l-9 5.2c-3 1.7-4 5.6-2.3 8.6c1.7 3 5.6 4 8.6 2.3l9-5.2c-.1 6.6-5.5 11.8-12.1 11.9zm24.1-22.7L35.2 92.7c-1.5.8-3.3.4-4.2-1.1c-.8-1.5-.4-3.3 1.1-4.2l22.6-13.1c1.5-.8 3.3-.4 4.2 1.1s.4 3.4-1.1 4.2zm-.1-42V48c-5.7-3.5-7.5-11-4-16.7s11-7.5 16.7-4c5.7 3.5 7.5 11 4 16.7c-1 1.7-2.4 3.1-4.1 4.1V37.7c0-3.5-2.8-6.3-6.3-6.3c-3.5-.1-6.3 2.7-6.3 6.2zm9.2 26.2c0 1.7-1.4 3-3 3c-1.7 0-3-1.4-3-3l.1-26.2c0-1.7 1.4-3 3-3c1.7 0 3 1.4 3 3l-.1 26.2zm2 11.6c.8-1.5 2.7-2 4.1-1.1l22.8 13.2c1.5.8 2 2.7 1.1 4.1c-.8 1.5-2.7 2-4.1 1.1L70 79.6c-1.5-.9-2-2.7-1.1-4.2zm25.4 26.9c-6.6 0-12-5.3-12.1-11.9l9 5.2c3 1.7 6.9.7 8.6-2.3c1.7-3 .7-6.9-2.3-8.6l-9-5.2c1.8-1 3.8-1.5 5.8-1.5c6.7 0 12.2 5.4 12.2 12.1c0 6.7-5.5 12.1-12.2 12.2z"></svg:path>`,
})
export class DeviconOriginalK3osIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
