import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiExitFullscreenIcon],svg[ooui-exit-fullscreen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 7V1H5v4H1v2zM5 19h2v-6H1v2h4zm10-4h4v-2h-6v6h2zm0-8h4V5h-4V1h-2v6z"></svg:path>`,
})
export class OouiExitFullscreenIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
