import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonRowDeleteIcon],svg[carbon-row-delete-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 30H4a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2M4 22h-.002L4 28h20v-6zM30 3.41L28.59 2L25 5.59L21.41 2L20 3.41L23.59 7L20 10.59L21.41 12L25 8.41L28.59 12L30 10.59L26.41 7z"></svg:path><svg:path fill="currentColor" d="M4 14V8h14V6H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h22v-2Z"></svg:path>`,
})
export class CarbonRowDeleteIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
