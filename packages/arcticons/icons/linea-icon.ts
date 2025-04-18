import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLineaIconIcon],svg[arcticons-linea-icon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.658 5.5H40.38c1.17 0 2.12.95 2.12 2.12h0v12.722a2.12 2.12 0 0 1-2.12 2.11H27.658a2.12 2.12 0 0 1-2.11-2.11V7.62a2.12 2.12 0 0 1 2.11-2.12M7.62 25.549h12.722a2.12 2.12 0 0 1 2.12 2.11v12.72a2.12 2.12 0 0 1-2.12 2.121H7.621a2.12 2.12 0 0 1-2.11-2.12V27.658a2.12 2.12 0 0 1 2.11-2.11M5.51 15.058l-.01-7.2Q5.5 5.5 7.857 5.5h12.248q2.357 0 2.357 2.357v12.249q0 2.356-2.357 2.357H7.857Q5.5 22.452 5.5 20.105l.01-2.088m36.99 16.54v-6.662q0-2.346-2.357-2.346H27.895q-2.347 0-2.347 2.346v12.248q0 2.357 2.347 2.357h12.248q2.357 0 2.357-2.357v-1.819"></svg:path>`,
})
export class ArcticonsLineaIconIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
