import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirMouseButtonRightIcon],svg[iconoir-mouse-button-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M4 10v4a8 8 0 1 0 16 0V9a7 7 0 0 0-7-7h-1a8 8 0 0 0-8 8Z"></svg:path><svg:path d="M12 2v6.4a.6.6 0 0 0 .6.6H20"></svg:path></svg:g>`,
})
export class IconoirMouseButtonRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
