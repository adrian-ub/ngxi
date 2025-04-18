import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerArrowSharpTurnLeftIcon],svg[tabler-arrow-sharp-turn-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M17 18V6.69a.7.7 0 0 0-1.195-.495L6 16"></svg:path><svg:path d="M11 16H6v-5"></svg:path></svg:g>`,
})
export class TablerArrowSharpTurnLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
