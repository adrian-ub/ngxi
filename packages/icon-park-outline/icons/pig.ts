import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlinePigIcon],svg[icon-park-outline-pig-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linejoin="round" stroke-width="4" d="M14.054 9.644a9 9 0 0 1 1.414 1.845a15.95 15.95 0 0 1 8.483-2.426c3.146 0 6.08.906 8.555 2.471c.4-.691.886-1.337 1.44-1.89c2.521-2.516 6.946-3.624 8.991-1.583c2.045 2.04.934 6.456-1.587 8.972a9.4 9.4 0 0 1-2.638 1.824a15.9 15.9 0 0 1 1.24 6.175c0 8.819-7.164 15.968-16 15.968C15.113 41 7.95 33.85 7.95 25.032c0-2.204.447-4.304 1.256-6.214a9.3 9.3 0 0 1-2.556-1.785c-2.522-2.516-3.632-6.932-1.587-8.972s6.47-.933 8.99 1.583Z"></svg:path><svg:ellipse cx="24" cy="29" stroke="currentColor" stroke-width="4" rx="8" ry="7"></svg:ellipse><svg:circle cx="17" cy="18" r="2" fill="currentColor"></svg:circle><svg:circle cx="21" cy="29" r="2" fill="currentColor"></svg:circle><svg:circle cx="31" cy="18" r="2" fill="currentColor"></svg:circle><svg:circle cx="27" cy="29" r="2" fill="currentColor"></svg:circle></svg:g>`,
})
export class IconParkOutlinePigIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
