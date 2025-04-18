import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsTextFormatIcon],svg[lineicons-text-format-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11 3.25a.75.75 0 0 1 .685.445l5.778 13a.75.75 0 0 1-1.37.61l-1.657-3.727H7.564l-1.656 3.726a.75.75 0 1 1-1.371-.609l5.778-13A.75.75 0 0 1 11 3.25m-2.77 8.828h5.54L11 5.847z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M19.75 4v13a.75.75 0 0 0 1.5 0V4a.75.75 0 1 0-1.5 0M17.5 20.75h-13a.75.75 0 0 1 0-1.5h13a.75.75 0 1 1 0 1.5"></svg:path>`,
})
export class LineiconsTextFormatIcon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}
