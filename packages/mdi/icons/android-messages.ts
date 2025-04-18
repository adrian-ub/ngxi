import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiAndroidMessagesIcon],svg[mdi-android-messages-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 20H7a2 2 0 0 1-2-2V8.94l-2.77-3.3C2.09 5.47 2 5.24 2 5a1 1 0 0 1 1-1h17a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2M8.5 7a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-10m0 4a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-10m0 4a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-5Z"></svg:path>`,
})
export class MdiAndroidMessagesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
