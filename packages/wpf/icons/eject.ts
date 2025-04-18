import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[wpfEjectIcon],svg[wpf-eject-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 4.063c-.485 0-.76.27-1.156.718L5.25 13.094c-.203.403-.17.897.063 1.281c.232.386.65.625 1.093.625h13.188c.443 0 .86-.239 1.093-.625a1.33 1.33 0 0 0 .188-.688c0-.2-.033-.408-.125-.593L14.156 4.78c-.376-.4-.671-.718-1.156-.718zM6 17c-.551 0-1 .449-1 1v3c0 .551.449 1 1 1h14c.551 0 1-.449 1-1v-3c0-.551-.449-1-1-1z"></svg:path>`,
})
export class WpfEjectIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
