import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCone2Icon],svg[tabler-cone-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 5.002v.5l-8.13 14.99a1 1 0 0 1-1.74 0L3 5.503v-.5C3 3.344 7.03 2 12 2s9 1.344 9 3.002"></svg:path>`,
})
export class TablerCone2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
