import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirMapsTurnRightIcon],svg[iconoir-maps-turn-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m4.365 19.787l7.303-6.492a.5.5 0 0 1 .664 0l7.303 6.492c.38.338.072.962-.427.864l-7.113-1.382a.5.5 0 0 0-.19 0l-7.113 1.383c-.499.097-.808-.527-.427-.865M19 6.5h-3q0 0 0 0s-4 0-4 4"></svg:path><svg:path d="M15.5 9L19 6.5L15.5 4"></svg:path></svg:g>`,
})
export class IconoirMapsTurnRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
