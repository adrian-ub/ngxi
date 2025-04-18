import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMultiselectRtl16FilledIcon],svg[fluent-multiselect-rtl-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.03 3.03a.75.75 0 0 0-1.06-1.06L12.5 3.44l-.47-.47a.75.75 0 1 0-1.06 1.06l1 1a.75.75 0 0 0 1.06 0zm-2 11l2-2a.75.75 0 1 0-1.06-1.06l-1.47 1.47l-.47-.47a.75.75 0 1 0-1.06 1.06l1 1a.75.75 0 0 0 1.06 0M1.75 3a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5zm0 4.25a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5zm0 4.25a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class FluentMultiselectRtl16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
