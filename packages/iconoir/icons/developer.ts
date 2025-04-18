import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirDeveloperIcon],svg[iconoir-developer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M6.818 22v-2.857C6.662 17.592 5.633 16.416 4.682 15m9.772 7v-1.714c4.91 0 4.364-5.714 4.364-5.714s2.182 0 2.182-2.286l-2.182-3.428c0-4.572-3.709-6.816-7.636-6.857c-2.2-.023-3.957.53-5.27 1.499"></svg:path><svg:path d="m13 7l2 2.5l-2 2.5M5 7L3 9.5L5 12m5-6l-2 7"></svg:path></svg:g>`,
})
export class IconoirDeveloperIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
