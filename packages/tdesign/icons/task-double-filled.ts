import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignTaskDoubleFilledIcon],svg[tdesign-task-double-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 0v2h3V0h2v2h4v17H6V2h4V0zm-1 15h5v-2h-5z"></svg:path><svg:path fill="currentColor" d="M4 6v15h11v2H2V6z"></svg:path>`,
})
export class TdesignTaskDoubleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
