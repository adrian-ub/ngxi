import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiChevronsCollapseVerticalIcon],svg[gravity-ui-chevrons-collapse-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.42 2.141a.75.75 0 1 0-1.061-1.06L8 4.439L4.646 1.086a.75.75 0 1 0-1.06 1.06L7.47 6.03a.75.75 0 0 0 1.06 0zM3.58 13.86a.75.75 0 0 0 1.061 1.06L8 11.561l3.354 3.353a.75.75 0 0 0 1.06-1.06L8.53 9.97a.75.75 0 0 0-1.06 0z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiChevronsCollapseVerticalIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
