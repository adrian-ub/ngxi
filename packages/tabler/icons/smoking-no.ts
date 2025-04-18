import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerSmokingNoIcon],svg[tabler-smoking-no-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 13v4m8-12v.5a2 2 0 0 0 2 2a2 2 0 0 1 2 2v.5M3 3l18 18m-4-8h3a1 1 0 0 1 1 1v2c0 .28-.115.533-.3.714M17 17H4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h9"></svg:path>`,
})
export class TablerSmokingNoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
