import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamMapFIcon],svg[jam-map-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 2.641v18a5 5 0 0 1-1.581-.256L8 19.245V1.175a5 5 0 0 1 .581.156l3.47 1.157A3 3 0 0 0 13 2.64zm2-.504l3.662-1.22A1 1 0 0 1 20 1.858v16a1 1 0 0 1-.706.956L15 20.245zm-9-.962v18.07L1.338 20.8A1 1 0 0 1 0 19.858v-16a1 1 0 0 1 .706-.956L5.419 1.33A5 5 0 0 1 6 1.175"></svg:path>`,
})
export class JamMapFIcon {
  readonly viewBox = input("-2 -1.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
