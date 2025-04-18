import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionChevronCollapseSharpIcon],svg[ion-chevron-collapse-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M102.145 108.514L256 241.855l153.855-133.341l-31.437-36.273L256 178.337L133.582 72.241zm0 294.972L256 270.145l153.855 133.341l-31.437 36.273L256 333.663L133.582 439.759z"></svg:path>`,
})
export class IonChevronCollapseSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
