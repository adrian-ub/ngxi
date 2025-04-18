import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirSnapchatIcon],svg[iconoir-snapchat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18 8.75c0-9-12-9-12 0v1.5H4.372c-.583 0-.823.749-.348 1.088L6 12.75c-.333 1.167-1.7 3.7-4.5 4.5c.333.5 1.3 1.5 2.5 1.5l1 1.5l2.5-.5c.833.667 2.9 2 4.5 2s3.667-1.333 4.5-2l2.5.5l1-1.5c1.2 0 2.167-1 2.5-1.5c-2.8-.8-4.167-3.333-4.5-4.5l1.976-1.412c.475-.339.235-1.088-.348-1.088H18z"></svg:path>`,
})
export class IconoirSnapchatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
