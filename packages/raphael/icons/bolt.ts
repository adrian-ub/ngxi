import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[raphaelBoltIcon],svg[raphael-bolt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.727 18.242L4.792 27.208l8.966-8.966l-4.483-4.484l17.933-8.966l-8.966 8.966z"></svg:path>`,
})
export class RaphaelBoltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
