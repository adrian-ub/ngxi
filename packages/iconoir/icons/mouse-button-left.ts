import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirMouseButtonLeftIcon],svg[iconoir-mouse-button-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M20 10v4a8 8 0 1 1-16 0V9a7 7 0 0 1 7-7h1a8 8 0 0 1 8 8Z"></svg:path><svg:path d="M12 2v6.4a.6.6 0 0 1-.6.6H4"></svg:path></svg:g>`,
})
export class IconoirMouseButtonLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
