import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionToggleOutlineIcon],svg[ion-toggle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="368" cy="256" r="128" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"></svg:circle><svg:rect width="480" height="256" x="16" y="128" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" rx="128" ry="128"></svg:rect>`,
})
export class IonToggleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
