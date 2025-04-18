import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsNewsFillIcon],svg[lets-icons-news-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.002 9h15.996c-.012-2.175-.108-3.353-.877-4.121C18.243 4 16.828 4 14 4h-4c-2.828 0-4.243 0-5.121.879c-.769.768-.865 1.946-.877 4.121M20 11H4v3c0 2.828 0 4.243.879 5.121C5.757 20 7.172 20 10 20h4c2.828 0 4.243 0 5.121-.879C20 18.243 20 16.828 20 14z" clip-rule="evenodd"></svg:path>`,
})
export class LetsIconsNewsFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
