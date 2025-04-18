import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFilePercentIcon],svg[mdi-file-percent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14 2l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zM7.37 20L15 12.35L13.65 11L6 18.65zM13 9h5.5L13 3.5zm-5.5 2A1.5 1.5 0 0 0 6 12.5A1.5 1.5 0 0 0 7.5 14A1.5 1.5 0 0 0 9 12.5A1.5 1.5 0 0 0 7.5 11m6 6a1.5 1.5 0 0 0-1.5 1.5a1.5 1.5 0 0 0 1.5 1.5a1.5 1.5 0 0 0 1.5-1.5a1.5 1.5 0 0 0-1.5-1.5"></svg:path>`,
})
export class MdiFilePercentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
