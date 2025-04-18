import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucidePenOffIcon],svg[lucide-pen-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 10l-6.157 6.162a2 2 0 0 0-.5.833l-1.322 4.36a.5.5 0 0 0 .622.624l4.358-1.323a2 2 0 0 0 .83-.5L14 13.982m-1.171-6.81l4.359-4.346a1 1 0 1 1 3.986 3.986l-4.353 4.353M2 2l20 20"></svg:path>`,
})
export class LucidePenOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
