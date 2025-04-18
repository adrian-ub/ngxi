import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsForkRightIcon],svg[material-symbols-fork-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 21V6.825L7.4 8.4L6 7l4-4l4 4l-1.4 1.425l-1.6-1.6v6.525q.875-.775 1.975-1.112t2.2-.338q.275 0 .525.025t.475.075L14.6 10.4L16 9l4 4l-4 4l-1.4-1.4l1.575-1.6q-.275-.05-.55-.088t-.55-.037q-1.35 0-2.488.763T11 17v4z"></svg:path>`,
})
export class MaterialSymbolsForkRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
