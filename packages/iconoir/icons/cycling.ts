import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirCyclingIcon],svg[iconoir-cycling-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14 7a2 2 0 1 0 0-4a2 2 0 0 0 0 4m4 14a3 3 0 1 0 0-6a3 3 0 0 0 0 6M6 21a3 3 0 1 0 0-6a3 3 0 0 0 0 6m5.5-3l1.5-4l-4.882-2l3-3.5l3 2.5h3.5"></svg:path>`,
})
export class IconoirCyclingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
