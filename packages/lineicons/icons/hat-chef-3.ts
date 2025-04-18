import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsHatChef3Icon],svg[lineicons-hat-chef-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.001 2a4.75 4.75 0 0 0-4.163 2.46a3.73 3.73 0 0 0-2.723 6.86l.425.245V20c0 .414.336.75.75.75h11.352a.75.75 0 0 0 .75-.75v-8.397l.494-.284a3.73 3.73 0 0 0-2.723-6.86A4.75 4.75 0 0 0 12 2M8.944 5.645a3.252 3.252 0 0 1 6.114-.001a.75.75 0 0 0 1.023.424a2.23 2.23 0 0 1 2.055 3.952l-.869.5a.75.75 0 0 0-.375.65v4.33H7.04v-4.368a.75.75 0 0 0-.375-.65l-.8-.461a2.23 2.23 0 0 1 2.056-3.952a.75.75 0 0 0 1.023-.424M7.04 17h9.852v2.25H7.04z"></svg:path>`,
})
export class LineiconsHatChef3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
