import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsGraduationScrollIcon],svg[hugeicons-graduation-scroll-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M21.16 9.928c1.033-.386 1.126-2.235.209-4.129c-.918-1.893-2.498-3.114-3.53-2.727m3.322 6.856c-1.032.387-2.612-.834-3.53-2.727c-.917-1.894-.824-3.743.208-4.13m3.322 6.857l-15 9c-1.032.387-2.612-.834-3.53-2.727c-.917-1.894-.824-3.743.208-4.13l15-9"></svg:path><svg:path d="M15 13.607c-1.362-.573-4.077-2.657-4.043-6.406m.543 8.5c-1.167-.557-3.6-2.623-4-6.432M15.43 14c.598 1.13 1.209 4.112-.88 7l-.987-1.416L11 20.81s1.825-1.923.953-4.81"></svg:path></svg:g>`,
})
export class HugeiconsGraduationScrollIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
