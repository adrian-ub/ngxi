import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkMatIcon],svg[nrk-mat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9 0H7v7H6V0H4v10l3 1.5V24h2V11.5l3-1.5V0h-2v7H9zm6 3.5C15.5 0 20 0 20 0v24h-2V12h-4s.5-5 1-8.5" clip-rule="evenodd"></svg:path>`,
})
export class NrkMatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
