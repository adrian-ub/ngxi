import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionWatchOutlineIcon],svg[ion-watch-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="288" height="288" x="112" y="112" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" rx="64" ry="64"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="M176 112V40a8 8 0 0 1 8-8h144a8 8 0 0 1 8 8v72m0 288v72a8 8 0 0 1-8 8H184a8 8 0 0 1-8-8v-72"></svg:path>`,
})
export class IonWatchOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
