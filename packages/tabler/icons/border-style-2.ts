import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBorderStyle2Icon],svg[tabler-border-style-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 18v.01M8 18v.01m4-.01v.01m4-.01v.01m4-.01v.01M18 12h2m-9 0h2m-9 0h2M4 6h16"></svg:path>`,
})
export class TablerBorderStyle2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
