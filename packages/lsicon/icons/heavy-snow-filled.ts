import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconHeavySnowFilledIcon],svg[lsicon-heavy-snow-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.5 2.793V1h1v1.793l1.146-1.147l.707.708L8.5 4.207v2.927l2.535-1.463l.678-2.532l.966.258l-.42 1.566l1.553-.896l.5.866l-1.553.896l1.566.42l-.258.966l-2.532-.678L9 8l2.535 1.463l2.532-.678l.258.966l-1.566.42l1.553.896l-.5.866l-1.553-.896l.42 1.566l-.966.258l-.678-2.532L8.5 8.866v2.927l1.853 1.853l-.707.708L8.5 13.207V15h-1v-1.793l-1.147 1.147l-.707-.708L7.5 11.793V8.866l-2.535 1.463l-.678 2.532l-.966-.258l.42-1.566l-1.553.896l-.5-.866l1.552-.896l-1.566-.42l.26-.966l2.531.678L7 8L4.465 6.537l-2.532.678l-.259-.966l1.566-.42l-1.552-.896l.5-.866l1.552.896l-.42-1.566l.967-.258l.678 2.532L7.5 7.134V4.207L5.646 2.354l.707-.708z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconHeavySnowFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
