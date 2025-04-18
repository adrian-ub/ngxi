import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignTaskTimeIcon],svg[tdesign-task-time-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 1h10v2h4v8h-2V5h-2v2H7V5H5v16h6v2H3V3h4zm2 4h6V3H9z"></svg:path><svg:path fill="currentColor" d="M18 14.5a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7M12.5 18a5.5 5.5 0 1 1 11 0a5.5 5.5 0 0 1-11 0m6.5-2.248v1.834L20.414 19L19 20.414l-2-2v-2.662z"></svg:path>`,
})
export class TdesignTaskTimeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
