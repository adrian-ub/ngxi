import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFolderSearch20FilledIcon],svg[fluent-folder-search-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 3A2.5 2.5 0 0 0 2 5.5V7h5.086a.5.5 0 0 0 .353-.146L9.5 4.793l-1.28-1.28A1.75 1.75 0 0 0 6.982 3zM2 14.5V8h5.086a1.5 1.5 0 0 0 1.06-.44L10.707 5H15.5A2.5 2.5 0 0 1 18 7.5V12h-.027A4.5 4.5 0 1 0 13 16.973V17H4.5A2.5 2.5 0 0 1 2 14.5M13.5 16c.786 0 1.512-.26 2.096-.697l2.55 2.55a.5.5 0 1 0 .708-.707l-2.55-2.55A3.5 3.5 0 1 0 13.5 16m0-1a2.5 2.5 0 1 1 0-5a2.5 2.5 0 0 1 0 5"></svg:path>`,
})
export class FluentFolderSearch20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
