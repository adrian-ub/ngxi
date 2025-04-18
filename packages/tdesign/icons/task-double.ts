import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignTaskDoubleIcon],svg[tdesign-task-double-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 15h-5v-2h5z"></svg:path><svg:path fill="currentColor" d="M12 2V0h-2v2H6v17h15V2h-4V0h-2v2zm3 4h2V4h2v13H8V4h2v2h2V4h3z"></svg:path><svg:path fill="currentColor" d="M4 21V6H2v17h13v-2z"></svg:path>`,
})
export class TdesignTaskDoubleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
