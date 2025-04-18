import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDocument48FilledIcon],svg[fluent-document-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 4H12.25A4.25 4.25 0 0 0 8 8.25v31.5A4.25 4.25 0 0 0 12.25 44h23.5A4.25 4.25 0 0 0 40 39.75V20H28.25A4.25 4.25 0 0 1 24 15.75zm15.626 13.5a4.3 4.3 0 0 0-.87-1.263L27.762 5.245a4.3 4.3 0 0 0-1.263-.871V15.75c0 .966.784 1.75 1.75 1.75z"></svg:path>`,
})
export class FluentDocument48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
