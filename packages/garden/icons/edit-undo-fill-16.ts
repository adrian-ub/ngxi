import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenEditUndoFill16Icon],svg[garden-edit-undo-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="M15.5 11.25A7.75 7.75 0 0 0 7.75 3.5C5.09 3.5 2.54 4.94 1 7.06"></svg:path><svg:path fill="currentColor" d="M4.79 8H1c-.55 0-1-.45-1-1V3.21c0-.45.54-.67.85-.35l4.29 4.29c.32.31.1.85-.35.85"></svg:path>`,
})
export class GardenEditUndoFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
