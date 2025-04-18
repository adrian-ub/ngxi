import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerFireExtinguisherIcon],svg[tabler-fire-extinguisher-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 7a4 4 0 0 1 4 4v9a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-9a4 4 0 0 1 4-4m-3 9h6m-3-9V4m4 1l-4-1l4-1m-4 1H9a3 3 0 0 0-3 3"></svg:path>`,
})
export class TablerFireExtinguisherIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
