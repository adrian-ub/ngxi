import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesBuildingOutlineIcon],svg[bubbles-building-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M10.5 23.5V20a1.5 1.5 0 1 1 3 0v3.5m-5-7h-3v-3a1.5 1.5 0 0 1 3 0zm0-6.5h-3V7a1.5 1.5 0 0 1 3 0zm5 6.5h-3v-3a1.5 1.5 0 1 1 3 0zm0-6.5h-3V7a1.5 1.5 0 1 1 3 0zm5 6.5h-3v-3a1.5 1.5 0 1 1 3 0zm0-6.5h-3V7a1.5 1.5 0 1 1 3 0z"></svg:path><svg:path d="M20.5 3.8a1 1 0 0 0-.168-.555L18.8.945A1 1 0 0 0 17.965.5H6.035A1 1 0 0 0 5.2.945l-1.535 2.3A1 1 0 0 0 3.5 3.8v18.7a1 1 0 0 0 1 1h15a1 1 0 0 0 1-1zM3.547 3.5h16.906"></svg:path></svg:g>`,
})
export class BubblesBuildingOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
