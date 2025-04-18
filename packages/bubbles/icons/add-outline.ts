import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesAddOutlineIcon],svg[bubbles-add-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M.75 12h22.5M12 .75v22.5"></svg:path>`,
})
export class BubblesAddOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
