import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerNavigationCodeIcon],svg[tabler-navigation-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16.653 13.086L12 3L4.03 20.275c-.07.2-.017.424.135.572c.15.148.374.193.57.116l6.246-2.117M20 21l2-2l-2-2m-3 0l-2 2l2 2"></svg:path>`,
})
export class TablerNavigationCodeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
