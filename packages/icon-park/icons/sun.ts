import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSunIcon],svg[icon-park-sun-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M9.15039 9.15088L11.3778 11.3783"></svg:path><svg:path stroke-linecap="round" d="M3 24H6.15"></svg:path><svg:path stroke-linecap="round" d="M9.15039 38.8495L11.3778 36.6221"></svg:path><svg:path stroke-linecap="round" d="M38.8495 38.8495L36.6221 36.6221"></svg:path><svg:path stroke-linecap="round" d="M44.9996 24H41.8496"></svg:path><svg:path stroke-linecap="round" d="M38.8495 9.15088L36.6221 11.3783"></svg:path><svg:path stroke-linecap="round" d="M24 3V6.15"></svg:path><svg:path fill="#fff" d="M24 36C30.6274 36 36 30.6274 36 24C36 17.3726 30.6274 12 24 12C17.3726 12 12 17.3726 12 24C12 30.6274 17.3726 36 24 36Z"></svg:path><svg:path stroke-linecap="round" d="M24 45.0001V41.8501"></svg:path></svg:g>`,
})
export class IconParkSunIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
