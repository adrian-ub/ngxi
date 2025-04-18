import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagpackGmIcon],svg[flagpack-gm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#5EAA22" fill-rule="evenodd" d="M0 16h32v8H0z" clip-rule="evenodd"></svg:path><svg:path fill="#E31D1C" fill-rule="evenodd" d="M0 0h32v8H0z" clip-rule="evenodd"></svg:path><svg:path fill="#3D58DB" stroke="#fff" stroke-width="3" d="M0 8.5h-1.5v7h35v-7z"></svg:path></svg:g>`,
})
export class FlagpackGmIcon {
  readonly viewBox = input("0 0 32 24")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
