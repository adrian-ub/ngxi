import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignNextIcon],svg[tdesign-next-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.75 4.336L14.414 12L6.75 19.664zM17.5 5v14h-2V5zM8.75 9.164v5.672L11.586 12z"></svg:path>`,
})
export class TdesignNextIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
