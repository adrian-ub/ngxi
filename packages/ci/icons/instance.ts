import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciInstanceIcon],svg[ci-instance-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14.263 20.344l6.081-6.081c.792-.792 1.188-1.188 1.336-1.645c.13-.402.13-.834 0-1.235c-.148-.457-.544-.854-1.336-1.646l-6.082-6.082c-.792-.791-1.187-1.187-1.644-1.335a2 2 0 0 0-1.236 0c-.456.148-.853.545-1.644 1.336L3.656 9.737v.001c-.792.792-1.188 1.188-1.336 1.645c-.13.401-.13.833 0 1.235c.148.456.544.852 1.335 1.644l6.086 6.086c.79.79 1.185 1.185 1.641 1.333a2 2 0 0 0 1.236 0c.457-.149.853-.544 1.644-1.336z"></svg:path>`,
})
export class CiInstanceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
