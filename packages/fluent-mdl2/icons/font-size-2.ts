import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2FontSize2Icon],svg[fluent-mdl2-font-size-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M585 512h143l582 1536h-158l-188-512H343l-184 512H0zm-198 897h529L683 781q-20-53-28-108h-5q-11 56-30 108zM1604 283l-230 230l-90-91l320-320l320 320l-91 91zm-4 587l230-230l90 90l-320 320l-320-320l90-90z"></svg:path>`,
})
export class FluentMdl2FontSize2Icon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
