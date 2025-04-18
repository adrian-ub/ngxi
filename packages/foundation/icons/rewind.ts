import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[foundationRewindIcon],svg[foundation-rewind-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M84.627 26.291c-.483 0-.918.2-1.23.521L54.978 43.22V28.009a1.718 1.718 0 0 0-2.948-1.197L14.485 48.489l.031.054a1.71 1.71 0 0 0-.862 1.481c0 .702.422 1.303 1.026 1.57l-.017.03l37.391 21.588a1.715 1.715 0 0 0 2.92-1.172h.005V56.791l28.443 16.422a1.715 1.715 0 0 0 2.92-1.172h.005V28.009a1.72 1.72 0 0 0-1.72-1.718"></svg:path>`,
})
export class FoundationRewindIcon {
  readonly viewBox = input("0 0 100 100")
  readonly width = input("1em")
  readonly height = input("1em")
}
