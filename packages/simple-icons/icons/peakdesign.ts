import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsPeakdesignIcon],svg[simple-icons-peakdesign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m24 10.523l-9.446 6.493l-4.74-3.271l4.723-3.255l3.738 2.57l3.705-2.537zm-6.743 3.255l-2.72-1.886l-2.704 1.853l2.737 1.869zm-7.794-.284l-3.738-2.57l-3.706 2.554H0l9.43-6.493l4.756 3.255zM6.726 10.24l2.737 1.869l2.704-1.869L9.43 8.37z"></svg:path>`,
})
export class SimpleIconsPeakdesignIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
