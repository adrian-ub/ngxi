import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psCheckIcon],svg[ps-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M405 491V192l-21-43l-21 43v299q0 21 21 21t21-21M491 0H21Q12 0 6 6T0 21v320h320v-42H43V107h426v192h-21v42h64V21q0-9-6-15t-15-6m-22 64H43V43h426zM85 149h235v43H85zm0 64h214v43H85z"></svg:path>`,
})
export class PsCheckIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
