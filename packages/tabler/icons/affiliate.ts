import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerAffiliateIcon],svg[tabler-affiliate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5.931 6.936l1.275 4.249m5.607 5.609l4.251 1.275m-5.381-5.752l5.759-5.759M4 5.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m13 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m0 13a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m-13-3a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0"></svg:path>`,
})
export class TablerAffiliateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
