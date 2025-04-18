import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMayanPyramidIcon],svg[hugeicons-mayan-pyramid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.5 17H4c-1.655 0-2 .345-2 2v1c0 1.655.345 2 2 2h16c1.655 0 2-.345 2-2v-1c0-1.655-.345-2-2-2h-4.5M9 12H6c-1.655 0-2 .345-2 2v3m11-5h3c1.655 0 2 .345 2 2v3M6 12V9c0-1.655.345-2 2-2h8c1.655 0 2 .345 2 2v3M9 7V4c0-1.655.345-2 2-2h2c1.655 0 2 .345 2 2v3m-1.5 0L16 22M10.5 7L8 22" color="currentColor"></svg:path>`,
})
export class HugeiconsMayanPyramidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
