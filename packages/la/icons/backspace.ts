import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laBackspaceIcon],svg[la-backspace-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.594 7l-.313.281l-8 8l-.687.719l.687.719l8 8l.313.281H29V7zm.844 2H27v14H12.437l-7-7zm2.718 2.75l-1.406 1.406L16.594 16l-2.844 2.844l1.406 1.406L18 17.406l2.844 2.844l1.406-1.406L19.406 16l2.844-2.844l-1.406-1.406L18 14.594z"></svg:path>`,
})
export class LaBackspaceIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
