import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsShieldIcon],svg[lineicons-shield-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M52 7.1L33.9 2c-1.3-.4-2.7-.4-4 0L12 7.1c-3.2.9-5.4 3.8-5.4 7.1v14.6c0 14.6 8.9 27.5 22.8 33c.8.3 1.7.5 2.6.5s1.8-.2 2.6-.5c13.8-5.5 22.7-18.4 22.7-33V14.2c.1-3.3-2.1-6.2-5.3-7.1m.9 21.7c0 12.7-7.8 24-19.9 28.8c-.6.2-1.3.2-1.9 0C19 52.8 11.2 41.5 11.2 28.8V14.2c0-1.3.9-2.4 2.1-2.8l17.9-5c.3-.1.5-.1.8-.1s.5 0 .8.1l18.1 5.1c1.2.3 2.1 1.5 2.1 2.8v14.5z"></svg:path>`,
})
export class LineiconsShieldIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
