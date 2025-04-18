import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonMovIcon],svg[carbon-mov-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m28 9l-2 13l-2-13h-2l2.52 14h2.96L30 9zM18 23h-4a2 2 0 0 1-2-2V11a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2m-4-12v10h4V11zM8 9l-1.51 5L6 15.98L5.54 14L4 9H2v14h2v-8l-.16-2l.58 2L6 19.63L7.58 15l.58-2L8 15v8h2V9z"></svg:path>`,
})
export class CarbonMovIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
