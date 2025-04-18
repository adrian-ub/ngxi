import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cibDeviantartIcon],svg[cib-deviantart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m25.609 6.391l.308-.573V.001h-5.824l-.583.588l-2.745 5.229l-.859.584H6.103v7.989h5.391l.479.583l-5.567 10.641l-.319.573V32h5.819l.583-.588l2.761-5.229l.853-.584h9.803V17.61h-5.401l-.479-.583l5.583-10.641z"></svg:path>`,
})
export class CibDeviantartIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
