import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignMapDoubleIcon],svg[tdesign-map-double-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.5 1.842l4.574 2.669L17.5 2.25v6.375L22 6.75v12.2l-5.5 3.208l-4.574-2.669L6.5 21.75v-6.375L2 17.25V5.05zm-1 11.366V9.551l5.123-2.989L7.5 4.158L4 6.199v8.051zm5.866-6.652L15.5 8.384V5.25zm5.134 4.236v8.467l2.5-1.458V9.75zm-2 8.467v-8.56L13 9.241v8.56zm-4.5-1.55V9.24l-2.5 1.458v8.051z"></svg:path>`,
})
export class TdesignMapDoubleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
