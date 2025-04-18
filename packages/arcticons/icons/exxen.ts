import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsExxenIcon],svg[arcticons-exxen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m21.44 20.166l4.984 7.668m0-7.668l-4.984 7.668m12.98 0v-7.668l5.08 7.668v-7.668M8.5 24h2.492m1.342 3.834H8.5v-7.668h3.834m2.067 0l4.984 7.668m0-7.668l-4.984 7.668M28.52 24h2.492m1.342 3.834H28.52v-7.668h3.834"></svg:path>`,
})
export class ArcticonsExxenIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
