import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarBag3LinearIcon],svg[solar-bag-3-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3.742 18.555C4.942 20 7.174 20 11.64 20h.72c4.466 0 6.699 0 7.899-1.445m-16.517 0c-1.2-1.446-.788-3.64.035-8.03c.585-3.12.877-4.681 1.988-5.603M3.742 18.555Zm16.517 0c1.2-1.446.788-3.64-.035-8.03c-.585-3.12-.878-4.681-1.989-5.603m2.024 13.633ZM18.235 4.922C17.125 4 15.536 4 12.361 4h-.722c-3.175 0-4.763 0-5.874.922m12.47 0Zm-12.47 0Z"></svg:path><svg:path stroke-linecap="round" d="M9.17 8a3.001 3.001 0 0 0 5.66 0"></svg:path></svg:g>`,
})
export class SolarBag3LinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
