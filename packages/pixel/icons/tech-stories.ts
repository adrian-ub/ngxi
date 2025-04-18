import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelTechStoriesIcon],svg[pixel-tech-stories-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.005 2V1H2v1H1v20.005h1v1h20.005v-1h1V2zm-1 3H3V3h18.005zm0 11.003H3V9.002h18.005zM3 17.003h3.001v3.001h-3zm16.004 1H8.002v-1h11.002zM8.002 19.005h11.002v1H8.002zM3 6.001h12.003v2H3zm5.002 16.004v-1h11.002v1z"></svg:path>`,
})
export class PixelTechStoriesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
