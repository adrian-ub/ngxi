import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiBorderColorIcon],svg[zmdi-border-color-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M379 149L165 363H85v-80L299 69zm63-63l-42 42l-80-80l42-42q6-6 15-6t15 6l50 50q6 6 6 15t-6 15M0 427h512v85H0z"></svg:path>`,
})
export class ZmdiBorderColorIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
