import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiExpandAllIcon],svg[mdi-expand-all-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 8H8v10H6V8a2 2 0 0 1 2-2h10zm-4-6H4a2 2 0 0 0-2 2v10h2V4h10zm8 10v8a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2m-2 3h-3v-3h-2v3h-3v2h3v3h2v-3h3z"></svg:path>`,
})
export class MdiExpandAllIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
