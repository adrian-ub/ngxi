import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonMenuBurgerVerticalFillIcon],svg[iconamoon-menu-burger-vertical-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M19 3.5a1 1 0 1 0-2 0v17a1 1 0 1 0 2 0zm-7-1a1 1 0 0 1 1 1v17a1 1 0 1 1-2 0v-17a1 1 0 0 1 1-1m-6 0a1 1 0 0 1 1 1v17a1 1 0 1 1-2 0v-17a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonMenuBurgerVerticalFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
