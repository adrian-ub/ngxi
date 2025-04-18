import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentVideoAdd20FilledIcon],svg[fluent-video-add-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6a3 3 0 0 1 3-3h5a3 3 0 0 1 3 3v6c0 1.31-.84 2.424-2.01 2.833q.01-.165.01-.333a5.5 5.5 0 0 0-9-4.243zm14.037 7.776L14 12.369V5.63l2.037-1.406a1.25 1.25 0 0 1 1.96 1.028v7.495a1.25 1.25 0 0 1-1.96 1.029M10 14.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-4-2a.5.5 0 0 0-1 0V14H3.5a.5.5 0 0 0 0 1H5v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H6z"></svg:path>`,
})
export class FluentVideoAdd20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
