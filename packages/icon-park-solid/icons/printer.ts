import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidPrinterIcon],svg[icon-park-solid-printer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path fill="currentColor" d="M37 32H11v12h26z"></svg:path><svg:path stroke-linecap="round" d="M4 20h40v18h-6.983v-6H10.98v6H4z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M38 4H10v16h28z"></svg:path></svg:g>`,
})
export class IconParkSolidPrinterIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
