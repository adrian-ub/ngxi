import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phUploadBoldIcon],svg[ph-upload-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M188 184a16 16 0 1 1 16-16a16 16 0 0 1-16 16m36-68h-44a12 12 0 0 0 0 24h40v56H36v-56h40a12 12 0 0 0 0-24H32a20 20 0 0 0-20 20v64a20 20 0 0 0 20 20h192a20 20 0 0 0 20-20v-64a20 20 0 0 0-20-20M88.49 80.49L116 53v75a12 12 0 0 0 24 0V53l27.51 27.52a12 12 0 1 0 17-17l-48-48a12 12 0 0 0-17 0l-48 48a12 12 0 1 0 17 17Z"></svg:path>`,
})
export class PhUploadBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
