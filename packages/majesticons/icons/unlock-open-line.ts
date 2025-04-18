import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsUnlockOpenLineIcon],svg[majesticons-unlock-open-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10H6a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2zm0 0V7c0-1.333.8-4 4-4c1.904 0 2.958.944 3.5 1.99M12 14v3"></svg:path>`,
})
export class MajesticonsUnlockOpenLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
