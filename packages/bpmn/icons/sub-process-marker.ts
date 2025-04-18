import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bpmnSubProcessMarkerIcon],svg[bpmn-sub-process-marker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M300 300v1400h1400V300zm88 88h1224v1224H388zm522 212v310H600v180h310v310h180v-310h310V910h-310V600z"></svg:path>`,
})
export class BpmnSubProcessMarkerIcon {
  readonly viewBox = input("0 0 2000 2000")
  readonly width = input("1em")
  readonly height = input("1em")
}
