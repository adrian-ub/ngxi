import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsYtalarmIcon],svg[arcticons-ytalarm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.504 27.908H17.496a.483.483 0 0 1-.482-.483v-1.852c0-.226.092-.443.255-.6l2.898-2.791v-4.546c0-.407.33-.738.738-.738h1.191a1.898 1.898 0 1 1 3.797 0h1.192c.407 0 .738.33.738.739v4.545l2.907 2.79a.83.83 0 0 1 .256.602v1.851a.483.483 0 0 1-.482.483"></svg:path><svg:circle cx="24" cy="31.378" r="1.622" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.112 14.394a5 5 0 0 0-3.533-3.533c-2.314-.894-24.732-1.332-31.236.025A5 5 0 0 0 4.81 14.42c-1.045 4.583-1.124 14.491.026 19.177a5 5 0 0 0 3.533 3.533c4.583 1.055 26.371 1.203 31.236 0a5 5 0 0 0 3.533-3.533c1.114-4.993 1.193-14.287-.026-19.203"></svg:path>`,
})
export class ArcticonsYtalarmIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
