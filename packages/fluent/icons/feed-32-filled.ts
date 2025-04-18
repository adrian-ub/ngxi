import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFeed32FilledIcon],svg[fluent-feed-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 29v-.015q.15.015.304.015a3.04 3.04 0 0 0 2.987-2.487L23.938 23h2.812A3.25 3.25 0 0 0 30 19.75v-8.84A2.91 2.91 0 0 0 27 8h-7.733V6.25A3.25 3.25 0 0 0 16.017 3H5.25A3.25 3.25 0 0 0 2 6.25V24.5A4.5 4.5 0 0 0 6.5 29zm-.733-19h5.059q-.06.186-.098.383L21.325 26.15a1.037 1.037 0 0 1-2.057-.188zM7 10a1 1 0 1 1 0-2a1 1 0 0 1 0 2m-1 6a1 1 0 0 1 1-1h7a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1m1 5h7a1 1 0 1 1 0 2H7a1 1 0 1 1 0-2"></svg:path>`,
})
export class FluentFeed32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
