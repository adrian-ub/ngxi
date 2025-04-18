import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bpmnSequentialMiMarkerIcon],svg[bpmn-sequential-mi-marker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M400 500v200h1200V500zm0 400v200h1200V900zm0 400v200h1200v-200z"></svg:path>`,
})
export class BpmnSequentialMiMarkerIcon {
  readonly viewBox = input("0 0 2000 2000")
  readonly width = input("1em")
  readonly height = input("1em")
}
