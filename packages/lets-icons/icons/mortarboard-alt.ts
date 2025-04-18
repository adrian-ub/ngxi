import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsMortarboardAltIcon],svg[lets-icons-mortarboard-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 13l-3-2l9-5l9 5l-3 2"></svg:path><svg:path fill="currentColor" d="M13 14a1 1 0 1 0 2 0zm0-7v7h2V7z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 13v4l6 2.5l6-2.5v-4s-1-2-6-2s-6 2-6 2"></svg:path></svg:g>`,
})
export class LetsIconsMortarboardAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
