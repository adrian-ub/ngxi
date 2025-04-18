import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiArrowProjectileMultipleIcon],svg[mdi-arrow-projectile-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19 16l3 3l-2 1l-1 2l-3-3v-1.94l-4-4l-4 4V19l-3 3l-1-2l-2-1l3-3h1.94l4-4l-5.97-5.97L4 7L2 2l5 2l-.97.97L12 10.94l5.97-5.97L17 4l5-2l-2 5l-.97-.97L13.06 12l4 4z"></svg:path>`,
})
export class MdiArrowProjectileMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
