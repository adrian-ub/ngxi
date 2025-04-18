import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineEsportsIcon],svg[streamline-esports-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M12.32 6.536c.638 1.544 1.197 3.545 1.18 4.643c-.024 1.48-.928 2.32-1.857 2.32c-.842-.395-1.858-2.32-2.785-2.32H5.142c-.927 0-1.943 1.925-2.786 2.32c-.928 0-1.832-.84-1.856-2.32c-.018-1.098.542-3.099 1.18-4.643m1.605-5.107v2.785a.93.93 0 0 0 .929.929h5.571a.93.93 0 0 0 .929-.929V1.43l-1.857.928L7 .5L5.142 2.357z"></svg:path><svg:path d="M3.5 8.25a1 1 0 1 0 2 0a1 1 0 1 0-2 0m5 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0"></svg:path></svg:g>`,
})
export class StreamlineEsportsIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
