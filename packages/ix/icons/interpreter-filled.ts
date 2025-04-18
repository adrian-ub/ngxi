import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixInterpreterFilledIcon],svg[ix-interpreter-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M426.667 161.831L307.503 42.668H85.333v426.667h341.334zm-133.486 2.105l60.287 60.391l-60.34 60.34l-15.085-15.085l45.312-45.315l-45.259-45.246zm-59.09 15.604l-15.085-15.085l-60.287 60.391l60.34 60.34l15.084-15.085l-45.312-45.315zm.576 172.462c0-17.673-14.327-32-32-32s-32 14.327-32 32s14.326 32 32 32c17.673 0 32-14.327 32-32" clip-rule="evenodd"></svg:path>`,
})
export class IxInterpreterFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
