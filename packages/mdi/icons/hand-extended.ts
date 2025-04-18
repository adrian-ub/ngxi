import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiHandExtendedIcon],svg[mdi-hand-extended-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 13q.9 0 1.5.6c.3.4.5.9.5 1.4l-8 3l-7-2V7h1.9l7.3 2.7c.5.2.8.6.8 1.1c0 .3-.1.6-.3.8s-.6.4-.9.4H13l-1.8-.7l-.3.9l2.1.8zM1 7h4v11H1z"></svg:path>`,
})
export class MdiHandExtendedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
