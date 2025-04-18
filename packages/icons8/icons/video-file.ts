import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icons8VideoFileIcon],svg[icons8-video-file-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3v26h20V9.594l-.28-.313l-6-6l-.314-.28H6zm2 2h10v6h6v16H8zm12 1.438L22.563 9H20zm-7 6.78v9.562l1.5-.936l5-3L20.938 18l-1.438-.844l-5-3zm2 3.532L17.094 18L15 19.25z"></svg:path>`,
})
export class Icons8VideoFileIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
