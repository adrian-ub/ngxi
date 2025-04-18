import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerApertureOffIcon],svg[tabler-aperture-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.6 15h10.55M5.641 5.631A9 9 0 1 0 18.36 18.369m1.68-2.318A9 9 0 0 0 7.966 3.953m-.571 3.581l2.416 7.438m7.221-10.336L12.18 8.162M9.846 9.857l-1.349.98m12.062 3.673l-8.535-6.201m.233 12.607l2.123-6.533m.984-3.028l.154-.473M3 3l18 18"></svg:path>`,
})
export class TablerApertureOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
