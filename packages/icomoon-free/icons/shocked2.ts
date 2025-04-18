import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeShocked2Icon],svg[icomoon-free-shocked2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M5 7c-.552 0-1-.672-1-1.5S4.448 4 5 4s1 .672 1 1.5S5.552 7 5 7m3 6a2 2 0 1 1-.001-3.999A2 2 0 0 1 8 13m3-6c-.552 0-1-.672-1-1.5S10.448 4 11 4s1 .672 1 1.5S11.552 7 11 7"></svg:path>`,
})
export class IcomoonFreeShocked2Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
