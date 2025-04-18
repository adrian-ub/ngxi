import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatBathtubIcon],svg[fluent-emoji-flat-bathtub-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#998EA4" d="M17.25 6c0-2.414 1.836-4.25 4.25-4.25S25.75 3.586 25.75 6v9.5h-1.5V6c0-1.586-1.164-2.75-2.75-2.75S18.75 4.414 18.75 6v1.25h-1.5zm-5.72 21.53l-2.5 2.5a.75.75 0 0 1-1.06-1.06l2.5-2.5zm11.44 2.5l-2.5-2.5l1.06-1.06l2.5 2.5a.75.75 0 1 1-1.06 1.06"></svg:path><svg:path fill="#998EA4" d="M15.5 8.5S15.5 6 18 6s2.5 2.5 2.5 2.5c.04.17 0 .5-.5.5h-4c-.5 0-.545-.331-.5-.5"></svg:path><svg:path fill="#26EAFC" d="M10 11c-2.5 0-4.5 2.5-3.5 4.5l8.5 1l8.5-1c0-.5-1-2.5-3.5-2.5c-1 0-1.5.5-2.5.5s-1-1-2-1s-1 .5-2 .5s-1-2-3.5-2"></svg:path><svg:path fill="#B4ACBC" d="M19 28h-6C4 28 3 17 3 16.5h26C29 17 28 28 19 28"></svg:path><svg:path fill="#CDC4D6" d="M2 16.5a1 1 0 0 1 1-1h26a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1"></svg:path></svg:g>`,
})
export class FluentEmojiFlatBathtubIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
