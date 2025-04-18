import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsKbPayIcon],svg[arcticons-kb-pay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.452 32.179v-9.842h3.222c1.821 0 3.298 1.48 3.298 3.305s-1.477 3.305-3.298 3.305h-3.222m21.096.771v3.322a2.46 2.46 0 0 1-2.46 2.46h0c-.68 0-1.295-.275-1.74-.72"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.548 25.659v4.06a2.46 2.46 0 0 1-2.46 2.46h0a2.46 2.46 0 0 1-2.46-2.46v-4.06m-2.644 4.059a2.46 2.46 0 0 1-2.46 2.46h0a2.46 2.46 0 0 1-2.46-2.46v-1.6a2.46 2.46 0 0 1 2.46-2.46h0a2.46 2.46 0 0 1 2.46 2.46m0 4.06v-6.519m-4.493-9.526a1.816 1.816 0 0 1 0 3.632h-2.997V12.5h2.997a1.816 1.816 0 0 1 0 3.633m0 0h-2.997m-6.042-3.621v7.265m0-2.53l3.905-4.71m0 7.24l-2.991-3.632"></svg:path><svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect>`,
})
export class ArcticonsKbPayIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
