import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhCircleselectionIcon],svg[whh-circleselection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M894 447q-15-86-67-159l92-92q88 112 105 251zM577 130V0q139 17 251 105l-92 92q-73-52-159-67m-381-25Q308 17 447 0v130q-86 15-159 67zm1 183q-52 73-67 159H0q17-139 105-251zm0 448l-92 92Q17 716 0 577h130q15 86 67 159m250 158v130q-139-17-251-105l92-92q73 52 159 67m381 25q-112 88-251 105V894q86-15 159-67zm66-342h130q-17 139-105 251l-92-92q52-73 67-159"></svg:path>`,
})
export class WhhCircleselectionIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
