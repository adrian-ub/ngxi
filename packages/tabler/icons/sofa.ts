import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerSofaIcon],svg[tabler-sofa-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M4 11a2 2 0 0 1 2 2v1h12v-1a2 2 0 1 1 4 0v5a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-5a2 2 0 0 1 2-2"></svg:path><svg:path d="M4 11V8a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v3m-8-6v9"></svg:path></svg:g>`,
})
export class TablerSofaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
