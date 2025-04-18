import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsPpeApron24pxIcon],svg[healthicons-ppe-apron-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 4a2 2 0 0 0 2-2h1a4 4 0 0 1 4 4v5a4 4 0 0 1-3 3.874V21s-1.5 1-4 1s-4-1-4-1v-6.126A4 4 0 0 1 5 11V6a4 4 0 0 1 4-4h1a2 2 0 0 0 2 2m-3 7v2h6v-2z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsPpeApron24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
