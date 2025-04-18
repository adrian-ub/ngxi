import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineFileAddAlternateSolidIcon],svg[streamline-file-add-alternate-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.5 0A1.5 1.5 0 0 0 2 1.5v5.189A2 2 0 0 1 5.25 8.25v.5h.5a2 2 0 1 1 0 4h-.5v.5c0 .265-.052.518-.145.75H12.5a1.5 1.5 0 0 0 1.5-1.5v-8a.5.5 0 0 0-.146-.354l-4-4A.5.5 0 0 0 9.5 0zM4 8.25a.75.75 0 0 0-1.5 0V10H.75a.75.75 0 0 0 0 1.5H2.5v1.75a.75.75 0 0 0 1.5 0V11.5h1.75a.75.75 0 0 0 0-1.5H4z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineFileAddAlternateSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
