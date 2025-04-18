import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerClover2Icon],svg[tabler-clover-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 11L7.603 7.56a2.104 2.104 0 0 1 0-2.95a2.04 2.04 0 0 1 2.912 0L11 5l.485-.39a2.04 2.04 0 0 1 2.912 0a2.104 2.104 0 0 1 0 2.95zm0 0l-3.397 3.44a2.104 2.104 0 0 0 0 2.95a2.04 2.04 0 0 0 2.912 0L11 17l.485.39a2.04 2.04 0 0 0 2.912 0a2.104 2.104 0 0 0 0-2.95zm3.44-3.397a2.104 2.104 0 0 1 2.95 0a2.04 2.04 0 0 1 0 2.912L17 11l.39.485a2.04 2.04 0 0 1 0 2.912a2.104 2.104 0 0 1-2.95 0M7.56 7.603a2.104 2.104 0 0 0-2.95 0a2.04 2.04 0 0 0 0 2.912L5 11l-.39.485a2.04 2.04 0 0 0 0 2.912a2.104 2.104 0 0 0 2.95 0M15 15l6 6"></svg:path>`,
})
export class TablerClover2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
