import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsMortarboardAltLightIcon],svg[lets-icons-mortarboard-alt-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m6.575 12.33l-3.623-1.45a.41.41 0 0 1 0-.76l8.305-3.323a2 2 0 0 1 1.486 0l8.305 3.322a.41.41 0 0 1 0 .762l-3.623 1.45"></svg:path><svg:path fill="currentColor" d="M14 13.5a.5.5 0 0 0 1 0zm0-6v6h1v-6z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.5 12.5v4l5.5 2l5.5-2v-4s-.5-2-5.5-2s-5.5 2-5.5 2"></svg:path></svg:g>`,
})
export class LetsIconsMortarboardAltLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
