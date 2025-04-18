import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonMonumentIcon],svg[carbon-monument-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 28V6l-4-4l-4 4v22H2v2h28v-2Zm-6 0V6.828l2-2l2 2V28Z"></svg:path>`,
})
export class CarbonMonumentIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
