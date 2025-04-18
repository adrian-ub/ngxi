import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faPauseIcon],svg[fa-pause-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1536 64v1408q0 26-19 45t-45 19H960q-26 0-45-19t-19-45V64q0-26 19-45t45-19h512q26 0 45 19t19 45m-896 0v1408q0 26-19 45t-45 19H64q-26 0-45-19t-19-45V64q0-26 19-45T64 0h512q26 0 45 19t19 45"></svg:path>`,
})
export class FaPauseIcon {
  readonly viewBox = input("0 0 1536 1536")
  readonly width = input("1em")
  readonly height = input("1em")
}
