import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonColumnDeleteIcon],svg[carbon-column-delete-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 3.41L28.59 2L25 5.59L21.41 2L20 3.41L23.59 7L20 10.59L21.41 12L25 8.41L28.59 12L30 10.59L26.41 7z"></svg:path><svg:path fill="currentColor" d="M24 14v14h-6V6h-2v22a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V14zM10 30H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v20a2 2 0 0 1-2 2M4 8v20h6V8z"></svg:path>`,
})
export class CarbonColumnDeleteIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
