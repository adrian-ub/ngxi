import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerSandboxIcon],svg[tabler-sandbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M19.953 8.017L21 15v2a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-2l1.245-8.297A2 2 0 0 1 6.222 5H10M3 15h18M13 3l5.5 1.5m-2.75-.75l-2 7"></svg:path><svg:path d="M7 10.5q2.5-1 5 0t5 0"></svg:path></svg:g>`,
})
export class TablerSandboxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
