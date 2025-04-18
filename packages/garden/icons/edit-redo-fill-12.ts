import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenEditRedoFill12Icon],svg[garden-edit-redo-fill-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="M.5 8.25C.5 5.07 3.07 2.5 6.25 2.5C9 2.5 9.95 3.85 11 5"></svg:path><svg:path fill="currentColor" d="M11 6H8.5c-.2 0-.38-.12-.46-.31s-.04-.4.11-.54l3-3a.499.499 0 0 1 .85.35V5c0 .55-.45 1-1 1"></svg:path>`,
})
export class GardenEditRedoFill12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
