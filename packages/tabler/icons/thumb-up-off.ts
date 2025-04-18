import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerThumbUpOffIcon],svg[tabler-thumb-up-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 11v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1za4 4 0 0 0 2.828-1.172M11 7V6a2 2 0 1 1 4 0v5h3a2 2 0 0 1 2 2l-.5 2.503m-.758 3.244C18.35 19.57 17.698 20.059 17 20h-7a3 3 0 0 1-3-3M3 3l18 18"></svg:path>`,
})
export class TablerThumbUpOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
