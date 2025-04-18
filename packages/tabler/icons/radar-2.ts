import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerRadar2Icon],svg[tabler-radar-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M11 12a1 1 0 1 0 2 0a1 1 0 1 0-2 0"></svg:path><svg:path d="M15.51 15.56A5 5 0 1 0 12 17"></svg:path><svg:path d="M18.832 17.86A9 9 0 1 0 12 21m0-9v9"></svg:path></svg:g>`,
})
export class TablerRadar2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
