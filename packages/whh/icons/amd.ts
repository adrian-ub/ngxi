import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhAmdIcon],svg[whh-amd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1015.697 1015l-247-247V288q0-13-9.5-22.5t-22.5-9.5h-480L9.697 9q10-9 23-9h960q13 0 22.5 9.5t9.5 22.5v960q0 13-9 23m-759-279q0 13 9.5 22.5t22.5 9.5h416l-256 256h-416q-13 0-22.5-9.5T.697 992V576l256-256z"></svg:path>`,
})
export class WhhAmdIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
