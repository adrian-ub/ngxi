import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMickeyFilledIcon],svg[tabler-mickey-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.501 2a4.5 4.5 0 0 1 .878 8.913a8 8 0 1 1-15.374 3.372L4 14l.005-.285a8 8 0 0 1 .615-2.803a4.5 4.5 0 0 1-3.187-6.348a4.5 4.5 0 0 1 3.596-2.539l.225-.018L5.535 2l.244.009a4.5 4.5 0 0 1 4.215 4.247a8 8 0 0 1 4.013 0A4.5 4.5 0 0 1 18.5 2z"></svg:path>`,
})
export class TablerMickeyFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
