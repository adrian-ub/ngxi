import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCpu2Icon],svg[tabler-cpu-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M5 6a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z"></svg:path><svg:path d="M8 10V8h2m6 6v2h-2m-4 0H8v-2m8-4V8h-2M3 10h2m-2 4h2m5-11v2m4-2v2m7 5h-2m2 4h-2m-5 7v-2m-4 2v-2"></svg:path></svg:g>`,
})
export class TablerCpu2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
