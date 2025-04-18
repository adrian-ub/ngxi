import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiSpiralNotepadIcon],svg[openmoji-spiral-notepad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FFF" d="m60.069 17.015l-5.918-.932H17.21l-5.272.968l.036 43.218l31.633-.036l16.498-12.05z"></svg:path><svg:path fill="#d0cfce" d="M56.956 49.038H44.139v4.48a1 1 0 0 1-1 1a.99.99 0 0 1-.972-.857v5.425h1.16z"></svg:path><svg:path fill="#FFF" d="M45.481 13.955v5.636m-4.761-5.636v5.636m-4.76-5.636v5.636m14.281-5.636v5.636M31.2 13.955v5.636m-4.761-5.636v5.636m-4.76-5.636v5.636"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:path d="M45.481 13.955v5.636m-4.761-5.636v5.636m-4.76-5.636v5.636m14.281-5.636v5.636M31.2 13.955v5.636m-4.761-5.636v5.636m-4.76-5.636v5.636m-4.689 9.761h37.797M16.99 39.825h37.797M16.99 50.298h22.125M25.946 24.443v31.106m28.379-38.576h5.635l.037 31.065l-16.341 12.048l-31.659.006l-.037-43.119h5.639"></svg:path><svg:path d="M59.746 48.038H43.138v5.479"></svg:path></svg:g>`,
})
export class OpenmojiSpiralNotepadIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
