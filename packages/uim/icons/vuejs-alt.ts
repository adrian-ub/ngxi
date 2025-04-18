import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uimVuejsAltIcon],svg[uim-vuejs-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.018 19.151L4.315 6h2.823l4.886 8.407L16.871 6h2.809z" opacity=".5"></svg:path><svg:path fill="currentColor" d="m14.38 4.001l-2.374 3.956l-2.384-3.956H.825L12.02 23.115L23.161 4H14.38zm-2.362 15.15L4.315 6h2.823l4.886 8.407L16.871 6h2.809z"></svg:path>`,
})
export class UimVuejsAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
