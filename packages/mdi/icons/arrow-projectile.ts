import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiArrowProjectileIcon],svg[mdi-arrow-projectile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22 2l-2 5l-.97-.97L8 17.06V19l-3 3l-1-2l-2-1l3-3h1.94L17.97 4.97L17 4z"></svg:path>`,
})
export class MdiArrowProjectileIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
