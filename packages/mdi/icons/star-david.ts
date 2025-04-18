import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiStarDavidIcon],svg[mdi-star-david-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2L9.1 7H3.3l3 5l-3 5h5.8l2.9 5l2.9-5h5.8l-3-5l3-5h-5.8zm0 3l1.2 2h-2.4zM8.2 8.5l-1.1 2l-1.2-2zm1.8 0h4l2 3.5l-2 3.5h-4L8 12zm8 0l-1.2 2l-1.1-2zm-10.9 5l1.1 2H6zm9.8 0l1.2 2h-2.3zM13.3 17L12 19l-1.2-2z"></svg:path>`,
})
export class MdiStarDavidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
