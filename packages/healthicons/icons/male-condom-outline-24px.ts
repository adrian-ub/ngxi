import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsMaleCondomOutline24pxIcon],svg[healthicons-male-condom-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M10 3.5a1.5 1.5 0 0 1 3 0v.79A4 4 0 0 1 15.5 8v11h1a1.5 1.5 0 0 1 0 3h-10a1.5 1.5 0 0 1 0-3h1V8A4 4 0 0 1 10 4.29zM9.5 19h4V8a2 2 0 1 0-4 0z"></svg:path><svg:path d="M9.585 7.42A2 2 0 0 0 9.5 8v11h4V8a2 2 0 0 0-3.915-.58M13 4.29l.057.024A4 4 0 0 1 15.5 8v11h1a1.5 1.5 0 0 1 0 3h-10a1.5 1.5 0 0 1 0-3h1V8A4 4 0 0 1 10 4.29V3.5a1.5 1.5 0 0 1 3 0z"></svg:path></svg:g>`,
})
export class HealthiconsMaleCondomOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
