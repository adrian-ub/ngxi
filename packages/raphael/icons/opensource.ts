import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[raphaelOpensourceIcon],svg[raphael-opensource-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.5 1.125C7.278 1.125.59 7.815.59 16.035c0 6.263 3.88 11.635 9.36 13.84l3.64-9.076a5.131 5.131 0 1 1 3.818-.001l3.64 9.075c5.48-2.206 9.36-7.578 9.36-13.84c.002-8.22-6.687-14.91-14.908-14.91z"></svg:path>`,
})
export class RaphaelOpensourceIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
