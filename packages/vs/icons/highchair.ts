import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vsHighchairIcon],svg[vs-highchair-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768 896V512h229q11 0 19-8t8-19v-74q0-11-8-19t-19-8H256V24q0-10-7-17t-17-7h-80q-10 0-17 7t-7 17v788q0 34 17 57.5t47 26.5L0 1792h130l94-384h464l77 384h131L704 896zm-104 384H248l72-384h256z"></svg:path>`,
})
export class VsHighchairIcon {
  readonly viewBox = input("0 0 1024 1792")
  readonly width = input("0.58em")
  readonly height = input("1em")
}
