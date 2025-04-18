import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsPaperswithcodeIcon],svg[simple-icons-paperswithcode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 2v20h4.4v-2.4h-2V4.4h2V2zm19.6 0v2.4h2v15.2h-2V22H24V2zm-16 3.6v12.8H6V5.6zm7.2 0v12.8h2.4V5.6zm7.2 0v12.8h2.4V5.6zm-10.8.8v11.2h2.4V6.4zm7.2 0v11.2h2.4V6.4z"></svg:path>`,
})
export class SimpleIconsPaperswithcodeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
