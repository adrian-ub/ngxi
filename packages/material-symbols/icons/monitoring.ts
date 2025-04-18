import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsMonitoringIcon],svg[material-symbols-monitoring-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21v-2l2-2v4zm4 0v-6l2-2v8zm4 0v-8l2 2.025V21zm4 0v-5.975l2-2V21zm4 0V11l2-2v12zM3 15.825V13l7-7l4 4l7-7v2.825l-7 7l-4-4z"></svg:path>`,
})
export class MaterialSymbolsMonitoringIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
