import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDocument48LightIcon],svg[fluent-document-48-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 8.25A3.25 3.25 0 0 1 12.25 5H24v10.75A4.25 4.25 0 0 0 28.25 20H39v19.75A3.25 3.25 0 0 1 35.75 43h-23.5A3.25 3.25 0 0 1 9 39.75zm31 11.264v-.042a4.25 4.25 0 0 0-1.245-2.924L27.452 5.245A4.25 4.25 0 0 0 24.447 4H12.25A4.25 4.25 0 0 0 8 8.25v31.5A4.25 4.25 0 0 0 12.25 44h23.5A4.25 4.25 0 0 0 40 39.75zM25 5.047a3.25 3.25 0 0 1 1.745.905l11.303 11.303A3.25 3.25 0 0 1 38.953 19H28.25A3.25 3.25 0 0 1 25 15.75z"></svg:path>`,
})
export class FluentDocument48LightIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
