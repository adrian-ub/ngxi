import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorPaintBrush20Icon],svg[fluent-color-paint-brush-20-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorPaintBrush200)" d="M5 2.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v7.501H5z"></svg:path><svg:path fill="url(#fluentColorPaintBrush201)" d="M7 13.003a2 2 0 0 1-2-2V10a.5.5 0 0 1 .5-.5H15v1.503a2 2 0 0 1-2 2h-.996v2.998a2 2 0 1 1-4 0v-2.998z"></svg:path><svg:path fill="url(#fluentColorPaintBrush202)" d="M5 9.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v.5H5z"></svg:path><svg:path fill="url(#fluentColorPaintBrush203)" d="M10 4.499V2h1v2.499a.5.5 0 0 1-1 0"></svg:path><svg:path fill="url(#fluentColorPaintBrush204)" d="M12 5.501V2h1v3.501a.5.5 0 0 1-1 0"></svg:path><svg:defs><svg:lineargradient id="fluentColorPaintBrush200" x1="8" x2="13" y1="-.5" y2="12.5" gradientUnits="userSpaceOnUse"><svg:stop offset=".085" stop-color="#FFCD0F"></svg:stop><svg:stop offset=".991" stop-color="#E67505"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorPaintBrush201" x1="5" x2="5.866" y1="6.5" y2="20.186" gradientUnits="userSpaceOnUse"><svg:stop offset=".125" stop-color="#AC80FF"></svg:stop><svg:stop offset="1" stop-color="#5750E2"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorPaintBrush202" x1="7.378" x2="7.449" y1="9.133" y2="10.261" gradientUnits="userSpaceOnUse"><svg:stop offset=".125" stop-color="#9C6CFE"></svg:stop><svg:stop offset="1" stop-color="#5750E2"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorPaintBrush203" x1="10" x2="13.289" y1=".889" y2="4.938" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FF921F"></svg:stop><svg:stop offset="1" stop-color="#EB4824"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorPaintBrush204" x1="10" x2="13.289" y1=".889" y2="4.938" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FF921F"></svg:stop><svg:stop offset="1" stop-color="#EB4824"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorPaintBrush20Icon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
