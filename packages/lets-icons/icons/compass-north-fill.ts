import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsCompassNorthFillIcon],svg[lets-icons-compass-north-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path stroke-linecap="round" d="M9 9V3.12a.05.05 0 0 1 .085-.035l5.83 5.83A.05.05 0 0 0 15 8.879V3M7.059 20.882l4.896-9.793a.05.05 0 0 1 .09 0l4.896 9.793a.05.05 0 0 1-.063.07l-4.86-1.945a.05.05 0 0 0-.037 0l-4.859 1.944a.05.05 0 0 1-.063-.069Z"></svg:path><svg:path d="M12 12v7"></svg:path></svg:g>`,
})
export class LetsIconsCompassNorthFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
