import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laUndoAltIcon],svg[la-undo-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C12 3 8.4 4.8 6 7.7V4H4v8h8v-2H6.8c2-3 5.3-5 9.2-5c6.1 0 11 4.9 11 11s-4.9 11-11 11S5 22.1 5 16H3c0 7.2 5.8 13 13 13s13-5.8 13-13S23.2 3 16 3"></svg:path>`,
})
export class LaUndoAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
