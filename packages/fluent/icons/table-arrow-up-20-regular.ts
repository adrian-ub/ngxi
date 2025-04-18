import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTableArrowUp20RegularIcon],svg[fluent-table-arrow-up-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.5 3A2.5 2.5 0 0 1 17 5.5v4.1a5.5 5.5 0 0 0-1-.393V8h-3v1.207q-.524.149-1 .393V8H8v4h1.6a5.5 5.5 0 0 0-.393 1H8v3h1.207q.149.524.393 1H5.5A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3zM4 13v1.5a1.5 1.5 0 0 0 1.356 1.493L5.5 16H7v-3zm4-6h4V4H8zm6.5-3H13v3h3V5.5a1.5 1.5 0 0 0-1.355-1.493zM4 5.5V7h3V4H5.5a1.5 1.5 0 0 0-1.493 1.356zM7 12V8H4v4zm12 2.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-2.146.354a.5.5 0 0 0 0-.707l-2-2l-.003-.003a.5.5 0 0 0-.348-.144h-.006a.5.5 0 0 0-.35.146l-2 2a.5.5 0 0 0 .707.708L14 13.707V16.5a.5.5 0 1 0 1 0v-2.793l1.146 1.147a.5.5 0 0 0 .707 0"></svg:path>`,
})
export class FluentTableArrowUp20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
