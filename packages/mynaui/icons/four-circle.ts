import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiFourCircleIcon],svg[mynaui-four-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"></svg:path><svg:path d="M12.583 8c-.833 3-3.333 5.5-3.333 5.5h5M13 16v-4"></svg:path></svg:g>`,
})
export class MynauiFourCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
