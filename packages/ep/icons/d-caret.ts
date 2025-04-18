import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[epDCaretIcon],svg[ep-d-caret-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m512 128l288 320H224zM224 576h576L512 896z"></svg:path>`,
})
export class EpDCaretIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
