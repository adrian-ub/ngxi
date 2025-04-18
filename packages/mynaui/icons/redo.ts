import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiRedoIcon],svg[mynaui-redo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M18.364 18.364A9 9 0 1 1 12 3c4.058 0 6.518 2.705 9 5.5"></svg:path><svg:path d="M21 4.5v4h-4"></svg:path></svg:g>`,
})
export class MynauiRedoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
