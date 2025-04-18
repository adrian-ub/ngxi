import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageArchiveDrawerIcon],svg[mage-archive-drawer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M19.194 9.079V7.821c0-.538-.216-1.054-.602-1.434a2.07 2.07 0 0 0-1.453-.594H6.86a2.07 2.07 0 0 0-1.453.594c-.386.38-.602.896-.602 1.434V9.08"></svg:path><svg:path d="M6.861 5.793V4.779c0-.538.217-1.054.602-1.435a2.07 2.07 0 0 1 1.454-.594h6.166a2.07 2.07 0 0 1 1.454.594c.385.38.602.897.602 1.435v1.014m.781 3.043H6.08c-1.84 0-3.33 1.47-3.33 3.286v5.842c0 1.815 1.49 3.286 3.33 3.286h11.84c1.84 0 3.33-1.471 3.33-3.286v-5.842c0-1.815-1.49-3.286-3.33-3.286"></svg:path><svg:path d="M7.889 12.893v1.014c0 .538.216 1.054.602 1.434c.385.38.908.594 1.453.594h4.112a2.07 2.07 0 0 0 1.453-.594c.386-.38.602-.896.602-1.434v-1.014"></svg:path></svg:g>`,
})
export class MageArchiveDrawerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
