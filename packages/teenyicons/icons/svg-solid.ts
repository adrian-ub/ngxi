import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsSvgSolidIcon],svg[teenyicons-svg-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 1.5A1.5 1.5 0 0 1 2.5 0h8.207L14 3.293V13.5a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 1 13.5zM5 6H2v3h2v1H2v1h3V8H3V7h2zm2 0H6v3.707l1.5 1.5l1.5-1.5V6H8v3.293l-.5.5l-.5-.5zm3 0h3v1h-2v3h1V8.5h1V11h-3z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsSvgSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
