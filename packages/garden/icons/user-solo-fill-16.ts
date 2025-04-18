import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenUserSoloFill16Icon],svg[garden-user-solo-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:circle cx="8" cy="5" r="4"></svg:circle><svg:path d="M8 10a6 6 0 0 0-6 5.47a.5.5 0 0 0 .5.53h10.97a.5.5 0 0 0 .5-.53A6 6 0 0 0 8 10"></svg:path></svg:g>`,
})
export class GardenUserSoloFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
