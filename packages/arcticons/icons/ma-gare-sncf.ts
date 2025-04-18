import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMaGareSncfIcon],svg[arcticons-ma-gare-sncf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="17.329" r="2.933" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.18 20.065L24 10.271L4.82 20.065c-.548.28-.349 1.107.266 1.107H7.09v16.557h5.721v-8.553a1.797 1.797 0 0 1 3.594 0v8.552h4.944V26.652a2.651 2.651 0 1 1 5.302 0v11.077h4.944v-8.552a1.797 1.797 0 0 1 3.594 0v8.552h5.721V21.172h2.004c.615 0 .814-.827.266-1.107"></svg:path>`,
})
export class ArcticonsMaGareSncfIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
