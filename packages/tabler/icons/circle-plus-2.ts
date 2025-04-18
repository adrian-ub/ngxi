import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCirclePlus2Icon],svg[tabler-circle-plus-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.985 12.522a9 9 0 1 0-8.475 8.464M16 19h6m-3-3v6"></svg:path>`,
})
export class TablerCirclePlus2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
