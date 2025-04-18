import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineUploadBox1SolidIcon],svg[streamline-upload-box-1-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.375 0H3.383A1.5 1.5 0 0 0 2.07.772L.347 3.875h6.028zM0 12.5V5.125h14V12.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 0 12.5m13.653-8.625H7.625V0h2.992a1.5 1.5 0 0 1 1.312.772zm-9.3 5.064l2.293-2.292a.5.5 0 0 1 .708 0l2.292 2.292a.5.5 0 0 1-.353.854H8v2a1 1 0 1 1-2 0v-2H4.707a.5.5 0 0 1-.353-.854Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineUploadBox1SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
