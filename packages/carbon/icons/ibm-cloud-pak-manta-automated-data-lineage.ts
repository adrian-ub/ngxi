import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonIbmCloudPakMantaAutomatedDataLineageIcon],svg[carbon-ibm-cloud-pak-manta-automated-data-lineage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 11V5h-6v2H14V4a2.003 2.003 0 0 0-2-2H4a2.003 2.003 0 0 0-2 2v8a2.003 2.003 0 0 0 2 2h8a2.003 2.003 0 0 0 2-2V9a3.003 3.003 0 0 1 3 3v9h-6v-2H5v6h6v-2h6v2a2.003 2.003 0 0 0 2 2h5v2h6v-6h-6v2h-5v-7h5v2h6v-6h-6v2h-5v-4a4.95 4.95 0 0 0-1.025-3H24v2ZM4 12V4h8v8Zm5 11H7v-2h2Zm17 2h2v2h-2Zm0-9h2v2h-2Zm0-9h2v2h-2Z"></svg:path>`,
})
export class CarbonIbmCloudPakMantaAutomatedDataLineageIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
