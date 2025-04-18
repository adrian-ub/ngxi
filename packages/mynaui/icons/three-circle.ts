import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiThreeCircleIcon],svg[mynaui-three-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"></svg:path><svg:path d="M9.5 9.994c0-2.659 5-2.659 5 0c0 0 0 2.006-2.5 2.006c2.5 0 2.5 2.006 2.5 2.006c0 2.659-5 2.659-5 0"></svg:path></svg:g>`,
})
export class MynauiThreeCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
