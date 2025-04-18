import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laCompressIcon],svg[la-compress-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 4v7H4v2h9V4zm8 0v9h9v-2h-7V4zM4 19v2h7v7h2v-9zm15 0v9h2v-7h7v-2z"></svg:path>`,
})
export class LaCompressIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
