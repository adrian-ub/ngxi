import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilShieldSlashIcon],svg[uil-shield-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.71 20.29l-16-16l-2-2a1 1 0 0 0-1.42 1.42L4 5.41v6.47a9 9 0 0 0 3.77 7.32l3.65 2.61a1 1 0 0 0 1.16 0l3.65-2.61a8 8 0 0 0 .86-.7l3.2 3.21a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42m-6.64-2.71L12 19.77l-3.07-2.19A7 7 0 0 1 6 11.88V7.41l9.67 9.68c-.19.17-.39.33-.6.49m-5-12.51A10 10 0 0 0 12 4.19a9.82 9.82 0 0 0 6 1.39v6.3a7 7 0 0 1-.1 1.18a1 1 0 0 0 .83 1.15h.16a1 1 0 0 0 1-.84a10 10 0 0 0 .12-1.5V4.43a1 1 0 0 0-.37-.77a1 1 0 0 0-.83-.21a7.9 7.9 0 0 1-6.23-1.27a1 1 0 0 0-1.14 0a8 8 0 0 1-2 1a1 1 0 1 0 .64 1.9Z"></svg:path>`,
})
export class UilShieldSlashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
