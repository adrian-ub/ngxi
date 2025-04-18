import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggPasswordIcon],svg[gg-password-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M6 12a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2m5-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0m6-1h-4v2h4z"></svg:path><svg:path fill-rule="evenodd" d="M2 6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm20 2H2v8h20z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgPasswordIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
