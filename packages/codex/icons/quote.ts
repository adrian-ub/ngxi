import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codexQuoteIcon],svg[codex-quote-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 10.818H9c-.198 0-.391-.053-.556-.153a.93.93 0 0 1-.368-.408a.83.83 0 0 1-.057-.525a.9.9 0 0 1 .274-.466c.14-.127.318-.213.512-.249c.194-.035.395-.017.578.052a1 1 0 0 1 .448.335c.11.15.169.325.169.505v2.273c0 .482-.21.944-.586 1.285A2.1 2.1 0 0 1 8 14m8-3.182h-1c-.198 0-.391-.053-.556-.153a.93.93 0 0 1-.368-.408a.83.83 0 0 1-.057-.525a.9.9 0 0 1 .274-.466c.14-.127.318-.213.512-.249c.194-.035.395-.017.578.052a1 1 0 0 1 .449.335a.85.85 0 0 1 .168.505v2.273c0 .482-.21.944-.586 1.285A2.1 2.1 0 0 1 14 14"></svg:path>`,
})
export class CodexQuoteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
