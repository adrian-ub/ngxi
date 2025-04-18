import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerSquaresFilledIcon],svg[tabler-squares-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M19 7a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3z"></svg:path><svg:path d="M14 2a3 3 0 0 1 3 2.999L10 5a5 5 0 0 0-5 5l-.001 7l-.175-.005A3 3 0 0 1 2 14V5a3 3 0 0 1 3-3z"></svg:path></svg:g>`,
})
export class TablerSquaresFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
