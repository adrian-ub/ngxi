import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggPentagonLeftIcon],svg[gg-pentagon-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m16 12l2-5H8l-2 5l2 5h10zm-.954 3l-1.2-3l1.2-3H9.354l-1.2 3l1.2 3z" clip-rule="evenodd"></svg:path>`,
})
export class GgPentagonLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
