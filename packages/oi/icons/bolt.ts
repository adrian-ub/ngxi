import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiBoltIcon],svg[oi-bolt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 0L1 5h2v3l3-5H4z"></svg:path>`,
})
export class OiBoltIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
