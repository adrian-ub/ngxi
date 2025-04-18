import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMintIcon],svg[arcticons-mint-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 43.5c-5.1-4.812-14-6.766-14-15.271c0-4.717 4.33-16.367 14-23.729c9.67 7.362 14 19.012 14 23.729c0 8.505-8.9 10.459-14 15.271m0-39v39"></svg:path>`,
})
export class ArcticonsMintIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
