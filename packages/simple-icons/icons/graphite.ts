import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsGraphiteIcon],svg[simple-icons-graphite-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.215 0l-12 3.215l-3.215 12L8.785 24l12-3.215l3.215-12zm1.958 20.966H6.827L1.655 12l5.172-8.966h10.346L22.345 12zm.68-14.823L9.86 4L4.006 9.858l2.14 8l7.995 2.141l5.853-5.857z"></svg:path>`,
})
export class SimpleIconsGraphiteIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
