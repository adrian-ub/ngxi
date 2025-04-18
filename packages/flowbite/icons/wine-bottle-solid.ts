import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteWineBottleSolidIcon],svg[flowbite-wine-bottle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M9 4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v3H9zm0 5v.42c-.878.565-1.412 1.28-1.699 2.139C7 12.465 7 13.482 7 14.41V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h-5a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1h4.821a5 5 0 0 0-.122-.441c-.287-.86-.821-1.574-1.699-2.14V9z"></svg:path><svg:path d="M17 14h-4v3h4z"></svg:path></svg:g>`,
})
export class FlowbiteWineBottleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
