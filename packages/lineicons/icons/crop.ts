import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsCropIcon],svg[lineicons-crop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M57.7 50.4h-5.1V12.2l4.4-5c.8-.9.7-2.4-.2-3.2s-2.4-.7-3.2.2l-4.3 4.9H15.9V4c0-1.2-1-2.2-2.2-2.2s-2.2 1-2.2 2.2v5.1H6.3C5 9.1 4 10.1 4 11.4s1 2.2 2.2 2.2h5.1v36.8h-5c-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2h5.1V60c0 1.2 1 2.2 2.2 2.2s2.2-1 2.2-2.2v-5.1H48V60c0 1.2 1 2.2 2.2 2.2s2.2-1 2.2-2.2v-5.1h5.1c1.2 0 2.2-1 2.2-2.2s-.7-2.3-2-2.3M15.9 13.6h29.4L15.9 46.7zm2.8 36.8l29.4-33.1v33.1z"></svg:path>`,
})
export class LineiconsCropIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
