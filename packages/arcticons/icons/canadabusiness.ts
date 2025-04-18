import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCanadabusinessIcon],svg[arcticons-canadabusiness-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 6.247v22.167l-6.479-6.478l-1.588-10.163l3.72 2.096zm0 0v22.167l6.479-6.478l1.588-10.163l-3.72 2.096zM12.948 19.903l10.16 10.037l-9.207 11.813l.762-3.874L4.5 30.066l2.604-1.207l-1.524-6.923h5.843zm22.104 0l-21.151 21.85h20.198l-.762-3.874L43.5 30.066l-2.604-1.207l1.524-6.923h-5.843z"></svg:path>`,
})
export class ArcticonsCanadabusinessIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
