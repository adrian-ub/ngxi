import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageSimCardIcon],svg[mage-sim-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M20.444 10.586v6.692a4.22 4.22 0 0 1-4.222 4.222H7.778a4.22 4.22 0 0 1-4.222-4.222V6.722A4.22 4.22 0 0 1 7.778 2.5h4.58a4.22 4.22 0 0 1 2.988 1.235l3.863 3.863a4.22 4.22 0 0 1 1.235 2.988"></svg:path><svg:path d="M15.167 9.889H8.833A2.11 2.11 0 0 0 6.723 12v4.222a2.11 2.11 0 0 0 2.11 2.111h6.334a2.11 2.11 0 0 0 2.11-2.11V12a2.11 2.11 0 0 0-2.11-2.111m-3.167 0v8.444m-5.278-4.222h10.556"></svg:path></svg:g>`,
})
export class MageSimCardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
