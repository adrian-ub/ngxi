import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMinecraftEducationIcon],svg[arcticons-minecraft-education-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.401 9.75H9.75v4.75M24 38.25h9.561m-14.16 0H24v-19m9.561-4.75V9.75H24v9.5h-4.599V14.5M24 9.75h-4.599m0 4.75H9.75v4.75h9.651V24M9.75 24v14.25h9.651V24L9.75 19.25zM33.561 9.75h4.689v4.75h-4.689v23.75h4.689V14.5"></svg:path><svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect>`,
})
export class ArcticonsMinecraftEducationIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
