import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundViewCarouselIcon],svg[ic-round-view-carousel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 7h2c.55 0 1 .45 1 1v8c0 .55-.45 1-1 1H3c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1m5 12h8c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1H8c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1M19 7h2c.55 0 1 .45 1 1v8c0 .55-.45 1-1 1h-2c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1"></svg:path>`,
})
export class IcRoundViewCarouselIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
