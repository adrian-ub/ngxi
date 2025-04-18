import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggRepeatIcon],svg[gg-repeat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.37 8l-4.5 2.598V9H6.89v4h-2V7h8.98V5.402zm-8.24 9h8.98v-6h-2v4h-6.98v-1.598L5.63 16l4.5 2.598z"></svg:path>`,
})
export class GgRepeatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
