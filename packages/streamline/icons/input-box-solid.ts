import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInputBoxSolidIcon],svg[streamline-input-box-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 1.75a.75.75 0 0 0 0 1.5h.25v7.5H4a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5h-.25v-7.5H6a.75.75 0 0 0 0-1.5zM3 4.5H1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h2zm4 5h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1H7z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineInputBoxSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
