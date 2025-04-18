import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentImageBorder32FilledIcon],svg[fluent-image-border-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.232 16.232L10 20.465V10h12v10.465l-4.232-4.233a2.5 2.5 0 0 0-3.536 0M19 11a2 2 0 1 0 0 4a2 2 0 0 0 0-4m-2.646 6.646L20.707 22h-9.414l4.353-4.354a.5.5 0 0 1 .708 0M3 7.5A4.5 4.5 0 0 1 7.5 3h17A4.5 4.5 0 0 1 29 7.5v17a4.5 4.5 0 0 1-4.5 4.5h-17A4.5 4.5 0 0 1 3 24.5zM9 8a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1z"></svg:path>`,
})
export class FluentImageBorder32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
