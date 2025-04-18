import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonThunderstormIcon],svg[carbon-thunderstorm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23.5 22H23v-2h.5a4.5 4.5 0 0 0 .36-9H23l-.1-.82a7 7 0 0 0-13.88 0L9 11h-.86a4.5 4.5 0 0 0 .36 9H9v2h-.5A6.5 6.5 0 0 1 7.2 9.14a9 9 0 0 1 17.6 0A6.5 6.5 0 0 1 23.5 22"></svg:path><svg:path fill="currentColor" d="m15.87 30.5l-1.74-1l3.15-5.5h-6l4.85-8.5l1.74 1l-3.15 5.5h6z"></svg:path>`,
})
export class CarbonThunderstormIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
