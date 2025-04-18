import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cuidaPrinterOutlineIcon],svg[cuida-printer-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g class="printer-outline"><svg:g fill="currentColor" class="Vector"><svg:path fill-rule="evenodd" d="M8 4v2h8v-.957L14.396 4zm-2-.5A1.5 1.5 0 0 1 7.5 2h7.044c.29 0 .574.084.818.242l1.955 1.272A1.5 1.5 0 0 1 18 4.77V6.5A1.5 1.5 0 0 1 16.5 8h-9A1.5 1.5 0 0 1 6 6.5zM16 16H8v4h8zm-8-2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2z" clip-rule="evenodd"></svg:path><svg:path d="M16.643 9.857c0-.473.384-.857.857-.857h.571a.857.857 0 1 1 0 1.714H17.5a.857.857 0 0 1-.857-.857"></svg:path><svg:path fill-rule="evenodd" d="M2 10a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v5a4 4 0 0 1-4 4h-1a1 1 0 1 1 0-2h1a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h1a1 1 0 1 1 0 2H6a4 4 0 0 1-4-4z" clip-rule="evenodd"></svg:path></svg:g></svg:g>`,
})
export class CuidaPrinterOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
