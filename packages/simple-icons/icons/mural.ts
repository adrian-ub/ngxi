import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsMuralIcon],svg[simple-icons-mural-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.53 8.118H24v13.258h-3.47zM5.497 6.094A2.03 2.03 0 0 1 7.524 8.12h3.47a5.503 5.503 0 0 0-5.497-5.497A5.503 5.503 0 0 0 0 8.121h3.47a2.03 2.03 0 0 1 2.027-2.027m2.027 15.285l3.47-.002V8.12h-3.47v13.258zm8.952-.005v-3.468h-3.47l-2.013.001v3.47zm0-13.256a2.03 2.03 0 0 1 2.027-2.027V2.62a5.503 5.503 0 0 0-5.497 5.497v9.788h3.47zm4.055 0H24a5.503 5.503 0 0 0-5.497-5.497v3.47a2.03 2.03 0 0 1 2.027 2.027zM0 21.378h3.47V8.122H0V21.38z"></svg:path>`,
})
export class SimpleIconsMuralIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
