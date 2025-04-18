import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineLeafSolidIcon],svg[streamline-leaf-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.157.092a1.55 1.55 0 0 0-2.075 1.384c-.086 1.13-.15 2.886.052 4.703c.2 1.808.67 3.741 1.698 5.173c1.065 1.544 2.586 2.23 4 2.498c1.404.265 2.732.126 3.488-.004a2 2 0 0 0 .6-.196c-1.129-3.022-3.248-6.346-6.382-9.233a.625.625 0 0 1 .847-.92c3.072 2.83 5.228 6.076 6.473 9.12c.371-.685.835-1.717 1.038-2.906c.241-1.41.12-3.065-.977-4.609c-1.013-1.43-2.693-2.527-4.342-3.336C5.926.956 4.247.406 3.157.092" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineLeafSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
