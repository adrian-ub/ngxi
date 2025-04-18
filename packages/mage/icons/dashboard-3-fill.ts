import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageDashboard3FillIcon],svg[mage-dashboard-3-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.75 4.69v3.88a2.4 2.4 0 0 1-.71 1.72a2.47 2.47 0 0 1-1.72.71H4.68a2.42 2.42 0 0 1-2.43-2.43V4.69a2.44 2.44 0 0 1 2.43-2.44h14.64a2.44 2.44 0 0 1 1.72.72a2.4 2.4 0 0 1 .71 1.72M11 15.43v3.89a2.42 2.42 0 0 1-2.43 2.43H4.68a2.42 2.42 0 0 1-2.43-2.43v-3.88A2.44 2.44 0 0 1 4.68 13h3.89a2.42 2.42 0 0 1 1.71.72a2.46 2.46 0 0 1 .72 1.71m10.75.01v3.88a2.4 2.4 0 0 1-.71 1.72a2.47 2.47 0 0 1-1.72.71h-3.89a2.45 2.45 0 0 1-1.72-.71a2.4 2.4 0 0 1-.71-1.72v-3.88A2.46 2.46 0 0 1 15.43 13h3.89a2.44 2.44 0 0 1 1.72.72a2.4 2.4 0 0 1 .71 1.72"></svg:path>`,
})
export class MageDashboard3FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
