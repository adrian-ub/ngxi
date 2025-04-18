import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiArchiveMusicIcon],svg[mdi-archive-music-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.5 16.11V11H20V8H4v13h9.03c-.03-.16-.03-.33-.03-.5c0-2.14 1.5-3.93 3.5-4.39M9 13v-1.5c0-.28.22-.5.5-.5h5c.28 0 .5.22.5.5V13zm12-6H3V3h18zm1 6v2h-2v5.5a2.5 2.5 0 0 1-5 0a2.5 2.5 0 0 1 3.5-2.29V13z"></svg:path>`,
})
export class MdiArchiveMusicIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
