import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riWindowsLineIcon],svg[ri-windows-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.001 2.5v19l-18-2v-15zm-2 10.499l-7 .001v5.487l7 .779zm-14 4.71l5 .556V13l-5-.001zm14-6.71V4.735l-7 .777V11zm-9-5.265l-5 .556V11l5 .001z"></svg:path>`,
})
export class RiWindowsLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
