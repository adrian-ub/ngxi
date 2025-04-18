import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiAnchorIcon],svg[mynaui-anchor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 12H3a9 9 0 1 0 18 0h-2m-7-5v14m0-14a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path>`,
})
export class MynauiAnchorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
