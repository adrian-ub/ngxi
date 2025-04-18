import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentNext28RegularIcon],svg[fluent-next-28-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23.5 3.75a.75.75 0 0 1 1.5 0v20.5a.75.75 0 0 1-1.5 0zM3 5.254C3 3.438 5.041 2.37 6.533 3.406l12.504 8.68a2.25 2.25 0 0 1 .013 3.688l-12.504 8.81C5.056 25.634 3 24.57 3 22.745zm2.678-.616a.75.75 0 0 0-1.178.616v17.491a.75.75 0 0 0 1.182.613l12.504-8.81a.75.75 0 0 0-.004-1.23z"></svg:path>`,
})
export class FluentNext28RegularIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
