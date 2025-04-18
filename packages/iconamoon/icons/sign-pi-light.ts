import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonSignPiLightIcon],svg[iconamoon-sign-pi-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 8h10M9 8v8m6-8v6.03A1.97 1.97 0 0 0 16.97 16H17"></svg:path>`,
})
export class IconamoonSignPiLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
