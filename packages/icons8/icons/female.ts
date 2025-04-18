import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icons8FemaleIcon],svg[icons8-female-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.72 4.28l-1.44 1.44L21.563 9l-2.968 2.97A8.94 8.94 0 0 0 13 10c-4.96 0-9 4.04-9 9s4.04 9 9 9s9-4.04 9-9a8.94 8.94 0 0 0-1.97-5.594l2.97-2.97l3.28 3.283l1.44-1.44L24.437 9l3.28-3.28l-1.437-1.44L23 7.563l-3.28-3.28zM13 12c3.878 0 7 3.122 7 7s-3.122 7-7 7s-7-3.122-7-7s3.122-7 7-7"></svg:path>`,
})
export class Icons8FemaleIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
