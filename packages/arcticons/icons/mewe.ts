import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMeweIcon],svg[arcticons-mewe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.06 28.974c-.32.641-1.07 1.07-1.818 1.07a2.146 2.146 0 0 1-2.14-2.14v-1.39c0-1.177.964-2.14 2.14-2.14s2.14.963 2.14 2.14v.748h-4.28m20.078 1.712c-.322.641-1.07 1.07-1.82 1.07a2.146 2.146 0 0 1-2.139-2.14v-1.39c0-1.177.963-2.14 2.14-2.14s2.139.963 2.139 2.14v.748h-4.279m-1.006-5.776l-2.139 8.558l-2.139-8.558l-2.14 8.558l-2.139-8.558"></svg:path><svg:circle cx="29.937" cy="18.812" r=".75" fill="currentColor"></svg:circle><svg:circle cx="25.508" cy="18.812" r=".75" fill="currentColor"></svg:circle><svg:circle cx="34.366" cy="18.812" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.5 30.043v-8.557l4.279 8.557l4.278-8.557v8.557"></svg:path><svg:circle cx="12.779" cy="18.812" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 42.5h-29c-2.2 0-4-1.8-4-4v-29c0-2.2 1.8-4 4-4h29c2.2 0 4 1.8 4 4v29c0 2.2-1.8 4-4 4"></svg:path>`,
})
export class ArcticonsMeweIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
