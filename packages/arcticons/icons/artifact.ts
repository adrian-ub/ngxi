import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsArtifactIcon],svg[arcticons-artifact-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 45.5v-43M2.5 24h43m-1.8 8.6L4.3 15.4m11.1 28.3L32.6 4.3"></svg:path>`,
})
export class ArcticonsArtifactIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
