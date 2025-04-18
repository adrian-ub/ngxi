import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTabNew24RegularIcon],svg[fluent-tab-new-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="M3.142 5.75A2.75 2.75 0 0 1 5.892 3h12.5a2.75 2.75 0 0 1 2.75 2.75v6.365a6.473 6.473 0 0 0-1.5-.754V5.75c0-.69-.56-1.25-1.25-1.25h-12.5c-.69 0-1.25.56-1.25 1.25v12.5c0 .69.56 1.25 1.25 1.25h5.421c.173.534.412 1.037.709 1.5h-6.13a2.75 2.75 0 0 1-2.75-2.75V5.75z" fill="currentColor"></svg:path><svg:path d="M23 17.5a5.5 5.5 0 1 0-11 0a5.5 5.5 0 0 0 11 0zm-5 .5l.001 2.503a.5.5 0 1 1-1 0V18h-2.505a.5.5 0 1 1 0-1H17v-2.5a.5.5 0 1 1 1 0V17h2.503a.5.5 0 1 1 0 1h-2.502z" fill="currentColor"></svg:path></svg:g>`,
})
export class FluentTabNew24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
