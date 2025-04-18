import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSleepIcon],svg[mdi-sleep-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 12h-6v-2l3.39-4H17V4h6v2l-3.38 4H23zm-8 4H9v-2l3.39-4H9V8h6v2l-3.38 4H15zm-8 4H1v-2l3.39-4H1v-2h6v2l-3.38 4H7z"></svg:path>`,
})
export class MdiSleepIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
