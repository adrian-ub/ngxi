import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilDrinkAlcoholIcon],svg[cil-drink-alcohol-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 440h-72v32h176v-32h-72V318.968l176-192.762V80H72v46.206l176 192.762ZM104 113.794V112h320v1.794L374.508 168H153.492ZM182.709 200h162.582l-80.349 88h-1.884Z"></svg:path>`,
})
export class CilDrinkAlcoholIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
