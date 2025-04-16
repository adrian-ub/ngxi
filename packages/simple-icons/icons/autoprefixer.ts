import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsAutoprefixerIcon],svg[simple-icons-autoprefixer-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.87 21.045h2.923l.959-3.068h4.503l.949 3.068h2.922L11.94 2.955zm6.162-10.12l1.543 4.917h-3.153l1.553-4.916h.057zM24 17.617l-.378-1.182l-6.266-.59l.733 2.127l5.91-.354zM6.644 15.843l-6.266.591L0 17.616l5.911.355z"></svg:path>`,
})
export class SimpleIconsAutoprefixerIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
