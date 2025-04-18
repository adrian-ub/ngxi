import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiOpenBookIcon],svg[openmoji-open-book-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:path fill="#9b9b9a" d="M41 56a5 5 0 0 1-10 0"></svg:path><svg:path fill="#d0cfce" d="M67.002 56H4.998A1 1 0 0 1 4 55.002V16.999c0-.552.447-.999.999-.999h62.003c.551 0 .998.447.998.999v38.003a1 1 0 0 1-.999.998"></svg:path><svg:path fill="#FFF" d="M64.001 51.625H7.998A1 1 0 0 1 7 50.627V21.373a1 1 0 0 1 .999-.998h56.003c.551 0 .998.447.998.999v29.253a1 1 0 0 1-.999.998"></svg:path></svg:g><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:path d="M41 56a5 5 0 0 1-10 0m36.002 0H4.998A1 1 0 0 1 4 55.002V16.999c0-.552.447-.999.999-.999h62.003c.551 0 .998.447.998.999v38.003a1 1 0 0 1-.999.998"></svg:path><svg:path d="M64.001 51.625H7.998A1 1 0 0 1 7 50.627V21.373a1 1 0 0 1 .999-.998h56.003c.551 0 .998.447.998.999v29.253a1 1 0 0 1-.999.998M36 17v38M11 27h20m-20 6h20m-20 6h20m-20 6h20m10-18h20m-20 6h20m-20 6h20m-20 6h20"></svg:path></svg:g>`,
})
export class OpenmojiOpenBookIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
