import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineBandageSolidIcon],svg[streamline-bandage-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.11.045a4.064 4.064 0 0 0-2.874 6.938l.363.364a1 1 0 0 0 .076.085l4.893 4.893q.041.041.086.077l.363.362a4.064 4.064 0 1 0 5.747-5.747l-.363-.364a1 1 0 0 0-.076-.085L7.432 1.675a1 1 0 0 0-.086-.076l-.363-.363A4.06 4.06 0 0 0 4.11.046Zm-.235 6.769l2.939-2.939l3.31 3.311l-2.938 2.939z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBandageSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
