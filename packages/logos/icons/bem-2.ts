import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosBem2Icon],svg[logos-bem-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#010101" d="M146.335 187.82h108.833v31.347H146.335z"></svg:path><svg:path fill="#F7B334" d="M130.075 187.82v-56.947H78.937v56.947z"></svg:path><svg:path fill="#010101" d="M108.047 62.171h-41.96L34.092 0H.262v187.82H79.2v-56.947h66.874V100.05c0-21.42-15.473-37.878-38.026-37.878m12.587 50.94h-11.538l-13.113-2.874v-2.874h24.651z"></svg:path>`,
})
export class LogosBem2Icon {
  readonly viewBox = input("0 0 256 220")
  readonly width = input("1.17em")
  readonly height = input("1em")
}
