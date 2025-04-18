import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandCodesandboxIcon],svg[tabler-brand-codesandbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M20 7.5v9l-4 2.25L12 21l-4-2.25l-4-2.25v-9l4-2.25L12 3l4 2.25zM12 12l4-2.25l4-2.25M12 12v9m0-9L8 9.75L4 7.5"></svg:path><svg:path d="m20 12l-4 2v4.75M4 12l4 2v4.75m0-13.5l4 2.25l4-2.25"></svg:path></svg:g>`,
})
export class TablerBrandCodesandboxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
