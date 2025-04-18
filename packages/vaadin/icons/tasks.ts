import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinTasksIcon],svg[vaadin-tasks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 0h10v4H6zm0 6h10v4H6zm0 6h10v4H6zM3 1v2H1V1zm1-1H0v4h4zM3 13v2H1v-2zm1-1H0v4h4zm1.3-6.1l-.6-.8l-.9.9H0v4h4V7.2zM2.7 7l-.7.7l-.8-.7zM1 8.2l.9.8H1zM3 9h-.9l.9-.9z"></svg:path>`,
})
export class VaadinTasksIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
