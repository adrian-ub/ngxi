import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconRedditIcon],svg[picon-reddit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 1c3 3 2-2 1 0H4v2c-5 0-5 5 0 5s5-5 0-5M2 5c1-2 2 2 0 0c-1-3.5-4 0 0 1m4 0c4.5-1 0-4.5 0-1c-2 2-1-2 0 0"></svg:path>`,
})
export class PiconRedditIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
