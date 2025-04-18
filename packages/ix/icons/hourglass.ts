import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixHourglassIcon],svg[ix-hourglass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M384 42.667v115.477L286.165 256L384 353.814v115.52H128v-115.52L225.813 256L128 158.144V42.667zM256 286.166l-85.333 85.333V416L256 362.667L341.333 416v-44.5zm85.333-200.832H170.667v55.146l30.236 30.244l110.453-.26l29.977-29.984z"></svg:path>`,
})
export class IxHourglassIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
