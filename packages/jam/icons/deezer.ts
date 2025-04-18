import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamDeezerIcon],svg[jam-deezer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 9.786h3.64v1.062H0zm0-1.381h3.64v1.062H0zm0-1.38h3.64v1.062H0zm0-1.38h3.64v1.062H0zm0-1.381h3.64v1.062H0zm4.082 5.522h3.641v1.062H4.082zm0-1.381h3.641v1.062H4.082zm0-1.38h3.641v1.062H4.082zm4.082 2.761h3.641v1.062H8.164zm0-1.381h3.641v1.062H8.164zm0-1.38h3.641v1.062H8.164zm0-1.38h3.641v1.062H8.164zm0-1.381h3.641v1.062H8.164zm0-1.38h3.641v1.062H8.164zm0-1.381h3.641v1.062H8.164zm4.082 8.283h3.641v1.062h-3.641zm0-1.381h3.641v1.062h-3.641zm0-1.38h3.641v1.062h-3.641zm0-1.38h3.641v1.062h-3.641zm0-1.381h3.641v1.062h-3.641zm4.082 5.522h3.641v1.062h-3.641zm0-1.381h3.641v1.062h-3.641zm0-1.38h3.641v1.062h-3.641zm0-1.38h3.641v1.062h-3.641zm0-1.381h3.641v1.062h-3.641zm0-1.38h3.641v1.062h-3.641zm0-1.381h3.641v1.062h-3.641zm0-1.381h3.641v1.062h-3.641z"></svg:path>`,
})
export class JamDeezerIcon {
  readonly viewBox = input("-2 -6.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
