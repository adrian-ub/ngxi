import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentNotebookSubsection24RegularIcon],svg[fluent-notebook-subsection-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M9 2a4.5 4.5 0 0 0-4.5 4.5v9.4c0 .98.626 1.813 1.5 2.122V6.5a3 3 0 0 1 3-3h5.002A2.25 2.25 0 0 0 11.88 2z"></svg:path><svg:path d="M7 6.75A2.25 2.25 0 0 1 9.25 4.5H15V2.75a.75.75 0 0 1 1.5 0v18.5a.75.75 0 0 1-1.5 0V20H9.25A2.25 2.25 0 0 1 7 17.75zm8 11.75V6H9.25a.75.75 0 0 0-.75.75v11c0 .414.336.75.75.75z"></svg:path></svg:g>`,
})
export class FluentNotebookSubsection24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
