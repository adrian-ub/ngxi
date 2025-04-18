import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riExpandRightLineIcon],svg[ri-expand-right-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.172 11l-4.657-4.657l1.414-1.414L21 12l-7.071 7.071l-1.414-1.414L17.172 13H8v-2zM4 19V5h2v14z"></svg:path>`,
})
export class RiExpandRightLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
