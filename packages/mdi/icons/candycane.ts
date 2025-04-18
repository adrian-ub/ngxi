import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCandycaneIcon],svg[mdi-candycane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 10a2 2 0 0 1-2 2a2 2 0 0 1-2-2V8c0-.63.1-1.23.27-1.8L10 9.93zm2-8c.74 0 1.44.13 2.09.38L11.97 6c-.83 0-1.53.5-1.82 1.25L7.24 4.34A6 6 0 0 1 12 2m5.76 4.31L14 10.07V8c0-.38-.1-.73-.28-1.03l2.11-3.59a6 6 0 0 1 1.93 2.93m.24 6.78l-4 4V12.9l4-4zM18 20a2 2 0 0 1-2 2a2 2 0 0 1-2-2v-.09l4-4z"></svg:path>`,
})
export class MdiCandycaneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
