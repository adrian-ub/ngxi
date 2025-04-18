import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[etBookOpenIcon],svg[et-book-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M37.5 1h-16c-.397 0-.74.136-1 .362a1.5 1.5 0 0 0-1-.362h-16C2.631 1 2 1.631 2 2.5v28c0 .869.631 1.5 1.5 1.5h16c.397 0 .74-.136 1-.362c.26.226.603.362 1 .362h16c.869 0 1.5-.631 1.5-1.5v-28c0-.869-.631-1.5-1.5-1.5m-18 30h-16c-.313 0-.5-.187-.5-.5v-28c0-.313.187-.5.5-.5h16c.313 0 .5.187.5.5v28c0 .313-.187.5-.5.5m18.5-.5c0 .313-.187.5-.5.5h-16c-.313 0-.5-.187-.5-.5v-28c0-.313.187-.5.5-.5h16c.313 0 .5.187.5.5zM40.5 3a.5.5 0 0 0-.5.5v26a.5.5 0 0 0 1 0v-26a.5.5 0 0 0-.5-.5M.5 30a.5.5 0 0 0 .5-.5v-26a.5.5 0 0 0-1 0v26a.5.5 0 0 0 .5.5"></svg:path><svg:path d="M17.5 10h-12a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1m0 4h-12a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1m0-8h-12a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1m0 12h-12a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1m0 4h-12a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1m0 4h-12a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1m18-16h-12a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1m0 4h-12a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1m0-8h-12a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1m0 12h-12a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1m0 4h-12a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1m0 4h-12a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1"></svg:path></svg:g>`,
})
export class EtBookOpenIcon {
  readonly viewBox = input("0 0 42 32")
  readonly width = input("1.32em")
  readonly height = input("1em")
}
