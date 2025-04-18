import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignViewModuleIcon],svg[tdesign-view-module-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 3h22v18H1zm2 2v6h4.667V5zm6.667 0v6h4.666V5zm6.666 0v6H21V5zM21 13h-4.667v6H21zm-6.667 6v-6H9.667v6zm-6.666 0v-6H3v6z"></svg:path>`,
})
export class TdesignViewModuleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
