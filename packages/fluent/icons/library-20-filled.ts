import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLibrary20FilledIcon],svg[fluent-library-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 2C2.67 2 2 2.67 2 3.498v12.981c0 .828.671 1.498 1.5 1.498h1c.827 0 1.499-.67 1.499-1.498V3.498C5.999 2.67 5.327 2 4.499 2zm4.998 0c-.828 0-1.5.67-1.5 1.498v12.981c0 .828.672 1.498 1.5 1.498h1c.828 0 1.499-.67 1.499-1.498V3.498c0-.827-.671-1.498-1.5-1.498zm7.22 4.157a1.5 1.5 0 0 0-1.87-1.106l-.745.21a1.5 1.5 0 0 0-1.06 1.742l2.003 9.799a1.5 1.5 0 0 0 1.839 1.151l.985-.25c.79-.2 1.274-.994 1.092-1.787z"></svg:path>`,
})
export class FluentLibrary20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
