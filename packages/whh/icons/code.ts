import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhCodeIcon],svg[whh-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1006 428L744 751q-18 18-43.5 18T657 751t-18-43t18-43l227-280l-227-280q-18-18-18-43.5T657 18t43.5-18T744 18l262 323q18 18 18 43.5t-18 43.5M367 751q-18 18-43.5 18T280 751L18 428Q0 410 0 384.5T18 341L280 18q18-18 43.5-18T367 18t18 43.5t-18 43.5L140 385l227 280q18 18 18 43t-18 43"></svg:path>`,
})
export class WhhCodeIcon {
  readonly viewBox = input("0 0 1024 769")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
