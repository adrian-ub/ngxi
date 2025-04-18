import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinGridSmallOIcon],svg[vaadin-grid-small-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 4h4V0H0zm1-3h2v2H1zm-1 9h4V6H0zm1-3h2v2H1zm-1 9h4v-4H0zm1-3h2v2H1zm5-9h4V0H6zm1-3h2v2H7zm-1 9h4V6H6zm1-3h2v2H7zm-1 9h4v-4H6zm1-3h2v2H7zm5-13v4h4V0zm3 3h-2V1h2zm-3 7h4V6h-4zm1-3h2v2h-2zm-1 9h4v-4h-4zm1-3h2v2h-2z"></svg:path>`,
})
export class VaadinGridSmallOIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
