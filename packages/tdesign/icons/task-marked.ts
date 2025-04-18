import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignTaskMarkedIcon],svg[tdesign-task-marked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 1h10v2h4v8h-2V5h-2v2H7V5H5v16h7.5v2H3V3h4zm2 4h6V3H9zm5.75 7.996h8.5v10.295l-4.247-2.617l-4.253 2.615zm2 2v4.715l2.254-1.385l2.246 1.383v-4.713z"></svg:path>`,
})
export class TdesignTaskMarkedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
