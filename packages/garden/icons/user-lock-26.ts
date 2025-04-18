import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenUserLock26Icon],svg[garden-user-lock-26-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:circle cx="10" cy="9" r="4"></svg:circle><svg:path d="M3.968 21A.96.96 0 0 1 3 20.052a1 1 0 0 1 .008-.134a7.09 7.09 0 0 1 13.984 0a.96.96 0 0 1-.822 1.074a1 1 0 0 1-.137.008zM19.342 5.005A2.5 2.5 0 0 0 17 7.346v2.075h1.443V7.346a1.057 1.057 0 1 1 2.114 0v2.075H22V7.346a2.5 2.5 0 0 0-2.658-2.341"></svg:path><svg:rect width="7" height="6" x="16" y="9" rx="1" ry="1"></svg:rect></svg:g>`,
})
export class GardenUserLock26Icon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
