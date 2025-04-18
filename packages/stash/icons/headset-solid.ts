import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashHeadsetSolidIcon],svg[stash-headset-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 3.681a7.26 7.26 0 0 0-7.258 7.259v1.742a.87.87 0 0 1-1.742 0V10.94a9 9 0 0 1 18 0v4.645a4.355 4.355 0 0 1-4.355 4.354h-2.633c-.402.521-1.152.872-2.012.872c-1.283 0-2.323-.78-2.323-1.742s1.04-1.742 2.323-1.742c.86 0 1.61.35 2.012.87h2.633a2.613 2.613 0 0 0 2.613-2.612V10.94A7.26 7.26 0 0 0 12 3.68M7.935 9.778a2.323 2.323 0 0 0-2.322 2.323v1.742a2.323 2.323 0 0 0 2.322 2.322h.581c.641 0 1.161-.52 1.161-1.161V10.94c0-.642-.52-1.162-1.16-1.162zm8.13 0a2.323 2.323 0 0 1 2.322 2.323v1.742a2.323 2.323 0 0 1-2.323 2.322h-.58a1.16 1.16 0 0 1-1.161-1.161V10.94c0-.642.52-1.162 1.16-1.162z" clip-rule="evenodd"></svg:path>`,
})
export class StashHeadsetSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
