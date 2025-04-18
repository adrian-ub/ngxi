import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiHeartMinusSolidIcon],svg[mynaui-heart-minus-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.434 21.112a.75.75 0 0 1-.868 0l-.008-.006l-.021-.015l-.08-.058q-.104-.075-.295-.219a38.5 38.5 0 0 1-4.197-3.674c-1.148-1.168-2.315-2.533-3.199-3.981c-.88-1.44-1.516-3.024-1.516-4.612c0-3.158 2.42-5.797 5.5-5.797c1.724 0 3.248.833 4.25 2.117c1.002-1.284 2.525-2.117 4.25-2.117c1.46 0 2.85.445 3.88 1.439c1.035 1 1.62 2.473 1.62 4.358c0 1.588-.637 3.171-1.516 4.612c-.884 1.448-2.051 2.813-3.199 3.982a38.5 38.5 0 0 1-4.492 3.892l-.08.058l-.021.015zM10 11.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class MynauiHeartMinusSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
