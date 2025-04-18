import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiServersIcon],svg[mynaui-servers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5.7c0-.663.448-1.2 1-1.2h16c.552 0 1 .537 1 1.2v3.6c0 .663-.448 1.2-1 1.2H4c-.552 0-1-.537-1-1.2zm3 1.8h2m-2 9h2m-5-1.8c0-.663.448-1.2 1-1.2h16c.552 0 1 .537 1 1.2v3.6c0 .663-.448 1.2-1 1.2H4c-.552 0-1-.537-1-1.2z"></svg:path>`,
})
export class MynauiServersIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
