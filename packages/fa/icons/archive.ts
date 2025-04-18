import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faArchiveIcon],svg[fa-archive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024 704q0-26-19-45t-45-19H704q-26 0-45 19t-19 45t19 45t45 19h256q26 0 45-19t19-45m576-192v960q0 26-19 45t-45 19H128q-26 0-45-19t-19-45V512q0-26 19-45t45-19h1408q26 0 45 19t19 45m64-448v256q0 26-19 45t-45 19H64q-26 0-45-19T0 320V64q0-26 19-45T64 0h1536q26 0 45 19t19 45"></svg:path>`,
})
export class FaArchiveIcon {
  readonly viewBox = input("0 0 1664 1536")
  readonly width = input("1.09em")
  readonly height = input("1em")
}
