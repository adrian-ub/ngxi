import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phMartiniDuotoneIcon],svg[ph-martini-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m200 72l-72 72l-72-72Z" opacity=".2"></svg:path><svg:path d="M237.66 45.66A8 8 0 0 0 232 32H24a8 8 0 0 0-5.66 13.66L120 147.31V208H88a8 8 0 0 0 0 16h80a8 8 0 0 0 0-16h-32v-60.69ZM75.31 80h105.38L128 132.69Zm137.38-32l-16 16H59.31l-16-16Z"></svg:path></svg:g>`,
})
export class PhMartiniDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
