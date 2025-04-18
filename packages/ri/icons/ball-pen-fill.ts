import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riBallPenFillIcon],svg[ri-ball-pen-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.85 11.805l-.708-.707l-9.9 9.9H3v-4.243L14.314 5.44l5.657 5.657a1 1 0 0 1 0 1.414L12.9 19.583l-1.415-1.414zm.706-9.192l2.829 2.828a1 1 0 0 1 0 1.414L19.97 8.27l-4.243-4.242l1.414-1.414a1 1 0 0 1 1.414 0"></svg:path>`,
})
export class RiBallPenFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
