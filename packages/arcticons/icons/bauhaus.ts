import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBauhausIcon],svg[arcticons-bauhaus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.029 43.5v-9.916l9.595-10.25l9.584 10.25V43.5zM8.793 28.293v-9.251l7.93-7.931l7.943 7.93v9.252z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.334 17.722V11.11l6.29-6.61l6.278 6.61v6.61z"></svg:path>`,
})
export class ArcticonsBauhausIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
