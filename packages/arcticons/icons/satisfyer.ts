import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSatisfyerIcon],svg[arcticons-satisfyer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="19.733" cy="14.231" r="3.646" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="39.165" cy="26.259" r="3.646" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m9.56 12.95l11.985 11.99c1.332 1.332.122 12.956-6.995 12.956c-8.32-.001-10.05-2.673-10.05-2.673l5.237-5.24c2.873 2.874 6.148-.84 4.655-2.333c-.96-.807-6.514-6.516-6.514-6.516Zm31.794-2.845h-7.963a5.74 5.74 0 0 0-5.033 4.546l-6.1 22.772h7.713l4.489-16.756s.65-3.16 3.158-3.16H43.5Z"></svg:path>`,
})
export class ArcticonsSatisfyerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
