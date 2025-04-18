import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiTiltWindowClosedIcon],svg[cbi-tilt-window-closed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.62 3.543l-7.8.558l-3.9 6.407l-4.743 7.523l7.9 1.275zM5.241 17.6l8.133-12.665l5.832-.476l-.19.33s-5.472.468-5.5.437L5.59 17.652Zm.68.1l7.736-12.209l5.183-.342l-7.14 13.44ZM20.897 3.541L12.238 19.52l-7.987-1.325l.763.673l7.802 1.393l8.361-16.163z"></svg:path>`,
})
export class CbiTiltWindowClosedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
