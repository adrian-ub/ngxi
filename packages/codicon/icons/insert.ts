import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconInsertIcon],svg[codicon-insert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="m14 1l1 1v4l-1 1H6L5 6V2l1-1zm0 1H6v4h8zm0 7l1 1v4l-1 1H6l-1-1v-4l1-1zm0 1H6v4h8z" clip-rule="evenodd"></svg:path><svg:path d="m1 6.393l1.614 1.614L1 9.62l.694.693L4 8.007L1.694 5.7z"></svg:path></svg:g>`,
})
export class CodiconInsertIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
