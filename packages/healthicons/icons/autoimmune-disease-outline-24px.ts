import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsAutoimmuneDiseaseOutline24pxIcon],svg[healthicons-autoimmune-disease-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12 7a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5"></svg:path><svg:path fill-rule="evenodd" d="M7.268 8a2 2 0 0 1 3.464 0H17a1 1 0 1 1 0 2h-1.208A2.496 2.496 0 0 1 15 13v1.59l2.226 5.544a1.153 1.153 0 0 1-1.977 1.142l-3.267-4.162l-.497.634a2 2 0 0 1-1.274 1.622l-1.495 1.906a1.153 1.153 0 0 1-1.977-1.142l.837-2.086a2 2 0 0 1 .913-2.274L9 14.5V11a2 2 0 0 1-1.732-1H7a1 1 0 1 1 0-2zM9 10a1 1 0 1 0 0-2a1 1 0 0 0 0 2m4.5 2.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m-4 6a1 1 0 1 0 0-2a1 1 0 0 0 0 2" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsAutoimmuneDiseaseOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
