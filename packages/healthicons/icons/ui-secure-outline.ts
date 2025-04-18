import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsUiSecureOutlineIcon],svg[healthicons-ui-secure-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M15 26h18v-2H15zm18 5H15v-2h18zm-18 5h18v-2H15z"></svg:path><svg:path fill-rule="evenodd" d="M39 20a2 2 0 0 0-2-2h-2v-1c0-6.075-4.925-11-11-11s-11 4.925-11 11v1h-2a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h26a2 2 0 0 0 2-2zm-24-3a9 9 0 1 1 18 0v1h-2v-1a7 7 0 1 0-14 0v3h20v20H11V20h4zm9-5a5 5 0 0 1 5 5v1H19v-1a5 5 0 0 1 5-5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsUiSecureOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
