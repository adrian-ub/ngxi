import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsKongregateIcon],svg[simple-icons-kongregate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.667 0A2.667 2.667 0 0 0 0 2.667v18.666A2.667 2.667 0 0 0 2.667 24h18.666A2.667 2.667 0 0 0 24 21.333V2.667A2.667 2.667 0 0 0 21.333 0ZM5.6 5.333h2.667v5.334H13.6v2.666H8.267v5.334H5.6Zm8 8h1.678a1.6 1.6 0 0 1 1.43.885L17.6 16h1.333v2.667h-2.666zm0-2.666l2.667-5.334h2.666V8H17.6l-.891 1.782a1.6 1.6 0 0 1-1.431.885z"></svg:path>`,
})
export class SimpleIconsKongregateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
