import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirYenIcon],svg[iconoir-yen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 12h12M6 4l6 8m6-8l-6 8m0 0v8m-6-4h12"></svg:path>`,
})
export class IconoirYenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
