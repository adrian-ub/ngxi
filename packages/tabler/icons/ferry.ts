import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerFerryIcon],svg[tabler-ferry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 18h15.293c1.02 0 1.972-.503 2.536-1.34L22 13H3.521zM14 8l-1-2m-6.893 6.675L7.491 8h8l2.675 4.598"></svg:path>`,
})
export class TablerFerryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
