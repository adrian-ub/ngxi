import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsScpIcon],svg[arcticons-scp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="25.401" r="11.21" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.728 19.688L24 23.632l2.272-3.944zm2.272 0v-7.266m-3.811 17.803l2.279-3.94l-4.552.004zm-1.136-1.967L12.76 31.89m17.324-5.6l-4.552-.005l2.28 3.94zm-1.136 1.967l6.292 3.633"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M41.585 28.251c.15-.93.248-1.878.248-2.85c0-7.62-4.787-14.105-11.51-16.659l-1.064-3.976H18.741l-1.063 3.976c-6.724 2.554-11.511 9.04-11.511 16.659c0 .972.099 1.92.249 2.85L3.5 31.163l2.63 4.555l2.63 4.555l3.96-1.064c3.074 2.514 7 4.025 11.28 4.025s8.206-1.51 11.28-4.025l3.96 1.064l2.63-4.555l2.63-4.555z"></svg:path>`,
})
export class ArcticonsScpIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
