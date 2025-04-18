import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamShareAltIcon],svg[jam-share-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 6a2 2 0 1 0 0-4a2 2 0 0 0 0 4M7.928 9.24a4 4 0 0 1-.026 1.644l5.04 2.537a4 4 0 1 1-.867 1.803l-5.09-2.562a4 4 0 1 1 .083-5.228l5.036-2.522a4 4 0 1 1 .929 1.772zM4 12a2 2 0 1 0 0-4a2 2 0 0 0 0 4m12 6a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path>`,
})
export class JamShareAltIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
