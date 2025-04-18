import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsHighPriorityIcon],svg[flat-color-icons-high-priority-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#F44336" d="m21.2 44.8l-18-18c-1.6-1.6-1.6-4.1 0-5.7l18-18c1.6-1.6 4.1-1.6 5.7 0l18 18c1.6 1.6 1.6 4.1 0 5.7l-18 18c-1.6 1.6-4.2 1.6-5.7 0"></svg:path><svg:path fill="#fff" d="M21.6 32.7c0-.3.1-.6.2-.9s.3-.5.5-.7s.5-.4.8-.5s.6-.2 1-.2s.7.1 1 .2s.6.3.8.5s.4.4.5.7s.2.6.2.9s-.1.6-.2.9s-.3.5-.5.7s-.5.4-.8.5s-.6.2-1 .2s-.7-.1-1-.2s-.5-.3-.8-.5c-.2-.2-.4-.4-.5-.7s-.2-.5-.2-.9m4.2-4.6h-3.6L21.7 13h4.6z"></svg:path>`,
})
export class FlatColorIconsHighPriorityIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
