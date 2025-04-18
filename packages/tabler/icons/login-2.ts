import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerLogin2Icon],svg[tabler-login-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M9 8V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2v-2"></svg:path><svg:path d="M3 12h13l-3-3m0 6l3-3"></svg:path></svg:g>`,
})
export class TablerLogin2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
