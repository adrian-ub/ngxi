import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhPasswordIcon],svg[whh-password-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.356 1024h-896q-26 0-45-19t-19-45V640q0-27 19-45.5t45-18.5h896q26 0 45 18.5t19 45.5v320q0 26-19 45t-45 19m0-352q0-13-9.5-22.5t-22.5-9.5h-832q-13 0-22.5 9.5t-9.5 22.5v256q0 13 9.5 22.5t22.5 9.5h832q13 0 22.5-9.5t9.5-22.5zm-192 224q-27 0-45.5-19t-18.5-45.5t18.5-45t45.5-18.5t45.5 18.5t18.5 45t-18.5 45.5t-45.5 19m-191.5 0q-26.5 0-45.5-19t-19-45.5t19-45t45.5-18.5t45 18.5t18.5 45t-18.5 45.5t-45 19m-192.5 0q-27 0-45.5-19t-18.5-45.5t18.5-45t45.5-18.5t45.5 18.5t18.5 45t-18.5 45.5t-45.5 19m-192 0q-27 0-45.5-19t-18.5-45.5t18.5-45t45.5-18.5t45.5 18.5t18.5 45t-18.5 45.5t-45.5 19m768-448h-896q-26 0-45-19t-19-45V64q0-27 19-45.5t45-18.5h896q26 0 45 18.5t19 45.5v320q0 26-19 45t-45 19m0-352q0-13-9.5-22.5t-22.5-9.5h-832q-13 0-22.5 9.5t-9.5 22.5v256q0 13 9.5 22.5t22.5 9.5h832q13 0 22.5-9.5t9.5-22.5zm-800 224q-13 0-22.5-9.5t-9.5-22.5V160q0-13 9.5-22.5t22.5-9.5t22.5 9.5t9.5 22.5v128q0 13-9.5 22.5t-22.5 9.5"></svg:path>`,
})
export class WhhPasswordIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
