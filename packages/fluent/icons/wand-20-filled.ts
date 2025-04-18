import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentWand20FilledIcon],svg[fluent-wand-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 2.5a.5.5 0 0 0-1 0V3h-.5a.5.5 0 0 0 0 1h.5v.5a.5.5 0 0 0 1 0V4h.5a.5.5 0 0 0 0-1H17zm-10 3a.5.5 0 0 1-.5.5H6v.5a.5.5 0 0 1-1 0V6h-.5a.5.5 0 0 1 0-1H5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 .5.5m9 9a.5.5 0 0 1-.5.5H15v.5a.5.5 0 0 1-1 0V15h-.5a.5.5 0 0 1 0-1h.5v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 .5.5m-2.565-7.934a1.914 1.914 0 0 0-2.708 0l-.477.477l2.707 2.707l.478-.477a1.914 1.914 0 0 0 0-2.707m-1.185 3.891L9.543 7.75l-6.982 6.982a1.914 1.914 0 1 0 2.707 2.707z"></svg:path>`,
})
export class FluentWand20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
