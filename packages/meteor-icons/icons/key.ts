import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteorIconsKeyIcon],svg[meteor-icons-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="8" cy="16" r=".5"></svg:circle><svg:path d="M18 2h4v5h-3v3h-3v2l-2.3 2.3a6 6 0 1 1-4-4Z"></svg:path></svg:g>`,
})
export class MeteorIconsKeyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
