import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerNavigationCheckIcon],svg[tabler-navigation-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.487 14.894L12 3L4.03 20.275c-.07.2-.017.424.135.572c.15.148.374.193.57.116l6.275-2.127M15 19l2 2l4-4"></svg:path>`,
})
export class TablerNavigationCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
