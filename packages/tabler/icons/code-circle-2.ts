import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCodeCircle2Icon],svg[tabler-code-circle-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M8.5 13.5L7 12l1.5-1.5m7 0L17 12l-1.5 1.5"></svg:path><svg:path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0m10-2.5L11 15"></svg:path></svg:g>`,
})
export class TablerCodeCircle2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
