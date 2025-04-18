import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psIpadIcon],svg[ps-ipad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M341 0H43Q25 0 12.5 12.5T0 43v426q0 18 12.5 30.5T43 512h298q18 0 30.5-12.5T384 469V43q0-18-12.5-30.5T341 0m0 469H43v-42h298zm0-85H43V107h298zm0-320H43V43h298zM213 448q0-9-6-15q-15-13-30 0q-6 6-6 15t6 15t15 6t15-6t6-15M64 128h43v43H64zm85 0h43v43h-43zm86 0h42v43h-42z"></svg:path>`,
})
export class PsIpadIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}
