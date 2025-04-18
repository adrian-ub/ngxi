import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextIndentIncreaseLtr24RegularIcon],svg[fluent-text-indent-increase-ltr-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.75 16a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1 0-1.5zM2.72 9.22a.75.75 0 0 1 .976-.073l.084.073l2 2a.75.75 0 0 1 .073.976l-.073.084l-2 2a.75.75 0 0 1-1.133-.976l.073-.084l1.47-1.47l-1.47-1.47a.75.75 0 0 1 0-1.06M20.75 11a.75.75 0 0 1 0 1.5h-12a.75.75 0 0 1 0-1.5zm-3-5a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1 0-1.5z"></svg:path>`,
})
export class FluentTextIndentIncreaseLtr24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
