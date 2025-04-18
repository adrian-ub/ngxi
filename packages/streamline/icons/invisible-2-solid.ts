import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInvisible2SolidIcon],svg[streamline-invisible-2-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.615 3.54a1 1 0 0 1 1.354.407a4.1 4.1 0 0 0 .832 1.068c.806.747 1.933 1.223 3.2 1.223c1.262 0 2.386-.473 3.191-1.215a4.1 4.1 0 0 0 .84-1.075a1 1 0 1 1 1.76.947a6 6 0 0 1-.441.7l1.291 1.083a1 1 0 1 1-1.284 1.533l-1.44-1.207a6.6 6.6 0 0 1-1.147.653l.617 1.553a1 1 0 0 1-1.86.738l-.698-1.76a7 7 0 0 1-1.663 0l-.7 1.76A1 1 0 0 1 3.61 9.21l.617-1.555a6.6 6.6 0 0 1-1.144-.651L1.642 8.21A1 1 0 0 1 .358 6.678L1.65 5.595a6 6 0 0 1-.442-.7a1 1 0 0 1 .407-1.354Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineInvisible2SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
