import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsMsPowerpointSolidIcon],svg[teenyicons-ms-powerpoint-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M5 5H2v5h1V9h2a2 2 0 1 0 0-4m0 3H3V6h2a1 1 0 0 1 0 2"></svg:path><svg:path d="M7.5 0a7.49 7.49 0 0 0-6 3A1.5 1.5 0 0 0 0 4.5v6A1.5 1.5 0 0 0 1.5 12a7.5 7.5 0 1 0 6-12M1 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 .5.487v6.026a.5.5 0 0 1-.5.487h-6a.5.5 0 0 1-.5-.5z"></svg:path></svg:g>`,
})
export class TeenyiconsMsPowerpointSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
