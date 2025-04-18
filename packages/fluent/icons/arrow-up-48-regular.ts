import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowUp48RegularIcon],svg[fluent-arrow-up-48-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 44c-.69 0-1.25-.56-1.25-1.25V10.304L10.14 23.126a1.25 1.25 0 1 1-1.782-1.752L23.097 6.386l.026-.027a1.25 1.25 0 0 1 1.009-.352a1.25 1.25 0 0 1 .785.393l14.724 14.974a1.25 1.25 0 1 1-1.782 1.752l-12.61-12.822V42.75c0 .69-.559 1.25-1.25 1.25"></svg:path>`,
})
export class FluentArrowUp48RegularIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
