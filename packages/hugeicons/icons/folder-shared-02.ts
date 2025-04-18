import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsFolderShared02Icon],svg[hugeicons-folder-shared-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.011 6.5h9.772c2.111 0 3.167 0 3.925.506c.329.219.61.5.83.828c.281.42.406.933.462 1.667m-9.978-3l-.635-1.268c-.526-1.05-1.006-2.106-2.172-2.542c-.51-.191-1.093-.191-2.26-.191c-1.82 0-2.73 0-3.414.38a3 3 0 0 0-1.16 1.158C2 4.72 2 5.628 2 7.445V10.5c0 4.715 0 7.072 1.468 8.536c1.302 1.3 3.293 1.447 7.032 1.463h.5m8.158-5.828a1.5 1.5 0 1 0 2.683-1.342a1.5 1.5 0 0 0-2.683 1.342m0 0l-3.316 1.658m0 0a1.5 1.5 0 1 0 0 1.342m0-1.342a1.5 1.5 0 0 1 0 1.342m3.316 1.658a1.5 1.5 0 1 0 2.684 1.342a1.5 1.5 0 0 0-2.684-1.342m0 0l-3.316-1.658" color="currentColor"></svg:path>`,
})
export class HugeiconsFolderShared02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
