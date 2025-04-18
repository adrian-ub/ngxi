import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTvkillIcon],svg[arcticons-tvkill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.48 34a1 1 0 0 0 1-1V11.39a1 1 0 0 0-1-1h-37a1 1 0 0 0-1 1V33a1 1 0 0 0 1 1Zm-19.59-3.48v-7.25H19l6.11-9.44v7.24H29ZM24 33.97v3.66m-7.43 0h14.86"></svg:path>`,
})
export class ArcticonsTvkillIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
