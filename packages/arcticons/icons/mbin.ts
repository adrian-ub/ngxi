import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMbinIcon],svg[arcticons-mbin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.747 34.948h10.836l2.709-4.693L24 34.948l2.71-4.693l2.708 4.693h10.836"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.164 34.948L24 16.178l10.836 18.77"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 7.839c-.372 0-.716.199-.902.521L5.64 38.597a1.043 1.043 0 0 0 .904 1.564h34.912a1.043 1.043 0 0 0 .904-1.564L24.902 8.36A1.04 1.04 0 0 0 24 7.84"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.567 25.063a1 1 0 0 0 0 1L24 30.277l2.433-4.214a1 1 0 0 0 0-1L24 20.849z"></svg:path>`,
})
export class ArcticonsMbinIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
