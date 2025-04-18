import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiArchiveSettingsIcon],svg[mdi-archive-settings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 2v4H3V2zM4 7h16v13H4zm5 5h6v-1.5c0-.28-.22-.5-.5-.5h-5c-.28 0-.5.22-.5.5zM7 24h2v-2H7zm4 0h2v-2h-2zm4 0h2v-2h-2z"></svg:path>`,
})
export class MdiArchiveSettingsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
