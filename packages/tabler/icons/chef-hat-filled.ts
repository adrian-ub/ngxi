import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerChefHatFilledIcon],svg[tabler-chef-hat-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 19.002V21a1 1 0 0 1-.883.993L18 22H6a1 1 0 0 1-1-1v-1.994a1 1 0 0 1 1-1l12-.004a1 1 0 0 1 1 1M12 2a5 5 0 0 1 4.533 2.888l.06.137l.136-.009a5 5 0 0 1 4.99 3.477l.063.213a5 5 0 0 1-2.696 5.831l-.087.037v1.428a1 1 0 0 1-1 1l-12 .004a1 1 0 0 1-.993-.883l-.007-.117v-1.433l-.123-.055a5 5 0 0 1-2.6-3.001l-.064-.223a5 5 0 0 1 5.193-6.27l.066-.142a5 5 0 0 1 4.302-2.877z"></svg:path>`,
})
export class TablerChefHatFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
