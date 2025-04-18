import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiAccountsListIcon],svg[zmdi-accounts-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M427 43h42v298h-42zm-86 298V43h43v298zM277 43q9 0 15.5 6t6.5 15v256q0 9-6.5 15t-15.5 6H21q-8 0-14.5-6T0 320V64q0-9 6.5-15T21 43zm-128 58q-20 0-34 14t-14 34t14 34t34 14t34-14t14-34t-14-34t-34-14m96 198v-16q0-22-33-35t-63-13t-63 13t-33 35v16z"></svg:path>`,
})
export class ZmdiAccountsListIcon {
  readonly viewBox = input("0 0 472 384")
  readonly width = input("1.23em")
  readonly height = input("1em")
}
