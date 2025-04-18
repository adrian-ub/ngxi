import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatOButtonBloodTypeIcon],svg[fluent-emoji-flat-o-button-blood-type-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#F92F60" d="M2 6a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v20a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z"></svg:path><svg:path fill="#fff" d="M10.031 12.977a5.977 5.977 0 1 1 11.953 0v6.046a5.977 5.977 0 1 1-11.953 0zM16.008 10a2.977 2.977 0 0 0-2.977 2.977v6.046a2.977 2.977 0 0 0 5.953 0v-6.046A2.977 2.977 0 0 0 16.008 10"></svg:path></svg:g>`,
})
export class FluentEmojiFlatOButtonBloodTypeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
