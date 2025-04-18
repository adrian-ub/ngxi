import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerLayersOffIcon],svg[tabler-layers-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M8.59 4.581C8.952 4.222 9.45 4 10 4h8a2 2 0 0 1 2 2v8c0 .556-.227 1.06-.594 1.422M16 16h-6a2 2 0 0 1-2-2V8"></svg:path><svg:path d="M16 16v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerLayersOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
