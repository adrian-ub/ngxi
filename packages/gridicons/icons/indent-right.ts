import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gridiconsIndentRightIcon],svg[gridicons-indent-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 4H4v16h2zm16 9H11.828l2.086 2.086L12.5 16.5L8 12l4.5-4.5l1.414 1.414L11.828 11H22z"></svg:path>`,
})
export class GridiconsIndentRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
