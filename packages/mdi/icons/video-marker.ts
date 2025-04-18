import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiVideoMarkerIcon],svg[mdi-video-marker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 16.8c-.7 0-1.2-.6-1.2-1.2c0-.7.6-1.2 1.2-1.2s1.2.6 1.2 1.2c.1.6-.5 1.2-1.2 1.2m0-4.8C3.6 12 2 13.6 2 15.5C2 18.1 5.5 22 5.5 22S9 18.1 9 15.5C9 13.6 7.4 12 5.5 12M4 6c-.6 0-1 .4-1 1v3.6c.8-.4 1.6-.6 2.5-.6c3 0 5.5 2.5 5.5 5.5c0 .9-.2 1.7-.5 2.5H16c.6 0 1-.4 1-1v-3.5l4 4v-11l-4 4V7c0-.6-.4-1-1-1z"></svg:path>`,
})
export class MdiVideoMarkerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
