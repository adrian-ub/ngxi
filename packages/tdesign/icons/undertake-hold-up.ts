import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignUndertakeHoldUpIcon],svg[tdesign-undertake-hold-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.952 5.71a3.357 3.357 0 1 0-4.747 4.747l.793.793h3.127a2.875 2.875 0 0 1 2.862 3.152l1.124-.259l3.686-3.685A3.357 3.357 0 0 0 16.05 5.71L15 6.758zm6.605 7.816l.123.02a2.558 2.558 0 0 1 1.688 3.854c-.25.404-.607.73-1.032.942l-.027.014l-3.74 1.595l-6.196 1.549H0v-7.25h4.086l2.052-2.052a3.25 3.25 0 0 1 1.251-.776a5.358 5.358 0 0 1 7.613-7.46a5.357 5.357 0 0 1 7.21 7.91zM3.5 16.25H2v3.25h1.5zm2 3.25h5.627l5.804-1.45l3.531-1.508a.555.555 0 0 0-.416-1.022l-.02.005L13.614 17H10v-2h3.125a.874.874 0 1 0 0-1.75h-4.69a1.25 1.25 0 0 0-.885.364l-2.05 2.05z"></svg:path>`,
})
export class TdesignUndertakeHoldUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
