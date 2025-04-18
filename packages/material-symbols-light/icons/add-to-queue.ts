import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightAddToQueueIcon],svg[material-symbols-light-add-to-queue-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 14.5h1v-3h3v-1h-3v-3h-1v3h-3v1h3zM9 20v-2H4.616q-.691 0-1.153-.462T3 16.384V5.616q0-.691.463-1.153T4.615 4h14.77q.69 0 1.152.463T21 5.616v10.769q0 .69-.463 1.153T19.385 18H15v2z"></svg:path>`,
})
export class MaterialSymbolsLightAddToQueueIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
