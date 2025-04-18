import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[websymbolDocIcon],svg[websymbol-doc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m560 1l200 200l-1 800H0V1zM160 841h440V281H480V161H160z"></svg:path>`,
})
export class WebsymbolDocIcon {
  readonly viewBox = input("0 0 760 1000")
  readonly width = input("0.76em")
  readonly height = input("1em")
}
