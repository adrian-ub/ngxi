import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[akarIconsSwordIcon],svg[akar-icons-sword-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m18 3l4-1l-1 4l-10 10l-2.5-.5L8 13zM2 20l2 2m1-8l1 4l4 1m-4-1l-3 3"></svg:path>`,
})
export class AkarIconsSwordIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
