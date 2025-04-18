import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirStretchingIcon],svg[iconoir-stretching-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a2 2 0 1 0 0-4a2 2 0 0 0 0 4M5 20l4.91-.524l2.726-5.238L13.727 9l-4.909 1.048l1.636 2.095m4.364 3.143H17V20"></svg:path>`,
})
export class IconoirStretchingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
