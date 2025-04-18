import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamNpmIcon],svg[jam-npm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M0 0h20v6.857H10V8H5.556V6.857H0zm1.111 5.714h2.222V2.286h1.111v3.428h1.112V1.143H1.11zm5.556-4.571v5.714h2.222V5.714h2.222V1.143zm5.555 0v4.571h2.222V2.286h1.112v3.428h1.11V2.286h1.112v3.428h1.11V1.143z"></svg:path><svg:path d="M10 4.7H9V2.2h1z"></svg:path></svg:g>`,
})
export class JamNpmIcon {
  readonly viewBox = input("-2 -8 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
