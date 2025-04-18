import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignVideoLibraryFilledIcon],svg[tdesign-video-library-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 2H6v2h12zm2 3H4v2h16zm2.161 3H1.84l2.1 14h16.12zm-6.994 7L10.5 18.5v-7z"></svg:path>`,
})
export class TdesignVideoLibraryFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
