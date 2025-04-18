import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorVrscIcon],svg[cryptocurrency-color-vrsc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:circle cx="16" cy="16" r="16" fill="#3165D4" fill-rule="nonzero"></svg:circle><svg:path fill="#FFF" d="M8.846 7.428c.551-.473 1.324-.86 1.996-.587c1.21.49 4.456 7.044 4.456 7.044s4.543-6.46 6.174-7.048c.557-.201 1.32.152 1.902.588c2.042 1.528 2.253 3.66 2.077 4.252c-.222.744-11.505 15.073-11.505 15.073c-.338-.138-7.023-12.557-7.385-14.682c-.346-2.031.832-3.411 2.285-4.64"></svg:path></svg:g>`,
})
export class CryptocurrencyColorVrscIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
