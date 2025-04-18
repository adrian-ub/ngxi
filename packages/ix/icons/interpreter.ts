import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixInterpreterIcon],svg[ix-interpreter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m307.503 42.668l119.164 119.163v307.504H85.333V42.668zm-17.69 42.667H128v341.333h256V179.521zM202.667 320c17.673 0 32 14.327 32 32s-14.327 32-32 32s-32-14.327-32-32s14.327-32 32-32m16.339-155.546l15.085 15.085l-45.26 45.246l45.313 45.315l-15.085 15.085l-60.34-60.34zm74.175-.519l60.287 60.39l-60.34 60.34l-15.085-15.085l45.312-45.314l-45.259-45.246z"></svg:path>`,
})
export class IxInterpreterIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
