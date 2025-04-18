import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cibZulipIcon],svg[cib-zulip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 16c0 8.839-7.161 16-16 16S0 24.839 0 16S7.161 0 16 0s16 7.161 16 16M21.292 8H9.36l1.333 2.708h8.078l-9.411 10l1.333 3.276h11.948l-1.333-2.693h-8.094l9.411-10l-1.333-3.276z"></svg:path>`,
})
export class CibZulipIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
