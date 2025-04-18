import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkSomeTommelnedIcon],svg[nrk-some-tommelned-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M20.265 5H10v15h2v-5h9.694zM10 22a2 2 0 0 1-2-2V3h12.265a2 2 0 0 1 1.98 1.717l1.429 10A2 2 0 0 1 21.694 17H14v3a2 2 0 0 1-2 2zm-6-6H1v2h5V1H1v2h3z" clip-rule="evenodd"></svg:path>`,
})
export class NrkSomeTommelnedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
