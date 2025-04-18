import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFileSendIcon],svg[mdi-file-send-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2H6c-1.11 0-2 .89-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zm-1.46 17.37v-2h-4v-1.99h4v-2l3 3zM13 9V3.5L18.5 9z"></svg:path>`,
})
export class MdiFileSendIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
