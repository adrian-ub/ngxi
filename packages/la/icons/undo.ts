import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laUndoIcon],svg[la-undo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.781 5.281l-8 8l-.687.719l.687.719l8 8l1.438-1.438L7.938 15H21c2.754 0 5 2.246 5 5v7h2v-7c0-3.844-3.156-7-7-7H7.937l6.282-6.281z"></svg:path>`,
})
export class LaUndoIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
