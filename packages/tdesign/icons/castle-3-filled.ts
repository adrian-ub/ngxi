import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCastle3FilledIcon],svg[tdesign-castle-3-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 3V2h2v20h-9v-7h-2v7H2V2h2v1h4V2h2v8h4V2h2v1zM8 5H4v15h2V10h2zm8 5h2v10h2V5h-4z"></svg:path>`,
})
export class TdesignCastle3FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
