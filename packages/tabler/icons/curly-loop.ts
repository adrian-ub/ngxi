import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCurlyLoopIcon],svg[tabler-curly-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 8c-4 0-7 2-7 5a3 3 0 0 0 6 0c0-3-2.5-5-8-5s-8 2-8 5a3 3 0 0 0 6 0c0-3-3-5-7-5"></svg:path>`,
})
export class TablerCurlyLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
