import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonAddIcon],svg[carbon-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 15V8h-2v7H8v2h7v7h2v-7h7v-2z"></svg:path>`,
})
export class CarbonAddIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
