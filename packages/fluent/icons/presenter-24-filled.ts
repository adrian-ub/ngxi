import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPresenter24FilledIcon],svg[fluent-presenter-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.245 12.997c.709 0 1.022.892.469 1.335l-4.718 3.778v1.644a2.25 2.25 0 0 1-2.25 2.25H10.25A2.25 2.25 0 0 1 8 19.754V18.11l-4.72-3.778c-.553-.443-.24-1.335.47-1.335zM8.75 9h6.495a1.75 1.75 0 0 1 1.744 1.606l.006.143V12H7v-1.25a1.75 1.75 0 0 1 1.607-1.744zh6.495zM12 2a3 3 0 1 1 0 6a3 3 0 0 1 0-6"></svg:path>`,
})
export class FluentPresenter24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
