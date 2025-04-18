import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSoundidIcon],svg[arcticons-soundid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.71 20.216h26.579v7.568H10.71zm5.432 17.933l10.364-10.364l5.351 5.351L21.493 43.5zm0-23.284L26.506 4.5l5.351 5.351l-10.364 10.364z"></svg:path>`,
})
export class ArcticonsSoundidIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
