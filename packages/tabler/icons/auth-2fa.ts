import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerAuth2faIcon],svg[tabler-auth-2fa-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16H3l3.47-4.66A2 2 0 1 0 3 9.8m7 6.2V8h4m-4 4h3m4 4v-6a2 2 0 0 1 4 0v6m-4-3h4"></svg:path>`,
})
export class TablerAuth2faIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
