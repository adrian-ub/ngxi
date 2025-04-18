import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandWeiboIcon],svg[tabler-brand-weibo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14.127C19 17.2 15.498 20 11 20c-4.126 0-8-2.224-8-5.565c0-1.78.984-3.737 2.7-5.567c2.362-2.51 5.193-3.687 6.551-2.238c.415.44.752 1.39.749 2.062c2-1.615 4.308.387 3.5 2.693c1.26.557 2.5.538 2.5 2.742M15 4h1a5 5 0 0 1 5 5v1"></svg:path>`,
})
export class TablerBrandWeiboIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
