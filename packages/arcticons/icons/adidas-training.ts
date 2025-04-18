import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAdidasTrainingIcon],svg[arcticons-adidas-training-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m30.227 12.859l-7.566 4.332l10.523 17.95H43.5zm-9.138 7.765l-7.565 4.333l5.97 10.184h10.243zm-9.024 7.259L4.5 32.216l1.715 2.925h10.174z"></svg:path>`,
})
export class ArcticonsAdidasTrainingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
