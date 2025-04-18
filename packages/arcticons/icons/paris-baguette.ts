import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsParisBaguetteIcon],svg[arcticons-paris-baguette-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M37.619 21.86A11 11 0 0 1 31.499 42h-14m12-16h2a5 5 0 1 1 0 10h-14m0-10v16h-6V26h-6v-6h6V6h18c5.523 0 10 4.477 10 10s-4.477 10-10 10zm0-14v8h12a4 4 0 1 0 0-8z"></svg:path>`,
})
export class ArcticonsParisBaguetteIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
