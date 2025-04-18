import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineStar2Icon],svg[streamline-star-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.827 6.533L5.011 5.01L6.533.827a.497.497 0 0 1 .934 0L8.99 5.011l4.184 1.522a.497.497 0 0 1 0 .934L8.989 8.99l-1.522 4.184a.497.497 0 0 1-.934 0L5.01 8.989L.827 7.467a.497.497 0 0 1 0-.934"></svg:path>`,
})
export class StreamlineStar2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
