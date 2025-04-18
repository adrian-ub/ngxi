import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEmojiElectricTorchIcon],svg[arcticons-emoji-electric-torch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.67 22.133L37.062 5.74s1.118-.636 3.454 1.7s1.96 3.715 1.96 3.715L26.085 27.548"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.299 24.321A7.493 7.493 0 1 1 23.896 34.92l-3.052 3.052l-10.597-10.597zM8.394 29.71l-2.894.742m7.318 4.438l-2.944 2.871m8.295 1.832l-.823 2.747"></svg:path>`,
})
export class ArcticonsEmojiElectricTorchIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
