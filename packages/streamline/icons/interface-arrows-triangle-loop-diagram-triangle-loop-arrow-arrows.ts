import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsTriangleLoopDiagramTriangleLoopArrowArrowsIcon],svg[streamline-interface-arrows-triangle-loop-diagram-triangle-loop-arrow-arrows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.5 13.5L4 11h8.5m1-7l-1 3.5L8 .5m-6 3h3.5l-5 7"></svg:path>`,
})
export class StreamlineInterfaceArrowsTriangleLoopDiagramTriangleLoopArrowArrowsIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
