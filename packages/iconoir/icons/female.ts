import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirFemaleIcon],svg[iconoir-female-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 15a6 6 0 1 0 0-12a6 6 0 0 0 0 12m0 0v4m0 2v-2m0 0h-2m2 0h2"></svg:path>`,
})
export class IconoirFemaleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
