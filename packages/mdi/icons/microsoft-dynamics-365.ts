import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiMicrosoftDynamics365Icon],svg[mdi-microsoft-dynamics-365-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6 2l11.25 6.5l-3.75 3L6 8zm0 7l3.5 2.25L6 22L18 9v6L6 22z"></svg:path>`,
})
export class MdiMicrosoftDynamics365Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
