import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilStopwatchIcon],svg[pepicons-pencil-stopwatch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M10 16.5a5.5 5.5 0 1 0 0-11a5.5 5.5 0 0 0 0 11m0 1a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13"></svg:path><svg:path d="M3.646 4.646a.5.5 0 0 1 .708 0l1.5 1.5a.5.5 0 1 1-.708.708l-1.5-1.5a.5.5 0 0 1 0-.708m10.5 2.208a.5.5 0 0 0 .708 0l1.5-1.5a.5.5 0 0 0-.708-.708l-1.5 1.5a.5.5 0 0 0 0 .708M12.89 8.688a.5.5 0 0 1-.078.702l-2.5 2a.5.5 0 0 1-.624-.78l2.5-2a.5.5 0 0 1 .702.078M9.5 5V3h1v2z"></svg:path><svg:path d="M8 3a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3A.5.5 0 0 1 8 3"></svg:path></svg:g>`,
})
export class PepiconsPencilStopwatchIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
