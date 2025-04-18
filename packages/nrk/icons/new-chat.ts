import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkNewChatIcon],svg[nrk-new-chat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M13 3H1v17h6.529L6 23h2.245l1.528-3H23v-7h-2v5H3V5h10z" opacity=".5"></svg:path><svg:path fill-rule="evenodd" d="M20 3h-2v3h-3v2h3v3h2V8h3V6h-3z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class NrkNewChatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
