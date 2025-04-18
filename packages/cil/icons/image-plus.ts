import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilImagePlusIcon],svg[cil-image-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M336 72V40H40v432h432V184h-32v25.68l-64.769-64.77L306 214.142l-100-100l-134 134V72Zm39.231 118.166L440 254.935v93.207L328.628 236.769ZM206 159.4l234 234V440H72V293.4Z"></svg:path><svg:path fill="currentColor" d="M448 16h-32v48h-48v32h48v48h32V96h48V64h-48z"></svg:path>`,
})
export class CilImagePlusIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
