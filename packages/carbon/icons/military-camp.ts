import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonMilitaryCampIcon],svg[carbon-military-camp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27 28V17.52a2 2 0 0 0-.853-1.639L17 9.48V8h6V2h-8v7.48l-9.147 6.402A2 2 0 0 0 5 17.52V28H2v2h28v-2ZM17 4h4v2h-4ZM7 17.52l9-6.3l9 6.3V28h-8v-8h-2v8H7Z"></svg:path>`,
})
export class CarbonMilitaryCampIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
