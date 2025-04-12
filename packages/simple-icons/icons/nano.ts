import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[simpleIconsNanoIcon],svg[simple-icons-nano-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.286 6.858c-.945 0-1.713.766-1.713 1.713c0 1.284-.428 1.714-1.714 1.714c-.945 0-1.713.766-1.713 1.713c0 1.285-.428 1.714-1.714 1.714a1.714 1.714 0 1 0 1.714 1.713c0-1.284.427-1.713 1.713-1.713c.946 0 1.714-.767 1.714-1.714c0-1.284.427-1.713 1.713-1.713a1.714 1.714 0 0 0 0-3.427M8.57 6.859c-.945 0-1.713.767-1.713 1.714c0 1.284-.428 1.713-1.714 1.713A1.714 1.714 0 1 0 6.858 12c0-1.284.429-1.713 1.713-1.713s1.714.427 1.714 1.713a1.715 1.715 0 0 0 3.428 0c0-.945-.766-1.713-1.716-1.713c-1.285 0-1.714-.428-1.714-1.714c0-.945-.768-1.714-1.714-1.714m-6.856 6.856A1.714 1.714 0 0 0 0 15.43a1.714 1.714 0 0 0 1.714 1.713a1.714 1.714 0 0 0 1.713-1.713a1.714 1.714 0 0 0-1.713-1.714Z"></svg:path>`
})
export class SimpleIconsNanoIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
