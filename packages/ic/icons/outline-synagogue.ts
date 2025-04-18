import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icOutlineSynagogueIcon],svg[ic-outline-synagogue-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 4c-1.66 0-3 1.34-3 3v.29L12 3L7 7.29V7c0-1.66-1.34-3-3-3S1 5.34 1 7v14h10v-5c0-.55.45-1 1-1s1 .45 1 1v5h10V7c0-1.66-1.34-3-3-3m0 2c.55 0 1 .45 1 1v1h-2V7c0-.55.45-1 1-1M4 6c.55 0 1 .45 1 1v1H3V7c0-.55.45-1 1-1M3 19v-9h2v9zm14 0h-2v-3c0-1.65-1.35-3-3-3s-3 1.35-3 3v3H7V9.92l5-4.29l5 4.29zm2 0v-9h2v9z"></svg:path><svg:circle cx="12" cy="10" r="1.5" fill="currentColor"></svg:circle>`,
})
export class IcOutlineSynagogueIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
