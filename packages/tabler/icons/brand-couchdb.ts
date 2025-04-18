import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandCouchdbIcon],svg[tabler-brand-couchdb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 12h12v-2a2 2 0 0 1 2-2a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2a2 2 0 0 1 2 2zm0 3h12M6 18h12m3-7v7M3 11v7"></svg:path>`,
})
export class TablerBrandCouchdbIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
