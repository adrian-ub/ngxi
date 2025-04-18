import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkWalletThreeIcon],svg[icon-park-wallet-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-linejoin="round" stroke-width="4" d="M39 16V9C39 7.34315 37.6569 6 36 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34314 42 9 42H36C37.6569 42 39 40.6569 39 39V32"></svg:path><svg:rect width="20" height="16" x="22" y="16" fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" rx="3"></svg:rect><svg:circle r="2" fill="#fff" transform="matrix(0 -1 -1 0 30 24)"></svg:circle></svg:g>`,
})
export class IconParkWalletThreeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
