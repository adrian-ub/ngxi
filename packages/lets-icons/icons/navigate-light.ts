import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsNavigateLightIcon],svg[lets-icons-navigate-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path stroke-linecap="round" d="m4.546 19.403l7.409-15.806a.05.05 0 0 1 .09 0l7.41 15.806a.05.05 0 0 1-.059.07l-7.383-1.97h-.026l-7.383 1.97a.05.05 0 0 1-.058-.07Z"></svg:path><svg:path d="m8.5 10.5l3.475 1.986a.05.05 0 0 0 .05 0L15.5 10.5"></svg:path></svg:g>`,
})
export class LetsIconsNavigateLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
