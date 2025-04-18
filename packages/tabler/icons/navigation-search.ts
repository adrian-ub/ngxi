import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerNavigationSearchIcon],svg[tabler-navigation-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.876 11.403L12 3L4.03 20.275c-.07.2-.017.424.135.572c.15.148.374.193.57.116l6.29-2.132M15 18a3 3 0 1 0 6 0a3 3 0 1 0-6 0m5.2 2.2L22 22"></svg:path>`,
})
export class TablerNavigationSearchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
