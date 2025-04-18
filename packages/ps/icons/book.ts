import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psBookIcon],svg[ps-book-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M67 512h362v-43H67q-22 0-22-21t22-21h362V0H67Q39 0 21 18.5T3 64v363h4q-4 12-4 21q0 27 18 45.5T67 512M45 64q0-21 22-21h320v341H67q-8 0-22 4zm86 107h192v42H131zm0-86h192v43H131z"></svg:path>`,
})
export class PsBookIcon {
  readonly viewBox = input("0 0 432 512")
  readonly width = input("0.85em")
  readonly height = input("1em")
}
