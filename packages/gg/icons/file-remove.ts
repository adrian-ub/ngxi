import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggFileRemoveIcon],svg[gg-file-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M9 15h6v-2H9z"></svg:path><svg:path fill-rule="evenodd" d="M6 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V9a7 7 0 0 0-7-7zm0 2h7v5h6v10a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1m9 .1A5.01 5.01 0 0 1 18.584 7H15z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgFileRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
