import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiRhombusMediumOutlineIcon],svg[mdi-rhombus-medium-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 6.46c-.28 0-.56.1-.78.32l-4.44 4.44c-.43.43-.43 1.13 0 1.56l4.44 4.44c.43.43 1.13.43 1.56 0l4.44-4.44c.43-.43.43-1.13 0-1.56l-4.44-4.44c-.22-.22-.5-.32-.78-.32m0 2.37L15.17 12L12 15.17L8.83 12z"></svg:path>`,
})
export class MdiRhombusMediumOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
