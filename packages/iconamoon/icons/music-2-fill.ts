import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonMusic2FillIcon],svg[iconamoon-music-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 7.019v-4a1 1 0 0 0-.354-.782a1 1 0 0 0-.829-.22L8.852 4.01A1 1 0 0 0 8 5.017v9.519A4 4 0 1 0 10 18V9.846L20 8.18v4.355A4 4 0 1 0 22 16z" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonMusic2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
