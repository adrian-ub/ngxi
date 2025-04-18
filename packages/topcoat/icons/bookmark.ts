import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[topcoatBookmarkIcon],svg[topcoat-bookmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.791 2.5c-2.71 0-3.29.63-3.29 3.35v31.589c0 2.182-.07 3.021 1.08 3.062c.779 0 1.52-.681 2.12-1.29c0 0 7.269-8.55 7.749-8.729c.279-.11-.011-.131-.021-.08c-.01.01.021.039.12.08c.48.18 7.75 8.729 7.75 8.729c.6.609 1.34 1.29 2.119 1.29c1.15-.04 1.08-.88 1.08-3.062V5.85c0-2.72-.58-3.35-3.289-3.35z"></svg:path>`,
})
export class TopcoatBookmarkIcon {
  readonly viewBox = input("0 0 42 42")
  readonly width = input("1em")
  readonly height = input("1em")
}
