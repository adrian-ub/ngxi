import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTableBottomRow48FilledIcon],svg[fluent-table-bottom-row-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M42 12.25A6.25 6.25 0 0 0 35.75 6h-23.5A6.25 6.25 0 0 0 6 12.25V29h2.5V12.25a3.75 3.75 0 0 1 3.75-3.75h23.5a3.75 3.75 0 0 1 3.75 3.75V29H42zM8.5 40.75a6.24 6.24 0 0 1-2.5-5V31.5h10.5V42h-4.25a6.22 6.22 0 0 1-3.75-1.25M42 31.5H31.5V42h4.25a6.22 6.22 0 0 0 3.75-1.25a6.24 6.24 0 0 0 2.5-5zM29 42H19V31.5h10z"></svg:path>`,
})
export class FluentTableBottomRow48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
