import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonSkipForwardSolidFilledIcon],svg[carbon-skip-forward-solid-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2m2.486 14.874l-9 5A1 1 0 0 1 8 21V11a1 1 0 0 1 1.486-.874l9 5a1 1 0 0 1 0 1.748M24 22h-2V10h2Z"></svg:path><svg:path fill="none" d="M22 10h2v12h-2zM8.493 21.862A1 1 0 0 1 8 21V11a1 1 0 0 1 1.486-.874l9 5a1 1 0 0 1 0 1.748l-9 5a1 1 0 0 1-.993-.012"></svg:path>`,
})
export class CarbonSkipForwardSolidFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
