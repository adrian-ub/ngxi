import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirAtSignIcon],svg[iconoir-at-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M17.5 19.125A9 9 0 1 1 21 12c0 5.5-6 5.5-6 2V8"></svg:path><svg:path d="M15 12v-1.5C15 9.12 13.657 8 12 8s-3 1.12-3 2.5V12m6 0v1.5c0 1.38-1.343 2.5-3 2.5s-3-1.12-3-2.5V12"></svg:path></svg:g>`,
})
export class IconoirAtSignIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
