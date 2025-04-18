import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonPressureIcon],svg[carbon-pressure-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.505 16l8.16-7.253A1 1 0 0 0 25 7h-3V2h-2v7h2.37L16 14.662L9.63 9H12V2h-2v5H7a1 1 0 0 0-.665 1.747L14.495 16l-8.16 7.253A1 1 0 0 0 7 25h3v5h2v-7H9.63L16 17.338L22.37 23H20v7h2v-5h3a1 1 0 0 0 .665-1.747Z"></svg:path>`,
})
export class CarbonPressureIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
