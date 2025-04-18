import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faSolidListUlIcon],svg[fa-solid-list-ul-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M48 48a48 48 0 1 0 48 48a48 48 0 0 0-48-48m0 160a48 48 0 1 0 48 48a48 48 0 0 0-48-48m0 160a48 48 0 1 0 48 48a48 48 0 0 0-48-48m448 16H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16m0-320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16m0 160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16"></svg:path>`,
})
export class FaSolidListUlIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
