import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerDirectionArrowsIcon],svg[tabler-direction-arrows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0"></svg:path><svg:path d="m8 11l-1 1l1 1m3-5l1-1l1 1m3 3l1 1l-1 1m-5 3l1 1l1-1"></svg:path></svg:g>`,
})
export class TablerDirectionArrowsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
