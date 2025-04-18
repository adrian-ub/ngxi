import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCutIcon],svg[tdesign-cut-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.414 4.586a2 2 0 1 0-2.828 2.828a2 2 0 0 0 2.828-2.828M3.172 3.172a4 4 0 0 1 6.274 4.86L12 10.586l8-8L21.414 4L9.446 15.968a4.002 4.002 0 0 1-6.274 4.86a4 4 0 0 1 4.86-6.274L10.586 12L8.032 9.446a4.002 4.002 0 0 1-4.86-6.274M15 13.586L21.414 20L20 21.414L13.586 15zm-7.586 3a2 2 0 1 0-2.828 2.828a2 2 0 0 0 2.828-2.828"></svg:path>`,
})
export class TdesignCutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
