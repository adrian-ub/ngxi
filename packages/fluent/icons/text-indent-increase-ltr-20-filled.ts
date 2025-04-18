import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextIndentIncreaseLtr20FilledIcon],svg[fluent-text-indent-increase-ltr-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 4.75A.75.75 0 0 1 6.75 4h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 6 4.75M6.75 9a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5zm0 5a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5zM3.03 7.72a.75.75 0 0 0-1.06 1.06l.97.97l-.97.97a.75.75 0 1 0 1.06 1.06l1.5-1.5a.75.75 0 0 0 0-1.06z"></svg:path>`,
})
export class FluentTextIndentIncreaseLtr20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
