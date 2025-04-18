import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerNavigationEastIcon],svg[tabler-navigation-east-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 3h-4v6h4m-4-3h2.5M16 21l-4-8l-4 8l4-2z"></svg:path>`,
})
export class TablerNavigationEastIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
