import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineFileRemoveAlternateSolidIcon],svg[streamline-file-remove-alternate-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.5 0A1.5 1.5 0 0 0 2 1.5v6.75h3.75a2 2 0 1 1 0 4H2v.25A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5v-8a.5.5 0 0 0-.146-.354l-4-4A.5.5 0 0 0 9.5 0zm3 10.25a.75.75 0 0 0-.75-.75h-5a.75.75 0 1 0 0 1.5h5a.75.75 0 0 0 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineFileRemoveAlternateSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
