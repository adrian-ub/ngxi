import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPictureInPictureRoundedIcon],svg[material-symbols-light-picture-in-picture-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.616 19q-.691 0-1.153-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5h14.77q.69 0 1.152.463T21 6.616v10.769q0 .69-.463 1.153T19.385 19zm7.5-6.308h6.076q.349 0 .578-.23t.23-.577V7.808q0-.348-.23-.578T18.192 7h-6.076q-.349 0-.578.23t-.23.578v4.077q0 .348.23.577t.578.23m3.038-2.846"></svg:path>`,
})
export class MaterialSymbolsLightPictureInPictureRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
