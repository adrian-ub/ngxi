import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonLaunchStudy2Icon],svg[carbon-launch-study-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="23" cy="7" r="1" fill="currentColor"></svg:circle><svg:path d="M26 4v6H6V4h20m0-2H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z" fill="currentColor"></svg:path><svg:path d="M20.59 21.41L17 17.83V30h-2V17.83l-3.59 3.58L10 20l6-6l6 6l-1.41 1.41z" fill="currentColor"></svg:path><svg:path d="M8 6h12v2H8z" fill="currentColor"></svg:path>`,
})
export class CarbonLaunchStudy2Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
