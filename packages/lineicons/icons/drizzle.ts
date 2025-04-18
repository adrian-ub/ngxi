import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsDrizzleIcon],svg[lineicons-drizzle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.46 11.852a.863.863 0 0 0-.328-1.185a.886.886 0 0 0-1.198.333l-2.819 4.918a.863.863 0 0 0 .329 1.185a.886.886 0 0 0 1.198-.332zm6.076-3.771a.863.863 0 0 0-.328-1.185a.886.886 0 0 0-1.199.332l-2.818 4.919a.863.863 0 0 0 .328 1.185A.886.886 0 0 0 9.718 13zm9.349 0a.863.863 0 0 0-.329-1.185a.886.886 0 0 0-1.198.332l-2.819 4.919a.863.863 0 0 0 .329 1.185a.886.886 0 0 0 1.198-.332zm-6.078 3.771a.863.863 0 0 0-.328-1.185a.886.886 0 0 0-1.199.333l-2.818 4.918a.863.863 0 0 0 .328 1.185a.886.886 0 0 0 1.199-.332z"></svg:path>`,
})
export class LineiconsDrizzleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
