import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamInstantPictureIcon],svg[jam-instant-picture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 8.322V2H2v12h3.576l3.97-5.292A3 3 0 0 1 14 8.322m0 3.753l-1.188-2.066a1 1 0 0 0-1.667-.101L8.076 14H14zM14 16H2v2h12zM2 0h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2m4 9a3 3 0 1 1 0-6a3 3 0 0 1 0 6m0-2a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path>`,
})
export class JamInstantPictureIcon {
  readonly viewBox = input("-4 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
