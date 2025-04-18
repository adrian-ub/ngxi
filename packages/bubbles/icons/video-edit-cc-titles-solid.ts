import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesVideoEditCcTitlesSolidIcon],svg[bubbles-video-edit-cc-titles-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.333.667H1.667A1.667 1.667 0 0 0 0 2.333v11.334a1.667 1.667 0 0 0 1.667 1.666h12.666A1.666 1.666 0 0 0 16 13.666V2.333A1.666 1.666 0 0 0 14.333.667m-2.666 5.5h-1.334A.835.835 0 0 0 9.5 7v2a.835.835 0 0 0 .833.833h1.334A.834.834 0 0 0 12.5 9a.507.507 0 0 1 .69-.472a.49.49 0 0 1 .31.458a1.84 1.84 0 0 1-1.833 1.847h-1.334A1.835 1.835 0 0 1 8.5 9V7a1.835 1.835 0 0 1 1.833-1.833h1.334A1.835 1.835 0 0 1 13.5 7a.51.51 0 0 1-.69.476a.49.49 0 0 1-.31-.455V7a.835.835 0 0 0-.833-.833m-6 0H4.333A.835.835 0 0 0 3.5 7v2a.835.835 0 0 0 .833.833h1.334A.835.835 0 0 0 6.5 9a.507.507 0 0 1 .69-.472a.49.49 0 0 1 .31.458a1.84 1.84 0 0 1-1.833 1.847H4.333A1.835 1.835 0 0 1 2.5 9V7a1.835 1.835 0 0 1 1.833-1.833h1.334A1.835 1.835 0 0 1 7.5 7a.51.51 0 0 1-.69.476a.49.49 0 0 1-.31-.455V7a.835.835 0 0 0-.833-.833"></svg:path>`,
})
export class BubblesVideoEditCcTitlesSolidIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
