import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonSynchronizeIcon],svg[iconamoon-synchronize-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 12a9 9 0 0 1 16-5.658"></svg:path><svg:path d="M19.5 3v4h-4m5.5 5a9 9 0 0 1-16 5.657"></svg:path><svg:path d="M4.5 21v-4h4"></svg:path></svg:g>`,
})
export class IconamoonSynchronizeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
