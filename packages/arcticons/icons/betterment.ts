import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBettermentIcon],svg[arcticons-betterment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.797 38.851c-8.396-8.396-8.396-22.008 0-30.405C17.193.05 30.806.05 39.203 8.446s8.396 22.009 0 30.405L24 30.15z"></svg:path>`,
})
export class ArcticonsBettermentIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
