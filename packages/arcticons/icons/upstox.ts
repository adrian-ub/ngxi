import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsUpstoxIcon],svg[arcticons-upstox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.23 22.579v2.765a4.73 4.73 0 0 0 4.732 4.731h0a4.73 4.73 0 0 0 4.73-4.73v-7.807m0 7.806v4.731m5.346-4.731a4.73 4.73 0 0 0 4.731 4.731h0a4.73 4.73 0 0 0 4.731-4.73v-3.076a4.73 4.73 0 0 0-4.73-4.73h0a4.73 4.73 0 0 0-4.732 4.73m0-4.731v18.924M7.5 22.27a4.73 4.73 0 0 0 4.73-4.732"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path>`,
})
export class ArcticonsUpstoxIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
