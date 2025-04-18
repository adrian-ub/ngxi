import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightMonitoringIcon],svg[material-symbols-light-monitoring-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3 20.5l-.173-.635L4.5 18.213V20.5zm4.5 0v-5.288l1-1V20.5zm4 0v-6.288l1 1.025V20.5zm4 0v-5.263l1-1V20.5zm4 0v-9.288l1-1V20.5zm-16-5.886V13.21l6.5-6.5l4 4l6.5-6.5v1.403l-6.5 6.5l-4-4z"></svg:path>`,
})
export class MaterialSymbolsLightMonitoringIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
