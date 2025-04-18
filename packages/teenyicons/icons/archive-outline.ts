import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsArchiveOutlineIcon],svg[teenyicons-archive-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M5 8.5h5M.5.5h14v4H.5zm1 4v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-9z"></svg:path>`,
})
export class TeenyiconsArchiveOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
