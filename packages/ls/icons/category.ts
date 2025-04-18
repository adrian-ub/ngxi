import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsCategoryIcon],svg[ls-category-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M83 0L28 56h496L469 0zm468 276H0V83h551zm-165-55v-55H166v55h27v-28h165v28zm165 276H0V304h551zm-165-55v-56H166v56h27v-28h165v28zm165 275H0V525h551zm-165-55v-55H166v55h27v-28h165v28z"></svg:path>`,
})
export class LsCategoryIcon {
  readonly viewBox = input("0 0 551 717")
  readonly width = input("0.77em")
  readonly height = input("1em")
}
