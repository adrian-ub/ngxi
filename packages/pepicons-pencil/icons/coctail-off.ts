import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilCoctailOffIcon],svg[pepicons-pencil-coctail-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M6 8a.5.5 0 0 1 0-1h8a.5.5 0 0 1 0 1z"></svg:path><svg:path fill-rule="evenodd" d="m3.134 5.34l6.5 7a.5.5 0 0 0 .732 0l6.5-7a.5.5 0 0 0-.366-.84h-13a.5.5 0 0 0-.366.84m1.513.16h10.706L10 11.265z" clip-rule="evenodd"></svg:path><svg:path d="M9.5 11.875h1l.125.125v6l-.125.125h-1L9.375 18v-6z"></svg:path><svg:path d="M14.5 20h-9c0-1.475 2.05-2.5 4.5-2.5s4.5 1.025 4.5 2.5M12.879 1.567a.5.5 0 0 1 .242-.97l4 1a.5.5 0 0 1-.242.97z"></svg:path><svg:path d="M10.203 9.747a.5.5 0 0 1-.94-.343L12.356.911a.5.5 0 1 1 .94.342z"></svg:path><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPencilCoctailOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
