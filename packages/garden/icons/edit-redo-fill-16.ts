import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenEditRedoFill16Icon],svg[garden-edit-redo-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="M.5 11.25A7.75 7.75 0 0 1 8.25 3.5c2.66 0 5.21 1.44 6.75 3.56"></svg:path><svg:path fill="currentColor" d="M11.21 8H15c.55 0 1-.45 1-1V3.21c0-.45-.54-.67-.85-.35l-4.29 4.29c-.32.31-.1.85.35.85"></svg:path>`,
})
export class GardenEditRedoFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
