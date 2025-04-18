import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerRegexOffIcon],svg[tabler-regex-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.5 15a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5M17 7.875l3-1.687m-3 1.687v3.375m0-3.375l-3-1.687m3 1.687l3 1.688M17 4.5v3.375m0 0l-3 1.688M3 3l18 18"></svg:path>`,
})
export class TablerRegexOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
