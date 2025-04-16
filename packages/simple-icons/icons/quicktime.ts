import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsQuicktimeIcon],svg[simple-icons-quicktime-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.002 0a11.998 12 0 1 0 6.629 22l1.98 1.97h3.139l.25-.25v-3.15l-2-1.98A11.938 11.94 0 0 0 24 12A11.998 12 0 0 0 12.002 0m0 4.2a7.8 7.8 0 0 1 6.949 11.33l-5.25-5.26a2.404 2.404 0 1 0-3.4 3.4l5.27 5.26a7.76 7.76 0 0 1-3.57.87a7.799 7.8 0 0 1 0-15.6z"></svg:path>`,
})
export class SimpleIconsQuicktimeIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
