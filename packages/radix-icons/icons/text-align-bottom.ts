import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[radixIconsTextAlignBottomIcon],svg[radix-icons-text-align-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.9 5.5a.4.4 0 0 0-.8 0v7.034l-1.318-1.317a.4.4 0 0 0-.565.566l2 2a.4.4 0 0 0 .565 0l2-2a.4.4 0 0 0-.565-.566l-1.318 1.317zM8.5 13a.5.5 0 1 1 0-1h6a.5.5 0 0 1 0 1zm0-3a.5.5 0 1 1 0-1h6a.5.5 0 0 1 0 1zM8 6.5a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 0-1h-6a.5.5 0 0 0-.5.5" clip-rule="evenodd"></svg:path>`,
})
export class RadixIconsTextAlignBottomIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
