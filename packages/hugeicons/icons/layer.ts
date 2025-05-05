import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsLayerIcon],svg[hugeicons-layer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M9.606 4.813C10.786 4.271 11.376 4 12 4s1.214.271 2.394.813l4.893 2.248C21.096 7.89 22 8.307 22 9s-.904 1.109-2.713 1.94l-4.893 2.247c-1.18.542-1.77.813-2.394.813s-1.214-.271-2.394-.813l-4.893-2.248C2.904 10.11 2 9.693 2 9s.904-1.109 2.713-1.94z"></svg:path><svg:path d="M20.233 13.5C21.41 14.062 22 14.44 22 15c0 .693-.904 1.109-2.713 1.94l-4.893 2.247c-1.18.542-1.77.813-2.394.813s-1.214-.27-2.394-.813L4.713 16.94C2.904 16.11 2 15.693 2 15c0-.56.59-.938 1.767-1.5"></svg:path></svg:g>`,
})
export class HugeiconsLayerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
