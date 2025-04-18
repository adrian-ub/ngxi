import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxPinIcon],svg[bx-pin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 22l1-2v-3h5a1 1 0 0 0 1-1v-1.586c0-.526-.214-1.042-.586-1.414L17 11.586V8a1 1 0 0 0 1-1V4c0-1.103-.897-2-2-2H8c-1.103 0-2 .897-2 2v3a1 1 0 0 0 1 1v3.586L5.586 13A2 2 0 0 0 5 14.414V16a1 1 0 0 0 1 1h5v3zM8 4h8v2H8zM7 14.414l1.707-1.707A1 1 0 0 0 9 12V8h6v4c0 .266.105.52.293.707L17 14.414V15H7z"></svg:path>`,
})
export class BxPinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
