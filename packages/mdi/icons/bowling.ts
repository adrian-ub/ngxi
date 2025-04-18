import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBowlingIcon],svg[mdi-bowling-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m.5 9a1.5 1.5 0 0 0-1.5 1.5a1.5 1.5 0 0 0 1.5 1.5a1.5 1.5 0 0 0 1.5-1.5a1.5 1.5 0 0 0-1.5-1.5M12 5a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2M5.93 8.5c-.55.95-.22 2.17.73 2.72c.96.56 2.18.23 2.74-.72c.55-.97.22-2.19-.74-2.74c-.95-.55-2.16-.23-2.73.74"></svg:path>`,
})
export class MdiBowlingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
