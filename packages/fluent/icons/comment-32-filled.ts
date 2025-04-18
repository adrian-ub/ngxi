import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentComment32FilledIcon],svg[fluent-comment-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 3A4.5 4.5 0 0 0 2 7.5v12A4.5 4.5 0 0 0 6.5 24H8v4.081c0 1.706 2 2.629 3.298 1.522L17.868 24H25.5a4.5 4.5 0 0 0 4.5-4.5v-12A4.5 4.5 0 0 0 25.5 3z"></svg:path>`,
})
export class FluentComment32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
