import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteorIconsHeadphonesIcon],svg[meteor-icons-headphones-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 14h4q2 0 2 2v4q0 2-2 2H4q-2 0-2-2v-8a1 1 0 0 1 20 0v8q0 2-2 2h-2q-2 0-2-2v-4q0-2 2-2h4"></svg:path>`,
})
export class MeteorIconsHeadphonesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
