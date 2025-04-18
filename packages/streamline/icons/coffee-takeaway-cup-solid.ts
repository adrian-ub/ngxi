import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineCoffeeTakeawayCupSolidIcon],svg[streamline-coffee-takeaway-cup-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.5 0a.5.5 0 0 0-.464.314l-.84 2.1h9.608l-.84-2.1A.5.5 0 0 0 10.5 0zm-.494 13.576l-.754-4.898h9.496l-.754 4.898A.5.5 0 0 1 10.5 14h-7a.5.5 0 0 1-.494-.424m-.89-9.913h9.769c.6 0 1.085.422 1.085.942v1.882c0 .52-.486.94-1.085.94h-9.77c-.6 0-1.085-.42-1.085-.94V4.605c0-.52.486-.942 1.085-.942Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineCoffeeTakeawayCupSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
