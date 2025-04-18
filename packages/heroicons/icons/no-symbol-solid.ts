import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsNoSymbolSolidIcon],svg[heroicons-no-symbol-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m6.72 5.66l11.62 11.62A8.25 8.25 0 0 0 6.72 5.66m10.56 12.68L5.66 6.72a8.25 8.25 0 0 0 11.62 11.62M5.105 5.106c3.807-3.808 9.98-3.808 13.788 0s3.808 9.98 0 13.788s-9.98 3.808-13.788 0s-3.808-9.98 0-13.788" clip-rule="evenodd"></svg:path>`,
})
export class HeroiconsNoSymbolSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
