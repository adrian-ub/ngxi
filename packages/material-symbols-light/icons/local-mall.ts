import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLocalMallIcon],svg[material-symbols-light-local-mall-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.616 21q-.691 0-1.153-.462T4 19.385V8.615q0-.69.463-1.152T5.616 7H8q0-1.671 1.165-2.835Q10.329 3 12 3t2.836 1.165T16 7h2.385q.69 0 1.152.463T20 8.616v10.769q0 .69-.463 1.153T18.385 21zM12 13q1.671 0 2.836-1.164Q16 10.67 16 9h-1q0 1.25-.875 2.125T12 12t-2.125-.875T9 9H8q0 1.671 1.165 2.836Q10.329 13 12 13M9 7h6q0-1.25-.875-2.125T12 4t-2.125.875T9 7"></svg:path>`,
})
export class MaterialSymbolsLightLocalMallIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
