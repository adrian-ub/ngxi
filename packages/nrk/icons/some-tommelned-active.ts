import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkSomeTommelnedActiveIcon],svg[nrk-some-tommelned-active-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 20a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-3h7.694a2 2 0 0 0 1.98-2.283l-1.429-10A2 2 0 0 0 20.265 3H8zm2 0h2v-2h-2zm-6-4H1v2h5V1H1v2h3z" clip-rule="evenodd"></svg:path>`,
})
export class NrkSomeTommelnedActiveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
