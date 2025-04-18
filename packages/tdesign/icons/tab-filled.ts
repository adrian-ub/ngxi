import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignTabFilledIcon],svg[tdesign-tab-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.5 20h-21v-2h21zm0-16v12h-6V4zM15 4v12H9V4zM7.5 4v12h-6V4z"></svg:path>`,
})
export class TdesignTabFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
