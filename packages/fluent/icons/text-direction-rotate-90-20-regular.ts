import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextDirectionRotate9020RegularIcon],svg[fluent-text-direction-rotate-90-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="M17 6.5a.5.5 0 0 0-.324-.468l-8-3a.5.5 0 1 0-.351.936L11 4.972v3.057L8.325 9.032a.5.5 0 0 0 .35.936l8-3A.5.5 0 0 0 17 6.5zm-1.924 0L12 7.654V5.347L15.076 6.5z" fill="currentColor"></svg:path><svg:path d="M5 3.5a.5.5 0 0 1 1 0v11.793l1.146-1.146a.5.5 0 1 1 .708.707l-2 2a.498.498 0 0 1-.351.146h-.006a.498.498 0 0 1-.35-.146l-2-2a.5.5 0 1 1 .707-.707L5 15.293V3.5z" fill="currentColor"></svg:path><svg:path d="M13 10.5a.5.5 0 1 1 1 0v4.793l1.146-1.146a.5.5 0 0 1 .708.707l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.707L13 15.293V10.5z" fill="currentColor"></svg:path></svg:g>`,
})
export class FluentTextDirectionRotate9020RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
