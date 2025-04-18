import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowCircleLeft24FilledIcon],svg[fluent-arrow-circle-left-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2m.28 14.53a.75.75 0 0 1-.976.073l-.085-.072l-4-4.001a.75.75 0 0 1-.073-.977l.073-.084l4.001-4a.75.75 0 0 1 1.133.977l-.072.084l-2.722 2.72h6.692a.75.75 0 0 1 .743.649L17 12a.75.75 0 0 1-.648.743l-.102.007H9.56l2.72 2.72a.75.75 0 0 1 .073.977z"></svg:path>`,
})
export class FluentArrowCircleLeft24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
