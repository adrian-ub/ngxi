import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonRestartThinIcon],svg[iconamoon-restart-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M12 3a9 9 0 1 1-5.657 2"></svg:path><svg:path d="M3 4.5h4v4"></svg:path></svg:g>`,
})
export class IconamoonRestartThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
