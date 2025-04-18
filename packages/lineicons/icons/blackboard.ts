import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsBlackboardIcon],svg[lineicons-blackboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M56.1 9.4H34.3V6.5c0-1.2-1-2.3-2.3-2.3c-1.2 0-2.3 1-2.3 2.3v2.8H7.9c-3.4 0-6.1 2.7-6.1 6.1v20.3c0 3.4 2.7 6.1 6.1 6.1h8.6L8.3 56.3c-.6 1.1-.2 2.5.9 3.1c.3.2.7.3 1.1.3c.8 0 1.6-.4 2-1.2l9.3-16.7h8.1v15.6c0 1.2 1 2.3 2.3 2.3c1.2 0 2.3-1 2.3-2.3V41.9h8.3L52 58.6c.4.7 1.2 1.1 2 1.1c.4 0 .8-.1 1.1-.3c1.1-.6 1.5-2 .9-3.1l-8.2-14.5h8.5c3.4 0 6.1-2.7 6.1-6.1V15.5c-.1-3.4-2.9-6.1-6.3-6.1m1.7 26.4c0 .9-.7 1.6-1.6 1.6H7.9c-.9 0-1.6-.7-1.6-1.6V15.5c0-.9.7-1.6 1.6-1.6h48.3c.9 0 1.6.7 1.6 1.6z"></svg:path>`,
})
export class LineiconsBlackboardIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
