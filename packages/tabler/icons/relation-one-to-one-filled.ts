import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerRelationOneToOneFilledIcon],svg[tabler-relation-one-to-one-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 4a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zM9 9H8a1 1 0 1 0 0 2v3a1 1 0 0 0 2 0v-4a1 1 0 0 0-1-1m7 0h-1a1 1 0 0 0 0 2v3a1 1 0 0 0 2 0v-4a1 1 0 0 0-1-1m-4 3.5a1 1 0 0 0-1 1v.01a1 1 0 0 0 2 0v-.01a1 1 0 0 0-1-1m0-3a1 1 0 0 0-1 1v.01a1 1 0 0 0 2 0v-.01a1 1 0 0 0-1-1"></svg:path>`,
})
export class TablerRelationOneToOneFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
