import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsPilsLightIcon],svg[lets-icons-pils-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m9 16l7-7a3.536 3.536 0 0 0-5-5l-7 7a3.536 3.536 0 0 0 5 5"></svg:path><svg:path d="M12.5 12.5a9.52 9.52 0 0 1-5-5v0"></svg:path><svg:circle cx="16.5" cy="16.5" r="4"></svg:circle><svg:path d="m19 14l-5 5"></svg:path></svg:g>`,
})
export class LetsIconsPilsLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
