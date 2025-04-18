import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFlag4FilledIcon],svg[tdesign-flag-4-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h14v1h6v14h-8v-1H4v6H2zm14 3v10h2V5z"></svg:path>`,
})
export class TdesignFlag4FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
