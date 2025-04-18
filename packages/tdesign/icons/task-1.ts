import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignTask1Icon],svg[tdesign-task-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 1h10v2h4v20H3V3h4zm0 4H5v16h14V5h-2v2H7zm8-2H9v2h6z"></svg:path>`,
})
export class TdesignTask1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
