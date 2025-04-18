import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cifTlIcon],svg[cif-tl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#D82727" d="M0 0h300v150H0z"></svg:path><svg:path fill="#FFC71F" d="m0 0l150.226 75L0 150z"></svg:path><svg:path fill="#000" d="m0 0l74.933 75L0 150z"></svg:path><svg:path fill="#FFF" d="m33.499 65.953l15.823-6.594l-8.698 14.932l10.969 12.943l-16.854-4.09L25.703 98L24.31 80.57L7.433 76.78l15.948-6.606l-1.351-17.276z"></svg:path></svg:g>`,
})
export class CifTlIcon {
  readonly viewBox = input("0 0 300 150")
  readonly width = input("2em")
  readonly height = input("1em")
}
