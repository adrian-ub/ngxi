import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMegalodonIcon],svg[arcticons-megalodon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.897 38.244C10.051 21.172 16.446 8.79 24 8.79c8.023 0 13.243 10.047 14.542 31.044"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.519 45.232c.456-13.052 2.467-24.208 5.291-30.622"></svg:path><svg:ellipse cx="25.227" cy="23.154" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="3.261" ry="2.256" transform="rotate(-80.266 25.228 23.154)"></svg:ellipse><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.634 21.264c-2.536 3.614-2.824 8.682-2.824 13.792c1.403-4.416 2.316-6.564 4.283-7.684"></svg:path><svg:circle cx="25.326" cy="23.904" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m35.014 22.254l.327.227m-2.43 8.481l.243.001m-.068-1.728l.447.087m-.285-1.582l.733.138m-.459-1.597l.66.183m-.265-1.63l.625.171m-.139-1.497l.616.221"></svg:path>`,
})
export class ArcticonsMegalodonIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
