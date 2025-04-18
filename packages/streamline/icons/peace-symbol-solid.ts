import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlinePeaceSymbolSolidIcon],svg[streamline-peace-symbol-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 7a4.98 4.98 0 0 1 3.981-4.88v2.75L2.298 8.7A5 5 0 0 1 2 7m1.39 3.451a4.97 4.97 0 0 0 2.591 1.43V7.756zm4.59-2.695v4.125a4.97 4.97 0 0 0 2.592-1.43zm3.683.945A4.983 4.983 0 0 0 7.98 2.119v2.752zM0 7a6.981 6.981 0 1 1 13.962 0A6.981 6.981 0 0 1 0 7" clip-rule="evenodd"></svg:path>`,
})
export class StreamlinePeaceSymbolSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
