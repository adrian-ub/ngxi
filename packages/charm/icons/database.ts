import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmDatabaseIcon],svg[charm-database-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M8 1.75c-3.75 0-5.25 2-5.25 2v8.5s1.5 2 5.25 2s5.25-2 5.25-2v-8.5s-1.5-2-5.25-2"></svg:path><svg:path d="M2.75 8.25s1.5 2 5.25 2s5.25-2 5.25-2m-10.5-4s1.5 2 5.25 2s5.25-2 5.25-2"></svg:path></svg:g>`,
})
export class CharmDatabaseIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
