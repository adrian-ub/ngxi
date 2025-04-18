import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiContactlessCircleIcon],svg[mynaui-contactless-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M8 9.99a9 9 0 0 1 0 4.02m2.975-5.59a13 13 0 0 1 .5 3.58a13 13 0 0 1-.5 3.58m3.25-8.72c.513 1.621.79 3.348.79 5.14s-.277 3.519-.79 5.14"></svg:path><svg:path d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"></svg:path></svg:g>`,
})
export class MynauiContactlessCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
