import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsCurvyBothDirection2BothDirectionArrowCurvyDiagramZigzagHorizontalIcon],svg[streamline-interface-arrows-curvy-both-direction-2-both-direction-arrow-curvy-diagram-zigzag-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3 .5L.5 3h12a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-11a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h12L11 13.5"></svg:path>`,
})
export class StreamlineInterfaceArrowsCurvyBothDirection2BothDirectionArrowCurvyDiagramZigzagHorizontalIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
