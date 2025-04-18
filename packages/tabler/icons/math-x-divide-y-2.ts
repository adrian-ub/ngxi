import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMathXDivideY2Icon],svg[tabler-math-x-divide-y-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 21L21 3m-6 11l3 4.5m3-4.5l-4.5 7M3 4l6 6m-6 0l6-6"></svg:path>`,
})
export class TablerMathXDivideY2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
