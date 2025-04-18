import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsTextFormatRemoveIcon],svg[lineicons-text-format-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.42 4.945a.75.75 0 0 0-1.371 0l-4.89 11a.75.75 0 1 0 1.372.61L5.9 13.47h5.666l1.37 3.085a.75.75 0 0 0 1.371-.61zm1.48 7.025H6.568l2.166-4.873z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M14.218 19.5H3.25a.75.75 0 1 1 0-1.5h10.969a.75.75 0 1 1 0 1.5m2.973-5.308a.75.75 0 0 0 0 1.06l1.483 1.484l-1.483 1.484a.75.75 0 1 0 1.06 1.06l1.484-1.483l1.484 1.484a.75.75 0 0 0 1.06-1.06l-1.483-1.485l1.483-1.484a.75.75 0 1 0-1.06-1.06l-1.484 1.484l-1.484-1.484a.75.75 0 0 0-1.06 0"></svg:path>`,
})
export class LineiconsTextFormatRemoveIcon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}
