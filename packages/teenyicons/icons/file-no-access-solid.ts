import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsFileNoAccessSolidIcon],svg[teenyicons-file-no-access-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 5a2.5 2.5 0 0 0-2.086 3.879L8.88 5.414A2.5 2.5 0 0 0 7.5 5m0 5c-.51 0-.983-.152-1.379-.414L9.586 6.12A2.5 2.5 0 0 1 7.5 10"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M1 1.5A1.5 1.5 0 0 1 2.5 0h8.207L14 3.293V13.5a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 1 13.5zm3 6a3.5 3.5 0 1 1 7 0a3.5 3.5 0 0 1-7 0" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsFileNoAccessSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
