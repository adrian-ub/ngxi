import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiChevronsCollapseHorizontalIcon],svg[gravity-ui-chevrons-collapse-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.141 3.58a.75.75 0 0 0-1.06 1.061L4.439 8l-3.353 3.354a.75.75 0 1 0 1.06 1.06L6.03 8.53a.75.75 0 0 0 0-1.06zm11.718 8.84a.75.75 0 0 0 1.06-1.061L11.561 8l3.353-3.354a.75.75 0 0 0-1.06-1.06L9.97 7.47a.75.75 0 0 0 0 1.06z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiChevronsCollapseHorizontalIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
