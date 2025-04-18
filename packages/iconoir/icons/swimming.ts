import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirSwimmingIcon],svg[iconoir-swimming-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 15c2.483 0 4.345-3 4.345-3s1.862 3 4.345 3s4.965-3 4.965-3s2.483 3 4.345 3M3 20c2.483 0 4.345-3 4.345-3s1.862 3 4.345 3s4.965-3 4.965-3s2.483 3 4.345 3M5 10.5L9 8L7.813 6.516a1.26 1.26 0 0 1 .228-1.797v0a1.26 1.26 0 0 1 1.726.202L14 10m2.5-2a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5"></svg:path>`,
})
export class IconoirSwimmingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
