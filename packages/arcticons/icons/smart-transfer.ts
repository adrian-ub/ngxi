import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSmartTransferIcon],svg[arcticons-smart-transfer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="17.416" height="30.217" x="21.156" y="13.283" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.597"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.156 16.677h17.416M21.156 40.106h17.416m-17.416-5.389h-10.13a1.597 1.597 0 0 1-1.598-1.597V6.098A1.6 1.6 0 0 1 11.025 4.5h14.221a1.6 1.6 0 0 1 1.598 1.598v7.185M9.428 7.894h17.416M9.428 31.323h11.728m6.047-1.276L15.109 17.953m12.094 8.124v3.97h-3.97"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.109 21.923v-3.97h3.97"></svg:path>`,
})
export class ArcticonsSmartTransferIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
