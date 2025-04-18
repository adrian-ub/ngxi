import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[systemUiconsTrophyIcon],svg[system-uicons-trophy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.5 3.5h6a1 1 0 0 1 1 1v5a4 4 0 1 1-8 0v-5a1 1 0 0 1 1-1m3 10v3m-3 0h6a1 1 0 0 1 0 2h-6a1 1 0 0 1 0-2m7-11h2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2h-1zm-8 0h-2a1 1 0 0 0-1 1v1a2 2 0 0 0 2 2h1z"></svg:path>`,
})
export class SystemUiconsTrophyIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}
