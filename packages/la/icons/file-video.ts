import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laFileVideoIcon],svg[la-file-video-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3v26h20V9.594l-.281-.313l-6-6L19.406 3zm2 2h10v6h6v16H8zm12 1.438L22.563 9H20zm-7 6.78v9.563l1.5-.937l5-3L20.938 18l-1.438-.844l-5-3zm2 3.532L17.094 18L15 19.25z"></svg:path>`,
})
export class LaFileVideoIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
