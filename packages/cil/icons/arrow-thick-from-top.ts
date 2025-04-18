import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilArrowThickFromTopIcon],svg[cil-arrow-thick-from-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M336 113.375H176v144H56V296l199.8 200L456 296.007v-38.632H336Zm81.361 176L255.826 450.746L94.616 289.375H208v-144h96v144ZM56 17.376h400v32H56z"></svg:path>`,
})
export class CilArrowThickFromTopIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
