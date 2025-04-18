import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonCopyLightIcon],svg[iconamoon-copy-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M16 3H4v13"></svg:path><svg:path d="M8 7h12v12a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2z"></svg:path></svg:g>`,
})
export class IconamoonCopyLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
