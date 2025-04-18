import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsRadio16SolidIcon],svg[heroicons-radio-16-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.437 1.45a.75.75 0 0 1-.386.987L7.478 4H13a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h.736l6.713-2.937a.75.75 0 0 1 .988.386M12 8a1 1 0 1 0 0-2a1 1 0 0 0 0 2M6.75 6.75a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m-.75 3a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5m2.323-1.225a.75.75 0 1 1-.75-1.3a.75.75 0 0 1 .75 1.3M7.3 9.75a.75.75 0 1 0 1.299.75a.75.75 0 0 0-1.3-.75m-.549 1.5a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m-3.348-.75a.75.75 0 1 0 1.3-.75a.75.75 0 0 0-1.3.75m.275-1.975a.75.75 0 1 1 .75-1.3a.75.75 0 0 1-.75 1.3M12 12a1 1 0 1 0 0-2a1 1 0 0 0 0 2" clip-rule="evenodd"></svg:path>`,
})
export class HeroiconsRadio16SolidIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
