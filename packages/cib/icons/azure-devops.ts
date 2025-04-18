import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cibAzureDevopsIcon],svg[cib-azure-devops-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m0 11.865l2.995-3.953l11.208-4.557V.063l9.828 7.188l-20.078 3.896v10.969L0 20.975zm32-5.933v19.536l-7.672 6.531l-12.401-4.073v4.073l-7.974-9.885l20.078 2.396V7.25z"></svg:path>`,
})
export class CibAzureDevopsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
