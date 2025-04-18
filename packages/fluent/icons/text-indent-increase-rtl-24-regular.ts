import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextIndentIncreaseRtl24RegularIcon],svg[fluent-text-indent-increase-rtl-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.25 16a.75.75 0 0 0 0 1.5h9a.75.75 0 0 0 0-1.5zm15.03-6.78a.75.75 0 0 0-.976-.073l-.084.073l-2 2a.75.75 0 0 0-.073.976l.073.084l2 2a.75.75 0 0 0 1.133-.976l-.073-.084l-1.47-1.47l1.47-1.47a.75.75 0 0 0 0-1.06M3.25 11a.75.75 0 0 0 0 1.5h12a.75.75 0 0 0 0-1.5zm3-5a.75.75 0 0 0 0 1.5h9a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class FluentTextIndentIncreaseRtl24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
