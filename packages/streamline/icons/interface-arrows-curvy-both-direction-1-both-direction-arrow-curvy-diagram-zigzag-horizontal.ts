import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsCurvyBothDirection1BothDirectionArrowCurvyDiagramZigzagHorizontalIcon],svg[streamline-interface-arrows-curvy-both-direction-1-both-direction-arrow-curvy-diagram-zigzag-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11 .5L13.5 3h-12a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h11a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H.5L3 13.5"></svg:path>`,
})
export class StreamlineInterfaceArrowsCurvyBothDirection1BothDirectionArrowCurvyDiagramZigzagHorizontalIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
