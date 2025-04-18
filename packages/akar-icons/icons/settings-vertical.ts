import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[akarIconsSettingsVerticalIcon],svg[akar-icons-settings-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><svg:path d="M19 3v4m0 14V11m-7-8v12m0 6v-2M5 3v2m0 16V9"></svg:path><svg:circle cx="19" cy="9" r="2" transform="rotate(90 19 9)"></svg:circle><svg:circle cx="12" cy="17" r="2" transform="rotate(90 12 17)"></svg:circle><svg:circle cx="5" cy="7" r="2" transform="rotate(90 5 7)"></svg:circle></svg:g>`,
})
export class AkarIconsSettingsVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
