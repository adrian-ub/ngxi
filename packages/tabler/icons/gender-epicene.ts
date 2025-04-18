import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerGenderEpiceneIcon],svg[tabler-gender-epicene-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 15.536a5 5 0 1 0-7.072-7.072a5 5 0 0 0 7.072 7.072m0-.001L21 10M3 14l5.464-5.535M12 12h.01"></svg:path>`,
})
export class TablerGenderEpiceneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
