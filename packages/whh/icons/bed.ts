import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhBedIcon],svg[whh-bed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.936 512h-896q-27 0-45.5-18.5T.936 448V320q0-27 18.5-45.5t45.5-18.5h896q26 0 45 18.5t19 45.5v128q0 26-19 45t-45 19m-640-320h-256q-27 0-45.5-18.5T.936 128V96q0-50 35-73t93-23q38 0 97 16.5t109 47.5t50 64q0 27-18.5 45.5t-45.5 18.5m-64 384v128q0 27-19 45.5t-45.5 18.5t-45-18.5t-18.5-45.5V576zm640 0v128q0 27-19 45.5t-45.5 18.5t-45-18.5t-18.5-45.5V576z"></svg:path>`,
})
export class WhhBedIcon {
  readonly viewBox = input("0 0 1025 768")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
