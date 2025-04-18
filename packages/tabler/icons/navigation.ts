import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerNavigationIcon],svg[tabler-navigation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 18.5l7.265 2.463c.196.077.42.032.57-.116a.55.55 0 0 0 .134-.572L12 3L4.03 20.275c-.07.2-.017.424.135.572c.15.148.374.193.57.116z"></svg:path>`,
})
export class TablerNavigationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
