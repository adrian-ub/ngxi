import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteExpandSolidIcon],svg[flowbite-expand-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 4H4v4m.5-3.5L9 9m7-5h4v4m-.5-3.5L15 9M8 20H4v-4m.5 3.5L9 15m7 5h4v-4m-.5 3.5L15 15"></svg:path>`,
})
export class FlowbiteExpandSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
