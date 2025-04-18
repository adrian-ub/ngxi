import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignTaskCheckedIcon],svg[tdesign-task-checked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 1h10v2h4v11h-2V5h-2v2H7V5H5v16h6v2H3V3h4zm2 4h6V3H9zm14.657 11.586l-7.07 7.07l-4.243-4.242L13.758 18l2.828 2.828l5.657-5.656z"></svg:path>`,
})
export class TdesignTaskCheckedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
