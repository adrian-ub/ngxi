import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiHomepodIcon],svg[cbi-homepod-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.266 2l-2.479.071A6.188 6.188 0 0 0 4.255 8.6v6.3a7.12 7.12 0 0 0 7.1 7.1h1.3a7.12 7.12 0 0 0 7.1-7.1V8.6c-.01-3.9-2.21-6.389-6.489-6.6M12 5.375c-2.68 0-4.852-.674-4.852-1.507S9.32 2.361 12 2.361s4.852.675 4.852 1.507S14.68 5.375 12 5.375" class="cls-1"></svg:path>`,
})
export class CbiHomepodIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
