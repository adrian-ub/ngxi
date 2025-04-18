import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggStackIcon],svg[gg-stack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M20 4v12h2V2H8v2z"></svg:path><svg:path fill-rule="evenodd" d="M2 8v14h14V8zm12 2H4v10h10z" clip-rule="evenodd"></svg:path><svg:path d="M17 7H5V5h14v14h-2z"></svg:path></svg:g>`,
})
export class GgStackIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
