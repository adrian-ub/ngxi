import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenDownloadFill12Icon],svg[garden-download-fill-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="M1.5 11.5h9M6 8.5v-8"></svg:path><svg:path fill="currentColor" d="M6 9.29c-.26 0-.51-.09-.71-.29L2.15 5.85a.47.47 0 0 1-.11-.54c.08-.19.26-.31.46-.31h7c.2 0 .38.12.46.31s.04.4-.11.54L6.71 9c-.2.2-.45.29-.71.29"></svg:path>`,
})
export class GardenDownloadFill12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
