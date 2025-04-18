import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiMagnifyRemoveOutlineIcon],svg[mdi-magnify-remove-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 5l1.5-1.5zm-6 0C7 14 5 12 5 9.5S7 5 9.5 5S14 7 14 9.5S12 14 9.5 14m1.41-2.38L9.5 10.21l-1.41 1.41l-.71-.71L8.79 9.5L7.38 8.09l.71-.71L9.5 8.79l1.41-1.41l.71.71l-1.41 1.41l1.41 1.41z"></svg:path>`,
})
export class MdiMagnifyRemoveOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
