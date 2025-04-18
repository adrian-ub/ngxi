import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[typcnMediaPlayOutlineIcon],svg[typcn-media-play-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.998 7.002l.085.078L14.134 12l-5.096 4.964L9 17zM9 5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2c.543 0 1.033-.218 1.393-.568L17 12l-6.604-6.433A2 2 0 0 0 9 5"></svg:path>`,
})
export class TypcnMediaPlayOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
