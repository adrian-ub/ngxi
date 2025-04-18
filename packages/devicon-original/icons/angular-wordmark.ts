import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconOriginalAngularWordmarkIcon],svg[devicon-original-angular-wordmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FFF" d="M41.4 71.2V57.7h1.7l8.3 10.9V57.7H53v13.5h-1.7l-8.3-11v11h-1.6zm25.1-.5c-1.1.4-2.3.6-3.5.6c-4.9 0-7.3-2.3-7.3-7c0-4.4 2.4-6.7 7.1-6.7c1.4 0 2.6.2 3.8.6v1.5c-1.2-.5-2.4-.7-3.6-.7c-3.7 0-5.5 1.8-5.5 5.2c0 3.8 1.8 5.6 5.5 5.6c.6 0 1.2-.1 1.9-.2v-4.5h1.7l-.1 5.6zm2.8-4.7v-8.3H71V66c0 2.6 1.3 3.9 3.9 3.9s3.9-1.3 3.9-3.9v-8.3h1.7V66c0 3.5-1.9 5.3-5.6 5.3s-5.6-1.8-5.6-5.3zm16.1-8.3v12.1h7.1v1.4h-8.8V57.7h1.7zM95 71.2h-1.8l6.7-15.3l6.7 15.3h-1.9L103 67h-4.5l.5-1.4h3.4l-2.5-6.1L95 71.2zm13.5 0V57.7h5.8c2.6 0 3.9 1.1 3.9 3.2c0 1.8-1.3 3.1-3.8 3.9l4.6 6.4h-2.3l-4.3-6.1V64c2.6-.4 3.9-1.4 3.9-3c0-1.2-.7-1.9-2.1-1.9h-3.9v12.1h-1.8z"></svg:path><svg:path fill="#DD0031" d="M23 49.1L8.9 54L11 72.3l12 6.6l11.9-6.5L37 54l-14-4.9z"></svg:path><svg:path fill="#C3002f" d="M23 49.1v29.8l11.9-6.5L37 54l-14-4.9z"></svg:path><svg:path fill="#FFF" d="m23 52.4l-8.8 19.4h3.3l1.8-4.4h7.5l1.8 4.4h3.3L23 52.4zm2.6 12.4h-5.1l2.6-6.1l2.5 6.1z"></svg:path>`,
})
export class DeviconOriginalAngularWordmarkIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
