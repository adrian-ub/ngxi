import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinShareSquareIcon],svg[vaadin-share-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 3H7.4S3 2.8 3 7.3C3 10.8 5 14 5 14s-.4-7 2.3-7H11v3l5-5l-5-5z"></svg:path><svg:path fill="currentColor" d="M14 9v6H1V2h9V1H0v15h15V8z"></svg:path>`,
})
export class VaadinShareSquareIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
