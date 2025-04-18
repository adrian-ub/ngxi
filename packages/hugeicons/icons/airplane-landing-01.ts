import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsAirplaneLanding01Icon],svg[hugeicons-airplane-landing-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.001 19.998h16M3.697 4.042c-.618.168-.69.876-.87 1.476c-.15.564-.468 1.812-.685 2.665c-.161.755-.183 1.055-.087 1.535c.226.9 1.006 1.254 2.686 1.722c.845.216 1.44.397 2.34.637c.154.05.635.17 1.02.275c.36.126.66.09.593.366c-.047.11-.59.72-1.095 1.26c-.338.42-.566.522-.566.84c0 0-.012.48.66.54c.108.06 1.548.42 2.088.576c.72.18 1.26-.036 1.704-.336l2.196-1.44c.48-.216.6-.125 1.14.019l4.8 1.3c.84.3 1.56-.42 1.349-1.26c-.269-1.5-.749-2.4-1.529-3.36a6.58 6.58 0 0 0-3.9-2.28c-.504-.088-2.398-.238-4.2-.371c-1.848-.137-3.6-.257-3.66-.348c-1.32-.3-.912-2.238-1.476-3.084c-.224-.336-.624-.396-1.224-.576c-.508-.13-.885-.265-1.284-.156" color="currentColor"></svg:path>`,
})
export class HugeiconsAirplaneLanding01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
