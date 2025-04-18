import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentComment48FilledIcon],svg[fluent-comment-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 13.25A7.25 7.25 0 0 1 11.25 6h25.5A7.25 7.25 0 0 1 44 13.25v15.5A7.25 7.25 0 0 1 36.75 36H26.397l-10.85 7.658C14.058 44.71 12 43.644 12 41.82V36h-.75A7.25 7.25 0 0 1 4 28.75z"></svg:path>`,
})
export class FluentComment48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
