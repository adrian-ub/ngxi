import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMyceliumIcon],svg[arcticons-mycelium-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="32.945" cy="24" r="1.552" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="23.942" cy="39.492" r="1.552" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="14.997" cy="24" r="1.552" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="41.948" cy="39.492" r="1.552" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="23.942" cy="8.508" r="1.552" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.34 24.776L24 29.199l7.617-4.396m-.032-1.551l-7.643-4.414l-7.602 4.387M24 37.94v-8.741m-9.003-3.647v9.256l7.6 3.911m2.714.053l7.634-4.405v-8.815m0 8.815l7.632 4.407M23.942 18.838V10.06"></svg:path><svg:circle cx="6.052" cy="39.492" r="1.552" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m7.391 38.719l7.606-4.389"></svg:path>`,
})
export class ArcticonsMyceliumIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
