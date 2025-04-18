import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laKaggleIcon],svg[la-kaggle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.352 4Q10 4 10 4.352v23.293q0 .351.352.351h2.296q.353 0 .354-.351v-4.836l1.809-1.723l5.238 6.664q.212.249.496.25h3.172q.249 0 .283-.143l-.066-.359l-6.91-8.588l6.626-6.412c.123-.128.08-.498-.252-.498h-3.28q-.25.001-.499.252L13 18.975V4.352Q13 4 12.648 4z"></svg:path>`,
})
export class LaKaggleIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
