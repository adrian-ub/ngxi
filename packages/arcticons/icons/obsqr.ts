import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsObsqrIcon],svg[arcticons-obsqr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.7 24h42.6m-33.8 8.9v3.6h3.6m17.8 0h3.6v-3.6M15.1 11.5h-3.6v3.6m25 0v-3.6h-3.6"></svg:path><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M14.45 14.45h19.1v19.1h-19.1z"></svg:path><svg:path d="M17.8 17.8h12.4v12.4H17.8z"></svg:path><svg:circle cx="24" cy="24" r="2.6"></svg:circle></svg:g>`,
})
export class ArcticonsObsqrIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
