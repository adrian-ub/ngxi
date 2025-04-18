import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLinkBoxOutlineIcon],svg[mdi-link-box-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m0 16H5V5h14zm-8-3h-1c-1.61 0-4-1.06-4-4c0-2.93 2.39-4 4-4h1v2h-1c-.46 0-2 .17-2 2c0 1.9 1.67 2 2 2h1zm3 0h-1v-2h1c.46 0 2-.17 2-2c0-1.9-1.67-2-2-2h-1V8h1c1.61 0 4 1.07 4 4c0 2.94-2.39 4-4 4m1-3H9v-2h6z"></svg:path>`,
})
export class MdiLinkBoxOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
