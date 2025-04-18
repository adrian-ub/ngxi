import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFooterIcon],svg[mdi-footer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm8 6v8h4V8h-4z" fill="currentColor"></svg:path>`,
})
export class MdiFooterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
