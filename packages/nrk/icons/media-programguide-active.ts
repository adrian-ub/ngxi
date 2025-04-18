import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkMediaProgramguideActiveIcon],svg[nrk-media-programguide-active-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 2.333v17.411l10 3V9.251l2-.6v14.093l10-3V2.334l-1.735-1.157L12 3.956l-9.265-2.78zm18 4.523l-4 1.2v2.088l4-1.2z" clip-rule="evenodd"></svg:path>`,
})
export class NrkMediaProgramguideActiveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
