import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerAugmentedRealityOffIcon],svg[tabler-augmented-reality-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M4 8V6c0-.557.228-1.061.595-1.424M4 16v2a2 2 0 0 0 2 2h2m8-16h2a2 2 0 0 1 2 2v2m-4 12h2c.558 0 1.062-.228 1.425-.596M12 12.5l.312-.195m2.457-1.536L16 10m-6.775-.765L8 10l4 2.5V17l3.076-1.923M16 12v-2l-4-2.5l-.302.189"></svg:path><svg:path d="M8 10v4.5l4 2.5M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerAugmentedRealityOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
