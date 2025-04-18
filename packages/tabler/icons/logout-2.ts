import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerLogout2Icon],svg[tabler-logout-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M10 8V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2v-2"></svg:path><svg:path d="M15 12H3l3-3m0 6l-3-3"></svg:path></svg:g>`,
})
export class TablerLogout2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
