import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiHeadingOneSolidIcon],svg[mynaui-heading-one-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.75 3.75a.75.75 0 0 1 .75.75v6.75h8V4.5a.75.75 0 0 1 1.5 0v15a.75.75 0 0 1-1.5 0v-6.75h-8v6.75a.75.75 0 0 1-1.5 0v-15a.75.75 0 0 1 .75-.75m16.077 5.075a.75.75 0 0 1 .423.675v10a.75.75 0 0 1-1.5 0v-8.45l-1.785 1.413a.75.75 0 1 1-.93-1.176l3-2.375a.75.75 0 0 1 .792-.087"></svg:path>`,
})
export class MynauiHeadingOneSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
