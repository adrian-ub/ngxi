import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiWindowMinimizeIcon],svg[mdi-window-minimize-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 14H4v-4h16"></svg:path>`,
})
export class MdiWindowMinimizeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
