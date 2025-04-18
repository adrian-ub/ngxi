import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiNavigationOneSolidIcon],svg[mynaui-navigation-one-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.623 4.103c.521-1.1-.626-2.248-1.726-1.726L2.99 10.385c-1.1.52-.94 2.133.24 2.429l6.364 1.59l1.591 6.364c.295 1.18 1.908 1.34 2.43.24z"></svg:path>`,
})
export class MynauiNavigationOneSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
