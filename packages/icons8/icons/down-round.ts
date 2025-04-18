import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icons8DownRoundIcon],svg[icons8-down-round-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c6.087 0 11 4.913 11 11s-4.913 11-11 11S5 22.087 5 16S9.913 5 16 5m-1 4v10.28l-4-4l-1.406 1.44l5.687 5.686l.72.72l.72-.72l5.686-5.687L21 15.28l-4 4V9z"></svg:path>`,
})
export class Icons8DownRoundIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
