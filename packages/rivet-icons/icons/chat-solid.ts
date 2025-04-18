import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[rivetIconsChatSolidIcon],svg[rivet-icons-chat-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 1h16v12H8.414L6 15.414L3.586 13H0zm6 6a1 1 0 1 0-2 0a1 1 0 0 0 2 0m3 0a1 1 0 1 0-2 0a1 1 0 0 0 2 0m3 0a1 1 0 1 0-2 0a1 1 0 0 0 2 0"></svg:path>`,
})
export class RivetIconsChatSolidIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
