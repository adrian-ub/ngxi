import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiAnimationPlayIcon],svg[mdi-animation-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2h10v2H4v10H2V4c0-1.11.89-2 2-2m4 4h10v2H8v10H6V8c0-1.11.89-2 2-2m4 4h8c1.11 0 2 .89 2 2v8c0 1.11-.89 2-2 2h-8c-1.11 0-2-.89-2-2v-8c0-1.11.89-2 2-2m2 2v8l6-4z"></svg:path>`,
})
export class MdiAnimationPlayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
