import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignVideoLibraryIcon],svg[tdesign-video-library-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2h12v2H6zM4 5h16v2H4zM1.839 8H22.16l-2.1 14H3.94zm2.322 2l1.5 10H18.34l1.5-10zm6.34 1.5l4.666 3.5l-4.667 3.5z"></svg:path>`,
})
export class TdesignVideoLibraryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
