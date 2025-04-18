import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[akarIconsSettingsHorizontalIcon],svg[akar-icons-settings-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><svg:path d="M3 5h4m14 0H11m-8 7h12m6 0h-2M3 19h2m16 0H9"></svg:path><svg:circle cx="9" cy="5" r="2"></svg:circle><svg:circle cx="17" cy="12" r="2"></svg:circle><svg:circle cx="7" cy="19" r="2"></svg:circle></svg:g>`,
})
export class AkarIconsSettingsHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
