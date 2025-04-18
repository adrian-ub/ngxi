import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTMobileIcon],svg[arcticons-t-mobile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M39.812 22.342h-7.786v7.786l.001.001h7.786v-7.786Zm-31.626 0h7.785v7.786l-.002.001H8.185v-7.786Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.838 43.5v-3.147c-5.388-.29-6.316-2.284-6.395-5.267V7.72c4.94.503 9.812.37 9.812 10.658h2.56V4.5h-31.6v13.878h2.56c0-10.117 4.873-10.155 9.813-10.658v27.366c-.08 2.983-1.008 4.977-6.395 5.267V43.5Z"></svg:path>`,
})
export class ArcticonsTMobileIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
