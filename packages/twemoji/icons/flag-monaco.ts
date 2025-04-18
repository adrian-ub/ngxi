import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiFlagMonacoIcon],svg[twemoji-flag-monaco-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#EEE" d="M0 18v9a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4v-9z"></svg:path><svg:path fill="#CE1126" d="M32 5H4a4 4 0 0 0-4 4v9h36V9a4 4 0 0 0-4-4"></svg:path>`,
})
export class TwemojiFlagMonacoIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
