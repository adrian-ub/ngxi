import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerFlaskOffIcon],svg[tabler-flask-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3h6m-2 6h1m-4-6v3m-.268 3.736L6 20a.7.7 0 0 0 .5 1h11a.7.7 0 0 0 .5-1l-1.143-3.142m-2.288-6.294L14 9V3M3 3l18 18"></svg:path>`,
})
export class TablerFlaskOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
