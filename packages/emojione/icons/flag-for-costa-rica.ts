import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneFlagForCostaRicaIcon],svg[emojione-flag-for-costa-rica-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2a5f9e" d="M52.4 10C47 5 39.9 2 32 2s-15 3-20.4 8zM11.6 54c5.4 5 12.5 8 20.4 8s15-3 20.4-8z"></svg:path><svg:path fill="#c94747" d="M2 32c0 4.3.9 8.3 2.5 12h55c1.6-3.7 2.5-7.7 2.5-12s-.9-8.3-2.5-12h-55C2.9 23.7 2 27.7 2 32"></svg:path><svg:path fill="#f9f9f9" d="M11.6 54h40.7c3-2.8 5.5-6.2 7.1-10h-55c1.8 3.8 4.2 7.2 7.2 10m40.8-44H11.6c-3 2.8-5.5 6.2-7.1 10h55c-1.7-3.8-4.1-7.2-7.1-10"></svg:path>`,
})
export class EmojioneFlagForCostaRicaIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
