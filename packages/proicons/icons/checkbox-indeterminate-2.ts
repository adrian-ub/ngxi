import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsCheckboxIndeterminate2Icon],svg[proicons-checkbox-indeterminate-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="18.5" height="18.5" x="2.75" y="2.75" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" rx="4"></svg:rect><svg:path fill="currentColor" d="M7.113 6.25a.86.86 0 0 0-.863.862v9.775c0 .477.386.863.862.863h9.775a.863.863 0 0 0 .863-.863V7.114a.863.863 0 0 0-.863-.863z"></svg:path></svg:g>`,
})
export class ProiconsCheckboxIndeterminate2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
