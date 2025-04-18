import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesAlertWarningTriangleSolidIcon],svg[bubbles-alert-warning-triangle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.82 13.519L9.534.947a1.714 1.714 0 0 0-3.068 0L.181 13.52A1.714 1.714 0 0 0 1.714 16h12.572a1.714 1.714 0 0 0 1.534-2.481M7.143 5.714a.857.857 0 0 1 1.714 0v3.429a.857.857 0 0 1-1.714 0zm.857 8a1.143 1.143 0 1 1 0-2.285a1.143 1.143 0 0 1 0 2.285"></svg:path>`,
})
export class BubblesAlertWarningTriangleSolidIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
