import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilFilterXIcon],svg[cil-filter-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M40 16v37.828L109.024 136h41.791L76.896 48H459.51L304 242.388v158.985L241.373 464H240v-96h-32v128h46.627L336 414.627V253.612l160-200V16z"></svg:path><svg:path fill="currentColor" d="m166.403 248.225l60.461-60.462l-22.627-22.628l-60.462 60.462l-60.462-60.462l-22.626 22.628l60.461 60.462l-60.461 60.462l22.626 22.627l60.462-60.462l60.462 60.462l22.627-22.627z"></svg:path>`,
})
export class CilFilterXIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
