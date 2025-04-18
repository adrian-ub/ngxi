import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHangoutVideoOffOutlineSharpIcon],svg[material-symbols-hangout-video-off-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.9 8.05H14v3.1zm3.1 3.1L18 8v7.15zm6 6l2 2V4H6.85l2 2H20zM4 4l2 2H4v12h11.15l-2-2H6V8.85L.7 3.5l1.4-1.4l19.8 19.8l-1.4 1.4l-3.35-3.3H2V4zm5.6 8.45"></svg:path>`,
})
export class MaterialSymbolsHangoutVideoOffOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
