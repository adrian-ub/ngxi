import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsNuxtjsOutlineIcon],svg[teenyicons-nuxtjs-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round"><svg:path d="m.5 12.5l6-10l6 10z"></svg:path><svg:path d="m4.5 12.5l5-8.5l5 8.5z"></svg:path></svg:g>`,
})
export class TeenyiconsNuxtjsOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
