import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riH6Icon],svg[ri-h-6-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.097 8l-2.598 4.5a4 4 0 1 1-3.453 1.981L18.788 8zM4 4v7h7V4h2v16h-2v-7H4v7H2V4zm14.5 10.5a2 2 0 1 0 0 4a2 2 0 0 0 0-4"></svg:path>`,
})
export class RiH6Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
