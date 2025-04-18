import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUserFullViewIcon],svg[hugeicons-user-full-view-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 5c0 1.657-1.758 3.5-3 3.5S9 6.657 9 5a3 3 0 1 1 6 0m1.042 4c1.522 1.335 2.51 3.597 1.623 5.705c-.19.454-.629.749-1.114.749c-.492 0-1.302-.158-1.46.483l-1.097 4.475A2.064 2.064 0 0 1 12 22a2.064 2.064 0 0 1-1.994-1.588l-1.098-4.475c-.157-.641-.967-.483-1.46-.483c-.484 0-.922-.295-1.113-.749c-.886-2.108.1-4.37 1.624-5.705" color="currentColor"></svg:path>`,
})
export class HugeiconsUserFullViewIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
