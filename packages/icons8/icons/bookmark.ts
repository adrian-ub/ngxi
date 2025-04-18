import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icons8BookmarkIcon],svg[icons8-bookmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 5v23l1.594-1.188L16 21.25l7.406 5.563L25 28V5zm2 2h14v17l-6.406-4.813L16 18.75l-.594.438L9 24z"></svg:path>`,
})
export class Icons8BookmarkIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
