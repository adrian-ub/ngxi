import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPcRemoteIcon],svg[arcticons-pc-remote-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m4.5 38.158l9.286-28.316l9.744 28.786m-13.459-.47l4.173-12.53m19.314 0l4.37 13M30.042 9.842l-3.714 13M17.5 9.372l9.756 28.786l6.958-28.316L43.5 38.628"></svg:path>`,
})
export class ArcticonsPcRemoteIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
