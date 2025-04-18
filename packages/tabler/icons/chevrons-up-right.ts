import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerChevronsUpRightIcon],svg[tabler-chevrons-up-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h8v8M5 11h8v8"></svg:path>`,
})
export class TablerChevronsUpRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
