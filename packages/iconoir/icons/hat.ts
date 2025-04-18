import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirHatIcon],svg[iconoir-hat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 17v-2a7 7 0 1 1 14 0v2zm0 0H2M14 6.01l.01-.011"></svg:path>`,
})
export class IconoirHatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
