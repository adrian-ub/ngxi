import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentGiftCard20FilledIcon],svg[fluent-gift-card-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 4H4.75A2.75 2.75 0 0 0 2 6.75V9h2.268A2 2 0 0 1 7 6.268zm1 4v1h1a1 1 0 1 0-1-1m2.732 1A2 2 0 0 0 8 6.268V4h7.25A2.75 2.75 0 0 1 18 6.75V9zm-2.025 1l1.647 1.646a.5.5 0 0 1-.708.708L8 10.707V16h7.25A2.75 2.75 0 0 0 18 13.25V10zM7 16v-5.293l-1.646 1.647a.5.5 0 0 1-.708-.708L6.293 10H2v3.25A2.75 2.75 0 0 0 4.75 16zm0-8a1 1 0 1 0-1 1h1z"></svg:path>`,
})
export class FluentGiftCard20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
