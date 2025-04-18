import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiRepeatButtonIcon],svg[openmoji-repeat-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M11.5 45.81a17.3 17.3 0 0 1-1.5-7.064v-1.108c0-9.463 7.575-17.135 16.92-17.135h30.908m2.666 5.465A17.4 17.4 0 0 1 62 33.071v1.114c0 9.515-7.602 17.229-16.98 17.229H14m43.828-30.911l-8.185-8.214m0 16.427l8.185-8.213M14 51.414l8.185-8.214m0 16.428L14 51.414"></svg:path>`,
})
export class OpenmojiRepeatButtonIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
