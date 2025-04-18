import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentAgents48RegularIcon],svg[fluent-agents-48-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.977 8.5c-.446 0-.859.238-1.082.625l-8.227 14.25a1.25 1.25 0 0 0 0 1.25l7.924 13.726a2.298 2.298 0 0 0 4.202-.524l8.005-28.334A4.798 4.798 0 0 1 35.573 8.4l7.925 13.726a3.75 3.75 0 0 1 0 3.75l-8.228 14.25A3.75 3.75 0 0 1 32.022 42H25.25a1.25 1.25 0 0 1 0-2.5h6.772c.446 0 .859-.238 1.082-.625l8.228-14.25a1.25 1.25 0 0 0 0-1.25L33.407 9.649a2.298 2.298 0 0 0-4.202.524L21.2 38.507a4.798 4.798 0 0 1-8.773 1.094L4.502 25.875a3.75 3.75 0 0 1 0-3.75l8.228-14.25A3.75 3.75 0 0 1 15.977 6h6.773a1.25 1.25 0 1 1 0 2.5z"></svg:path>`,
})
export class FluentAgents48RegularIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
