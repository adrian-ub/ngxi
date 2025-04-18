import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[primeTwitchIcon],svg[prime-twitch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.706 7.144h1.168v3.424h-1.168m3.21-3.424h1.168v3.424h-1.168M7.916 4L5 6.856v10.288h3.496V20l2.924-2.856h2.328L19 12V4m-1.168 7.432l-2.328 2.28h-2.336l-2.042 2v-2h-2.63V5.144h9.336z"></svg:path>`,
})
export class PrimeTwitchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
