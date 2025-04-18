import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fadVExpandIcon],svg[fad-v-expand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M145.5 200.502c0 4.417-3.579 7.998-8.01 7.998h-16.98c-4.424 0-8.01-3.588-8.01-7.998V55.498c0-4.417 3.579-7.998 8.01-7.998h16.98c4.424 0 8.01 3.588 8.01 7.998zm-65 0c0 4.417-3.579 7.998-8.01 7.998H55.51c-4.424 0-8.01-3.588-8.01-7.998V55.498c0-4.417 3.579-7.998 8.01-7.998h16.98c4.424 0 8.01 3.588 8.01 7.998zm129 0c0 4.417-3.579 7.998-8.01 7.998h-16.98c-4.424 0-8.01-3.588-8.01-7.998V55.498c0-4.417 3.579-7.998 8.01-7.998h16.98c4.424 0 8.01 3.588 8.01 7.998z"></svg:path>`,
})
export class FadVExpandIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
