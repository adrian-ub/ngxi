import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneFlagForGuineaIcon],svg[emojione-flag-for-guinea-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#75a843" d="M62 32c0 13.1-8.3 24.2-20 28.3V3.7C53.7 7.8 62 18.9 62 32"></svg:path><svg:path fill="#ed4c5c" d="M2 32C2 18.9 10.4 7.8 22 3.7v56.6C10.4 56.2 2 45.1 2 32"></svg:path><svg:path fill="#ffce31" d="M42 60.3c-3.1 1.1-6.5 1.7-10 1.7s-6.9-.6-10-1.7V3.7C25.1 2.6 28.5 2 32 2s6.9.6 10 1.7z"></svg:path>`,
})
export class EmojioneFlagForGuineaIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
