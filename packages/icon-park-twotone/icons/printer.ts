import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotonePrinterIcon],svg[icon-park-twotone-printer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTPrinter0"><svg:g fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="4"><svg:path fill="#555" d="M37 32H11v12h26z"></svg:path><svg:path stroke-linecap="round" d="M4 20h40v18h-6.983v-6H10.98v6H4z" clip-rule="evenodd"></svg:path><svg:path fill="#555" d="M38 4H10v16h28z"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTPrinter0)"></svg:path>`,
})
export class IconParkTwotonePrinterIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
