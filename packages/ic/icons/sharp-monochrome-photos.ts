import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpMonochromePhotosIcon],svg[ic-sharp-monochrome-photos-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 5h-5.2L15 3H9L7.2 5H2v16h20zm-2 14h-8v-1c-2.8 0-5-2.2-5-5s2.2-5 5-5V7h8zm-3-6c0-2.8-2.2-5-5-5v1.8c1.8 0 3.2 1.4 3.2 3.2s-1.4 3.2-3.2 3.2V18c2.8 0 5-2.2 5-5m-8.2 0c0 1.8 1.4 3.2 3.2 3.2V9.8c-1.8 0-3.2 1.4-3.2 3.2"></svg:path>`,
})
export class IcSharpMonochromePhotosIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
