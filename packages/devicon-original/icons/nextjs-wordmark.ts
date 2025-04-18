import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconOriginalNextjsWordmarkIcon],svg[devicon-original-nextjs-wordmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M30.2 45.9h24.1v1.9H32.4v14.4H53v1.9H32.4v15.8h22.2v1.9H30.2V45.9zm26.3 0h2.6l11.4 15.8L82 45.9l15.8-20l-26 37.5l13.4 18.4h-2.7L70.4 65L58.2 81.8h-2.6l13.5-18.4l-12.6-17.5zm29.7 1.9v-1.9h27.5v1.9H101v34h-2.2v-34H86.2zM0 45.9h2.7l38.2 56.8l-15.8-20.9L2.3 48.6l-.1 33.2H0zm113.5 33.4c.5 0 .8-.3.8-.8s-.3-.8-.8-.8s-.8.3-.8.8s.4.8.8.8zm2.2-2.1c0 1.3 1 2.2 2.4 2.2c1.5 0 2.4-.9 2.4-2.5v-5.5h-1.2v5.5c0 .9-.4 1.3-1.2 1.3c-.7 0-1.2-.4-1.2-1.1h-1.2zm6.3-.1c.1 1.4 1.2 2.3 3 2.3s3-.9 3-2.4c0-1.2-.7-1.8-2.2-2.2l-.9-.2c-1-.2-1.4-.6-1.4-1.1c0-.7.6-1.2 1.6-1.2c.9 0 1.5.4 1.6 1.2h1.2c-.1-1.3-1.2-2.2-2.8-2.2c-1.7 0-2.8.9-2.8 2.3c0 1.1.6 1.8 2 2.1l1 .2c1 .2 1.5.6 1.5 1.2c0 .7-.7 1.2-1.7 1.2s-1.8-.5-1.9-1.2H122z"></svg:path>`,
})
export class DeviconOriginalNextjsWordmarkIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
