import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenMegaphoneFill16Icon],svg[garden-megaphone-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 4.002h5.586L14.293.295C14.923-.335 16 .11 16 1.002v14c0 .89-1.077 1.337-1.707.707l-3.707-3.707H8v2a2 2 0 1 1-4 0v-2a4 4 0 0 1 0-8z"></svg:path>`,
})
export class GardenMegaphoneFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
