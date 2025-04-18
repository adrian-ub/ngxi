import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirSeaAndSunIcon],svg[iconoir-sea-and-sun-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 15c2.483 0 4.345-3 4.345-3s1.862 3 4.345 3s4.965-3 4.965-3s2.483 3 4.345 3M3 20c2.483 0 4.345-3 4.345-3s1.862 3 4.345 3s4.965-3 4.965-3s2.483 3 4.345 3m-2-10a7 7 0 1 0-14 0"></svg:path>`,
})
export class IconoirSeaAndSunIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
