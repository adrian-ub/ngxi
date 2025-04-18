import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiFlagLibyaIcon],svg[twemoji-flag-libya-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#141414" d="M0 24h36V12H0zm21.25-8.298l1.032 1.42l1.67-.542L22.92 18l1.032 1.42l-1.67-.542l-1.032 1.42v-1.756L19.58 18l1.67-.543zM18 14.75c.902 0 1.718.368 2.307.961a2.8 2.8 0 0 0-1.649-.535a2.824 2.824 0 1 0 1.649 5.113A3.25 3.25 0 1 1 18 14.75"></svg:path><svg:path fill="#E70013" d="M32 5H4a4 4 0 0 0-4 4v3h36V9a4 4 0 0 0-4-4"></svg:path><svg:path fill="#239E46" d="M32 31H4a4 4 0 0 1-4-4v-3h36v3a4 4 0 0 1-4 4"></svg:path><svg:path fill="#FFF" d="M18 21.25c.902 0 1.718-.368 2.307-.961a2.8 2.8 0 0 1-1.649.535a2.824 2.824 0 1 1 1.649-5.113A3.25 3.25 0 1 0 18 21.25"></svg:path><svg:path fill="#FFF" d="M21.25 18.542v1.756l1.032-1.42l1.67.542L22.92 18l1.032-1.42l-1.67.542l-1.032-1.42v1.755L19.58 18z"></svg:path>`,
})
export class TwemojiFlagLibyaIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
