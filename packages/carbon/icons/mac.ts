import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonMacIcon],svg[carbon-mac-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 23h-6c-1.103 0-2-.897-2-2V11c0-1.103.897-2 2-2h6v2h-6v10h6zM18 9h-4c-1.103 0-2 .897-2 2v12h2v-5h4v5h2V11c0-1.103-.897-2-2-2m-4 7v-5h4v5zM8 9l-1.515 5L6 15.977L5.535 14L4 9H2v14h2v-8l-.159-1.996l.58 1.996L6 19.626L7.579 15l.58-2L8 15v8h2V9z"></svg:path>`,
})
export class CarbonMacIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
