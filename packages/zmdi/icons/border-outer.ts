import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiBorderOuterIcon],svg[zmdi-border-outer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213 85v43h-42V85zm0 86v42h-42v-42zm86 0v42h-43v-42zM0 0h384v384H0zm341 341V43H43v298zm-128-85v43h-42v-43zm-85-85v42H85v-42z"></svg:path>`,
})
export class ZmdiBorderOuterIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}
