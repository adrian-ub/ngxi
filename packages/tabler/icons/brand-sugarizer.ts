import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandSugarizerIcon],svg[tabler-brand-sugarizer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14.277 16l3.252-3.252a1.61 1.61 0 0 0-2.277-2.276L12 13.723l-3.252-3.251a1.61 1.61 0 0 0-2.276 2.276L9.723 16l-3.251 3.252a1.61 1.61 0 1 0 2.276 2.277L12 18.277l3.252 3.252a1.61 1.61 0 1 0 2.277-2.277zM9 5a3 3 0 1 0 6 0a3 3 0 1 0-6 0"></svg:path>`,
})
export class TablerBrandSugarizerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
