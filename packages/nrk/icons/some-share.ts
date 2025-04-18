import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkSomeShareIcon],svg[nrk-some-share-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m20.602 9l-4.9-7H13.43l4.2 6H12a7 7 0 0 0-7 7v7.293l2-2V15a5 5 0 0 1 5-5h5.63l-4.2 6h2.272z" clip-rule="evenodd"></svg:path>`,
})
export class NrkSomeShareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
