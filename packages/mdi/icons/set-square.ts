import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSetSquareIcon],svg[mdi-set-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.7 17.7l-1.1 1.1l-.7-.8l1.1-1l-2-2l-1 1.1l-.7-.7l1.1-1.1l-1.9-1.9l-1.1 1.1l-.7-.7l1.1-1.1l-2-1.9l-1.1 1.1l-.7-.7L9 9L7.1 7.1L6 8.1l-.7-.7l1.1-1.1L4 4v16h16zM7 17v-5.8l5.8 5.8z"></svg:path>`,
})
export class MdiSetSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
