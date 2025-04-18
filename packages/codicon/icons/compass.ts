import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconCompassIcon],svg[codicon-compass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m9.009 6.991l2.024 4.042L6.991 9.01L4.967 4.967zm.426 2.444L8.481 7.52l-1.916-.955l.954 1.917z"></svg:path><svg:path fill-rule="evenodd" d="M13.98 8.5a6 6 0 0 1-5.48 5.48V13h-1v.98a6 6 0 0 1-5.482-5.518H3v-1h-.976A6 6 0 0 1 7.5 2.02V3h1v-.98a6 6 0 0 1 5.48 5.48H13v1zM8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class CodiconCompassIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
