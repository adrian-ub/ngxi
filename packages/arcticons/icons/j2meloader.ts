import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsJ2meloaderIcon],svg[arcticons-j2meloader-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.45 9.5v19.111h9.56M12.99 9.5h9.56v14.336a4.833 4.833 0 0 1-4.785 4.775h0a4.775 4.775 0 0 1-4.775-4.775h0V22.25m16.907 16.231h3.489m-3.489-6.97h3.489m-3.489 3.49h2.271m-2.271-3.49v6.97m-8.865.009v-6.96l3.48 6.97l3.49-6.96v6.96m-13.388-4.66a2.31 2.31 0 0 1 4.62 0a2.17 2.17 0 0 1-.676 1.634c-.967.822-3.944 3.026-3.944 3.026h4.62"></svg:path>`,
})
export class ArcticonsJ2meloaderIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
