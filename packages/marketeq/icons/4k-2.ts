import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeq4k2Icon],svg[marketeq-4k-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="m33.708 23.313l10.042 16.27M29.167 10.417v29.166zm0 18.75l14.583-18.75z"></svg:path><svg:path stroke="#306CFE" d="M20.833 10.417L6.25 29.167h14.583m0 10.416V10.417z"></svg:path></svg:g>`,
})
export class Marketeq4k2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
