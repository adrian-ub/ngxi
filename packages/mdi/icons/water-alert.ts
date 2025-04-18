import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiWaterAlertIcon],svg[mdi-water-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 3.25S16 10 16 14c0 3.31-2.69 6-6 6s-6-2.69-6-6c0-4 6-10.75 6-10.75M20 7v6h-2V7zm-2 10h2v-2h-2z"></svg:path>`,
})
export class MdiWaterAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
