import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignExploreIcon],svg[tdesign-explore-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.364 5.636A9 9 0 1 0 5.636 18.364A9 9 0 0 0 18.364 5.636M4.222 4.222c4.296-4.296 11.26-4.296 15.556 0s4.296 11.26 0 15.556s-11.26 4.296-15.556 0s-4.296-11.26 0-15.556m13.22 2.337l-4.965 12.91l-2.1-5.844l-5.845-2.1zm-7.174 4.902l1.672.6l.6 1.672l1.42-3.692z"></svg:path>`,
})
export class TdesignExploreIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
