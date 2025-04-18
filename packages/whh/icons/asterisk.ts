import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhAsteriskIcon],svg[whh-asterisk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m981 549l-249 36l185 190q15 21 11 47t-24 41l-196 149q-20 15-44.5 11T624 998L513 765L402 998q-15 21-39.5 25t-44.5-11L122 863q-20-15-24-41t11-47l185-190l-249-36q-25-8-37-31t-4-47l79-236q8-25 31.5-36.5T163 195l197 99l-39-230q0-26 19-45t45-19h256q26 0 45 19t19 45l-39 230l197-99q25-8 48.5 3.5T943 235l79 236q8 24-4 47t-37 31"></svg:path>`,
})
export class WhhAsteriskIcon {
  readonly viewBox = input("0 0 1026 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
