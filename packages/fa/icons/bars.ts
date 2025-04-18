import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faBarsIcon],svg[fa-bars-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1536 1088v128q0 26-19 45t-45 19H64q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45m0-512v128q0 26-19 45t-45 19H64q-26 0-45-19T0 704V576q0-26 19-45t45-19h1408q26 0 45 19t19 45m0-512v128q0 26-19 45t-45 19H64q-26 0-45-19T0 192V64q0-26 19-45T64 0h1408q26 0 45 19t19 45"></svg:path>`,
})
export class FaBarsIcon {
  readonly viewBox = input("0 0 1536 1280")
  readonly width = input("1.2em")
  readonly height = input("1em")
}
