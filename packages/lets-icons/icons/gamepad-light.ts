import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsGamepadLightIcon],svg[lets-icons-gamepad-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="2" height="2" x="13" y="14" fill="currentColor" rx="1"></svg:rect><svg:path stroke="currentColor" stroke-linecap="round" d="M10 14H6m2-2v4"></svg:path><svg:rect width="2" height="2" x="16" y="12" fill="currentColor" rx="1"></svg:rect><svg:path stroke="currentColor" stroke-linecap="round" d="M14 8v0c0-.417 0-.625-.034-.809a2 2 0 0 0-1.13-1.446c-.17-.078-.372-.129-.776-.23L12 5.5c-.461-.115-.692-.173-.883-.267a2 2 0 0 1-1.072-1.373C10 3.652 10 3.414 10 2.938V2"></svg:path><svg:path stroke="currentColor" d="M3 14c0-2.559 0-3.838.62-4.72q.241-.341.554-.604C4.982 8 6.154 8 8.5 8h7c2.346 0 3.518 0 4.326.676c.208.174.395.378.554.604c.62.882.62 2.161.62 4.72s0 3.838-.62 4.72a3.2 3.2 0 0 1-.554.604C19.018 20 17.846 20 15.5 20h-7c-2.346 0-3.518 0-4.326-.676a3.2 3.2 0 0 1-.554-.604C3 17.838 3 16.559 3 14Z"></svg:path></svg:g>`,
})
export class LetsIconsGamepadLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
