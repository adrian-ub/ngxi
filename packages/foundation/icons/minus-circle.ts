import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[foundationMinusCircleIcon],svg[foundation-minus-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M67.441 44.796H32.559a.92.92 0 0 0-.918.918v8.572c0 .507.411.918.918.918h34.883a.92.92 0 0 0 .918-.918v-8.572a.92.92 0 0 0-.919-.918"></svg:path><svg:path fill="currentColor" d="M50 22.44c15.196 0 27.56 12.366 27.56 27.562S65.196 77.56 50 77.56S22.44 65.199 22.44 50.002S34.804 22.44 50 22.44m0-9.94c-20.709 0-37.5 16.793-37.5 37.502S29.291 87.5 50 87.5s37.5-16.788 37.5-37.498S70.709 12.5 50 12.5"></svg:path>`,
})
export class FoundationMinusCircleIcon {
  readonly viewBox = input("0 0 100 100")
  readonly width = input("1em")
  readonly height = input("1em")
}
