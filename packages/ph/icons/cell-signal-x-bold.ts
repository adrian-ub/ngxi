import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCellSignalXBoldIcon],svg[ph-cell-signal-x-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216.49 191.51a12 12 0 0 1-17 17L184 193l-15.51 15.52a12 12 0 0 1-17-17L167 176l-15.52-15.51a12 12 0 0 1 17-17L184 159l15.51-15.52a12 12 0 0 1 17 17L201 176ZM160 120a12 12 0 0 0 12-12V72a12 12 0 0 0-24 0v36a12 12 0 0 0 12 12m40 0a12 12 0 0 0 12-12V32a12 12 0 0 0-24 0v76a12 12 0 0 0 12 12m-80-20a12 12 0 0 0-12 12v88a12 12 0 0 0 24 0v-88a12 12 0 0 0-12-12m-40 40a12 12 0 0 0-12 12v48a12 12 0 0 0 24 0v-48a12 12 0 0 0-12-12m-40 40a12 12 0 0 0-12 12v8a12 12 0 0 0 24 0v-8a12 12 0 0 0-12-12"></svg:path>`,
})
export class PhCellSignalXBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
