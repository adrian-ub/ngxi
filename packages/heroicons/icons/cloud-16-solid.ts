import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsCloud16SolidIcon],svg[heroicons-cloud-16-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 9.5A3.5 3.5 0 0 0 4.5 13H12a3 3 0 0 0 .917-5.857a2.503 2.503 0 0 0-3.198-3.019a3.5 3.5 0 0 0-6.628 2.171A3.5 3.5 0 0 0 1 9.5"></svg:path>`,
})
export class HeroiconsCloud16SolidIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
