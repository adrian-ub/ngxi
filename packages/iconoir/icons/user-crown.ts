import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirUserCrownIcon],svg[iconoir-user-crown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12 12a4 4 0 1 0 0-8a4 4 0 0 0 0 8"></svg:path><svg:path d="M5 20v-1a7 7 0 0 1 10-6.326M21 22l1-6l-3.5 1.8L17 16l-1.5 1.8L12 16l1 6z"></svg:path></svg:g>`,
})
export class IconoirUserCrownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
