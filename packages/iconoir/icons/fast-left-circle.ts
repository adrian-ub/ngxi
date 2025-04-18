import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirFastLeftCircleIcon],svg[iconoir-fast-left-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"></svg:path><svg:path d="M16.5 8.5L13 12l3.5 3.5m-6-7L7 12l3.5 3.5"></svg:path></svg:g>`,
})
export class IconoirFastLeftCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
