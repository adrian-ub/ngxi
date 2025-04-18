import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsXiaomiEarbudsIcon],svg[arcticons-xiaomi-earbuds-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.118 13.287a6.98 6.98 0 0 1 6.982 6.982V43.5a6.98 6.98 0 0 1-6.982-6.982z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.846 13.287h.19a5.084 5.084 0 0 1 5.082 5.082v4.942a5.084 5.084 0 0 1-5.082 5.082h-.19a1.71 1.71 0 0 1-1.71-1.71V14.998c0-.944.766-1.71 1.71-1.71M32.882 4.5a6.98 6.98 0 0 0-6.982 6.982v23.231a6.98 6.98 0 0 0 6.982-6.982z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.154 19.606h-.19a5.084 5.084 0 0 1-5.082-5.082V9.58a5.084 5.084 0 0 1 5.082-5.08h.19c.944 0 1.71.767 1.71 1.71v11.687a1.71 1.71 0 0 1-1.71 1.71"></svg:path>`,
})
export class ArcticonsXiaomiEarbudsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
