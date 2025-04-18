import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[evaHeadphonesFillIcon],svg[eva-headphones-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2A10.2 10.2 0 0 0 2 12.37V17a4 4 0 1 0 4-4a3.9 3.9 0 0 0-2 .56v-1.19A8.2 8.2 0 0 1 12 4a8.2 8.2 0 0 1 8 8.37v1.19a3.9 3.9 0 0 0-2-.56a4 4 0 1 0 4 4v-4.63A10.2 10.2 0 0 0 12 2"></svg:path>`,
})
export class EvaHeadphonesFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
