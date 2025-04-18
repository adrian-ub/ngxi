import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCurtainsIcon],svg[material-symbols-light-curtains-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 20v-1h2V4h14v15h2v1zm4.11-8q1.988.856 3.067 2.883T11.45 19h1.1q.194-2.09 1.273-4.117T16.891 12q-2.008-.856-3.087-2.883T12.53 5h-1.08q-.194 2.09-1.273 4.117T7.11 12"></svg:path>`,
})
export class MaterialSymbolsLightCurtainsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
