import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsCurvyRightSnakeArrowSidewaysDiagramRightIcon],svg[streamline-interface-arrows-curvy-right-snake-arrow-sideways-diagram-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M.5.75h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-11a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h12"></svg:path><svg:path d="m11 8.25l2.5 2.5l-2.5 2.5"></svg:path></svg:g>`,
})
export class StreamlineInterfaceArrowsCurvyRightSnakeArrowSidewaysDiagramRightIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
