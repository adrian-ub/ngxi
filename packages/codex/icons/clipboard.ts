import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codexClipboardIcon],svg[codex-clipboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M9.429 7H7.714c-.454 0-.89.158-1.212.44A1.41 1.41 0 0 0 6 8.5v9c0 .398.18.78.502 1.06c.322.282.758.44 1.212.44h8.572c.454 0 .89-.158 1.212-.44A1.41 1.41 0 0 0 18 17.5v-9c0-.398-.18-.78-.502-1.06A1.85 1.85 0 0 0 16.286 7H14.57"></svg:path><svg:rect width="5.158" height="3.368" x="9.421" y="5" rx="1.5"></svg:rect></svg:g>`,
})
export class CodexClipboardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
