import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiNavigationOneIcon],svg[mynaui-navigation-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.414 12.086a.546.546 0 0 1-.101-1.024l16.905-8.007a.546.546 0 0 1 .727.727l-8.007 16.905a.546.546 0 0 1-1.024-.1l-1.62-6.483a.55.55 0 0 0-.398-.397z"></svg:path>`,
})
export class MynauiNavigationOneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
