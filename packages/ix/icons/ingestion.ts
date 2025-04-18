import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixIngestionIcon],svg[ix-ingestion-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M426.667 64v362.667H64V192h42.666v192H384V106.667l-192-.001V64zM79.085 48.915l198.248 198.248v-76.496H320V320H170.667v-42.667h76.496L48.915 79.085z"></svg:path>`,
})
export class IxIngestionIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
