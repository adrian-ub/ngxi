import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMoveItIcon],svg[arcticons-move-it-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.209 21.044v5.912M9.5 26.949v-5.905l2.956 5.912l2.955-5.903v5.903m19.173-5.912H38.5m-1.958 5.912v-5.912m-10.647 0l-1.958 5.912l-1.958-5.912M27.26 24h1.927m1.029 2.956H27.26v-5.912h2.956"></svg:path><svg:rect width="3.916" height="5.911" x="17.048" y="21.044" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.958" ry="1.958"></svg:rect><svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect>`,
})
export class ArcticonsMoveItIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
