import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerLockDollarIcon],svg[tabler-lock-dollar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M13 21H7a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h10"></svg:path><svg:path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0-2 0m-3-5V7a4 4 0 1 1 8 0v4m5 4h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3H17m2 0v1m0-8v1"></svg:path></svg:g>`,
})
export class TablerLockDollarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
