import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagpackThIcon],svg[flagpack-th-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#F50101" fill-rule="evenodd" d="M0 16h32v8H0zM0 0h32v6H0z" clip-rule="evenodd"></svg:path><svg:path fill="#3D58DB" stroke="#fff" stroke-width="3" d="M0 6.5h-1.5v11h35v-11z"></svg:path></svg:g>`,
})
export class FlagpackThIcon {
  readonly viewBox = input("0 0 32 24")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
