import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixFunctionBlockLibraryIcon],svg[ix-function-block-library-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m426.667 277.333l-.001 85.333h42.667V384h-42.667v85.333h-128v-42.667H256v-21.333h42.666v-64H256V320l42.666-.001v-42.666zm-32 32h-64v128h64zm-160.001-10.667v42.667H64v-42.666zM128 64v213.333H85.333V64zm64 21.333v192h-42.667v-192zm64 0v192h-42.667v-192zm68.236 4.506l33.993 166.16h-55.146l-29.27-155.047z"></svg:path>`,
})
export class IxFunctionBlockLibraryIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
