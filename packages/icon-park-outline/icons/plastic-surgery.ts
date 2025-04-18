import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlinePlasticSurgeryIcon],svg[icon-park-outline-plastic-surgery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round"><svg:path stroke-linejoin="round" stroke-width="4.667" d="M19.036 44q-1.47-4.794-4.435-7.147c-2.965-2.353-7.676-.89-9.416-3.318s1.219-6.892 2.257-9.526s-3.98-3.566-3.394-4.313q.585-.748 7.609-4.316Q13.652 4 26.398 4C39.144 4 44 14.806 44 21.679s-5.88 14.277-14.256 15.874q-1.123 1.636 3.24 6.447"></svg:path><svg:path stroke-width="4" d="M21.022 4.59q-1.782 7.843 0 12.205c1.782 4.362 9.659 3.692 9.659 7.761c0 4.07-4.59 4.852-3.978 7.676q.613 2.823 2.725 7.324M17 30.55c.235 0 2.4-.138 3.959-1.75q1.558-1.614 1.558-3.8"></svg:path></svg:g>`,
})
export class IconParkOutlinePlasticSurgeryIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
