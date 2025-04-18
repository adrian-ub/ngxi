import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiRailwayCarIcon],svg[twemoji-railway-car-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#939598" d="M0 34h36v2H0z"></svg:path><svg:path fill="#58595B" d="M8 32a3 3 0 1 0-6 0a3 3 0 0 0 6 0"></svg:path><svg:path fill="#292F33" d="M7 32a2 2 0 1 0-4 0a2 2 0 0 0 4 0"></svg:path><svg:path fill="#58595B" d="M16 32a3 3 0 1 0-6 0a3 3 0 0 0 6 0"></svg:path><svg:path fill="#292F33" d="M15 32a2 2 0 1 0-4 0a2 2 0 0 0 4 0"></svg:path><svg:circle cx="32" cy="32" r="3" fill="#58595B"></svg:circle><svg:circle cx="32" cy="32" r="2" fill="#292F33"></svg:circle><svg:circle cx="24" cy="32" r="3" fill="#58595B"></svg:circle><svg:circle cx="24" cy="32" r="2" fill="#292F33"></svg:circle><svg:path fill="#5C913B" d="M0 28h36v4H0z"></svg:path><svg:path fill="#FFE8B6" d="M0 16h36v12H0z"></svg:path><svg:path fill="#FFAC33" d="M0 26h36v2H0z"></svg:path><svg:path fill="#77B255" d="M32.555 14H3.445C1.969 14 .693 14.81 0 16h36c-.693-1.19-1.969-2-3.445-2"></svg:path><svg:path fill="#55ACEE" d="M5 22a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1zm6 0a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1zm6 0a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1zm6 0a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1zm6 0a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1zm6 0a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1z"></svg:path>`,
})
export class TwemojiRailwayCarIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
