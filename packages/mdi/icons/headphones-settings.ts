import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiHeadphonesSettingsIcon],svg[mdi-headphones-settings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1a9 9 0 0 1 9 9v7a3 3 0 0 1-3 3h-3v-8h4v-2a7 7 0 0 0-7-7a7 7 0 0 0-7 7v2h4v8H6a3 3 0 0 1-3-3v-7a9 9 0 0 1 9-9m3 23v-2h2v2zm-4 0v-2h2v2zm-4 0v-2h2v2z"></svg:path>`,
})
export class MdiHeadphonesSettingsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
