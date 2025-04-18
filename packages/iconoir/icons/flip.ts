import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirFlipIcon],svg[iconoir-flip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.5 20H2L9.5 4zm10.625 0H22l-.937-2m-4.688 2H14.5v-2m0-6v2m3.75-2l.938 2m-2.813-6L14.5 4v4"></svg:path>`,
})
export class IconoirFlipIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
