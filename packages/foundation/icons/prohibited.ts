import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[foundationProhibitedIcon],svg[foundation-prohibited-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M50 12.5c-20.712 0-37.5 16.793-37.5 37.502S29.288 87.5 50 87.5s37.5-16.788 37.5-37.498S70.712 12.5 50 12.5m0 65.061c-15.199 0-27.561-12.362-27.561-27.559a27.44 27.44 0 0 1 6.4-17.636l38.795 38.795A27.43 27.43 0 0 1 50 77.561m21.161-9.926L32.366 28.839A27.43 27.43 0 0 1 50 22.439c15.198 0 27.56 12.367 27.56 27.562a27.43 27.43 0 0 1-6.399 17.634"></svg:path>`,
})
export class FoundationProhibitedIcon {
  readonly viewBox = input("0 0 100 100")
  readonly width = input("1em")
  readonly height = input("1em")
}
