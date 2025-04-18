import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiInboxMultipleOutlineIcon],svg[mdi-inbox-multiple-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM5 10v2h4.4c-.6-.53-1.06-1.22-1.27-2zm14 2v-2h-3.13c-.21.78-.67 1.47-1.27 2zm0-4V5H5v3h5v1c0 1.07.93 2 2 2s2-.93 2-2V8zm2 11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4h7v1c0 1.07.93 2 2 2s2-.93 2-2v-1h7zM5 17v2h4.4c-.6-.53-1.06-1.22-1.27-2zm14 2v-2h-3.13c-.21.78-.67 1.47-1.27 2z"></svg:path>`,
})
export class MdiInboxMultipleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
