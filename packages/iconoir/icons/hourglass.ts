import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirHourglassIcon],svg[iconoir-hourglass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 12a7 7 0 0 0 7-7H5a7 7 0 0 0 7 7m0 0a7 7 0 0 1 7 7H5a7 7 0 0 1 7-7M5 2h14M5 22h14"></svg:path>`,
})
export class IconoirHourglassIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
