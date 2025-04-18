import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilFeaturedPlaylistIcon],svg[cil-featured-playlist-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M464 72H48a32.036 32.036 0 0 0-32 32v304a32.036 32.036 0 0 0 32 32h416a32.036 32.036 0 0 0 32-32V104a32.036 32.036 0 0 0-32-32m0 336H48V104h416l.02 304Z"></svg:path><svg:path fill="currentColor" d="M232 184h184v32H232zm-56 72h240v32H176zm0 72h240v32H176zM88.923 144v128.923l99.172-69.42z"></svg:path>`,
})
export class CilFeaturedPlaylistIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
