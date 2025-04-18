import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenUserSoloFill12Icon],svg[garden-user-solo-fill-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:circle cx="6" cy="3" r="3"></svg:circle><svg:path d="M6 7a5 5 0 0 0-5 4.42a.51.51 0 0 0 .5.58h8.94a.51.51 0 0 0 .5-.58A5 5 0 0 0 6 7"></svg:path></svg:g>`,
})
export class GardenUserSoloFill12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
