import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMultiselectLtr24FilledIcon],svg[fluent-multiselect-ltr-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.707 3.293a1 1 0 0 0-1.414 0L4 4.586l-.293-.293a1 1 0 0 0-1.414 1.414l1 1a1 1 0 0 0 1.414 0l2-2a1 1 0 0 0 0-1.414M10 16.993h11.003a1 1 0 0 1 .117 1.994l-.117.006H10A1 1 0 0 1 9.883 17zM10 11h11.003a1 1 0 0 1 .117 1.993l-.117.007H10a1 1 0 0 1-.117-1.993zm0-6h11.003a1 1 0 0 1 .117 1.993L21.003 7H10a1 1 0 0 1-.117-1.993zM5.293 16.293a1 1 0 0 1 1.414 1.414l-2 2a1 1 0 0 1-1.414 0l-1-1a1 1 0 1 1 1.414-1.414l.293.293z"></svg:path>`,
})
export class FluentMultiselectLtr24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
