import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsFireSolidIcon],svg[heroicons-fire-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.963 2.286a.75.75 0 0 0-1.071-.136a9.74 9.74 0 0 0-3.539 6.176a7.6 7.6 0 0 1-1.705-1.715a.75.75 0 0 0-1.152-.082A9 9 0 1 0 15.68 4.534a7.46 7.46 0 0 1-2.717-2.248M15.75 14.25a3.75 3.75 0 1 1-7.313-1.172c.628.465 1.35.81 2.133 1a6 6 0 0 1 1.925-3.546a3.75 3.75 0 0 1 3.255 3.718" clip-rule="evenodd"></svg:path>`,
})
export class HeroiconsFireSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
