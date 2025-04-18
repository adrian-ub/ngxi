import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMultiselectRtl24FilledIcon],svg[fluent-multiselect-rtl-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.708 3.293a1 1 0 0 0-1.415 0L19 4.586l-.292-.293a1 1 0 1 0-1.415 1.414l1 1a1 1 0 0 0 1.415 0l2-2a1 1 0 0 0 0-1.414M3 16.993h11.004a1 1 0 0 1 .117 1.994l-.117.006H3A1 1 0 0 1 2.883 17zM3 11h11.004a1 1 0 0 1 .117 1.993l-.117.007H3a1 1 0 0 1-.117-1.993zm0-6h11.004a1 1 0 0 1 .117 1.993L14.003 7H3a1 1 0 0 1-.117-1.993zm17.293 11.293a1 1 0 0 1 1.415 1.414l-2 2a1 1 0 0 1-1.415 0l-1-1a1 1 0 0 1 1.415-1.414l.293.293z"></svg:path>`,
})
export class FluentMultiselectRtl24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
