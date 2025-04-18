import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteShieldCheckOutlineIcon],svg[flowbite-shield-check-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.5 11.5L11 13l4-3.5M12 20a16.4 16.4 0 0 1-5.092-5.804A16.7 16.7 0 0 1 5 6.666L12 4l7 2.667a16.7 16.7 0 0 1-1.908 7.529A16.4 16.4 0 0 1 12 20"></svg:path>`,
})
export class FlowbiteShieldCheckOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
