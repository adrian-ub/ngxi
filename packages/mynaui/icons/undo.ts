import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiUndoIcon],svg[mynaui-undo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M5.636 18.364A9 9 0 1 0 12 3C7.942 3 5.482 5.705 3 8.5"></svg:path><svg:path d="M3 4.5v4h4"></svg:path></svg:g>`,
})
export class MynauiUndoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
