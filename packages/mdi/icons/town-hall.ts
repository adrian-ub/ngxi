import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiTownHallIcon],svg[mdi-town-hall-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 10h-4V8l-4.5-1.8V4H15V2h-3.5v4.2L7 8v2H3c-.55 0-1 .45-1 1v11h8v-5h4v5h8V11c0-.55-.45-1-1-1M8 20H4v-3h4zm0-5H4v-3h4zm4-7c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1m2 7h-4v-3h4zm6 5h-4v-3h4zm0-5h-4v-3h4z"></svg:path>`,
})
export class MdiTownHallIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
