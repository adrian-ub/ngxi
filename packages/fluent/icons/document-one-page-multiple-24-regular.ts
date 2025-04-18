import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDocumentOnePageMultiple24RegularIcon],svg[fluent-document-one-page-multiple-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.747 5.5A.75.75 0 0 0 7 6.25c0 .414.334.75.747.75h6.006a.75.75 0 0 0 .747-.75a.75.75 0 0 0-.747-.75zM7 15.25c0-.414.334-.75.747-.75h6.006c.413 0 .747.336.747.75s-.334.75-.747.75H7.747A.75.75 0 0 1 7 15.25M7.747 10a.75.75 0 0 0-.747.75c0 .414.334.75.747.75h6.006a.75.75 0 0 0 .747-.75a.75.75 0 0 0-.747-.75zM6.25 2A2.25 2.25 0 0 0 4 4.25v13a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-13A2.25 2.25 0 0 0 15.25 2zM5.5 4.25q0-.038.004-.077A.75.75 0 0 1 6.25 3.5h9a.75.75 0 0 1 .75.75v13a.75.75 0 0 1-.75.75h-9a.75.75 0 0 1-.75-.75zM6.629 20.5A2.25 2.25 0 0 0 8.75 22h6.5A4.75 4.75 0 0 0 20 17.25V6.75a2.25 2.25 0 0 0-1.5-2.122V17.25a3.25 3.25 0 0 1-3.25 3.25z"></svg:path>`,
})
export class FluentDocumentOnePageMultiple24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
