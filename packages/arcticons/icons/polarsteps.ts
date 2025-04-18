import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPolarstepsIcon],svg[arcticons-polarsteps-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.8 21.2c1-.4 2.1-.3 3 .3c.2.1.4.2.6.1l2.4-1c.5-.2.7-.9.3-1.3L18.8 8.9c-.7-.7-2-.2-2 .8l.2 14.5c0 .6.6 1 1.1.7l2.4-1c.2-.1.3-.3.4-.5c.2-.9.9-1.8 1.9-2.2m2.4 5.6c1-.4 1.7-1.3 1.8-2.4c0-.2.2-.4.4-.5l2.4-1c.5-.2 1.1.2 1.1.7l.2 14.5c0 1-1.2 1.6-2 .8L19 28.8c-.4-.4-.3-1.1.3-1.3l2.4-1c.2-.1.4 0 .6.1c.8.5 1.9.7 2.9.2"></svg:path>`,
})
export class ArcticonsPolarstepsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
