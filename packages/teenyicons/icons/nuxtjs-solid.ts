import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsNuxtjsSolidIcon],svg[teenyicons-nuxtjs-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.5 2a.5.5 0 0 1 .429.243l1.527 2.545l.613-1.042a.5.5 0 0 1 .862 0l5 8.5A.5.5 0 0 1 14.5 13H.5a.5.5 0 0 1-.429-.757l6-10A.5.5 0 0 1 6.5 2M5.374 12h6.243L8.465 6.746zM7.88 5.77L4.214 12h-2.83L6.5 3.472zm1.163-.005L12.783 12h.843L9.5 4.986z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsNuxtjsSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
