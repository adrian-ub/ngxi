import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[systemUiconsBoxOpenIcon],svg[system-uicons-box-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m3.5 7.5l7-4l5.992 3.424A2 2 0 0 1 17.5 8.661v4.678a2 2 0 0 1-1.008 1.737l-5 2.857a2 2 0 0 1-1.984 0l-5-2.857A2 2 0 0 1 3.5 13.339v-2.802"></svg:path><svg:path d="M9.552 10.99a2 2 0 0 0 1.896 0L17 8m-6.5 3.5V18"></svg:path><svg:path d="m3.5 7.5l7 4l-3 1l-7-4zm7-4l7 4l2-2l-7-4z"></svg:path></svg:g>`,
})
export class SystemUiconsBoxOpenIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}
