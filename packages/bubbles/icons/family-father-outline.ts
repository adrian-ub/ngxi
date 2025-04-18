import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesFamilyFatherOutlineIcon],svg[bubbles-family-father-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.259 3.75a3 3 0 1 0 6 0a3 3 0 0 0-6 0m3 4.5v6m2.25 9l.75-7.5h1.5v-3a4.5 4.5 0 1 0-9 0v3h1.5l.75 7.5zm4.5-12.75a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 0 0-4.5 0m1.048 3.947A3.753 3.753 0 0 1 18.009 18v.75h-1.5l-.75 4.5h-3l-.376-2.256M22.69 1.34a1.9 1.9 0 0 0-2.752 0l-1.179 1.218l-1.178-1.219a1.9 1.9 0 0 0-2.752 0a2.06 2.06 0 0 0 0 2.845l3.512 3.631a.58.58 0 0 0 .837 0l3.512-3.63a2.06 2.06 0 0 0 0-2.846"></svg:path>`,
})
export class BubblesFamilyFatherOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
