import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhOneohsevenIcon],svg[whh-oneohseven-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1002 566l-74 74l-64-64l65-64L512 96L96 512l64 64l-64 64l-73-74Q0 544 0 512t23-54L458 22q22-22 54-22t54 22l436 436q22 22 22 54t-22 54M566 343l330 329l-64 64l-320-320l-320 320l-64-64l330-329q22-23 54-23t54 23m0 192l234 233l-64 64l-224-224l-224 224l-64-64l234-233q22-23 54-23t54 23m-54 394l128-128l64 63l-138 137q-22 23-54 23t-54-23L320 864l64-64z"></svg:path>`,
})
export class WhhOneohsevenIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
