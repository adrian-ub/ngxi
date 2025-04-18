import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPowerShortcutsIcon],svg[arcticons-power-shortcuts-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.5 24L27.629 8.129v10.497H7.142L4.5 29.374h23.129v10.497zm-31.175-5.374L9.683 29.374m7.825-10.748l-2.641 10.748"></svg:path>`,
})
export class ArcticonsPowerShortcutsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
