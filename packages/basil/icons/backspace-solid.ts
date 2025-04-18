import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[basilBackspaceSolidIcon],svg[basil-backspace-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.406 5.2a3.5 3.5 0 0 0-2.753 1.338l-3.561 4.535a1.5 1.5 0 0 0 0 1.853l3.561 4.536A3.5 3.5 0 0 0 8.406 18.8h10.647a2.5 2.5 0 0 0 2.5-2.5V7.7a2.5 2.5 0 0 0-2.5-2.5zm2.064 3.27a.75.75 0 0 1 1.06 0L14 10.94l2.47-2.47a.75.75 0 1 1 1.06 1.06L15.06 12l2.47 2.47a.75.75 0 0 1-1.06 1.06L14 13.06l-2.47 2.47a.75.75 0 1 1-1.06-1.06L12.94 12l-2.47-2.47a.75.75 0 0 1 0-1.06" clip-rule="evenodd"></svg:path>`,
})
export class BasilBackspaceSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
