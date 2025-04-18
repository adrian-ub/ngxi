import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonMouseThinIcon],svg[iconamoon-mouse-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round"><svg:path d="M6 9a6 6 0 0 1 12 0v6a6 6 0 0 1-12 0z"></svg:path><svg:path stroke-linecap="round" d="M12 7v4"></svg:path></svg:g>`,
})
export class IconamoonMouseThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
