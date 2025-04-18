import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCloseOctagonOutlineIcon],svg[mdi-close-octagon-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.27 3L3 8.27v7.46L8.27 21h7.46C17.5 19.24 21 15.73 21 15.73V8.27L15.73 3M9.1 5h5.8L19 9.1v5.8L14.9 19H9.1L5 14.9V9.1m4.12-1.39L7.71 9.12L10.59 12l-2.88 2.88l1.41 1.41L12 13.41l2.88 2.88l1.41-1.41L13.41 12l2.88-2.88l-1.41-1.41L12 10.59"></svg:path>`,
})
export class MdiCloseOctagonOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
