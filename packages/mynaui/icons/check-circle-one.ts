import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiCheckCircleOneIcon],svg[mynaui-check-circle-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m9 8.806l3.562 3.94a.788.788 0 0 0 1.206-.055L21 3"></svg:path><svg:path d="M21 12a9 9 0 1 1-9-9"></svg:path></svg:g>`,
})
export class MynauiCheckCircleOneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
