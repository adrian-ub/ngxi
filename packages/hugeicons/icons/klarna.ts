import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsKlarnaIcon],svg[hugeicons-klarna-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.475 21.823h4.61l-.01-.01c.28 0 .54-.16.67-.41s.11-.55-.06-.78l-5.09-6.95c1.17-1.14 3.74-4.24 3.74-9.61c0-.41-.34-.75-.75-.75h-3.8c-.41 0-.75.34-.75.75c0 4.083-2.283 6.5-3.7 7.605V4.072c0-.41-.34-.75-.75-.75h-4c-.41 0-.75.34-.75.75v17c0 .41.34.75.75.75h4c.41 0 .75-.34.75-.75v-5.725l4.54 6.166c.14.2.36.31.6.31m-6.64-8.761v-8.24h-2.5v15.5h2.5zm9.77 7.26h-2.75l-5.18-7.04c1.46-.99 4.55-3.64 4.84-8.46h2.3c-.279 5.48-3.516 8.022-3.678 8.15h-.002c-.32.24-.39.71-.15 1.04zm4.98 1.5c-1.52 0-2.75-1.23-2.75-2.75s1.23-2.75 2.75-2.75s2.75 1.23 2.75 2.75s-1.23 2.75-2.75 2.75m0-4a1.25 1.25 0 1 0 .002 2.501a1.25 1.25 0 0 0-.001-2.5" color="currentColor"></svg:path>`,
})
export class HugeiconsKlarnaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
