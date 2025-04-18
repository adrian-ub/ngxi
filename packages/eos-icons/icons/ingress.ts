import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eosIconsIngressIcon],svg[eos-icons-ingress-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 24h-4v-4h4zm2-13.982h-3v7.996h-2v-7.996H8l1-1.001l1-1.001l1-1.001l1-1.001l1 1l1 1.002l1 1ZM1 15.999V3.001a2 2 0 0 1 .158-.777a2.02 2.02 0 0 1 1.065-1.066A2 2 0 0 1 3 1h18a2 2 0 0 1 .777.158a2.02 2.02 0 0 1 1.065 1.066A2 2 0 0 1 23 3v12.998a2 2 0 0 1-.158.777a2.02 2.02 0 0 1-1.065 1.066A2 2 0 0 1 21 18h-6v-1.99h6v-13H3v13h6V18H3a2 2 0 0 1-.777-.158a2.02 2.02 0 0 1-1.065-1.066A2 2 0 0 1 1 16"></svg:path>`,
})
export class EosIconsIngressIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
