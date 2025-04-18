import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignAddRectangleIcon],svg[tdesign-add-rectangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20v20H2zm2 2v16h16V4zm9 2.5V11h4.5v2H13v4.5h-2V13H6.5v-2H11V6.5z"></svg:path>`,
})
export class TdesignAddRectangleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
