import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faSolidEggIcon],svg[fa-solid-egg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 0C86 0 0 214 0 320s86 192 192 192s192-86 192-192S298 0 192 0"></svg:path>`,
})
export class FaSolidEggIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}
