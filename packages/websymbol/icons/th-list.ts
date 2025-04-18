import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[websymbolThListIcon],svg[websymbol-th-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1000 0v160H0V0zm0 280v160H0V280zm0 280v160H0V560zm0 280v160H0V840z"></svg:path>`,
})
export class WebsymbolThListIcon {
  readonly viewBox = input("0 0 1000 1000")
  readonly width = input("1em")
  readonly height = input("1em")
}
