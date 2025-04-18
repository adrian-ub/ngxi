import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fxemojiWhiteexclaimationmarkIcon],svg[fxemoji-whiteexclaimationmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#D9DDE8" d="M307.983 407.133c0 27-21.6 49.14-49.139 49.14s-49.14-22.14-49.14-49.14c0-26.999 21.6-49.139 49.14-49.139s49.139 22.14 49.139 49.139m-29.651-98.279h-39.48c-8.453 0-15.411-6.647-15.798-15.091l-9.352-204.348c-.412-9.008 6.78-16.537 15.798-16.537h58.652c9.032 0 16.23 7.552 15.796 16.573l-9.82 204.348c-.405 8.429-7.357 15.055-15.796 15.055"></svg:path>`,
})
export class FxemojiWhiteexclaimationmarkIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
