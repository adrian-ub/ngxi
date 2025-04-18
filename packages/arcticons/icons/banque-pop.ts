import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBanquePopIcon],svg[arcticons-banque-pop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m5.575 22.792l6.341.021v-6.352h3.967l-.15 6.33h6.139v4.064h-6.063l.085 6.566h-3.978l-.214-6.576H5.575V42.5h26.028l10.822-10.726V5.5H16.493L5.575 16.461z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m20.92 16.461l6.053 8.16l-6.053 8.5h4.513l3.753-5.25l3.625 5.25h4.556l-5.839-8.5l5.839-8.117h-4.555l-3.626 5.069l-3.753-5.133z"></svg:path>`,
})
export class ArcticonsBanquePopIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
