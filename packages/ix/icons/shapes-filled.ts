import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixShapesFilledIcon],svg[ix-shapes-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M405.333 320L288 128l-10.665 10.667c-21.333-21.334-42.666-32-85.333-32c-3.405 0-17.986-.219-21.335 0V64h277.335v256zm-266.664 85.333c-53.334-21.333-96-65.815-96-128c0-72.329 48.843-128 121.598-128c34.795 0 66.44 8.671 89.988 30.578zm149.331-192L426.667 448h-262.4z" clip-rule="evenodd"></svg:path>`,
})
export class IxShapesFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
