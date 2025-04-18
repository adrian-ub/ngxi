import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCellSignalXIcon],svg[ph-cell-signal-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213.66 194.34a8 8 0 0 1-11.32 11.32L184 187.31l-18.34 18.35a8 8 0 0 1-11.32-11.32L172.69 176l-18.35-18.34a8 8 0 0 1 11.32-11.32L184 164.69l18.34-18.35a8 8 0 0 1 11.32 11.32L195.31 176ZM160 120a8 8 0 0 0 8-8V72a8 8 0 0 0-16 0v40a8 8 0 0 0 8 8m40 0a8 8 0 0 0 8-8V32a8 8 0 0 0-16 0v80a8 8 0 0 0 8 8m-80-16a8 8 0 0 0-8 8v88a8 8 0 0 0 16 0v-88a8 8 0 0 0-8-8m-40 40a8 8 0 0 0-8 8v48a8 8 0 0 0 16 0v-48a8 8 0 0 0-8-8m-40 40a8 8 0 0 0-8 8v8a8 8 0 0 0 16 0v-8a8 8 0 0 0-8-8"></svg:path>`,
})
export class PhCellSignalXIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
