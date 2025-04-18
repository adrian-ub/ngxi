import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixCheckboxesFilledIcon],svg[ix-checkboxes-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M362.667 64H64v298.667h42.667v-256h256zM448 149.333H149.333V448H448zm-80.659 61.44l33.318 26.654l-119.994 144.659l-80.658-68.794l26.653-33.317l47.324 42.152z" clip-rule="evenodd"></svg:path>`,
})
export class IxCheckboxesFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
